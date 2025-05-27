// --- START: IDs cho các phần tử DOM mới ---
const loadingScreenId = 'loading-screen';
const pageContentId = 'page-content';
const accessModalId = 'access-modal';
const acceptAccessBtnId = 'acceptAccessBtn';
const modalContentAreaId = 'modal-content-area';
// --- END: IDs ---

// --- START: EDIT SHORTCUTS HERE (Giữ nguyên từ file của bạn) ---
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
        artist: "Mounter x MAYDAYs, Minh Tốc",
        src: "./Backround sound/phepmau.mp3", // Đường dẫn đến file nhạc
        albumArt: "./Backround sound/Phepmaulogo.jpg" // Đường dẫn đến ảnh album
    },
    {
        title: "My Curse, My Fate",
        artist: "Sān-Z · HOYO-MiX",
        src: "./Backround sound/my_curse_my_fate.mp3", // THAY THẾ BẰNG ĐƯỜNG DẪN ĐÚNG
        albumArt: "./Backround sound/my_curse_my_fate_album_art.jpg" // THAY THẾ BẰNG ĐƯỜNG DẪN ĐÚNG
    }
];
let currentTrackIndex = 0;
// --- END: MUSIC PLAYER CONFIGURATION ---

// --- LYRICS DATA for "Phép Màu" (Giữ nguyên) ---
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
let currentLyricIndex = -1;
// --- END LYRICS DATA ---

// --- Global variables for the music player (Giữ nguyên) ---
let audioPlayer;
let playPauseMusicBtn, stopMusicBtn, musicProgressBar, albumArtElement, currentTimeEl, durationEl;
let songTitleEl, songArtistEl;
let volumeBtn, volumeSlider;
let prevTrackBtn, nextTrackBtn;
let lyricsOverlay, currentLyricEl, nextLyricEl;
let audioContext;
let analyser;
let sourceNode;
let visualizerCanvas, visualizerCtx;
let dataArray;
let rafId;
let isVisualizerInitialized = false;
// --- END Global variables for music player ---

// --- START: SEARCH SUGGESTIONS (Giữ nguyên) ---
let searchKeywords = [];
let searchInput, suggestionsDropdown;
let activeSuggestionIndex = -1;

function generateSearchKeywords() {
    const keywords = new Set();
    shortcutSections.forEach(section => {
        keywords.add(section.title.toLowerCase());
        section.shortcuts.forEach(shortcut => {
            keywords.add(shortcut.name.toLowerCase());
        });
    });
    keywords.add("về bản thân");
    keywords.add("thông tin cá nhân");
    keywords.add("ủng hộ");
    keywords.add("donate");
    keywords.add("momo");
    keywords.add("ngân hàng");
    keywords.add("liên hệ");
    keywords.add("nhạc");
    keywords.add("music player");

    // Thêm tất cả các tiêu đề bài hát vào từ khóa tìm kiếm
    audioPlaylist.forEach(song => {
        if (song.title) {
            keywords.add(song.title.toLowerCase());
        }
    });

    const aboutMeSection = document.getElementById('aboutMeSection');
    if (aboutMeSection) {
        const textContent = aboutMeSection.textContent || aboutMeSection.innerText;
        const words = textContent.toLowerCase().match(/\b(\w{3,})\b/g);
        if (words) {
            words.forEach(word => keywords.add(word));
        }
    }
    keywords.add("trang cá nhân");
    keywords.add("hồ tiến phát");
    searchKeywords = Array.from(keywords);
}

function displaySuggestions() {
    const inputValue = searchInput.value.toLowerCase().trim();
    suggestionsDropdown.innerHTML = '';
    activeSuggestionIndex = -1;
    if (inputValue.length === 0) {
        suggestionsDropdown.classList.add('hidden');
        return;
    }
    const filteredSuggestions = searchKeywords.filter(keyword =>
        keyword.toLowerCase().includes(inputValue)
    );
    if (filteredSuggestions.length > 0) {
        filteredSuggestions.slice(0, 7).forEach((suggestion) => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = suggestion;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestionsDropdown.classList.add('hidden');
                // Tùy chọn: thực hiện tìm kiếm ngay khi nhấp vào gợi ý
                // performSearch();
            });
            suggestionsDropdown.appendChild(suggestionItem);
        });
        suggestionsDropdown.classList.remove('hidden');
    } else {
        suggestionsDropdown.classList.add('hidden');
    }
}

