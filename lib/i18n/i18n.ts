import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './en';

i18n.use(initReactI18next).init({
  resources: {
    en: english,
  },
  lng: 'en', 
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
  defaultNS: 'en',
});

export default i18n;
