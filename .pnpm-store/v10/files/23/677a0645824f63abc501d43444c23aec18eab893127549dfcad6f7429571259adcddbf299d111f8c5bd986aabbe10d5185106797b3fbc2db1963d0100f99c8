import { integer } from '../../integer.js';
import { WithShrinkFromOtherArbitrary } from '../WithShrinkFromOtherArbitrary.js';
export function restrictedIntegerArbitraryBuilder(min, maxGenerated, max) {
    const generatorArbitrary = integer({ min, max: maxGenerated });
    if (maxGenerated === max) {
        return generatorArbitrary;
    }
    const shrinkerArbitrary = integer({ min, max });
    return new WithShrinkFromOtherArbitrary(generatorArbitrary, shrinkerArbitrary);
}
