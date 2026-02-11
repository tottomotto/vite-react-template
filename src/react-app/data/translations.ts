export type Language = 'bg' | 'en';

export interface Translations {
  [key: string]: {
    bg: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.services': { bg: 'Услуги', en: 'Services' },
  'nav.about': { bg: 'За нас', en: 'About Us' },
  'nav.coverage': { bg: 'Покритие', en: 'Coverage' },
  'nav.contact': { bg: 'Контакт', en: 'Contact' },

  // Hero
  'hero.tagline': {
    bg: 'Бърза и надеждна линейка в София',
    en: 'Fast and Reliable Ambulance in Sofia',
  },
  'hero.subtitle': {
    bg: 'Денонощна спешна медицинска помощ',
    en: '24/7 Emergency Medical Services',
  },
  'hero.callNow': { bg: 'Обадете се сега', en: 'Call Now' },

  // Services
  'services.title': { bg: 'Нашите услуги', en: 'Our Services' },
  'services.emergency.title': { bg: 'Спешна помощ', en: 'Emergency Response' },
  'services.emergency.desc': {
    bg: 'Бързо реагиране при спешни медицински случаи',
    en: 'Rapid response for medical emergencies',
  },
  'services.transport.title': { bg: 'Медицински транспорт', en: 'Medical Transport' },
  'services.transport.desc': {
    bg: 'Безопасен транспорт на пациенти между медицински заведения',
    en: 'Safe patient transport between medical facilities',
  },
  'services.event.title': { bg: 'Събития', en: 'Event Coverage' },
  'services.event.desc': {
    bg: 'Медицинско осигуряване на събития и мероприятия',
    en: 'Medical standby for events and gatherings',
  },

  // About
  'about.title': { bg: 'За Garrison', en: 'About Garrison' },
  'about.description': {
    bg: 'Garrison е водеща частна линейка в София, предоставяща професионални спешни медицински услуги. Нашият екип от квалифицирани медицински специалисти е на разположение 24/7.',
    en: 'Garrison is a leading private ambulance service in Sofia, providing professional emergency medical services. Our team of qualified medical professionals is available 24/7.',
  },

  // Coverage
  'coverage.title': { bg: 'Зона на покритие', en: 'Coverage Area' },
  'coverage.description': {
    bg: 'Обслужваме София и околностите',
    en: 'Serving Sofia and surrounding areas',
  },

  // Contact
  'contact.title': { bg: 'Свържете се с нас', en: 'Contact Us' },
  'contact.phone': { bg: 'Телефон', en: 'Phone' },
  'contact.available': { bg: 'Денонощно на линия', en: 'Available 24/7' },

  // Footer
  'footer.copyright': {
    bg: '© 2024 Garrison. Всички права запазени.',
    en: '© 2024 Garrison. All rights reserved.',
  },

  // Accessibility
  'a11y.callGarrison': {
    bg: 'Обадете се на Garrison Линейка',
    en: 'Call Garrison Ambulance',
  },
  'a11y.openWhatsApp': {
    bg: 'Отворете WhatsApp чат с Garrison',
    en: 'Open WhatsApp chat with Garrison',
  },
  'a11y.openViber': {
    bg: 'Отворете Viber чат с Garrison',
    en: 'Open Viber chat with Garrison',
  },
  'a11y.skipToContent': {
    bg: 'Преминете към основното съдържание',
    en: 'Skip to main content',
  },
  'a11y.switchLanguage': {
    bg: 'Превключи на английски',
    en: 'Switch to Bulgarian',
  },

  // SEO
  'seo.title': {
    bg: 'Garrison | Частна линейка София | Спешна помощ 24/7',
    en: 'Garrison | Private Ambulance Sofia | Emergency Services 24/7',
  },
  'seo.description': {
    bg: 'Garrison - водеща частна линейка в София. Денонощна спешна медицинска помощ, медицински транспорт. Обадете се: +359 879 923 096 / +359 879 855 035',
    en: 'Garrison - leading private ambulance in Sofia, Bulgaria. 24/7 emergency medical services, patient transport. Call: +359 879 923 096 / +359 879 855 035',
  },
};
