export type Language = 'en' | 'ru' | 'he';

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  iconName: 'Server' | 'Zap' | 'Cable' | 'ShieldCheck';
}

export interface Content {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    learnMore: string;
    items: ServiceData[];
  };
  about: {
    title: string;
    description: string;
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
    stat3: string;
    stat3Label: string;
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submitButton: string;
    successMessage: string;
    address: string;
  };
  footer: {
    rights: string;
    location: string;
  };
}