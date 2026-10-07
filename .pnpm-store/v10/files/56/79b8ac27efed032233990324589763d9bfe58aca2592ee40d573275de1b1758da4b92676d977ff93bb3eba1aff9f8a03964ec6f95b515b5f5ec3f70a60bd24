type tag = keyof HTMLElementTagNameMap;
export declare function isElementType<T extends tag, P extends {
    [k: string]: unknown;
} | undefined = undefined>(element: Element, tag: T | T[], props?: P): element is P extends undefined ? HTMLElementTagNameMap[T] : HTMLElementTagNameMap[T] & P;
export {};
