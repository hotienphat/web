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
        title: "Phép Màu (Đàn Cá Gỗ OST)",
        artist: "Mounter x MAYDAYs, Minh Tốc | Official MV",
        src: "./Backround sound/phepmau.mp3", // Ensure this path is correct
        albumArt: "./Backround sound/Phepmaulogo.jpg" // Ensure this path is correct
    },
    // Add more tracks here if needed
];
let currentTrackIndex = 0;
// --- END: MUSIC PLAYER CONFIGURATION ---

// --- START: LYRICS CONFIGURATION (UPDATED) ---
const songLyrics = {
    "Phép Màu (Đàn Cá Gỗ OST)": [
        { time: 0, text: "(Nhạc dạo)" },
        { time: 19, text: "Ngày thay đêm, vội trôi giấc mơ êm đềm" },
        { time: 24, text: "Tôi lênh đênh trên biển vắng" },
        { time: 28, text: "Hoàng hôn chờ em chưa buông nắng" },
        { time: 32, text: "Đừng tìm nhau" },
        { time: 35, text: "Vào hôm gió mưa tơi bời" },
        { time: 38, text: "Sợ lời sắp nói vỡ tan thương đau" },
        { time: 42, text: "Hẹn kiếp sau có nhau trọn đời" },
        { time: 47, text: "Liệu người có còn ở đây với tôi thật lâu?" },
        { time: 52, text: "Ngày rộng tháng dài, sợ mai không còn thấy nhau" },
        { time: 56, text: "Ngày em đến áng mây xanh thêm" },
        { time: 61, text: "Ngày em đi nắng vương cuối thềm" }, // 1:01
        { time: 65, text: "Thiếu em tôi sợ bơ vơ, vắng em như tàn cơn mơ" }, // 1:05
        { time: 69, text: "Chẳng phải phép màu, vậy sao chúng ta gặp nhau?" }, // 1:09
        { time: 74, text: "Một người khẽ cười, người kia cũng dịu nỗi đau" }, // 1:14
        { time: 79, text: "Gọi tôi thức giấc cơn ngủ mê" }, // 1:19
        { time: 83, text: "Dìu tôi đi lúc quên lối về" }, // 1:23
        { time: 87, text: "Quãng đời mai sau luôn cạnh nhau" }, // 1:27
        { time: 92, text: "(Nhạc dạo)" }, // 1:32
        { time: 97, text: "Rồi ngày mai, còn ai với ai ở lại?" }, // 1:37
        { time: 101, text: "Vẫn căng buồm ra khơi, theo làn gió mới" }, // 1:41
        { time: 106, text: "Vì biết đâu mọi thứ chưa bắt đầu" }, // 1:46
        { time: 113, text: "Hà há ha hà, hà há hà" }, // 1:53
        { time: 120, text: "Liệu người có còn ở đây với tôi thật lâu?" }, // 2:00
        { time: 125, text: "Ngày rộng tháng dài, sợ mai không còn thấy nhau" }, // 2:05
        { time: 129, text: "Ngày em đến áng mây xanh thêm" }, // 2:09
        { time: 133, text: "Ngày em đi nắng vương cuối thềm" }, // 2:13
        { time: 138, text: "Thiếu em tôi sợ bơ vơ, vắng em như tàn cơn mơ" }, // 2:18
        { time: 142, text: "Chẳng phải phép màu, vậy sao chúng ta gặp nhau?" }, // 2:22
        { time: 147, text: "Một người khẽ cười, người kia cũng dịu nỗi đau" }, // 2:27
        { time: 151, text: "Gọi tôi thức giấc cơn ngủ mê" }, // 2:31
        { time: 156, text: "Dìu tôi đi lúc quên lối về" }, // 2:36
        { time: 160, text: "Quãng đời thanh xuân, sao em cho tôi giữ lấy, giữ lấy!" }, // 2:40
        { time: 166, text: "(Guitar solo)" }, // 2:46
        { time: 172, text: "Qua bao khổ đau vẫn bên cạnh nhau!" }, // 2:52
        { time: 175, text: "Chẳng phải phép màu, vậy sao chúng ta gặp nhau?" }, // 2:55
        { time: 180, text: "Một người khẽ cười, người kia cũng dịu nỗi đau" }, // 3:00
        { time: 184, text: "Gọi tôi thức giấc cơn ngủ mê" }, // 3:04
        { time: 189, text: "Dìu tôi đi lúc quên lối về" }, // 3:09
        { time: 193, text: "Quãng đời mai sau luôn cạnh nhau" }, // 3:13
        { time: 202, text: "Quãng đời mai sau luôn cạnh nhau" }, // 3:22
        { time: 207, text: "Quãng đời mai sau..." }, // 3:27
        { time: 211, text: "Luôn cạnh nhau..." }, // 3:31
        { time: 218, text: "(Outro - Nhạc kết)"}, // 3:38
        { time: 225, text: "" } // Clear lyrics after outro (adjust time if needed)
    ]
};

