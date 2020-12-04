import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  debug: true,
  defaultNS: 'translation',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  lng: 'en',
  ns: ['translation'],
  resources: { en: { translation: {} } }
});

export default i18n;
