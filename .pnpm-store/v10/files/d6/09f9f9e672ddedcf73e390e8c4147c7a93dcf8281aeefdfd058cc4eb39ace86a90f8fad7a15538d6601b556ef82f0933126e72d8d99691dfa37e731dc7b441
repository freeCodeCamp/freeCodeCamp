import { MsSubtleCrypto } from "./MsSubtleCrypto";
/**
 * The value accessible as `window.msCrypto` in Internet Explorer 11.
 */
export interface MsCrypto {
    getRandomValues: (toFill: Uint8Array) => void;
    subtle: MsSubtleCrypto;
}
/**
 * The `window` object in Internet Explorer 11. This interface does not
 * exhaustively document the prefixed features of `window` in IE11.
 */
export interface MsWindow extends Window {
    MSInputMethodContext: any;
    msCrypto: MsCrypto;
}
/**
 * Determines if the provided window is (or is like) the window object one would
 * expect to encounter in Internet Explorer 11.
 */
export declare function isMsWindow(window: Window): window is MsWindow;
