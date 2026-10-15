import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import bgHousePlanning from '../assets/images/e1.jpg';
import bgConstruction from '../assets/images/111.webp';
import bgInterior from '../assets/images/e2.jpg';
import iconHousePlanning from '../assets/images/blueprint.png';
import iconConstruction from '../assets/images/construction.png';
import iconInterior from '../assets/images/interior-design_1.png';

export default function BestFeatures({ onSelectFeature }) {
  const features = [
    {
      id: 'diversified',
      title: 'Diversified Conglomerate Leadership',
      titleLine1: 'Diversified Conglomerate',
      titleLine2: 'Leadership',
      category: 'PEOPLE. PASSION. PROGRESS.',
      description: 'Synergistic investments across technical textiles, pharmaceuticals, real estate, lab-grown diamonds, and global hospitality, driving sustained value across Surat and international markets.',
      bg: bgHousePlanning,
      icon: iconHousePlanning,
      highlights: ['Technical Textiles (Scap Group)', 'Pharmaceuticals (Mahek Life Science)', '18+ Real Estate Landmarks', 'Hilton Hospitality Partnership']
    },
    {
      id: 'global-standards',
      title: 'Global Alliances & Quality Standards',
      titleLine1: 'Global Alliances',
      titleLine2: '& Quality Standards',
      category: 'COLLABORATION & TRUST',
      description: "Partnering with Hilton Worldwide to introduce Gujarat's 1st Hilton Garden Inn, paired with ISO 9001:2015 certified technical textile manufacturing serving Fortune 500 corporations.",
      bg: bgConstruction,
      icon: iconConstruction,
      highlights: ['Hilton Worldwide Collaboration', 'ISO 9001:2015 Certified Operations', 'Fortune 500 Trusted Supplier', 'GMP Pharmaceutical Compliance']
    },
    {
      id: 'sustainable-growth',
      title: 'Sustainable Infrastructure & Future Growth',
      titleLine1: 'Sustainable Infrastructure',
      titleLine2: '& Future Growth',
      category: 'CREATING SUSTAINABLE FUTURES',
      description: 'Pioneering future-ready industrial and commercial environments from Mahek IT Park and Diamond Park to eco-conscious technical textile manufacturing of 25M+ meters per annum.',
      bg: bgInterior,
      icon: iconInterior,
      highlights: ['25M+ Meters/Yr Textile Output', 'Mahek IT Park & Diamond Park', 'Industrial Master-Planned Parks', 'Vital API Intermediates Supply']
    }
  ];

  return (
    <section id="features" className="py-6 md:py-8 bg-white relative overflow-hidden">
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c59b27]/8 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#c59b27]/8 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#c59b27]/30 text-xs font-bold uppercase tracking-widest text-[#9a7210] mb-3">
            Group Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-neutral-900 tracking-tight">
            The Mahek Group <span className="gold-gradient-text">Difference</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Over 40 years of entrepreneurial excellence, continuous innovation, and sustainable value creation across powerhouse industries.
          </p>
        </div>

        {/* 3 Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div 
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-[#c59b27]/25 bg-white hover:border-[#c59b27] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(197,155,39,0.25)] flex flex-col justify-between"
            >
              {/* Background Image Container with Zoom Effect */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.bg} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Icon Emblem */}
                <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 border border-[#c59b27]/40 group-hover:border-[#c59b27] group-hover:shadow-md transition-all">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-2xl font-serif font-black text-neutral-800/40 group-hover:text-[#c59b27] transition-colors">
                  0{idx + 1}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#9a7210] block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold font-serif text-neutral-900 group-hover:text-[#c59b27] transition-colors mb-3 leading-snug">
                    <span className="block">{item.titleLine1}</span>
                    <span className="block">{item.titleLine2}</span>
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-neutral-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b27] flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
