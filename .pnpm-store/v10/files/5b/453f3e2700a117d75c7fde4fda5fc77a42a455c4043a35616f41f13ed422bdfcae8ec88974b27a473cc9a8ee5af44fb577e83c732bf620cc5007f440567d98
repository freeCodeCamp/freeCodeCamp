/**
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js";
import type * as Scope from "./Scope.js";
import type * as STM from "./STM.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const TSemaphoreTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type TSemaphoreTypeId = typeof TSemaphoreTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface TSemaphore extends TSemaphore.Proto {
}
/**
 * @since 2.0.0
 */
export declare namespace TSemaphore {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Proto {
        readonly [TSemaphoreTypeId]: TSemaphoreTypeId;
    }
}
/**
 * @since 2.0.0
 * @category mutations
 */
export declare const acquire: (self: TSemaphore) => STM.STM<void>;
/**
 * @since 2.0.0
 * @category mutations
 */
export declare const acquireN: {
    /**
     * @since 2.0.0
     * @category mutations
     */
    (n: number): (self: TSemaphore) => STM.STM<void>;
    /**
     * @since 2.0.0
     * @category mutations
     */
    (self: TSemaphore, n: number): STM.STM<void>;
};
/**
 * @since 2.0.0
 * @category getters
 */
export declare const available: (self: TSemaphore) => STM.STM<number>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: (permits: number) => STM.STM<TSemaphore>;
/**
 * @since 2.0.0
 * @category mutations
 */
export declare const release: (self: TSemaphore) => STM.STM<void>;
/**
 * @since 2.0.0
 * @category mutations
 */
export declare const releaseN: {
    /**
     * @since 2.0.0
     * @category mutations
     */
    (n: number): (self: TSemaphore) => STM.STM<void>;
    /**
     * @since 2.0.0
     * @category mutations
     */
    (self: TSemaphore, n: number): STM.STM<void>;
};
/**
 * @since 2.0.0
 * @category mutations
 */
export declare const withPermit: {
    /**
     * @since 2.0.0
     * @category mutations
     */
    (semaphore: TSemaphore): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    /**
     * @since 2.0.0
     * @category mutations
     */
    <A, E, R>(self: Effect.Effect<A, E, R>, semaphore: TSemaphore): Effect.Effect<A, E, R>;
};
/**
 * @since 2.0.0
 * @category mutations
 */
export declare const withPermits: {
    /**
     * @since 2.0.0
     * @category mutations
     */
    (semaphore: TSemaphore, permits: number): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    /**
     * @since 2.0.0
     * @category mutations
     */
    <A, E, R>(self: Effect.Effect<A, E, R>, semaphore: TSemaphore, permits: number): Effect.Effect<A, E, R>;
};
/**
 * @since 2.0.0
 * @category mutations
 */
export declare const withPermitScoped: (self: TSemaphore) => Effect.Effect<void, never, Scope.Scope>;
/**
 * @since 2.0.0
 * @category mutations
 */
export declare const withPermitsScoped: {
    /**
     * @since 2.0.0
     * @category mutations
     */
    (permits: number): (self: TSemaphore) => Effect.Effect<void, never, Scope.Scope>;
    /**
     * @since 2.0.0
     * @category mutations
     */
    (self: TSemaphore, permits: number): Effect.Effect<void, never, Scope.Scope>;
};
/**
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeMake: (permits: number) => TSemaphore;
//# sourceMappingURL=TSemaphore.d.ts.map