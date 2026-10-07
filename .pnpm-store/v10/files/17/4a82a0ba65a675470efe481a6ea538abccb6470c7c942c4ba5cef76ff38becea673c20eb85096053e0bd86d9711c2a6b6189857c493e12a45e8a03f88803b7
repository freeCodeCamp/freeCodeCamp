import 'intersection-observer';
import { useState, useEffect } from 'react';
import useLayoutEffect from '@react-hook/passive-layout-effect';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function useIntersectionObserver(target, options) {
  if (options === void 0) {
    options = {};
  }

  var {
    root = null,
    pollInterval = null,
    useMutationObserver = false,
    rootMargin = '0px 0px 0px 0px',
    threshold = 0,
    initialIsIntersecting = false
  } = options;
  var [entry, setEntry] = useState(() => ({
    boundingClientRect: null,
    intersectionRatio: 0,
    intersectionRect: null,
    isIntersecting: initialIsIntersecting,
    rootBounds: null,
    target: null,
    time: 0
  }));
  var [observer, setObserver] = useState(() => getIntersectionObserver({
    root,
    pollInterval,
    useMutationObserver,
    rootMargin,
    threshold
  }));
  useEffect(() => {
    var observer = getIntersectionObserver({
      root,
      pollInterval,
      useMutationObserver,
      rootMargin,
      threshold
    });
    setObserver(observer); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root, rootMargin, pollInterval, useMutationObserver, JSON.stringify(threshold)]);
  useLayoutEffect(() => {
    var targetEl = target && 'current' in target ? target.current : target;
    if (!observer || !targetEl) return;
    var didUnsubscribe = false;
    observer.observer.observe(targetEl);

    var callback = entries => {
      if (didUnsubscribe) return;

      for (var i = 0; i < entries.length; i++) {
        var _entry = entries[i];

        if (_entry.target === targetEl) {
          setEntry(_entry);
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

function createIntersectionObserver(_ref) {
  var {
    root = null,
    pollInterval = null,
    useMutationObserver = false,
    rootMargin = '0px 0px 0px 0px',
    threshold = 0
  } = _ref;
  var callbacks = new Set();
  if (typeof IntersectionObserver === 'undefined') return null;
  var observer = new IntersectionObserver(entries => {
    for (var callback of callbacks) {
      callback(entries, observer);
    }
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

var _intersectionObserver = /*#__PURE__*/new Map();

function getIntersectionObserver(options) {
  var {
    root
  } = options,
      keys = _objectWithoutPropertiesLoose(options, ["root"]);

  var key = JSON.stringify(keys);

  var base = _intersectionObserver.get(root);

  if (!base) {
    base = {};

    _intersectionObserver.set(root, base);
  }

  return !base[key] ? base[key] = createIntersectionObserver(options) : base[key];
}

export default useIntersectionObserver;
//# sourceMappingURL=index.dev.mjs.map
