"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlicedBasedGenerator = void 0;
const Value_1 = require("../../../check/arbitrary/definition/Value");
const globals_1 = require("../../../utils/globals");
const safeMathMin = Math.min;
const safeMathMax = Math.max;
class SlicedBasedGenerator {
    constructor(arb, mrng, slices, biasFactor) {
        this.arb = arb;
        this.mrng = mrng;
        this.slices = slices;
        this.biasFactor = biasFactor;
        this.activeSliceIndex = 0;
        this.nextIndexInSlice = 0;
        this.lastIndexInSlice = -1;
    }
    attemptExact(targetLength) {
        if (targetLength !== 0 && this.mrng.nextInt(1, this.biasFactor) === 1) {
            const eligibleIndices = [];
            for (let index = 0; index !== this.slices.length; ++index) {
                const slice = this.slices[index];
                if (slice.length === targetLength) {
                    (0, globals_1.safePush)(eligibleIndices, index);
                }
            }
            if (eligibleIndices.length === 0) {
                return;
            }
            this.activeSliceIndex = eligibleIndices[this.mrng.nextInt(0, eligibleIndices.length - 1)];
            this.nextIndexInSlice = 0;
            this.lastIndexInSlice = targetLength - 1;
        }
    }
    next() {
        if (this.nextIndexInSlice <= this.lastIndexInSlice) {
            return new Value_1.Value(this.slices[this.activeSliceIndex][this.nextIndexInSlice++], undefined);
        }
        if (this.mrng.nextInt(1, this.biasFactor) !== 1) {
            return this.arb.generate(this.mrng, this.biasFactor);
        }
        this.activeSliceIndex = this.mrng.nextInt(0, this.slices.length - 1);
        const slice = this.slices[this.activeSliceIndex];
        if (this.mrng.nextInt(1, this.biasFactor) !== 1) {
            this.nextIndexInSlice = 1;
            this.lastIndexInSlice = slice.length - 1;
            return new Value_1.Value(slice[0], undefined);
        }
        const rangeBoundaryA = this.mrng.nextInt(0, slice.length - 1);
        const rangeBoundaryB = this.mrng.nextInt(0, slice.length - 1);
        this.nextIndexInSlice = safeMathMin(rangeBoundaryA, rangeBoundaryB);
        this.lastIndexInSlice = safeMathMax(rangeBoundaryA, rangeBoundaryB);
        return new Value_1.Value(slice[this.nextIndexInSlice++], undefined);
    }
}
exports.SlicedBasedGenerator = SlicedBasedGenerator;
