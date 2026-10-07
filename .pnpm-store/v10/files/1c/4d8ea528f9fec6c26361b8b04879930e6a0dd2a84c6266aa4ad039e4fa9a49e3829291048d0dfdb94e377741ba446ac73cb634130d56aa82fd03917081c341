/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 * @deprecated This is browser-specific and will be removed from `@sentry/core` in a future major version.
 * Import `htmlTreeAsString` from `@sentry-internal/browser-utils` instead.
 */
export declare function htmlTreeAsString(elem: unknown, options?: string[] | {
    keyAttrs?: string[];
    maxStringLength?: number;
}): string;
/**
 * A safe form of location.href
 */
export declare function getLocationHref(): string;
/**
 * Given a DOM element, traverses up the tree until it finds the first ancestor node
 * that has the `data-sentry-component` or `data-sentry-element` attribute with `data-sentry-component` taking
 * precedence. This attribute is added at build-time by projects that have the component name annotation plugin installed.
 *
 * @returns a string representation of the component for the provided DOM element, or `null` if not found
 */
export declare function getComponentName(elem: unknown, maxTraverseHeight?: number): string | null;
//# sourceMappingURL=browser.d.ts.map
