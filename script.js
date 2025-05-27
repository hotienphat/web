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
            { name: "Tìm kiếm", url: "https://google.com", icon: "google" } // This specific shortcut can also be a direct Google search
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

// --- START: SEARCH SUGGESTIONS ---
let searchKeywords = [];
let searchInput, suggestionsDropdown; // Made these global for easier access
let activeSuggestionIndex = -1; // For keyboard navigation

/**
 * Generates a list of keywords from shortcut sections and other relevant page content.
 * These keywords are used for the suggestion dropdown.
 */
function generateSearchKeywords() {
    const keywords = new Set(); // Use a Set to avoid duplicate keywords

    // Add titles of shortcut sections
    shortcutSections.forEach(section => {
        keywords.add(section.title.toLowerCase());
        // Add names of shortcuts
        section.shortcuts.forEach(shortcut => {
            keywords.add(shortcut.name.toLowerCase());
        });
    });

    // Add other relevant keywords for site-specific suggestions
    keywords.add("về bản thân");
    keywords.add("thông tin cá nhân");
    keywords.add("ủng hộ");
    keywords.add("donate");
    keywords.add("momo");
    keywords.add("ngân hàng");
    keywords.add("liên hệ");
    keywords.add("nhạc");
    keywords.add("music player");
    if (audioPlaylist.length > 0 && audioPlaylist[0].title) {
        keywords.add(audioPlaylist[0].title.toLowerCase());
    }

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
    console.log("Generated Search Keywords (for suggestions):", searchKeywords);
}


/**
 * Displays search suggestions based on user input.
 * These suggestions are from the local site content.
 */
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
            // When a site-specific suggestion is clicked, fill the input and search Google with it.
            // Or, you could make this navigate to a local section if the suggestion is for that.
            // For now, it will fill the input, and the user can then press Enter/Search button for Google search.
            suggestionItem.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestionsDropdown.classList.add('hidden');
                // Optional: performSearch(); // Uncomment to immediately search Google on suggestion click
            });
            suggestionsDropdown.appendChild(suggestionItem);
        });
        suggestionsDropdown.classList.remove('hidden');
    } else {
        suggestionsDropdown.classList.add('hidden');
    }
}

/**
 * Handles keyboard navigation for suggestions.
 * @param {KeyboardEvent} e - The keyboard event.
 */
function handleSuggestionKeyboardNav(e) {
    const items = suggestionsDropdown.querySelectorAll('.suggestion-item');
    if (items.length === 0 || suggestionsDropdown.classList.contains('hidden')) {
        if (e.key === 'Enter') { // If no suggestions, Enter performs Google search
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
        e.preventDefault(); // Prevent form submission if it's in a form
        if (activeSuggestionIndex > -1 && items[activeSuggestionIndex]) {
            searchInput.value = items[activeSuggestionIndex].textContent; // Set input to selected suggestion
        }
        performSearch(); // Always perform Google search on Enter
        suggestionsDropdown.classList.add('hidden');

    } else if (e.key === 'Escape') {
        suggestionsDropdown.classList.add('hidden');
    }
}

/**
 * Updates the visual state of the active suggestion.
 * @param {NodeListOf<Element>} items - The list of suggestion items.
 */
function updateActiveSuggestion(items) {
    items.forEach(item => item.classList.remove('active-suggestion'));
    if (activeSuggestionIndex > -1 && items[activeSuggestionIndex]) {
        items[activeSuggestionIndex].classList.add('active-suggestion');
        items[activeSuggestionIndex].scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
}


/**
 * Initializes search suggestions functionality.
 */
function initializeSearchSuggestions() {
    searchInput = document.getElementById('searchInput'); // Assign to global variable
    suggestionsDropdown = document.getElementById('suggestionsDropdown'); // Assign to global variable

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
 * This function is now the primary action for the search.
 */
function performSearch() {
    if (!searchInput) { // Ensure searchInput is available
        console.error("Search input element not found for performSearch!");
        return;
    }
    const query = searchInput.value.trim();
    if (query) {
        // Construct Google search URL
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleSearchUrl, '_blank'); // Open in a new tab
    }
    if (suggestionsDropdown) { 
        suggestionsDropdown.classList.add('hidden');
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

    currentLyricIndex = -1; 
    updateLyrics(0); 

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
    if (!currentTrack || !currentTrack.title || !currentTrack.title.includes("Phép Màu (Đàn Cá Gỗ OST)")) {
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

// --- DONATE SECTION FUNCTIONALITY ---
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

// --- COPY TO CLIPBOARD FUNCTIONALITY ---
/**
 * Copies the given text to the clipboard and shows a notification.
 * @param {string} text - The text to copy.
 * @param {HTMLElement} notificationElement - The element to show as notification.
 */
function copyTextToClipboard(text, notificationElement) {
    if (!text) {
        console.warn("Không có nội dung để sao chép.");
        return;
    }

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


/**
 * Initializes copy buttons for donation section.
 */
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
// --- END: COPY TO CLIPBOARD FUNCTIONALITY ---


// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize search input and suggestions dropdown first
    searchInput = document.getElementById('searchInput');
    suggestionsDropdown = document.getElementById('suggestionsDropdown');

    renderShortcuts();
    initializeMusicPlayer();
    initializeSearchSuggestions(); // Initialize search suggestions functionality

    if (document.getElementById('musicPlayerContainer')) {
        initializeVisualizerCanvas();
    }

    if (audioPlayer) {
        updateLyrics(audioPlayer.currentTime);
    }

    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', performSearch); // This will now perform a Google search
    } else {
        console.warn("Search button with id 'searchButton' not found in HTML.");
    }

    // The 'Enter' key press is handled within `handleSuggestionKeyboardNav`
    // which calls `performSearch` for Google search.
    // No need for a separate keypress listener on searchInput here for 'Enter'.

    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    } else {
        console.error("Current year element not found in footer.");
    }

    initializeDonateSection(); 
    initializeCopyButtons(); 
});