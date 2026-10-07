import type * as Encoding from "../../Encoding.js"
import { hasProperty, isString } from "../../Predicate.js"
import type { Mutable } from "../../Types.js"

/** @internal */
export const DecodeExceptionTypeId: Encoding.DecodeExceptionTypeId = Symbol.for(
  "effect/Encoding/errors/Decode"
) as Encoding.DecodeExceptionTypeId

/** @internal */
export const DecodeException = (input: string, message?: string): Encoding.DecodeException => {
  const out: Mutable<Encoding.DecodeException> = {
    _tag: "DecodeException",
    [DecodeExceptionTypeId]: DecodeExceptionTypeId,
    input
  }
  if (isString(message)) {
    out.message = message
  }
  return out
}

/** @internal */
export const isDecodeException = (u: unknown): u is Encoding.DecodeException => hasProperty(u, DecodeExceptionTypeId)

/** @internal */
export const EncodeExceptionTypeId: Encoding.EncodeExceptionTypeId = Symbol.for(
  "effect/Encoding/errors/Encode"
) as Encoding.EncodeExceptionTypeId

/** @internal */
export const EncodeException = (input: string, message?: string): Encoding.EncodeException => {
  const out: Mutable<Encoding.EncodeException> = {
    _tag: "EncodeException",
    [EncodeExceptionTypeId]: EncodeExceptionTypeId,
    input
  }
  if (isString(message)) {
    out.message = message
  }
  return out
}

/** @internal */
export const isEncodeException = (u: unknown): u is Encoding.EncodeException => hasProperty(u, EncodeExceptionTypeId)

/** @interal */
export const encoder = new TextEncoder()

/** @interal */
export const decoder = new TextDecoder()
