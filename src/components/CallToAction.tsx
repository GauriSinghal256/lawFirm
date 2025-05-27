import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-navy-900 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Need Legal Assistance? We're Here to Help
          </h2>
          
          <p className="text-gray-300 text-lg mb-8">
            Schedule a consultation with our experienced attorneys to discuss your legal needs and how we can assist you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium rounded-md transition-all transform hover:scale-105 hover:shadow-lg flex items-center"
            >
              Contact Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            <a 
              href="tel:+919876543210" 
              className="px-8 py-3 border-2 border-white hover:border-gold-500 hover:text-gold-500 text-white font-medium rounded-md transition-colors"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;