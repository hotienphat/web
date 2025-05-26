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

// --- LYRICS DATA for "Phép Màu" (Times updated to total seconds) ---
const phepMauLyrics = [
    { time: 0,   text: "Bài hát: Phép Màu - Mounter x MAYDAYs, Minh Tốc" },
    { time: 3,   text: "Ngày thay đêm,vội trôi giấc mơ êm đềm" },
    { time: 10,  text: "Tôi lênh đênh trên biển vắng, hoàng hôn chờ em chưa buông nắng" },
    { time: 17,  text: "Đừng tìm nhau, vào hôm gió mưa tơi bời" },
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
    { time: 115, text: "Vì biết đâu mọi thứ chưa bắt đầu" },
    { time: 118, text: "Hah-hah-ah-ah-ah-ah" },
    { time: 130, text: "Liệu người có còn ở đây với tôi thật lâu?" },
    { time: 137, text: "Ngày rộng tháng dài, sợ mai không còn thấy nhau" },
    { time: 144, text: "Ngày em đến, áng mây xanh thêm, ngày em đi, nắng vương cuối thềm" },
    { time: 150, text: "Thiếu em tôi sợ bơ vơ, vắng em như tàn cơn mơ" },
    { time: 158, text: "Chẳng phải phép màu vậy sao chúng ta gặp nhau?" },
    { time: 164, text: "Một người khẽ cười, người kia cũng dịu nỗi đau" },
    { time: 171, text: "Gọi tôi thức giấc cơn ngủ mê, dìu tôi đi lúc quên lối về" },
    { time: 178, text: "Quãng đời thanh xuân sao em cho tôi giữ lấy, giữ lấy" },
    { time: 190, text: "(Qua bao khổ đau, ta bên cạnh nhau)" },
    { time: 217, text: "Chẳng phải phép màu vậy sao chúng ta gặp nhau?" },
    { time: 224, text: "Một người khẽ cười, người kia cũng dịu nỗi đau" },
    { time: 231, text: "Gọi tôi thức giấc cơn ngủ mê, dìu tôi đi lúc quên lối về" },
    { time: 240, text: "Quãng đời mai sau luôn cạnh nhau" },
    { time: 244, text: "Quãng đời mai sau luôn cạnh nhau" },
    { time: 255, text: "HẾT" },
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
        if (audioPlayer) {
             updateLyrics(audioPlayer.currentTime);
        }
    }); 
    audioPlayer.addEventListener('loadedmetadata', setAudioDuration); 
    audioPlayer.addEventListener('ended', playNextTrackHandlerImproved); // Use improved handler

    // Robust event listeners for play/pause state changes
    audioPlayer.addEventListener('play', () => {
        updatePlayPauseIcon();
        if (!isVisualizerInitialized && audioPlayer) { // Initialize visualizer if not done
            setupAudioGraph();
        }
        if (isVisualizerInitialized && audioContext && audioContext.state === 'suspended') {
            audioContext.resume().catch(e => console.error("Error resuming AudioContext for visualizer:", e));
        }
        // Start visualizer drawing loop if initialized and not already running
        if (isVisualizerInitialized && !rafId && audioPlayer.paused === false) {
             drawVisualizerLoop();
        }
    });

    audioPlayer.addEventListener('pause', () => { // Handles both user pause and implicit pause (e.g. before next track)
        updatePlayPauseIcon();
        if (rafId) { // Stop visualizer animation
            cancelAnimationFrame(rafId);
            rafId = null;
            // Clearing the canvas on pause is optional, stop/ended will handle explicit clears
        }
    });

    volumeSlider.addEventListener('input', setVolume);
    volumeBtn.addEventListener('click', toggleMute);

    prevTrackBtn.addEventListener('click', playPrevTrackHandler); 
    nextTrackBtn.addEventListener('click', playNextTrackHandlerImproved); // Use improved handler for consistency
    
    updateTrackButtonsState(); 
}

/**
 * Loads a specific track into the audio player.
 */
function loadTrack(trackIndex) {
    if (trackIndex < 0 || trackIndex >= audioPlaylist.length) {
        console.error("Chỉ số bài hát không hợp lệ:", trackIndex);
        return;
    }
    const track = audioPlaylist[trackIndex];
    const currentVolume = audioPlayer ? audioPlayer.volume : 1; 
    const currentMutedState = audioPlayer ? audioPlayer.muted : false;
    const isCurrentlyPlaying = audioPlayer && !audioPlayer.paused;


    audioPlayer.src = track.src; 
    audioPlayer.volume = currentVolume; 
    audioPlayer.muted = currentMutedState; 

    albumArtElement.src = track.albumArt; 
    albumArtElement.alt = track.title + " - Album Art";
    songTitleEl.textContent = track.title;
    songArtistEl.textContent = track.artist;
    
    musicProgressBar.value = 0;
    currentTimeEl.textContent = formatTime(0);
    // Duration will be set by 'loadedmetadata' event
    durationEl.textContent = formatTime(audioPlayer.duration || 0); 
    
    currentLyricIndex = -1; 
    updateLyrics(0); 

    updatePlayPauseIcon(); // Update based on new track's initial (paused) state
    updateTrackButtonsState(); 
    updateVolumeIcon();

    // If the player was playing before loading the new track, attempt to play the new track.
    // This is mainly for prev/next track actions when music was already playing.
    // The playNextTrackHandlerImproved and playPrevTrackHandler will manage this.
}

