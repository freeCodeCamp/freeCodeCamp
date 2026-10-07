"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sparseArray = sparseArray;
const globals_1 = require("../utils/globals");
const tuple_1 = require("./tuple");
const uniqueArray_1 = require("./uniqueArray");
const RestrictedIntegerArbitraryBuilder_1 = require("./_internals/builders/RestrictedIntegerArbitraryBuilder");
const MaxLengthFromMinLength_1 = require("./_internals/helpers/MaxLengthFromMinLength");
const safeMathMin = Math.min;
const safeMathMax = Math.max;
const safeArrayIsArray = globals_1.Array.isArray;
const safeObjectEntries = Object.entries;
function extractMaxIndex(indexesAndValues) {
    let maxIndex = -1;
    for (let index = 0; index !== indexesAndValues.length; ++index) {
        maxIndex = safeMathMax(maxIndex, indexesAndValues[index][0]);
    }
    return maxIndex;
}
function arrayFromItems(length, indexesAndValues) {
    const array = (0, globals_1.Array)(length);
    for (let index = 0; index !== indexesAndValues.length; ++index) {
        const it = indexesAndValues[index];
        if (it[0] < length)
            array[it[0]] = it[1];
    }
    return array;
}
function sparseArray(arb, constraints = {}) {
    const { size, minNumElements = 0, maxLength = MaxLengthFromMinLength_1.MaxLengthUpperBound, maxNumElements = maxLength, noTrailingHole, depthIdentifier, } = constraints;
    const maxGeneratedNumElements = (0, MaxLengthFromMinLength_1.maxGeneratedLengthFromSizeForArbitrary)(size, minNumElements, maxNumElements, constraints.maxNumElements !== undefined);
    const maxGeneratedLength = (0, MaxLengthFromMinLength_1.maxGeneratedLengthFromSizeForArbitrary)(size, maxGeneratedNumElements, maxLength, constraints.maxLength !== undefined);
    if (minNumElements > maxLength) {
        throw new Error(`The minimal number of non-hole elements cannot be higher than the maximal length of the array`);
    }
    if (minNumElements > maxNumElements) {
        throw new Error(`The minimal number of non-hole elements cannot be higher than the maximal number of non-holes`);
    }
    const resultedMaxNumElements = safeMathMin(maxNumElements, maxLength);
    const resultedSizeMaxNumElements = constraints.maxNumElements !== undefined || size !== undefined ? size : '=';
    const maxGeneratedIndexAuthorized = safeMathMax(maxGeneratedLength - 1, 0);
    const maxIndexAuthorized = safeMathMax(maxLength - 1, 0);
    const sparseArrayNoTrailingHole = (0, uniqueArray_1.uniqueArray)((0, tuple_1.tuple)((0, RestrictedIntegerArbitraryBuilder_1.restrictedIntegerArbitraryBuilder)(0, maxGeneratedIndexAuthorized, maxIndexAuthorized), arb), {
        size: resultedSizeMaxNumElements,
        minLength: minNumElements,
        maxLength: resultedMaxNumElements,
        selector: (item) => item[0],
        depthIdentifier,
    }).map((items) => {
        const lastIndex = extractMaxIndex(items);
        return arrayFromItems(lastIndex + 1, items);
    }, (value) => {
        if (!safeArrayIsArray(value)) {
            throw new Error('Not supported entry type');
        }
        if (noTrailingHole && value.length !== 0 && !(value.length - 1 in value)) {
            throw new Error('No trailing hole');
        }
        return (0, globals_1.safeMap)(safeObjectEntries(value), (entry) => [Number(entry[0]), entry[1]]);
    });
    if (noTrailingHole || maxLength === minNumElements) {
        return sparseArrayNoTrailingHole;
    }
    return (0, tuple_1.tuple)(sparseArrayNoTrailingHole, (0, RestrictedIntegerArbitraryBuilder_1.restrictedIntegerArbitraryBuilder)(minNumElements, maxGeneratedLength, maxLength)).map((data) => {
        const sparse = data[0];
        const targetLength = data[1];
        if (sparse.length >= targetLength) {
            return sparse;
        }
        const longerSparse = (0, globals_1.safeSlice)(sparse);
        longerSparse.length = targetLength;
        return longerSparse;
    }, (value) => {
        if (!safeArrayIsArray(value)) {
            throw new Error('Not supported entry type');
        }
        return [value, value.length];
    });
}
