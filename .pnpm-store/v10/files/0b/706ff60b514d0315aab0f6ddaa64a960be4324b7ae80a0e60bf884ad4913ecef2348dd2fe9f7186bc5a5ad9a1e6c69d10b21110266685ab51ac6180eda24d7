import { unsafeUniformBigIntDistribution } from './UnsafeUniformBigIntDistribution.js';
function uniformBigIntDistribution(from, to, rng) {
    if (rng != null) {
        var nextRng = rng.clone();
        return [unsafeUniformBigIntDistribution(from, to, nextRng), nextRng];
    }
    return function (rng) {
        var nextRng = rng.clone();
        return [unsafeUniformBigIntDistribution(from, to, nextRng), nextRng];
    };
}
export { uniformBigIntDistribution };
