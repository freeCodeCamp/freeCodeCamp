/**
 * interface for an options-bag where `window.getComputedStyle` can be mocked
 */
export interface ComputeTextAlternativeOptions {
    compute?: "description" | "name";
    /**
     * Set to true if window.computedStyle supports the second argument.
     * This should be false in JSDOM. Otherwise JSDOM will log console errors.
     */
    computedStyleSupportsPseudoElements?: boolean;
    /**
     * mock window.getComputedStyle. Needs `content`, `display` and `visibility`
     */
    getComputedStyle?: typeof window.getComputedStyle;
    /**
     * Set to `true` if you want to include hidden elements in the accessible name and description computation.
     * Skips 2A in https://w3c.github.io/accname/#computation-steps.
     * @default false
     */
    hidden?: boolean;
}
/**
 * implements https://w3c.github.io/accname/#mapping_additional_nd_te
 * @param root
 * @param options
 * @returns
 */
export declare function computeTextAlternative(root: Element, options?: ComputeTextAlternativeOptions): string;
//# sourceMappingURL=accessible-name-and-description.d.ts.map