import React from 'react';
import { Settings, Cpu, Shield, Wrench, Monitor } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Études & Programmation",
      description: "Études de projets électriques et d'automatisme, conception de programmes pour automates, IHM et SCADA",
      features: ["TIA Portal & STEP 7 (Siemens)", "Unity Pro & PL7 (Schneider)", "RSLogix (Rockwell)", "SEE Electrical (DAO)"]
    },
    {
      icon: Monitor,
      title: "Supervision & Vision",
      description: "Développement de solutions de supervision et systèmes de vision industrielle pour le contrôle qualité",
      features: ["WinCC flexible (Siemens)", "Vijeo Designer (Schneider)", "FactoryTalk (Rockwell)", "PulSoft S10 (Vision)"]
    },
    {
      icon: Shield,
      title: "Mise en service & Dépannage",
      description: "Mise en production de machines spéciales, supervision électrique et dépannage d'installations",
      features: ["Mise en service machines", "Dépannage en production", "Supervision électrique", "Support technique"]
    },
    {
      icon: Wrench,
      title: "Réseaux & Communication",
      description: "Expertise en réseaux industriels et systèmes de communication pour l'intégration complète",
      features: ["PROFIBUS DP & PROFINET", "DeviceNet & ControlNet", "Ethernet & WLAN", "Fibre optique"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Nos <span className="text-yellow-500">Services</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des solutions complètes d'automatisation industrielle adaptées à vos besoins spécifiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 transition-all duration-500 hover:border-yellow-500 hover:bg-gradient-to-br hover:from-yellow-500/10 hover:to-gray-800 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-500 group-hover:text-gray-400 transition-colors">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;