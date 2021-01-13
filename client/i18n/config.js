import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const { environment, clientLocale } = require('../config/env');
const { i18nextCodes } = require('./allLangs');

const i18nextCode = i18nextCodes[clientLocale];

i18n.use(initReactI18next).init({
  fallbackLng: i18nextCode,
  lng: i18nextCode,
  // we only load one language since each language will have it's own server
  resources: {
    [i18nextCode]: {
      translations: require(`./locales/${clientLocale}/translations.json`),
      trending: require(`./locales/${clientLocale}/trending.json`),
      intro: require(`./locales/${clientLocale}/intro.json`)
    }
  },
  ns: ['translations', 'trending', 'intro'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: environment === 'development',
  interpolation: {
    escapeValue: false
  },
  react: {
    wait: true
  }
});

i18n.languages = clientLocale;

export default i18n;