function handleSuggestionKeyboardNav(e) {
    const items = suggestionsDropdown.querySelectorAll('.suggestion-item');
    if (items.length === 0 || suggestionsDropdown.classList.contains('hidden')) {
        if (e.key === 'Enter') {
            performSearch();
        }
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
    items.forEach(item => item.classList.remove('active-suggestion'));
    if (activeSuggestionIndex > -1 && items[activeSuggestionIndex]) {
        items[activeSuggestionIndex].classList.add('active-suggestion');
        items[activeSuggestionIndex].scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
}

function initializeSearchSuggestions() {
    searchInput = document.getElementById('searchInput');
    suggestionsDropdown = document.getElementById('suggestionsDropdown');
    if (!searchInput || !suggestionsDropdown) {
        console.error("Search input or suggestions dropdown not found for suggestions functionality.");
        return;
    }
    generateSearchKeywords(); // Gọi sau khi audioPlaylist đã được cập nhật
    searchInput.addEventListener('input', displaySuggestions);
    searchInput.addEventListener('keydown', handleSuggestionKeyboardNav);
    document.addEventListener('click', (event) => {
        if (searchInput && suggestionsDropdown && !searchInput.contains(event.target) && !suggestionsDropdown.contains(event.target)) {
            suggestionsDropdown.classList.add('hidden');
        }
    });
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.length > 0) {
             displaySuggestions();
        }
    });
}
// --- END: SEARCH SUGGESTIONS ---

// --- START: Các hàm gốc khác (renderShortcuts, performSearch, ...) ---
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

function performSearch() {
    if (!searchInput) {
        console.error("Search input element not found for performSearch!");
        return;
    }
    const query = searchInput.value.trim();
    if (query) {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleSearchUrl, '_blank');
    }
    if (suggestionsDropdown) {
        suggestionsDropdown.classList.add('hidden');
    }
}

function initializeMusicPlayer() {
    audioPlayer = new Audio();
    audioPlayer.crossOrigin = "anonymous"; // Quan trọng cho visualizer nếu nhạc từ nguồn khác
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
        if(playerContainer) playerContainer.style.display = 'none'; // Ẩn trình phát nhạc nếu thiếu phần tử
        return; // Không tiếp tục nếu thiếu phần tử
    }

    loadTrack(currentTrackIndex);
    setVolume(); // Đặt âm lượng ban đầu

    playPauseMusicBtn.addEventListener('click', togglePlayPause);
    stopMusicBtn.addEventListener('click', stopAudio);
    musicProgressBar.addEventListener('input', seekAudio);
    audioPlayer.addEventListener('timeupdate', () => {
        updateProgressBar();
        if (audioPlayer) { // Kiểm tra audioPlayer tồn tại
             updateLyrics(audioPlayer.currentTime);
        }
    });
    audioPlayer.addEventListener('loadedmetadata', setAudioDuration);
    audioPlayer.addEventListener('ended', playNextTrackHandler); // Tự động chuyển bài khi kết thúc

    volumeSlider.addEventListener('input', setVolume);
    volumeBtn.addEventListener('click', toggleMute);

    prevTrackBtn.addEventListener('click', playPrevTrackHandler);
    nextTrackBtn.addEventListener('click', playNextTrackHandler);

    updateTrackButtonsState(); // Cập nhật trạng thái nút prev/next ban đầu
}

