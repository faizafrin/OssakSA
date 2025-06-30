
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Building, MapPin, Users, Calendar } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const StatsSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const statsRef = useRef<HTMLDivElement>(null);

//   const stats = [
//     { icon: Building, number: "10+", label: "Projects", color: "from-primary to-primary/80" },
//     { icon: MapPin, number: "2M+", label: "Sq Meters Built", color: "from-primary to-primary/70" },
//     { icon: Users, number: "50+", label: "Expert Team", color: "from-primary/80 to-primary" },
//     { icon: Calendar, number: "100%", label: "Safety Record", color: "from-primary/70 to-primary/90" }
//   ];

//   useEffect(() => {
//     const statElements = statsRef.current?.children;
//     if (!statElements) return;

//     gsap.from(statElements, {
//       scrollTrigger: {
//         trigger: statsRef.current,
//         start: "top 80%",
//       },
//       duration: 1,
//       y: 50,
//       opacity: 0,
//       stagger: 0.2,
//       ease: "power3.out"
//     });

//     // Animate numbers counting up
//     Array.from(statElements).forEach((element, index) => {
//       const numberElement = element.querySelector('.stat-number');
//       const targetNumber = stats[index].number;
      
//       if (numberElement && targetNumber.includes('+')) {
//         const numValue = parseInt(targetNumber.replace('+', ''));
//         gsap.from(numberElement, {
//           scrollTrigger: {
//             trigger: element,
//             start: "top 90%",
//           },
//           duration: 2,
//           textContent: 0,
//           ease: "power2.out",
//           snap: { textContent: 1 },
//           onUpdate: function() {
//             const current = Math.round(this.targets()[0].textContent);
//             numberElement.textContent = current + '+';
//           }
//         });
//       }
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-12 lg:py-16 ossa-gradient text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-8 lg:mb-12">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-white">
//             Our Impact in Numbers
//           </h2>
//           <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
//             Delivering excellence across Saudi Arabia with measurable results and proven expertise.
//           </p>
//         </div>

//         <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//           {stats.map((stat, index) => {
//             const IconComponent = stat.icon;
//             return (
//               <div key={index} className="text-center group">
//                 <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/20`}>
//                   <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
//                 </div>
//                 <div className="stat-number text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-white">
//                   {stat.number}
//                 </div>
//                 <div className="text-sm sm:text-base lg:text-lg text-white/80">
//                   {stat.label}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building, MapPin, Users, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Building, number: "10+", label: "Projects", color: "from-primary to-primary/80" },
    { icon: MapPin, number: "2M+", label: "Sq Meters Built", color: "from-primary to-primary/70" },
    { icon: Users, number: "50+", label: "Expert Team", color: "from-primary/80 to-primary" },
    { icon: Calendar, number: "100%", label: "Safety Record", color: "from-primary/70 to-primary/90" }
  ];

  useEffect(() => {
    const statElements = statsRef.current?.children;
    if (!statElements) return;

    gsap.from(statElements, {
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
      },
      duration: 1,
      y: 30,  // smaller vertical animation distance
      opacity: 0,
      stagger: 0.15,
      ease: "power3.out"
    });

    // Animate numbers counting up
    Array.from(statElements).forEach((element, index) => {
      const numberElement = element.querySelector('.stat-number');
      const targetNumber = stats[index].number;
      
      if (numberElement && targetNumber.includes('+')) {
        const numValue = parseInt(targetNumber.replace('+', ''));
        gsap.from(numberElement, {
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
          },
          duration: 2,
          textContent: 0,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function() {
            const current = Math.round(this.targets()[0].textContent);
            numberElement.textContent = current + '+';
          }
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-8 lg:py-10 ossa-gradient text-white"> {/* Reduced vertical padding */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Reduced max width for compactness */}
        <div className="text-center mb-6 lg:mb-8"> {/* Reduced bottom margin */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 lg:mb-3 text-white"> {/* Smaller font size and margin */}
            Our Impact in Numbers
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto"> {/* Smaller font size & max width */}
            Delivering excellence across Saudi Arabia with measurable results and proven expertise.
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"> {/* Reduced gaps */}
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div
                  className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/20`}
                >
                  <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="stat-number text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 text-white"> {/* Smaller font size & margin */}
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white/80"> {/* Smaller font size */}
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
