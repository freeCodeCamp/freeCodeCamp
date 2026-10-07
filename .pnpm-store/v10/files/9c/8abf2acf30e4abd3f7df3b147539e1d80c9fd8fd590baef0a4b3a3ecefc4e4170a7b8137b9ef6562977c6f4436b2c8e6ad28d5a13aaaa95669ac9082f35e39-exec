'use strict'

const hasBuffer = typeof Buffer !== 'undefined'
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/

/**
 * @description Internal parse function that parses JSON text with security checks.
 * @private
 * @param {string|Buffer} text - The JSON text string or Buffer to parse.
 * @param {Function} [reviver] - The JSON.parse() optional reviver argument.
 * @param {import('./types').ParseOptions} [options] - Optional configuration object.
 * @returns {*} The parsed object.
 * @throws {SyntaxError} If a forbidden prototype property is found and `options.protoAction` or
 * `options.constructorAction` is `'error'`.
 */
function _parse (text, reviver, options) {
  // Normalize arguments
  if (options == null) {
    if (reviver !== null && typeof reviver === 'object') {
      options = reviver
      reviver = undefined
    }
  }

  if (hasBuffer && Buffer.isBuffer(text)) {
    text = text.toString()
  }

  // BOM checker
  if (text && text.charCodeAt(0) === 0xFEFF) {
    text = text.slice(1)
  }

  // Parse normally, allowing exceptions
  const obj = JSON.parse(text, reviver)

  // Ignore null and non-objects
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  const protoAction = (options && options.protoAction) || 'error'
  const constructorAction = (options && options.constructorAction) || 'error'

  // options: 'error' (default) / 'remove' / 'ignore'
  if (protoAction === 'ignore' && constructorAction === 'ignore') {
    return obj
  }

  if (protoAction !== 'ignore' && constructorAction !== 'ignore') {
    if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
      return obj
    }
  } else if (protoAction !== 'ignore' && constructorAction === 'ignore') {
    if (suspectProtoRx.test(text) === false) {
      return obj
    }
  } else {
    if (suspectConstructorRx.test(text) === false) {
      return obj
    }
  }

  // Scan result for proto keys
  return filter(obj, { protoAction, constructorAction, safe: options && options.safe })
}

/**
 * @description Scans and filters an object for forbidden prototype properties.
 * @param {Object} obj - The object being scanned.
 * @param {import('./types').ParseOptions} [options] - Optional configuration object.
 * @returns {Object|null} The filtered object, or `null` if safe mode is enabled and issues are found.
 * @throws {SyntaxError} If a forbidden prototype property is found and `options.protoAction` or
 * `options.constructorAction` is `'error'`.
 */
function filter (obj, { protoAction = 'error', constructorAction = 'error', safe } = {}) {
  let next = [obj]

  while (next.length) {
    const nodes = next
    next = []

    for (const node of nodes) {
      if (protoAction !== 'ignore' && Object.prototype.hasOwnProperty.call(node, '__proto__')) { // Avoid calling node.hasOwnProperty directly
        if (safe === true) {
          return null
        } else if (protoAction === 'error') {
          throw new SyntaxError('Object contains forbidden prototype property')
        }

        delete node.__proto__ // eslint-disable-line no-proto
      }

      if (constructorAction !== 'ignore' &&
          Object.prototype.hasOwnProperty.call(node, 'constructor') &&
          node.constructor !== null &&
          typeof node.constructor === 'object' &&
          Object.prototype.hasOwnProperty.call(node.constructor, 'prototype')) { // Avoid calling node.hasOwnProperty directly
        if (safe === true) {
          return null
        } else if (constructorAction === 'error') {
          throw new SyntaxError('Object contains forbidden prototype property')
        }

        delete node.constructor
      }

      for (const key in node) {
        const value = node[key]
        if (value && typeof value === 'object') {
          next.push(value)
        }
      }
    }
  }
  return obj
}

/**
 * @description Parses a given JSON-formatted text into an object.
 * @param {string|Buffer} text - The JSON text string or Buffer to parse.
 * @param {Function} [reviver] - The `JSON.parse()` optional reviver argument, or options object.
 * @param {import('./types').ParseOptions} [options] - Optional configuration object.
 * @returns {*} The parsed object.
 * @throws {SyntaxError} If the JSON text is malformed or contains forbidden prototype properties
 * when `options.protoAction` or `options.constructorAction` is `'error'`.
 */
function parse (text, reviver, options) {
  const { stackTraceLimit } = Error
  Error.stackTraceLimit = 0
  try {
    return _parse(text, reviver, options)
  } finally {
    Error.stackTraceLimit = stackTraceLimit
  }
}

/**
 * @description Safely parses a given JSON-formatted text into an object.
 * @param {string|Buffer} text - The JSON text string or Buffer to parse.
 * @param {Function} [reviver] - The `JSON.parse()` optional reviver argument.
 * @returns {*|null|undefined} The parsed object, `null` if security issues found, or `undefined` on parse error.
 */
function safeParse (text, reviver) {
  const { stackTraceLimit } = Error
  Error.stackTraceLimit = 0
  try {
    return _parse(text, reviver, { safe: true })
  } catch {
    return undefined
  } finally {
    Error.stackTraceLimit = stackTraceLimit
  }
}

module.exports = parse
module.exports.default = parse
module.exports.parse = parse
module.exports.safeParse = safeParse
module.exports.scan = filter
