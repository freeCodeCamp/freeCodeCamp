"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cache_manager_1 = __importDefault(require("cache-manager"));
function createDefaultCache() {
    return cache_manager_1.default.caching({
        store: 'memory',
        ttl: 60 * 60 // 1 hour
    });
}
exports.createDefaultCache = createDefaultCache;
//# sourceMappingURL=cache.js.map