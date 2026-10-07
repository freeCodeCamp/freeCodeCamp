'use strict'

const getPluginName = require('./lib/getPluginName')
const toCamelCase = require('./lib/toCamelCase')

let count = 0

function plugin (fn, options = {}) {
  let autoName = false

  if (fn.default !== undefined) {
    // Support for 'export default' behaviour in transpiled ECMAScript module
    fn = fn.default
  }

  if (typeof fn !== 'function') {
    throw new TypeError(
      `fastify-plugin expects a function, instead got a '${typeof fn}'`
    )
  }

  if (typeof options === 'string') {
    options = {
      fastify: options
    }
  }

  if (
    typeof options !== 'object' ||
    Array.isArray(options) ||
    options === null
  ) {
    throw new TypeError('The options object should be an object')
  }

  if (options.fastify !== undefined && typeof options.fastify !== 'string') {
    throw new TypeError(`fastify-plugin expects a version string, instead got '${typeof options.fastify}'`)
  }

  if (!options.name) {
    autoName = true
    options.name = getPluginName(fn) + '-auto-' + count++
  }

  fn[Symbol.for('skip-override')] = options.encapsulate !== true
  fn[Symbol.for('fastify.display-name')] = options.name
  fn[Symbol.for('plugin-meta')] = options

  // Faux modules support
  if (!fn.default) {
    fn.default = fn
  }

  // TypeScript support for named imports
  // See https://github.com/fastify/fastify/issues/2404 for more details
  // The type definitions would have to be update to match this.
  const camelCase = toCamelCase(options.name)
  if (!autoName && !fn[camelCase]) {
    fn[camelCase] = fn
  }

  return fn
}

module.exports = plugin
module.exports.default = plugin
module.exports.fastifyPlugin = plugin
