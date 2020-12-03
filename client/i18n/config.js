import i18next from 'i18next';

const { environment, clientLocale } = require('../config/env');
const { i18nextCodes } = require('./allLangs');

const i18nextCode = i18nextCodes[clientLocale];

i18next.init({
  fallbackLng: i18nextCode,
  lng: i18nextCode,
  // we only load one language since each language will have it's own server
  resources: {
    [i18nextCode]: {
      translations: require(`./locales/${clientLocale}/translation.json`)
    }
  },
  ns: ['translations'],
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

i18next.languages = clientLocale;

export default i18next;
