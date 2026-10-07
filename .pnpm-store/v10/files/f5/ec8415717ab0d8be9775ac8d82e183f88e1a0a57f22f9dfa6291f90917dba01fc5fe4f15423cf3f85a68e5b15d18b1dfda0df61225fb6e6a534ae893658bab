"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSomeAndGet = exports.updateSome = exports.updateAndGet = exports.update = exports.unsafeMake = exports.unsafeGet = exports.setAndGet = exports.set = exports.refVariance = exports.modifySome = exports.modify = exports.make = exports.getAndUpdateSome = exports.getAndUpdate = exports.getAndSet = exports.get = exports.RefTypeId = void 0;
var Effectable = _interopRequireWildcard(require("../Effectable.js"));
var _Function = require("../Function.js");
var MutableRef = _interopRequireWildcard(require("../MutableRef.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var Readable = _interopRequireWildcard(require("../Readable.js"));
var core = _interopRequireWildcard(require("./core.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const RefTypeId = exports.RefTypeId = /*#__PURE__*/Symbol.for("effect/Ref");
/** @internal */
const refVariance = exports.refVariance = {
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
const unsafeMake = value => new RefImpl(MutableRef.make(value));
/** @internal */
exports.unsafeMake = unsafeMake;
const make = value => core.sync(() => unsafeMake(value));
/** @internal */
exports.make = make;
const get = self => self.get;
/** @internal */
exports.get = get;
const set = exports.set = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self.modify(() => [void 0, value]));
/** @internal */
const getAndSet = exports.getAndSet = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self.modify(a => [a, value]));
/** @internal */
const getAndUpdate = exports.getAndUpdate = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => [a, f(a)]));
/** @internal */
const getAndUpdateSome = exports.getAndUpdateSome = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => self.modify(value => {
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
const setAndGet = exports.setAndGet = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self.modify(() => [value, value]));
/** @internal */
const modify = exports.modify = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(f));
/** @internal */
const modifySome = exports.modifySome = /*#__PURE__*/(0, _Function.dual)(3, (self, fallback, pf) => self.modify(value => {
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
const update = exports.update = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => [void 0, f(a)]));
/** @internal */
const updateAndGet = exports.updateAndGet = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => {
  const result = f(a);
  return [result, result];
}));
/** @internal */
const updateSome = exports.updateSome = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => [void 0, Option.match(f(a), {
  onNone: () => a,
  onSome: b => b
})]));
/** @internal */
const updateSomeAndGet = exports.updateSomeAndGet = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => self.modify(value => {
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
const unsafeGet = self => MutableRef.get(self.ref);
exports.unsafeGet = unsafeGet;
//# sourceMappingURL=ref.js.map