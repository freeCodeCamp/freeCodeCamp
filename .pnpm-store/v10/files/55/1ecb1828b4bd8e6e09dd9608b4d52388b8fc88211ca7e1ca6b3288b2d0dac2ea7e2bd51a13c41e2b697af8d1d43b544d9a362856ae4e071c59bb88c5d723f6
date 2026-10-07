import { dual } from "../../Function.js";
import * as Option from "../../Option.js";
import { pipeArguments } from "../../Pipeable.js";
import * as core from "./core.js";
import * as Entry from "./entry.js";
import * as Versioned from "./versioned.js";
/** @internal */
const TRefSymbolKey = "effect/TRef";
/** @internal */
export const TRefTypeId = /*#__PURE__*/Symbol.for(TRefSymbolKey);
export const tRefVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
export class TRefImpl {
  [TRefTypeId] = tRefVariance;
  /** @internal */
  todos;
  /** @internal */
  versioned;
  constructor(value) {
    this.versioned = new Versioned.Versioned(value);
    this.todos = new Map();
  }
  modify(f) {
    return core.effect(journal => {
      const entry = getOrMakeEntry(this, journal);
      const [retValue, newValue] = f(Entry.unsafeGet(entry));
      Entry.unsafeSet(entry, newValue);
      return retValue;
    });
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const make = value => core.effect(journal => {
  const ref = new TRefImpl(value);
  journal.set(ref, Entry.make(ref, true));
  return ref;
});
/** @internal */
export const get = self => self.modify(a => [a, a]);
/** @internal */
export const set = /*#__PURE__*/dual(2, (self, value) => self.modify(() => [void 0, value]));
/** @internal */
export const getAndSet = /*#__PURE__*/dual(2, (self, value) => self.modify(a => [a, value]));
/** @internal */
export const getAndUpdate = /*#__PURE__*/dual(2, (self, f) => self.modify(a => [a, f(a)]));
/** @internal */
export const getAndUpdateSome = /*#__PURE__*/dual(2, (self, f) => self.modify(a => Option.match(f(a), {
  onNone: () => [a, a],
  onSome: b => [a, b]
})));
/** @internal */
export const setAndGet = /*#__PURE__*/dual(2, (self, value) => self.modify(() => [value, value]));
/** @internal */
export const modify = /*#__PURE__*/dual(2, (self, f) => self.modify(f));
/** @internal */
export const modifySome = /*#__PURE__*/dual(3, (self, fallback, f) => self.modify(a => Option.match(f(a), {
  onNone: () => [fallback, a],
  onSome: b => b
})));
/** @internal */
export const update = /*#__PURE__*/dual(2, (self, f) => self.modify(a => [void 0, f(a)]));
/** @internal */
export const updateAndGet = /*#__PURE__*/dual(2, (self, f) => self.modify(a => {
  const b = f(a);
  return [b, b];
}));
/** @internal */
export const updateSome = /*#__PURE__*/dual(2, (self, f) => self.modify(a => [void 0, Option.match(f(a), {
  onNone: () => a,
  onSome: b => b
})]));
/** @internal */
export const updateSomeAndGet = /*#__PURE__*/dual(2, (self, f) => self.modify(a => Option.match(f(a), {
  onNone: () => [a, a],
  onSome: b => [b, b]
})));
/** @internal */
const getOrMakeEntry = (self, journal) => {
  if (journal.has(self)) {
    return journal.get(self);
  }
  const entry = Entry.make(self, false);
  journal.set(self, entry);
  return entry;
};
/** @internal */
export const unsafeGet = /*#__PURE__*/dual(2, (self, journal) => Entry.unsafeGet(getOrMakeEntry(self, journal)));
/** @internal */
export const unsafeSet = /*#__PURE__*/dual(3, (self, value, journal) => {
  const entry = getOrMakeEntry(self, journal);
  Entry.unsafeSet(entry, value);
  return undefined;
});
//# sourceMappingURL=tRef.js.map