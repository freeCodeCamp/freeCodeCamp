'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodash_1 = require('lodash');
var signalExit = require('signal-exit');
var require$$0$1 = require('yoga-layout-prebuilt');
var stripAnsi = require('strip-ansi');
var require$$0$2 = require('chalk');
var stream_1 = require('stream');
var require$$0$4 = require('fs');
var require$$0$3 = require('module');
var redux = require('../../redux');
var gatsbyCoreUtils = require('gatsby-core-utils');
var convertHrtime = require('convert-hrtime');
var path = require('path');
var parseComponentPath = require('gatsby-core-utils/parse-component-path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var lodash_1__default = /*#__PURE__*/_interopDefaultLegacy(lodash_1);
var signalExit__default = /*#__PURE__*/_interopDefaultLegacy(signalExit);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var stripAnsi__default = /*#__PURE__*/_interopDefaultLegacy(stripAnsi);
var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$2);
var stream_1__default = /*#__PURE__*/_interopDefaultLegacy(stream_1);
var require$$0__default$3 = /*#__PURE__*/_interopDefaultLegacy(require$$0$4);
var require$$0__default$2 = /*#__PURE__*/_interopDefaultLegacy(require$$0$3);
var convertHrtime__default = /*#__PURE__*/_interopDefaultLegacy(convertHrtime);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l = Symbol.for("react.element"),
  n = Symbol.for("react.portal"),
  p = Symbol.for("react.fragment"),
  q = Symbol.for("react.strict_mode"),
  r = Symbol.for("react.profiler"),
  t = Symbol.for("react.provider"),
  u = Symbol.for("react.context"),
  v = Symbol.for("react.forward_ref"),
  w = Symbol.for("react.suspense"),
  x = Symbol.for("react.memo"),
  y = Symbol.for("react.lazy"),
  z = Symbol.iterator;
function A(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z && a[z] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  C = Object.assign,
  D = {};
function E(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {}
F.prototype = E.prototype;
function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray,
  J = Object.prototype.hasOwnProperty,
  K = {
    current: null
  },
  L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function M(a, b, e) {
  var d,
    c = {},
    k = null,
    h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
    c.children = f;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return {
    $$typeof: l,
    type: a,
    key: k,
    ref: h,
    props: c,
    _owner: K.current
  };
}
function N(a, b) {
  return {
    $$typeof: l,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}
function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}
var P = /\/+/g;
function Q(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e, d, c) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;
    case "object":
      switch (a.$$typeof) {
        case l:
        case n:
          h = !0;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
    return a;
  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = d + Q(k, g);
    h += R(k, b, e, f, c);
  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S(a, b, e) {
  if (null == a) return a;
  var d = [],
    c = 0;
  R(a, d, "", "", function (a) {
    return b.call(e, a, c++);
  });
  return d;
}
function T(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function (b) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
    }, function (b) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U = {
    current: null
  },
  V = {
    transition: null
  },
  W = {
    ReactCurrentDispatcher: U,
    ReactCurrentBatchConfig: V,
    ReactCurrentOwner: K
  };
var Children = {
  map: S,
  forEach: function (a, b, e) {
    S(a, function () {
      b.apply(this, arguments);
    }, e);
  },
  count: function (a) {
    var b = 0;
    S(a, function () {
      b++;
    });
    return b;
  },
  toArray: function (a) {
    return S(a, function (a) {
      return a;
    }) || [];
  },
  only: function (a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  }
};
var Component = E;
var Fragment = p;
var Profiler = r;
var PureComponent = G;
var StrictMode = q;
var Suspense = w;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
var cloneElement = function (a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props),
    c = a.key,
    k = a.ref,
    h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = K.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
    d.children = g;
  }
  return {
    $$typeof: l,
    type: a.type,
    key: c,
    ref: k,
    props: d,
    _owner: h
  };
};
var createContext = function (a) {
  a = {
    $$typeof: u,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  };
  a.Provider = {
    $$typeof: t,
    _context: a
  };
  return a.Consumer = a;
};
var createElement = M;
var createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};
var createRef = function () {
  return {
    current: null
  };
};
var forwardRef = function (a) {
  return {
    $$typeof: v,
    render: a
  };
};
var isValidElement = O;
var lazy = function (a) {
  return {
    $$typeof: y,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: T
  };
};
var memo = function (a, b) {
  return {
    $$typeof: x,
    type: a,
    compare: void 0 === b ? null : b
  };
};
var startTransition = function (a) {
  var b = V.transition;
  V.transition = {};
  try {
    a();
  } finally {
    V.transition = b;
  }
};
var unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
var useCallback = function (a, b) {
  return U.current.useCallback(a, b);
};
var useContext = function (a) {
  return U.current.useContext(a);
};
var useDebugValue = function () {};
var useDeferredValue = function (a) {
  return U.current.useDeferredValue(a);
};
var useEffect = function (a, b) {
  return U.current.useEffect(a, b);
};
var useId = function () {
  return U.current.useId();
};
var useImperativeHandle = function (a, b, e) {
  return U.current.useImperativeHandle(a, b, e);
};
var useInsertionEffect = function (a, b) {
  return U.current.useInsertionEffect(a, b);
};
var useLayoutEffect = function (a, b) {
  return U.current.useLayoutEffect(a, b);
};
var useMemo = function (a, b) {
  return U.current.useMemo(a, b);
};
var useReducer = function (a, b, e) {
  return U.current.useReducer(a, b, e);
};
var useRef = function (a) {
  return U.current.useRef(a);
};
var useState = function (a) {
  return U.current.useState(a);
};
var useSyncExternalStore = function (a, b, e) {
  return U.current.useSyncExternalStore(a, b, e);
};
var useTransition = function () {
  return U.current.useTransition();
};
var version = "18.2.0";

var react_production_min = {
	Children: Children,
	Component: Component,
	Fragment: Fragment,
	Profiler: Profiler,
	PureComponent: PureComponent,
	StrictMode: StrictMode,
	Suspense: Suspense,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	cloneElement: cloneElement,
	createContext: createContext,
	createElement: createElement,
	createFactory: createFactory,
	createRef: createRef,
	forwardRef: forwardRef,
	isValidElement: isValidElement,
	lazy: lazy,
	memo: memo,
	startTransition: startTransition,
	unstable_act: unstable_act,
	useCallback: useCallback,
	useContext: useContext,
	useDebugValue: useDebugValue,
	useDeferredValue: useDeferredValue,
	useEffect: useEffect,
	useId: useId,
	useImperativeHandle: useImperativeHandle,
	useInsertionEffect: useInsertionEffect,
	useLayoutEffect: useLayoutEffect,
	useMemo: useMemo,
	useReducer: useReducer,
	useRef: useRef,
	useState: useState,
	useSyncExternalStore: useSyncExternalStore,
	useTransition: useTransition,
	version: version
};

var react = createCommonjsModule(function (module) {

{
  module.exports = react_production_min;
}
});

var ansiEscapes_1 = createCommonjsModule(function (module) {

const ansiEscapes = module.exports;
// TODO: remove this in the next major version
module.exports.default = ansiEscapes;
const ESC = '\u001B[';
const OSC = '\u001B]';
const BEL = '\u0007';
const SEP = ';';
const isTerminalApp = process.env.TERM_PROGRAM === 'Apple_Terminal';
ansiEscapes.cursorTo = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError('The `x` argument is required');
  }
  if (typeof y !== 'number') {
    return ESC + (x + 1) + 'G';
  }
  return ESC + (y + 1) + ';' + (x + 1) + 'H';
};
ansiEscapes.cursorMove = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError('The `x` argument is required');
  }
  let ret = '';
  if (x < 0) {
    ret += ESC + -x + 'D';
  } else if (x > 0) {
    ret += ESC + x + 'C';
  }
  if (y < 0) {
    ret += ESC + -y + 'A';
  } else if (y > 0) {
    ret += ESC + y + 'B';
  }
  return ret;
};
ansiEscapes.cursorUp = (count = 1) => ESC + count + 'A';
ansiEscapes.cursorDown = (count = 1) => ESC + count + 'B';
ansiEscapes.cursorForward = (count = 1) => ESC + count + 'C';
ansiEscapes.cursorBackward = (count = 1) => ESC + count + 'D';
ansiEscapes.cursorLeft = ESC + 'G';
ansiEscapes.cursorSavePosition = isTerminalApp ? '\u001B7' : ESC + 's';
ansiEscapes.cursorRestorePosition = isTerminalApp ? '\u001B8' : ESC + 'u';
ansiEscapes.cursorGetPosition = ESC + '6n';
ansiEscapes.cursorNextLine = ESC + 'E';
ansiEscapes.cursorPrevLine = ESC + 'F';
ansiEscapes.cursorHide = ESC + '?25l';
ansiEscapes.cursorShow = ESC + '?25h';
ansiEscapes.eraseLines = count => {
  let clear = '';
  for (let i = 0; i < count; i++) {
    clear += ansiEscapes.eraseLine + (i < count - 1 ? ansiEscapes.cursorUp() : '');
  }
  if (count) {
    clear += ansiEscapes.cursorLeft;
  }
  return clear;
};
ansiEscapes.eraseEndLine = ESC + 'K';
ansiEscapes.eraseStartLine = ESC + '1K';
ansiEscapes.eraseLine = ESC + '2K';
ansiEscapes.eraseDown = ESC + 'J';
ansiEscapes.eraseUp = ESC + '1J';
ansiEscapes.eraseScreen = ESC + '2J';
ansiEscapes.scrollUp = ESC + 'S';
ansiEscapes.scrollDown = ESC + 'T';
ansiEscapes.clearScreen = '\u001Bc';
ansiEscapes.clearTerminal = process.platform === 'win32' ? `${ansiEscapes.eraseScreen}${ESC}0f` :
// 1. Erases the screen (Only done in case `2` is not supported)
// 2. Erases the whole screen including scrollback buffer
// 3. Moves cursor to the top-left position
// More info: https://www.real-world-systems.com/docs/ANSIcode.html
`${ansiEscapes.eraseScreen}${ESC}3J${ESC}H`;
ansiEscapes.beep = BEL;
ansiEscapes.link = (text, url) => {
  return [OSC, '8', SEP, SEP, url, BEL, text, OSC, '8', SEP, SEP, BEL].join('');
};
ansiEscapes.image = (buffer, options = {}) => {
  let ret = `${OSC}1337;File=inline=1`;
  if (options.width) {
    ret += `;width=${options.width}`;
  }
  if (options.height) {
    ret += `;height=${options.height}`;
  }
  if (options.preserveAspectRatio === false) {
    ret += ';preserveAspectRatio=0';
  }
  return ret + ':' + buffer.toString('base64') + BEL;
};
ansiEscapes.iTerm = {
  setCwd: (cwd = process.cwd()) => `${OSC}50;CurrentDir=${cwd}${BEL}`,
  annotation: (message, options = {}) => {
    let ret = `${OSC}1337;`;
    const hasX = typeof options.x !== 'undefined';
    const hasY = typeof options.y !== 'undefined';
    if ((hasX || hasY) && !(hasX && hasY && typeof options.length !== 'undefined')) {
      throw new Error('`x`, `y` and `length` must be defined when `x` or `y` is defined');
    }
    message = message.replace(/\|/g, '');
    ret += options.isHidden ? 'AddHiddenAnnotation=' : 'AddAnnotation=';
    if (options.length > 0) {
      ret += (hasX ? [message, options.length, options.x, options.y] : [options.length, message]).join('|');
    } else {
      ret += message;
    }
    return ret + BEL;
  }
};
});

const mimicFn = (to, from) => {
  for (const prop of Reflect.ownKeys(from)) {
    Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
  }
  return to;
};
var mimicFn_1 = mimicFn;
// TODO: Remove this for the next major release
var _default$H = mimicFn;
mimicFn_1.default = _default$H;

const calledFunctions = new WeakMap();
const onetime = (function_, options = {}) => {
  if (typeof function_ !== 'function') {
    throw new TypeError('Expected a function');
  }
  let returnValue;
  let callCount = 0;
  const functionName = function_.displayName || function_.name || '<anonymous>';
  const onetime = function (...arguments_) {
    calledFunctions.set(onetime, ++callCount);
    if (callCount === 1) {
      returnValue = function_.apply(this, arguments_);
      function_ = null;
    } else if (options.throw === true) {
      throw new Error(`Function \`${functionName}\` can only be called once`);
    }
    return returnValue;
  };
  mimicFn_1(onetime, function_);
  calledFunctions.set(onetime, callCount);
  return onetime;
};
var onetime_1 = onetime;
// TODO: Remove this for the next major release
var _default$G = onetime;
var callCount = function_ => {
  if (!calledFunctions.has(function_)) {
    throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
  }
  return calledFunctions.get(function_);
};
onetime_1.default = _default$G;
onetime_1.callCount = callCount;

var restoreCursor = onetime_1(() => {
  signalExit__default["default"](() => {
    process.stderr.write('\u001B[?25h');
  }, {
    alwaysLast: true
  });
});

var cliCursor = createCommonjsModule(function (module, exports) {


let isHidden = false;
exports.show = (writableStream = process.stderr) => {
  if (!writableStream.isTTY) {
    return;
  }
  isHidden = false;
  writableStream.write('\u001B[?25h');
};
exports.hide = (writableStream = process.stderr) => {
  if (!writableStream.isTTY) {
    return;
  }
  restoreCursor();
  isHidden = true;
  writableStream.write('\u001B[?25l');
};
exports.toggle = (force, writableStream) => {
  if (force !== undefined) {
    isHidden = force;
  }
  if (isHidden) {
    exports.show(writableStream);
  } else {
    exports.hide(writableStream);
  }
};
});

var __importDefault$p = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const ansi_escapes_1$1 = __importDefault$p(ansiEscapes_1);
const cli_cursor_1$1 = __importDefault$p(cliCursor);
const create = (stream, {
  showCursor = false
} = {}) => {
  let previousLineCount = 0;
  let previousOutput = '';
  let hasHiddenCursor = false;
  const render = str => {
    if (!showCursor && !hasHiddenCursor) {
      cli_cursor_1$1.default.hide();
      hasHiddenCursor = true;
    }
    const output = str + '\n';
    if (output === previousOutput) {
      return;
    }
    previousOutput = output;
    stream.write(ansi_escapes_1$1.default.eraseLines(previousLineCount) + output);
    previousLineCount = output.split('\n').length;
  };
  render.clear = () => {
    stream.write(ansi_escapes_1$1.default.eraseLines(previousLineCount));
    previousOutput = '';
    previousLineCount = 0;
  };
  render.done = () => {
    previousOutput = '';
    previousLineCount = 0;
    if (!showCursor) {
      cli_cursor_1$1.default.show();
      hasHiddenCursor = false;
    }
  };
  return render;
};
var _default$F = {
  create
};

var logUpdate = /*#__PURE__*/Object.defineProperty({
	default: _default$F
}, '__esModule', {value: true});

var vendors = [{
  name: "AppVeyor",
  constant: "APPVEYOR",
  env: "APPVEYOR",
  pr: "APPVEYOR_PULL_REQUEST_NUMBER"
}, {
  name: "Azure Pipelines",
  constant: "AZURE_PIPELINES",
  env: "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI",
  pr: "SYSTEM_PULLREQUEST_PULLREQUESTID"
}, {
  name: "Bamboo",
  constant: "BAMBOO",
  env: "bamboo_planKey"
}, {
  name: "Bitbucket Pipelines",
  constant: "BITBUCKET",
  env: "BITBUCKET_COMMIT",
  pr: "BITBUCKET_PR_ID"
}, {
  name: "Bitrise",
  constant: "BITRISE",
  env: "BITRISE_IO",
  pr: "BITRISE_PULL_REQUEST"
}, {
  name: "Buddy",
  constant: "BUDDY",
  env: "BUDDY_WORKSPACE_ID",
  pr: "BUDDY_EXECUTION_PULL_REQUEST_ID"
}, {
  name: "Buildkite",
  constant: "BUILDKITE",
  env: "BUILDKITE",
  pr: {
    env: "BUILDKITE_PULL_REQUEST",
    ne: "false"
  }
}, {
  name: "CircleCI",
  constant: "CIRCLE",
  env: "CIRCLECI",
  pr: "CIRCLE_PULL_REQUEST"
}, {
  name: "Cirrus CI",
  constant: "CIRRUS",
  env: "CIRRUS_CI",
  pr: "CIRRUS_PR"
}, {
  name: "AWS CodeBuild",
  constant: "CODEBUILD",
  env: "CODEBUILD_BUILD_ARN"
}, {
  name: "Codeship",
  constant: "CODESHIP",
  env: {
    CI_NAME: "codeship"
  }
}, {
  name: "Drone",
  constant: "DRONE",
  env: "DRONE",
  pr: {
    DRONE_BUILD_EVENT: "pull_request"
  }
}, {
  name: "dsari",
  constant: "DSARI",
  env: "DSARI"
}, {
  name: "GitLab CI",
  constant: "GITLAB",
  env: "GITLAB_CI"
}, {
  name: "GoCD",
  constant: "GOCD",
  env: "GO_PIPELINE_LABEL"
}, {
  name: "Hudson",
  constant: "HUDSON",
  env: "HUDSON_URL"
}, {
  name: "Jenkins",
  constant: "JENKINS",
  env: ["JENKINS_URL", "BUILD_ID"],
  pr: {
    any: ["ghprbPullId", "CHANGE_ID"]
  }
}, {
  name: "Magnum CI",
  constant: "MAGNUM",
  env: "MAGNUM"
}, {
  name: "Netlify CI",
  constant: "NETLIFY",
  env: "NETLIFY_BUILD_BASE",
  pr: {
    env: "PULL_REQUEST",
    ne: "false"
  }
}, {
  name: "Sail CI",
  constant: "SAIL",
  env: "SAILCI",
  pr: "SAIL_PULL_REQUEST_NUMBER"
}, {
  name: "Semaphore",
  constant: "SEMAPHORE",
  env: "SEMAPHORE",
  pr: "PULL_REQUEST_NUMBER"
}, {
  name: "Shippable",
  constant: "SHIPPABLE",
  env: "SHIPPABLE",
  pr: {
    IS_PULL_REQUEST: "true"
  }
}, {
  name: "Solano CI",
  constant: "SOLANO",
  env: "TDDIUM",
  pr: "TDDIUM_PR_ID"
}, {
  name: "Strider CD",
  constant: "STRIDER",
  env: "STRIDER"
}, {
  name: "TaskCluster",
  constant: "TASKCLUSTER",
  env: ["TASK_ID", "RUN_ID"]
}, {
  name: "TeamCity",
  constant: "TEAMCITY",
  env: "TEAMCITY_VERSION"
}, {
  name: "Travis CI",
  constant: "TRAVIS",
  env: "TRAVIS",
  pr: {
    env: "TRAVIS_PULL_REQUEST",
    ne: "false"
  }
}];

var ciInfo = createCommonjsModule(function (module, exports) {


var env = process.env;

// Used for testing only
Object.defineProperty(exports, '_vendors', {
  value: vendors.map(function (v) {
    return v.constant;
  })
});
exports.name = null;
exports.isPR = null;
vendors.forEach(function (vendor) {
  var envs = Array.isArray(vendor.env) ? vendor.env : [vendor.env];
  var isCI = envs.every(function (obj) {
    return checkEnv(obj);
  });
  exports[vendor.constant] = isCI;
  if (isCI) {
    exports.name = vendor.name;
    switch (typeof vendor.pr) {
      case 'string':
        // "pr": "CIRRUS_PR"
        exports.isPR = !!env[vendor.pr];
        break;
      case 'object':
        if ('env' in vendor.pr) {
          // "pr": { "env": "BUILDKITE_PULL_REQUEST", "ne": "false" }
          exports.isPR = vendor.pr.env in env && env[vendor.pr.env] !== vendor.pr.ne;
        } else if ('any' in vendor.pr) {
          // "pr": { "any": ["ghprbPullId", "CHANGE_ID"] }
          exports.isPR = vendor.pr.any.some(function (key) {
            return !!env[key];
          });
        } else {
          // "pr": { "DRONE_BUILD_EVENT": "pull_request" }
          exports.isPR = checkEnv(vendor.pr);
        }
        break;
      default:
        // PR detection not supported for this vendor
        exports.isPR = null;
    }
  }
});
exports.isCI = !!(env.CI ||
// Travis CI, CircleCI, Cirrus CI, Gitlab CI, Appveyor, CodeShip, dsari
env.CONTINUOUS_INTEGRATION ||
// Travis CI, Cirrus CI
env.BUILD_NUMBER ||
// Jenkins, TeamCity
env.RUN_ID ||
// TaskCluster, dsari
exports.name || false);
function checkEnv(obj) {
  if (typeof obj === 'string') return !!env[obj];
  return Object.keys(obj).every(function (k) {
    return env[k] === obj[k];
  });
}
});

var isCi = ciInfo.isCI;

// Gets all non-builtin properties up the prototype chain
const getAllProperties = object => {
  const properties = new Set();
  do {
    for (const key of Reflect.ownKeys(object)) {
      properties.add([object, key]);
    }
  } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
  return properties;
};
var autoBind = (self, {
  include,
  exclude
} = {}) => {
  const filter = key => {
    const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);
    if (include) {
      return include.some(match);
    }
    if (exclude) {
      return !exclude.some(match);
    }
    return true;
  };
  for (const [object, key] of getAllProperties(self.constructor.prototype)) {
    if (key === 'constructor' || !filter(key)) {
      continue;
    }
    const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    if (descriptor && typeof descriptor.value === 'function') {
      self[key] = self[key].bind(self);
    }
  }
  return self;
};

/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var scheduler_production_min = createCommonjsModule(function (module, exports) {

var f, g, h, k;
if ("object" === typeof performance && "function" === typeof performance.now) {
  var l = performance;
  exports.unstable_now = function () {
    return l.now();
  };
} else {
  var p = Date,
    q = p.now();
  exports.unstable_now = function () {
    return p.now() - q;
  };
}
if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var t = null,
    u = null,
    w = function () {
      if (null !== t) try {
        var a = exports.unstable_now();
        t(!0, a);
        t = null;
      } catch (b) {
        throw setTimeout(w, 0), b;
      }
    };
  f = function (a) {
    null !== t ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
  };
  g = function (a, b) {
    u = setTimeout(a, b);
  };
  h = function () {
    clearTimeout(u);
  };
  exports.unstable_shouldYield = function () {
    return !1;
  };
  k = exports.unstable_forceFrameRate = function () {};
} else {
  var x = window.setTimeout,
    y = window.clearTimeout;
  if ("undefined" !== typeof console) {
    var z = window.cancelAnimationFrame;
    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    "function" !== typeof z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
  }
  var A = !1,
    B = null,
    C = -1,
    D = 5,
    E = 0;
  exports.unstable_shouldYield = function () {
    return exports.unstable_now() >= E;
  };
  k = function () {};
  exports.unstable_forceFrameRate = function (a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1E3 / a) : 5;
  };
  var F = new MessageChannel(),
    G = F.port2;
  F.port1.onmessage = function () {
    if (null !== B) {
      var a = exports.unstable_now();
      E = a + D;
      try {
        B(!0, a) ? G.postMessage(null) : (A = !1, B = null);
      } catch (b) {
        throw G.postMessage(null), b;
      }
    } else A = !1;
  };
  f = function (a) {
    B = a;
    A || (A = !0, G.postMessage(null));
  };
  g = function (a, b) {
    C = x(function () {
      a(exports.unstable_now());
    }, b);
  };
  h = function () {
    y(C);
    C = -1;
  };
}
function H(a, b) {
  var c = a.length;
  a.push(b);
  a: for (;;) {
    var d = c - 1 >>> 1,
      e = a[d];
    if (void 0 !== e && 0 < I(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}
function J(a) {
  a = a[0];
  return void 0 === a ? null : a;
}
function K(a) {
  var b = a[0];
  if (void 0 !== b) {
    var c = a.pop();
    if (c !== b) {
      a[0] = c;
      a: for (var d = 0, e = a.length; d < e;) {
        var m = 2 * (d + 1) - 1,
          n = a[m],
          v = m + 1,
          r = a[v];
        if (void 0 !== n && 0 > I(n, c)) void 0 !== r && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > I(r, c)) a[d] = r, a[v] = c, d = v;else break a;
      }
    }
    return b;
  }
  return null;
}
function I(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}
var L = [],
  M = [],
  N = 1,
  O = null,
  P = 3,
  Q = !1,
  R = !1,
  S = !1;
function T(a) {
  for (var b = J(M); null !== b;) {
    if (null === b.callback) K(M);else if (b.startTime <= a) K(M), b.sortIndex = b.expirationTime, H(L, b);else break;
    b = J(M);
  }
}
function U(a) {
  S = !1;
  T(a);
  if (!R) if (null !== J(L)) R = !0, f(V);else {
    var b = J(M);
    null !== b && g(U, b.startTime - a);
  }
}
function V(a, b) {
  R = !1;
  S && (S = !1, h());
  Q = !0;
  var c = P;
  try {
    T(b);
    for (O = J(L); null !== O && (!(O.expirationTime > b) || a && !exports.unstable_shouldYield());) {
      var d = O.callback;
      if ("function" === typeof d) {
        O.callback = null;
        P = O.priorityLevel;
        var e = d(O.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? O.callback = e : O === J(L) && K(L);
        T(b);
      } else K(L);
      O = J(L);
    }
    if (null !== O) var m = !0;else {
      var n = J(M);
      null !== n && g(U, n.startTime - b);
      m = !1;
    }
    return m;
  } finally {
    O = null, P = c, Q = !1;
  }
}
var W = k;
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};
exports.unstable_continueExecution = function () {
  R || Q || (R = !0, f(V));
};
exports.unstable_getCurrentPriorityLevel = function () {
  return P;
};
exports.unstable_getFirstCallbackNode = function () {
  return J(L);
};
exports.unstable_next = function (a) {
  switch (P) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;
    default:
      b = P;
  }
  var c = P;
  P = b;
  try {
    return a();
  } finally {
    P = c;
  }
};
exports.unstable_pauseExecution = function () {};
exports.unstable_requestPaint = W;
exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      a = 3;
  }
  var c = P;
  P = a;
  try {
    return b();
  } finally {
    P = c;
  }
};
exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();
  "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
  switch (a) {
    case 1:
      var e = -1;
      break;
    case 2:
      e = 250;
      break;
    case 5:
      e = 1073741823;
      break;
    case 4:
      e = 1E4;
      break;
    default:
      e = 5E3;
  }
  e = c + e;
  a = {
    id: N++,
    callback: b,
    priorityLevel: a,
    startTime: c,
    expirationTime: e,
    sortIndex: -1
  };
  c > d ? (a.sortIndex = c, H(M, a), null === J(L) && a === J(M) && (S ? h() : S = !0, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = !0, f(V)));
  return a;
};
exports.unstable_wrapCallback = function (a) {
  var b = P;
  return function () {
    var c = P;
    P = b;
    try {
      return a.apply(this, arguments);
    } finally {
      P = c;
    }
  };
};
});

