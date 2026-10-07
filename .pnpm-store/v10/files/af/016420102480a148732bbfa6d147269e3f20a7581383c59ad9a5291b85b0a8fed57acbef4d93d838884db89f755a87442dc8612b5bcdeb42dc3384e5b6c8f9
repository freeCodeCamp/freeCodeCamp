"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = exports.fromFiberRef = exports.TestSizedTypeId = exports.TestSized = void 0;
var Context = _interopRequireWildcard(require("./Context.js"));
var core = _interopRequireWildcard(require("./internal/core.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * @since 2.0.0
 */
const TestSizedTypeId = exports.TestSizedTypeId = /*#__PURE__*/Symbol.for("effect/TestSized");
/**
 * @since 2.0.0
 */
const TestSized = exports.TestSized = /*#__PURE__*/Context.GenericTag("effect/TestSized");
/** @internal */
class SizedImpl {
  fiberRef;
  [TestSizedTypeId] = TestSizedTypeId;
  constructor(fiberRef) {
    this.fiberRef = fiberRef;
  }
  get size() {
    return core.fiberRefGet(this.fiberRef);
  }
  withSize(size) {
    return effect => core.fiberRefLocally(this.fiberRef, size)(effect);
  }
}
/**
 * @since 2.0.0
 */
const make = size => new SizedImpl(core.fiberRefUnsafeMake(size));
/**
 * @since 2.0.0
 */
exports.make = make;
const fromFiberRef = fiberRef => new SizedImpl(fiberRef);
exports.fromFiberRef = fromFiberRef;
//# sourceMappingURL=TestSized.js.map