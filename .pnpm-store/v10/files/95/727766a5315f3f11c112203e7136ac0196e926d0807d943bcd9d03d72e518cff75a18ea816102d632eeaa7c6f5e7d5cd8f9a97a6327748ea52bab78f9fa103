"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetIds = exports.createIdGenerator = void 0;
const ID_CACHE = new Map();
let NEXT_KEY = 0;
function createIdGenerator() {
    const key = (NEXT_KEY += 1);
    ID_CACHE.set(key, 0);
    return () => {
        var _a;
        const current = (_a = ID_CACHE.get(key)) !== null && _a !== void 0 ? _a : 0;
        const next = current + 1;
        ID_CACHE.set(key, next);
        return next;
    };
}
exports.createIdGenerator = createIdGenerator;
function resetIds() {
    ID_CACHE.clear();
}
exports.resetIds = resetIds;
//# sourceMappingURL=ID.js.map