var scheduler = createCommonjsModule(function (module) {

{
  module.exports = scheduler_production_min;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }
    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};

/** @license React v0.26.2
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactReconciler_production_min = createCommonjsModule(function (module) {
module.exports = function $$$reconciler($$$hostConfig) {
  var exports = {};
  var aa = objectAssign,
    ba = react,
    m = scheduler;
  function q(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ca = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    da = 60103,
    ea = 60106,
    fa = 60107,
    ha = 60108,
    ia = 60114,
    ja = 60109,
    ka = 60110,
    la = 60112,
    ma = 60113,
    na = 60120,
    oa = 60115,
    pa = 60116,
    qa = 60121,
    ra = 60129,
    sa = 60130,
    ta = 60131;
  if ("function" === typeof Symbol && Symbol.for) {
    var r = Symbol.for;
    da = r("react.element");
    ea = r("react.portal");
    fa = r("react.fragment");
    ha = r("react.strict_mode");
    ia = r("react.profiler");
    ja = r("react.provider");
    ka = r("react.context");
    la = r("react.forward_ref");
    ma = r("react.suspense");
    na = r("react.suspense_list");
    oa = r("react.memo");
    pa = r("react.lazy");
    qa = r("react.block");
    r("react.scope");
    ra = r("react.debug_trace_mode");
    sa = r("react.offscreen");
    ta = r("react.legacy_hidden");
  }
  var ua = "function" === typeof Symbol && Symbol.iterator;
  function va(a) {
    if (null === a || "object" !== typeof a) return null;
    a = ua && a[ua] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  function wa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case fa:
        return "Fragment";
      case ea:
        return "Portal";
      case ia:
        return "Profiler";
      case ha:
        return "StrictMode";
      case ma:
        return "Suspense";
      case na:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case ka:
        return (a.displayName || "Context") + ".Consumer";
      case ja:
        return (a._context.displayName || "Context") + ".Provider";
      case la:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
      case oa:
        return wa(a.type);
      case qa:
        return wa(a._render);
      case pa:
        b = a._payload;
        a = a._init;
        try {
          return wa(a(b));
        } catch (c) {}
    }
    return null;
  }
  function xa(a) {
    var b = a,
      c = a;
    if (a.alternate) for (; b.return;) b = b.return;else {
      a = b;
      do b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return; while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function ya(a) {
    if (xa(a) !== a) throw Error(q(188));
  }
  function za(a) {
    var b = a.alternate;
    if (!b) {
      b = xa(a);
      if (null === b) throw Error(q(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b;;) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;
      if (null === f) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f;) {
          if (f === c) return ya(e), a;
          if (f === d) return ya(e), b;
          f = f.sibling;
        }
        throw Error(q(188));
      }
      if (c.return !== d.return) c = e, d = f;else {
        for (var g = !1, h = e.child; h;) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child; h;) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g) throw Error(q(189));
        }
      }
      if (c.alternate !== d) throw Error(q(190));
    }
    if (3 !== c.tag) throw Error(q(188));
    return c.stateNode.current === c ? a : b;
  }
  function Aa(a) {
    a = za(a);
    if (!a) return null;
    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child) b.child.return = b, b = b.child;else {
        if (b === a) break;
        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return null;
  }
  function Ba(a) {
    a = za(a);
    if (!a) return null;
    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child && 4 !== b.tag) b.child.return = b, b = b.child;else {
        if (b === a) break;
        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return null;
  }
  function Ca(a, b) {
    for (var c = a.alternate; null !== b;) {
      if (b === a || b === c) return !0;
      b = b.return;
    }
    return !1;
  }
  var Da = $$$hostConfig.getPublicInstance,
    Ea = $$$hostConfig.getRootHostContext,
    Fa = $$$hostConfig.getChildHostContext,
    Ga = $$$hostConfig.prepareForCommit,
    Ha = $$$hostConfig.resetAfterCommit,
    Ia = $$$hostConfig.createInstance,
    Ja = $$$hostConfig.appendInitialChild,
    Ka = $$$hostConfig.finalizeInitialChildren,
    La = $$$hostConfig.prepareUpdate,
    Ma = $$$hostConfig.shouldSetTextContent,
    Na = $$$hostConfig.createTextInstance,
    Pa = $$$hostConfig.scheduleTimeout,
    Qa = $$$hostConfig.cancelTimeout,
    Ra = $$$hostConfig.noTimeout,
    Sa = $$$hostConfig.isPrimaryRenderer,
    Ta = $$$hostConfig.supportsMutation,
    Ua = $$$hostConfig.supportsPersistence,
    Va = $$$hostConfig.supportsHydration,
    Wa = $$$hostConfig.getInstanceFromNode,
    Xa = $$$hostConfig.makeOpaqueHydratingObject,
    Ya = $$$hostConfig.makeClientId,
    Za = $$$hostConfig.beforeActiveInstanceBlur,
    $a = $$$hostConfig.afterActiveInstanceBlur,
    ab = $$$hostConfig.preparePortalMount,
    bb = $$$hostConfig.supportsTestSelectors,
    cb = $$$hostConfig.findFiberRoot,
    db = $$$hostConfig.getBoundingRect,
    eb = $$$hostConfig.getTextContent,
    fb = $$$hostConfig.isHiddenSubtree,
    gb = $$$hostConfig.matchAccessibilityRole,
    hb = $$$hostConfig.setFocusIfFocusable,
    ib = $$$hostConfig.setupIntersectionObserver,
    jb = $$$hostConfig.appendChild,
    kb = $$$hostConfig.appendChildToContainer,
    lb = $$$hostConfig.commitTextUpdate,
    mb = $$$hostConfig.commitMount,
    nb = $$$hostConfig.commitUpdate,
    ob = $$$hostConfig.insertBefore,
    pb = $$$hostConfig.insertInContainerBefore,
    qb = $$$hostConfig.removeChild,
    rb = $$$hostConfig.removeChildFromContainer,
    sb = $$$hostConfig.resetTextContent,
    tb = $$$hostConfig.hideInstance,
    ub = $$$hostConfig.hideTextInstance,
    vb = $$$hostConfig.unhideInstance,
    wb = $$$hostConfig.unhideTextInstance,
    xb = $$$hostConfig.clearContainer,
    yb = $$$hostConfig.cloneInstance,
    zb = $$$hostConfig.createContainerChildSet,
    Ab = $$$hostConfig.appendChildToContainerChildSet,
    Bb = $$$hostConfig.finalizeContainerChildren,
    Cb = $$$hostConfig.replaceContainerChildren,
    Db = $$$hostConfig.cloneHiddenInstance,
    Eb = $$$hostConfig.cloneHiddenTextInstance,
    Fb = $$$hostConfig.canHydrateInstance,
    Gb = $$$hostConfig.canHydrateTextInstance,
    Hb = $$$hostConfig.isSuspenseInstancePending,
    Ib = $$$hostConfig.isSuspenseInstanceFallback,
    Jb = $$$hostConfig.getNextHydratableSibling,
    Kb = $$$hostConfig.getFirstHydratableChild,
    Lb = $$$hostConfig.hydrateInstance,
    Mb = $$$hostConfig.hydrateTextInstance,
    Nb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
    Ob = $$$hostConfig.commitHydratedContainer,
    Pb = $$$hostConfig.commitHydratedSuspenseInstance,
    Qb;
  function Rb(a) {
    if (void 0 === Qb) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Qb = b && b[1] || "";
    }
    return "\n" + Qb + a;
  }
  var Sb = !1;
  function Tb(a, b) {
    if (!a || Sb) return "";
    Sb = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b) {
        if (b = function () {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", {
          set: function () {
            throw Error();
          }
        }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (k) {
            var d = k;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (k) {
            d = k;
          }
          a.call(b.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (k) {
          d = k;
        }
        a();
      }
    } catch (k) {
      if (k && d && "string" === typeof k.stack) {
        for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
        for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
          if (1 !== g || 1 !== h) {
            do if (g--, h--, 0 > h || e[g] !== f[h]) return "\n" + e[g].replace(" at new ", " at "); while (1 <= g && 0 <= h);
          }
          break;
        }
      }
    } finally {
      Sb = !1, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? Rb(a) : "";
  }
  var Ub = [],
    Vb = -1;
  function Wb(a) {
    return {
      current: a
    };
  }
  function z(a) {
    0 > Vb || (a.current = Ub[Vb], Ub[Vb] = null, Vb--);
  }
  function A(a, b) {
    Vb++;
    Ub[Vb] = a.current;
    a.current = b;
  }
  var Xb = {},
    B = Wb(Xb),
    D = Wb(!1),
    Yb = Xb;
  function Zb(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Xb;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
      f;
    for (f in c) e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function E(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function $b() {
    z(D);
    z(B);
  }
  function ac(a, b, c) {
    if (B.current !== Xb) throw Error(q(168));
    A(B, b);
    A(D, c);
  }
  function bc(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in a)) throw Error(q(108, wa(b) || "Unknown", e));
    return aa({}, c, d);
  }
  function cc(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Xb;
    Yb = B.current;
    A(B, a);
    A(D, D.current);
    return !0;
  }
  function dc(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(q(169));
    c ? (a = bc(a, b, Yb), d.__reactInternalMemoizedMergedChildContext = a, z(D), z(B), A(B, a)) : z(D);
    A(D, c);
  }
  var ec = null,
    fc = null,
    gc = m.unstable_now;
  gc();
  var hc = 0,
    F = 8;
  function ic(a) {
    if (0 !== (1 & a)) return F = 15, 1;
    if (0 !== (2 & a)) return F = 14, 2;
    if (0 !== (4 & a)) return F = 13, 4;
    var b = 24 & a;
    if (0 !== b) return F = 12, b;
    if (0 !== (a & 32)) return F = 11, 32;
    b = 192 & a;
    if (0 !== b) return F = 10, b;
    if (0 !== (a & 256)) return F = 9, 256;
    b = 3584 & a;
    if (0 !== b) return F = 8, b;
    if (0 !== (a & 4096)) return F = 7, 4096;
    b = 4186112 & a;
    if (0 !== b) return F = 6, b;
    b = 62914560 & a;
    if (0 !== b) return F = 5, b;
    if (a & 67108864) return F = 4, 67108864;
    if (0 !== (a & 134217728)) return F = 3, 134217728;
    b = 805306368 & a;
    if (0 !== b) return F = 2, b;
    if (0 !== (1073741824 & a)) return F = 1, 1073741824;
    F = 8;
    return a;
  }
  function jc(a) {
    switch (a) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function kc(a) {
    switch (a) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(q(358, a));
    }
  }
  function lc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return F = 0;
    var d = 0,
      e = 0,
      f = a.expiredLanes,
      g = a.suspendedLanes,
      h = a.pingedLanes;
    if (0 !== f) d = f, e = F = 15;else if (f = c & 134217727, 0 !== f) {
      var k = f & ~g;
      0 !== k ? (d = ic(k), e = F) : (h &= f, 0 !== h && (d = ic(h), e = F));
    } else f = c & ~g, 0 !== f ? (d = ic(f), e = F) : 0 !== h && (d = ic(h), e = F);
    if (0 === d) return 0;
    d = 31 - mc(d);
    d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
    if (0 !== b && b !== d && 0 === (b & g)) {
      ic(b);
      if (e <= F) return b;
      F = e;
    }
    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - mc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  }
  function nc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function oc(a, b) {
    switch (a) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return a = pc(24 & ~b), 0 === a ? oc(10, b) : a;
      case 10:
        return a = pc(192 & ~b), 0 === a ? oc(8, b) : a;
      case 8:
        return a = pc(3584 & ~b), 0 === a && (a = pc(4186112 & ~b), 0 === a && (a = 512)), a;
      case 2:
        return b = pc(805306368 & ~b), 0 === b && (b = 268435456), b;
    }
    throw Error(q(358, a));
  }
  function pc(a) {
    return a & -a;
  }
  function qc(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function rc(a, b, c) {
    a.pendingLanes |= b;
    var d = b - 1;
    a.suspendedLanes &= d;
    a.pingedLanes &= d;
    a = a.eventTimes;
    b = 31 - mc(b);
    a[b] = c;
  }
  var mc = Math.clz32 ? Math.clz32 : sc,
    tc = Math.log,
    uc = Math.LN2;
  function sc(a) {
    return 0 === a ? 32 : 31 - (tc(a) / uc | 0) | 0;
  }
  var vc = m.unstable_runWithPriority,
    wc = m.unstable_scheduleCallback,
    xc = m.unstable_cancelCallback,
    yc = m.unstable_shouldYield,
    zc = m.unstable_requestPaint,
    Ac = m.unstable_now,
    Bc = m.unstable_getCurrentPriorityLevel,
    Cc = m.unstable_ImmediatePriority,
    Dc = m.unstable_UserBlockingPriority,
    Ec = m.unstable_NormalPriority,
    Fc = m.unstable_LowPriority,
    Gc = m.unstable_IdlePriority,
    Hc = {},
    Ic = void 0 !== zc ? zc : function () {},
    Jc = null,
    Kc = null,
    Lc = !1,
    Mc = Ac(),
    G = 1E4 > Mc ? Ac : function () {
      return Ac() - Mc;
    };
  function Nc() {
    switch (Bc()) {
      case Cc:
        return 99;
      case Dc:
        return 98;
      case Ec:
        return 97;
      case Fc:
        return 96;
      case Gc:
        return 95;
      default:
        throw Error(q(332));
    }
  }
  function Oc(a) {
    switch (a) {
      case 99:
        return Cc;
      case 98:
        return Dc;
      case 97:
        return Ec;
      case 96:
        return Fc;
      case 95:
        return Gc;
      default:
        throw Error(q(332));
    }
  }
  function Pc(a, b) {
    a = Oc(a);
    return vc(a, b);
  }
  function Qc(a, b, c) {
    a = Oc(a);
    return wc(a, b, c);
  }
  function H() {
    if (null !== Kc) {
      var a = Kc;
      Kc = null;
      xc(a);
    }
    Rc();
  }
  function Rc() {
    if (!Lc && null !== Jc) {
      Lc = !0;
      var a = 0;
      try {
        var b = Jc;
        Pc(99, function () {
          for (; a < b.length; a++) {
            var c = b[a];
            do c = c(!0); while (null !== c);
          }
        });
        Jc = null;
      } catch (c) {
        throw null !== Jc && (Jc = Jc.slice(a + 1)), wc(Cc, H), c;
      } finally {
        Lc = !1;
      }
    }
  }
  var Sc = ca.ReactCurrentBatchConfig;
  function Tc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var I = "function" === typeof Object.is ? Object.is : Tc,
    Uc = Object.prototype.hasOwnProperty;
  function Vc(a, b) {
    if (I(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a),
      d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for (d = 0; d < c.length; d++) if (!Uc.call(b, c[d]) || !I(a[c[d]], b[c[d]])) return !1;
    return !0;
  }
  function Wc(a) {
    switch (a.tag) {
      case 5:
        return Rb(a.type);
      case 16:
        return Rb("Lazy");
      case 13:
        return Rb("Suspense");
      case 19:
        return Rb("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = Tb(a.type, !1), a;
      case 11:
        return a = Tb(a.type.render, !1), a;
      case 22:
        return a = Tb(a.type._render, !1), a;
      case 1:
        return a = Tb(a.type, !0), a;
      default:
        return "";
    }
  }
  function Xc(a, b) {
    if (a && a.defaultProps) {
      b = aa({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  var Yc = Wb(null),
    Zc = null,
    $c = null,
    ad = null;
  function bd() {
    ad = $c = Zc = null;
  }
  function cd(a, b) {
    a = a.type._context;
    Sa ? (A(Yc, a._currentValue), a._currentValue = b) : (A(Yc, a._currentValue2), a._currentValue2 = b);
  }
  function dd(a) {
    var b = Yc.current;
    z(Yc);
    a = a.type._context;
    Sa ? a._currentValue = b : a._currentValue2 = b;
  }
  function ed(a, b) {
    for (; null !== a;) {
      var c = a.alternate;
      if ((a.childLanes & b) === b) {
        if (null === c || (c.childLanes & b) === b) break;else c.childLanes |= b;
      } else a.childLanes |= b, null !== c && (c.childLanes |= b);
      a = a.return;
    }
  }
  function fd(a, b) {
    Zc = a;
    ad = $c = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (gd = !0), a.firstContext = null);
  }
  function J(a, b) {
    if (ad !== a && !1 !== b && 0 !== b) {
      if ("number" !== typeof b || 1073741823 === b) ad = a, b = 1073741823;
      b = {
        context: a,
        observedBits: b,
        next: null
      };
      if (null === $c) {
        if (null === Zc) throw Error(q(308));
        $c = b;
        Zc.dependencies = {
          lanes: 0,
          firstContext: b,
          responders: null
        };
      } else $c = $c.next = b;
    }
    return Sa ? a._currentValue : a._currentValue2;
  }
  var hd = !1;
  function id(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null
      },
      effects: null
    };
  }
  function jd(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
      baseState: a.baseState,
      firstBaseUpdate: a.firstBaseUpdate,
      lastBaseUpdate: a.lastBaseUpdate,
      shared: a.shared,
      effects: a.effects
    });
  }
  function kd(a, b) {
    return {
      eventTime: a,
      lane: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function md(a, b) {
    a = a.updateQueue;
    if (null !== a) {
      a = a.shared;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
  }
  function nd(a, b) {
    var c = a.updateQueue,
      d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null,
        f = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = {
            eventTime: c.eventTime,
            lane: c.lane,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);
        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;
      c = {
        baseState: d.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: f,
        shared: d.shared,
        effects: d.effects
      };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }
  function od(a, b, c, d) {
    var e = a.updateQueue;
    hd = !1;
    var f = e.firstBaseUpdate,
      g = e.lastBaseUpdate,
      h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k = h,
        l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var n = a.alternate;
      if (null !== n) {
        n = n.updateQueue;
        var t = n.lastBaseUpdate;
        t !== g && (null === t ? n.firstBaseUpdate = l : t.next = l, n.lastBaseUpdate = k);
      }
    }
    if (null !== f) {
      t = e.baseState;
      g = 0;
      n = l = k = null;
      do {
        h = f.lane;
        var p = f.eventTime;
        if ((d & h) === h) {
          null !== n && (n = n.next = {
            eventTime: p,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });
          a: {
            var y = a,
              x = f;
            h = b;
            p = c;
            switch (x.tag) {
              case 1:
                y = x.payload;
                if ("function" === typeof y) {
                  t = y.call(p, t, h);
                  break a;
                }
                t = y;
                break a;
              case 3:
                y.flags = y.flags & -4097 | 64;
              case 0:
                y = x.payload;
                h = "function" === typeof y ? y.call(p, t, h) : y;
                if (null === h || void 0 === h) break a;
                t = aa({}, t, h);
                break a;
              case 2:
                hd = !0;
            }
          }
          null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
        } else p = {
          eventTime: p,
          lane: h,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        }, null === n ? (l = n = p, k = t) : n = n.next = p, g |= h;
        f = f.next;
        if (null === f) if (h = e.shared.pending, null === h) break;else f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
      } while (1);
      null === n && (k = t);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = n;
      pd |= g;
      a.lanes = g;
      a.memoizedState = t;
    }
  }
  function qd(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b],
        e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(q(191, e));
        e.call(d);
      }
    }
  }
  var rd = new ba.Component().refs;
  function sd(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : aa({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var vd = {
    isMounted: function (a) {
      return (a = a._reactInternals) ? xa(a) === a : !1;
    },
    enqueueSetState: function (a, b, c) {
      a = a._reactInternals;
      var d = K(),
        e = td(a),
        f = kd(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      md(a, f);
      ud(a, e, d);
    },
    enqueueReplaceState: function (a, b, c) {
      a = a._reactInternals;
      var d = K(),
        e = td(a),
        f = kd(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      md(a, f);
      ud(a, e, d);
    },
    enqueueForceUpdate: function (a, b) {
      a = a._reactInternals;
      var c = K(),
        d = td(a),
        e = kd(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      md(a, e);
      ud(a, d, c);
    }
  };
  function wd(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Vc(c, d) || !Vc(e, f) : !0;
  }
  function xd(a, b, c) {
    var d = !1,
      e = Xb;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = J(f) : (e = E(b) ? Yb : B.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Zb(a, e) : Xb);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = vd;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }
  function yd(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && vd.enqueueReplaceState(b, b.state, null);
  }
  function zd(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = rd;
    id(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = J(f) : (f = E(b) ? Yb : B.current, e.context = Zb(a, f));
    od(a, c, e, d);
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (sd(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && vd.enqueueReplaceState(e, e.state, null), od(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4);
  }
  var Ad = Array.isArray;
  function Bd(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(q(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(q(147, a));
        var e = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;
        b = function (a) {
          var b = d.refs;
          b === rd && (b = d.refs = {});
          null === a ? delete b[e] : b[e] = a;
        };
        b._stringRef = e;
        return b;
      }
      if ("string" !== typeof a) throw Error(q(284));
      if (!c._owner) throw Error(q(290, a));
    }
    return a;
  }
  function Cd(a, b) {
    if ("textarea" !== a.type) throw Error(q(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
  }
  function Dd(a) {
    function b(b, c) {
      if (a) {
        var d = b.lastEffect;
        null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
        c.nextEffect = null;
        c.flags = 8;
      }
    }
    function c(c, d) {
      if (!a) return null;
      for (; null !== d;) b(c, d), d = d.sibling;
      return null;
    }
    function d(a, b) {
      for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
      return a;
    }
    function e(a, b) {
      a = Ed(a, b);
      a.index = 0;
      a.sibling = null;
      return a;
    }
    function f(b, c, d) {
      b.index = d;
      if (!a) return c;
      d = b.alternate;
      if (null !== d) return d = d.index, d < c ? (b.flags = 2, c) : d;
      b.flags = 2;
      return c;
    }
    function g(b) {
      a && null === b.alternate && (b.flags = 2);
      return b;
    }
    function h(a, b, c, d) {
      if (null === b || 6 !== b.tag) return b = Fd(c, a.mode, d), b.return = a, b;
      b = e(b, c);
      b.return = a;
      return b;
    }
    function k(a, b, c, d) {
      if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Bd(a, b, c), d.return = a, d;
      d = Gd(c.type, c.key, c.props, null, a.mode, d);
      d.ref = Bd(a, b, c);
      d.return = a;
      return d;
    }
    function l(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Hd(c, a.mode, d), b.return = a, b;
      b = e(b, c.children || []);
      b.return = a;
      return b;
    }
    function n(a, b, c, d, f) {
      if (null === b || 7 !== b.tag) return b = Id(c, a.mode, d, f), b.return = a, b;
      b = e(b, c);
      b.return = a;
      return b;
    }
    function t(a, b, c) {
      if ("string" === typeof b || "number" === typeof b) return b = Fd("" + b, a.mode, c), b.return = a, b;
      if ("object" === typeof b && null !== b) {
        switch (b.$$typeof) {
          case da:
            return c = Gd(b.type, b.key, b.props, null, a.mode, c), c.ref = Bd(a, null, b), c.return = a, c;
          case ea:
            return b = Hd(b, a.mode, c), b.return = a, b;
        }
        if (Ad(b) || va(b)) return b = Id(b, a.mode, c, null), b.return = a, b;
        Cd(a, b);
      }
      return null;
    }
    function p(a, b, c, d) {
      var e = null !== b ? b.key : null;
      if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case da:
            return c.key === e ? c.type === fa ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;
          case ea:
            return c.key === e ? l(a, b, c, d) : null;
        }
        if (Ad(c) || va(c)) return null !== e ? null : n(a, b, c, d, null);
        Cd(a, c);
      }
      return null;
    }
    function y(a, b, c, d, e) {
      if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
      if ("object" === typeof d && null !== d) {
        switch (d.$$typeof) {
          case da:
            return a = a.get(null === d.key ? c : d.key) || null, d.type === fa ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);
          case ea:
            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
        }
        if (Ad(d) || va(d)) return a = a.get(c) || null, n(b, a, d, e, null);
        Cd(b, d);
      }
      return null;
    }
    function x(e, g, h, k) {
      for (var l = null, v = null, u = g, C = g = 0, n = null; null !== u && C < h.length; C++) {
        u.index > C ? (n = u, u = null) : n = u.sibling;
        var w = p(e, u, h[C], k);
        if (null === w) {
          null === u && (u = n);
          break;
        }
        a && u && null === w.alternate && b(e, u);
        g = f(w, g, C);
        null === v ? l = w : v.sibling = w;
        v = w;
        u = n;
      }
      if (C === h.length) return c(e, u), l;
      if (null === u) {
        for (; C < h.length; C++) u = t(e, h[C], k), null !== u && (g = f(u, g, C), null === v ? l = u : v.sibling = u, v = u);
        return l;
      }
      for (u = d(e, u); C < h.length; C++) n = y(u, e, C, h[C], k), null !== n && (a && null !== n.alternate && u.delete(null === n.key ? C : n.key), g = f(n, g, C), null === v ? l = n : v.sibling = n, v = n);
      a && u.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }
    function Y(e, g, h, k) {
      var l = va(h);
      if ("function" !== typeof l) throw Error(q(150));
      h = l.call(h);
      if (null == h) throw Error(q(151));
      for (var u = l = null, v = g, n = g = 0, C = null, w = h.next(); null !== v && !w.done; n++, w = h.next()) {
        v.index > n ? (C = v, v = null) : C = v.sibling;
        var x = p(e, v, w.value, k);
        if (null === x) {
          null === v && (v = C);
          break;
        }
        a && v && null === x.alternate && b(e, v);
        g = f(x, g, n);
        null === u ? l = x : u.sibling = x;
        u = x;
        v = C;
      }
      if (w.done) return c(e, v), l;
      if (null === v) {
        for (; !w.done; n++, w = h.next()) w = t(e, w.value, k), null !== w && (g = f(w, g, n), null === u ? l = w : u.sibling = w, u = w);
        return l;
      }
      for (v = d(e, v); !w.done; n++, w = h.next()) w = y(v, e, n, w.value, k), null !== w && (a && null !== w.alternate && v.delete(null === w.key ? n : w.key), g = f(w, g, n), null === u ? l = w : u.sibling = w, u = w);
      a && v.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }
    return function (a, d, f, h) {
      var k = "object" === typeof f && null !== f && f.type === fa && null === f.key;
      k && (f = f.props.children);
      var l = "object" === typeof f && null !== f;
      if (l) switch (f.$$typeof) {
        case da:
          a: {
            l = f.key;
            for (k = d; null !== k;) {
              if (k.key === l) {
                switch (k.tag) {
                  case 7:
                    if (f.type === fa) {
                      c(a, k.sibling);
                      d = e(k, f.props.children);
                      d.return = a;
                      a = d;
                      break a;
                    }
                    break;
                  default:
                    if (k.elementType === f.type) {
                      c(a, k.sibling);
                      d = e(k, f.props);
                      d.ref = Bd(a, k, f);
                      d.return = a;
                      a = d;
                      break a;
                    }
                }
                c(a, k);
                break;
              } else b(a, k);
              k = k.sibling;
            }
            f.type === fa ? (d = Id(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Gd(f.type, f.key, f.props, null, a.mode, h), h.ref = Bd(a, d, f), h.return = a, a = h);
          }
          return g(a);
        case ea:
          a: {
            for (k = f.key; null !== d;) {
              if (d.key === k) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);
                  d = e(d, f.children || []);
                  d.return = a;
                  a = d;
                  break a;
                } else {
                  c(a, d);
                  break;
                }
              } else b(a, d);
              d = d.sibling;
            }
            d = Hd(f, a.mode, h);
            d.return = a;
            a = d;
          }
          return g(a);
      }
      if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Fd(f, a.mode, h), d.return = a, a = d), g(a);
      if (Ad(f)) return x(a, d, f, h);
      if (va(f)) return Y(a, d, f, h);
      l && Cd(a, f);
      if ("undefined" === typeof f && !k) switch (a.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(q(152, wa(a.type) || "Component"));
      }
      return c(a, d);
    };
  }
  var Jd = Dd(!0),
    Kd = Dd(!1),
    Ld = {},
    L = Wb(Ld),
    Md = Wb(Ld),
    Nd = Wb(Ld);
  function Od(a) {
    if (a === Ld) throw Error(q(174));
    return a;
  }
  function Pd(a, b) {
    A(Nd, b);
    A(Md, a);
    A(L, Ld);
    a = Ea(b);
    z(L);
    A(L, a);
  }
  function Qd() {
    z(L);
    z(Md);
    z(Nd);
  }
  function Rd(a) {
    var b = Od(Nd.current),
      c = Od(L.current);
    b = Fa(c, a.type, b);
    c !== b && (A(Md, a), A(L, b));
  }
  function Sd(a) {
    Md.current === a && (z(L), z(Md));
  }
  var M = Wb(0);
  function Td(a) {
    for (var b = a; null !== b;) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || Hb(c) || Ib(c))) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 64)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var Ud = null,
    Vd = null,
    Wd = !1;
  function Xd(a, b) {
    var c = Yd(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c.return = a;
    c.flags = 8;
    null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }
  function Zd(a, b) {
    switch (a.tag) {
      case 5:
        return b = Fb(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;
      case 6:
        return b = Gb(b, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function $d(a) {
    if (Wd) {
      var b = Vd;
      if (b) {
        var c = b;
        if (!Zd(a, b)) {
          b = Jb(c);
          if (!b || !Zd(a, b)) {
            a.flags = a.flags & -1025 | 2;
            Wd = !1;
            Ud = a;
            return;
          }
          Xd(Ud, c);
        }
        Ud = a;
        Vd = Kb(b);
      } else a.flags = a.flags & -1025 | 2, Wd = !1, Ud = a;
    }
  }
  function ae(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
    Ud = a;
  }
  function be(a) {
    if (!Va || a !== Ud) return !1;
    if (!Wd) return ae(a), Wd = !0, !1;
    var b = a.type;
    if (5 !== a.tag || "head" !== b && "body" !== b && !Ma(b, a.memoizedProps)) for (b = Vd; b;) Xd(a, b), b = Jb(b);
    ae(a);
    if (13 === a.tag) {
      if (!Va) throw Error(q(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(q(317));
      Vd = Nb(a);
    } else Vd = Ud ? Jb(a.stateNode) : null;
    return !0;
  }
  function ce() {
    Va && (Vd = Ud = null, Wd = !1);
  }
  var de = [];
  function ee() {
    for (var a = 0; a < de.length; a++) {
      var b = de[a];
      Sa ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
    }
    de.length = 0;
  }
  var fe = ca.ReactCurrentDispatcher,
    ge = ca.ReactCurrentBatchConfig,
    he = 0,
    N = null,
    O = null,
    P = null,
    ie = !1,
    je = !1;
  function Q() {
    throw Error(q(321));
  }
  function ke(a, b) {
    if (null === b) return !1;
    for (var c = 0; c < b.length && c < a.length; c++) if (!I(a[c], b[c])) return !1;
    return !0;
  }
  function le(a, b, c, d, e, f) {
    he = f;
    N = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    fe.current = null === a || null === a.memoizedState ? me : ne;
    a = c(d, e);
    if (je) {
      f = 0;
      do {
        je = !1;
        if (!(25 > f)) throw Error(q(301));
        f += 1;
        P = O = null;
        b.updateQueue = null;
        fe.current = oe;
        a = c(d, e);
      } while (je);
    }
    fe.current = pe;
    b = null !== O && null !== O.next;
    he = 0;
    P = O = N = null;
    ie = !1;
    if (b) throw Error(q(300));
    return a;
  }
  function qe() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    null === P ? N.memoizedState = P = a : P = P.next = a;
    return P;
  }
  function re() {
    if (null === O) {
      var a = N.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = O.next;
    var b = null === P ? N.memoizedState : P.next;
    if (null !== b) P = b, O = a;else {
      if (null === a) throw Error(q(310));
      O = a;
      a = {
        memoizedState: O.memoizedState,
        baseState: O.baseState,
        baseQueue: O.baseQueue,
        queue: O.queue,
        next: null
      };
      null === P ? N.memoizedState = P = a : P = P.next = a;
    }
    return P;
  }
  function se(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function te(a) {
    var b = re(),
      c = b.queue;
    if (null === c) throw Error(q(311));
    c.lastRenderedReducer = a;
    var d = O,
      e = d.baseQueue,
      f = c.pending;
    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (null !== e) {
      e = e.next;
      d = d.baseState;
      var h = g = f = null,
        k = e;
      do {
        var l = k.lane;
        if ((he & l) === l) null !== h && (h = h.next = {
          lane: 0,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);else {
          var n = {
            lane: l,
            action: k.action,
            eagerReducer: k.eagerReducer,
            eagerState: k.eagerState,
            next: null
          };
          null === h ? (g = h = n, f = d) : h = h.next = n;
          N.lanes |= l;
          pd |= l;
        }
        k = k.next;
      } while (null !== k && k !== e);
      null === h ? f = d : h.next = g;
      I(d, b.memoizedState) || (gd = !0);
      b.memoizedState = d;
      b.baseState = f;
      b.baseQueue = h;
      c.lastRenderedState = d;
    }
    return [b.memoizedState, c.dispatch];
  }
  function ue(a) {
    var b = re(),
      c = b.queue;
    if (null === c) throw Error(q(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
      e = c.pending,
      f = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = e = e.next;
      do f = a(f, g.action), g = g.next; while (g !== e);
      I(f, b.memoizedState) || (gd = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function ve(a, b, c) {
    var d = b._getVersion;
    d = d(b._source);
    var e = Sa ? b._workInProgressVersionPrimary : b._workInProgressVersionSecondary;
    if (null !== e) a = e === d;else if (a = a.mutableReadLanes, a = (he & a) === a) Sa ? b._workInProgressVersionPrimary = d : b._workInProgressVersionSecondary = d, de.push(b);
    if (a) return c(b._source);
    de.push(b);
    throw Error(q(350));
  }
  function we(a, b, c, d) {
    var e = R;
    if (null === e) throw Error(q(349));
    var f = b._getVersion,
      g = f(b._source),
      h = fe.current,
      k = h.useState(function () {
        return ve(e, b, c);
      }),
      l = k[1],
      n = k[0];
    k = P;
    var t = a.memoizedState,
      p = t.refs,
      y = p.getSnapshot,
      x = t.source;
    t = t.subscribe;
    var Y = N;
    a.memoizedState = {
      refs: p,
      source: b,
      subscribe: d
    };
    h.useEffect(function () {
      p.getSnapshot = c;
      p.setSnapshot = l;
      var a = f(b._source);
      if (!I(g, a)) {
        a = c(b._source);
        I(n, a) || (l(a), a = td(Y), e.mutableReadLanes |= a & e.pendingLanes);
        a = e.mutableReadLanes;
        e.entangledLanes |= a;
        for (var d = e.entanglements, h = a; 0 < h;) {
          var k = 31 - mc(h),
            t = 1 << k;
          d[k] |= a;
          h &= ~t;
        }
      }
    }, [c, b, d]);
    h.useEffect(function () {
      return d(b._source, function () {
        var a = p.getSnapshot,
          c = p.setSnapshot;
        try {
          c(a(b._source));
          var d = td(Y);
          e.mutableReadLanes |= d & e.pendingLanes;
        } catch (Oa) {
          c(function () {
            throw Oa;
          });
        }
      });
    }, [b, d]);
    I(y, c) && I(x, b) && I(t, d) || (a = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: se,
      lastRenderedState: n
    }, a.dispatch = l = xe.bind(null, N, a), k.queue = a, k.baseQueue = null, n = ve(e, b, c), k.memoizedState = k.baseState = n);
    return n;
  }
  function ye(a, b, c) {
    var d = re();
    return we(d, a, b, c);
  }
  function ze(a) {
    var b = qe();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: se,
      lastRenderedState: a
    };
    a = a.dispatch = xe.bind(null, N, a);
    return [b.memoizedState, a];
  }
  function Ae(a, b, c, d) {
    a = {
      tag: a,
      create: b,
      destroy: c,
      deps: d,
      next: null
    };
    b = N.updateQueue;
    null === b ? (b = {
      lastEffect: null
    }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function Be(a) {
    var b = qe();
    a = {
      current: a
    };
    return b.memoizedState = a;
  }
  function Ce() {
    return re().memoizedState;
  }
  function De(a, b, c, d) {
    var e = qe();
    N.flags |= a;
    e.memoizedState = Ae(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function Ee(a, b, c, d) {
    var e = re();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== O) {
      var g = O.memoizedState;
      f = g.destroy;
      if (null !== d && ke(d, g.deps)) {
        Ae(b, c, f, d);
        return;
      }
    }
    N.flags |= a;
    e.memoizedState = Ae(1 | b, c, f, d);
  }
  function Fe(a, b) {
    return De(516, 4, a, b);
  }
  function Ge(a, b) {
    return Ee(516, 4, a, b);
  }
  function He(a, b) {
    return Ee(4, 2, a, b);
  }
  function Ie(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function () {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
      b.current = null;
    };
  }
  function Je(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return Ee(4, 2, Ie.bind(null, b, a), c);
  }
  function Ke() {}
  function Le(a, b) {
    var c = re();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && ke(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function Me(a, b) {
    var c = re();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && ke(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function Ne(a, b) {
    var c = Nc();
    Pc(98 > c ? 98 : c, function () {
      a(!0);
    });
    Pc(97 < c ? 97 : c, function () {
      var c = ge.transition;
      ge.transition = 1;
      try {
        a(!1), b();
      } finally {
        ge.transition = c;
      }
    });
  }
  function xe(a, b, c) {
    var d = K(),
      e = td(a),
      f = {
        lane: e,
        action: c,
        eagerReducer: null,
        eagerState: null,
        next: null
      },
      g = b.pending;
    null === g ? f.next = f : (f.next = g.next, g.next = f);
    b.pending = f;
    g = a.alternate;
    if (a === N || null !== g && g === N) je = ie = !0;else {
      if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
        var h = b.lastRenderedState,
          k = g(h, c);
        f.eagerReducer = g;
        f.eagerState = k;
        if (I(k, h)) return;
      } catch (l) {} finally {}
      ud(a, e, d);
    }
  }
  var pe = {
      readContext: J,
      useCallback: Q,
      useContext: Q,
      useEffect: Q,
      useImperativeHandle: Q,
      useLayoutEffect: Q,
      useMemo: Q,
      useReducer: Q,
      useRef: Q,
      useState: Q,
      useDebugValue: Q,
      useDeferredValue: Q,
      useTransition: Q,
      useMutableSource: Q,
      useOpaqueIdentifier: Q,
      unstable_isNewReconciler: !1
    },
    me = {
      readContext: J,
      useCallback: function (a, b) {
        qe().memoizedState = [a, void 0 === b ? null : b];
        return a;
      },
      useContext: J,
      useEffect: Fe,
      useImperativeHandle: function (a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return De(4, 2, Ie.bind(null, b, a), c);
      },
      useLayoutEffect: function (a, b) {
        return De(4, 2, a, b);
      },
      useMemo: function (a, b) {
        var c = qe();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      },
      useReducer: function (a, b, c) {
        var d = qe();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = d.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: a,
          lastRenderedState: b
        };
        a = a.dispatch = xe.bind(null, N, a);
        return [d.memoizedState, a];
      },
      useRef: Be,
      useState: ze,
      useDebugValue: Ke,
      useDeferredValue: function (a) {
        var b = ze(a),
          c = b[0],
          d = b[1];
        Fe(function () {
          var b = ge.transition;
          ge.transition = 1;
          try {
            d(a);
          } finally {
            ge.transition = b;
          }
        }, [a]);
        return c;
      },
      useTransition: function () {
        var a = ze(!1),
          b = a[0];
        a = Ne.bind(null, a[1]);
        Be(a);
        return [a, b];
      },
      useMutableSource: function (a, b, c) {
        var d = qe();
        d.memoizedState = {
          refs: {
            getSnapshot: b,
            setSnapshot: null
          },
          source: a,
          subscribe: c
        };
        return we(d, a, b, c);
      },
      useOpaqueIdentifier: function () {
        if (Wd) {
          var a = !1,
            b = Xa(function () {
              a || (a = !0, c(Ya()));
              throw Error(q(355));
            }),
            c = ze(b)[1];
          0 === (N.mode & 2) && (N.flags |= 516, Ae(5, function () {
            c(Ya());
          }, void 0, null));
          return b;
        }
        b = Ya();
        ze(b);
        return b;
      },
      unstable_isNewReconciler: !1
    },
    ne = {
      readContext: J,
      useCallback: Le,
      useContext: J,
      useEffect: Ge,
      useImperativeHandle: Je,
      useLayoutEffect: He,
      useMemo: Me,
      useReducer: te,
      useRef: Ce,
      useState: function () {
        return te(se);
      },
      useDebugValue: Ke,
      useDeferredValue: function (a) {
        var b = te(se),
          c = b[0],
          d = b[1];
        Ge(function () {
          var b = ge.transition;
          ge.transition = 1;
          try {
            d(a);
          } finally {
            ge.transition = b;
          }
        }, [a]);
        return c;
      },
      useTransition: function () {
        var a = te(se)[0];
        return [Ce().current, a];
      },
      useMutableSource: ye,
      useOpaqueIdentifier: function () {
        return te(se)[0];
      },
      unstable_isNewReconciler: !1
    },
    oe = {
      readContext: J,
      useCallback: Le,
      useContext: J,
      useEffect: Ge,
      useImperativeHandle: Je,
      useLayoutEffect: He,
      useMemo: Me,
      useReducer: ue,
      useRef: Ce,
      useState: function () {
        return ue(se);
      },
      useDebugValue: Ke,
      useDeferredValue: function (a) {
        var b = ue(se),
          c = b[0],
          d = b[1];
        Ge(function () {
          var b = ge.transition;
          ge.transition = 1;
          try {
            d(a);
          } finally {
            ge.transition = b;
          }
        }, [a]);
        return c;
      },
      useTransition: function () {
        var a = ue(se)[0];
        return [Ce().current, a];
      },
      useMutableSource: ye,
      useOpaqueIdentifier: function () {
        return ue(se)[0];
      },
      unstable_isNewReconciler: !1
    },
    Oe = ca.ReactCurrentOwner,
    gd = !1;
  function S(a, b, c, d) {
    b.child = null === a ? Kd(b, null, c, d) : Jd(b, a.child, c, d);
  }
  function Pe(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    fd(b, e);
    d = le(a, b, c, d, f, e);
    if (null !== a && !gd) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, Re(a, b, e);
    b.flags |= 1;
    S(a, b, d, e);
    return b.child;
  }
  function Se(a, b, c, d, e, f) {
    if (null === a) {
      var g = c.type;
      if ("function" === typeof g && !Te(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, Ue(a, b, g, d, e, f);
      a = Gd(c.type, null, d, b, b.mode, f);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    g = a.child;
    if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Vc, c(e, d) && a.ref === b.ref)) return Re(a, b, f);
    b.flags |= 1;
    a = Ed(g, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function Ue(a, b, c, d, e, f) {
    if (null !== a && Vc(a.memoizedProps, d) && a.ref === b.ref) if (gd = !1, 0 !== (f & e)) 0 !== (a.flags & 16384) && (gd = !0);else return b.lanes = a.lanes, Re(a, b, f);
    return Ve(a, b, c, d, f);
  }
  function We(a, b, c) {
    var d = b.pendingProps,
      e = d.children,
      f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) {
      if (0 === (b.mode & 4)) b.memoizedState = {
        baseLanes: 0
      }, Xe(b, c);else if (0 !== (c & 1073741824)) b.memoizedState = {
        baseLanes: 0
      }, Xe(b, null !== f ? f.baseLanes : c);else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
        baseLanes: a
      }, Xe(b, a), null;
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, Xe(b, d);
    S(a, b, e, c);
    return b.child;
  }
  function Ye(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
  }
  function Ve(a, b, c, d, e) {
    var f = E(c) ? Yb : B.current;
    f = Zb(b, f);
    fd(b, e);
    c = le(a, b, c, d, f, e);
    if (null !== a && !gd) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, Re(a, b, e);
    b.flags |= 1;
    S(a, b, c, e);
    return b.child;
  }
  function Ze(a, b, c, d, e) {
    if (E(c)) {
      var f = !0;
      cc(b);
    } else f = !1;
    fd(b, e);
    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), xd(b, c, d), zd(b, c, d, e), d = !0;else if (null === a) {
      var g = b.stateNode,
        h = b.memoizedProps;
      g.props = h;
      var k = g.context,
        l = c.contextType;
      "object" === typeof l && null !== l ? l = J(l) : (l = E(c) ? Yb : B.current, l = Zb(b, l));
      var n = c.getDerivedStateFromProps,
        t = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
      t || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && yd(b, g, d, l);
      hd = !1;
      var p = b.memoizedState;
      g.state = p;
      od(b, d, g, e);
      k = b.memoizedState;
      h !== d || p !== k || D.current || hd ? ("function" === typeof n && (sd(b, c, n, d), k = b.memoizedState), (h = hd || wd(b, c, h, d, p, k, l)) ? (t || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
    } else {
      g = b.stateNode;
      jd(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : Xc(b.type, h);
      g.props = l;
      t = b.pendingProps;
      p = g.context;
      k = c.contextType;
      "object" === typeof k && null !== k ? k = J(k) : (k = E(c) ? Yb : B.current, k = Zb(b, k));
      var y = c.getDerivedStateFromProps;
      (n = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== t || p !== k) && yd(b, g, d, k);
      hd = !1;
      p = b.memoizedState;
      g.state = p;
      od(b, d, g, e);
      var x = b.memoizedState;
      h !== t || p !== x || D.current || hd ? ("function" === typeof y && (sd(b, c, y, d), x = b.memoizedState), (l = hd || wd(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
    }
    return $e(a, b, c, d, f, e);
  }
  function $e(a, b, c, d, e, f) {
    Ye(a, b);
    var g = 0 !== (b.flags & 64);
    if (!d && !g) return e && dc(b, c, !1), Re(a, b, f);
    d = b.stateNode;
    Oe.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Jd(b, a.child, null, f), b.child = Jd(b, null, h, f)) : S(a, b, h, f);
    b.memoizedState = d.state;
    e && dc(b, c, !0);
    return b.child;
  }
  function af(a) {
    var b = a.stateNode;
    b.pendingContext ? ac(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ac(a, b.context, !1);
    Pd(a, b.containerInfo);
  }
  var bf = {
    dehydrated: null,
    retryLane: 0
  };
  function cf(a, b, c) {
    var d = b.pendingProps,
      e = M.current,
      f = !1,
      g;
    (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
    A(M, e & 1);
    if (null === a) {
      void 0 !== d.fallback && $d(b);
      a = d.children;
      e = d.fallback;
      if (f) return a = df(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = bf, a;
      if ("number" === typeof d.unstable_expectedLoadTime) return a = df(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = bf, b.lanes = 33554432, a;
      c = ef({
        mode: "visible",
        children: a
      }, b.mode, c, null);
      c.return = b;
      return b.child = c;
    }
    if (null !== a.memoizedState) {
      if (f) return d = ff(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
        baseLanes: c
      } : {
        baseLanes: e.baseLanes | c
      }, f.childLanes = a.childLanes & ~c, b.memoizedState = bf, d;
      c = gf(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }
    if (f) return d = ff(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
      baseLanes: c
    } : {
      baseLanes: e.baseLanes | c
    }, f.childLanes = a.childLanes & ~c, b.memoizedState = bf, d;
    c = gf(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  function df(a, b, c, d) {
    var e = a.mode,
      f = a.child;
    b = {
      mode: "hidden",
      children: b
    };
    0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = ef(b, e, 0, null);
    c = Id(c, e, d, null);
    f.return = a;
    c.return = a;
    f.sibling = c;
    a.child = f;
    return c;
  }
  function gf(a, b, c, d) {
    var e = a.child;
    a = e.sibling;
    c = Ed(e, {
      mode: "visible",
      children: c
    });
    0 === (b.mode & 2) && (c.lanes = d);
    c.return = b;
    c.sibling = null;
    null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
    return b.child = c;
  }
  function ff(a, b, c, d, e) {
    var f = b.mode,
      g = a.child;
    a = g.sibling;
    var h = {
      mode: "hidden",
      children: c
    };
    0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Ed(g, h);
    null !== a ? d = Ed(a, d) : (d = Id(d, f, e, null), d.flags |= 2);
    d.return = b;
    c.return = b;
    c.sibling = d;
    b.child = c;
    return d;
  }
  function hf(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    ed(a.return, b);
  }
  function jf(a, b, c, d, e, f) {
    var g = a.memoizedState;
    null === g ? a.memoizedState = {
      isBackwards: b,
      rendering: null,
      renderingStartTime: 0,
      last: d,
      tail: c,
      tailMode: e,
      lastEffect: f
    } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
  }
  function kf(a, b, c) {
    var d = b.pendingProps,
      e = d.revealOrder,
      f = d.tail;
    S(a, b, d.children, c);
    d = M.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 64;else {
      if (null !== a && 0 !== (a.flags & 64)) a: for (a = b.child; null !== a;) {
        if (13 === a.tag) null !== a.memoizedState && hf(a, c);else if (19 === a.tag) hf(a, c);else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;
        for (; null === a.sibling;) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    A(M, d);
    if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c;) a = c.alternate, null !== a && null === Td(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        jf(b, !1, e, c, f, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e;) {
          a = e.alternate;
          if (null !== a && null === Td(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        jf(b, !0, c, null, f, b.lastEffect);
        break;
      case "together":
        jf(b, !1, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
    return b.child;
  }
  function Re(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    pd |= b.lanes;
    if (0 !== (c & b.childLanes)) {
      if (null !== a && b.child !== a.child) throw Error(q(153));
      if (null !== b.child) {
        a = b.child;
        c = Ed(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Ed(a, a.pendingProps), c.return = b;
        c.sibling = null;
      }
      return b.child;
    }
    return null;
  }
  function lf(a) {
    a.flags |= 4;
  }
  var mf, nf, of, pf;
  if (Ta) mf = function (a, b) {
    for (var c = b.child; null !== c;) {
      if (5 === c.tag || 6 === c.tag) Ja(a, c.stateNode);else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }, nf = function () {}, of = function (a, b, c, d, e) {
    a = a.memoizedProps;
    if (a !== d) {
      var f = b.stateNode,
        g = Od(L.current);
      c = La(f, c, a, d, e, g);
      (b.updateQueue = c) && lf(b);
    }
  }, pf = function (a, b, c, d) {
    c !== d && lf(b);
  };else if (Ua) {
    mf = function (a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Db(f, e.type, e.memoizedProps, e));
          Ja(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Eb(f, e.memoizedProps, e)), Ja(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.flags & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;
            if (null !== g && (null !== g.child && (g.child.return = g, mf(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }
          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }
        if (e === b) break;
        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    };
    var qf = function (a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Db(f, e.type, e.memoizedProps, e));
          Ab(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Eb(f, e.memoizedProps, e)), Ab(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.flags & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;
            if (null !== g && (null !== g.child && (g.child.return = g, qf(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }
          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }
        if (e === b) break;
        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    };
    nf = function (a) {
      var b = a.stateNode;
      if (null !== a.firstEffect) {
        var c = b.containerInfo,
          d = zb(c);
        qf(d, a, !1, !1);
        b.pendingChildren = d;
        lf(a);
        Bb(c, d);
      }
    };
    of = function (a, b, c, d, e) {
      var f = a.stateNode,
        g = a.memoizedProps;
      if ((a = null === b.firstEffect) && g === d) b.stateNode = f;else {
        var h = b.stateNode,
          k = Od(L.current),
          l = null;
        g !== d && (l = La(h, c, g, d, e, k));
        a && null === l ? b.stateNode = f : (f = yb(f, l, c, g, d, b, a, h), Ka(f, c, d, e, k) && lf(b), b.stateNode = f, a ? lf(b) : mf(f, b, !1, !1));
      }
    };
    pf = function (a, b, c, d) {
      c !== d ? (a = Od(Nd.current), c = Od(L.current), b.stateNode = Na(d, a, c, b), lf(b)) : b.stateNode = a.stateNode;
    };
  } else nf = function () {}, of = function () {}, pf = function () {};
  function rf(a, b) {
    if (!Wd) switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function sf(a, b, c) {
    var d = b.pendingProps;
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return E(b.type) && $b(), null;
      case 3:
        Qd();
        z(D);
        z(B);
        ee();
        d = b.stateNode;
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) be(b) ? lf(b) : d.hydrate || (b.flags |= 256);
        nf(b);
        return null;
      case 5:
        Sd(b);
        var e = Od(Nd.current);
        c = b.type;
        if (null !== a && null != b.stateNode) of(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);else {
          if (!d) {
            if (null === b.stateNode) throw Error(q(166));
            return null;
          }
          a = Od(L.current);
          if (be(b)) {
            if (!Va) throw Error(q(175));
            a = Lb(b.stateNode, b.type, b.memoizedProps, e, a, b);
            b.updateQueue = a;
            null !== a && lf(b);
          } else {
            var f = Ia(c, d, e, a, b);
            mf(f, b, !1, !1);
            b.stateNode = f;
            Ka(f, c, d, e, a) && lf(b);
          }
          null !== b.ref && (b.flags |= 128);
        }
        return null;
      case 6:
        if (a && null != b.stateNode) pf(a, b, a.memoizedProps, d);else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(q(166));
          a = Od(Nd.current);
          e = Od(L.current);
          if (be(b)) {
            if (!Va) throw Error(q(176));
            Mb(b.stateNode, b.memoizedProps, b) && lf(b);
          } else b.stateNode = Na(d, a, e, b);
        }
        return null;
      case 13:
        z(M);
        d = b.memoizedState;
        if (0 !== (b.flags & 64)) return b.lanes = c, b;
        d = null !== d;
        e = !1;
        null === a ? void 0 !== b.memoizedProps.fallback && be(b) : e = null !== a.memoizedState;
        if (d && !e && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (M.current & 1)) 0 === T && (T = 3);else {
          if (0 === T || 3 === T) T = 4;
          null === R || 0 === (pd & 134217727) && 0 === (tf & 134217727) || uf(R, U);
        }
        Ua && d && (b.flags |= 4);
        Ta && (d || e) && (b.flags |= 4);
        return null;
      case 4:
        return Qd(), nf(b), null === a && ab(b.stateNode.containerInfo), null;
      case 10:
        return dd(b), null;
      case 17:
        return E(b.type) && $b(), null;
      case 19:
        z(M);
        d = b.memoizedState;
        if (null === d) return null;
        e = 0 !== (b.flags & 64);
        f = d.rendering;
        if (null === f) {
          if (e) rf(d, !1);else {
            if (0 !== T || null !== a && 0 !== (a.flags & 64)) for (a = b.child; null !== a;) {
              f = Td(a);
              if (null !== f) {
                b.flags |= 64;
                rf(d, !1);
                a = f.updateQueue;
                null !== a && (b.updateQueue = a, b.flags |= 4);
                null === d.lastEffect && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                a = c;
                for (d = b.child; null !== d;) e = d, c = a, e.flags &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, f = e.alternate, null === f ? (e.childLanes = 0, e.lanes = c, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = f.childLanes, e.lanes = f.lanes, e.child = f.child, e.memoizedProps = f.memoizedProps, e.memoizedState = f.memoizedState, e.updateQueue = f.updateQueue, e.type = f.type, c = f.dependencies, e.dependencies = null === c ? null : {
                  lanes: c.lanes,
                  firstContext: c.firstContext
                }), d = d.sibling;
                A(M, M.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
            null !== d.tail && G() > vf && (b.flags |= 64, e = !0, rf(d, !1), b.lanes = 33554432);
          }
        } else {
          if (!e) if (a = Td(f), null !== a) {
            if (b.flags |= 64, e = !0, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), rf(d, !0), null === d.tail && "hidden" === d.tailMode && !f.alternate && !Wd) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
          } else 2 * G() - d.renderingStartTime > vf && 1073741824 !== c && (b.flags |= 64, e = !0, rf(d, !1), b.lanes = 33554432);
          d.isBackwards ? (f.sibling = b.child, b.child = f) : (a = d.last, null !== a ? a.sibling = f : b.child = f, d.last = f);
        }
        return null !== d.tail ? (a = d.tail, d.rendering = a, d.tail = a.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = G(), a.sibling = null, b = M.current, A(M, e ? b & 1 | 2 : b & 1), a) : null;
      case 23:
      case 24:
        return wf(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
    }
    throw Error(q(156, b.tag));
  }
  function xf(a) {
    switch (a.tag) {
      case 1:
        E(a.type) && $b();
        var b = a.flags;
        return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
      case 3:
        Qd();
        z(D);
        z(B);
        ee();
        b = a.flags;
        if (0 !== (b & 64)) throw Error(q(285));
        a.flags = b & -4097 | 64;
        return a;
      case 5:
        return Sd(a), null;
      case 13:
        return z(M), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
      case 19:
        return z(M), null;
      case 4:
        return Qd(), null;
      case 10:
        return dd(a), null;
      case 23:
      case 24:
        return wf(), null;
      default:
        return null;
    }
  }
  function yf(a, b) {
    try {
      var c = "",
        d = b;
      do c += Wc(d), d = d.return; while (d);
      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return {
      value: a,
      source: b,
      stack: e
    };
  }
  function zf(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  var Af = "function" === typeof WeakMap ? WeakMap : Map;
  function Bf(a, b, c) {
    c = kd(-1, c);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;
    c.callback = function () {
      Cf || (Cf = !0, Df = d);
      zf(a, b);
    };
    return c;
  }
  function Ef(a, b, c) {
    c = kd(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function () {
        zf(a, b);
        return d(e);
      };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      "function" !== typeof d && (null === Ff ? Ff = new Set([this]) : Ff.add(this), zf(a, b));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }
  var Gf = "function" === typeof WeakSet ? WeakSet : Set;
  function Hf(a) {
    var b = a.ref;
    if (null !== b) if ("function" === typeof b) try {
      b(null);
    } catch (c) {
      If(a, c);
    } else b.current = null;
  }
  function Jf(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (b.flags & 256 && null !== a) {
          var c = a.memoizedProps,
            d = a.memoizedState;
          a = b.stateNode;
          b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : Xc(b.type, c), d);
          a.__reactInternalSnapshotBeforeUpdate = b;
        }
        return;
      case 3:
        Ta && b.flags & 256 && xb(b.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(q(163));
  }
  function Kf(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.destroy;
          c.destroy = void 0;
          void 0 !== d && d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Lf(a, b, c) {
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          a = b = b.next;
          do {
            if (3 === (a.tag & 3)) {
              var d = a.create;
              a.destroy = d();
            }
            a = a.next;
          } while (a !== b);
        }
        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          a = b = b.next;
          do {
            var e = a;
            d = e.next;
            e = e.tag;
            0 !== (e & 4) && 0 !== (e & 1) && (Mf(c, a), Nf(c, a));
            a = d;
          } while (a !== b);
        }
        return;
      case 1:
        a = c.stateNode;
        c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : Xc(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
        b = c.updateQueue;
        null !== b && qd(c, b, a);
        return;
      case 3:
        b = c.updateQueue;
        if (null !== b) {
          a = null;
          if (null !== c.child) switch (c.child.tag) {
            case 5:
              a = Da(c.child.stateNode);
              break;
            case 1:
              a = c.child.stateNode;
          }
          qd(c, b, a);
        }
        return;
      case 5:
        a = c.stateNode;
        null === b && c.flags & 4 && mb(a, c.type, c.memoizedProps, c);
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        Va && null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Pb(c))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(q(163));
  }
  function Of(a, b) {
    if (Ta) for (var c = a;;) {
      if (5 === c.tag) {
        var d = c.stateNode;
        b ? tb(d) : vb(c.stateNode, c.memoizedProps);
      } else if (6 === c.tag) d = c.stateNode, b ? ub(d) : wb(d, c.memoizedProps);else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === a) break;
      for (; null === c.sibling;) {
        if (null === c.return || c.return === a) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }
  function Pf(a, b) {
    if (fc && "function" === typeof fc.onCommitFiberUnmount) try {
      fc.onCommitFiberUnmount(ec, b);
    } catch (f) {}
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        a = b.updateQueue;
        if (null !== a && (a = a.lastEffect, null !== a)) {
          var c = a = a.next;
          do {
            var d = c,
              e = d.destroy;
            d = d.tag;
            if (void 0 !== e) if (0 !== (d & 4)) Mf(b, c);else {
              d = b;
              try {
                e();
              } catch (f) {
                If(d, f);
              }
            }
            c = c.next;
          } while (c !== a);
        }
        break;
      case 1:
        Hf(b);
        a = b.stateNode;
        if ("function" === typeof a.componentWillUnmount) try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f) {
          If(b, f);
        }
        break;
      case 5:
        Hf(b);
        break;
      case 4:
        Ta ? Qf(a, b) : Ua && Ua && (b = b.stateNode.containerInfo, a = zb(b), Cb(b, a));
    }
  }
  function Rf(a, b) {
    for (var c = b;;) if (Pf(a, c), null === c.child || Ta && 4 === c.tag) {
      if (c === b) break;
      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    } else c.child.return = c, c = c.child;
  }
  function Sf(a) {
    a.alternate = null;
    a.child = null;
    a.dependencies = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.return = null;
    a.updateQueue = null;
  }
  function Tf(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Uf(a) {
    if (Ta) {
      a: {
        for (var b = a.return; null !== b;) {
          if (Tf(b)) break a;
          b = b.return;
        }
        throw Error(q(160));
      }
      var c = b;
      b = c.stateNode;
      switch (c.tag) {
        case 5:
          var d = !1;
          break;
        case 3:
          b = b.containerInfo;
          d = !0;
          break;
        case 4:
          b = b.containerInfo;
          d = !0;
          break;
        default:
          throw Error(q(161));
      }
      c.flags & 16 && (sb(b), c.flags &= -17);
      a: b: for (c = a;;) {
        for (; null === c.sibling;) {
          if (null === c.return || Tf(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
          if (c.flags & 2) continue b;
          if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
        }
        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }
      d ? Vf(a, c, b) : Wf(a, c, b);
    }
  }
  function Vf(a, b, c) {
    var d = a.tag,
      e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? pb(c, a, b) : kb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Vf(a, b, c), a = a.sibling; null !== a;) Vf(a, b, c), a = a.sibling;
  }
  function Wf(a, b, c) {
    var d = a.tag,
      e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? ob(c, a, b) : jb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Wf(a, b, c), a = a.sibling; null !== a;) Wf(a, b, c), a = a.sibling;
  }
  function Qf(a, b) {
    for (var c = b, d = !1, e, f;;) {
      if (!d) {
        d = c.return;
        a: for (;;) {
          if (null === d) throw Error(q(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f = !1;
              break a;
            case 3:
              e = e.containerInfo;
              f = !0;
              break a;
            case 4:
              e = e.containerInfo;
              f = !0;
              break a;
          }
          d = d.return;
        }
        d = !0;
      }
      if (5 === c.tag || 6 === c.tag) Rf(a, c), f ? rb(e, c.stateNode) : qb(e, c.stateNode);else if (4 === c.tag) {
        if (null !== c.child) {
          e = c.stateNode.containerInfo;
          f = !0;
          c.child.return = c;
          c = c.child;
          continue;
        }
      } else if (Pf(a, c), null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
        4 === c.tag && (d = !1);
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }
  function Xf(a, b) {
    if (Ta) {
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          Kf(3, b);
          return;
        case 1:
          return;
        case 5:
          var c = b.stateNode;
          if (null != c) {
            var d = b.memoizedProps;
            a = null !== a ? a.memoizedProps : d;
            var e = b.type,
              f = b.updateQueue;
            b.updateQueue = null;
            null !== f && nb(c, f, e, a, d, b);
          }
          return;
        case 6:
          if (null === b.stateNode) throw Error(q(162));
          c = b.memoizedProps;
          lb(b.stateNode, null !== a ? a.memoizedProps : c, c);
          return;
        case 3:
          Va && (b = b.stateNode, b.hydrate && (b.hydrate = !1, Ob(b.containerInfo)));
          return;
        case 12:
          return;
        case 13:
          Yf(b);
          Zf(b);
          return;
        case 19:
          Zf(b);
          return;
        case 17:
          return;
        case 23:
        case 24:
          Of(b, null !== b.memoizedState);
          return;
      }
      throw Error(q(163));
    }
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        Kf(3, b);
        return;
      case 12:
        return;
      case 13:
        Yf(b);
        Zf(b);
        return;
      case 19:
        Zf(b);
        return;
      case 3:
        Va && (c = b.stateNode, c.hydrate && (c.hydrate = !1, Ob(c.containerInfo)));
        break;
      case 23:
      case 24:
        return;
    }
    a: if (Ua) {
      switch (b.tag) {
        case 1:
        case 5:
        case 6:
        case 20:
          break a;
        case 3:
        case 4:
          b = b.stateNode;
          Cb(b.containerInfo, b.pendingChildren);
          break a;
      }
      throw Error(q(163));
    }
  }
  function Yf(a) {
    null !== a.memoizedState && ($f = G(), Ta && Of(a.child, !0));
  }
  function Zf(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Gf());
      b.forEach(function (b) {
        var d = ag.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }
  function bg(a, b) {
    return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
  }
  var cg = 0,
    dg = 1,
    eg = 2,
    fg = 3,
    gg = 4;
  if ("function" === typeof Symbol && Symbol.for) {
    var hg = Symbol.for;
    cg = hg("selector.component");
    dg = hg("selector.has_pseudo_class");
    eg = hg("selector.role");
    fg = hg("selector.test_id");
    gg = hg("selector.text");
  }
  function ig(a) {
    var b = Wa(a);
    if (null != b) {
      if ("string" !== typeof b.memoizedProps["data-testname"]) throw Error(q(364));
      return b;
    }
    a = cb(a);
    if (null === a) throw Error(q(362));
    return a.stateNode.current;
  }
  function jg(a, b) {
    switch (b.$$typeof) {
      case cg:
        if (a.type === b.value) return !0;
        break;
      case dg:
        a: {
          b = b.value;
          a = [a, 0];
          for (var c = 0; c < a.length;) {
            var d = a[c++],
              e = a[c++],
              f = b[e];
            if (5 !== d.tag || !fb(d)) {
              for (; null != f && jg(d, f);) e++, f = b[e];
              if (e === b.length) {
                b = !0;
                break a;
              } else for (d = d.child; null !== d;) a.push(d, e), d = d.sibling;
            }
          }
          b = !1;
        }
        return b;
      case eg:
        if (5 === a.tag && gb(a.stateNode, b.value)) return !0;
        break;
      case gg:
        if (5 === a.tag || 6 === a.tag) if (a = eb(a), null !== a && 0 <= a.indexOf(b.value)) return !0;
        break;
      case fg:
        if (5 === a.tag && (a = a.memoizedProps["data-testname"], "string" === typeof a && a.toLowerCase() === b.value.toLowerCase())) return !0;
        break;
      default:
        throw Error(q(365, b));
    }
    return !1;
  }
  function kg(a) {
    switch (a.$$typeof) {
      case cg:
        return "<" + (wa(a.value) || "Unknown") + ">";
      case dg:
        return ":has(" + (kg(a) || "") + ")";
      case eg:
        return '[role="' + a.value + '"]';
      case gg:
        return '"' + a.value + '"';
      case fg:
        return '[data-testname="' + a.value + '"]';
      default:
        throw Error(q(365, a));
    }
  }
  function lg(a, b) {
    var c = [];
    a = [a, 0];
    for (var d = 0; d < a.length;) {
      var e = a[d++],
        f = a[d++],
        g = b[f];
      if (5 !== e.tag || !fb(e)) {
        for (; null != g && jg(e, g);) f++, g = b[f];
        if (f === b.length) c.push(e);else for (e = e.child; null !== e;) a.push(e, f), e = e.sibling;
      }
    }
    return c;
  }
  function mg(a, b) {
    if (!bb) throw Error(q(363));
    a = ig(a);
    a = lg(a, b);
    b = [];
    a = Array.from(a);
    for (var c = 0; c < a.length;) {
      var d = a[c++];
      if (5 === d.tag) fb(d) || b.push(d.stateNode);else for (d = d.child; null !== d;) a.push(d), d = d.sibling;
    }
    return b;
  }
  var ng = null;
  function og(a) {
    if (null === ng) try {
      var b = ("require" + Math.random()).slice(0, 7);
      ng = (module && module[b]).call(module, "timers").setImmediate;
    } catch (c) {
      ng = function (a) {
        var b = new MessageChannel();
        b.port1.onmessage = a;
        b.port2.postMessage(void 0);
      };
    }
    return ng(a);
  }
  var pg = Math.ceil,
    qg = ca.ReactCurrentDispatcher,
    rg = ca.ReactCurrentOwner,
    sg = ca.IsSomeRendererActing,
    V = 0,
    R = null,
    W = null,
    U = 0,
    tg = 0,
    ug = Wb(0),
    T = 0,
    vg = null,
    wg = 0,
    pd = 0,
    tf = 0,
    xg = 0,
    yg = null,
    $f = 0,
    vf = Infinity;
  function zg() {
    vf = G() + 500;
  }
  var X = null,
    Cf = !1,
    Df = null,
    Ff = null,
    Ag = !1,
    Bg = null,
    Cg = 90,
    Dg = [],
    Eg = [],
    Fg = null,
    Gg = 0,
    Hg = null,
    Ig = -1,
    Jg = 0,
    Kg = 0,
    Lg = null,
    Mg = !1;
  function K() {
    return 0 !== (V & 48) ? G() : -1 !== Ig ? Ig : Ig = G();
  }
  function td(a) {
    a = a.mode;
    if (0 === (a & 2)) return 1;
    if (0 === (a & 4)) return 99 === Nc() ? 1 : 2;
    0 === Jg && (Jg = wg);
    if (0 !== Sc.transition) {
      0 !== Kg && (Kg = null !== yg ? yg.pendingLanes : 0);
      a = Jg;
      var b = 4186112 & ~Kg;
      b &= -b;
      0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
      return b;
    }
    a = Nc();
    0 !== (V & 4) && 98 === a ? a = oc(12, Jg) : (a = jc(a), a = oc(a, Jg));
    return a;
  }
  function ud(a, b, c) {
    if (50 < Gg) throw Gg = 0, Hg = null, Error(q(185));
    a = Ng(a, b);
    if (null === a) return null;
    rc(a, b, c);
    a === R && (tf |= b, 4 === T && uf(a, U));
    var d = Nc();
    1 === b ? 0 !== (V & 8) && 0 === (V & 48) ? Og(a) : (Z(a, c), 0 === V && (zg(), H())) : (0 === (V & 4) || 98 !== d && 99 !== d || (null === Fg ? Fg = new Set([a]) : Fg.add(a)), Z(a, c));
    yg = a;
  }
  function Ng(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
  }
  function Z(a, b) {
    for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;) {
      var h = 31 - mc(g),
        k = 1 << h,
        l = f[h];
      if (-1 === l) {
        if (0 === (k & d) || 0 !== (k & e)) {
          l = b;
          ic(k);
          var n = F;
          f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
        }
      } else l <= b && (a.expiredLanes |= k);
      g &= ~k;
    }
    d = lc(a, a === R ? U : 0);
    b = F;
    if (0 === d) null !== c && (c !== Hc && xc(c), a.callbackNode = null, a.callbackPriority = 0);else {
      if (null !== c) {
        if (a.callbackPriority === b) return;
        c !== Hc && xc(c);
      }
      15 === b ? (c = Og.bind(null, a), null === Jc ? (Jc = [c], Kc = wc(Cc, Rc)) : Jc.push(c), c = Hc) : 14 === b ? c = Qc(99, Og.bind(null, a)) : (c = kc(b), c = Qc(c, Pg.bind(null, a)));
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Pg(a) {
    Ig = -1;
    Kg = Jg = 0;
    if (0 !== (V & 48)) throw Error(q(327));
    var b = a.callbackNode;
    if (Qg() && a.callbackNode !== b) return null;
    var c = lc(a, a === R ? U : 0);
    if (0 === c) return null;
    var d = c;
    var e = V;
    V |= 16;
    var f = Rg();
    if (R !== a || U !== d) zg(), Sg(a, d);
    do try {
      Tg();
      break;
    } catch (h) {
      Ug(a, h);
    } while (1);
    bd();
    qg.current = f;
    V = e;
    null !== W ? d = 0 : (R = null, U = 0, d = T);
    if (0 !== (wg & tf)) Sg(a, 0);else if (0 !== d) {
      2 === d && (V |= 64, a.hydrate && (a.hydrate = !1, xb(a.containerInfo)), c = nc(a), 0 !== c && (d = Vg(a, c)));
      if (1 === d) throw b = vg, Sg(a, 0), uf(a, c), Z(a, G()), b;
      a.finishedWork = a.current.alternate;
      a.finishedLanes = c;
      switch (d) {
        case 0:
        case 1:
          throw Error(q(345));
        case 2:
          Zg(a);
          break;
        case 3:
          uf(a, c);
          if ((c & 62914560) === c && (d = $f + 500 - G(), 10 < d)) {
            if (0 !== lc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & c) !== c) {
              K();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Pa(Zg.bind(null, a), d);
            break;
          }
          Zg(a);
          break;
        case 4:
          uf(a, c);
          if ((c & 4186112) === c) break;
          d = a.eventTimes;
          for (e = -1; 0 < c;) {
            var g = 31 - mc(c);
            f = 1 << g;
            g = d[g];
            g > e && (e = g);
            c &= ~f;
          }
          c = e;
          c = G() - c;
          c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * pg(c / 1960)) - c;
          if (10 < c) {
            a.timeoutHandle = Pa(Zg.bind(null, a), c);
            break;
          }
          Zg(a);
          break;
        case 5:
          Zg(a);
          break;
        default:
          throw Error(q(329));
      }
    }
    Z(a, G());
    return a.callbackNode === b ? Pg.bind(null, a) : null;
  }
  function uf(a, b) {
    b &= ~xg;
    b &= ~tf;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b;) {
      var c = 31 - mc(b),
        d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Og(a) {
    if (0 !== (V & 48)) throw Error(q(327));
    Qg();
    if (a === R && 0 !== (a.expiredLanes & U)) {
      var b = U;
      var c = Vg(a, b);
      0 !== (wg & tf) && (b = lc(a, b), c = Vg(a, b));
    } else b = lc(a, 0), c = Vg(a, b);
    0 !== a.tag && 2 === c && (V |= 64, a.hydrate && (a.hydrate = !1, xb(a.containerInfo)), b = nc(a), 0 !== b && (c = Vg(a, b)));
    if (1 === c) throw c = vg, Sg(a, 0), uf(a, b), Z(a, G()), c;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Zg(a);
    Z(a, G());
    return null;
  }
  function $g() {
    if (null !== Fg) {
      var a = Fg;
      Fg = null;
      a.forEach(function (a) {
        a.expiredLanes |= 24 & a.pendingLanes;
        Z(a, G());
      });
    }
    H();
  }
  function ah(a, b) {
    var c = V;
    V |= 1;
    try {
      return a(b);
    } finally {
      V = c, 0 === V && (zg(), H());
    }
  }
  function bh(a, b) {
    var c = V;
    if (0 !== (c & 48)) return a(b);
    V |= 1;
    try {
      if (a) return Pc(99, a.bind(null, b));
    } finally {
      V = c, H();
    }
  }
  function Xe(a, b) {
    A(ug, tg);
    tg |= b;
    wg |= b;
  }
  function wf() {
    tg = ug.current;
    z(ug);
  }
  function Sg(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    c !== Ra && (a.timeoutHandle = Ra, Qa(c));
    if (null !== W) for (c = W.return; null !== c;) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $b();
          break;
        case 3:
          Qd();
          z(D);
          z(B);
          ee();
          break;
        case 5:
          Sd(d);
          break;
        case 4:
          Qd();
          break;
        case 13:
          z(M);
          break;
        case 19:
          z(M);
          break;
        case 10:
          dd(d);
          break;
        case 23:
        case 24:
          wf();
      }
      c = c.return;
    }
    R = a;
    W = Ed(a.current, null);
    U = tg = wg = b;
    T = 0;
    vg = null;
    xg = tf = pd = 0;
  }
  function Ug(a, b) {
    do {
      var c = W;
      try {
        bd();
        fe.current = pe;
        if (ie) {
          for (var d = N.memoizedState; null !== d;) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          ie = !1;
        }
        he = 0;
        P = O = N = null;
        je = !1;
        rg.current = null;
        if (null === c || null === c.return) {
          T = 1;
          vg = b;
          W = null;
          break;
        }
        a: {
          var f = a,
            g = c.return,
            h = c,
            k = b;
          b = U;
          h.flags |= 2048;
          h.firstEffect = h.lastEffect = null;
          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
            var l = k;
            if (0 === (h.mode & 2)) {
              var n = h.alternate;
              n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
            }
            var t = 0 !== (M.current & 1),
              p = g;
            do {
              var y;
              if (y = 13 === p.tag) {
                var x = p.memoizedState;
                if (null !== x) y = null !== x.dehydrated ? !0 : !1;else {
                  var Y = p.memoizedProps;
                  y = void 0 === Y.fallback ? !1 : !0 !== Y.unstable_avoidThisFallback ? !0 : t ? !1 : !0;
                }
              }
              if (y) {
                var u = p.updateQueue;
                if (null === u) {
                  var v = new Set();
                  v.add(l);
                  p.updateQueue = v;
                } else u.add(l);
                if (0 === (p.mode & 2)) {
                  p.flags |= 64;
                  h.flags |= 16384;
                  h.flags &= -2981;
                  if (1 === h.tag) if (null === h.alternate) h.tag = 17;else {
                    var C = kd(-1, 1);
                    C.tag = 2;
                    md(h, C);
                  }
                  h.lanes |= 1;
                  break a;
                }
                k = void 0;
                h = b;
                var Oa = f.pingCache;
                null === Oa ? (Oa = f.pingCache = new Af(), k = new Set(), Oa.set(l, k)) : (k = Oa.get(l), void 0 === k && (k = new Set(), Oa.set(l, k)));
                if (!k.has(h)) {
                  k.add(h);
                  var Qe = ch.bind(null, f, l, h);
                  l.then(Qe, Qe);
                }
                p.flags |= 4096;
                p.lanes = b;
                break a;
              }
              p = p.return;
            } while (null !== p);
            k = Error((wa(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
          }
          5 !== T && (T = 2);
          k = yf(k, h);
          p = g;
          do {
            switch (p.tag) {
              case 3:
                f = k;
                p.flags |= 4096;
                b &= -b;
                p.lanes |= b;
                var Wg = Bf(p, f, b);
                nd(p, Wg);
                break a;
              case 1:
                f = k;
                var Xg = p.type,
                  ld = p.stateNode;
                if (0 === (p.flags & 64) && ("function" === typeof Xg.getDerivedStateFromError || null !== ld && "function" === typeof ld.componentDidCatch && (null === Ff || !Ff.has(ld)))) {
                  p.flags |= 4096;
                  b &= -b;
                  p.lanes |= b;
                  var Yg = Ef(p, f, b);
                  nd(p, Yg);
                  break a;
                }
            }
            p = p.return;
          } while (null !== p);
        }
        dh(c);
      } catch (w) {
        b = w;
        W === c && null !== c && (W = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Rg() {
    var a = qg.current;
    qg.current = pe;
    return null === a ? pe : a;
  }
  function Vg(a, b) {
    var c = V;
    V |= 16;
    var d = Rg();
    R === a && U === b || Sg(a, b);
    do try {
      eh();
      break;
    } catch (e) {
      Ug(a, e);
    } while (1);
    bd();
    V = c;
    qg.current = d;
    if (null !== W) throw Error(q(261));
    R = null;
    U = 0;
    return T;
  }
  function eh() {
    for (; null !== W;) fh(W);
  }
  function Tg() {
    for (; null !== W && !yc();) fh(W);
  }
  function fh(a) {
    var b = gh(a.alternate, a, tg);
    a.memoizedProps = a.pendingProps;
    null === b ? dh(a) : W = b;
    rg.current = null;
  }
  function dh(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 2048)) {
        c = sf(c, b, tg);
        if (null !== c) {
          W = c;
          return;
        }
        c = b;
        if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (tg & 1073741824) || 0 === (c.mode & 4)) {
          for (var d = 0, e = c.child; null !== e;) d |= e.lanes | e.childLanes, e = e.sibling;
          c.childLanes = d;
        }
        null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
      } else {
        c = xf(b);
        if (null !== c) {
          c.flags &= 2047;
          W = c;
          return;
        }
        null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
      }
      b = b.sibling;
      if (null !== b) {
        W = b;
        return;
      }
      W = b = a;
    } while (null !== b);
    0 === T && (T = 5);
  }
  function Zg(a) {
    var b = Nc();
    Pc(99, hh.bind(null, a, b));
    return null;
  }
  function hh(a, b) {
    do Qg(); while (null !== Bg);
    if (0 !== (V & 48)) throw Error(q(327));
    var c = a.finishedWork;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(q(177));
    a.callbackNode = null;
    var d = c.lanes | c.childLanes,
      e = d,
      f = a.pendingLanes & ~e;
    a.pendingLanes = e;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= e;
    a.mutableReadLanes &= e;
    a.entangledLanes &= e;
    e = a.entanglements;
    for (var g = a.eventTimes, h = a.expirationTimes; 0 < f;) {
      var k = 31 - mc(f),
        l = 1 << k;
      e[k] = 0;
      g[k] = -1;
      h[k] = -1;
      f &= ~l;
    }
    null !== Fg && 0 === (d & 24) && Fg.has(a) && Fg.delete(a);
    a === R && (W = R = null, U = 0);
    1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
    if (null !== d) {
      e = V;
      V |= 32;
      rg.current = null;
      Lg = Ga(a.containerInfo);
      Mg = !1;
      X = d;
      do try {
        ih();
      } catch (v) {
        if (null === X) throw Error(q(330));
        If(X, v);
        X = X.nextEffect;
      } while (null !== X);
      Lg = null;
      X = d;
      do try {
        for (g = a; null !== X;) {
          var n = X.flags;
          n & 16 && Ta && sb(X.stateNode);
          if (n & 128) {
            var t = X.alternate;
            if (null !== t) {
              var p = t.ref;
              null !== p && ("function" === typeof p ? p(null) : p.current = null);
            }
          }
          switch (n & 1038) {
            case 2:
              Uf(X);
              X.flags &= -3;
              break;
            case 6:
              Uf(X);
              X.flags &= -3;
              Xf(X.alternate, X);
              break;
            case 1024:
              X.flags &= -1025;
              break;
            case 1028:
              X.flags &= -1025;
              Xf(X.alternate, X);
              break;
            case 4:
              Xf(X.alternate, X);
              break;
            case 8:
              h = g;
              f = X;
              Ta ? Qf(h, f) : Rf(h, f);
              var y = f.alternate;
              Sf(f);
              null !== y && Sf(y);
          }
          X = X.nextEffect;
        }
      } catch (v) {
        if (null === X) throw Error(q(330));
        If(X, v);
        X = X.nextEffect;
      } while (null !== X);
      Mg && $a();
      Ha(a.containerInfo);
      a.current = c;
      X = d;
      do try {
        for (n = a; null !== X;) {
          var x = X.flags;
          x & 36 && Lf(n, X.alternate, X);
          if (x & 128) {
            t = void 0;
            var Y = X.ref;
            if (null !== Y) {
              var u = X.stateNode;
              switch (X.tag) {
                case 5:
                  t = Da(u);
                  break;
                default:
                  t = u;
              }
              "function" === typeof Y ? Y(t) : Y.current = t;
            }
          }
          X = X.nextEffect;
        }
      } catch (v) {
        if (null === X) throw Error(q(330));
        If(X, v);
        X = X.nextEffect;
      } while (null !== X);
      X = null;
      Ic();
      V = e;
    } else a.current = c;
    if (Ag) Ag = !1, Bg = a, Cg = b;else for (X = d; null !== X;) b = X.nextEffect, X.nextEffect = null, X.flags & 8 && (x = X, x.sibling = null, x.stateNode = null), X = b;
    d = a.pendingLanes;
    0 === d && (Ff = null);
    1 === d ? a === Hg ? Gg++ : (Gg = 0, Hg = a) : Gg = 0;
    c = c.stateNode;
    if (fc && "function" === typeof fc.onCommitFiberRoot) try {
      fc.onCommitFiberRoot(ec, c, void 0, 64 === (c.current.flags & 64));
    } catch (v) {}
    Z(a, G());
    if (Cf) throw Cf = !1, a = Df, Df = null, a;
    if (0 !== (V & 8)) return null;
    H();
    return null;
  }
  function ih() {
    for (; null !== X;) {
      var a = X.alternate;
      Mg || null === Lg || (0 !== (X.flags & 8) ? Ca(X, Lg) && (Mg = !0, Za()) : 13 === X.tag && bg(a, X) && Ca(X, Lg) && (Mg = !0, Za()));
      var b = X.flags;
      0 !== (b & 256) && Jf(a, X);
      0 === (b & 512) || Ag || (Ag = !0, Qc(97, function () {
        Qg();
        return null;
      }));
      X = X.nextEffect;
    }
  }
  function Qg() {
    if (90 !== Cg) {
      var a = 97 < Cg ? 97 : Cg;
      Cg = 90;
      return Pc(a, jh);
    }
    return !1;
  }
  function Nf(a, b) {
    Dg.push(b, a);
    Ag || (Ag = !0, Qc(97, function () {
      Qg();
      return null;
    }));
  }
  function Mf(a, b) {
    Eg.push(b, a);
    Ag || (Ag = !0, Qc(97, function () {
      Qg();
      return null;
    }));
  }
  function jh() {
    if (null === Bg) return !1;
    var a = Bg;
    Bg = null;
    if (0 !== (V & 48)) throw Error(q(331));
    var b = V;
    V |= 32;
    var c = Eg;
    Eg = [];
    for (var d = 0; d < c.length; d += 2) {
      var e = c[d],
        f = c[d + 1],
        g = e.destroy;
      e.destroy = void 0;
      if ("function" === typeof g) try {
        g();
      } catch (k) {
        if (null === f) throw Error(q(330));
        If(f, k);
      }
    }
    c = Dg;
    Dg = [];
    for (d = 0; d < c.length; d += 2) {
      e = c[d];
      f = c[d + 1];
      try {
        var h = e.create;
        e.destroy = h();
      } catch (k) {
        if (null === f) throw Error(q(330));
        If(f, k);
      }
    }
    for (h = a.current.firstEffect; null !== h;) a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
    V = b;
    H();
    return !0;
  }
  function kh(a, b, c) {
    b = yf(c, b);
    b = Bf(a, b, 1);
    md(a, b);
    b = K();
    a = Ng(a, 1);
    null !== a && (rc(a, 1, b), Z(a, b));
  }
  function If(a, b) {
    if (3 === a.tag) kh(a, a, b);else for (var c = a.return; null !== c;) {
      if (3 === c.tag) {
        kh(c, a, b);
        break;
      } else if (1 === c.tag) {
        var d = c.stateNode;
        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ff || !Ff.has(d))) {
          a = yf(b, a);
          var e = Ef(c, a, 1);
          md(c, e);
          e = K();
          c = Ng(c, 1);
          if (null !== c) rc(c, 1, e), Z(c, e);else if ("function" === typeof d.componentDidCatch && (null === Ff || !Ff.has(d))) try {
            d.componentDidCatch(b, a);
          } catch (f) {}
          break;
        }
      }
      c = c.return;
    }
  }
  function ch(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = K();
    a.pingedLanes |= a.suspendedLanes & c;
    R === a && (U & c) === c && (4 === T || 3 === T && (U & 62914560) === U && 500 > G() - $f ? Sg(a, 0) : xg |= c);
    Z(a, b);
  }
  function ag(a, b) {
    var c = a.stateNode;
    null !== c && c.delete(b);
    b = 0;
    0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === Nc() ? 1 : 2 : (0 === Jg && (Jg = wg), b = pc(62914560 & ~Jg), 0 === b && (b = 4194304)));
    c = K();
    a = Ng(a, b);
    null !== a && (rc(a, b, c), Z(a, c));
  }
  var gh;
  gh = function (a, b, c) {
    var d = b.lanes;
    if (null !== a) {
      if (a.memoizedProps !== b.pendingProps || D.current) gd = !0;else if (0 !== (c & d)) gd = 0 !== (a.flags & 16384) ? !0 : !1;else {
        gd = !1;
        switch (b.tag) {
          case 3:
            af(b);
            ce();
            break;
          case 5:
            Rd(b);
            break;
          case 1:
            E(b.type) && cc(b);
            break;
          case 4:
            Pd(b, b.stateNode.containerInfo);
            break;
          case 10:
            cd(b, b.memoizedProps.value);
            break;
          case 13:
            if (null !== b.memoizedState) {
              if (0 !== (c & b.child.childLanes)) return cf(a, b, c);
              A(M, M.current & 1);
              b = Re(a, b, c);
              return null !== b ? b.sibling : null;
            }
            A(M, M.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 64)) {
              if (d) return kf(a, b, c);
              b.flags |= 64;
            }
            var e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            A(M, M.current);
            if (d) break;else return null;
          case 23:
          case 24:
            return b.lanes = 0, We(a, b, c);
        }
        return Re(a, b, c);
      }
    } else gd = !1;
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        d = b.type;
        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        e = Zb(b, B.current);
        fd(b, c);
        e = le(null, b, d, a, e, c);
        b.flags |= 1;
        if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
          b.tag = 1;
          b.memoizedState = null;
          b.updateQueue = null;
          if (E(d)) {
            var f = !0;
            cc(b);
          } else f = !1;
          b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
          id(b);
          var g = d.getDerivedStateFromProps;
          "function" === typeof g && sd(b, d, g, a);
          e.updater = vd;
          b.stateNode = e;
          e._reactInternals = b;
          zd(b, d, a, c);
          b = $e(null, b, d, !0, f, c);
        } else b.tag = 0, S(null, b, e, c), b = b.child;
        return b;
      case 16:
        e = b.elementType;
        a: {
          null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
          a = b.pendingProps;
          f = e._init;
          e = f(e._payload);
          b.type = e;
          f = b.tag = lh(e);
          a = Xc(e, a);
          switch (f) {
            case 0:
              b = Ve(null, b, e, a, c);
              break a;
            case 1:
              b = Ze(null, b, e, a, c);
              break a;
            case 11:
              b = Pe(null, b, e, a, c);
              break a;
            case 14:
              b = Se(null, b, e, Xc(e.type, a), d, c);
              break a;
          }
          throw Error(q(306, e, ""));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), Ve(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), Ze(a, b, d, e, c);
      case 3:
        af(b);
        d = b.updateQueue;
        if (null === a || null === d) throw Error(q(282));
        d = b.pendingProps;
        e = b.memoizedState;
        e = null !== e ? e.element : null;
        jd(a, b);
        od(b, d, null, c);
        d = b.memoizedState.element;
        if (d === e) ce(), b = Re(a, b, c);else {
          e = b.stateNode;
          if (f = e.hydrate) Va ? (Vd = Kb(b.stateNode.containerInfo), Ud = b, f = Wd = !0) : f = !1;
          if (f) {
            if (Va && (a = e.mutableSourceEagerHydrationData, null != a)) for (e = 0; e < a.length; e += 2) f = a[e], g = a[e + 1], Sa ? f._workInProgressVersionPrimary = g : f._workInProgressVersionSecondary = g, de.push(f);
            c = Kd(b, null, d, c);
            for (b.child = c; c;) c.flags = c.flags & -3 | 1024, c = c.sibling;
          } else S(a, b, d, c), ce();
          b = b.child;
        }
        return b;
      case 5:
        return Rd(b), null === a && $d(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ma(d, e) ? g = null : null !== f && Ma(d, f) && (b.flags |= 16), Ye(a, b), S(a, b, g, c), b.child;
      case 6:
        return null === a && $d(b), null;
      case 13:
        return cf(a, b, c);
      case 4:
        return Pd(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Jd(b, null, d, c) : S(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), Pe(a, b, d, e, c);
      case 7:
        return S(a, b, b.pendingProps, c), b.child;
      case 8:
        return S(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return S(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          g = b.memoizedProps;
          f = e.value;
          cd(b, f);
          if (null !== g) {
            var h = g.value;
            f = I(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;
            if (0 === f) {
              if (g.children === e.children && !D.current) {
                b = Re(a, b, c);
                break a;
              }
            } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
              var k = h.dependencies;
              if (null !== k) {
                g = h.child;
                for (var l = k.firstContext; null !== l;) {
                  if (l.context === d && 0 !== (l.observedBits & f)) {
                    1 === h.tag && (l = kd(-1, c & -c), l.tag = 2, md(h, l));
                    h.lanes |= c;
                    l = h.alternate;
                    null !== l && (l.lanes |= c);
                    ed(h.return, c);
                    k.lanes |= c;
                    break;
                  }
                  l = l.next;
                }
              } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;
              if (null !== g) g.return = h;else for (g = h; null !== g;) {
                if (g === b) {
                  g = null;
                  break;
                }
                h = g.sibling;
                if (null !== h) {
                  h.return = g.return;
                  g = h;
                  break;
                }
                g = g.return;
              }
              h = g;
            }
          }
          S(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, f = b.pendingProps, d = f.children, fd(b, c), e = J(e, f.unstable_observedBits), d = d(e), b.flags |= 1, S(a, b, d, c), b.child;
      case 14:
        return e = b.type, f = Xc(e, b.pendingProps), f = Xc(e.type, f), Se(a, b, e, f, d, c);
      case 15:
        return Ue(a, b, b.type, b.pendingProps, d, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, E(d) ? (a = !0, cc(b)) : a = !1, fd(b, c), xd(b, d, e), zd(b, d, e, c), $e(null, b, d, !0, a, c);
      case 19:
        return kf(a, b, c);
      case 23:
        return We(a, b, c);
      case 24:
        return We(a, b, c);
    }
    throw Error(q(156, b.tag));
  };
  var mh = {
      current: !1
    },
    nh = m.unstable_flushAllWithoutAsserting,
    oh = "function" === typeof nh;
  function ph() {
    if (void 0 !== nh) return nh();
    for (var a = !1; Qg();) a = !0;
    return a;
  }
  function qh(a) {
    try {
      ph(), og(function () {
        ph() ? qh(a) : a();
      });
    } catch (b) {
      a(b);
    }
  }
  var rh = 0,
    sh = !1;
  function th(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.flags = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Yd(a, b, c, d) {
    return new th(a, b, c, d);
  }
  function Te(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function lh(a) {
    if ("function" === typeof a) return Te(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === la) return 11;
      if (a === oa) return 14;
    }
    return 2;
  }
  function Ed(a, b) {
    var c = a.alternate;
    null === c ? (c = Yd(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
      lanes: b.lanes,
      firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function Gd(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) Te(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
      case fa:
        return Id(c.children, e, f, b);
      case ra:
        g = 8;
        e |= 16;
        break;
      case ha:
        g = 8;
        e |= 1;
        break;
      case ia:
        return a = Yd(12, c, b, e | 8), a.elementType = ia, a.type = ia, a.lanes = f, a;
      case ma:
        return a = Yd(13, c, b, e), a.type = ma, a.elementType = ma, a.lanes = f, a;
      case na:
        return a = Yd(19, c, b, e), a.elementType = na, a.lanes = f, a;
      case sa:
        return ef(c, e, f, b);
      case ta:
        return a = Yd(24, c, b, e), a.elementType = ta, a.lanes = f, a;
      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case ja:
            g = 10;
            break a;
          case ka:
            g = 9;
            break a;
          case la:
            g = 11;
            break a;
          case oa:
            g = 14;
            break a;
          case pa:
            g = 16;
            d = null;
            break a;
          case qa:
            g = 22;
            break a;
        }
        throw Error(q(130, null == a ? a : typeof a, ""));
    }
    b = Yd(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }
  function Id(a, b, c, d) {
    a = Yd(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function ef(a, b, c, d) {
    a = Yd(23, a, d, b);
    a.elementType = sa;
    a.lanes = c;
    return a;
  }
  function Fd(a, b, c) {
    a = Yd(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function Hd(a, b, c) {
    b = Yd(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }
  function uh(a, b, c) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = Ra;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 0;
    this.eventTimes = qc(0);
    this.expirationTimes = qc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = qc(0);
    Va && (this.mutableSourceEagerHydrationData = null);
  }
  function vh(a) {
    var b = a._reactInternals;
    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(q(188));
      throw Error(q(268, Object.keys(a)));
    }
    a = Aa(b);
    return null === a ? null : a.stateNode;
  }
  function wh(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function xh(a, b) {
    wh(a, b);
    (a = a.alternate) && wh(a, b);
  }
  function yh(a) {
    a = Aa(a);
    return null === a ? null : a.stateNode;
  }
  function zh() {
    return null;
  }
  exports.IsThisRendererActing = mh;
  exports.act = function (a) {
    function b() {
      rh--;
      sg.current = c;
      mh.current = d;
    }
    !1 === sh && (sh = !0, console.error("act(...) is not supported in production builds of React, and might not behave as expected."));
    rh++;
    var c = sg.current,
      d = mh.current;
    sg.current = !0;
    mh.current = !0;
    try {
      var e = ah(a);
    } catch (f) {
      throw b(), f;
    }
    if (null !== e && "object" === typeof e && "function" === typeof e.then) return {
      then: function (a, d) {
        e.then(function () {
          1 < rh || !0 === oh && !0 === c ? (b(), a()) : qh(function (c) {
            b();
            c ? d(c) : a();
          });
        }, function (a) {
          b();
          d(a);
        });
      }
    };
    try {
      1 !== rh || !1 !== oh && !1 !== c || ph(), b();
    } catch (f) {
      throw b(), f;
    }
    return {
      then: function (a) {
        a();
      }
    };
  };
  exports.attemptContinuousHydration = function (a) {
    if (13 === a.tag) {
      var b = K();
      ud(a, 67108864, b);
      xh(a, 67108864);
    }
  };
  exports.attemptHydrationAtCurrentPriority = function (a) {
    if (13 === a.tag) {
      var b = K(),
        c = td(a);
      ud(a, c, b);
      xh(a, c);
    }
  };
  exports.attemptSynchronousHydration = function (a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.hydrate) {
          var c = ic(b.pendingLanes);
          b.expiredLanes |= c & b.pendingLanes;
          Z(b, G());
          0 === (V & 48) && (zg(), H());
        }
        break;
      case 13:
        var d = K();
        bh(function () {
          return ud(a, 1, d);
        });
        xh(a, 4);
    }
  };
  exports.attemptUserBlockingHydration = function (a) {
    if (13 === a.tag) {
      var b = K();
      ud(a, 4, b);
      xh(a, 4);
    }
  };
  exports.batchedEventUpdates = function (a, b) {
    var c = V;
    V |= 2;
    try {
      return a(b);
    } finally {
      V = c, 0 === V && (zg(), H());
    }
  };
  exports.batchedUpdates = ah;
  exports.createComponentSelector = function (a) {
    return {
      $$typeof: cg,
      value: a
    };
  };
  exports.createContainer = function (a, b, c) {
    a = new uh(a, b, c);
    b = Yd(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
    a.current = b;
    b.stateNode = a;
    id(b);
    return a;
  };
  exports.createHasPsuedoClassSelector = function (a) {
    return {
      $$typeof: dg,
      value: a
    };
  };
  exports.createPortal = function (a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: ea,
      key: null == d ? null : "" + d,
      children: a,
      containerInfo: b,
      implementation: c
    };
  };
  exports.createRoleSelector = function (a) {
    return {
      $$typeof: eg,
      value: a
    };
  };
  exports.createTestNameSelector = function (a) {
    return {
      $$typeof: fg,
      value: a
    };
  };
  exports.createTextSelector = function (a) {
    return {
      $$typeof: gg,
      value: a
    };
  };
  exports.deferredUpdates = function (a) {
    return Pc(97, a);
  };
  exports.discreteUpdates = function (a, b, c, d, e) {
    var f = V;
    V |= 4;
    try {
      return Pc(98, a.bind(null, b, c, d, e));
    } finally {
      V = f, 0 === V && (zg(), H());
    }
  };
  exports.findAllNodes = mg;
  exports.findBoundingRects = function (a, b) {
    if (!bb) throw Error(q(363));
    b = mg(a, b);
    a = [];
    for (var c = 0; c < b.length; c++) a.push(db(b[c]));
    for (b = a.length - 1; 0 < b; b--) {
      c = a[b];
      for (var d = c.x, e = d + c.width, f = c.y, g = f + c.height, h = b - 1; 0 <= h; h--) if (b !== h) {
        var k = a[h],
          l = k.x,
          n = l + k.width,
          t = k.y,
          p = t + k.height;
        if (d >= l && f >= t && e <= n && g <= p) {
          a.splice(b, 1);
          break;
        } else if (!(d !== l || c.width !== k.width || p < f || t > g)) {
          t > f && (k.height += t - f, k.y = f);
          p < g && (k.height = g - t);
          a.splice(b, 1);
          break;
        } else if (!(f !== t || c.height !== k.height || n < d || l > e)) {
          l > d && (k.width += l - d, k.x = d);
          n < e && (k.width = e - l);
          a.splice(b, 1);
          break;
        }
      }
    }
    return a;
  };
  exports.findHostInstance = vh;
  exports.findHostInstanceWithNoPortals = function (a) {
    a = Ba(a);
    return null === a ? null : 20 === a.tag ? a.stateNode.instance : a.stateNode;
  };
  exports.findHostInstanceWithWarning = function (a) {
    return vh(a);
  };
  exports.flushControlled = function (a) {
    var b = V;
    V |= 1;
    try {
      Pc(99, a);
    } finally {
      V = b, 0 === V && (zg(), H());
    }
  };
  exports.flushDiscreteUpdates = function () {
    0 === (V & 49) && ($g(), Qg());
  };
  exports.flushPassiveEffects = Qg;
  exports.flushSync = bh;
  exports.focusWithin = function (a, b) {
    if (!bb) throw Error(q(363));
    a = ig(a);
    b = lg(a, b);
    b = Array.from(b);
    for (a = 0; a < b.length;) {
      var c = b[a++];
      if (!fb(c)) {
        if (5 === c.tag && hb(c.stateNode)) return !0;
        for (c = c.child; null !== c;) b.push(c), c = c.sibling;
      }
    }
    return !1;
  };
  exports.getCurrentUpdateLanePriority = function () {
    return hc;
  };
  exports.getFindAllNodesFailureDescription = function (a, b) {
    if (!bb) throw Error(q(363));
    var c = 0,
      d = [];
    a = [ig(a), 0];
    for (var e = 0; e < a.length;) {
      var f = a[e++],
        g = a[e++],
        h = b[g];
      if (5 !== f.tag || !fb(f)) if (jg(f, h) && (d.push(kg(h)), g++, g > c && (c = g)), g < b.length) for (f = f.child; null !== f;) a.push(f, g), f = f.sibling;
    }
    if (c < b.length) {
      for (a = []; c < b.length; c++) a.push(kg(b[c]));
      return "findAllNodes was able to match part of the selector:\n  " + (d.join(" > ") + "\n\nNo matching component was found for:\n  ") + a.join(" > ");
    }
    return null;
  };
  exports.getPublicRootInstance = function (a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return Da(a.child.stateNode);
      default:
        return a.child.stateNode;
    }
  };
  exports.injectIntoDevTools = function (a) {
    a = {
      bundleType: a.bundleType,
      version: a.version,
      rendererPackageName: a.rendererPackageName,
      rendererConfig: a.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ca.ReactCurrentDispatcher,
      findHostInstanceByFiber: yh,
      findFiberByHostInstance: a.findFiberByHostInstance || zh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null
    };
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) a = !1;else {
      var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!b.isDisabled && b.supportsFiber) try {
        ec = b.inject(a), fc = b;
      } catch (c) {}
      a = !0;
    }
    return a;
  };
  exports.observeVisibleRects = function (a, b, c, d) {
    if (!bb) throw Error(q(363));
    a = mg(a, b);
    var e = ib(a, c, d).disconnect;
    return {
      disconnect: function () {
        e();
      }
    };
  };
  exports.registerMutableSourceForHydration = function (a, b) {
    var c = b._getVersion;
    c = c(b._source);
    null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
  };
  exports.runWithPriority = function (a, b) {
    var c = hc;
    try {
      return hc = a, b();
    } finally {
      hc = c;
    }
  };
  exports.shouldSuspend = function () {
    return !1;
  };
  exports.unbatchedUpdates = function (a, b) {
    var c = V;
    V &= -2;
    V |= 8;
    try {
      return a(b);
    } finally {
      V = c, 0 === V && (zg(), H());
    }
  };
  exports.updateContainer = function (a, b, c, d) {
    var e = b.current,
      f = K(),
      g = td(e);
    a: if (c) {
      c = c._reactInternals;
      b: {
        if (xa(c) !== c || 1 !== c.tag) throw Error(q(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (E(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (null !== h);
        throw Error(q(171));
      }
      if (1 === c.tag) {
        var k = c.type;
        if (E(k)) {
          c = bc(c, k, h);
          break a;
        }
      }
      c = h;
    } else c = Xb;
    null === b.context ? b.context = c : b.pendingContext = c;
    b = kd(f, g);
    b.payload = {
      element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    md(e, b);
    ud(e, g, f);
    return g;
  };
  return exports;
};
});

var reactReconciler = createCommonjsModule(function (module) {

{
  module.exports = reactReconciler_production_min;
}
});

/* eslint-disable yoda */

const isFullwidthCodePoint = codePoint => {
  if (Number.isNaN(codePoint)) {
    return false;
  }

  // Code points are derived from:
  // http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
  if (codePoint >= 0x1100 && (codePoint <= 0x115F ||
  // Hangul Jamo
  codePoint === 0x2329 ||
  // LEFT-POINTING ANGLE BRACKET
  codePoint === 0x232A ||
  // RIGHT-POINTING ANGLE BRACKET
  // CJK Radicals Supplement .. Enclosed CJK Letters and Months
  0x2E80 <= codePoint && codePoint <= 0x3247 && codePoint !== 0x303F ||
  // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
  0x3250 <= codePoint && codePoint <= 0x4DBF ||
  // CJK Unified Ideographs .. Yi Radicals
  0x4E00 <= codePoint && codePoint <= 0xA4C6 ||
  // Hangul Jamo Extended-A
  0xA960 <= codePoint && codePoint <= 0xA97C ||
  // Hangul Syllables
  0xAC00 <= codePoint && codePoint <= 0xD7A3 ||
  // CJK Compatibility Ideographs
  0xF900 <= codePoint && codePoint <= 0xFAFF ||
  // Vertical Forms
  0xFE10 <= codePoint && codePoint <= 0xFE19 ||
  // CJK Compatibility Forms .. Small Form Variants
  0xFE30 <= codePoint && codePoint <= 0xFE6B ||
  // Halfwidth and Fullwidth Forms
  0xFF01 <= codePoint && codePoint <= 0xFF60 || 0xFFE0 <= codePoint && codePoint <= 0xFFE6 ||
  // Kana Supplement
  0x1B000 <= codePoint && codePoint <= 0x1B001 ||
  // Enclosed Ideographic Supplement
  0x1F200 <= codePoint && codePoint <= 0x1F251 ||
  // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
  0x20000 <= codePoint && codePoint <= 0x3FFFD)) {
    return true;
  }
  return false;
};
var isFullwidthCodePoint_1 = isFullwidthCodePoint;
var _default$E = isFullwidthCodePoint;
isFullwidthCodePoint_1.default = _default$E;

var emojiRegex = function () {
  // https://mths.be/emoji
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};

const stringWidth = string => {
  if (typeof string !== 'string' || string.length === 0) {
    return 0;
  }
  string = stripAnsi__default["default"](string);
  if (string.length === 0) {
    return 0;
  }
  string = string.replace(emojiRegex(), '  ');
  let width = 0;
  for (let i = 0; i < string.length; i++) {
    const code = string.codePointAt(i);

    // Ignore control characters
    if (code <= 0x1F || code >= 0x7F && code <= 0x9F) {
      continue;
    }

    // Ignore combining characters
    if (code >= 0x300 && code <= 0x36F) {
      continue;
    }

    // Surrogates
    if (code > 0xFFFF) {
      i++;
    }
    width += isFullwidthCodePoint_1(code) ? 2 : 1;
  }
  return width;
};
var stringWidth_1 = stringWidth;
// TODO: remove this in the next major version
var _default$D = stringWidth;
stringWidth_1.default = _default$D;

const widestLine = input => {
  let max = 0;
  for (const line of input.split('\n')) {
    max = Math.max(max, stringWidth_1(line));
  }
  return max;
};
var widestLine_1 = widestLine;
// TODO: remove this in the next major version
var _default$C = widestLine;
widestLine_1.default = _default$C;

var __importDefault$o = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const widest_line_1$1 = __importDefault$o(widestLine_1);
const cache$1 = {};
var _default$B = text => {
  if (text.length === 0) {
    return {
      width: 0,
      height: 0
    };
  }
  if (cache$1[text]) {
    return cache$1[text];
  }
  const width = widest_line_1$1.default(text);
  const height = text.split('\n').length;
  cache$1[text] = {
    width,
    height
  };
  return {
    width,
    height
  };
};

var measureText = /*#__PURE__*/Object.defineProperty({
	default: _default$B
}, '__esModule', {value: true});

var __importDefault$n = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
const yoga_layout_prebuilt_1$4 = __importDefault$n(require$$0__default["default"]);
const applyPositionStyles = (node, style) => {
  if ('position' in style) {
    node.setPositionType(style.position === 'absolute' ? yoga_layout_prebuilt_1$4.default.POSITION_TYPE_ABSOLUTE : yoga_layout_prebuilt_1$4.default.POSITION_TYPE_RELATIVE);
  }
};
const applyMarginStyles = (node, style) => {
  if ('marginLeft' in style) {
    node.setMargin(yoga_layout_prebuilt_1$4.default.EDGE_START, style.marginLeft || 0);
  }
  if ('marginRight' in style) {
    node.setMargin(yoga_layout_prebuilt_1$4.default.EDGE_END, style.marginRight || 0);
  }
  if ('marginTop' in style) {
    node.setMargin(yoga_layout_prebuilt_1$4.default.EDGE_TOP, style.marginTop || 0);
  }
  if ('marginBottom' in style) {
    node.setMargin(yoga_layout_prebuilt_1$4.default.EDGE_BOTTOM, style.marginBottom || 0);
  }
};
const applyPaddingStyles = (node, style) => {
  if ('paddingLeft' in style) {
    node.setPadding(yoga_layout_prebuilt_1$4.default.EDGE_LEFT, style.paddingLeft || 0);
  }
  if ('paddingRight' in style) {
    node.setPadding(yoga_layout_prebuilt_1$4.default.EDGE_RIGHT, style.paddingRight || 0);
  }
  if ('paddingTop' in style) {
    node.setPadding(yoga_layout_prebuilt_1$4.default.EDGE_TOP, style.paddingTop || 0);
  }
  if ('paddingBottom' in style) {
    node.setPadding(yoga_layout_prebuilt_1$4.default.EDGE_BOTTOM, style.paddingBottom || 0);
  }
};
const applyFlexStyles = (node, style) => {
  var _a;
  if ('flexGrow' in style) {
    node.setFlexGrow((_a = style.flexGrow) !== null && _a !== void 0 ? _a : 0);
  }
  if ('flexShrink' in style) {
    node.setFlexShrink(typeof style.flexShrink === 'number' ? style.flexShrink : 1);
  }
  if ('flexDirection' in style) {
    if (style.flexDirection === 'row') {
      node.setFlexDirection(yoga_layout_prebuilt_1$4.default.FLEX_DIRECTION_ROW);
    }
    if (style.flexDirection === 'row-reverse') {
      node.setFlexDirection(yoga_layout_prebuilt_1$4.default.FLEX_DIRECTION_ROW_REVERSE);
    }
    if (style.flexDirection === 'column') {
      node.setFlexDirection(yoga_layout_prebuilt_1$4.default.FLEX_DIRECTION_COLUMN);
    }
    if (style.flexDirection === 'column-reverse') {
      node.setFlexDirection(yoga_layout_prebuilt_1$4.default.FLEX_DIRECTION_COLUMN_REVERSE);
    }
  }
  if ('flexBasis' in style) {
    if (typeof style.flexBasis === 'number') {
      node.setFlexBasis(style.flexBasis);
    } else if (typeof style.flexBasis === 'string') {
      node.setFlexBasisPercent(Number.parseInt(style.flexBasis, 10));
    } else {
      // This should be replaced with node.setFlexBasisAuto() when new Yoga release is out
      node.setFlexBasis(NaN);
    }
  }
  if ('alignItems' in style) {
    if (style.alignItems === 'stretch' || !style.alignItems) {
      node.setAlignItems(yoga_layout_prebuilt_1$4.default.ALIGN_STRETCH);
    }
    if (style.alignItems === 'flex-start') {
      node.setAlignItems(yoga_layout_prebuilt_1$4.default.ALIGN_FLEX_START);
    }
    if (style.alignItems === 'center') {
      node.setAlignItems(yoga_layout_prebuilt_1$4.default.ALIGN_CENTER);
    }
    if (style.alignItems === 'flex-end') {
      node.setAlignItems(yoga_layout_prebuilt_1$4.default.ALIGN_FLEX_END);
    }
  }
  if ('alignSelf' in style) {
    if (style.alignSelf === 'auto' || !style.alignSelf) {
      node.setAlignSelf(yoga_layout_prebuilt_1$4.default.ALIGN_AUTO);
    }
    if (style.alignSelf === 'flex-start') {
      node.setAlignSelf(yoga_layout_prebuilt_1$4.default.ALIGN_FLEX_START);
    }
    if (style.alignSelf === 'center') {
      node.setAlignSelf(yoga_layout_prebuilt_1$4.default.ALIGN_CENTER);
    }
    if (style.alignSelf === 'flex-end') {
      node.setAlignSelf(yoga_layout_prebuilt_1$4.default.ALIGN_FLEX_END);
    }
  }
  if ('justifyContent' in style) {
    if (style.justifyContent === 'flex-start' || !style.justifyContent) {
      node.setJustifyContent(yoga_layout_prebuilt_1$4.default.JUSTIFY_FLEX_START);
    }
    if (style.justifyContent === 'center') {
      node.setJustifyContent(yoga_layout_prebuilt_1$4.default.JUSTIFY_CENTER);
    }
    if (style.justifyContent === 'flex-end') {
      node.setJustifyContent(yoga_layout_prebuilt_1$4.default.JUSTIFY_FLEX_END);
    }
    if (style.justifyContent === 'space-between') {
      node.setJustifyContent(yoga_layout_prebuilt_1$4.default.JUSTIFY_SPACE_BETWEEN);
    }
    if (style.justifyContent === 'space-around') {
      node.setJustifyContent(yoga_layout_prebuilt_1$4.default.JUSTIFY_SPACE_AROUND);
    }
  }
};
const applyDimensionStyles = (node, style) => {
  var _a, _b;
  if ('width' in style) {
    if (typeof style.width === 'number') {
      node.setWidth(style.width);
    } else if (typeof style.width === 'string') {
      node.setWidthPercent(Number.parseInt(style.width, 10));
    } else {
      node.setWidthAuto();
    }
  }
  if ('height' in style) {
    if (typeof style.height === 'number') {
      node.setHeight(style.height);
    } else if (typeof style.height === 'string') {
      node.setHeightPercent(Number.parseInt(style.height, 10));
    } else {
      node.setHeightAuto();
    }
  }
  if ('minWidth' in style) {
    if (typeof style.minWidth === 'string') {
      node.setMinWidthPercent(Number.parseInt(style.minWidth, 10));
    } else {
      node.setMinWidth((_a = style.minWidth) !== null && _a !== void 0 ? _a : 0);
    }
  }
  if ('minHeight' in style) {
    if (typeof style.minHeight === 'string') {
      node.setMinHeightPercent(Number.parseInt(style.minHeight, 10));
    } else {
      node.setMinHeight((_b = style.minHeight) !== null && _b !== void 0 ? _b : 0);
    }
  }
};
const applyDisplayStyles = (node, style) => {
  if ('display' in style) {
    node.setDisplay(style.display === 'flex' ? yoga_layout_prebuilt_1$4.default.DISPLAY_FLEX : yoga_layout_prebuilt_1$4.default.DISPLAY_NONE);
  }
};
const applyBorderStyles = (node, style) => {
  if ('borderStyle' in style) {
    const borderWidth = typeof style.borderStyle === 'string' ? 1 : 0;
    node.setBorder(yoga_layout_prebuilt_1$4.default.EDGE_TOP, borderWidth);
    node.setBorder(yoga_layout_prebuilt_1$4.default.EDGE_BOTTOM, borderWidth);
    node.setBorder(yoga_layout_prebuilt_1$4.default.EDGE_LEFT, borderWidth);
    node.setBorder(yoga_layout_prebuilt_1$4.default.EDGE_RIGHT, borderWidth);
  }
};
var _default$A = (node, style = {}) => {
  applyPositionStyles(node, style);
  applyMarginStyles(node, style);
  applyPaddingStyles(node, style);
  applyFlexStyles(node, style);
  applyDimensionStyles(node, style);
  applyDisplayStyles(node, style);
  applyBorderStyles(node, style);
};

var styles = /*#__PURE__*/Object.defineProperty({
	default: _default$A
}, '__esModule', {value: true});

var colorName = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};

