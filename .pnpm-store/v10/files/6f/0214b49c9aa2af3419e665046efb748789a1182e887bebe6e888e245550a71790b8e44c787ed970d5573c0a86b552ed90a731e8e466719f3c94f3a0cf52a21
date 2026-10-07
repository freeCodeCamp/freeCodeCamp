/**
 * @since 2.0.0
 */
import * as internal from "./internal/channel/upstreamPullStrategy.js"
import type * as Option from "./Option.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const UpstreamPullStrategyTypeId: unique symbol = internal.UpstreamPullStrategyTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type UpstreamPullStrategyTypeId = typeof UpstreamPullStrategyTypeId

/**
 * @since 2.0.0
 * @category models
 */
export type UpstreamPullStrategy<A> = PullAfterNext<A> | PullAfterAllEnqueued<A>

/**
 * @since 2.0.0
 */
export declare namespace UpstreamPullStrategy {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<out A> {
    readonly [UpstreamPullStrategyTypeId]: {
      readonly _A: Types.Covariant<A>
    }
  }
}

/**
 * @since 2.0.0
 * @category models
 */
export interface PullAfterNext<out A> extends UpstreamPullStrategy.Variance<A> {
  readonly _tag: "PullAfterNext"
  readonly emitSeparator: Option.Option<A>
}

/**
 * @since 2.0.0
 * @category models
 */
export interface PullAfterAllEnqueued<out A> extends UpstreamPullStrategy.Variance<A> {
  readonly _tag: "PullAfterAllEnqueued"
  readonly emitSeparator: Option.Option<A>
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const PullAfterNext: <A>(emitSeparator: Option.Option<A>) => UpstreamPullStrategy<A> = internal.PullAfterNext

/**
 * @since 2.0.0
 * @category constructors
 */
export const PullAfterAllEnqueued: <A>(emitSeparator: Option.Option<A>) => UpstreamPullStrategy<A> =
  internal.PullAfterAllEnqueued

/**
 * Returns `true` if the specified value is an `UpstreamPullStrategy`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isUpstreamPullStrategy: (u: unknown) => u is UpstreamPullStrategy<unknown> =
  internal.isUpstreamPullStrategy

/**
 * Returns `true` if the specified `UpstreamPullStrategy` is a `PullAfterNext`,
 * `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isPullAfterNext: <A>(self: UpstreamPullStrategy<A>) => self is PullAfterNext<A> = internal.isPullAfterNext

/**
 * Returns `true` if the specified `UpstreamPullStrategy` is a
 * `PullAfterAllEnqueued`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isPullAfterAllEnqueued: <A>(self: UpstreamPullStrategy<A>) => self is PullAfterAllEnqueued<A> =
  internal.isPullAfterAllEnqueued

/**
 * Folds an `UpstreamPullStrategy<A>` into a value of type `Z`.
 *
 * @since 2.0.0
 * @category folding
 */
export const match: {
  /**
   * Folds an `UpstreamPullStrategy<A>` into a value of type `Z`.
   *
   * @since 2.0.0
   * @category folding
   */
  <A, Z>(
   options: {
     readonly onNext: (emitSeparator: Option.Option<A>) => Z
     readonly onAllEnqueued: (emitSeparator: Option.Option<A>) => Z
   }
  ): (self: UpstreamPullStrategy<A>) => Z
  /**
   * Folds an `UpstreamPullStrategy<A>` into a value of type `Z`.
   *
   * @since 2.0.0
   * @category folding
   */
  <A, Z>(
   self: UpstreamPullStrategy<A>,
   options: {
     readonly onNext: (emitSeparator: Option.Option<A>) => Z
     readonly onAllEnqueued: (emitSeparator: Option.Option<A>) => Z
   }
  ): Z
} = internal.match
