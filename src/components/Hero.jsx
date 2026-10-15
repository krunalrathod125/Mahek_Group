import { useState, useEffect, useRef } from 'react';
import heroVideo from '../assets/videos/hero-banner.mp4';
import posterImg from '../assets/images/Screenshot_2025-09-12_134856_170b8efc-fcd0-41e0-8231-7eead09ac193_1200x.png';
import avatar1 from '../assets/images/31.jpg';
import avatar2 from '../assets/images/21.jpg';
import avatar3 from '../assets/images/52.jpg';
import { Award, Building, CheckCircle2, Users } from 'lucide-react';

export default function Hero({ onExploreProjects, onOpenContact: _onOpenContact }) {
  const videoRef = useRef(null);
  const [counters, setCounters] = useState({
    founded: 1982,
    projects: 0,
    production: 0,
    hilton: 1
  });

  // Animated Counter Effect on Load
  useEffect(() => {
    const targets = {
      projects: 18,
      production: 25
    };

    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const ease = 1 - Math.pow(1 - progress, 4);

      setCounters({
        founded: 1982,
        projects: Math.floor(targets.projects * ease),
        production: Math.floor(targets.production * ease),
        hilton: 1
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({
          founded: 1982,
          projects: 18,
          production: 25,
          hilton: 1
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Ensure video plays smoothly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* ============================================================ */}
      {/* 1. HERO VIDEO BANNER */}
      {/* ============================================================ */}
      <section
        id="hero"
        className="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-start overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12"
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={posterImg}
          className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-100 transition-opacity duration-1000"
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/hero-banner.mp4" type="video/mp4" />
          <source src="https://cdn.shopify.com/videos/c/o/v/74b0d70cff094821aa0f19ada2d57007.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay Tint */}
        <div className="absolute inset-0 bg-black/45 md:bg-black/40 z-1"></div>

        {/* Subtle Top & Bottom Gradient Feathers */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 via-black/25 to-transparent z-2 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-2 pointer-events-none"></div>

        {/* Centered Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center mt-6 sm:mt-8 md:mt-10 animate-in fade-in slide-in-from-bottom duration-700">

          
          {/* Brand Tagline */}
          <p className="text-neutral-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Your one-stop shop for amazing products
          </p>
          {/* Main Serif Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-extrabold text-[#dfba52] tracking-tight leading-[1.15] mb-4 sm:mb-6 drop-shadow-[0_3px_15px_rgba(0,0,0,0.85)] drop-shadow-[0_0_30px_rgba(197,155,39,0.4)]">
            Welcome to Our Store
          </h1>



          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#c59b27] hover:bg-[#aa7f17] text-white hover:shadow-[0_10px_25px_rgba(197,155,39,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Our Projects & Verticals
            </button>
          
          </div>
        </div>

        {/* Floating Social Proof Card */}
        <div className="hidden lg:block absolute bottom-16 right-8 md:right-12 z-10 bg-black/60 backdrop-blur-md border border-[#c59b27]/40 rounded-2xl p-4 sm:p-5 text-center max-w-[240px] transition-all duration-300 hover:bg-black/75 hover:scale-105 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
          {/* 3 Overlapping Avatar Images */}
          <div className="flex justify-center items-center -space-x-2.5 mb-2.5">
            <img
              src={avatar1}
              alt="Industry Partner"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#dfba52] object-cover"
            />
            <img
              src={avatar2}
              alt="Industry Partner"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#dfba52] object-cover relative z-1"
            />
            <img
              src={avatar3}
              alt="Industry Partner"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#dfba52] object-cover relative z-2"
            />
          </div>

          {/* Counter Title */}
          <h3 className="text-white font-serif font-bold text-base sm:text-lg leading-tight mb-1">
            <span className="text-[#dfba52]">40+ Years</span> of Legacy
          </h3>

          {/* Subtext */}
          <p className="text-neutral-300 text-[11px] sm:text-xs font-normal">
            Rooted in Surat&apos;s entrepreneurial spirit since 1982
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. STATS SECTION (Authentic figures from mahekgroup.com) */}
      {/* ============================================================ */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 mb-4 md:mb-6">
        <div className="bg-white rounded-2xl border border-[#c59b27]/30 p-4 sm:p-6 md:p-8 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

            {/* Stat 1: Year Founded */}
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-neutral-200/80 hover:border-[#c59b27] hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-center mb-2">
                <span className="p-2 rounded-full bg-[#c59b27]/10 text-[#9a7210] group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-[#c59b27]" />
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-neutral-900 group-hover:text-[#9a7210] tracking-tight transition-colors">
                <span>{counters.founded}</span>
              </h2>
              <p className="text-xs sm:text-sm font-bold text-[#9a7210] uppercase tracking-wider mt-1">
                Year Founded
              </p>
              <span className="text-[10px] text-neutral-500 font-medium">40+ Years of Excellence</span>
            </div>

            {/* Stat 2: Real Estate Projects */}
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-neutral-200/80 hover:border-[#c59b27] hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-center mb-2">
                <span className="p-2 rounded-full bg-[#c59b27]/10 text-[#9a7210] group-hover:scale-110 transition-transform">
                  <Building className="w-5 h-5 text-[#c59b27]" />
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-neutral-900 group-hover:text-[#9a7210] tracking-tight transition-colors">
                <span>{counters.projects}</span>
                <span className="text-[#c59b27]">+</span>
              </h2>
              <p className="text-xs sm:text-sm font-bold text-[#9a7210] uppercase tracking-wider mt-1">
                Real Estate Projects
              </p>
              <span className="text-[10px] text-neutral-500 font-medium">Commissioned in Surat</span>
            </div>

            {/* Stat 3: Scap Group Production */}
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-neutral-200/80 hover:border-[#c59b27] hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-center mb-2">
                <span className="p-2 rounded-full bg-[#c59b27]/10 text-[#9a7210] group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 text-[#c59b27]" />
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-neutral-900 group-hover:text-[#9a7210] tracking-tight transition-colors">
                <span>{counters.production}M</span>
                <span className="text-[#c59b27]">+</span>
              </h2>
              <p className="text-xs sm:text-sm font-bold text-[#9a7210] uppercase tracking-wider mt-1">
                Scap Group Output
              </p>
              <span className="text-[10px] text-neutral-500 font-medium">Meters Produced / Annum</span>
            </div>

            {/* Stat 4: Hilton Collaboration */}
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-neutral-200/80 hover:border-[#c59b27] hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-center mb-2">
                <span className="p-2 rounded-full bg-[#c59b27]/10 text-[#9a7210] group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-[#c59b27]" />
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-neutral-900 group-hover:text-[#9a7210] tracking-tight transition-colors">
                <span>1st</span>
              </h2>
              <p className="text-xs sm:text-sm font-bold text-[#9a7210] uppercase tracking-wider mt-1">
                Hilton Garden Inn
              </p>
              <span className="text-[10px] text-neutral-500 font-medium">In the State of Gujarat</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
