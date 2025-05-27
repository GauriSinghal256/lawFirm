import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900 shadow-lg py-2' : 'bg-navy-900/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <Scale className="h-8 w-8 text-gold-500 mr-2" />
          <span className="text-white font-serif text-xl font-bold">
            Aggarwal Law Firm
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Services', 'Testimonials', 'Gallery', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'text-gold-500 font-medium'
                    : 'text-white hover:text-gold-300'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-navy-800 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4">
            {['Home', 'About', 'Services', 'Testimonials', 'Gallery', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-wider py-2 transition-colors ${
                    isActive
                      ? 'text-gold-500 font-medium'
                      : 'text-white hover:text-gold-300'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;