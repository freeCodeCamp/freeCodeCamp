import type * as Option from "./Option.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const UpstreamPullStrategyTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type UpstreamPullStrategyTypeId = typeof UpstreamPullStrategyTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export type UpstreamPullStrategy<A> = PullAfterNext<A> | PullAfterAllEnqueued<A>;
/**
 * @since 2.0.0
 */
export declare namespace UpstreamPullStrategy {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<out A> {
        readonly [UpstreamPullStrategyTypeId]: {
            readonly _A: Types.Covariant<A>;
        };
    }
}
/**
 * @since 2.0.0
 * @category models
 */
export interface PullAfterNext<out A> extends UpstreamPullStrategy.Variance<A> {
    readonly _tag: "PullAfterNext";
    readonly emitSeparator: Option.Option<A>;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface PullAfterAllEnqueued<out A> extends UpstreamPullStrategy.Variance<A> {
    readonly _tag: "PullAfterAllEnqueued";
    readonly emitSeparator: Option.Option<A>;
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const PullAfterNext: <A>(emitSeparator: Option.Option<A>) => UpstreamPullStrategy<A>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const PullAfterAllEnqueued: <A>(emitSeparator: Option.Option<A>) => UpstreamPullStrategy<A>;
/**
 * Returns `true` if the specified value is an `UpstreamPullStrategy`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isUpstreamPullStrategy: (u: unknown) => u is UpstreamPullStrategy<unknown>;
/**
 * Returns `true` if the specified `UpstreamPullStrategy` is a `PullAfterNext`,
 * `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isPullAfterNext: <A>(self: UpstreamPullStrategy<A>) => self is PullAfterNext<A>;
/**
 * Returns `true` if the specified `UpstreamPullStrategy` is a
 * `PullAfterAllEnqueued`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isPullAfterAllEnqueued: <A>(self: UpstreamPullStrategy<A>) => self is PullAfterAllEnqueued<A>;
/**
 * Folds an `UpstreamPullStrategy<A>` into a value of type `Z`.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const match: {
    /**
     * Folds an `UpstreamPullStrategy<A>` into a value of type `Z`.
     *
     * @since 2.0.0
     * @category folding
     */
    <A, Z>(options: {
        readonly onNext: (emitSeparator: Option.Option<A>) => Z;
        readonly onAllEnqueued: (emitSeparator: Option.Option<A>) => Z;
    }): (self: UpstreamPullStrategy<A>) => Z;
    /**
     * Folds an `UpstreamPullStrategy<A>` into a value of type `Z`.
     *
     * @since 2.0.0
     * @category folding
     */
    <A, Z>(self: UpstreamPullStrategy<A>, options: {
        readonly onNext: (emitSeparator: Option.Option<A>) => Z;
        readonly onAllEnqueued: (emitSeparator: Option.Option<A>) => Z;
    }): Z;
};
//# sourceMappingURL=UpstreamPullStrategy.d.ts.map