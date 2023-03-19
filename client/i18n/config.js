/* global preval */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translations from './locales/english/translations.json';
import trending from './locales/english/trending.json';
import intro from './locales/english/intro.json';
import metaTags from './locales/english/meta-tags.json';
import links from './locales/english/links.json';

const envData = require('../../config/env.json');
const { i18nextCodes } = require('../../config/i18n');

const { clientLocale } = envData;

const i18nextCode = i18nextCodes[clientLocale];

export const defaultNS = 'translations';

export const resources = {
  [i18nextCode]: {
    translations: preval`
    const envData = require('../../config/env.json');
    const { clientLocale } = envData;
    if (clientLocale !== 'english') {
      module.exports = require('./locales/' + clientLocale + '/translations.json');
    }
  `,
    trending: preval`
    const envData = require('../../config/env.json');
    const { clientLocale } = envData;
    if (clientLocale !== 'english') {
      module.exports = require('./locales/' + clientLocale + '/trending.json');
    }
  `,
    intro: preval`
    const envData = require('../../config/env.json');
    const { clientLocale } = envData;
    if (clientLocale !== 'english') {
      module.exports = require('./locales/' + clientLocale + '/intro.json');
    }
  `,
    metaTags: preval`
    const envData = require('../../config/env.json');
    const { clientLocale } = envData;
    if (clientLocale !== 'english') {
      module.exports = require('./locales/' + clientLocale + '/meta-tags.json');
    }
  `,
    links: preval`
    const envData = require('../../config/env.json');
    const { clientLocale } = envData;
    if (clientLocale !== 'english') {
      module.exports = require('./locales/' + clientLocale + '/links.json');
    }
  `
  },
  en: {
    translations,
    trending,
    intro,
    metaTags,
    links
  }
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: i18nextCode,
  // we only load one language since each language will have it's own server
  // They need to be evaluated ahead of time, to prevent Webpack from bundling
  // the entire locales directory. To avoid double imports when the locale is
  // english, we simply export nothing from the preval
  resources,
  ns: ['translations', 'trending', 'intro', 'metaTags', 'links'],
  defaultNS,
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
