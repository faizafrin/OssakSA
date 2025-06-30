
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Building, Wrench, Zap, Cog, FileText, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Building,
      title: "General Contracting",
      description: "We provide full-scope general contracting services for residential, commercial, and industrial projects.",
      features: [
        "End-to-end construction execution",
        "Turnkey project delivery",
        "Design & build solutions",
        "Cost-effective project management"
      ],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Wrench,
      title: "Civil & Structural Works",
      description: "Our civil engineering capabilities are the backbone of many successful projects.",
      features: [
        "Earthworks, excavation, and site development",
        "Concrete foundations and structural frames",
        "Infrastructure works including roads and drainage",
        "Retaining walls and industrial-grade flooring"
      ],
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Zap,
      title: "MEP Services",
      description: "We provide comprehensive MEP solutions that support efficient and sustainable building operations.",
      features: [
        "LV/MV electrical installations and lighting",
        "HVAC systems, ducting, and ventilation",
        "Plumbing, drainage, and fire safety systems",
        "Building Management System (BMS) integration"
      ],
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Cog,
      title: "Industrial Support Services",
      description: "We assist industrial clients with ongoing support services that keep operations running smoothly.",
      features: [
        "Equipment and machinery rental",
        "Shutdown and turnaround maintenance",
        "Fabrication, welding, and technical inspections",
        "Health, safety, and compliance services"
      ],
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: FileText,
      title: "Project Management & Consultancy",
      description: "We offer planning and execution support to ensure your project stays on track.",
      features: [
        "Project scheduling and resource planning",
        "Budgeting, value engineering, and cost control",
        "Quality assurance and risk management",
        "Coordination and reporting for stakeholders"
      ],
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Shield,
      title: "Safety & Quality Assurance",
      description: "OSSA is committed to maintaining the highest standards of safety and quality.",
      features: [
        "Health, Safety & Environment (HSE) policy implementation",
        "Quality assurance and international standards compliance",
        "Regular training and zero-incident culture promotion",
        "Continuous monitoring and process improvements"
      ],
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=600&q=80"
    }
  ];

  useEffect(() => {
    gsap.from(heroRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out"
    });

    gsap.from(servicesRef.current?.children, {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 80%",
      },
      duration: 0.8,
      y: 100,
      opacity: 0,
      stagger: 0.2,
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
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              OSSA's sector-focused approach means we don't just deliver services—we deliver 
              solutions tailored to the distinct environments and challenges of each industry.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={servicesRef} className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold">{service.title}</h2>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                      Learn More
                    </Button>
                  </div>
                  
                  <div className={isEven ? '' : 'lg:col-start-1'}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden ossa-shadow">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-gradient">Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's discuss how OSSA can bring your construction and industrial projects to life 
            with our comprehensive solutions and expert team.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg">
            Get Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
