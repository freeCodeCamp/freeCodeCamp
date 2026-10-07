"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.option = option;
const constant_1 = require("./constant");
const FrequencyArbitrary_1 = require("./_internals/FrequencyArbitrary");
const globals_1 = require("../utils/globals");
function option(arb, constraints = {}) {
    const freq = constraints.freq == null ? 5 : constraints.freq;
    const nilValue = (0, globals_1.safeHasOwnProperty)(constraints, 'nil') ? constraints.nil : null;
    const nilArb = (0, constant_1.constant)(nilValue);
    const weightedArbs = [
        { arbitrary: nilArb, weight: 1, fallbackValue: { default: nilValue } },
        { arbitrary: arb, weight: freq },
    ];
    const frequencyConstraints = {
        withCrossShrink: true,
        depthSize: constraints.depthSize,
        maxDepth: constraints.maxDepth,
        depthIdentifier: constraints.depthIdentifier,
    };
    return FrequencyArbitrary_1.FrequencyArbitrary.from(weightedArbs, frequencyConstraints, 'fc.option');
}
