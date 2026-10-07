"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchSimple = exports.match = void 0;
var core = _interopRequireWildcard(require("./core.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const match = (concurrency, sequential, unbounded, bounded) => {
  switch (concurrency) {
    case undefined:
      return sequential();
    case "unbounded":
      return unbounded();
    case "inherit":
      return core.fiberRefGetWith(core.currentConcurrency, concurrency => concurrency === "unbounded" ? unbounded() : concurrency > 1 ? bounded(concurrency) : sequential());
    default:
      return concurrency > 1 ? bounded(concurrency) : sequential();
  }
};
/** @internal */
exports.match = match;
const matchSimple = (concurrency, sequential, concurrent) => {
  switch (concurrency) {
    case undefined:
      return sequential();
    case "unbounded":
      return concurrent();
    case "inherit":
      return core.fiberRefGetWith(core.currentConcurrency, concurrency => concurrency === "unbounded" || concurrency > 1 ? concurrent() : sequential());
    default:
      return concurrency > 1 ? concurrent() : sequential();
  }
};
exports.matchSimple = matchSimple;
//# sourceMappingURL=concurrency.js.map