/* MIT license */

/* eslint-disable no-mixed-operators */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(colorName)) {
  reverseKeywords[colorName[key]] = key;
}
const convert$1 = {
  rgb: {
    channels: 3,
    labels: 'rgb'
  },
  hsl: {
    channels: 3,
    labels: 'hsl'
  },
  hsv: {
    channels: 3,
    labels: 'hsv'
  },
  hwb: {
    channels: 3,
    labels: 'hwb'
  },
  cmyk: {
    channels: 4,
    labels: 'cmyk'
  },
  xyz: {
    channels: 3,
    labels: 'xyz'
  },
  lab: {
    channels: 3,
    labels: 'lab'
  },
  lch: {
    channels: 3,
    labels: 'lch'
  },
  hex: {
    channels: 1,
    labels: ['hex']
  },
  keyword: {
    channels: 1,
    labels: ['keyword']
  },
  ansi16: {
    channels: 1,
    labels: ['ansi16']
  },
  ansi256: {
    channels: 1,
    labels: ['ansi256']
  },
  hcg: {
    channels: 3,
    labels: ['h', 'c', 'g']
  },
  apple: {
    channels: 3,
    labels: ['r16', 'g16', 'b16']
  },
  gray: {
    channels: 1,
    labels: ['gray']
  }
};
var conversions = convert$1;

