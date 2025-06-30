
import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">OSSA</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
              Building tomorrow's Saudi Arabia with innovative construction and industrial solutions 
              that support Vision 2030.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Quick Links</h3>
            <div className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block text-slate-300 hover:text-white transition-colors text-sm lg:text-base"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Services</h3>
            <div className="space-y-3">
              {[
                'General Contracting',
                'Civil & Structural',
                'MEP Services',
                'Industrial Support',
                'Project Management'
              ].map((service) => (
                <div key={service} className="text-slate-300 hover:text-white transition-colors cursor-pointer text-sm lg:text-base">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-sm lg:text-base">
                  Riyadh, Kingdom of Saudi Arabia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-slate-300 text-sm lg:text-base">
                  +966 5X XXX XXXX
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-slate-300 text-sm lg:text-base">
                  info@ossaksa.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 lg:mt-12 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © 2025 OSSA Construction & Industrial. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 lg:space-x-6">
            <span className="text-slate-400 text-sm">Supporting Vision 2030</span>
            <div className="w-8 h-5 bg-green-600 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">KSA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
