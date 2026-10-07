import { mockObject } from './index.js';
import { M as MockerRegistry, R as RedirectedModule, A as AutomockedModule } from './chunk-registry.js';
import { e as extname, j as join } from './chunk-pathe.M-eThtNZ.js';

// src/index.ts
var f = {
  reset: [0, 0],
  bold: [1, 22, "\x1B[22m\x1B[1m"],
  dim: [2, 22, "\x1B[22m\x1B[2m"],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
}, h = Object.entries(f);
function a(n) {
  return String(n);
}
a.open = "";
a.close = "";
function C(n = false) {
  let e = typeof process != "undefined" ? process : void 0, i = (e == null ? void 0 : e.env) || {}, g = (e == null ? void 0 : e.argv) || [];
  return !("NO_COLOR" in i || g.includes("--no-color")) && ("FORCE_COLOR" in i || g.includes("--color") || (e == null ? void 0 : e.platform) === "win32" || n && i.TERM !== "dumb" || "CI" in i) || typeof window != "undefined" && !!window.chrome;
}
function p(n = false) {
  let e = C(n), i = (r, t, c, o) => {
    let l = "", s = 0;
    do
      l += r.substring(s, o) + c, s = o + t.length, o = r.indexOf(t, s);
    while (~o);
    return l + r.substring(s);
  }, g = (r, t, c = r) => {
    let o = (l) => {
      let s = String(l), b = s.indexOf(t, r.length);
      return ~b ? r + i(s, t, c, b) + t : r + s + t;
    };
    return o.open = r, o.close = t, o;
  }, u = {
    isColorSupported: e
  }, d = (r) => `\x1B[${r}m`;
  for (let [r, t] of h)
    u[r] = e ? g(
      d(t[0]),
      d(t[1]),
      t[2]
    ) : a;
  return u;
}

p();

