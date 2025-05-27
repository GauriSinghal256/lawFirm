import React, { useState, useEffect, useRef } from 'react';
import { Scale, Users, Award, Briefcase } from 'lucide-react';

const statsData = [
  {
    icon: <Scale className="h-8 w-8 text-gold-500" />,
    count: 500,
    label: 'Cases Won',
    suffix: '+'
  },
  {
    icon: <Users className="h-8 w-8 text-gold-500" />,
    count: 25,
    label: 'Expert Attorneys',
    suffix: '+'
  },
  {
    icon: <Award className="h-8 w-8 text-gold-500" />,
    count: 120,
    label: 'Awards Won',
    suffix: '+'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-gold-500" />,
    count: 1500,
    label: 'Satisfied Clients',
    suffix: '+'
  }
];

const StatsCounter = () => {
  const [counters, setCounters] = useState(statsData.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    statsData.forEach((stat, index) => {
      const target = stat.count;
      let current = 0;
      const increment = Math.ceil(target / 50); // Adjust speed by changing divisor
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = current;
          return newCounters;
        });
      }, 30);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 bg-navy-900 text-white relative"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 border-b-2 border-gold-500 transform transition hover:scale-105"
            >
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2 font-serif">
                {counters[index]}
                <span className="text-gold-500">{stat.suffix}</span>
              </h3>
              <p className="text-gray-300 uppercase text-sm tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;