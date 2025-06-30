
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const values = [
    { icon: Target, title: "Mission", description: "Deliver comprehensive construction solutions that meet the highest standards of quality, safety, and efficiency." },
    { icon: Eye, title: "Vision", description: "To become a leading force in Saudi Arabia's construction and industrial sectors." },
    { icon: Award, title: "Excellence", description: "We aim for superior quality and performance in every project we undertake." },
    { icon: Users, title: "Commitment", description: "We honor our promises and take ownership of results for long-term partnerships." }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    tl.from(imageRef.current, {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power3.out"
    })
    .from(contentRef.current, {
      duration: 1,
      x: 100,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.5")
    .from(statsRef.current?.children, {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.3");
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Image */}
          <div ref={imageRef} className="relative order-last lg:order-first">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ossa-shadow">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
                alt="OSSA construction site"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-primary text-white rounded-xl p-4 lg:p-6 shadow-xl">
              <div className="text-2xl lg:text-3xl font-bold">Since 2025</div>
              <div className="text-primary-foreground/80 text-sm lg:text-base">Building Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6 lg:space-y-8 order-first lg:order-last">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-center lg:text-left">
                About <span className="text-gradient">OSSA</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4 lg:mb-6">
              We’re committed to quality, safety, and innovation in every step — building projects that last and partnerships that grow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="text-center p-4 lg:p-6 bg-slate-50 rounded-xl">
                <div className="text-2xl lg:text-2xl font-bold text-primary mb-2">Trusted Expertise</div>
                <div className="text-xs lg:text-sm text-muted-foreground"></div>
              </div>
              <div className="text-center p-4 lg:p-6 bg-slate-50 rounded-xl">
                <div className="text-2xl lg:text-2xl font-bold text-primary mb-2">Timely Delivery</div>
                <div className="text-xs lg:text-sm text-muted-foreground"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div ref={statsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
