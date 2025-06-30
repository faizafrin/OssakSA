
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    gsap.from(heroRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out"
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Riyadh", "Kingdom of Saudi Arabia"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+966 5X XXX XXXX"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ossaksa.com"],
      color: "text-orange-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Sun - Thu: 8:00 AM - 6:00 PM", "24/7 Emergency Support"],
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Contact <span className="text-gradient">OSSA</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to start your project? Get in touch with our expert team for a consultation 
              and discover how we can bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 ossa-shadow">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="p-8 border-0 ossa-shadow">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+966 5X XXX XXXX"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="general-contracting">General Contracting</option>
                      <option value="civil-structural">Civil & Structural Works</option>
                      <option value="mep-services">MEP Services</option>
                      <option value="industrial-support">Industrial Support</option>
                      <option value="project-management">Project Management</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <Card className="p-8 border-0 ossa-shadow">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
                  <div className="aspect-video rounded-lg overflow-hidden bg-slate-200 mb-6">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 mx-auto mb-4" />
                        <p>Interactive Map</p>
                        <p className="text-sm">Riyadh, Saudi Arabia</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Located in the heart of Riyadh, our office is easily accessible and we welcome 
                    clients to visit us for in-person consultations and project discussions.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-0 ossa-shadow bg-gradient-to-br from-primary to-secondary text-white">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4">24/7 Emergency Support</h3>
                  <p className="mb-6 opacity-90">
                    For urgent construction issues or industrial emergencies, our support team 
                    is available around the clock to assist you.
                  </p>
                  <Button variant="secondary" size="lg" className="w-full">
                    Emergency Hotline
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
