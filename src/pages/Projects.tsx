import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Building, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: "king-abdullah-financial-district",
      title: "King Abdullah Financial District Extension",
      category: "Commercial",
      location: "Riyadh, KSA",
      year: "2025",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
      description: "Large-scale commercial development featuring modern office towers and retail spaces.",
      services: ["General Contracting", "MEP Services", "Project Management"],
      stats: { area: "150,000 sqm", duration: "24 months", workers: "200+" }
    },
    {
      id: "neom-industrial-complex",
      title: "NEOM Industrial Complex",
      category: "Industrial",
      location: "NEOM, KSA",
      year: "2025",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
      description: "Cutting-edge industrial facility supporting Saudi Arabia's Vision 2030 initiatives.",
      services: ["Industrial Support", "Civil Works", "Safety Management"],
      stats: { area: "75,000 sqm", duration: "18 months", workers: "150+" }
    },
    {
      id: "riyadh-metro-station",
      title: "Riyadh Metro Station Infrastructure",
      category: "Infrastructure",
      location: "Riyadh, KSA",
      year: "2024",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
      description: "Critical infrastructure project supporting the capital's public transportation network.",
      services: ["Civil & Structural", "MEP Services", "Quality Assurance"],
      stats: { area: "25,000 sqm", duration: "12 months", workers: "100+" }
    },
    {
      id: "al-diriyah-heritage-resort", 
      title: "Al Diriyah Heritage Resort",
      category: "Residential",
      location: "Al Diriyah, KSA",
      year: "2024",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80",
      description: "Luxury residential development blending traditional Saudi architecture with modern amenities.",
      services: ["General Contracting", "Civil Works", "Project Management"],
      stats: { area: "120,000 sqm", duration: "30 months", workers: "180+" }
    },
    {
      id: "aramco-facility-expansion",
      title: "Aramco Facility Expansion",
      category: "Industrial",
      location: "Eastern Province, KSA",
      year: "2024",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800&q=80",
      description: "Specialized industrial expansion project for Saudi Arabia's leading energy company.",
      services: ["Industrial Support", "Safety Management", "Technical Inspections"],
      stats: { area: "50,000 sqm", duration: "15 months", workers: "120+" }
    },
    {
      id: "red-sea-development-marina",
      title: "Red Sea Development Marina",
      category: "Infrastructure",
      location: "Red Sea, KSA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
      description: "Marine infrastructure project supporting luxury tourism development.",
      services: ["Civil & Structural", "MEP Services", "Environmental Compliance"],
      stats: { area: "40,000 sqm", duration: "20 months", workers: "90+" }
    }
  ];

  const categories = ["All", "Commercial", "Industrial", "Infrastructure", "Residential"];

  useEffect(() => {
    gsap.from(heroRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out"
    });

    gsap.from(projectsRef.current?.children, {
      scrollTrigger: {
        trigger: projectsRef.current,
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
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our portfolio of successful construction and industrial projects across 
              Saudi Arabia, each demonstrating our commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-6 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={projectsRef} className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={`/projects/${project.id}`}
                className="block group"
              >
                <Card className="overflow-hidden border-0 ossa-shadow hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm font-medium text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Building className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-sm font-medium">{project.stats.area}</div>
                        <div className="text-xs text-muted-foreground">Area</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Calendar className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-sm font-medium">{project.stats.duration}</div>
                        <div className="text-xs text-muted-foreground">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-sm font-medium">{project.stats.workers}</div>
                        <div className="text-xs text-muted-foreground">Workers</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Project <span className="text-gradient">Statistics</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", icon: Building },
              { number: "2M+", label: "Sq Meters Built", icon: MapPin },
              { number: "1000+", label: "Workers Employed", icon: Users },
              { number: "100%", label: "Safety Record", icon: Calendar }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-8 border-0 ossa-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
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

export default Projects;
