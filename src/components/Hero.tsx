import React from "react";
import Terminal from "./Terminal";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToRealisations = () => {
    const el = document.getElementById("realisations");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-6 text-center">
      
      {/* Fond circuit imprimé animé */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <defs>
            <pattern
              id="circuit-pattern"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 40h120M40 40v120M160 40v120M160 160h-120"
                stroke="#FACC15"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              >
                <animate
                  attributeName="opacity"
                  values="0.2;0.6;0.2"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M80 20v40M80 60h40M120 60v40M120 100h40"
                stroke="#FACC15"
                strokeWidth="1.5"
                fill="none"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.5;0.1"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
              <circle cx="40" cy="40" r="4" fill="#FACC15" opacity="0.6">
                <animate
                  attributeName="r"
                  values="3;6;3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="160" cy="40" r="4" fill="#FACC15" opacity="0.6">
                <animate
                  attributeName="r"
                  values="3;6;3"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Logo + titre */}
      <div className="relative z-10 mb-10 flex flex-col items-center">
        <img
          src="/Logo Initiales Nominatif Moderne Minimaliste Noir Coloré.png"
          alt="M2A Automation Logo"
          className="w-36 md:w-48 mb-6 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(250,204,21,1)]"
        />
        <h1 className="text-5xl md:text-6xl font-orbitron font-extrabold text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(250,204,21,1)] hover:translate-y-[-3px]">
          M2A <span className="text-white">Automation</span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-xl px-2">
          Votre partenaire expert en automatisme industriel, supervision et cybersécurité.
        </p>
      </div>

      {/* Terminal animé */}
      <Terminal />

      {/* Boutons navigation */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 mt-10 w-full max-w-sm justify-center">
        <button
          onClick={scrollToRealisations}
          className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-yellow-500"
          type="button"
        >
          Voir Réalisations
        </button>
        <button
          onClick={scrollToContact}
          className="border-2 border-yellow-400 text-yellow-400 font-bold py-3 px-8 rounded-full shadow-md transition-colors duration-300 hover:bg-yellow-400 hover:text-black"
          type="button"
        >
          Contact
        </button>
      </div>
    </section>
  );
}
