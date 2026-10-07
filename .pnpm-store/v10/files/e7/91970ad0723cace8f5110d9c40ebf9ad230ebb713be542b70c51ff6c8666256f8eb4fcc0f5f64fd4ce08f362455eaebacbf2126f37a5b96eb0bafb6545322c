export interface IsInaccessibleOptions {
    getComputedStyle?: typeof window.getComputedStyle;
    /**
     * Can be used to return cached results from previous isSubtreeInaccessible calls.
     */
    isSubtreeInaccessible?: (element: Element) => boolean;
}
/**
 * Partial implementation https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion
 * which should only be used for elements with a non-presentational role i.e.
 * `role="none"` and `role="presentation"` will not be excluded.
 *
 * Implements aria-hidden semantics (i.e. parent overrides child)
 * Ignores "Child Presentational: True" characteristics
 *
 * @param element
 * @param options
 * @returns {boolean} true if excluded, otherwise false
 */
export declare function isInaccessible(element: Element, options?: IsInaccessibleOptions): boolean;
export interface IsSubtreeInaccessibleOptions {
    getComputedStyle?: typeof window.getComputedStyle;
}
/**
 *
 * @param element
 * @param options
 * @returns {boolean} - `true` if every child of the element is inaccessible
 */
export declare function isSubtreeInaccessible(element: Element, options?: IsSubtreeInaccessibleOptions): boolean;
//# sourceMappingURL=is-inaccessible.d.ts.map