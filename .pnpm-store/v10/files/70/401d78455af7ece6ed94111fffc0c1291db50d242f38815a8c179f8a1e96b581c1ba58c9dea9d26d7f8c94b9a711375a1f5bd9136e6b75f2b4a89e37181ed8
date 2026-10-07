"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = void 0;
var Cause = _interopRequireWildcard(require("../Cause.js"));
var _Function = require("../Function.js");
var HashMap = _interopRequireWildcard(require("../HashMap.js"));
var List = _interopRequireWildcard(require("../List.js"));
var core = _interopRequireWildcard(require("./core.js"));
var fiberId_ = _interopRequireWildcard(require("./fiberId.js"));
var fiberRefs = _interopRequireWildcard(require("./fiberRefs.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const test = exports.test = /*#__PURE__*/(0, _Function.dual)(2, (self, input) => self.log({
  fiberId: fiberId_.none,
  logLevel: core.logLevelInfo,
  message: input,
  cause: Cause.empty,
  context: fiberRefs.empty(),
  spans: List.empty(),
  annotations: HashMap.empty(),
  date: new Date()
}));
//# sourceMappingURL=logger-circular.js.map