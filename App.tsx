import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;