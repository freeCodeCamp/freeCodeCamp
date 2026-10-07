"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = string;
const array_1 = require("./array");
const SlicesForStringBuilder_1 = require("./_internals/helpers/SlicesForStringBuilder");
const StringUnitArbitrary_1 = require("./_internals/StringUnitArbitrary");
const PatternsToString_1 = require("./_internals/mappers/PatternsToString");
const safeObjectAssign = Object.assign;
function extractUnitArbitrary(constraints) {
    if (typeof constraints.unit === 'object') {
        return constraints.unit;
    }
    switch (constraints.unit) {
        case 'grapheme':
            return (0, StringUnitArbitrary_1.stringUnit)('grapheme', 'full');
        case 'grapheme-composite':
            return (0, StringUnitArbitrary_1.stringUnit)('composite', 'full');
        case 'grapheme-ascii':
        case undefined:
            return (0, StringUnitArbitrary_1.stringUnit)('grapheme', 'ascii');
        case 'binary':
            return (0, StringUnitArbitrary_1.stringUnit)('binary', 'full');
        case 'binary-ascii':
            return (0, StringUnitArbitrary_1.stringUnit)('binary', 'ascii');
    }
}
function string(constraints = {}) {
    const charArbitrary = extractUnitArbitrary(constraints);
    const unmapper = (0, PatternsToString_1.patternsToStringUnmapperFor)(charArbitrary, constraints);
    const experimentalCustomSlices = (0, SlicesForStringBuilder_1.createSlicesForString)(charArbitrary, constraints);
    const enrichedConstraints = safeObjectAssign(safeObjectAssign({}, constraints), {
        experimentalCustomSlices,
    });
    return (0, array_1.array)(charArbitrary, enrichedConstraints).map(PatternsToString_1.patternsToStringMapper, unmapper);
}
