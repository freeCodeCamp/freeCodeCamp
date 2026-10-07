import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { SizeForArbitrary } from './_internals/helpers/MaxLengthFromMinLength.js';
/**
 * Constraints to be applied on {@link lorem}
 * @remarks Since 2.5.0
 * @public
 */
export interface LoremConstraints {
    /**
     * Maximal number of entities:
     * - maximal number of words in case mode is 'words'
     * - maximal number of sentences in case mode is 'sentences'
     *
     * @defaultValue 0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_
     * @remarks Since 2.5.0
     */
    maxCount?: number;
    /**
     * Type of strings that should be produced by {@link lorem}:
     * - words: multiple words
     * - sentences: multiple sentences
     *
     * @defaultValue 'words'
     * @remarks Since 2.5.0
     */
    mode?: 'words' | 'sentences';
    /**
     * Define how large the generated values should be (at max)
     * @remarks Since 2.22.0
     */
    size?: SizeForArbitrary;
}
/**
 * For lorem ipsum string of words or sentences with maximal number of words or sentences
 *
 * @param constraints - Constraints to be applied onto the generated value (since 2.5.0)
 *
 * @remarks Since 0.0.1
 * @public
 */
export declare function lorem(constraints?: LoremConstraints): Arbitrary<string>;
