import React from 'react';
import { ExternalLink, Factory, Gauge, Database } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      icon: Factory,
      title: "Machines spéciales automatisées",
      description: "Mise en production de machines spéciales avec programmation automates et développement d'interfaces HMI personnalisées.",
      image: "https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["TIA Portal", "STEP 7", "WinCC flexible"]
    },
    {
      icon: Gauge,
      title: "Vision industrielle & Contrôle",
      description: "Développement de systèmes de vision industrielle avec PulSoft S10 pour le contrôle qualité automatisé.",
      image: "https://images.pexels.com/photos/3846050/pexels-photo-3846050.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["PulSoft S10", "Unity Pro", "Vijeo Designer"]
    },
    {
      icon: Database,
      title: "Motion Control & Variateurs",
      description: "Intégration de solutions de motion control avec variateurs Altivar, PowerFlex et systèmes SIMOTION Scout.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["SIMOTION Scout", "Altivar", "PowerFlex"]
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-yellow-500 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Nos <span className="text-yellow-500">Réalisations</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations marquantes dans l'automatisation industrielle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden transition-all duration-500 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-black" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full border border-gray-600 group-hover:border-yellow-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center text-yellow-500 hover:text-yellow-400 transition-colors group-hover:translate-x-2 duration-300">
                  <span className="mr-2 font-medium">Voir les détails</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;