"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.value = exports.unsafeWipe = exports.make = exports.isSecret = exports.fromString = exports.fromIterable = exports.SecretTypeId = void 0;
var Arr = _interopRequireWildcard(require("../Array.js"));
var _Predicate = require("../Predicate.js");
var redacted_ = _interopRequireWildcard(require("./redacted.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @internal
 * @deprecated
 */
const SecretSymbolKey = "effect/Secret";
/**
 * @internal
 * @deprecated
 */
const SecretTypeId = exports.SecretTypeId = /*#__PURE__*/Symbol.for(SecretSymbolKey);
/**
 * @internal
 * @deprecated
 */
const isSecret = u => (0, _Predicate.hasProperty)(u, SecretTypeId);
exports.isSecret = isSecret;
const SecretProto = {
  ...redacted_.proto,
  [SecretTypeId]: SecretTypeId
};
/**
 * @internal
 * @deprecated
 */
const make = bytes => {
  const secret = Object.create(SecretProto);
  Object.defineProperty(secret, "toString", {
    enumerable: false,
    value() {
      return "Secret(<redacted>)";
    }
  });
  Object.defineProperty(secret, "toJSON", {
    enumerable: false,
    value() {
      return "<redacted>";
    }
  });
  Object.defineProperty(secret, "raw", {
    enumerable: false,
    value: bytes
  });
  redacted_.redactedRegistry.set(secret, bytes.map(byte => String.fromCharCode(byte)).join(""));
  return secret;
};
/**
 * @internal
 * @deprecated
 */
exports.make = make;
const fromIterable = iterable => make(Arr.fromIterable(iterable).map(char => char.charCodeAt(0)));
/**
 * @internal
 * @deprecated
 */
exports.fromIterable = fromIterable;
const fromString = text => {
  return make(text.split("").map(char => char.charCodeAt(0)));
};
/**
 * @internal
 * @deprecated
 */
exports.fromString = fromString;
const value = self => {
  return self.raw.map(byte => String.fromCharCode(byte)).join("");
};
/**
 * @internal
 * @deprecated
 */
exports.value = value;
const unsafeWipe = self => {
  for (let i = 0; i < self.raw.length; i++) {
    self.raw[i] = 0;
  }
  redacted_.redactedRegistry.delete(self);
};
exports.unsafeWipe = unsafeWipe;
//# sourceMappingURL=secret.js.map