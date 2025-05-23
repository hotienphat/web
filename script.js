// --- START: EDIT SHORTCUTS HERE (from user's file) ---
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
// --- END: EDIT SHORTCUTS HERE ---

// --- START: MUSIC PLAYER CONFIGURATION ---
const audioPlaylist = [
    {
        title: "Phép Màu (Đàn Cá Gỗ OST)", // Make sure this title is used for lyrics matching
        artist: "Mounter x MAYDAYs, Minh Tốc",
        src: "./Backround sound/phepmau.mp3", 
        albumArt: "./Backround sound/Phepmaulogo.jpg" 
    },
    // Add more tracks here if needed
];
let currentTrackIndex = 0;
// --- END: MUSIC PLAYER CONFIGURATION ---

// --- LYRICS DATA for "Phép Màu" ---
const phepMauLyrics = [
    { time: 0.0, text: "Bài hát: Phép Màu" },
    { time: 2.5, text: "Mounter x MAYDAYs, Minh Tốc" },
    { time: 6.0, text: "" }, // Clear for music intro
    { time: 14.9, text: "Anh vẫn thường hay mộng mơ về một nơi xa xôi" },
    { time: 18.7, text: "Nơi có những đám mây trắng bay theo cơn gió trôi" },
    { time: 22.6, text: "Anh vẫn thường hay thầm mong một ngày kia nắng lên" },
    { time: 26.4, text: "Em sẽ kề vai tựa đầu cùng anh ngắm sao trời" },
    { time: 30.0, text: "Và anh biết tình yêu ấy chẳng thể phai nhoà" },
    { time: 33.8, text: "Dù cho bão giông kéo đến vẫn luôn gần bên ta" },
    { time: 37.6, text: "Em có biết từ khi em đến bên cuộc đời" },
    { time: 41.4, text: "Lòng anh thấy vui biết mấy như có phép màu" },
    { time: 45.0, text: "Phép màu đã cho ta gặp nhau" },
    { time: 48.8, text: "Phép màu giữ cho tình đậm sâu" },
    { time: 52.7, text: "Dù ngày mai có ra sao lòng vẫn không đổi thay" },
    { time: 56.7, text: "Nguyện yêu em mãi yêu em đến hết cuộc đời này" },
    { time: 60.5, text: "..." }, // Instrumental indicator
    { time: 74.9, text: "Anh vẫn thường hay mộng mơ về một nơi xa xôi" },
    { time: 78.7, text: "Nơi có những đám mây trắng bay theo cơn gió trôi" },
    { time: 82.6, text: "Anh vẫn thường hay thầm mong một ngày kia nắng lên" },
    { time: 86.4, text: "Em sẽ kề vai tựa đầu cùng anh ngắm sao trời" },
    { time: 90.0, text: "Và anh biết tình yêu ấy chẳng thể phai nhoà" },
    { time: 93.8, text: "Dù cho bão giông kéo đến vẫn luôn gần bên ta" },
    { time: 97.6, text: "Em có biết từ khi em đến bên cuộc đời" },
    { time: 101.4, text: "Lòng anh thấy vui biết mấy như có phép màu" },
    { time: 105.0, text: "Phép màu đã cho ta gặp nhau" },
    { time: 108.8, text: "Phép màu giữ cho tình đậm sâu" },
    { time: 112.7, text: "Dù ngày mai có ra sao lòng vẫn không đổi thay" },
    { time: 116.7, text: "Nguyện yêu em mãi yêu em đến hết cuộc đời này" },
    { time: 120.5, text: "Oh oh oh phép màu tình yêu" },
    { time: 124.3, text: "Oh oh oh mãi luôn nhiệm màu" },
    { time: 128.0, text: "Phép màu đã cho ta gặp nhau" },
    { time: 131.8, text: "Phép màu giữ cho tình đậm sâu" },
    { time: 135.7, text: "Dù ngày mai có ra sao lòng vẫn không đổi thay" },
    { time: 139.7, text: "Nguyện yêu em mãi yêu em đến hết cuộc đời này" },
    { time: 143.5, text: "Mãi yêu em... đến hết cuộc đời này..." },
    { time: 148.0, text: "" } // End of song, clear lyrics
];
let currentLyricIndex = -1;


