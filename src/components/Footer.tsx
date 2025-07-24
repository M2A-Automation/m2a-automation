import React from 'react';
import { Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et signature */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/Logo Initiales Nominatif Moderne Minimaliste Noir Coloré.png" 
                alt="M2A Automation Logo" 
               className="h-16 w-auto bg-white rounded-lg p-2 shadow-lg"
              />
              <div className="ml-2">
                <div className="text-white font-orbitron font-bold text-xl tracking-wider">AUTOMATION</div>
                <div className="text-yellow-500 text-xs font-medium">SOLUTIONS INDUSTRIELLES</div>
              </div>
            </div>
            <p className="text-gray-400 italic text-lg mb-4">
              « Automatiser mieux, c'est automatiser juste. »
            </p>
            <p className="text-gray-500 text-sm">
              Solutions d'automatisation industrielle en Tunisie
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-orbitron font-bold text-lg mb-4">Nos Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">Automatisation industrielle</li>
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">Supervision SCADA</li>
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">Maintenance préventive</li>
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">Intégration système</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-orbitron font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <a href="mailto:contact@m2a-automation.com" className="hover:text-yellow-500 transition-colors">
                  contact@m2a-automation.com
                </a>
              </div>
              <p>+216 XX XXX XXX</p>
              <p>Tunis, Tunisie</p>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 M2A Automation. Tous droits réservés. | Automatisation industrielle en Tunisie
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;