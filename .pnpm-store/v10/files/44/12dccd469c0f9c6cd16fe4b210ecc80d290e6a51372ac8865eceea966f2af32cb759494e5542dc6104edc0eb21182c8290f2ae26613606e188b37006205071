import 'intersection-observer';
import * as React from 'react';
import useLayoutEffect from '@react-hook/passive-layout-effect';

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
  useLayoutEffect(() => {
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

export default useIntersectionObserver;