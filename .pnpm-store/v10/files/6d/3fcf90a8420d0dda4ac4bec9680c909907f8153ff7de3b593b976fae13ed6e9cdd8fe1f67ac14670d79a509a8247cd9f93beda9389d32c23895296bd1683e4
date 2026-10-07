import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { Stream } from '../../stream/Stream.js';
import { zipIterableIterators } from './helpers/ZipIterableIterators.js';
function* iotaFrom(startValue) {
    let value = startValue;
    while (true) {
        yield value;
        ++value;
    }
}
export class LimitedShrinkArbitrary extends Arbitrary {
    constructor(arb, maxShrinks) {
        super();
        this.arb = arb;
        this.maxShrinks = maxShrinks;
    }
    generate(mrng, biasFactor) {
        const value = this.arb.generate(mrng, biasFactor);
        return this.valueMapper(value, 0);
    }
    canShrinkWithoutContext(value) {
        return this.arb.canShrinkWithoutContext(value);
    }
    shrink(value, context) {
        if (this.isSafeContext(context)) {
            return this.safeShrink(value, context.originalContext, context.length);
        }
        return this.safeShrink(value, undefined, 0);
    }
    safeShrink(value, originalContext, currentLength) {
        const remaining = this.maxShrinks - currentLength;
        if (remaining <= 0) {
            return Stream.nil();
        }
        return new Stream(zipIterableIterators(this.arb.shrink(value, originalContext), iotaFrom(currentLength + 1)))
            .take(remaining)
            .map((valueAndLength) => this.valueMapper(valueAndLength[0], valueAndLength[1]));
    }
    valueMapper(v, newLength) {
        const context = { originalContext: v.context, length: newLength };
        return new Value(v.value, context);
    }
    isSafeContext(context) {
        return (context != null &&
            typeof context === 'object' &&
            'originalContext' in context &&
            'length' in context);
    }
}
