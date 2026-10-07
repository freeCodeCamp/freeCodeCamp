/**
 * @since 2.0.0
 */
import type { LazyArg } from "./Function.js";
/**
 * Describes a strategy for evaluating multiple effects, potentially in
 * parallel.
 *
 * There are 3 possible execution strategies: `Sequential`, `Parallel`,
 * `ParallelN`.
 *
 * @since 2.0.0
 * @category models
 */
export type ExecutionStrategy = Sequential | Parallel | ParallelN;
/**
 * Execute effects sequentially.
 *
 * @since 2.0.0
 * @category models
 */
export interface Sequential {
    readonly _tag: "Sequential";
}
/**
 * Execute effects in parallel.
 *
 * @since 2.0.0
 * @category models
 */
export interface Parallel {
    readonly _tag: "Parallel";
}
/**
 * Execute effects in parallel, up to the specified number of concurrent fibers.
 *
 * @since 2.0.0
 * @category models
 */
export interface ParallelN {
    readonly _tag: "ParallelN";
    readonly parallelism: number;
}
/**
 * Execute effects sequentially.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const sequential: ExecutionStrategy;
/**
 * Execute effects in parallel.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const parallel: ExecutionStrategy;
/**
 * Execute effects in parallel, up to the specified number of concurrent fibers.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const parallelN: (parallelism: number) => ExecutionStrategy;
/**
 * Returns `true` if the specified `ExecutionStrategy` is an instance of
 * `Sequential`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isSequential: (self: ExecutionStrategy) => self is Sequential;
/**
 * Returns `true` if the specified `ExecutionStrategy` is an instance of
 * `Sequential`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isParallel: (self: ExecutionStrategy) => self is Parallel;
/**
 * Returns `true` if the specified `ExecutionStrategy` is an instance of
 * `Sequential`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isParallelN: (self: ExecutionStrategy) => self is ParallelN;
/**
 * Folds over the specified `ExecutionStrategy` using the provided case
 * functions.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const match: {
    /**
     * Folds over the specified `ExecutionStrategy` using the provided case
     * functions.
     *
     * @since 2.0.0
     * @category folding
     */
    <A>(options: {
        readonly onSequential: LazyArg<A>;
        readonly onParallel: LazyArg<A>;
        readonly onParallelN: (n: number) => A;
    }): (self: ExecutionStrategy) => A;
    /**
     * Folds over the specified `ExecutionStrategy` using the provided case
     * functions.
     *
     * @since 2.0.0
     * @category folding
     */
    <A>(self: ExecutionStrategy, options: {
        readonly onSequential: LazyArg<A>;
        readonly onParallel: LazyArg<A>;
        readonly onParallelN: (n: number) => A;
    }): A;
};
//# sourceMappingURL=ExecutionStrategy.d.ts.map