"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSomeAndGet = exports.updateSome = exports.updateAndGet = exports.update = exports.unsafeSet = exports.unsafeGet = exports.tRefVariance = exports.setAndGet = exports.set = exports.modifySome = exports.modify = exports.make = exports.getAndUpdateSome = exports.getAndUpdate = exports.getAndSet = exports.get = exports.TRefTypeId = exports.TRefImpl = void 0;
var _Function = require("../../Function.js");
var Option = _interopRequireWildcard(require("../../Option.js"));
var _Pipeable = require("../../Pipeable.js");
var core = _interopRequireWildcard(require("./core.js"));
var Entry = _interopRequireWildcard(require("./entry.js"));
var Versioned = _interopRequireWildcard(require("./versioned.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TRefSymbolKey = "effect/TRef";
/** @internal */
const TRefTypeId = exports.TRefTypeId = /*#__PURE__*/Symbol.for(TRefSymbolKey);
const tRefVariance = exports.tRefVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
class TRefImpl {
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
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
exports.TRefImpl = TRefImpl;
const make = value => core.effect(journal => {
  const ref = new TRefImpl(value);
  journal.set(ref, Entry.make(ref, true));
  return ref;
});
/** @internal */
exports.make = make;
const get = self => self.modify(a => [a, a]);
/** @internal */
exports.get = get;
const set = exports.set = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self.modify(() => [void 0, value]));
/** @internal */
const getAndSet = exports.getAndSet = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self.modify(a => [a, value]));
/** @internal */
const getAndUpdate = exports.getAndUpdate = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => [a, f(a)]));
/** @internal */
const getAndUpdateSome = exports.getAndUpdateSome = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => Option.match(f(a), {
  onNone: () => [a, a],
  onSome: b => [a, b]
})));
/** @internal */
const setAndGet = exports.setAndGet = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self.modify(() => [value, value]));
/** @internal */
const modify = exports.modify = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(f));
/** @internal */
const modifySome = exports.modifySome = /*#__PURE__*/(0, _Function.dual)(3, (self, fallback, f) => self.modify(a => Option.match(f(a), {
  onNone: () => [fallback, a],
  onSome: b => b
})));
/** @internal */
const update = exports.update = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => [void 0, f(a)]));
/** @internal */
const updateAndGet = exports.updateAndGet = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => {
  const b = f(a);
  return [b, b];
}));
/** @internal */
const updateSome = exports.updateSome = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => [void 0, Option.match(f(a), {
  onNone: () => a,
  onSome: b => b
})]));
/** @internal */
const updateSomeAndGet = exports.updateSomeAndGet = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => Option.match(f(a), {
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
const unsafeGet = exports.unsafeGet = /*#__PURE__*/(0, _Function.dual)(2, (self, journal) => Entry.unsafeGet(getOrMakeEntry(self, journal)));
/** @internal */
const unsafeSet = exports.unsafeSet = /*#__PURE__*/(0, _Function.dual)(3, (self, value, journal) => {
  const entry = getOrMakeEntry(self, journal);
  Entry.unsafeSet(entry, value);
  return undefined;
});
//# sourceMappingURL=tRef.js.map