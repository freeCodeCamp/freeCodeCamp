"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  render: true,
  renderHook: true,
  cleanup: true,
  act: true,
  fireEvent: true,
  getConfig: true,
  configure: true
};
Object.defineProperty(exports, "act", {
  enumerable: true,
  get: function () {
    return _actCompat.default;
  }
});
exports.cleanup = cleanup;
Object.defineProperty(exports, "configure", {
  enumerable: true,
  get: function () {
    return _config.configure;
  }
});
Object.defineProperty(exports, "fireEvent", {
  enumerable: true,
  get: function () {
    return _fireEvent.fireEvent;
  }
});
Object.defineProperty(exports, "getConfig", {
  enumerable: true,
  get: function () {
    return _config.getConfig;
  }
});
exports.render = render;
exports.renderHook = renderHook;
var React = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var ReactDOMClient = _interopRequireWildcard(require("react-dom/client"));
var _dom = require("@testing-library/dom");
Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _dom[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dom[key];
    }
  });
});
var _actCompat = _interopRequireWildcard(require("./act-compat"));
var _fireEvent = require("./fire-event");
var _config = require("./config");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
(0, _dom.configure)({
  unstable_advanceTimersWrapper: cb => {
    return (0, _actCompat.default)(cb);
  },
  // We just want to run `waitFor` without IS_REACT_ACT_ENVIRONMENT
  // But that's not necessarily how `asyncWrapper` is used since it's a public method.
  // Let's just hope nobody else is using it.
  asyncWrapper: async cb => {
    const previousActEnvironment = (0, _actCompat.getIsReactActEnvironment)();
    (0, _actCompat.setReactActEnvironment)(false);
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
      (0, _actCompat.setReactActEnvironment)(previousActEnvironment);
    }
  },
  eventWrapper: cb => {
    let result;
    (0, _actCompat.default)(() => {
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
  return (0, _config.getConfig)().reactStrictMode ? /*#__PURE__*/React.createElement(React.StrictMode, null, innerElement) : innerElement;
}
function wrapUiIfNeeded(innerElement, wrapperComponent) {
  return wrapperComponent ? /*#__PURE__*/React.createElement(wrapperComponent, null, innerElement) : innerElement;
}
function createConcurrentRoot(container, {
  hydrate,
  ui,
  wrapper: WrapperComponent
}) {
  let root;
  if (hydrate) {
    (0, _actCompat.default)(() => {
      root = ReactDOMClient.hydrateRoot(container, strictModeIfNeeded(wrapUiIfNeeded(ui, WrapperComponent)));
    });
  } else {
    root = ReactDOMClient.createRoot(container);
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
      _reactDom.default.hydrate(element, container);
    },
    render(element) {
      _reactDom.default.render(element, container);
    },
    unmount() {
      _reactDom.default.unmountComponentAtNode(container);
    }
  };
}
function renderRoot(ui, {
  baseElement,
  container,
  hydrate,
  queries,
  root,
  wrapper: WrapperComponent
}) {
  (0, _actCompat.default)(() => {
    if (hydrate) {
      root.hydrate(strictModeIfNeeded(wrapUiIfNeeded(ui, WrapperComponent)), container);
    } else {
      root.render(strictModeIfNeeded(wrapUiIfNeeded(ui, WrapperComponent)), container);
    }
  });
  return {
    container,
    baseElement,
    debug: (el = baseElement, maxLength, options) => Array.isArray(el) ?
    // eslint-disable-next-line no-console
    el.forEach(e => console.log((0, _dom.prettyDOM)(e, maxLength, options))) :
    // eslint-disable-next-line no-console,
    console.log((0, _dom.prettyDOM)(el, maxLength, options)),
    unmount: () => {
      (0, _actCompat.default)(() => {
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
    ...(0, _dom.getQueriesForElement)(baseElement, queries)
  };
}
function render(ui, {
  container,
  baseElement = container,
  legacyRoot = false,
  queries,
  hydrate = false,
  wrapper
} = {}) {
  if (legacyRoot && typeof _reactDom.default.render !== 'function') {
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
  mountedRootEntries.forEach(({
    root,
    container
  }) => {
    (0, _actCompat.default)(() => {
      root.unmount();
    });
    if (container.parentNode === document.body) {
      document.body.removeChild(container);
    }
  });
  mountedRootEntries.length = 0;
  mountedContainers.clear();
}
function renderHook(renderCallback, options = {}) {
  const {
    initialProps,
    ...renderOptions
  } = options;
  if (renderOptions.legacyRoot && typeof _reactDom.default.render !== 'function') {
    const error = new Error('`legacyRoot: true` is not supported in this version of React. Please use React 18 instead.');
    Error.captureStackTrace(error, renderHook);
    throw error;
  }
  const result = /*#__PURE__*/React.createRef();
  function TestComponent({
    renderCallbackProps
  }) {
    const pendingResult = renderCallback(renderCallbackProps);
    React.useEffect(() => {
      result.current = pendingResult;
    });
    return null;
  }
  const {
    rerender: baseRerender,
    unmount
  } = render( /*#__PURE__*/React.createElement(TestComponent, {
    renderCallbackProps: initialProps
  }), renderOptions);
  function rerender(rerenderCallbackProps) {
    return baseRerender( /*#__PURE__*/React.createElement(TestComponent, {
      renderCallbackProps: rerenderCallbackProps
    }));
  }
  return {
    result,
    rerender,
    unmount
  };
}

// just re-export everything from dom-testing-library

/* eslint func-name-matching:0 */