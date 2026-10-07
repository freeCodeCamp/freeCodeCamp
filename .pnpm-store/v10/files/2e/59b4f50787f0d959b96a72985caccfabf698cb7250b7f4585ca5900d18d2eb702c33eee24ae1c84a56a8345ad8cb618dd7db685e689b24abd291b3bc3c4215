"use strict";

exports.__esModule = true;
exports.default = void 0;

require("intersection-observer");

var React = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("react"));

var _passiveLayoutEffect = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("@react-hook/passive-layout-effect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useIntersectionObserver(target, options = {}) {
  const {
    root = null,
    pollInterval = null,
    useMutationObserver = false,
    rootMargin = '0px 0px 0px 0px',
    threshold = 0,
    initialIsIntersecting = false
  } = options;
  const [entry, setEntry] = React.useState(() => ({
    boundingClientRect: null,
    intersectionRatio: 0,
    intersectionRect: null,
    isIntersecting: initialIsIntersecting,
    rootBounds: null,
    target: null,
    time: 0
  }));
  const [observer, setObserver] = React.useState(() => getIntersectionObserver({
    root,
    pollInterval,
    useMutationObserver,
    rootMargin,
    threshold
  }));
  React.useEffect(() => {
    const observer = getIntersectionObserver({
      root,
      pollInterval,
      useMutationObserver,
      rootMargin,
      threshold
    });
    setObserver(observer); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root, rootMargin, pollInterval, useMutationObserver, JSON.stringify(threshold)]);
  (0, _passiveLayoutEffect.default)(() => {
    const targetEl = target && 'current' in target ? target.current : target;
    if (!observer || !targetEl) return;
    let didUnsubscribe = false;
    observer.observer.observe(targetEl);

    const callback = entries => {
      if (didUnsubscribe) return;

      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];

        if (entry.target === targetEl) {
          setEntry(entry);
        }
      }
    };

    observer.subscribe(callback);
    return () => {
      didUnsubscribe = true;
      observer.observer.unobserve(targetEl);
      observer.unsubscribe(callback);
    };
  }, [target, observer]);
  return entry;
}

function createIntersectionObserver({
  root = null,
  pollInterval = null,
  useMutationObserver = false,
  rootMargin = '0px 0px 0px 0px',
  threshold = 0
}) {
  const callbacks = new Set();
  if (typeof IntersectionObserver === 'undefined') return null;
  const observer = new IntersectionObserver(entries => {
    for (const callback of callbacks) callback(entries, observer);
  }, {
    root,
    rootMargin,
    threshold
  }); // @ts-ignore

  observer.POLL_INTERVAL = pollInterval; // @ts-ignore

  observer.USE_MUTATION_OBSERVER = useMutationObserver;
  return {
    observer,

    getListeners() {
      return callbacks;
    },

    subscribe: callback => callbacks.add(callback),
    unsubscribe: callback => callbacks.delete(callback)
  };
}

const _intersectionObserver = /*#__PURE__*/new Map();

function getIntersectionObserver(options) {
  const {
    root,
    ...keys
  } = options;
  const key = JSON.stringify(keys);

  let base = _intersectionObserver.get(root);

  if (!base) {
    base = {};

    _intersectionObserver.set(root, base);
  }

  return !base[key] ? base[key] = createIntersectionObserver(options) : base[key];
}

var _default = useIntersectionObserver;
exports.default = _default;