// --- Global variables for the music player ---
let audioPlayer; 
let playPauseMusicBtn, stopMusicBtn, musicProgressBar, albumArtElement, currentTimeEl, durationEl;
let songTitleEl, songArtistEl;
let volumeBtn, volumeSlider;
let prevTrackBtn, nextTrackBtn;

// --- Global variables for Lyrics ---
let lyricsOverlay, currentLyricEl, nextLyricEl;

// --- Global variables for Music Visualizer ---
let audioContext; 
let analyser; 
let sourceNode; 
let visualizerCanvas, visualizerCtx; 
let dataArray; 
let rafId; 
let isVisualizerInitialized = false; 

/**
 * Renders shortcut sections and their items into the DOM.
 */
function renderShortcuts() {
    const container = document.getElementById('shortcutsContainer');
    if (!container) {
        console.error("Shortcut container not found!");
        return;
    }
    container.innerHTML = ''; 

    shortcutSections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'p-6 bg-slate-800 rounded-xl shadow-lg'; 

        const titleElement = document.createElement('h2');
        titleElement.className = 'text-2xl font-semibold mb-6 section-title tracking-wider'; 
        titleElement.textContent = section.title;
        sectionDiv.appendChild(titleElement);

        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4';

        section.shortcuts.forEach(shortcut => {
            const link = document.createElement('a');
            link.href = shortcut.url;
            link.target = "_blank"; 
            link.rel = "noopener noreferrer";
            link.className = 'shortcut-button p-4 rounded-lg text-center flex flex-col items-center justify-center h-32'; 

            const iconElement = document.createElement('i');
            const prefix = shortcut.iconPrefixOverride || section.iconPrefix || 'fas';
            iconElement.className = `${prefix} fa-${shortcut.icon} fa-2x mb-2 text-purple-400`;
            link.appendChild(iconElement);

            const nameSpan = document.createElement('span');
            nameSpan.className = 'text-sm font-medium';
            nameSpan.textContent = shortcut.name;
            link.appendChild(nameSpan);
            
            gridDiv.appendChild(link);
        });
        sectionDiv.appendChild(gridDiv);
        container.appendChild(sectionDiv);
    });
}

/**
 * Performs a Google search with the query from the search input.
 */
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) {
        console.error("Search input not found!");
        return;
    }
    const query = searchInput.value.trim();
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
}

/**
 * Initializes the main music player components and event listeners.
 */
function initializeMusicPlayer() {
    audioPlayer = new Audio(); 
    audioPlayer.crossOrigin = "anonymous"; 

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

    // Lyrics elements
    lyricsOverlay = document.getElementById('lyricsOverlay');
    currentLyricEl = document.getElementById('currentLyric');
    nextLyricEl = document.getElementById('nextLyric');

    const essentialElements = [playPauseMusicBtn, stopMusicBtn, musicProgressBar, albumArtElement, currentTimeEl, durationEl, songTitleEl, songArtistEl, volumeBtn, volumeSlider, prevTrackBtn, nextTrackBtn, lyricsOverlay, currentLyricEl, nextLyricEl];
    if (essentialElements.some(el => !el)) {
        console.error("Một hoặc nhiều phần tử của trình phát nhạc hoặc lời bài hát không được tìm thấy trong DOM!");
        const playerContainer = document.getElementById('musicPlayerContainer');
        if(playerContainer) playerContainer.style.display = 'none'; 
        return; 
    }
    
    loadTrack(currentTrackIndex); 
    setVolume(); 

    playPauseMusicBtn.addEventListener('click', togglePlayPause);
    stopMusicBtn.addEventListener('click', stopAudio);
    musicProgressBar.addEventListener('input', seekAudio); 
    audioPlayer.addEventListener('timeupdate', () => {
        updateProgressBar();
        if (audioPlayer) { // Ensure audioPlayer is defined
             updateLyrics(audioPlayer.currentTime);
        }
    }); 
    audioPlayer.addEventListener('loadedmetadata', setAudioDuration); 
    audioPlayer.addEventListener('ended', playNextTrackHandler); 

    volumeSlider.addEventListener('input', setVolume);
    volumeBtn.addEventListener('click', toggleMute);

    prevTrackBtn.addEventListener('click', playPrevTrackHandler); 
    nextTrackBtn.addEventListener('click', playNextTrackHandler); 
    
    updateTrackButtonsState(); 
}

