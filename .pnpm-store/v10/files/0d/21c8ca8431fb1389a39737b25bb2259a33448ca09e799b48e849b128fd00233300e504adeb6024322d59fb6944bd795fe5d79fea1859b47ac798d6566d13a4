/**
 * @since 2.0.0
 * @category symbols
 */
export declare const MergeStrategyTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type MergeStrategyTypeId = typeof MergeStrategyTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export type MergeStrategy = BackPressure | BufferSliding;
/**
 * @since 2.0.0
 */
export declare namespace MergeStrategy {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Proto {
        readonly [MergeStrategyTypeId]: MergeStrategyTypeId;
    }
}
/**
 * @since 2.0.0
 * @category models
 */
export interface BackPressure extends MergeStrategy.Proto {
    readonly _tag: "BackPressure";
}
/**
 * @since 2.0.0
 * @category models
 */
export interface BufferSliding extends MergeStrategy.Proto {
    readonly _tag: "BufferSliding";
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const BackPressure: (_: void) => MergeStrategy;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const BufferSliding: (_: void) => MergeStrategy;
/**
 * Returns `true` if the specified value is a `MergeStrategy`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isMergeStrategy: (u: unknown) => u is MergeStrategy;
/**
 * Returns `true` if the specified `MergeStrategy` is a `BackPressure`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isBackPressure: (self: MergeStrategy) => self is BackPressure;
/**
 * Returns `true` if the specified `MergeStrategy` is a `BufferSliding`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isBufferSliding: (self: MergeStrategy) => self is BufferSliding;
/**
 * Folds an `MergeStrategy` into a value of type `A`.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const match: {
    /**
     * Folds an `MergeStrategy` into a value of type `A`.
     *
     * @since 2.0.0
     * @category folding
     */
    <A>(options: {
        readonly onBackPressure: () => A;
        readonly onBufferSliding: () => A;
    }): (self: MergeStrategy) => A;
    /**
     * Folds an `MergeStrategy` into a value of type `A`.
     *
     * @since 2.0.0
     * @category folding
     */
    <A>(self: MergeStrategy, options: {
        readonly onBackPressure: () => A;
        readonly onBufferSliding: () => A;
    }): A;
};
//# sourceMappingURL=MergeStrategy.d.ts.map