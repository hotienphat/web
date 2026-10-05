// ============================================
// DATA CONFIGURATION MOVED TO data.js
// ============================================

// ============================================
// GLOBAL STATE
// ============================================
let currentTrackIndex = 0;
let currentLyricIndex = -1;
let audioPlayer;
let audioContext, analyser, sourceNode, dataArray;
let isVisualizerInitialized = false;
let circularVisualizerCanvas, circularVisualizerCtx, circularRafId;

// Music player DOM refs
let playPauseMusicBtn, stopMusicBtn, musicProgressBar, albumArtElement;
let currentTimeEl, durationEl, songTitleEl, songArtistEl;
let volumeBtn, volumeSlider, prevTrackBtn, nextTrackBtn;
let lyricsOverlay, currentLyricEl, nextLyricEl, nowPlayingIndicator;
let isLyricsEnabled = true;

// Search
let searchInput, suggestionsDropdown, searchKeywords = [];
let activeSuggestionIndex = -1;

// ============================================
// PARTICLE SYSTEM
// ============================================
class ParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        // Disable if user prefers reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.canvas.style.display = 'none';
            return;
        }

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.particleCount = window.innerWidth < 768 ? 25 : 100;
        this.connectionDistance = 160;
        this.rafId = null;

        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        this.init();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 1.0, // Tăng tốc độ bay
                vy: (Math.random() - 0.5) * 1.0,
                radius: Math.random() * 2 + 1, // Kích thước hạt to hơn chút
                opacity: Math.random() * 0.7 + 0.3,
                color: Math.random() > 0.6 ? '34, 197, 94' : (Math.random() > 0.3 ? '74, 222, 128' : '132, 204, 22')
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around edges
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
            this.ctx.fill();

            // Draw connections
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.connectionDistance) {
                    const lineOpacity = (1 - dist / this.connectionDistance) * 0.3; // Rõ đường nối hơn
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    // Dùng màu mix giữa 2 hạt cho đường nối
                    this.ctx.strokeStyle = `rgba(168, 85, 247, ${lineOpacity})`;
                    this.ctx.lineWidth = 0.8;
                    this.ctx.stroke();
                }
            }

            // Mouse interaction — gentle push
            const mdx = p.x - this.mouseX;
            const mdy = p.y - this.mouseY;
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mDist < 100) {
                const force = (100 - mDist) / 100 * 0.02;
                p.vx += mdx * force;
                p.vy += mdy * force;
            }

            // Dampen velocity
            p.vx *= 0.99;
            p.vy *= 0.99;
        }

        this.rafId = requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// CURSOR TRAIL
// ============================================
class CursorTrail {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        // Disable on touch devices or if prefers reduced motion
        if ('ontouchstart' in window || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.canvas.style.display = 'none';
            return;
        }

        this.ctx = this.canvas.getContext('2d');
        this.points = [];
        this.maxPoints = 20;
        this.rafId = null;

        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.points.push({ x: e.clientX, y: e.clientY, life: 1 });
            if (this.points.length > this.maxPoints) this.points.shift();
        });

        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.points.length; i++) {
            const p = this.points[i];
            p.life -= 0.04;
            if (p.life <= 0) {
                this.points.splice(i, 1);
                i--;
                continue;
            }

            const size = p.life * 4;
            const opacity = p.life * 0.5;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(52, 211, 153, ${opacity})`;
            this.ctx.fill();
        }

        this.rafId = requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-element, .reveal-left, .reveal-right, .reveal-stagger');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ============================================
// TYPEWRITER EFFECT
// ============================================
function typewriterEffect(elementId, texts, speed = 60, pause = 2000) {
    const el = document.getElementById(elementId);
    if (!el) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let cursorSpan = el.querySelector('.typewriter-cursor');

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        // Update text content, keep cursor
        el.textContent = currentText.substring(0, charIndex);
        if (cursorSpan) {
            cursorSpan = document.createElement('span');
            cursorSpan.className = 'typewriter-cursor';
        }
        el.appendChild(cursorSpan);

        let nextDelay = isDeleting ? speed / 2 : speed;

        if (!isDeleting && charIndex === currentText.length) {
            nextDelay = pause;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            nextDelay = 300;
        }

        setTimeout(type, nextDelay);
    }

    // Start after a delay for hero animation (reduced for faster loading)
    setTimeout(type, 800);
}

// ============================================
// 3D TILT EFFECT
// ============================================
function init3DTilt() {
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.shortcut-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            const dx = e.clientX - cardCenterX;
            const dy = e.clientY - cardCenterY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 300) {
                const rotateX = -(dy / 20);
                const rotateY = dx / 20;
                const intensity = Math.max(0, 1 - dist / 300);
                card.style.transform = `perspective(800px) rotateX(${rotateX * intensity}deg) rotateY(${rotateY * intensity}deg) translateY(-4px)`;

                // Update radial gradient position for spotlight
                const relX = ((e.clientX - rect.left) / rect.width) * 100;
                const relY = ((e.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--mouse-x', relX + '%');
                card.style.setProperty('--mouse-y', relY + '%');
            } else {
                card.style.transform = '';
            }
        });
    });

    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
        document.querySelectorAll('.shortcut-card').forEach(card => {
            card.style.transform = '';
        });
    });
}

// ============================================
// RIPPLE EFFECT
// ============================================
function addRipple(e) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

// ============================================
// 144Hz BUTTERY SMOOTH GSAP SNAP CONTROLLER
// ============================================
function initSmoothSnapScroll() {
    const pageContent = document.getElementById('page-content');
    if (!pageContent) return;

    const sections = Array.from(document.querySelectorAll('.snap-section'));
    if (sections.length === 0) return;

    let isAnimating = false;
    let currentSectionIndex = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    // Detect section based on current scroll position
    function getNearestSectionIndex() {
        const scrollY = pageContent.scrollTop;
        const vh = window.innerHeight;
        return Math.min(Math.max(Math.round(scrollY / vh), 0), sections.length - 1);
    }

    currentSectionIndex = getNearestSectionIndex();

    // Smooth navigation with GSAP (144fps interpolation)
    function goToSection(index, duration = 0.85) {
        if (index < 0 || index >= sections.length) return;
        if (isAnimating) return;

        isAnimating = true;
        currentSectionIndex = index;
        const targetY = sections[index].offsetTop;

        if (window.gsap) {
            gsap.to(pageContent, {
                scrollTop: targetY,
                duration: duration,
                ease: "power2.out",
                overwrite: "auto",
                onUpdate: () => {
                    handleScrollMorph(pageContent.scrollTop);
                },
                onComplete: () => {
                    setTimeout(() => {
                        isAnimating = false;
                    }, 120);
                    updateActiveNav(currentSectionIndex);
                }
            });
        } else {
            pageContent.scrollTo({
                top: targetY,
                behavior: 'smooth'
            });
            setTimeout(() => {
                isAnimating = false;
                updateActiveNav(currentSectionIndex);
            }, 600);
        }
    }

    // Intercept wheel events completely to eliminate 144Hz browser snap stutter
    window.addEventListener('wheel', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.target.closest('#playerPanel')) return; // Allow smooth scrolling inside playlist drawer

        e.preventDefault();
        if (isAnimating) return;

        if (Math.abs(e.deltaY) < 25) return;

        if (e.deltaY > 0) {
            if (currentSectionIndex < sections.length - 1) {
                goToSection(currentSectionIndex + 1);
            }
        } else {
            if (currentSectionIndex > 0) {
                goToSection(currentSectionIndex - 1);
            }
        }
    }, { passive: false });

    // Touch support (Mobile & Tablet)
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
        if (isAnimating) return;
        const touchEndY = e.changedTouches[0].clientY;
        const diffY = touchStartY - touchEndY;
        const duration = Date.now() - touchStartTime;

        if (Math.abs(diffY) > 40 && duration < 600) {
            if (diffY > 0) {
                if (currentSectionIndex < sections.length - 1) {
                    goToSection(currentSectionIndex + 1);
                }
            } else {
                if (currentSectionIndex > 0) {
                    goToSection(currentSectionIndex - 1);
                }
            }
        }
    }, { passive: true });

    // Keyboard navigation (Arrow keys, Space, PageUp/Down)
    window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
            e.preventDefault();
            goToSection(currentSectionIndex + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
            e.preventDefault();
            goToSection(currentSectionIndex - 1);
        } else if (e.key === 'Home') {
            e.preventDefault();
            goToSection(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            goToSection(sections.length - 1);
        }
    });

    // Wire up Floating Nav Links
    const navLinks = document.querySelectorAll('.header-nav .nav-link, .header-brand');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetHref = link.getAttribute('href');
            if (targetHref && targetHref.startsWith('#')) {
                e.preventDefault();
                const targetSec = document.querySelector(targetHref);
                if (targetSec) {
                    const idx = sections.indexOf(targetSec);
                    if (idx !== -1) {
                        goToSection(idx);
                    }
                }
            }
        });
    });

    // Wire up Scroll Down indicators
    const scrollDownBtn = document.querySelector('.hero-bottom-right, .scroll-vertical-indicator, .scroll-indicator');
    if (scrollDownBtn) {
        scrollDownBtn.style.cursor = 'pointer';
        scrollDownBtn.addEventListener('click', () => {
            goToSection(1);
        });
    }

    // Update active nav styling
    function updateActiveNav(idx) {
        if (sections[idx]) {
            const secId = sections[idx].getAttribute('id');
            document.querySelectorAll('.header-nav .nav-link').forEach(link => {
                const href = link.getAttribute('href');
                link.classList.toggle('active', href === `#${secId}`);
            });
        }
    }

    // Scroll Morphing (linked continuously to 144fps scroll)
    function handleScrollMorph(scrollY) {
        const heroCutout = document.getElementById('heroCutoutImg');
        const circleWrapper = document.getElementById('avatarCircleWrapper');
        const header = document.getElementById('main-header');
        const vh = window.innerHeight;

        if (header) {
            header.classList.toggle('scrolled', scrollY > 50);
        }

        if (scrollY < vh * 1.5) {
            const progress = Math.min(Math.max(scrollY / vh, 0), 1);
            if (heroCutout) {
                const scale = 1 - progress * 0.45;
                const translateY = progress * 60;
                const opacity = Math.max(1 - progress * 1.3, 0);
                heroCutout.style.transform = `scale(${scale}) translateY(${translateY}px)`;
                heroCutout.style.opacity = opacity;
            }
            if (circleWrapper) {
                const circScale = 0.8 + progress * 0.2;
                const circOpacity = Math.min(progress * 1.6, 1);
                circleWrapper.style.transform = `scale(${circScale})`;
                circleWrapper.style.opacity = circOpacity;
            }
        }
    }

    handleScrollMorph(pageContent.scrollTop);
    updateActiveNav(currentSectionIndex);

    pageContent.addEventListener('scroll', () => {
        handleScrollMorph(pageContent.scrollTop);
        if (!isAnimating) {
            currentSectionIndex = getNearestSectionIndex();
            updateActiveNav(currentSectionIndex);
        }
    }, { passive: true });

    window.goToSection = goToSection;
}

