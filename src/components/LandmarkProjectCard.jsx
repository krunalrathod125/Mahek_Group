import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function LandmarkProjectCard({ project }) {
  if (!project) return null;

  const projectUrl = `/project/${project.slug || project.id}`;

  // Clean, concise location display matching the Salarpuria screenshot (e.g. "Kolkata")
  const getShortLocation = (p) => {
    if (p.shortLocation) return p.shortLocation;
    if (p.id === 'the-mahek-park-1') return 'NH 48, Surat';
    if (p.id === 'orange-mahek-park') return 'Kadodara, Surat';
    if (p.id === 'mahek-it-park') return 'Katargam, Surat';
    if (p.id === 'the-am-park') return 'Simada BRTS, Surat';
    if (p.id === 'anthems-mahek-park') return 'Umiyadham, Surat';
    if (p.id === 'mahek-residency') return 'Godadra, Surat';
    return p.city || p.location?.split(',')[0] || 'Surat';
  };

  // Status label matching the screenshot pill (e.g. "Completed" or "Ongoing")
  const getStatusLabel = (p) => {
    if (p.status) {
      if (p.status.toLowerCase().includes('ready') || p.status.toLowerCase().includes('complete')) {
        return 'Completed';
      }
      if (p.status.toLowerCase().includes('ongoing')) {
        return 'Ongoing';
      }
      return p.status;
    }
    return p.category?.toLowerCase() === 'residential' ? 'Ongoing' : 'Completed';
  };

  const status = getStatusLabel(project);
  const location = getShortLocation(project);

  return (
    <Link
      to={projectUrl}
      className="group relative bg-white border border-neutral-200/90 rounded-none sm:rounded-xs p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block w-full max-w-[320px] sm:max-w-[340px] mx-auto text-left cursor-pointer"
    >
      {/* Top Left Status Pill matching screenshot */}
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <span className="inline-block px-3 py-0.5 text-[10px] sm:text-[11px] font-semibold text-neutral-900 border border-neutral-900 rounded-full bg-white tracking-wide">
          {status}
        </span>
      </div>

      {/* Central Portrait Image with white margin on all sides */}
      <div className="flex-1 flex items-center justify-center my-2 sm:my-3 overflow-hidden">
        <div className="w-full max-w-[190px] sm:max-w-[210px] aspect-[3/4] overflow-hidden bg-neutral-100 flex items-center justify-center">
          <img
            src={project.heroImage}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* Bottom Information Row matching screenshot */}
      <div className="flex items-end justify-between gap-3 pt-3 border-t border-transparent">
        <div className="min-w-0 pr-2">
          {/* Project Title in terracotta/burgundy red matching screenshot */}
          <h3 className="font-serif font-bold text-sm sm:text-base text-[#9b3838] group-hover:text-[#c59b27] transition-colors leading-snug truncate">
            {project.name}
          </h3>

          {/* Location below title */}
          <p className="text-[11px] sm:text-xs text-neutral-800 font-normal mt-0.5 sm:mt-1 truncate">
            {location}
          </p>
        </div>

        {/* Circular Arrow Button (↗) matching screenshot */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#9b3838] text-[#9b3838] group-hover:bg-[#9b3838] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