function loadTrack(trackIndex) {
    if (trackIndex < 0 || trackIndex >= audioPlaylist.length) {
        console.error("Chỉ số bài hát không hợp lệ:", trackIndex);
        return;
    }
    const track = audioPlaylist[trackIndex];
    // Lưu trạng thái phát, âm lượng và mute hiện tại trước khi thay đổi src
    const wasPlaying = audioPlayer && !audioPlayer.paused;
    const currentVolume = audioPlayer ? audioPlayer.volume : 1;
    const currentMutedState = audioPlayer ? audioPlayer.muted : false;

    audioPlayer.src = track.src;
    // Áp dụng lại âm lượng và trạng thái mute
    audioPlayer.volume = currentVolume;
    audioPlayer.muted = currentMutedState;

    albumArtElement.src = track.albumArt;
    albumArtElement.alt = track.title + " - Album Art";
    songTitleEl.textContent = track.title;
    songArtistEl.textContent = track.artist;

    musicProgressBar.value = 0;
    currentTimeEl.textContent = formatTime(0);
    // durationEl sẽ được cập nhật bởi sự kiện 'loadedmetadata'

    currentLyricIndex = -1; // Reset chỉ số lời bài hát
    updateLyrics(0); // Cập nhật lời bài hát cho bài mới (nếu có)

    // Nếu bài hát trước đó đang phát, tự động phát bài hát mới
    if (wasPlaying) {
        audioPlayer.play().catch(handlePlayError);
    }
    updatePlayPauseIcon();
    updateTrackButtonsState();
    updateVolumeIcon(); // Cập nhật icon âm lượng
}

