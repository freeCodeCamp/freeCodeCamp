"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unwrap = exports.mapEffect = exports.map = exports.make = exports.isSubscribable = exports.TypeId = void 0;
var Effect = _interopRequireWildcard(require("./Effect.js"));
var _Function = require("./Function.js");
var _Pipeable = require("./Pipeable.js");
var _Predicate = require("./Predicate.js");
var Readable = _interopRequireWildcard(require("./Readable.js"));
var Stream = _interopRequireWildcard(require("./Stream.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * @since 2.0.0
 * @category type ids
 */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/Subscribable");
/**
 * @since 2.0.0
 * @category refinements
 */
const isSubscribable = u => (0, _Predicate.hasProperty)(u, TypeId);
exports.isSubscribable = isSubscribable;
const Proto = {
  [Readable.TypeId]: Readable.TypeId,
  [TypeId]: TypeId,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/**
 * @since 2.0.0
 * @category constructors
 */
const make = options => Object.assign(Object.create(Proto), options);
/**
 * @since 2.0.0
 * @category combinators
 */
exports.make = make;
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => make({
  get: Effect.map(self.get, f),
  changes: Stream.map(self.changes, f)
}));
/**
 * @since 2.0.0
 * @category combinators
 */
const mapEffect = exports.mapEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => make({
  get: Effect.flatMap(self.get, f),
  changes: Stream.mapEffect(self.changes, f)
}));
/**
 * @since 2.0.0
 * @category constructors
 */
const unwrap = effect => make({
  get: Effect.flatMap(effect, s => s.get),
  changes: Stream.unwrap(Effect.map(effect, s => s.changes))
});
exports.unwrap = unwrap;
//# sourceMappingURL=Subscribable.js.map