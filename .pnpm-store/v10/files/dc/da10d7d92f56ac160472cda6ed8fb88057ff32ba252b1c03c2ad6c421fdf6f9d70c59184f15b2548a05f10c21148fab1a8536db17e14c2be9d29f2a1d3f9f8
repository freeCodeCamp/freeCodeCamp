import { safeJoin, safeSplit } from '../utils/globals.js';
import { oneof } from './oneof.js';
import { tuple } from './tuple.js';
import { buildStringifiedNatArbitrary } from './_internals/builders/StringifiedNatArbitraryBuilder.js';
function dotJoinerMapper(data) {
    return safeJoin(data, '.');
}
function dotJoinerUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Invalid type');
    }
    return safeSplit(value, '.');
}
export function ipV4Extended() {
    return oneof(tuple(buildStringifiedNatArbitrary(255), buildStringifiedNatArbitrary(255), buildStringifiedNatArbitrary(255), buildStringifiedNatArbitrary(255)).map(dotJoinerMapper, dotJoinerUnmapper), tuple(buildStringifiedNatArbitrary(255), buildStringifiedNatArbitrary(255), buildStringifiedNatArbitrary(65535)).map(dotJoinerMapper, dotJoinerUnmapper), tuple(buildStringifiedNatArbitrary(255), buildStringifiedNatArbitrary(16777215)).map(dotJoinerMapper, dotJoinerUnmapper), buildStringifiedNatArbitrary(4294967295));
}
