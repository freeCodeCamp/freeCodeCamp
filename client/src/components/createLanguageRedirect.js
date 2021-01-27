import { homeLocation, chineseHome } from '../../../config/env.json';

const createLanguageRedirect = lang => {
  const path = window.location.pathname;
  if (lang === 'chinese') return `${chineseHome}${path}`;
  if (lang === 'english') return `${homeLocation}${path}`;
  return `${homeLocation}/${lang}${path}`;
};

export default createLanguageRedirect;