// ============================================
// RENDER SHORTCUTS
// ============================================
function renderShortcuts() {
    const container = document.getElementById('shortcutsContainer');
    if (!container) return;
    container.innerHTML = '';

    shortcutSections.forEach((section, sIndex) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'shortcuts-group reveal-element';

        const titleEl = document.createElement('h3');
        titleEl.className = 'shortcuts-group-title';
        titleEl.textContent = section.title;
        groupDiv.appendChild(titleEl);

        const gridDiv = document.createElement('div');
        gridDiv.className = 'shortcuts-grid reveal-stagger';

        section.shortcuts.forEach(shortcut => {
            const link = document.createElement('a');
            link.href = shortcut.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.className = 'shortcut-card';
            link.addEventListener('click', addRipple);

            const iconEl = document.createElement('i');
            const prefix = shortcut.iconPrefixOverride || section.iconPrefix || 'fas';
            iconEl.className = `${prefix} fa-${shortcut.icon} shortcut-card-icon`;
            link.appendChild(iconEl);

            const nameSpan = document.createElement('span');
            nameSpan.className = 'shortcut-card-name';
            nameSpan.textContent = shortcut.name;
            link.appendChild(nameSpan);

            gridDiv.appendChild(link);
        });

        groupDiv.appendChild(gridDiv);
        container.appendChild(groupDiv);
    });
}

// ============================================
// SEARCH SUGGESTIONS
// ============================================
function generateSearchKeywords() {
    const keywords = new Set();
    shortcutSections.forEach(section => {
        keywords.add(section.title.toLowerCase());
        section.shortcuts.forEach(s => keywords.add(s.name.toLowerCase()));
    });
    keywords.add("về bản thân"); keywords.add("thông tin cá nhân");
    keywords.add("ủng hộ"); keywords.add("donate");
    keywords.add("momo"); keywords.add("ngân hàng");
    keywords.add("liên hệ"); keywords.add("nhạc"); keywords.add("music player");
    audioPlaylist.forEach(song => { if (song.title) keywords.add(song.title.toLowerCase()); });
    keywords.add("trang cá nhân"); keywords.add("hồ tiến phát");
    searchKeywords = Array.from(keywords);
}

function displaySuggestions() {
    const val = searchInput.value.toLowerCase().trim();
    suggestionsDropdown.innerHTML = '';
    activeSuggestionIndex = -1;
    if (!val.length) { suggestionsDropdown.classList.add('hidden'); return; }

    const filtered = searchKeywords.filter(k => k.includes(val));
    if (filtered.length) {
        filtered.slice(0, 7).forEach(s => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.textContent = s;
            item.addEventListener('click', () => {
                searchInput.value = s;
                suggestionsDropdown.classList.add('hidden');
            });
            suggestionsDropdown.appendChild(item);
        });
        suggestionsDropdown.classList.remove('hidden');
    } else {
        suggestionsDropdown.classList.add('hidden');
    }
}

function handleSuggestionKeyboardNav(e) {
    const items = suggestionsDropdown.querySelectorAll('.suggestion-item');
    if (!items.length || suggestionsDropdown.classList.contains('hidden')) {
        if (e.key === 'Enter') performSearch();
        return;
    }
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeSuggestionIndex = (activeSuggestionIndex + 1) % items.length;
        updateActiveSuggestion(items);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeSuggestionIndex = (activeSuggestionIndex - 1 + items.length) % items.length;
        updateActiveSuggestion(items);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeSuggestionIndex > -1 && items[activeSuggestionIndex]) {
            searchInput.value = items[activeSuggestionIndex].textContent;
        }
        performSearch();
        suggestionsDropdown.classList.add('hidden');
    } else if (e.key === 'Escape') {
        suggestionsDropdown.classList.add('hidden');
    }
}

