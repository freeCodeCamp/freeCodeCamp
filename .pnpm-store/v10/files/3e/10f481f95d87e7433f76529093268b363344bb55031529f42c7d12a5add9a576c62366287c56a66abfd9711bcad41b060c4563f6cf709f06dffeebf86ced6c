"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIdGenerator = createIdGenerator;
exports.resetIds = resetIds;
const ID_CACHE = new Map();
let NEXT_KEY = 0;
function createIdGenerator() {
    const key = (NEXT_KEY += 1);
    ID_CACHE.set(key, 0);
    return () => {
        const current = ID_CACHE.get(key) ?? 0;
        const next = current + 1;
        ID_CACHE.set(key, next);
        return next;
    };
}
function resetIds() {
    ID_CACHE.clear();
}
