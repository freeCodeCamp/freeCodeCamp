import { safeJoin } from '../../../utils/globals.js';
export function codePointsToStringMapper(tab) {
    return safeJoin(tab, '');
}
export function codePointsToStringUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Cannot unmap the passed value');
    }
    return [...value];
}
