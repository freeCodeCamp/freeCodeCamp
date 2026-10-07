export function unsafeGenerateN(rng, num) {
    var out = [];
    for (var idx = 0; idx != num; ++idx) {
        out.push(rng.unsafeNext());
    }
    return out;
}
export function generateN(rng, num) {
    var nextRng = rng.clone();
    var out = unsafeGenerateN(nextRng, num);
    return [out, nextRng];
}
export function unsafeSkipN(rng, num) {
    for (var idx = 0; idx != num; ++idx) {
        rng.unsafeNext();
    }
}
export function skipN(rng, num) {
    var nextRng = rng.clone();
    unsafeSkipN(nextRng, num);
    return nextRng;
}
