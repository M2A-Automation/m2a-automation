import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, Eye } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  
  const words = ['Automatisme', 'Supervision', 'Informatique', 'Industrielle'];
  const terminalSequence = [
    '> Initialisation du système…',
    '> Chargement des modules SCADA…',
    '> Connexion aux automates…',
    '> Prêt.'
  ];

  // Effet typewriter pour les mots-clés
  useEffect(() => {
    let index = 0;
    const currentWord = words[currentWordIndex];
    
    const timer = setInterval(() => {
      if (index <= currentWord.length) {
        setTypedText(currentWord.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentWordIndex]);

  // Animation du terminal
  useEffect(() => {
    const timer = setTimeout(() => {
      terminalSequence.forEach((line, index) => {
        setTimeout(() => {
          setTerminalLines(prev => [...prev, line]);
        }, index * 800);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('realisations');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fond technique animé sophistiqué */}
      <div className="absolute inset-0 bg-black">
        {/* Circuit imprimé de fond */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-advanced" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M40 40h120M40 40v120M160 40v120M160 160h-120" stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.4">
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite"/>
                </path>
                <path d="M80 20v40M80 60h40M120 60v40M120 100h40" stroke="#FFD700" strokeWidth="1.5" fill="none" opacity="0.3">
                  <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite"/>
                </path>
                <circle cx="40" cy="40" r="4" fill="#FFD700" opacity="0.6">
                  <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="160" cy="40" r="4" fill="#FFD700" opacity="0.6">
                  <animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite"/>
                </circle>
              </pattern>
              <radialGradient id="spotlight" cx="30%" cy="20%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)"/>
                <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-advanced)"/>
            <rect width="100%" height="100%" fill="url(#spotlight)"/>
          </svg>
        </div>

        {/* Effet de bruit numérique */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>

        {/* Image technique en arrière-plan */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Industrial automation background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Logo avec effet de brillance */}
          <div className="flex items-center justify-center mb-8 group">
            <div className="relative">
              <img 
                src="/Logo Initiales Nominatif Moderne Minimaliste Noir Coloré.png" 
                alt="M2A Automation Logo" 
                className="h-32 w-auto bg-white rounded-xl p-4 shadow-2xl transition-all duration-500 group-hover:shadow-yellow-500/30 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Titre principal avec effet hover sophistiqué */}
          <div className="group cursor-default">
            <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white leading-tight transition-all duration-500">
              M2A <span className="text-yellow-500 relative inline-block group-hover:animate-pulse">
                Automation
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-white to-yellow-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></span>
              </span>
            </h1>
          </div>
          
          {/* Sous-titre amélioré */}
          <p className="max-w-2xl mx-auto text-lg text-gray-300 font-light leading-relaxed">
            Votre partenaire pour l'automatisation, la supervision et la transformation digitale de vos sites industriels.
          </p>
          
          {/* Effet typewriter pour les mots-clés */}
          <div className="min-h-[4rem] flex items-center justify-center">
            <div className="text-3xl md:text-4xl font-orbitron font-bold text-white">
              {typedText}
              <span className="animate-pulse text-yellow-500">|</span>
            </div>
          </div>
          
          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button
              onClick={scrollToPortfolio}
              className="group relative bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/40 flex items-center space-x-3"
            >
              <span>Voir nos réalisations</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button
              onClick={scrollToContact}
              className="group relative border-2 border-gray-700 text-white hover:text-yellow-500 hover:border-yellow-500 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Nous contacter</span>
            </button>
          </div>

          {/* Terminal technique */}
          <div className="mt-10 w-full max-w-md mx-auto bg-black bg-opacity-60 border border-yellow-500 rounded-lg px-4 py-3 text-left text-lime-400 font-mono text-sm shadow-inner backdrop-blur-sm">
            {terminalLines.map((line, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.8}s` }}>
                {line}
              </div>
            ))}
            {terminalLines.length === 0 && (
              <div className="text-gray-500">Initialisation...</div>
            )}
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="w-8 h-12 border-2 border-yellow-500 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
            <div className="w-2 h-4 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;