import { unsafeUniformIntDistribution } from './UnsafeUniformIntDistribution.js';
function uniformIntDistribution(from, to, rng) {
    if (rng != null) {
        var nextRng = rng.clone();
        return [unsafeUniformIntDistribution(from, to, nextRng), nextRng];
    }
    return function (rng) {
        var nextRng = rng.clone();
        return [unsafeUniformIntDistribution(from, to, nextRng), nextRng];
    };
}
export { uniformIntDistribution };