/**
 * Loads a specific track into the audio player.
 * @param {number} trackIndex - The index of the track in the audioPlaylist.
 */
function loadTrack(trackIndex) {
    if (trackIndex < 0 || trackIndex >= audioPlaylist.length) {
        console.error("Chỉ số bài hát không hợp lệ:", trackIndex);
        return;
    }
    const track = audioPlaylist[trackIndex];
    const currentVolume = audioPlayer ? audioPlayer.volume : 1; 
    const currentMutedState = audioPlayer ? audioPlayer.muted : false;

    audioPlayer.src = track.src; 
    audioPlayer.volume = currentVolume; 
    audioPlayer.muted = currentMutedState; 

    albumArtElement.src = track.albumArt; 
    albumArtElement.alt = track.title + " - Album Art";
    songTitleEl.textContent = track.title;
    songArtistEl.textContent = track.artist;
    
    musicProgressBar.value = 0;
    currentTimeEl.textContent = formatTime(0);
    durationEl.textContent = formatTime(audioPlayer.duration || 0); 
    
    currentLyricIndex = -1; // Reset lyric index for the new track
    updateLyrics(0); // Update lyrics display for the new track (or hide if not Phép Màu)

    updatePlayPauseIcon(); 
    updateTrackButtonsState(); 
    updateVolumeIcon(); 
}

/**
 * Toggles play/pause state of the audio player.
 */
function togglePlayPause() {
    if (!audioPlayer) return;
    if (!isVisualizerInitialized && audioPlayer) {
        setupAudioGraph();
    }

    if (audioPlayer.paused || audioPlayer.ended) {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume().then(() => {
                audioPlayer.play().catch(handlePlayError);
            }).catch(handlePlayError);
        } else {
            audioPlayer.play().catch(handlePlayError);
        }
    } else {
        audioPlayer.pause();
    }
    updatePlayPauseIcon(); 
    // Update lyrics visibility based on play/pause state
    if (audioPlayer) updateLyrics(audioPlayer.currentTime);
}

/**
 * Stops the audio, resets current time, and updates UI.
 */
function stopAudio() {
    if (!audioPlayer) return;
    audioPlayer.pause();
    audioPlayer.currentTime = 0; 
    updatePlayPauseIcon(); 
    if (rafId) { 
        cancelAnimationFrame(rafId);
        rafId = null;
        if(visualizerCtx && visualizerCanvas) {
            visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        }
    }
    // Hide lyrics when stopped
    if (lyricsOverlay) {
        lyricsOverlay.classList.remove('opacity-100', 'pointer-events-auto');
        lyricsOverlay.classList.add('opacity-0', 'pointer-events-none');
    }
    if (currentLyricEl) {
        currentLyricEl.textContent = '';
        currentLyricEl.classList.remove('active', 'opacity-100', 'translate-y-0');
        currentLyricEl.classList.add('opacity-0', 'translate-y-1');
    }
    if (nextLyricEl) {
        nextLyricEl.textContent = '';
        nextLyricEl.classList.remove('visible', 'opacity-100');
        nextLyricEl.classList.add('opacity-0');
    }
    currentLyricIndex = -1;
}

/**
 * Updates the play/pause button icon based on the audio player's state.
 */
function updatePlayPauseIcon() {
    if (!playPauseMusicBtn || !audioPlayer) return;
    if (audioPlayer.paused || audioPlayer.ended) {
        playPauseMusicBtn.innerHTML = '<i class="fas fa-play fa-lg"></i>';
    } else {
        playPauseMusicBtn.innerHTML = '<i class="fas fa-pause fa-lg"></i>';
    }
}

/**
 * Updates the music progress bar and current time display.
 */
