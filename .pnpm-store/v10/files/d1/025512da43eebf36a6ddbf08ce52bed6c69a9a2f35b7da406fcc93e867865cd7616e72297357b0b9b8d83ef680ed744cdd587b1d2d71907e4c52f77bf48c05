"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneof = oneof;
const Arbitrary_1 = require("../check/arbitrary/definition/Arbitrary");
const globals_1 = require("../utils/globals");
const FrequencyArbitrary_1 = require("./_internals/FrequencyArbitrary");
function isOneOfContraints(param) {
    return (param != null &&
        typeof param === 'object' &&
        !('generate' in param) &&
        !('arbitrary' in param) &&
        !('weight' in param));
}
function toWeightedArbitrary(maybeWeightedArbitrary) {
    if ((0, Arbitrary_1.isArbitrary)(maybeWeightedArbitrary)) {
        return { arbitrary: maybeWeightedArbitrary, weight: 1 };
    }
    return maybeWeightedArbitrary;
}
function oneof(...args) {
    const constraints = args[0];
    if (isOneOfContraints(constraints)) {
        const weightedArbs = (0, globals_1.safeMap)((0, globals_1.safeSlice)(args, 1), toWeightedArbitrary);
        return FrequencyArbitrary_1.FrequencyArbitrary.from(weightedArbs, constraints, 'fc.oneof');
    }
    const weightedArbs = (0, globals_1.safeMap)(args, toWeightedArbitrary);
    return FrequencyArbitrary_1.FrequencyArbitrary.from(weightedArbs, {}, 'fc.oneof');
}
