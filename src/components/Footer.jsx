import { useState } from 'react';
import logoImg from '../assets/logo.png';
import {
  Phone, Mail, MapPin, Send, ArrowUp,
  ShieldCheck, CheckCircle2, AlertCircle, ChevronDown
} from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  // Dropdown accordions state for mobile and tablet screens
  const [openSections, setOpenSections] = useState({
    navigation: false,
    segments: false,
    headquarters: false
  });

  const toggleSection = (key) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const validateEmail = (val) => {
    const trimmed = (val || '').trim();
    if (!trimmed) {
      return 'Email address is required.';
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)) {
      return 'Please enter a valid email address (e.g. name@domain.com).';
    }
    return '';
  };

  const handleEmailChange = (val) => {
    setEmail(val);
    if (emailTouched) {
      setEmailError(validateEmail(val));
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(validateEmail(email));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmailTouched(true);
    const err = validateEmail(email);
    setEmailError(err);
    if (!err) {
      setSubscribed(true);
      setEmail('');
      setEmailError('');
      setEmailTouched(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f6f2e8] border-t-2 border-[#c59b27]/30 text-neutral-700 relative overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#c59b27]/10 blur-3xl pointer-events-none"></div>

      {/* Main Footer Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10 pb-8 relative z-10">

        {/* Top Newsletter Bar */}
        <div className="mb-8 md:mb-10 p-6 sm:p-8 rounded-2xl bg-white border border-[#c59b27]/30 hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#9a7210] font-bold block mb-2">
              Exclusive VIP Releases
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-neutral-900 mb-2">
              Subscribe to Private Portfolio Updates
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              Receive confidential off-plan launch allocations, ground-breaking updates, and quarterly property yield insights directly to your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-white border-2 border-[#c59b27] text-neutral-900 text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59b27]" />
                <span>Thank you. You are enrolled in VIP private updates.</span>
              </div>
            ) : (
              <div>
                <form onSubmit={handleSubscribe} noValidate className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    onBlur={handleEmailBlur}
                    placeholder="Enter your executive email..."
                    className={`flex-1 bg-white border rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none transition-colors ${emailTouched && emailError
                      ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                      : emailTouched && email.trim()
                        ? 'border-[#c59b27]/60 focus:border-[#c59b27]'
                        : 'border-neutral-300 focus:border-[#c59b27]'
                      }`}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#c59b27] hover:bg-[#aa7f17] text-white font-bold uppercase tracking-wider text-xs hover:shadow-[0_4px_18px_rgba(197,155,39,0.3)] transition-all flex items-center gap-1.5 whitespace-nowrap hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
                {emailTouched && emailError && (
                  <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-red-500" />
                    <span>{emailError}</span>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 4 Column Footer Grid - Responsive Grid with Dropdowns on Small Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-12 pb-10 lg:pb-16 border-b border-neutral-300">

          {/* Col 1: Brand Info */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5 pb-6 lg:pb-0 border-b border-[#c59b27]/20 lg:border-none">
            <a href="#" className="inline-block">
              <div className="p-1 rounded-xl inline-block">
                <img
                  src={logoImg}
                  alt="Mahek Group Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </a>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              Founded in Surat, India in 1982, Mahek Group is a diversified investment conglomerate specializing in real estate, hospitality, technical textiles, lab-grown diamonds, and pharmaceuticals.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-neutral-800 font-semibold">
              <ShieldCheck className="w-5 h-5 text-[#c59b27] flex-shrink-0" />
              <span>ISO 9001:2015 Certified & Hilton Worldwide Partner</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://mahekgroup.com/" target="_blank" rel="noopener noreferrer" aria-label="Website" className="w-9 h-9 rounded-full bg-white border border-[#c59b27]/30 text-neutral-700 hover:text-[#9a7210] hover:border-[#c59b27] hover:shadow-sm flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm7.93 9h-3.18a15.8 15.8 0 0 0-1.37-5.06A8 8 0 0 1 19.93 11zM12 4.07c.94 1.48 1.7 3.65 1.94 6.93H10.06C10.3 7.72 11.06 5.55 12 4.07zM4.07 13h3.18a15.8 15.8 0 0 0 1.37 5.06A8 8 0 0 1 4.07 13zm3.18-2H4.07a8 8 0 0 1 4.55-5.06A15.8 15.8 0 0 0 7.25 11zM12 19.93c-.94-1.48-1.7-3.65-1.94-6.93h3.88c-.24 3.28-1 5.45-1.94 6.93zm3.43-1.87a15.8 15.8 0 0 0 1.37-5.06h3.18a8 8 0 0 1-4.55 5.06z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white border border-[#c59b27]/30 text-neutral-700 hover:text-[#9a7210] hover:border-[#c59b27] hover:shadow-sm flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.4 9.74V9.93H5.06v8.57h2.8z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white border border-[#c59b27]/30 text-neutral-700 hover:text-[#9a7210] hover:border-[#c59b27] hover:shadow-sm flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white border border-[#c59b27]/30 text-neutral-700 hover:text-[#9a7210] hover:border-[#c59b27] hover:shadow-sm flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (Dropdown Accordion on Mobile & Tablet) */}
          <div className="sm:col-span-1 lg:col-span-2 border-b border-[#c59b27]/20 lg:border-none pb-3 lg:pb-0">
            <button
              type="button"
              onClick={() => toggleSection('navigation')}
              aria-expanded={openSections.navigation}
              className="w-full flex items-center justify-between text-left py-2.5 lg:py-0 cursor-pointer lg:cursor-default select-none group"
            >
              <h4 className="text-sm font-bold font-serif text-neutral-900 uppercase tracking-wider group-hover:text-[#9a7210] lg:group-hover:text-neutral-900 transition-colors">
                Navigation
              </h4>
              <div className="w-7 h-7 rounded-lg bg-white border border-[#c59b27]/30 flex items-center justify-center lg:hidden">
                <ChevronDown
                  className={`w-4 h-4 text-[#c59b27] transition-transform duration-300 ${
                    openSections.navigation ? 'rotate-180 text-[#9a7210]' : ''
                  }`}
                />
              </div>
            </button>

            <div
              className={`transition-all duration-300 ${
                openSections.navigation ? 'block pt-2 pb-2' : 'hidden lg:block lg:pt-4'
              }`}
            >
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 text-xs font-medium">
                <li>
                  <a href="#hero" className="hover:text-[#9a7210] transition-colors block py-0.5">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#9a7210] transition-colors block py-0.5">About Company</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#9a7210] transition-colors block py-0.5">Business Segments</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#9a7210] transition-colors block py-0.5">Projects</a>
                </li>
                <li>
                  <a href="#features" className="hover:text-[#9a7210] transition-colors block py-0.5">Our Story & Capabilities</a>
                </li>
                <li>
                  <a href="#clients" className="hover:text-[#9a7210] transition-colors block py-0.5">Partners & Alliances</a>
                </li>
                <li className="col-span-2 lg:col-span-1">
                  <a href="#contact" className="hover:text-[#9a7210] transition-colors block py-0.5">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Business Segments (Dropdown Accordion on Mobile & Tablet) */}
          <div className="sm:col-span-1 lg:col-span-3 border-b border-[#c59b27]/20 lg:border-none pb-3 lg:pb-0">
            <button
              type="button"
              onClick={() => toggleSection('segments')}
              aria-expanded={openSections.segments}
              className="w-full flex items-center justify-between text-left py-2.5 lg:py-0 cursor-pointer lg:cursor-default select-none group"
            >
              <h4 className="text-sm font-bold font-serif text-neutral-900 uppercase tracking-wider group-hover:text-[#9a7210] lg:group-hover:text-neutral-900 transition-colors">
                Business Segments
              </h4>
              <div className="w-7 h-7 rounded-lg bg-white border border-[#c59b27]/30 flex items-center justify-center lg:hidden">
                <ChevronDown
                  className={`w-4 h-4 text-[#c59b27] transition-transform duration-300 ${
                    openSections.segments ? 'rotate-180 text-[#9a7210]' : ''
                  }`}
                />
              </div>
            </button>

            <div
              className={`transition-all duration-300 ${
                openSections.segments ? 'block pt-2 pb-2' : 'hidden lg:block lg:pt-4'
              }`}
            >
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 text-xs font-medium">
                <li>
                  <a href="#projects" className="hover:text-[#9a7210] transition-colors block py-0.5">Real Estate (Mahek Realty)</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#9a7210] transition-colors block py-0.5">Hospitality (Hilton Garden Inn)</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#9a7210] transition-colors block py-0.5">Technical Textiles (Scap Group)</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#9a7210] transition-colors block py-0.5">Pharmaceuticals (Mahek Life Science)</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#9a7210] transition-colors block py-0.5">Lab-Grown Diamonds (Omit Diamond)</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#9a7210] transition-colors block py-0.5">Mahek IT Park & Icon</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Corporate Contact (Dropdown Accordion on Mobile & Tablet) */}
          <div className="sm:col-span-2 lg:col-span-3 border-b border-[#c59b27]/20 lg:border-none pb-3 lg:pb-0">
            <button
              type="button"
              onClick={() => toggleSection('headquarters')}
              aria-expanded={openSections.headquarters}
              className="w-full flex items-center justify-between text-left py-2.5 lg:py-0 cursor-pointer lg:cursor-default select-none group"
            >
              <h4 className="text-sm font-bold font-serif text-neutral-900 uppercase tracking-wider group-hover:text-[#9a7210] lg:group-hover:text-neutral-900 transition-colors">
                Headquarters
              </h4>
              <div className="w-7 h-7 rounded-lg bg-white border border-[#c59b27]/30 flex items-center justify-center lg:hidden">
                <ChevronDown
                  className={`w-4 h-4 text-[#c59b27] transition-transform duration-300 ${
                    openSections.headquarters ? 'rotate-180 text-[#9a7210]' : ''
                  }`}
                />
              </div>
            </button>

            <div
              className={`transition-all duration-300 ${
                openSections.headquarters ? 'block pt-3 pb-3' : 'hidden lg:block lg:pt-4'
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 text-xs font-medium">
                <div className="sm:col-span-2 lg:col-span-1 flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#c59b27] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Mahek IT Park, OPP. R.J.D BUSINESS HUB, F.P. NO.11, T.P.S NO.03 KATARGAM, Near Kiran Hospital, Surat, Gujarat - 395004
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                  <a href="tel:+919377744633" className="hover:text-[#9a7210] transition-colors">+91 93777 44633 / +91 75674 41177</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                  <a href="mailto:infomahek2@gmail.com" className="hover:text-[#9a7210] transition-colors">infomahek2@gmail.com</a>
                </div>

                <div className="sm:col-span-2 lg:col-span-1 pt-2">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-2.5 rounded-xl border-2 border-[#c59b27] text-[#9a7210] hover:bg-[#c59b27] hover:text-white hover:shadow-md font-bold text-xs uppercase tracking-wider transition-all bg-white cursor-pointer"
                  >
                    Inquire With Mahek Group
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600 font-medium">
          <p>
            © {new Date().getFullYear()} MAHEK REAL ESTATE. All rights reserved. Powerd by <a href="https://www.megascale.in/" >Megascale</a>
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-900 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-900 transition-colors">Statutory Disclosures</a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full bg-white border border-[#c59b27]/40 text-neutral-700 hover:text-[#9a7210] hover:border-[#c59b27] hover:shadow-md flex items-center justify-center transition-all ml-2 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
