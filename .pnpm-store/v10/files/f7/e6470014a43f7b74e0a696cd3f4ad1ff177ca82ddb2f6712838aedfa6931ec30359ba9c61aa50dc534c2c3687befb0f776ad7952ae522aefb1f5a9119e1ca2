"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildStableArbitraryGeneratorCache = buildStableArbitraryGeneratorCache;
exports.naiveIsEqual = naiveIsEqual;
const globals_1 = require("../../../utils/globals");
const safeArrayIsArray = Array.isArray;
const safeObjectKeys = Object.keys;
const safeObjectIs = Object.is;
function buildStableArbitraryGeneratorCache(isEqual) {
    const previousCallsPerBuilder = new globals_1.Map();
    return function stableArbitraryGeneratorCache(builder, args) {
        const entriesForBuilder = (0, globals_1.safeMapGet)(previousCallsPerBuilder, builder);
        if (entriesForBuilder === undefined) {
            const newValue = builder(...args);
            (0, globals_1.safeMapSet)(previousCallsPerBuilder, builder, [{ args, value: newValue }]);
            return newValue;
        }
        const safeEntriesForBuilder = entriesForBuilder;
        for (const entry of safeEntriesForBuilder) {
            if (isEqual(args, entry.args)) {
                return entry.value;
            }
        }
        const newValue = builder(...args);
        (0, globals_1.safePush)(safeEntriesForBuilder, { args, value: newValue });
        return newValue;
    };
}
function naiveIsEqual(v1, v2) {
    if (v1 !== null && typeof v1 === 'object' && v2 !== null && typeof v2 === 'object') {
        if (safeArrayIsArray(v1)) {
            if (!safeArrayIsArray(v2))
                return false;
            if (v1.length !== v2.length)
                return false;
        }
        else if (safeArrayIsArray(v2)) {
            return false;
        }
        if (safeObjectKeys(v1).length !== safeObjectKeys(v2).length) {
            return false;
        }
        for (const index in v1) {
            if (!(index in v2)) {
                return false;
            }
            if (!naiveIsEqual(v1[index], v2[index])) {
                return false;
            }
        }
        return true;
    }
    else {
        return safeObjectIs(v1, v2);
    }
}
