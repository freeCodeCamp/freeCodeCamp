"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64String = base64String;
const array_1 = require("./array");
const base64_1 = require("./base64");
const MaxLengthFromMinLength_1 = require("./_internals/helpers/MaxLengthFromMinLength");
const CodePointsToString_1 = require("./_internals/mappers/CodePointsToString");
const StringToBase64_1 = require("./_internals/mappers/StringToBase64");
const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
function base64String(constraints = {}) {
    const { minLength: unscaledMinLength = 0, maxLength: unscaledMaxLength = MaxLengthFromMinLength_1.MaxLengthUpperBound, size } = constraints;
    const minLength = unscaledMinLength + 3 - ((unscaledMinLength + 3) % 4);
    const maxLength = unscaledMaxLength - (unscaledMaxLength % 4);
    const requestedSize = constraints.maxLength === undefined && size === undefined ? '=' : size;
    if (minLength > maxLength)
        throw new Error('Minimal length should be inferior or equal to maximal length');
    if (minLength % 4 !== 0)
        throw new Error('Minimal length of base64 strings must be a multiple of 4');
    if (maxLength % 4 !== 0)
        throw new Error('Maximal length of base64 strings must be a multiple of 4');
    const charArbitrary = (0, base64_1.base64)();
    const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForStringLegacy)(charArbitrary, CodePointsToString_1.codePointsToStringUnmapper);
    const enrichedConstraints = {
        minLength,
        maxLength,
        size: requestedSize,
        experimentalCustomSlices,
    };
    return (0, array_1.array)(charArbitrary, enrichedConstraints)
        .map(CodePointsToString_1.codePointsToStringMapper, CodePointsToString_1.codePointsToStringUnmapper)
        .map(StringToBase64_1.stringToBase64Mapper, StringToBase64_1.stringToBase64Unmapper);
}
