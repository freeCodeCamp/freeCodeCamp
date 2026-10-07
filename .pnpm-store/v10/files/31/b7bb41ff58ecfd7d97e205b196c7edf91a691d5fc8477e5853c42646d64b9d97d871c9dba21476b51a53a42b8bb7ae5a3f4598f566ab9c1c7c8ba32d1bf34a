import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { Stream } from '../../stream/Stream.js';
const AdaptedValue = Symbol('adapted-value');
function toAdapterValue(rawValue, adapter) {
    const adapted = adapter(rawValue.value_);
    if (!adapted.adapted) {
        return rawValue;
    }
    return new Value(adapted.value, AdaptedValue);
}
class AdapterArbitrary extends Arbitrary {
    constructor(sourceArb, adapter) {
        super();
        this.sourceArb = sourceArb;
        this.adapter = adapter;
        this.adaptValue = (rawValue) => toAdapterValue(rawValue, adapter);
    }
    generate(mrng, biasFactor) {
        const rawValue = this.sourceArb.generate(mrng, biasFactor);
        return this.adaptValue(rawValue);
    }
    canShrinkWithoutContext(value) {
        return this.sourceArb.canShrinkWithoutContext(value) && !this.adapter(value).adapted;
    }
    shrink(value, context) {
        if (context === AdaptedValue) {
            if (!this.sourceArb.canShrinkWithoutContext(value)) {
                return Stream.nil();
            }
            return this.sourceArb.shrink(value, undefined).map(this.adaptValue);
        }
        return this.sourceArb.shrink(value, context).map(this.adaptValue);
    }
}
export function adapter(sourceArb, adapter) {
    return new AdapterArbitrary(sourceArb, adapter);
}
