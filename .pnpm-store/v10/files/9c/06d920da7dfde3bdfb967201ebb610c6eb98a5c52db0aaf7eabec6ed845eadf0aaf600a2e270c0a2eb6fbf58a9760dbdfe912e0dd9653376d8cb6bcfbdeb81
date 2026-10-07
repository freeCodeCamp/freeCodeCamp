"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringUnit = stringUnit;
const globals_1 = require("../../utils/globals");
const mapToConstant_1 = require("../mapToConstant");
const GraphemeRanges_1 = require("./data/GraphemeRanges");
const GraphemeRangesHelpers_1 = require("./helpers/GraphemeRangesHelpers");
const registeredStringUnitInstancesMap = Object.create(null);
function getAlphabetRanges(alphabet) {
    switch (alphabet) {
        case 'full':
            return GraphemeRanges_1.fullAlphabetRanges;
        case 'ascii':
            return GraphemeRanges_1.asciiAlphabetRanges;
    }
}
function getOrCreateStringUnitInstance(type, alphabet) {
    const key = `${type}:${alphabet}`;
    const registered = registeredStringUnitInstancesMap[key];
    if (registered !== undefined) {
        return registered;
    }
    const alphabetRanges = getAlphabetRanges(alphabet);
    const ranges = type === 'binary' ? alphabetRanges : (0, GraphemeRangesHelpers_1.intersectGraphemeRanges)(alphabetRanges, GraphemeRanges_1.autonomousGraphemeRanges);
    const entries = [];
    for (const range of ranges) {
        (0, globals_1.safePush)(entries, (0, GraphemeRangesHelpers_1.convertGraphemeRangeToMapToConstantEntry)(range));
    }
    if (type === 'grapheme') {
        const decomposedRanges = (0, GraphemeRangesHelpers_1.intersectGraphemeRanges)(alphabetRanges, GraphemeRanges_1.autonomousDecomposableGraphemeRanges);
        for (const range of decomposedRanges) {
            const rawEntry = (0, GraphemeRangesHelpers_1.convertGraphemeRangeToMapToConstantEntry)(range);
            (0, globals_1.safePush)(entries, {
                num: rawEntry.num,
                build: (idInGroup) => (0, globals_1.safeNormalize)(rawEntry.build(idInGroup), 'NFD'),
            });
        }
    }
    const stringUnitInstance = (0, mapToConstant_1.mapToConstant)(...entries);
    registeredStringUnitInstancesMap[key] = stringUnitInstance;
    return stringUnitInstance;
}
function stringUnit(type, alphabet) {
    return getOrCreateStringUnitInstance(type, alphabet);
}
