import React from 'react';
import { Award, Clock, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-12 w-12 text-gold-500" />,
    title: 'Expert Attorneys',
    description: 'Our team consists of highly qualified lawyers with specialized expertise across various practice areas.'
  },
  {
    icon: <Clock className="h-12 w-12 text-gold-500" />,
    title: 'Prompt Response',
    description: 'We value your time and provide timely responses and solutions to all your legal concerns.'
  },
  {
    icon: <Shield className="h-12 w-12 text-gold-500" />,
    title: 'Proven Results',
    description: 'Our track record speaks for itself with numerous successful cases and satisfied clients.'
  },
  {
    icon: <Users className="h-12 w-12 text-gold-500" />,
    title: 'Client-Focused',
    description: 'We prioritize your needs and work diligently to achieve the best possible outcome for your case.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
              Why Choose Aggarwal Law Firm?
            </h2>
            
            <p className="text-gray-600 mb-8">
              With decades of combined experience, our attorneys bring knowledge, skill, and dedication to every case. We are committed to providing exceptional legal services that meet the unique needs of each client.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold-500 hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Attorneys in discussion" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-navy-900 p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-white font-serif text-xl mb-2">25+ Years of Experience</p>
              <p className="text-gray-300 text-sm">
                Serving clients with dedication and achieving exceptional results since 1998.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;