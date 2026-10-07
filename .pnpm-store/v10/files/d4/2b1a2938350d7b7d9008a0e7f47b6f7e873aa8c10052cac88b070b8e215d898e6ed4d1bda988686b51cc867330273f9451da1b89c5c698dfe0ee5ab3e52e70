"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCharacterArbitrary = buildCharacterArbitrary;
const integer_1 = require("../../integer");
const IndexToCharString_1 = require("../mappers/IndexToCharString");
function buildCharacterArbitrary(min, max, mapToCode, unmapFromCode) {
    return (0, integer_1.integer)({ min, max }).map((n) => (0, IndexToCharString_1.indexToCharStringMapper)(mapToCode(n)), (c) => unmapFromCode((0, IndexToCharString_1.indexToCharStringUnmapper)(c)));
}
