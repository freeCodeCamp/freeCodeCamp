"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailAddress = emailAddress;
const array_1 = require("./array");
const CharacterRangeArbitraryBuilder_1 = require("./_internals/builders/CharacterRangeArbitraryBuilder");
const domain_1 = require("./domain");
const string_1 = require("./string");
const tuple_1 = require("./tuple");
const AdapterArbitrary_1 = require("./_internals/AdapterArbitrary");
const globals_1 = require("../utils/globals");
function dotAdapter(a) {
    let currentLength = a[0].length;
    for (let index = 1; index !== a.length; ++index) {
        currentLength += 1 + a[index].length;
        if (currentLength > 64) {
            return { adapted: true, value: (0, globals_1.safeSlice)(a, 0, index) };
        }
    }
    return { adapted: false, value: a };
}
function dotMapper(a) {
    return (0, globals_1.safeJoin)(a, '.');
}
function dotUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported');
    }
    return (0, globals_1.safeSplit)(value, '.');
}
function atMapper(data) {
    return `${data[0]}@${data[1]}`;
}
function atUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported');
    }
    return (0, globals_1.safeSplit)(value, '@', 2);
}
function emailAddress(constraints = {}) {
    const atextArb = (0, CharacterRangeArbitraryBuilder_1.getOrCreateLowerAlphaNumericArbitrary)("!#$%&'*+-/=?^_`{|}~");
    const localPartArb = (0, AdapterArbitrary_1.adapter)((0, array_1.array)((0, string_1.string)({
        unit: atextArb,
        minLength: 1,
        maxLength: 64,
        size: constraints.size,
    }), { minLength: 1, maxLength: 32, size: constraints.size }), dotAdapter).map(dotMapper, dotUnmapper);
    return (0, tuple_1.tuple)(localPartArb, (0, domain_1.domain)({ size: constraints.size })).map(atMapper, atUnmapper);
}
