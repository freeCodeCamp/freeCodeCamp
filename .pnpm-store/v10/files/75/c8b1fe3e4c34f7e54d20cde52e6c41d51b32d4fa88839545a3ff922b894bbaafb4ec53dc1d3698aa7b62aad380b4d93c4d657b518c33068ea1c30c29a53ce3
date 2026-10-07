import { unsafeUniformArrayIntDistribution } from './UnsafeUniformArrayIntDistribution.js';
function uniformArrayIntDistribution(from, to, rng) {
    if (rng != null) {
        var nextRng = rng.clone();
        return [unsafeUniformArrayIntDistribution(from, to, nextRng), nextRng];
    }
    return function (rng) {
        var nextRng = rng.clone();
        return [unsafeUniformArrayIntDistribution(from, to, nextRng), nextRng];
    };
}
export { uniformArrayIntDistribution };
