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
        src: "./Backround sound/phepmau.mp3", 
        albumArt: "./Backround sound/Phepmaulogo.jpg" 
    },
    // Add more tracks here if needed
];
let currentTrackIndex = 0;
// --- END: MUSIC PLAYER CONFIGURATION ---

// --- START: LYRICS CONFIGURATION ---
const songLyrics = {
    "Phép Màu (Đàn Cá Gỗ OST)": [
        // Thời gian được tính bằng giây, cần điều chỉnh chính xác cho khớp nhạc
        { time: 0, text: "..." }, // Dòng trống hoặc dấu ... cho đoạn intro nếu có
        { time: 14.2, text: "Hoàng hôn dần buông, nắng theo chân em đến đây" },
        { time: 17.8, text: "Nhẹ nhàng mây trôi, cuốn theo em bao ngất ngây" },
        { time: 21.3, text: "Nụ cười em trao, khiến anh như đang обомлеть" }, // (obomlet' - tiếng Nga)
        { time: 24.8, text: "Chẳng thể kiềm lòng, muốn ôm em trong phút giây" },
        { time: 28.3, text: "Và anh chỉ muốn thấy em cười mỗi ngày" },
        { time: 31.8, text: "Muốn được cùng em tay nắm tay đi hết quãng đời này" },
        { time: 35.5, text: "Dù bao gian khó, sóng gió chẳng đổi thay" },
        { time: 39.0, text: "Vì tình yêu anh trao em là thật đấy" },
        { time: 42.5, text: "Em có biết không em ơi?" },
        { time: 45.5, text: "Từ ngày em đến thế giới anh như thêm tuyệt vời" },
        { time: 49.5, text: "Là phép màu ông trời ban cho anh đấy người ơi" },
        { time: 53.0, text: "Nguyện yêu em mãi, chẳng bao giờ cách xa rời" },
        { time: 56.8, text: "Cầm tay anh nhé, mình cùng nhau bước đi" },
        { time: 60.3, text: "Qua bao thăng trầm, chẳng hề lo nghĩ suy" },
        { time: 63.8, text: "Vì anh đã có em, người anh yêu nhất đời" },
        { time: 67.0, text: "Mình cùng nhau vẽ nên câu chuyện tình yêu tuyệt vời." },
        // Thêm lời nếu bài hát dài hơn
        { time: 300, text: "" } // Dòng trống cuối cùng để đảm bảo dòng cuối được hiển thị đủ lâu
    ]
    // Bạn có thể thêm lời cho các bài hát khác ở đây nếu audioPlaylist có nhiều bài
    // "Tên Bài Hát Khác": [ {time: 0, text: "Lời bài hát..."}, ... ]
};

let lyricsDisplayContainer; // DOM element cho vùng chứa lời
let currentLyrics = []; // Mảng chứa lời của bài hát hiện tại
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

    // Tải lời bài hát cho track mới
    loadLyricsForTrack();
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
    clearLyricsDisplay(); // Xóa lời khi dừng nhạc
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
        // Cập nhật lời bài hát cùng với progress bar
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
    updateLyricsDisplay(); // Cập nhật lời ngay khi tua nhạc
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
 * Khởi tạo các thành phần cho việc hiển thị lời bài hát.
 */
function initializeLyricsDisplay() {
    lyricsDisplayContainer = document.getElementById('lyricsDisplayContainer');
    if (!lyricsDisplayContainer) {
        console.warn("Không tìm thấy vùng chứa lời bài hát (lyricsDisplayContainer).");
        return;
    }

    // Gắn các event listener cần thiết cho audioPlayer để cập nhật lời
    if (audioPlayer) {
        // `timeupdate` đã có `updateLyricsDisplay` trong `updateProgressBar`
        // audioPlayer.addEventListener('timeupdate', updateLyricsDisplay); // Đã có trong updateProgressBar
        audioPlayer.addEventListener('loadeddata', loadLyricsForTrack); // Khi dữ liệu bài hát được tải
        audioPlayer.addEventListener('play', updateLyricsDisplay); // Cập nhật khi nhấn play (phòng trường hợp pause giữa lời)
        audioPlayer.addEventListener('ended', clearLyricsDisplay); // Xóa lời khi hết bài
        audioPlayer.addEventListener('emptied', clearLyricsDisplay); // Xóa lời khi đổi src (ví dụ: load bài mới)
        // `seeked` event có thể hữu ích nếu `input` trên progress bar không đủ
        audioPlayer.addEventListener('seeked', updateLyricsDisplay);
    }
}

/**
 * Tải lời cho bài hát hiện tại đang được phát.
 */
