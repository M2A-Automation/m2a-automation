import React from 'react';
import { Clock, Award, Monitor, User } from 'lucide-react';

const Differentiation = () => {
  const advantages = [
    {
      icon: Clock,
      title: "15 ans d'expérience",
      description: "Expert en automatisme et systèmes industriels avec une solide expérience en gestion de projets internationaux"
    },
    {
      icon: Award,
      title: "Expertise multi-constructeurs",
      description: "Maîtrise complète Siemens (TIA Portal, STEP 7), Schneider (Unity Pro, PL7) et Rockwell (RSLogix)"
    },
    {
      icon: Monitor,
      title: "Supervision & Motion Control",
      description: "WinCC, FactoryTalk, Vijeo Designer et solutions de motion control (SIMOTION, Altivar, PowerFlex)"
    },
    {
      icon: User,
      title: "Formation & Support",
      description: "Accompagnement des équipes techniques, rédaction de documentation et formation utilisateurs"
    }
  ];

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Pourquoi choisir <span className="text-yellow-500">M2A Automation</span> ?
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-700 rounded-xl p-8 text-center transition-all duration-500 hover:border-yellow-500 hover:bg-gray-800 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="w-8 h-8 text-black" />
              </div>
              
              <h3 className="text-xl font-orbitron font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                {advantage.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;