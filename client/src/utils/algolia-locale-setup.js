import envData from '../../../config/env.json';

const { clientLocale } = envData;

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
  }
};

export const newsIndex = algoliaIndices[clientLocale].name;
export const searchPageUrl = algoliaIndices[clientLocale].searchPage;
