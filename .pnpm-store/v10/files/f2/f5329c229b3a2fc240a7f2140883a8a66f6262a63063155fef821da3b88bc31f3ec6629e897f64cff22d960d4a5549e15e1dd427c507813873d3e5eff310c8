"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeSet = exports.unsafeGet = exports.make = exports.isValid = exports.isInvalid = exports.isChanged = exports.copy = exports.commit = void 0;
var Versioned = _interopRequireWildcard(require("./versioned.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const make = (ref, isNew) => ({
  ref,
  isNew,
  isChanged: false,
  expected: ref.versioned,
  newValue: ref.versioned.value
});
exports.make = make;
const unsafeGet = self => {
  return self.newValue;
};
/** @internal */
exports.unsafeGet = unsafeGet;
const unsafeSet = (self, value) => {
  self.isChanged = true;
  self.newValue = value;
};
/** @internal */
exports.unsafeSet = unsafeSet;
const commit = self => {
  self.ref.versioned = new Versioned.Versioned(self.newValue);
};
/** @internal */
exports.commit = commit;
const copy = self => ({
  ref: self.ref,
  isNew: self.isNew,
  isChanged: self.isChanged,
  expected: self.expected,
  newValue: self.newValue
});
/** @internal */
exports.copy = copy;
const isValid = self => {
  return self.ref.versioned === self.expected;
};
/** @internal */
exports.isValid = isValid;
const isInvalid = self => {
  return self.ref.versioned !== self.expected;
};
/** @internal */
exports.isInvalid = isInvalid;
const isChanged = self => {
  return self.isChanged;
};
exports.isChanged = isChanged;
//# sourceMappingURL=entry.js.map