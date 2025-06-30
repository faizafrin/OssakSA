
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Star, Quote } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

// gsap.registerPlugin(ScrollTrigger);

// const TestimonialsSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const testimonialsRef = useRef<HTMLDivElement>(null);

//   const testimonials = [
//     {
//       name: "Ahmed Al-Rashid",
//       position: "Project Director",
//       company: "KAFD Development",
//       content: "OSSA delivered exceptional results on our commercial development project. Their attention to detail and commitment to quality exceeded our expectations.",
//       rating: 5
//     },
//     {
//       name: "Sarah Al-Mahmoud", 
//       position: "Construction Manager",
//       company: "NEOM Development",
//       content: "Working with OSSA has been a game-changer for our industrial projects. Their expertise in complex constructions is unmatched in the region.",
//       rating: 5
//     },
//     {
//       name: "Mohammed Al-Fahad",
//       position: "Operations Director", 
//       company: "Saudi Aramco",
//       content: "OSSA's industrial support services have been crucial to our facility operations. Their safety standards and technical expertise are world-class.",
//       rating: 5
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

//     gsap.from(testimonialsRef.current?.children, {
//       scrollTrigger: {
//         trigger: testimonialsRef.current,
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
//     <section ref={sectionRef} className="py-16 lg:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div ref={titleRef} className="text-center mb-12 lg:mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
//             What Our <span className="text-gradient">Clients Say</span>
//           </h2>
//           <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
//             Don't just take our word for it. Here's what our clients have to say about 
//             working with OSSA on their construction and industrial projects.
//           </p>
//         </div>

//         <div ref={testimonialsRef} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
//           {testimonials.map((testimonial, index) => (
//             <Card key={index} className="border-0 ossa-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//               <CardContent className="p-6 lg:p-8">
//                 <div className="flex items-center mb-4">
//                   <Quote className="w-8 h-8 text-primary mr-3" />
//                   <div className="flex">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                 </div>
                
//                 <p className="text-muted-foreground leading-relaxed mb-6 text-sm lg:text-base">
//                   "{testimonial.content}"
//                 </p>
                
//                 <div className="border-t pt-4">
//                   <h4 className="font-bold text-lg">{testimonial.name}</h4>
//                   <p className="text-sm text-muted-foreground">
//                     {testimonial.position}
//                   </p>
//                   <p className="text-sm text-primary font-medium">
//                     {testimonial.company}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  // Testimonials section completely removed (empty render)
  return null;
};

export default TestimonialsSection;