function _mergeNamespaces(n, m) {
	m.forEach(function(e) {
		e && typeof e !== "string" && !Array.isArray(e) && Object.keys(e).forEach(function(k) {
			if (k !== "default" && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function() {
						return e[k];
					}
				});
			}
		});
	});
	return Object.freeze(n);
}
function getDefaultExportFromCjs(x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var reactIs$1 = { exports: {} };
var reactIs_production = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var hasRequiredReactIs_production;
function requireReactIs_production() {
	if (hasRequiredReactIs_production) return reactIs_production;
	hasRequiredReactIs_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function typeOf(object) {
		if ("object" === typeof object && null !== object) {
			var $$typeof = object.$$typeof;
			switch ($$typeof) {
				case REACT_ELEMENT_TYPE: switch (object = object.type, object) {
					case REACT_FRAGMENT_TYPE:
					case REACT_PROFILER_TYPE:
					case REACT_STRICT_MODE_TYPE:
					case REACT_SUSPENSE_TYPE:
					case REACT_SUSPENSE_LIST_TYPE:
					case REACT_VIEW_TRANSITION_TYPE: return object;
					default: switch (object = object && object.$$typeof, object) {
						case REACT_CONTEXT_TYPE:
						case REACT_FORWARD_REF_TYPE:
						case REACT_LAZY_TYPE:
						case REACT_MEMO_TYPE: return object;
						case REACT_CONSUMER_TYPE: return object;
						default: return $$typeof;
					}
				}
				case REACT_PORTAL_TYPE: return $$typeof;
			}
		}
	}
	reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
	reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
	reactIs_production.Element = REACT_ELEMENT_TYPE;
	reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
	reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
	reactIs_production.Lazy = REACT_LAZY_TYPE;
	reactIs_production.Memo = REACT_MEMO_TYPE;
	reactIs_production.Portal = REACT_PORTAL_TYPE;
	reactIs_production.Profiler = REACT_PROFILER_TYPE;
	reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
	reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
	reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	reactIs_production.isContextConsumer = function(object) {
		return typeOf(object) === REACT_CONSUMER_TYPE;
	};
	reactIs_production.isContextProvider = function(object) {
		return typeOf(object) === REACT_CONTEXT_TYPE;
	};
	reactIs_production.isElement = function(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	};
	reactIs_production.isForwardRef = function(object) {
		return typeOf(object) === REACT_FORWARD_REF_TYPE;
	};
	reactIs_production.isFragment = function(object) {
		return typeOf(object) === REACT_FRAGMENT_TYPE;
	};
	reactIs_production.isLazy = function(object) {
		return typeOf(object) === REACT_LAZY_TYPE;
	};
	reactIs_production.isMemo = function(object) {
		return typeOf(object) === REACT_MEMO_TYPE;
	};
	reactIs_production.isPortal = function(object) {
		return typeOf(object) === REACT_PORTAL_TYPE;
	};
	reactIs_production.isProfiler = function(object) {
		return typeOf(object) === REACT_PROFILER_TYPE;
	};
	reactIs_production.isStrictMode = function(object) {
		return typeOf(object) === REACT_STRICT_MODE_TYPE;
	};
	reactIs_production.isSuspense = function(object) {
		return typeOf(object) === REACT_SUSPENSE_TYPE;
	};
	reactIs_production.isSuspenseList = function(object) {
		return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	};
	reactIs_production.isValidElementType = function(type) {
		return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
	};
	reactIs_production.typeOf = typeOf;
	return reactIs_production;
}
var reactIs_development$1 = {};
/**
* @license React
* react-is.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var hasRequiredReactIs_development$1;
function requireReactIs_development$1() {
	if (hasRequiredReactIs_development$1) return reactIs_development$1;
	hasRequiredReactIs_development$1 = 1;
	"production" !== process.env.NODE_ENV && function() {
		function typeOf(object) {
			if ("object" === typeof object && null !== object) {
				var $$typeof = object.$$typeof;
				switch ($$typeof) {
					case REACT_ELEMENT_TYPE: switch (object = object.type, object) {
						case REACT_FRAGMENT_TYPE:
						case REACT_PROFILER_TYPE:
						case REACT_STRICT_MODE_TYPE:
						case REACT_SUSPENSE_TYPE:
						case REACT_SUSPENSE_LIST_TYPE:
						case REACT_VIEW_TRANSITION_TYPE: return object;
						default: switch (object = object && object.$$typeof, object) {
							case REACT_CONTEXT_TYPE:
							case REACT_FORWARD_REF_TYPE:
							case REACT_LAZY_TYPE:
							case REACT_MEMO_TYPE: return object;
							case REACT_CONSUMER_TYPE: return object;
							default: return $$typeof;
						}
					}
					case REACT_PORTAL_TYPE: return $$typeof;
				}
			}
		}
		var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
		var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
		reactIs_development$1.ContextConsumer = REACT_CONSUMER_TYPE;
		reactIs_development$1.ContextProvider = REACT_CONTEXT_TYPE;
		reactIs_development$1.Element = REACT_ELEMENT_TYPE;
		reactIs_development$1.ForwardRef = REACT_FORWARD_REF_TYPE;
		reactIs_development$1.Fragment = REACT_FRAGMENT_TYPE;
		reactIs_development$1.Lazy = REACT_LAZY_TYPE;
		reactIs_development$1.Memo = REACT_MEMO_TYPE;
		reactIs_development$1.Portal = REACT_PORTAL_TYPE;
		reactIs_development$1.Profiler = REACT_PROFILER_TYPE;
		reactIs_development$1.StrictMode = REACT_STRICT_MODE_TYPE;
		reactIs_development$1.Suspense = REACT_SUSPENSE_TYPE;
		reactIs_development$1.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
		reactIs_development$1.isContextConsumer = function(object) {
			return typeOf(object) === REACT_CONSUMER_TYPE;
		};
		reactIs_development$1.isContextProvider = function(object) {
			return typeOf(object) === REACT_CONTEXT_TYPE;
		};
		reactIs_development$1.isElement = function(object) {
			return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
		};
		reactIs_development$1.isForwardRef = function(object) {
			return typeOf(object) === REACT_FORWARD_REF_TYPE;
		};
		reactIs_development$1.isFragment = function(object) {
			return typeOf(object) === REACT_FRAGMENT_TYPE;
		};
		reactIs_development$1.isLazy = function(object) {
			return typeOf(object) === REACT_LAZY_TYPE;
		};
		reactIs_development$1.isMemo = function(object) {
			return typeOf(object) === REACT_MEMO_TYPE;
		};
		reactIs_development$1.isPortal = function(object) {
			return typeOf(object) === REACT_PORTAL_TYPE;
		};
		reactIs_development$1.isProfiler = function(object) {
			return typeOf(object) === REACT_PROFILER_TYPE;
		};
		reactIs_development$1.isStrictMode = function(object) {
			return typeOf(object) === REACT_STRICT_MODE_TYPE;
		};
		reactIs_development$1.isSuspense = function(object) {
			return typeOf(object) === REACT_SUSPENSE_TYPE;
		};
		reactIs_development$1.isSuspenseList = function(object) {
			return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
		};
		reactIs_development$1.isValidElementType = function(type) {
			return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
		};
		reactIs_development$1.typeOf = typeOf;
	}();
	return reactIs_development$1;
}
var hasRequiredReactIs$1;
function requireReactIs$1() {
	if (hasRequiredReactIs$1) return reactIs$1.exports;
	hasRequiredReactIs$1 = 1;
	if (process.env.NODE_ENV === "production") {
		reactIs$1.exports = requireReactIs_production();
	} else {
		reactIs$1.exports = requireReactIs_development$1();
	}
	return reactIs$1.exports;
}
var reactIsExports$1 = requireReactIs$1();
var index$1 = /* @__PURE__ */ getDefaultExportFromCjs(reactIsExports$1);
var ReactIs19 = /* @__PURE__ */ _mergeNamespaces({
	__proto__: null,
	default: index$1
}, [reactIsExports$1]);
var reactIs = { exports: {} };
var reactIs_production_min = {};
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
	var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
	u = Symbol.for("react.module.reference");
	function v(a) {
		if ("object" === typeof a && null !== a) {
			var r = a.$$typeof;
			switch (r) {
				case b: switch (a = a.type, a) {
					case d:
					case f:
					case e:
					case m:
					case n: return a;
					default: switch (a = a && a.$$typeof, a) {
						case k:
						case h:
						case l:
						case q:
						case p:
						case g: return a;
						default: return r;
					}
				}
				case c: return r;
			}
		}
	}
	reactIs_production_min.ContextConsumer = h;
	reactIs_production_min.ContextProvider = g;
	reactIs_production_min.Element = b;
	reactIs_production_min.ForwardRef = l;
	reactIs_production_min.Fragment = d;
	reactIs_production_min.Lazy = q;
	reactIs_production_min.Memo = p;
	reactIs_production_min.Portal = c;
	reactIs_production_min.Profiler = f;
	reactIs_production_min.StrictMode = e;
	reactIs_production_min.Suspense = m;
	reactIs_production_min.SuspenseList = n;
	reactIs_production_min.isAsyncMode = function() {
		return false;
	};
	reactIs_production_min.isConcurrentMode = function() {
		return false;
	};
	reactIs_production_min.isContextConsumer = function(a) {
		return v(a) === h;
	};
	reactIs_production_min.isContextProvider = function(a) {
		return v(a) === g;
	};
	reactIs_production_min.isElement = function(a) {
		return "object" === typeof a && null !== a && a.$$typeof === b;
	};
	reactIs_production_min.isForwardRef = function(a) {
		return v(a) === l;
	};
	reactIs_production_min.isFragment = function(a) {
		return v(a) === d;
	};
	reactIs_production_min.isLazy = function(a) {
		return v(a) === q;
	};
	reactIs_production_min.isMemo = function(a) {
		return v(a) === p;
	};
	reactIs_production_min.isPortal = function(a) {
		return v(a) === c;
	};
	reactIs_production_min.isProfiler = function(a) {
		return v(a) === f;
	};
	reactIs_production_min.isStrictMode = function(a) {
		return v(a) === e;
	};
	reactIs_production_min.isSuspense = function(a) {
		return v(a) === m;
	};
	reactIs_production_min.isSuspenseList = function(a) {
		return v(a) === n;
	};
	reactIs_production_min.isValidElementType = function(a) {
		return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
	};
	reactIs_production_min.typeOf = v;
	return reactIs_production_min;
}
var reactIs_development = {};
/**
* @license React
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var hasRequiredReactIs_development;
function requireReactIs_development() {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;
	if (process.env.NODE_ENV !== "production") {
		(function() {
			// ATTENTION
			// When adding new symbols to this file,
			// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
			// The Symbol used to tag the ReactElement-like types.
			var REACT_ELEMENT_TYPE = Symbol.for("react.element");
			var REACT_PORTAL_TYPE = Symbol.for("react.portal");
			var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
			var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
			var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
			var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
			var REACT_CONTEXT_TYPE = Symbol.for("react.context");
			var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
			var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
			var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
			var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
			var REACT_MEMO_TYPE = Symbol.for("react.memo");
			var REACT_LAZY_TYPE = Symbol.for("react.lazy");
			var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
			// -----------------------------------------------------------------------------
			var enableScopeAPI = false;
			var enableCacheElement = false;
			var enableTransitionTracing = false;
			var enableLegacyHidden = false;
			// stuff. Intended to enable React core members to more easily debug scheduling
			// issues in DEV builds.
			var enableDebugTracing = false;
			var REACT_MODULE_REFERENCE;
			{
				REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
			}
			function isValidElementType(type) {
				if (typeof type === "string" || typeof type === "function") {
					return true;
				}
				if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
					return true;
				}
				if (typeof type === "object" && type !== null) {
					if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
						return true;
					}
				}
				return false;
			}
			function typeOf(object) {
				if (typeof object === "object" && object !== null) {
					var $$typeof = object.$$typeof;
					switch ($$typeof) {
						case REACT_ELEMENT_TYPE:
							var type = object.type;
							switch (type) {
								case REACT_FRAGMENT_TYPE:
								case REACT_PROFILER_TYPE:
								case REACT_STRICT_MODE_TYPE:
								case REACT_SUSPENSE_TYPE:
								case REACT_SUSPENSE_LIST_TYPE: return type;
								default:
									var $$typeofType = type && type.$$typeof;
									switch ($$typeofType) {
										case REACT_SERVER_CONTEXT_TYPE:
										case REACT_CONTEXT_TYPE:
										case REACT_FORWARD_REF_TYPE:
										case REACT_LAZY_TYPE:
										case REACT_MEMO_TYPE:
										case REACT_PROVIDER_TYPE: return $$typeofType;
										default: return $$typeof;
									}
							}
						case REACT_PORTAL_TYPE: return $$typeof;
					}
				}
				return undefined;
			}
			var ContextConsumer = REACT_CONTEXT_TYPE;
			var ContextProvider = REACT_PROVIDER_TYPE;
			var Element = REACT_ELEMENT_TYPE;
			var ForwardRef = REACT_FORWARD_REF_TYPE;
			var Fragment = REACT_FRAGMENT_TYPE;
			var Lazy = REACT_LAZY_TYPE;
			var Memo = REACT_MEMO_TYPE;
			var Portal = REACT_PORTAL_TYPE;
			var Profiler = REACT_PROFILER_TYPE;
			var StrictMode = REACT_STRICT_MODE_TYPE;
			var Suspense = REACT_SUSPENSE_TYPE;
			var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
			var hasWarnedAboutDeprecatedIsAsyncMode = false;
			var hasWarnedAboutDeprecatedIsConcurrentMode = false;
			function isAsyncMode(object) {
				{
					if (!hasWarnedAboutDeprecatedIsAsyncMode) {
						hasWarnedAboutDeprecatedIsAsyncMode = true;
						console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, " + "and will be removed in React 18+.");
					}
				}
				return false;
			}
			function isConcurrentMode(object) {
				{
					if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
						hasWarnedAboutDeprecatedIsConcurrentMode = true;
						console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, " + "and will be removed in React 18+.");
					}
				}
				return false;
			}
			function isContextConsumer(object) {
				return typeOf(object) === REACT_CONTEXT_TYPE;
			}
			function isContextProvider(object) {
				return typeOf(object) === REACT_PROVIDER_TYPE;
			}
			function isElement(object) {
				return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
			}
			function isForwardRef(object) {
				return typeOf(object) === REACT_FORWARD_REF_TYPE;
			}
			function isFragment(object) {
				return typeOf(object) === REACT_FRAGMENT_TYPE;
			}
			function isLazy(object) {
				return typeOf(object) === REACT_LAZY_TYPE;
			}
			function isMemo(object) {
				return typeOf(object) === REACT_MEMO_TYPE;
			}
			function isPortal(object) {
				return typeOf(object) === REACT_PORTAL_TYPE;
			}
			function isProfiler(object) {
				return typeOf(object) === REACT_PROFILER_TYPE;
			}
			function isStrictMode(object) {
				return typeOf(object) === REACT_STRICT_MODE_TYPE;
			}
			function isSuspense(object) {
				return typeOf(object) === REACT_SUSPENSE_TYPE;
			}
			function isSuspenseList(object) {
				return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
			}
			reactIs_development.ContextConsumer = ContextConsumer;
			reactIs_development.ContextProvider = ContextProvider;
			reactIs_development.Element = Element;
			reactIs_development.ForwardRef = ForwardRef;
			reactIs_development.Fragment = Fragment;
			reactIs_development.Lazy = Lazy;
			reactIs_development.Memo = Memo;
			reactIs_development.Portal = Portal;
			reactIs_development.Profiler = Profiler;
			reactIs_development.StrictMode = StrictMode;
			reactIs_development.Suspense = Suspense;
			reactIs_development.SuspenseList = SuspenseList;
			reactIs_development.isAsyncMode = isAsyncMode;
			reactIs_development.isConcurrentMode = isConcurrentMode;
			reactIs_development.isContextConsumer = isContextConsumer;
			reactIs_development.isContextProvider = isContextProvider;
			reactIs_development.isElement = isElement;
			reactIs_development.isForwardRef = isForwardRef;
			reactIs_development.isFragment = isFragment;
			reactIs_development.isLazy = isLazy;
			reactIs_development.isMemo = isMemo;
			reactIs_development.isPortal = isPortal;
			reactIs_development.isProfiler = isProfiler;
			reactIs_development.isStrictMode = isStrictMode;
			reactIs_development.isSuspense = isSuspense;
			reactIs_development.isSuspenseList = isSuspenseList;
			reactIs_development.isValidElementType = isValidElementType;
			reactIs_development.typeOf = typeOf;
		})();
	}
	return reactIs_development;
}
var hasRequiredReactIs;
function requireReactIs() {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;
	if (process.env.NODE_ENV === "production") {
		reactIs.exports = requireReactIs_production_min();
	} else {
		reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}
var reactIsExports = requireReactIs();
var index = /* @__PURE__ */ getDefaultExportFromCjs(reactIsExports);
var ReactIs18 = /* @__PURE__ */ _mergeNamespaces({
	__proto__: null,
	default: index
}, [reactIsExports]);
const reactIsMethods = [
	"isAsyncMode",
	"isConcurrentMode",
	"isContextConsumer",
	"isContextProvider",
	"isElement",
	"isForwardRef",
	"isFragment",
	"isLazy",
	"isMemo",
	"isPortal",
	"isProfiler",
	"isStrictMode",
	"isSuspense",
	"isSuspenseList",
	"isValidElementType"
];
Object.fromEntries(reactIsMethods.map((m) => [m, (v) => ReactIs18[m](v) || ReactIs19[m](v)]));