// Hide .channels and .labels properties
for (const model of Object.keys(convert$1)) {
  if (!('channels' in convert$1[model])) {
    throw new Error('missing channels property: ' + model);
  }
  if (!('labels' in convert$1[model])) {
    throw new Error('missing channel labels property: ' + model);
  }
  if (convert$1[model].labels.length !== convert$1[model].channels) {
    throw new Error('channel and label counts mismatch: ' + model);
  }
  const {
    channels,
    labels
  } = convert$1[model];
  delete convert$1[model].channels;
  delete convert$1[model].labels;
  Object.defineProperty(convert$1[model], 'channels', {
    value: channels
  });
  Object.defineProperty(convert$1[model], 'labels', {
    value: labels
  });
}
convert$1.rgb.hsl = function (rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h;
  let s;
  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }
  h = Math.min(h * 60, 360);
  if (h < 0) {
    h += 360;
  }
  const l = (min + max) / 2;
  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }
  return [h, s * 100, l * 100];
};
convert$1.rgb.hsv = function (rgb) {
  let rdif;
  let gdif;
  let bdif;
  let h;
  let s;
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const v = Math.max(r, g, b);
  const diff = v - Math.min(r, g, b);
  const diffc = function (c) {
    return (v - c) / 6 / diff + 1 / 2;
  };
  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);
    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [h * 360, s * 100, v * 100];
};
convert$1.rgb.hwb = function (rgb) {
  const r = rgb[0];
  const g = rgb[1];
  let b = rgb[2];
  const h = convert$1.rgb.hsl(rgb)[0];
  const w = 1 / 255 * Math.min(r, Math.min(g, b));
  b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
  return [h, w * 100, b * 100];
};
convert$1.rgb.cmyk = function (rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const k = Math.min(1 - r, 1 - g, 1 - b);
  const c = (1 - r - k) / (1 - k) || 0;
  const m = (1 - g - k) / (1 - k) || 0;
  const y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
};
function comparativeDistance(x, y) {
  /*
  	See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
  */
  return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
convert$1.rgb.keyword = function (rgb) {
  const reversed = reverseKeywords[rgb];
  if (reversed) {
    return reversed;
  }
  let currentClosestDistance = Infinity;
  let currentClosestKeyword;
  for (const keyword of Object.keys(colorName)) {
    const value = colorName[keyword];

    // Compute comparative distance
    const distance = comparativeDistance(rgb, value);

    // Check if its less, if so set as closest
    if (distance < currentClosestDistance) {
      currentClosestDistance = distance;
      currentClosestKeyword = keyword;
    }
  }
  return currentClosestKeyword;
};
convert$1.keyword.rgb = function (keyword) {
  return colorName[keyword];
};
convert$1.rgb.xyz = function (rgb) {
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;

  // Assume sRGB
  r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
  g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
  b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
  const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
  return [x * 100, y * 100, z * 100];
};
convert$1.rgb.lab = function (rgb) {
  const xyz = convert$1.rgb.xyz(rgb);
  let x = xyz[0];
  let y = xyz[1];
  let z = xyz[2];
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);
  return [l, a, b];
};
convert$1.hsl.rgb = function (hsl) {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  let t2;
  let t3;
  let val;
  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }
  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }
  const t1 = 2 * l - t2;
  const rgb = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);
    if (t3 < 0) {
      t3++;
    }
    if (t3 > 1) {
      t3--;
    }
    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }
    rgb[i] = val * 255;
  }
  return rgb;
};
convert$1.hsl.hsv = function (hsl) {
  const h = hsl[0];
  let s = hsl[1] / 100;
  let l = hsl[2] / 100;
  let smin = s;
  const lmin = Math.max(l, 0.01);
  l *= 2;
  s *= l <= 1 ? l : 2 - l;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  const v = (l + s) / 2;
  const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
  return [h, sv * 100, v * 100];
};
convert$1.hsv.rgb = function (hsv) {
  const h = hsv[0] / 60;
  const s = hsv[1] / 100;
  let v = hsv[2] / 100;
  const hi = Math.floor(h) % 6;
  const f = h - Math.floor(h);
  const p = 255 * v * (1 - s);
  const q = 255 * v * (1 - s * f);
  const t = 255 * v * (1 - s * (1 - f));
  v *= 255;
  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
};
convert$1.hsv.hsl = function (hsv) {
  const h = hsv[0];
  const s = hsv[1] / 100;
  const v = hsv[2] / 100;
  const vmin = Math.max(v, 0.01);
  let sl;
  let l;
  l = (2 - s) * v;
  const lmin = (2 - s) * vmin;
  sl = s * vmin;
  sl /= lmin <= 1 ? lmin : 2 - lmin;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert$1.hwb.rgb = function (hwb) {
  const h = hwb[0] / 360;
  let wh = hwb[1] / 100;
  let bl = hwb[2] / 100;
  const ratio = wh + bl;
  let f;

  // Wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }
  const i = Math.floor(6 * h);
  const v = 1 - bl;
  f = 6 * h - i;
  if ((i & 0x01) !== 0) {
    f = 1 - f;
  }
  const n = wh + f * (v - wh); // Linear interpolation

  let r;
  let g;
  let b;
  /* eslint-disable max-statements-per-line,no-multi-spaces */
  switch (i) {
    default:
    case 6:
    case 0:
      r = v;
      g = n;
      b = wh;
      break;
    case 1:
      r = n;
      g = v;
      b = wh;
      break;
    case 2:
      r = wh;
      g = v;
      b = n;
      break;
    case 3:
      r = wh;
      g = n;
      b = v;
      break;
    case 4:
      r = n;
      g = wh;
      b = v;
      break;
    case 5:
      r = v;
      g = wh;
      b = n;
      break;
  }
  /* eslint-enable max-statements-per-line,no-multi-spaces */

  return [r * 255, g * 255, b * 255];
};
convert$1.cmyk.rgb = function (cmyk) {
  const c = cmyk[0] / 100;
  const m = cmyk[1] / 100;
  const y = cmyk[2] / 100;
  const k = cmyk[3] / 100;
  const r = 1 - Math.min(1, c * (1 - k) + k);
  const g = 1 - Math.min(1, m * (1 - k) + k);
  const b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
};
convert$1.xyz.rgb = function (xyz) {
  const x = xyz[0] / 100;
  const y = xyz[1] / 100;
  const z = xyz[2] / 100;
  let r;
  let g;
  let b;
  r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  b = x * 0.0557 + y * -0.2040 + z * 1.0570;

  // Assume sRGB
  r = r > 0.0031308 ? 1.055 * r ** (1.0 / 2.4) - 0.055 : r * 12.92;
  g = g > 0.0031308 ? 1.055 * g ** (1.0 / 2.4) - 0.055 : g * 12.92;
  b = b > 0.0031308 ? 1.055 * b ** (1.0 / 2.4) - 0.055 : b * 12.92;
  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);
  return [r * 255, g * 255, b * 255];
};
convert$1.xyz.lab = function (xyz) {
  let x = xyz[0];
  let y = xyz[1];
  let z = xyz[2];
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);
  return [l, a, b];
};
convert$1.lab.xyz = function (lab) {
  const l = lab[0];
  const a = lab[1];
  const b = lab[2];
  let x;
  let y;
  let z;
  y = (l + 16) / 116;
  x = a / 500 + y;
  z = y - b / 200;
  const y2 = y ** 3;
  const x2 = x ** 3;
  const z2 = z ** 3;
  y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
  x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
  z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
  x *= 95.047;
  y *= 100;
  z *= 108.883;
  return [x, y, z];
};
convert$1.lab.lch = function (lab) {
  const l = lab[0];
  const a = lab[1];
  const b = lab[2];
  let h;
  const hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  const c = Math.sqrt(a * a + b * b);
  return [l, c, h];
};
convert$1.lch.lab = function (lch) {
  const l = lch[0];
  const c = lch[1];
  const h = lch[2];
  const hr = h / 360 * 2 * Math.PI;
  const a = c * Math.cos(hr);
  const b = c * Math.sin(hr);
  return [l, a, b];
};
convert$1.rgb.ansi16 = function (args, saturation = null) {
  const [r, g, b] = args;
  let value = saturation === null ? convert$1.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

  value = Math.round(value / 50);
  if (value === 0) {
    return 30;
  }
  let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
  if (value === 2) {
    ansi += 60;
  }
  return ansi;
};
convert$1.hsv.ansi16 = function (args) {
  // Optimization here; we already know the value and don't need to get
  // it converted for us.
  return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2]);
};
convert$1.rgb.ansi256 = function (args) {
  const r = args[0];
  const g = args[1];
  const b = args[2];

  // We use the extended greyscale palette here, with the exception of
  // black and white. normal palette only has 4 greyscale shades.
  if (r === g && g === b) {
    if (r < 8) {
      return 16;
    }
    if (r > 248) {
      return 231;
    }
    return Math.round((r - 8) / 247 * 24) + 232;
  }
  const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
  return ansi;
};
convert$1.ansi16.rgb = function (args) {
  let color = args % 10;

  // Handle greyscale
  if (color === 0 || color === 7) {
    if (args > 50) {
      color += 3.5;
    }
    color = color / 10.5 * 255;
    return [color, color, color];
  }
  const mult = (~~(args > 50) + 1) * 0.5;
  const r = (color & 1) * mult * 255;
  const g = (color >> 1 & 1) * mult * 255;
  const b = (color >> 2 & 1) * mult * 255;
  return [r, g, b];
};
convert$1.ansi256.rgb = function (args) {
  // Handle greyscale
  if (args >= 232) {
    const c = (args - 232) * 10 + 8;
    return [c, c, c];
  }
  args -= 16;
  let rem;
  const r = Math.floor(args / 36) / 5 * 255;
  const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
  const b = rem % 6 / 5 * 255;
  return [r, g, b];
};
convert$1.rgb.hex = function (args) {
  const integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
  const string = integer.toString(16).toUpperCase();
  return '000000'.substring(string.length) + string;
};
convert$1.hex.rgb = function (args) {
  const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!match) {
    return [0, 0, 0];
  }
  let colorString = match[0];
  if (match[0].length === 3) {
    colorString = colorString.split('').map(char => {
      return char + char;
    }).join('');
  }
  const integer = parseInt(colorString, 16);
  const r = integer >> 16 & 0xFF;
  const g = integer >> 8 & 0xFF;
  const b = integer & 0xFF;
  return [r, g, b];
};
convert$1.rgb.hcg = function (rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const max = Math.max(Math.max(r, g), b);
  const min = Math.min(Math.min(r, g), b);
  const chroma = max - min;
  let grayscale;
  let hue;
  if (chroma < 1) {
    grayscale = min / (1 - chroma);
  } else {
    grayscale = 0;
  }
  if (chroma <= 0) {
    hue = 0;
  } else if (max === r) {
    hue = (g - b) / chroma % 6;
  } else if (max === g) {
    hue = 2 + (b - r) / chroma;
  } else {
    hue = 4 + (r - g) / chroma;
  }
  hue /= 6;
  hue %= 1;
  return [hue * 360, chroma * 100, grayscale * 100];
};
convert$1.hsl.hcg = function (hsl) {
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  const c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);
  let f = 0;
  if (c < 1.0) {
    f = (l - 0.5 * c) / (1.0 - c);
  }
  return [hsl[0], c * 100, f * 100];
};
convert$1.hsv.hcg = function (hsv) {
  const s = hsv[1] / 100;
  const v = hsv[2] / 100;
  const c = s * v;
  let f = 0;
  if (c < 1.0) {
    f = (v - c) / (1 - c);
  }
  return [hsv[0], c * 100, f * 100];
};
convert$1.hcg.rgb = function (hcg) {
  const h = hcg[0] / 360;
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  if (c === 0.0) {
    return [g * 255, g * 255, g * 255];
  }
  const pure = [0, 0, 0];
  const hi = h % 1 * 6;
  const v = hi % 1;
  const w = 1 - v;
  let mg = 0;

  /* eslint-disable max-statements-per-line */
  switch (Math.floor(hi)) {
    case 0:
      pure[0] = 1;
      pure[1] = v;
      pure[2] = 0;
      break;
    case 1:
      pure[0] = w;
      pure[1] = 1;
      pure[2] = 0;
      break;
    case 2:
      pure[0] = 0;
      pure[1] = 1;
      pure[2] = v;
      break;
    case 3:
      pure[0] = 0;
      pure[1] = w;
      pure[2] = 1;
      break;
    case 4:
      pure[0] = v;
      pure[1] = 0;
      pure[2] = 1;
      break;
    default:
      pure[0] = 1;
      pure[1] = 0;
      pure[2] = w;
  }
  /* eslint-enable max-statements-per-line */

  mg = (1.0 - c) * g;
  return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
};
convert$1.hcg.hsv = function (hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const v = c + g * (1.0 - c);
  let f = 0;
  if (v > 0.0) {
    f = c / v;
  }
  return [hcg[0], f * 100, v * 100];
};
convert$1.hcg.hsl = function (hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const l = g * (1.0 - c) + 0.5 * c;
  let s = 0;
  if (l > 0.0 && l < 0.5) {
    s = c / (2 * l);
  } else if (l >= 0.5 && l < 1.0) {
    s = c / (2 * (1 - l));
  }
  return [hcg[0], s * 100, l * 100];
};
convert$1.hcg.hwb = function (hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const v = c + g * (1.0 - c);
  return [hcg[0], (v - c) * 100, (1 - v) * 100];
};
convert$1.hwb.hcg = function (hwb) {
  const w = hwb[1] / 100;
  const b = hwb[2] / 100;
  const v = 1 - b;
  const c = v - w;
  let g = 0;
  if (c < 1) {
    g = (v - c) / (1 - c);
  }
  return [hwb[0], c * 100, g * 100];
};
convert$1.apple.rgb = function (apple) {
  return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
};
convert$1.rgb.apple = function (rgb) {
  return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
};
convert$1.gray.rgb = function (args) {
  return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};
