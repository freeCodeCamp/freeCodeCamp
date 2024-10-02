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

  const hostTail = window?.location?.host;
  const nextLocation = `${window?.location?.protocol}//${hostTail}`;

  if (lang === 'english') return `${nextLocation}/${path}`;

  return `${nextLocation}/${lang}/${path}`;
};

export default createLanguageRedirect;