function updateActiveSuggestion(items) {
    items.forEach(i => i.classList.remove('active-suggestion'));
    if (activeSuggestionIndex > -1 && items[activeSuggestionIndex]) {
        items[activeSuggestionIndex].classList.add('active-suggestion');
        items[activeSuggestionIndex].scrollIntoView({ block: 'nearest' });
    }
}

function performSearch() {
    if (!searchInput) return;
    const raw = searchInput.value.trim();
    if (!raw) return;
    const query = raw.toLowerCase();

    // Internal section mappings
    const sectionMap = [
        { keys: ["về bản thân", "about", "hồ tiến phát", "fot", "thông tin cá nhân"], target: "#about-section" },
        { keys: ["dự án", "project", "projects", "random", "tạo khung", "giám thị"], target: "#projects-section" },
        { keys: ["cây 3d", "3d", "tree", "threejs", "bonsai", "mùa"], target: "#tree-3d-section" },
        { keys: ["liên kết", "link", "shortcuts", "bento", "mạng xã hội", "giải trí"], target: "#shortcuts-section" },
        { keys: ["ủng hộ", "donate", "momo", "ngân hàng", "viettinbank", "stk"], target: "#donate-section" },
        { keys: ["liên hệ", "contact", "email", "tin nhắn"], target: "#contact-section" }
    ];

    const match = sectionMap.find(m => m.keys.some(k => query.includes(k)));
    if (match) {
        const el = document.querySelector(match.target);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            if (suggestionsDropdown) suggestionsDropdown.classList.add('hidden');
            return;
        }
    }

    // Shortcut URLs matching
    if (typeof shortcutSections !== 'undefined') {
        for (const sec of shortcutSections) {
            const found = sec.shortcuts.find(s => s.name.toLowerCase() === query);
            if (found) {
                window.open(found.url, '_blank');
                if (suggestionsDropdown) suggestionsDropdown.classList.add('hidden');
                return;
            }
        }
    }

    // Default to Google search
    window.open(`https://www.google.com/search?q=${encodeURIComponent(raw)}`, '_blank');
    if (suggestionsDropdown) suggestionsDropdown.classList.add('hidden');
}

function initSearchSuggestions() {
    searchInput = document.getElementById('searchInput');
    suggestionsDropdown = document.getElementById('suggestionsDropdown');
    if (!searchInput || !suggestionsDropdown) return;

    generateSearchKeywords();
    searchInput.addEventListener('input', displaySuggestions);
    searchInput.addEventListener('keydown', handleSuggestionKeyboardNav);
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsDropdown.contains(e.target)) {
            suggestionsDropdown.classList.add('hidden');
        }
    });
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.length > 0) displaySuggestions();
    });
}

// ============================================
// MUSIC PLAYER
// ============================================
function initMusicPlayer() {
    audioPlayer = new Audio();
    // Removed crossOrigin="anonymous" to fix local file:// playback

    playPauseMusicBtn = document.getElementById('playPauseMusicBtn');
    stopMusicBtn = document.getElementById('stopMusicBtn');
    musicProgressBar = document.getElementById('musicProgressBar');
    albumArtElement = document.getElementById('albumArt');
    currentTimeEl = document.getElementById('currentTime');
    durationEl = document.getElementById('durationTime');
    songTitleEl = document.getElementById('songTitle');
    songArtistEl = document.getElementById('songArtist');
    volumeBtn = document.getElementById('volumeBtn');
    volumeSlider = document.getElementById('volumeSlider');
    prevTrackBtn = document.getElementById('prevTrackBtn');
    nextTrackBtn = document.getElementById('nextTrackBtn');
    lyricsOverlay = document.getElementById('lyricsOverlay');
    currentLyricEl = document.getElementById('currentLyric');
    nextLyricEl = document.getElementById('nextLyric');

    // Docked Tab & Slide-Out Drawer Logic
    const playerDockBtn = document.getElementById('playerDockBtn');
    const playerDrawerBackdrop = document.getElementById('playerDrawerBackdrop');
    const playerPanel = document.getElementById('playerPanel');
    const closePlayerBtn = document.getElementById('closePlayerBtn');
    const toggleLyricsBtn = document.getElementById('toggleLyricsBtn');
    const closeLyricsBtn = document.getElementById('closeLyricsBtn');

    if (playerDockBtn && playerPanel) {
        playerDockBtn.addEventListener('click', () => {
            playerPanel.classList.toggle('open');
            if (playerDrawerBackdrop) playerDrawerBackdrop.classList.toggle('open');
        });
    }
    if (closePlayerBtn && playerPanel) {
        closePlayerBtn.addEventListener('click', () => {
            playerPanel.classList.remove('open');
            if (playerDrawerBackdrop) playerDrawerBackdrop.classList.remove('open');
        });
    }
    if (playerDrawerBackdrop && playerPanel) {
        playerDrawerBackdrop.addEventListener('click', () => {
            playerPanel.classList.remove('open');
            playerDrawerBackdrop.classList.remove('open');
        });
    }
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && playerPanel && playerPanel.classList.contains('open')) {
            playerPanel.classList.remove('open');
            if (playerDrawerBackdrop) playerDrawerBackdrop.classList.remove('open');
        }
    });

    nowPlayingIndicator = document.getElementById('nowPlayingIndicator');

    const essentials = [playPauseMusicBtn, stopMusicBtn, musicProgressBar, albumArtElement,
        currentTimeEl, durationEl, songTitleEl, songArtistEl, volumeBtn, volumeSlider,
        prevTrackBtn, nextTrackBtn, lyricsOverlay, currentLyricEl, nextLyricEl];

    if (essentials.some(el => !el)) {
        console.error("Missing music player DOM elements!");
        return;
    }

    renderPlaylist();
    loadTrack(currentTrackIndex);
    setVolume();

    playPauseMusicBtn.addEventListener('click', togglePlayPause);
    stopMusicBtn.addEventListener('click', stopAudio);
    musicProgressBar.addEventListener('input', seekAudio);

    audioPlayer.addEventListener('timeupdate', () => {
        updateProgressBar();
        if (audioPlayer) updateLyrics(audioPlayer.currentTime);
    });
    audioPlayer.addEventListener('loadedmetadata', setAudioDuration);
    audioPlayer.addEventListener('ended', playNextTrack);
    audioPlayer.addEventListener('play', () => {
        updatePlayPauseIcon();
        if (albumArtElement) {
            albumArtElement.classList.add('spinning');
            albumArtElement.classList.remove('paused');
        }
        if (nowPlayingIndicator) nowPlayingIndicator.classList.add('active');
        updatePlaylistUI();
    });
    audioPlayer.addEventListener('pause', () => {
        updatePlayPauseIcon();
        if (albumArtElement) albumArtElement.classList.add('paused');
        if (nowPlayingIndicator && audioPlayer.currentTime === 0) nowPlayingIndicator.classList.remove('active');
        updatePlaylistUI();
    });

    volumeSlider.addEventListener('input', setVolume);
    volumeBtn.addEventListener('click', toggleMute);
    prevTrackBtn.addEventListener('click', playPrevTrack);
    nextTrackBtn.addEventListener('click', playNextTrack);
    updateTrackButtonsState();
    updateVolumeIcon();

    // Toggle Lyrics Button
    if (toggleLyricsBtn) {
        toggleLyricsBtn.addEventListener('click', () => {
            isLyricsEnabled = !isLyricsEnabled;
            updateLyricsIcon();
            if (audioPlayer) updateLyrics(audioPlayer.currentTime);
        });
    }

    // Close Lyrics Button
    if (closeLyricsBtn) {
        closeLyricsBtn.addEventListener('click', () => {
            isLyricsEnabled = false;
            updateLyricsIcon();
            if (audioPlayer) updateLyrics(audioPlayer.currentTime);
        });
    }
}

