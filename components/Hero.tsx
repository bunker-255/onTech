import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, ArrowLeft, ChevronDown, ShieldCheck } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const Hero: React.FC = () => {
  const { content, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div id="home" className="relative h-screen min-h-[800px] flex items-center bg-white overflow-hidden">
      
      {/* Background Image Split */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-full lg:w-1/2 bg-slate-50"></div>
        <div className="hidden lg:block w-1/2 relative bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
            alt="Server Room" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent opacity-90"></div>
          {/* Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
      </div>

      {/* Mobile Background Overlay */}
      <div className="lg:hidden absolute inset-0 bg-slate-900/90 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
            alt="Server Room" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-3/5">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-bold tracking-wide uppercase mb-6 border border-brand-200">
               <ShieldCheck size={16} />
               <span>Licensed Installers</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 lg:text-slate-900 max-lg:text-white leading-[1.1] mb-8">
              {content.hero.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                {content.hero.highlight}
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 lg:text-slate-600 max-lg:text-slate-300 font-medium leading-relaxed max-w-xl mb-10 border-l-4 border-brand-500 pl-6">
              {content.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-600 rounded-lg hover:bg-brand-700 shadow-xl shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-1"
              >
                <span>{content.hero.cta}</span>
                <ArrowIcon className="ml-2 rtl:mr-2 rtl:ml-0 w-5 h-5" />
              </a>
              <a
                 href="#services"
                 onClick={(e) => scrollToSection(e, '#services')}
                 className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 max-lg:text-white transition-all duration-200 bg-white max-lg:bg-white/10 border border-slate-200 max-lg:border-white/20 rounded-lg hover:bg-slate-50 max-lg:hover:bg-white/20"
              >
                 {content.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 opacity-50">
        <ChevronDown className="text-slate-400 max-lg:text-white" size={32} />
      </div>
    </div>
  );
};

export default Hero;