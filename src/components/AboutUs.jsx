import { useState } from 'react';
import { 
  Sparkles, ArrowRight, ShieldCheck, Award, 
  ChevronRight, CheckCircle2 
} from 'lucide-react';
import imgBuilder from '../assets/images/builder_founder.jpg';

export default function AboutUs({ onOpenContact }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const pillars = [
    {
      num: '01',
      title: 'People. Passion. Progress.',
      description: 'We are fueled by a passion for creating enduring value and stand united in our vision of fostering sustainable urban growth across Gujarat.'
    },
    {
      num: '02',
      title: 'Over 40 Years of Excellence (Est. 1982)',
      description: "Founded in Surat, India in 1982, Mahek Group has stood at the intersection of tradition and forward-thinking, delivering 18+ landmark commercial & residential developments."
    },
    {
      num: '03',
      title: 'Global Standards & Partnerships',
      description: "From our milestone collaboration with Hilton Worldwide introducing Gujarat's 1st Hilton Garden Inn to ISO 9001:2015 certified technical textiles, we redefine quality at every scale."
    }
  ];

  return (
    <section id="about" className="py-6 md:py-8 bg-white relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#c59b27]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#c59b27]/30 text-xs font-bold uppercase tracking-widest text-[#9a7210] mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Leadership & Legacy • Founded 1982</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-neutral-900 tracking-tight">
            About <span className="gold-gradient-text">Mahek Group</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-neutral-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Over four decades of transformative real estate, industrial manufacturing, and world-class hospitality shaping Surat's skyline.
          </p>
        </div>

        {/* ============================================================ */}
        {/* HORIZONTAL BUILDER INTRODUCTION WITH CLEAN GAP */}
        {/* ============================================================ */}
        <div className="relative w-full mb-8 sm:mb-10">
          {/* Side-by-side horizontal layout with generous gap between content and image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Introduction Message Card */}
            <div className="md:col-span-6 lg:col-span-6">
              <div className="bg-white p-6 sm:p-8 md:p-8 lg:p-9 rounded-2xl sm:rounded-3xl border border-[#c59b27]/30 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_45px_rgba(197,155,39,0.12)] transition-all duration-300">
                
                {/* Header Line Badge: —— PRESIDENT'S MESSAGE —— */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                  <span className="w-6 sm:w-10 h-[2px] bg-[#c59b27]"></span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9a7210] font-bold">
                    PRESIDENT'S MESSAGE
                  </span>
                  <span className="w-6 sm:w-10 h-[2px] bg-[#c59b27]"></span>
                </div>

                {/* Builder Name */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-neutral-900 tracking-tight mb-1">
                  Mr. Kamleshbhai Gajera
                </h3>

                {/* Designation / Role */}
                <p className="text-xs sm:text-sm font-semibold text-neutral-600 mb-3 sm:mb-4">
                  President & Founder, Mahek Group
                </p>

                {/* Message Body */}
                <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-2.5 sm:space-y-3 font-normal">
                  <p>
                    It gives me immense pleasure, as Chairman of Mahek Group, to welcome you to our four-decade journey of transformative development. Founded in Surat in 1982, Mahek Group embodies an unyielding commitment to architectural excellence, integrity, and sustainable innovation.
                  </p>
                  <p>
                    We take deep pride in shaping landmark residential enclaves and state-of-the-art commercial hubs like Mahek IT Park and Mahek Icon, alongside pioneering Gujarat's first Hilton Garden Inn. Our focus remains steadfast on creating environments where families flourish, enterprises prosper, and dreams translate into enduring reality.
                  </p>
                  {isExpanded && (
                    <div className="pt-2 border-t border-neutral-100 space-y-2 text-neutral-600 animate-fadeIn">
                      <p>
                        Each project we undertake is not merely a structure of steel and concrete, but a lifelong promise of safety, modern luxury, and value creation. We invite you to experience the distinct Mahek difference and grow with us into an inspired future.
                      </p>
                      <p className="text-xs text-neutral-500 italic">
                        "Redefining Surat's horizon with passion, trust, and uncompromising craftsmanship."
                      </p>
                    </div>
                  )}
                </div>

                {/* Read More Action & Established Seal */}
                <div className="pt-3.5 sm:pt-4 mt-3 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-xs sm:text-sm font-bold text-[#9a7210] hover:text-[#c59b27] transition-colors flex items-center gap-1 cursor-pointer focus:outline-none group"
                  >
                    <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${isExpanded ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
                  </button>

                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-neutral-500">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c59b27]" />
                    <span>Surat • Est. 1982</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Profile Image with Elegant Framing */}
            <div className="md:col-span-6 lg:col-span-6">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#c59b27]/30 shadow-lg relative group aspect-[4/3] md:aspect-[16/12]">
                <img
                  src={imgBuilder}
                  alt="Mr. Kamleshbhai Gajera - President & Founder, Mahek Group"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Executive Seal Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#c59b27]/30 shadow-md text-right">
                  <p className="text-[11px] sm:text-xs font-bold font-serif text-neutral-900">Leadership Vision</p>
                  <p className="text-[9px] sm:text-[10px] text-[#9a7210] font-bold uppercase tracking-wider">40+ Years of Landmark Excellence</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* 3 CORPORATE PILLARS & STORY */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
          {pillars.map((p) => (
            <div 
              key={p.num}
              className="p-6 rounded-2xl bg-white border border-[#c59b27]/25 hover:border-[#c59b27] transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#c59b27]/40 flex items-center justify-center text-lg font-bold font-serif text-[#9a7210] mb-4 group-hover:scale-105 transition-transform">
                  {p.num}
                </div>
                <h3 className="text-base sm:text-lg font-bold font-serif text-neutral-900 group-hover:text-[#9a7210] transition-colors mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs text-[#9a7210] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>Verified Benchmark</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-2xl bg-white border border-[#c59b27]/30 flex flex-col sm:flex-row items-center justify-between gap-5 hover:shadow-md transition-shadow">
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold font-serif text-neutral-900 mb-1">
              Connect Directly with Mahek Group Leadership
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              Schedule a confidential corporate consultation for commercial developments, investment partnerships, or VIP off-plan allocations.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#c59b27] hover:bg-[#aa7f17] hover:shadow-[0_8px_20px_rgba(197,155,39,0.3)] transition-all duration-300 whitespace-nowrap hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Inquire With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
