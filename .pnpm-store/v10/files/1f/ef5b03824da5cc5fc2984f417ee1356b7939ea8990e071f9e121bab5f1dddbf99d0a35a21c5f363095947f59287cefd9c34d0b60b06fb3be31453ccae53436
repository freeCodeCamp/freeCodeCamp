import { array } from './array.js';
import { getOrCreateLowerAlphaNumericArbitrary } from './_internals/builders/CharacterRangeArbitraryBuilder.js';
import { domain } from './domain.js';
import { string } from './string.js';
import { tuple } from './tuple.js';
import { adapter } from './_internals/AdapterArbitrary.js';
import { safeJoin, safeSlice, safeSplit } from '../utils/globals.js';
function dotAdapter(a) {
    let currentLength = a[0].length;
    for (let index = 1; index !== a.length; ++index) {
        currentLength += 1 + a[index].length;
        if (currentLength > 64) {
            return { adapted: true, value: safeSlice(a, 0, index) };
        }
    }
    return { adapted: false, value: a };
}
function dotMapper(a) {
    return safeJoin(a, '.');
}
function dotUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported');
    }
    return safeSplit(value, '.');
}
function atMapper(data) {
    return `${data[0]}@${data[1]}`;
}
function atUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported');
    }
    return safeSplit(value, '@', 2);
}
export function emailAddress(constraints = {}) {
    const atextArb = getOrCreateLowerAlphaNumericArbitrary("!#$%&'*+-/=?^_`{|}~");
    const localPartArb = adapter(array(string({
        unit: atextArb,
        minLength: 1,
        maxLength: 64,
        size: constraints.size,
    }), { minLength: 1, maxLength: 32, size: constraints.size }), dotAdapter).map(dotMapper, dotUnmapper);
    return tuple(localPartArb, domain({ size: constraints.size })).map(atMapper, atUnmapper);
}
