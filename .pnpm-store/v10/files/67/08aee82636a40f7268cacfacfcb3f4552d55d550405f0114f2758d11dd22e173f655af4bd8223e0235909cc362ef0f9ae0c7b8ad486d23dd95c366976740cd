import { Error, Number, Map, safeMapGet, safeMapSet } from '../../../utils/globals.js';
const safeObjectIs = Object.is;
function buildDichotomyEntries(entries) {
    let currentFrom = 0;
    const dichotomyEntries = [];
    for (const entry of entries) {
        const from = currentFrom;
        currentFrom = from + entry.num;
        const to = currentFrom - 1;
        dichotomyEntries.push({ from, to, entry });
    }
    return dichotomyEntries;
}
function findDichotomyEntry(dichotomyEntries, choiceIndex) {
    let min = 0;
    let max = dichotomyEntries.length;
    while (max - min > 1) {
        const mid = ~~((min + max) / 2);
        if (choiceIndex < dichotomyEntries[mid].from) {
            max = mid;
        }
        else {
            min = mid;
        }
    }
    return dichotomyEntries[min];
}
export function indexToMappedConstantMapperFor(entries) {
    const dichotomyEntries = buildDichotomyEntries(entries);
    return function indexToMappedConstantMapper(choiceIndex) {
        const dichotomyEntry = findDichotomyEntry(dichotomyEntries, choiceIndex);
        return dichotomyEntry.entry.build(choiceIndex - dichotomyEntry.from);
    };
}
function buildReverseMapping(entries) {
    const reverseMapping = { mapping: new Map(), negativeZeroIndex: undefined };
    let choiceIndex = 0;
    for (let entryIdx = 0; entryIdx !== entries.length; ++entryIdx) {
        const entry = entries[entryIdx];
        for (let idxInEntry = 0; idxInEntry !== entry.num; ++idxInEntry) {
            const value = entry.build(idxInEntry);
            if (value === 0 && 1 / value === Number.NEGATIVE_INFINITY) {
                reverseMapping.negativeZeroIndex = choiceIndex;
            }
            else {
                safeMapSet(reverseMapping.mapping, value, choiceIndex);
            }
            ++choiceIndex;
        }
    }
    return reverseMapping;
}
export function indexToMappedConstantUnmapperFor(entries) {
    let reverseMapping = null;
    return function indexToMappedConstantUnmapper(value) {
        if (reverseMapping === null) {
            reverseMapping = buildReverseMapping(entries);
        }
        const choiceIndex = safeObjectIs(value, -0)
            ? reverseMapping.negativeZeroIndex
            : safeMapGet(reverseMapping.mapping, value);
        if (choiceIndex === undefined) {
            throw new Error('Unknown value encountered cannot be built using this mapToConstant');
        }
        return choiceIndex;
    };
}