function updateProgressBar() {
    if (!audioPlayer || !musicProgressBar || !currentTimeEl) return;
    if (audioPlayer.duration && !isNaN(audioPlayer.duration)) { 
        musicProgressBar.value = audioPlayer.currentTime;
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    }
}

/**
 * Sets the maximum value for the progress bar and total duration display.
 */
function setAudioDuration() {
    if (!audioPlayer || !musicProgressBar || !durationEl) return;
    if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
        musicProgressBar.max = audioPlayer.duration;
        durationEl.textContent = formatTime(audioPlayer.duration);
    }
}

/**
 * Seeks the audio to the position selected on the progress bar.
 */
function seekAudio() {
    if (!audioPlayer || !musicProgressBar) return;
    audioPlayer.currentTime = musicProgressBar.value;
}

/**
 * Formats time in seconds to a mm:ss string.
 */
function formatTime(timeInSeconds) {
    if (isNaN(timeInSeconds) || timeInSeconds < 0) timeInSeconds = 0;
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

/**
 * Handles errors during audio playback.
 */
function handlePlayError(error) {
    console.error("Lỗi khi phát nhạc:", error.name, error.message);
    if (error.name === 'NotAllowedError') {
        console.warn("Autoplay blocked by browser. User interaction required.");
    } else if (error.name === 'AbortError') {
        console.info("Playback aborted.");
    }
    updatePlayPauseIcon(); 
}

/**
 * Sets the audio volume.
 */
function setVolume() {
    if (!audioPlayer || !volumeSlider) return;
    const newVolume = parseFloat(volumeSlider.value);
    audioPlayer.volume = newVolume;
    audioPlayer.muted = (newVolume === 0);
    updateVolumeIcon();
}

/**
 * Toggles the mute/unmute state.
 */
function toggleMute() {
    if (!audioPlayer) return;
    audioPlayer.muted = !audioPlayer.muted; 
    if (!audioPlayer.muted && audioPlayer.volume === 0) {
        audioPlayer.volume = 0.5; 
        if (volumeSlider) volumeSlider.value = audioPlayer.volume.toString();
    }
    updateVolumeIcon();
}

/**
 * Updates the volume button icon.
 */
function updateVolumeIcon() {
    if(!volumeBtn || !audioPlayer) return; 
    volumeBtn.innerHTML = ''; 
    const icon = document.createElement('i');
    icon.classList.add('fas');
    if (audioPlayer.muted || audioPlayer.volume === 0) {
        icon.classList.add('fa-volume-xmark');
    } else if (audioPlayer.volume < 0.5) {
        icon.classList.add('fa-volume-low');
    } else {
        icon.classList.add('fa-volume-high');
    }
    volumeBtn.appendChild(icon);
}

/**
 * Handler for playing the next track.
 */
function playNextTrackHandler() {
    currentTrackIndex = (currentTrackIndex + 1) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
    if(audioPlayer && (!audioPlayer.paused || audioPlaylist.length === 1)){ 
        audioPlayer.play().catch(handlePlayError);
    }
}

/**
 * Handler for playing the previous track.
 */
function playPrevTrackHandler() {
    currentTrackIndex = (currentTrackIndex - 1 + audioPlaylist.length) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
    if(audioPlayer && (!audioPlayer.paused || audioPlaylist.length === 1)){
         audioPlayer.play().catch(handlePlayError);
    }
}

/**
 * Updates the enabled/disabled state of previous/next track buttons.
 */
function updateTrackButtonsState() {
    if(!prevTrackBtn || !nextTrackBtn) return;
    const disableButtons = audioPlaylist.length <= 1;
    prevTrackBtn.disabled = disableButtons;
    nextTrackBtn.disabled = disableButtons;
    [prevTrackBtn, nextTrackBtn].forEach(btn => {
        btn.classList.toggle('opacity-50', disableButtons);
        btn.classList.toggle('cursor-not-allowed', disableButtons);
    });
}

// --- LYRICS FUNCTIONS ---
/**
 * Updates the lyrics display based on the current audio time.
 * @param {number} currentTime - The current time of the audio player in seconds.
 */
function updateLyrics(currentTime) {
    if (!audioPlayer || !phepMauLyrics || !lyricsOverlay || !currentLyricEl || !nextLyricEl) return;

    const currentTrack = audioPlaylist[currentTrackIndex];
    // Only show lyrics if the current song is "Phép Màu" and music is playing or loaded
    if (!currentTrack || !currentTrack.title.includes("Phép Màu (Đàn Cá Gỗ OST)")) {
        lyricsOverlay.classList.remove('opacity-100', 'pointer-events-auto');
        lyricsOverlay.classList.add('opacity-0', 'pointer-events-none');
        currentLyricEl.textContent = '';
        nextLyricEl.textContent = '';
        currentLyricEl.classList.remove('active', 'opacity-100', 'translate-y-0');
        currentLyricEl.classList.add('opacity-0', 'translate-y-1');
        nextLyricEl.classList.remove('visible', 'opacity-100');
        nextLyricEl.classList.add('opacity-0');
        currentLyricIndex = -1;
        return;
    }

    // Show lyrics overlay if Phép Màu is the current song and it's playing or paused (loaded)
    if (!audioPlayer.paused || audioPlayer.readyState >= 2) { // readyState >= 2 means metadata loaded
        lyricsOverlay.classList.add('opacity-100', 'pointer-events-auto');
        lyricsOverlay.classList.remove('opacity-0', 'pointer-events-none');
    } else { // Hide if not playing and not loaded enough
        lyricsOverlay.classList.remove('opacity-100', 'pointer-events-auto');
        lyricsOverlay.classList.add('opacity-0', 'pointer-events-none');
    }
    
    let newLyricIndex = -1;
    for (let i = 0; i < phepMauLyrics.length; i++) {
        if (currentTime >= phepMauLyrics[i].time) {
            newLyricIndex = i;
        } else {
            break;
        }
    }

    if (newLyricIndex !== currentLyricIndex) {
        currentLyricIndex = newLyricIndex;

        // Update current lyric
        if (currentLyricIndex !== -1 && phepMauLyrics[currentLyricIndex]) {
            currentLyricEl.classList.remove('active', 'opacity-100', 'translate-y-0');
            currentLyricEl.classList.add('opacity-0', 'translate-y-1'); 

            setTimeout(() => {
                currentLyricEl.textContent = phepMauLyrics[currentLyricIndex].text;
                currentLyricEl.classList.add('active', 'opacity-100', 'translate-y-0');
                currentLyricEl.classList.remove('opacity-0', 'translate-y-1');
            }, 50); 
        } else {
            currentLyricEl.textContent = '';
            currentLyricEl.classList.remove('active', 'opacity-100', 'translate-y-0');
            currentLyricEl.classList.add('opacity-0', 'translate-y-1');
        }

        // Update next lyric
        const nextIndex = currentLyricIndex + 1;
        if (nextIndex < phepMauLyrics.length && phepMauLyrics[nextIndex] && phepMauLyrics[nextIndex].text.trim() !== "") {
             nextLyricEl.classList.remove('visible', 'opacity-100');
             nextLyricEl.classList.add('opacity-0');
             setTimeout(() => {
                nextLyricEl.textContent = phepMauLyrics[nextIndex].text;
                nextLyricEl.classList.add('visible', 'opacity-100');
                nextLyricEl.classList.remove('opacity-0');
            }, 100); 
        } else {
            nextLyricEl.textContent = '';
            nextLyricEl.classList.remove('visible', 'opacity-100');
            nextLyricEl.classList.add('opacity-0');
        }
    }
}


// --- MUSIC VISUALIZER FUNCTIONS ---
function setupAudioGraph() {
    if (isVisualizerInitialized || !audioPlayer) return; 

    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256; 
        sourceNode = audioContext.createMediaElementSource(audioPlayer);
        sourceNode.connect(analyser);       
        analyser.connect(audioContext.destination); 
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        isVisualizerInitialized = true; 
        console.log("Audio graph for visualizer initialized.");
    } catch (e) {
        console.error("Lỗi khởi tạo AudioContext hoặc Analyser cho visualizer:", e);
        if (visualizerCanvas) visualizerCanvas.style.display = 'none'; 
        isVisualizerInitialized = false; 
    }
}

