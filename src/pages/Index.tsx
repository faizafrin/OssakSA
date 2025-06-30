
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProjectsPreviewSection from '@/components/ProjectsPreviewSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="-mt-8">
        <AboutSection />
      </div>
      <div className="-mt-6">
        <ServicesSection />
      </div>
      <div className="-mt-6">
        <WhyChooseUsSection />
      </div>
      <div className="-mt-4">
        <StatsSection />
      </div>
      <div className="-mt-6">
        <ProjectsPreviewSection />
      </div>
      <div className="-mt-6">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
