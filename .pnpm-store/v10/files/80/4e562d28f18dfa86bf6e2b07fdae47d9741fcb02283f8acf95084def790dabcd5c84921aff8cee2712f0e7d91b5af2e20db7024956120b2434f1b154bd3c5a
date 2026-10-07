"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPaddedNumberArbitrary = buildPaddedNumberArbitrary;
const integer_1 = require("../../integer");
const NumberToPaddedEight_1 = require("../mappers/NumberToPaddedEight");
function buildPaddedNumberArbitrary(min, max) {
    return (0, integer_1.integer)({ min, max }).map(NumberToPaddedEight_1.numberToPaddedEightMapper, NumberToPaddedEight_1.numberToPaddedEightUnmapper);
}
