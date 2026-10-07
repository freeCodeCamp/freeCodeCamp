"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSlicedGenerator = buildSlicedGenerator;
const NoopSlicedGenerator_1 = require("../implementations/NoopSlicedGenerator");
const SlicedBasedGenerator_1 = require("../implementations/SlicedBasedGenerator");
function buildSlicedGenerator(arb, mrng, slices, biasFactor) {
    if (biasFactor === undefined || slices.length === 0 || mrng.nextInt(1, biasFactor) !== 1) {
        return new NoopSlicedGenerator_1.NoopSlicedGenerator(arb, mrng, biasFactor);
    }
    return new SlicedBasedGenerator_1.SlicedBasedGenerator(arb, mrng, slices, biasFactor);
}
