"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractEnumerableKeys = extractEnumerableKeys;
const safeObjectKeys = Object.keys;
const safeObjectGetOwnPropertySymbols = Object.getOwnPropertySymbols;
const safeObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function extractEnumerableKeys(instance) {
    const keys = safeObjectKeys(instance);
    const symbols = safeObjectGetOwnPropertySymbols(instance);
    for (let index = 0; index !== symbols.length; ++index) {
        const symbol = symbols[index];
        const descriptor = safeObjectGetOwnPropertyDescriptor(instance, symbol);
        if (descriptor && descriptor.enumerable) {
            keys.push(symbol);
        }
    }
    return keys;
}
