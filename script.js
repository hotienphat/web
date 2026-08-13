// ============================================
// DATA CONFIGURATION
// ============================================

const shortcutSections = [
    {
        title: "MẠNG XÃ HỘI",
        iconPrefix: "fab",
        shortcuts: [
            { name: "Facebook", url: "https://www.facebook.com/KaedeharaKazuha0805", icon: "facebook" },
            { name: "Messenger", url: "https://messenger.com", icon: "facebook-messenger" },
            { name: "Instagram", url: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fhotien_boyneh%2F&is_from_rle", icon: "instagram" },
            { name: "Threads", url: "https://www.threads.net/@hotien_boyneh", icon: "threads" },
        ]
    },
    {
        title: "GOOGLE",
        iconPrefix: "fab",
        shortcuts: [
            { name: "Youtube", url: "https://youtube.com", icon: "youtube" },
            { name: "Gmail", url: "https://mail.google.com", icon: "google" },
            { name: "Drive", url: "https://drive.google.com", icon: "google-drive" },
            { name: "Tìm kiếm", url: "https://google.com", icon: "google" }
        ]
    },
    {
        title: "GÓC HỌC TẬP",
        iconPrefix: "fas",
        shortcuts: [
            { name: "Trung Tâm GDTX", url: "https://txdaknong.daknong.edu.vn/", icon: "school" },
            { name: "Random của FOT", url: "https://hotienphat.github.io/GDTX/", icon: "shuffle" },
            { name: "Tạo khung", url: "https://hotienphat.github.io/frame/", icon: "image" },
            { name: "Giám thị", url: "https://hotienphat.github.io/filter", icon: "book" },
        ]
    },
    {
        title: "GIẢI TRÍ",
        iconPrefix: "fas",
        shortcuts: [
            { name: "Genshin Impact", url: "https://genshin.hoyoverse.com/", icon: "gamepad" },
            { name: "Valorant", url: "https://playvalorant.com/", icon: "gamepad" },
            { name: "Honkai: Star Rail", url: "https://hsr.hoyoverse.com/", icon: "rocket" },
            { name: "Spotify", url: "https://spotify.com", icon: "spotify", iconPrefixOverride: "fab" },
        ]
    },
];

const audioPlaylist = [
    {
        title: "Phép Màu (Đàn Cá Gỗ OST)",
        artist: "Mounter x MAYDAYs, Minh Tốc",
        src: "./assets/phepmau.mp3",
        albumArt: "./assets/Phepmaulogo.jpg"
    },
    {
        title: "Còn Gì Đẹp Hơn (Mưa Đỏ Original Soundtrack)",
        artist: "Nguyễn Hùng",
        src: "./assets/congidephon.mp3",
        albumArt: "./assets/CGDH.jpg"
    }
];

const phepMauLyrics = [
    { time: 0,   text: "Bài hát: Phép Màu - Mounter x MAYDAYs, Minh Tốc" },
    { time: 3,   text: "Ngày thay đêm, vội trôi giấc mơ êm đềm" },
    { time: 10,  text: "Tôi lênh đênh trên biển vắng, hoàng hôn chờ em chưa buông nắng" },
    { time: 16,  text: "Đừng tìm nhau, vào hôm gió mưa tơi bời" },
    { time: 23,  text: "Sợ lời sắp nói vỡ tan thương đau, hẹn kiếp sau có nhau trọn đời" },
    { time: 30,  text: "..." },
    { time: 44,  text: "Liệu người có còn ở đây với tôi thật lâu?" },
    { time: 50,  text: "Ngày rộng tháng dài, sợ mai không còn thấy nhau" },
    { time: 57,  text: "Ngày em đến, áng mây xanh thêm, ngày em đi nắng vương cuối thềm" },
    { time: 64,  text: "Thiếu em tôi sợ bơ vơ, vắng em như tàn cơn mơ" },
    { time: 70,  text: "Chẳng phải phép màu vậy sao chúng ta gặp nhau?" },
    { time: 77,  text: "Một người khẽ cười, người kia cũng dịu nỗi đau" },
    { time: 84,  text: "Gọi tôi thức giấc cơn ngủ mê, dìu tôi đi lúc quên lối về" },
    { time: 90,  text: "Quãng đời mai sau luôn cạnh nhau" },
    { time: 98,  text: "..." },
    { time: 105, text: "Rồi ngày mai, còn ai với ai ở lại?" },
    { time: 111, text: "Vẫn căng buồm ra khơi theo làn gió mới" },
    { time: 114, text: "Vì biết đâu mọi thứ chưa bắt đầu" },
    { time: 118, text: "Hah-hah-ah-ah-ah-ah" },
    { time: 129, text: "Liệu người có còn ở đây với tôi thật lâu?" },
    { time: 137, text: "Ngày rộng tháng dài, sợ mai không còn thấy nhau" },
    { time: 144, text: "Ngày em đến, áng mây xanh thêm, ngày em đi, nắng vương cuối thềm" },
    { time: 150, text: "Thiếu em tôi sợ bơ vơ, vắng em như tàn cơn mơ" },
    { time: 156, text: "Chẳng phải phép màu vậy sao chúng ta gặp nhau?" },
    { time: 164, text: "Một người khẽ cười, người kia cũng dịu nỗi đau" },
    { time: 171, text: "Gọi tôi thức giấc cơn ngủ mê, dìu tôi đi lúc quên lối về" },
    { time: 178, text: "Quãng đời thanh xuân sao em cho tôi giữ lấy, giữ lấy" },
    { time: 190, text: "(Qua bao khổ đau, ta bên cạnh nhau)" },
    { time: 217, text: "Chẳng phải phép màu vậy sao chúng ta gặp nhau?" },
    { time: 224, text: "Một người khẽ cười, người kia cũng dịu nỗi đau" },
    { time: 231, text: "Gọi tôi thức giấc cơn ngủ mê, dìu tôi đi lúc quên lối về" },
    { time: 239, text: "Quãng đời mai sau luôn cạnh nhau" },
    { time: 244, text: "Quãng đời mai sau luôn cạnh nhau" },
    { time: 255, text: "HẾT" },
];

const heroTaglines = [
    "Lập trình viên • Gamer • Người yêu nhạc 🎵",
    "Đến từ Lâm Đồng, Việt Nam 🇻🇳",
    "Chào mừng đến không gian số của mình ✨"
];

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
                color: Math.random() > 0.5 ? '168, 85, 247' : '34, 211, 238'
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
            this.ctx.fillStyle = `rgba(168, 85, 247, ${opacity})`;
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
// HEADER SCROLL EFFECT
// ============================================
function initHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                header.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    });
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
    const query = searchInput.value.trim();
    if (query) window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
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
    
    // Bubble UI Logic
    const playerContainer = document.getElementById('musicPlayerContainer');
    const playerBubble = document.getElementById('playerBubble');
    const closePlayerBtn = document.getElementById('closePlayerBtn');
    const playerPanel = document.getElementById('playerPanel');
    const toggleLyricsBtn = document.getElementById('toggleLyricsBtn');
    const closeLyricsBtn = document.getElementById('closeLyricsBtn');
    
    if (playerBubble && playerContainer) {
        playerBubble.addEventListener('click', () => {
            playerContainer.classList.remove('collapsed');
        });
    }
    if (closePlayerBtn && playerContainer) {
        closePlayerBtn.addEventListener('click', () => {
            playerContainer.classList.add('collapsed');
        });
    }
    nowPlayingIndicator = document.getElementById('nowPlayingIndicator');

    const essentials = [playPauseMusicBtn, stopMusicBtn, musicProgressBar, albumArtElement,
        currentTimeEl, durationEl, songTitleEl, songArtistEl, volumeBtn, volumeSlider,
        prevTrackBtn, nextTrackBtn, lyricsOverlay, currentLyricEl, nextLyricEl];

    if (essentials.some(el => !el)) {
        console.error("Missing music player DOM elements!");
        const pc = document.getElementById('musicPlayerContainer');
        if (pc) pc.style.display = 'none';
        return;
    }

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
        const bubbleArt = document.getElementById('bubbleAlbumArt');
        if (bubbleArt) {
            bubbleArt.classList.add('spinning');
            bubbleArt.classList.remove('paused');
        }
        if (nowPlayingIndicator) nowPlayingIndicator.classList.add('active');
    });
    audioPlayer.addEventListener('pause', () => {
        updatePlayPauseIcon();
        if (albumArtElement) albumArtElement.classList.add('paused');
        const bubbleArt = document.getElementById('bubbleAlbumArt');
        if (bubbleArt) bubbleArt.classList.add('paused');
        if (nowPlayingIndicator && audioPlayer.currentTime === 0) nowPlayingIndicator.classList.remove('active');
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
    const bubbleArt = document.getElementById('bubbleAlbumArt');
    if (bubbleArt) { bubbleArt.src = track.albumArt; bubbleArt.alt = track.title; }
    if (songTitleEl) songTitleEl.textContent = track.title;
    if (songArtistEl) songArtistEl.textContent = track.artist;
    if (musicProgressBar) musicProgressBar.value = 0;
    if (currentTimeEl) currentTimeEl.textContent = formatTime(0);

    currentLyricIndex = -1;
    updateLyrics(0);
    updatePlayPauseIcon();
    updateTrackButtonsState();
    updateVolumeIcon();
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
function initializePageApp() {
    // Split text animation for hero title
    splitTextAnimation();

    // Typewriter for tagline
    typewriterEffect('hero-tagline', heroTaglines, 50, 2500);

    // Render shortcuts
    renderShortcuts();

    // Music player
    initMusicPlayer();

    // Circular visualizer
    initCircularVisualizer();

    // Search
    initSearchSuggestions();

    // Donate
    initDonateSection();
    initCopyButtons();

    // Header scroll effect
    initHeaderScroll();

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
    const accessModal = document.getElementById('access-modal');
    const acceptBtn = document.getElementById('acceptAccessBtn');
    const modalContent = document.getElementById('modal-content-area');

    document.body.classList.add('loading');

    // Initialize background effects immediately
    new ParticleSystem('particles-canvas');
    new CursorTrail('cursor-trail-canvas');

    const minLoadTime = 400; // Reduced from 2500ms to avoid artificial delay

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

        // Show access modal
        if (accessModal && modalContent) {
            setTimeout(() => {
                accessModal.classList.remove('hidden');
                requestAnimationFrame(() => {
                    accessModal.style.opacity = '1';
                    modalContent.style.opacity = '1';
                    modalContent.style.transform = 'scale(1) translateY(0)';
                });
            }, 600);
        }

    }, minLoadTime);

    // Contact Form AJAX Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
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

    // Accept button handler
    if (acceptBtn && accessModal && modalContent) {
        acceptBtn.addEventListener('click', () => {
            modalContent.style.opacity = '0';
            modalContent.style.transform = 'scale(0.9) translateY(20px)';
            accessModal.style.opacity = '0';

            accessModal.addEventListener('transitionend', function handler(e) {
                if (e.target === accessModal && e.propertyName === 'opacity') {
                    accessModal.classList.add('hidden');
                    accessModal.removeEventListener('transitionend', handler);
                }
            });
        });
    }
});

// ==========================================
// BẢO VỆ BẢN QUYỀN - CHỐNG SAO CHÉP & F12
// ==========================================

// 1. Chặn chuột phải
document.addEventListener('contextmenu', event => event.preventDefault());

// 2. Chặn các phím tắt F12, Ctrl+U, Ctrl+Shift+I, v.v.
document.addEventListener('keydown', (e) => {
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
