"use strict"
exports.__esModule = true

const log = require('debug')('eslint-module-utils:ModuleCache')

class ModuleCache {
  constructor(map) {
    this.map = map || new Map()
  }

  /**
   * returns value for returning inline
   * @param {[type]} cacheKey [description]
   * @param {[type]} result   [description]
   */
  set(cacheKey, result) {
    this.map.set(cacheKey, { result, lastSeen: Date.now() })
    log('setting entry for', cacheKey)
    return result
  }

  get(cacheKey, settings) {
    if (this.map.has(cacheKey)) {
      const f = this.map.get(cacheKey)
      // check fresness
      if (Date.now() - f.lastSeen < (settings.lifetime * 1000)) return f.result
    } else log('cache miss for', cacheKey)
    // cache miss
    return undefined
  }

}

ModuleCache.getSettings = function (settings) {
  const cacheSettings = Object.assign({
    lifetime: 30,  // seconds
  }, settings['import/cache'])

  // parse infinity
  if (cacheSettings.lifetime === '∞' || cacheSettings.lifetime === 'Infinity') {
    cacheSettings.lifetime = Infinity
  }

  return cacheSettings
}

exports.default = ModuleCache
