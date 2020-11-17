import i18next from 'i18next';

const config = require('../config/env');
const { availableLangs } = require('./allLangs');

// maybe loop over the available languages here
// for the resources object?

i18next.init({
  fallbackLng: 'english',
  lng: config.locale,
  resources: {
    english: {
      translations: require('./locales/english/translation.json')
    },
    espanol: {
      translations: require('./locales/espanol/translation.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: config.environment === 'development',
  interpolation: {
    escapeValue: false
  },
  react: {
    wait: true
  }
});

// maybe change this to the available languages as well
i18next.languages = availableLangs.client;

export default i18next;
