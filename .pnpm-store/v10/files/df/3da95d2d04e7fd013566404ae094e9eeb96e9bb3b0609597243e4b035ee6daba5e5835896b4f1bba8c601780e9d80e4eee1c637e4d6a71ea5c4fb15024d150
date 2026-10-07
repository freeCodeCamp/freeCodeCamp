"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpiringCache = exports.DEFAULT_TSCONFIG_CACHE_DURATION_SECONDS = void 0;
exports.DEFAULT_TSCONFIG_CACHE_DURATION_SECONDS = 30;
const ZERO_HR_TIME = [0, 0];
/**
 * A map with key-level expiration.
 */
class ExpiringCache {
    #cacheDurationSeconds;
    #map = new Map();
    constructor(cacheDurationSeconds) {
        this.#cacheDurationSeconds = cacheDurationSeconds;
    }
    clear() {
        this.#map.clear();
    }
    get(key) {
        const entry = this.#map.get(key);
        if (entry?.value != null) {
            if (this.#cacheDurationSeconds === 'Infinity') {
                return entry.value;
            }
            const ageSeconds = process.hrtime(entry.lastSeen)[0];
            if (ageSeconds < this.#cacheDurationSeconds) {
                // cache hit woo!
                return entry.value;
            }
            // key has expired - clean it up to free up memory
            this.#map.delete(key);
        }
        // no hit :'(
        return undefined;
    }
    set(key, value) {
        this.#map.set(key, {
            lastSeen: this.#cacheDurationSeconds === 'Infinity'
                ? // no need to waste time calculating the hrtime in infinity mode as there's no expiry
                    ZERO_HR_TIME
                : process.hrtime(),
            value,
        });
        return this;
    }
}
exports.ExpiringCache = ExpiringCache;
