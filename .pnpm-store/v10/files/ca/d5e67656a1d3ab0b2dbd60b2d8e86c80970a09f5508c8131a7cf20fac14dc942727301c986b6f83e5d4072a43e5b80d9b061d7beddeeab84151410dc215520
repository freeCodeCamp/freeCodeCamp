'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMClient = require('react-dom/client');
var dom = require('@testing-library/dom');
var DeprecatedReactTestUtils = require('react-dom/test-utils');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var ReactDOMClient__namespace = /*#__PURE__*/_interopNamespace(ReactDOMClient);
var DeprecatedReactTestUtils__namespace = /*#__PURE__*/_interopNamespace(DeprecatedReactTestUtils);

const reactAct = typeof React__namespace.act === 'function' ? React__namespace.act : DeprecatedReactTestUtils__namespace.act;
function getGlobalThis() {
  /* istanbul ignore else */
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  /* istanbul ignore next */
  if (typeof self !== 'undefined') {
    return self;
  }
  /* istanbul ignore next */
  if (typeof window !== 'undefined') {
    return window;
  }
  /* istanbul ignore next */
  if (typeof global !== 'undefined') {
    return global;
  }
  /* istanbul ignore next */
  throw new Error('unable to locate global object');
}
function setIsReactActEnvironment(isReactActEnvironment) {
  getGlobalThis().IS_REACT_ACT_ENVIRONMENT = isReactActEnvironment;
}
function getIsReactActEnvironment() {
  return getGlobalThis().IS_REACT_ACT_ENVIRONMENT;
}
function withGlobalActEnvironment(actImplementation) {
  return callback => {
    const previousActEnvironment = getIsReactActEnvironment();
    setIsReactActEnvironment(true);
    try {
      // The return value of `act` is always a thenable.
      let callbackNeedsToBeAwaited = false;
      const actResult = actImplementation(() => {
        const result = callback();
        if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
          callbackNeedsToBeAwaited = true;
        }
        return result;
      });
      if (callbackNeedsToBeAwaited) {
        const thenable = actResult;
        return {
          then: (resolve, reject) => {
            thenable.then(returnValue => {
              setIsReactActEnvironment(previousActEnvironment);
              resolve(returnValue);
            }, error => {
              setIsReactActEnvironment(previousActEnvironment);
              reject(error);
            });
          }
        };
      } else {
        setIsReactActEnvironment(previousActEnvironment);
        return actResult;
      }
    } catch (error) {
      // Can't be a `finally {}` block since we don't know if we have to immediately restore IS_REACT_ACT_ENVIRONMENT
      // or if we have to await the callback first.
      setIsReactActEnvironment(previousActEnvironment);
      throw error;
    }
  };
}
const act = withGlobalActEnvironment(reactAct);

/* eslint no-console:0 */

// react-testing-library's version of fireEvent will call
// dom-testing-library's version of fireEvent. The reason
// we make this distinction however is because we have
// a few extra events that work a bit differently
const fireEvent = function () {
  return dom.fireEvent(...arguments);
};
Object.keys(dom.fireEvent).forEach(key => {
  fireEvent[key] = function () {
    return dom.fireEvent[key](...arguments);
  };
});

// React event system tracks native mouseOver/mouseOut events for
// running onMouseEnter/onMouseLeave handlers
// @link https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/events/EnterLeaveEventPlugin.js#L24-L31
const mouseEnter = fireEvent.mouseEnter;
const mouseLeave = fireEvent.mouseLeave;
fireEvent.mouseEnter = function () {
  mouseEnter(...arguments);
  return fireEvent.mouseOver(...arguments);
};
fireEvent.mouseLeave = function () {
  mouseLeave(...arguments);
  return fireEvent.mouseOut(...arguments);
};
const pointerEnter = fireEvent.pointerEnter;
const pointerLeave = fireEvent.pointerLeave;
fireEvent.pointerEnter = function () {
  pointerEnter(...arguments);
  return fireEvent.pointerOver(...arguments);
};
fireEvent.pointerLeave = function () {
  pointerLeave(...arguments);
  return fireEvent.pointerOut(...arguments);
};
const select = fireEvent.select;
fireEvent.select = (node, init) => {
  select(node, init);
  // React tracks this event only on focused inputs
  node.focus();

  // React creates this event when one of the following native events happens
  // - contextMenu
  // - mouseUp
  // - dragEnd
  // - keyUp
  // - keyDown
  // so we can use any here
  // @link https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/events/SelectEventPlugin.js#L203-L224
  fireEvent.keyUp(node, init);
};

