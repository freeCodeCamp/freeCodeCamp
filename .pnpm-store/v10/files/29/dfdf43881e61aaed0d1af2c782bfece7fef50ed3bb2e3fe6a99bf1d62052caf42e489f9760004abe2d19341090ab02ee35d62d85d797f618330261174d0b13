"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dictionary = dictionary;
const tuple_1 = require("./tuple");
const uniqueArray_1 = require("./uniqueArray");
const KeyValuePairsToObject_1 = require("./_internals/mappers/KeyValuePairsToObject");
const constant_1 = require("./constant");
const boolean_1 = require("./boolean");
function dictionaryKeyExtractor(entry) {
    return entry[0];
}
function dictionary(keyArb, valueArb, constraints = {}) {
    const noNullPrototype = constraints.noNullPrototype !== false;
    return (0, tuple_1.tuple)((0, uniqueArray_1.uniqueArray)((0, tuple_1.tuple)(keyArb, valueArb), {
        minLength: constraints.minKeys,
        maxLength: constraints.maxKeys,
        size: constraints.size,
        selector: dictionaryKeyExtractor,
        depthIdentifier: constraints.depthIdentifier,
    }), noNullPrototype ? (0, constant_1.constant)(false) : (0, boolean_1.boolean)()).map(KeyValuePairsToObject_1.keyValuePairsToObjectMapper, KeyValuePairsToObject_1.keyValuePairsToObjectUnmapper);
}
