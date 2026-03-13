import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Activity, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
            <div className="w-8 h-8 bg-slate-900 rounded-lg text-brand-500 flex items-center justify-center mr-3 rtl:ml-3 border border-slate-800">
               <Activity size={18} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold text-slate-200 tracking-tight">
              on<span className="text-brand-600">Tech</span>
            </span>
        </div>
        
        <div className="text-sm font-medium text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} onTech Israel. {content.footer.rights}</p>
          <div className="flex flex-wrap justify-center md:justify-end items-center mt-4 gap-4">
             <span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">Privacy Policy</span>
             <span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">Terms of Service</span>
             
             {/* BUNKER-255 Footer Button */}
             <a
              href="https://bunker-255.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 hover:border-slate-700 rounded-full transition-all duration-300 md:ml-2 rtl:md:ml-0 rtl:md:mr-2"
            >
              <span>BUNKER-255</span>
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;