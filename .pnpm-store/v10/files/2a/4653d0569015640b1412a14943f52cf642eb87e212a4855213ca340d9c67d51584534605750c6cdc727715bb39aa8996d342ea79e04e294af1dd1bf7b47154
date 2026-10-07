import type * as Effect from "../../Effect.js"
import type * as Exit from "../../Exit.js"
import { dual } from "../../Function.js"
import type * as MergeDecision from "../../MergeDecision.js"
import { hasProperty } from "../../Predicate.js"
import * as OpCodes from "../opCodes/channelMergeDecision.js"

/** @internal */
const MergeDecisionSymbolKey = "effect/ChannelMergeDecision"

/** @internal */
export const MergeDecisionTypeId: MergeDecision.MergeDecisionTypeId = Symbol.for(
  MergeDecisionSymbolKey
) as MergeDecision.MergeDecisionTypeId

/** @internal */
const proto = {
  [MergeDecisionTypeId]: {
    _R: (_: never) => _,
    _E0: (_: unknown) => _,
    _Z0: (_: unknown) => _,
    _E: (_: never) => _,
    _Z: (_: never) => _
  }
}

/** @internal */
export type Primitive =
  | Done
  | Await

/** @internal */
export type Op<Tag extends string, Body = {}> =
  & MergeDecision.MergeDecision<never, unknown, unknown, never, never>
  & Body
  & {
    readonly _tag: Tag
  }

/** @internal */
export interface Done extends
  Op<OpCodes.OP_DONE, {
    readonly effect: Effect.Effect<never>
  }>
{}

/** @internal */
export interface Await extends
  Op<OpCodes.OP_AWAIT, {
    f(exit: Exit.Exit<unknown, unknown>): Effect.Effect<never>
  }>
{}

/** @internal */
export const Done = <Z, E, R>(
  effect: Effect.Effect<Z, E, R>
): MergeDecision.MergeDecision<R, unknown, unknown, E, Z> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_DONE
  op.effect = effect
  return op
}

/** @internal */
export const Await = <R, E0, Z0, E, Z>(
  f: (exit: Exit.Exit<Z0, E0>) => Effect.Effect<Z, E, R>
): MergeDecision.MergeDecision<R, E0, Z0, E, Z> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_AWAIT
  op.f = f
  return op
}

/** @internal */
export const AwaitConst = <Z, E, R>(
  effect: Effect.Effect<Z, E, R>
): MergeDecision.MergeDecision<R, unknown, unknown, E, Z> => Await(() => effect)

/** @internal */
export const isMergeDecision = (
  u: unknown
): u is MergeDecision.MergeDecision<unknown, unknown, unknown, unknown, unknown> => hasProperty(u, MergeDecisionTypeId)

/** @internal */
export const match = dual<
  <R, E0, Z0, E, Z, Z2>(
    options: {
      readonly onDone: (effect: Effect.Effect<Z, E, R>) => Z2
      readonly onAwait: (f: (exit: Exit.Exit<Z0, E0>) => Effect.Effect<Z, E, R>) => Z2
    }
  ) => (self: MergeDecision.MergeDecision<R, E0, Z0, E, Z>) => Z2,
  <R, E0, Z0, E, Z, Z2>(
    self: MergeDecision.MergeDecision<R, E0, Z0, E, Z>,
    options: {
      readonly onDone: (effect: Effect.Effect<Z, E, R>) => Z2
      readonly onAwait: (f: (exit: Exit.Exit<Z0, E0>) => Effect.Effect<Z, E, R>) => Z2
    }
  ) => Z2
>(2, <R, E0, Z0, E, Z, Z2>(
  self: MergeDecision.MergeDecision<R, E0, Z0, E, Z>,
  { onAwait, onDone }: {
    readonly onDone: (effect: Effect.Effect<Z, E, R>) => Z2
    readonly onAwait: (f: (exit: Exit.Exit<Z0, E0>) => Effect.Effect<Z, E, R>) => Z2
  }
): Z2 => {
  const op = self as Primitive
  switch (op._tag) {
    case OpCodes.OP_DONE:
      return onDone(op.effect)
    case OpCodes.OP_AWAIT:
      return onAwait(op.f)
  }
})
