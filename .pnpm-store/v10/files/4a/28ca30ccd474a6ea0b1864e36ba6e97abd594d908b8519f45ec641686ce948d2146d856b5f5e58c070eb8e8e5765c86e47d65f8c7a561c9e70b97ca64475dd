"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unicodeString = unicodeString;
const array_1 = require("./array");
const unicode_1 = require("./unicode");
const CodePointsToString_1 = require("./_internals/mappers/CodePointsToString");
const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
const safeObjectAssign = Object.assign;
function unicodeString(constraints = {}) {
    const charArbitrary = (0, unicode_1.unicode)();
    const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForStringLegacy)(charArbitrary, CodePointsToString_1.codePointsToStringUnmapper);
    const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
        experimentalCustomSlices,
    });
    return (0, array_1.array)(charArbitrary, enrichedConstraints).map(CodePointsToString_1.codePointsToStringMapper, CodePointsToString_1.codePointsToStringUnmapper);
}
