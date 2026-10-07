'use strict'

// this symbol is assigned by fastify-plugin
const { kPluginMeta } = require('./symbols')

/**
 * @param {function} plugin
 * @param {object} [options]
 * @param {string} [options.name]
 * @returns {string}
 */
function getPluginName (plugin, options) {
  // use explicit function metadata if set
  if (plugin[kPluginMeta] && plugin[kPluginMeta].name) {
    return plugin[kPluginMeta].name
  }

  // use explicit name option if set
  if (options && options.name) {
    return options.name
  }

  // determine from the function
  if (plugin.name) {
    return plugin.name
  } else {
    // takes the first two lines of the function if nothing else works
    return plugin.toString().split('\n').slice(0, 2).map(s => s.trim()).join(' -- ')
  }
}

module.exports = {
  getPluginName
}
