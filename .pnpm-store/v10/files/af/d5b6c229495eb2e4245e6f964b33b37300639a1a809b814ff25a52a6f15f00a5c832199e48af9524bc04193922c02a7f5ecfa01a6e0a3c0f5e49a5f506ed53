/**
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js"
import type * as Either from "./Either.js"
import type * as Exit from "./Exit.js"
import type * as Fiber from "./Fiber.js"
import * as internal from "./internal/channel/mergeState.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const MergeStateTypeId: unique symbol = internal.MergeStateTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type MergeStateTypeId = typeof MergeStateTypeId

/**
 * @since 2.0.0
 * @category models
 */
export type MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> =
  | BothRunning<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>
  | LeftDone<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>
  | RightDone<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>

/**
 * @since 2.0.0
 */
export declare namespace MergeState {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Proto {
    readonly [MergeStateTypeId]: MergeStateTypeId
  }
}

/**
 * @since 2.0.0
 * @category models
 */
export interface BothRunning<_Env, out Err, out Err1, _Err2, out Elem, out Done, out Done1, _Done2>
  extends MergeState.Proto
{
  readonly _tag: "BothRunning"
  readonly left: Fiber.Fiber<Either.Either<Elem, Done>, Err>
  readonly right: Fiber.Fiber<Either.Either<Elem, Done1>, Err1>
}

/**
 * @since 2.0.0
 * @category models
 */
export interface LeftDone<out Env, _Err, in Err1, out Err2, _Elem, _Done, in Done1, out Done2>
  extends MergeState.Proto
{
  readonly _tag: "LeftDone"
  f(exit: Exit.Exit<Done1, Err1>): Effect.Effect<Done2, Err2, Env>
}

/**
 * @since 2.0.0
 * @category models
 */
export interface RightDone<out Env, in Err, _Err1, out Err2, _Elem, in Done, _Done1, out Done2>
  extends MergeState.Proto
{
  readonly _tag: "RightDone"
  f(exit: Exit.Exit<Done, Err>): Effect.Effect<Done2, Err2, Env>
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const BothRunning: <Env, Err, Err1, Err2, Elem, Done, Done1, Done2>(
  left: Fiber.Fiber<Either.Either<Elem, Done>, Err>,
  right: Fiber.Fiber<Either.Either<Elem, Done1>, Err1>
) => MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> = internal.BothRunning

/**
 * @since 2.0.0
 * @category constructors
 */
export const LeftDone: <Env, Err, Err1, Err2, Elem, Done, Done1, Done2>(
  f: (exit: Exit.Exit<Done1, Err1>) => Effect.Effect<Done2, Err2, Env>
) => MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> = internal.LeftDone

/**
 * @since 2.0.0
 * @category constructors
 */
export const RightDone: <Env, Err, Err1, Err2, Elem, Done, Done1, Done2>(
  f: (exit: Exit.Exit<Done, Err>) => Effect.Effect<Done2, Err2, Env>
) => MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> = internal.RightDone

/**
 * Returns `true` if the specified value is a `MergeState`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isMergeState: (
  u: unknown
) => u is MergeState<unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown> = internal.isMergeState

/**
 * Returns `true` if the specified `MergeState` is a `BothRunning`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isBothRunning: <Env, Err, Err1, Err2, Elem, Done, Done1, Done2>(
  self: MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>
) => self is BothRunning<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> = internal.isBothRunning

/**
 * Returns `true` if the specified `MergeState` is a `LeftDone`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isLeftDone: <Env, Err, Err1, Err2, Elem, Done, Done1, Done2>(
  self: MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>
) => self is LeftDone<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> = internal.isLeftDone

/**
 * Returns `true` if the specified `MergeState` is a `RightDone`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isRightDone: <Env, Err, Err1, Err2, Elem, Done, Done1, Done2>(
  self: MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>
) => self is RightDone<Env, Err, Err1, Err2, Elem, Done, Done1, Done2> = internal.isRightDone

/**
 * @since 2.0.0
 * @category folding
 */
export const match: {
  /**
   * @since 2.0.0
   * @category folding
   */
  <Env, Err, Err1, Err2, Elem, Done, Done1, Done2, Z>(
    options: {
      readonly onBothRunning: (
        left: Fiber.Fiber<Either.Either<Elem, Done>, Err>,
        right: Fiber.Fiber<Either.Either<Elem, Done1>, Err1>
      ) => Z
      readonly onLeftDone: (f: (exit: Exit.Exit<Done1, Err1>) => Effect.Effect<Done2, Err2, Env>) => Z
      readonly onRightDone: (f: (exit: Exit.Exit<Done, Err>) => Effect.Effect<Done2, Err2, Env>) => Z
    }
  ): (self: MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>) => Z
  /**
   * @since 2.0.0
   * @category folding
   */
  <Env, Err, Err1, Err2, Elem, Done, Done1, Done2, Z>(
    self: MergeState<Env, Err, Err1, Err2, Elem, Done, Done1, Done2>,
    options: {
      readonly onBothRunning: (
        left: Fiber.Fiber<Either.Either<Elem, Done>, Err>,
        right: Fiber.Fiber<Either.Either<Elem, Done1>, Err1>
      ) => Z
      readonly onLeftDone: (f: (exit: Exit.Exit<Done1, Err1>) => Effect.Effect<Done2, Err2, Env>) => Z
      readonly onRightDone: (f: (exit: Exit.Exit<Done, Err>) => Effect.Effect<Done2, Err2, Env>) => Z
    }
  ): Z
} = internal.match
