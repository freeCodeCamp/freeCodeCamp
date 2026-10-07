import * as Effectable from "../Effectable.js";
import { dual } from "../Function.js";
import * as MutableRef from "../MutableRef.js";
import * as Option from "../Option.js";
import * as Readable from "../Readable.js";
import * as core from "./core.js";
/** @internal */
export const RefTypeId = /*#__PURE__*/Symbol.for("effect/Ref");
/** @internal */
export const refVariance = {
  /* c8 ignore next */
  _A: _ => _
};
class RefImpl extends Effectable.Class {
  ref;
  commit() {
    return this.get;
  }
  [RefTypeId] = refVariance;
  [Readable.TypeId] = Readable.TypeId;
  constructor(ref) {
    super();
    this.ref = ref;
    this.get = core.sync(() => MutableRef.get(this.ref));
  }
  get;
  modify(f) {
    return core.sync(() => {
      const current = MutableRef.get(this.ref);
      const [b, a] = f(current);
      if (current !== a) {
        MutableRef.set(a)(this.ref);
      }
      return b;
    });
  }
}
/** @internal */
export const unsafeMake = value => new RefImpl(MutableRef.make(value));
/** @internal */
export const make = value => core.sync(() => unsafeMake(value));
/** @internal */
export const get = self => self.get;
/** @internal */
export const set = /*#__PURE__*/dual(2, (self, value) => self.modify(() => [void 0, value]));
/** @internal */
export const getAndSet = /*#__PURE__*/dual(2, (self, value) => self.modify(a => [a, value]));
/** @internal */
export const getAndUpdate = /*#__PURE__*/dual(2, (self, f) => self.modify(a => [a, f(a)]));
/** @internal */
export const getAndUpdateSome = /*#__PURE__*/dual(2, (self, pf) => self.modify(value => {
  const option = pf(value);
  switch (option._tag) {
    case "None":
      {
        return [value, value];
      }
    case "Some":
      {
        return [value, option.value];
      }
  }
}));
/** @internal */
export const setAndGet = /*#__PURE__*/dual(2, (self, value) => self.modify(() => [value, value]));
/** @internal */
export const modify = /*#__PURE__*/dual(2, (self, f) => self.modify(f));
/** @internal */
export const modifySome = /*#__PURE__*/dual(3, (self, fallback, pf) => self.modify(value => {
  const option = pf(value);
  switch (option._tag) {
    case "None":
      {
        return [fallback, value];
      }
    case "Some":
      {
        return option.value;
      }
  }
}));
/** @internal */
export const update = /*#__PURE__*/dual(2, (self, f) => self.modify(a => [void 0, f(a)]));
/** @internal */
export const updateAndGet = /*#__PURE__*/dual(2, (self, f) => self.modify(a => {
  const result = f(a);
  return [result, result];
}));
/** @internal */
export const updateSome = /*#__PURE__*/dual(2, (self, f) => self.modify(a => [void 0, Option.match(f(a), {
  onNone: () => a,
  onSome: b => b
})]));
/** @internal */
export const updateSomeAndGet = /*#__PURE__*/dual(2, (self, pf) => self.modify(value => {
  const option = pf(value);
  switch (option._tag) {
    case "None":
      {
        return [value, value];
      }
    case "Some":
      {
        return [option.value, option.value];
      }
  }
}));
/** @internal */
export const unsafeGet = self => MutableRef.get(self.ref);
//# sourceMappingURL=ref.js.map