function renderPlaylist() {
    const playlistList = document.getElementById('playlistList');
    if (!playlistList || !audioPlaylist || audioPlaylist.length === 0) return;

    playlistList.innerHTML = audioPlaylist.map((song, idx) => {
        const isActive = idx === currentTrackIndex;
        const trackNum = (idx + 1).toString().padStart(2, '0');
        return `
            <div class="playlist-item ${isActive ? 'active' : ''}" data-index="${idx}">
                <span class="playlist-item-idx">${trackNum}</span>
                <img src="${song.albumArt || './assets/avt.png'}" alt="${song.title}" class="playlist-item-thumb">
                <div class="playlist-item-info">
                    <div class="playlist-item-title">${song.title}</div>
                    <div class="playlist-item-artist">${song.artist}</div>
                </div>
                <div class="playlist-item-wave ${isActive && audioPlayer && !audioPlayer.paused ? 'playing' : ''}">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
    }).join('');

    playlistList.querySelectorAll('.playlist-item').forEach(item => {
        item.addEventListener('click', () => {
            const idx = parseInt(item.getAttribute('data-index'), 10);
            if (!isNaN(idx)) {
                if (idx === currentTrackIndex && audioPlayer && !audioPlayer.paused) {
                    togglePlayPause();
                } else {
                    currentTrackIndex = idx;
                    loadTrack(idx);
                    if (audioContext && audioContext.state === 'suspended') {
                        audioContext.resume().then(() => audioPlayer.play().catch(handlePlayError)).catch(handlePlayError);
                    } else {
                        audioPlayer.play().catch(handlePlayError);
                    }
                }
                updatePlaylistUI();
            }
        });
    });
}

function updatePlaylistUI() {
    const playlistList = document.getElementById('playlistList');
    const isPlaying = audioPlayer && !audioPlayer.paused;
    if (playlistList) {
        playlistList.querySelectorAll('.playlist-item').forEach((item, idx) => {
            const isActive = idx === currentTrackIndex;
            item.classList.toggle('active', isActive);
            const wave = item.querySelector('.playlist-item-wave');
            if (wave) {
                wave.classList.toggle('playing', isActive && isPlaying);
            }
        });
    }

    const playerDockBtn = document.getElementById('playerDockBtn');
    if (playerDockBtn) {
        playerDockBtn.classList.toggle('playing', isPlaying);
    }
}

function updateLyricsIcon() {
    if (!toggleLyricsBtn) return;
    toggleLyricsBtn.style.opacity = isLyricsEnabled ? '1' : '0.5';
    toggleLyricsBtn.style.color = isLyricsEnabled ? 'var(--accent-cyan)' : 'inherit';
}

function togglePlayerPanel(e) {
    if (!audioPlayer) return;
    if (!isVisualizerInitialized) setupAudioGraph();

    if (audioPlayer.paused || audioPlayer.ended) {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume().then(() => audioPlayer.play().catch(handlePlayError)).catch(handlePlayError);
        } else {
            audioPlayer.play().catch(handlePlayError);
        }
    } else {
        audioPlayer.pause();
    }
    if (audioPlayer) updateLyrics(audioPlayer.currentTime);
}

function loadTrack(idx) {
    if (idx < 0 || idx >= audioPlaylist.length) return;
    const track = audioPlaylist[idx];
    const vol = audioPlayer ? audioPlayer.volume : 1;
    const muted = audioPlayer ? audioPlayer.muted : false;

    audioPlayer.src = track.src;
    audioPlayer.volume = vol;
    audioPlayer.muted = muted;

    if (albumArtElement) { albumArtElement.src = track.albumArt; albumArtElement.alt = track.title; }
    if (songTitleEl) songTitleEl.textContent = track.title;
    if (songArtistEl) songArtistEl.textContent = track.artist;
    if (musicProgressBar) musicProgressBar.value = 0;
    if (currentTimeEl) currentTimeEl.textContent = formatTime(0);

    currentLyricIndex = -1;
    updateLyrics(0);
    updatePlayPauseIcon();
    updateTrackButtonsState();
    updateVolumeIcon();
    updatePlaylistUI();

    if (track.dominantColor) {
        document.documentElement.style.setProperty('--dynamic-glow-1', track.dominantColor);
    }
}

function togglePlayPause() {
    if (!audioPlayer) return;
    if (!isVisualizerInitialized) setupAudioGraph();

    if (audioPlayer.paused || audioPlayer.ended) {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume().then(() => audioPlayer.play().catch(handlePlayError)).catch(handlePlayError);
        } else {
            audioPlayer.play().catch(handlePlayError);
        }
    } else {
        audioPlayer.pause();
    }
    if (audioPlayer) updateLyrics(audioPlayer.currentTime);
}

function stopAudio() {
    if (!audioPlayer) return;
    audioPlayer.pause();
    audioPlayer.currentTime = 0;

    if (circularRafId) { cancelAnimationFrame(circularRafId); circularRafId = null; }
    if (circularVisualizerCtx && circularVisualizerCanvas) {
        circularVisualizerCtx.clearRect(0, 0, circularVisualizerCanvas.width, circularVisualizerCanvas.height);
    }
    if (albumArtElement) { albumArtElement.classList.remove('spinning'); albumArtElement.classList.remove('paused'); }
    const bubbleArt = document.getElementById('bubbleAlbumArt');
    if (bubbleArt) { bubbleArt.classList.remove('spinning'); bubbleArt.classList.remove('paused'); }
    if (nowPlayingIndicator) nowPlayingIndicator.classList.remove('active');

    // Reset lyrics
    if (lyricsOverlay) lyricsOverlay.classList.remove('visible');
    if (currentLyricEl) { currentLyricEl.textContent = ''; currentLyricEl.classList.remove('active'); }
    if (nextLyricEl) { nextLyricEl.textContent = ''; nextLyricEl.classList.remove('visible'); }
    currentLyricIndex = -1;
}

function updatePlayPauseIcon() {
    if (!playPauseMusicBtn || !audioPlayer) return;
    playPauseMusicBtn.innerHTML = audioPlayer.paused || audioPlayer.ended
        ? '<i class="fas fa-play fa-lg"></i>'
        : '<i class="fas fa-pause fa-lg"></i>';
}

function updateProgressBar() {
    if (!audioPlayer || !musicProgressBar || !currentTimeEl) return;
    if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
        musicProgressBar.value = audioPlayer.currentTime;
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    }
}

function setAudioDuration() {
    if (!audioPlayer || !musicProgressBar || !durationEl) return;
    if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
        musicProgressBar.max = audioPlayer.duration;
        durationEl.textContent = formatTime(audioPlayer.duration);
    }
}

function seekAudio() {
    if (!audioPlayer || !musicProgressBar) return;
    audioPlayer.currentTime = musicProgressBar.value;
}

function formatTime(t) {
    if (isNaN(t) || t < 0) t = 0;
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function handlePlayError(err) {
    console.error("Play error:", err.name, err.message);
}

function setVolume() {
    if (!audioPlayer || !volumeSlider) return;
    const v = parseFloat(volumeSlider.value);
    audioPlayer.volume = v;
    audioPlayer.muted = (v === 0);
    updateVolumeIcon();
}

function toggleMute() {
    if (!audioPlayer) return;
    audioPlayer.muted = !audioPlayer.muted;
    if (!audioPlayer.muted && audioPlayer.volume === 0) {
        audioPlayer.volume = 0.5;
        if (volumeSlider) volumeSlider.value = '0.5';
    }
    updateVolumeIcon();
}

function updateVolumeIcon() {
    if (!volumeBtn || !audioPlayer) return;
    const iconClass = audioPlayer.muted || audioPlayer.volume === 0
        ? 'fa-volume-xmark'
        : audioPlayer.volume < 0.5 ? 'fa-volume-low' : 'fa-volume-high';
    volumeBtn.innerHTML = `<i class="fas ${iconClass}"></i>`;
}

function playNextTrack() {
    const wasPlaying = audioPlayer && !audioPlayer.paused;
    currentTrackIndex = (currentTrackIndex + 1) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
    if (wasPlaying || audioPlaylist.length > 0) {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume().then(() => audioPlayer.play().catch(handlePlayError)).catch(handlePlayError);
        } else {
            audioPlayer.play().catch(handlePlayError);
        }
    }
}

function playPrevTrack() {
    const wasPlaying = audioPlayer && !audioPlayer.paused;
    currentTrackIndex = (currentTrackIndex - 1 + audioPlaylist.length) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
    if (wasPlaying || audioPlaylist.length > 0) {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume().then(() => audioPlayer.play().catch(handlePlayError)).catch(handlePlayError);
        } else {
            audioPlayer.play().catch(handlePlayError);
        }
    }
}

function updateTrackButtonsState() {
    if (!prevTrackBtn || !nextTrackBtn) return;
    const disable = audioPlaylist.length <= 1;
    prevTrackBtn.disabled = disable;
    nextTrackBtn.disabled = disable;
    [prevTrackBtn, nextTrackBtn].forEach(btn => {
        btn.style.opacity = disable ? '0.4' : '1';
        btn.style.pointerEvents = disable ? 'none' : 'auto';
    });
}

// ============================================
// LYRICS
// ============================================
// Update Lyrics UI
function updateLyrics(time) {
    if (!isLyricsEnabled || !audioPlayer || !lyricsOverlay || !currentLyricEl || !nextLyricEl) {
        if (lyricsOverlay) lyricsOverlay.classList.remove('visible');
        return;
    }

    const track = audioPlaylist[currentTrackIndex];
    const hasLyrics = track && track.title && track.title.includes("Phép Màu (Đàn Cá Gỗ OST)");

    if (!hasLyrics) {
        lyricsOverlay.classList.remove('visible');
        currentLyricEl.textContent = ''; currentLyricEl.classList.remove('active');
        nextLyricEl.textContent = ''; nextLyricEl.classList.remove('visible');
        currentLyricIndex = -1;
        return;
    }

    if (!audioPlayer.paused || audioPlayer.readyState >= 2) {
        lyricsOverlay.classList.add('visible');
    } else {
        lyricsOverlay.classList.remove('visible');
    }

    let newIdx = -1;
    for (let i = 0; i < phepMauLyrics.length; i++) {
        if (time >= phepMauLyrics[i].time) newIdx = i;
        else break;
    }

    if (newIdx !== currentLyricIndex) {
        currentLyricIndex = newIdx;

        if (currentLyricIndex !== -1 && phepMauLyrics[currentLyricIndex]) {
            currentLyricEl.classList.remove('active');
            setTimeout(() => {
                currentLyricEl.textContent = phepMauLyrics[currentLyricIndex].text;
                currentLyricEl.classList.add('active');
            }, 50);
        } else {
            currentLyricEl.textContent = '';
            currentLyricEl.classList.remove('active');
        }

        const nextIdx = currentLyricIndex + 1;
        if (nextIdx < phepMauLyrics.length && phepMauLyrics[nextIdx] && phepMauLyrics[nextIdx].text.trim()) {
            nextLyricEl.classList.remove('visible');
            setTimeout(() => {
                nextLyricEl.textContent = phepMauLyrics[nextIdx].text;
                nextLyricEl.classList.add('visible');
            }, 100);
        } else {
            nextLyricEl.textContent = '';
            nextLyricEl.classList.remove('visible');
        }
    }
}

// ============================================
// AUDIO GRAPH & CIRCULAR VISUALIZER
// ============================================
function setupAudioGraph() {
    if (isVisualizerInitialized || !audioPlayer) return;

    if (window.location.protocol === 'file:') {
        console.warn("Visualizer is running in FAKE mode for local files to prevent audio silencing.");
        isVisualizerInitialized = "fake";
        dataArray = new Uint8Array(64);
        return;
    }

    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        if (!sourceNode || sourceNode.mediaElement !== audioPlayer) {
            sourceNode = audioContext.createMediaElementSource(audioPlayer);
        }
        sourceNode.connect(analyser);
        analyser.connect(audioContext.destination);
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        isVisualizerInitialized = true;
    } catch (e) {
        console.error("AudioContext setup error:", e);
        isVisualizerInitialized = false;
    }
}

function initCircularVisualizer() {
    circularVisualizerCanvas = document.getElementById('circular-visualizer');
    if (!circularVisualizerCanvas) return;
    circularVisualizerCtx = circularVisualizerCanvas.getContext('2d');

    if (audioPlayer) {
        audioPlayer.addEventListener('play', () => {
            if (!isVisualizerInitialized) setupAudioGraph();
            if (isVisualizerInitialized === "fake") {
                if (!circularRafId) drawCircularVisualizer();
            } else if (isVisualizerInitialized && audioContext && audioContext.state === 'suspended') {
                audioContext.resume().then(() => { if (!circularRafId) drawCircularVisualizer(); });
            } else if (isVisualizerInitialized && !circularRafId) {
                drawCircularVisualizer();
            }
        });
        audioPlayer.addEventListener('pause', () => {
            if (circularRafId) { cancelAnimationFrame(circularRafId); circularRafId = null; }
        });
        audioPlayer.addEventListener('ended', () => {
            if (circularRafId) { cancelAnimationFrame(circularRafId); circularRafId = null; }
            if (circularVisualizerCtx && circularVisualizerCanvas) {
                circularVisualizerCtx.clearRect(0, 0, circularVisualizerCanvas.width, circularVisualizerCanvas.height);
            }
        });
    }
}

function drawCircularVisualizer() {
    if (!isVisualizerInitialized || !circularVisualizerCtx || !dataArray || !circularVisualizerCanvas) {
        if (circularRafId) cancelAnimationFrame(circularRafId);
        circularRafId = null;
        return;
    }

    circularRafId = requestAnimationFrame(drawCircularVisualizer);

    if (isVisualizerInitialized === "fake") {
        const time = Date.now() / 150;
        const isPlaying = audioPlayer && !audioPlayer.paused && !audioPlayer.ended && audioPlayer.currentTime > 0;

        for (let i = 0; i < dataArray.length; i++) {
            if (isPlaying) {
                const noise = Math.sin(time * 0.5 + i * 0.2) * Math.cos(time * 0.3 - i * 0.1) * Math.sin(time * 0.1);
                let val = (0.2 + 0.8 * Math.abs(noise)) * 180;
                const beat = Math.pow(Math.sin(time * 0.25), 6);
                if (i % 2 === 0) val += beat * 75;
                dataArray[i] = Math.min(255, Math.max(0, val));
            } else {
                dataArray[i] = Math.max(0, dataArray[i] - 10);
            }
        }
    } else {
        if (!analyser) return;
        analyser.getByteFrequencyData(dataArray);
    }

    // Handle high DPI and CSS scaling efficiently
    const rect = circularVisualizerCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    // Set actual size in memory (scaled by DPR)
    const displayWidth = Math.round(rect.width * dpr);
    const displayHeight = Math.round(rect.height * dpr);

    if (circularVisualizerCanvas.width !== displayWidth || circularVisualizerCanvas.height !== displayHeight) {
        circularVisualizerCanvas.width = displayWidth;
        circularVisualizerCanvas.height = displayHeight;
    }

    const w = circularVisualizerCanvas.width;
    const h = circularVisualizerCanvas.height;
    const cx = w / 2;
    const cy = h / 2;

    // Dynamically calculate radius based on container size
    // Desktop: avatar is 180px -> radius 90px. Mobile: avatar is 140px -> radius 70px.
    const isMobile = w < 220 * dpr;
    const innerRadius = (isMobile ? 74 : 94) * dpr; // 4px gap from avatar scaled
    const maxBarLength = (w / 2) - innerRadius - 2 * dpr;
    const numBars = 64;

    circularVisualizerCtx.clearRect(0, 0, w, h);

    const bufLen = isVisualizerInitialized === "fake" ? dataArray.length : (analyser ? analyser.frequencyBinCount : dataArray.length);

    for (let i = 0; i < numBars; i++) {
        const dataIdx = Math.min(bufLen - 1, Math.floor((i / numBars) * (bufLen * 0.7)));
        const amplitude = dataArray[dataIdx] / 255;
        const barLen = Math.max(2 * dpr, amplitude * maxBarLength);

        const angle = (i / numBars) * Math.PI * 2 - Math.PI / 2;
        const x1 = cx + Math.cos(angle) * innerRadius;
        const y1 = cy + Math.sin(angle) * innerRadius;
        const x2 = cx + Math.cos(angle) * (innerRadius + barLen);
        const y2 = cy + Math.sin(angle) * (innerRadius + barLen);

        circularVisualizerCtx.beginPath();
        circularVisualizerCtx.moveTo(x1, y1);
        circularVisualizerCtx.lineTo(x2, y2);
        circularVisualizerCtx.lineWidth = (isMobile ? 1.5 : 2.5) * dpr;
        circularVisualizerCtx.lineCap = 'round';

        // Gradient from purple to cyan based on position
        const hue = 270 + (i / numBars) * 90; // purple to cyan
        circularVisualizerCtx.strokeStyle = `hsla(${hue}, 80%, 65%, ${0.4 + amplitude * 0.6})`;
        circularVisualizerCtx.shadowBlur = amplitude * 12 * dpr;
        circularVisualizerCtx.shadowColor = `hsla(${hue}, 80%, 65%, 0.6)`;
        circularVisualizerCtx.stroke();
    }

    // Reset shadow
    circularVisualizerCtx.shadowBlur = 0;
}

// ============================================
// DONATE SECTION
// ============================================
function initDonateSection() {
    document.querySelectorAll('.toggle-qr-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.qrTarget;
            const qr = document.getElementById(targetId);
            if (!qr) return;
            const isHidden = qr.classList.contains('hidden');
            qr.classList.toggle('hidden', !isHidden);
            btn.textContent = isHidden ? 'Ẩn QR' : 'Hiện QR';
        });
    });
}

function copyTextToClipboard(text, notifEl) {
    if (!text) return;
    const showNotif = () => {
        if (!notifEl) return;
        notifEl.classList.add('show');
        notifEl.style.display = 'block';
        setTimeout(() => { notifEl.classList.remove('show'); notifEl.style.display = 'none'; }, 2000);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(showNotif).catch(() => fallbackCopy(text, showNotif));
    } else {
        fallbackCopy(text, showNotif);
    }
}

function fallbackCopy(text, callback) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;left:-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { if (document.execCommand('copy')) callback(); }
    catch (e) { console.error('Copy failed:', e); }
    document.body.removeChild(ta);
}

function initCopyButtons() {
    const momoBtn = document.getElementById('copyMomoNumberBtn');
    const momoNum = document.getElementById('momoNumber');
    const momoNotif = document.getElementById('copyMomoNotification');

    const bankBtn = document.getElementById('copyAccountNumberBtn');
    const bankNum = document.getElementById('accountNumber');
    const bankNotif = document.getElementById('copyNotification');

    if (momoBtn && momoNum) {
        momoBtn.addEventListener('click', () => copyTextToClipboard(momoNum.textContent.trim(), momoNotif));
    }
    if (bankBtn && bankNum) {
        bankBtn.addEventListener('click', () => copyTextToClipboard(bankNum.textContent.trim(), bankNotif));
    }
}

// ============================================
// SPLIT TEXT ANIMATION (Hero Title)
// ============================================
function splitTextAnimation() {
    const title = document.getElementById('hero-title');
    if (!title) return;

    const text = title.textContent;
    title.textContent = '';
    title.style.opacity = '1';

    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${0.5 + i * 0.04}s`;
        title.appendChild(span);
    });
}

