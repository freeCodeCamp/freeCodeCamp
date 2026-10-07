import { safeNormalize, safePush } from '../../utils/globals.js';
import { mapToConstant } from '../mapToConstant.js';
import { asciiAlphabetRanges, autonomousDecomposableGraphemeRanges, autonomousGraphemeRanges, fullAlphabetRanges, } from './data/GraphemeRanges.js';
import { convertGraphemeRangeToMapToConstantEntry, intersectGraphemeRanges } from './helpers/GraphemeRangesHelpers.js';
const registeredStringUnitInstancesMap = Object.create(null);
function getAlphabetRanges(alphabet) {
    switch (alphabet) {
        case 'full':
            return fullAlphabetRanges;
        case 'ascii':
            return asciiAlphabetRanges;
    }
}
function getOrCreateStringUnitInstance(type, alphabet) {
    const key = `${type}:${alphabet}`;
    const registered = registeredStringUnitInstancesMap[key];
    if (registered !== undefined) {
        return registered;
    }
    const alphabetRanges = getAlphabetRanges(alphabet);
    const ranges = type === 'binary' ? alphabetRanges : intersectGraphemeRanges(alphabetRanges, autonomousGraphemeRanges);
    const entries = [];
    for (const range of ranges) {
        safePush(entries, convertGraphemeRangeToMapToConstantEntry(range));
    }
    if (type === 'grapheme') {
        const decomposedRanges = intersectGraphemeRanges(alphabetRanges, autonomousDecomposableGraphemeRanges);
        for (const range of decomposedRanges) {
            const rawEntry = convertGraphemeRangeToMapToConstantEntry(range);
            safePush(entries, {
                num: rawEntry.num,
                build: (idInGroup) => safeNormalize(rawEntry.build(idInGroup), 'NFD'),
            });
        }
    }
    const stringUnitInstance = mapToConstant(...entries);
    registeredStringUnitInstancesMap[key] = stringUnitInstance;
    return stringUnitInstance;
}
export function stringUnit(type, alphabet) {
    return getOrCreateStringUnitInstance(type, alphabet);
}
