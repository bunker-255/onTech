import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Activity } from 'lucide-react';

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
          <div className="flex justify-center md:justify-end mt-2 space-x-4 rtl:space-x-reverse opacity-50">
             {/* Static text for now to avoid broken link confusion */}
             <span>Privacy Policy</span>
             <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;