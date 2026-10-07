/**
 * @since 2.0.0
 */
import type { Equivalence } from "./Equivalence.js";
import * as Hash from "./Hash.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const symbol: unique symbol;
/**
 * @since 2.0.0
 * @category models
 */
export interface Equal extends Hash.Hash {
    [symbol](that: Equal): boolean;
}
/**
 * @since 2.0.0
 * @category equality
 */
export declare function equals<B>(that: B): <A>(self: A) => boolean;
export declare function equals<A, B>(self: A, that: B): boolean;
/**
 * @since 2.0.0
 * @category guards
 */
export declare const isEqual: (u: unknown) => u is Equal;
/**
 * @since 2.0.0
 * @category instances
 */
export declare const equivalence: <A>() => Equivalence<A>;
//# sourceMappingURL=Equal.d.ts.map