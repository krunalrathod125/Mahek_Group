import { Calendar, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import blogImg1 from '../assets/images/ndimg-parallax-04-1024x683_720x.jpg';
import blogImg2 from '../assets/images/Screenshot_2025-09-12_134856_170b8efc-fcd0-41e0-8231-7eead09ac193_720x.png';
import blogImg3 from '../assets/images/3_720x.jpg';
import blogImg4 from '../assets/images/2_720x.jpg';

export default function BlogSection({ onSelectPost }) {
  const posts = [
    {
      id: 1,
      title: 'Gujarat’s 1st Hilton Garden Inn: Surat City Centre Hospitality Landmark',
      date: 'Diwali 2024 / 2025',
      author: 'Mahek Hospitality',
      comments: '12 Comments',
      image: blogImg1,
      excerpt: 'Mahek Group partners with Hilton Worldwide to bring Gujarat’s first Hilton Garden Inn to Surat, delivering 104 guest rooms, two upscale restaurants, and grand banquet halls.',
      category: 'HOSPITALITY VENTURE'
    },
    {
      id: 2,
      title: 'Scap Group Surpasses 25M+ Meters/Annum in Non-Woven Technical Textiles',
      date: '2024 - 2025',
      author: 'SCAP Techno Fab',
      comments: '8 Comments',
      image: blogImg2,
      excerpt: 'Our advanced polypropylene spunbond plant sets new benchmarks in high-tensile technical fabrics, serving global leaders across medical, agriculture, and eco-packaging sectors.',
      category: 'MANUFACTURING'
    },
    {
      id: 3,
      title: 'Mahek IT Park: Powering Surat’s Commercial & Technology Landscape',
      date: 'Katargam, Surat',
      author: 'Mahek Realty',
      comments: '6 Comments',
      image: blogImg3,
      excerpt: 'Located opposite R.J.D Business Hub near Kiran Hospital, Mahek IT Park offers multi-tier commercial suites with seismic resilience and ultra-modern corporate amenities.',
      category: 'COMMERCIAL REAL ESTATE'
    },
    {
      id: 4,
      title: 'Mahek Life Science: High-Purity CMH & R CMH for Pregabaline API Synthesis',
      date: 'Pharma Division',
      author: 'Mahek Life Science',
      comments: '5 Comments',
      image: blogImg4,
      excerpt: 'Scaling domestic production of critical bulk drug intermediates CMH and R CMH with cGMP compliance, reinforcing India’s active pharmaceutical ingredient (API) supply chain.',
      category: 'PHARMACEUTICALS'
    }
  ];

  return (
    <section id="blog" className="py-6 md:py-8 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 md:mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#c59b27]/30 text-xs font-bold uppercase tracking-widest text-[#9a7210] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Group Milestones & Industry Insights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-neutral-900 tracking-tight">
              Our Latest <span className="gold-gradient-text">News</span>
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base max-w-lg font-normal">
              Stay updated with our cross-industry innovations across hospitality, technical textiles, pharmaceuticals, and commercial infrastructure.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9a7210] hover:text-neutral-900 transition-colors"
          >
            <span>View All Press Releases</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl overflow-hidden bg-white border border-[#c59b27]/25 hover:border-[#c59b27] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(197,155,39,0.22)] flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-[#c59b27]/40 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#9a7210]">
                    {post.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-neutral-500 font-medium mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#c59b27]" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3 text-[#c59b27]" />
                      <span>{post.comments}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-serif text-neutral-900 group-hover:text-[#9a7210] transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed mb-4 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectPost && onSelectPost(post)}
                  className="w-full pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#9a7210] group-hover:text-neutral-900 transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