// ============================================
// PAGE INITIALIZATION
// ============================================
// ============================================
// ============================================
// ============================================
// THEME TOGGLE (EXPAND & COLLAPSE / THU LẠI VỀ TÂM NÚT)
// ============================================
function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;

    // Restore saved theme on both html and body
    if (localStorage.getItem('fot_theme') === 'light') {
        document.documentElement.classList.add('light-theme');
        document.body.classList.add('light-theme');
    }

    let isThemeTransitioning = false;

    themeBtn.addEventListener('click', (e) => {
        if (isThemeTransitioning) return;

        const willBeLight = !document.documentElement.classList.contains('light-theme');
        isThemeTransitioning = true;

        // Spin the theme button icon gracefully
        if (window.gsap) {
            gsap.to(themeBtn, { rotate: willBeLight ? '+=180' : '-=180', duration: 0.45, ease: 'power2.out' });
        }

        // Get exact center of the theme button as the origin of ripple
        const rect = themeBtn.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        // Native View Transition API (Chrome, Edge, Safari 18+)
        if (document.startViewTransition) {
            // Mute CSS background-color transitions so snapshot captures immediate target colors
            document.documentElement.classList.add('theme-transitioning');

            let transition;
            try {
                transition = document.startViewTransition(() => {
                    document.documentElement.classList.toggle('light-theme', willBeLight);
                    document.body.classList.toggle('light-theme', willBeLight);
                    localStorage.setItem('fot_theme', willBeLight ? 'light' : 'dark');
                });
            } catch (err) {
                document.documentElement.classList.remove('theme-transitioning');
                isThemeTransitioning = false;
                fallbackCircularThemeToggle(willBeLight, x, y, endRadius, () => {
                    isThemeTransitioning = false;
                });
                return;
            }

            transition.ready.then(() => {
                if (willBeLight) {
                    // TỐI -> SÁNG: Vòng tròn sáng lan tỏa từ tâm nút ra toàn màn hình (Expand)
                    document.documentElement.animate(
                        {
                            clipPath: [
                                `circle(0px at ${x}px ${y}px)`,
                                `circle(${endRadius}px at ${x}px ${y}px)`
                            ]
                        },
                        {
                            duration: 520,
                            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                            fill: 'forwards',
                            pseudoElement: '::view-transition-new(root)'
                        }
                    );
                } else {
                    // SÁNG -> TỐI: Vòng tròn sáng thu nhỏ lại (THU LẠI) về tâm nút!
                    // fill: 'forwards' và opacity [1, 1, 0] giữ clipPath ở 0px, triệt tiêu 100% nháy trắng
                    document.documentElement.animate(
                        {
                            clipPath: [
                                `circle(${endRadius}px at ${x}px ${y}px)`,
                                `circle(0px at ${x}px ${y}px)`
                            ],
                            opacity: [1, 1, 0]
                        },
                        {
                            duration: 520,
                            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                            fill: 'forwards',
                            pseudoElement: '::view-transition-old(root)'
                        }
                    );
                }
            }).catch((err) => {
                console.warn('Theme view transition aborted:', err);
            });

            transition.finished.finally(() => {
                document.documentElement.classList.remove('theme-transitioning');
                isThemeTransitioning = false;
            });
        } else {
            // Fallback for browsers without View Transitions
            fallbackCircularThemeToggle(willBeLight, x, y, endRadius, () => {
                isThemeTransitioning = false;
            });
        }
    });
}

