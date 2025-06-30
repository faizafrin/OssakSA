
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out"
    })
    .from(subtitleRef.current, {
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.5")
    .from(buttonsRef.current, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.3")
    .from(imageRef.current, {
      duration: 1.2,
      scale: 0.8,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.8");
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003366' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1 
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-3xl xl:text-7xl font-bold leading-tight"
            >
              "Where Precision Meets Performance In Construction & Industry."
              <span className="block text-gradient"></span>
              <span className="block"></span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-lg sm:text-xl lg:text-1xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              OSSA delivers world-class construction and industrial solutions across the Kingdom, 
              supporting Vision 2030 with innovation, quality, and excellence.
            </p>

            {/* <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg">
                <Link to="/services">
                  Our Services
                  <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <Play className="mr-2 w-4 h-4 lg:w-5 lg:h-5" />
                Watch Video
              </Button>
            </div> */}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8 border-t border-primary/20 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">2025</div>
                <div className="text-xs lg:text-sm text-slate-600">Founded</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">50+</div>
                <div className="text-xs lg:text-sm text-slate-600">Expert Team</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs lg:text-sm text-slate-600">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div ref={imageRef} className="relative order-first lg:order-last">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden ossa-shadow max-w-md mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                alt="Modern construction site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-xl p-4 lg:p-6 shadow-xl max-w-[200px] lg:max-w-none border border-primary/10">
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm lg:text-base">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-sm lg:text-base text-primary">Quality Guaranteed</div>
                  <div className="text-xs lg:text-sm text-slate-600">ISO Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
