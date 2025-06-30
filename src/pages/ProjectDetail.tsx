
import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, MapPin, Building, Users, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { id } = useParams();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Project data - in a real app, this would come from an API
  const projects = {
    'king-abdullah-financial-district': {
      title: "King Abdullah Financial District Extension",
      category: "Commercial",
      location: "Riyadh, KSA",
      year: "2025",
      status: "Completed",
      client: "KAFD Development Company",
      images: [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "A landmark commercial development featuring state-of-the-art office towers and integrated retail spaces in the heart of Riyadh's financial district.",
      challenge: "The project required complex coordination between multiple stakeholders while maintaining operations in an active financial district. Key challenges included working within tight urban constraints and integrating modern infrastructure with existing systems.",
      solution: "OSSA implemented a phased construction approach with advanced project management tools and 24/7 coordination protocols. We utilized innovative construction techniques to minimize disruption while ensuring the highest quality standards.",
      services: ["General Contracting", "MEP Services", "Project Management", "Quality Assurance"],
      stats: {
        area: "150,000 sqm",
        duration: "24 months", 
        workers: "200+",
        floors: "45 floors",
        cost: "SAR 850M"
      },
      timeline: [
        { phase: "Planning & Design", duration: "6 months", status: "completed" },
        { phase: "Foundation Work", duration: "4 months", status: "completed" },
        { phase: "Structural Construction", duration: "12 months", status: "completed" },
        { phase: "MEP Installation", duration: "6 months", status: "completed" },
        { phase: "Finishing & Handover", duration: "2 months", status: "completed" }
      ],
      features: [
        "LEED Gold Certified",
        "Smart Building Management System",
        "Advanced Fire Safety Systems",
        "High-Speed Elevators",
        "Underground Parking for 500+ vehicles",
        "Integrated Retail Complex"
      ]
    }
  };

  const project = projects[id as keyof typeof projects] || projects['king-abdullah-financial-district'];

  useEffect(() => {
    gsap.from(heroRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out"
    });

    gsap.from(contentRef.current?.children, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef}>
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-white">
                  {project.category}
                </Badge>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  {project.title}
                </h1>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span className="text-lg">{project.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span className="text-lg">{project.year}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                    <span className="text-lg">{project.status}</span>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="aspect-[4/3] rounded-2xl overflow-hidden ossa-shadow">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={contentRef} className="space-y-16">
            
            {/* Challenge & Solution */}
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-0 ossa-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-red-600">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 ossa-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-green-600">Our Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Services Provided */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">Services Provided</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {project.services.map((service, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2 text-base">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Timeline */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">Project Timeline</h3>
              <div className="space-y-4">
                {project.timeline.map((phase, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{phase.phase}</h4>
                      <p className="text-muted-foreground">{phase.duration}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {phase.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Features */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">Key Features</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Images */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center">Project Gallery</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((image, index) => (
                  <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden ossa-shadow">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how OSSA can bring your vision to life with the same excellence 
            and attention to detail demonstrated in this project.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