function fallbackCircularThemeToggle(willBeLight, x, y, endRadius, onComplete) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = '999999';
    overlay.style.pointerEvents = 'none';

    if (willBeLight) {
        // Tối -> Sáng: Lan tỏa ra
        overlay.style.backgroundColor = '#dfe6df';
        overlay.style.clipPath = `circle(0px at ${x}px ${y}px)`;
        document.body.appendChild(overlay);
        void overlay.offsetHeight;
        overlay.style.transition = 'clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        overlay.style.clipPath = `circle(${endRadius}px at ${x}px ${y}px)`;
        setTimeout(() => {
            document.documentElement.classList.add('light-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('fot_theme', 'light');
            overlay.remove();
            if (typeof onComplete === 'function') onComplete();
        }, 500);
    } else {
        // Sáng -> Tối: Thu lại về tâm nút
        overlay.style.backgroundColor = '#dfe6df';
        overlay.style.clipPath = `circle(${endRadius}px at ${x}px ${y}px)`;
        document.body.appendChild(overlay);
        document.documentElement.classList.remove('light-theme');
        document.body.classList.remove('light-theme');
        localStorage.setItem('fot_theme', 'dark');
        void overlay.offsetHeight;
        overlay.style.transition = 'clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        overlay.style.clipPath = `circle(0px at ${x}px ${y}px)`;
        setTimeout(() => {
            overlay.remove();
            if (typeof onComplete === 'function') onComplete();
        }, 500);
    }
}

