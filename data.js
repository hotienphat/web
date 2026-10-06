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
    {
        "time": 0,
        "text": "Bài hát: LAVIEM - Quang Hùng MasterD, CAPTAIN BOY, Pháp Kiều, CoolKid, Danny Chung"
    },
    {
        "time": 13.99,
        "text": "Trái tim anh chẳng còn cần thiết nữa,"
    },
    {
        "time": 16.0,
        "text": "nói chi đến đây cũng thừa"
    },
    {
        "time": 17.86,
        "text": "Rượu vang pha với cơn mưa"
    },
    {
        "time": 20.65,
        "text": "Hàng trăm lý do"
    },
    {
        "time": 21.18,
        "text": "cũng chẳng thể cứu vãn"
    },
    {
        "time": 22.59,
        "text": "Biết sao hết cho vừa"
    },
    {
        "time": 24.45,
        "text": "lòng nhau mới thấu đây em"
    },
    {
        "time": 27.13,
        "text": "Dệt hàng triệu vết thương,"
    },
    {
        "time": 28.56,
        "text": "tự vùi mình trước gương"
    },
    {
        "time": 30.2,
        "text": "Nhìn một người đã từng thương"
    },
    {
        "time": 31.44,
        "text": "sao nay xa lạ đến bất thường"
    },
    {
        "time": 33.54,
        "text": "Cố gắng cũng chỉ bằng không,"
    },
    {
        "time": 35.24,
        "text": "nước mắt ngược dòng"
    },
    {
        "time": 37.51,
        "text": "Chảy ngược tận sâu bên trong"
    },
    {
        "time": 38.6,
        "text": "nghẹn đắng nơi lồng ngực"
    },
    {
        "time": 41.59,
        "text": "Ta chia tay, vì sao em ơi?"
    },
    {
        "time": 44.32,
        "text": "Điều này anh muốn hỏi lâu rồi"
    },
    {
        "time": 47.4,
        "text": "Những khung trời kỷ niệm vỡ đôi"
    },
    {
        "time": 50.74,
        "text": "Có phải vì một câu anh đã lỡ lời"
    },
    {
        "time": 54.36,
        "text": "Sau đêm nay,"
    },
    {
        "time": 55.72,
        "text": "tự ta cho ta"
    },
    {
        "time": 57.4,
        "text": "Em và anh một đoạn kết mới"
    },
    {
        "time": 60.69,
        "text": "Dù rằng mình còn yêu nhau"
    },
    {
        "time": 62.3,
        "text": "rất nhiều đấy"
    },
    {
        "time": 64.06,
        "text": "Nhưng để ở lại"
    },
    {
        "time": 65.1,
        "text": "thì anh nghĩ là không"
    },
    {
        "time": 66.97,
        "text": "Và sau những cảm xúc nhất thời"
    },
    {
        "time": 70.64,
        "text": "Người bên em giờ này"
    },
    {
        "time": 71.85,
        "text": "chẳng còn là anh"
    },
    {
        "time": 74.27,
        "text": "Gửi lại quá khứ"
    },
    {
        "time": 75.43,
        "text": "cung đàn đã vỡ"
    },
    {
        "time": 77.63,
        "text": "Vì những vấn vương ấy"
    },
    {
        "time": 78.52,
        "text": "chưa kịp thành lời"
    },
    {
        "time": 80.07,
        "text": "Trái tim anh chẳng còn cần thiết nữa,"
    },
    {
        "time": 82.14,
        "text": "nói chi đến đây cũng thừa"
    },
    {
        "time": 84.06,
        "text": "Rượu vang pha với cơn mưa"
    },
    {
        "time": 86.68,
        "text": "Hàng trăm lý do"
    },
    {
        "time": 87.47,
        "text": "cũng chẳng thể cứu vãn"
    },
    {
        "time": 88.81,
        "text": "Biết sao hết cho vừa lòng"
    },
    {
        "time": 91.05,
        "text": "nhau mới thấu đây em"
    },
    {
        "time": 93.44,
        "text": "Dệt hàng triệu vết thương,"
    },
    {
        "time": 94.78,
        "text": "tự vùi mình trước gương"
    },
    {
        "time": 96.44,
        "text": "Nhìn một người đã từng thương"
    },
    {
        "time": 97.81,
        "text": "sao nay xa lạ đến bất thường"
    },
    {
        "time": 99.83,
        "text": "Cố gắng cũng chỉ bằng không,"
    },
    {
        "time": 101.46,
        "text": "nước mắt ngược dòng"
    },
    {
        "time": 103.67,
        "text": "Chảy ngược tận sâu bên trong"
    },
    {
        "time": 104.9,
        "text": "nghẹn đắng nơi lồng ngực"
    },
    {
        "time": 106.56,
        "text": "Tất cả là tại vì em,"
    },
    {
        "time": 107.76,
        "text": "em, em, em, em"
    },
    {
        "time": 110.57,
        "text": "Người xa lạ anh từng quen"
    },
    {
        "time": 113.48,
        "text": "Tất cả là tại vì em,"
    },
    {
        "time": 114.7,
        "text": "em, em, em, em"
    },
    {
        "time": 117.09,
        "text": "Kẻ ngốc đang say tình"
    },
    {
        "time": 118.29,
        "text": "dưới ngọn đèn"
    },
    {
        "time": 119.55,
        "text": "Tất cả là tại vì em,"
    },
    {
        "time": 121.04,
        "text": "em, em, em, em"
    },
    {
        "time": 123.77,
        "text": "Người xa lạ anh từng quen"
    },
    {
        "time": 126.59,
        "text": "Tất cả là tại vì em,"
    },
    {
        "time": 127.94,
        "text": "em, em, em, em"
    },
    {
        "time": 130.4,
        "text": "Kẻ ngốc đang say tình"
    },
    {
        "time": 131.31,
        "text": "dưới ngọn đèn"
    },
    {
        "time": 134.05,
        "text": "Lau đôi mi,"
    },
    {
        "time": 134.65,
        "text": "đây là nước mắt hay mưa"
    },
    {
        "time": 135.44,
        "text": "Buông đôi tay,"
    },
    {
        "time": 136.16,
        "text": "anh đâu muốn phải dây dưa"
    },
    {
        "time": 137.11,
        "text": "Quên đi đôi mắt ấy khi xưa,"
    },
    {
        "time": 138.23,
        "text": "à chẳng bên nhau được nữa"
    },
    {
        "time": 140.54,
        "text": "Sau bao lan đau"
    },
    {
        "time": 141.24,
        "text": "anh lại cho đi và quên"
    },
    {
        "time": 142.17,
        "text": "Anh ghét nỗi đau,"
    },
    {
        "time": 142.87,
        "text": "cơn mưa đêm kia và em"
    },
    {
        "time": 143.83,
        "text": "Ta vội quên rồi,"
    },
    {
        "time": 144.62,
        "text": "những điều sao thật quen"
    },
    {
        "time": 145.38,
        "text": "Để nỗi buồn kia gọi tên"
    },
    {
        "time": 146.14,
        "text": "mỗi khi bài ca bật lên"
    },
    {
        "time": 147.04,
        "text": "Và sau những cảm xúc nhất thời"
    },
    {
        "time": 150.02,
        "text": "Người bên em giờ này"
    },
    {
        "time": 151.25,
        "text": "chẳng còn là anh"
    },
    {
        "time": 153.35,
        "text": "Gửi lại quá khứ"
    },
    {
        "time": 154.55,
        "text": "cung đàn đã vỡ"
    },
    {
        "time": 156.84,
        "text": "Vì những vấn vương ấy"
    },
    {
        "time": 157.78,
        "text": "chưa kịp thành lời"
    },
    {
        "time": 159.77,
        "text": "Trái tim anh chẳng còn cần thiết nữa,"
    },
    {
        "time": 161.74,
        "text": "nói chi đến đây cũng thừa"
    },
    {
        "time": 163.46,
        "text": "Rượu vang pha với cơn mưa"
    },
    {
        "time": 166.37,
        "text": "Hàng trăm lý do"
    },
    {
        "time": 166.95,
        "text": "cũng chẳng thể cứu vãn"
    },
    {
        "time": 168.29,
        "text": "Biết sao hết cho vừa"
    },
    {
        "time": 170.04,
        "text": "lòng nhau mới thấu đây em"
    },
    {
        "time": 172.73,
        "text": "Dệt hàng triệu vết thương,"
    },
    {
        "time": 174.12,
        "text": "tự vùi mình trước gương"
    },
    {
        "time": 175.8,
        "text": "Nhìn một người đã từng thương"
    },
    {
        "time": 177.16,
        "text": "sao nay xa lạ đến bất thường"
    },
    {
        "time": 179.23,
        "text": "Cố gắng cũng chỉ bằng không,"
    },
    {
        "time": 180.73,
        "text": "nước mắt ngược dòng"
    },
    {
        "time": 183.22,
        "text": "Chảy ngược tận sâu bên trong"
    },
    {
        "time": 184.36,
        "text": "nghẹn đắng nơi lồng ngực"
    },
    {
        "time": 186.1,
        "text": "..."
    },
    {
        "time": 187.47,
        "text": "この世にはもう"
    },
    {
        "time": 189.78,
        "text": "意味なんてない"
    },
    {
        "time": 194.13,
        "text": "虹よ、さようなら"
    },
    {
        "time": 196.46,
        "text": "光があれば影もある"
    },
    {
        "time": 201.07,
        "text": "宿命だから"
    },
    {
        "time": 202.57,
        "text": "傷をあむ、かがみごし"
    },
    {
        "time": 204.04,
        "text": "愛した人が、"
    },
    {
        "time": 205.54,
        "text": "他人のようだ"
    },
    {
        "time": 207.56,
        "text": "無駄なすべて、今"
    },
    {
        "time": 210.49,
        "text": "胸の奥で息詰まる"
    },
    {
        "time": 214.15,
        "text": "Trái tim anh chẳng còn cần thiết nữa,"
    },
    {
        "time": 216.32,
        "text": "nói chi đến đây cũng thừa"
    },
    {
        "time": 218.12,
        "text": "Rượu vang pha với cơn mưa"
    },
    {
        "time": 220.65,
        "text": "Hàng trăm lý do"
    },
    {
        "time": 221.44,
        "text": "cũng chẳng thể cứu vãn"
    },
    {
        "time": 222.89,
        "text": "Biết sao hết cho vừa"
    },
    {
        "time": 224.74,
        "text": "lòng nhau mới thấu đây em"
    },
    {
        "time": 227.26,
        "text": "Dệt hàng triệu vết thương,"
    },
    {
        "time": 228.86,
        "text": "tự vùi mình trước gương"
    },
    {
        "time": 230.58,
        "text": "Nhìn một người đã từng thương"
    },
    {
        "time": 231.78,
        "text": "sao nay xa lạ đến bất thường"
    },
    {
        "time": 233.89,
        "text": "Cố gắng cũng chỉ bằng không,"
    },
    {
        "time": 235.44,
        "text": "nước mắt ngược dòng"
    },
    {
        "time": 238.18,
        "text": "Chảy ngược tận sâu bên trong"
    },
    {
        "time": 238.92,
        "text": "nghẹn đắng nơi lồng ngực"
    },
    {
        "time": 240.7,
        "text": "Tất cả là tại vì em,"
    },
    {
        "time": 241.95,
        "text": "em, em, em, em"
    },
    {
        "time": 244.73,
        "text": "Người xa lạ anh từng quen"
    },
    {
        "time": 247.42,
        "text": "Tất cả là tại vì em,"
    },
    {
        "time": 248.69,
        "text": "em, em, em, em"
    },
    {
        "time": 251.29,
        "text": "Kẻ ngốc đang say tình"
    },
    {
        "time": 252.44,
        "text": "dưới ngọn đèn"
    },
    {
        "time": 254.62,
        "text": "<Outro>"
    },
    {
        "time": 268.04,
        "text": "Beat Andy"
    }
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
        title: "SPIN",
        artist: "Kroi (Steel Ball Run)",
        src: "./assets/Kroi - SPIN.flac",
        albumArt: "./assets/spin.jpg",
        dominantColor: "249, 115, 22" // Vibrant Steel Ball Run Orange glow
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

const phepMauTrack = audioPlaylist && audioPlaylist.find(t => t.title && t.title.includes("Phép Màu"));
if (phepMauTrack) {
    phepMauTrack.lyrics = phepMauLyrics;
}

const heroTaglines = [
    "Lập trình viên • Gamer • Người yêu nhạc 🎵",
    "Đến từ Lâm Đồng, Việt Nam 🇻🇳",
    "Chào mừng đến không gian số của mình ✨"
];
