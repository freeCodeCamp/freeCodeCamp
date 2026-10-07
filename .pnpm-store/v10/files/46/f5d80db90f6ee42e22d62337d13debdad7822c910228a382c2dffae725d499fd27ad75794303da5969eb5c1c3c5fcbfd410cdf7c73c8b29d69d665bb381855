"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arbitrary = void 0;
exports.isArbitrary = isArbitrary;
exports.assertIsArbitrary = assertIsArbitrary;
const Stream_1 = require("../../../stream/Stream");
const symbols_1 = require("../../symbols");
const Value_1 = require("./Value");
const safeObjectAssign = Object.assign;
class Arbitrary {
    filter(refinement) {
        return new FilterArbitrary(this, refinement);
    }
    map(mapper, unmapper) {
        return new MapArbitrary(this, mapper, unmapper);
    }
    chain(chainer) {
        return new ChainArbitrary(this, chainer);
    }
    noShrink() {
        return new NoShrinkArbitrary(this);
    }
    noBias() {
        return new NoBiasArbitrary(this);
    }
}
exports.Arbitrary = Arbitrary;
class ChainArbitrary extends Arbitrary {
    constructor(arb, chainer) {
        super();
        this.arb = arb;
        this.chainer = chainer;
    }
    generate(mrng, biasFactor) {
        const clonedMrng = mrng.clone();
        const src = this.arb.generate(mrng, biasFactor);
        return this.valueChainer(src, mrng, clonedMrng, biasFactor);
    }
    canShrinkWithoutContext(value) {
        return false;
    }
    shrink(value, context) {
        if (this.isSafeContext(context)) {
            return (!context.stoppedForOriginal
                ? this.arb
                    .shrink(context.originalValue, context.originalContext)
                    .map((v) => this.valueChainer(v, context.clonedMrng.clone(), context.clonedMrng, context.originalBias))
                : Stream_1.Stream.nil()).join(context.chainedArbitrary.shrink(value, context.chainedContext).map((dst) => {
                const newContext = safeObjectAssign(safeObjectAssign({}, context), {
                    chainedContext: dst.context,
                    stoppedForOriginal: true,
                });
                return new Value_1.Value(dst.value_, newContext);
            }));
        }
        return Stream_1.Stream.nil();
    }
    valueChainer(v, generateMrng, clonedMrng, biasFactor) {
        const chainedArbitrary = this.chainer(v.value_);
        const dst = chainedArbitrary.generate(generateMrng, biasFactor);
        const context = {
            originalBias: biasFactor,
            originalValue: v.value_,
            originalContext: v.context,
            stoppedForOriginal: false,
            chainedArbitrary,
            chainedContext: dst.context,
            clonedMrng,
        };
        return new Value_1.Value(dst.value_, context);
    }
    isSafeContext(context) {
        return (context != null &&
            typeof context === 'object' &&
            'originalBias' in context &&
            'originalValue' in context &&
            'originalContext' in context &&
            'stoppedForOriginal' in context &&
            'chainedArbitrary' in context &&
            'chainedContext' in context &&
            'clonedMrng' in context);
    }
}
class MapArbitrary extends Arbitrary {
    constructor(arb, mapper, unmapper) {
        super();
        this.arb = arb;
        this.mapper = mapper;
        this.unmapper = unmapper;
        this.bindValueMapper = (v) => this.valueMapper(v);
    }
    generate(mrng, biasFactor) {
        const g = this.arb.generate(mrng, biasFactor);
        return this.valueMapper(g);
    }
    canShrinkWithoutContext(value) {
        if (this.unmapper !== undefined) {
            try {
                const unmapped = this.unmapper(value);
                return this.arb.canShrinkWithoutContext(unmapped);
            }
            catch (_err) {
                return false;
            }
        }
        return false;
    }
    shrink(value, context) {
        if (this.isSafeContext(context)) {
            return this.arb.shrink(context.originalValue, context.originalContext).map(this.bindValueMapper);
        }
        if (this.unmapper !== undefined) {
            const unmapped = this.unmapper(value);
            return this.arb.shrink(unmapped, undefined).map(this.bindValueMapper);
        }
        return Stream_1.Stream.nil();
    }
    mapperWithCloneIfNeeded(v) {
        const sourceValue = v.value;
        const mappedValue = this.mapper(sourceValue);
        if (v.hasToBeCloned &&
            ((typeof mappedValue === 'object' && mappedValue !== null) || typeof mappedValue === 'function') &&
            Object.isExtensible(mappedValue) &&
            !(0, symbols_1.hasCloneMethod)(mappedValue)) {
            Object.defineProperty(mappedValue, symbols_1.cloneMethod, { get: () => () => this.mapperWithCloneIfNeeded(v)[0] });
        }
        return [mappedValue, sourceValue];
    }
    valueMapper(v) {
        const [mappedValue, sourceValue] = this.mapperWithCloneIfNeeded(v);
        const context = { originalValue: sourceValue, originalContext: v.context };
        return new Value_1.Value(mappedValue, context);
    }
    isSafeContext(context) {
        return (context != null &&
            typeof context === 'object' &&
            'originalValue' in context &&
            'originalContext' in context);
    }
}
class FilterArbitrary extends Arbitrary {
    constructor(arb, refinement) {
        super();
        this.arb = arb;
        this.refinement = refinement;
        this.bindRefinementOnValue = (v) => this.refinementOnValue(v);
    }
    generate(mrng, biasFactor) {
        while (true) {
            const g = this.arb.generate(mrng, biasFactor);
            if (this.refinementOnValue(g)) {
                return g;
            }
        }
    }
    canShrinkWithoutContext(value) {
        return this.arb.canShrinkWithoutContext(value) && this.refinement(value);
    }
    shrink(value, context) {
        return this.arb.shrink(value, context).filter(this.bindRefinementOnValue);
    }
    refinementOnValue(v) {
        return this.refinement(v.value);
    }
}
class NoShrinkArbitrary extends Arbitrary {
    constructor(arb) {
        super();
        this.arb = arb;
    }
    generate(mrng, biasFactor) {
        return this.arb.generate(mrng, biasFactor);
    }
    canShrinkWithoutContext(value) {
        return this.arb.canShrinkWithoutContext(value);
    }
    shrink(_value, _context) {
        return Stream_1.Stream.nil();
    }
    noShrink() {
        return this;
    }
}
class NoBiasArbitrary extends Arbitrary {
    constructor(arb) {
        super();
        this.arb = arb;
    }
    generate(mrng, _biasFactor) {
        return this.arb.generate(mrng, undefined);
    }
    canShrinkWithoutContext(value) {
        return this.arb.canShrinkWithoutContext(value);
    }
    shrink(value, context) {
        return this.arb.shrink(value, context);
    }
    noBias() {
        return this;
    }
}
function isArbitrary(instance) {
    return (typeof instance === 'object' &&
        instance !== null &&
        'generate' in instance &&
        'shrink' in instance &&
        'canShrinkWithoutContext' in instance);
}
function assertIsArbitrary(instance) {
    if (!isArbitrary(instance)) {
        throw new Error('Unexpected value received: not an instance of Arbitrary');
    }
}
