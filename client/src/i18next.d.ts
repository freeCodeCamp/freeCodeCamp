import 'i18next';
import type intro from '../i18n/locales/english/intro.json';
import type links from '../i18n/locales/english/links.json';
import type metaTags from '../i18n/locales/english/meta-tags.json';
import type motivation from '../i18n/locales/english/motivation.json';
import type searchBar from '../i18n/locales/english/search-bar.json';
import type translations from '../i18n/locales/english/translations.json';
import type trending from '../i18n/locales/english/trending.json';

// This should not be necessary when upgrading to v23.0.0
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translations';
    enableSelector: 'optimize';
    returnNull: false;
    resources: {
      intro: typeof intro;
      links: typeof links;
      metaTags: typeof metaTags;
      motivation: typeof motivation;
      searchBar: typeof searchBar;
      translations: typeof translations;
      trending: typeof trending;
    };
  }
}
