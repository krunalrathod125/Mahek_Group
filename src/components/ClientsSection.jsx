import logo1 from '../assets/images/real-estate-logo_-construction-logo-design-template-b310fe1b6a68e267cdf318e8a9b2a0ad_screen.jpg';
import logo2 from '../assets/images/excavator-working-on-sand-in-gear-design-9264ld.png';
import logo3 from '../assets/images/images_2.png';
import logo4 from '../assets/images/pngtree-construction-logo-png-image_6066962.png';
import logo5 from '../assets/images/d017c361c04cbaf0032b3fcf6575952d.jpg';
import logo6 from '../assets/images/17.jpg';

export default function ClientsSection() {
  const logos = [
    { id: 1, img: logo1, name: 'Hilton Worldwide (Hospitality Partner)' },
    { id: 2, img: logo2, name: 'ISO 9001:2015 Certified Standards' },
    { id: 3, img: logo3, name: 'Global Technical Textile Buyers (Scap Group)' },
    { id: 4, img: logo4, name: 'API & Bulk Drug Formulators (Mahek Life Science)' },
    { id: 5, img: logo5, name: 'Surat Diamond Bourse Alliances (Omit Diamond)' },
    { id: 6, img: logo6, name: 'Gujarat Commercial & Industrial Partners' }
  ];

  return (
    <section id="clients" className="py-5 md:py-7 bg-white border-y border-[#c59b27]/20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-5">
          <span className="text-xs uppercase tracking-widest text-[#9a7210] font-bold block mb-2">
            Global Partnerships & Institutional Alliances
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-neutral-900">
            Our <span className="gold-gradient-text">Clients & Global Alliances</span>
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 items-center">
          {logos.map((c) => (
            <div
              key={c.id}
              className="group p-3 sm:p-4 rounded-2xl bg-white border border-neutral-200/90 hover:border-[#c59b27] transition-all duration-300 flex items-center justify-center h-20 sm:h-30  hover:shadow-md"
            >
              <img
                src={c.img}
                alt={c.name}
                className="max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 opacity-80 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
