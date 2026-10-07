/** @type {(i18n:any,code:import('../TransWithoutContext').ErrorCode,msg?:string, rest?:{[key:string]: any})=>void} */
export const warn = (i18n, code, msg, rest) => {
  const args = [msg, { code, ...(rest || {}) }];
  if (i18n?.services?.logger?.forward) {
    return i18n.services.logger.forward(args, 'warn', 'react-i18next::', true);
  }
  if (isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
  if (i18n?.services?.logger?.warn) {
    i18n.services.logger.warn(...args);
  } else if (console?.warn) {
    console.warn(...args);
  }
};
const alreadyWarned = {};
/** @type {typeof warn} */
export const warnOnce = (i18n, code, msg, rest) => {
  if (isString(msg) && alreadyWarned[msg]) return;
  if (isString(msg)) alreadyWarned[msg] = new Date();
  warn(i18n, code, msg, rest);
};

// not needed right now
//
// export const deprecated = (i18n, ...args) => {
//   if (process && process.env && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
//     if (isString(args[0])) args[0] = `deprecation warning -> ${args[0]}`;
//     warnOnce(i18n, ...args);
//   }
// }

const loadedClb = (i18n, cb) => () => {
  // delay ready if not yet initialized i18n instance
  if (i18n.isInitialized) {
    cb();
  } else {
    const initialized = () => {
      // due to emitter removing issue in i18next we need to delay remove
      setTimeout(() => {
        i18n.off('initialized', initialized);
      }, 0);
      cb();
    };
    i18n.on('initialized', initialized);
  }
};

export const loadNamespaces = (i18n, ns, cb) => {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};

// should work with I18NEXT >= v22.5.0
export const loadLanguages = (i18n, lng, ns, cb) => {
  // eslint-disable-next-line no-param-reassign
  if (isString(ns)) ns = [ns];
  if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1)
    return loadNamespaces(i18n, ns, cb);
  ns.forEach((n) => {
    if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb));
};

export const hasLoadedNamespace = (ns, i18n, options = {}) => {
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce(i18n, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', {
      languages: i18n.languages,
    });
    return true;
  }

  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: (i18nInstance, loadNotPending) => {
      if (
        options.bindI18n &&
        options.bindI18n.indexOf('languageChanging') > -1 &&
        i18nInstance.services.backendConnector.backend &&
        i18nInstance.isLanguageChangingTo &&
        !loadNotPending(i18nInstance.isLanguageChangingTo, ns)
      )
        return false;
    },
  });
};

export const getDisplayName = (Component) =>
  Component.displayName ||
  Component.name ||
  (isString(Component) && Component.length > 0 ? Component : 'Unknown');

export const isString = (obj) => typeof obj === 'string';

export const isObject = (obj) => typeof obj === 'object' && obj !== null;
