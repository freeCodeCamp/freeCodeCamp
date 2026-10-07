"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAndGet = exports.update = exports.toggle = exports.setAndGet = exports.set = exports.make = exports.incrementAndGet = exports.increment = exports.getAndUpdate = exports.getAndSet = exports.getAndIncrement = exports.getAndDecrement = exports.get = exports.decrementAndGet = exports.decrement = exports.compareAndSet = void 0;
var Equal = _interopRequireWildcard(require("./Equal.js"));
var Dual = _interopRequireWildcard(require("./Function.js"));
var _Inspectable = require("./Inspectable.js");
var _Pipeable = require("./Pipeable.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

const TypeId = /*#__PURE__*/Symbol.for("effect/MutableRef");
const MutableRefProto = {
  [TypeId]: TypeId,
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableRef",
      current: (0, _Inspectable.toJSON)(this.current)
    };
  },
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/**
 * @since 2.0.0
 * @category constructors
 */
const make = value => {
  const ref = Object.create(MutableRefProto);
  ref.current = value;
  return ref;
};
/**
 * @since 2.0.0
 * @category general
 */
exports.make = make;
const compareAndSet = exports.compareAndSet = /*#__PURE__*/Dual.dual(3, (self, oldValue, newValue) => {
  if (Equal.equals(oldValue, self.current)) {
    self.current = newValue;
    return true;
  }
  return false;
});
/**
 * @since 2.0.0
 * @category numeric
 */
const decrement = self => update(self, n => n - 1);
/**
 * @since 2.0.0
 * @category numeric
 */
exports.decrement = decrement;
const decrementAndGet = self => updateAndGet(self, n => n - 1);
/**
 * @since 2.0.0
 * @category general
 */
exports.decrementAndGet = decrementAndGet;
const get = self => self.current;
/**
 * @since 2.0.0
 * @category numeric
 */
exports.get = get;
const getAndDecrement = self => getAndUpdate(self, n => n - 1);
/**
 * @since 2.0.0
 * @category numeric
 */
exports.getAndDecrement = getAndDecrement;
const getAndIncrement = self => getAndUpdate(self, n => n + 1);
/**
 * @since 2.0.0
 * @category general
 */
exports.getAndIncrement = getAndIncrement;
const getAndSet = exports.getAndSet = /*#__PURE__*/Dual.dual(2, (self, value) => {
  const ret = self.current;
  self.current = value;
  return ret;
});
/**
 * @since 2.0.0
 * @category general
 */
const getAndUpdate = exports.getAndUpdate = /*#__PURE__*/Dual.dual(2, (self, f) => getAndSet(self, f(get(self))));
/**
 * @since 2.0.0
 * @category numeric
 */
const increment = self => update(self, n => n + 1);
/**
 * @since 2.0.0
 * @category numeric
 */
exports.increment = increment;
const incrementAndGet = self => updateAndGet(self, n => n + 1);
/**
 * @since 2.0.0
 * @category general
 */
exports.incrementAndGet = incrementAndGet;
const set = exports.set = /*#__PURE__*/Dual.dual(2, (self, value) => {
  self.current = value;
  return self;
});
/**
 * @since 2.0.0
 * @category general
 */
const setAndGet = exports.setAndGet = /*#__PURE__*/Dual.dual(2, (self, value) => {
  self.current = value;
  return self.current;
});
/**
 * @since 2.0.0
 * @category general
 */
const update = exports.update = /*#__PURE__*/Dual.dual(2, (self, f) => set(self, f(get(self))));
/**
 * @since 2.0.0
 * @category general
 */
const updateAndGet = exports.updateAndGet = /*#__PURE__*/Dual.dual(2, (self, f) => setAndGet(self, f(get(self))));
/**
 * @since 2.0.0
 * @category boolean
 */
const toggle = self => update(self, _ => !_);
exports.toggle = toggle;
//# sourceMappingURL=MutableRef.js.map