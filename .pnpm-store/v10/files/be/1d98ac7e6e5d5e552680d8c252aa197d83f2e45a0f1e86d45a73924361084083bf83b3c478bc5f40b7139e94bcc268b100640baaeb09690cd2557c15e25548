"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memo = memo;
const globals_1 = require("../utils/globals");
let contextRemainingDepth = 10;
function memo(builder) {
    const previous = {};
    return ((maxDepth) => {
        const n = maxDepth !== undefined ? maxDepth : contextRemainingDepth;
        if (!(0, globals_1.safeHasOwnProperty)(previous, n)) {
            const prev = contextRemainingDepth;
            contextRemainingDepth = n - 1;
            previous[n] = builder(n);
            contextRemainingDepth = prev;
        }
        return previous[n];
    });
}
