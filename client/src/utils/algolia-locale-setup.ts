import envData from '../../config/env.json';

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
    searchPage: 'https://www.freecodecamp.org/chinese/news/search/'
  },
  'chinese-traditional': {
    name: 'news-zh',
    searchPage: 'https://www.freecodecamp.org/chinese/news/search/'
  },
  italian: {
    name: 'news-it',
    searchPage: 'https://www.freecodecamp.org/italian/news/search/'
  },
  portuguese: {
    name: 'news-pt-br',
    searchPage: 'https://www.freecodecamp.org/portuguese/news/search/'
  },
  ukrainian: {
    name: 'news-uk',
    searchPage: 'https://www.freecodecamp.org/ukrainian/news/search/'
  },
  japanese: {
    name: 'news-ja',
    searchPage: 'https://www.freecodecamp.org/japanese/news/search/'
  },
  korean: {
    name: 'news-ko',
    searchPage: 'https://www.freecodecamp.org/korean/news/search/'
  },
  // Note: We don't build News for the locales below, so show English
  // hits and use the English search page
  german: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  },
  swahili: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  }
};

export const newsIndex = algoliaIndices[clientLocale].name;
export const searchPageUrl = algoliaIndices[clientLocale].searchPage;