let getPromiseValue = () => 'Promise{…}';
try {
    // @ts-ignore
    const { getPromiseDetails, kPending, kRejected } = process.binding('util');
    if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
        getPromiseValue = (value, options) => {
            const [state, innerValue] = getPromiseDetails(value);
            if (state === kPending) {
                return 'Promise{<pending>}';
            }
            return `Promise${state === kRejected ? '!' : ''}{${options.inspect(innerValue, options)}}`;
        };
    }
}
catch (notNode) {
    /* ignore */
}

/**
* Get original stacktrace without source map support the most performant way.
* - Create only 1 stack frame.
* - Rewrite prepareStackTrace to bypass "support-stack-trace" (usually takes ~250ms).
*/
function createSimpleStackTrace(options) {
	const { message = "$$stack trace error", stackTraceLimit = 1 } = options || {};
	const limit = Error.stackTraceLimit;
	const prepareStackTrace = Error.prepareStackTrace;
	Error.stackTraceLimit = stackTraceLimit;
	Error.prepareStackTrace = (e) => e.stack;
	const err = new Error(message);
	const stackTrace = err.stack || "";
	Error.prepareStackTrace = prepareStackTrace;
	Error.stackTraceLimit = limit;
	return stackTrace;
}

var jsTokens_1;
var hasRequiredJsTokens;
function requireJsTokens() {
	if (hasRequiredJsTokens) return jsTokens_1;
	hasRequiredJsTokens = 1;
	// Copyright 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023 Simon Lydell
	// License: MIT.
	var Identifier, JSXIdentifier, JSXPunctuator, JSXString, JSXText, KeywordsWithExpressionAfter, KeywordsWithNoLineTerminatorAfter, LineTerminatorSequence, MultiLineComment, Newline, NumericLiteral, Punctuator, RegularExpressionLiteral, SingleLineComment, StringLiteral, Template, TokensNotPrecedingObjectLiteral, TokensPrecedingExpression, WhiteSpace;
	RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\\]).|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/uy;
	Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
	Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/uy;
	StringLiteral = /(['"])(?:(?!\1)[^\\\n\r]|\\(?:\r\n|[^]))*(\1)?/y;
	NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
	Template = /[`}](?:[^`\\$]|\\[^]|\$(?!\{))*(`|\$\{)?/y;
	WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/uy;
	LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
	MultiLineComment = /\/\*(?:[^*]|\*(?!\/))*(\*\/)?/y;
	SingleLineComment = /\/\/.*/y;
	JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
	JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/uy;
	JSXString = /(['"])(?:(?!\1)[^])*(\1)?/y;
	JSXText = /[^<>{}]+/y;
	TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
	TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
	KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
	KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
	Newline = RegExp(LineTerminatorSequence.source);
	jsTokens_1 = function* (input, { jsx = false } = {}) {
		var braces, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match, mode, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack;
		({length} = input);
		lastIndex = 0;
		lastSignificantToken = "";
		stack = [{ tag: "JS" }];
		braces = [];
		parenNesting = 0;
		postfixIncDec = false;
		while (lastIndex < length) {
			mode = stack[stack.length - 1];
			switch (mode.tag) {
				case "JS":
				case "JSNonExpressionParen":
				case "InterpolationInTemplate":
				case "InterpolationInJSX":
					if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
						RegularExpressionLiteral.lastIndex = lastIndex;
						if (match = RegularExpressionLiteral.exec(input)) {
							lastIndex = RegularExpressionLiteral.lastIndex;
							lastSignificantToken = match[0];
							postfixIncDec = true;
							yield {
								type: "RegularExpressionLiteral",
								value: match[0],
								closed: match[1] !== void 0 && match[1] !== "\\"
							};
							continue;
						}
					}
					Punctuator.lastIndex = lastIndex;
					if (match = Punctuator.exec(input)) {
						punctuator = match[0];
						nextLastIndex = Punctuator.lastIndex;
						nextLastSignificantToken = punctuator;
						switch (punctuator) {
							case "(":
								if (lastSignificantToken === "?NonExpressionParenKeyword") {
									stack.push({
										tag: "JSNonExpressionParen",
										nesting: parenNesting
									});
								}
								parenNesting++;
								postfixIncDec = false;
								break;
							case ")":
								parenNesting--;
								postfixIncDec = true;
								if (mode.tag === "JSNonExpressionParen" && parenNesting === mode.nesting) {
									stack.pop();
									nextLastSignificantToken = "?NonExpressionParenEnd";
									postfixIncDec = false;
								}
								break;
							case "{":
								Punctuator.lastIndex = 0;
								isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
								braces.push(isExpression);
								postfixIncDec = false;
								break;
							case "}":
								switch (mode.tag) {
									case "InterpolationInTemplate":
										if (braces.length === mode.nesting) {
											Template.lastIndex = lastIndex;
											match = Template.exec(input);
											lastIndex = Template.lastIndex;
											lastSignificantToken = match[0];
											if (match[1] === "${") {
												lastSignificantToken = "?InterpolationInTemplate";
												postfixIncDec = false;
												yield {
													type: "TemplateMiddle",
													value: match[0]
												};
											} else {
												stack.pop();
												postfixIncDec = true;
												yield {
													type: "TemplateTail",
													value: match[0],
													closed: match[1] === "`"
												};
											}
											continue;
										}
										break;
									case "InterpolationInJSX": if (braces.length === mode.nesting) {
										stack.pop();
										lastIndex += 1;
										lastSignificantToken = "}";
										yield {
											type: "JSXPunctuator",
											value: "}"
										};
										continue;
									}
								}
								postfixIncDec = braces.pop();
								nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
								break;
							case "]":
								postfixIncDec = true;
								break;
							case "++":
							case "--":
								nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
								break;
							case "<":
								if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
									stack.push({ tag: "JSXTag" });
									lastIndex += 1;
									lastSignificantToken = "<";
									yield {
										type: "JSXPunctuator",
										value: punctuator
									};
									continue;
								}
								postfixIncDec = false;
								break;
							default: postfixIncDec = false;
						}
						lastIndex = nextLastIndex;
						lastSignificantToken = nextLastSignificantToken;
						yield {
							type: "Punctuator",
							value: punctuator
						};
						continue;
					}
					Identifier.lastIndex = lastIndex;
					if (match = Identifier.exec(input)) {
						lastIndex = Identifier.lastIndex;
						nextLastSignificantToken = match[0];
						switch (match[0]) {
							case "for":
							case "if":
							case "while":
							case "with": if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
								nextLastSignificantToken = "?NonExpressionParenKeyword";
							}
						}
						lastSignificantToken = nextLastSignificantToken;
						postfixIncDec = !KeywordsWithExpressionAfter.test(match[0]);
						yield {
							type: match[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
							value: match[0]
						};
						continue;
					}
					StringLiteral.lastIndex = lastIndex;
					if (match = StringLiteral.exec(input)) {
						lastIndex = StringLiteral.lastIndex;
						lastSignificantToken = match[0];
						postfixIncDec = true;
						yield {
							type: "StringLiteral",
							value: match[0],
							closed: match[2] !== void 0
						};
						continue;
					}
					NumericLiteral.lastIndex = lastIndex;
					if (match = NumericLiteral.exec(input)) {
						lastIndex = NumericLiteral.lastIndex;
						lastSignificantToken = match[0];
						postfixIncDec = true;
						yield {
							type: "NumericLiteral",
							value: match[0]
						};
						continue;
					}
					Template.lastIndex = lastIndex;
					if (match = Template.exec(input)) {
						lastIndex = Template.lastIndex;
						lastSignificantToken = match[0];
						if (match[1] === "${") {
							lastSignificantToken = "?InterpolationInTemplate";
							stack.push({
								tag: "InterpolationInTemplate",
								nesting: braces.length
							});
							postfixIncDec = false;
							yield {
								type: "TemplateHead",
								value: match[0]
							};
						} else {
							postfixIncDec = true;
							yield {
								type: "NoSubstitutionTemplate",
								value: match[0],
								closed: match[1] === "`"
							};
						}
						continue;
					}
					break;
				case "JSXTag":
				case "JSXTagEnd":
					JSXPunctuator.lastIndex = lastIndex;
					if (match = JSXPunctuator.exec(input)) {
						lastIndex = JSXPunctuator.lastIndex;
						nextLastSignificantToken = match[0];
						switch (match[0]) {
							case "<":
								stack.push({ tag: "JSXTag" });
								break;
							case ">":
								stack.pop();
								if (lastSignificantToken === "/" || mode.tag === "JSXTagEnd") {
									nextLastSignificantToken = "?JSX";
									postfixIncDec = true;
								} else {
									stack.push({ tag: "JSXChildren" });
								}
								break;
							case "{":
								stack.push({
									tag: "InterpolationInJSX",
									nesting: braces.length
								});
								nextLastSignificantToken = "?InterpolationInJSX";
								postfixIncDec = false;
								break;
							case "/": if (lastSignificantToken === "<") {
								stack.pop();
								if (stack[stack.length - 1].tag === "JSXChildren") {
									stack.pop();
								}
								stack.push({ tag: "JSXTagEnd" });
							}
						}
						lastSignificantToken = nextLastSignificantToken;
						yield {
							type: "JSXPunctuator",
							value: match[0]
						};
						continue;
					}
					JSXIdentifier.lastIndex = lastIndex;
					if (match = JSXIdentifier.exec(input)) {
						lastIndex = JSXIdentifier.lastIndex;
						lastSignificantToken = match[0];
						yield {
							type: "JSXIdentifier",
							value: match[0]
						};
						continue;
					}
					JSXString.lastIndex = lastIndex;
					if (match = JSXString.exec(input)) {
						lastIndex = JSXString.lastIndex;
						lastSignificantToken = match[0];
						yield {
							type: "JSXString",
							value: match[0],
							closed: match[2] !== void 0
						};
						continue;
					}
					break;
				case "JSXChildren":
					JSXText.lastIndex = lastIndex;
					if (match = JSXText.exec(input)) {
						lastIndex = JSXText.lastIndex;
						lastSignificantToken = match[0];
						yield {
							type: "JSXText",
							value: match[0]
						};
						continue;
					}
					switch (input[lastIndex]) {
						case "<":
							stack.push({ tag: "JSXTag" });
							lastIndex++;
							lastSignificantToken = "<";
							yield {
								type: "JSXPunctuator",
								value: "<"
							};
							continue;
						case "{":
							stack.push({
								tag: "InterpolationInJSX",
								nesting: braces.length
							});
							lastIndex++;
							lastSignificantToken = "?InterpolationInJSX";
							postfixIncDec = false;
							yield {
								type: "JSXPunctuator",
								value: "{"
							};
							continue;
					}
			}
			WhiteSpace.lastIndex = lastIndex;
			if (match = WhiteSpace.exec(input)) {
				lastIndex = WhiteSpace.lastIndex;
				yield {
					type: "WhiteSpace",
					value: match[0]
				};
				continue;
			}
			LineTerminatorSequence.lastIndex = lastIndex;
			if (match = LineTerminatorSequence.exec(input)) {
				lastIndex = LineTerminatorSequence.lastIndex;
				postfixIncDec = false;
				if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
					lastSignificantToken = "?NoLineTerminatorHere";
				}
				yield {
					type: "LineTerminatorSequence",
					value: match[0]
				};
				continue;
			}
			MultiLineComment.lastIndex = lastIndex;
			if (match = MultiLineComment.exec(input)) {
				lastIndex = MultiLineComment.lastIndex;
				if (Newline.test(match[0])) {
					postfixIncDec = false;
					if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
						lastSignificantToken = "?NoLineTerminatorHere";
					}
				}
				yield {
					type: "MultiLineComment",
					value: match[0],
					closed: match[1] !== void 0
				};
				continue;
			}
			SingleLineComment.lastIndex = lastIndex;
			if (match = SingleLineComment.exec(input)) {
				lastIndex = SingleLineComment.lastIndex;
				postfixIncDec = false;
				yield {
					type: "SingleLineComment",
					value: match[0]
				};
				continue;
			}
			firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
			lastIndex += firstCodePoint.length;
			lastSignificantToken = firstCodePoint;
			postfixIncDec = false;
			yield {
				type: mode.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
				value: firstCodePoint
			};
		}
		return void 0;
	};
	return jsTokens_1;
}
requireJsTokens();
// src/index.ts
var reservedWords = {
	keyword: [
		"break",
		"case",
		"catch",
		"continue",
		"debugger",
		"default",
		"do",
		"else",
		"finally",
		"for",
		"function",
		"if",
		"return",
		"switch",
		"throw",
		"try",
		"var",
		"const",
		"while",
		"with",
		"new",
		"this",
		"super",
		"class",
		"extends",
		"export",
		"import",
		"null",
		"true",
		"false",
		"in",
		"instanceof",
		"typeof",
		"void",
		"delete"
	],
	strict: [
		"implements",
		"interface",
		"let",
		"package",
		"private",
		"protected",
		"public",
		"static",
		"yield"
	]
}; new Set(reservedWords.keyword); new Set(reservedWords.strict);

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const intToChar = new Uint8Array(64);
const charToInt = new Uint8Array(128);
for (let i = 0; i < chars.length; i++) {
	const c = chars.charCodeAt(i);
	intToChar[i] = c;
	charToInt[c] = i;
}
var UrlType;
(function(UrlType) {
	UrlType[UrlType["Empty"] = 1] = "Empty";
	UrlType[UrlType["Hash"] = 2] = "Hash";
	UrlType[UrlType["Query"] = 3] = "Query";
	UrlType[UrlType["RelativePath"] = 4] = "RelativePath";
	UrlType[UrlType["AbsolutePath"] = 5] = "AbsolutePath";
	UrlType[UrlType["SchemeRelative"] = 6] = "SchemeRelative";
	UrlType[UrlType["Absolute"] = 7] = "Absolute";
})(UrlType || (UrlType = {}));
const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
	if (!input) {
		return input;
	}
	return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd() {
	if (typeof process !== "undefined" && typeof process.cwd === "function") {
		return process.cwd().replace(/\\/g, "/");
	}
	return "/";
}
const resolve = function(...arguments_) {
	arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
	let resolvedPath = "";
	let resolvedAbsolute = false;
	for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
		const path = index >= 0 ? arguments_[index] : cwd();
		if (!path || path.length === 0) {
			continue;
		}
		resolvedPath = `${path}/${resolvedPath}`;
		resolvedAbsolute = isAbsolute(path);
	}
	resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
	if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
		return `/${resolvedPath}`;
	}
	return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
	let res = "";
	let lastSegmentLength = 0;
	let lastSlash = -1;
	let dots = 0;
	let char = null;
	for (let index = 0; index <= path.length; ++index) {
		if (index < path.length) {
			char = path[index];
		} else if (char === "/") {
			break;
		} else {
			char = "/";
		}
		if (char === "/") {
			if (lastSlash === index - 1 || dots === 1);
			else if (dots === 2) {
				if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
					if (res.length > 2) {
						const lastSlashIndex = res.lastIndexOf("/");
						if (lastSlashIndex === -1) {
							res = "";
							lastSegmentLength = 0;
						} else {
							res = res.slice(0, lastSlashIndex);
							lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
						}
						lastSlash = index;
						dots = 0;
						continue;
					} else if (res.length > 0) {
						res = "";
						lastSegmentLength = 0;
						lastSlash = index;
						dots = 0;
						continue;
					}
				}
				if (allowAboveRoot) {
					res += res.length > 0 ? "/.." : "..";
					lastSegmentLength = 2;
				}
			} else {
				if (res.length > 0) {
					res += `/${path.slice(lastSlash + 1, index)}`;
				} else {
					res = path.slice(lastSlash + 1, index);
				}
				lastSegmentLength = index - lastSlash - 1;
			}
			lastSlash = index;
			dots = 0;
		} else if (char === "." && dots !== -1) {
			++dots;
		} else {
			dots = -1;
		}
	}
	return res;
}
const isAbsolute = function(p) {
	return _IS_ABSOLUTE_RE.test(p);
};
const CHROME_IE_STACK_REGEXP = /^\s*at .*(?:\S:\d+|\(native\))/m;
const SAFARI_NATIVE_CODE_REGEXP = /^(?:eval@)?(?:\[native code\])?$/;
function extractLocation(urlLike) {
	// Fail-fast but return locations like "(native)"
	if (!urlLike.includes(":")) {
		return [urlLike];
	}
	const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
	const parts = regExp.exec(urlLike.replace(/^\(|\)$/g, ""));
	if (!parts) {
		return [urlLike];
	}
	let url = parts[1];
	if (url.startsWith("async ")) {
		url = url.slice(6);
	}
	if (url.startsWith("http:") || url.startsWith("https:")) {
		const urlObj = new URL(url);
		urlObj.searchParams.delete("import");
		urlObj.searchParams.delete("browserv");
		url = urlObj.pathname + urlObj.hash + urlObj.search;
	}
	if (url.startsWith("/@fs/")) {
		const isWindows = /^\/@fs\/[a-zA-Z]:\//.test(url);
		url = url.slice(isWindows ? 5 : 4);
	}
	return [
		url,
		parts[2] || undefined,
		parts[3] || undefined
	];
}
function parseSingleFFOrSafariStack(raw) {
	let line = raw.trim();
	if (SAFARI_NATIVE_CODE_REGEXP.test(line)) {
		return null;
	}
	if (line.includes(" > eval")) {
		line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
	}
	if (!line.includes("@") && !line.includes(":")) {
		return null;
	}
	// eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/optimal-quantifier-concatenation
	const functionNameRegex = /((.*".+"[^@]*)?[^@]*)(@)/;
	const matches = line.match(functionNameRegex);
	const functionName = matches && matches[1] ? matches[1] : undefined;
	const [url, lineNumber, columnNumber] = extractLocation(line.replace(functionNameRegex, ""));
	if (!url || !lineNumber || !columnNumber) {
		return null;
	}
	return {
		file: url,
		method: functionName || "",
		line: Number.parseInt(lineNumber),
		column: Number.parseInt(columnNumber)
	};
}
function parseSingleStack(raw) {
	const line = raw.trim();
	if (!CHROME_IE_STACK_REGEXP.test(line)) {
		return parseSingleFFOrSafariStack(line);
	}
	return parseSingleV8Stack(line);
}
// Based on https://github.com/stacktracejs/error-stack-parser
// Credit to stacktracejs
function parseSingleV8Stack(raw) {
	let line = raw.trim();
	if (!CHROME_IE_STACK_REGEXP.test(line)) {
		return null;
	}
	if (line.includes("(eval ")) {
		line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
	}
	let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
	// capture and preserve the parenthesized location "(/foo/my bar.js:12:87)" in
	// case it has spaces in it, as the string is split on \s+ later on
	const location = sanitizedLine.match(/ (\(.+\)$)/);
	// remove the parenthesized location from the line, if it was matched
	sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
	// if a location was matched, pass it to extractLocation() otherwise pass all sanitizedLine
	// because this line doesn't have function name
	const [url, lineNumber, columnNumber] = extractLocation(location ? location[1] : sanitizedLine);
	let method = location && sanitizedLine || "";
	let file = url && ["eval", "<anonymous>"].includes(url) ? undefined : url;
	if (!file || !lineNumber || !columnNumber) {
		return null;
	}
	if (method.startsWith("async ")) {
		method = method.slice(6);
	}
	if (file.startsWith("file://")) {
		file = file.slice(7);
	}
	// normalize Windows path (\ -> /)
	file = file.startsWith("node:") || file.startsWith("internal:") ? file : resolve(file);
	if (method) {
		method = method.replace(/__vite_ssr_import_\d+__\./g, "");
	}
	return {
		method,
		file,
		line: Number.parseInt(lineNumber),
		column: Number.parseInt(columnNumber)
	};
}

