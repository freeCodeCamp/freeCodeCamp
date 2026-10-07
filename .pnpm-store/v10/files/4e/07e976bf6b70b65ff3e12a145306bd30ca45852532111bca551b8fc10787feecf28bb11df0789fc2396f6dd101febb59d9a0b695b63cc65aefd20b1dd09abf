/**
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js";
import type * as Option from "./Option.js";
import type * as Ref from "./Ref.js";
import type * as Types from "./Types.js";
import type * as Unify from "./Unify.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const SynchronizedRefTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type SynchronizedRefTypeId = typeof SynchronizedRefTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface SynchronizedRef<in out A> extends SynchronizedRef.Variance<A>, Ref.Ref<A> {
    modifyEffect<B, E, R>(f: (a: A) => Effect.Effect<readonly [B, A], E, R>): Effect.Effect<B, E, R>;
    readonly [Unify.typeSymbol]?: unknown;
    readonly [Unify.unifySymbol]?: SynchronizedRefUnify<this>;
    readonly [Unify.ignoreSymbol]?: SynchronizedRefUnifyIgnore;
}
/**
 * @category models
 * @since 3.8.0
 */
export interface SynchronizedRefUnify<A extends {
    [Unify.typeSymbol]?: any;
}> extends Ref.RefUnify<A> {
    SynchronizedRef?: () => Extract<A[Unify.typeSymbol], SynchronizedRef<any>>;
}
/**
 * @category models
 * @since 3.8.0
 */
export interface SynchronizedRefUnifyIgnore extends Ref.RefUnifyIgnore {
    Ref?: true;
}
/**
 * @since 2.0.0
 */
export declare namespace SynchronizedRef {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<in out A> {
        readonly [SynchronizedRefTypeId]: {
            readonly _A: Types.Invariant<A>;
        };
    }
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <A>(value: A) => Effect.Effect<SynchronizedRef<A>>;
/**
 * @since 2.0.0
 * @category getters
 */
export declare const get: <A>(self: SynchronizedRef<A>) => Effect.Effect<A>;
/**
 * @since 2.0.0
 * @category utils
 */
export declare const getAndSet: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(value: A): (self: Ref.Ref<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref.Ref<A>, value: A): Effect.Effect<A>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const getAndUpdate: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(f: (a: A) => A): (self: Ref.Ref<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref.Ref<A>, f: (a: A) => A): Effect.Effect<A>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const getAndUpdateEffect: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, R, E>(f: (a: A) => Effect.Effect<A, E, R>): (self: SynchronizedRef<A>) => Effect.Effect<A, E, R>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, R, E>(self: SynchronizedRef<A>, f: (a: A) => Effect.Effect<A, E, R>): Effect.Effect<A, E, R>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const getAndUpdateSome: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(pf: (a: A) => Option.Option<A>): (self: Ref.Ref<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref.Ref<A>, pf: (a: A) => Option.Option<A>): Effect.Effect<A>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const getAndUpdateSomeEffect: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, R, E>(pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>): (self: SynchronizedRef<A>) => Effect.Effect<A, E, R>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, R, E>(self: SynchronizedRef<A>, pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>): Effect.Effect<A, E, R>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const modify: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B>(f: (a: A) => readonly [B, A]): (self: SynchronizedRef<A>) => Effect.Effect<B>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B>(self: SynchronizedRef<A>, f: (a: A) => readonly [B, A]): Effect.Effect<B>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const modifyEffect: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B, E, R>(f: (a: A) => Effect.Effect<readonly [B, A], E, R>): (self: SynchronizedRef<A>) => Effect.Effect<B, E, R>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B, E, R>(self: SynchronizedRef<A>, f: (a: A) => Effect.Effect<readonly [B, A], E, R>): Effect.Effect<B, E, R>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const modifySome: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <B, A>(fallback: B, pf: (a: A) => Option.Option<readonly [B, A]>): (self: Ref.Ref<A>) => Effect.Effect<B>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B>(self: Ref.Ref<A>, fallback: B, pf: (a: A) => Option.Option<readonly [B, A]>): Effect.Effect<B>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const modifySomeEffect: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B, R, E>(fallback: B, pf: (a: A) => Option.Option<Effect.Effect<readonly [B, A], E, R>>): (self: SynchronizedRef<A>) => Effect.Effect<B, E, R>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B, R, E>(self: SynchronizedRef<A>, fallback: B, pf: (a: A) => Option.Option<Effect.Effect<readonly [B, A], E, R>>): Effect.Effect<B, E, R>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const set: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(value: A): (self: Ref.Ref<A>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref.Ref<A>, value: A): Effect.Effect<void>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const setAndGet: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(value: A): (self: Ref.Ref<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref.Ref<A>, value: A): Effect.Effect<A>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const update: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(f: (a: A) => A): (self: Ref.Ref<A>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref.Ref<A>, f: (a: A) => A): Effect.Effect<void>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const updateEffect: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, R, E>(f: (a: A) => Effect.Effect<A, E, R>): (self: SynchronizedRef<A>) => Effect.Effect<void, E, R>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, R, E>(self: SynchronizedRef<A>, f: (a: A) => Effect.Effect<A, E, R>): Effect.Effect<void, E, R>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const updateAndGet: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(f: (a: A) => A): (self: Ref.Ref<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref.Ref<A>, f: (a: A) => A): Effect.Effect<A>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const updateAndGetEffect: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, R, E>(f: (a: A) => Effect.Effect<A, E, R>): (self: SynchronizedRef<A>) => Effect.Effect<A, E, R>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, R, E>(self: SynchronizedRef<A>, f: (a: A) => Effect.Effect<A, E, R>): Effect.Effect<A, E, R>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const updateSome: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(f: (a: A) => Option.Option<A>): (self: Ref.Ref<A>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref.Ref<A>, f: (a: A) => Option.Option<A>): Effect.Effect<void>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const updateSomeEffect: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, R, E>(pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>): (self: SynchronizedRef<A>) => Effect.Effect<void, E, R>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, R, E>(self: SynchronizedRef<A>, pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>): Effect.Effect<void, E, R>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const updateSomeAndGet: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(pf: (a: A) => Option.Option<A>): (self: Ref.Ref<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref.Ref<A>, pf: (a: A) => Option.Option<A>): Effect.Effect<A>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const updateSomeAndGetEffect: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, R, E>(pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>): (self: SynchronizedRef<A>) => Effect.Effect<A, E, R>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, R, E>(self: SynchronizedRef<A>, pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>): Effect.Effect<A, E, R>;
};
/**
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeMake: <A>(value: A) => SynchronizedRef<A>;
//# sourceMappingURL=SynchronizedRef.d.ts.map