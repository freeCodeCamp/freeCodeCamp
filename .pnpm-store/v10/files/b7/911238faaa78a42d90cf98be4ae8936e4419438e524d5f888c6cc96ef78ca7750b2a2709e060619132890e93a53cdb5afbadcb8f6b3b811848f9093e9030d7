import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { StringSharedConstraints } from './_shared/StringSharedConstraints.js';
export type { StringSharedConstraints } from './_shared/StringSharedConstraints.js';
/**
 * Constraints to be applied on arbitrary {@link string}
 * @remarks Since 3.22.0
 * @public
 */
export type StringConstraints = StringSharedConstraints & {
    /**
     * A string results from the join between several unitary strings produced by the Arbitrary instance defined by `unit`.
     * The `minLength` and `maxLength` refers to the number of these units composing the string. In other words it does not have to be confound with `.length` on an instance of string.
     *
     * A unit can either be a fully custom Arbitrary or one of the pre-defined options:
     * - `'grapheme'` - Any printable grapheme as defined by the Unicode standard. This unit includes graphemes that may:
     *   - Span multiple code points (e.g., `'\u{0061}\u{0300}'`)
     *   - Consist of multiple characters (e.g., `'\u{1f431}'`)
     *   - Include non-European and non-ASCII characters.
     *   - **Note:** Graphemes produced by this unit are designed to remain visually distinct when joined together.
     * - `'grapheme-composite'` - Any printable grapheme limited to a single code point. This option produces graphemes limited to a single code point.
     *   - **Note:** Graphemes produced by this unit are designed to remain visually distinct when joined together.
     * - `'grapheme-ascii'` - Any printable ASCII character.
     * - `'binary'` - Any possible code point (except half surrogate pairs), regardless of how it may combine with subsequent code points in the produced string. This unit produces a single code point within the full Unicode range (0000-10FFFF).
     * - `'binary-ascii'` - Any possible ASCII character, including control characters. This unit produces any code point in the range 0000-00FF.
     *
     * @defaultValue 'grapheme-ascii'
     * @remarks Since 3.22.0
     */
    unit?: 'grapheme' | 'grapheme-composite' | 'grapheme-ascii' | 'binary' | 'binary-ascii' | Arbitrary<string>;
};
/**
 * For strings of {@link char}
 *
 * @param constraints - Constraints to apply when building instances (since 2.4.0)
 *
 * @remarks Since 0.0.1
 * @public
 */
export declare function string(constraints?: StringConstraints): Arbitrary<string>;