function createCompilerHints(options) {
	const globalThisAccessor = (options === null || options === void 0 ? void 0 : options.globalThisKey) || "__vitest_mocker__";
	function _mocker() {
		// @ts-expect-error injected by the plugin
		return typeof globalThis[globalThisAccessor] !== "undefined" ? globalThis[globalThisAccessor] : new Proxy({}, { get(_, name) {
			throw new Error("Vitest mocker was not initialized in this environment. " + `vi.${String(name)}() is forbidden.`);
		} });
	}
	return {
		hoisted(factory) {
			if (typeof factory !== "function") {
				throw new TypeError(`vi.hoisted() expects a function, but received a ${typeof factory}`);
			}
			return factory();
		},
		mock(path, factory) {
			if (typeof path !== "string") {
				throw new TypeError(`vi.mock() expects a string path, but received a ${typeof path}`);
			}
			const importer = getImporter("mock");
			_mocker().queueMock(path, importer, typeof factory === "function" ? () => factory(() => _mocker().importActual(path, importer)) : factory);
		},
		unmock(path) {
			if (typeof path !== "string") {
				throw new TypeError(`vi.unmock() expects a string path, but received a ${typeof path}`);
			}
			_mocker().queueUnmock(path, getImporter("unmock"));
		},
		doMock(path, factory) {
			if (typeof path !== "string") {
				throw new TypeError(`vi.doMock() expects a string path, but received a ${typeof path}`);
			}
			const importer = getImporter("doMock");
			_mocker().queueMock(path, importer, typeof factory === "function" ? () => factory(() => _mocker().importActual(path, importer)) : factory);
		},
		doUnmock(path) {
			if (typeof path !== "string") {
				throw new TypeError(`vi.doUnmock() expects a string path, but received a ${typeof path}`);
			}
			_mocker().queueUnmock(path, getImporter("doUnmock"));
		},
		async importActual(path) {
			return _mocker().importActual(path, getImporter("importActual"));
		},
		async importMock(path) {
			return _mocker().importMock(path, getImporter("importMock"));
		}
	};
}
function getImporter(name) {
	const stackTrace = /* @__PURE__ */ createSimpleStackTrace({ stackTraceLimit: 5 });
	const stackArray = stackTrace.split("\n");
	// if there is no message in a stack trace, use the item - 1
	const importerStackIndex = stackArray.findIndex((stack) => {
		return stack.includes(` at Object.${name}`) || stack.includes(`${name}@`);
	});
	const stack = /* @__PURE__ */ parseSingleStack(stackArray[importerStackIndex + 1]);
	return (stack === null || stack === void 0 ? void 0 : stack.file) || "";
}