function togglePlayPause() {
    if (!audioPlayer) return;

    if (!isVisualizerInitialized && audioPlayer) { // Khởi tạo visualizer nếu chưa có và có audioPlayer
        setupAudioGraph();
    }

    if (audioPlayer.paused || audioPlayer.ended) {
        if (audioContext && audioContext.state === 'suspended') { // Quan trọng cho autoplay policy
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
    if (audioPlayer) updateLyrics(audioPlayer.currentTime); // Cập nhật lời bài hát khi play/pause
}

function stopAudio() {
    if (!audioPlayer) return;
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    updatePlayPauseIcon();

    // Dừng và xóa visualizer
    if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
        if(visualizerCtx && visualizerCanvas) { // Kiểm tra visualizerCtx và visualizerCanvas
            visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        }
    }
    // Ẩn overlay lời bài hát
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
    currentLyricIndex = -1; // Reset chỉ số lời bài hát
}

function updatePlayPauseIcon() {
    if (!playPauseMusicBtn || !audioPlayer) return; // Kiểm tra cả hai
    if (audioPlayer.paused || audioPlayer.ended) {
        playPauseMusicBtn.innerHTML = '<i class="fas fa-play fa-lg"></i>';
    } else {
        playPauseMusicBtn.innerHTML = '<i class="fas fa-pause fa-lg"></i>';
    }
}

function updateProgressBar() {
    if (!audioPlayer || !musicProgressBar || !currentTimeEl) return; // Kiểm tra tất cả
    if (audioPlayer.duration && !isNaN(audioPlayer.duration)) { // Kiểm tra duration hợp lệ
        musicProgressBar.value = audioPlayer.currentTime;
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    }
}

function setAudioDuration() {
    if (!audioPlayer || !musicProgressBar || !durationEl) return; // Kiểm tra tất cả
    if (audioPlayer.duration && !isNaN(audioPlayer.duration)) { // Kiểm tra duration hợp lệ
        musicProgressBar.max = audioPlayer.duration;
        durationEl.textContent = formatTime(audioPlayer.duration);
    }
}

function seekAudio() {
    if (!audioPlayer || !musicProgressBar) return; // Kiểm tra cả hai
    audioPlayer.currentTime = musicProgressBar.value;
}

function formatTime(timeInSeconds) {
    if (isNaN(timeInSeconds) || timeInSeconds < 0) timeInSeconds = 0; // Xử lý NaN hoặc số âm
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function handlePlayError(error) {
    console.error("Lỗi khi phát nhạc:", error.name, error.message);
    if (error.name === 'NotAllowedError') {
        // Thông báo cho người dùng rằng họ cần tương tác để phát nhạc
        console.warn("Autoplay blocked by browser. User interaction required.");
        // Có thể hiển thị một thông báo trên UI ở đây
    } else if (error.name === 'AbortError') {
        // Người dùng đã hủy phát nhạc, không cần làm gì thêm
        console.info("Playback aborted.");
    }
    // Cập nhật lại icon play/pause nếu có lỗi
    updatePlayPauseIcon();
}

function setVolume() {
    if (!audioPlayer || !volumeSlider) return; // Kiểm tra cả hai
    const newVolume = parseFloat(volumeSlider.value);
    audioPlayer.volume = newVolume;
    audioPlayer.muted = (newVolume === 0); // Tự động mute nếu âm lượng là 0
    updateVolumeIcon();
}

function toggleMute() {
    if (!audioPlayer) return;
    audioPlayer.muted = !audioPlayer.muted;
    // Nếu unmute và âm lượng đang là 0, đặt lại âm lượng mặc định (ví dụ 0.5)
    if (!audioPlayer.muted && audioPlayer.volume === 0) {
        audioPlayer.volume = 0.5; // Hoặc giá trị mặc định bạn muốn
        if (volumeSlider) volumeSlider.value = audioPlayer.volume.toString(); // Cập nhật thanh trượt
    }
    updateVolumeIcon();
}

function updateVolumeIcon() {
    if(!volumeBtn || !audioPlayer) return;
    volumeBtn.innerHTML = ''; // Xóa icon cũ
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

function playNextTrackHandler() {
    currentTrackIndex = (currentTrackIndex + 1) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
    // Không tự động phát nếu danh sách chỉ có 1 bài và nó vừa kết thúc
    // Hoặc nếu trình phát đang bị tạm dừng bởi người dùng
    if(audioPlayer && (!audioPlayer.paused || audioPlaylist.length === 1)){
        audioPlayer.play().catch(handlePlayError);
    }
}

function playPrevTrackHandler() {
    currentTrackIndex = (currentTrackIndex - 1 + audioPlaylist.length) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
    if(audioPlayer && (!audioPlayer.paused || audioPlaylist.length === 1)){
         audioPlayer.play().catch(handlePlayError);
    }
}

function updateTrackButtonsState() {
    if(!prevTrackBtn || !nextTrackBtn) return;
    const disableButtons = audioPlaylist.length <= 1;
    prevTrackBtn.disabled = disableButtons;
    nextTrackBtn.disabled = disableButtons;

    // Thêm/xóa class Tailwind cho hiệu ứng disable trực quan hơn
    [prevTrackBtn, nextTrackBtn].forEach(btn => {
        btn.classList.toggle('opacity-50', disableButtons);
        btn.classList.toggle('cursor-not-allowed', disableButtons); // Tailwind class
    });
}

function updateLyrics(currentTime) {
    // Kiểm tra các phần tử DOM cần thiết
    if (!audioPlayer || !lyricsOverlay || !currentLyricEl || !nextLyricEl) return;

    const currentTrack = audioPlaylist[currentTrackIndex];
    // Chỉ hiển thị lời bài hát "Phép Màu" nếu nó đang phát
    // Và phepMauLyrics đã được định nghĩa
    if (!currentTrack || !currentTrack.title || !currentTrack.title.includes("Phép Màu (Đàn Cá Gỗ OST)") || typeof phepMauLyrics === 'undefined') {
        lyricsOverlay.classList.remove('opacity-100', 'pointer-events-auto');
        lyricsOverlay.classList.add('opacity-0', 'pointer-events-none');
        currentLyricEl.textContent = '';
        nextLyricEl.textContent = '';
        currentLyricEl.classList.remove('active', 'opacity-100', 'translate-y-0');
        currentLyricEl.classList.add('opacity-0', 'translate-y-1');
        nextLyricEl.classList.remove('visible', 'opacity-100');
        nextLyricEl.classList.add('opacity-0');
        currentLyricIndex = -1;
        return; // Dừng hàm nếu không phải bài "Phép Màu" hoặc không có lời
    }

    // Hiển thị overlay nếu nhạc đang phát hoặc sẵn sàng phát
    if (!audioPlayer.paused || audioPlayer.readyState >= 2) { // readyState >= 2 (HAVE_CURRENT_DATA) - đủ dữ liệu để phát frame hiện tại
        lyricsOverlay.classList.add('opacity-100', 'pointer-events-auto');
        lyricsOverlay.classList.remove('opacity-0', 'pointer-events-none');
    } else { // Nếu nhạc đang tạm dừng và chưa sẵn sàng, ẩn overlay
        lyricsOverlay.classList.remove('opacity-100', 'pointer-events-auto');
        lyricsOverlay.classList.add('opacity-0', 'pointer-events-none');
    }

    let newLyricIndex = -1;
    for (let i = 0; i < phepMauLyrics.length; i++) {
        if (currentTime >= phepMauLyrics[i].time) {
            newLyricIndex = i;
        } else {
            break; // Dừng sớm nếu thời gian hiện tại nhỏ hơn thời gian của lời
        }
    }

    if (newLyricIndex !== currentLyricIndex) {
        currentLyricIndex = newLyricIndex;

        // Cập nhật lời bài hát hiện tại với hiệu ứng
        if (currentLyricIndex !== -1 && phepMauLyrics[currentLyricIndex]) {
            currentLyricEl.classList.remove('active', 'opacity-100', 'translate-y-0');
            currentLyricEl.classList.add('opacity-0', 'translate-y-1'); // Hiệu ứng trượt ra
            setTimeout(() => { // Đợi một chút cho hiệu ứng trượt ra rồi mới cập nhật text và trượt vào
                currentLyricEl.textContent = phepMauLyrics[currentLyricIndex].text;
                currentLyricEl.classList.add('active', 'opacity-100', 'translate-y-0');
                currentLyricEl.classList.remove('opacity-0', 'translate-y-1');
            }, 50); // Thời gian delay nhỏ cho hiệu ứng
        } else {
            currentLyricEl.textContent = ''; // Xóa nếu không có lời
            currentLyricEl.classList.remove('active', 'opacity-100', 'translate-y-0');
            currentLyricEl.classList.add('opacity-0', 'translate-y-1');
        }

        // Cập nhật lời bài hát tiếp theo với hiệu ứng
        const nextIndex = currentLyricIndex + 1;
        if (nextIndex < phepMauLyrics.length && phepMauLyrics[nextIndex] && phepMauLyrics[nextIndex].text.trim() !== "") {
             nextLyricEl.classList.remove('visible', 'opacity-100');
             nextLyricEl.classList.add('opacity-0');
             setTimeout(() => {
                nextLyricEl.textContent = phepMauLyrics[nextIndex].text;
                nextLyricEl.classList.add('visible', 'opacity-100');
                nextLyricEl.classList.remove('opacity-0');
            }, 100); // Delay lớn hơn một chút cho lời tiếp theo
        } else {
            nextLyricEl.textContent = ''; // Xóa nếu không có lời tiếp theo
            nextLyricEl.classList.remove('visible', 'opacity-100');
            nextLyricEl.classList.add('opacity-0');
        }
    }
}

function setupAudioGraph() {
    if (isVisualizerInitialized || !audioPlayer) return; // Không làm gì nếu đã khởi tạo hoặc không có audioPlayer

    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256; // Kích thước FFT, có thể điều chỉnh

        // Kiểm tra xem sourceNode đã được tạo trước đó chưa
        // Điều này quan trọng nếu hàm này được gọi lại (ví dụ khi chuyển bài)
        // Tuy nhiên, với logic hiện tại, sourceNode nên được tạo một lần cho mỗi audioPlayer
        if (!sourceNode || sourceNode.mediaElement !== audioPlayer) {
            sourceNode = audioContext.createMediaElementSource(audioPlayer);
        }

        sourceNode.connect(analyser);
        analyser.connect(audioContext.destination); // Kết nối analyser với output

        dataArray = new Uint8Array(analyser.frequencyBinCount);
        isVisualizerInitialized = true;
        console.log("Audio graph setup complete for visualizer.");
    } catch (e) {
        console.error("Lỗi khởi tạo AudioContext hoặc Analyser cho visualizer:", e);
        if (visualizerCanvas) visualizerCanvas.style.display = 'none'; // Ẩn canvas nếu có lỗi
        isVisualizerInitialized = false; // Đặt lại trạng thái
    }
}

function initializeVisualizerCanvas() {
    visualizerCanvas = document.getElementById('musicVisualizer');
    const imagePlaceholderContainer = document.querySelector('.image-placeholder-container'); // Phần tử chứa ảnh avatar

    if (!visualizerCanvas || !imagePlaceholderContainer) {
        console.error("Visualizer: Không tìm thấy canvas hoặc image placeholder container.");
        if (visualizerCanvas) visualizerCanvas.style.display = 'none';
        return;
    }

    visualizerCtx = visualizerCanvas.getContext('2d');

    function setCanvasDimensions() {
        if (!imagePlaceholderContainer || !visualizerCanvas) return;
        const avatarRect = imagePlaceholderContainer.getBoundingClientRect();
        visualizerCanvas.height = avatarRect.height > 0 ? avatarRect.height : 300; // Đảm bảo có chiều cao
        visualizerCanvas.width = 60; // Chiều rộng cố định cho visualizer dạng thanh dọc

        // Xóa canvas khi thay đổi kích thước và nhạc đang dừng (để tránh vẽ lại hình cũ)
        if (visualizerCtx && (!rafId || (audioPlayer && audioPlayer.paused))) {
             visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        }
    }

    setCanvasDimensions(); // Đặt kích thước ban đầu
    window.addEventListener('resize', setCanvasDimensions); // Cập nhật khi thay đổi kích thước cửa sổ

    if (audioPlayer) {
        audioPlayer.addEventListener('play', () => {
            if (!isVisualizerInitialized) { // Chỉ setup graph nếu chưa có
                setupAudioGraph();
            }
            // Xử lý AudioContext bị tạm dừng (do chính sách autoplay)
            if (isVisualizerInitialized && audioContext && audioContext.state === 'suspended') {
                audioContext.resume().then(() => {
                    if (!rafId) drawVisualizerLoop(); // Bắt đầu vòng lặp vẽ nếu chưa chạy
                }).catch(e => console.error("Error resuming AudioContext for visualizer:", e));
            } else if (isVisualizerInitialized && !rafId) { // Nếu đã init và chưa có vòng lặp
                drawVisualizerLoop();
            }
        });

        audioPlayer.addEventListener('pause', () => {
            if (rafId) {
                cancelAnimationFrame(rafId); // Dừng vòng lặp vẽ
                rafId = null;
            }
        });

        audioPlayer.addEventListener('ended', () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
                if(visualizerCtx && visualizerCanvas) { // Xóa canvas khi nhạc kết thúc
                    visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
                }
            }
        });
    }
}

