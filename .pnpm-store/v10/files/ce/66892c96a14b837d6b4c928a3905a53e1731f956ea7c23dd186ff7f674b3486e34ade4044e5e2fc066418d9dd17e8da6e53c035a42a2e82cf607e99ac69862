/**
 * @since 2.0.0
 */
import * as Equal from "./Equal.js";
import * as Dual from "./Function.js";
import { format, NodeInspectSymbol, toJSON } from "./Inspectable.js";
import { pipeArguments } from "./Pipeable.js";
const TypeId = /*#__PURE__*/Symbol.for("effect/MutableRef");
const MutableRefProto = {
  [TypeId]: TypeId,
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableRef",
      current: toJSON(this.current)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/**
 * @since 2.0.0
 * @category constructors
 */
export const make = value => {
  const ref = Object.create(MutableRefProto);
  ref.current = value;
  return ref;
};
/**
 * @since 2.0.0
 * @category general
 */
export const compareAndSet = /*#__PURE__*/Dual.dual(3, (self, oldValue, newValue) => {
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
export const decrement = self => update(self, n => n - 1);
/**
 * @since 2.0.0
 * @category numeric
 */
export const decrementAndGet = self => updateAndGet(self, n => n - 1);
/**
 * @since 2.0.0
 * @category general
 */
export const get = self => self.current;
/**
 * @since 2.0.0
 * @category numeric
 */
export const getAndDecrement = self => getAndUpdate(self, n => n - 1);
/**
 * @since 2.0.0
 * @category numeric
 */
export const getAndIncrement = self => getAndUpdate(self, n => n + 1);
/**
 * @since 2.0.0
 * @category general
 */
export const getAndSet = /*#__PURE__*/Dual.dual(2, (self, value) => {
  const ret = self.current;
  self.current = value;
  return ret;
});
/**
 * @since 2.0.0
 * @category general
 */
export const getAndUpdate = /*#__PURE__*/Dual.dual(2, (self, f) => getAndSet(self, f(get(self))));
/**
 * @since 2.0.0
 * @category numeric
 */
export const increment = self => update(self, n => n + 1);
/**
 * @since 2.0.0
 * @category numeric
 */
export const incrementAndGet = self => updateAndGet(self, n => n + 1);
/**
 * @since 2.0.0
 * @category general
 */
export const set = /*#__PURE__*/Dual.dual(2, (self, value) => {
  self.current = value;
  return self;
});
/**
 * @since 2.0.0
 * @category general
 */
export const setAndGet = /*#__PURE__*/Dual.dual(2, (self, value) => {
  self.current = value;
  return self.current;
});
/**
 * @since 2.0.0
 * @category general
 */
export const update = /*#__PURE__*/Dual.dual(2, (self, f) => set(self, f(get(self))));
/**
 * @since 2.0.0
 * @category general
 */
export const updateAndGet = /*#__PURE__*/Dual.dual(2, (self, f) => setAndGet(self, f(get(self))));
/**
 * @since 2.0.0
 * @category boolean
 */
export const toggle = self => update(self, _ => !_);
//# sourceMappingURL=MutableRef.js.map