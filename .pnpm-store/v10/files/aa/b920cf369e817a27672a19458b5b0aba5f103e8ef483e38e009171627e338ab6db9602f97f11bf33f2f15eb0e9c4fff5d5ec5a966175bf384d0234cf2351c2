"use strict";
exports.__esModule = true;
exports.skipN = exports.unsafeSkipN = exports.generateN = exports.unsafeGenerateN = void 0;
function unsafeGenerateN(rng, num) {
    var out = [];
    for (var idx = 0; idx != num; ++idx) {
        out.push(rng.unsafeNext());
    }
    return out;
}
exports.unsafeGenerateN = unsafeGenerateN;
function generateN(rng, num) {
    var nextRng = rng.clone();
    var out = unsafeGenerateN(nextRng, num);
    return [out, nextRng];
}
exports.generateN = generateN;
function unsafeSkipN(rng, num) {
    for (var idx = 0; idx != num; ++idx) {
        rng.unsafeNext();
    }
}
exports.unsafeSkipN = unsafeSkipN;
function skipN(rng, num) {
    var nextRng = rng.clone();
    unsafeSkipN(nextRng, num);
    return nextRng;
}
exports.skipN = skipN;
