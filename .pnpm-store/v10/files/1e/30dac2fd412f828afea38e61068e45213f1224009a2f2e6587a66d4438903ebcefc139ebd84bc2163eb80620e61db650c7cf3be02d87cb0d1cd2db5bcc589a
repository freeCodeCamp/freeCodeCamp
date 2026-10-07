import { MsSubtleCrypto } from "./MsSubtleCrypto";

type SubtleCryptoMethod =
  | "decrypt"
  | "digest"
  | "encrypt"
  | "exportKey"
  | "generateKey"
  | "importKey"
  | "sign"
  | "verify";

const msSubtleCryptoMethods: Array<SubtleCryptoMethod> = [
  "decrypt",
  "digest",
  "encrypt",
  "exportKey",
  "generateKey",
  "importKey",
  "sign",
  "verify"
];

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

function quacksLikeAnMsWindow(window: Window): window is MsWindow {
  return "MSInputMethodContext" in window && "msCrypto" in window;
}

/**
 * Determines if the provided window is (or is like) the window object one would
 * expect to encounter in Internet Explorer 11.
 */
export function isMsWindow(window: Window): window is MsWindow {
  if (quacksLikeAnMsWindow(window) && window.msCrypto.subtle !== undefined) {
    const { getRandomValues, subtle } = window.msCrypto;
    return msSubtleCryptoMethods
      .map<Function>(methodName => subtle[methodName])
      .concat(getRandomValues)
      .every(method => typeof method === "function");
  }

  return false;
}
