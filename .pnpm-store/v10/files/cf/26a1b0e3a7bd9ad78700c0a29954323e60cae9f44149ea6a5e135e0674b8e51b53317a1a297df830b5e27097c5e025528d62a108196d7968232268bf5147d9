declare enum maxLengthSupportedTypes {
    'email' = "email",
    'password' = "password",
    'search' = "search",
    'telephone' = "telephone",
    'text' = "text",
    'url' = "url"
}
type ElementWithMaxLengthSupport = HTMLTextAreaElement | (HTMLInputElement & {
    type: maxLengthSupportedTypes;
});
export declare function getMaxLength(element: ElementWithMaxLengthSupport): number | undefined;
export declare function supportsMaxLength(element: Element): element is ElementWithMaxLengthSupport;
export {};
