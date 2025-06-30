
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
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSEhAVFRUVFRAQFRUWFhUVEhAQFRUWFxUVFRUYHSggGBolHRUWIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHSUrLS0tLS0tLS0tLS8tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ4BPwMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABEEAACAQIDBQUDCgUCBAcAAAABAgADEQQSIQUTMUFRBiJhcYEykaEHFCNCUmJygpKxM8HC0fCiskNTg9IVFiQlY+Hx/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EADMRAAICAQMCAgoCAgIDAQAAAAABAhEDBBIhMUETUQUiMmFxgZGx0fChwRRSQuEzYoIj/9oADAMBAAIRAxEAPwDDpL1niyPr0WU8DMmUFpg9ImBYzgSasQ4a4hQEHEaASiABUMTQiyhvM2gCASRhBrJESFIGFhYxw8FILBNRlqQAmSVYwNRZSAAUlANlgBFhGMiVgMbJCwFkkjIskdjK1RZrFksAyy0S0DKyiBrQGQYRolkQsGxJBFWQ2apD2klDWgMe0kYgsQxZYDGKRWFDZIWOhisdioE4jQmBNOabjPaaYeVtMdwanVMlxRSkWadWZuJVky0VBYSnVtzicRWEzg8oqYyWWIQrRgGpyWgD0zIaAsqJnQEkiaEH0kUBFqYMaCwNShKUh2VKlKapgBanKsCDJGOwRSMdjFYDHySWxiyRWMgwjQFaqJpERWcTREsHll2SRKwsCLLGhMYJE2NInlkFjZYMY+WSMQEGMfLJGPaIYxiHZBowI5YxESkLHRHJCwoJSxgb2uPWd0sLj0PLhqIz9oNVOUX5deUiK3OjSctqvsQTFS3iZms6LdKrfxmMoG0Z2gwtI5LtBEMTQ7CBpNBYRXioLDpU8JO0Vlmm46SHELLFMyGgCgCQBLLARILJGOREBXq05SYys9KaKQwbUo7AGacdjImnCwFu5LkUiLraCdjKlQzVIATrKQAHWaJksHljERKwAWSFhQ+WTZVCKxWMbLGA1ogFaAx7SRjQGPkk2MW7isYxWFgRIgMGyyhGfTE9pnzcTRwtYWsfLwnNkxu7R3YsqqpCbDi914QU3VMUsSu4lmjTmcpG0Y8EypESaY2mgiOYnFDUg9M3mbVFJhVWIYVBIYBkioCxTeQ4isMKw6yNjHYSniOgieMA61Jk4gTzjpJ2sYFzKoY2QGICDU47GR3F4nOhiOFk+IME6WjTsdlaqJrECq9KaKQAykdgBqJLTAAyy0xECJQjmtr9qVptkpKHI0LEnKD0FuPnOrHpXJXI8zUeklB7cav7GtsPaYxSFgpUqcrA6i9r6HpObNieOVHbpdSs8NyVGgUmVnSNkhYD5IrGLLFYxBIrAcpFYyEYxi0VBYMtHQWMSIUFkGaUkKygontHzi4DJIaNYyLNIkTKSTNoyaL9PEAixnPLE74OpZU1yWqNXwvMpQNFKwoyNxUftFUl0Dhkvmin2TbwPD3w8R9xbR0oMPHyg5JhQQIekXAEkEGAQrJEOFjALT0ktBZbpPMpRCywJk0MEyRWUh0pyJSQwy0Zm2wskUEVMLBVJSQ7KlUTRIdlcrKKBMBGrADUQSk2BVqU5smIFupVgcx2z2puE3SGz1BckcUp8PedR6Gdmlxb3ufRHnekNT4cdker+xwM9M8A19h7dfC3AQMrEEg3BuOh5e6YZsCy9+Ts0uslgtJWmdbs/tPh6uhfdt0fQejjT32nn5NLkj2v4Hr4vSGKfV0/f+Tcpi/D+4PkROVnenZMrEMg2kB2ODE0FkKkaQ7B2EYA2EaAC0uibBuZSRLYFjKoixlE9M8RNE1WIAyXElpM1i2izTfqJk4m0ci7lukyzGUZHRGUSyGB8f3mW1ou0wym0VDsktSG0VlqlW6zNwGWlFM8RY/CR6yEQNEcpViCJh5LmOgowpkeIFETSIlqSZISkpMiVIaLVLD25zlnKyroNoOUja2Fsiagj2MCJYGG2h2QdPCA0yvUo+EakUValMy1IorshlqSAEyS7AE1ONMANQ2BJ0ABJPQDjLXIm65PHdr444is9U/WJsOiDRR7rT3sUNkFE+Wz5XlyObNTslsD505Zwd0ntcRnbkoPxP8A9zHVajw1S6s6NFpfGlcvZX8+42tpdgwbmhVt92pqPRhqPcZzY9e17a+h2ZfRafON/J/k5XaWxcRh/wCJSYD7Q7yfqGnvndjz48nss8zLpsuL2l+AeA2pWoH6Kqy+HFT5qdDHPFCftIWLPkxew6Ol2f23PCvT/Mn81P8AecWTQL/g/qenh9K9si+a/B0WC2tRr/w3BP2b2cflNjOSeGcPaR6WLU48vsv8/QvAzI6EwZWMATykAJmjoVg42JDFIWOiBSFioKcGw5T0VmizyHp5Ihu7S7sycWgiiAXQVTJ2lbwqtFtK3hFaLaWsgZG8ZDiWplukSecxlFI2jJstrw1t6TFryNB0q25RuFkthExHhE8YrLtCtbgfSYzx31KstLixzHumLwvsFk1ytwI8jE90eoEyLcBJ69QIvTYxragsgKR8Y20BMUpDYWPu4rHYsshhYJgYcFWV6gjpFJlZlgXYNqUpSAC9OaKQGF2wq7vB1mHHKE/WwQ/BjOvSrdlijl1ktuCT/eeDy3ZGzXxVVaSDVuJ5Io4sfAT2cuRY4uTPnsOKWWahE9fwGz0w9NaSCyqLeJPNj4meDPI8knJn0+LHHHBRj0Qa0ksiREMwtp9lsNXucmRvtU7L7xwPunTj1WWHe17zky6HDk7U/cchtnshVoK1RHV0UFj9VgPI6H0M9DDrYzai1TPL1Ho6eNOSdpHOA2nYeca+z+0uIo6Z869H73ubj8Zz5NLjn2r4Hbh1+bH3te863AdpsPV0Lbtuj6D0bhPPnpckfeexh9IYcnV0/f8Ak1rX1B0nOdqBPKSBsheOgsG5jSJbBs8pRE5F7fTs8M855QZF5quDCXI4SMiiYWABFWBQRVklIs0kvymcmawV9i3Tp2mMnZulRYv4zKirIFpookuQwjoW4mDFQWEWoeslwQ7DJWkuAWETFkczIeFMe4spjrzJ4KHuHw+2KL1DRWtTNRRcoGUuPy8ZnLBJLdXBHiRb2p8mkpmLRRMAHlIaFz5iNISQ3MG9DxiKUytUwhhuLU0AfDkcYtxopWCan4Qsdlaok1THZi9paFNsNVFa+7CFmte/dIYWt4gTq08pLJHb1MNSovFLf0Adnth4fDKWoAkVQrZmN2yWuoGmg1vKz555HU+xOn0+PErh3NOoJkmdAJpQELQGPu5NjMLtk+TB1SOYRf1OoPwvOnSK80Tl10q08v3uebbI2e2JqrSXmdT9lBxP+c7T2cuRY4OTPn8GF5cigjvqXZLDJUFQKSACMjWZDcWvrrznkvWZHHa/qe7H0dhjNSS+T5RU2l2QoPc0yaR6DvJfyPD0M1x6zIva5IzejMUuY8P+DDbZuNwetNiy/cOZfWmf7Tp8XDl9rr7/AMnF4Gq03MHa93P8EsH2rqA2rLcZjcgWZV6BfA9YS0kesSsXpOadZF3+h0OD2hSrew4bmRwYflOs5JwlDqj08WfHk9l2WmSZqRu4gSkqyNprPR8LTojP3nJLH7iG7PSaqRi4MktLwhuFssMuGMnxUV4LCDDnpDxEHhMIlCJzKUCxSpWmcpWXFUW1y8x7plUuxpaJ7tD9a3nD1vIm0McL6+RBlKbFSBGnaaJkjhY+BWSCxUFk1HhJaGmHTDZvCQ5UM5D5Q9tnBUxSpt9LVBNxxp0uBbwJNwPI9Jvp4rI7fRHJqs/hraurPMNkY84evTr2zGm61LXtmseF53Tjui4nmY57JKXkeu7G+UPDVyAam6b7NXQej+z7yJ5eTRtdj1sesxy93xO2wWODgHrwI4H1nBkxV0OnqXA4mDiFEsshoLIlJLQWQZZLiUmDZR0ktFpsq1aC9I02aKRznbLC3wWIs2X6J2vofZ71tetres7NJOs0PiY6rnDL4Btn4XLRprmzWp0xmIsWAUWNhFOdzbrua41UEvcTajFuNCJoQ3jAstpV2A4Elso4T5StpMuTDBbKyiqx62YhVH6ST6T1PR2JO8j+B5HpTM1WJdHyN8m1Fd3VfL38yrm+5a4A9b39IekZPdFdh+iYx2yfezsWE85HrlapTmiYAskqwKOP2VRr/wASkCftcGH5hrNIZpw6Mxy6fFl9uP5OI2psXJihQok3IDLmPA2J4geE9PFnvFvmeFn0m3ULFjf1O3wOGZKaKzFmCgMSbktz1nlTmpSbR9Bhg441Fu2SdesEzRnQmip5W8o1Jo5miDUAOE1U2S0OgHMRu+xJo4Z156ic2SMuxaaLiJS5AeswvL3HwQqso4BZtCLfVslspVDedcUZMhlmiM2IU5Vk0TFOFgFRW8ZL2j5CKTzHwiaXYLLNKovNJnKL7Mdh1qJ9iQ4y8x2T3y8k+EnY+7Cz5+7TY98fjajqCxepu6Si5ugOWmFHjYHzJnsYoLHjSPEyyeTI2j0/YfYHDU8MKWJoLUqHvvU7wZXP1UcahR8dTbWcGTUScriz0celgoVJcmHtj5Kb3OExAP8A8dXQ+lRR+6jzmsNY17a+hjPRf6P6nMf+6bIb/jURf8dBj8UJ+M2//DOuz+/5Oe82F919vwdZsH5W7ELi6H/Uo/uabHX0YeU5Mvo3/R/X8nRDXS/5I9K2D2kweNH0GIRm1OS+WpYcTu2s1vG1p52XT5MftI6IZoz6GuU8pg0a2DekZLRamgTUZLRamDalJopSM7bGDD0KqsLhqdVSOGhUgy8UnGaa80E2nBp+RM4XkBw0kWapgvm3hHuHZGrQAiTGmValDwlptFWValG2vTXwEvc2O0cR8pCZ6dIJTDsXCh1ILKTwpgDU5v6Z6Xo51KVuuOn9/I8z0nUoRSVu+v8AXzMrsJttkZMMaYyOXsyqcxqaElmvawXjpoLTo12BNPJfK+xh6O1Li1ia4d/U7pnB4Mp8iD+08pWup7iafRgKl5ogBF/CXQrKm1WfdndvkctTUMQGtmdV4HzlY0t3rK1z9jPO5bPUdO19zCqbDxJrCv8AOENQCwJSwtYjgNOc6lnxKGza6+JwvR53kWXet3wNfZz1DT+lYFszi6iwIViBp6TmyKKl6q4O/A5uHrvm39ybxJmrR0Ywh+3K8ReRyV7xxSYeMdxYcktPEdY0mS2iBY34zVJUQ2wiM3WDURXIMC3WKohbCrSYi+sVx6C5IZTNEkQ2wiGDQbg6gSeQsmE6GKwscA+HqBHwFhc3lJ2hYRbW8ZLTHZbFMMtrgEgj3zmlaZd8HB/J72HpYZvnbYinWJFqLICVUahn1+ty04C/XTs1OplNbNrXmcOm06g9135HdPXA+sD6TmWN+R27itUxvQTVYSHMBVxWYEFQQdCCLgjxBlrFQt1nhXaTDCptCrSoUwL1d0iKAqhhZdANALgmeljdQTZ5OVXkaiu52my/kqqBmb58EZQhovTDBg+ubMLgjwIPP0nHk1tcbfidMdG0/aNH53tzZn8WkuNoj6y3NQDzUZ/VlbzmLjps3R7Wab9Ri6+sjR2H8qGErvkqA0GJaxqEbvQD2n0ykkkD8OpF5jl9H5Iq1yaY9ZCTp8Ha4fErUAKkEHUEagjqDzHjOKUWup1cNcEmYdZG1lIqY+qN3UH3H/2mOEPWQpdGFeRtNLBkxOI7GJvIcSkV6lONMqzL2sLU20LaobKCWIDqTYDWbYlckTkfqnFdpdq0HqYdF3melUNV0K1A6hKbHgdeQnoafBOMZt1TVdu7OHUZoOUErtO+/kcxUpLh1w1RVfvU6WItZ1zVKZvUseatTbiPsztTeRzi/Nr5Pp9GcdLGoSSfRP5rr9UdzgMdSxNTNRzsoABYq+UHv3GY6X1Gk8qeOeKNT6/L3Hs4s0MsrhdfP3mhUSZpnSVnQS02Mo45PYHV0+He/pmsJdfgZ5F0XvX5/okVis0K2BN6anqA36tf5y8i9ZmeF+omTIkmtmyKt+c6KSODkPRrWicbBMOrKeIi5QcMd6QPCVGb7kuJEIOs03IimTQ2jpMm2izRxLLwkvEmG9kqlcWLMQAASTyAGpJgoUJyPOcV20qtiVdGy0FcDJlF6lO/eLX1zEXsNLaTsWJKPvOCWobla6Hc7I21hsTpSrAn7J7r/pOvrwnPKMo9UdUMkZdGblPCX4MJi512NUg3zI9RM/FQ9oOphSOnpNIzshqiG5aVaFyMaR8Y7QWZPZfBGjhaVPvd0N7RBYXZjYkADnLm05NmeNVFI0jTklkTTjsAGKVgjFFu4VioPBnAOUe+0a6ifTg8w+Tak1XHVqtVLsq1GZiLGnWd7Hu8ie+OHWdWalFJHFprc22eoWtONo77DU8U45mZyxRZSkZe38DgsSL4qhSubLvCRTqX1IG8BBPPQ3hjjOHsN/AjJDHL2kct8k2GWmatbftlLVKK0M2htlIqEX7xtpw019NdanJJV8zDRxq3fyPQzjADpODwrR6FlPaOLBR/wP8A7TLhipoUpcMspi+Wb3zOWL3F2W6baa6+U55xGmSvflMnGirE9CZtlJlWpQj3FJnnnylUyXpZGylKOMqE21K5VXLfxzEes9b0e6i7XVxR5+vttV2UmYeP7PNQwu8qYZmdRSqbxaiNSKLa6utlYd241Dec6YalTy7Yy45VU7+XVfYwnp3DFco88c2q+fR/c6PsPjRUw27BJ3LNTBIsWpHvU2t4qfhOHWw25dz78/PuehoMm7Ft8uPl2Nx1nKmdxWdZaGUMYhL0vxs3upuP6hNoPh/vdGc+ZR+P9MWI7qk34An3CEeXRUnSbK2GpZUQX4Ko9wEuTuTZONVFL3EiBDkvgvgTp2nBvJqD1hQbixTDSWl5hb8g6ExbE+4b67BIeH7w8T3D5RGotdyXJeQRBH6wuDE7e4jd4QgE/SMlL8puSPULb1muBtz5ObUtKHA3ZLsklOjevTV3qgFlYBt2nFVseB5nx8o8uoe7joTh06UfW6sLjvk0p1daDmk3EA9+nfyJzD3+kha6uvIp6WPVOjEx2I2nsh0p1qgqK2YoGY1FZVIvZjZ14jQ6a85tB4syuJg55MbpuzodidvqNUDfE0CTlDElqLtzAqAaEC1724zOeCunJtDUJ9eDr6ILqHRg6nUMpDKR4EaTHclwzbr0JEuP/wAgto+SGY8xKpEgMO3dGnX95TQkEuIuR2RNocgUcbXCsq50XMG1Y2OnTWUhNnj2GoChVTFq/surt37tmYu51sSQaYI63852t2tpwJbXuPXcJXzlxmRguSxQ30YE6zifB6EXYciSWZ+08IlU00qU1dc7NldQw0puL2PmJUZV0Jkk6TKtPZOHpVkanQpowWq2ZEVT9VeIH3zG5trliUIqSpGg0zNStjB9G/4H/YxrqJ9GTe8ksheDGh9+R9Y+8yHFeRVl7Z2Idja5I8ZyZ4RSsuLL2IqeE4UjZHl3yiGq+IZUsAMLTVrjU73EBbL0NwvoDPb0GxY03/t9keXrtznS/wBfuySbPAN9onEgi+pBegBw0qoWK6dMnlJeR9NPt/v6Ov7LWJXee/6+qv8Aoqdkq6YfFmkjq1Ny9DMrAqxBNSg5I4kqWX8svVxlkw7muVz/AE/yTo5xx5tqfD4/tfg7155KR7Vld/OaIDPxH8ZB9ysfW9IfzM2jWx/Ff2Zv/wAi+D/orbVX6Kpb7Dj1IIEvE/WXxFm/8cvgxPBFgmlCLaA9ZtZyh0TxisKLNJD1kNpj5Qtn7RSsWVGDFCA2n7HnwMJQ202RHJvtLsXxT8ItyG0yYSVvRLRICPeTtBYssTSA/wCYM2l7rkf+dpcZLkicXwXgYWhUGptFaFycdt9Ti9q4ehURjTppmPMVFsXP5SVCn1nRCo4m0cuRbsqTPRPnKspSpRR0bVlKgqx4XIIsTpOPbXKZs4RfY53F9ksKjb/CV6mAqDXMjXo3OnepubW4aXA4aTZZp9JLcjJ4IrlOi12K2riMThzUrvScl2VCgsxRSVzVANASVNrcpGaEYypGmGUnG2bD36RItlWit1Hr+8sQmpx2IjljsCptKgjUn3iKyhWJDAEEAX4HyjTd8ClVcnkuF2cRhqjVKy6bsJTNXdtvUoUWU7sKd4BmC3BB7p43nY5esqRxKPqu3+0d18n2Ip1MGopqFyM1NgAATbVWa3ElWUk9SZzZ01Pk6sDThwdEVmNm5Uqj6VB9yqfW9MD9zHfAd0Qdb1R92m3+tl/7IXwPuTYSbKK2NH0b/gf9jBPkJdGSaKywdrxWOglLD3+sB5zOWSikjSoZaY9tfeJx5HKfY0XAQ4gHmDMPDLTPLu2u10TG1QQTZtnjouVL1XBble68jz6T2dHgbwqv/b+eDytVlUcrv/1/jk22xO0cVqqph0NiDxYjwJBJ/SnnOXZpsXW5P9/erOxS1GXp6q/f3ojmO0fZ44V6VYVC9Ri3e1FsQtnp6EknNlYanpO7T6lZU4VS/ro/oceo0zxNTu3/AH1X1O8weKWtSSqvB1Vx4XHD0nkTg4TcX2PZxzU4KS7jPGjQ4HtD2mrUMW6qFKplUXGuVgrML3nrafSQnhTfc8bU63JiztKqX/TOmxjh6SspuHNG3irun8jOCFqbT7X/AAj1ZtSgmujr+WgjJJ3G1A2SCkOh8o+38DNd8vIyeNCDfej3MnYittau+5YU9WayC3HU2J900xVvW7oY6hPw3t6lXD7BRVW1RlqAaup5+XSW9S2+nBitFFRXNPzCf+LYnCsqORWDXy2uHNoeHjyJtcESnlxNRfN/U6PCbepGwcmkxt3and9zHQ++cssUl05+Bssse/D95tIobmD6icznRtRMYTVfP+kxLKkTJFkYeNaiiHAdcOek0/yUS8Z592pQ/OgzI++pU6dQcGJNNgS/cBslmY3NvYnpYJp4+Hw2ebmXr89Uek7IqmrSWrkNnAdQxUsEYAi+XScE5bZVfQ64vcrDYygGUKaYIZk0NiDlYNwP4Y45H5g0ugLDYamjuUohLimDlAW5Gc6246MJTyNpWxKKvhFr0aLeOithwuUann+5lubJUUT3N+Bh4vmPYCekRKWRE7WY/aetkweJa9iKFa3nkIHxmuJ3NL3kZFUG/ccPsanhMMpqCsBW3uIRaZpjE+xUZU7p76nKo1zre86pucnVcUvcc0FCKu+fqF7H42pSxtWlUpNTWuDUQMCvezVHSyHVdN6OJ9hRy1WZJwTTuisLam011O8LTjs7KMartuguMGHapaqUAVbNqWuxGa1uCjnzmmyWzd2M98VPb3Lit9K/4KI/1VT/ADkN8I0S9YIWk2XRWxp+jf8AA/8AtMIvlCkuGO8Vlg2hYwbRWMgLc4mykW8PbkD7phNvuWjimIqY+xAYNjWuCLgjD4a3Dn7U7a24P/n7yODiWf8A+vsjoamxKKnNRz0G43otu1J8afsH1WcnjTfE/W+PP89f5O3/AB4dY+r8OP46fwc32qxlQUmpHE0axUow7tq9J1OYMxp3Tl9YKNZ16XHHepKLX2f15+lnJqpyUHHcn919OPrRZ+T3GipSqUgLZHLoDypVCTYdbMGEy9IwcJKXn1+K/wCjX0dkUouPk+Pg/wDs6LamLp4em1R9Atr6E6k2HDxM4MUZ5JKMTvyTjji5S6I8X2njmxFVqrgBmtfKLDQAC3oJ9TixrHBQXRHyubK8s3N9WXdkbeq0CqszPSDKShN7BSCMt+HDhwmObSwyJtKpeZ0afWTxNJu4+X4Oyp9qcM5yipa/NlKj1J4TynosyV0e7D0jp5Ot39GgKwYXWxB4EEEHyInPtp0zti1JWuhspWpHiifpMw2T839SbHthzxQD9QhWVdGKxquCwzW1I1B0LfzEayZl+ol0wqbNw5/4p+P/AGyXlzeQX7jFx2HoJjKX0hKZChuRdGYmxAtztadeOeWWB8c2cWTIo502u1HTDZWHym7ZhYnKwBB05icXjZb8jpk7XsljYOCpYdGp9099mFrgANqFAJNgBYadIs2R5Gpe458cJxVGt3LrZRx6/daZKuRy3eZaQ2+ospJGb57hlrqONOUqM3CXaRwO2q6PjMTnqU0pgUkKMFFSoGRLimzK+t0OgW/iJ6mJ1ijtTv8AevQ45Y/Xds1OwO0RuXw7Z1NByqioCKhovdqbMPHvelpnqo+spefl5m2C2nHyNvaG1qNN6Ieqql6hVQ1hmbIwsOpuw98ygpNOl0RclTVhqONW78PbHL7ieMlvoNQ6kzjV6geh/vAraCwuJXKL2PHl4+ccuoknQmqIeYHqRC2UBqVlH1z6G/7xq32HRzvbGoDhnXNcO1CkRa1xUrIh+BM6tO3vXz+xjmXqfT7mN2X2WtPDU61GoaLOm9YFUemc1yA2bvAAEaKyzbNlbm4tXRnhxVBSTowe1m2TvaNRWp1alIg5qBbvDMpUMpBA7wy6O2lRhOjBDhp2k/P9/rsYZp8prlry/f7O9pYxXQVFN1ZQ4I1upFxYDjpPPdp0zvVNWjxftDt418YcTTGXKy5DxuKZ7rajnYG09rFi249rPHy5d2Tcjrtg9v6ZVjiu5UJXVVYqygWuAL2OnxnHl0kr9TodmLVxr1+p1uC2nSrrmpVFcc8pvY9CORnFOMoOpKjthKM1cXYsZU7j/gf9jFF8oqUeGTapFZdAmqQse0G1SKx7SIq+MGNRJDF25yHGykjzVdrMmIzqoDb7GVFZ/YvVIS9yVFgEtxnseEpY6flFce7n3nirK45LS7y69OePcb/zGviRmrYq6n6tMgrbpoAp9Q3nOTxMePiEeff+39juWDJl5nPj3ftfwzQwGzaFGxVFJGoZ++VP3b6L6ATDJlnPqzpx6bHDovqYeBxHzPHWvZCxp8NNzXOdLW5LUBHrOjJDxtP7+vzXH8o4of8A4amu118pdPozoe1ePC4SsSb5kNMDqX7v87+k4dJibzR+N/Q9DWTUcEm/KvrweST6U+WFADpdh7Iwtex3rFgO9TNlPDWxHEeInn6jUZsfbjzPW0ek0+anud910OqwtCnRXJTUKvG2p16knUzzZzlkdy5Z7uLDDFHbBUjTXymFm20Iq/5/hk7hbSd+o5wtkuCLFM9L/wCekhy8w2IxdrK71mABuKaAGwADXLC7HhrbznXhkowV+Z5+eG7I0vL95Nf/AMeK4fesotl7wsL34EDXrec/+Onk2I1cl4W9mjgtq5xnXIQTcEa8hMZ4lF07NIxUlafBcO1nGX2eP9JkxgiJYUT/APMNQcl901WNGTwImO0L/ZSHhrzF4COU2ftemcRiKm6LVjUZBug2cBWcakHLa2X29NB0ndOD8OKtba7/AL9jjhCO+XW77FijtLEUcYlerRsldfm5uVLF9ChbdjKWOgFuQMhrHPE4xfK5/PXkNko5E5dHwYHymbdepXp08gQUlFVbXz7xjxOmlsonV6PxR2OXW+DDWWpqPkaXZTtxiagCPhBXsTnrB1RteBZLAcOlrzLU6THHlSryRpp8mSfFX7+DsTthP+UPeZwbH5nf4b8ytT2kmUfRDnzPWW4u+oowdAXxYPK0pWPYDOJHWOw2HP8AbTFf+nADZSatMg2uAaYarqP+nOrScz+X34/s5tXFqHz+3P8ARmbP2blp0xikq1gqJlyvmpUwqjL9F3WBtpoGms81yfhtL5c/Xp9jOGnaivETfwfH06/c2GqYatRfD0iiZlIyAZHRj7LFCAwINjqOUwvJCSnL8/yb7Mc4uEfw/oZewNubrCVM2jYcP3egNyq+jZk/LNs2LdlVdJfv25McGTbilfWP79+Dy+eyeKW9mYmnTe9WiKqHQqSykDqpUjXzmeSMpL1XTNMcoxfrK0ep7E2jQqUgcOAq8CoUKVa3Agc+Gs8TNCcZVPqe/p3jnC8fQs4vEdxvwt+xmcfaRtKPqsTV/GIvaDNeMe0iasA2kN5Ae0DWxQT2mA4nUgXt5yoxb6Ck1Hqzk+zdVQ6l3XSgwNyPaeszc/CehqU9rSXf7I8nRVuTk17P3k2a1Sjhr5ldabfapuEPqAbH1BnMpZejV/FWdrxYLtNJ+50QOMqJ7OIpVB0cqrfrXT/THsjLrFr4fh/kN0o9Jxfx4f1X4MXb+LFQqxXK1mpk3VlsdVIZTyYA8uM6tPBxtLnv+/I4dXkUmm1T6dn8OV5MF2g2vvqNJb8e+4vwYDLb35pWnwbJyf0I1up8TFBLvy/sc/O08wUAJIxBBBII4EaEHwiaTVMcW07XU7rZ+KqCmu9szW1PA+ANuc8bLjg5Pb0PqtPmyLGvE5ZfXFv1aZPHE6FKQVca3UyfDiPcx32ja12tcgC9uMSw30RMsqXVhW2gVBJewHEnl8JPhJ8JDlkUVbfBjttxN47Go9jlFgCAwUW4jWda00tqVI896rHvk7ZRx+1g1NqSXylw4GtgLagev7zXHgqSlLrRzZtRFwcI9Lv9+YbsxtLdvYkC40JJ4nll4GTqsO+NlaLKozpnS4vbi0igeoAWaw4aaHU+HDXxnBDTOae1HpZc8MbSk+pfG0W+2PcJj4MfI2szdrdploEqzZny51XLo3EAZrG3CdGHRvJyuhy59XDE6fWrr/s5nCdpgma+HDFnL5g+VluBoGC3AuL8ec756TdVS6Kv3k8yGtjG7hdu+tf0Pj+1LVUyZCO8rKSysUZeBUhAb8eJPGGPRqMrv9+osut3xqv5v+kZW1NoHEVXqtoWI01IAAAAHunRixLHBQXY5suTxJub7j7Jxm5rI+8ZAGGZk9rJfUcdQekM0N8HGr+IYZ7Jp3XwPRX7T0TS37OMmoGbMCSCRYKTcnSeItJkU9iXJ73+Ti8PxL4KnZ3tBTxNIewKgvmTUEa6EdRwmup00sU+9eZnpNTDND390aRxA8PeZjtZ1cGVt7by4VVYoWzEro1rWF+c6NPp5ZW0nRy6nUxwJNq7OF272kqYljlJWn9VDlJBKFG1tzDN7562DSxxrnr5/OzxNTrJZXxwvL5URHavGDTff6E/tH/h4fL7i/zs/wDt/CB1+0eJqCzurDo1OmbeV10jjpcUei/lilrMslUnfyX4KLY2oQ4zaPbMOTWbMPjrNfDjw66GLyypq+vX7leWZigB1fZ7tGtNKdDc2JYLmB0JY+0b89Z52o0rk3Oz1tHrYwjHHt7/AHNHtRttKaPSVr1GGUgahAeNzyNuAmOl08pSU30OnXaqEIOC9p/wG2DtpK6BcwFRQAynS9hxXqJGowSxu+xrpNVDLFL/AJGqT/l5znZwMTADA7S7XqYcoKeXvBibi/C3jOzS4I5U9x5+u1U8DioVycttPalTEZc+Xu5rWFuNr/tPQxYY4729zx9Rqp563dijNjnFABQAUAFABQAUAHBtAE6NFNuVgLXB8SNT5znemg2dsfSGZKuGZ86DiGtAB4ANaADwAUAFABQAa0AHgAoAKACgAoAKACgA1oAK0AHgAoAKACgAoAKACgAoAKADWgArQAeACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAf/Z"
              alt=""
              className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">Fast and Reliable</h3>
              <p className="text-sm opacity-90">We respond quickly and deliver on time, even in critical situations.</p>
            </div>
          </div>
          

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-4 lg:p-6 ossa-shadow">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMipHyhv5qXE8ll7AV61jGHxLOARnt_ZdOZw&s"></img>
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold">Specialized in Oil & Gas</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We focus exclusively on energy sector services with deep industry knowledge.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 lg:p-6 ossa-shadow">
          <img
              src="data:image/jpeg;base64,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"></img>
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold">Safety Excellence</h3>
            </div>
            <p className="text-muted-foreground text-sm">
            We follow strict HSE standards to protect people, assets, and operations.
            </p>
          </div>

          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden ossa-shadow group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYoiHpQYQu5Zba2_teUVxn4gFix0qt95a44g&s"
             
              className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">Certified Skilled Worspace</h3>
              <p className="text-sm opacity-90">Our team includes trained technicians, engineers, and safety professionals.</p>
            </div>
          </div>
        </div>
           
        
    </div>
    </section>
  );
};

export default WhyChooseUsSection;
