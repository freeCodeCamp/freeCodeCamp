"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = void 0;
var _react = require("react");
var _context = require("./context.js");
var _utils = require("./utils.js");
const usePrevious = (value, ignore) => {
  const ref = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    ref.current = ignore ? ref.current : value;
  }, [value, ignore]);
  return ref.current;
};
const alwaysNewT = (i18n, language, namespace, keyPrefix) => i18n.getFixedT(language, namespace, keyPrefix);
const useMemoizedT = (i18n, language, namespace, keyPrefix) => (0, _react.useCallback)(alwaysNewT(i18n, language, namespace, keyPrefix), [i18n, language, namespace, keyPrefix]);
const useTranslation = (ns, props = {}) => {
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = (0, _react.useContext)(_context.I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new _context.ReportNamespaces();
  if (!i18n) {
    (0, _utils.warnOnce)(i18n, 'NO_I18NEXT_INSTANCE', 'useTranslation: You will need to pass in an i18next instance by using initReactI18next');
    const notReadyT = (k, optsOrDefaultValue) => {
      if ((0, _utils.isString)(optsOrDefaultValue)) return optsOrDefaultValue;
      if ((0, _utils.isObject)(optsOrDefaultValue) && (0, _utils.isString)(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
      return Array.isArray(k) ? k[k.length - 1] : k;
    };
    const retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }
  if (i18n.options.react?.wait) (0, _utils.warnOnce)(i18n, 'DEPRECATED_OPTION', 'useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
  const i18nOptions = {
    ...(0, _context.getDefaults)(),
    ...i18n.options.react,
    ...props
  };
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  let namespaces = ns || defaultNSFromContext || i18n.options?.defaultNS;
  namespaces = (0, _utils.isString)(namespaces) ? [namespaces] : namespaces || ['translation'];
  i18n.reportNamespaces.addUsedNamespaces?.(namespaces);
  const ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(n => (0, _utils.hasLoadedNamespace)(n, i18n, i18nOptions));
  const memoGetT = useMemoizedT(i18n, props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  const getT = () => memoGetT;
  const getNewT = () => alwaysNewT(i18n, props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  const [t, setT] = (0, _react.useState)(getT);
  let joinedNS = namespaces.join();
  if (props.lng) joinedNS = `${props.lng}${joinedNS}`;
  const previousJoinedNS = usePrevious(joinedNS);
  const isMounted = (0, _react.useRef)(true);
  (0, _react.useEffect)(() => {
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    isMounted.current = true;
    if (!ready && !useSuspense) {
      if (props.lng) {
        (0, _utils.loadLanguages)(i18n, props.lng, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      } else {
        (0, _utils.loadNamespaces)(i18n, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      }
    }
    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getNewT);
    }
    const boundReset = () => {
      if (isMounted.current) setT(getNewT);
    };
    if (bindI18n) i18n?.on(bindI18n, boundReset);
    if (bindI18nStore) i18n?.store.on(bindI18nStore, boundReset);
    return () => {
      isMounted.current = false;
      if (i18n && bindI18n) bindI18n?.split(' ').forEach(e => i18n.off(e, boundReset));
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(e => i18n.store.off(e, boundReset));
    };
  }, [i18n, joinedNS]);
  (0, _react.useEffect)(() => {
    if (isMounted.current && ready) {
      setT(getT);
    }
  }, [i18n, keyPrefix, ready]);
  const ret = [t, i18n, ready];
  ret.t = t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(resolve => {
    if (props.lng) {
      (0, _utils.loadLanguages)(i18n, props.lng, namespaces, () => resolve());
    } else {
      (0, _utils.loadNamespaces)(i18n, namespaces, () => resolve());
    }
  });
};
exports.useTranslation = useTranslation;