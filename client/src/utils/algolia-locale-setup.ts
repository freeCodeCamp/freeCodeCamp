import envData from '../../../config/env.json';

const { clientLocale } = envData as {
  clientLocale: keyof typeof algoliaIndices;
};

const algoliaIndices = {
  english: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  },
  espanol: {
    name: 'news-es',
    searchPage: 'https://www.freecodecamp.org/espanol/news/search/'
  },
  chinese: {
    name: 'news-zh',
    searchPage: 'https://chinese.freecodecamp.org/news/search/'
  },
  'chinese-traditional': {
    name: 'news-zh',
    searchPage: 'https://chinese.freecodecamp.org/news/search'
  },
  // TODO: Replace with i18n pages when shipped
  italian: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  },
  portuguese: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  }
};

export const newsIndex = algoliaIndices[clientLocale].name;
export const searchPageUrl = algoliaIndices[clientLocale].searchPage;
