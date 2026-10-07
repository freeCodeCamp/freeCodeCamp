import { Boolean, Number, String } from '../../../utils/globals.js';
export function unboxedToBoxedMapper(value) {
    switch (typeof value) {
        case 'boolean':
            return new Boolean(value);
        case 'number':
            return new Number(value);
        case 'string':
            return new String(value);
        default:
            return value;
    }
}
export function unboxedToBoxedUnmapper(value) {
    if (typeof value !== 'object' || value === null || !('constructor' in value)) {
        return value;
    }
    return value.constructor === Boolean || value.constructor === Number || value.constructor === String
        ? value.valueOf()
        : value;
}
