"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unwrap = exports.mapEffect = exports.map = exports.make = exports.isReadable = exports.TypeId = void 0;
var _Function = require("./Function.js");
var core = _interopRequireWildcard(require("./internal/core.js"));
var _Pipeable = require("./Pipeable.js");
var _Predicate = require("./Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category type ids
 */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/Readable");
/**
 * @since 2.0.0
 * @category refinements
 */
const isReadable = u => (0, _Predicate.hasProperty)(u, TypeId);
exports.isReadable = isReadable;
const Proto = {
  [TypeId]: TypeId,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/**
 * @since 2.0.0
 * @category constructors
 */
const make = get => {
  const self = Object.create(Proto);
  self.get = get;
  return self;
};
/**
 * @since 2.0.0
 * @category combinators
 */
exports.make = make;
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => make(core.map(self.get, f)));
/**
 * @since 2.0.0
 * @category combinators
 */
const mapEffect = exports.mapEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => make(core.flatMap(self.get, f)));
/**
 * @since 2.0.0
 * @category constructors
 */
const unwrap = effect => make(core.flatMap(effect, s => s.get));
exports.unwrap = unwrap;
//# sourceMappingURL=Readable.js.map