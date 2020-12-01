import i18next from 'i18next';

const { environment, clientLocale } = require('../config/env');

i18next.init({
  fallbackLng: clientLocale,
  lng: clientLocale,
  // we only load one language since each language will have it's own server
  resources: {
    [clientLocale]: {
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
