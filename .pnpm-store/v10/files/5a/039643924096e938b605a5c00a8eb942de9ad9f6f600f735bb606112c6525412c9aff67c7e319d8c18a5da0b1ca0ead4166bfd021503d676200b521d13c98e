"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMsWindow = void 0;
var msSubtleCryptoMethods = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify"
];
function quacksLikeAnMsWindow(window) {
    return "MSInputMethodContext" in window && "msCrypto" in window;
}
/**
 * Determines if the provided window is (or is like) the window object one would
 * expect to encounter in Internet Explorer 11.
 */
function isMsWindow(window) {
    if (quacksLikeAnMsWindow(window) && window.msCrypto.subtle !== undefined) {
        var _a = window.msCrypto, getRandomValues = _a.getRandomValues, subtle_1 = _a.subtle;
        return msSubtleCryptoMethods
            .map(function (methodName) { return subtle_1[methodName]; })
            .concat(getRandomValues)
            .every(function (method) { return typeof method === "function"; });
    }
    return false;
}
exports.isMsWindow = isMsWindow;
//# sourceMappingURL=MsWindow.js.map