// ============================================
// HORIZONTAL ACCORDION (PROJECTS SECTION)
// ============================================
function initHorizontalAccordion() {
    const panels = document.querySelectorAll('.accordion-panel');
    if (!panels.length) return;

    panels.forEach(panel => {
        panel.addEventListener('mouseenter', () => {
            panels.forEach(p => p.classList.remove('active'));
            panel.classList.add('active');
        });
    });
}

// ============================================
// HANGING LANYARD ID BADGE (ÁNH KIM METALLIC & CON LẮC VẬT LÝ)
// ============================================
function initLanyardBadge() {
    const wrapper = document.getElementById('hero-lanyard-wrapper');
    const pendulum = document.getElementById('lanyard-pendulum');
    const card = document.getElementById('lanyard-card');
    const metallicFrame = card ? card.querySelector('.card-metallic-frame') : null;
    const dragHint = card ? card.querySelector('.lanyard-drag-hint') : null;

    if (!wrapper || !pendulum || !card) return;

    let ambientTween = null;
    let isDragging = false;
    let hasInteracted = false;
    let currentRotation = 0;

    // Start with lanyard positioned above the top edge
    if (window.gsap) {
        gsap.set(wrapper, { y: -620, opacity: 0 });
        gsap.set(pendulum, { rotation: 24 });

        // Sequence: "Thả dây đeo thẻ" drops down smoothly after intro
        const dropTimeline = gsap.timeline({ delay: 1.15 });
        dropTimeline.to(wrapper, {
            y: 0,
            opacity: 1,
            duration: 1.8,
            ease: "elastic.out(1.05, 0.42)"
        });

        dropTimeline.to(pendulum, {
            keyframes: [
                { rotation: -18, duration: 0.42, ease: "sine.out" },
                { rotation: 12, duration: 0.48, ease: "sine.inOut" },
                { rotation: -7, duration: 0.52, ease: "sine.inOut" },
                { rotation: 3.5, duration: 0.58, ease: "sine.inOut" },
                { rotation: -1.5, duration: 0.62, ease: "sine.inOut" },
                { rotation: 0, duration: 0.7, ease: "power2.out" }
            ],
            onComplete: () => {
                startAmbientSway();
            }
        }, "-=1.5");
    } else {
        wrapper.style.transform = 'none';
        wrapper.style.opacity = '1';
    }

    function startAmbientSway() {
        if (!window.gsap) return;
        if (ambientTween) ambientTween.kill();
        ambientTween = gsap.to(pendulum, {
            rotation: 2.2,
            duration: 3.8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });
    }

    // Dynamic 3D Tilt & Metallic Specular Glare Tracking
    window.addEventListener('mousemove', (e) => {
        if (!wrapper.isConnected) return;
        const rect = card.getBoundingClientRect();
        
        // Calculate mouse relative to card
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        const dx = e.clientX - cardCenterX;
        const dy = e.clientY - cardCenterY;
        
        // Percentage coordinates for specular shine spot
        const pctX = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
        const pctY = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
        
        // Dynamic specular glare angle
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

        card.style.setProperty('--mouse-x', `${pctX.toFixed(1)}%`);
        card.style.setProperty('--mouse-y', `${pctY.toFixed(1)}%`);
        card.style.setProperty('--reflect-angle', `${angle.toFixed(1)}deg`);

        // Subtly tilt frame in 3D when hovering/near
        if (metallicFrame && !isDragging && window.gsap) {
            const distance = Math.hypot(dx, dy);
            if (distance < 550) {
                const tiltX = Math.max(-12, Math.min(12, -dy * 0.03));
                const tiltY = Math.max(-12, Math.min(12, dx * 0.03));
                gsap.to(metallicFrame, {
                    rotateX: tiltX,
                    rotateY: tiltY,
                    duration: 0.45,
                    ease: "power1.out",
                    overwrite: "auto"
                });
            } else {
                gsap.to(metallicFrame, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            }
        }
    }, { passive: true });

    // Interactive Drag & Pendulum Physics
    function onDragStart() {
        isDragging = true;
        if (ambientTween) ambientTween.kill();

        if (!hasInteracted && dragHint) {
            hasInteracted = true;
            if (window.gsap) {
                gsap.to(dragHint, { opacity: 0, y: 10, duration: 0.4, onComplete: () => dragHint.remove() });
            } else {
                dragHint.remove();
            }
        }
    }

    function onDragMove(clientX, clientY) {
        if (!isDragging) return;
        const wrapRect = wrapper.getBoundingClientRect();
        const pivotX = wrapRect.left + wrapRect.width / 2;
        const pivotY = wrapRect.top;

        // Angle between cursor and top anchor pivot
        const rad = Math.atan2(clientX - pivotX, clientY - pivotY);
        let deg = rad * (180 / Math.PI);
        // Constrain max drag swing angle
        deg = Math.max(-45, Math.min(45, deg));
        currentRotation = deg;

        if (window.gsap) {
            gsap.set(pendulum, { rotation: deg });
        } else {
            pendulum.style.transform = `rotate(${deg}deg)`;
        }
    }

    function onDragEnd() {
        if (!isDragging) return;
        isDragging = false;

        // Damped physical pendulum oscillation back to center
        if (window.gsap) {
            const rot = currentRotation;
            gsap.to(pendulum, {
                keyframes: [
                    { rotation: -rot * 0.65, duration: 0.35, ease: "sine.inOut" },
                    { rotation: rot * 0.38, duration: 0.42, ease: "sine.inOut" },
                    { rotation: -rot * 0.18, duration: 0.5, ease: "sine.inOut" },
                    { rotation: rot * 0.08, duration: 0.58, ease: "sine.inOut" },
                    { rotation: 0, duration: 0.68, ease: "power2.out" }
                ],
                onComplete: () => {
                    startAmbientSway();
                }
            });

            if (metallicFrame) {
                gsap.to(metallicFrame, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power2.out" });
            }
        }
    }

    // Mouse drag events
    card.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        onDragStart();

        function onMouseMove(moveEvent) {
            onDragMove(moveEvent.clientX, moveEvent.clientY);
        }

        function onMouseUp() {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            onDragEnd();
        }

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    });

    // Touch drag events (Mobile/Tablet)
    card.addEventListener('touchstart', (e) => {
        if (!e.touches || !e.touches[0]) return;
        const touch = e.touches[0];
        onDragStart();

        function onTouchMove(moveEvent) {
            if (!moveEvent.touches || !moveEvent.touches[0]) return;
            moveEvent.preventDefault();
            const t = moveEvent.touches[0];
            onDragMove(t.clientX, t.clientY);
        }

        function onTouchEnd() {
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
            onDragEnd();
        }

        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd);
    }, { passive: true });
}

