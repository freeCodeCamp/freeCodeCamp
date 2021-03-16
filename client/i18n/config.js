import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const envData = require('../../config/env.json');
const { i18nextCodes } = require('../../config/i18n/all-langs');

const { clientLocale } = envData;

const i18nextCode = i18nextCodes[clientLocale];

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: i18nextCode,
  // we only load one language since each language will have it's own server
  resources: {
    [i18nextCode]: {
      translations: require(`./locales/${clientLocale}/translations.json`),
      trending: require(`./locales/${clientLocale}/trending.json`),
      intro: require(`./locales/${clientLocale}/intro.json`),
      metaTags: require(`./locales/${clientLocale}/meta-tags.json`),
      links: require(`./locales/${clientLocale}/links.json`)
    },
    en: {
      translations: require('./locales/english/translations.json'),
      trending: require('./locales/english/trending.json'),
      intro: require('./locales/english/intro.json'),
      metaTags: require('./locales/english/meta-tags.json'),
      links: require('./locales/english/links.json')
    }
  },
  ns: ['translations', 'trending', 'intro', 'metaTags', 'links'],
  defaultNS: 'translations',
  returnObjects: true,
  // Uncomment the next line for debug logging
  // debug: true,
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: true
  }
});

i18n.languages = clientLocale;

export default i18n;