function drawVisualizerLoop() {
    if (!isVisualizerInitialized || !analyser || !visualizerCtx || !dataArray || !visualizerCanvas) {
        if (rafId) cancelAnimationFrame(rafId); // Dừng nếu thiếu bất kỳ thành phần nào
        rafId = null;
        return;
    }

    rafId = requestAnimationFrame(drawVisualizerLoop); // Tiếp tục vòng lặp

    analyser.getByteFrequencyData(dataArray); // Lấy dữ liệu tần số

    visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height); // Xóa frame trước

    const numBars = 32; // Số lượng thanh visualizer (điều chỉnh cho phù hợp)
    const barThickness = (visualizerCanvas.height / numBars) * 0.75; // Độ dày của mỗi thanh
    const barSpacing = (visualizerCanvas.height / numBars) * 0.25; // Khoảng cách giữa các thanh
    let currentY = barSpacing / 2; // Vị trí Y bắt đầu của thanh đầu tiên

    const bufferLength = analyser.frequencyBinCount; // Số lượng điểm dữ liệu tần số

    for (let i = 0; i < numBars; i++) {
        // Lấy một mẫu từ dataArray, trải đều hơn trên dải tần số thấp và trung
        const dataArrayIndex = Math.min(bufferLength - 1, Math.floor((i / numBars) * (bufferLength * 0.75))); // Tập trung vào 3/4 dải tần số đầu
        const barLengthFraction = dataArray[dataArrayIndex] / 255.0; // Chuẩn hóa giá trị (0 đến 1)
        let barLength = barLengthFraction * visualizerCanvas.width; // Chiều dài thanh tương ứng với chiều rộng canvas

        // Đảm bảo thanh có chiều dài tối thiểu nếu có tín hiệu, và không vượt quá chiều rộng canvas
        if (barLength < 1 && dataArray[dataArrayIndex] > 0) barLength = 1; // Chiều dài tối thiểu
        if (barLength > visualizerCanvas.width) barLength = visualizerCanvas.width;

        // Vẽ thanh
        visualizerCtx.fillStyle = '#a78bfa'; // Màu của thanh (màu tím nhạt từ theme)
        visualizerCtx.fillRect(0, currentY, barLength, barThickness); // Vẽ từ trái sang phải

        currentY += barThickness + barSpacing; // Di chuyển đến vị trí Y của thanh tiếp theo
    }
}


