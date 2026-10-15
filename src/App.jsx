import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import PropertySearch from './components/PropertySearch';
import BestFeatures from './components/BestFeatures';
import SignatureProjects from './components/SignatureProjects';
import ServicesSection from './components/ServicesSection';
import AboutUs from './components/AboutUs';
import ClientsSection from './components/ClientsSection';
import CompanyDifference from './components/CompanyDifference';
import Testimonials from './components/Testimonials';
import MortgageCalculator from './components/MortgageCalculator';
import BlogSection from './components/BlogSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import SearchModal from './components/SearchModal';
import FloatingActions from './components/FloatingActions';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeFilters] = useState(null);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1f2937] relative selection:bg-[#c59b27] selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenContact={scrollToContact}
        onOpenSearch={() => setSearchModalOpen(true)}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Construction Banner */}
        <Hero
          onExploreProjects={scrollToProjects}
          onOpenContact={scrollToContact}
        />

        {/* 2. Real Estate Search & Filter */}
        {/* <PropertySearch
          onFilterChange={(filters) => setActiveFilters(filters)}
        /> */}

        {/* 3. Core Capabilities / Best Features */}
        <BestFeatures
          onSelectFeature={() => scrollToProjects()}
        />

          {/* 4. About Us: Your Vision Is Our Mission */}
        <AboutUs
          onOpenContact={scrollToContact}
        />

        {/* 5. Signature & Recent Projects */}
        <SignatureProjects
          activeFilters={activeFilters}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 6. Services Offered by Mahek Real Estate */}
        <ServicesSection />

        {/* 7. Institutional Clients & Partners */}
        <ClientsSection />

        {/* 8. The Mahek Difference: Ambition, Purpose, Values */}
        {/* <CompanyDifference /> */}

        {/* 9. Testimonials: Our Sweet Clients Say */}
        <Testimonials />

        {/* 10. Mortgage & Investment ROI Calculator */}
        {/* <MortgageCalculator
          onOpenContact={scrollToContact}
        /> */}

        {/* 11. Latest News & Groundbreaking Milestones */}
        <BlogSection
          onSelectPost={() => scrollToContact()}
        />

        {/* 12. Frequently Asked Questions */}
        <FaqSection
          onOpenContact={scrollToContact}
        />

        {/* 13. Consultation & Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={scrollToContact}
      />

      {/* Modals & Overlays */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenConsultation={() => {
            setSelectedProject(null);
            scrollToContact();
          }}
        />
      )}

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProject={(project) => {
          setSearchModalOpen(false);
          setSelectedProject(project);
        }}
      />

      {/* Floating Chat & Scroll Actions */}
      <FloatingActions
        onOpenContact={scrollToContact}
      />
    </div>
  );
}

export default App;
