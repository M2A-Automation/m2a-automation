import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import 'animate.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setAnimateHeader(scrolled);
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
      } ${animateHeader ? 'animate__animated animate__fadeInDown' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* === LOGO + TITRE === */}
          <div className="flex items-center space-x-3">
            <img
              src="/Logo Initiales Nominatif Moderne Minimaliste Noir Coloré.png"
              alt="M2A Automation Logo"
              className="h-14 w-auto drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(250,204,21,1)]"
              loading="lazy"
            />
            <h1 className="text-xl font-orbitron font-extrabold text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.7)] transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(250,204,21,1)]">
              M2A <span className="text-white">Automation</span>
            </h1>
          </div>

          {/* === MENU NAVIGATION === */}
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

          {/* === BOUTON MOBILE === */}
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

      {/* === OVERLAY MOBILE === */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
            isMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* === MENU MOBILE (corrigé) === */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-yellow-500/20 py-6 z-50 transition-all duration-300 transform ${
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
              className={`text-white hover:text-yellow-500 transition-all duration-300 font-medium text-left
                         hover:bg-black/30 hover:pl-4 rounded-lg py-2 px-2 focus:outline-none focus:ring-2
                         focus:ring-yellow-500 focus:ring-opacity-50 animate__animated ${
                           isMenuOpen
                             ? 'animate__fadeInLeft animate__delay-' + (index + 1) + '00ms'
                             : ''
                         }`}
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
