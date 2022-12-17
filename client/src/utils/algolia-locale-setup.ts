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
    name: 'news-pt',
    searchPage: 'https://www.freecodecamp.org/portuguese/news/search/'
  },
  // TODO: Replace with Ukrainian news when we have more useful resources on that instance
  ukrainian: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  },
  japanese: {
    name: 'news-ja',
    searchPage: 'https://www.freecodecamp.org/japanese/news/search/'
  },
  // TODO: Replace with German news when we have more useful resources on that instance
  german: {
    name: 'news',
    searchPage: 'https://www.freecodecamp.org/news/search/'
  },
  arabic: {
    name: 'news-ar',
    searchPage: 'https://www.freecodecamp.org/arabic/news/search/'
  }
};

export const newsIndex = algoliaIndices[clientLocale].name;
export const searchPageUrl = algoliaIndices[clientLocale].searchPage;
