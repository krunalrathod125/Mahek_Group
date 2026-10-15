import { useState, useEffect } from 'react';
import { Search, X, MapPin, ArrowRight } from 'lucide-react';
import { allProjectsData } from '../data/projectsData';

export default function SearchModal({ isOpen, onClose, onSelectProject }) {
  const [query, setQuery] = useState('');

  // Prevent background scroll when modal is open and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = allProjectsData.filter((p) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white border border-[#c59b27]/40 rounded-2xl p-6 shadow-2xl relative overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center gap-3 pb-4 border-b border-neutral-200">
          <Search className="w-5 h-5 text-[#c59b27]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects & divisions (e.g. Mahek IT Park, Hilton, Scap Group, Katargam)..."
            className="w-full bg-transparent text-base text-neutral-900 placeholder-neutral-400 focus:outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="mt-4 max-h-96 overflow-y-auto space-y-3">
          <div className="text-xs uppercase tracking-wider text-neutral-500 font-bold px-2">
            Projects & Business Verticals ({results.length})
          </div>

          {results.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onClose();
                if (onSelectProject) onSelectProject(item);
              }}
              className="p-3.5 rounded-2xl bg-white border border-neutral-200/90 hover:border-[#c59b27] flex items-center justify-between gap-4 cursor-pointer transition-all group hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold font-serif text-neutral-900 group-hover:text-[#9a7210] transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3 h-3 text-[#c59b27]" />
                      <span>{item.location}</span>
                    </span>
                    <span>•</span>
                    <span className="text-[#9a7210] font-bold">{item.price}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-neutral-300 text-neutral-600 uppercase font-semibold bg-white">
                  {item.category}
                </span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#c59b27] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}

          {results.length === 0 && (
            <div className="text-center py-8 text-neutral-500 text-sm">
              No projects or divisions found matching "{query}".
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
