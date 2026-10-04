import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  ExternalLink,
  Github,
  Sparkles,
  Code2,
  Laptop,
  Music,
  Gamepad2,
  Share2,
  ArrowRight,
  School,
  QrCode,
  Check,
  ChevronDown
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// DATA CONFIGURATION
// ============================================================================

const MARQUEE_ICONS = [
  "React", "Tailwind CSS", "JavaScript", "GSAP", "Three.js", "Framer Motion",
  "Node.js", "Python", "TypeScript", "HTML5/CSS3", "WebGL", "Next.js", "Git"
];

const BENTO_LINKS = [
  {
    id: "social",
    title: "Mạng Xã Hội",
    subtitle: "Kết nối thường ngày",
    icon: Share2,
    gradient: "from-blue-600/20 to-purple-600/20",
    borderGlow: "hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
    colSpan: "col-span-12 md:col-span-4",
    links: [
      { name: "Facebook", url: "https://www.facebook.com/KaedeharaKazuha0805" },
      { name: "Instagram", url: "https://www.instagram.com/hotien_boyneh/" },
      { name: "Threads", url: "https://www.threads.net/@hotien_boyneh" }
    ]
  },
  {
    id: "study",
    title: "Góc Học Tập & Công Cụ",
    subtitle: "Dự án tiện ích do FOT xây dựng",
    icon: School,
    gradient: "from-cyan-600/20 to-blue-600/20",
    borderGlow: "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]",
    colSpan: "col-span-12 md:col-span-8",
    links: [
      { name: "Random của FOT", url: "https://hotienphat.github.io/GDTX/" },
      { name: "Tạo khung", url: "https://hotienphat.github.io/frame/" },
      { name: "Giám thị", url: "https://giamthi.vercel.app" },
      { name: "Trung Tâm GDTX", url: "https://txdaknong.daknong.edu.vn/" }
    ]
  },
  {
    id: "entertainment",
    title: "Giải Trí & Chill",
    subtitle: "Âm nhạc và tựa game yêu thích",
    icon: Gamepad2,
    gradient: "from-emerald-600/20 to-teal-600/20",
    borderGlow: "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]",
    colSpan: "col-span-12 md:col-span-7",
    links: [
      { name: "Genshin Impact", url: "https://genshin.hoyoverse.com/" },
      { name: "Honkai: Star Rail", url: "https://hsr.hoyoverse.com/" },
      { name: "Valorant", url: "https://playvalorant.com/" },
      { name: "Spotify", url: "https://spotify.com" }
    ]
  },
  {
    id: "donate",
    title: "Ủng Hộ & Cà Phê ☕",
    subtitle: "Momo & Viettinbank",
    icon: QrCode,
    gradient: "from-pink-600/20 to-rose-600/20",
    borderGlow: "hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(244,63,94,0.35)]",
    colSpan: "col-span-12 md:col-span-5",
    extra: "STK: 105882966120 (Viettinbank) • Momo: 0376178578",
    links: [
      { name: "Momo: 0376178578", url: "#" },
      { name: "Viettinbank: 105882966120", url: "#" }
    ]
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "3D Seasons Interactive Tree",
    subtitle: "Không gian 3D WebGL",
    desc: "Mô hình cây Bonsai nghệ thuật trên đảo bay viễn tưởng, mô phỏng chân thực chuyển động và thời tiết 4 mùa Xuân, Hạ, Thu, Đông.",
    tags: ["Three.js", "WebGL", "GSAP", "GLSL"],
    image: "./assets/avt.png",
    demo: "#",
    github: "https://github.com/hotienphat/web",
    color: "from-purple-600 via-indigo-600 to-pink-500"
  },
  {
    id: 2,
    title: "Random của FOT",
    subtitle: "Học tập & Tiện ích",
    desc: "Công cụ bốc thăm ngẫu nhiên thông minh phục vụ quản lý lớp học và chọn danh sách phát biểu, giao diện thân thiện và tốc độ tức thì.",
    tags: ["JavaScript", "HTML5", "CSS3 Animation"],
    image: "./assets/hutech.png",
    demo: "https://hotienphat.github.io/GDTX/",
    github: "https://github.com/hotienphat",
    color: "from-cyan-600 via-blue-600 to-teal-500"
  },
  {
    id: 3,
    title: "Tạo Khung Avatar",
    subtitle: "Công cụ đồ họa Canvas",
    desc: "Web app cho phép tạo khung đại diện, cắt ghép ảnh và gắn huy hiệu sự kiện tự động xuất ra file PNG độ phân giải cao.",
    tags: ["Canvas API", "HTML5", "Responsive UI"],
    image: "./assets/avt.png",
    demo: "https://hotienphat.github.io/frame/",
    github: "https://github.com/hotienphat",
    color: "from-amber-600 via-orange-600 to-rose-500"
  },
  {
    id: 4,
    title: "Nền Tảng Giám Thị",
    subtitle: "Quản trị thi cử",
    desc: "Giải pháp giám sát và hỗ trợ điều phối kỳ thi trực tuyến tối ưu hóa trải nghiệm giáo viên và ban tổ chức.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "./assets/hutech.png",
    demo: "https://giamthi.vercel.app",
    github: "https://github.com/hotienphat",
    color: "from-emerald-600 via-teal-600 to-sky-500"
  }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Portfolio() {
  // Theme State
  const [isDark, setIsDark] = useState(true);
  const [rippleData, setRippleData] = useState(null);

  // Intro Animation State
  const [introFinished, setIntroFinished] = useState(false);
  const [shockwaveActive, setShockwaveActive] = useState(false);

  // Projects Accordion Active State
  const [activeProject, setActiveProject] = useState(0);

  // GSAP Morphing Refs
  const containerRef = useRef(null);
  const heroAvatarRef = useRef(null);
  const aboutOctagonRef = useRef(null);

  // Handle Theme Toggle with Full-screen Expanding Circular Ripple
  const handleThemeToggle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    setRippleData({
      x,
      y,
      radius: maxRadius,
      nextDark: !isDark
    });
  };

  const handleRippleComplete = () => {
    if (rippleData) {
      setIsDark(rippleData.nextDark);
      setRippleData(null);
    }
  };

  // Intro Sequence Effect (~1.8s)
  useEffect(() => {
    const shockTimer = setTimeout(() => {
      setShockwaveActive(true);
    }, 900);

    const finishTimer = setTimeout(() => {
      setIntroFinished(true);
    }, 1800);

    return () => {
      clearTimeout(shockTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth font-sans transition-colors duration-500 ${
        isDark ? "bg-[#06060e] text-[#e8eaf0]" : "bg-[#f8fafc] text-[#0f172a]"
      }`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* ====================================================================
          1. INTRO ANIMATION OVERLAY (1.5 - 2s)
          ==================================================================== */}
      <AnimatePresence>
        {!introFinished && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#030308] pointer-events-none overflow-hidden"
          >
            {/* Flash of Light */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.9, 0], scale: [0.8, 1.4, 2] }}
              transition={{ duration: 0.8, times: [0, 0.4, 1], ease: "easeOut" }}
              className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/50 via-cyan-400/40 to-pink-500/50 blur-[120px]"
            />

            {/* Avatar Pop-up */}
            <motion.div
              initial={{ y: "100vh", scale: 0.4, rotate: -8 }}
              animate={{
                y: [null, "-30px", "0px"],
                scale: [null, 1.25, 1],
                rotate: [null, 4, 0]
              }}
              transition={{
                duration: 1.1,
                times: [0, 0.65, 1],
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative z-20 flex flex-col items-center"
            >
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-cyan-400 to-pink-500 shadow-[0_0_60px_rgba(168,85,247,0.6)]">
                <img
                  src="./assets/avt.png"
                  alt="Hồ Tiến Phát - Intro"
                  className="w-full h-full object-cover rounded-full bg-black/60"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="mt-4 text-center"
              >
                <h3 className="text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-pink-400">
                  LAKE FOT
                </h3>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-400 mt-1">
                  Initializing Experience...
                </p>
              </motion.div>
            </motion.div>

            {/* Shockwave Rings */}
            {shockwaveActive && (
              <motion.div
                initial={{ scale: 0.2, opacity: 1, borderWidth: "8px" }}
                animate={{ scale: 4.5, opacity: 0, borderWidth: "1px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute w-72 h-72 rounded-full border-cyan-400/80 shadow-[0_0_50px_rgba(34,211,238,0.7)]"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====================================================================
          RIPPLE EFFECT FOR THEME TOGGLE
          ==================================================================== */}
      {rippleData && (
        <motion.div
          initial={{ clipPath: `circle(0px at ${rippleData.x}px ${rippleData.y}px)` }}
          animate={{
            clipPath: `circle(${rippleData.radius}px at ${rippleData.x}px ${rippleData.y}px)`
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={handleRippleComplete}
          className={`fixed inset-0 z-40 pointer-events-none ${
            rippleData.nextDark ? "bg-[#06060e]" : "bg-[#f8fafc]"
          }`}
        />
      )}

      {/* ====================================================================
          TOP NAVIGATION BAR
          ==================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md bg-transparent">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[2px] shadow-lg shadow-purple-500/20">
            <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center font-black text-sm text-cyan-300">
              FOT
            </div>
          </div>
          <span className="font-bold tracking-tight text-lg hidden sm:inline-block">
            Hồ Tiến Phát
          </span>
        </motion.div>

        {/* Theme Toggle Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          onClick={handleThemeToggle}
          className={`relative p-3 rounded-2xl border transition-all duration-300 shadow-md ${
            isDark
              ? "bg-slate-900/80 border-purple-500/30 text-yellow-300 hover:border-yellow-400/60 hover:shadow-yellow-400/20"
              : "bg-white/80 border-slate-200 text-purple-600 hover:border-purple-500/60 hover:shadow-purple-500/20"
          }`}
          title="Chuyển chế độ Sáng / Tối (Ripple Effect)"
          aria-label="Toggle Theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-5 h-5 fill-yellow-300" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-5 h-5 fill-amber-400 text-amber-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </header>

      {/* ====================================================================
          TRANG 1: HERO SECTION (100VH SNAP)
          ==================================================================== */}
      <section
        id="hero-section"
        className="relative w-full h-screen snap-start snap-always flex flex-col justify-center items-center overflow-hidden px-4 select-none"
      >
        {/* Background Gigantic Typography Marquee (Behind Portrait) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
          <div className="flex whitespace-nowrap animate-[marquee_24s_linear_infinite] opacity-15 dark:opacity-10 text-[18vw] font-black uppercase tracking-tighter leading-none">
            <span className="mx-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
              LAKE FOT • HO TIEN PHAT • DEVELOPER •
            </span>
            <span className="mx-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
              LAKE FOT • HO TIEN PHAT • DEVELOPER •
            </span>
          </div>
        </div>

        {/* Center Cutout Portrait */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            ref={heroAvatarRef}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="relative group cursor-pointer"
          >
            {/* Ambient Background Aura */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-cyan-400 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-700 animate-pulse" />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl backdrop-blur-md">
              <img
                src="./assets/avt.png"
                alt="Hồ Tiến Phát (Lake Fot)"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Subtitles & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-6 z-10"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Hồ Tiến Phát{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                (Fot)
              </span>
            </h1>
            <p className="mt-2 text-sm md:text-base font-medium opacity-70 tracking-wide">
              Frontend Engineer • Creative Web Experience • HUTECH IT
            </p>
          </motion.div>
        </div>

        {/* Vertical Accent Typography "HOPHAT" (Bottom Corner) */}
        <div className="absolute bottom-10 right-6 md:right-12 z-20 hidden sm:flex flex-col items-center">
          <span className="text-xs font-mono tracking-[0.45em] uppercase opacity-40 hover:opacity-100 transition-opacity [writing-mode:vertical-rl]">
            HOPHAT
          </span>
          <div className="w-[1px] h-8 bg-purple-500/40 mt-3" />
        </div>

        {/* Scroll Indicator Prompt */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 animate-bounce cursor-pointer">
          <span className="text-xs font-mono uppercase tracking-widest">Cuộn xuống</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* ====================================================================
          TRANG 2: ABOUT SECTION (MORPHING & OCTAGON & ROTATING TEXT)
          ==================================================================== */}
      <section
        id="about-section"
        className="relative w-full h-screen snap-start snap-always flex items-center justify-center px-6 md:px-16 overflow-hidden"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
          
          {/* Left: Morphing Octagon Frame + Rotating Circular Text */}
          <div className="md:col-span-5 flex justify-center items-center relative">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-84 md:h-84 flex items-center justify-center">
              
              {/* Rotating Curved Text SVG */}
              <div className="absolute -inset-8 z-0 pointer-events-none">
                <svg
                  className="w-full h-full animate-[spin_20s_linear_infinite]"
                  viewBox="0 0 300 300"
                >
                  <defs>
                    <path
                      id="octagonCirclePath"
                      d="M 150, 150 m -118, 0 a 118,118 0 1,1 236,0 a 118,118 0 1,1 -236,0"
                    />
                  </defs>
                  <text className="fill-purple-500 dark:fill-cyan-400 font-mono text-[10.5px] uppercase font-bold tracking-[0.22em]">
                    <textPath href="#octagonCirclePath">
                      • LAKE FOT • HO TIEN PHAT • CREATIVE DEV • HUTECH •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Glowing Halo around Octagon */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 via-cyan-400/30 to-pink-500/40 blur-xl rounded-full" />

              {/* The Octagon Frame with Original Uncropped Portrait */}
              <div
                ref={aboutOctagonRef}
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 p-1 bg-gradient-to-br from-purple-500 via-cyan-400 to-pink-500 transition-transform duration-500 hover:scale-105"
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                }}
              >
                <div
                  className="w-full h-full overflow-hidden bg-slate-900"
                  style={{
                    clipPath:
                      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                  }}
                >
                  <img
                    src="./assets/avt.png"
                    alt="Hồ Tiến Phát - Original"
                    className="w-full h-full object-cover filter contrast-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Personal Bio & Narrative */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 w-max">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Khám Phá Về Mình</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Biến từng dòng code thành{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
                trải nghiệm thị giác
              </span>
            </h2>

            <p className="text-sm md:text-base leading-relaxed opacity-80">
              Xin chào! Mình là <strong>Hồ Tiến Phát</strong>, sinh viên ngành Công nghệ
              Thông tin tại Đại học Công Nghệ TP.HCM (HUTECH), quê quán tại Lâm Đồng.
              Mình đam mê sáng tạo những trang web không đơn thuần chỉ để xem, mà là một
              không gian sống động với âm thanh, chuyển động 60fps và đồ họa tương tác.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-xs font-mono opacity-60 block">Quê quán</span>
                <span className="font-semibold text-sm">Lâm Đồng, VN 🇻🇳</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-xs font-mono opacity-60 block">Đại học</span>
                <span className="font-semibold text-sm">HUTECH CNTT 🎓</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md col-span-2 sm:col-span-1">
                <span className="text-xs font-mono opacity-60 block">Đam mê</span>
                <span className="font-semibold text-sm">Code & Game 🎧</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ====================================================================
          PHÂN ĐOẠN: INFINITE MARQUEE ICON BAR (DẢI BĂNG VÔ CỰC)
          ==================================================================== */}
      <div className="relative w-full h-14 bg-gradient-to-r from-purple-900/40 via-cyan-900/30 to-purple-900/40 border-y border-purple-500/20 backdrop-blur-xl flex items-center overflow-hidden select-none z-20">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...MARQUEE_ICONS, ...MARQUEE_ICONS].map((icon, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 mx-6 text-sm font-mono font-semibold tracking-wider opacity-75 hover:opacity-100 transition-opacity"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>{icon}</span>
              <span className="text-purple-400/60 ml-4">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* ====================================================================
          TRANG 3: BENTO GRID / QUICK LINKS
          ==================================================================== */}
      <section
        id="links-section"
        className="relative w-full h-screen snap-start snap-always flex flex-col justify-center items-center px-6 md:px-16 overflow-hidden"
      >
        <div className="max-w-6xl w-full flex flex-col justify-center h-full py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Liên Kết Nhanh &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Không Gian Số
              </span>
            </h2>
            <p className="text-xs md:text-sm opacity-70 mt-1">
              Khám phá các góc kết nối, tiện ích học tập và mạng xã hội của FOT
            </p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-12 gap-4">
            {BENTO_LINKS.map((bento) => {
              const IconComp = bento.icon;
              return (
                <div
                  key={bento.id}
                  className={`${bento.colSpan} group relative rounded-3xl p-6 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-xl border border-white/10 ${bento.borderGlow} transition-all duration-500 hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-white/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <IconComp className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base md:text-lg">{bento.title}</h3>
                        <p className="text-xs opacity-60">{bento.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {bento.extra && (
                    <div className="text-xs font-mono p-2.5 mb-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      {bento.extra}
                    </div>
                  )}

                  {/* Links List */}
                  <div className="flex flex-wrap gap-2">
                    {bento.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/15 border border-white/10 hover:border-purple-400/40 transition-all duration-300 group/btn"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          TRANG 4: DỰ ÁN NỔI BẬT (HORIZONTAL HOVER ACCORDION)
          ==================================================================== */}
      <section
        id="projects-section"
        className="relative w-full h-screen snap-start snap-always flex flex-col justify-center items-center px-6 md:px-16 overflow-hidden"
      >
        <div className="max-w-6xl w-full flex flex-col justify-center h-full py-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Dự Án{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Nổi Bật
                </span>
              </h2>
              <p className="text-xs md:text-sm opacity-70 mt-1">
                Rê chuột vào từng thẻ để mở rộng chi tiết dự án theo chiều ngang
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs opacity-50">
              <Laptop className="w-4 h-4" />
              <span>Interactive Accordion</span>
            </div>
          </div>

          {/* Horizontal Hover Accordion Panels */}
          <div className="flex flex-col md:flex-row w-full h-[58vh] gap-3">
            {PROJECTS.map((proj, idx) => {
              const isActive = activeProject === idx;
              return (
                <div
                  key={proj.id}
                  onMouseEnter={() => setActiveProject(idx)}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out border border-white/10 ${
                    isActive
                      ? "md:flex-[3.5] flex-[3] shadow-[0_0_35px_rgba(168,85,247,0.3)] border-purple-500/50"
                      : "md:flex-[1] flex-[1] opacity-75 hover:opacity-100"
                  }`}
                >
                  {/* Background Gradient & Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-25 filter blur-sm transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md" />

                  {/* Panel Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 z-10">
                    {/* Header: Project Index & Subtitle */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                        0{idx + 1}
                      </span>
                      {isActive && (
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/15">
                          {proj.subtitle}
                        </span>
                      )}
                    </div>

                    {/* Collapsed Vertical Title (Visible when not active on desktop) */}
                    {!isActive && (
                      <div className="hidden md:flex flex-1 items-center justify-center my-auto">
                        <span className="font-bold text-base md:text-lg tracking-wider uppercase opacity-80 whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                          {proj.title}
                        </span>
                      </div>
                    )}

                    {/* Expanded Detail Body */}
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-4"
                      >
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                          {proj.title}
                        </h3>

                        <p className="text-xs md:text-sm opacity-80 leading-relaxed max-w-xl">
                          {proj.desc}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2">
                          {proj.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/10 border border-white/10 text-cyan-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-2">
                          <a
                            href={proj.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs bg-gradient-to-r from-purple-500 to-cyan-400 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
                          >
                            <span>Xem Demo</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs bg-white/10 hover:bg-white/20 border border-white/15 transition-all duration-300"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="md:hidden">
                        <h4 className="font-bold text-sm truncate">{proj.title}</h4>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          CUSTOM KEYFRAME STYLES (MARQUEE & HELPERS)
          ==================================================================== */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
