/**
 * @since 2.0.0
 */
import type { Effect } from "./Effect.js";
import { type Pipeable } from "./Pipeable.js";
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
export interface Readable<A, E = never, R = never> extends Pipeable {
    readonly [TypeId]: TypeId;
    readonly get: Effect<A, E, R>;
}
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isReadable: (u: unknown) => u is Readable<unknown, unknown, unknown>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <A, E, R>(get: Effect<A, E, R>) => Readable<A, E, R>;
/**
 * @since 2.0.0
 * @category combinators
 */
export declare const map: {
    /**
     * @since 2.0.0
     * @category combinators
     */
    <A, B>(f: (a: NoInfer<A>) => B): <E, R>(fa: Readable<A, E, R>) => Readable<B, E, R>;
    /**
     * @since 2.0.0
     * @category combinators
     */
    <A, E, R, B>(self: Readable<A, E, R>, f: (a: NoInfer<A>) => B): Readable<B, E, R>;
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
    <A, B, E2, R2>(f: (a: NoInfer<A>) => Effect<B, E2, R2>): <E, R>(fa: Readable<A, E, R>) => Readable<B, E | E2, R | R2>;
    /**
     * @since 2.0.0
     * @category combinators
     */
    <A, E, R, B, E2, R2>(self: Readable<A, E, R>, f: (a: NoInfer<A>) => Effect<B, E2, R2>): Readable<B, E | E2, R | R2>;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const unwrap: <A, E, R, E1, R1>(effect: Effect<Readable<A, E, R>, E1, R1>) => Readable<A, E | E1, R | R1>;
//# sourceMappingURL=Readable.d.ts.map