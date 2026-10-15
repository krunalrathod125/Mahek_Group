import { useState } from 'react';
import { 
  MapPin, BedDouble, Bath, Maximize2, 
  ArrowRight, Sparkles, Check, Eye 
} from 'lucide-react';
import { allProjectsData } from '../data/projectsData';

export default function SignatureProjects({ onSelectProject, activeFilters }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects (18+)' },
    { id: 'commercial', label: 'Commercial & IT' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'industrial', label: 'Industrial & Parks' },
    { id: 'residential', label: 'Residential & Villas' }
  ];

  const filteredProjects = allProjectsData.filter((p) => {
    // Tab filter
    if (selectedCategory !== 'all' && p.type !== selectedCategory) {
      return false;
    }
    // Search filter if passed
    if (activeFilters) {
      if (activeFilters.propertyType && activeFilters.propertyType !== 'all') {
        if (activeFilters.propertyType !== p.type) return false;
      }
      if (activeFilters.location && activeFilters.location !== 'all') {
        if (!p.location.toLowerCase().includes(activeFilters.location.replace('-', ' '))) return false;
      }
    }
    return true;
  });

  return (
    <section id="projects" className="py-6 md:py-8 bg-white relative overflow-hidden">
      {/* Decorative Golden Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c59b27]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 md:mb-7 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#c59b27]/30 text-xs font-bold uppercase tracking-widest text-[#9a7210] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>18+ Landmark Developments</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-neutral-900 tracking-tight">
              Iconic Projects of — <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Mahek Realty & Group</span>
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base max-w-xl font-normal">
              From landmark commercial hubs like Mahek IT Park and Gujarat&apos;s first Hilton Garden Inn to specialized diamond and textile corridors, discover developments engineered for generational growth.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white border border-neutral-300 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#c59b27] text-white hover:shadow-md'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden border border-[#c59b27]/25 bg-white hover:border-[#c59b27] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(197,155,39,0.22)] flex flex-col justify-between"
            >
              {/* Image Container with Badges */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                {/* Price / Category Tag */}
                <div className="absolute top-4 right-4 bg-white/95 border border-[#c59b27]/60 rounded-xl px-3 py-1 backdrop-blur-md">
                  <span className="text-[10px] text-neutral-500 font-bold block -mb-0.5">Classification</span>
                  <span className="text-xs font-bold font-serif text-[#9a7210]">{project.category}</span>
                </div>

                {/* Location Pill */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#e5c365]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-serif text-neutral-900 group-hover:text-[#9a7210] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4 font-normal">
                    {project.description}
                  </p>

                  {/* Property Specs Pill Grid */}
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-neutral-200 mb-5 text-center bg-white rounded-xl px-2">
                    <div className="flex flex-col items-center">
                      <span className="text-[11px] font-bold text-neutral-900 line-clamp-1">{project.units}</span>
                      <span className="text-[10px] text-neutral-500 font-medium">Scope</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[11px] font-bold text-neutral-900 line-clamp-1">{project.sqft}</span>
                      <span className="text-[10px] text-neutral-500 font-medium">Dimensions</span>
                    </div>
                  </div>

                  {/* Highlights Bullet */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#c59b27] flex-shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className="w-full py-3 rounded-xl bg-white border border-[#c59b27]/40 hover:border-[#c59b27] text-[#9a7210] hover:text-white hover:bg-[#c59b27] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer hover:shadow-md"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-neutral-300">
            <h4 className="text-lg font-bold text-neutral-900 mb-1">No developments match your current filters</h4>
            <p className="text-sm text-neutral-500">Try adjusting your search criteria or resetting filters.</p>
          </div>
        )}

      </div>
    </section>
  );
}
