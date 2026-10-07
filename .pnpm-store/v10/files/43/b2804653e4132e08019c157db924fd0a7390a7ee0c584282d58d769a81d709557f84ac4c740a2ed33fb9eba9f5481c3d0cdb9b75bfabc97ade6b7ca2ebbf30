import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Stream } from '../../stream/Stream.js';
import { safeMap } from '../../utils/globals.js';
import { buildGeneratorValue } from './builders/GeneratorValueBuilder.js';
import { buildStableArbitraryGeneratorCache, naiveIsEqual } from './builders/StableArbitraryGeneratorCache.js';
import { tupleShrink } from './TupleArbitrary.js';
export class GeneratorArbitrary extends Arbitrary {
    constructor() {
        super(...arguments);
        this.arbitraryCache = buildStableArbitraryGeneratorCache(naiveIsEqual);
    }
    generate(mrng, biasFactor) {
        return buildGeneratorValue(mrng, biasFactor, () => [], this.arbitraryCache);
    }
    canShrinkWithoutContext(value) {
        return false;
    }
    shrink(_value, context) {
        if (context === undefined) {
            return Stream.nil();
        }
        const safeContext = context;
        const mrng = safeContext.mrng;
        const biasFactor = safeContext.biasFactor;
        const history = safeContext.history;
        return tupleShrink(history.map((c) => c.arb), history.map((c) => c.value), history.map((c) => c.context)).map((shrink) => {
            function computePreBuiltValues() {
                const subValues = shrink.value;
                const subContexts = shrink.context;
                return safeMap(history, (entry, index) => ({
                    arb: entry.arb,
                    value: subValues[index],
                    context: subContexts[index],
                    mrng: entry.mrng,
                }));
            }
            return buildGeneratorValue(mrng, biasFactor, computePreBuiltValues, this.arbitraryCache);
        });
    }
}
