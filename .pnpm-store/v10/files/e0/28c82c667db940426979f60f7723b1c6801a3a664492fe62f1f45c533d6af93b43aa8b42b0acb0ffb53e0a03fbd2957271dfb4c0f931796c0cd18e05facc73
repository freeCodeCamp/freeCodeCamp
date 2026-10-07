"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayArbitrary = void 0;
const Stream_1 = require("../../stream/Stream");
const symbols_1 = require("../../check/symbols");
const integer_1 = require("../integer");
const LazyIterableIterator_1 = require("../../stream/LazyIterableIterator");
const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
const Value_1 = require("../../check/arbitrary/definition/Value");
const DepthContext_1 = require("./helpers/DepthContext");
const BuildSlicedGenerator_1 = require("./helpers/BuildSlicedGenerator");
const globals_1 = require("../../utils/globals");
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
class ArrayArbitrary extends Arbitrary_1.Arbitrary {
    constructor(arb, minLength, maxGeneratedLength, maxLength, depthIdentifier, setBuilder, customSlices) {
        super();
        this.arb = arb;
        this.minLength = minLength;
        this.maxGeneratedLength = maxGeneratedLength;
        this.maxLength = maxLength;
        this.setBuilder = setBuilder;
        this.customSlices = customSlices;
        this.lengthArb = (0, integer_1.integer)({ min: minLength, max: maxGeneratedLength });
        this.depthContext = (0, DepthContext_1.getDepthContextFor)(depthIdentifier);
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
        vs[symbols_1.cloneMethod] = () => {
            const cloned = [];
            for (let idx = 0; idx !== shrinkables.length; ++idx) {
                (0, globals_1.safePush)(cloned, shrinkables[idx].value);
            }
            this.makeItCloneable(cloned, shrinkables);
            return cloned;
        };
        return vs;
    }
    generateNItemsNoDuplicates(setBuilder, N, mrng, biasFactorItems) {
        let numSkippedInRow = 0;
        const s = setBuilder();
        const slicedGenerator = (0, BuildSlicedGenerator_1.buildSlicedGenerator)(this.arb, mrng, this.customSlices, biasFactorItems);
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
        const slicedGenerator = (0, BuildSlicedGenerator_1.buildSlicedGenerator)(this.arb, mrng, this.customSlices, biasFactorItems);
        slicedGenerator.attemptExact(N);
        for (let index = 0; index !== N; ++index) {
            const current = slicedGenerator.next();
            (0, globals_1.safePush)(items, current);
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
            (0, globals_1.safePush)(vs, s.value);
            (0, globals_1.safePush)(itemsContexts, s.context);
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
        return new Value_1.Value(vs, context);
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
        const targetSizeValue = (0, integer_1.integer)({ min: this.minLength, max: maxBiasedLength }).generate(mrng, undefined);
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
        const filtered = this.preFilter((0, globals_1.safeMap)(value, (item) => new Value_1.Value(item, undefined)));
        return filtered.length === value.length;
    }
    shrinkItemByItem(value, safeContext, endIndex) {
        const shrinks = [];
        for (let index = safeContext.startIndex; index < endIndex; ++index) {
            (0, globals_1.safePush)(shrinks, (0, LazyIterableIterator_1.makeLazy)(() => this.arb.shrink(value[index], safeContext.itemsContexts[index]).map((v) => {
                const beforeCurrent = (0, globals_1.safeMap)((0, globals_1.safeSlice)(value, 0, index), (v, i) => new Value_1.Value((0, symbols_1.cloneIfNeeded)(v), safeContext.itemsContexts[i]));
                const afterCurrent = (0, globals_1.safeMap)((0, globals_1.safeSlice)(value, index + 1), (v, i) => new Value_1.Value((0, symbols_1.cloneIfNeeded)(v), safeContext.itemsContexts[i + index + 1]));
                return [
                    [...beforeCurrent, v, ...afterCurrent],
                    undefined,
                    index,
                ];
            })));
        }
        return Stream_1.Stream.nil().join(...shrinks);
    }
    shrinkImpl(value, context) {
        if (value.length === 0) {
            return Stream_1.Stream.nil();
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
                (0, globals_1.safeMap)((0, globals_1.safeSlice)(value, sliceStart), (v, index) => new Value_1.Value((0, symbols_1.cloneIfNeeded)(v), safeContext.itemsContexts[index + sliceStart])),
                lengthValue.context,
                0,
            ];
        })
            .join((0, LazyIterableIterator_1.makeLazy)(() => value.length > this.minLength
            ? this.shrinkItemByItem(value, safeContext, 1)
            : this.shrinkItemByItem(value, safeContext, value.length)))
            .join(value.length > this.minLength
            ? (0, LazyIterableIterator_1.makeLazy)(() => {
                const subContext = {
                    shrunkOnce: false,
                    lengthContext: undefined,
                    itemsContexts: (0, globals_1.safeSlice)(safeContext.itemsContexts, 1),
                    startIndex: 0,
                };
                return this.shrinkImpl((0, globals_1.safeSlice)(value, 1), subContext)
                    .filter((v) => this.minLength <= v[0].length + 1)
                    .map((v) => {
                    return [[new Value_1.Value((0, symbols_1.cloneIfNeeded)(value[0]), safeContext.itemsContexts[0]), ...v[0]], undefined, 0];
                });
            })
            : Stream_1.Stream.nil()));
    }
    shrink(value, context) {
        return this.shrinkImpl(value, context).map((contextualValue) => this.wrapper(contextualValue[0], true, contextualValue[1], contextualValue[2]));
    }
}
exports.ArrayArbitrary = ArrayArbitrary;
