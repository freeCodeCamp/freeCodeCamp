import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { DepthIdentifier } from './_internals/helpers/DepthContext.js';
import type { DepthSize } from './_internals/helpers/MaxLengthFromMinLength.js';
/**
 * Constraints to be applied on {@link option}
 * @remarks Since 2.2.0
 * @public
 */
export interface OptionConstraints<TNil = null> {
    /**
     * The probability to build a nil value is of `1 / freq`
     * @defaultValue 5
     * @remarks Since 1.17.0
     */
    freq?: number;
    /**
     * The nil value
     * @defaultValue null
     * @remarks Since 1.17.0
     */
    nil?: TNil;
    /**
     * While going deeper and deeper within a recursive structure (see {@link letrec}),
     * this factor will be used to increase the probability to generate nil.
     *
     * @remarks Since 2.14.0
     */
    depthSize?: DepthSize;
    /**
     * Maximal authorized depth. Once this depth has been reached only nil will be used.
     * @defaultValue Number.POSITIVE_INFINITY — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_
     * @remarks Since 2.14.0
     */
    maxDepth?: number;
    /**
     * Depth identifier can be used to share the current depth between several instances.
     *
     * By default, if not specified, each instance of option will have its own depth.
     * In other words: you can have depth=1 in one while you have depth=100 in another one.
     *
     * @remarks Since 2.14.0
     */
    depthIdentifier?: DepthIdentifier | string;
}
/**
 * For either nil or a value coming from `arb` with custom frequency
 *
 * @param arb - Arbitrary that will be called to generate a non nil value
 * @param constraints - Constraints on the option(since 1.17.0)
 *
 * @remarks Since 0.0.6
 * @public
 */
export declare function option<T, TNil = null>(arb: Arbitrary<T>, constraints?: OptionConstraints<TNil>): Arbitrary<T | TNil>;
