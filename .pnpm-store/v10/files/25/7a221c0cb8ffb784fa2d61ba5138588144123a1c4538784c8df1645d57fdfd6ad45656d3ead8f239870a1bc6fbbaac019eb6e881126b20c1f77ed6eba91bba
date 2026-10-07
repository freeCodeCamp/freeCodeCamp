import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * For one `...values` values - all equiprobable
 *
 * **WARNING**: It expects at least one value, otherwise it should throw
 *
 * @param values - Constant values to be produced (all values shrink to the first one)
 *
 * @remarks Since 0.0.12
 * @public
 */
declare function constantFrom<T = never>(...values: T[]): Arbitrary<T>;
/**
 * For one `...values` values - all equiprobable
 *
 * **WARNING**: It expects at least one value, otherwise it should throw
 *
 * @param values - Constant values to be produced (all values shrink to the first one)
 *
 * @remarks Since 0.0.12
 * @public
 */
declare function constantFrom<TArgs extends any[] | [any]>(...values: TArgs): Arbitrary<TArgs[number]>;
export { constantFrom };
