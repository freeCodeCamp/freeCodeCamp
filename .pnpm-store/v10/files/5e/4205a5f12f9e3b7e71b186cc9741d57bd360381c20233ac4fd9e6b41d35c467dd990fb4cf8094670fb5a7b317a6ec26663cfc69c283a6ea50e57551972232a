import { Stream } from '../../stream/Stream.js';
import { cloneIfNeeded, cloneMethod } from '../../check/symbols.js';
import { integer } from '../integer.js';
import { makeLazy } from '../../stream/LazyIterableIterator.js';
import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { getDepthContextFor } from './helpers/DepthContext.js';
import { buildSlicedGenerator } from './helpers/BuildSlicedGenerator.js';
import { safeMap, safePush, safeSlice } from '../../utils/globals.js';
const safeMathFloor = Math.floor;
const safeMathLog = Math.log;
const safeMathMax = Math.max;
const safeArrayIsArray = Array.isArray;
function biasedMaxLength(minLength, maxLength) {
    if (minLength === maxLength) {
        return minLength;
    }
    return minLength + safeMathFloor(safeMathLog(maxLength - minLength) / safeMathLog(2));
}
export class ArrayArbitrary extends Arbitrary {
    constructor(arb, minLength, maxGeneratedLength, maxLength, depthIdentifier, setBuilder, customSlices) {
        super();
        this.arb = arb;
        this.minLength = minLength;
        this.maxGeneratedLength = maxGeneratedLength;
        this.maxLength = maxLength;
        this.setBuilder = setBuilder;
        this.customSlices = customSlices;
        this.lengthArb = integer({ min: minLength, max: maxGeneratedLength });
        this.depthContext = getDepthContextFor(depthIdentifier);
    }
    preFilter(tab) {
        if (this.setBuilder === undefined) {
            return tab;
        }
        const s = this.setBuilder();
        for (let index = 0; index !== tab.length; ++index) {
            s.tryAdd(tab[index]);
        }
        return s.getData();
    }
    static makeItCloneable(vs, shrinkables) {
        vs[cloneMethod] = () => {
            const cloned = [];
            for (let idx = 0; idx !== shrinkables.length; ++idx) {
                safePush(cloned, shrinkables[idx].value);
            }
            this.makeItCloneable(cloned, shrinkables);
            return cloned;
        };
        return vs;
    }
    generateNItemsNoDuplicates(setBuilder, N, mrng, biasFactorItems) {
        let numSkippedInRow = 0;
        const s = setBuilder();
        const slicedGenerator = buildSlicedGenerator(this.arb, mrng, this.customSlices, biasFactorItems);
        while (s.size() < N && numSkippedInRow < this.maxGeneratedLength) {
            const current = slicedGenerator.next();
            if (s.tryAdd(current)) {
                numSkippedInRow = 0;
            }
            else {
                numSkippedInRow += 1;
            }
        }
        return s.getData();
    }
    safeGenerateNItemsNoDuplicates(setBuilder, N, mrng, biasFactorItems) {
        const depthImpact = safeMathMax(0, N - biasedMaxLength(this.minLength, this.maxGeneratedLength));
        this.depthContext.depth += depthImpact;
        try {
            return this.generateNItemsNoDuplicates(setBuilder, N, mrng, biasFactorItems);
        }
        finally {
            this.depthContext.depth -= depthImpact;
        }
    }
    generateNItems(N, mrng, biasFactorItems) {
        const items = [];
        const slicedGenerator = buildSlicedGenerator(this.arb, mrng, this.customSlices, biasFactorItems);
        slicedGenerator.attemptExact(N);
        for (let index = 0; index !== N; ++index) {
            const current = slicedGenerator.next();
            safePush(items, current);
        }
        return items;
    }
    safeGenerateNItems(N, mrng, biasFactorItems) {
        const depthImpact = safeMathMax(0, N - biasedMaxLength(this.minLength, this.maxGeneratedLength));
        this.depthContext.depth += depthImpact;
        try {
            return this.generateNItems(N, mrng, biasFactorItems);
        }
        finally {
            this.depthContext.depth -= depthImpact;
        }
    }
    wrapper(itemsRaw, shrunkOnce, itemsRawLengthContext, startIndex) {
        const items = shrunkOnce ? this.preFilter(itemsRaw) : itemsRaw;
        let cloneable = false;
        const vs = [];
        const itemsContexts = [];
        for (let idx = 0; idx !== items.length; ++idx) {
            const s = items[idx];
            cloneable = cloneable || s.hasToBeCloned;
            safePush(vs, s.value);
            safePush(itemsContexts, s.context);
        }
        if (cloneable) {
            ArrayArbitrary.makeItCloneable(vs, items);
        }
        const context = {
            shrunkOnce,
            lengthContext: itemsRaw.length === items.length && itemsRawLengthContext !== undefined
                ? itemsRawLengthContext
                : undefined,
            itemsContexts,
            startIndex,
        };
        return new Value(vs, context);
    }
    generate(mrng, biasFactor) {
        const biasMeta = this.applyBias(mrng, biasFactor);
        const targetSize = biasMeta.size;
        const items = this.setBuilder !== undefined
            ? this.safeGenerateNItemsNoDuplicates(this.setBuilder, targetSize, mrng, biasMeta.biasFactorItems)
            : this.safeGenerateNItems(targetSize, mrng, biasMeta.biasFactorItems);
        return this.wrapper(items, false, undefined, 0);
    }
    applyBias(mrng, biasFactor) {
        if (biasFactor === undefined) {
            return { size: this.lengthArb.generate(mrng, undefined).value };
        }
        if (this.minLength === this.maxGeneratedLength) {
            return { size: this.lengthArb.generate(mrng, undefined).value, biasFactorItems: biasFactor };
        }
        if (mrng.nextInt(1, biasFactor) !== 1) {
            return { size: this.lengthArb.generate(mrng, undefined).value };
        }
        if (mrng.nextInt(1, biasFactor) !== 1 || this.minLength === this.maxGeneratedLength) {
            return { size: this.lengthArb.generate(mrng, undefined).value, biasFactorItems: biasFactor };
        }
        const maxBiasedLength = biasedMaxLength(this.minLength, this.maxGeneratedLength);
        const targetSizeValue = integer({ min: this.minLength, max: maxBiasedLength }).generate(mrng, undefined);
        return { size: targetSizeValue.value, biasFactorItems: biasFactor };
    }
    canShrinkWithoutContext(value) {
        if (!safeArrayIsArray(value) || this.minLength > value.length || value.length > this.maxLength) {
            return false;
        }
        for (let index = 0; index !== value.length; ++index) {
            if (!(index in value)) {
                return false;
            }
            if (!this.arb.canShrinkWithoutContext(value[index])) {
                return false;
            }
        }
        const filtered = this.preFilter(safeMap(value, (item) => new Value(item, undefined)));
        return filtered.length === value.length;
    }
    shrinkItemByItem(value, safeContext, endIndex) {
        const shrinks = [];
        for (let index = safeContext.startIndex; index < endIndex; ++index) {
            safePush(shrinks, makeLazy(() => this.arb.shrink(value[index], safeContext.itemsContexts[index]).map((v) => {
                const beforeCurrent = safeMap(safeSlice(value, 0, index), (v, i) => new Value(cloneIfNeeded(v), safeContext.itemsContexts[i]));
                const afterCurrent = safeMap(safeSlice(value, index + 1), (v, i) => new Value(cloneIfNeeded(v), safeContext.itemsContexts[i + index + 1]));
                return [
                    [...beforeCurrent, v, ...afterCurrent],
                    undefined,
                    index,
                ];
            })));
        }
        return Stream.nil().join(...shrinks);
    }
    shrinkImpl(value, context) {
        if (value.length === 0) {
            return Stream.nil();
        }
        const safeContext = context !== undefined
            ? context
            : { shrunkOnce: false, lengthContext: undefined, itemsContexts: [], startIndex: 0 };
        return (this.lengthArb
            .shrink(value.length, safeContext.lengthContext)
            .drop(safeContext.shrunkOnce && safeContext.lengthContext === undefined && value.length > this.minLength + 1
            ? 1
            : 0)
            .map((lengthValue) => {
            const sliceStart = value.length - lengthValue.value;
            return [
                safeMap(safeSlice(value, sliceStart), (v, index) => new Value(cloneIfNeeded(v), safeContext.itemsContexts[index + sliceStart])),
                lengthValue.context,
                0,
            ];
        })
            .join(makeLazy(() => value.length > this.minLength
            ? this.shrinkItemByItem(value, safeContext, 1)
            : this.shrinkItemByItem(value, safeContext, value.length)))
            .join(value.length > this.minLength
            ? makeLazy(() => {
                const subContext = {
                    shrunkOnce: false,
                    lengthContext: undefined,
                    itemsContexts: safeSlice(safeContext.itemsContexts, 1),
                    startIndex: 0,
                };
                return this.shrinkImpl(safeSlice(value, 1), subContext)
                    .filter((v) => this.minLength <= v[0].length + 1)
                    .map((v) => {
                    return [[new Value(cloneIfNeeded(value[0]), safeContext.itemsContexts[0]), ...v[0]], undefined, 0];
                });
            })
            : Stream.nil()));
    }
    shrink(value, context) {
        return this.shrinkImpl(value, context).map((contextualValue) => this.wrapper(contextualValue[0], true, contextualValue[1], contextualValue[2]));
    }
}
