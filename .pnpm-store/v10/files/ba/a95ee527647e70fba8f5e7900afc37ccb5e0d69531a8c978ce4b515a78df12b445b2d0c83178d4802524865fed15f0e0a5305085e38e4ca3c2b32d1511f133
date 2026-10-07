import * as Equal from "../../Equal.js"
import type * as FiberId from "../../FiberId.js"
import { pipe } from "../../Function.js"
import * as Hash from "../../Hash.js"
import { hasProperty } from "../../Predicate.js"
import type * as Types from "../../Types.js"
import * as OpCodes from "./opCodes/tExit.js"

/** @internal */
const TExitSymbolKey = "effect/TExit"

/** @internal */
export const TExitTypeId = Symbol.for(TExitSymbolKey)

/** @internal */
export type TExitTypeId = typeof TExitTypeId

/** @internal */
export type TExit<A, E = never> = Fail<E> | Die | Interrupt | Succeed<A> | Retry

/** @internal */
export declare namespace TExit {
  /** @internal */
  export interface Variance<out A, out E> {
    readonly [TExitTypeId]: {
      readonly _A: Types.Covariant<A>
      readonly _E: Types.Covariant<E>
    }
  }
}

const variance = {
  /* c8 ignore next */
  _A: (_: never) => _,
  /* c8 ignore next */
  _E: (_: never) => _
}

/** @internal */
export interface Fail<out E> extends TExit.Variance<never, E>, Equal.Equal {
  readonly _tag: OpCodes.OP_FAIL
  readonly error: E
}

/** @internal */
export interface Die extends TExit.Variance<never, never>, Equal.Equal {
  readonly _tag: OpCodes.OP_DIE
  readonly defect: unknown
}

/** @internal */
export interface Interrupt extends TExit.Variance<never, never>, Equal.Equal {
  readonly _tag: OpCodes.OP_INTERRUPT
  readonly fiberId: FiberId.FiberId
}

/** @internal */
export interface Succeed<out A> extends TExit.Variance<A, never>, Equal.Equal {
  readonly _tag: OpCodes.OP_SUCCEED
  readonly value: A
}

/** @internal */
export interface Retry extends TExit.Variance<never, never>, Equal.Equal {
  readonly _tag: OpCodes.OP_RETRY
}

/** @internal */
export const isExit = (u: unknown): u is TExit<unknown, unknown> => hasProperty(u, TExitTypeId)

/** @internal */
export const isFail = <A, E>(self: TExit<A, E>): self is Fail<E> => {
  return self._tag === OpCodes.OP_FAIL
}

/** @internal */
export const isDie = <A, E>(self: TExit<A, E>): self is Die => {
  return self._tag === OpCodes.OP_DIE
}

/** @internal */
export const isInterrupt = <A, E>(self: TExit<A, E>): self is Interrupt => {
  return self._tag === OpCodes.OP_INTERRUPT
}

/** @internal */
export const isSuccess = <A, E>(self: TExit<A, E>): self is Succeed<A> => {
  return self._tag === OpCodes.OP_SUCCEED
}

/** @internal */
export const isRetry = <A, E>(self: TExit<A, E>): self is Retry => {
  return self._tag === OpCodes.OP_RETRY
}

/** @internal */
export const fail = <E>(error: E): TExit<never, E> => ({
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_FAIL,
  error,
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(TExitSymbolKey),
      Hash.combine(Hash.hash(OpCodes.OP_FAIL)),
      Hash.combine(Hash.hash(error)),
      Hash.cached(this)
    )
  },
  [Equal.symbol](that: unknown): boolean {
    return isExit(that) && that._tag === OpCodes.OP_FAIL && Equal.equals(error, that.error)
  }
})

/** @internal */
export const die = (defect: unknown): TExit<never> => ({
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_DIE,
  defect,
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(TExitSymbolKey),
      Hash.combine(Hash.hash(OpCodes.OP_DIE)),
      Hash.combine(Hash.hash(defect)),
      Hash.cached(this)
    )
  },
  [Equal.symbol](that: unknown): boolean {
    return isExit(that) && that._tag === OpCodes.OP_DIE && Equal.equals(defect, that.defect)
  }
})

/** @internal */
export const interrupt = (fiberId: FiberId.FiberId): TExit<never> => ({
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_INTERRUPT,
  fiberId,
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(TExitSymbolKey),
      Hash.combine(Hash.hash(OpCodes.OP_INTERRUPT)),
      Hash.combine(Hash.hash(fiberId)),
      Hash.cached(this)
    )
  },
  [Equal.symbol](that: unknown): boolean {
    return isExit(that) && that._tag === OpCodes.OP_INTERRUPT && Equal.equals(fiberId, that.fiberId)
  }
})

/** @internal */
export const succeed = <A>(value: A): TExit<A> => ({
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_SUCCEED,
  value,
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(TExitSymbolKey),
      Hash.combine(Hash.hash(OpCodes.OP_SUCCEED)),
      Hash.combine(Hash.hash(value)),
      Hash.cached(this)
    )
  },
  [Equal.symbol](that: unknown): boolean {
    return isExit(that) && that._tag === OpCodes.OP_SUCCEED && Equal.equals(value, that.value)
  }
})

const retryHash = pipe(
  Hash.hash(TExitSymbolKey),
  Hash.combine(Hash.hash(OpCodes.OP_RETRY)),
  Hash.combine(Hash.hash("retry"))
)

/** @internal */
export const retry: TExit<never> = {
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_RETRY,
  [Hash.symbol](): number {
    return retryHash
  },
  [Equal.symbol](that: unknown): boolean {
    return isExit(that) && isRetry(that)
  }
}

const void_: TExit<void> = succeed(undefined)
export {
  /** @internal */
  void_ as void
}
