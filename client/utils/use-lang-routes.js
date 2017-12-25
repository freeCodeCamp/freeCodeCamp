import { addLang, getLangFromPath } from '../../common/app/utils/lang.js';

function addLangToLocation(location, lang) {
  if (!location) {
    return location;
  }
  if (typeof location === 'string') {
    return addLang(location, lang);
  }
  return {
    ...location,
    pathname: addLang(location.pathname, lang)
  };
}

function getLangFromLocation(location) {
  if (!location) {
    return location;
  }
  if (typeof location === 'string') {
    return getLangFromPath(location);
  }
  return getLangFromPath(location.pathname);
}

export default function useLangRoutes(createHistory, primaryLang) {
  return (options = {}) => {
    let lang = primaryLang || 'en';
    const history = createHistory(options);
    const unsubscribeFromHistory = history.listen(nextLocation => {
      lang = getLangFromLocation(nextLocation);
    });
    const push = location => history.push(addLangToLocation(location, lang));
    const replace = location => history.replace(
      addLangToLocation(location, lang)
    );
    return {
      ...history,
      push,
      replace,
      unsubscribe() { unsubscribeFromHistory(); }
    };
  };
}