function initializeDonateSection() {
    const toggleQrButtons = document.querySelectorAll('.toggle-qr-btn');
    toggleQrButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.qrTarget; // Lấy ID từ data-qr-target
            const qrPlaceholder = document.getElementById(targetId);
            if (qrPlaceholder) {
                const isHidden = qrPlaceholder.classList.contains('hidden');
                if (isHidden) {
                    qrPlaceholder.classList.remove('hidden');
                    button.textContent = 'Ẩn QR';
                } else {
                    qrPlaceholder.classList.add('hidden');
                    button.textContent = 'Hiện QR';
                }
            }
        });
    });
}

function copyTextToClipboard(text, notificationElement) {
    if (!text) {
        console.warn("Không có nội dung để sao chép.");
        return;
    }

    // Sử dụng navigator.clipboard API nếu có thể (an toàn hơn và hiện đại hơn)
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            if (notificationElement) {
                notificationElement.classList.remove('hidden');
                setTimeout(() => {
                    notificationElement.classList.add('hidden');
                }, 2000); // Ẩn thông báo sau 2 giây
            }
        }).catch(err => {
            console.error('Không thể sao chép bằng navigator.clipboard: ', err);
            // Fallback về document.execCommand nếu navigator.clipboard thất bại hoặc không có sẵn
            copyTextWithExecCommand(text, notificationElement);
        });
    } else {
        // Fallback cho các trình duyệt cũ hơn
        copyTextWithExecCommand(text, notificationElement);
    }
}

