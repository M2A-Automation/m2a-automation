import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    societe: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourrez intégrer l'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message ! Nous vous recontacterons rapidement.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@m2a-automation.com",
      href: "mailto:contact@m2a-automation.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+216 XX XXX XXX",
      href: "tel:+216XXXXXXX"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Tunis, Tunisie",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Contactez <span className="text-yellow-500">M2A Automation</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            15 ans d'expérience à votre service. Parlons de votre projet d'automatisation !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center space-x-4 p-4 bg-gray-900 border border-gray-700 rounded-xl transition-all duration-300 hover:border-yellow-500 hover:bg-gray-800"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.title}</p>
                      <p className="text-white font-medium group-hover:text-yellow-500 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-4">
                <MessageSquare className="w-8 h-8" />
                <div>
                  <h4 className="font-bold text-lg">Contact WhatsApp</h4>
                  <p className="opacity-90">Prise de contact immédiate</p>
                </div>
              </div>
              <button className="mt-4 bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Ouvrir WhatsApp
              </button>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
              Demande de devis
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Société *
                  </label>
                  <input
                    type="text"
                    name="societe"
                    value={formData.societe}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                    placeholder="Nom de votre société"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                  placeholder="votre.email@entreprise.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors resize-none"
                  placeholder="Décrivez votre projet d'automatisation..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:from-yellow-400 hover:to-yellow-300 hover:shadow-lg hover:shadow-yellow-500/25 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer la demande</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;