// ============================================
// DATA CONFIGURATION
// ============================================

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
            { name: "Kỷ luật online", url: "https://kyluatonline.vercel.app", icon: "shield-alt" },
            { name: "Tạo khung", url: "https://hotienphat.github.io/frame/", icon: "image" },
            { name: "Hệ thống trực nề nếp", url: "https://giamthi.vercel.app", icon: "clipboard-check" },
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

const laviemLyrics = [
    { time: 0,   text: "LAVIEM. (TINH HÀ \"SAY HI\")" },
    { time: 5,   text: "Trái tim anh chẳng còn cần thiết nữa..." },
    { time: 10,  text: "Nói chi đến đây cũng thừa, rượu vang pha với cơn mưa" },
    { time: 18,  text: "Hàng trăm lý do cũng chẳng thể cứu vãn" },
    { time: 26,  text: "Biết sao hết cho vừa lòng nhau mới thấu đây em" },
    { time: 33,  text: "Dệt hàng triệu vết thương, tự vùi mình trước gương" },
    { time: 40,  text: "Nhìn một người đã từng thương, sao nay xa lạ đến bất thường?" },
    { time: 48,  text: "Cố gắng cũng chỉ bằng không, nước mắt ngược dòng" },
    { time: 55,  text: "Chảy ngược tận sâu bên trong, nghẹn đắng nơi lồng ngực..." },
    { time: 65,  text: "Ta chia tay, vì sao em ơi? Điều này anh muốn hỏi lâu rồi" },
    { time: 75,  text: "Những khung trời kỷ niệm vỡ đôi, có phải vì một câu anh đã lỡ lời?" },
    { time: 88,  text: "Sau đêm nay, tự ta cho ta, em và anh một đoạn kết mới" },
    { time: 100, text: "Dù rằng mình còn yêu nhau rất nhiều đấy, nhưng để ở lại thì anh nghĩ là không" },
    { time: 120, text: "Và sau những cảm xúc nhất thời, người bên em giờ này chẳng còn là anh" },
    { time: 135, text: "Gửi lại quá khứ, cung đàn đã vỡ..." },
    { time: 145, text: "Vì những vấn vương ấy chưa kịp thành lời..." }
];

const audioPlaylist = [
    {
        title: "LAVIEM. (TINH HÀ \"SAY HI\")",
        artist: "Quang Hùng MasterD, Captain Boy, Pháp Kiều, Coolkid & Danny Chung",
        src: "./assets/Danny Chung - LAVIEM.flac",
        albumArt: "./assets/LVE.jpg",
        dominantColor: "99, 102, 241", // Electric Indigo glow
        lyrics: laviemLyrics
    },
    {
        title: "Phép Màu (Đàn Cá Gỗ OST)",
        artist: "Mounter x MAYDAYs, Minh Tốc",
        src: "./assets/phepmau.mp3",
        albumArt: "./assets/Phepmaulogo.jpg",
        dominantColor: "168, 85, 247", // Purple glow default
        lyrics: null // Assigned below after phepMauLyrics definition
    },
    {
        title: "Còn Gì Đẹp Hơn (Mưa Đỏ Original Soundtrack)",
        artist: "Nguyễn Hùng",
        src: "./assets/congidephon.mp3",
        albumArt: "./assets/CGDH.jpg",
        dominantColor: "34, 211, 238" // Cyan glow
    }
];

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

if (audioPlaylist && audioPlaylist[1]) {
    audioPlaylist[1].lyrics = phepMauLyrics;
}

const heroTaglines = [
    "Lập trình viên • Gamer • Người yêu nhạc 🎵",
    "Đến từ Lâm Đồng, Việt Nam 🇻🇳",
    "Chào mừng đến không gian số của mình ✨"
];
