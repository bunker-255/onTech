import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { scrollToSection } from '../utils/scroll';

const Navbar: React.FC = () => {
  const { content } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: content.nav.home, href: '#home' },
    { name: content.nav.services, href: '#services' },
    { name: content.nav.about, href: '#about' },
    { name: content.nav.contact, href: '#contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={handleLogoClick}>
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center mr-3 rtl:ml-3 text-white shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform duration-300">
               <Activity size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tight leading-none ${scrolled ? 'text-white' : 'text-white'}`}>
                on<span className="text-brand-400">Tech</span>
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${scrolled ? 'text-slate-400' : 'text-slate-300'}`}>
                Solutions
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 rtl:space-x-reverse bg-slate-900/50 backdrop-blur-md rounded-full px-6 py-2 border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-brand-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rtl:origin-right"></span>
              </a>
            ))}
            <div className="w-px h-5 bg-white/20 mx-4"></div>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-400 focus:outline-none bg-slate-800/50 p-2 rounded-lg backdrop-blur-sm"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-nav border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  scrollToSection(e, link.href);
                }}
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;