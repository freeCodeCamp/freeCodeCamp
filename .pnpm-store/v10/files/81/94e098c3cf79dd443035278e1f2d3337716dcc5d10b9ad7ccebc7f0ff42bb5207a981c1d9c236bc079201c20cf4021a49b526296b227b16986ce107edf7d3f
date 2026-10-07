"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.value = exports.unsafeWipe = exports.redactedRegistry = exports.proto = exports.make = exports.isRedacted = exports.RedactedTypeId = void 0;
var Equal = _interopRequireWildcard(require("../Equal.js"));
var _Function = require("../Function.js");
var _GlobalValue = require("../GlobalValue.js");
var Hash = _interopRequireWildcard(require("../Hash.js"));
var _Inspectable = require("../Inspectable.js");
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const RedactedSymbolKey = "effect/Redacted";
/** @internal */
const redactedRegistry = exports.redactedRegistry = /*#__PURE__*/(0, _GlobalValue.globalValue)("effect/Redacted/redactedRegistry", () => new WeakMap());
/** @internal */
const RedactedTypeId = exports.RedactedTypeId = /*#__PURE__*/Symbol.for(RedactedSymbolKey);
/** @internal */
const proto = exports.proto = {
  [RedactedTypeId]: {
    _A: _ => _
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  },
  toString() {
    return "<redacted>";
  },
  toJSON() {
    return "<redacted>";
  },
  [_Inspectable.NodeInspectSymbol]() {
    return "<redacted>";
  },
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(RedactedSymbolKey), Hash.combine(Hash.hash(redactedRegistry.get(this))), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isRedacted(that) && Equal.equals(redactedRegistry.get(this), redactedRegistry.get(that));
  }
};
/** @internal */
const isRedacted = u => (0, _Predicate.hasProperty)(u, RedactedTypeId);
/** @internal */
exports.isRedacted = isRedacted;
const make = value => {
  const redacted = Object.create(proto);
  redactedRegistry.set(redacted, value);
  return redacted;
};
/** @internal */
exports.make = make;
const value = self => {
  if (redactedRegistry.has(self)) {
    return redactedRegistry.get(self);
  } else {
    throw new Error("Unable to get redacted value");
  }
};
/** @internal */
exports.value = value;
const unsafeWipe = self => redactedRegistry.delete(self);
exports.unsafeWipe = unsafeWipe;
//# sourceMappingURL=redacted.js.map