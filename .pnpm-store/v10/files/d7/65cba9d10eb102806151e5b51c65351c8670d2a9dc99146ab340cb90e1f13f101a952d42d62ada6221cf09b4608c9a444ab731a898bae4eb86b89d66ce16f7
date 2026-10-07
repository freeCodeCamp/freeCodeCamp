'use strict'

const { AVV_ERR_PLUGIN_NOT_VALID } = require('./errors')

/**
 * @param {any} maybePlugin
 * @throws {AVV_ERR_PLUGIN_NOT_VALID}
 *
 * @returns {asserts plugin is Function|PromiseLike}
 */
function validatePlugin (maybePlugin) {
  // validate if plugin is a function or Promise
  if (!(maybePlugin && (typeof maybePlugin === 'function' || typeof maybePlugin.then === 'function'))) {
    if (Array.isArray(maybePlugin)) {
      throw new AVV_ERR_PLUGIN_NOT_VALID('array')
    } else if (maybePlugin === null) {
      throw new AVV_ERR_PLUGIN_NOT_VALID('null')
    } else {
      throw new AVV_ERR_PLUGIN_NOT_VALID(typeof maybePlugin)
    }
  }
}

module.exports = {
  validatePlugin
}
