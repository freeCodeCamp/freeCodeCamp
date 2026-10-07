import type { ComponentValue } from '@csstools/css-parser-algorithms';
import type { TokenDimension } from '@csstools/css-tokenizer';
import type { TokenNumber } from '@csstools/css-tokenizer';
import type { TokenPercentage } from '@csstools/css-tokenizer';

export declare function calc(css: string, options?: conversionOptions): string;

export declare function calcFromComponentValues(componentValuesList: Array<Array<ComponentValue>>, options?: conversionOptions): Array<Array<ComponentValue>>;

export declare type conversionOptions = {
    /**
     * Pass global values as a map of key value pairs.
     */
    globals?: GlobalsWithStrings;
    /**
     * The default precision is fairly high.
     * It aims to be high enough to make rounding unnoticeable in the browser.
     * You can set it to a lower number to suite your needs.
     */
    precision?: number;
    /**
     * By default this package will try to preserve units.
     * The heuristic to do this is very simplistic.
     * We take the first unit we encounter and try to convert other dimensions to that unit.
     *
     * This better matches what users expect from a CSS dev tool.
     *
     * If you want to have outputs that are closes to CSS serialized values you can set `true`.
     */
    toCanonicalUnits?: boolean;
    /**
     * Convert NaN, Infinity, ... into standard representable values.
     */
    censorIntoStandardRepresentableValues?: boolean;
    /**
     * Some percentages resolve against other values and might be negative or positive depending on context.
     * Raw percentages are more likely to be safe to simplify outside of a browser context
     *
     * @see https://drafts.csswg.org/css-values-4/#calc-simplification
     */
    rawPercentages?: boolean;
    /**
     * The values used to generate random value cache keys.
     */
    randomCaching?: {
        /**
         * The name of the property the random function is used in.
         */
        propertyName: string;
        /**
         * N is the index of the random function among other random functions in the same property value.
         */
        propertyN: number;
        /**
         * An element ID identifying the element the style is being applied to.
         * When omitted any `random()` call will not be computed.
         */
        elementID: string;
        /**
         * A document ID identifying the Document the styles are from.
         * When omitted any `random()` call will not be computed.
         */
        documentID: string;
    };
};

export declare type GlobalsWithStrings = Map<string, TokenDimension | TokenNumber | TokenPercentage | string>;

export declare const mathFunctionNames: Set<string>;

export { }