let lyricsDisplayContainer;
let currentLyrics = [];
// --- END: LYRICS CONFIGURATION ---


// --- Global variables for the music player ---
let audioPlayer;
let playPauseMusicBtn, stopMusicBtn, musicProgressBar, albumArtElement, currentTimeEl, durationEl;
let songTitleEl, songArtistEl;
let volumeBtn, volumeSlider;
let prevTrackBtn, nextTrackBtn;

// --- Global variables for Music Visualizer ---
let audioContext;
let analyser;
let sourceNode;
let visualizerCanvas, visualizerCtx;
let dataArray;
let rafId; // requestAnimationFrame ID
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

    const essentialElements = [playPauseMusicBtn, stopMusicBtn, musicProgressBar, albumArtElement, currentTimeEl, durationEl, songTitleEl, songArtistEl, volumeBtn, volumeSlider, prevTrackBtn, nextTrackBtn];
    if (essentialElements.some(el => !el)) {
        console.error("Một hoặc nhiều phần tử của trình phát nhạc không được tìm thấy trong DOM!");
        const playerContainer = document.getElementById('musicPlayerContainer');
        if(playerContainer) playerContainer.style.display = 'none'; 
        return; 
    }

    loadTrack(currentTrackIndex); 
    setVolume(); 

    playPauseMusicBtn.addEventListener('click', togglePlayPause);
    stopMusicBtn.addEventListener('click', stopAudio);
    musicProgressBar.addEventListener('input', seekAudio); 
    audioPlayer.addEventListener('timeupdate', updateProgressBar); 
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
    const currentVolume = audioPlayer.volume; 
    const currentMutedState = audioPlayer.muted; 

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

    updatePlayPauseIcon(); 
    updateTrackButtonsState(); 
    updateVolumeIcon(); 

    loadLyricsForTrack(); // Load lyrics for the new track
}

/**
 * Toggles play/pause state of the audio player.
 */
function togglePlayPause() {
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
}

/**
 * Stops the audio, resets current time, and updates UI.
 */
function stopAudio() {
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
    clearLyricsDisplay(); 
}

/**
 * Updates the play/pause button icon based on the audio player's state.
 */
function updatePlayPauseIcon() {
    if (!playPauseMusicBtn) return;
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
    if (audioPlayer.duration && !isNaN(audioPlayer.duration)) { 
        musicProgressBar.value = audioPlayer.currentTime;
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
        updateLyricsDisplay(); 
    }
}

/**
 * Sets the maximum value for the progress bar and total duration display.
 */
function setAudioDuration() {
    if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
        musicProgressBar.max = audioPlayer.duration;
        durationEl.textContent = formatTime(audioPlayer.duration);
    }
}

/**
 * Seeks the audio to the position selected on the progress bar.
 */
