"use strict";
exports.__esModule = true;
exports.uniformArrayIntDistribution = void 0;
var UnsafeUniformArrayIntDistribution_1 = require("./UnsafeUniformArrayIntDistribution");
function uniformArrayIntDistribution(from, to, rng) {
    if (rng != null) {
        var nextRng = rng.clone();
        return [(0, UnsafeUniformArrayIntDistribution_1.unsafeUniformArrayIntDistribution)(from, to, nextRng), nextRng];
    }
    return function (rng) {
        var nextRng = rng.clone();
        return [(0, UnsafeUniformArrayIntDistribution_1.unsafeUniformArrayIntDistribution)(from, to, nextRng), nextRng];
    };
}
exports.uniformArrayIntDistribution = uniformArrayIntDistribution;
