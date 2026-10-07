/**
 * @since 2.0.0
 */
import * as Effect from "./Effect.js";
import * as Readable from "./Readable.js";
import * as Stream from "./Stream.js";
import type { NoInfer } from "./Types.js";
/**
 * @since 2.0.0
 * @category type ids
 */
export declare const TypeId: unique symbol;
/**
 * @since 2.0.0
 * @category type ids
 */
export type TypeId = typeof TypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface Subscribable<A, E = never, R = never> extends Readable.Readable<A, E, R> {
    readonly [TypeId]: TypeId;
    readonly changes: Stream.Stream<A, E, R>;
}
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isSubscribable: (u: unknown) => u is Subscribable<unknown, unknown, unknown>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <A, E, R>(options: {
    readonly get: Effect.Effect<A, E, R>;
    readonly changes: Stream.Stream<A, E, R>;
}) => Subscribable<A, E, R>;
/**
 * @since 2.0.0
 * @category combinators
 */
export declare const map: {
    /**
     * @since 2.0.0
     * @category combinators
     */
    <A, B>(f: (a: NoInfer<A>) => B): <E, R>(fa: Subscribable<A, E, R>) => Subscribable<B, E, R>;
    /**
     * @since 2.0.0
     * @category combinators
     */
    <A, E, R, B>(self: Subscribable<A, E, R>, f: (a: NoInfer<A>) => B): Subscribable<B, E, R>;
};
/**
 * @since 2.0.0
 * @category combinators
 */
export declare const mapEffect: {
    /**
     * @since 2.0.0
     * @category combinators
     */
    <A, B, E2, R2>(f: (a: NoInfer<A>) => Effect.Effect<B, E2, R2>): <E, R>(fa: Subscribable<A, E, R>) => Subscribable<B, E | E2, R | R2>;
    /**
     * @since 2.0.0
     * @category combinators
     */
    <A, E, R, B, E2, R2>(self: Subscribable<A, E, R>, f: (a: NoInfer<A>) => Effect.Effect<B, E2, R2>): Subscribable<B, E | E2, R | R2>;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const unwrap: <A, E, R, E1, R1>(effect: Effect.Effect<Subscribable<A, E, R>, E1, R1>) => Subscribable<A, E | E1, R | R1>;
//# sourceMappingURL=Subscribable.d.ts.map