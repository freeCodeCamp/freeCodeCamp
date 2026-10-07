import { Stream } from '../../stream/Stream.js';
import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { getDepthContextFor } from './helpers/DepthContext.js';
import { depthBiasFromSizeForArbitrary } from './helpers/MaxLengthFromMinLength.js';
import { safePush } from '../../utils/globals.js';
const safePositiveInfinity = Number.POSITIVE_INFINITY;
const safeMaxSafeInteger = Number.MAX_SAFE_INTEGER;
const safeNumberIsInteger = Number.isInteger;
const safeMathFloor = Math.floor;
const safeMathPow = Math.pow;
const safeMathMin = Math.min;
export class FrequencyArbitrary extends Arbitrary {
    static from(warbs, constraints, label) {
        if (warbs.length === 0) {
            throw new Error(`${label} expects at least one weighted arbitrary`);
        }
        let totalWeight = 0;
        for (let idx = 0; idx !== warbs.length; ++idx) {
            const currentArbitrary = warbs[idx].arbitrary;
            if (currentArbitrary === undefined) {
                throw new Error(`${label} expects arbitraries to be specified`);
            }
            const currentWeight = warbs[idx].weight;
            totalWeight += currentWeight;
            if (!safeNumberIsInteger(currentWeight)) {
                throw new Error(`${label} expects weights to be integer values`);
            }
            if (currentWeight < 0) {
                throw new Error(`${label} expects weights to be superior or equal to 0`);
            }
        }
        if (totalWeight <= 0) {
            throw new Error(`${label} expects the sum of weights to be strictly superior to 0`);
        }
        const sanitizedConstraints = {
            depthBias: depthBiasFromSizeForArbitrary(constraints.depthSize, constraints.maxDepth !== undefined),
            maxDepth: constraints.maxDepth != undefined ? constraints.maxDepth : safePositiveInfinity,
            withCrossShrink: !!constraints.withCrossShrink,
        };
        return new FrequencyArbitrary(warbs, sanitizedConstraints, getDepthContextFor(constraints.depthIdentifier));
    }
    constructor(warbs, constraints, context) {
        super();
        this.warbs = warbs;
        this.constraints = constraints;
        this.context = context;
        let currentWeight = 0;
        this.cumulatedWeights = [];
        for (let idx = 0; idx !== warbs.length; ++idx) {
            currentWeight += warbs[idx].weight;
            safePush(this.cumulatedWeights, currentWeight);
        }
        this.totalWeight = currentWeight;
    }
    generate(mrng, biasFactor) {
        if (this.mustGenerateFirst()) {
            return this.safeGenerateForIndex(mrng, 0, biasFactor);
        }
        const selected = mrng.nextInt(this.computeNegDepthBenefit(), this.totalWeight - 1);
        for (let idx = 0; idx !== this.cumulatedWeights.length; ++idx) {
            if (selected < this.cumulatedWeights[idx]) {
                return this.safeGenerateForIndex(mrng, idx, biasFactor);
            }
        }
        throw new Error(`Unable to generate from fc.frequency`);
    }
    canShrinkWithoutContext(value) {
        return this.canShrinkWithoutContextIndex(value) !== -1;
    }
    shrink(value, context) {
        if (context !== undefined) {
            const safeContext = context;
            const selectedIndex = safeContext.selectedIndex;
            const originalBias = safeContext.originalBias;
            const originalArbitrary = this.warbs[selectedIndex].arbitrary;
            const originalShrinks = originalArbitrary
                .shrink(value, safeContext.originalContext)
                .map((v) => this.mapIntoValue(selectedIndex, v, null, originalBias));
            if (safeContext.clonedMrngForFallbackFirst !== null) {
                if (safeContext.cachedGeneratedForFirst === undefined) {
                    safeContext.cachedGeneratedForFirst = this.safeGenerateForIndex(safeContext.clonedMrngForFallbackFirst, 0, originalBias);
                }
                const valueFromFirst = safeContext.cachedGeneratedForFirst;
                return Stream.of(valueFromFirst).join(originalShrinks);
            }
            return originalShrinks;
        }
        const potentialSelectedIndex = this.canShrinkWithoutContextIndex(value);
        if (potentialSelectedIndex === -1) {
            return Stream.nil();
        }
        return this.defaultShrinkForFirst(potentialSelectedIndex).join(this.warbs[potentialSelectedIndex].arbitrary
            .shrink(value, undefined)
            .map((v) => this.mapIntoValue(potentialSelectedIndex, v, null, undefined)));
    }
    defaultShrinkForFirst(selectedIndex) {
        ++this.context.depth;
        try {
            if (!this.mustFallbackToFirstInShrink(selectedIndex) || this.warbs[0].fallbackValue === undefined) {
                return Stream.nil();
            }
        }
        finally {
            --this.context.depth;
        }
        const rawShrinkValue = new Value(this.warbs[0].fallbackValue.default, undefined);
        return Stream.of(this.mapIntoValue(0, rawShrinkValue, null, undefined));
    }
    canShrinkWithoutContextIndex(value) {
        if (this.mustGenerateFirst()) {
            return this.warbs[0].arbitrary.canShrinkWithoutContext(value) ? 0 : -1;
        }
        try {
            ++this.context.depth;
            for (let idx = 0; idx !== this.warbs.length; ++idx) {
                const warb = this.warbs[idx];
                if (warb.weight !== 0 && warb.arbitrary.canShrinkWithoutContext(value)) {
                    return idx;
                }
            }
            return -1;
        }
        finally {
            --this.context.depth;
        }
    }
    mapIntoValue(idx, value, clonedMrngForFallbackFirst, biasFactor) {
        const context = {
            selectedIndex: idx,
            originalBias: biasFactor,
            originalContext: value.context,
            clonedMrngForFallbackFirst,
        };
        return new Value(value.value, context);
    }
    safeGenerateForIndex(mrng, idx, biasFactor) {
        ++this.context.depth;
        try {
            const value = this.warbs[idx].arbitrary.generate(mrng, biasFactor);
            const clonedMrngForFallbackFirst = this.mustFallbackToFirstInShrink(idx) ? mrng.clone() : null;
            return this.mapIntoValue(idx, value, clonedMrngForFallbackFirst, biasFactor);
        }
        finally {
            --this.context.depth;
        }
    }
    mustGenerateFirst() {
        return this.constraints.maxDepth <= this.context.depth;
    }
    mustFallbackToFirstInShrink(idx) {
        return idx !== 0 && this.constraints.withCrossShrink && this.warbs[0].weight !== 0;
    }
    computeNegDepthBenefit() {
        const depthBias = this.constraints.depthBias;
        if (depthBias <= 0 || this.warbs[0].weight === 0) {
            return 0;
        }
        const depthBenefit = safeMathFloor(safeMathPow(1 + depthBias, this.context.depth)) - 1;
        return -safeMathMin(this.totalWeight * depthBenefit, safeMaxSafeInteger) || 0;
    }
}
