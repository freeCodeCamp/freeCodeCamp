import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
function isSafeContext(context) {
    return context !== undefined;
}
function toGeneratorValue(value) {
    if (value.hasToBeCloned) {
        return new Value(value.value_, { generatorContext: value.context }, () => value.value);
    }
    return new Value(value.value_, { generatorContext: value.context });
}
function toShrinkerValue(value) {
    if (value.hasToBeCloned) {
        return new Value(value.value_, { shrinkerContext: value.context }, () => value.value);
    }
    return new Value(value.value_, { shrinkerContext: value.context });
}
export class WithShrinkFromOtherArbitrary extends Arbitrary {
    constructor(generatorArbitrary, shrinkerArbitrary) {
        super();
        this.generatorArbitrary = generatorArbitrary;
        this.shrinkerArbitrary = shrinkerArbitrary;
    }
    generate(mrng, biasFactor) {
        return toGeneratorValue(this.generatorArbitrary.generate(mrng, biasFactor));
    }
    canShrinkWithoutContext(value) {
        return this.shrinkerArbitrary.canShrinkWithoutContext(value);
    }
    shrink(value, context) {
        if (!isSafeContext(context)) {
            return this.shrinkerArbitrary.shrink(value, undefined).map(toShrinkerValue);
        }
        if ('generatorContext' in context) {
            return this.generatorArbitrary.shrink(value, context.generatorContext).map(toGeneratorValue);
        }
        return this.shrinkerArbitrary.shrink(value, context.shrinkerContext).map(toShrinkerValue);
    }
}
