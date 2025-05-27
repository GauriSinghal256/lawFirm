import React from 'react';
import { NavLink } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-gold-500 mr-2" />
              <span className="text-xl font-serif font-bold">Aggarwal Law Firm</span>
            </div>
            <p className="text-gray-300 mb-4">
              Committed to providing exceptional legal services with integrity and dedication.
              We strive to achieve the best possible outcomes for our clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 border-b border-gold-500 pb-2">Practice Areas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">Family Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">Criminal Defense</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">Corporate Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">Real Estate Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">Civil Litigation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 border-b border-gold-500 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Testimonials', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-gold-500 transition-colors"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 border-b border-gold-500 pb-2">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-500 mr-2 mt-0.5" />
                <span className="text-gray-300">123 Legal Avenue, New Delhi, India - 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-500 mr-2" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-500 mr-2" />
                <span className="text-gray-300">info@aggarwallaw.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-gold-500 mr-2 mt-0.5" />
                <span className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Aggarwal Law Firm. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;