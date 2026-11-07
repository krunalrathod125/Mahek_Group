import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import LandmarkProjectCard from './LandmarkProjectCard';
import ShareModal from './ShareModal';

export default function SignatureProjects({ onViewDetails, onEnquire, activeFilters }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [shareProject, setShareProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: 'All', label: 'All Projects (6)' },
    { id: 'Residential', label: 'Residential' },
    { id: 'Commercial', label: 'Commercial' },
    { id: 'Industrial', label: 'Industrial' }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Category filter
      if (selectedCategory !== 'All' && p.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
      // Search / activeFilters if provided
      if (activeFilters) {
        if (activeFilters.propertyType && activeFilters.propertyType !== 'all') {
          if (activeFilters.propertyType.toLowerCase() !== p.category.toLowerCase()) return false;
        }
        if (activeFilters.location && activeFilters.location !== 'all') {
          const locQuery = activeFilters.location.toLowerCase().replace('-', ' ');
          if (!p.location.toLowerCase().includes(locQuery)) return false;
        }
      }
      return true;
    });
  }, [selectedCategory, activeFilters]);

  // Reset index when category or filtered list changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, filteredProjects.length]);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = filteredProjects[currentIndex];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-[#f8f7f5] relative overflow-hidden">
      {/* Decorative Subtle Gold Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#c59b27]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#c59b27]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Salarpuria Group Landmark Projects Style */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#c59b27]/30 text-xs font-bold uppercase tracking-widest text-[#9a7210] mb-3 sm:mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Iconic Real Estate Portfolio</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-neutral-900 tracking-tight">
            Landmark <span className="gold-gradient-text">Projects</span>
          </h2>
          
          <p className="mt-2.5 sm:mt-3 text-neutral-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Discover premier living spaces, commercial hubs, and industrial logistics parks. Master-planned developments featuring verified highway frontages, architectural blueprints, and world-class infrastructure.
          </p>

          {/* Category Filter Tabs Centered */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-2xl bg-white border border-neutral-300 mt-4 sm:mt-5 max-w-fit mx-auto shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#c59b27] text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Desktop Layout: Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto justify-items-center">
          {filteredProjects.map((project) => (
            <LandmarkProjectCard
              key={project.id}
              project={project}
              onEnquire={onEnquire}
              onShare={(p) => setShareProject(p)}
            />
          ))}
        </div>

        {/* 2. Mobile & Tablet Layout: Single Card Showcase */}
        {filteredProjects.length > 0 && currentProject && (
          <div className="lg:hidden relative max-w-md mx-auto flex flex-col items-center">
            {/* Card with Left & Right Navigation Buttons */}
            <div className="relative w-full flex items-center justify-center">
              {/* Prev Button */}
              {filteredProjects.length > 1 && (
                <button
                  type="button"
                  onClick={prevProject}
                  aria-label="Previous Project"
                  className="absolute -left-3 sm:-left-6 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-neutral-300 text-neutral-800 hover:border-[#9b3838] hover:text-[#9b3838] hover:bg-neutral-50 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* The Single Animated Card */}
              <div className="w-full flex justify-center px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="w-full flex justify-center"
                  >
                    <LandmarkProjectCard
                      project={currentProject}
                      onEnquire={onEnquire}
                      onShare={(p) => setShareProject(p)}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              {filteredProjects.length > 1 && (
                <button
                  type="button"
                  onClick={nextProject}
                  aria-label="Next Project"
                  className="absolute -right-3 sm:-right-6 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-neutral-300 text-neutral-800 hover:border-[#9b3838] hover:text-[#9b3838] hover:bg-neutral-50 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Pagination Dots & Numeric Counter */}
            {filteredProjects.length > 1 && (
              <div className="mt-5 flex flex-col items-center gap-2">
                {/* Dots */}
                <div className="flex items-center gap-1.5">
                  {filteredProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to project ${idx + 1}`}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        currentIndex === idx
                          ? 'w-6 h-2 bg-[#9b3838]'
                          : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Counter */}
                <div className="text-xs font-semibold text-neutral-600 tracking-wider">
                  <span>{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="text-neutral-400 mx-1.5">/</span>
                  <span>{String(filteredProjects.length).padStart(2, '0')}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Empty filter message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-neutral-300 mt-6 max-w-md mx-auto">
            <h4 className="text-lg font-bold text-neutral-900 mb-1">No developments match your current filter</h4>
            <p className="text-sm text-neutral-500">Select "All Projects" to view all 6 flagship developments.</p>
          </div>
        )}

      </div>

      {/* Share Project Modal */}
      <ShareModal
        isOpen={!!shareProject}
        onClose={() => setShareProject(null)}
        shareData={shareProject ? {
          title: `${shareProject.name} | Mahek Real Estate`,
          text: `${shareProject.name} (${shareProject.location}) — ${shareProject.shortDescription}`,
          url: `${typeof window !== 'undefined' ? window.location.origin : ''}/project/${shareProject.slug || shareProject.id}`,
          image: shareProject.heroImage,
          type: 'project',
          category: shareProject.category
        } : null}
      />
    </section>
  );
}
