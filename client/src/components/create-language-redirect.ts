const createLanguageRedirect = ({
  clientLocale,
  lang
}: {
  clientLocale: string;
  lang: string;
}): string => {
  // return early if requesting the same page
  if (clientLocale === lang) return window?.location.toString();

  const pathArray = window?.location?.pathname?.split('/');
  const path = pathArray
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
