import React from 'react';

const ClientsBanner = () => {
  const clients = [
    {
      name: 'McPhy Energy',
      logo: '/McPhy Logo.png'
    },
    {
      name: 'Airbus',
      logo: '/Airbus Logo.png',
      isSpecial: true
    },
    {
      name: 'Vinci',
      logo: '/VINCI Logo.png'
    },
    {
      name: 'Actemium',
      logo: '/Actemium Logo.PNG'
    },
    {
      name: 'Storengy',
      logo: '/Storengy Logo.PNG'
    },
    {
      name: 'Beumer Group',
      logo: '/Beumer Group Logo.png'
    },
    {
      name: 'Michelin',
      logo: '/Michelin Logo.png'
    }
  ];

  return (
    <section className="py-12 bg-gray-800 border-y border-gray-700 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm font-medium tracking-wider uppercase">
            Ils nous font confiance
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll">
            {/* Premier set de logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className={`flex-shrink-0 mx-8 flex items-center justify-center h-20 w-48 group cursor-pointer ${
                  client.name === 'Airbus' ? 'bg-white rounded-xl p-4' : ''
                }`}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className={`object-contain group-hover:scale-110 transition-all duration-500 ease-out ${
                    client.name === 'Airbus' ? 'h-12 w-auto' : 'h-12 opacity-70 group-hover:opacity-100'
                  }`}
                />
              </div>
            ))}
            
            {/* Duplication pour l'effet de boucle infinie */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className={`flex-shrink-0 mx-8 flex items-center justify-center h-20 w-48 group cursor-pointer ${
                  client.name === 'Airbus' ? 'bg-white rounded-xl p-4' : ''
                }`}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className={`object-contain group-hover:scale-110 transition-all duration-500 ease-out ${
                    client.name === 'Airbus' ? 'h-12 w-auto' : 'h-12 opacity-70 group-hover:opacity-100'
                  }`}
                />
              </div>
            ))}
          </div>
          
          {/* Gradients de fondu sur les côtés */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-800 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-800 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientsBanner;