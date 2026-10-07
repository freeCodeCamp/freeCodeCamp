'use strict';

exports.__esModule = true;

const log = require('debug')('eslint-module-utils:ModuleCache');

/** @type {import('./ModuleCache').ModuleCache} */
class ModuleCache {
  /** @param {typeof import('./ModuleCache').ModuleCache.prototype.map} map */
  constructor(map) {
    this.map = map || /** @type {{typeof import('./ModuleCache').ModuleCache.prototype.map} */ new Map();
  }

  /** @type {typeof import('./ModuleCache').ModuleCache.prototype.set} */
  set(cacheKey, result) {
    this.map.set(cacheKey, { result, lastSeen: process.hrtime() });
    log('setting entry for', cacheKey);
    return result;
  }

  /** @type {typeof import('./ModuleCache').ModuleCache.prototype.get} */
  get(cacheKey, settings) {
    if (this.map.has(cacheKey)) {
      const f = this.map.get(cacheKey);
      // check freshness
      // @ts-expect-error TS can't narrow properly from `has` and `get`
      if (process.hrtime(f.lastSeen)[0] < settings.lifetime) { return f.result; }
    } else {
      log('cache miss for', cacheKey);
    }
    // cache miss
    return undefined;
  }

  /** @type {typeof import('./ModuleCache').ModuleCache.getSettings} */
  static getSettings(settings) {
    /** @type {ReturnType<typeof ModuleCache.getSettings>} */
    const cacheSettings = Object.assign({
      lifetime: 30,  // seconds
    }, settings['import/cache']);

    // parse infinity
    // @ts-expect-error the lack of type overlap is because we're abusing `cacheSettings` as a temporary object
    if (cacheSettings.lifetime === '∞' || cacheSettings.lifetime === 'Infinity') {
      cacheSettings.lifetime = Infinity;
    }

    return cacheSettings;
  }
}

exports.default = ModuleCache;
