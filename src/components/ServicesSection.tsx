
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Building, Wrench, Zap, Cog, FileText, Shield } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

// gsap.registerPlugin(ScrollTrigger);

// const ServicesSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);

//   const services = [
//     {
//       icon: Building,
//       title: "General Contracting",
//       description: "End-to-end construction execution with turnkey project delivery and design-build solutions.",
//       features: ["Turnkey delivery", "Design & build", "Project management"]
//     },
//     {
//       icon: Wrench,
//       title: "Civil & Structural Works",
//       description: "Comprehensive civil engineering from earthworks to infrastructure development.",
//       features: ["Foundation work", "Structural frames", "Infrastructure"]
//     },
//     {
//       icon: Zap,
//       title: "MEP Services",
//       description: "Complete mechanical, electrical, and plumbing solutions for all building types.",
//       features: ["Electrical systems", "HVAC solutions", "Plumbing & fire safety"]
//     },
//     {
//       icon: Cog,
//       title: "Industrial Support",
//       description: "Specialized support services for industrial operations and maintenance.",
//       features: ["Equipment rental", "Maintenance", "Technical inspections"]
//     },
//     {
//       icon: FileText,
//       title: "Project Management",
//       description: "Professional planning and execution support to keep projects on track.",
//       features: ["Project scheduling", "Cost control", "Quality assurance"]
//     },
//     {
//       icon: Shield,
//       title: "Safety & Compliance",
//       description: "Comprehensive HSE services ensuring zero-incident workplace culture.",
//       features: ["Safety training", "Risk management", "Compliance audits"]
//     }
//   ];

//   useEffect(() => {
//     const cards = cardsRef.current?.children;
//     if (!cards) return;

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

//     gsap.from(cards, {
//       scrollTrigger: {
//         trigger: cardsRef.current,
//         start: "top 80%",
//       },
//       duration: 0.8,
//       y: 100,
//       opacity: 0,
//       stagger: 0.1,
//       ease: "power3.out"
//     });

//     gsap.from(imageRef.current, {
//       scrollTrigger: {
//         trigger: imageRef.current,
//         start: "top 80%",
//       },
//       duration: 1.2,
//       scale: 0.8,
//       opacity: 0,
//       ease: "power3.out"
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-12 lg:py-16 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div ref={titleRef} className="text-center mb-8 lg:mb-12">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
//             Our <span className="text-gradient">Services</span>
//           </h2>
//           <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
//             OSSA provides comprehensive construction and industrial solutions tailored to meet 
//             the diverse needs of Saudi Arabia's growing infrastructure sector.
//           </p>
//         </div>

//         <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
//           {services.map((service, index) => {
//             const IconComponent = service.icon;
//             return (
//               <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 ossa-shadow">
//                 <CardContent className="p-6 lg:p-8">
//                   <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
//                     <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
//                   </div>
                  
//                   <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 group-hover:text-primary transition-colors">
//                     {service.title}
//                   </h3>
                  
//                   <p className="text-muted-foreground mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
//                     {service.description}
//                   </p>
                  
//                   <ul className="space-y-2">
//                     {service.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center text-sm">
//                         <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Construction Showcase Images - Improved grid layout */}
//         <div ref={imageRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
//           <div className="lg:col-span-2 relative rounded-2xl overflow-hidden ossa-shadow group">
//             <img
//               src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
//               alt="Modern construction project"
//               className="w-full h-56 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-bold mb-1">Commercial Buildings</h3>
//               <p className="text-sm opacity-90">Modern construction excellence</p>
//             </div>
//           </div>

//           <div className="lg:col-span-2 relative rounded-2xl overflow-hidden ossa-shadow group">
//             <img
//               src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
//               alt="Industrial construction"
//               className="w-full h-56 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-bold mb-1">Industrial Projects</h3>
//               <p className="text-sm opacity-90">Heavy industrial construction</p>
//             </div>
//           </div>

//           <div className="lg:col-span-1 relative rounded-2xl overflow-hidden ossa-shadow group">
//             <img
//               src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80"
//               alt="Infrastructure development"
//               className="w-full h-56 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-bold mb-1">Infrastructure</h3>
//               <p className="text-sm opacity-90">Civil engineering</p>
//             </div>
//           </div>

//           <div className="md:col-span-2 lg:col-span-3 relative rounded-2xl overflow-hidden ossa-shadow group">
//             <img
//               src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
//               alt="Construction team at work"
//               className="w-full h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-bold mb-1">Professional Excellence</h3>
//               <p className="text-sm opacity-90">Dedicated teams delivering outstanding results</p>
//             </div>
//           </div>

//           <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 ossa-shadow flex flex-col justify-center">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Building className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Your Vision, Our Expertise</h3>
//               <p className="text-muted-foreground text-sm">
//                 From concept to completion, we deliver construction solutions that exceed expectations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building } from 'lucide-react'; 
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
    });

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
      },
      duration: 1.2,
      scale: 0.8,
      opacity: 0,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="text-gradient"></span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            OSSA provides comprehensive construction and industrial solutions tailored to meet 
            the diverse needs of Saudi Arabia's growing infrastructure sector.
          </p>
        </div>

       
        <div ref={imageRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden ossa-shadow group">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
              alt="Modern construction project"
              className="w-full h-56 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">Commercial Buildings</h3>
              <p className="text-sm opacity-90">Modern construction excellence</p>
            </div>
          </div>

          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden ossa-shadow group">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
              alt="Industrial construction"
              className="w-full h-56 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">Industrial Projects</h3>
              <p className="text-sm opacity-90">Heavy industrial construction</p>
            </div>
          </div>

          <div className="lg:col-span-1 relative rounded-2xl overflow-hidden ossa-shadow group">
            <img
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80"
              alt="Infrastructure development"
              className="w-full h-56 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">Infrastructure</h3>
              <p className="text-sm opacity-90">Civil engineering</p>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-3 relative rounded-2xl overflow-hidden ossa-shadow group">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
              alt="Construction team at work"
              className="w-full h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">Professional Excellence</h3>
              <p className="text-sm opacity-90">Dedicated teams delivering outstanding results</p>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 ossa-shadow flex flex-col justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Your Vision, Our Expertise</h3>
              <p className="text-muted-foreground text-sm">
                From concept to completion, we deliver construction solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
