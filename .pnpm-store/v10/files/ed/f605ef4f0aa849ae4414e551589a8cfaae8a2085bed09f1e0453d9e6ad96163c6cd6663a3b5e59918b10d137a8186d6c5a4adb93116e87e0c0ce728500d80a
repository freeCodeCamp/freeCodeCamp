import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * For tuples produced using the provided `arbs`
 *
 * @param arbs - Ordered list of arbitraries
 *
 * @remarks Since 0.0.1
 * @public
 */
export declare function tuple<Ts extends unknown[]>(...arbs: {
    [K in keyof Ts]: Arbitrary<Ts[K]>;
}): Arbitrary<Ts>;
