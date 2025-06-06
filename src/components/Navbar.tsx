import React, { useState, useEffect } from 'react';
import { Calculator, Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className={`rounded-full p-2 transition-colors duration-300 ${
              isScrolled ? 'bg-royal-blue' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <Calculator className={`w-8 h-8 ${
                isScrolled ? 'text-white' : 'text-white'
              }`} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                TaxPro Saudi
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-cool-gray' : 'text-blue-100'
              }`}>
                Professional Tax Services
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-royal-blue' 
                      : 'text-white hover:text-accent-cyan'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 text-sm ${
                isScrolled ? 'text-cool-gray' : 'text-blue-100'
              }`}>
                <Phone className="w-4 h-4" />
                <span>+966 XX XXX XXXX</span>
              </div>
              <button className="bg-accent-cyan hover:bg-accent-cyan-light text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Free Consultation
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mb-4 overflow-hidden">
            <div className="py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-royal-blue transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
              <div className="border-t border-gray-200 mt-4 pt-4 px-6">
                <div className="flex items-center gap-2 text-cool-gray mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+966 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-2 text-cool-gray mb-4">
                  <Mail className="w-4 h-4" />
                  <span>info@taxpro-sa.com</span>
                </div>
                <button className="w-full bg-accent-cyan hover:bg-accent-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Free Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;