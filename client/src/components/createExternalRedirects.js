import envData from '../../../config/env.json';

const { forumLocation } = envData;

const createExternalRedirect = (page, { clientLocale }) => {
  const isNotEnglish = clientLocale !== 'english';
  if (clientLocale === 'chinese') {
    return `https://chinese.freecodecamp.org/${page}`;
  }
  if (page === 'forum') {
    return `${forumLocation}/${isNotEnglish ? 'c/' + clientLocale + '/' : ''}`;
  }
  return `https://www.freecodecamp.org/${
    isNotEnglish ? clientLocale + '/news' : 'news'
  }`;
};

export default createExternalRedirect;
