"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexaString = hexaString;
const array_1 = require("./array");
const hexa_1 = require("./hexa");
const CodePointsToString_1 = require("./_internals/mappers/CodePointsToString");
const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
const safeObjectAssign = Object.assign;
function hexaString(constraints = {}) {
    const charArbitrary = (0, hexa_1.hexa)();
    const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForStringLegacy)(charArbitrary, CodePointsToString_1.codePointsToStringUnmapper);
    const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
        experimentalCustomSlices,
    });
    return (0, array_1.array)(charArbitrary, enrichedConstraints).map(CodePointsToString_1.codePointsToStringMapper, CodePointsToString_1.codePointsToStringUnmapper);
}
