"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asciiString = asciiString;
const array_1 = require("./array");
const ascii_1 = require("./ascii");
const CodePointsToString_1 = require("./_internals/mappers/CodePointsToString");
const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
const safeObjectAssign = Object.assign;
function asciiString(constraints = {}) {
    const charArbitrary = (0, ascii_1.ascii)();
    const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForStringLegacy)(charArbitrary, CodePointsToString_1.codePointsToStringUnmapper);
    const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
        experimentalCustomSlices,
    });
    return (0, array_1.array)(charArbitrary, enrichedConstraints).map(CodePointsToString_1.codePointsToStringMapper, CodePointsToString_1.codePointsToStringUnmapper);
}
