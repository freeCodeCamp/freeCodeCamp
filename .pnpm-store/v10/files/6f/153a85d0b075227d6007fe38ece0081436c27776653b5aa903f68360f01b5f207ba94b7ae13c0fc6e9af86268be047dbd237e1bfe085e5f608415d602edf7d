export declare enum Focus {
    /** Focus the first non-disabled element */
    First = 1,
    /** Focus the previous non-disabled element */
    Previous = 2,
    /** Focus the next non-disabled element */
    Next = 4,
    /** Focus the last non-disabled element */
    Last = 8,
    /** Wrap tab around */
    WrapAround = 16,
    /** Prevent scrolling the focusable elements into view */
    NoScroll = 32
}
export declare enum FocusResult {
    /** Something went wrong while trying to focus. */
    Error = 0,
    /** When `Focus.WrapAround` is enabled, going from position `N` to `N+1` where `N` is the last index in the array, then we overflow. */
    Overflow = 1,
    /** Focus was successful. */
    Success = 2,
    /** When `Focus.WrapAround` is enabled, going from position `N` to `N-1` where `N` is the first index in the array, then we underflow. */
    Underflow = 3
}
export declare function getFocusableElements(container?: HTMLElement | null): HTMLElement[];
export declare enum FocusableMode {
    /** The element itself must be focusable. */
    Strict = 0,
    /** The element should be inside of a focusable element. */
    Loose = 1
}
export declare function isFocusableElement(element: HTMLElement, mode?: FocusableMode): boolean;
export declare function restoreFocusIfNecessary(element: HTMLElement | null): void;
export declare function focusElement(element: HTMLElement | null): void;
export declare function sortByDomNode<T>(nodes: T[], resolveKey?: (item: T) => HTMLElement | null): T[];
export declare function focusFrom(current: HTMLElement | null, focus: Focus): FocusResult;
export declare function focusIn(container: HTMLElement | HTMLElement[], focus: Focus, { sorted, relativeTo, skipElements, }?: Partial<{
    sorted: boolean;
    relativeTo: HTMLElement | null;
    skipElements: HTMLElement[];
}>): FocusResult;
