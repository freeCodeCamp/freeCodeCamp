/**
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js";
import type * as Exit from "./Exit.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const MergeDecisionTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type MergeDecisionTypeId = typeof MergeDecisionTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface MergeDecision<out R, in E0, in Z0, out E, out Z> extends MergeDecision.Variance<R, E0, Z0, E, Z> {
}
/**
 * @since 2.0.0
 */
export declare namespace MergeDecision {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<out R, in E0, in Z0, out E, out Z> {
        readonly [MergeDecisionTypeId]: {
            _R: Types.Covariant<R>;
            _E0: Types.Contravariant<E0>;
            _Z0: Types.Contravariant<Z0>;
            _E: Types.Covariant<E>;
            _Z: Types.Covariant<Z>;
        };
    }
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const Done: <Z, E, R>(effect: Effect.Effect<Z, E, R>) => MergeDecision<R, unknown, unknown, E, Z>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const Await: <R, E0, Z0, E, Z>(f: (exit: Exit.Exit<Z0, E0>) => Effect.Effect<Z, E, R>) => MergeDecision<R, E0, Z0, E, Z>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const AwaitConst: <Z, E, R>(effect: Effect.Effect<Z, E, R>) => MergeDecision<R, unknown, unknown, E, Z>;
/**
 * Returns `true` if the specified value is a `MergeDecision`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isMergeDecision: (u: unknown) => u is MergeDecision<unknown, unknown, unknown, unknown, unknown>;
/**
 * @since 2.0.0
 * @category folding
 */
export declare const match: {
    /**
     * @since 2.0.0
     * @category folding
     */
    <R, E0, Z0, E, Z, Z2>(options: {
        readonly onDone: (effect: Effect.Effect<Z, E, R>) => Z2;
        readonly onAwait: (f: (exit: Exit.Exit<Z0, E0>) => Effect.Effect<Z, E, R>) => Z2;
    }): (self: MergeDecision<R, E0, Z0, E, Z>) => Z2;
    /**
     * @since 2.0.0
     * @category folding
     */
    <R, E0, Z0, E, Z, Z2>(self: MergeDecision<R, E0, Z0, E, Z>, options: {
        readonly onDone: (effect: Effect.Effect<Z, E, R>) => Z2;
        readonly onAwait: (f: (exit: Exit.Exit<Z0, E0>) => Effect.Effect<Z, E, R>) => Z2;
    }): Z2;
};
//# sourceMappingURL=MergeDecision.d.ts.map