const hot = import.meta.hot || {
	on: warn,
	off: warn,
	send: warn
};
function warn() {
	console.warn("Vitest mocker cannot work if Vite didn't establish WS connection.");
}
function rpc(event, data) {
	hot.send(event, data);
	return new Promise((resolve, reject) => {
		const timeout = setTimeout(() => {
			reject(new Error(`Failed to resolve ${event} in time`));
		}, 5e3);
		hot.on(`${event}:result`, function r(data) {
			resolve(data);
			clearTimeout(timeout);
			hot.off(`${event}:result`, r);
		});
	});
}

const { now } = Date;
class ModuleMocker {
	registry = new MockerRegistry();
	queue = new Set();
	mockedIds = new Set();
	constructor(interceptor, rpc, spyOn, config) {
		this.interceptor = interceptor;
		this.rpc = rpc;
		this.spyOn = spyOn;
		this.config = config;
	}
	async prepare() {
		if (!this.queue.size) {
			return;
		}
		await Promise.all([...this.queue.values()]);
	}
	async resolveFactoryModule(id) {
		const mock = this.registry.get(id);
		if (!mock || mock.type !== "manual") {
			throw new Error(`Mock ${id} wasn't registered. This is probably a Vitest error. Please, open a new issue with reproduction.`);
		}
		const result = await mock.resolve();
		return result;
	}
	getFactoryModule(id) {
		const mock = this.registry.get(id);
		if (!mock || mock.type !== "manual") {
			throw new Error(`Mock ${id} wasn't registered. This is probably a Vitest error. Please, open a new issue with reproduction.`);
		}
		if (!mock.cache) {
			throw new Error(`Mock ${id} wasn't resolved. This is probably a Vitest error. Please, open a new issue with reproduction.`);
		}
		return mock.cache;
	}
	async invalidate() {
		const ids = Array.from(this.mockedIds);
		if (!ids.length) {
			return;
		}
		await this.rpc.invalidate(ids);
		await this.interceptor.invalidate();
		this.registry.clear();
	}
	async importActual(id, importer) {
		const resolved = await this.rpc.resolveId(id, importer);
		if (resolved == null) {
			throw new Error(`[vitest] Cannot resolve "${id}" imported from "${importer}"`);
		}
		const ext = extname(resolved.id);
		const url = new URL(resolved.url, location.href);
		const query = `_vitest_original&ext${ext}`;
		const actualUrl = `${url.pathname}${url.search ? `${url.search}&${query}` : `?${query}`}${url.hash}`;
		return this.wrapDynamicImport(() => import(
			/* @vite-ignore */
			actualUrl
)).then((mod) => {
			if (!resolved.optimized || typeof mod.default === "undefined") {
				return mod;
			}
			// vite injects this helper for optimized modules, so we try to follow the same behavior
			const m = mod.default;
			return (m === null || m === void 0 ? void 0 : m.__esModule) ? m : {
				...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},
				default: m
			};
		});
	}
	async importMock(rawId, importer) {
		await this.prepare();
		const { resolvedId, resolvedUrl, redirectUrl } = await this.rpc.resolveMock(rawId, importer, { mock: "auto" });
		const mockUrl = this.resolveMockPath(cleanVersion(resolvedUrl));
		let mock = this.registry.get(mockUrl);
		if (!mock) {
			if (redirectUrl) {
				const resolvedRedirect = new URL(this.resolveMockPath(cleanVersion(redirectUrl)), location.href).toString();
				mock = new RedirectedModule(rawId, resolvedId, mockUrl, resolvedRedirect);
			} else {
				mock = new AutomockedModule(rawId, resolvedId, mockUrl);
			}
		}
		if (mock.type === "manual") {
			return await mock.resolve();
		}
		if (mock.type === "automock" || mock.type === "autospy") {
			const url = new URL(`/@id/${resolvedId}`, location.href);
			const query = url.search ? `${url.search}&t=${now()}` : `?t=${now()}`;
			const moduleObject = await import(
				/* @vite-ignore */
				`${url.pathname}${query}&mock=${mock.type}${url.hash}`
);
			return this.mockObject(moduleObject, mock.type);
		}
		return import(
			/* @vite-ignore */
			mock.redirect
);
	}
	mockObject(object, moduleType = "automock") {
		return mockObject({
			globalConstructors: {
				Object,
				Function,
				Array,
				Map,
				RegExp
			},
			spyOn: this.spyOn,
			type: moduleType
		}, object);
	}
	queueMock(rawId, importer, factoryOrOptions) {
		const promise = this.rpc.resolveMock(rawId, importer, { mock: typeof factoryOrOptions === "function" ? "factory" : (factoryOrOptions === null || factoryOrOptions === void 0 ? void 0 : factoryOrOptions.spy) ? "spy" : "auto" }).then(async ({ redirectUrl, resolvedId, resolvedUrl, needsInterop, mockType }) => {
			const mockUrl = this.resolveMockPath(cleanVersion(resolvedUrl));
			this.mockedIds.add(resolvedId);
			const factory = typeof factoryOrOptions === "function" ? async () => {
				const data = await factoryOrOptions();
				// vite wraps all external modules that have "needsInterop" in a function that
				// merges all exports from default into the module object
				return needsInterop ? { default: data } : data;
			} : undefined;
			const mockRedirect = typeof redirectUrl === "string" ? new URL(this.resolveMockPath(cleanVersion(redirectUrl)), location.href).toString() : null;
			let module;
			if (mockType === "manual") {
				module = this.registry.register("manual", rawId, resolvedId, mockUrl, factory);
			} else if (mockType === "autospy") {
				module = this.registry.register("autospy", rawId, resolvedId, mockUrl);
			} else if (mockType === "redirect") {
				module = this.registry.register("redirect", rawId, resolvedId, mockUrl, mockRedirect);
			} else {
				module = this.registry.register("automock", rawId, resolvedId, mockUrl);
			}
			await this.interceptor.register(module);
		}).finally(() => {
			this.queue.delete(promise);
		});
		this.queue.add(promise);
	}
	queueUnmock(id, importer) {
		const promise = this.rpc.resolveId(id, importer).then(async (resolved) => {
			if (!resolved) {
				return;
			}
			const mockUrl = this.resolveMockPath(cleanVersion(resolved.url));
			this.mockedIds.add(resolved.id);
			this.registry.delete(mockUrl);
			await this.interceptor.delete(mockUrl);
		}).finally(() => {
			this.queue.delete(promise);
		});
		this.queue.add(promise);
	}
	// We need to await mock registration before importing the actual module
	// In case there is a mocked module in the import chain
	wrapDynamicImport(moduleFactory) {
		if (typeof moduleFactory === "function") {
			const promise = new Promise((resolve, reject) => {
				this.prepare().finally(() => {
					moduleFactory().then(resolve, reject);
				});
			});
			return promise;
		}
		return moduleFactory;
	}
	resolveMockPath(path) {
		const config = this.config;
		const fsRoot = join("/@fs/", config.root);
		// URL can be /file/path.js, but path is resolved to /file/path
		if (path.startsWith(config.root)) {
			return path.slice(config.root.length);
		}
		if (path.startsWith(fsRoot)) {
			return path.slice(fsRoot.length);
		}
		return path;
	}
}
const versionRegexp = /(\?|&)v=\w{8}/;
function cleanVersion(url) {
	return url.replace(versionRegexp, "");
}

export { ModuleMocker as M, createCompilerHints as c, hot as h, rpc as r };
