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
        title: "Poker Face",
        artist: "Lady Gaga",
        src: "https://files.catbox.moe/ykqqpn.flac", 
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
let audioContext; // The AudioContext instance
let analyser; // The AnalyserNode
let sourceNode; // The MediaElementAudioSourceNode (connects audio element to analyser)
let visualizerCanvas, visualizerCtx; // Canvas and its 2D rendering context
let dataArray; // Uint8Array to store frequency data
let rafId; // requestAnimationFrame ID for controlling animation loop
let isVisualizerInitialized = false; // Flag to ensure one-time initialization of audio graph

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
    audioPlayer.crossOrigin = "anonymous"; // Crucial for Web Audio API with external sources

    // Cache DOM elements for the player
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

    // Check if all essential player elements are present
    const essentialElements = [playPauseMusicBtn, stopMusicBtn, musicProgressBar, albumArtElement, currentTimeEl, durationEl, songTitleEl, songArtistEl, volumeBtn, volumeSlider, prevTrackBtn, nextTrackBtn];
    if (essentialElements.some(el => !el)) {
        console.error("Một hoặc nhiều phần tử của trình phát nhạc không được tìm thấy trong DOM!");
        const playerContainer = document.getElementById('musicPlayerContainer');
        if(playerContainer) playerContainer.style.display = 'none'; // Hide player if incomplete
        return; 
    }
    
    loadTrack(currentTrackIndex); // Load the initial track
    setVolume(); // Set initial volume based on slider

    // Attach event listeners for player controls
    playPauseMusicBtn.addEventListener('click', togglePlayPause);
    stopMusicBtn.addEventListener('click', stopAudio);
    musicProgressBar.addEventListener('input', seekAudio); 
    audioPlayer.addEventListener('timeupdate', updateProgressBar); 
    audioPlayer.addEventListener('loadedmetadata', setAudioDuration); 
    audioPlayer.addEventListener('ended', playNextTrackHandler); // Renamed to avoid conflict

    volumeSlider.addEventListener('input', setVolume);
    volumeBtn.addEventListener('click', toggleMute);

    prevTrackBtn.addEventListener('click', playPrevTrackHandler); // Renamed
    nextTrackBtn.addEventListener('click', playNextTrackHandler); // Renamed
    
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
    const currentVolume = audioPlayer.volume; // Preserve volume
    const currentMutedState = audioPlayer.muted; // Preserve mute state

    audioPlayer.src = track.src; 
    audioPlayer.volume = currentVolume; // Restore volume
    audioPlayer.muted = currentMutedState; // Restore mute state

    // Update track information display
    albumArtElement.src = track.albumArt; 
    albumArtElement.alt = track.title + " - Album Art";
    songTitleEl.textContent = track.title;
    songArtistEl.textContent = track.artist;
    
    // Reset progress bar and time displays
    musicProgressBar.value = 0;
    currentTimeEl.textContent = formatTime(0);
    durationEl.textContent = formatTime(audioPlayer.duration || 0); 
    
    updatePlayPauseIcon(); 
    updateTrackButtonsState(); 
    updateVolumeIcon(); 
}

/**
 * Toggles play/pause state of the audio player.
 * Initializes AudioContext and Analyser on the first user interaction (play).
 */