function seekAudio() {
    audioPlayer.currentTime = musicProgressBar.value;
    updateLyricsDisplay(); 
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
        console.info("Playback aborted, possibly due to new track load or stop action.");
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
    if(!audioPlayer.paused || audioPlaylist.length === 1){
        audioPlayer.play().catch(handlePlayError);
    }
}

/**
 * Handler for playing the previous track.
 */
function playPrevTrackHandler() {
    currentTrackIndex = (currentTrackIndex - 1 + audioPlaylist.length) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
     if(!audioPlayer.paused || audioPlaylist.length === 1){
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
    const imagePlaceholder = document.querySelector('.image-placeholder'); 

    if (!visualizerCanvas || !imagePlaceholder) {
        console.error("Visualizer: Không tìm thấy canvas hoặc image placeholder.");
        if (visualizerCanvas) visualizerCanvas.style.display = 'none';
        return;
    }
    visualizerCtx = visualizerCanvas.getContext('2d');

    function setCanvasDimensions() {
        if (!imagePlaceholder || !visualizerCanvas) return;
        const avatarRect = imagePlaceholder.getBoundingClientRect();
        visualizerCanvas.height = avatarRect.height > 0 ? avatarRect.height : 300; 
        visualizerCanvas.width = 60; 
        if (visualizerCtx && (!rafId || (audioPlayer && audioPlayer.paused))) { // Check audioPlayer exists
             visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        }
    }
    setCanvasDimensions(); 
    window.addEventListener('resize', setCanvasDimensions); 

    if (audioPlayer) { // Ensure audioPlayer is initialized
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

// --- LYRICS DISPLAY FUNCTIONS (UPDATED) ---
function initializeLyricsDisplay() {
    lyricsDisplayContainer = document.getElementById('lyricsDisplayContainer');
    if (!lyricsDisplayContainer) {
        console.warn("Không tìm thấy vùng chứa lời bài hát (lyricsDisplayContainer).");
        return;
    }
    if (audioPlayer) {
        audioPlayer.addEventListener('loadeddata', loadLyricsForTrack); 
        audioPlayer.addEventListener('play', () => { // Ensure lyrics container is visible on play
            if (lyricsDisplayContainer && currentLyrics && currentLyrics.length > 0) {
                lyricsDisplayContainer.style.opacity = '1';
            }
            updateLyricsDisplay();
        }); 
        audioPlayer.addEventListener('ended', () => {
            clearLyricsDisplay();
            if (lyricsDisplayContainer) lyricsDisplayContainer.style.opacity = '0'; // Hide on end
        }); 
        audioPlayer.addEventListener('emptied', () => {
            clearLyricsDisplay();
            if (lyricsDisplayContainer) lyricsDisplayContainer.style.opacity = '0'; // Hide on empty
        });
        audioPlayer.addEventListener('seeked', updateLyricsDisplay); 
    }
}

function loadLyricsForTrack() {
    if (!audioPlayer || !songTitleEl || !audioPlaylist[currentTrackIndex]) {
        currentLyrics = [];
        clearLyricsDisplay();
        if (lyricsDisplayContainer) lyricsDisplayContainer.style.opacity = '0';
        return;
    }
    const trackTitle = audioPlaylist[currentTrackIndex].title;
    currentLyrics = songLyrics[trackTitle] || []; 
    clearLyricsDisplay(); 
    updateLyricsDisplay(); 
     if (lyricsDisplayContainer && currentLyrics.length > 0 && !audioPlayer.paused) {
        lyricsDisplayContainer.style.opacity = '1';
    } else if (lyricsDisplayContainer) {
        lyricsDisplayContainer.style.opacity = '0';
    }
}

function clearLyricsDisplay() {
    if (lyricsDisplayContainer) {
        lyricsDisplayContainer.innerHTML = '';
        // Opacity will be handled by updateLyricsDisplay or loadLyricsForTrack
    }
}

function updateLyricsDisplay() {
    if (!audioPlayer || !lyricsDisplayContainer || !currentLyrics) { // Removed currentLyrics.length === 0 check here
        if (lyricsDisplayContainer) {
            lyricsDisplayContainer.innerHTML = '';
            lyricsDisplayContainer.style.opacity = '0';
        }
        return;
    }
     if (currentLyrics.length === 0) { // Handle empty lyrics array specifically
        if (lyricsDisplayContainer) {
            lyricsDisplayContainer.innerHTML = '';
            lyricsDisplayContainer.style.opacity = '0';
        }
        return;
    }


    const currentTime = audioPlayer.currentTime;
    let activeLineIndex = -1;

    for (let i = 0; i < currentLyrics.length; i++) {
        if (currentTime >= currentLyrics[i].time) {
            if (i + 1 < currentLyrics.length) {
                if (currentTime < currentLyrics[i + 1].time) {
                    activeLineIndex = i;
                    break;
                }
            } else {
                activeLineIndex = i;
                break;
            }
        }
    }
    
    if (activeLineIndex === -1 && currentLyrics.length > 0 && currentLyrics[0].time === 0 && currentTime < (currentLyrics[1]?.time || currentLyrics[0].time + 3 )) {
        activeLineIndex = 0;
    }

    lyricsDisplayContainer.innerHTML = ''; 
    let linesAdded = 0;

    if (activeLineIndex !== -1) {
        // Display active line
        const activeLyricData = currentLyrics[activeLineIndex];
        if (activeLyricData && activeLyricData.text && activeLyricData.text.trim() !== "") {
            const pActive = document.createElement('p');
            pActive.textContent = activeLyricData.text;
            pActive.className = 'lyric-line active';
            lyricsDisplayContainer.appendChild(pActive);
            linesAdded++;
        }

        // Display up to 2 upcoming lines
        for (let i = 1; i <= 2 && (activeLineIndex + i) < currentLyrics.length; i++) {
            const upcomingLyricData = currentLyrics[activeLineIndex + i];
            if (upcomingLyricData && upcomingLyricData.text && upcomingLyricData.text.trim() !== "") {
                const pUpcoming = document.createElement('p');
                pUpcoming.textContent = upcomingLyricData.text;
                pUpcoming.className = `lyric-line upcoming-${i}`;
                lyricsDisplayContainer.appendChild(pUpcoming);
                linesAdded++;
            } else { // If upcoming lyric is empty or "...", stop adding more upcoming lines
                break; 
            }
        }
    } else if (currentLyrics.length > 0 && currentTime < currentLyrics[0].time) {
        // If before the first lyric, show the first few upcoming lines
        for (let i = 0; i < 3 && i < currentLyrics.length; i++) { // Show up to 3 lines
            const firstLyricData = currentLyrics[i];
            if (firstLyricData && firstLyricData.text && firstLyricData.text.trim() !== "") {
                const pFirstUpcoming = document.createElement('p');
                pFirstUpcoming.textContent = firstLyricData.text;
                // The first actual lyric is "active" visually, others are "upcoming"
                pFirstUpcoming.className = (i === 0 && firstLyricData.text.trim() !== "...") ? 'lyric-line active' : `lyric-line upcoming-${i === 0 ? 1 : i}`;
                lyricsDisplayContainer.appendChild(pFirstUpcoming);
                linesAdded++;
            } else {
                break; 
            }
        }
    }
    
    // Control visibility of the lyrics container
    if (linesAdded > 0 && !audioPlayer.paused) { // Only show if playing and lyrics exist
        lyricsDisplayContainer.style.opacity = '1';
    } else {
        lyricsDisplayContainer.style.opacity = '0';
    }
}


// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    renderShortcuts(); 
    initializeMusicPlayer(); 

    if (document.getElementById('musicPlayerContainer')) {
        initializeVisualizerCanvas();
    }

    initializeLyricsDisplay(); 

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
