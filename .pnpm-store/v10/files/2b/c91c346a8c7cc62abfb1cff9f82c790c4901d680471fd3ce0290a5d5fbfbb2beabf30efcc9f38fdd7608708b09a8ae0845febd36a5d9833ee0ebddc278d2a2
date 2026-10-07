"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonValue = jsonValue;
const string_1 = require("./string");
const JsonConstraintsBuilder_1 = require("./_internals/helpers/JsonConstraintsBuilder");
const anything_1 = require("./anything");
const fullUnicodeString_1 = require("./fullUnicodeString");
function jsonValue(constraints = {}) {
    const noUnicodeString = constraints.noUnicodeString === undefined || constraints.noUnicodeString === true;
    const stringArbitrary = 'stringUnit' in constraints
        ? (0, string_1.string)({ unit: constraints.stringUnit })
        : noUnicodeString
            ? (0, string_1.string)()
            : (0, fullUnicodeString_1.fullUnicodeString)();
    return (0, anything_1.anything)((0, JsonConstraintsBuilder_1.jsonConstraintsBuilder)(stringArbitrary, constraints));
}
