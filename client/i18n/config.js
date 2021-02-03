import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { clientLocale } from '../../config/env.json';
import { i18nextCodes } from './allLangs';

const i18nextCode = i18nextCodes[clientLocale];

i18n.use(initReactI18next).init({
  fallbackLng: i18nextCode,
  lng: i18nextCode,
  // we only load one language since each language will have it's own server
  resources: {
    [i18nextCode]: {
      translations: require(`./locales/${clientLocale}/translations.json`),
      trending: require(`./locales/${clientLocale}/trending.json`),
      intro: require(`./locales/${clientLocale}/intro.json`),
      metaTags: require(`./locales/${clientLocale}/meta-tags.json`)
    }
  },
  ns: ['translations', 'trending', 'intro', 'metaTags'],
  defaultNS: 'translations',
  returnObjects: true,
  // Uncomment the next line for debug logging
  // debug: true,
  interpolation: {
    escapeValue: false
  },
  react: {
    wait: true
  }
});

i18n.languages = clientLocale;

export default i18n;
