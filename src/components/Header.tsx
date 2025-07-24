import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-yellow-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <img 
              src="/Logo Initiales Nominatif Moderne Minimaliste Noir Coloré.png" 
              alt="M2A Automation Logo" 
              className="h-20 w-auto bg-white rounded-lg p-2 shadow-lg"
            />
            <div>
              <div className="text-white font-orbitron font-bold text-xl">AUTOMATION</div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('realisations')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium">
              Réalisations
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium">
              Contact
            </button>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-md border-b border-yellow-500/20">
            <nav className="flex flex-col space-y-4 p-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium text-left">
                Accueil
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('realisations')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium text-left">
                Réalisations
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-yellow-500 transition-colors font-medium text-left">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;