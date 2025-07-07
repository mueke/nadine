import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80; // from .scroll-mt-20 (5rem = 80px)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
      window.scrollTo({
           top: offsetPosition,
           behavior: "smooth"
      });
    }
  };

  const NavLinks: React.FC = () => (
    <>
      {NAV_LINKS.map((link: NavLink) => (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleNavClick(e, link.href)}
          className={`${isScrolled || isMobileMenuOpen ? 'text-[#004d40]' : 'text-white'} hover:text-[#004d40] transition-colors duration-300 py-2 md:py-0`}
        >
          {link.name}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : ''}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => handleNavClick(e, '#')} className={`text-xl font-bold ${isScrolled || isMobileMenuOpen ? 'text-[#004d40]' : 'text-white' }`}>
          Nadine Eichinger
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-[#004d40] focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white pb-4">
          <nav className="flex flex-col items-center space-y-4">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
