import { safeNumberToString, safeSubstring } from '../../../utils/globals.js';
const safeNumberParseInt = Number.parseInt;
export function natToStringifiedNatMapper(options) {
    const [style, v] = options;
    switch (style) {
        case 'oct':
            return `0${safeNumberToString(v, 8)}`;
        case 'hex':
            return `0x${safeNumberToString(v, 16)}`;
        case 'dec':
        default:
            return `${v}`;
    }
}
export function tryParseStringifiedNat(stringValue, radix) {
    const parsedNat = safeNumberParseInt(stringValue, radix);
    if (safeNumberToString(parsedNat, radix) !== stringValue) {
        throw new Error('Invalid value');
    }
    return parsedNat;
}
export function natToStringifiedNatUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Invalid type');
    }
    if (value.length >= 2 && value[0] === '0') {
        if (value[1] === 'x') {
            return ['hex', tryParseStringifiedNat(safeSubstring(value, 2), 16)];
        }
        return ['oct', tryParseStringifiedNat(safeSubstring(value, 1), 8)];
    }
    return ['dec', tryParseStringifiedNat(value, 10)];
}
