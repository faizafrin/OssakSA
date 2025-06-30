
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ArrowRight, MapPin, Calendar } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Link } from 'react-router-dom';

// gsap.registerPlugin(ScrollTrigger);

// const ProjectsPreviewSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const projectsRef = useRef<HTMLDivElement>(null);

//   const featuredProjects = [
//     {
//       title: "King Abdullah Financial District Extension",
//       category: "Commercial",
//       location: "Riyadh, KSA",
//       year: "2025",
//       image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
//       description: "Large-scale commercial development featuring modern office towers and retail spaces."
//     },
//     {
//       title: "NEOM Industrial Complex",
//       category: "Industrial", 
//       location: "NEOM, KSA",
//       year: "2025",
//       image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
//       description: "Cutting-edge industrial facility supporting Saudi Arabia's Vision 2030 initiatives."
//     },
//     {
//       title: "Al Diriyah Heritage Resort",
//       category: "Residential",
//       location: "Al Diriyah, KSA", 
//       year: "2024",
//       image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80",
//       description: "Luxury residential development blending traditional Saudi architecture with modern amenities."
//     }
//   ];

//   useEffect(() => {
//     gsap.from(titleRef.current, {
//       scrollTrigger: {
//         trigger: titleRef.current,
//         start: "top 80%",
//       },
//       duration: 1,
//       y: 50,
//       opacity: 0,
//       ease: "power3.out"
//     });

//     gsap.from(projectsRef.current?.children, {
//       scrollTrigger: {
//         trigger: projectsRef.current,
//         start: "top 80%",
//       },
//       duration: 0.8,
//       y: 100,
//       opacity: 0,
//       stagger: 0.2,
//       ease: "power3.out"
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-16 lg:py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div ref={titleRef} className="text-center mb-12 lg:mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
//             Explore some of our most impactful construction and industrial projects 
//             across Saudi Arabia, showcasing our commitment to excellence.
//           </p>
//           <Button asChild variant="outline" size="lg">
//             <Link to="/projects">
//               View All Projects
//               <ArrowRight className="ml-2 w-4 h-4" />
//             </Link>
//           </Button>
//         </div>

//         <div ref={projectsRef} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
//           {featuredProjects.map((project, index) => (
//             <Card key={index} className="group overflow-hidden border-0 ossa-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//               <div className="aspect-[4/3] overflow-hidden relative">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <Badge className="bg-primary text-white">
//                     {project.category}
//                   </Badge>
//                 </div>
//               </div>
              
//               <CardContent className="p-6">
//                 <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
//                   {project.title}
//                 </h3>
                
//                 <div className="flex items-center text-muted-foreground mb-3 text-sm">
//                   <MapPin className="w-4 h-4 mr-2" />
//                   <span>{project.location}</span>
//                   <Calendar className="w-4 h-4 ml-4 mr-2" />
//                   <span>{project.year}</span>
//                 </div>
                
//                 <p className="text-muted-foreground text-sm leading-relaxed">
//                   {project.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsPreviewSection;
const ProjectsPreviewSection = () => {
  return null; 
};

export default ProjectsPreviewSection;
