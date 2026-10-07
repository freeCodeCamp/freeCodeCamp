import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { ObjectConstraints } from './_internals/helpers/QualifiedObjectConstraints.js';
export type { ObjectConstraints };
/**
 * For any type of values
 *
 * You may use {@link sample} to preview the values that will be generated
 *
 * @example
 * ```javascript
 * null, undefined, 42, 6.5, 'Hello', {}, {k: [{}, 1, 2]}
 * ```
 *
 * @remarks Since 0.0.7
 * @public
 */
declare function anything(): Arbitrary<unknown>;
/**
 * For any type of values following the constraints defined by `settings`
 *
 * You may use {@link sample} to preview the values that will be generated
 *
 * @example
 * ```javascript
 * null, undefined, 42, 6.5, 'Hello', {}, {k: [{}, 1, 2]}
 * ```
 *
 * @example
 * ```typescript
 * // Using custom settings
 * fc.anything({
 *     key: fc.char(),
 *     values: [fc.integer(10,20), fc.constant(42)],
 *     maxDepth: 2
 * });
 * // Can build entries such as:
 * // - 19
 * // - [{"2":12,"k":15,"A":42}]
 * // - {"4":[19,13,14,14,42,11,20,11],"6":42,"7":16,"L":10,"'":[20,11],"e":[42,20,42,14,13,17]}
 * // - [42,42,42]...
 * ```
 *
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 0.0.7
 * @public
 */
declare function anything(constraints: ObjectConstraints): Arbitrary<unknown>;
export { anything };
