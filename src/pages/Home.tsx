import React from 'react';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import FeaturedServices from '../components/FeaturedServices';
import TestimonialSlider from '../components/TestimonialSlider';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div>
      <Hero 
        title="Experienced & Trusted Legal Solutions"
        subtitle="Protecting your rights and fighting for justice with expert legal representation."
        buttonText="Free Consultation"
        buttonLink="/contact"
      />
      
      <StatsCounter />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Our Practice Areas</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced attorneys provide expert legal representation across a wide range of practice areas.
            </p>
          </div>
          
          <FeaturedServices />
          
          <div className="text-center mt-8">
            <a 
              href="/services" 
              className="inline-flex items-center text-gold-600 font-medium hover:text-gold-700 transition-colors"
            >
              View All Practice Areas
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in delivering exceptional legal services that exceed our clients' expectations.
            </p>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
};

export default Home;