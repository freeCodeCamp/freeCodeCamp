const createLanguageRedirect = ({ clientLocale, lang }) => {
  // return early if requesting the same page
  if (clientLocale === lang) return `${window?.location}`;

  let path = window?.location?.pathname?.split('/');
  path = path
    .filter(item => (item !== clientLocale && item !== lang ? item : ''))
    .join('/');

  const hostTail = window?.location?.host.split('.').slice(1).join('.');
  const nextClient = lang !== 'chinese' ? 'www' : 'chinese';
  const nextLocation = `${window?.location?.protocol}//${nextClient}.${hostTail}`;

  if (lang === 'english' || lang === 'chinese')
    return `${nextLocation}/${path}`;

  return `${nextLocation}/${lang}/${path}`;
};

export default createLanguageRedirect;