function togglePlayPause() {
    // Initialize AudioContext and Analyser on first user interaction (play)
    if (!isVisualizerInitialized && audioPlayer) {
        setupAudioGraph();
    }

    if (audioPlayer.paused || audioPlayer.ended) {
        // Resume AudioContext if it was suspended (common browser behavior)
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
 * Also stops the visualizer animation.
 */
function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; 
    updatePlayPauseIcon(); 
    if (rafId) { // Stop visualizer animation
        cancelAnimationFrame(rafId);
        rafId = null;
        // Clear the canvas when stopping
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
        playPauseMusicBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        playPauseMusicBtn.innerHTML = '<i class="fas fa-pause"></i>';
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
 * Sets the maximum value for the progress bar and total duration display
 * once audio metadata is loaded.
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
 * @param {number} timeInSeconds - The time in seconds.
 * @returns {string} Formatted time string.
 */
function formatTime(timeInSeconds) {
    if (isNaN(timeInSeconds) || timeInSeconds < 0) timeInSeconds = 0;
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

/**
 * Handles errors during audio playback.
 * @param {Error} error - The playback error object.
 */
function handlePlayError(error) {
    console.error("Lỗi khi phát nhạc:", error.name, error.message);
    if (error.name === 'NotAllowedError') {
        // Consider using a less intrusive notification if alert is disruptive
        // For example, a small message bar within the player UI.
        // alert("Trình duyệt đã chặn tự động phát nhạc. Vui lòng nhấn nút Play để bắt đầu.");
        console.warn("Autoplay blocked by browser. User interaction required.");
    } else if (error.name === 'AbortError') {
        console.info("Playback aborted, possibly due to new track load or stop action.");
    }
    updatePlayPauseIcon(); 
}

/**
 * Sets the audio volume based on the volume slider and updates the mute state.
 */
function setVolume() {
    if (!audioPlayer || !volumeSlider) return;
    const newVolume = parseFloat(volumeSlider.value);
    audioPlayer.volume = newVolume;
    // If volume is adjusted, unmute if user sets volume > 0
    // If volume is set to 0, mute.
    audioPlayer.muted = (newVolume === 0);
    updateVolumeIcon();
}

/**
 * Toggles the mute/unmute state of the audio player.
 */
function toggleMute() {
    if (!audioPlayer) return;
    audioPlayer.muted = !audioPlayer.muted; 
    // If unmuting and volume was 0, set to a default audible level
    if (!audioPlayer.muted && audioPlayer.volume === 0) {
        audioPlayer.volume = 0.5; 
        if (volumeSlider) volumeSlider.value = audioPlayer.volume.toString();
    }
    updateVolumeIcon();
}

/**
 * Updates the volume button icon based on volume and mute state.
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
    // If the player was playing, attempt to play the new track.
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

/**
 * Sets up the AudioContext, AnalyserNode, and connects the audio element.
 * This should be called once, typically on the first user interaction that plays audio.
 */
function setupAudioGraph() {
    if (isVisualizerInitialized || !audioPlayer) return; // Already initialized or no audio player

    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        // fftSize determines the number of bins in the frequency data. Must be a power of 2.
        // Default is 2048. Smaller values (e.g., 256) are less detailed but more performant.
        analyser.fftSize = 256; 

        // Create a MediaElementSourceNode from the existing audioPlayer element.
        // This node is the source of audio data for the analyser.
        // IMPORTANT: This can only be done ONCE per audio element and AudioContext.
        sourceNode = audioContext.createMediaElementSource(audioPlayer);
        
        sourceNode.connect(analyser);       // Connect source to analyser
        analyser.connect(audioContext.destination); // Connect analyser to output (speakers)

        // dataArray will hold the frequency data (byte values from 0 to 255).
        // frequencyBinCount is half of fftSize.
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        isVisualizerInitialized = true; // Mark as initialized
        console.log("Audio graph for visualizer initialized.");

    } catch (e) {
        console.error("Lỗi khởi tạo AudioContext hoặc Analyser cho visualizer:", e);
        if (visualizerCanvas) visualizerCanvas.style.display = 'none'; // Hide visualizer if setup fails
        isVisualizerInitialized = false; // Reset flag on failure
    }
}


/**
 * Initializes the visualizer canvas, sets its dimensions, and adds event listeners.
 */
function initializeVisualizerCanvas() {
    visualizerCanvas = document.getElementById('musicVisualizer');
    const imagePlaceholder = document.querySelector('.image-placeholder');

    if (!visualizerCanvas || !imagePlaceholder) {
        console.error("Visualizer: Không tìm thấy canvas hoặc image placeholder.");
        if (visualizerCanvas) visualizerCanvas.style.display = 'none';
        return;
    }
    visualizerCtx = visualizerCanvas.getContext('2d');

    // Function to set canvas dimensions based on the avatar placeholder.
    function setCanvasDimensions() {
        if (!imagePlaceholder || !visualizerCanvas) return;
        // Use getBoundingClientRect for more accurate dimensions, especially if box-sizing is different.
        const avatarRect = imagePlaceholder.getBoundingClientRect();
        visualizerCanvas.height = avatarRect.height > 0 ? avatarRect.height : 300; // Fallback height
        visualizerCanvas.width = 60; // Fixed width for the visualizer strip

        // When canvas is resized, clear it to avoid old drawings if visualizer is not active
        if (visualizerCtx && (!rafId || audioPlayer.paused)) {
             visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        }
    }
    setCanvasDimensions(); // Set initial dimensions

    // Adjust canvas dimensions on window resize.
    window.addEventListener('resize', setCanvasDimensions);

    // Event listeners to start/stop visualizer drawing loop based on audio player state.
    audioPlayer.addEventListener('play', () => {
        if (!isVisualizerInitialized) { // If graph not set up (e.g. first play ever)
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

/**
 * The main drawing loop for the music visualizer.
 * Uses requestAnimationFrame for smooth animation.
 * Bars are now drawn horizontally, extending to the right.
 */
function drawVisualizerLoop() {
    // Ensure all necessary components are available before drawing.
    if (!isVisualizerInitialized || !analyser || !visualizerCtx || !dataArray || !visualizerCanvas) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        return;
    }

    rafId = requestAnimationFrame(drawVisualizerLoop); // Continue the loop

    analyser.getByteFrequencyData(dataArray); // Populate dataArray with current frequency data.

    visualizerCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height); // Clear the canvas

    const numBars = 32; // Increased number of horizontal bars for a smoother look
    // Calculate thickness and spacing for horizontal bars
    // Adjust proportions if needed, e.g., 0.8 for thickness and 0.2 for spacing
    const barThickness = (visualizerCanvas.height / numBars) * 0.75; 
    const barSpacing = (visualizerCanvas.height / numBars) * 0.25; 
    let currentY = barSpacing / 2; // Initial y position for the top edge of the first bar.

    const bufferLength = analyser.frequencyBinCount; // Number of data points from analyser

    for (let i = 0; i < numBars; i++) {
        // Map current bar index 'i' to an index in the 'dataArray'.
        const dataArrayIndex = Math.min(bufferLength - 1, Math.floor((i / numBars) * (bufferLength * 0.75)));
        
        const barLengthFraction = dataArray[dataArrayIndex] / 255.0; // Normalize data to 0-1 range.
        let barLength = barLengthFraction * visualizerCanvas.width; // Length of the bar, extending to the right.
        
        // Ensure a minimum bar length to show something, if there's any sound.
        if (barLength < 1 && dataArray[dataArrayIndex] > 0) barLength = 1; // Min length of 1px if sound present
        if (barLength > visualizerCanvas.width) barLength = visualizerCanvas.width; // Cap length at canvas width.

        // Style for the bars (using the theme's purple color)
        visualizerCtx.fillStyle = '#a78bfa'; 

        // Draw horizontal bar from left (x=0) to right.
        // fillRect(x, y, width, height) -> fillRect(0, currentY, barLength, barThickness)
        visualizerCtx.fillRect(0, currentY, barLength, barThickness);

        currentY += barThickness + barSpacing; // Move to the starting y position for the next bar.
    }
}


// --- DOMContentLoaded ---
// This event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener('DOMContentLoaded', () => {
    renderShortcuts(); 
    initializeMusicPlayer(); // Initializes audioPlayer and its controls

    // Initialize visualizer specific components (canvas setup, etc.)
    // The AudioContext and Analyser graph (setupAudioGraph) will be set up on the first play event.
    if (document.getElementById('musicPlayerContainer')) { // Only if player exists
        initializeVisualizerCanvas();
    }

    // Search functionality
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

    // Footer year
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    } else {
        console.error("Current year element not found in footer.");
    }
});
