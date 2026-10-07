import { safeJoin, safeSplit } from '../../../utils/globals.js';
export function charsToStringMapper(tab) {
    return safeJoin(tab, '');
}
export function charsToStringUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Cannot unmap the passed value');
    }
    return safeSplit(value, '');
}
