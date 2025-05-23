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
let isVisualizerInitialized = false; // Flag to check if visualizer is set up

/**
 * Renders shortcut sections and their items into the DOM.
 */
function renderShortcuts() {
    const container = document.getElementById('shortcutsContainer');
    if (!container) {
        console.error("Shortcut container not found!");
        return;
    }
    container.innerHTML = ''; // Clear existing shortcuts

    shortcutSections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'p-6 bg-slate-800 rounded-xl shadow-lg'; // Added shadow for depth

        const titleElement = document.createElement('h2');
        titleElement.className = 'text-2xl font-semibold mb-6 section-title tracking-wider'; // Enhanced title styling
        titleElement.textContent = section.title;
        sectionDiv.appendChild(titleElement);

        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4';

        section.shortcuts.forEach(shortcut => {
            const link = document.createElement('a');
            link.href = shortcut.url;
            link.target = "_blank"; // Open in new tab
            link.rel = "noopener noreferrer";
            link.className = 'shortcut-button p-4 rounded-lg text-center flex flex-col items-center justify-center h-32'; // Fixed height for consistency

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
    audioPlayer = new Audio(); // Create audio element
    audioPlayer.crossOrigin = "anonymous"; // For visualizer if loading from different origin

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

    // Check if all essential elements are found
    const essentialElements = [playPauseMusicBtn, stopMusicBtn, musicProgressBar, albumArtElement, currentTimeEl, durationEl, songTitleEl, songArtistEl, volumeBtn, volumeSlider, prevTrackBtn, nextTrackBtn];
    if (essentialElements.some(el => !el)) {
        console.error("Một hoặc nhiều phần tử của trình phát nhạc không được tìm thấy trong DOM!");
        const playerContainer = document.getElementById('musicPlayerContainer');
        if(playerContainer) playerContainer.style.display = 'none'; // Hide player if elements are missing
        return; // Stop initialization
    }

    loadTrack(currentTrackIndex); // Load the initial track
    setVolume(); // Set initial volume

    // Event Listeners
    playPauseMusicBtn.addEventListener('click', togglePlayPause);
    stopMusicBtn.addEventListener('click', stopAudio);
    musicProgressBar.addEventListener('input', seekAudio); // Use 'input' for live seeking
    audioPlayer.addEventListener('timeupdate', updateProgressBar); // Update progress bar as audio plays
    audioPlayer.addEventListener('loadedmetadata', setAudioDuration); // Set duration once metadata is loaded
    audioPlayer.addEventListener('ended', playNextTrackHandler); // Play next track when current one ends

    volumeSlider.addEventListener('input', setVolume);
    volumeBtn.addEventListener('click', toggleMute);

    prevTrackBtn.addEventListener('click', playPrevTrackHandler); // Play previous track
    nextTrackBtn.addEventListener('click', playNextTrackHandler); // Play next track

    updateTrackButtonsState(); // Set initial state of prev/next buttons
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
    const currentVolume = audioPlayer.volume; // Preserve current volume
    const currentMutedState = audioPlayer.muted; // Preserve muted state

    audioPlayer.src = track.src; // Set the source for the new track
    audioPlayer.volume = currentVolume; // Restore volume
    audioPlayer.muted = currentMutedState; // Restore muted state

    // Update UI elements
    albumArtElement.src = track.albumArt; // Update album art
    albumArtElement.alt = track.title + " - Album Art";
    songTitleEl.textContent = track.title; // Update song title
    songArtistEl.textContent = track.artist; // Update song artist

    // Reset progress bar and time displays
    musicProgressBar.value = 0;
    currentTimeEl.textContent = formatTime(0);
    durationEl.textContent = formatTime(audioPlayer.duration || 0); // Use 0 if duration is not yet available

    updatePlayPauseIcon(); // Update play/pause button icon
    updateTrackButtonsState(); // Update prev/next button states
    updateVolumeIcon(); // Update volume icon

    loadLyricsForTrack();
}

/**
 * Toggles play/pause state of the audio player.
 */
function togglePlayPause() {
    // Initialize visualizer if not already done and audio is present
    if (!isVisualizerInitialized && audioPlayer) {
        setupAudioGraph();
    }

    if (audioPlayer.paused || audioPlayer.ended) {
        // Resume AudioContext if suspended (common in browsers after page load)
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
    updatePlayPauseIcon(); // Update button icon
}

/**
 * Stops the audio, resets current time, and updates UI.
 */
function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reset to the beginning
    updatePlayPauseIcon(); // Update button icon
    if (rafId) { // Stop visualizer animation loop
        cancelAnimationFrame(rafId);
        rafId = null;
        if(visualizerCtx && visualizerCanvas) {
            visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        }
    }
    clearLyricsDisplay(); // Clear lyrics
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
    if (audioPlayer.duration && !isNaN(audioPlayer.duration)) { // Ensure duration is a valid number
        musicProgressBar.value = audioPlayer.currentTime;
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
        updateLyricsDisplay(); // Update lyrics based on current time
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
    updateLyricsDisplay(); // Update lyrics after seeking
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
        // This error occurs if autoplay is blocked by the browser
        console.warn("Autoplay blocked by browser. User interaction required.");
        // Optionally, display a message to the user here
    } else if (error.name === 'AbortError') {
        // This can happen if a new track is loaded while the previous one was trying to play
        console.info("Playback aborted, possibly due to new track load or stop action.");
    }
    updatePlayPauseIcon(); // Ensure UI is consistent
}

/**
 * Sets the audio volume.
 */
function setVolume() {
    if (!audioPlayer || !volumeSlider) return;
    const newVolume = parseFloat(volumeSlider.value);
    audioPlayer.volume = newVolume;
    audioPlayer.muted = (newVolume === 0); // Mute if volume is 0
    updateVolumeIcon();
}

/**
 * Toggles the mute/unmute state.
 */
function toggleMute() {
    if (!audioPlayer) return;
    audioPlayer.muted = !audioPlayer.muted; // Toggle muted state
    // If unmuting and volume was 0, set a default volume
    if (!audioPlayer.muted && audioPlayer.volume === 0) {
        audioPlayer.volume = 0.5; // Default volume
        if (volumeSlider) volumeSlider.value = audioPlayer.volume.toString();
    }
    updateVolumeIcon();
}

/**
 * Updates the volume button icon.
 */
function updateVolumeIcon() {
    if(!volumeBtn || !audioPlayer) return; // Ensure elements exist
    volumeBtn.innerHTML = ''; // Clear previous icon
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
    // Only play if it was playing before or if there's only one track and it ended
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
    // Only play if it was playing before or if there's only one track
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
    // Add visual cue for disabled state
    [prevTrackBtn, nextTrackBtn].forEach(btn => {
        btn.classList.toggle('opacity-50', disableButtons);
        btn.classList.toggle('cursor-not-allowed', disableButtons);
    });
}

// --- MUSIC VISUALIZER FUNCTIONS ---
function setupAudioGraph() {
    if (isVisualizerInitialized || !audioPlayer) return; // Don't re-initialize or if no audio player
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256; // Adjust for detail vs performance
        sourceNode = audioContext.createMediaElementSource(audioPlayer);
        sourceNode.connect(analyser);        // Connect source to analyser
        analyser.connect(audioContext.destination); // Connect analyser to output (speakers)
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        isVisualizerInitialized = true; // Set flag
        console.log("Audio graph for visualizer initialized.");
    } catch (e) {
        console.error("Lỗi khởi tạo AudioContext hoặc Analyser cho visualizer:", e);
        if (visualizerCanvas) visualizerCanvas.style.display = 'none'; // Hide visualizer on error
        isVisualizerInitialized = false; // Reset flag
    }
}

function initializeVisualizerCanvas() {
    visualizerCanvas = document.getElementById('musicVisualizer');
    const imagePlaceholder = document.querySelector('.image-placeholder'); // Get the avatar container

    if (!visualizerCanvas || !imagePlaceholder) {
        console.error("Visualizer: Không tìm thấy canvas hoặc image placeholder.");
        if (visualizerCanvas) visualizerCanvas.style.display = 'none';
        return;
    }
    visualizerCtx = visualizerCanvas.getContext('2d');

    // Function to set canvas dimensions based on the avatar image placeholder
    function setCanvasDimensions() {
        if (!imagePlaceholder || !visualizerCanvas) return;
        const avatarRect = imagePlaceholder.getBoundingClientRect();
        visualizerCanvas.height = avatarRect.height > 0 ? avatarRect.height : 300; // Use placeholder height or default
        visualizerCanvas.width = 60; // Fixed width for the side visualizer
        // Clear canvas if not playing or paused
        if (visualizerCtx && (!rafId || audioPlayer.paused)) {
             visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        }
    }
    setCanvasDimensions(); // Set initial dimensions
    window.addEventListener('resize', setCanvasDimensions); // Adjust on window resize

    // Start visualizer on play
    audioPlayer.addEventListener('play', () => {
        if (!isVisualizerInitialized) { // Setup graph if not done
            setupAudioGraph();
        }
        // Resume AudioContext if needed and start drawing
        if (isVisualizerInitialized && audioContext && audioContext.state === 'suspended') {
            audioContext.resume().then(() => {
                if (!rafId) drawVisualizerLoop();
            }).catch(e => console.error("Error resuming AudioContext for visualizer:", e));
        } else if (isVisualizerInitialized && !rafId) {
            drawVisualizerLoop();
        }
    });

    // Stop visualizer on pause
    audioPlayer.addEventListener('pause', () => {
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    });

    // Clear visualizer on ended
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
    // Ensure everything is ready before drawing
    if (!isVisualizerInitialized || !analyser || !visualizerCtx || !dataArray || !visualizerCanvas) {
        if (rafId) cancelAnimationFrame(rafId); // Stop loop if something is missing
        rafId = null;
        return;
    }
    rafId = requestAnimationFrame(drawVisualizerLoop); // Continue the loop
    analyser.getByteFrequencyData(dataArray); // Get frequency data
    visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height); // Clear canvas

    const numBars = 32; // Number of bars (horizontal for this setup)
    const barThickness = (visualizerCanvas.height / numBars) * 0.75; // Thickness of each bar
    const barSpacing = (visualizerCanvas.height / numBars) * 0.25; // Spacing between bars
    let currentY = barSpacing / 2; // Starting Y position for the first bar

    const bufferLength = analyser.frequencyBinCount; // Number of data points

    for (let i = 0; i < numBars; i++) {
        // Map bar index to dataArray index (sample lower frequencies for more visible movement)
        const dataArrayIndex = Math.min(bufferLength - 1, Math.floor((i / numBars) * (bufferLength * 0.75)));
        const barLengthFraction = dataArray[dataArrayIndex] / 255.0; // Normalize data to 0-1
        let barLength = barLengthFraction * visualizerCanvas.width; // Calculate bar length

        // Ensure a minimum visible length for very low values if there's some sound
        if (barLength < 1 && dataArray[dataArrayIndex] > 0) barLength = 1;
        if (barLength > visualizerCanvas.width) barLength = visualizerCanvas.width; // Cap at canvas width

        visualizerCtx.fillStyle = '#a78bfa'; // Bar color (Tailwind purple-400)
        visualizerCtx.fillRect(0, currentY, barLength, barThickness); // Draw the bar from left

        currentY += barThickness + barSpacing; // Move to the next bar's Y position
    }
}