convert$1.gray.hsl = function (args) {
  return [0, 0, args[0]];
};
convert$1.gray.hsv = convert$1.gray.hsl;
convert$1.gray.hwb = function (gray) {
  return [0, 100, gray[0]];
};
convert$1.gray.cmyk = function (gray) {
  return [0, 0, 0, gray[0]];
};
convert$1.gray.lab = function (gray) {
  return [gray[0], 0, 0];
};
convert$1.gray.hex = function (gray) {
  const val = Math.round(gray[0] / 100 * 255) & 0xFF;
  const integer = (val << 16) + (val << 8) + val;
  const string = integer.toString(16).toUpperCase();
  return '000000'.substring(string.length) + string;
};
convert$1.rgb.gray = function (rgb) {
  const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return [val / 255 * 100];
};

/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
  const graph = {};
  // https://jsperf.com/object-keys-vs-for-in-with-closure/3
  const models = Object.keys(conversions);
  for (let len = models.length, i = 0; i < len; i++) {
    graph[models[i]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  }
  return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
  const graph = buildGraph();
  const queue = [fromModel]; // Unshift -> queue -> pop

  graph[fromModel].distance = 0;
  while (queue.length) {
    const current = queue.pop();
    const adjacents = Object.keys(conversions[current]);
    for (let len = adjacents.length, i = 0; i < len; i++) {
      const adjacent = adjacents[i];
      const node = graph[adjacent];
      if (node.distance === -1) {
        node.distance = graph[current].distance + 1;
        node.parent = current;
        queue.unshift(adjacent);
      }
    }
  }
  return graph;
}
function link(from, to) {
  return function (args) {
    return to(from(args));
  };
}
function wrapConversion(toModel, graph) {
  const path = [graph[toModel].parent, toModel];
  let fn = conversions[graph[toModel].parent][toModel];
  let cur = graph[toModel].parent;
  while (graph[cur].parent) {
    path.unshift(graph[cur].parent);
    fn = link(conversions[graph[cur].parent][cur], fn);
    cur = graph[cur].parent;
  }
  fn.conversion = path;
  return fn;
}
var route = function (fromModel) {
  const graph = deriveBFS(fromModel);
  const conversion = {};
  const models = Object.keys(graph);
  for (let len = models.length, i = 0; i < len; i++) {
    const toModel = models[i];
    const node = graph[toModel];
    if (node.parent === null) {
      // No possible conversion, or this node is the source model.
      continue;
    }
    conversion[toModel] = wrapConversion(toModel, graph);
  }
  return conversion;
};

const convert = {};
const models = Object.keys(conversions);
function wrapRaw(fn) {
  const wrappedFn = function (...args) {
    const arg0 = args[0];
    if (arg0 === undefined || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    return fn(args);
  };

  // Preserve .conversion property if there is one
  if ('conversion' in fn) {
    wrappedFn.conversion = fn.conversion;
  }
  return wrappedFn;
}
function wrapRounded(fn) {
  const wrappedFn = function (...args) {
    const arg0 = args[0];
    if (arg0 === undefined || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    const result = fn(args);

    // We're assuming the result is an array here.
    // see notice in conversions.js; don't use box types
    // in conversion functions.
    if (typeof result === 'object') {
      for (let len = result.length, i = 0; i < len; i++) {
        result[i] = Math.round(result[i]);
      }
    }
    return result;
  };

  // Preserve .conversion property if there is one
  if ('conversion' in fn) {
    wrappedFn.conversion = fn.conversion;
  }
  return wrappedFn;
}
models.forEach(fromModel => {
  convert[fromModel] = {};
  Object.defineProperty(convert[fromModel], 'channels', {
    value: conversions[fromModel].channels
  });
  Object.defineProperty(convert[fromModel], 'labels', {
    value: conversions[fromModel].labels
  });
  const routes = route(fromModel);
  const routeModels = Object.keys(routes);
  routeModels.forEach(toModel => {
    const fn = routes[toModel];
    convert[fromModel][toModel] = wrapRounded(fn);
    convert[fromModel][toModel].raw = wrapRaw(fn);
  });
});
var colorConvert = convert;

var ansiStyles = createCommonjsModule(function (module) {

const wrapAnsi16 = (fn, offset) => (...args) => {
  const code = fn(...args);
  return `\u001B[${code + offset}m`;
};
const wrapAnsi256 = (fn, offset) => (...args) => {
  const code = fn(...args);
  return `\u001B[${38 + offset};5;${code}m`;
};
const wrapAnsi16m = (fn, offset) => (...args) => {
  const rgb = fn(...args);
  return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};
const ansi2ansi = n => n;
const rgb2rgb = (r, g, b) => [r, g, b];
const setLazyProperty = (object, property, get) => {
  Object.defineProperty(object, property, {
    get: () => {
      const value = get();
      Object.defineProperty(object, property, {
        value,
        enumerable: true,
        configurable: true
      });
      return value;
    },
    enumerable: true,
    configurable: true
  });
};

/** @type {typeof import('color-convert')} */
let colorConvert$1;
const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
  if (colorConvert$1 === undefined) {
    colorConvert$1 = colorConvert;
  }
  const offset = isBackground ? 10 : 0;
  const styles = {};
  for (const [sourceSpace, suite] of Object.entries(colorConvert$1)) {
    const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
    if (sourceSpace === targetSpace) {
      styles[name] = wrap(identity, offset);
    } else if (typeof suite === 'object') {
      styles[name] = wrap(suite[targetSpace], offset);
    }
  }
  return styles;
};
function assembleStyles() {
  const codes = new Map();
  const styles = {
    modifier: {
      reset: [0, 0],
      // 21 isn't widely supported and 22 does the same thing
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29]
    },
    color: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      // Bright color
      blackBright: [90, 39],
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39]
    },
    bgColor: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      // Bright color
      bgBlackBright: [100, 49],
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49]
    }
  };

  // Alias bright black as gray (and grey)
  styles.color.gray = styles.color.blackBright;
  styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
  styles.color.grey = styles.color.blackBright;
  styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\u001B[${style[0]}m`,
        close: `\u001B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, 'codes', {
    value: codes,
    enumerable: false
  });
  styles.color.close = '\u001B[39m';
  styles.bgColor.close = '\u001B[49m';
  setLazyProperty(styles.color, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false));
  setLazyProperty(styles.color, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false));
  setLazyProperty(styles.color, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false));
  setLazyProperty(styles.bgColor, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true));
  setLazyProperty(styles.bgColor, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true));
  setLazyProperty(styles.bgColor, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true));
  return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
  enumerable: true,
  get: assembleStyles
});
});

const ESCAPES$1 = new Set(['\u001B', '\u009B']);
const END_CODE = 39;
const wrapAnsi$1 = code => `${ESCAPES$1.values().next().value}[${code}m`;

// Calculate the length of words split on ' ', ignoring
// the extra characters added by ansi escape codes
const wordLengths = string => string.split(' ').map(character => stringWidth_1(character));

// Wrap a long word across multiple rows
// Ansi escape codes do not count towards length
const wrapWord = (rows, word, columns) => {
  const characters = [...word];
  let isInsideEscape = false;
  let visible = stringWidth_1(stripAnsi__default["default"](rows[rows.length - 1]));
  for (const [index, character] of characters.entries()) {
    const characterLength = stringWidth_1(character);
    if (visible + characterLength <= columns) {
      rows[rows.length - 1] += character;
    } else {
      rows.push(character);
      visible = 0;
    }
    if (ESCAPES$1.has(character)) {
      isInsideEscape = true;
    } else if (isInsideEscape && character === 'm') {
      isInsideEscape = false;
      continue;
    }
    if (isInsideEscape) {
      continue;
    }
    visible += characterLength;
    if (visible === columns && index < characters.length - 1) {
      rows.push('');
      visible = 0;
    }
  }

  // It's possible that the last row we copy over is only
  // ansi escape characters, handle this edge-case
  if (!visible && rows[rows.length - 1].length > 0 && rows.length > 1) {
    rows[rows.length - 2] += rows.pop();
  }
};

// Trims spaces from a string ignoring invisible sequences
const stringVisibleTrimSpacesRight = str => {
  const words = str.split(' ');
  let last = words.length;
  while (last > 0) {
    if (stringWidth_1(words[last - 1]) > 0) {
      break;
    }
    last--;
  }
  if (last === words.length) {
    return str;
  }
  return words.slice(0, last).join(' ') + words.slice(last).join('');
};

// The wrap-ansi module can be invoked in either 'hard' or 'soft' wrap mode
//
// 'hard' will never allow a string to take up more than columns characters
//
// 'soft' allows long words to expand past the column length
const exec = (string, columns, options = {}) => {
  if (options.trim !== false && string.trim() === '') {
    return '';
  }
  let pre = '';
  let ret = '';
  let escapeCode;
  const lengths = wordLengths(string);
  let rows = [''];
  for (const [index, word] of string.split(' ').entries()) {
    if (options.trim !== false) {
      rows[rows.length - 1] = rows[rows.length - 1].trimLeft();
    }
    let rowLength = stringWidth_1(rows[rows.length - 1]);
    if (index !== 0) {
      if (rowLength >= columns && (options.wordWrap === false || options.trim === false)) {
        // If we start with a new word but the current row length equals the length of the columns, add a new row
        rows.push('');
        rowLength = 0;
      }
      if (rowLength > 0 || options.trim === false) {
        rows[rows.length - 1] += ' ';
        rowLength++;
      }
    }

    // In 'hard' wrap mode, the length of a line is never allowed to extend past 'columns'
    if (options.hard && lengths[index] > columns) {
      const remainingColumns = columns - rowLength;
      const breaksStartingThisLine = 1 + Math.floor((lengths[index] - remainingColumns - 1) / columns);
      const breaksStartingNextLine = Math.floor((lengths[index] - 1) / columns);
      if (breaksStartingNextLine < breaksStartingThisLine) {
        rows.push('');
      }
      wrapWord(rows, word, columns);
      continue;
    }
    if (rowLength + lengths[index] > columns && rowLength > 0 && lengths[index] > 0) {
      if (options.wordWrap === false && rowLength < columns) {
        wrapWord(rows, word, columns);
        continue;
      }
      rows.push('');
    }
    if (rowLength + lengths[index] > columns && options.wordWrap === false) {
      wrapWord(rows, word, columns);
      continue;
    }
    rows[rows.length - 1] += word;
  }
  if (options.trim !== false) {
    rows = rows.map(stringVisibleTrimSpacesRight);
  }
  pre = rows.join('\n');
  for (const [index, character] of [...pre].entries()) {
    ret += character;
    if (ESCAPES$1.has(character)) {
      const code = parseFloat(/\d[^m]*/.exec(pre.slice(index, index + 4)));
      escapeCode = code === END_CODE ? null : code;
    }
    const code = ansiStyles.codes.get(Number(escapeCode));
    if (escapeCode && code) {
      if (pre[index + 1] === '\n') {
        ret += wrapAnsi$1(code);
      } else if (character === '\n') {
        ret += wrapAnsi$1(escapeCode);
      }
    }
  }
  return ret;
};

// For each newline, invoke the method separately
var wrapAnsi_1 = (string, columns, options) => {
  return String(string).normalize().replace(/\r\n/g, '\n').split('\n').map(line => exec(line, columns, options)).join('\n');
};

const regex = '[\uD800-\uDBFF][\uDC00-\uDFFF]';
const astralRegex = options => options && options.exact ? new RegExp(`^${regex}$`) : new RegExp(regex, 'g');
var astralRegex_1 = astralRegex;

const ESCAPES = ['\u001B', '\u009B'];
const wrapAnsi = code => `${ESCAPES[0]}[${code}m`;
const checkAnsi = (ansiCodes, isEscapes, endAnsiCode) => {
  let output = [];
  ansiCodes = [...ansiCodes];
  for (let ansiCode of ansiCodes) {
    const ansiCodeOrigin = ansiCode;
    if (ansiCode.match(';')) {
      ansiCode = ansiCode.split(';')[0][0] + '0';
    }
    const item = ansiStyles.codes.get(parseInt(ansiCode, 10));
    if (item) {
      const indexEscape = ansiCodes.indexOf(item.toString());
      if (indexEscape >= 0) {
        ansiCodes.splice(indexEscape, 1);
      } else {
        output.push(wrapAnsi(isEscapes ? item : ansiCodeOrigin));
      }
    } else if (isEscapes) {
      output.push(wrapAnsi(0));
      break;
    } else {
      output.push(wrapAnsi(ansiCodeOrigin));
    }
  }
  if (isEscapes) {
    output = output.filter((element, index) => output.indexOf(element) === index);
    if (endAnsiCode !== undefined) {
      const fistEscapeCode = wrapAnsi(ansiStyles.codes.get(parseInt(endAnsiCode, 10)));
      output = output.reduce((current, next) => next === fistEscapeCode ? [next, ...current] : [...current, next], []);
    }
  }
  return output.join('');
};
var sliceAnsi = (string, begin, end) => {
  const characters = [...string.normalize()];
  const ansiCodes = [];
  end = typeof end === 'number' ? end : characters.length;
  let isInsideEscape = false;
  let ansiCode;
  let visible = 0;
  let output = '';
  for (const [index, character] of characters.entries()) {
    let leftEscape = false;
    if (ESCAPES.includes(character)) {
      const code = /\d[^m]*/.exec(string.slice(index, index + 18));
      ansiCode = code && code.length > 0 ? code[0] : undefined;
      if (visible < end) {
        isInsideEscape = true;
        if (ansiCode !== undefined) {
          ansiCodes.push(ansiCode);
        }
      }
    } else if (isInsideEscape && character === 'm') {
      isInsideEscape = false;
      leftEscape = true;
    }
    if (!isInsideEscape && !leftEscape) {
      ++visible;
    }
    if (!astralRegex_1({
      exact: true
    }).test(character) && isFullwidthCodePoint_1(character.codePointAt())) {
      ++visible;
    }
    if (visible > begin && visible <= end) {
      output += character;
    } else if (visible === begin && !isInsideEscape && ansiCode !== undefined) {
      output = checkAnsi(ansiCodes);
    } else if (visible >= end) {
      output += checkAnsi(ansiCodes, true, ansiCode);
      break;
    }
  }
  return output;
};

function getIndexOfNearestSpace(string, index, shouldSearchRight) {
  if (string.charAt(index) === ' ') {
    return index;
  }
  for (let i = 1; i <= 3; i++) {
    if (shouldSearchRight) {
      if (string.charAt(index + i) === ' ') {
        return index + i;
      }
    } else if (string.charAt(index - i) === ' ') {
      return index - i;
    }
  }
  return index;
}
var cliTruncate = (text, columns, options) => {
  options = {
    position: 'end',
    preferTruncationOnSpace: false,
    ...options
  };
  const {
    position,
    space,
    preferTruncationOnSpace
  } = options;
  let ellipsis = '…';
  let ellipsisWidth = 1;
  if (typeof text !== 'string') {
    throw new TypeError(`Expected \`input\` to be a string, got ${typeof text}`);
  }
  if (typeof columns !== 'number') {
    throw new TypeError(`Expected \`columns\` to be a number, got ${typeof columns}`);
  }
  if (columns < 1) {
    return '';
  }
  if (columns === 1) {
    return ellipsis;
  }
  const length = stringWidth_1(text);
  if (length <= columns) {
    return text;
  }
  if (position === 'start') {
    if (preferTruncationOnSpace) {
      const nearestSpace = getIndexOfNearestSpace(text, length - columns + 1, true);
      return ellipsis + sliceAnsi(text, nearestSpace, length).trim();
    }
    if (space === true) {
      ellipsis += ' ';
      ellipsisWidth = 2;
    }
    return ellipsis + sliceAnsi(text, length - columns + ellipsisWidth, length);
  }
  if (position === 'middle') {
    if (space === true) {
      ellipsis = ' ' + ellipsis + ' ';
      ellipsisWidth = 3;
    }
    const half = Math.floor(columns / 2);
    if (preferTruncationOnSpace) {
      const spaceNearFirstBreakPoint = getIndexOfNearestSpace(text, half);
      const spaceNearSecondBreakPoint = getIndexOfNearestSpace(text, length - (columns - half) + 1, true);
      return sliceAnsi(text, 0, spaceNearFirstBreakPoint) + ellipsis + sliceAnsi(text, spaceNearSecondBreakPoint, length).trim();
    }
    return sliceAnsi(text, 0, half) + ellipsis + sliceAnsi(text, length - (columns - half) + ellipsisWidth, length);
  }
  if (position === 'end') {
    if (preferTruncationOnSpace) {
      const nearestSpace = getIndexOfNearestSpace(text, columns - 1);
      return sliceAnsi(text, 0, nearestSpace) + ellipsis;
    }
    if (space === true) {
      ellipsis = ' ' + ellipsis;
      ellipsisWidth = 2;
    }
    return sliceAnsi(text, 0, columns - ellipsisWidth) + ellipsis;
  }
  throw new Error(`Expected \`options.position\` to be either \`start\`, \`middle\` or \`end\`, got ${position}`);
};

var __importDefault$m = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const wrap_ansi_1 = __importDefault$m(wrapAnsi_1);
const cli_truncate_1 = __importDefault$m(cliTruncate);
const cache = {};
var _default$z = (text, maxWidth, wrapType) => {
  const cacheKey = text + String(maxWidth) + String(wrapType);
  if (cache[cacheKey]) {
    return cache[cacheKey];
  }
  let wrappedText = text;
  if (wrapType === 'wrap') {
    wrappedText = wrap_ansi_1.default(text, maxWidth, {
      trim: false,
      hard: true
    });
  }
  if (wrapType.startsWith('truncate')) {
    let position = 'end';
    if (wrapType === 'truncate-middle') {
      position = 'middle';
    }
    if (wrapType === 'truncate-start') {
      position = 'start';
    }
    wrappedText = cli_truncate_1.default(text, maxWidth, {
      position
    });
  }
  cache[cacheKey] = wrappedText;
  return wrappedText;
};

var wrapText = /*#__PURE__*/Object.defineProperty({
	default: _default$z
}, '__esModule', {value: true});

// Squashing text nodes allows to combine multiple text nodes into one and write
// to `Output` instance only once. For example, <Text>hello{' '}world</Text>
// is actually 3 text nodes, which would result 3 writes to `Output`.
//
// Also, this is necessary for libraries like ink-link (https://github.com/sindresorhus/ink-link),
// which need to wrap all children at once, instead of wrapping 3 text nodes separately.
const squashTextNodes = node => {
  let text = '';
  if (node.childNodes.length > 0) {
    for (const childNode of node.childNodes) {
      let nodeText = '';
      if (childNode.nodeName === '#text') {
        nodeText = childNode.nodeValue;
      } else {
        if (childNode.nodeName === 'ink-text' || childNode.nodeName === 'ink-virtual-text') {
          nodeText = squashTextNodes(childNode);
        }
        // Since these text nodes are being concatenated, `Output` instance won't be able to
        // apply children transform, so we have to do it manually here for each text node
        if (nodeText.length > 0 && typeof childNode.internal_transform === 'function') {
          nodeText = childNode.internal_transform(nodeText);
        }
      }
      text += nodeText;
    }
  }
  return text;
};
var _default$y = squashTextNodes;

var squashTextNodes_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$y
}, '__esModule', {value: true});

var dom$1 = createCommonjsModule(function (module, exports) {

var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTextNodeValue = exports.createTextNode = exports.setStyle = exports.setAttribute = exports.removeChildNode = exports.insertBeforeNode = exports.appendChildNode = exports.createNode = exports.TEXT_NAME = void 0;
const yoga_layout_prebuilt_1 = __importDefault(require$$0__default["default"]);
const measure_text_1 = __importDefault(measureText);
const styles_1 = __importDefault(styles);
const wrap_text_1 = __importDefault(wrapText);
const squash_text_nodes_1 = __importDefault(squashTextNodes_1);
exports.TEXT_NAME = '#text';
exports.createNode = nodeName => {
  var _a;
  const node = {
    nodeName,
    style: {},
    attributes: {},
    childNodes: [],
    parentNode: null,
    yogaNode: nodeName === 'ink-virtual-text' ? undefined : yoga_layout_prebuilt_1.default.Node.create()
  };
  if (nodeName === 'ink-text') {
    (_a = node.yogaNode) === null || _a === void 0 ? void 0 : _a.setMeasureFunc(measureTextNode.bind(null, node));
  }
  return node;
};
exports.appendChildNode = (node, childNode) => {
  var _a;
  if (childNode.parentNode) {
    exports.removeChildNode(childNode.parentNode, childNode);
  }
  childNode.parentNode = node;
  node.childNodes.push(childNode);
  if (childNode.yogaNode) {
    (_a = node.yogaNode) === null || _a === void 0 ? void 0 : _a.insertChild(childNode.yogaNode, node.yogaNode.getChildCount());
  }
  if (node.nodeName === 'ink-text' || node.nodeName === 'ink-virtual-text') {
    markNodeAsDirty(node);
  }
};
exports.insertBeforeNode = (node, newChildNode, beforeChildNode) => {
  var _a, _b;
  if (newChildNode.parentNode) {
    exports.removeChildNode(newChildNode.parentNode, newChildNode);
  }
  newChildNode.parentNode = node;
  const index = node.childNodes.indexOf(beforeChildNode);
  if (index >= 0) {
    node.childNodes.splice(index, 0, newChildNode);
    if (newChildNode.yogaNode) {
      (_a = node.yogaNode) === null || _a === void 0 ? void 0 : _a.insertChild(newChildNode.yogaNode, index);
    }
    return;
  }
  node.childNodes.push(newChildNode);
  if (newChildNode.yogaNode) {
    (_b = node.yogaNode) === null || _b === void 0 ? void 0 : _b.insertChild(newChildNode.yogaNode, node.yogaNode.getChildCount());
  }
  if (node.nodeName === 'ink-text' || node.nodeName === 'ink-virtual-text') {
    markNodeAsDirty(node);
  }
};
exports.removeChildNode = (node, removeNode) => {
  var _a, _b;
  if (removeNode.yogaNode) {
    (_b = (_a = removeNode.parentNode) === null || _a === void 0 ? void 0 : _a.yogaNode) === null || _b === void 0 ? void 0 : _b.removeChild(removeNode.yogaNode);
  }
  removeNode.parentNode = null;
  const index = node.childNodes.indexOf(removeNode);
  if (index >= 0) {
    node.childNodes.splice(index, 1);
  }
  if (node.nodeName === 'ink-text' || node.nodeName === 'ink-virtual-text') {
    markNodeAsDirty(node);
  }
};
exports.setAttribute = (node, key, value) => {
  node.attributes[key] = value;
};
exports.setStyle = (node, style) => {
  node.style = style;
  if (node.yogaNode) {
    styles_1.default(node.yogaNode, style);
  }
};
exports.createTextNode = text => {
  const node = {
    nodeName: '#text',
    nodeValue: text,
    yogaNode: undefined,
    parentNode: null,
    style: {}
  };
  exports.setTextNodeValue(node, text);
  return node;
};
const measureTextNode = function (node, width) {
  var _a, _b;
  const text = node.nodeName === '#text' ? node.nodeValue : squash_text_nodes_1.default(node);
  const dimensions = measure_text_1.default(text);
  // Text fits into container, no need to wrap
  if (dimensions.width <= width) {
    return dimensions;
  }
  // This is happening when <Box> is shrinking child nodes and Yoga asks
  // if we can fit this text node in a <1px space, so we just tell Yoga "no"
  if (dimensions.width >= 1 && width > 0 && width < 1) {
    return dimensions;
  }
  const textWrap = (_b = (_a = node.style) === null || _a === void 0 ? void 0 : _a.textWrap) !== null && _b !== void 0 ? _b : 'wrap';
  const wrappedText = wrap_text_1.default(text, width, textWrap);
  return measure_text_1.default(wrappedText);
};
const findClosestYogaNode = node => {
  var _a;
  if (!node || !node.parentNode) {
    return undefined;
  }
  return (_a = node.yogaNode) !== null && _a !== void 0 ? _a : findClosestYogaNode(node.parentNode);
};
const markNodeAsDirty = node => {
  // Mark closest Yoga node as dirty to measure text dimensions again
  const yogaNode = findClosestYogaNode(node);
  yogaNode === null || yogaNode === void 0 ? void 0 : yogaNode.markDirty();
};
exports.setTextNodeValue = (node, text) => {
  if (typeof text !== 'string') {
    text = String(text);
  }
  node.nodeValue = text;
  markNodeAsDirty(node);
};
});

var __importDefault$l = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};


const react_reconciler_1 = __importDefault$l(reactReconciler);
const yoga_layout_prebuilt_1$3 = __importDefault$l(require$$0__default["default"]);

