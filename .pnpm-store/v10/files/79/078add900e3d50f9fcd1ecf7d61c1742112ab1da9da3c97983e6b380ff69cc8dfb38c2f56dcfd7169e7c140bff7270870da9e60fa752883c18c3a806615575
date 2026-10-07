import { safeGet, safePush, safeSet } from '../../../utils/globals.js';
import { patternsToStringUnmapperIsValidLength } from '../mappers/PatternsToString.js';
import { MaxLengthUpperBound } from './MaxLengthFromMinLength.js';
import { tokenizeString } from './TokenizeString.js';
const dangerousStrings = [
    '__defineGetter__',
    '__defineSetter__',
    '__lookupGetter__',
    '__lookupSetter__',
    '__proto__',
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
    'apply',
    'arguments',
    'bind',
    'call',
    'caller',
    'length',
    'name',
    'prototype',
    'key',
    'ref',
];
function computeCandidateStringLegacy(dangerous, charArbitrary, stringSplitter) {
    let candidate;
    try {
        candidate = stringSplitter(dangerous);
    }
    catch (err) {
        return undefined;
    }
    for (const entry of candidate) {
        if (!charArbitrary.canShrinkWithoutContext(entry)) {
            return undefined;
        }
    }
    return candidate;
}
export function createSlicesForStringLegacy(charArbitrary, stringSplitter) {
    const slicesForString = [];
    for (const dangerous of dangerousStrings) {
        const candidate = computeCandidateStringLegacy(dangerous, charArbitrary, stringSplitter);
        if (candidate !== undefined) {
            safePush(slicesForString, candidate);
        }
    }
    return slicesForString;
}
const slicesPerArbitrary = new WeakMap();
function createSlicesForStringNoConstraints(charArbitrary) {
    const slicesForString = [];
    for (const dangerous of dangerousStrings) {
        const candidate = tokenizeString(charArbitrary, dangerous, 0, MaxLengthUpperBound);
        if (candidate !== undefined) {
            safePush(slicesForString, candidate);
        }
    }
    return slicesForString;
}
export function createSlicesForString(charArbitrary, constraints) {
    let slices = safeGet(slicesPerArbitrary, charArbitrary);
    if (slices === undefined) {
        slices = createSlicesForStringNoConstraints(charArbitrary);
        safeSet(slicesPerArbitrary, charArbitrary, slices);
    }
    const slicesForConstraints = [];
    for (const slice of slices) {
        if (patternsToStringUnmapperIsValidLength(slice, constraints)) {
            safePush(slicesForConstraints, slice);
        }
    }
    return slicesForConstraints;
}
