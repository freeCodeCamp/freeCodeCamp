import { i18nConstants } from '../../../config/constants';

const splitPath = (pathname: string): string[] =>
  pathname.split('/').filter(x => x);

export const isChallenge = (pathname: string): boolean => {
  const pathArray = splitPath(pathname);
  return (
    (pathArray.length === 4 && pathArray[0]) === 'learn' ||
    (pathArray.length === 5 && pathArray[1]) === 'learn'
  );
};

export const isLanding = (): boolean => {
  if (window) {
    const pathArray = splitPath(window.location.pathname);
    const isEnglishLanding = pathArray.length === 0;
    const isI18Landing =
      pathArray.length === 1 && i18nConstants.includes(pathArray[0]);
    return isEnglishLanding || isI18Landing;
  } else return false;
};
