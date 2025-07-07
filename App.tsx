import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProcessAndPricing from './components/ProcessAndPricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Favicon from 'react-favicon';
import favIconUrl from './favicon.ico'; // Adjust the path as necessary

const App: React.FC = () => {
  return (
    <div className="bg-[#FDFBF7] text-gray-800 antialiased">
      <Favicon url={`${favIconUrl}`} />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ProcessAndPricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
