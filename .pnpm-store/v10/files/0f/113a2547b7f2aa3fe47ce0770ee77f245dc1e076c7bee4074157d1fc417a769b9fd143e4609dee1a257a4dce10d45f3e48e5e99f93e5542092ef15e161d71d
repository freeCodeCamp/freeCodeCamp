import { safeJoin, safeMap, safeSplice, safeSplit } from '../../../utils/globals.js';
export function segmentsToPathMapper(segments) {
    return safeJoin(safeMap(segments, (v) => `/${v}`), '');
}
export function segmentsToPathUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Incompatible value received: type');
    }
    if (value.length !== 0 && value[0] !== '/') {
        throw new Error('Incompatible value received: start');
    }
    return safeSplice(safeSplit(value, '/'), 1);
}