function initializeVisualizerCanvas() {
    visualizerCanvas = document.getElementById('musicVisualizer');
    const imagePlaceholderContainer = document.querySelector('.image-placeholder-container'); // Use the container

    if (!visualizerCanvas || !imagePlaceholderContainer) {
        console.error("Visualizer: Không tìm thấy canvas hoặc image placeholder container.");
        if (visualizerCanvas) visualizerCanvas.style.display = 'none';
        return;
    }
    visualizerCtx = visualizerCanvas.getContext('2d');

    function setCanvasDimensions() {
        if (!imagePlaceholderContainer || !visualizerCanvas) return;
        const avatarRect = imagePlaceholderContainer.getBoundingClientRect();
        visualizerCanvas.height = avatarRect.height > 0 ? avatarRect.height : 300; 
        visualizerCanvas.width = 60; 

        if (visualizerCtx && (!rafId || (audioPlayer && audioPlayer.paused))) {
             visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        }
    }
    setCanvasDimensions(); 
    window.addEventListener('resize', setCanvasDimensions);

    if (audioPlayer) {
        audioPlayer.addEventListener('play', () => {
            if (!isVisualizerInitialized) { 
                setupAudioGraph();
            }
            if (isVisualizerInitialized && audioContext && audioContext.state === 'suspended') {
                audioContext.resume().then(() => {
                    if (!rafId) drawVisualizerLoop();
                }).catch(e => console.error("Error resuming AudioContext for visualizer:", e));
            } else if (isVisualizerInitialized && !rafId) {
                drawVisualizerLoop();
            }
        });

        audioPlayer.addEventListener('pause', () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        });

        audioPlayer.addEventListener('ended', () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
                if(visualizerCtx && visualizerCanvas) {
                    visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
                }
            }
        });
    }
}

