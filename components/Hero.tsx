import React from 'react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen min-h-[600px] flex items-center justify-center relative text-white text-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <img 
        src={HERO_CONTENT.backgroundImage.src} 
        alt={HERO_CONTENT.backgroundImage.alt} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          {HERO_CONTENT.title}
        </h1>
        <p className="text-lg md:text-2xl font-light" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
          {HERO_CONTENT.subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
