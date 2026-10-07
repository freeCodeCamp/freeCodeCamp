import * as Equal from "../Equal.js";
import { pipe } from "../Function.js";
import { globalValue } from "../GlobalValue.js";
import * as Hash from "../Hash.js";
import { NodeInspectSymbol } from "../Inspectable.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty } from "../Predicate.js";
/** @internal */
const RedactedSymbolKey = "effect/Redacted";
/** @internal */
export const redactedRegistry = /*#__PURE__*/globalValue("effect/Redacted/redactedRegistry", () => new WeakMap());
/** @internal */
export const RedactedTypeId = /*#__PURE__*/Symbol.for(RedactedSymbolKey);
/** @internal */
export const proto = {
  [RedactedTypeId]: {
    _A: _ => _
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
  toString() {
    return "<redacted>";
  },
  toJSON() {
    return "<redacted>";
  },
  [NodeInspectSymbol]() {
    return "<redacted>";
  },
  [Hash.symbol]() {
    return pipe(Hash.hash(RedactedSymbolKey), Hash.combine(Hash.hash(redactedRegistry.get(this))), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isRedacted(that) && Equal.equals(redactedRegistry.get(this), redactedRegistry.get(that));
  }
};
/** @internal */
export const isRedacted = u => hasProperty(u, RedactedTypeId);
/** @internal */
export const make = value => {
  const redacted = Object.create(proto);
  redactedRegistry.set(redacted, value);
  return redacted;
};
/** @internal */
export const value = self => {
  if (redactedRegistry.has(self)) {
    return redactedRegistry.get(self);
  } else {
    throw new Error("Unable to get redacted value");
  }
};
/** @internal */
export const unsafeWipe = self => redactedRegistry.delete(self);
//# sourceMappingURL=redacted.js.map