// React event system tracks native focusout/focusin events for
// running blur/focus handlers
// @link https://github.com/facebook/react/pull/19186
const blur = fireEvent.blur;
const focus = fireEvent.focus;
fireEvent.blur = function () {
  fireEvent.focusOut(...arguments);
  return blur(...arguments);
};
fireEvent.focus = function () {
  fireEvent.focusIn(...arguments);
  return focus(...arguments);
};

let configForRTL = {
  reactStrictMode: false
};
function getConfig() {
  return {
    ...dom.getConfig(),
    ...configForRTL
  };
}
function configure(newConfig) {
  if (typeof newConfig === 'function') {
    // Pass the existing config out to the provided function
    // and accept a delta in return
    newConfig = newConfig(getConfig());
  }
  const {
    reactStrictMode,
    ...configForDTL
  } = newConfig;
  dom.configure(configForDTL);
  configForRTL = {
    ...configForRTL,
    reactStrictMode
  };
}

function jestFakeTimersAreEnabled() {
  /* istanbul ignore else */
  if (typeof jest !== 'undefined' && jest !== null) {
    return (
      // legacy timers
      setTimeout._isMockFunction === true ||
      // modern timers
      // eslint-disable-next-line prefer-object-has-own -- No Object.hasOwn in all target environments we support.
      Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
    );
  } // istanbul ignore next

  return false;
}
dom.configure({
  unstable_advanceTimersWrapper: cb => {
    return act(cb);
  },
  // We just want to run `waitFor` without IS_REACT_ACT_ENVIRONMENT
  // But that's not necessarily how `asyncWrapper` is used since it's a public method.
  // Let's just hope nobody else is using it.
  asyncWrapper: async cb => {
    const previousActEnvironment = getIsReactActEnvironment();
    setIsReactActEnvironment(false);
    try {
      const result = await cb();
      // Drain microtask queue.
      // Otherwise we'll restore the previous act() environment, before we resolve the `waitFor` call.
      // The caller would have no chance to wrap the in-flight Promises in `act()`
      await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 0);
        if (jestFakeTimersAreEnabled()) {
          jest.advanceTimersByTime(0);
        }
      });
      return result;
    } finally {
      setIsReactActEnvironment(previousActEnvironment);
    }
  },
  eventWrapper: cb => {
    let result;
    act(() => {
      result = cb();
    });
    return result;
  }
});

// Ideally we'd just use a WeakMap where containers are keys and roots are values.
// We use two variables so that we can bail out in constant time when we render with a new container (most common use case)
/**
 * @type {Set<import('react-dom').Container>}
 */
const mountedContainers = new Set();
/**
 * @type Array<{container: import('react-dom').Container, root: ReturnType<typeof createConcurrentRoot>}>
 */
