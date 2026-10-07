"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringOf = stringOf;
const array_1 = require("./array");
const PatternsToString_1 = require("./_internals/mappers/PatternsToString");
const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
const safeObjectAssign = Object.assign;
function stringOf(charArb, constraints = {}) {
    const unmapper = (0, PatternsToString_1.patternsToStringUnmapperFor)(charArb, constraints);
    const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForStringLegacy)(charArb, unmapper);
    const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
        experimentalCustomSlices,
    });
    return (0, array_1.array)(charArb, enrichedConstraints).map(PatternsToString_1.patternsToStringMapper, unmapper);
}