// ============================================
// INTRO ANIMATION (REPLACES STATIC POPUP)
// ============================================
function initIntroAnimation() {
    const introOverlay = document.getElementById('intro-overlay');
    if (!introOverlay) return;

    setTimeout(() => {
        introOverlay.classList.add('fade-out');
        setTimeout(() => {
            introOverlay.remove();
        }, 600);
    }, 1500);
}

// ============================================
// PAGE INITIALIZATION
// ============================================
function initializePageApp() {
    // Hanging Lanyard Badge with metallic reflections & physics
    initLanyardBadge();

    // Split text animation for hero title
    splitTextAnimation();

    // Typewriter for tagline
    typewriterEffect('hero-tagline', heroTaglines, 50, 2500);

    // Render shortcuts (if old container exists)
    renderShortcuts();

    // Music player
    initMusicPlayer();

    // Search
    initSearchSuggestions();

    // Theme toggle with native GPU View Transition
    initThemeToggle();

    // Horizontal Accordion
    initHorizontalAccordion();

    // Donate
    initDonateSection();
    initCopyButtons();

    // 144Hz Buttery Smooth Snap Controller
    initSmoothSnapScroll();

    // Header nav links smooth section navigation
    document.querySelectorAll('.header-nav .nav-link').forEach((link, idx) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof window.goToSection === 'function') {
                window.goToSection(idx);
            }
        });
    });

    // Scroll reveal (after DOM is populated)
    requestAnimationFrame(() => {
        initScrollReveal();
    });

    // 3D Tilt effect on cards
    init3DTilt();

    // Footer year
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Search button
    const searchBtn = document.getElementById('searchButton');
    if (searchBtn) searchBtn.addEventListener('click', performSearch);

    const searchInputEl = document.getElementById('searchInput');
    if (searchInputEl) {
        searchInputEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }

    console.log("✨ Page application initialized!");
}

// ============================================
// PAGE LOAD FLOW
// ============================================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const pageContent = document.getElementById('page-content');

    document.body.classList.add('loading');

    // Initialize background effects immediately
    new ParticleSystem('particles-canvas');
    new CursorTrail('cursor-trail-canvas');

    const minLoadTime = 300;

    setTimeout(() => {
        // Fade out loading screen
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.addEventListener('transitionend', () => {
                loadingScreen.style.display = 'none';
            }, { once: true });
        }

        // Show page content
        if (pageContent) {
            pageContent.classList.remove('hidden');
            requestAnimationFrame(() => { pageContent.style.opacity = '1'; });
        }

        // Initialize app
        initializePageApp();
        document.body.classList.remove('loading');

        // Trigger dynamic Intro Animation
        initIntroAnimation();

    }, minLoadTime);

    // Contact Form AJAX Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnHtml = submitBtn.innerHTML;

            // Loading state
            submitBtn.innerHTML = 'Đang gửi... <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        // Success state
                        submitBtn.innerHTML = 'Đã gửi thành công <i class="fas fa-check"></i>';
                        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                        submitBtn.style.opacity = '1';
                        contactForm.reset();
                    } else {
                        throw new Error('Network response was not ok');
                    }
                })
                .catch(error => {
                    // Error state
                    submitBtn.innerHTML = 'Gửi lỗi! Thử lại <i class="fas fa-times"></i>';
                    submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                })
                .finally(() => {
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnHtml;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        submitBtn.style.opacity = '1';
                    }, 4000);
                });
        });
    }
});

// ==========================================
// BẢO VỆ BẢN QUYỀN - CHỐNG SAO CHÉP & F12
// ==========================================

// 1. Chặn chuột phải (nhưng cho phép trên input/textarea để paste)
document.addEventListener('contextmenu', event => {
    if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
    }
});

// 2. Chặn các phím tắt F12, Ctrl+U, Ctrl+Shift+I, v.v.
document.addEventListener('keydown', (e) => {
    // Không block nếu đang gõ trong form
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    // Chặn F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Chặn Ctrl+Shift+I (Mở DevTools)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
    }
    // Chặn Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
    }
    // Chặn Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
    }
    // Chặn Ctrl+S (Lưu trang web)
    if (e.ctrlKey && (e.key === 'S' || e.key === 's')) {
        e.preventDefault();
    }
});
