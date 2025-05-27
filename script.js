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
        src: "./Backround sound/My Curse, My Fate - Sān-Z.mp3", // THAY THẾ BẰNG ĐƯỜNG DẪN ĐÚNG
        albumArt: "./Backround sound/My Curse, My Fate logo.png" // THAY THẾ BẰNG ĐƯỜNG DẪN ĐÚNG
    }
];
let currentTrackIndex = 0;
// --- END: MUSIC PLAYER CONFIGURATION ---

// --- LYRICS DATA for "Phép Màu" ---
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
    generateSearchKeywords();
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

// --- START: Các hàm gốc khác ---
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
    audioPlayer.addEventListener('ended', playNextTrackHandler);

    volumeSlider.addEventListener('input', setVolume);
    volumeBtn.addEventListener('click', toggleMute);

    prevTrackBtn.addEventListener('click', playPrevTrackHandler);
    nextTrackBtn.addEventListener('click', playNextTrackHandler);

    updateTrackButtonsState();
}

function loadTrack(trackIndex) {
    if (trackIndex < 0 || trackIndex >= audioPlaylist.length) {
        console.error("Chỉ số bài hát không hợp lệ:", trackIndex);
        return;
    }
    const track = audioPlaylist[trackIndex];
    const wasPlaying = audioPlayer && !audioPlayer.paused;
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

    currentLyricIndex = -1;
    updateLyrics(0);

    // The decision to play is now primarily handled by playNextTrackHandler and playPrevTrackHandler
    // However, keeping this for potential direct loadTrack calls that might expect auto-resume.
    if (wasPlaying && (audioPlayer.readyState > 0 || audioPlayer.src !== '')) { // Check if it was playing *and* a track is loaded
         // audioPlayer.play().catch(handlePlayError); // Let handlers manage explicit play
    }
    updatePlayPauseIcon();
    updateTrackButtonsState();
    updateVolumeIcon();
}

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
    if (audioPlayer) updateLyrics(audioPlayer.currentTime);
}

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

function updatePlayPauseIcon() {
    if (!playPauseMusicBtn || !audioPlayer) return;
    if (audioPlayer.paused || audioPlayer.ended) {
        playPauseMusicBtn.innerHTML = '<i class="fas fa-play fa-lg"></i>';
    } else {
        playPauseMusicBtn.innerHTML = '<i class="fas fa-pause fa-lg"></i>';
    }
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

function formatTime(timeInSeconds) {
    if (isNaN(timeInSeconds) || timeInSeconds < 0) timeInSeconds = 0;
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function handlePlayError(error) {
    console.error("Lỗi khi phát nhạc:", error.name, error.message);
    if (error.name === 'NotAllowedError') {
        console.warn("Autoplay blocked by browser. User interaction required.");
    } else if (error.name === 'AbortError') {
        console.info("Playback aborted.");
    }
    updatePlayPauseIcon();
}

function setVolume() {
    if (!audioPlayer || !volumeSlider) return;
    const newVolume = parseFloat(volumeSlider.value);
    audioPlayer.volume = newVolume;
    audioPlayer.muted = (newVolume === 0);
    updateVolumeIcon();
}

function toggleMute() {
    if (!audioPlayer) return;
    audioPlayer.muted = !audioPlayer.muted;
    if (!audioPlayer.muted && audioPlayer.volume === 0) {
        audioPlayer.volume = 0.5;
        if (volumeSlider) volumeSlider.value = audioPlayer.volume.toString();
    }
    updateVolumeIcon();
}

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

function playNextTrackHandler() {
    currentTrackIndex = (currentTrackIndex + 1) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
    // Luôn cố gắng phát bài hát tiếp theo sau khi tải
    if (audioPlayer) {
        // Đảm bảo audio context được resume nếu cần thiết (quan trọng cho autoplay sau tương tác)
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume().then(() => {
                audioPlayer.play().catch(handlePlayError);
            }).catch(handlePlayError);
        } else {
            audioPlayer.play().catch(handlePlayError);
        }
    }
}

function playPrevTrackHandler() {
    currentTrackIndex = (currentTrackIndex - 1 + audioPlaylist.length) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
    // Luôn cố gắng phát bài hát trước đó sau khi tải
    if (audioPlayer) {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume().then(() => {
                audioPlayer.play().catch(handlePlayError);
            }).catch(handlePlayError);
        } else {
            audioPlayer.play().catch(handlePlayError);
        }
    }
}

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

