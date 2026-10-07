"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toQualifiedObjectConstraints = toQualifiedObjectConstraints;
const boolean_1 = require("../../boolean");
const constant_1 = require("../../constant");
const double_1 = require("../../double");
const fullUnicodeString_1 = require("../../fullUnicodeString");
const maxSafeInteger_1 = require("../../maxSafeInteger");
const oneof_1 = require("../../oneof");
const string_1 = require("../../string");
const BoxedArbitraryBuilder_1 = require("../builders/BoxedArbitraryBuilder");
function defaultValues(constraints, stringArbitrary) {
    return [
        (0, boolean_1.boolean)(),
        (0, maxSafeInteger_1.maxSafeInteger)(),
        (0, double_1.double)(),
        stringArbitrary(constraints),
        (0, oneof_1.oneof)(stringArbitrary(constraints), (0, constant_1.constant)(null), (0, constant_1.constant)(undefined)),
    ];
}
function boxArbitraries(arbs) {
    return arbs.map((arb) => (0, BoxedArbitraryBuilder_1.boxedArbitraryBuilder)(arb));
}
function boxArbitrariesIfNeeded(arbs, boxEnabled) {
    return boxEnabled ? boxArbitraries(arbs).concat(arbs) : arbs;
}
function toQualifiedObjectConstraints(settings = {}) {
    function orDefault(optionalValue, defaultValue) {
        return optionalValue !== undefined ? optionalValue : defaultValue;
    }
    const stringArbitrary = 'stringUnit' in settings ? string_1.string : settings.withUnicodeString ? fullUnicodeString_1.fullUnicodeString : string_1.string;
    const valueConstraints = { size: settings.size, unit: settings.stringUnit };
    return {
        key: orDefault(settings.key, stringArbitrary(valueConstraints)),
        values: boxArbitrariesIfNeeded(orDefault(settings.values, defaultValues(valueConstraints, stringArbitrary)), orDefault(settings.withBoxedValues, false)),
        depthSize: settings.depthSize,
        maxDepth: settings.maxDepth,
        maxKeys: settings.maxKeys,
        size: settings.size,
        withSet: orDefault(settings.withSet, false),
        withMap: orDefault(settings.withMap, false),
        withObjectString: orDefault(settings.withObjectString, false),
        withNullPrototype: orDefault(settings.withNullPrototype, false),
        withBigInt: orDefault(settings.withBigInt, false),
        withDate: orDefault(settings.withDate, false),
        withTypedArray: orDefault(settings.withTypedArray, false),
        withSparseArray: orDefault(settings.withSparseArray, false),
    };
}
