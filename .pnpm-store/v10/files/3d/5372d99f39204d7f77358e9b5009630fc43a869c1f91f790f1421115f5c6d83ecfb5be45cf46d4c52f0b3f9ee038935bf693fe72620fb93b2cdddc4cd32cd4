"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.live = exports.TestContext = exports.LiveContext = void 0;
var _Function = require("./Function.js");
var defaultServices = _interopRequireWildcard(require("./internal/defaultServices.js"));
var layer = _interopRequireWildcard(require("./internal/layer.js"));
var TestClock = _interopRequireWildcard(require("./TestClock.js"));
var TestServices = _interopRequireWildcard(require("./TestServices.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const live = exports.live = /*#__PURE__*/(0, _Function.pipe)(/*#__PURE__*/TestServices.annotationsLayer(), /*#__PURE__*/layer.merge(/*#__PURE__*/TestServices.liveLayer()), /*#__PURE__*/layer.merge(/*#__PURE__*/TestServices.sizedLayer(100)), /*#__PURE__*/layer.merge(/*#__PURE__*/(0, _Function.pipe)(TestClock.defaultTestClock, /*#__PURE__*/layer.provideMerge(/*#__PURE__*/layer.merge(/*#__PURE__*/TestServices.liveLayer(), /*#__PURE__*/TestServices.annotationsLayer())))), /*#__PURE__*/layer.merge(/*#__PURE__*/TestServices.testConfigLayer({
  repeats: 100,
  retries: 100,
  samples: 200,
  shrinks: 1000
})));
/**
 * @since 2.0.0
 */
const LiveContext = exports.LiveContext = /*#__PURE__*/layer.syncContext(() => defaultServices.liveServices);
/**
 * @since 2.0.0
 */
const TestContext = exports.TestContext = /*#__PURE__*/layer.provideMerge(live, LiveContext);
//# sourceMappingURL=TestContext.js.map