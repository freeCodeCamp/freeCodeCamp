import { NoopSlicedGenerator } from '../implementations/NoopSlicedGenerator.js';
import { SlicedBasedGenerator } from '../implementations/SlicedBasedGenerator.js';
export function buildSlicedGenerator(arb, mrng, slices, biasFactor) {
    if (biasFactor === undefined || slices.length === 0 || mrng.nextInt(1, biasFactor) !== 1) {
        return new NoopSlicedGenerator(arb, mrng, biasFactor);
    }
    return new SlicedBasedGenerator(arb, mrng, slices, biasFactor);
}
