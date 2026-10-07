import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Stream } from '../../stream/Stream.js';
import { noUndefinedAsContext, UndefinedContextPlaceholder } from './helpers/NoUndefinedAsContext.js';
export class AlwaysShrinkableArbitrary extends Arbitrary {
    constructor(arb) {
        super();
        this.arb = arb;
    }
    generate(mrng, biasFactor) {
        const value = this.arb.generate(mrng, biasFactor);
        return noUndefinedAsContext(value);
    }
    canShrinkWithoutContext(value) {
        return true;
    }
    shrink(value, context) {
        if (context === undefined && !this.arb.canShrinkWithoutContext(value)) {
            return Stream.nil();
        }
        const safeContext = context !== UndefinedContextPlaceholder ? context : undefined;
        return this.arb.shrink(value, safeContext).map(noUndefinedAsContext);
    }
}
