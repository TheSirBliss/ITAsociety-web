import React, { useState, useEffect } from 'react';
import { Logo } from './UI'; // <-- IMPORT CORRETTO

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#servizi', label: 'Servizi' },
    { href: '#chisiamo', label: 'Chi Siamo' },
    { href: '#contatti', label: 'Contatti' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm font-medium uppercase tracking-wider">{link.label}</a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a href="#contatti" className="cta-button">Portaci la tua Sfida</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">{link.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
