"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPartialRecordArbitrary = buildPartialRecordArbitrary;
const globals_1 = require("../../../utils/globals");
const boolean_1 = require("../../boolean");
const constant_1 = require("../../constant");
const option_1 = require("../../option");
const tuple_1 = require("../../tuple");
const EnumerableKeysExtractor_1 = require("../helpers/EnumerableKeysExtractor");
const ValuesAndSeparateKeysToObject_1 = require("../mappers/ValuesAndSeparateKeysToObject");
const noKeyValue = Symbol('no-key');
function buildPartialRecordArbitrary(recordModel, requiredKeys, noNullPrototype) {
    const keys = (0, EnumerableKeysExtractor_1.extractEnumerableKeys)(recordModel);
    const arbs = [];
    for (let index = 0; index !== keys.length; ++index) {
        const k = keys[index];
        const requiredArbitrary = recordModel[k];
        if (requiredKeys === undefined || (0, globals_1.safeIndexOf)(requiredKeys, k) !== -1) {
            (0, globals_1.safePush)(arbs, requiredArbitrary);
        }
        else {
            (0, globals_1.safePush)(arbs, (0, option_1.option)(requiredArbitrary, { nil: noKeyValue }));
        }
    }
    return (0, tuple_1.tuple)((0, tuple_1.tuple)(...arbs), noNullPrototype ? (0, constant_1.constant)(false) : (0, boolean_1.boolean)()).map((0, ValuesAndSeparateKeysToObject_1.buildValuesAndSeparateKeysToObjectMapper)(keys, noKeyValue), (0, ValuesAndSeparateKeysToObject_1.buildValuesAndSeparateKeysToObjectUnmapper)(keys, noKeyValue));
}
