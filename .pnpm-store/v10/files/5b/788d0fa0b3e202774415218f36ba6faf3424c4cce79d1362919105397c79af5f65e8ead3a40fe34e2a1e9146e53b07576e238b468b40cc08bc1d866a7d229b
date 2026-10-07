import * as Arr from "../Array.js";
import { hasProperty } from "../Predicate.js";
import * as redacted_ from "./redacted.js";
/**
 * @internal
 * @deprecated
 */
const SecretSymbolKey = "effect/Secret";
/**
 * @internal
 * @deprecated
 */
export const SecretTypeId = /*#__PURE__*/Symbol.for(SecretSymbolKey);
/**
 * @internal
 * @deprecated
 */
export const isSecret = u => hasProperty(u, SecretTypeId);
const SecretProto = {
  ...redacted_.proto,
  [SecretTypeId]: SecretTypeId
};
/**
 * @internal
 * @deprecated
 */
export const make = bytes => {
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
export const fromIterable = iterable => make(Arr.fromIterable(iterable).map(char => char.charCodeAt(0)));
/**
 * @internal
 * @deprecated
 */
export const fromString = text => {
  return make(text.split("").map(char => char.charCodeAt(0)));
};
/**
 * @internal
 * @deprecated
 */
export const value = self => {
  return self.raw.map(byte => String.fromCharCode(byte)).join("");
};
/**
 * @internal
 * @deprecated
 */
export const unsafeWipe = self => {
  for (let i = 0; i < self.raw.length; i++) {
    self.raw[i] = 0;
  }
  redacted_.redactedRegistry.delete(self);
};
//# sourceMappingURL=secret.js.map