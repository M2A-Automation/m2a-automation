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

  const sections = ['Accueil', 'Services', 'Réalisations', 'Contact'];

  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-yellow-500/60 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <img
              src="/Logo Initiales Nominatif Moderne Minimaliste Noir Coloré.png"
              alt="M2A Automation Logo"
              className="h-20 w-auto bg-white rounded-lg p-2 shadow-lg"
              loading="lazy"
            />
            <div>
              <div className="text-white font-orbitron font-bold text-xl">AUTOMATION</div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section.toLowerCase())}
                aria-label={`Aller à la section ${section}`}
                className="text-gray-300 hover:text-yellow-500 transition-colors font-medium relative
                           after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-yellow-500
                           after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform
                           focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 rounded-sm"
              >
                {section}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
            isMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* Menu mobile */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 bg-gray-900/98 backdrop-blur-md border-b border-yellow-500/20 py-4 z-50 transition-all duration-300 transform ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
              aria-label={`Aller à la section ${section}`}
              className={`text-gray-300 hover:text-yellow-500 transition-all duration-300 font-medium text-left
                         hover:bg-gray-800 hover:pl-4 rounded-lg py-2 px-2
                         focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50
                         transform ${
                           isMenuOpen 
                             ? 'translate-x-0 opacity-100' 
                             : '-translate-x-4 opacity-0'
                         }`}
              style={{ 
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' 
              }}
            >
              {section}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;