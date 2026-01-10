import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const { content } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-32 bg-slate-900 text-white overflow-hidden">
      {/* Map Background Concept */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" alt="World Map" className="w-full h-full object-cover grayscale" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Info Side */}
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">{content.contact.title}</h2>
            <p className="text-xl text-slate-400 mb-12 font-light max-w-md border-l-4 border-brand-500 pl-6 rtl:pl-0 rtl:border-l-0 rtl:border-r-4 rtl:pr-6">
              {content.contact.subtitle}
            </p>

            <div className="space-y-10">
              <a href="tel:+972501234567" className="group flex items-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div className="ml-6 rtl:ml-0 rtl:mr-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">Call Us</h3>
                  <p className="mt-1 text-slate-400 text-lg">+972 50-123-4567</p>
                </div>
                <ArrowRight className="ml-auto text-white/20 group-hover:text-white group-hover:translate-x-2 transition-all rtl:mr-auto rtl:ml-0 rtl:group-hover:-translate-x-2" />
              </a>

              <a href="mailto:info@ontech.co.il" className="group flex items-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div className="ml-6 rtl:ml-0 rtl:mr-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">Email Us</h3>
                  <p className="mt-1 text-slate-400 text-lg">info@ontech-israel.com</p>
                </div>
                <ArrowRight className="ml-auto text-white/20 group-hover:text-white group-hover:translate-x-2 transition-all rtl:mr-auto rtl:ml-0 rtl:group-hover:-translate-x-2" />
              </a>

              <div className="group flex items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400">
                  <MapPin size={28} />
                </div>
                <div className="ml-6 rtl:ml-0 rtl:mr-6">
                  <h3 className="text-lg font-bold text-white">Main Office</h3>
                  <p className="mt-1 text-slate-400 text-lg">Tel Aviv, Israel</p>
                  <p className="text-sm text-brand-500 font-medium mt-1 uppercase tracking-wider">Serving Nationwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative animate-fade-up delay-200">
            {/* Glow behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-purple-600 rounded-3xl blur opacity-25"></div>
            
            <div className="relative bg-slate-950/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6 animate-bounce">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-400 max-w-xs mx-auto">{content.contact.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder={content.contact.namePlaceholder}
                        className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all focus:bg-slate-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-300 ml-1">Phone</label>
                       <input
                        type="tel"
                        id="phone"
                        placeholder={content.contact.phonePlaceholder}
                        className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all focus:bg-slate-900"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder={content.contact.emailPlaceholder}
                      className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all focus:bg-slate-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder={content.contact.messagePlaceholder}
                      className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-600 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none focus:bg-slate-900"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full group bg-gradient-to-r from-brand-600 to-brand-500 text-white font-bold py-5 rounded-xl hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center text-lg"
                  >
                    {content.contact.submitButton}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 rtl:mr-2 rtl:ml-0 rtl:group-hover:-translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;