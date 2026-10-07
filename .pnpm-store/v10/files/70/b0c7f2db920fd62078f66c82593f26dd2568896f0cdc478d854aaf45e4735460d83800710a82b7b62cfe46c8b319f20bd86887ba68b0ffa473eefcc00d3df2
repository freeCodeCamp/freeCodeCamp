"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = exports.TestLiveTypeId = exports.TestLive = void 0;
var Context = _interopRequireWildcard(require("./Context.js"));
var core = _interopRequireWildcard(require("./internal/core.js"));
var defaultServices = _interopRequireWildcard(require("./internal/defaultServices.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * @since 2.0.0
 */
const TestLiveTypeId = exports.TestLiveTypeId = /*#__PURE__*/Symbol.for("effect/TestLive");
/**
 * @since 2.0.0
 */
const TestLive = exports.TestLive = /*#__PURE__*/Context.GenericTag("effect/TestLive");
/** @internal */
class LiveImpl {
  services;
  [TestLiveTypeId] = TestLiveTypeId;
  constructor(services) {
    this.services = services;
  }
  provide(effect) {
    return core.fiberRefLocallyWith(defaultServices.currentServices, Context.merge(this.services))(effect);
  }
}
/**
 * @since 2.0.0
 */
const make = services => new LiveImpl(services);
exports.make = make;
//# sourceMappingURL=TestLive.js.map