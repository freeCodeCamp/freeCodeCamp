"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorArbitrary = void 0;
const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
const Stream_1 = require("../../stream/Stream");
const globals_1 = require("../../utils/globals");
const GeneratorValueBuilder_1 = require("./builders/GeneratorValueBuilder");
const StableArbitraryGeneratorCache_1 = require("./builders/StableArbitraryGeneratorCache");
const TupleArbitrary_1 = require("./TupleArbitrary");
class GeneratorArbitrary extends Arbitrary_1.Arbitrary {
    constructor() {
        super(...arguments);
        this.arbitraryCache = (0, StableArbitraryGeneratorCache_1.buildStableArbitraryGeneratorCache)(StableArbitraryGeneratorCache_1.naiveIsEqual);
    }
    generate(mrng, biasFactor) {
        return (0, GeneratorValueBuilder_1.buildGeneratorValue)(mrng, biasFactor, () => [], this.arbitraryCache);
    }
    canShrinkWithoutContext(value) {
        return false;
    }
    shrink(_value, context) {
        if (context === undefined) {
            return Stream_1.Stream.nil();
        }
        const safeContext = context;
        const mrng = safeContext.mrng;
        const biasFactor = safeContext.biasFactor;
        const history = safeContext.history;
        return (0, TupleArbitrary_1.tupleShrink)(history.map((c) => c.arb), history.map((c) => c.value), history.map((c) => c.context)).map((shrink) => {
            function computePreBuiltValues() {
                const subValues = shrink.value;
                const subContexts = shrink.context;
                return (0, globals_1.safeMap)(history, (entry, index) => ({
                    arb: entry.arb,
                    value: subValues[index],
                    context: subContexts[index],
                    mrng: entry.mrng,
                }));
            }
            return (0, GeneratorValueBuilder_1.buildGeneratorValue)(mrng, biasFactor, computePreBuiltValues, this.arbitraryCache);
        });
    }
}
exports.GeneratorArbitrary = GeneratorArbitrary;
