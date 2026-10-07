"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexToMappedConstantMapperFor = indexToMappedConstantMapperFor;
exports.indexToMappedConstantUnmapperFor = indexToMappedConstantUnmapperFor;
const globals_1 = require("../../../utils/globals");
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
function indexToMappedConstantMapperFor(entries) {
    const dichotomyEntries = buildDichotomyEntries(entries);
    return function indexToMappedConstantMapper(choiceIndex) {
        const dichotomyEntry = findDichotomyEntry(dichotomyEntries, choiceIndex);
        return dichotomyEntry.entry.build(choiceIndex - dichotomyEntry.from);
    };
}
function buildReverseMapping(entries) {
    const reverseMapping = { mapping: new globals_1.Map(), negativeZeroIndex: undefined };
    let choiceIndex = 0;
    for (let entryIdx = 0; entryIdx !== entries.length; ++entryIdx) {
        const entry = entries[entryIdx];
        for (let idxInEntry = 0; idxInEntry !== entry.num; ++idxInEntry) {
            const value = entry.build(idxInEntry);
            if (value === 0 && 1 / value === globals_1.Number.NEGATIVE_INFINITY) {
                reverseMapping.negativeZeroIndex = choiceIndex;
            }
            else {
                (0, globals_1.safeMapSet)(reverseMapping.mapping, value, choiceIndex);
            }
            ++choiceIndex;
        }
    }
    return reverseMapping;
}
function indexToMappedConstantUnmapperFor(entries) {
    let reverseMapping = null;
    return function indexToMappedConstantUnmapper(value) {
        if (reverseMapping === null) {
            reverseMapping = buildReverseMapping(entries);
        }
        const choiceIndex = safeObjectIs(value, -0)
            ? reverseMapping.negativeZeroIndex
            : (0, globals_1.safeMapGet)(reverseMapping.mapping, value);
        if (choiceIndex === undefined) {
            throw new globals_1.Error('Unknown value encountered cannot be built using this mapToConstant');
        }
        return choiceIndex;
    };
}
