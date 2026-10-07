import { safeCharCodeAt } from '../../../utils/globals.js';
export const indexToCharStringMapper = String.fromCodePoint;
export function indexToCharStringUnmapper(c) {
    if (typeof c !== 'string') {
        throw new Error('Cannot unmap non-string');
    }
    if (c.length === 0 || c.length > 2) {
        throw new Error('Cannot unmap string with more or less than one character');
    }
    const c1 = safeCharCodeAt(c, 0);
    if (c.length === 1) {
        return c1;
    }
    const c2 = safeCharCodeAt(c, 1);
    if (c1 < 0xd800 || c1 > 0xdbff || c2 < 0xdc00 || c2 > 0xdfff) {
        throw new Error('Cannot unmap invalid surrogate pairs');
    }
    return c.codePointAt(0);
}
