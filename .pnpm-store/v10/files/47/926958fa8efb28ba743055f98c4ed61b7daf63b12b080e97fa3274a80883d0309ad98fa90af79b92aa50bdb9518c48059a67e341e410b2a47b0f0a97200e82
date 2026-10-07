import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { ObjectConstraints } from './_internals/helpers/QualifiedObjectConstraints.js';
export type { ObjectConstraints };
/**
 * For any objects
 *
 * You may use {@link sample} to preview the values that will be generated
 *
 * @example
 * ```javascript
 * {}, {k: [{}, 1, 2]}
 * ```
 *
 * @remarks Since 0.0.7
 * @public
 */
declare function object(): Arbitrary<Record<string, unknown>>;
/**
 * For any objects following the constraints defined by `settings`
 *
 * You may use {@link sample} to preview the values that will be generated
 *
 * @example
 * ```javascript
 * {}, {k: [{}, 1, 2]}
 * ```
 *
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 0.0.7
 * @public
 */
declare function object(constraints: ObjectConstraints): Arbitrary<Record<string, unknown>>;
export { object };
