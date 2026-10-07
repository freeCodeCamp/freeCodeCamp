/**
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js";
import type * as Option from "./Option.js";
import type * as Readable from "./Readable.js";
import type * as Types from "./Types.js";
import type * as Unify from "./Unify.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const RefTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type RefTypeId = typeof RefTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface Ref<in out A> extends Ref.Variance<A>, Effect.Effect<A>, Readable.Readable<A> {
    modify<B>(f: (a: A) => readonly [B, A]): Effect.Effect<B>;
    readonly [Unify.typeSymbol]?: unknown;
    readonly [Unify.unifySymbol]?: RefUnify<this>;
    readonly [Unify.ignoreSymbol]?: RefUnifyIgnore;
}
/**
 * @category models
 * @since 3.8.0
 */
export interface RefUnify<A extends {
    [Unify.typeSymbol]?: any;
}> extends Effect.EffectUnify<A> {
    Ref?: () => Extract<A[Unify.typeSymbol], Ref<any>>;
}
/**
 * @category models
 * @since 3.8.0
 */
export interface RefUnifyIgnore extends Effect.EffectUnifyIgnore {
    Effect?: true;
}
/**
 * @since 2.0.0
 * @category models
 */
export declare namespace Ref {
    /**
     * @since 2.0.0
     */
    interface Variance<in out A> {
        readonly [RefTypeId]: {
            readonly _A: Types.Invariant<A>;
        };
    }
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <A>(value: A) => Effect.Effect<Ref<A>>;
/**
 * @since 2.0.0
 * @category getters
 */
export declare const get: <A>(self: Ref<A>) => Effect.Effect<A>;
/**
 * @since 2.0.0
 * @category utils
 */
export declare const getAndSet: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(value: A): (self: Ref<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref<A>, value: A): Effect.Effect<A>;
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
    <A>(f: (a: A) => A): (self: Ref<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref<A>, f: (a: A) => A): Effect.Effect<A>;
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
    <A>(pf: (a: A) => Option.Option<A>): (self: Ref<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref<A>, pf: (a: A) => Option.Option<A>): Effect.Effect<A>;
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
    <A, B>(f: (a: A) => readonly [B, A]): (self: Ref<A>) => Effect.Effect<B>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B>(self: Ref<A>, f: (a: A) => readonly [B, A]): Effect.Effect<B>;
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
    <B, A>(fallback: B, pf: (a: A) => Option.Option<readonly [B, A]>): (self: Ref<A>) => Effect.Effect<B>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B>(self: Ref<A>, fallback: B, pf: (a: A) => Option.Option<readonly [B, A]>): Effect.Effect<B>;
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
    <A>(value: A): (self: Ref<A>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref<A>, value: A): Effect.Effect<void>;
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
    <A>(value: A): (self: Ref<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref<A>, value: A): Effect.Effect<A>;
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
    <A>(f: (a: A) => A): (self: Ref<A>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref<A>, f: (a: A) => A): Effect.Effect<void>;
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
    <A>(f: (a: A) => A): (self: Ref<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref<A>, f: (a: A) => A): Effect.Effect<A>;
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
    <A>(f: (a: A) => Option.Option<A>): (self: Ref<A>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref<A>, f: (a: A) => Option.Option<A>): Effect.Effect<void>;
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
    <A>(pf: (a: A) => Option.Option<A>): (self: Ref<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: Ref<A>, pf: (a: A) => Option.Option<A>): Effect.Effect<A>;
};
/**
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeMake: <A>(value: A) => Ref<A>;
//# sourceMappingURL=Ref.d.ts.map