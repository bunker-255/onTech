import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Server, Zap, Cable, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceData } from '../types';
import { scrollToSection } from '../utils/scroll';

const iconMap = {
  Server: Server,
  Zap: Zap,
  Cable: Cable,
  ShieldCheck: ShieldCheck,
};

const Services: React.FC = () => {
  const { content, dir } = useLanguage();

  return (
    <section id="services" className="py-32 bg-tech-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
          <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-3">
            What We Do
          </h2>
          <p className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            {content.services.title}
          </p>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            {content.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.items.map((service: ServiceData, index) => {
            const Icon = iconMap[service.iconName];
            return (
              <a
                href="#contact"
                key={service.id}
                onClick={(e) => scrollToSection(e, '#contact')}
                className={`group relative bg-tech-surface p-8 rounded-2xl border border-white/5 hover:border-brand-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] animate-fade-up block`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-800/80 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-500 border border-white/5 group-hover:border-brand-500/50 shadow-lg">
                    <Icon className="w-8 h-8 text-brand-400 group-hover:text-brand-200 transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-brand-400 font-semibold text-sm tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>{content.services.learnMore}</span>
                    <ArrowRight className={`w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 transform transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1`} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;