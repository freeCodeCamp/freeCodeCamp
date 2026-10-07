"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyArbitraryBuilder = anyArbitraryBuilder;
const stringify_1 = require("../../../utils/stringify");
const array_1 = require("../../array");
const oneof_1 = require("../../oneof");
const tuple_1 = require("../../tuple");
const bigInt_1 = require("../../bigInt");
const date_1 = require("../../date");
const float32Array_1 = require("../../float32Array");
const float64Array_1 = require("../../float64Array");
const int16Array_1 = require("../../int16Array");
const int32Array_1 = require("../../int32Array");
const int8Array_1 = require("../../int8Array");
const uint16Array_1 = require("../../uint16Array");
const uint32Array_1 = require("../../uint32Array");
const uint8Array_1 = require("../../uint8Array");
const uint8ClampedArray_1 = require("../../uint8ClampedArray");
const sparseArray_1 = require("../../sparseArray");
const ArrayToMap_1 = require("../mappers/ArrayToMap");
const ArrayToSet_1 = require("../mappers/ArrayToSet");
const letrec_1 = require("../../letrec");
const uniqueArray_1 = require("../../uniqueArray");
const DepthContext_1 = require("../helpers/DepthContext");
const dictionary_1 = require("../../dictionary");
function mapOf(ka, va, maxKeys, size, depthIdentifier) {
    return (0, uniqueArray_1.uniqueArray)((0, tuple_1.tuple)(ka, va), {
        maxLength: maxKeys,
        size,
        comparator: 'SameValueZero',
        selector: (t) => t[0],
        depthIdentifier,
    }).map(ArrayToMap_1.arrayToMapMapper, ArrayToMap_1.arrayToMapUnmapper);
}
function dictOf(ka, va, maxKeys, size, depthIdentifier, withNullPrototype) {
    return (0, dictionary_1.dictionary)(ka, va, {
        maxKeys,
        noNullPrototype: !withNullPrototype,
        size,
        depthIdentifier,
    });
}
function setOf(va, maxKeys, size, depthIdentifier) {
    return (0, uniqueArray_1.uniqueArray)(va, { maxLength: maxKeys, size, comparator: 'SameValueZero', depthIdentifier }).map(ArrayToSet_1.arrayToSetMapper, ArrayToSet_1.arrayToSetUnmapper);
}
function typedArray(constraints) {
    return (0, oneof_1.oneof)((0, int8Array_1.int8Array)(constraints), (0, uint8Array_1.uint8Array)(constraints), (0, uint8ClampedArray_1.uint8ClampedArray)(constraints), (0, int16Array_1.int16Array)(constraints), (0, uint16Array_1.uint16Array)(constraints), (0, int32Array_1.int32Array)(constraints), (0, uint32Array_1.uint32Array)(constraints), (0, float32Array_1.float32Array)(constraints), (0, float64Array_1.float64Array)(constraints));
}
function anyArbitraryBuilder(constraints) {
    const arbitrariesForBase = constraints.values;
    const depthSize = constraints.depthSize;
    const depthIdentifier = (0, DepthContext_1.createDepthIdentifier)();
    const maxDepth = constraints.maxDepth;
    const maxKeys = constraints.maxKeys;
    const size = constraints.size;
    const baseArb = (0, oneof_1.oneof)(...arbitrariesForBase, ...(constraints.withBigInt ? [(0, bigInt_1.bigInt)()] : []), ...(constraints.withDate ? [(0, date_1.date)()] : []));
    return (0, letrec_1.letrec)((tie) => ({
        anything: (0, oneof_1.oneof)({ maxDepth, depthSize, depthIdentifier }, baseArb, tie('array'), tie('object'), ...(constraints.withMap ? [tie('map')] : []), ...(constraints.withSet ? [tie('set')] : []), ...(constraints.withObjectString ? [tie('anything').map((o) => (0, stringify_1.stringify)(o))] : []), ...(constraints.withTypedArray ? [typedArray({ maxLength: maxKeys, size })] : []), ...(constraints.withSparseArray
            ? [(0, sparseArray_1.sparseArray)(tie('anything'), { maxNumElements: maxKeys, size, depthIdentifier })]
            : [])),
        keys: constraints.withObjectString
            ? (0, oneof_1.oneof)({ arbitrary: constraints.key, weight: 10 }, { arbitrary: tie('anything').map((o) => (0, stringify_1.stringify)(o)), weight: 1 })
            : constraints.key,
        array: (0, array_1.array)(tie('anything'), { maxLength: maxKeys, size, depthIdentifier }),
        set: setOf(tie('anything'), maxKeys, size, depthIdentifier),
        map: (0, oneof_1.oneof)(mapOf(tie('keys'), tie('anything'), maxKeys, size, depthIdentifier), mapOf(tie('anything'), tie('anything'), maxKeys, size, depthIdentifier)),
        object: dictOf(tie('keys'), tie('anything'), maxKeys, size, depthIdentifier, constraints.withNullPrototype),
    })).anything;
}
