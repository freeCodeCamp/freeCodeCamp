/**
 * @since 2.0.0
 * @category symbols
 */
export declare const ChildExecutorDecisionTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type ChildExecutorDecisionTypeId = typeof ChildExecutorDecisionTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export type ChildExecutorDecision = Continue | Close | Yield;
/**
 * @since 2.0.0
 */
export declare namespace ChildExecutorDecision {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Proto {
        readonly [ChildExecutorDecisionTypeId]: ChildExecutorDecisionTypeId;
    }
}
/**
 * Continue executing the current substream
 *
 * @since 2.0.0
 * @category models
 */
export interface Continue extends ChildExecutorDecision.Proto {
    readonly _tag: "Continue";
}
/**
 * Close the current substream with a given value and pass execution to the
 * next substream
 *
 * @since 2.0.0
 * @category models
 */
export interface Close extends ChildExecutorDecision.Proto {
    readonly _tag: "Close";
    readonly value: unknown;
}
/**
 * Pass execution to the next substream. This either pulls a new element
 * from upstream, or yields to an already created active substream.
 *
 * @since 2.0.0
 * @category models
 */
export interface Yield extends ChildExecutorDecision.Proto {
    readonly _tag: "Yield";
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const Continue: (_: void) => ChildExecutorDecision;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const Close: (value: unknown) => ChildExecutorDecision;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const Yield: (_: void) => ChildExecutorDecision;
/**
 * Returns `true` if the specified value is a `ChildExecutorDecision`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isChildExecutorDecision: (u: unknown) => u is ChildExecutorDecision;
/**
 * Returns `true` if the specified `ChildExecutorDecision` is a `Continue`,
 * `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isContinue: (self: ChildExecutorDecision) => self is Continue;
/**
 * Returns `true` if the specified `ChildExecutorDecision` is a `Close`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isClose: (self: ChildExecutorDecision) => self is Close;
/**
 * Returns `true` if the specified `ChildExecutorDecision` is a `Yield`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isYield: (self: ChildExecutorDecision) => self is Yield;
/**
 * Folds over a `ChildExecutorDecision` to produce a value of type `A`.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const match: {
    /**
     * Folds over a `ChildExecutorDecision` to produce a value of type `A`.
     *
     * @since 2.0.0
     * @category folding
     */
    <A>(options: {
        readonly onContinue: () => A;
        readonly onClose: (value: unknown) => A;
        readonly onYield: () => A;
    }): (self: ChildExecutorDecision) => A;
    /**
     * Folds over a `ChildExecutorDecision` to produce a value of type `A`.
     *
     * @since 2.0.0
     * @category folding
     */
    <A>(self: ChildExecutorDecision, options: {
        readonly onContinue: () => A;
        readonly onClose: (value: unknown) => A;
        readonly onYield: () => A;
    }): A;
};
//# sourceMappingURL=ChildExecutorDecision.d.ts.map