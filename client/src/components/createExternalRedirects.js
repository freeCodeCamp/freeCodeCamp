import envData from '../../../config/env.json';

const { forumLocation } = envData;

const createExternalRedirect = (page, { clientLocale }) => {
  // Handle Chinese
  if (clientLocale === 'chinese' || clientLocale === 'chinese-traditional') {
    return `https://chinese.freecodecamp.org/${page}`;
  }

  // Handle Others
  const isNotEnglish = clientLocale !== 'english';
  if (page === 'forum') {
    return `${forumLocation}/${isNotEnglish ? 'c/' + clientLocale + '/' : ''}`;
  }
  return `https://www.freecodecamp.org/${
    isNotEnglish ? clientLocale + '/news' : 'news'
  }`;
};

export default createExternalRedirect;
