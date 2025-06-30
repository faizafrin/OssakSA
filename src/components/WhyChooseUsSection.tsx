
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Shield, Award, Clock, Users, Lightbulb, Leaf } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

// gsap.registerPlugin(ScrollTrigger);

// const WhyChooseUsSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);

//   const advantages = [
//     {
//       icon: Shield,
//       title: "Safety First",
//       description: "Zero-incident culture with comprehensive HSE standards and regular safety training across all projects."
//     },
//     {
//       icon: Award,
//       title: "Quality Excellence",
//       description: "International quality standards with continuous monitoring and process improvements throughout project lifecycle."
//     },
//     {
//       icon: Clock,
//       title: "On-Time Delivery",
//       description: "Proven track record of delivering projects on schedule through efficient project management and resource planning."
//     },
//     {
//       icon: Users,
//       title: "Expert Team",
//       description: "Experienced engineers and project managers with deep expertise in construction execution and management."
//     },
//     {
//       icon: Lightbulb,
//       title: "Innovation Driven",
//       description: "Modern construction technologies and project management tools for superior results and efficiency."
//     },
//     {
//       icon: Leaf,
//       title: "Sustainable Approach",
//       description: "Environmental responsibility and long-term sustainability in all construction and industrial solutions."
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

//     gsap.from(cardsRef.current?.children, {
//       scrollTrigger: {
//         trigger: cardsRef.current,
//         start: "top 80%",
//       },
//       duration: 0.8,
//       y: 100,
//       opacity: 0,
//       stagger: 0.15,
//       ease: "power3.out"
//     });

//     gsap.from(imageRef.current?.children, {
//       scrollTrigger: {
//         trigger: imageRef.current,
//         start: "top 80%",
//       },
//       duration: 1,
//       scale: 0.9,
//       opacity: 0,
//       stagger: 0.2,
//       ease: "power3.out"
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-12 lg:py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div ref={titleRef} className="text-center mb-8 lg:mb-12">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
//             Why Choose <span className="text-gradient">OSSA</span>
//           </h2>
//           <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
//             Our strategic advantages and core values make us the preferred partner for 
//             construction and industrial projects across Saudi Arabia.
//           </p>
//         </div>

//         <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
//           {advantages.map((advantage, index) => {
//             const IconComponent = advantage.icon;
//             return (
//               <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 ossa-shadow">
//                 <CardContent className="p-6 lg:p-8 text-center">
//                   <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                     <IconComponent className="w-8 h-8 text-white" />
//                   </div>
                  
//                   <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
//                     {advantage.title}
//                   </h3>
                  
//                   <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
//                     {advantage.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Excellence Showcase Images - More compact layout */}
//         <div ref={imageRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
//           <div className="lg:col-span-2 relative rounded-2xl overflow-hidden ossa-shadow group">
//             <img
//               src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
//               alt="Modern technology and innovation"
//               className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-bold mb-1">Innovation & Technology</h3>
//               <p className="text-sm opacity-90">Cutting-edge construction methods</p>
//             </div>
//           </div>
          
//           <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-4 lg:p-6 ossa-shadow">
//             <div className="flex items-center mb-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
//                 <Award className="w-5 h-5 text-white" />
//               </div>
//               <h3 className="text-lg font-bold">Quality Commitment</h3>
//             </div>
//             <p className="text-muted-foreground text-sm">
//               International quality standards with rigorous testing processes.
//             </p>
//           </div>

//           <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 lg:p-6 ossa-shadow">
//             <div className="flex items-center mb-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
//                 <Shield className="w-5 h-5 text-white" />
//               </div>
//               <h3 className="text-lg font-bold">Safety Excellence</h3>
//             </div>
//             <p className="text-muted-foreground text-sm">
//               Zero-incident workplace culture with comprehensive safety training.
//             </p>
//           </div>
          
//           <div className="lg:col-span-3 relative rounded-2xl overflow-hidden ossa-shadow group">
//             <img
//               src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
//               alt="Team collaboration and expertise"
//               className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-lg font-bold mb-1">Expert Team & Collaboration</h3>
//               <p className="text-sm opacity-90">Skilled professionals working together for excellence</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsSection = () => {
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

    gsap.from(imageRef.current?.children, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
      },
      duration: 1,
      scale: 0.9,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Why Choose <span className="text-gradient">OSSA</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our strategic advantages and core values make us the preferred partner for 
            construction and industrial projects across Saudi Arabia.
          </p>
        </div>

        {/* Excellence Showcase Images - Retained */}
        <div ref={imageRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden ossa-shadow group">
            <img
              src=""
              alt="Modern technology and innovation"
              className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">Innovation & Technology</h3>
              <p className="text-sm opacity-90">Cutting-edge construction methods</p>
            </div>
          </div>
          

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-4 lg:p-6 ossa-shadow">
            <img
              src=""></img>
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold">Quality Commitment</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              International quality standards with rigorous testing processes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 lg:p-6 ossa-shadow">
          <img
              src=""></img>
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold">Safety Excellence</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Zero-incident workplace culture with comprehensive safety training.
            </p>
          </div>

          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden ossa-shadow group">
            <img
              src=""
              alt="Team collaboration and expertise"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">Expert Team & Collaboration</h3>
              <p className="text-sm opacity-90">Skilled professionals working together for excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
