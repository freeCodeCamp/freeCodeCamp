import type { Node } from 'postcss-selector-parser';

/**
 * Options for the calculation of the specificity of a selector
 */
export declare type CalculationOptions = {
    /**
     * The callback to calculate a custom specificity for a node
     */
    customSpecificity?: CustomSpecificityCallback;
};

/**
 * Compare two specificities
 * @param s1 The first specificity
 * @param s2 The second specificity
 * @returns A value smaller than `0` if `s1` is less specific than `s2`, `0` if `s1` is equally specific as `s2`, a value larger than `0` if `s1` is more specific than `s2`
 */
export declare function compare(s1: Specificity, s2: Specificity): number;

/**
 * Calculate a custom specificity for a node
 */
export declare type CustomSpecificityCallback = (node: Node) => Specificity | void | false | null | undefined;

/**
 * Calculate the specificity for a selector
 */
export declare function selectorSpecificity(node: Node, options?: CalculationOptions): Specificity;

/**
 * The specificity of a selector
 */
export declare type Specificity = {
    /**
     * The number of ID selectors in the selector
     */
    a: number;
    /**
     * The number of class selectors, attribute selectors, and pseudo-classes in the selector
     */
    b: number;
    /**
     * The number of type selectors and pseudo-elements in the selector
     */
    c: number;
};

/**
 * Calculate the most specific selector in a list
 */
export declare function specificityOfMostSpecificListItem(nodes: Array<Node>, options?: CalculationOptions): {
    a: number;
    b: number;
    c: number;
};

export { }
