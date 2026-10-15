import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import {
  Menu, X, Phone, Mail, Clock, Search,
  ChevronRight, ArrowRight, Building, Award, ShieldCheck
} from 'lucide-react';

export default function Navbar({ onOpenContact, onOpenSearch, onSelectProject: _onSelectProject }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll state for subtle shadow enhancement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when side drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [drawerOpen]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id) => {
    setDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ============================================================ */}
      {/* MINIMALIST HEADER (Matching user screenshot with Logo Gold Theme) */}
      {/* ============================================================ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#c59b27]/25 transition-all duration-300 ${isScrolled
            ? 'shadow-[0_4px_20px_rgba(197,155,39,0.08)] py-1 sm:py-1.5'
            : 'shadow-[0_1px_4px_rgba(0,0,0,0.04)] py-1.5 sm:py-2'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo (Left) */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Mahek Real Estate Home"
          >
            <img
              src={logoImg}
              alt="Mahek Real Estate"
              className="h-7 sm:h-8 md:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </a>

          {/* Clean Hamburger Menu Button (Right, gold theme matching logo) */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open Navigation Menu"
            className="p-1.5 sm:p-2 rounded-xl text-[#c59b27] hover:text-[#9a7210] hover:bg-neutral-100 border border-[#c59b27]/20 hover:border-[#c59b27] transition-all duration-200 cursor-pointer focus:outline-none"
          >
            <Menu className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </button>
        </div>
      </header>

      {/* ============================================================ */}
      {/* SLIDE-OUT NAVIGATION DRAWER & OVERLAY */}
      {/* ============================================================ */}

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity duration-300 ${drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Side Drawer with Gold Brand Accent */}
      <aside
        className={`fixed top-0 right-0 h-full w-[310px] sm:w-[380px] max-w-[85vw] bg-white border-l border-[#c59b27]/30 z-50 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        aria-label="Main Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#c59b27]/20 bg-white">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Mahek Real Estate" className="h-8 sm:h-9 w-auto object-contain" />
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close Navigation Menu"
            className="p-1.5 rounded-full text-neutral-500 hover:text-[#c59b27] hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Scrollable Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7 divide-y divide-[#c59b27]/15">

          {/* Section 1: Main Menu */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#9a7210] mb-3">
              Main Menu
            </h4>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-base font-semibold text-neutral-800 hover:text-[#9a7210] hover:bg-neutral-100 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-[#c59b27] transition-transform group-hover:translate-x-1" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-base font-semibold text-neutral-800 hover:text-[#9a7210] hover:bg-neutral-100 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>About Us (Est. 1982)</span>
                  <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-[#c59b27] transition-transform group-hover:translate-x-1" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-base font-semibold text-neutral-800 hover:text-[#9a7210] hover:bg-neutral-100 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>Business Segments</span>
                  <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-[#c59b27] transition-transform group-hover:translate-x-1" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-base font-semibold text-neutral-800 hover:text-[#9a7210] hover:bg-neutral-100 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>Projects (18+)</span>
                  <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-[#c59b27] transition-transform group-hover:translate-x-1" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-base font-semibold text-neutral-800 hover:text-[#9a7210] hover:bg-neutral-100 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>Capabilities & Story</span>
                  <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-[#c59b27] transition-transform group-hover:translate-x-1" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-base font-semibold text-neutral-800 hover:text-[#9a7210] hover:bg-neutral-100 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-[#c59b27] transition-transform group-hover:translate-x-1" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    if (onOpenSearch) onOpenSearch();
                  }}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-base font-semibold text-neutral-800 hover:text-[#9a7210] hover:bg-neutral-100 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#c59b27]" />
                    <span>Search Projects</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-[#c59b27] transition-transform group-hover:translate-x-1" />
                </button>
              </li>
            </ul>
          </div>

          {/* Section 2: Business Segments */}
          <div className="pt-6">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#9a7210] mb-3">
              Our 5 Business Segments
            </h4>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-white border border-[#c59b27]/25 flex items-start gap-3">
                <Building className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-neutral-900">Real Estate (Mahek Realty)</h5>
                  <p className="text-[11px] text-neutral-600">18+ landmark commercial & residential hubs</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#c59b27]/25 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-neutral-900">Hospitality (Hilton Garden Inn)</h5>
                  <p className="text-[11px] text-neutral-600">Gujarat&apos;s 1st Hilton in Surat City Centre</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#c59b27]/25 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-neutral-900">Technical Textiles (Scap Group)</h5>
                  <p className="text-[11px] text-neutral-600">25M+ meters/yr non-woven fabrics (ISO 9001:2015)</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Drawer Footer with Quick Contact & Action */}
        <div className="p-6 border-t border-[#c59b27]/20 bg-white space-y-4">
          <div className="space-y-2 text-xs text-neutral-700">
            <a href="tel:+919377744633" className="flex items-center gap-2 font-semibold text-neutral-800 hover:text-[#9a7210]">
              <Phone className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>+91 93777 44633 / +91 75674 41177</span>
            </a>
            <a href="mailto:infomahek2@gmail.com" className="flex items-center gap-2 font-semibold text-neutral-800 hover:text-[#9a7210]">
              <Mail className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>infomahek2@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-neutral-600 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Mon - Sat: 9:30AM - 7:00PM IST</span>
            </div>
          </div>

          <button
            onClick={() => {
              setDrawerOpen(false);
              if (onOpenContact) onOpenContact();
            }}
            className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#c59b27] hover:bg-[#aa7f17] hover:shadow-[0_10px_20px_rgba(197,155,39,0.3)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-101 active:scale-98"
          >
            <span>Inquire With Mahek Group</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </aside>
    </>
  );
}
