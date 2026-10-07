declare const canUseDOM: boolean;
declare function composeEventHandlers<E extends {
    defaultPrevented: boolean;
}>(originalEventHandler?: (event: E) => void, ourEventHandler?: (event: E) => void, { checkForDefaultPrevented }?: {
    checkForDefaultPrevented?: boolean | undefined;
}): (event: E) => void;
declare function getOwnerWindow(element: Node | null | undefined): Window & typeof globalThis;
declare function getOwnerDocument(element: Node | null | undefined): Document;
/**
 * Lifted from https://github.com/ariakit/ariakit/blob/main/packages/ariakit-core/src/utils/dom.ts#L37
 * MIT License, Copyright (c) AriaKit.
 */
declare function getActiveElement(node: Node | null | undefined, activeDescendant?: boolean): HTMLElement | null;
declare function isFrame(element: Element): element is HTMLIFrameElement;

type Timeout = ReturnType<typeof setTimeout>;
type Interval = ReturnType<typeof setInterval>;
type Immediate = ReturnType<typeof setImmediate>;

export { type Immediate, type Interval, type Timeout, canUseDOM, composeEventHandlers, getActiveElement, getOwnerDocument, getOwnerWindow, isFrame };
