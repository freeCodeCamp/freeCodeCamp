'use strict'

/**
 * bundled or typescript plugin
 * @typedef {object} BundledOrTypescriptPlugin
 * @property {function} default
 */

/**
 * @param {any} maybeBundledOrTypescriptPlugin
 * @returns {plugin is BundledOrTypescriptPlugin}
 */
function isBundledOrTypescriptPlugin (maybeBundledOrTypescriptPlugin) {
  return (
    maybeBundledOrTypescriptPlugin !== null &&
    typeof maybeBundledOrTypescriptPlugin === 'object' &&
    typeof maybeBundledOrTypescriptPlugin.default === 'function'
  )
}

module.exports = {
  isBundledOrTypescriptPlugin
}