// We need to conditionally perform devtools connection to avoid
// accidentally breaking other third-party code.
// See https://github.com/vadimdemedes/ink/issues/384
if (process.env.DEV === 'true') ;
const cleanupYogaNode = node => {
  node === null || node === void 0 ? void 0 : node.unsetMeasureFunc();
  node === null || node === void 0 ? void 0 : node.freeRecursive();
};
var _default$x = react_reconciler_1.default({
  // @ts-ignore
  schedulePassiveEffects: scheduler.unstable_scheduleCallback,
  cancelPassiveEffects: scheduler.unstable_cancelCallback,
  now: Date.now,
  getRootHostContext: () => ({
    isInsideText: false
  }),
  prepareForCommit: () => null,
  preparePortalMount: () => null,
  clearContainer: () => false,
  shouldDeprioritizeSubtree: () => false,
  resetAfterCommit: rootNode => {
    // Since renders are throttled at the instance level and <Static> component children
    // are rendered only once and then get deleted, we need an escape hatch to
    // trigger an immediate render to ensure <Static> children are written to output before they get erased
    if (rootNode.isStaticDirty) {
      rootNode.isStaticDirty = false;
      if (typeof rootNode.onImmediateRender === 'function') {
        rootNode.onImmediateRender();
      }
      return;
    }
    if (typeof rootNode.onRender === 'function') {
      rootNode.onRender();
    }
  },
  getChildHostContext: (parentHostContext, type) => {
    const previousIsInsideText = parentHostContext.isInsideText;
    const isInsideText = type === 'ink-text' || type === 'ink-virtual-text';
    if (previousIsInsideText === isInsideText) {
      return parentHostContext;
    }
    return {
      isInsideText
    };
  },
  shouldSetTextContent: () => false,
  createInstance: (originalType, newProps, _root, hostContext) => {
    if (hostContext.isInsideText && originalType === 'ink-box') {
      throw new Error(`<Box> can’t be nested inside <Text> component`);
    }
    const type = originalType === 'ink-text' && hostContext.isInsideText ? 'ink-virtual-text' : originalType;
    const node = dom$1.createNode(type);
    for (const [key, value] of Object.entries(newProps)) {
      if (key === 'children') {
        continue;
      } else if (key === 'style') {
        dom$1.setStyle(node, value);
      } else if (key === 'internal_transform') {
        node.internal_transform = value;
      } else if (key === 'internal_static') {
        node.internal_static = true;
      } else {
        dom$1.setAttribute(node, key, value);
      }
    }
    return node;
  },
  createTextInstance: (text, _root, hostContext) => {
    if (!hostContext.isInsideText) {
      throw new Error(`Text string "${text}" must be rendered inside <Text> component`);
    }
    return dom$1.createTextNode(text);
  },
  resetTextContent: () => {},
  hideTextInstance: node => {
    dom$1.setTextNodeValue(node, '');
  },
  unhideTextInstance: (node, text) => {
    dom$1.setTextNodeValue(node, text);
  },
  getPublicInstance: instance => instance,
  hideInstance: node => {
    var _a;
    (_a = node.yogaNode) === null || _a === void 0 ? void 0 : _a.setDisplay(yoga_layout_prebuilt_1$3.default.DISPLAY_NONE);
  },
  unhideInstance: node => {
    var _a;
    (_a = node.yogaNode) === null || _a === void 0 ? void 0 : _a.setDisplay(yoga_layout_prebuilt_1$3.default.DISPLAY_FLEX);
  },
  appendInitialChild: dom$1.appendChildNode,
  appendChild: dom$1.appendChildNode,
  insertBefore: dom$1.insertBeforeNode,
  finalizeInitialChildren: (node, _type, _props, rootNode) => {
    if (node.internal_static) {
      rootNode.isStaticDirty = true;
      // Save reference to <Static> node to skip traversal of entire
      // node tree to find it
      rootNode.staticNode = node;
    }
    return false;
  },
  supportsMutation: true,
  appendChildToContainer: dom$1.appendChildNode,
  insertInContainerBefore: dom$1.insertBeforeNode,
  removeChildFromContainer: (node, removeNode) => {
    dom$1.removeChildNode(node, removeNode);
    cleanupYogaNode(removeNode.yogaNode);
  },
  prepareUpdate: (node, _type, oldProps, newProps, rootNode) => {
    if (node.internal_static) {
      rootNode.isStaticDirty = true;
    }
    const updatePayload = {};
    const keys = Object.keys(newProps);
    for (const key of keys) {
      if (newProps[key] !== oldProps[key]) {
        const isStyle = key === 'style' && typeof newProps.style === 'object' && typeof oldProps.style === 'object';
        if (isStyle) {
          const newStyle = newProps.style;
          const oldStyle = oldProps.style;
          const styleKeys = Object.keys(newStyle);
          for (const styleKey of styleKeys) {
            // Always include `borderColor` and `borderStyle` to ensure border is rendered,
            // otherwise resulting `updatePayload` may not contain them
            // if they weren't changed during this update
            if (styleKey === 'borderStyle' || styleKey === 'borderColor') {
              if (typeof updatePayload.style !== 'object') {
                // Linter didn't like `= {} as Style`
                const style = {};
                updatePayload.style = style;
              }
              updatePayload.style.borderStyle = newStyle.borderStyle;
              updatePayload.style.borderColor = newStyle.borderColor;
            }
            if (newStyle[styleKey] !== oldStyle[styleKey]) {
              if (typeof updatePayload.style !== 'object') {
                // Linter didn't like `= {} as Style`
                const style = {};
                updatePayload.style = style;
              }
              updatePayload.style[styleKey] = newStyle[styleKey];
            }
          }
          continue;
        }
        updatePayload[key] = newProps[key];
      }
    }
    return updatePayload;
  },
  commitUpdate: (node, updatePayload) => {
    for (const [key, value] of Object.entries(updatePayload)) {
      if (key === 'children') {
        continue;
      } else if (key === 'style') {
        dom$1.setStyle(node, value);
      } else if (key === 'internal_transform') {
        node.internal_transform = value;
      } else if (key === 'internal_static') {
        node.internal_static = true;
      } else {
        dom$1.setAttribute(node, key, value);
      }
    }
  },
  commitTextUpdate: (node, _oldText, newText) => {
    dom$1.setTextNodeValue(node, newText);
  },
  removeChild: (node, removeNode) => {
    dom$1.removeChildNode(node, removeNode);
    cleanupYogaNode(removeNode.yogaNode);
  }
});

var reconciler = /*#__PURE__*/Object.defineProperty({
	default: _default$x
}, '__esModule', {value: true});

var indentString = (string, count = 1, options) => {
  options = {
    indent: ' ',
    includeEmptyLines: false,
    ...options
  };
  if (typeof string !== 'string') {
    throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof string}\``);
  }
  if (typeof count !== 'number') {
    throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof count}\``);
  }
  if (typeof options.indent !== 'string') {
    throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof options.indent}\``);
  }
  if (count === 0) {
    return string;
  }
  const regex = options.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
  return string.replace(regex, options.indent.repeat(count));
};

var __importDefault$k = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const yoga_layout_prebuilt_1$2 = __importDefault$k(require$$0__default["default"]);
var _default$w = yogaNode => {
  return yogaNode.getComputedWidth() - yogaNode.getComputedPadding(yoga_layout_prebuilt_1$2.default.EDGE_LEFT) - yogaNode.getComputedPadding(yoga_layout_prebuilt_1$2.default.EDGE_RIGHT) - yogaNode.getComputedBorder(yoga_layout_prebuilt_1$2.default.EDGE_LEFT) - yogaNode.getComputedBorder(yoga_layout_prebuilt_1$2.default.EDGE_RIGHT);
};

var getMaxWidth = /*#__PURE__*/Object.defineProperty({
	default: _default$w
}, '__esModule', {value: true});

var single = {
  topLeft: "┌",
  topRight: "┐",
  bottomRight: "┘",
  bottomLeft: "└",
  vertical: "│",
  horizontal: "─"
};
var double = {
  topLeft: "╔",
  topRight: "╗",
  bottomRight: "╝",
  bottomLeft: "╚",
  vertical: "║",
  horizontal: "═"
};
var round = {
  topLeft: "╭",
  topRight: "╮",
  bottomRight: "╯",
  bottomLeft: "╰",
  vertical: "│",
  horizontal: "─"
};
var bold = {
  topLeft: "┏",
  topRight: "┓",
  bottomRight: "┛",
  bottomLeft: "┗",
  vertical: "┃",
  horizontal: "━"
};
var singleDouble = {
  topLeft: "╓",
  topRight: "╖",
  bottomRight: "╜",
  bottomLeft: "╙",
  vertical: "║",
  horizontal: "─"
};
var doubleSingle = {
  topLeft: "╒",
  topRight: "╕",
  bottomRight: "╛",
  bottomLeft: "╘",
  vertical: "│",
  horizontal: "═"
};
var classic = {
  topLeft: "+",
  topRight: "+",
  bottomRight: "+",
  bottomLeft: "+",
  vertical: "|",
  horizontal: "-"
};
var cliBoxes = {
  single: single,
  double: double,
  round: round,
  bold: bold,
  singleDouble: singleDouble,
  doubleSingle: doubleSingle,
  classic: classic
};

var cliBoxes_1 = cliBoxes;
// TODO: Remove this for the next major release
var _default$v = cliBoxes;
cliBoxes_1.default = _default$v;

var __importDefault$j = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const chalk_1$1 = __importDefault$j(require$$0__default$1["default"]);
const RGB_LIKE_REGEX = /^(rgb|hsl|hsv|hwb)\(\s?(\d+),\s?(\d+),\s?(\d+)\s?\)$/;
const ANSI_REGEX = /^(ansi|ansi256)\(\s?(\d+)\s?\)$/;
const getMethod = (name, type) => {
  if (type === 'foreground') {
    return name;
  }
  return 'bg' + name[0].toUpperCase() + name.slice(1);
};
var _default$u = (str, color, type) => {
  if (!color) {
    return str;
  }
  if (color in chalk_1$1.default) {
    const method = getMethod(color, type);
    return chalk_1$1.default[method](str);
  }
  if (color.startsWith('#')) {
    const method = getMethod('hex', type);
    return chalk_1$1.default[method](color)(str);
  }
  if (color.startsWith('ansi')) {
    const matches = ANSI_REGEX.exec(color);
    if (!matches) {
      return str;
    }
    const method = getMethod(matches[1], type);
    const value = Number(matches[2]);
    return chalk_1$1.default[method](value)(str);
  }
  const isRgbLike = color.startsWith('rgb') || color.startsWith('hsl') || color.startsWith('hsv') || color.startsWith('hwb');
  if (isRgbLike) {
    const matches = RGB_LIKE_REGEX.exec(color);
    if (!matches) {
      return str;
    }
    const method = getMethod(matches[1], type);
    const firstValue = Number(matches[2]);
    const secondValue = Number(matches[3]);
    const thirdValue = Number(matches[4]);
    return chalk_1$1.default[method](firstValue, secondValue, thirdValue)(str);
  }
  return str;
};

var colorize = /*#__PURE__*/Object.defineProperty({
	default: _default$u
}, '__esModule', {value: true});

var __importDefault$i = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const cli_boxes_1 = __importDefault$i(cliBoxes_1);
const colorize_1$1 = __importDefault$i(colorize);
var _default$t = (x, y, node, output) => {
  if (typeof node.style.borderStyle === 'string') {
    const width = node.yogaNode.getComputedWidth();
    const height = node.yogaNode.getComputedHeight();
    const color = node.style.borderColor;
    const box = cli_boxes_1.default[node.style.borderStyle];
    const topBorder = colorize_1$1.default(box.topLeft + box.horizontal.repeat(width - 2) + box.topRight, color, 'foreground');
    const verticalBorder = (colorize_1$1.default(box.vertical, color, 'foreground') + '\n').repeat(height - 2);
    const bottomBorder = colorize_1$1.default(box.bottomLeft + box.horizontal.repeat(width - 2) + box.bottomRight, color, 'foreground');
    output.write(x, y, topBorder, {
      transformers: []
    });
    output.write(x, y + 1, verticalBorder, {
      transformers: []
    });
    output.write(x + width - 1, y + 1, verticalBorder, {
      transformers: []
    });
    output.write(x, y + height - 1, bottomBorder, {
      transformers: []
    });
  }
};

var renderBorder = /*#__PURE__*/Object.defineProperty({
	default: _default$t
}, '__esModule', {value: true});

var __importDefault$h = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const yoga_layout_prebuilt_1$1 = __importDefault$h(require$$0__default["default"]);
const widest_line_1 = __importDefault$h(widestLine_1);
const indent_string_1 = __importDefault$h(indentString);
const wrap_text_1 = __importDefault$h(wrapText);
const get_max_width_1 = __importDefault$h(getMaxWidth);
const squash_text_nodes_1 = __importDefault$h(squashTextNodes_1);
const render_border_1 = __importDefault$h(renderBorder);
// If parent container is `<Box>`, text nodes will be treated as separate nodes in
// the tree and will have their own coordinates in the layout.
// To ensure text nodes are aligned correctly, take X and Y of the first text node
// and use it as offset for the rest of the nodes
// Only first node is taken into account, because other text nodes can't have margin or padding,
// so their coordinates will be relative to the first node anyway
const applyPaddingToText = (node, text) => {
  var _a;
  const yogaNode = (_a = node.childNodes[0]) === null || _a === void 0 ? void 0 : _a.yogaNode;
  if (yogaNode) {
    const offsetX = yogaNode.getComputedLeft();
    const offsetY = yogaNode.getComputedTop();
    text = '\n'.repeat(offsetY) + indent_string_1.default(text, offsetX);
  }
  return text;
};
// After nodes are laid out, render each to output object, which later gets rendered to terminal
const renderNodeToOutput = (node, output, options) => {
  var _a;
  const {
    offsetX = 0,
    offsetY = 0,
    transformers = [],
    skipStaticElements
  } = options;
  if (skipStaticElements && node.internal_static) {
    return;
  }
  const {
    yogaNode
  } = node;
  if (yogaNode) {
    if (yogaNode.getDisplay() === yoga_layout_prebuilt_1$1.default.DISPLAY_NONE) {
      return;
    }
    // Left and top positions in Yoga are relative to their parent node
    const x = offsetX + yogaNode.getComputedLeft();
    const y = offsetY + yogaNode.getComputedTop();
    // Transformers are functions that transform final text output of each component
    // See Output class for logic that applies transformers
    let newTransformers = transformers;
    if (typeof node.internal_transform === 'function') {
      newTransformers = [node.internal_transform, ...transformers];
    }
    if (node.nodeName === 'ink-text') {
      let text = squash_text_nodes_1.default(node);
      if (text.length > 0) {
        const currentWidth = widest_line_1.default(text);
        const maxWidth = get_max_width_1.default(yogaNode);
        if (currentWidth > maxWidth) {
          const textWrap = (_a = node.style.textWrap) !== null && _a !== void 0 ? _a : 'wrap';
          text = wrap_text_1.default(text, maxWidth, textWrap);
        }
        text = applyPaddingToText(node, text);
        output.write(x, y, text, {
          transformers: newTransformers
        });
      }
      return;
    }
    if (node.nodeName === 'ink-box') {
      render_border_1.default(x, y, node, output);
    }
    if (node.nodeName === 'ink-root' || node.nodeName === 'ink-box') {
      for (const childNode of node.childNodes) {
        renderNodeToOutput(childNode, output, {
          offsetX: x,
          offsetY: y,
          transformers: newTransformers,
          skipStaticElements
        });
      }
    }
  }
};
var _default$s = renderNodeToOutput;

var renderNodeToOutput_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$s
}, '__esModule', {value: true});

var __importDefault$g = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const slice_ansi_1 = __importDefault$g(sliceAnsi);
const string_width_1 = __importDefault$g(stringWidth_1);
class Output {
  constructor(options) {
    // Initialize output array with a specific set of rows, so that margin/padding at the bottom is preserved
    this.writes = [];
    const {
      width,
      height
    } = options;
    this.width = width;
    this.height = height;
  }
  write(x, y, text, options) {
    const {
      transformers
    } = options;
    if (!text) {
      return;
    }
    this.writes.push({
      x,
      y,
      text,
      transformers
    });
  }
  get() {
    const output = [];
    for (let y = 0; y < this.height; y++) {
      output.push(' '.repeat(this.width));
    }
    for (const write of this.writes) {
      const {
        x,
        y,
        text,
        transformers
      } = write;
      const lines = text.split('\n');
      let offsetY = 0;
      for (let line of lines) {
        const currentLine = output[y + offsetY];
        // Line can be missing if `text` is taller than height of pre-initialized `this.output`
        if (!currentLine) {
          continue;
        }
        const width = string_width_1.default(line);
        for (const transformer of transformers) {
          line = transformer(line);
        }
        output[y + offsetY] = slice_ansi_1.default(currentLine, 0, x) + line + slice_ansi_1.default(currentLine, x + width);
        offsetY++;
      }
    }
    // eslint-disable-next-line unicorn/prefer-trim-start-end
    const generatedOutput = output.map(line => line.trimRight()).join('\n');
    return {
      output: generatedOutput,
      height: output.length
    };
  }
}
var _default$r = Output;

var output = /*#__PURE__*/Object.defineProperty({
	default: _default$r
}, '__esModule', {value: true});

var __importDefault$f = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const yoga_layout_prebuilt_1 = __importDefault$f(require$$0__default["default"]);
const render_node_to_output_1 = __importDefault$f(renderNodeToOutput_1);
const output_1 = __importDefault$f(output);
var _default$q = (node, terminalWidth) => {
  var _a;
  node.yogaNode.setWidth(terminalWidth);
  if (node.yogaNode) {
    node.yogaNode.calculateLayout(undefined, undefined, yoga_layout_prebuilt_1.default.DIRECTION_LTR);
    const output = new output_1.default({
      width: node.yogaNode.getComputedWidth(),
      height: node.yogaNode.getComputedHeight()
    });
    render_node_to_output_1.default(node, output, {
      skipStaticElements: true
    });
    let staticOutput;
    if ((_a = node.staticNode) === null || _a === void 0 ? void 0 : _a.yogaNode) {
      staticOutput = new output_1.default({
        width: node.staticNode.yogaNode.getComputedWidth(),
        height: node.staticNode.yogaNode.getComputedHeight()
      });
      render_node_to_output_1.default(node.staticNode, staticOutput, {
        skipStaticElements: false
      });
    }
    const {
      output: generatedOutput,
      height: outputHeight
    } = output.get();
    return {
      output: generatedOutput,
      outputHeight,
      // Newline at the end is needed, because static output doesn't have one, so
      // interactive output will override last line of static output
      staticOutput: staticOutput ? `${staticOutput.get().output}\n` : ''
    };
  }
  return {
    output: '',
    outputHeight: 0,
    staticOutput: ''
  };
};

var renderer = /*#__PURE__*/Object.defineProperty({
	default: _default$q
}, '__esModule', {value: true});

const CONSOLE_METHODS = ['assert', 'count', 'countReset', 'debug', 'dir', 'dirxml', 'error', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'table', 'time', 'timeEnd', 'timeLog', 'trace', 'warn'];
let originalMethods = {};
const patchConsole = callback => {
  const stdout = new stream_1__default["default"].PassThrough();
  const stderr = new stream_1__default["default"].PassThrough();
  stdout.write = data => callback('stdout', data);
  stderr.write = data => callback('stderr', data);
  const internalConsole = new console.Console(stdout, stderr);
  for (const method of CONSOLE_METHODS) {
    originalMethods[method] = console[method];
    console[method] = internalConsole[method];
  }
  return () => {
    for (const method of CONSOLE_METHODS) {
      console[method] = originalMethods[method];
    }
    originalMethods = {};
  };
};
var build$1 = patchConsole;

// Store all instances of Ink (instance.js) to ensure that consecutive render() calls
// use the same instance of Ink and don't create a new one
//
// This map has to be stored in a separate file, because render.js creates instances,
// but instance.js should delete itself from the map on unmount
var _default$p = new WeakMap();

var instances = /*#__PURE__*/Object.defineProperty({
	default: _default$p
}, '__esModule', {value: true});

/**
 * `AppContext` is a React context, which exposes a method to manually exit the app (unmount).
 */
const AppContext = react.createContext({
  exit: () => {}
});
AppContext.displayName = 'InternalAppContext';
var _default$o = AppContext;

var AppContext_1$2 = /*#__PURE__*/Object.defineProperty({
	default: _default$o
}, '__esModule', {value: true});

/**
 * `StdinContext` is a React context, which exposes input stream.
 */
const StdinContext = react.createContext({
  stdin: undefined,
  setRawMode: () => {},
  isRawModeSupported: false,
  internal_exitOnCtrlC: true
});
StdinContext.displayName = 'InternalStdinContext';
var _default$n = StdinContext;

var StdinContext_1$2 = /*#__PURE__*/Object.defineProperty({
	default: _default$n
}, '__esModule', {value: true});

/**
 * `StdoutContext` is a React context, which exposes stdout stream, where Ink renders your app.
 */
const StdoutContext = react.createContext({
  stdout: undefined,
  write: () => {}
});
StdoutContext.displayName = 'InternalStdoutContext';
var _default$m = StdoutContext;

var StdoutContext_1$2 = /*#__PURE__*/Object.defineProperty({
	default: _default$m
}, '__esModule', {value: true});

/**
 * `StderrContext` is a React context, which exposes stderr stream.
 */
const StderrContext = react.createContext({
  stderr: undefined,
  write: () => {}
});
StderrContext.displayName = 'InternalStderrContext';
var _default$l = StderrContext;

var StderrContext_1$2 = /*#__PURE__*/Object.defineProperty({
	default: _default$l
}, '__esModule', {value: true});

const FocusContext = react.createContext({
  activeId: undefined,
  add: () => {},
  remove: () => {},
  activate: () => {},
  deactivate: () => {},
  enableFocus: () => {},
  disableFocus: () => {},
  focusNext: () => {},
  focusPrevious: () => {},
  focus: () => {}
});
FocusContext.displayName = 'InternalFocusContext';
var _default$k = FocusContext;

var FocusContext_1$3 = /*#__PURE__*/Object.defineProperty({
	default: _default$k
}, '__esModule', {value: true});

const matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;
var escapeStringRegexp = string => {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  }
  return string.replace(matchOperatorsRegex, '\\$&');
};

const cwd = typeof process === 'object' && process && typeof process.cwd === 'function' ? process.cwd() : '.';
const natives = [].concat(require$$0__default$2["default"].builtinModules, 'bootstrap_node', 'node').map(n => new RegExp(`(?:\\((?:node:)?${n}(?:\\.js)?:\\d+:\\d+\\)$|^\\s*at (?:node:)?${n}(?:\\.js)?:\\d+:\\d+$)`));
natives.push(/\((?:node:)?internal\/[^:]+:\d+:\d+\)$/, /\s*at (?:node:)?internal\/[^:]+:\d+:\d+$/, /\/\.node-spawn-wrap-\w+-\w+\/node:\d+:\d+\)?$/);
class StackUtils {
  constructor(opts) {
    opts = {
      ignoredPackages: [],
      ...opts
    };
    if ('internals' in opts === false) {
      opts.internals = StackUtils.nodeInternals();
    }
    if ('cwd' in opts === false) {
      opts.cwd = cwd;
    }
    this._cwd = opts.cwd.replace(/\\/g, '/');
    this._internals = [].concat(opts.internals, ignoredPackagesRegExp(opts.ignoredPackages));
    this._wrapCallSite = opts.wrapCallSite || false;
  }
  static nodeInternals() {
    return [...natives];
  }
  clean(stack, indent = 0) {
    indent = ' '.repeat(indent);
    if (!Array.isArray(stack)) {
      stack = stack.split('\n');
    }
    if (!/^\s*at /.test(stack[0]) && /^\s*at /.test(stack[1])) {
      stack = stack.slice(1);
    }
    let outdent = false;
    let lastNonAtLine = null;
    const result = [];
    stack.forEach(st => {
      st = st.replace(/\\/g, '/');
      if (this._internals.some(internal => internal.test(st))) {
        return;
      }
      const isAtLine = /^\s*at /.test(st);
      if (outdent) {
        st = st.trimEnd().replace(/^(\s+)at /, '$1');
      } else {
        st = st.trim();
        if (isAtLine) {
          st = st.slice(3);
        }
      }
      st = st.replace(`${this._cwd}/`, '');
      if (st) {
        if (isAtLine) {
          if (lastNonAtLine) {
            result.push(lastNonAtLine);
            lastNonAtLine = null;
          }
          result.push(st);
        } else {
          outdent = true;
          lastNonAtLine = st;
        }
      }
    });
    return result.map(line => `${indent}${line}\n`).join('');
  }
  captureString(limit, fn = this.captureString) {
    if (typeof limit === 'function') {
      fn = limit;
      limit = Infinity;
    }
    const {
      stackTraceLimit
    } = Error;
    if (limit) {
      Error.stackTraceLimit = limit;
    }
    const obj = {};
    Error.captureStackTrace(obj, fn);
    const {
      stack
    } = obj;
    Error.stackTraceLimit = stackTraceLimit;
    return this.clean(stack);
  }
  capture(limit, fn = this.capture) {
    if (typeof limit === 'function') {
      fn = limit;
      limit = Infinity;
    }
    const {
      prepareStackTrace,
      stackTraceLimit
    } = Error;
    Error.prepareStackTrace = (obj, site) => {
      if (this._wrapCallSite) {
        return site.map(this._wrapCallSite);
      }
      return site;
    };
    if (limit) {
      Error.stackTraceLimit = limit;
    }
    const obj = {};
    Error.captureStackTrace(obj, fn);
    const {
      stack
    } = obj;
    Object.assign(Error, {
      prepareStackTrace,
      stackTraceLimit
    });
    return stack;
  }
  at(fn = this.at) {
    const [site] = this.capture(1, fn);
    if (!site) {
      return {};
    }
    const res = {
      line: site.getLineNumber(),
      column: site.getColumnNumber()
    };
    setFile(res, site.getFileName(), this._cwd);
    if (site.isConstructor()) {
      res.constructor = true;
    }
    if (site.isEval()) {
      res.evalOrigin = site.getEvalOrigin();
    }

    // Node v10 stopped with the isNative() on callsites, apparently
    /* istanbul ignore next */
    if (site.isNative()) {
      res.native = true;
    }
    let typename;
    try {
      typename = site.getTypeName();
    } catch (_) {}
    if (typename && typename !== 'Object' && typename !== '[object Object]') {
      res.type = typename;
    }
    const fname = site.getFunctionName();
    if (fname) {
      res.function = fname;
    }
    const meth = site.getMethodName();
    if (meth && fname !== meth) {
      res.method = meth;
    }
    return res;
  }
  parseLine(line) {
    const match = line && line.match(re);
    if (!match) {
      return null;
    }
    const ctor = match[1] === 'new';
    let fname = match[2];
    const evalOrigin = match[3];
    const evalFile = match[4];
    const evalLine = Number(match[5]);
    const evalCol = Number(match[6]);
    let file = match[7];
    const lnum = match[8];
    const col = match[9];
    const native = match[10] === 'native';
    const closeParen = match[11] === ')';
    let method;
    const res = {};
    if (lnum) {
      res.line = Number(lnum);
    }
    if (col) {
      res.column = Number(col);
    }
    if (closeParen && file) {
      // make sure parens are balanced
      // if we have a file like "asdf) [as foo] (xyz.js", then odds are
      // that the fname should be += " (asdf) [as foo]" and the file
      // should be just "xyz.js"
      // walk backwards from the end to find the last unbalanced (
      let closes = 0;
      for (let i = file.length - 1; i > 0; i--) {
        if (file.charAt(i) === ')') {
          closes++;
        } else if (file.charAt(i) === '(' && file.charAt(i - 1) === ' ') {
          closes--;
          if (closes === -1 && file.charAt(i - 1) === ' ') {
            const before = file.slice(0, i - 1);
            const after = file.slice(i + 1);
            file = after;
            fname += ` (${before}`;
            break;
          }
        }
      }
    }
    if (fname) {
      const methodMatch = fname.match(methodRe);
      if (methodMatch) {
        fname = methodMatch[1];
        method = methodMatch[2];
      }
    }
    setFile(res, file, this._cwd);
    if (ctor) {
      res.constructor = true;
    }
    if (evalOrigin) {
      res.evalOrigin = evalOrigin;
      res.evalLine = evalLine;
      res.evalColumn = evalCol;
      res.evalFile = evalFile && evalFile.replace(/\\/g, '/');
    }
    if (native) {
      res.native = true;
    }
    if (fname) {
      res.function = fname;
    }
    if (method && fname !== method) {
      res.method = method;
    }
    return res;
  }
}
function setFile(result, filename, cwd) {
  if (filename) {
    filename = filename.replace(/\\/g, '/');
    if (filename.startsWith(`${cwd}/`)) {
      filename = filename.slice(cwd.length + 1);
    }
    result.file = filename;
  }
}
function ignoredPackagesRegExp(ignoredPackages) {
  if (ignoredPackages.length === 0) {
    return [];
  }
  const packages = ignoredPackages.map(mod => escapeStringRegexp(mod));
  return new RegExp(`[\/\\\\]node_modules[\/\\\\](?:${packages.join('|')})[\/\\\\][^:]+:\\d+:\\d+`);
}
const re = new RegExp('^' +
// Sometimes we strip out the '    at' because it's noisy
'(?:\\s*at )?' +
// $1 = ctor if 'new'
'(?:(new) )?' +
// $2 = function name (can be literally anything)
// May contain method at the end as [as xyz]
'(?:(.*?) \\()?' +
// (eval at <anonymous> (file.js:1:1),
// $3 = eval origin
// $4:$5:$6 are eval file/line/col, but not normally reported
'(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?' +
// file:line:col
// $7:$8:$9
// $10 = 'native' if native
'(?:(.+?):(\\d+):(\\d+)|(native))' +
// maybe close the paren, then end
// if $11 is ), then we only allow balanced parens in the filename
// any imbalance is placed on the fname.  This is a heuristic, and
// bound to be incorrect in some edge cases.  The bet is that
// having weird characters in method names is more common than
// having weird characters in filenames, which seems reasonable.
'(\\)?)$');
const methodRe = /^(.*?) \[as (.*?)\]$/;
var stackUtils$1 = StackUtils;

var convertToSpaces = (str, spaces) => {
  return str.replace(/^\t+/gm, $1 => ' '.repeat($1.length * (spaces || 2)));
};

const generateLineNumbers = (line, around) => {
  const lineNumbers = [];
  const min = line - around;
  const max = line + around;
  for (let lineNumber = min; lineNumber <= max; lineNumber++) {
    lineNumbers.push(lineNumber);
  }
  return lineNumbers;
};
var codeExcerpt = (source, line, options) => {
  if (typeof source !== 'string') {
    throw new TypeError('Source code is missing.');
  }
  if (!line || line < 1) {
    throw new TypeError('Line number must start from `1`.');
  }
  source = convertToSpaces(source).split(/\r?\n/);
  if (line > source.length) {
    return;
  }
  options = {
    around: 3,
    ...options
  };
  return generateLineNumbers(line, options.around).filter(line => source[line - 1] !== undefined).map(line => ({
    line,
    value: source[line - 1]
  }));
};

var __createBinding$4 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$4 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar$4 = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding$4(result, mod, k);
  __setModuleDefault$4(result, mod);
  return result;
};
var __rest = commonjsGlobal && commonjsGlobal.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
const react_1$9 = __importStar$4(react);
/**
 * `<Box>` is an essential Ink component to build your layout. It's like `<div style="display: flex">` in the browser.
 */
const Box = react_1$9.forwardRef((_a, ref) => {
  var {
      children
    } = _a,
    style = __rest(_a, ["children"]);
  const transformedStyle = Object.assign(Object.assign({}, style), {
    marginLeft: style.marginLeft || style.marginX || style.margin || 0,
    marginRight: style.marginRight || style.marginX || style.margin || 0,
    marginTop: style.marginTop || style.marginY || style.margin || 0,
    marginBottom: style.marginBottom || style.marginY || style.margin || 0,
    paddingLeft: style.paddingLeft || style.paddingX || style.padding || 0,
    paddingRight: style.paddingRight || style.paddingX || style.padding || 0,
    paddingTop: style.paddingTop || style.paddingY || style.padding || 0,
    paddingBottom: style.paddingBottom || style.paddingY || style.padding || 0
  });
  return react_1$9.default.createElement("ink-box", {
    ref: ref,
    style: transformedStyle
  }, children);
});
Box.displayName = 'Box';
Box.defaultProps = {
  flexDirection: 'row',
  flexGrow: 0,
  flexShrink: 1
};
var _default$j = Box;

var Box_1$2 = /*#__PURE__*/Object.defineProperty({
	default: _default$j
}, '__esModule', {value: true});

var __importDefault$e = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const react_1$8 = __importDefault$e(react);
const chalk_1 = __importDefault$e(require$$0__default$1["default"]);
const colorize_1 = __importDefault$e(colorize);
/**
 * This component can display text, and change its style to make it colorful, bold, underline, italic or strikethrough.
 */
const Text = ({
  color,
  backgroundColor,
  dimColor,
  bold,
  italic,
  underline,
  strikethrough,
  inverse,
  wrap,
  children
}) => {
  if (children === undefined || children === null) {
    return null;
  }
  const transform = children => {
    if (dimColor) {
      children = chalk_1.default.dim(children);
    }
    if (color) {
      children = colorize_1.default(children, color, 'foreground');
    }
    if (backgroundColor) {
      children = colorize_1.default(children, backgroundColor, 'background');
    }
    if (bold) {
      children = chalk_1.default.bold(children);
    }
    if (italic) {
      children = chalk_1.default.italic(children);
    }
    if (underline) {
      children = chalk_1.default.underline(children);
    }
    if (strikethrough) {
      children = chalk_1.default.strikethrough(children);
    }
    if (inverse) {
      children = chalk_1.default.inverse(children);
    }
    return children;
  };
  return react_1$8.default.createElement("ink-text", {
    style: {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: 'row',
      textWrap: wrap
    },
    internal_transform: transform
  }, children);
};
Text.displayName = 'Text';
Text.defaultProps = {
  dimColor: false,
  bold: false,
  italic: false,
  underline: false,
  strikethrough: false,
  wrap: 'wrap'
};
var _default$i = Text;

var Text_1$1 = /*#__PURE__*/Object.defineProperty({
	default: _default$i
}, '__esModule', {value: true});

var __createBinding$3 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$3 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar$3 = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding$3(result, mod, k);
  __setModuleDefault$3(result, mod);
  return result;
};
var __importDefault$d = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const fs = __importStar$3(require$$0__default$3["default"]);
const react_1$7 = __importDefault$d(react);
const stack_utils_1 = __importDefault$d(stackUtils$1);
const code_excerpt_1 = __importDefault$d(codeExcerpt);
const Box_1$1 = __importDefault$d(Box_1$2);
const Text_1 = __importDefault$d(Text_1$1);
const stackUtils = new stack_utils_1.default({
  cwd: process.cwd(),
  internals: stack_utils_1.default.nodeInternals()
});
const ErrorOverview = ({
  error
}) => {
  const stack = error.stack ? error.stack.split('\n').slice(1) : undefined;
  const origin = stack ? stackUtils.parseLine(stack[0]) : undefined;
  let excerpt;
  let lineWidth = 0;
  if ((origin === null || origin === void 0 ? void 0 : origin.file) && (origin === null || origin === void 0 ? void 0 : origin.line) && fs.existsSync(origin.file)) {
    const sourceCode = fs.readFileSync(origin.file, 'utf8');
    excerpt = code_excerpt_1.default(sourceCode, origin.line);
    if (excerpt) {
      for (const {
        line
      } of excerpt) {
        lineWidth = Math.max(lineWidth, String(line).length);
      }
    }
  }
  return react_1$7.default.createElement(Box_1$1.default, {
    flexDirection: "column",
    padding: 1
  }, react_1$7.default.createElement(Box_1$1.default, null, react_1$7.default.createElement(Text_1.default, {
    backgroundColor: "red",
    color: "white"
  }, ' ', "ERROR", ' '), react_1$7.default.createElement(Text_1.default, null, " ", error.message)), origin && react_1$7.default.createElement(Box_1$1.default, {
    marginTop: 1
  }, react_1$7.default.createElement(Text_1.default, {
    dimColor: true
  }, origin.file, ":", origin.line, ":", origin.column)), origin && excerpt && react_1$7.default.createElement(Box_1$1.default, {
    marginTop: 1,
    flexDirection: "column"
  }, excerpt.map(({
    line,
    value
  }) => react_1$7.default.createElement(Box_1$1.default, {
    key: line
  }, react_1$7.default.createElement(Box_1$1.default, {
    width: lineWidth + 1
  }, react_1$7.default.createElement(Text_1.default, {
    dimColor: line !== origin.line,
    backgroundColor: line === origin.line ? 'red' : undefined,
    color: line === origin.line ? 'white' : undefined
  }, String(line).padStart(lineWidth, ' '), ":")), react_1$7.default.createElement(Text_1.default, {
    key: line,
    backgroundColor: line === origin.line ? 'red' : undefined,
    color: line === origin.line ? 'white' : undefined
  }, ' ' + value)))), error.stack && react_1$7.default.createElement(Box_1$1.default, {
    marginTop: 1,
    flexDirection: "column"
  }, error.stack.split('\n').slice(1).map(line => {
    const parsedLine = stackUtils.parseLine(line);
    // If the line from the stack cannot be parsed, we print out the unparsed line.
    if (!parsedLine) {
      return react_1$7.default.createElement(Box_1$1.default, {
        key: line
      }, react_1$7.default.createElement(Text_1.default, {
        dimColor: true
      }, "- "), react_1$7.default.createElement(Text_1.default, {
        dimColor: true,
        bold: true
      }, line));
    }
    return react_1$7.default.createElement(Box_1$1.default, {
      key: line
    }, react_1$7.default.createElement(Text_1.default, {
      dimColor: true
    }, "- "), react_1$7.default.createElement(Text_1.default, {
      dimColor: true,
      bold: true
    }, parsedLine.function), react_1$7.default.createElement(Text_1.default, {
      dimColor: true,
      color: "gray"
    }, ' ', "(", parsedLine.file, ":", parsedLine.line, ":", parsedLine.column, ")"));
  })));
};
var _default$h = ErrorOverview;

var ErrorOverview_1$1 = /*#__PURE__*/Object.defineProperty({
	default: _default$h
}, '__esModule', {value: true});

