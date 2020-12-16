import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  debug: true,
  defaultNS: 'translations',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  lng: 'en',
  ns: ['translations'],
  resources: { en: { translations: {} } }
});

export default i18n;
