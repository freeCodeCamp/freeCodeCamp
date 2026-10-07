import type * as Effect from "../../Effect.js"
import type * as Either from "../../Either.js"
import type * as Exit from "../../Exit.js"
import type * as Fiber from "../../Fiber.js"
import { dual } from "../../Function.js"
import type * as MergeState from "../../MergeState.js"
import { hasProperty } from "../../Predicate.js"
import * as OpCodes from "../opCodes/channelMergeState.js"

/** @internal */
const MergeStateSymbolKey = "effect/ChannelMergeState"

/** @internal */
export const MergeStateTypeId: MergeState.MergeStateTypeId = Symbol.for(
  MergeStateSymbolKey
) as MergeState.MergeStateTypeId

/** @internal */
const proto = {
  [MergeStateTypeId]: MergeStateTypeId
}

/** @internal */
export const BothRunning = <Env, Err, Err1, Err2, Elem, Done, Done1, Done2>(
  left: Fiber.Fiber<Either.Either<Elem, Done>, Err>,
  right: Fiber.Fiber<Either.Either<Elem, Done1>, Err1>
): MergeState.MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_BOTH_RUNNING
  op.left = left
  op.right = right
  return op
}

/** @internal */
export const LeftDone = <Env, Err, Err1, Err2, Elem, Done, Done1, Done2>(
  f: (exit: Exit.Exit<Done1, Err1>) => Effect.Effect<Done2, Err2, Env>
): MergeState.MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_LEFT_DONE
  op.f = f
  return op
}

/** @internal */
export const RightDone = <Env, Err, Err1, Err2, Elem, Done, Done1, Done2>(
  f: (exit: Exit.Exit<Done, Err>) => Effect.Effect<Done2, Err2, Env>
): MergeState.MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_RIGHT_DONE
  op.f = f
  return op
}

/** @internal */
export const isMergeState = (
  u: unknown
): u is MergeState.MergeState<unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown> =>
  hasProperty(u, MergeStateTypeId)

/** @internal */
export const isBothRunning = <Env, Err, Err1, Err2, Elem, Done, Done1, Done2>(
  self: MergeState.MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>
): self is MergeState.BothRunning<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> => {
  return self._tag === OpCodes.OP_BOTH_RUNNING
}

/** @internal */
export const isLeftDone = <Env, Err, Err1, Err2, Elem, Done, Done1, Done2>(
  self: MergeState.MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>
): self is MergeState.LeftDone<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> => {
  return self._tag === OpCodes.OP_LEFT_DONE
}

/** @internal */
export const isRightDone = <Env, Err, Err1, Err2, Elem, Done, Done1, Done2>(
  self: MergeState.MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>
): self is MergeState.RightDone<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> => {
  return self._tag === OpCodes.OP_RIGHT_DONE
}

/** @internal */
export const match = dual<
  <Env, Err, Err1, Err2, Elem, Done, Done1, Done2, Z>(
    options: {
      readonly onBothRunning: (
        left: Fiber.Fiber<Either.Either<Elem, Done>, Err>,
        right: Fiber.Fiber<Either.Either<Elem, Done1>, Err1>
      ) => Z
      readonly onLeftDone: (f: (exit: Exit.Exit<Done1, Err1>) => Effect.Effect<Done2, Err2, Env>) => Z
      readonly onRightDone: (f: (exit: Exit.Exit<Done, Err>) => Effect.Effect<Done2, Err2, Env>) => Z
    }
  ) => (self: MergeState.MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>) => Z,
  <Env, Err, Err1, Err2, Elem, Done, Done1, Done2, Z>(
    self: MergeState.MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>,
    options: {
      readonly onBothRunning: (
        left: Fiber.Fiber<Either.Either<Elem, Done>, Err>,
        right: Fiber.Fiber<Either.Either<Elem, Done1>, Err1>
      ) => Z
      readonly onLeftDone: (f: (exit: Exit.Exit<Done1, Err1>) => Effect.Effect<Done2, Err2, Env>) => Z
      readonly onRightDone: (f: (exit: Exit.Exit<Done, Err>) => Effect.Effect<Done2, Err2, Env>) => Z
    }
  ) => Z
>(2, (
  self,
  { onBothRunning, onLeftDone, onRightDone }
) => {
  switch (self._tag) {
    case OpCodes.OP_BOTH_RUNNING: {
      return onBothRunning(self.left, self.right)
    }
    case OpCodes.OP_LEFT_DONE: {
      return onLeftDone(self.f)
    }
    case OpCodes.OP_RIGHT_DONE: {
      return onRightDone(self.f)
    }
  }
})
