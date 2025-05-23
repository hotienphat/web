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

// --- START: LYRICS CONFIGURATION ---
// Lời bài hát Phép Màu (Đàn Cá Gỗ OST)
// Thời gian (time) tính bằng giây. Bạn có thể cần điều chỉnh cho chính xác.
const phepMauLyrics = [
    { time: 0, text: "Bài hát: Phép Màu" },
    { time: 5, text: "Mounter x MAYDAYs, Minh Tốc" }, // Giới thiệu ca sĩ/tên bài
    { time: 14.5, text: "Ngoài hiên mưa rơi, mưa vẫn rơi" },
    { time: 18.0, text: "Trong lòng em, nhớ anh không nguôi" },
    { time: 21.5, text: "Tình yêu này, vẫn luôn đong đầy" },
    { time: 25.0, text: "Dù cho, bão giông vây quanh" },
    { time: 28.5, text: "Em vẫn tin, có phép màu" },
    { time: 32.0, text: "Sẽ đưa anh, đến bên em" },
    { time: 35.5, text: "Cầm tay em, mình cùng nhau" },
    { time: 39.0, text: "Đi hết, quãng đường dài" },
    { time: 42.5, text: "Phép màu, là khi có anh" },
    { time: 46.0, text: "Phép màu, sưởi ấm tim em" },
    { time: 49.5, text: "Phép màu, xóa tan giá băng" },
    { time: 53.0, text: "Cho tình yêu, mãi xanh ngời" },
    { time: 56.5, text: "Dù mai sau, có ra sao" },
    { time: 60.0, text: "Em vẫn yêu, chỉ riêng anh" },
    { time: 63.5, text: "Nguyện cùng anh, xây đắp tương lai" },
    { time: 67.0, text: "Hạnh phúc mãi, không xa rời" },
    // Verse 2 (Tiếp tục thêm lời nếu có)
    { time: 85.0, text: "Ngày anh đến, như nắng mai" },
    { time: 88.5, text: "Xua tan đi, những đêm đông dài" },
    { time: 92.0, text: "Nụ cười anh, ấm áp dịu dàng" },
    { time: 95.5, text: "Làm tim em, xuyến xao bồi hồi" },
    { time: 99.0, text: "Em ước mong, thời gian ngừng trôi" },
    { time: 102.5, text: "Để khoảnh khắc, này mãi thôi" },
    { time: 106.0, text: "Được bên anh, được yêu anh" },
    { time: 109.5, text: "Là điều em, hằng ước ao" },
    // Chorus
    { time: 113.0, text: "Phép màu, là khi có anh" },
    { time: 116.5, text: "Phép màu, sưởi ấm tim em" },
    { time: 120.0, text: "Phép màu, xóa tan giá băng" },
    { time: 123.5, text: "Cho tình yêu, mãi xanh ngời" },
    { time: 127.0, text: "Dù mai sau, có ra sao" },
    { time: 130.5, text: "Em vẫn yêu, chỉ riêng anh" },
    { time: 134.0, text: "Nguyện cùng anh, xây đắp tương lai" },
    { time: 137.5, text: "Hạnh phúc mãi, không xa rời" },
    // Outro
    { time: 144.5, text: "Oh oh oh, phép màu tình yêu" },
    { time: 151.5, text: "Oh oh oh, có anh bên đời" },
    { time: 158.0, text: "Phép màu..." },
    { time: 165.0, text: "" } // Dòng trống để xóa lời ở cuối bài
];
// --- END: LYRICS CONFIGURATION ---

// --- START: MUSIC PLAYER CONFIGURATION ---
const audioPlaylist = [
    {
        title: "Phép Màu (Đàn Cá Gỗ OST)",
        artist: "Mounter x MAYDAYs, Minh Tốc | Official MV",
        src: "./Backround sound/phepmau.mp3", 
        albumArt: "./Backround sound/Phepmaulogo.jpg",
        lyrics: phepMauLyrics // Gán lời bài hát cho track này
    },
    // Thêm các bài hát khác vào đây nếu muốn, mỗi bài có thể có hoặc không có key 'lyrics'
];
let currentTrackIndex = 0;
// --- END: MUSIC PLAYER CONFIGURATION ---

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
let rafId;
let isVisualizerInitialized = false;

