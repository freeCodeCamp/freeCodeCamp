/**
 * @since 3.5.0
 */
import type * as Duration from "./Duration.js";
import type * as Effect from "./Effect.js";
import type * as Readable from "./Readable.js";
import type * as Scope from "./Scope.js";
import type * as Types from "./Types.js";
import type * as Unify from "./Unify.js";
/**
 * @since 3.5.0
 * @category type ids
 */
export declare const TypeId: unique symbol;
/**
 * @since 3.5.0
 * @category type ids
 */
export type TypeId = typeof TypeId;
/**
 * @since 3.5.0
 * @category models
 */
export interface RcRef<out A, out E = never> extends Effect.Effect<A, E, Scope.Scope>, Readable.Readable<A, E, Scope.Scope> {
    readonly [TypeId]: RcRef.Variance<A, E>;
    readonly [Unify.typeSymbol]?: unknown;
    readonly [Unify.unifySymbol]?: RcRefUnify<this>;
    readonly [Unify.ignoreSymbol]?: RcRefUnifyIgnore;
}
/**
 * @category models
 * @since 3.8.0
 */
export interface RcRefUnify<A extends {
    [Unify.typeSymbol]?: any;
}> extends Effect.EffectUnify<A> {
    RcRef?: () => A[Unify.typeSymbol] extends RcRef<infer A0, infer E0> | infer _ ? RcRef<A0, E0> : never;
}
/**
 * @category models
 * @since 3.8.0
 */
export interface RcRefUnifyIgnore extends Effect.EffectUnifyIgnore {
    Effect?: true;
}
/**
 * @since 3.5.0
 * @category models
 */
export declare namespace RcRef {
    /**
     * @since 3.5.0
     * @category models
     */
    interface Variance<A, E> {
        readonly _A: Types.Covariant<A>;
        readonly _E: Types.Covariant<E>;
    }
}
/**
 * Create an `RcRef` from an acquire `Effect`.
 *
 * An RcRef wraps a reference counted resource that can be acquired and released
 * multiple times.
 *
 * The resource is lazily acquired on the first call to `get` and released when
 * the last reference is released.
 *
 * @since 3.5.0
 * @category constructors
 * @example
 * ```ts
 * import { Effect, RcRef } from "effect"
 *
 * Effect.gen(function*() {
 *   const ref = yield* RcRef.make({
 *     acquire: Effect.acquireRelease(
 *       Effect.succeed("foo"),
 *       () => Effect.log("release foo")
 *     )
 *   })
 *
 *   // will only acquire the resource once, and release it
 *   // when the scope is closed
 *   yield* RcRef.get(ref).pipe(
 *     Effect.andThen(RcRef.get(ref)),
 *     Effect.scoped
 *   )
 * })
 * ```
 */
export declare const make: <A, E, R>(options: {
    readonly acquire: Effect.Effect<A, E, R>;
    /**
     * When the reference count reaches zero, the resource will be released
     * after this duration.
     */
    readonly idleTimeToLive?: Duration.DurationInput | undefined;
}) => Effect.Effect<RcRef<A, E>, never, R | Scope.Scope>;
/**
 * @since 3.5.0
 * @category combinators
 */
export declare const get: <A, E>(self: RcRef<A, E>) => Effect.Effect<A, E, Scope.Scope>;
/**
 * @since 3.19.6
 * @category combinators
 * @experimental
 */
export declare const invalidate: <A, E>(self: RcRef<A, E>) => Effect.Effect<void>;
//# sourceMappingURL=RcRef.d.ts.map