var __createBinding$2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$2 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar$2 = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding$2(result, mod, k);
  __setModuleDefault$2(result, mod);
  return result;
};
var __importDefault$c = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
const react_1$6 = __importStar$2(react);
const cli_cursor_1 = __importDefault$c(cliCursor);
const AppContext_1$1 = __importDefault$c(AppContext_1$2);
const StdinContext_1$1 = __importDefault$c(StdinContext_1$2);
const StdoutContext_1$1 = __importDefault$c(StdoutContext_1$2);
const StderrContext_1$1 = __importDefault$c(StderrContext_1$2);
const FocusContext_1$2 = __importDefault$c(FocusContext_1$3);
const ErrorOverview_1 = __importDefault$c(ErrorOverview_1$1);
const TAB = '\t';
const SHIFT_TAB = '\u001B[Z';
const ESC = '\u001B';
// Root component for all Ink apps
// It renders stdin and stdout contexts, so that children can access them if needed
// It also handles Ctrl+C exiting and cursor visibility
class App extends react_1$6.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isFocusEnabled: true,
      activeFocusId: undefined,
      focusables: [],
      error: undefined
    };
    // Count how many components enabled raw mode to avoid disabling
    // raw mode until all components don't need it anymore
    this.rawModeEnabledCount = 0;
    this.handleSetRawMode = isEnabled => {
      const {
        stdin
      } = this.props;
      if (!this.isRawModeSupported()) {
        if (stdin === process.stdin) {
          throw new Error('Raw mode is not supported on the current process.stdin, which Ink uses as input stream by default.\nRead about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported');
        } else {
          throw new Error('Raw mode is not supported on the stdin provided to Ink.\nRead about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported');
        }
      }
      stdin.setEncoding('utf8');
      if (isEnabled) {
        // Ensure raw mode is enabled only once
        if (this.rawModeEnabledCount === 0) {
          stdin.addListener('data', this.handleInput);
          stdin.resume();
          stdin.setRawMode(true);
        }
        this.rawModeEnabledCount++;
        return;
      }
      // Disable raw mode only when no components left that are using it
      if (--this.rawModeEnabledCount === 0) {
        stdin.setRawMode(false);
        stdin.removeListener('data', this.handleInput);
        stdin.pause();
      }
    };
    this.handleInput = input => {
      // Exit on Ctrl+C
      // eslint-disable-next-line unicorn/no-hex-escape
      if (input === '\x03' && this.props.exitOnCtrlC) {
        this.handleExit();
      }
      // Reset focus when there's an active focused component on Esc
      if (input === ESC && this.state.activeFocusId) {
        this.setState({
          activeFocusId: undefined
        });
      }
      if (this.state.isFocusEnabled && this.state.focusables.length > 0) {
        if (input === TAB) {
          this.focusNext();
        }
        if (input === SHIFT_TAB) {
          this.focusPrevious();
        }
      }
    };
    this.handleExit = error => {
      if (this.isRawModeSupported()) {
        this.handleSetRawMode(false);
      }
      this.props.onExit(error);
    };
    this.enableFocus = () => {
      this.setState({
        isFocusEnabled: true
      });
    };
    this.disableFocus = () => {
      this.setState({
        isFocusEnabled: false
      });
    };
    this.focus = id => {
      this.setState(previousState => {
        const hasFocusableId = previousState.focusables.some(focusable => (focusable === null || focusable === void 0 ? void 0 : focusable.id) === id);
        if (!hasFocusableId) {
          return previousState;
        }
        return {
          activeFocusId: id
        };
      });
    };
    this.focusNext = () => {
      this.setState(previousState => {
        var _a;
        const firstFocusableId = (_a = previousState.focusables[0]) === null || _a === void 0 ? void 0 : _a.id;
        const nextFocusableId = this.findNextFocusable(previousState);
        return {
          activeFocusId: nextFocusableId || firstFocusableId
        };
      });
    };
    this.focusPrevious = () => {
      this.setState(previousState => {
        var _a;
        const lastFocusableId = (_a = previousState.focusables[previousState.focusables.length - 1]) === null || _a === void 0 ? void 0 : _a.id;
        const previousFocusableId = this.findPreviousFocusable(previousState);
        return {
          activeFocusId: previousFocusableId || lastFocusableId
        };
      });
    };
    this.addFocusable = (id, {
      autoFocus
    }) => {
      this.setState(previousState => {
        let nextFocusId = previousState.activeFocusId;
        if (!nextFocusId && autoFocus) {
          nextFocusId = id;
        }
        return {
          activeFocusId: nextFocusId,
          focusables: [...previousState.focusables, {
            id,
            isActive: true
          }]
        };
      });
    };
    this.removeFocusable = id => {
      this.setState(previousState => ({
        activeFocusId: previousState.activeFocusId === id ? undefined : previousState.activeFocusId,
        focusables: previousState.focusables.filter(focusable => {
          return focusable.id !== id;
        })
      }));
    };
    this.activateFocusable = id => {
      this.setState(previousState => ({
        focusables: previousState.focusables.map(focusable => {
          if (focusable.id !== id) {
            return focusable;
          }
          return {
            id,
            isActive: true
          };
        })
      }));
    };
    this.deactivateFocusable = id => {
      this.setState(previousState => ({
        activeFocusId: previousState.activeFocusId === id ? undefined : previousState.activeFocusId,
        focusables: previousState.focusables.map(focusable => {
          if (focusable.id !== id) {
            return focusable;
          }
          return {
            id,
            isActive: false
          };
        })
      }));
    };
    this.findNextFocusable = state => {
      var _a;
      const activeIndex = state.focusables.findIndex(focusable => {
        return focusable.id === state.activeFocusId;
      });
      for (let index = activeIndex + 1; index < state.focusables.length; index++) {
        if ((_a = state.focusables[index]) === null || _a === void 0 ? void 0 : _a.isActive) {
          return state.focusables[index].id;
        }
      }
      return undefined;
    };
    this.findPreviousFocusable = state => {
      var _a;
      const activeIndex = state.focusables.findIndex(focusable => {
        return focusable.id === state.activeFocusId;
      });
      for (let index = activeIndex - 1; index >= 0; index--) {
        if ((_a = state.focusables[index]) === null || _a === void 0 ? void 0 : _a.isActive) {
          return state.focusables[index].id;
        }
      }
      return undefined;
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  // Determines if TTY is supported on the provided stdin
  isRawModeSupported() {
    return this.props.stdin.isTTY;
  }
  render() {
    return react_1$6.default.createElement(AppContext_1$1.default.Provider, {
      value: {
        exit: this.handleExit
      }
    }, react_1$6.default.createElement(StdinContext_1$1.default.Provider, {
      value: {
        stdin: this.props.stdin,
        setRawMode: this.handleSetRawMode,
        isRawModeSupported: this.isRawModeSupported(),
        internal_exitOnCtrlC: this.props.exitOnCtrlC
      }
    }, react_1$6.default.createElement(StdoutContext_1$1.default.Provider, {
      value: {
        stdout: this.props.stdout,
        write: this.props.writeToStdout
      }
    }, react_1$6.default.createElement(StderrContext_1$1.default.Provider, {
      value: {
        stderr: this.props.stderr,
        write: this.props.writeToStderr
      }
    }, react_1$6.default.createElement(FocusContext_1$2.default.Provider, {
      value: {
        activeId: this.state.activeFocusId,
        add: this.addFocusable,
        remove: this.removeFocusable,
        activate: this.activateFocusable,
        deactivate: this.deactivateFocusable,
        enableFocus: this.enableFocus,
        disableFocus: this.disableFocus,
        focusNext: this.focusNext,
        focusPrevious: this.focusPrevious,
        focus: this.focus
      }
    }, this.state.error ? react_1$6.default.createElement(ErrorOverview_1.default, {
      error: this.state.error
    }) : this.props.children)))));
  }
  componentDidMount() {
    cli_cursor_1.default.hide(this.props.stdout);
  }
  componentWillUnmount() {
    cli_cursor_1.default.show(this.props.stdout);
    // ignore calling setRawMode on an handle stdin it cannot be called
    if (this.isRawModeSupported()) {
      this.handleSetRawMode(false);
    }
  }
  componentDidCatch(error) {
    this.handleExit(error);
  }
}
var _default$g = App;
App.displayName = 'InternalApp';

var App_1$1 = /*#__PURE__*/Object.defineProperty({
	default: _default$g
}, '__esModule', {value: true});

var __createBinding$1 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$1 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar$1 = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding$1(result, mod, k);
  __setModuleDefault$1(result, mod);
  return result;
};
var __importDefault$b = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const react_1$5 = __importDefault$b(react);

const log_update_1 = __importDefault$b(logUpdate);
const ansi_escapes_1 = __importDefault$b(ansiEscapes_1);
const is_ci_1 = __importDefault$b(isCi);
const auto_bind_1 = __importDefault$b(autoBind);
const reconciler_1 = __importDefault$b(reconciler);
const renderer_1 = __importDefault$b(renderer);
const signal_exit_1 = __importDefault$b(signalExit__default["default"]);
const patch_console_1 = __importDefault$b(build$1);
const dom = __importStar$1(dom$1);
const instances_1$1 = __importDefault$b(instances);
const App_1 = __importDefault$b(App_1$1);
const isCI = process.env.CI === 'false' ? false : is_ci_1.default;
const noop = () => {};
class Ink {
  constructor(options) {
    this.resolveExitPromise = () => {};
    this.rejectExitPromise = () => {};
    this.unsubscribeExit = () => {};
    this.onRender = () => {
      if (this.isUnmounted) {
        return;
      }
      const {
        output,
        outputHeight,
        staticOutput
      } = renderer_1.default(this.rootNode,
      // The 'columns' property can be undefined or 0 when not using a TTY.
      // In that case we fall back to 80.
      this.options.stdout.columns || 80);
      // If <Static> output isn't empty, it means new children have been added to it
      const hasStaticOutput = staticOutput && staticOutput !== '\n';
      if (this.options.debug) {
        if (hasStaticOutput) {
          this.fullStaticOutput += staticOutput;
        }
        this.options.stdout.write(this.fullStaticOutput + output);
        return;
      }
      if (isCI) {
        if (hasStaticOutput) {
          this.options.stdout.write(staticOutput);
        }
        this.lastOutput = output;
        return;
      }
      if (hasStaticOutput) {
        this.fullStaticOutput += staticOutput;
      }
      if (outputHeight >= this.options.stdout.rows) {
        this.options.stdout.write(ansi_escapes_1.default.clearTerminal + this.fullStaticOutput + output);
        this.lastOutput = output;
        return;
      }
      // To ensure static output is cleanly rendered before main output, clear main output first
      if (hasStaticOutput) {
        this.log.clear();
        this.options.stdout.write(staticOutput);
        this.log(output);
      }
      if (!hasStaticOutput && output !== this.lastOutput) {
        this.throttledLog(output);
      }
      this.lastOutput = output;
    };
    auto_bind_1.default(this);
    this.options = options;
    this.rootNode = dom.createNode('ink-root');
    this.rootNode.onRender = options.debug ? this.onRender : lodash_1__default["default"].throttle(this.onRender, 32, {
      leading: true,
      trailing: true
    });
    this.rootNode.onImmediateRender = this.onRender;
    this.log = log_update_1.default.create(options.stdout);
    this.throttledLog = options.debug ? this.log : lodash_1__default["default"].throttle(this.log, undefined, {
      leading: true,
      trailing: true
    });
    // Ignore last render after unmounting a tree to prevent empty output before exit
    this.isUnmounted = false;
    // Store last output to only rerender when needed
    this.lastOutput = '';
    // This variable is used only in debug mode to store full static output
    // so that it's rerendered every time, not just new static parts, like in non-debug mode
    this.fullStaticOutput = '';
    this.container = reconciler_1.default.createContainer(this.rootNode,
    // Legacy mode
    0, false, null);
    // Unmount when process exits
    this.unsubscribeExit = signal_exit_1.default(this.unmount, {
      alwaysLast: false
    });
    if (process.env.DEV === 'true') {
      reconciler_1.default.injectIntoDevTools({
        bundleType: 0,
        // Reporting React DOM's version, not Ink's
        // See https://github.com/facebook/react/issues/16666#issuecomment-532639905
        version: '16.13.1',
        rendererPackageName: 'ink'
      });
    }
    if (options.patchConsole) {
      this.patchConsole();
    }
    if (!isCI) {
      options.stdout.on('resize', this.onRender);
      this.unsubscribeResize = () => {
        options.stdout.off('resize', this.onRender);
      };
    }
  }
  render(node) {
    const tree = react_1$5.default.createElement(App_1.default, {
      stdin: this.options.stdin,
      stdout: this.options.stdout,
      stderr: this.options.stderr,
      writeToStdout: this.writeToStdout,
      writeToStderr: this.writeToStderr,
      exitOnCtrlC: this.options.exitOnCtrlC,
      onExit: this.unmount
    }, node);
    reconciler_1.default.updateContainer(tree, this.container, null, noop);
  }
  writeToStdout(data) {
    if (this.isUnmounted) {
      return;
    }
    if (this.options.debug) {
      this.options.stdout.write(data + this.fullStaticOutput + this.lastOutput);
      return;
    }
    if (isCI) {
      this.options.stdout.write(data);
      return;
    }
    this.log.clear();
    this.options.stdout.write(data);
    this.log(this.lastOutput);
  }
  writeToStderr(data) {
    if (this.isUnmounted) {
      return;
    }
    if (this.options.debug) {
      this.options.stderr.write(data);
      this.options.stdout.write(this.fullStaticOutput + this.lastOutput);
      return;
    }
    if (isCI) {
      this.options.stderr.write(data);
      return;
    }
    this.log.clear();
    this.options.stderr.write(data);
    this.log(this.lastOutput);
  }
  unmount(error) {
    if (this.isUnmounted) {
      return;
    }
    this.onRender();
    this.unsubscribeExit();
    if (typeof this.restoreConsole === 'function') {
      this.restoreConsole();
    }
    if (typeof this.unsubscribeResize === 'function') {
      this.unsubscribeResize();
    }
    // CIs don't handle erasing ansi escapes well, so it's better to
    // only render last frame of non-static output
    if (isCI) {
      this.options.stdout.write(this.lastOutput + '\n');
    } else if (!this.options.debug) {
      this.log.done();
    }
    this.isUnmounted = true;
    reconciler_1.default.updateContainer(null, this.container, null, noop);
    instances_1$1.default.delete(this.options.stdout);
    if (error instanceof Error) {
      this.rejectExitPromise(error);
    } else {
      this.resolveExitPromise();
    }
  }
  waitUntilExit() {
    if (!this.exitPromise) {
      this.exitPromise = new Promise((resolve, reject) => {
        this.resolveExitPromise = resolve;
        this.rejectExitPromise = reject;
      });
    }
    return this.exitPromise;
  }
  clear() {
    if (!isCI && !this.options.debug) {
      this.log.clear();
    }
  }
  patchConsole() {
    if (this.options.debug) {
      return;
    }
    this.restoreConsole = patch_console_1.default((stream, data) => {
      if (stream === 'stdout') {
        this.writeToStdout(data);
      }
      if (stream === 'stderr') {
        const isReactMessage = data.startsWith('The above error occurred');
        if (!isReactMessage) {
          this.writeToStderr(data);
        }
      }
    });
  }
}
var _default$f = Ink;

var ink = /*#__PURE__*/Object.defineProperty({
	default: _default$f
}, '__esModule', {value: true});

var __importDefault$a = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const ink_1 = __importDefault$a(ink);
const instances_1 = __importDefault$a(instances);

/**
 * Mount a component and render the output.
 */
const render = (node, options) => {
  const inkOptions = Object.assign({
    stdout: process.stdout,
    stdin: process.stdin,
    stderr: process.stderr,
    debug: false,
    exitOnCtrlC: true,
    patchConsole: true
  }, getOptions(options));
  const instance = getInstance(inkOptions.stdout, () => new ink_1.default(inkOptions));
  instance.render(node);
  return {
    rerender: instance.render,
    unmount: () => instance.unmount(),
    waitUntilExit: instance.waitUntilExit,
    cleanup: () => instances_1.default.delete(inkOptions.stdout),
    clear: instance.clear
  };
};
var _default$e = render;
const getOptions = (stdout = {}) => {
  if (stdout instanceof stream_1__default["default"].Stream) {
    return {
      stdout,
      stdin: process.stdin
    };
  }
  return stdout;
};
const getInstance = (stdout, createInstance) => {
  let instance;
  if (instances_1.default.has(stdout)) {
    instance = instances_1.default.get(stdout);
  } else {
    instance = createInstance();
    instances_1.default.set(stdout, instance);
  }
  return instance;
};

var render_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$e
}, '__esModule', {value: true});

var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};

const react_1$4 = __importStar(react);
/**
 * `<Static>` component permanently renders its output above everything else.
 * It's useful for displaying activity like completed tasks or logs - things that
 * are not changing after they're rendered (hence the name "Static").
 *
 * It's preferred to use `<Static>` for use cases like these, when you can't know
 * or control the amount of items that need to be rendered.
 *
 * For example, [Tap](https://github.com/tapjs/node-tap) uses `<Static>` to display
 * a list of completed tests. [Gatsby](https://github.com/gatsbyjs/gatsby) uses it
 * to display a list of generated pages, while still displaying a live progress bar.
 */
const Static = props => {
  const {
    items,
    children: render,
    style: customStyle
  } = props;
  const [index, setIndex] = react_1$4.useState(0);
  const itemsToRender = react_1$4.useMemo(() => {
    return items.slice(index);
  }, [items, index]);
  react_1$4.useLayoutEffect(() => {
    setIndex(items.length);
  }, [items.length]);
  const children = itemsToRender.map((item, itemIndex) => {
    return render(item, index + itemIndex);
  });
  const style = react_1$4.useMemo(() => Object.assign({
    position: 'absolute',
    flexDirection: 'column'
  }, customStyle), [customStyle]);
  return react_1$4.default.createElement("ink-box", {
    // @ts-ignore
    internal_static: true,
    style: style
  }, children);
};
Static.displayName = 'Static';
var _default$d = Static;

var Static_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$d
}, '__esModule', {value: true});

var __importDefault$9 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const react_1$3 = __importDefault$9(react);
/**
 * Transform a string representation of React components before they are written to output.
 * For example, you might want to apply a gradient to text, add a clickable link or create some text effects.
 * These use cases can't accept React nodes as input, they are expecting a string.
 * That's what <Transform> component does, it gives you an output string of its child components and lets you transform it in any way.
 */
const Transform = ({
  children,
  transform
}) => {
  if (children === undefined || children === null) {
    return null;
  }
  return react_1$3.default.createElement("ink-text", {
    style: {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: 'row'
    },
    internal_transform: transform
  }, children);
};
Transform.displayName = 'Transform';
var _default$c = Transform;

var Transform_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$c
}, '__esModule', {value: true});

var __importDefault$8 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const react_1$2 = __importDefault$8(react);
/**
 * Adds one or more newline (\n) characters. Must be used within <Text> components.
 */
const Newline = ({
  count = 1
}) => react_1$2.default.createElement("ink-text", null, '\n'.repeat(count));
Newline.displayName = 'Newline';
var _default$b = Newline;

var Newline_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$b
}, '__esModule', {value: true});

var __importDefault$7 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

const react_1$1 = __importDefault$7(react);
const Box_1 = __importDefault$7(Box_1$2);
/**
 * A flexible space that expands along the major axis of its containing layout.
 * It's useful as a shortcut for filling all the available spaces between elements.
 */
const Spacer = () => react_1$1.default.createElement(Box_1.default, {
  flexGrow: 1
});
Spacer.displayName = 'Spacer';
var _default$a = Spacer;

var Spacer_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$a
}, '__esModule', {value: true});

var __importDefault$6 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};


const StdinContext_1 = __importDefault$6(StdinContext_1$2);
/**
 * `useStdin` is a React hook, which exposes stdin stream.
 */
const useStdin = () => react.useContext(StdinContext_1.default);
var _default$9 = useStdin;

var useStdin_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$9
}, '__esModule', {value: true});

var __importDefault$5 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};


const use_stdin_1$1 = __importDefault$5(useStdin_1);
/**
 * This hook is used for handling user input.
 * It's a more convenient alternative to using `StdinContext` and listening to `data` events.
 * The callback you pass to `useInput` is called for each character when user enters any input.
 * However, if user pastes text and it's more than one character, the callback will be called only once and the whole string will be passed as `input`.
 *
 * ```
 * import {useInput} from 'ink';
 *
 * const UserInput = () => {
 *   useInput((input, key) => {
 *     if (input === 'q') {
 *       // Exit program
 *     }
 *
 *     if (key.leftArrow) {
 *       // Left arrow key pressed
 *     }
 *   });
 *
 *   return …
 * };
 * ```
 */
const useInput = (inputHandler, options = {}) => {
  const {
    stdin,
    setRawMode,
    internal_exitOnCtrlC
  } = use_stdin_1$1.default();
  react.useEffect(() => {
    if (options.isActive === false) {
      return;
    }
    setRawMode(true);
    return () => {
      setRawMode(false);
    };
  }, [options.isActive, setRawMode]);
  react.useEffect(() => {
    if (options.isActive === false) {
      return;
    }
    const handleData = data => {
      let input = String(data);
      const key = {
        upArrow: input === '\u001B[A',
        downArrow: input === '\u001B[B',
        leftArrow: input === '\u001B[D',
        rightArrow: input === '\u001B[C',
        pageDown: input === '\u001B[6~',
        pageUp: input === '\u001B[5~',
        return: input === '\r',
        escape: input === '\u001B',
        ctrl: false,
        shift: false,
        tab: input === '\t' || input === '\u001B[Z',
        backspace: input === '\u0008',
        delete: input === '\u007F' || input === '\u001B[3~',
        meta: false
      };
      // Copied from `keypress` module
      if (input <= '\u001A' && !key.return) {
        input = String.fromCharCode(input.charCodeAt(0) + 'a'.charCodeAt(0) - 1);
        key.ctrl = true;
      }
      if (input.startsWith('\u001B')) {
        input = input.slice(1);
        key.meta = true;
      }
      const isLatinUppercase = input >= 'A' && input <= 'Z';
      const isCyrillicUppercase = input >= 'А' && input <= 'Я';
      if (input.length === 1 && (isLatinUppercase || isCyrillicUppercase)) {
        key.shift = true;
      }
      // Shift+Tab
      if (key.tab && input === '[Z') {
        key.shift = true;
      }
      if (key.tab || key.backspace || key.delete) {
        input = '';
      }
      // If app is not supposed to exit on Ctrl+C, then let input listener handle it
      if (!(input === 'c' && key.ctrl) || !internal_exitOnCtrlC) {
        inputHandler(input, key);
      }
    };
    stdin === null || stdin === void 0 ? void 0 : stdin.on('data', handleData);
    return () => {
      stdin === null || stdin === void 0 ? void 0 : stdin.off('data', handleData);
    };
  }, [options.isActive, stdin, internal_exitOnCtrlC, inputHandler]);
};
var _default$8 = useInput;

var useInput_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$8
}, '__esModule', {value: true});

var __importDefault$4 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};


const AppContext_1 = __importDefault$4(AppContext_1$2);
/**
 * `useApp` is a React hook, which exposes a method to manually exit the app (unmount).
 */
const useApp = () => react.useContext(AppContext_1.default);
var _default$7 = useApp;

var useApp_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$7
}, '__esModule', {value: true});

var __importDefault$3 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};


const StdoutContext_1 = __importDefault$3(StdoutContext_1$2);
/**
 * `useStdout` is a React hook, which exposes stdout stream.
 */
const useStdout = () => react.useContext(StdoutContext_1.default);
var _default$6 = useStdout;

var useStdout_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$6
}, '__esModule', {value: true});

var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};


const StderrContext_1 = __importDefault$2(StderrContext_1$2);
/**
 * `useStderr` is a React hook, which exposes stderr stream.
 */
const useStderr = () => react.useContext(StderrContext_1.default);
var _default$5 = useStderr;

var useStderr_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$5
}, '__esModule', {value: true});

var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};


const FocusContext_1$1 = __importDefault$1(FocusContext_1$3);
const use_stdin_1 = __importDefault$1(useStdin_1);
/**
 * Component that uses `useFocus` hook becomes "focusable" to Ink,
 * so when user presses <kbd>Tab</kbd>, Ink will switch focus to this component.
 * If there are multiple components that execute `useFocus` hook, focus will be
 * given to them in the order that these components are rendered in.
 * This hook returns an object with `isFocused` boolean property, which
 * determines if this component is focused or not.
 */
const useFocus = ({
  isActive = true,
  autoFocus = false,
  id: customId
} = {}) => {
  const {
    isRawModeSupported,
    setRawMode
  } = use_stdin_1.default();
  const {
    activeId,
    add,
    remove,
    activate,
    deactivate,
    focus
  } = react.useContext(FocusContext_1$1.default);
  const id = react.useMemo(() => {
    return customId !== null && customId !== void 0 ? customId : Math.random().toString().slice(2, 7);
  }, [customId]);
  react.useEffect(() => {
    add(id, {
      autoFocus
    });
    return () => {
      remove(id);
    };
  }, [id, autoFocus]);
  react.useEffect(() => {
    if (isActive) {
      activate(id);
    } else {
      deactivate(id);
    }
  }, [isActive, id]);
  react.useEffect(() => {
    if (!isRawModeSupported || !isActive) {
      return;
    }
    setRawMode(true);
    return () => {
      setRawMode(false);
    };
  }, [isActive]);
  return {
    isFocused: Boolean(id) && activeId === id,
    focus
  };
};
var _default$4 = useFocus;

var useFocus_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$4
}, '__esModule', {value: true});

var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};


const FocusContext_1 = __importDefault(FocusContext_1$3);
/**
 * This hook exposes methods to enable or disable focus management for all
 * components or manually switch focus to next or previous components.
 */
const useFocusManager = () => {
  const focusContext = react.useContext(FocusContext_1.default);
  return {
    enableFocus: focusContext.enableFocus,
    disableFocus: focusContext.disableFocus,
    focusNext: focusContext.focusNext,
    focusPrevious: focusContext.focusPrevious,
    focus: focusContext.focus
  };
};
var _default$3 = useFocusManager;

var useFocusManager_1 = /*#__PURE__*/Object.defineProperty({
	default: _default$3
}, '__esModule', {value: true});

/**
 * Measure the dimensions of a particular `<Box>` element.
 */
var _default$2 = node => {
  var _a, _b, _c, _d;
  return {
    width: (_b = (_a = node.yogaNode) === null || _a === void 0 ? void 0 : _a.getComputedWidth()) !== null && _b !== void 0 ? _b : 0,
    height: (_d = (_c = node.yogaNode) === null || _c === void 0 ? void 0 : _c.getComputedHeight()) !== null && _d !== void 0 ? _d : 0
  };
};

var measureElement = /*#__PURE__*/Object.defineProperty({
	default: _default$2
}, '__esModule', {value: true});

var build = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function () {
    return render_1.default;
  }
});

Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function () {
    return Box_1$2.default;
  }
});

Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return Text_1$1.default;
  }
});

Object.defineProperty(exports, "Static", {
  enumerable: true,
  get: function () {
    return Static_1.default;
  }
});

Object.defineProperty(exports, "Transform", {
  enumerable: true,
  get: function () {
    return Transform_1.default;
  }
});

Object.defineProperty(exports, "Newline", {
  enumerable: true,
  get: function () {
    return Newline_1.default;
  }
});

Object.defineProperty(exports, "Spacer", {
  enumerable: true,
  get: function () {
    return Spacer_1.default;
  }
});

Object.defineProperty(exports, "useInput", {
  enumerable: true,
  get: function () {
    return useInput_1.default;
  }
});

Object.defineProperty(exports, "useApp", {
  enumerable: true,
  get: function () {
    return useApp_1.default;
  }
});

Object.defineProperty(exports, "useStdin", {
  enumerable: true,
  get: function () {
    return useStdin_1.default;
  }
});

Object.defineProperty(exports, "useStdout", {
  enumerable: true,
  get: function () {
    return useStdout_1.default;
  }
});

Object.defineProperty(exports, "useStderr", {
  enumerable: true,
  get: function () {
    return useStderr_1.default;
  }
});

Object.defineProperty(exports, "useFocus", {
  enumerable: true,
  get: function () {
    return useFocus_1.default;
  }
});

Object.defineProperty(exports, "useFocusManager", {
  enumerable: true,
  get: function () {
    return useFocusManager_1.default;
  }
});

Object.defineProperty(exports, "measureElement", {
  enumerable: true,
  get: function () {
    return measureElement.default;
  }
});
});

let Actions;
(function (Actions) {
  Actions["LogAction"] = "LOG_ACTION";
  Actions["SetStatus"] = "SET_STATUS";
  Actions["Log"] = "LOG";
  Actions["SetLogs"] = "SET_LOGS";
  Actions["RenderPageTree"] = "RENDER_PAGE_TREE";
  Actions["StartActivity"] = "ACTIVITY_START";
  Actions["EndActivity"] = "ACTIVITY_END";
  Actions["UpdateActivity"] = "ACTIVITY_UPDATE";
  Actions["PendingActivity"] = "ACTIVITY_PENDING";
  Actions["CancelActivity"] = "ACTIVITY_CANCEL";
  Actions["ActivityErrored"] = "ACTIVITY_ERRORED";
})(Actions || (Actions = {}));
let LogLevels;
(function (LogLevels) {
  LogLevels["Debug"] = "DEBUG";
  LogLevels["Success"] = "SUCCESS";
  LogLevels["Info"] = "INFO";
  LogLevels["Warning"] = "WARNING";
  LogLevels["Log"] = "LOG";
  LogLevels["Error"] = "ERROR";
})(LogLevels || (LogLevels = {}));
let ActivityLogLevels;
(function (ActivityLogLevels) {
  ActivityLogLevels["Success"] = "ACTIVITY_SUCCESS";
  ActivityLogLevels["Failed"] = "ACTIVITY_FAILED";
  ActivityLogLevels["Interrupted"] = "ACTIVITY_INTERRUPTED";
})(ActivityLogLevels || (ActivityLogLevels = {}));
let ActivityStatuses;
(function (ActivityStatuses) {
  ActivityStatuses["InProgress"] = "IN_PROGRESS";
  ActivityStatuses["NotStarted"] = "NOT_STARTED";
  ActivityStatuses["Interrupted"] = "INTERRUPTED";
  ActivityStatuses["Failed"] = "FAILED";
  ActivityStatuses["Success"] = "SUCCESS";
  ActivityStatuses["Cancelled"] = "CANCELLED";
})(ActivityStatuses || (ActivityStatuses = {}));
let ActivityTypes;
(function (ActivityTypes) {
  ActivityTypes["Spinner"] = "spinner";
  ActivityTypes["Hidden"] = "hidden";
  ActivityTypes["Progress"] = "progress";
  ActivityTypes["Pending"] = "pending";
})(ActivityTypes || (ActivityTypes = {}));

