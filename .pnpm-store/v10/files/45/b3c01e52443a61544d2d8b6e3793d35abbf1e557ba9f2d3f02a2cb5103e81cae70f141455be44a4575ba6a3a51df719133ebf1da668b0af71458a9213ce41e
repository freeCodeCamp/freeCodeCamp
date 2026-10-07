import { safeJoin, safeMap, safeSplit } from '../utils/globals.js';
import { nat } from './nat.js';
import { tuple } from './tuple.js';
import { tryParseStringifiedNat } from './_internals/mappers/NatToStringifiedNat.js';
function dotJoinerMapper(data) {
    return safeJoin(data, '.');
}
function dotJoinerUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Invalid type');
    }
    return safeMap(safeSplit(value, '.'), (v) => tryParseStringifiedNat(v, 10));
}
export function ipV4() {
    return tuple(nat(255), nat(255), nat(255), nat(255)).map(dotJoinerMapper, dotJoinerUnmapper);
}
