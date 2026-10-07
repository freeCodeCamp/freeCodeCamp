import { array } from './array.js';
import { getOrCreateLowerAlphaArbitrary, getOrCreateLowerAlphaNumericArbitrary, } from './_internals/builders/CharacterRangeArbitraryBuilder.js';
import { option } from './option.js';
import { string } from './string.js';
import { tuple } from './tuple.js';
import { filterInvalidSubdomainLabel } from './_internals/helpers/InvalidSubdomainLabelFiIter.js';
import { resolveSize, relativeSizeToSize } from './_internals/helpers/MaxLengthFromMinLength.js';
import { adapter } from './_internals/AdapterArbitrary.js';
import { safeJoin, safeSlice, safeSplit, safeSubstring } from '../utils/globals.js';
function toSubdomainLabelMapper([f, d]) {
    return d === null ? f : `${f}${d[0]}${d[1]}`;
}
function toSubdomainLabelUnmapper(value) {
    if (typeof value !== 'string' || value.length === 0) {
        throw new Error('Unsupported');
    }
    if (value.length === 1) {
        return [value[0], null];
    }
    return [value[0], [safeSubstring(value, 1, value.length - 1), value[value.length - 1]]];
}
function subdomainLabel(size) {
    const alphaNumericArb = getOrCreateLowerAlphaNumericArbitrary('');
    const alphaNumericHyphenArb = getOrCreateLowerAlphaNumericArbitrary('-');
    return tuple(alphaNumericArb, option(tuple(string({ unit: alphaNumericHyphenArb, size, maxLength: 61 }), alphaNumericArb)))
        .map(toSubdomainLabelMapper, toSubdomainLabelUnmapper)
        .filter(filterInvalidSubdomainLabel);
}
function labelsMapper(elements) {
    return `${safeJoin(elements[0], '.')}.${elements[1]}`;
}
function labelsUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported type');
    }
    const lastDotIndex = value.lastIndexOf('.');
    return [safeSplit(safeSubstring(value, 0, lastDotIndex), '.'), safeSubstring(value, lastDotIndex + 1)];
}
function labelsAdapter(labels) {
    const [subDomains, suffix] = labels;
    let lengthNotIncludingIndex = suffix.length;
    for (let index = 0; index !== subDomains.length; ++index) {
        lengthNotIncludingIndex += 1 + subDomains[index].length;
        if (lengthNotIncludingIndex > 255) {
            return { adapted: true, value: [safeSlice(subDomains, 0, index), suffix] };
        }
    }
    return { adapted: false, value: labels };
}
export function domain(constraints = {}) {
    const resolvedSize = resolveSize(constraints.size);
    const resolvedSizeMinusOne = relativeSizeToSize('-1', resolvedSize);
    const lowerAlphaArb = getOrCreateLowerAlphaArbitrary();
    const publicSuffixArb = string({ unit: lowerAlphaArb, minLength: 2, maxLength: 63, size: resolvedSizeMinusOne });
    return (adapter(tuple(array(subdomainLabel(resolvedSize), { size: resolvedSizeMinusOne, minLength: 1, maxLength: 127 }), publicSuffixArb), labelsAdapter).map(labelsMapper, labelsUnmapper));
}
