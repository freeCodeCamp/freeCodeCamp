import { WindowLocation } from '@reach/router';
import { i18nConstants } from '../../../config/constants';

const splitPath = (pathname: string): string[] =>
  pathname.split('/').filter(x => x);

export const isChallenge = (pathname: string): boolean => {
  const pathArray = splitPath(pathname);
  return (
    // learn/<superBlock>/<block>/<challenge>
    (pathArray.length === 4 && pathArray[0] === 'learn') ||
    // learn/<year>/<superBlock>/<block>/<challenge>
    (pathArray.length === 5 && pathArray[0] === 'learn') ||
    // <i18n>/learn/<superBlock>/<block>/<challenge>
    (pathArray.length === 5 && pathArray[1] === 'learn') ||
    // <i18n>/learn/<year>/<superBlock>/<block>/<challenge>
    (pathArray.length === 6 && pathArray[1] === 'learn')
  );
};

export const isLanding = (pathname: string): boolean => {
  const pathArray = splitPath(pathname);
  const isEnglishLanding = pathArray.length === 0;
  const isI18Landing =
    pathArray.length === 1 && i18nConstants.includes(pathArray[0]);
  return isEnglishLanding || isI18Landing;
};

export const isLocationSuperBlock = (
  location: WindowLocation | undefined
): boolean => {
  return /^\/learn\/[\w-]+\/$/.test(location?.pathname ?? '');
};
