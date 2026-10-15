import { Sparkles, CheckCircle2, Building2, Hotel, Layers, FlaskConical, Gem } from 'lucide-react';

export default function ServicesSection() {
  const segments = [
    {
      id: 'real-estate',
      title: 'Real Estate (Mahek Realty)',
      icon: Building2,
      category: 'PROPERTY DEVELOPMENT',
      description: 'A key division and trailblazer in Surat representing over 18 standout projects, from the elegance of Mahek IT Park to tranquil residential bungalows.',
      bullets: [
        '18+ Landmark projects commissioned',
        'Mahek IT Park, Mahek Icon & Diamond Park',
        'Master-planned industrial & commercial estates',
        'Bespoke luxury residential bungalows'
      ]
    },
    {
      id: 'hospitality',
      title: 'Hospitality (Hilton Collaboration)',
      icon: Hotel,
      category: 'REFINED HOSPITALITY',
      description: "Partnered with the prestigious Hilton Brand to introduce one of Gujarat's first Hiltons. A 9-story edifice with 104 luxury rooms, 2 restaurants, and 3 banquet halls.",
      bullets: [
        '1st Hilton Garden Inn in Gujarat',
        'Steps from Surat Railway Station',
        '104 contemporary guest rooms & suites',
        'Together & Co. & 3 banquet halls'
      ]
    },
    {
      id: 'textiles',
      title: 'Technical Textiles (Scap Group)',
      icon: Layers,
      category: 'SCAP TECHNO FAB PVT. LTD.',
      description: 'Transitioned from trading in 2008 to manufacturing PP Non-woven fabrics by 2011. ISO 9001:2015 certified, delivering 25M+ meters per annum to Fortune 500 clients.',
      bullets: [
        '25M+ meters annual production capacity',
        'ISO 9001:2015 certified operations',
        'Serving Fortune 500 corporate clients',
        'Advanced European extrusion technology'
      ]
    },
    {
      id: 'pharma',
      title: 'Pharmaceuticals (Mahek Life Science)',
      icon: FlaskConical,
      category: 'API INTERMEDIATES',
      description: 'Specializing in the chemical production of key intermediates CMH and R CMH, pivotal for the chemical synthesis of Pregabaline API therapeutic substance.',
      bullets: [
        'Specialized CMH & R CMH production',
        'Essential for Pregabaline API synthesis',
        'GMP compliant QA & analytical labs',
        'High-purity therapeutic supply chain'
      ]
    },
    {
      id: 'diamonds',
      title: 'Lab-Grown Diamonds (Omit Diamond)',
      icon: Gem,
      category: 'DIAMOND & GEMS DIVISION',
      description: "Pioneering ethical, precision lab-grown diamond manufacturing and cutting-edge diamond trade right in Surat, the world's premier diamond capital.",
      bullets: [
        'Ethical & eco-conscious diamond growth',
        'Surat diamond ecosystem integration',
        'High-clarity precision cut diamonds',
        'Global diamond market distribution'
      ]
    }
  ];

  return (
    <section id="services" className="py-6 md:py-8 bg-white relative overflow-hidden">
      {/* Golden Aura */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c59b27]/8 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#c59b27]/30 text-xs font-bold uppercase tracking-widest text-[#9a7210] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Our Business Segments</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-neutral-900 tracking-tight">
            Diversified Portfolios of <br />
            <span className="gold-gradient-text">Mahek Group</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
            Co-steering transformative growth across technical textiles, pharmaceuticals, real estate, lab-grown diamonds, and hospitality.
          </p>
        </div>

        {/* Business Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group p-8 rounded-2xl bg-white border border-[#c59b27]/25 hover:border-[#c59b27] transition-all duration-500 hover:shadow-[0_20px_35px_-10px_rgba(197,155,39,0.2)] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-white border border-[#c59b27]/30 flex items-center justify-center p-3 mb-6 group-hover:border-[#c59b27] group-hover:scale-105 transition-all">
                    <Icon className="w-7 h-7 text-[#c59b27]" />
                  </div>

                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#9a7210] block mb-2">
                    {item.category}
                  </span>

                  <h3 className="text-xl font-bold font-serif text-neutral-900 group-hover:text-[#9a7210] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 pt-4 border-t border-neutral-200">
                  {item.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b27] flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
