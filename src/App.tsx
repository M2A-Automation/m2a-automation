import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientsBanner from './components/ClientsBanner';
import Differentiation from './components/Differentiation';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <ClientsBanner />
      <Differentiation />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;