import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, MapPin, ArrowRight, Filter, Search,
  Compass, Eye, CheckCircle2, ChevronRight, ChevronDown, Layers, Home, Factory, Download, Send, Share2, Sparkles
} from 'lucide-react';
import { projects } from '../data/projects';
import LandmarkProjectCard from '../components/LandmarkProjectCard';
import ProjectEnquiryModal from '../components/ProjectEnquiryModal';
import ShareModal from '../components/ShareModal';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [enquiryProject, setEnquiryProject] = useState(null);
  const [copiedProjectSlug, setCopiedProjectSlug] = useState(null);
  const [shareProject, setShareProject] = useState(null);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  // Filter projects by category and search keyword
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        project.name.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleShareProject = (proj, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShareProject(proj);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f5] pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 selection:bg-[#c59b27] selection:text-white">
      {/* Toast Notification */}
      {copiedProjectSlug && (
        <div className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-50 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-neutral-900 text-white text-xs sm:text-sm font-bold shadow-2xl flex items-center gap-2.5 border border-[#c59b27] animate-in fade-in slide-in-from-top duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Project link copied to clipboard!</span>
        </div>
      )}
      {/* Top Breadcrumb & Header Banner (Aligned with Home Page Theme) */}
      <section className="relative overflow-hidden bg-white text-neutral-900 py-6 sm:py-8 md:py-9 border-b border-neutral-200/80">
        {/* Subtle Ambient Gold Glow matching Home Page */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c59b27]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#c59b27]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-neutral-500 mb-2 sm:mb-3">
            <Link to="/" className="hover:text-[#9a7210] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-[#9a7210] font-semibold">Projects</span>
          </nav>

          {/* Heading & Subtitle */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#c59b27]/30 text-xs font-bold uppercase tracking-widest text-[#9a7210] mb-3 sm:mb-3.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Official Landmark Portfolio</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-serif text-neutral-900 tracking-tight leading-tight mb-3">
              Landmark <span className="gold-gradient-text">Projects</span>
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Discover spaces for living, business, and industrial growth. Derived from the official Mahek Real Estate portfolio, featuring verified layouts, prime highway corridors, and master-planned infrastructure.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-5 pt-4 border-t border-[#c59b27]/20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs text-center">
            <div className="p-2 rounded-xl bg-[#faf8f2] border border-[#c59b27]/20">
              <span className="text-neutral-500 block text-[11px] sm:text-xs">Total Portfolio</span>
              <span className="text-sm sm:text-lg font-bold text-[#9a7210] font-serif">6 Flagships</span>
            </div>
            <div className="p-2 rounded-xl bg-[#faf8f2] border border-[#c59b27]/20">
              <span className="text-neutral-500 block text-[11px] sm:text-xs">Industrial Estates</span>
              <span className="text-sm sm:text-lg font-bold text-neutral-900 font-serif">3 Projects</span>
            </div>
            <div className="p-2 rounded-xl bg-[#faf8f2] border border-[#c59b27]/20">
              <span className="text-neutral-500 block text-[11px] sm:text-xs">Commercial Landmarks</span>
              <span className="text-sm sm:text-lg font-bold text-neutral-900 font-serif">2 Complexes</span>
            </div>
            <div className="p-2 rounded-xl bg-[#faf8f2] border border-[#c59b27]/20">
              <span className="text-neutral-500 block text-[11px] sm:text-xs">Residential Living</span>
              <span className="text-sm sm:text-lg font-bold text-neutral-900 font-serif">1 Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Projects Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        {/* Filters and Search Bar */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-5 border border-[#c59b27]/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-4 sm:mb-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">

          {/* Mobile & Tablet: Category Dropdown (Zero Horizontal Scrolling) */}
          <div className="lg:hidden relative w-full">
            <div className="relative flex items-center">
              <div className="absolute left-3.5 pointer-events-none text-[#c59b27]">
                {selectedCategory === 'Industrial' && <Factory className="w-4 h-4" />}
                {selectedCategory === 'Commercial' && <Building2 className="w-4 h-4" />}
                {selectedCategory === 'Residential' && <Home className="w-4 h-4" />}
                {selectedCategory === 'All' && <Layers className="w-4 h-4" />}
              </div>

              <select
                id="category-select"
                aria-label="Filter projects by category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none pl-10 pr-10 py-2.5 bg-[#faf8f2] border border-[#c59b27]/30 rounded-xl text-xs sm:text-sm font-semibold text-neutral-800 focus:outline-none focus:border-[#c59b27] focus:ring-2 focus:ring-[#c59b27]/20 transition-all cursor-pointer shadow-xs"
              >
                {categories.map((cat) => {
                  const count =
                    cat === 'All'
                      ? projects.length
                      : projects.filter((p) => p.category === cat).length;
                  return (
                    <option key={cat} value={cat}>
                      {cat === 'All' ? 'All Projects' : `${cat} Developments`} ({count})
                    </option>
                  );
                })}
              </select>

              <div className="absolute right-3.5 pointer-events-none text-neutral-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Desktop: Horizontal Pill Tabs */}
          <div className="hidden lg:flex items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${isActive
                      ? 'bg-[#c59b27] text-white shadow-md shadow-[#c59b27]/25'
                      : 'bg-neutral-100/80 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/70'
                    }`}
                >
                  {cat === 'Industrial' && <Factory className="w-3.5 h-3.5" />}
                  {cat === 'Commercial' && <Building2 className="w-3.5 h-3.5" />}
                  {cat === 'Residential' && <Home className="w-3.5 h-3.5" />}
                  {cat === 'All' && <Layers className="w-3.5 h-3.5" />}
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-600'
                      }`}
                  >
                    {cat === 'All'
                      ? projects.length
                      : projects.filter((p) => p.category === cat).length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-auto lg:min-w-[320px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by name, location, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#faf8f2] border border-[#c59b27]/30 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#c59b27] focus:ring-2 focus:ring-[#c59b27]/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-neutral-400 hover:text-neutral-700 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter & Active Filter Badge */}
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-6 px-1">
          <div>
            Showing <strong className="text-neutral-900 font-semibold">{filteredProjects.length}</strong> of{' '}
            <strong className="text-neutral-900 font-semibold">{projects.length}</strong> projects
            {selectedCategory !== 'All' && (
              <span>
                {' '}
                in <span className="text-[#9a7210] font-semibold">{selectedCategory}</span>
              </span>
            )}
          </div>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-[#c59b27] hover:underline font-medium cursor-pointer"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Project Card Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400 mb-4">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-luxury mb-2">No Projects Found</h3>
              <p className="text-sm text-neutral-500 max-w-md mx-auto mb-6">
                We couldn't find any projects matching your current search criteria. Try selecting "All" categories or clearing your search query.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 bg-[#c59b27] hover:bg-[#aa7f17] text-white text-xs font-semibold rounded-xl transition-colors shadow-md"
              >
                Show All Projects
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto justify-items-center">
              {filteredProjects.map((project, index) => {
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="w-full flex justify-center"
                  >
                    <LandmarkProjectCard
                      project={project}
                      onEnquire={(p) => setEnquiryProject(p)}
                      onShare={(p) => handleShareProject(p)}
                    />
                  </motion.div>
                );
              })}
            </div>

          )}
        </AnimatePresence>

        {/* Bottom Trust & Brochure Banner (Aligned with Home Page Theme) */}
        <div className="mt-8 sm:mt-10 bg-[#faf8f2] rounded-2xl p-5 sm:p-7 border border-[#c59b27]/30 shadow-sm text-neutral-900 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#c59b27]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="space-y-2 text-center md:text-left max-w-xl relative z-10">
            <span className="text-xs font-bold text-[#9a7210] uppercase tracking-widest">
              Verified Project Documentation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-neutral-900">
              Need Comprehensive Layout Plans or Verified Survey Numbers?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              Our engineering & sales team can walk you through the full 12-page profile brochure, coordinate an on-site visit, or prepare bespoke plot demarcations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto relative z-10">
            <a
              href="/Mahek-Group-Profile.pdf"
              download="Mahek_Real_Estate_Official_Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white hover:bg-[#faf8f2] border border-[#c59b27]/40 hover:border-[#c59b27] text-[#9a7210] text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#c59b27]" />
              <span>Download Profile PDF</span>
            </a>

            <Link
              to="/#contact"
              className="px-6 py-3 bg-[#c59b27] hover:bg-[#aa7f17] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-[0_4px_15px_rgba(197,155,39,0.3)] text-center cursor-pointer"
            >
              Contact Sales Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <ProjectEnquiryModal
        isOpen={!!enquiryProject}
        onClose={() => setEnquiryProject(null)}
        project={enquiryProject}
      />

      {/* Share Project Modal */}
      <ShareModal
        isOpen={!!shareProject}
        onClose={() => setShareProject(null)}
        shareData={shareProject ? {
          title: `${shareProject.name} | Mahek Real Estate`,
          text: `${shareProject.name} (${shareProject.location}) — ${shareProject.shortDescription}`,
          url: `${typeof window !== 'undefined' ? window.location.origin : ''}/project/${shareProject.slug}`,
          image: shareProject.heroImage,
          type: 'project',
          category: shareProject.category
        } : null}
      />
    </div>
  );
}