/**
 * Toggles play/pause state of the audio player.
 */
function togglePlayPause() {
    if (!audioPlayer) return;
    if (!isVisualizerInitialized && audioPlayer) { // Ensure visualizer is set up on first play attempt
        setupAudioGraph();
    }

    if (audioPlayer.paused || audioPlayer.ended) {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume().then(() => { // Resume audio context if suspended
                audioPlayer.play().catch(handlePlayError);
            }).catch(handlePlayError);
        } else {
            audioPlayer.play().catch(handlePlayError);
        }
    } else {
        audioPlayer.pause();
    }
    // The 'play' and 'pause' event listeners will call updatePlayPauseIcon()
}

/**
 * Stops the audio, resets current time, and updates UI.
 */
function stopAudio() {
    if (!audioPlayer) return;
    audioPlayer.pause(); // This will trigger the 'pause' event listener
    audioPlayer.currentTime = 0; 
    
    // Explicitly clear visualizer canvas on STOP
    if (visualizerCtx && visualizerCanvas) {
        visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        // Ensure rafId is null if it wasn't caught by pause event (should be, but good practice)
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
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
    updatePlayPauseIcon(); // Ensure icon is 'play' after stop actions
}

/**
 * Updates the play/pause button icon based on the audio player's state.
 * Relies mostly on audioPlayer.paused.
 */
function updatePlayPauseIcon() {
    if (!playPauseMusicBtn || !audioPlayer) return;
    if (audioPlayer.paused) {
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
    updatePlayPauseIcon(); // Reflect that playback failed
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
 * Improved handler for playing the next track (handles 'ended' and next button).
 */
function playNextTrackHandlerImproved() {
    // Stop and clear visualizer for the ended track
    if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }
    if (visualizerCtx && visualizerCanvas) {
        visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
    }

    const wasPlayingBeforeChange = !audioPlayer.paused; // Check if music was playing before this function was called

    currentTrackIndex = (currentTrackIndex + 1) % audioPlaylist.length;
    loadTrack(currentTrackIndex); // loadTrack will set initial icon state (usually 'play')

    if (wasPlayingBeforeChange || audioPlaylist.length === 1) { // If it was playing, or only one song (loop)
        audioPlayer.play().catch(handlePlayError); // 'play' event listener will update icon to 'pause'
    } else {
        updatePlayPauseIcon(); // Ensure icon is 'play' if not auto-playing
    }
}

/**
 * Handler for playing the previous track.
 */
function playPrevTrackHandler() {
    if (rafId) { // Stop and clear visualizer for the current track
        cancelAnimationFrame(rafId);
        rafId = null;
    }
    if (visualizerCtx && visualizerCanvas) {
        visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
    }

    const wasPlayingBeforeChange = !audioPlayer.paused;

    currentTrackIndex = (currentTrackIndex - 1 + audioPlaylist.length) % audioPlaylist.length;
    loadTrack(currentTrackIndex);

    if (wasPlayingBeforeChange || audioPlaylist.length === 1) {
         audioPlayer.play().catch(handlePlayError);
    } else {
        updatePlayPauseIcon();
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

    if (!audioPlayer.paused || audioPlayer.readyState >= 2) { 
        lyricsOverlay.classList.add('opacity-100', 'pointer-events-auto');
        lyricsOverlay.classList.remove('opacity-0', 'pointer-events-none');
    } else { 
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
        // Ensure sourceNode is created only once or reconnected if audioPlayer.src changes
        if (!sourceNode || sourceNode.mediaElement !== audioPlayer) {
            sourceNode = audioContext.createMediaElementSource(audioPlayer);
        }
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
    const imagePlaceholderContainer = document.querySelector('.image-placeholder-container'); 

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

    // Event listeners for play/pause/ended related to visualizer are now mainly in initializeMusicPlayer
    // to centralize state management.
    // This function primarily sets up the canvas.
}

function drawVisualizerLoop() {
    if (!isVisualizerInitialized || !analyser || !visualizerCtx || !dataArray || !visualizerCanvas || !audioPlayer || audioPlayer.paused) {
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
    
    if (audioPlayer) { // Initial lyrics setup
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