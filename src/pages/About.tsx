
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Eye, Heart, Shield, Lightbulb, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We do what's right, not what's easy. Our commitment to ethical practices guides every decision."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We aim for superior quality and performance in every project, setting new industry standards."
    },
    {
      icon: Shield,
      title: "Safety",
      description: "We prioritize the well-being of our people and partners above all else."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace modern tools and smarter ways of working to deliver cutting-edge solutions."
    },
    {
      icon: Eye,
      title: "Sustainability",
      description: "We build with long-term impact and environmental responsibility in mind."
    },
    {
      icon: Handshake,
      title: "Commitment",
      description: "We honor our promises and take ownership of results for lasting partnerships."
    }
  ];

  useEffect(() => {
    gsap.from(heroRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out"
    });

    gsap.from(valuesRef.current?.children, {
      scrollTrigger: {
        trigger: valuesRef.current,
        start: "top 80%",
      },
      duration: 0.8,
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className="text-center">
            {/* <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              About <span className="text-gradient">OSSA</span>
            </h1> */}
            {/* <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Established in 2025, OSSA is a dynamic construction and industrial solutions company 
              redefining standards across Saudi Arabia and the GCC region.
            </p> */}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
               Founded in 2025, OSSA was established to address the growing demand for specialized oil and gas support services within the Kingdom. Our founders — experienced professionals in engineering, operations, and industrial logistics — envisioned a company that could combine technical strength with responsiveness and safety-first thinking.
                </p>
                <p>
                We began by serving critical maintenance and turnaround needs for petrochemical and energy plants. 
                As the sector evolved, so did we — expanding our capabilities to include equipment rental, skilled manpower supply, fabrication, 
                and project support for some of the region’s most challenging environments.
                </p>
                <p>
                Today, OSSA stands as a trusted partner in Saudi Arabia’s energy ecosystem, contributing to the success of major oil and gas operations through dependable service, 
                deep sector knowledge, and a relentless focus on quality.
                </p>
                <p>
                Our journey is fueled by purpose — and we’re just getting started.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ossa-shadow">
              <img
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80"
                alt="OSSA company building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-0 ossa-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a leading force in Saudi Arabia's construction and industrial sectors by 
                  delivering innovative, sustainable, and high-quality solutions that support the nation's 
                  growth and infrastructure development. OSSA aims to set new benchmarks in excellence, 
                  safety, and client satisfaction—building not just structures, but long-term value for 
                  communities and industries.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 ossa-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to provide comprehensive and reliable construction and industrial 
                  services that meet the highest standards of quality, safety, and efficiency. We are 
                  committed to using modern technologies, empowering skilled talent, and maintaining 
                  transparent client relationships to deliver projects that are on time, on budget, and 
                  built to last.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values guide every decision we make and every project we undertake, 
              ensuring excellence in all our endeavors.
            </p>
          </div>

          <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 ossa-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
