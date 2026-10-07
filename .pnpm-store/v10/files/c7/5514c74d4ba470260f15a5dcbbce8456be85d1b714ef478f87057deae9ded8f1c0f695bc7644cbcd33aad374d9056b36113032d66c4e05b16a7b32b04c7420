"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPending(promise, timeout = 100) {
    return Promise.race([
        promise.then(() => false).catch(() => false),
        new Promise((resolve) => setTimeout(() => resolve(true), timeout)),
    ]);
}
exports.default = isPending;
