/**
 * @since 2.0.0
 * @category models
 */
export type HaltStrategy = Left | Right | Both | Either;
/**
 * @since 2.0.0
 * @category models
 */
export type HaltStrategyInput = HaltStrategy | "left" | "right" | "both" | "either";
/**
 * @since 2.0.0
 * @category models
 */
export interface Left {
    readonly _tag: "Left";
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Right {
    readonly _tag: "Right";
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Both {
    readonly _tag: "Both";
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Either {
    readonly _tag: "Either";
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const Left: HaltStrategy;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const Right: HaltStrategy;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const Both: HaltStrategy;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const Either: HaltStrategy;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const fromInput: (input: HaltStrategyInput) => HaltStrategy;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isLeft: (self: HaltStrategy) => self is Left;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isRight: (self: HaltStrategy) => self is Right;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isBoth: (self: HaltStrategy) => self is Both;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isEither: (self: HaltStrategy) => self is Either;
/**
 * Folds over the specified `HaltStrategy` using the provided case functions.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const match: {
    /**
     * Folds over the specified `HaltStrategy` using the provided case functions.
     *
     * @since 2.0.0
     * @category folding
     */
    <Z>(options: {
        readonly onLeft: () => Z;
        readonly onRight: () => Z;
        readonly onBoth: () => Z;
        readonly onEither: () => Z;
    }): (self: HaltStrategy) => Z;
    /**
     * Folds over the specified `HaltStrategy` using the provided case functions.
     *
     * @since 2.0.0
     * @category folding
     */
    <Z>(self: HaltStrategy, options: {
        readonly onLeft: () => Z;
        readonly onRight: () => Z;
        readonly onBoth: () => Z;
        readonly onEither: () => Z;
    }): Z;
};
//# sourceMappingURL=StreamHaltStrategy.d.ts.map