// Hàm fallback sử dụng document.execCommand
function copyTextWithExecCommand(text, notificationElement) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    // Đảm bảo textarea không hiển thị trên màn hình
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            if (notificationElement) {
                notificationElement.classList.remove('hidden');
                setTimeout(() => {
                    notificationElement.classList.add('hidden');
                }, 2000);
            }
        } else {
            console.error('Không thể sao chép bằng document.execCommand.');
            // Có thể hiển thị thông báo lỗi cho người dùng ở đây
        }
    } catch (err) {
        console.error('Lỗi khi sao chép bằng document.execCommand: ', err);
        // Có thể hiển thị thông báo lỗi cho người dùng ở đây
    }
    document.body.removeChild(textArea);
}


function initializeCopyButtons() {
    const copyMomoBtn = document.getElementById('copyMomoNumberBtn');
    const momoNumberEl = document.getElementById('momoNumber');
    const momoNotificationEl = document.getElementById('copyMomoNotification');

    const copyBankBtn = document.getElementById('copyAccountNumberBtn');
    const accountNumberEl = document.getElementById('accountNumber');
    const bankNotificationEl = document.getElementById('copyNotification'); // ID này là 'copyNotification' trong HTML của bạn

    if (copyMomoBtn && momoNumberEl && momoNotificationEl) {
        copyMomoBtn.addEventListener('click', () => {
            copyTextToClipboard(momoNumberEl.textContent.trim(), momoNotificationEl);
        });
    } else {
        console.warn("Không tìm thấy các phần tử để sao chép số Momo.");
    }

    if (copyBankBtn && accountNumberEl && bankNotificationEl) {
        copyBankBtn.addEventListener('click', () => {
            copyTextToClipboard(accountNumberEl.textContent.trim(), bankNotificationEl);
        });
    } else {
        console.warn("Không tìm thấy các phần tử để sao chép số tài khoản ngân hàng.");
    }
}
// --- END: Các hàm gốc ---


