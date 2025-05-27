import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}>
        <div className="absolute inset-0 bg-navy-900/75"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 animate-fade-in">
              {title}
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-lg animate-fade-in-delay">
              {subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <Link 
                to={buttonLink} 
                className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium rounded-md transition-all transform hover:scale-105 hover:shadow-lg"
              >
                {buttonText}
              </Link>
              
              <Link 
                to="/about" 
                className="px-8 py-3 border-2 border-white hover:border-gold-500 hover:text-gold-500 text-white font-medium rounded-md transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block" data-aos="fade-left">
            <div className="bg-navy-900/80 p-8 rounded-lg border-l-4 border-gold-500">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Our Expertise</h3>
              
              <ul className="space-y-3">
                {[
                  "Family Law",
                  "Criminal Defense",
                  "Corporate Law",
                  "Real Estate Law",
                  "Civil Litigation"
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-white"
                  >
                    <span className="h-2 w-2 bg-gold-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <Link 
                  to="/services" 
                  className="text-gold-500 hover:text-gold-400 font-medium flex items-center"
                >
                  View All Practice Areas
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;