const mountedRootEntries = [];
function strictModeIfNeeded(innerElement) {
  return getConfig().reactStrictMode ? /*#__PURE__*/React__namespace.createElement(React__namespace.StrictMode, null, innerElement) : innerElement;
}
function wrapUiIfNeeded(innerElement, wrapperComponent) {
  return wrapperComponent ? /*#__PURE__*/React__namespace.createElement(wrapperComponent, null, innerElement) : innerElement;
}
function createConcurrentRoot(container, _ref) {
  let {
    hydrate,
    ui,
    wrapper: WrapperComponent
  } = _ref;
  let root;
  if (hydrate) {
    act(() => {
      root = ReactDOMClient__namespace.hydrateRoot(container, strictModeIfNeeded(wrapUiIfNeeded(ui, WrapperComponent)));
    });
  } else {
    root = ReactDOMClient__namespace.createRoot(container);
  }
  return {
    hydrate() {
      /* istanbul ignore if */
      if (!hydrate) {
        throw new Error('Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.');
      }
      // Nothing to do since hydration happens when creating the root object.
    },
    render(element) {
      root.render(element);
    },
    unmount() {
      root.unmount();
    }
  };
}
function createLegacyRoot(container) {
  return {
    hydrate(element) {
      ReactDOM__default["default"].hydrate(element, container);
    },
    render(element) {
      ReactDOM__default["default"].render(element, container);
    },
    unmount() {
      ReactDOM__default["default"].unmountComponentAtNode(container);
    }
  };
}
function renderRoot(ui, _ref2) {
  let {
    baseElement,
    container,
    hydrate,
    queries,
    root,
    wrapper: WrapperComponent
  } = _ref2;
  act(() => {
    if (hydrate) {
      root.hydrate(strictModeIfNeeded(wrapUiIfNeeded(ui, WrapperComponent)), container);
    } else {
      root.render(strictModeIfNeeded(wrapUiIfNeeded(ui, WrapperComponent)), container);
    }
  });
  return {
    container,
    baseElement,
    debug: function (el, maxLength, options) {
      if (el === void 0) {
        el = baseElement;
      }
      return Array.isArray(el) ?
      // eslint-disable-next-line no-console
      el.forEach(e => console.log(dom.prettyDOM(e, maxLength, options))) :
      // eslint-disable-next-line no-console,
      console.log(dom.prettyDOM(el, maxLength, options));
    },
    unmount: () => {
      act(() => {
        root.unmount();
      });
    },
    rerender: rerenderUi => {
      renderRoot(rerenderUi, {
        container,
        baseElement,
        root,
        wrapper: WrapperComponent
      });
      // Intentionally do not return anything to avoid unnecessarily complicating the API.
      // folks can use all the same utilities we return in the first place that are bound to the container
    },
    asFragment: () => {
      /* istanbul ignore else (old jsdom limitation) */
      if (typeof document.createRange === 'function') {
        return document.createRange().createContextualFragment(container.innerHTML);
      } else {
        const template = document.createElement('template');
        template.innerHTML = container.innerHTML;
        return template.content;
      }
    },
    ...dom.getQueriesForElement(baseElement, queries)
  };
}
function render(ui, _temp) {
  let {
    container,
    baseElement = container,
    legacyRoot = false,
    queries,
    hydrate = false,
    wrapper
  } = _temp === void 0 ? {} : _temp;
  if (legacyRoot && typeof ReactDOM__default["default"].render !== 'function') {
    const error = new Error('`legacyRoot: true` is not supported in this version of React. Please use React 18 instead.');
    Error.captureStackTrace(error, render);
    throw error;
  }
  if (!baseElement) {
    // default to document.body instead of documentElement to avoid output of potentially-large
    // head elements (such as JSS style blocks) in debug output
    baseElement = document.body;
  }
  if (!container) {
    container = baseElement.appendChild(document.createElement('div'));
  }
  let root;
  // eslint-disable-next-line no-negated-condition -- we want to map the evolution of this over time. The root is created first. Only later is it re-used so we don't want to read the case that happens later first.
  if (!mountedContainers.has(container)) {
    const createRootImpl = legacyRoot ? createLegacyRoot : createConcurrentRoot;
    root = createRootImpl(container, {
      hydrate,
      ui,
      wrapper
    });
    mountedRootEntries.push({
      container,
      root
    });
    // we'll add it to the mounted containers regardless of whether it's actually
    // added to document.body so the cleanup method works regardless of whether
    // they're passing us a custom container or not.
    mountedContainers.add(container);
  } else {
    mountedRootEntries.forEach(rootEntry => {
      // Else is unreachable since `mountedContainers` has the `container`.
      // Only reachable if one would accidentally add the container to `mountedContainers` but not the root to `mountedRootEntries`
      /* istanbul ignore else */
      if (rootEntry.container === container) {
        root = rootEntry.root;
      }
    });
  }
  return renderRoot(ui, {
    container,
    baseElement,
    queries,
    hydrate,
    wrapper,
    root
  });
}
function cleanup() {
  mountedRootEntries.forEach(_ref3 => {
    let {
      root,
      container
    } = _ref3;
    act(() => {
      root.unmount();
    });
    if (container.parentNode === document.body) {
      document.body.removeChild(container);
    }
  });
  mountedRootEntries.length = 0;
  mountedContainers.clear();
}
function renderHook(renderCallback, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    initialProps,
    ...renderOptions
  } = options;
  if (renderOptions.legacyRoot && typeof ReactDOM__default["default"].render !== 'function') {
    const error = new Error('`legacyRoot: true` is not supported in this version of React. Please use React 18 instead.');
    Error.captureStackTrace(error, renderHook);
    throw error;
  }
  const result = /*#__PURE__*/React__namespace.createRef();
  function TestComponent(_ref4) {
    let {
      renderCallbackProps
    } = _ref4;
    const pendingResult = renderCallback(renderCallbackProps);
    React__namespace.useEffect(() => {
      result.current = pendingResult;
    });
    return null;
  }
  const {
    rerender: baseRerender,
    unmount
  } = render( /*#__PURE__*/React__namespace.createElement(TestComponent, {
    renderCallbackProps: initialProps
  }), renderOptions);
  function rerender(rerenderCallbackProps) {
    return baseRerender( /*#__PURE__*/React__namespace.createElement(TestComponent, {
      renderCallbackProps: rerenderCallbackProps
    }));
  }
  return {
    result,
    rerender,
    unmount
  };
}

/* eslint func-name-matching:0 */

exports.act = act;
exports.cleanup = cleanup;
exports.configure = configure;
exports.fireEvent = fireEvent;
exports.getConfig = getConfig;
exports.render = render;
exports.renderHook = renderHook;
Object.keys(dom).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return dom[k]; }
  });
});