// --- LYRICS DISPLAY FUNCTIONS ---
function initializeLyricsDisplay() {
    lyricsDisplayContainer = document.getElementById('lyricsDisplayContainer');
    if (!lyricsDisplayContainer) {
        console.warn("Không tìm thấy vùng chứa lời bài hát (lyricsDisplayContainer).");
        return;
    }
    // Event listeners for lyrics updates
    if (audioPlayer) {
        audioPlayer.addEventListener('loadeddata', loadLyricsForTrack); // When new track data is loaded
        audioPlayer.addEventListener('play', updateLyricsDisplay); // When playback starts/resumes
        audioPlayer.addEventListener('ended', clearLyricsDisplay); // Clear lyrics when track ends
        audioPlayer.addEventListener('emptied', clearLyricsDisplay); // Clear when audio source is removed
        audioPlayer.addEventListener('seeked', updateLyricsDisplay); // Update lyrics after seeking
    }
}

function loadLyricsForTrack() {
    if (!audioPlayer || !songTitleEl || !audioPlaylist[currentTrackIndex]) {
        currentLyrics = [];
        clearLyricsDisplay();
        return;
    }
    const trackTitle = audioPlaylist[currentTrackIndex].title;
    currentLyrics = songLyrics[trackTitle] || []; // Get lyrics for the current song or an empty array
    clearLyricsDisplay(); // Clear previous lyrics
    updateLyricsDisplay(); // Display initial lyrics if any
}