function loadLyricsForTrack() {
    if (!audioPlayer || !songTitleEl || !audioPlaylist[currentTrackIndex]) {
        currentLyrics = [];
        clearLyricsDisplay();
        return;
    }
    const trackTitle = audioPlaylist[currentTrackIndex].title;
    currentLyrics = songLyrics[trackTitle] || [];
    clearLyricsDisplay(); // Xóa lời cũ
    updateLyricsDisplay(); // Hiển thị lời ban đầu nếu có (ví dụ: nếu bài hát bắt đầu giữa chừng)
}

/**
 * Xóa toàn bộ nội dung trong vùng hiển thị lời bài hát.
 */
function clearLyricsDisplay() {
    if (lyricsDisplayContainer) {
        lyricsDisplayContainer.innerHTML = '';
    }
}

/**
 * Cập nhật và hiển thị các dòng lời bài hát dựa trên thời gian hiện tại của audioPlayer.
 */
function updateLyricsDisplay() {
    if (!audioPlayer || !lyricsDisplayContainer || !currentLyrics || currentLyrics.length === 0) {
        if (lyricsDisplayContainer) lyricsDisplayContainer.innerHTML = ''; // Xóa nếu không có lời
        return;
    }

    const currentTime = audioPlayer.currentTime;
    let activeLineIndex = -1;

    // Tìm index của dòng lời đang active
    for (let i = 0; i < currentLyrics.length; i++) {
        if (currentTime >= currentLyrics[i].time) {
            if (i + 1 < currentLyrics.length) { // Nếu không phải dòng cuối
                if (currentTime < currentLyrics[i+1].time) {
                    activeLineIndex = i;
                    break;
                }
            } else { // Nếu là dòng cuối cùng
                activeLineIndex = i;
                break;
            }
        }
    }
    
    // Xử lý trường hợp đặc biệt: trước dòng lời đầu tiên có time > 0, nhưng có dòng time: 0 (thường là intro "...")
    if (activeLineIndex === -1 && currentLyrics.length > 0 && currentLyrics[0].time === 0 && currentTime < (currentLyrics[1]?.time || currentLyrics[0].time + 3 )) { // Giả sử dòng intro kéo dài 3s nếu không có dòng kế
         activeLineIndex = 0;
    }


    lyricsDisplayContainer.innerHTML = ''; // Xóa các dòng lời cũ

    if (activeLineIndex !== -1) {
        const activeLyricData = currentLyrics[activeLineIndex];
        
        // Chỉ hiển thị nếu lời không phải là "..." hoặc rỗng
        if (activeLyricData && activeLyricData.text && activeLyricData.text.trim() !== "" && activeLyricData.text.trim() !== "...") {
            const pActive = document.createElement('p');
            pActive.textContent = activeLyricData.text;
            pActive.className = 'lyric-line active';
            lyricsDisplayContainer.appendChild(pActive);
        }

        // Hiển thị dòng kế tiếp (upcoming) nếu có và không phải "..."
        const upcomingLineIndex = activeLineIndex + 1;
        if (upcomingLineIndex < currentLyrics.length) {
            const upcomingLyricData = currentLyrics[upcomingLineIndex];
            if (upcomingLyricData && upcomingLyricData.text && upcomingLyricData.text.trim() !== "" && upcomingLyricData.text.trim() !== "...") {
                const pUpcoming = document.createElement('p');
                pUpcoming.textContent = upcomingLyricData.text;
                pUpcoming.className = 'lyric-line upcoming-1';
                lyricsDisplayContainer.appendChild(pUpcoming);
            }
        }
    } else if (currentLyrics.length > 0 && currentTime < currentLyrics[0].time) {
        // Nếu thời gian hiện tại nhỏ hơn thời gian của dòng lời đầu tiên (và dòng đó không phải "...")
        // thì hiển thị dòng đầu tiên như một dòng "sắp tới"
        const firstLyricData = currentLyrics[0];
        if (firstLyricData && firstLyricData.text && firstLyricData.text.trim() !== "" && firstLyricData.text.trim() !== "...") {
            const pFirstUpcoming = document.createElement('p');
            pFirstUpcoming.textContent = firstLyricData.text;
            pFirstUpcoming.className = 'lyric-line upcoming-1'; // Kiểu dáng như dòng sắp tới
            lyricsDisplayContainer.appendChild(pFirstUpcoming);
        }
    }
}


// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    renderShortcuts(); 
    initializeMusicPlayer(); 

    if (document.getElementById('musicPlayerContainer')) { 
        initializeVisualizerCanvas();
    }
    
    // Khởi tạo hiển thị lời bài hát SAU KHI trình phát nhạc đã được khởi tạo
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
