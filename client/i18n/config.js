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
<<<<<<< HEAD
      translations: require(`./locales/${clientLocale}/translations.json`)
    }
  },
  ns: ['translations'],
=======
      translations: require(`./locales/${clientLocale}/translations.json`),
      trending: require(`./locales/${clientLocale}/trending.json`)
    }
  },
  ns: ['translations', 'trending'],
>>>>>>> ee868f0a7ba6a3a6b49ec30f9a1214d97850383c
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
