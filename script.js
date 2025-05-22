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
            { name: "Random của FOT", url: "https://hotienphat.github.io/GDTX/", icon: "shuffle" }, // Changed from 'random'
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
        // QUAN TRỌNG: Đường dẫn này phải chính xác so với vị trí file index.html
        // Sửa lỗi chính tả từ "Poker-Fcae.flac" thành "Poker-Face.flac"
        src: "./Backround sound/Poker-Face.flac", 
        // Sử dụng đường dẫn ảnh bìa từ file HTML của bạn
        albumArt: "./Backround sound/Ladygagapokerface.png" 
    },
    // Ví dụ thêm bài hát khác:
    // {
    //     title: "Bad Romance",
    //     artist: "Lady Gaga",
    //     src: "./Backround sound/Bad-Romance.mp3", // Make sure this file exists
    //     albumArt: "./Backround sound/BadRomanceAlbumArt.png" // And this image too
    // }
];
let currentTrackIndex = 0;
// --- END: MUSIC PLAYER CONFIGURATION ---

// --- Global variables for the music player ---
let audioPlayer; 
let playPauseMusicBtn, stopMusicBtn, musicProgressBar, albumArtElement, currentTimeEl, durationEl;
let songTitleEl, songArtistEl;
let volumeBtn, volumeSlider;
let prevTrackBtn, nextTrackBtn;


/**
 * Renders the shortcut sections and their items onto the page.
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
 * Performs a search using the value from the search input.
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
 * Initializes the music player elements and event listeners.
 */
function initializeMusicPlayer() {
    audioPlayer = new Audio(); 

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

    if (!playPauseMusicBtn || !stopMusicBtn || !musicProgressBar || !albumArtElement || !currentTimeEl || !durationEl || !songTitleEl || !songArtistEl || !volumeBtn || !volumeSlider || !prevTrackBtn || !nextTrackBtn) {
        console.error("Một hoặc nhiều phần tử của trình phát nhạc không được tìm thấy trong DOM!");
        const playerContainer = document.getElementById('musicPlayerContainer');
        if(playerContainer) playerContainer.style.display = 'none'; 
        return; 
    }
    
    loadTrack(currentTrackIndex); 

    playPauseMusicBtn.addEventListener('click', togglePlayPause);
    stopMusicBtn.addEventListener('click', stopAudio);
    musicProgressBar.addEventListener('input', seekAudio); 
    audioPlayer.addEventListener('timeupdate', updateProgressBar); 
    audioPlayer.addEventListener('loadedmetadata', setAudioDuration); 
    audioPlayer.addEventListener('ended', playNextTrack); 

    volumeSlider.addEventListener('input', setVolume);
    volumeBtn.addEventListener('click', toggleMute);

    prevTrackBtn.addEventListener('click', playPrevTrack);
    nextTrackBtn.addEventListener('click', playNextTrack);
    
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
    audioPlayer.src = track.src; 
    
    albumArtElement.src = track.albumArt; // Use album art from playlist
    albumArtElement.alt = track.title + " - Album Art";
    songTitleEl.textContent = track.title;
    songArtistEl.textContent = track.artist;
    
    musicProgressBar.value = 0;
    currentTimeEl.textContent = formatTime(0);
    durationEl.textContent = formatTime(audioPlayer.duration || 0); 
    
    // Attempt to play if it was already playing (e.g., after track change)
    // Browsers might block autoplay if there was no prior user interaction.
    if (!audioPlayer.paused) { 
      audioPlayer.play().catch(handlePlayError);
    }

    updatePlayPauseIcon(); 
    updateTrackButtonsState(); 
}


/**
 * Toggles play/pause state of the audio.
 */
function togglePlayPause() {
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play().catch(handlePlayError); 
    } else {
        audioPlayer.pause();
    }
    updatePlayPauseIcon(); 
}

/**
 * Stops the audio playback and resets its current time.
 */
function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; 
    updatePlayPauseIcon(); 
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
    if (audioPlayer.duration) { 
        musicProgressBar.value = audioPlayer.currentTime;
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    }
}

/**
 * Sets the audio duration display and progress bar max value.
 */
function setAudioDuration() {
    if (audioPlayer.duration) {
        musicProgressBar.max = audioPlayer.duration;
        durationEl.textContent = formatTime(audioPlayer.duration);
    }
}

/**
 * Allows seeking the audio track using the progress bar.
 */
function seekAudio() {
    audioPlayer.currentTime = musicProgressBar.value;
}

/**
 * Formats time in seconds to a MM:SS string.
 * @param {number} timeInSeconds - The time in seconds.
 * @returns {string} Formatted time string.
 */
function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

/**
 * Handles errors during audio playback.
 * @param {Error} error - The playback error.
 */
function handlePlayError(error) {
    console.error("Lỗi khi phát nhạc:", error.name, error.message);
    // You might want to inform the user, e.g., if autoplay is blocked.
    // alert("Không thể tự động phát nhạc. Vui lòng nhấn nút Play.");
    updatePlayPauseIcon(); 
}

/**
 * Sets the audio volume.
 */
function setVolume() {
    audioPlayer.volume = volumeSlider.value;
    updateVolumeIcon();
}

/**
 * Toggles the mute/unmute state.
 */
function toggleMute() {
    audioPlayer.muted = !audioPlayer.muted;
    updateVolumeIcon();
}

/**
 * Updates the volume button icon based on volume and mute state.
 */
function updateVolumeIcon() {
    if(!volumeBtn) return;
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
 * Plays the next track in the playlist.
 */
function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
    // Do not automatically play here, let loadTrack handle it based on previous state,
    // or require user to press play for the new track if autoplay is an issue.
    // For a better UX, if a song was playing, the next one should also play.
    if(!audioPlayer.paused || audioPlaylist.length === 1){ // if it was playing or only one song
        audioPlayer.play().catch(handlePlayError);
    }
}

/**
 * Plays the previous track in the playlist.
 */
function playPrevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + audioPlaylist.length) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
    if(!audioPlayer.paused || audioPlaylist.length === 1){
         audioPlayer.play().catch(handlePlayError);
    }
}

/**
 * Updates the enabled/disabled state of prev/next track buttons.
 */
function updateTrackButtonsState() {
    if(!prevTrackBtn || !nextTrackBtn) return;
    if (audioPlaylist.length <= 1) {
        prevTrackBtn.disabled = true;
        nextTrackBtn.disabled = true;
        // Add Tailwind classes for disabled state if not already handled by browser
        prevTrackBtn.classList.add('opacity-50', 'cursor-not-allowed');
        nextTrackBtn.classList.add('opacity-50', 'cursor-not-allowed');

    } else {
        prevTrackBtn.disabled = false;
        nextTrackBtn.disabled = false;
        prevTrackBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        nextTrackBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}


// --- Event Listeners and Initializations ---
document.addEventListener('DOMContentLoaded', () => {
    renderShortcuts(); 
    initializeMusicPlayer(); // Initialize the detailed music player

    const searchButton = document.getElementById('searchButton'); 
    if (searchButton) { // Check if searchButton exists
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