function updateLyrics(currentTime) {
    if (!audioPlayer || !lyricsOverlay || !currentLyricEl || !nextLyricEl) return;

    const currentTrack = audioPlaylist[currentTrackIndex];
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

function setupAudioGraph() {
    if (isVisualizerInitialized || !audioPlayer) return;

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
        console.log("Audio graph setup complete for visualizer.");
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


function initializeDonateSection() {
    const toggleQrButtons = document.querySelectorAll('.toggle-qr-btn');
    toggleQrButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.qrTarget;
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

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            if (notificationElement) {
                notificationElement.classList.remove('hidden');
                setTimeout(() => {
                    notificationElement.classList.add('hidden');
                }, 2000);
            }
        }).catch(err => {
            console.error('Không thể sao chép bằng navigator.clipboard: ', err);
            copyTextWithExecCommand(text, notificationElement);
        });
    } else {
        copyTextWithExecCommand(text, notificationElement);
    }
}

function copyTextWithExecCommand(text, notificationElement) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
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
        }
    } catch (err) {
        console.error('Lỗi khi sao chép bằng document.execCommand: ', err);
    }
    document.body.removeChild(textArea);
}


function initializeCopyButtons() {
    const copyMomoBtn = document.getElementById('copyMomoNumberBtn');
    const momoNumberEl = document.getElementById('momoNumber');
    const momoNotificationEl = document.getElementById('copyMomoNotification');

    const copyBankBtn = document.getElementById('copyAccountNumberBtn');
    const accountNumberEl = document.getElementById('accountNumber');
    const bankNotificationEl = document.getElementById('copyNotification');

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


// --- Hàm khởi tạo toàn bộ ứng dụng trang ---
function initializePageApplication() {
    renderShortcuts();
    initializeMusicPlayer();
    initializeSearchSuggestions();

    if (document.getElementById('musicPlayerContainer')) {
        initializeVisualizerCanvas();
    }

    if (audioPlayer) {
        updateLyrics(audioPlayer.currentTime);
    }

    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
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

    const minLoadingTime = 2500;

    document.body.classList.add('loading');

    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.addEventListener('transitionend', () => {
                loadingScreen.style.display = 'none';
            }, { once: true });
        }

        if (pageContent) {
            pageContent.classList.remove('hidden');
            requestAnimationFrame(() => {
                 pageContent.style.opacity = '1';
            });
        }

        initializePageApplication();
        document.body.classList.remove('loading');

        if (accessModal && modalContentArea) {
            setTimeout(() => {
                accessModal.classList.remove('hidden');
                requestAnimationFrame(() => {
                    accessModal.style.opacity = '1';
                    modalContentArea.style.opacity = '1';
                    modalContentArea.style.transform = 'scale(1)';
                });
            }, 500);
        }

    }, minLoadingTime);

    if (acceptButton && accessModal && modalContentArea) {
        acceptButton.addEventListener('click', () => {
            modalContentArea.style.opacity = '0';
            modalContentArea.style.transform = 'scale(0.95)';
            accessModal.style.opacity = '0';
            
            accessModal.addEventListener('transitionend', function handleTransitionEnd(e) {
                if (e.target === accessModal && e.propertyName === 'opacity') {
                    accessModal.classList.add('hidden');
                    accessModal.removeEventListener('transitionend', handleTransitionEnd);
                }
            });
        });
    }
});
// --- END: Logic Tải Trang Mới ---