// --- Hàm khởi tạo toàn bộ ứng dụng trang (Nội dung gốc của DOMContentLoaded) ---
function initializePageApplication() {
    renderShortcuts();
    initializeMusicPlayer(); // Khởi tạo trình phát nhạc trước
    initializeSearchSuggestions(); // Sau đó khởi tạo gợi ý tìm kiếm (để có thể lấy tên bài hát)

    // Chỉ khởi tạo visualizer nếu có musicPlayerContainer (tránh lỗi nếu trình phát nhạc bị ẩn)
    if (document.getElementById('musicPlayerContainer')) {
        initializeVisualizerCanvas();
    }

    // audioPlayer được khởi tạo trong initializeMusicPlayer
    if (audioPlayer) { // Kiểm tra audioPlayer tồn tại
        updateLyrics(audioPlayer.currentTime); // Cập nhật lời bài hát ban đầu
    }

    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    // Cho phép tìm kiếm bằng Enter trong ô input
    const searchInputEl = document.getElementById('searchInput');
    if (searchInputEl) {
        searchInputEl.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }


    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    initializeDonateSection();
    initializeCopyButtons();

    console.log("Ứng dụng trang đã được khởi tạo.");
}
// --- END: Hàm khởi tạo ứng dụng ---


// --- Logic Tải Trang Mới ---
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById(loadingScreenId);
    const pageContent = document.getElementById(pageContentId);
    const accessModal = document.getElementById(accessModalId);
    const acceptButton = document.getElementById(acceptAccessBtnId);
    const modalContentArea = document.getElementById(modalContentAreaId);

    // Thời gian tối thiểu hiển thị màn hình loading (miligiây)
    const minLoadingTime = 2500; // Giữ nguyên hoặc điều chỉnh nếu muốn

    document.body.classList.add('loading'); // Thêm class để ẩn cuộn

    setTimeout(() => {
        if (loadingScreen) {
            // Bắt đầu làm mờ màn hình loading
            loadingScreen.style.opacity = '0';
            // Sau khi hiệu ứng làm mờ hoàn tất, ẩn nó đi
            // Sử dụng { once: true } để listener tự động gỡ bỏ sau khi chạy 1 lần
            loadingScreen.addEventListener('transitionend', () => {
                loadingScreen.style.display = 'none';
            }, { once: true });
        }

        // Hiển thị nội dung trang
        if (pageContent) {
            pageContent.classList.remove('hidden');
            // Kích hoạt reflow để đảm bảo transition opacity hoạt động sau khi display:none được gỡ bỏ
            // pageContent.offsetHeight; // Dòng này có thể không cần thiết nếu dùng requestAnimationFrame
            requestAnimationFrame(() => {
                 pageContent.style.opacity = '1'; // Kích hoạt hiệu ứng fade-in
            });
        }

        // Khởi tạo các chức năng của trang
        initializePageApplication(); // Gọi hàm khởi tạo chính
        document.body.classList.remove('loading'); // Xóa class để cho phép cuộn lại

        // Hiển thị modal sau một khoảng trễ nhỏ
        if (accessModal && modalContentArea) {
            setTimeout(() => {
                accessModal.classList.remove('hidden');
                 // Kích hoạt reflow
                // accessModal.offsetHeight;
                requestAnimationFrame(() => {
                    accessModal.style.opacity = '1';
                    modalContentArea.style.opacity = '1';
                    modalContentArea.style.transform = 'scale(1)';
                });
            }, 500); // Hiện modal sau 0.5 giây khi nội dung trang đã bắt đầu hiển thị
        }

    }, minLoadingTime);

    // Xử lý nút "Truy cập" trong modal
    if (acceptButton && accessModal && modalContentArea) {
        acceptButton.addEventListener('click', () => {
            // Bắt đầu hiệu ứng cho modal content trước
            modalContentArea.style.opacity = '0';
            modalContentArea.style.transform = 'scale(0.95)';

            // Bắt đầu hiệu ứng cho modal background sau một chút
            // Hoặc cùng lúc tùy theo ý muốn
            accessModal.style.opacity = '0';
            
            // Đợi hiệu ứng của accessModal (là phần tử chính của modal) hoàn tất
            // rồi mới thêm class 'hidden' để tránh giật cục
            accessModal.addEventListener('transitionend', function handleTransitionEnd(e) {
                // Chỉ xử lý khi transition của chính accessModal và là opacity
                if (e.target === accessModal && e.propertyName === 'opacity') {
                    accessModal.classList.add('hidden');
                    // Gỡ bỏ listener để tránh bị gọi lại ngoài ý muốn nếu có các transition khác
                    accessModal.removeEventListener('transitionend', handleTransitionEnd);
                }
            });
        });
    }
});
// --- END: Logic Tải Trang Mới ---