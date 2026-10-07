import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { UnicodeJsonSharedConstraints, JsonValue } from './_internals/helpers/JsonConstraintsBuilder.js';
export type { UnicodeJsonSharedConstraints, JsonValue };
/**
 * For any JSON compliant values with unicode support
 *
 * Keys and string values rely on {@link unicode}
 *
 * As `JSON.parse` preserves `-0`, `unicodeJsonValue` can also have `-0` as a value.
 * `unicodeJsonValue` must be seen as: any value that could have been built by doing a `JSON.parse` on a given string.
 *
 * @param constraints - Constraints to be applied onto the generated instance
 *
 * @deprecated Prefer using {@link jsonValue} with `stringUnit: "grapheme"`, it will generate even more unicode strings: includings some having characters outside of BMP plan
 * @remarks Since 2.20.0
 * @public
 */
export declare function unicodeJsonValue(constraints?: UnicodeJsonSharedConstraints): Arbitrary<JsonValue>;