const StoreStateContext = /*#__PURE__*/react.createContext({
  ...redux.getStore().getState(),
  messages: []
});
const StoreStateProvider = ({
  children
}) => {
  const [state, setState] = react.useState({
    ...redux.getStore().getState(),
    messages: []
  });
  react.useLayoutEffect(() => redux.onLogAction(action => {
    if (action.type === Actions.Log) {
      setState(state => {
        return {
          ...state,
          messages: [...state.messages, action.payload]
        };
      });
    } else {
      setState(state => {
        return {
          ...redux.getStore().getState(),
          messages: state.messages
        };
      });
    }
  }), []);
  return /*#__PURE__*/react.createElement(StoreStateContext.Provider, {
    value: state
  }, children);
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// Some CI pipelines incorrectly report process.stdout.isTTY status,
// which causes unwanted lines in the output. An additional check for isCI helps.
// @see https://github.com/prettier/prettier/blob/36aeb4ce4f620023c8174e826d7208c0c64f1a0b/src/utils/is-tty.js
const isTTY = () => process.stdout.isTTY && !gatsbyCoreUtils.isCI();

var dots = {
  interval: 80,
  frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
};
var dots2 = {
  interval: 80,
  frames: ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"]
};
var dots3 = {
  interval: 80,
  frames: ["⠋", "⠙", "⠚", "⠞", "⠖", "⠦", "⠴", "⠲", "⠳", "⠓"]
};
var dots4 = {
  interval: 80,
  frames: ["⠄", "⠆", "⠇", "⠋", "⠙", "⠸", "⠰", "⠠", "⠰", "⠸", "⠙", "⠋", "⠇", "⠆"]
};
var dots5 = {
  interval: 80,
  frames: ["⠋", "⠙", "⠚", "⠒", "⠂", "⠂", "⠒", "⠲", "⠴", "⠦", "⠖", "⠒", "⠐", "⠐", "⠒", "⠓", "⠋"]
};
var dots6 = {
  interval: 80,
  frames: ["⠁", "⠉", "⠙", "⠚", "⠒", "⠂", "⠂", "⠒", "⠲", "⠴", "⠤", "⠄", "⠄", "⠤", "⠴", "⠲", "⠒", "⠂", "⠂", "⠒", "⠚", "⠙", "⠉", "⠁"]
};
var dots7 = {
  interval: 80,
  frames: ["⠈", "⠉", "⠋", "⠓", "⠒", "⠐", "⠐", "⠒", "⠖", "⠦", "⠤", "⠠", "⠠", "⠤", "⠦", "⠖", "⠒", "⠐", "⠐", "⠒", "⠓", "⠋", "⠉", "⠈"]
};
var dots8 = {
  interval: 80,
  frames: ["⠁", "⠁", "⠉", "⠙", "⠚", "⠒", "⠂", "⠂", "⠒", "⠲", "⠴", "⠤", "⠄", "⠄", "⠤", "⠠", "⠠", "⠤", "⠦", "⠖", "⠒", "⠐", "⠐", "⠒", "⠓", "⠋", "⠉", "⠈", "⠈"]
};
var dots9 = {
  interval: 80,
  frames: ["⢹", "⢺", "⢼", "⣸", "⣇", "⡧", "⡗", "⡏"]
};
var dots10 = {
  interval: 80,
  frames: ["⢄", "⢂", "⢁", "⡁", "⡈", "⡐", "⡠"]
};
var dots11 = {
  interval: 100,
  frames: ["⠁", "⠂", "⠄", "⡀", "⢀", "⠠", "⠐", "⠈"]
};
var dots12 = {
  interval: 80,
  frames: ["⢀⠀", "⡀⠀", "⠄⠀", "⢂⠀", "⡂⠀", "⠅⠀", "⢃⠀", "⡃⠀", "⠍⠀", "⢋⠀", "⡋⠀", "⠍⠁", "⢋⠁", "⡋⠁", "⠍⠉", "⠋⠉", "⠋⠉", "⠉⠙", "⠉⠙", "⠉⠩", "⠈⢙", "⠈⡙", "⢈⠩", "⡀⢙", "⠄⡙", "⢂⠩", "⡂⢘", "⠅⡘", "⢃⠨", "⡃⢐", "⠍⡐", "⢋⠠", "⡋⢀", "⠍⡁", "⢋⠁", "⡋⠁", "⠍⠉", "⠋⠉", "⠋⠉", "⠉⠙", "⠉⠙", "⠉⠩", "⠈⢙", "⠈⡙", "⠈⠩", "⠀⢙", "⠀⡙", "⠀⠩", "⠀⢘", "⠀⡘", "⠀⠨", "⠀⢐", "⠀⡐", "⠀⠠", "⠀⢀", "⠀⡀"]
};
var dots8Bit = {
  interval: 80,
  frames: ["⠀", "⠁", "⠂", "⠃", "⠄", "⠅", "⠆", "⠇", "⡀", "⡁", "⡂", "⡃", "⡄", "⡅", "⡆", "⡇", "⠈", "⠉", "⠊", "⠋", "⠌", "⠍", "⠎", "⠏", "⡈", "⡉", "⡊", "⡋", "⡌", "⡍", "⡎", "⡏", "⠐", "⠑", "⠒", "⠓", "⠔", "⠕", "⠖", "⠗", "⡐", "⡑", "⡒", "⡓", "⡔", "⡕", "⡖", "⡗", "⠘", "⠙", "⠚", "⠛", "⠜", "⠝", "⠞", "⠟", "⡘", "⡙", "⡚", "⡛", "⡜", "⡝", "⡞", "⡟", "⠠", "⠡", "⠢", "⠣", "⠤", "⠥", "⠦", "⠧", "⡠", "⡡", "⡢", "⡣", "⡤", "⡥", "⡦", "⡧", "⠨", "⠩", "⠪", "⠫", "⠬", "⠭", "⠮", "⠯", "⡨", "⡩", "⡪", "⡫", "⡬", "⡭", "⡮", "⡯", "⠰", "⠱", "⠲", "⠳", "⠴", "⠵", "⠶", "⠷", "⡰", "⡱", "⡲", "⡳", "⡴", "⡵", "⡶", "⡷", "⠸", "⠹", "⠺", "⠻", "⠼", "⠽", "⠾", "⠿", "⡸", "⡹", "⡺", "⡻", "⡼", "⡽", "⡾", "⡿", "⢀", "⢁", "⢂", "⢃", "⢄", "⢅", "⢆", "⢇", "⣀", "⣁", "⣂", "⣃", "⣄", "⣅", "⣆", "⣇", "⢈", "⢉", "⢊", "⢋", "⢌", "⢍", "⢎", "⢏", "⣈", "⣉", "⣊", "⣋", "⣌", "⣍", "⣎", "⣏", "⢐", "⢑", "⢒", "⢓", "⢔", "⢕", "⢖", "⢗", "⣐", "⣑", "⣒", "⣓", "⣔", "⣕", "⣖", "⣗", "⢘", "⢙", "⢚", "⢛", "⢜", "⢝", "⢞", "⢟", "⣘", "⣙", "⣚", "⣛", "⣜", "⣝", "⣞", "⣟", "⢠", "⢡", "⢢", "⢣", "⢤", "⢥", "⢦", "⢧", "⣠", "⣡", "⣢", "⣣", "⣤", "⣥", "⣦", "⣧", "⢨", "⢩", "⢪", "⢫", "⢬", "⢭", "⢮", "⢯", "⣨", "⣩", "⣪", "⣫", "⣬", "⣭", "⣮", "⣯", "⢰", "⢱", "⢲", "⢳", "⢴", "⢵", "⢶", "⢷", "⣰", "⣱", "⣲", "⣳", "⣴", "⣵", "⣶", "⣷", "⢸", "⢹", "⢺", "⢻", "⢼", "⢽", "⢾", "⢿", "⣸", "⣹", "⣺", "⣻", "⣼", "⣽", "⣾", "⣿"]
};
var line = {
  interval: 130,
  frames: ["-", "\\", "|", "/"]
};
var line2 = {
  interval: 100,
  frames: ["⠂", "-", "–", "—", "–", "-"]
};
var pipe = {
  interval: 100,
  frames: ["┤", "┘", "┴", "└", "├", "┌", "┬", "┐"]
};
var simpleDots = {
  interval: 400,
  frames: [".  ", ".. ", "...", "   "]
};
var simpleDotsScrolling = {
  interval: 200,
  frames: [".  ", ".. ", "...", " ..", "  .", "   "]
};
var star = {
  interval: 70,
  frames: ["✶", "✸", "✹", "✺", "✹", "✷"]
};
var star2 = {
  interval: 80,
  frames: ["+", "x", "*"]
};
var flip = {
  interval: 70,
  frames: ["_", "_", "_", "-", "`", "`", "'", "´", "-", "_", "_", "_"]
};
var hamburger = {
  interval: 100,
  frames: ["☱", "☲", "☴"]
};
var growVertical = {
  interval: 120,
  frames: ["▁", "▃", "▄", "▅", "▆", "▇", "▆", "▅", "▄", "▃"]
};
var growHorizontal = {
  interval: 120,
  frames: ["▏", "▎", "▍", "▌", "▋", "▊", "▉", "▊", "▋", "▌", "▍", "▎"]
};
var balloon = {
  interval: 140,
  frames: [" ", ".", "o", "O", "@", "*", " "]
};
var balloon2 = {
  interval: 120,
  frames: [".", "o", "O", "°", "O", "o", "."]
};
var noise = {
  interval: 100,
  frames: ["▓", "▒", "░"]
};
var bounce = {
  interval: 120,
  frames: ["⠁", "⠂", "⠄", "⠂"]
};
var boxBounce = {
  interval: 120,
  frames: ["▖", "▘", "▝", "▗"]
};
var boxBounce2 = {
  interval: 100,
  frames: ["▌", "▀", "▐", "▄"]
};
var triangle = {
  interval: 50,
  frames: ["◢", "◣", "◤", "◥"]
};
var arc = {
  interval: 100,
  frames: ["◜", "◠", "◝", "◞", "◡", "◟"]
};
var circle = {
  interval: 120,
  frames: ["◡", "⊙", "◠"]
};
var squareCorners = {
  interval: 180,
  frames: ["◰", "◳", "◲", "◱"]
};
var circleQuarters = {
  interval: 120,
  frames: ["◴", "◷", "◶", "◵"]
};
var circleHalves = {
  interval: 50,
  frames: ["◐", "◓", "◑", "◒"]
};
var squish = {
  interval: 100,
  frames: ["╫", "╪"]
};
var toggle = {
  interval: 250,
  frames: ["⊶", "⊷"]
};
var toggle2 = {
  interval: 80,
  frames: ["▫", "▪"]
};
var toggle3 = {
  interval: 120,
  frames: ["□", "■"]
};
var toggle4 = {
  interval: 100,
  frames: ["■", "□", "▪", "▫"]
};
var toggle5 = {
  interval: 100,
  frames: ["▮", "▯"]
};
var toggle6 = {
  interval: 300,
  frames: ["ဝ", "၀"]
};
var toggle7 = {
  interval: 80,
  frames: ["⦾", "⦿"]
};
var toggle8 = {
  interval: 100,
  frames: ["◍", "◌"]
};
var toggle9 = {
  interval: 100,
  frames: ["◉", "◎"]
};
var toggle10 = {
  interval: 100,
  frames: ["㊂", "㊀", "㊁"]
};
var toggle11 = {
  interval: 50,
  frames: ["⧇", "⧆"]
};
var toggle12 = {
  interval: 120,
  frames: ["☗", "☖"]
};
var toggle13 = {
  interval: 80,
  frames: ["=", "*", "-"]
};
var arrow = {
  interval: 100,
  frames: ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"]
};
var arrow2 = {
  interval: 80,
  frames: ["⬆️ ", "↗️ ", "➡️ ", "↘️ ", "⬇️ ", "↙️ ", "⬅️ ", "↖️ "]
};
var arrow3 = {
  interval: 120,
  frames: ["▹▹▹▹▹", "▸▹▹▹▹", "▹▸▹▹▹", "▹▹▸▹▹", "▹▹▹▸▹", "▹▹▹▹▸"]
};
var bouncingBar = {
  interval: 80,
  frames: ["[    ]", "[=   ]", "[==  ]", "[=== ]", "[ ===]", "[  ==]", "[   =]", "[    ]", "[   =]", "[  ==]", "[ ===]", "[====]", "[=== ]", "[==  ]", "[=   ]"]
};
var bouncingBall = {
  interval: 80,
  frames: ["( ●    )", "(  ●   )", "(   ●  )", "(    ● )", "(     ●)", "(    ● )", "(   ●  )", "(  ●   )", "( ●    )", "(●     )"]
};
var smiley = {
  interval: 200,
  frames: ["😄 ", "😝 "]
};
var monkey = {
  interval: 300,
  frames: ["🙈 ", "🙈 ", "🙉 ", "🙊 "]
};
var hearts = {
  interval: 100,
  frames: ["💛 ", "💙 ", "💜 ", "💚 ", "❤️ "]
};
var clock = {
  interval: 100,
  frames: ["🕛 ", "🕐 ", "🕑 ", "🕒 ", "🕓 ", "🕔 ", "🕕 ", "🕖 ", "🕗 ", "🕘 ", "🕙 ", "🕚 "]
};
var earth = {
  interval: 180,
  frames: ["🌍 ", "🌎 ", "🌏 "]
};
var material = {
  interval: 17,
  frames: ["█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁", "██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁", "███▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁", "████▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁", "██████▁▁▁▁▁▁▁▁▁▁▁▁▁▁", "██████▁▁▁▁▁▁▁▁▁▁▁▁▁▁", "███████▁▁▁▁▁▁▁▁▁▁▁▁▁", "████████▁▁▁▁▁▁▁▁▁▁▁▁", "█████████▁▁▁▁▁▁▁▁▁▁▁", "█████████▁▁▁▁▁▁▁▁▁▁▁", "██████████▁▁▁▁▁▁▁▁▁▁", "███████████▁▁▁▁▁▁▁▁▁", "█████████████▁▁▁▁▁▁▁", "██████████████▁▁▁▁▁▁", "██████████████▁▁▁▁▁▁", "▁██████████████▁▁▁▁▁", "▁██████████████▁▁▁▁▁", "▁██████████████▁▁▁▁▁", "▁▁██████████████▁▁▁▁", "▁▁▁██████████████▁▁▁", "▁▁▁▁█████████████▁▁▁", "▁▁▁▁██████████████▁▁", "▁▁▁▁██████████████▁▁", "▁▁▁▁▁██████████████▁", "▁▁▁▁▁██████████████▁", "▁▁▁▁▁██████████████▁", "▁▁▁▁▁▁██████████████", "▁▁▁▁▁▁██████████████", "▁▁▁▁▁▁▁█████████████", "▁▁▁▁▁▁▁█████████████", "▁▁▁▁▁▁▁▁████████████", "▁▁▁▁▁▁▁▁████████████", "▁▁▁▁▁▁▁▁▁███████████", "▁▁▁▁▁▁▁▁▁███████████", "▁▁▁▁▁▁▁▁▁▁██████████", "▁▁▁▁▁▁▁▁▁▁██████████", "▁▁▁▁▁▁▁▁▁▁▁▁████████", "▁▁▁▁▁▁▁▁▁▁▁▁▁███████", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁██████", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█████", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█████", "█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████", "██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███", "██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███", "███▁▁▁▁▁▁▁▁▁▁▁▁▁▁███", "████▁▁▁▁▁▁▁▁▁▁▁▁▁▁██", "█████▁▁▁▁▁▁▁▁▁▁▁▁▁▁█", "█████▁▁▁▁▁▁▁▁▁▁▁▁▁▁█", "██████▁▁▁▁▁▁▁▁▁▁▁▁▁█", "████████▁▁▁▁▁▁▁▁▁▁▁▁", "█████████▁▁▁▁▁▁▁▁▁▁▁", "█████████▁▁▁▁▁▁▁▁▁▁▁", "█████████▁▁▁▁▁▁▁▁▁▁▁", "█████████▁▁▁▁▁▁▁▁▁▁▁", "███████████▁▁▁▁▁▁▁▁▁", "████████████▁▁▁▁▁▁▁▁", "████████████▁▁▁▁▁▁▁▁", "██████████████▁▁▁▁▁▁", "██████████████▁▁▁▁▁▁", "▁██████████████▁▁▁▁▁", "▁██████████████▁▁▁▁▁", "▁▁▁█████████████▁▁▁▁", "▁▁▁▁▁████████████▁▁▁", "▁▁▁▁▁████████████▁▁▁", "▁▁▁▁▁▁███████████▁▁▁", "▁▁▁▁▁▁▁▁█████████▁▁▁", "▁▁▁▁▁▁▁▁█████████▁▁▁", "▁▁▁▁▁▁▁▁▁█████████▁▁", "▁▁▁▁▁▁▁▁▁█████████▁▁", "▁▁▁▁▁▁▁▁▁▁█████████▁", "▁▁▁▁▁▁▁▁▁▁▁████████▁", "▁▁▁▁▁▁▁▁▁▁▁████████▁", "▁▁▁▁▁▁▁▁▁▁▁▁███████▁", "▁▁▁▁▁▁▁▁▁▁▁▁███████▁", "▁▁▁▁▁▁▁▁▁▁▁▁▁███████", "▁▁▁▁▁▁▁▁▁▁▁▁▁███████", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█████", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁", "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁"]
};
var moon = {
  interval: 80,
  frames: ["🌑 ", "🌒 ", "🌓 ", "🌔 ", "🌕 ", "🌖 ", "🌗 ", "🌘 "]
};
var runner = {
  interval: 140,
  frames: ["🚶 ", "🏃 "]
};
var pong = {
  interval: 80,
  frames: ["▐⠂       ▌", "▐⠈       ▌", "▐ ⠂      ▌", "▐ ⠠      ▌", "▐  ⡀     ▌", "▐  ⠠     ▌", "▐   ⠂    ▌", "▐   ⠈    ▌", "▐    ⠂   ▌", "▐    ⠠   ▌", "▐     ⡀  ▌", "▐     ⠠  ▌", "▐      ⠂ ▌", "▐      ⠈ ▌", "▐       ⠂▌", "▐       ⠠▌", "▐       ⡀▌", "▐      ⠠ ▌", "▐      ⠂ ▌", "▐     ⠈  ▌", "▐     ⠂  ▌", "▐    ⠠   ▌", "▐    ⡀   ▌", "▐   ⠠    ▌", "▐   ⠂    ▌", "▐  ⠈     ▌", "▐  ⠂     ▌", "▐ ⠠      ▌", "▐ ⡀      ▌", "▐⠠       ▌"]
};
var shark = {
  interval: 120,
  frames: ["▐|\\____________▌", "▐_|\\___________▌", "▐__|\\__________▌", "▐___|\\_________▌", "▐____|\\________▌", "▐_____|\\_______▌", "▐______|\\______▌", "▐_______|\\_____▌", "▐________|\\____▌", "▐_________|\\___▌", "▐__________|\\__▌", "▐___________|\\_▌", "▐____________|\\▌", "▐____________/|▌", "▐___________/|_▌", "▐__________/|__▌", "▐_________/|___▌", "▐________/|____▌", "▐_______/|_____▌", "▐______/|______▌", "▐_____/|_______▌", "▐____/|________▌", "▐___/|_________▌", "▐__/|__________▌", "▐_/|___________▌", "▐/|____________▌"]
};
var dqpb = {
  interval: 100,
  frames: ["d", "q", "p", "b"]
};
var weather = {
  interval: 100,
  frames: ["☀️ ", "☀️ ", "☀️ ", "🌤 ", "⛅️ ", "🌥 ", "☁️ ", "🌧 ", "🌨 ", "🌧 ", "🌨 ", "🌧 ", "🌨 ", "⛈ ", "🌨 ", "🌧 ", "🌨 ", "☁️ ", "🌥 ", "⛅️ ", "🌤 ", "☀️ ", "☀️ "]
};
var christmas = {
  interval: 400,
  frames: ["🌲", "🎄"]
};
var grenade = {
  interval: 80,
  frames: ["،  ", "′  ", " ´ ", " ‾ ", "  ⸌", "  ⸊", "  |", "  ⁎", "  ⁕", " ෴ ", "  ⁓", "   ", "   ", "   "]
};
var point = {
  interval: 125,
  frames: ["∙∙∙", "●∙∙", "∙●∙", "∙∙●", "∙∙∙"]
};
var layer = {
  interval: 150,
  frames: ["-", "=", "≡"]
};
var betaWave = {
  interval: 80,
  frames: ["ρββββββ", "βρβββββ", "ββρββββ", "βββρβββ", "ββββρββ", "βββββρβ", "ββββββρ"]
};
var fingerDance = {
  interval: 160,
  frames: ["🤘 ", "🤟 ", "🖖 ", "✋ ", "🤚 ", "👆 "]
};
var fistBump = {
  interval: 80,
  frames: ["🤜　　　　🤛 ", "🤜　　　　🤛 ", "🤜　　　　🤛 ", "　🤜　　🤛　 ", "　　🤜🤛　　 ", "　🤜✨🤛　　 ", "🤜　✨　🤛　 "]
};
var soccerHeader = {
  interval: 80,
  frames: [" 🧑⚽️       🧑 ", "🧑  ⚽️      🧑 ", "🧑   ⚽️     🧑 ", "🧑    ⚽️    🧑 ", "🧑     ⚽️   🧑 ", "🧑      ⚽️  🧑 ", "🧑       ⚽️🧑  ", "🧑      ⚽️  🧑 ", "🧑     ⚽️   🧑 ", "🧑    ⚽️    🧑 ", "🧑   ⚽️     🧑 ", "🧑  ⚽️      🧑 "]
};
var mindblown = {
  interval: 160,
  frames: ["😐 ", "😐 ", "😮 ", "😮 ", "😦 ", "😦 ", "😧 ", "😧 ", "🤯 ", "💥 ", "✨ ", "　 ", "　 ", "　 "]
};
var speaker = {
  interval: 160,
  frames: ["🔈 ", "🔉 ", "🔊 ", "🔉 "]
};
var orangePulse = {
  interval: 100,
  frames: ["🔸 ", "🔶 ", "🟠 ", "🟠 ", "🔶 "]
};
var bluePulse = {
  interval: 100,
  frames: ["🔹 ", "🔷 ", "🔵 ", "🔵 ", "🔷 "]
};
var orangeBluePulse = {
  interval: 100,
  frames: ["🔸 ", "🔶 ", "🟠 ", "🟠 ", "🔶 ", "🔹 ", "🔷 ", "🔵 ", "🔵 ", "🔷 "]
};
var timeTravel = {
  interval: 100,
  frames: ["🕛 ", "🕚 ", "🕙 ", "🕘 ", "🕗 ", "🕖 ", "🕕 ", "🕔 ", "🕓 ", "🕒 ", "🕑 ", "🕐 "]
};
var aesthetic = {
  interval: 80,
  frames: ["▰▱▱▱▱▱▱", "▰▰▱▱▱▱▱", "▰▰▰▱▱▱▱", "▰▰▰▰▱▱▱", "▰▰▰▰▰▱▱", "▰▰▰▰▰▰▱", "▰▰▰▰▰▰▰", "▰▱▱▱▱▱▱"]
};
var require$$0 = {
  dots: dots,
  dots2: dots2,
  dots3: dots3,
  dots4: dots4,
  dots5: dots5,
  dots6: dots6,
  dots7: dots7,
  dots8: dots8,
  dots9: dots9,
  dots10: dots10,
  dots11: dots11,
  dots12: dots12,
  dots8Bit: dots8Bit,
  line: line,
  line2: line2,
  pipe: pipe,
  simpleDots: simpleDots,
  simpleDotsScrolling: simpleDotsScrolling,
  star: star,
  star2: star2,
  flip: flip,
  hamburger: hamburger,
  growVertical: growVertical,
  growHorizontal: growHorizontal,
  balloon: balloon,
  balloon2: balloon2,
  noise: noise,
  bounce: bounce,
  boxBounce: boxBounce,
  boxBounce2: boxBounce2,
  triangle: triangle,
  arc: arc,
  circle: circle,
  squareCorners: squareCorners,
  circleQuarters: circleQuarters,
  circleHalves: circleHalves,
  squish: squish,
  toggle: toggle,
  toggle2: toggle2,
  toggle3: toggle3,
  toggle4: toggle4,
  toggle5: toggle5,
  toggle6: toggle6,
  toggle7: toggle7,
  toggle8: toggle8,
  toggle9: toggle9,
  toggle10: toggle10,
  toggle11: toggle11,
  toggle12: toggle12,
  toggle13: toggle13,
  arrow: arrow,
  arrow2: arrow2,
  arrow3: arrow3,
  bouncingBar: bouncingBar,
  bouncingBall: bouncingBall,
  smiley: smiley,
  monkey: monkey,
  hearts: hearts,
  clock: clock,
  earth: earth,
  material: material,
  moon: moon,
  runner: runner,
  pong: pong,
  shark: shark,
  dqpb: dqpb,
  weather: weather,
  christmas: christmas,
  grenade: grenade,
  point: point,
  layer: layer,
  betaWave: betaWave,
  fingerDance: fingerDance,
  fistBump: fistBump,
  soccerHeader: soccerHeader,
  mindblown: mindblown,
  speaker: speaker,
  orangePulse: orangePulse,
  bluePulse: bluePulse,
  orangeBluePulse: orangeBluePulse,
  timeTravel: timeTravel,
  aesthetic: aesthetic
};

const spinners = Object.assign({}, require$$0);
const spinnersList = Object.keys(spinners);
Object.defineProperty(spinners, 'random', {
  get() {
    const randomIndex = Math.floor(Math.random() * spinnersList.length);
    const spinnerName = spinnersList[randomIndex];
    return spinners[spinnerName];
  }
});
var cliSpinners = spinners;
// TODO: Remove this for the next major release
var _default$1 = spinners;
cliSpinners.default = _default$1;

const react_1 = react;


/**
 * Spinner.
 */
const Spinner$1 = ({
  type = 'dots'
}) => {
  const [frame, setFrame] = react_1.useState(0);
  const spinner = cliSpinners[type];
  react_1.useEffect(() => {
    const timer = setInterval(() => {
      setFrame(previousFrame => {
        const isLastFrame = previousFrame === spinner.frames.length - 1;
        return isLastFrame ? 0 : previousFrame + 1;
      });
    }, spinner.interval);
    return () => {
      clearInterval(timer);
    };
  }, [spinner]);
  return react.createElement(build.Text, null, spinner.frames[frame]);
};
var _default = Spinner$1;

function Spinner({
  text,
  statusText
}) {
  let label = text;
  if (statusText) {
    label += ` — ${statusText}`;
  }
  return /*#__PURE__*/react.createElement(build.Box, null, /*#__PURE__*/react.createElement(build.Text, null, /*#__PURE__*/react.createElement(_default, {
    type: "dots"
  }), " ", label));
}

function calcElapsedTime(startTime) {
  const elapsed = process.hrtime(startTime);
  return convertHrtime__default["default"](elapsed)[`seconds`].toFixed(3);
}

const maxWidth = 30;
const minWidth = 10;
const getLength = prop => String(prop).length;
function ProgressBar({
  message,
  current,
  total,
  startTime
}) {
  const percentage = total ? Math.round(current / total * 100) : 0;
  const terminalWidth = process.stdout.columns || 80;
  const availableWidth = terminalWidth - getLength(message) - getLength(current) - getLength(total) - getLength(percentage) - 11; // margins + extra characters

  const progressBarWidth = Math.max(minWidth, Math.min(maxWidth, availableWidth));
  return /*#__PURE__*/react.createElement(build.Box, {
    flexDirection: "row"
  }, /*#__PURE__*/react.createElement(build.Box, {
    marginRight: 3,
    width: progressBarWidth
  }, /*#__PURE__*/react.createElement(build.Text, null, "["), /*#__PURE__*/react.createElement(build.Box, {
    width: progressBarWidth - 2
  }, /*#__PURE__*/react.createElement(build.Text, null, `=`.repeat((progressBarWidth - 2) * percentage / 100))), /*#__PURE__*/react.createElement(build.Text, null, "]")), /*#__PURE__*/react.createElement(build.Box, {
    marginRight: 1
  }, /*#__PURE__*/react.createElement(build.Text, null, calcElapsedTime(startTime), " s")), /*#__PURE__*/react.createElement(build.Box, {
    marginRight: 1
  }, /*#__PURE__*/react.createElement(build.Text, null, current, "/", total)), /*#__PURE__*/react.createElement(build.Box, {
    marginRight: 1
  }, /*#__PURE__*/react.createElement(build.Text, null, `` + percentage, "%")), /*#__PURE__*/react.createElement(build.Box, null, /*#__PURE__*/react.createElement(build.Text, {
    wrap: "truncate"
  }, message)));
}

const createLabel = (text, color) => (...props) => /*#__PURE__*/react.createElement(build.Text, _extends({
  color: color
}, props), text);

const getLabel$1 = level => {
  switch (level) {
    case ActivityLogLevels.Success:
    case LogLevels.Success:
      return createLabel(`success`, `green`);
    case LogLevels.Warning:
      return createLabel(`warn`, `yellow`);
    case LogLevels.Debug:
      return createLabel(`verbose`, `gray`);
    case LogLevels.Info:
      return createLabel(`info`, `blue`);
    case ActivityLogLevels.Failed:
      return createLabel(`failed`, `red`);
    case ActivityLogLevels.Interrupted:
      return createLabel(`not finished`, `gray`);
    default:
      return createLabel(level, `blue`);
  }
};
const Message = /*#__PURE__*/react.memo(({
  level,
  text,
  duration,
  statusText
}) => {
  let message = text;
  if (duration) {
    message += ` - ${duration.toFixed(3)}s`;
  }
  if (statusText) {
    message += ` - ${statusText}`;
  }
  if (!level || level === `LOG`) {
    return /*#__PURE__*/react.createElement(build.Text, null, message);
  }
  const TextLabel = getLabel$1(level);
  return /*#__PURE__*/react.createElement(build.Box, {
    flexDirection: "row"
  }, /*#__PURE__*/react.createElement(build.Text, {
    wrap: "wrap"
  }, /*#__PURE__*/react.createElement(TextLabel, null), ` `, message));
});

const File = ({
  filePath,
  location
}) => {
  const lineNumber = location?.start.line;
  let locString = ``;
  if (typeof lineNumber !== `undefined`) {
    locString += `:${lineNumber}`;
    const columnNumber = location?.start.column;
    if (typeof columnNumber !== `undefined`) {
      locString += `:${columnNumber}`;
    }
  }
  return /*#__PURE__*/react.createElement(build.Text, {
    color: "blue"
  }, path__default["default"].relative(process.cwd(), filePath), locString);
};
const DocsLink = ({
  docsUrl
}) => {
  // TODO: when there's no specific docsUrl, add helpful message describing how
  // to submit an issue
  if (docsUrl === `https://gatsby.dev/issue-how-to`) return null;
  return /*#__PURE__*/react.createElement(build.Box, {
    marginTop: 1
  }, /*#__PURE__*/react.createElement(build.Text, null, "See our docs page for more info on this error: ", docsUrl));
};
const Error$1 = /*#__PURE__*/react.memo(({
  details
}) =>
/*#__PURE__*/
// const stackLength = get(details, `stack.length`, 0
react.createElement(build.Box, {
  marginY: 1,
  flexDirection: "column"
}, /*#__PURE__*/react.createElement(build.Box, {
  flexDirection: "column"
}, /*#__PURE__*/react.createElement(build.Box, {
  flexDirection: "column"
}, /*#__PURE__*/react.createElement(build.Box, null, /*#__PURE__*/react.createElement(build.Box, {
  marginRight: 1
}, /*#__PURE__*/react.createElement(build.Text, {
  color: "black",
  backgroundColor: "red"
}, ` ${details.level} `, details.code ? `#${details.code} ` : ``), /*#__PURE__*/react.createElement(build.Text, {
  color: "red"
}, details.type ? ` ` + details.type : ``))), /*#__PURE__*/react.createElement(build.Box, {
  marginTop: 1
}, /*#__PURE__*/react.createElement(build.Text, null, details.text)), details.filePath && /*#__PURE__*/react.createElement(build.Box, {
  marginTop: 1
}, /*#__PURE__*/react.createElement(build.Text, null, "File:", ` `), /*#__PURE__*/react.createElement(File, {
  filePath: details.filePath,
  location: details.location
}))), /*#__PURE__*/react.createElement(DocsLink, {
  docsUrl: details.docsUrl
}))));

const getLabel = level => {
  switch (level) {
    case ActivityStatuses.InProgress:
      return createLabel(`In Progress`, `white`);
    case ActivityStatuses.Interrupted:
      return createLabel(`Interrupted`, `gray`);
    case ActivityStatuses.Failed:
      return createLabel(`Failed`, `red`);
    case ActivityStatuses.Success:
      return createLabel(`Success`, `green`);
    default:
      return createLabel(level, `white`);
  }
};

// Track the width and height of the terminal. Responsive app design baby!
const useTerminalResize = () => {
  const {
    stdout
  } = build.useStdout();

  // stdout type is nullable, so we need to handle case where it is undefined for type checking.
  // In practice this shouldn't happen ever, because AFAIK type is only nullable
  // because Ink's StdoutContext is initiated with `undefined`:
  // https://github.com/vadimdemedes/ink/blob/83894963727cf40ccac2256ec346e5ff3381c918/src/components/StdoutContext.ts#L20-L23
  // but ContextProvider requires stdout to be set:
  // https://github.com/vadimdemedes/ink/blob/83894963727cf40ccac2256ec346e5ff3381c918/src/components/App.tsx#L18
  // https://github.com/vadimdemedes/ink/blob/83894963727cf40ccac2256ec346e5ff3381c918/src/components/App.tsx#L79-L84
  if (!stdout) {
    return [0];
  }
  const [sizes, setSizes] = react.useState([stdout.columns, stdout.rows]);
  react.useEffect(() => {
    const resizeListener = () => {
      setSizes([stdout.columns, stdout.rows]);
    };
    stdout.on(`resize`, resizeListener);
    return () => {
      stdout.off(`resize`, resizeListener);
    };
  }, [stdout]);
  return sizes;
};
const Develop = ({
  pagesCount,
  appName,
  status
}) => {
  const [width] = useTerminalResize();
  const StatusLabel = getLabel(status);
  return /*#__PURE__*/react.createElement(build.Box, {
    flexDirection: "column",
    marginTop: 2
  }, /*#__PURE__*/react.createElement(build.Box, null, /*#__PURE__*/react.createElement(build.Text, {
    wrap: "truncate"
  }, `—`.repeat(width))), /*#__PURE__*/react.createElement(build.Box, {
    height: 1,
    flexDirection: "row"
  }, /*#__PURE__*/react.createElement(StatusLabel, null), /*#__PURE__*/react.createElement(build.Box, {
    flexGrow: 1
  }), /*#__PURE__*/react.createElement(build.Text, null, appName), /*#__PURE__*/react.createElement(build.Box, {
    flexGrow: 1
  }), /*#__PURE__*/react.createElement(build.Text, null, pagesCount, " pages")));
};
const ConnectedDevelop = () => {
  const state = react.useContext(StoreStateContext);
  return /*#__PURE__*/react.createElement(Develop
  // @ts-ignore - program exists on state but we should refactor this
  , {
    pagesCount: state.pages?.size || 0
    // @ts-ignore - program exists on state but we should refactor this
    ,
    appName: state.program?.sitePackageJson.name || ``,
    status: state.logs?.status || ``
  });
};

function generatePageTree(collections, LIMIT = 8) {
  const SSGIterator = collections.SSG.values();
  const DSGIterator = collections.DSG.values();
  const SSRIterator = collections.SSR.values();
  const FNIterator = collections.FN.values();
  const SSGPages = generateLineUntilLimit(SSGIterator, ` `, LIMIT / 4, collections.SSG.size);
  const DSGPages = generateLineUntilLimit(DSGIterator, `D`, LIMIT / 4, collections.DSG.size);
  const SSRPages = generateLineUntilLimit(SSRIterator, `∞`, LIMIT / 4, collections.SSR.size);
  const FNPages = generateLineUntilLimit(FNIterator, `λ`, LIMIT / 4, collections.FN.size);
  return SSGPages.concat(DSGPages).concat(SSRPages).concat(FNPages);
}
function generateSliceTree(slices, LIMIT = 8) {
  const slicesIterator = slices.values();
  return generateLineUntilLimit(slicesIterator, ` `, LIMIT / 4, slices.size);
}
function generateLineUntilLimit(iterator, symbol, limit, max) {
  const output = [];
  for (let item = iterator.next(); !item.done && output.length < limit; item = iterator.next()) {
    output.push({
      text: item.value,
      symbol
    });
  }
  if (output.length < max) {
    output[output.length - 1].text = `...${max - output.length + 1} more pages available`;
  }
  return output;
}

const Description = props => /*#__PURE__*/react.createElement(build.Box, null, /*#__PURE__*/react.createElement(build.Box, _extends({}, props, {
  flexDirection: "column",
  borderStyle: "round",
  padding: 1,
  marginLeft: 2,
  marginRight: 2
}), /*#__PURE__*/react.createElement(build.Box, {
  paddingLeft: 2
}, /*#__PURE__*/react.createElement(build.Text, null, "(SSG) Generated at build time")), /*#__PURE__*/react.createElement(build.Text, null, "D (DSG) Deferred static generation - page generated at runtime"), /*#__PURE__*/react.createElement(build.Text, null, "\u221E (SSR) Server-side renders at runtime (uses getServerData)"), /*#__PURE__*/react.createElement(build.Text, null, "\u03BB (Function) Gatsby function")), /*#__PURE__*/react.createElement(build.Spacer, null));
const TreeGenerator = ({
  file,
  isFirst,
  isLast,
  pages,
  slices
}) => {
  let topLevelIcon = `├`;
  if (isFirst) {
    topLevelIcon = `┌`;
  }
  if (isLast) {
    topLevelIcon = `└`;
  }
  let items = [];
  if (pages) {
    items = generatePageTree(pages);
  } else if (slices) {
    items = generateSliceTree(slices);
  }
  return /*#__PURE__*/react.createElement(build.Box, {
    flexDirection: "column"
  }, /*#__PURE__*/react.createElement(build.Box, null, /*#__PURE__*/react.createElement(build.Box, {
    paddingRight: 1
  }, /*#__PURE__*/react.createElement(build.Text, null, topLevelIcon)), /*#__PURE__*/react.createElement(build.Text, {
    wrap: "truncate-middle"
  }, file)), items.map((item, index) => /*#__PURE__*/react.createElement(build.Box, {
    key: item.text
  }, /*#__PURE__*/react.createElement(build.Text, null, isLast ? ` ` : `│`), /*#__PURE__*/react.createElement(build.Box, {
    paddingLeft: 1,
    paddingRight: 1
  }, /*#__PURE__*/react.createElement(build.Text, null, index === items.length - 1 ? `└` : `├`)), /*#__PURE__*/react.createElement(build.Box, null, /*#__PURE__*/react.createElement(build.Text, null, item.symbol, " ", item.text)))));
};
const PageAndSliceTrees = ({
  components,
  root,
  slices
}) => {
  const componentList = [];
  const sliceList = [];
  let i = 0;
  let j = 0;
  for (const [componentPath, pages] of components) {
    componentList.push( /*#__PURE__*/react.createElement(TreeGenerator, {
      isFirst: i === 0,
      isLast: i === components.size - 1,
      key: componentPath,
      file: path__default["default"].posix.relative(root, componentPath),
      pages: pages
    }));
    i++;
  }
  for (const [componentPath, sliceNames] of slices) {
    sliceList.push( /*#__PURE__*/react.createElement(TreeGenerator, {
      isFirst: j === 0,
      isLast: j === slices.size - 1,
      key: componentPath,
      file: path__default["default"].posix.relative(root, componentPath),
      slices: sliceNames
    }));
    j++;
  }
  return /*#__PURE__*/react.createElement(build.Box, {
    flexDirection: "column",
    marginTop: 2
  }, /*#__PURE__*/react.createElement(build.Box, {
    paddingBottom: 1
  }, /*#__PURE__*/react.createElement(build.Text, {
    underline: true
  }, "Pages")), componentList, slices.size > 0 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(build.Box, {
    paddingTop: 1,
    paddingBottom: 1
  }, /*#__PURE__*/react.createElement(build.Text, {
    underline: true
  }, "Slices")), sliceList), /*#__PURE__*/react.createElement(Description, {
    marginTop: 1,
    marginBottom: 1
  }));
};
const Trees = () => {
  const state = react.useContext(StoreStateContext);
  const componentWithPages = new Map();
  const sliceWithComponents = new Map();
  for (const {
    componentPath,
    pages,
    isSlice
  } of state.pageTree.components.values()) {
    const layoutComponent = parseComponentPath.getPathToLayoutComponent(componentPath);
    const pagesByMode = componentWithPages.get(layoutComponent) || {
      SSG: new Set(),
      DSG: new Set(),
      SSR: new Set(),
      FN: new Set()
    };
    const sliceByComponent = sliceWithComponents.get(layoutComponent) || new Set();
    if (isSlice) {
      pages.forEach(sliceName => {
        sliceByComponent.add(sliceName);
      });
      sliceWithComponents.set(layoutComponent, sliceByComponent);
    } else {
      pages.forEach(pagePath => {
        const gatsbyPage = state.pageTree.pages.get(pagePath);
        pagesByMode[gatsbyPage.mode].add(pagePath);
      });
      componentWithPages.set(layoutComponent, pagesByMode);
    }
  }
  for (const {
    originalAbsoluteFilePath,
    functionRoute
  } of state.pageTree.functions.values()) {
    componentWithPages.set(originalAbsoluteFilePath, {
      SSG: new Set(),
      DSG: new Set(),
      SSR: new Set(),
      FN: new Set([`/api/${functionRoute}`])
    });
  }
  return /*#__PURE__*/react.createElement(PageAndSliceTrees, {
    components: componentWithPages,
    slices: sliceWithComponents,
    root: state.pageTree.root
  });
};

const showProgress = isTTY();
class CLI extends react.Component {
  state = {
    hasError: false
  };
  memoizedReactElementsForMessages = [];
  componentDidCatch() {}
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  render() {
    const {
      logs: {
        activities
      },
      messages,
      showStatusBar,
      showTrees
    } = this.props;
    const {
      hasError,
      error
    } = this.state;
    if (hasError && error) {
      // You can render any custom fallback UI
      return /*#__PURE__*/react.createElement(build.Box, {
        flexDirection: "row"
      }, /*#__PURE__*/react.createElement(Message, {
        level: ActivityLogLevels.Failed,
        text: `We've encountered an error: ${error.message}`
      }));
    }
    const spinners = [];
    const progressBars = [];
    if (showProgress) {
      Object.keys(activities).forEach(activityName => {
        const activity = activities[activityName];
        if (activity.status !== `IN_PROGRESS`) {
          return;
        }
        if (activity.type === `spinner`) {
          spinners.push(activity);
        }
        if (activity.type === `progress` && activity.startTime) {
          progressBars.push(activity);
        }
      });
    }
    return /*#__PURE__*/react.createElement(build.Box, {
      flexDirection: "column"
    }, /*#__PURE__*/react.createElement(build.Box, {
      flexDirection: "column"
    }, /*#__PURE__*/react.createElement(build.Static, {
      items: messages
    }, message => message.level === `ERROR` ? /*#__PURE__*/react.createElement(Error$1, {
      details: message,
      key: messages.indexOf(message)
    }) : /*#__PURE__*/react.createElement(Message, _extends({
      key: messages.indexOf(message)
    }, message))), showTrees && /*#__PURE__*/react.createElement(Trees, null), spinners.map(activity => /*#__PURE__*/react.createElement(Spinner, _extends({
      key: activity.id
    }, activity))), progressBars.map(activity => /*#__PURE__*/react.createElement(ProgressBar, {
      key: activity.id,
      message: activity.text,
      total: activity.total || 0,
      current: activity.current || 0,
      startTime: activity.startTime || [0, 0]
    }))), showStatusBar && /*#__PURE__*/react.createElement(ConnectedDevelop, null));
  }
}

const ConnectedCLI = () => {
  const state = react.useContext(StoreStateContext);
  const showStatusBar =
  // @ts-ignore - program exists on state but we should refactor this
  state.program?._?.[0] === `develop` &&
  // @ts-ignore - program exists on state but we should refactor this
  state.program?.status === `BOOTSTRAP_FINISHED`;
  const showTrees = !!state.pageTree;
  return /*#__PURE__*/react.createElement(CLI, {
    showStatusBar: Boolean(showStatusBar),
    showTrees: Boolean(showTrees),
    logs: state.logs,
    messages: state.messages
  });
};
function initializeINKLogger() {
  build.render( /*#__PURE__*/react.createElement(StoreStateProvider, null, /*#__PURE__*/react.createElement(ConnectedCLI, null)));
}

exports.initializeINKLogger = initializeINKLogger;