// --- Global variables for Lyrics Display ---
let avatarLyricsContainer, lyricsTextScroller;
let currentLyricsData = []; // Sẽ chứa lời của bài hát hiện tại
let currentLyricIndex = -1; // Chỉ số của dòng lời hiện tại
let lyricsSystemInitialized = false; // Đánh dấu hệ thống lời đã sẵn sàng chưa


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
    audioPlayer.addEventListener('timeupdate', () => {
        updateProgressBar();
        if (lyricsSystemInitialized) { // Chỉ cập nhật lời nếu hệ thống đã sẵn sàng
            updateLyricsDisplay();
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

    // Cập nhật lời bài hát cho track mới
    currentLyricsData = track.lyrics || []; // Lấy lời từ track object, hoặc mảng rỗng nếu không có
    if (lyricsSystemInitialized) {
        renderLyricsForCurrentTrack(); // Hiển thị lời cho track mới
    }
    
    updatePlayPauseIcon(); 
    updateTrackButtonsState(); 
    updateVolumeIcon(); 
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
        if (visualizerCtx && (!rafId || audioPlayer.paused)) {
             visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        }
    }
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

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

// --- LYRICS DISPLAY FUNCTIONS ---
/**
 * Initializes the lyrics display system.
 */
function initializeLyricsSystem() {
    avatarLyricsContainer = document.getElementById('avatarLyricsContainer');
    lyricsTextScroller = document.getElementById('lyricsTextScroller');

    if (!avatarLyricsContainer || !lyricsTextScroller) {
        console.error("Lyrics container (#avatarLyricsContainer) or scroller (#lyricsTextScroller) not found in HTML!");
        lyricsSystemInitialized = false;
        return;
    }
    lyricsSystemInitialized = true;
    console.log("Lyrics system initialized.");
    // Initial rendering of lyrics will happen in loadTrack
}

/**
 * Renders all lyric lines for the current track into the scroller.
 * Called when a new track is loaded.
 */
function renderLyricsForCurrentTrack() {
    if (!lyricsSystemInitialized || !lyricsTextScroller) return;

    lyricsTextScroller.innerHTML = ''; // Xóa lời cũ
    currentLyricIndex = -1; // Reset chỉ số dòng lời hiện tại
    lyricsTextScroller.style.transform = 'translateY(0px)'; // Reset vị trí cuộn

    if (currentLyricsData && currentLyricsData.length > 0) {
        currentLyricsData.forEach((lyricLine, index) => {
            const p = document.createElement('p');
            p.classList.add('lyric-line');
            // Sử dụng textContent để tránh XSS, và đảm bảo có nội dung (dù là khoảng trắng)
            p.textContent = lyricLine.text && lyricLine.text.trim() !== "" ? lyricLine.text : " "; 
            p.dataset.index = index; // Lưu chỉ số để dễ dàng tham chiếu
            lyricsTextScroller.appendChild(p);
        });
        // Cập nhật hiển thị ban đầu (ví dụ: dòng đầu tiên trước khi nhạc bắt đầu)
        updateLyricsDisplay(true); // true để buộc cập nhật
    } else {
        // Hiển thị thông báo nếu không có lời cho bài hát này
        const p = document.createElement('p');
        p.classList.add('lyric-line');
        p.textContent = "Lời bài hát không có sẵn";
        lyricsTextScroller.appendChild(p);
    }
}

/**
 * Updates the highlighted lyric line and scrolls the view.
 * Called on audioPlayer.timeupdate and when lyrics are first rendered.
 * @param {boolean} forceUpdate - If true, forces re-evaluation and re-styling even if index hasn't changed.
 */
function updateLyricsDisplay(forceUpdate = false) {
    if (!lyricsSystemInitialized || !audioPlayer || !currentLyricsData || currentLyricsData.length === 0) {
        return; // Không làm gì nếu hệ thống chưa sẵn sàng hoặc không có lời
    }

    const currentTime = audioPlayer.currentTime;
    let newLyricIndex = -1;

    // Tìm dòng lời hiện tại dựa trên currentTime
    // Dòng lời được chọn là dòng cuối cùng có 'time' <= currentTime
    for (let i = 0; i < currentLyricsData.length; i++) {
        if (currentLyricsData[i].time <= currentTime) {
            newLyricIndex = i;
        } else {
            // Vì lời được sắp xếp theo thời gian, có thể dừng sớm
            break; 
        }
    }

    if (newLyricIndex !== currentLyricIndex || forceUpdate) {
        const allLines = lyricsTextScroller.querySelectorAll('.lyric-line');

        allLines.forEach((line, index) => {
            line.classList.remove('active', 'previous', 'next');
            if (index === newLyricIndex) {
                line.classList.add('active');
            } else if (index === newLyricIndex - 1) {
                line.classList.add('previous');
            } else if (index === newLyricIndex + 1) {
                line.classList.add('next');
            }
        });
        
        currentLyricIndex = newLyricIndex; // Cập nhật chỉ số dòng lời hiện tại

        // Cuộn để dòng hiện tại ở giữa (nếu có dòng active)
        if (currentLyricIndex >= 0) {
            const activeLineElement = lyricsTextScroller.querySelector(`.lyric-line[data-index="${currentLyricIndex}"]`);
            if (activeLineElement && avatarLyricsContainer && lyricsTextScroller) {
                const scrollerVisibleHeight = avatarLyricsContainer.clientHeight;
                // Tính toán vị trí để dòng active ở giữa khu vực hiển thị
                let scrollOffset = activeLineElement.offsetTop - (scrollerVisibleHeight / 2) + (activeLineElement.offsetHeight / 2);

                // Ngăn cuộn quá xa ở đầu và cuối
                const maxScroll = lyricsTextScroller.scrollHeight - scrollerVisibleHeight;
                scrollOffset = Math.max(0, Math.min(scrollOffset, maxScroll > 0 ? maxScroll : 0));
                
                lyricsTextScroller.style.transform = `translateY(-${scrollOffset}px)`;
            }
        } else {
            // Nếu không có dòng active (ví dụ: trước khi bài hát bắt đầu)
            lyricsTextScroller.style.transform = 'translateY(0px)';
        }
    }
}


// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    renderShortcuts(); 
    initializeMusicPlayer(); // Khởi tạo trình phát nhạc (sẽ gọi loadTrack)
    
    // Khởi tạo hệ thống hiển thị lời bài hát
    // Quan trọng: Phải gọi SAU khi các phần tử DOM (#avatarLyricsContainer, #lyricsTextScroller) đã tồn tại
    initializeLyricsSystem(); 

    if (document.getElementById('musicPlayerContainer')) {
        initializeVisualizerCanvas();
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