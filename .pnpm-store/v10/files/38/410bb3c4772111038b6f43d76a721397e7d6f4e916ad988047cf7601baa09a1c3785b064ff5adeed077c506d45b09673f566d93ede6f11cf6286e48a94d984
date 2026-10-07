/**
 * @since 2.0.0
 */
import * as internal from "./internal/channel/upstreamPullRequest.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const UpstreamPullRequestTypeId: unique symbol = internal.UpstreamPullRequestTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type UpstreamPullRequestTypeId = typeof UpstreamPullRequestTypeId

/**
 * @since 2.0.0
 * @category models
 */
export type UpstreamPullRequest<A> = Pulled<A> | NoUpstream

/**
 * @since 2.0.0
 */
export declare namespace UpstreamPullRequest {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<out A> {
    readonly [UpstreamPullRequestTypeId]: {
      readonly _A: Types.Covariant<A>
    }
  }
}

/**
 * @since 2.0.0
 * @category models
 */
export interface Pulled<out A> extends UpstreamPullRequest.Variance<A> {
  readonly _tag: "Pulled"
  readonly value: A
}

/**
 * @since 2.0.0
 * @category models
 */
export interface NoUpstream extends UpstreamPullRequest.Variance<never> {
  readonly _tag: "NoUpstream"
  readonly activeDownstreamCount: number
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const Pulled: <A>(value: A) => UpstreamPullRequest<A> = internal.Pulled

/**
 * @since 2.0.0
 * @category constructors
 */
export const NoUpstream: (activeDownstreamCount: number) => UpstreamPullRequest<never> = internal.NoUpstream

/**
 * Returns `true` if the specified value is an `UpstreamPullRequest`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isUpstreamPullRequest: (u: unknown) => u is UpstreamPullRequest<unknown> = internal.isUpstreamPullRequest

/**
 * Returns `true` if the specified `UpstreamPullRequest` is a `Pulled`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isPulled: <A>(self: UpstreamPullRequest<A>) => self is Pulled<A> = internal.isPulled

/**
 * Returns `true` if the specified `UpstreamPullRequest` is a `NoUpstream`,
 * `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isNoUpstream: <A>(self: UpstreamPullRequest<A>) => self is NoUpstream = internal.isNoUpstream

/**
 * Folds an `UpstreamPullRequest<A>` into a value of type `Z`.
 *
 * @since 2.0.0
 * @category folding
 */
export const match: {
  /**
   * Folds an `UpstreamPullRequest<A>` into a value of type `Z`.
   *
   * @since 2.0.0
   * @category folding
   */
  <A, Z>(
   options: {
     readonly onPulled: (value: A) => Z
     readonly onNoUpstream: (activeDownstreamCount: number) => Z
   }
  ): (self: UpstreamPullRequest<A>) => Z
  /**
   * Folds an `UpstreamPullRequest<A>` into a value of type `Z`.
   *
   * @since 2.0.0
   * @category folding
   */
  <A, Z>(
   self: UpstreamPullRequest<A>,
   options: {
     readonly onPulled: (value: A) => Z
     readonly onNoUpstream: (activeDownstreamCount: number) => Z
   }
  ): Z
} = internal.match
