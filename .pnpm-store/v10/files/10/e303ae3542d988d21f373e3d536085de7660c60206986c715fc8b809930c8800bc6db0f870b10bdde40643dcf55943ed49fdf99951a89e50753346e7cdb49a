import type * as Deferred from "../Deferred.js"
import type * as Effect from "../Effect.js"
import * as OpCodes from "./opCodes/deferred.js"

/** @internal */
const DeferredSymbolKey = "effect/Deferred"

/** @internal */
export const DeferredTypeId: Deferred.DeferredTypeId = Symbol.for(
  DeferredSymbolKey
) as Deferred.DeferredTypeId

/** @internal */
export const deferredVariance = {
  /* c8 ignore next */
  _E: (_: any) => _,
  /* c8 ignore next */
  _A: (_: any) => _
}

/** @internal */
export type State</* in out */ A, /* in out */ E> = Pending<A, E> | Done<A, E>

/** @internal */
export interface Pending<in A, in E> {
  readonly _tag: "Pending"
  readonly joiners: Array<(effect: Effect.Effect<A, E>) => void>
}

/** @internal */
export interface Done<out A, out E> {
  readonly _tag: "Done"
  readonly effect: Effect.Effect<A, E>
}

/** @internal */
export const pending = <A, E>(
  joiners: Array<(effect: Effect.Effect<A, E>) => void>
): State<A, E> => {
  return { _tag: OpCodes.OP_STATE_PENDING, joiners }
}

/** @internal */
export const done = <A, E>(effect: Effect.Effect<A, E>): State<A, E> => {
  return { _tag: OpCodes.OP_STATE_DONE, effect }
}
