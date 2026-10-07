/**
 * @since 2.0.0
 */
import type * as Either from "./Either.js";
import type * as Option from "./Option.js";
import type * as STM from "./STM.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const TDeferredTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type TDeferredTypeId = typeof TDeferredTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface TDeferred<in out A, in out E = never> extends TDeferred.Variance<A, E> {
}
/**
 * @since 2.0.0
 */
export declare namespace TDeferred {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<in out A, in out E> {
        readonly [TDeferredTypeId]: {
            readonly _A: Types.Invariant<A>;
            readonly _E: Types.Invariant<E>;
        };
    }
}
declare const _await: <A, E>(self: TDeferred<A, E>) => STM.STM<A, E>;
export { 
/**
 * @since 2.0.0
 * @category getters
 */
_await as await };
/**
 * @since 2.0.0
 * @category mutations
 */
export declare const done: {
    /**
     * @since 2.0.0
     * @category mutations
     */
    <A, E>(either: Either.Either<A, E>): (self: TDeferred<A, E>) => STM.STM<boolean>;
    /**
     * @since 2.0.0
     * @category mutations
     */
    <A, E>(self: TDeferred<A, E>, either: Either.Either<A, E>): STM.STM<boolean>;
};
/**
 * @since 2.0.0
 * @category mutations
 */
export declare const fail: {
    /**
     * @since 2.0.0
     * @category mutations
     */
    <E>(error: E): <A>(self: TDeferred<A, E>) => STM.STM<boolean>;
    /**
     * @since 2.0.0
     * @category mutations
     */
    <A, E>(self: TDeferred<A, E>, error: E): STM.STM<boolean>;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <A, E = never>() => STM.STM<TDeferred<A, E>>;
/**
 * @since 2.0.0
 * @category getters
 */
export declare const poll: <A, E>(self: TDeferred<A, E>) => STM.STM<Option.Option<Either.Either<A, E>>>;
/**
 * @since 2.0.0
 * @category mutations
 */
export declare const succeed: {
    /**
     * @since 2.0.0
     * @category mutations
     */
    <A>(value: A): <E>(self: TDeferred<A, E>) => STM.STM<boolean>;
    /**
     * @since 2.0.0
     * @category mutations
     */
    <A, E>(self: TDeferred<A, E>, value: A): STM.STM<boolean>;
};
//# sourceMappingURL=TDeferred.d.ts.map