function drawVisualizerLoop() {
    if (!isVisualizerInitialized || !analyser || !visualizerCtx || !dataArray || !visualizerCanvas) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        return;
    }

    rafId = requestAnimationFrame(drawVisualizerLoop); 
    analyser.getByteFrequencyData(dataArray); 
    visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height); 

    const numBars = 32; 
    const barThickness = (visualizerCanvas.height / numBars) * 0.75; 
    const barSpacing = (visualizerCanvas.height / numBars) * 0.25; 
    let currentY = barSpacing / 2; 
    const bufferLength = analyser.frequencyBinCount; 

    for (let i = 0; i < numBars; i++) {
        const dataArrayIndex = Math.min(bufferLength - 1, Math.floor((i / numBars) * (bufferLength * 0.75)));
        const barLengthFraction = dataArray[dataArrayIndex] / 255.0; 
        let barLength = barLengthFraction * visualizerCanvas.width; 
        if (barLength < 1 && dataArray[dataArrayIndex] > 0) barLength = 1; 
        if (barLength > visualizerCanvas.width) barLength = visualizerCanvas.width; 
        visualizerCtx.fillStyle = '#a78bfa'; 
        visualizerCtx.fillRect(0, currentY, barLength, barThickness);
        currentY += barThickness + barSpacing; 
    }
}


// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    renderShortcuts(); 
    initializeMusicPlayer(); 

    if (document.getElementById('musicPlayerContainer')) { 
        initializeVisualizerCanvas();
    }
    
    // Initial lyrics setup based on the initially loaded track
    if (audioPlayer) {
        updateLyrics(audioPlayer.currentTime);
    }


    const searchButton = document.getElementById('searchButton'); 
    if (searchButton) { 
        searchButton.addEventListener('click', performSearch); 
    } else {
        console.warn("Search button with id 'searchButton' not found in HTML.");
    }

    const searchInputElement = document.getElementById('searchInput');
    if (searchInputElement) {
        searchInputElement.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    } else {
        console.error("Search input element not found for keypress listener.");
    }

    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    } else {
        console.error("Current year element not found in footer.");
    }
});