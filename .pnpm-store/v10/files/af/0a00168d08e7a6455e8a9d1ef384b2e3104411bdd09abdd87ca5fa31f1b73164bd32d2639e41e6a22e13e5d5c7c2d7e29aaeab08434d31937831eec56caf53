import * as Arr from "../Array.js"
import { hasProperty } from "../Predicate.js"
import type * as Secret from "../Secret.js"
import * as redacted_ from "./redacted.js"

/**
 * @internal
 * @deprecated
 */
const SecretSymbolKey = "effect/Secret"

/**
 * @internal
 * @deprecated
 */
export const SecretTypeId: Secret.SecretTypeId = Symbol.for(
  SecretSymbolKey
) as Secret.SecretTypeId

/**
 * @internal
 * @deprecated
 */
export const isSecret = (u: unknown): u is Secret.Secret => hasProperty(u, SecretTypeId)

const SecretProto = {
  ...redacted_.proto,
  [SecretTypeId]: SecretTypeId
}

/**
 * @internal
 * @deprecated
 */
export const make = (bytes: Array<number>): Secret.Secret => {
  const secret = Object.create(SecretProto)
  Object.defineProperty(secret, "toString", {
    enumerable: false,
    value() {
      return "Secret(<redacted>)"
    }
  })
  Object.defineProperty(secret, "toJSON", {
    enumerable: false,
    value() {
      return "<redacted>"
    }
  })
  Object.defineProperty(secret, "raw", {
    enumerable: false,
    value: bytes
  })
  redacted_.redactedRegistry.set(secret, bytes.map((byte) => String.fromCharCode(byte)).join(""))
  return secret
}

/**
 * @internal
 * @deprecated
 */
export const fromIterable = (iterable: Iterable<string>): Secret.Secret =>
  make(Arr.fromIterable(iterable).map((char) => char.charCodeAt(0)))

/**
 * @internal
 * @deprecated
 */
export const fromString = (text: string): Secret.Secret => {
  return make(text.split("").map((char) => char.charCodeAt(0)))
}

/**
 * @internal
 * @deprecated
 */
export const value = (self: Secret.Secret): string => {
  return self.raw.map((byte) => String.fromCharCode(byte)).join("")
}

/**
 * @internal
 * @deprecated
 */
export const unsafeWipe = (self: Secret.Secret): void => {
  for (let i = 0; i < self.raw.length; i++) {
    self.raw[i] = 0
  }
  redacted_.redactedRegistry.delete(self)
}