function clearLyricsDisplay() {
    if (lyricsDisplayContainer) {
        lyricsDisplayContainer.innerHTML = '';
    }
}

function updateLyricsDisplay() {
    if (!audioPlayer || !lyricsDisplayContainer || !currentLyrics || currentLyrics.length === 0) {
        if (lyricsDisplayContainer) lyricsDisplayContainer.innerHTML = ''; // Clear if no lyrics or player
        return;
    }

    const currentTime = audioPlayer.currentTime;
    let activeLineIndex = -1;

    // Find the current active lyric line
    for (let i = 0; i < currentLyrics.length; i++) {
        if (currentTime >= currentLyrics[i].time) {
            if (i + 1 < currentLyrics.length) { // If there's a next line
                if (currentTime < currentLyrics[i+1].time) {
                    activeLineIndex = i;
                    break;
                }
            } else { // This is the last line
                activeLineIndex = i;
                break;
            }
        }
    }

    // Handle case where audio is before the first lyric's timestamp but first lyric is at time 0
    // and the next lyric is a bit further out (or it's the only lyric)
    if (activeLineIndex === -1 && currentLyrics.length > 0 && currentLyrics[0].time === 0 && currentTime < (currentLyrics[1]?.time || currentLyrics[0].time + 3 )) {
         activeLineIndex = 0;
    }


    lyricsDisplayContainer.innerHTML = ''; // Clear previous lines

    if (activeLineIndex !== -1) {
        const activeLyricData = currentLyrics[activeLineIndex];

        // Display active line if it's not empty or placeholder "..."
        if (activeLyricData && activeLyricData.text && activeLyricData.text.trim() !== "" && activeLyricData.text.trim() !== "...") {
            const pActive = document.createElement('p');
            pActive.textContent = activeLyricData.text;
            pActive.className = 'lyric-line active';
            lyricsDisplayContainer.appendChild(pActive);
        }

        // Display the upcoming line
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
        // If before the first lyric, show the first lyric as upcoming
        const firstLyricData = currentLyrics[0];
        if (firstLyricData && firstLyricData.text && firstLyricData.text.trim() !== "" && firstLyricData.text.trim() !== "...") {
            const pFirstUpcoming = document.createElement('p');
            pFirstUpcoming.textContent = firstLyricData.text;
            pFirstUpcoming.className = 'lyric-line upcoming-1'; // Style as upcoming
            lyricsDisplayContainer.appendChild(pFirstUpcoming);
        }
    }
}

// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    renderShortcuts(); // Populate shortcuts
    initializeMusicPlayer(); // Set up the music player

    // Only initialize visualizer if the player container exists
    if (document.getElementById('musicPlayerContainer')) {
        initializeVisualizerCanvas();
    }

    initializeLyricsDisplay(); // Set up lyrics display

    const searchButton = document.getElementById('searchButton'); // Get search button
    if (searchButton) { // Add click listener if button exists
        searchButton.addEventListener('click', performSearch);
    } else {
        console.warn("Search button with id 'searchButton' not found in HTML.");
    }

    const searchInputElement = document.getElementById('searchInput');
    if (searchInputElement) {
        searchInputElement.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') { // Perform search on Enter key
                performSearch();
            }
        });
    } else {
        console.error("Search input element not found for keypress listener.");
    }

    // Update copyright year
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    } else {
        console.error("Current year element not found in footer.");
    }
});
