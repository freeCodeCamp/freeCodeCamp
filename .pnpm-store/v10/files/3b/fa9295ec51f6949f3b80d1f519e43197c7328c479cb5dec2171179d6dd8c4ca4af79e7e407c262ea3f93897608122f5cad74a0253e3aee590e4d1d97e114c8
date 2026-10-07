import * as Equal from "../Equal.js"
import { pipe } from "../Function.js"
import { globalValue } from "../GlobalValue.js"
import * as Hash from "../Hash.js"
import { NodeInspectSymbol } from "../Inspectable.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty } from "../Predicate.js"
import type * as Redacted from "../Redacted.js"

/** @internal */
const RedactedSymbolKey = "effect/Redacted"

/** @internal */
export const redactedRegistry = globalValue(
  "effect/Redacted/redactedRegistry",
  () => new WeakMap<Redacted.Redacted<any>, any>()
)

/** @internal */
export const RedactedTypeId: Redacted.RedactedTypeId = Symbol.for(
  RedactedSymbolKey
) as Redacted.RedactedTypeId

/** @internal */
export const proto = {
  [RedactedTypeId]: {
    _A: (_: never) => _
  },
  pipe() {
    return pipeArguments(this, arguments)
  },
  toString() {
    return "<redacted>"
  },
  toJSON() {
    return "<redacted>"
  },
  [NodeInspectSymbol]() {
    return "<redacted>"
  },
  [Hash.symbol]<T>(this: Redacted.Redacted<T>): number {
    return pipe(
      Hash.hash(RedactedSymbolKey),
      Hash.combine(Hash.hash(redactedRegistry.get(this))),
      Hash.cached(this)
    )
  },
  [Equal.symbol]<T>(this: Redacted.Redacted<T>, that: unknown): boolean {
    return isRedacted(that) && Equal.equals(redactedRegistry.get(this), redactedRegistry.get(that))
  }
}

/** @internal */
export const isRedacted = (u: unknown): u is Redacted.Redacted<unknown> => hasProperty(u, RedactedTypeId)

/** @internal */
export const make = <T>(value: T): Redacted.Redacted<T> => {
  const redacted = Object.create(proto)
  redactedRegistry.set(redacted, value)
  return redacted
}

/** @internal */
export const value = <T>(self: Redacted.Redacted<T>): T => {
  if (redactedRegistry.has(self)) {
    return redactedRegistry.get(self)
  } else {
    throw new Error("Unable to get redacted value")
  }
}

/** @internal */
export const unsafeWipe = <T>(self: Redacted.Redacted<T>): boolean => redactedRegistry.delete(self)
