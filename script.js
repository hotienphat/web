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
        src: "https://files.catbox.moe/ykqqpn.flac", 
        albumArt: "./Backround sound/Ladygagapokerface.png" 
    },
];
let currentTrackIndex = 0;
// --- END: MUSIC PLAYER CONFIGURATION ---

// --- Global variables for the music player ---
let audioPlayer; 
let playPauseMusicBtn, stopMusicBtn, musicProgressBar, albumArtElement, currentTimeEl, durationEl;
let songTitleEl, songArtistEl;
let volumeBtn, volumeSlider;
let prevTrackBtn, nextTrackBtn;


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
    
    // Thiết lập âm lượng và biểu tượng âm lượng ban đầu
    setVolume(); // Quan trọng: gọi sau khi loadTrack và các element đã sẵn sàng

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

function loadTrack(trackIndex) {
    if (trackIndex < 0 || trackIndex >= audioPlaylist.length) {
        console.error("Chỉ số bài hát không hợp lệ:", trackIndex);
        return;
    }
    const track = audioPlaylist[trackIndex];
    // Lưu lại trạng thái âm lượng hiện tại trước khi thay đổi src
    // vì một số trình duyệt có thể reset âm lượng khi src thay đổi.
    const currentVolume = audioPlayer.volume;
    const currentMutedState = audioPlayer.muted;

    audioPlayer.src = track.src; 
    
    // Khôi phục lại trạng thái âm lượng sau khi src được đặt
    audioPlayer.volume = currentVolume;
    audioPlayer.muted = currentMutedState;


    albumArtElement.src = track.albumArt; 
    albumArtElement.alt = track.title + " - Album Art";
    songTitleEl.textContent = track.title;
    songArtistEl.textContent = track.artist;
    
    musicProgressBar.value = 0;
    currentTimeEl.textContent = formatTime(0);
    durationEl.textContent = formatTime(audioPlayer.duration || 0); 
    
    if (!audioPlayer.paused) { 
      audioPlayer.play().catch(handlePlayError);
    }

    updatePlayPauseIcon(); 
    updateTrackButtonsState(); 
    // Cập nhật lại biểu tượng âm lượng vì trạng thái có thể đã được khôi phục
    updateVolumeIcon(); 
}


function togglePlayPause() {
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play().catch(handlePlayError); 
    } else {
        audioPlayer.pause();
    }
    updatePlayPauseIcon(); 
}

function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; 
    updatePlayPauseIcon(); 
}

function updatePlayPauseIcon() {
    if (!playPauseMusicBtn) return;
    if (audioPlayer.paused || audioPlayer.ended) {
        playPauseMusicBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        playPauseMusicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

function updateProgressBar() {
    if (audioPlayer.duration) { 
        musicProgressBar.value = audioPlayer.currentTime;
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    }
}

function setAudioDuration() {
    if (audioPlayer.duration) {
        musicProgressBar.max = audioPlayer.duration;
        durationEl.textContent = formatTime(audioPlayer.duration);
    }
}

function seekAudio() {
    audioPlayer.currentTime = musicProgressBar.value;
}

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function handlePlayError(error) {
    console.error("Lỗi khi phát nhạc:", error.name, error.message);
    updatePlayPauseIcon(); 
}

/**
 * Sets the audio volume based on the volume slider.
 * Manages mute state based on volume level.
 */
function setVolume() {
    if (!audioPlayer || !volumeSlider) {
        // console.warn("setVolume: audioPlayer hoặc volumeSlider không tồn tại.");
        return;
    }

    const newVolume = parseFloat(volumeSlider.value);
    audioPlayer.volume = newVolume;

    // Khi người dùng tương tác với thanh trượt âm lượng:
    // Nếu âm lượng > 0, hãy bỏ tắt tiếng.
    // Nếu âm lượng = 0, hãy tắt tiếng.
    if (newVolume > 0) {
        audioPlayer.muted = false;
    } else { // newVolume === 0
        audioPlayer.muted = true;
    }
    
    updateVolumeIcon();
}

/**
 * Toggles the mute/unmute state via the volume button.
 * Handles cases where unmuting with volume at 0.
 */
function toggleMute() {
    if (!audioPlayer) return;

    audioPlayer.muted = !audioPlayer.muted; // Đảo ngược trạng thái tắt tiếng
    
    // Nếu vừa BẬT tiếng (audioPlayer.muted === false) VÀ âm lượng hiện tại là 0
    if (!audioPlayer.muted && audioPlayer.volume === 0) {
        audioPlayer.volume = 0.5; // Đặt âm lượng về một mức mặc định có thể nghe được
        if (volumeSlider) {
            volumeSlider.value = audioPlayer.volume.toString(); // Cập nhật vị trí thanh trượt
        }
    }
    // Nếu đang TẮT tiếng, hoặc BẬT tiếng với âm lượng > 0, thanh trượt không cần thay đổi ở đây.
    
    updateVolumeIcon();
}

function updateVolumeIcon() {
    if(!volumeBtn || !audioPlayer) return; 
    volumeBtn.innerHTML = ''; 
    const icon = document.createElement('i');
    icon.classList.add('fas');

    // Biểu tượng sẽ là 'tắt tiếng' nếu audioPlayer.muted là true HOẶC audioPlayer.volume là 0
    if (audioPlayer.muted || audioPlayer.volume === 0) {
        icon.classList.add('fa-volume-xmark');
    } else if (audioPlayer.volume < 0.5) {
        icon.classList.add('fa-volume-low');
    } else {
        icon.classList.add('fa-volume-high');
    }
    volumeBtn.appendChild(icon);
}

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
    if(!audioPlayer.paused || audioPlaylist.length === 1){ 
        audioPlayer.play().catch(handlePlayError);
    }
}

function playPrevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + audioPlaylist.length) % audioPlaylist.length;
    loadTrack(currentTrackIndex);
    if(!audioPlayer.paused || audioPlaylist.length === 1){
         audioPlayer.play().catch(handlePlayError);
    }
}

function updateTrackButtonsState() {
    if(!prevTrackBtn || !nextTrackBtn) return;
    if (audioPlaylist.length <= 1) {
        prevTrackBtn.disabled = true;
        nextTrackBtn.disabled = true;
        prevTrackBtn.classList.add('opacity-50', 'cursor-not-allowed');
        nextTrackBtn.classList.add('opacity-50', 'cursor-not-allowed');

    } else {
        prevTrackBtn.disabled = false;
        nextTrackBtn.disabled = false;
        prevTrackBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        nextTrackBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    renderShortcuts(); 
    initializeMusicPlayer(); 

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
