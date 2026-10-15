import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import faqBg from '../assets/images/ndimg-parallax-04-1024x683.jpg';

export default function FaqSection({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'What core business sectors does Mahek Group operate in?',
      a: 'Established in 1982 in Surat, Gujarat, Mahek Group operates across five major industry verticals: Real Estate & Commercial Infrastructure (18+ landmark developments including Mahek IT Park and industrial parks), Hospitality (Gujarat’s 1st Hilton Garden Inn in Surat City Centre), Technical Textiles (Scap Group / SCAP Techno Fab producing 25M+ meters/year), Pharmaceuticals (Mahek Life Science producing Pregabaline API intermediates), and Lab-Grown Diamonds (Omit Diamond).'
    },
    {
      q: 'What are the key highlights of the Hilton Garden Inn Surat project?',
      a: 'In partnership with Hilton Worldwide, Mahek Group is bringing Gujarat’s first Hilton Garden Inn to Surat City Centre. The premier landmark features 104 guest rooms, two specialty dining restaurants, three versatile grand banquet halls, a swimming pool, a fully equipped fitness center, and state-of-the-art conference facilities.'
    },
    {
      q: 'What is the manufacturing scope and capacity of Scap Group?',
      a: 'Scap Group (SCAP Techno Fab Pvt. Ltd.) is an ISO 9001:2015 certified manufacturer of non-woven polypropylene spunbond fabrics with an annual production capacity surpassing 25 million meters. We engineer high-performance technical textiles for medical hygiene, agro-textiles, industrial protective packaging, and eco-friendly shopping bags.'
    },
    {
      q: 'What pharmaceutical chemical intermediates does Mahek Life Science manufacture?',
      a: 'Mahek Life Science specializes in high-purity chemical intermediates and bulk drug synthesis, primarily CMH and R CMH (critical intermediates used in the synthesis of Pregabaline API). All batches adhere to stringent cGMP guidelines and rigorous environmental management practices.'
    },
    {
      q: 'How can companies lease or invest in Mahek IT Park and industrial estates?',
      a: 'Commercial offices, retail spaces, and industrial plots across Mahek IT Park (Katargam), Mahek Icon, The Mahek Park, and Mahek Diamond Park are open for leasing and investment. Inquiries can be submitted via our contact form or by calling our corporate desk at +91 93777 44633 / +91 75674 41177.'
    },
    {
      q: 'Where is Mahek Group headquartered and how can we schedule a consultation?',
      a: 'Our corporate headquarters is located at Mahek IT Park, Katargam, Opp. R.J.D Business Hub, Near Kiran Hospital, Surat - 395004, Gujarat, India. You can connect with our management team by calling +91 93777 44633, emailing infomahek2@gmail.com, or booking a private consultation.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-6 md:py-8 bg-white relative overflow-hidden">
      {/* Background Graphic with Vignette */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img
          src={faqBg}
          alt="Architectural Blueprint Background"
          className="w-full h-full object-cover object-center filter grayscale"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#c59b27]/30 text-xs font-bold uppercase tracking-widest text-[#9a7210] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-neutral-900 tracking-tight">
            Find Your <span className="gold-gradient-text">Answers</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
            Everything you need to know about our business divisions, industrial operations, and partnership opportunities with Mahek Group.
          </p>
        </div>

        {/* Accordion List - 2 Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border hover:shadow-md ${
                  isOpen
                    ? 'bg-white border-[#c59b27]'
                    : 'bg-white border-neutral-200/90 hover:border-[#c59b27]/40'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold font-serif text-neutral-900 hover:text-[#9a7210] transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#c59b27] text-white rotate-180'
                        : 'bg-white border border-[#c59b27]/30 text-[#9a7210]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0 animate-in fade-in duration-300">
                    <div className="pt-4 border-t border-neutral-100 text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-white border border-[#c59b27]/30 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow duration-300">
          <div className="text-left">
            <h4 className="text-lg font-bold font-serif text-neutral-900 mb-1">Still have questions?</h4>
            <p className="text-xs sm:text-sm text-neutral-600">Our corporate advisory team is available to assist your enterprise.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-xl bg-[#c59b27] hover:bg-[#aa7f17] text-white font-bold uppercase tracking-wider text-xs hover:shadow-[0_4px_18px_rgba(197,155,39,0.3)] transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            Speak with an Advisor
          </button>
        </div>

      </div>
    </section>
  );
}
