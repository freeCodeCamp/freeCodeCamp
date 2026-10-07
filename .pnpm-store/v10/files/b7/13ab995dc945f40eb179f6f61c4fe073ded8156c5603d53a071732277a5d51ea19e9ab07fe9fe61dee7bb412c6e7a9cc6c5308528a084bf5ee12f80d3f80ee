/**
 * @typedef ErrnoExceptionFields
 * @property {number | undefined} [errnode]
 * @property {string | undefined} [code]
 * @property {string | undefined} [path]
 * @property {string | undefined} [syscall]
 * @property {string | undefined} [url]
 *
 * @typedef {Error & ErrnoExceptionFields} ErrnoException
 */

/**
 * @typedef {(...parameters: Array<any>) => string} MessageFunction
 */

// Manually “tree shaken” from:
// <https://github.com/nodejs/node/blob/45f5c9b/lib/internal/errors.js>
// Last checked on: Apr 29, 2024.
import v8 from 'node:v8'
import assert from 'node:assert'
import {format, inspect} from 'node:util'

const own = {}.hasOwnProperty

const classRegExp = /^([A-Z][a-z\d]*)+$/
// Sorted by a rough estimate on most frequently used entries.
const kTypes = new Set([
  'string',
  'function',
  'number',
  'object',
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  'Function',
  'Object',
  'boolean',
  'bigint',
  'symbol'
])

export const codes = {}

/**
 * Create a list string in the form like 'A and B' or 'A, B, ..., and Z'.
 * We cannot use Intl.ListFormat because it's not available in
 * --without-intl builds.
 *
 * @param {Array<string>} array
 *   An array of strings.
 * @param {string} [type]
 *   The list type to be inserted before the last element.
 * @returns {string}
 */
function formatList(array, type = 'and') {
  return array.length < 3
    ? array.join(` ${type} `)
    : `${array.slice(0, -1).join(', ')}, ${type} ${array[array.length - 1]}`
}

/** @type {Map<string, MessageFunction | string>} */
const messages = new Map()
const nodeInternalPrefix = '__node_internal_'
/** @type {number} */
let userStackTraceLimit

codes.ERR_INVALID_ARG_TYPE = createError(
  'ERR_INVALID_ARG_TYPE',
  /**
   * @param {string} name
   * @param {Array<string> | string} expected
   * @param {unknown} actual
   */
  (name, expected, actual) => {
    assert.ok(typeof name === 'string', "'name' must be a string")
    if (!Array.isArray(expected)) {
      expected = [expected]
    }

    let message = 'The '
    if (name.endsWith(' argument')) {
      // For cases like 'first argument'
      message += `${name} `
    } else {
      const type = name.includes('.') ? 'property' : 'argument'
      message += `"${name}" ${type} `
    }

    message += 'must be '

    /** @type {Array<string>} */
    const types = []
    /** @type {Array<string>} */
    const instances = []
    /** @type {Array<string>} */
    const other = []

    for (const value of expected) {
      assert.ok(
        typeof value === 'string',
        'All expected entries have to be of type string'
      )

      if (kTypes.has(value)) {
        types.push(value.toLowerCase())
      } else if (classRegExp.exec(value) === null) {
        assert.ok(
          value !== 'object',
          'The value "object" should be written as "Object"'
        )
        other.push(value)
      } else {
        instances.push(value)
      }
    }

    // Special handle `object` in case other instances are allowed to outline
    // the differences between each other.
    if (instances.length > 0) {
      const pos = types.indexOf('object')
      if (pos !== -1) {
        types.slice(pos, 1)
        instances.push('Object')
      }
    }

    if (types.length > 0) {
      message += `${types.length > 1 ? 'one of type' : 'of type'} ${formatList(
        types,
        'or'
      )}`
      if (instances.length > 0 || other.length > 0) message += ' or '
    }

    if (instances.length > 0) {
      message += `an instance of ${formatList(instances, 'or')}`
      if (other.length > 0) message += ' or '
    }

    if (other.length > 0) {
      if (other.length > 1) {
        message += `one of ${formatList(other, 'or')}`
      } else {
        if (other[0].toLowerCase() !== other[0]) message += 'an '
        message += `${other[0]}`
      }
    }

    message += `. Received ${determineSpecificType(actual)}`

    return message
  },
  TypeError
)

codes.ERR_INVALID_MODULE_SPECIFIER = createError(
  'ERR_INVALID_MODULE_SPECIFIER',
  /**
   * @param {string} request
   * @param {string} reason
   * @param {string} [base]
   */
  (request, reason, base = undefined) => {
    return `Invalid module "${request}" ${reason}${
      base ? ` imported from ${base}` : ''
    }`
  },
  TypeError
)

codes.ERR_INVALID_PACKAGE_CONFIG = createError(
  'ERR_INVALID_PACKAGE_CONFIG',
  /**
   * @param {string} path
   * @param {string} [base]
   * @param {string} [message]
   */
  (path, base, message) => {
    return `Invalid package config ${path}${
      base ? ` while importing ${base}` : ''
    }${message ? `. ${message}` : ''}`
  },
  Error
)

codes.ERR_INVALID_PACKAGE_TARGET = createError(
  'ERR_INVALID_PACKAGE_TARGET',
  /**
   * @param {string} packagePath
   * @param {string} key
   * @param {unknown} target
   * @param {boolean} [isImport=false]
   * @param {string} [base]
   */
  (packagePath, key, target, isImport = false, base = undefined) => {
    const relatedError =
      typeof target === 'string' &&
      !isImport &&
      target.length > 0 &&
      !target.startsWith('./')
    if (key === '.') {
      assert.ok(isImport === false)
      return (
        `Invalid "exports" main target ${JSON.stringify(target)} defined ` +
        `in the package config ${packagePath}package.json${
          base ? ` imported from ${base}` : ''
        }${relatedError ? '; targets must start with "./"' : ''}`
      )
    }

    return `Invalid "${
      isImport ? 'imports' : 'exports'
    }" target ${JSON.stringify(
      target
    )} defined for '${key}' in the package config ${packagePath}package.json${
      base ? ` imported from ${base}` : ''
    }${relatedError ? '; targets must start with "./"' : ''}`
  },
  Error
)

codes.ERR_MODULE_NOT_FOUND = createError(
  'ERR_MODULE_NOT_FOUND',
  /**
   * @param {string} path
   * @param {string} base
   * @param {boolean} [exactUrl]
   */
  (path, base, exactUrl = false) => {
    return `Cannot find ${
      exactUrl ? 'module' : 'package'
    } '${path}' imported from ${base}`
  },
  Error
)

codes.ERR_NETWORK_IMPORT_DISALLOWED = createError(
  'ERR_NETWORK_IMPORT_DISALLOWED',
  "import of '%s' by %s is not supported: %s",
  Error
)

codes.ERR_PACKAGE_IMPORT_NOT_DEFINED = createError(
  'ERR_PACKAGE_IMPORT_NOT_DEFINED',
  /**
   * @param {string} specifier
   * @param {string} packagePath
   * @param {string} base
   */
  (specifier, packagePath, base) => {
    return `Package import specifier "${specifier}" is not defined${
      packagePath ? ` in package ${packagePath}package.json` : ''
    } imported from ${base}`
  },
  TypeError
)

codes.ERR_PACKAGE_PATH_NOT_EXPORTED = createError(
  'ERR_PACKAGE_PATH_NOT_EXPORTED',
  /**
   * @param {string} packagePath
   * @param {string} subpath
   * @param {string} [base]
   */
  (packagePath, subpath, base = undefined) => {
    if (subpath === '.')
      return `No "exports" main defined in ${packagePath}package.json${
        base ? ` imported from ${base}` : ''
      }`
    return `Package subpath '${subpath}' is not defined by "exports" in ${packagePath}package.json${
      base ? ` imported from ${base}` : ''
    }`
  },
  Error
)

codes.ERR_UNSUPPORTED_DIR_IMPORT = createError(
  'ERR_UNSUPPORTED_DIR_IMPORT',
  "Directory import '%s' is not supported " +
    'resolving ES modules imported from %s',
  Error
)

codes.ERR_UNSUPPORTED_RESOLVE_REQUEST = createError(
  'ERR_UNSUPPORTED_RESOLVE_REQUEST',
  'Failed to resolve module specifier "%s" from "%s": Invalid relative URL or base scheme is not hierarchical.',
  TypeError
)

codes.ERR_UNKNOWN_FILE_EXTENSION = createError(
  'ERR_UNKNOWN_FILE_EXTENSION',
  /**
   * @param {string} extension
   * @param {string} path
   */
  (extension, path) => {
    return `Unknown file extension "${extension}" for ${path}`
  },
  TypeError
)

codes.ERR_INVALID_ARG_VALUE = createError(
  'ERR_INVALID_ARG_VALUE',
  /**
   * @param {string} name
   * @param {unknown} value
   * @param {string} [reason='is invalid']
   */
  (name, value, reason = 'is invalid') => {
    let inspected = inspect(value)

    if (inspected.length > 128) {
      inspected = `${inspected.slice(0, 128)}...`
    }

    const type = name.includes('.') ? 'property' : 'argument'

    return `The ${type} '${name}' ${reason}. Received ${inspected}`
  },
  TypeError
  // Note: extra classes have been shaken out.
  // , RangeError
)

/**
 * Utility function for registering the error codes. Only used here. Exported
 * *only* to allow for testing.
 * @param {string} sym
 * @param {MessageFunction | string} value
 * @param {ErrorConstructor} constructor
 * @returns {new (...parameters: Array<any>) => Error}
 */
function createError(sym, value, constructor) {
  // Special case for SystemError that formats the error message differently
  // The SystemErrors only have SystemError as their base classes.
  messages.set(sym, value)

  return makeNodeErrorWithCode(constructor, sym)
}

/**
 * @param {ErrorConstructor} Base
 * @param {string} key
 * @returns {ErrorConstructor}
 */
function makeNodeErrorWithCode(Base, key) {
  // @ts-expect-error It’s a Node error.
  return NodeError
  /**
   * @param {Array<unknown>} parameters
   */
  function NodeError(...parameters) {
    const limit = Error.stackTraceLimit
    if (isErrorStackTraceLimitWritable()) Error.stackTraceLimit = 0
    const error = new Base()
    // Reset the limit and setting the name property.
    if (isErrorStackTraceLimitWritable()) Error.stackTraceLimit = limit
    const message = getMessage(key, parameters, error)
    Object.defineProperties(error, {
      // Note: no need to implement `kIsNodeError` symbol, would be hard,
      // probably.
      message: {
        value: message,
        enumerable: false,
        writable: true,
        configurable: true
      },
      toString: {
        /** @this {Error} */
        value() {
          return `${this.name} [${key}]: ${this.message}`
        },
        enumerable: false,
        writable: true,
        configurable: true
      }
    })

    captureLargerStackTrace(error)
    // @ts-expect-error It’s a Node error.
    error.code = key
    return error
  }
}

/**
 * @returns {boolean}
 */
function isErrorStackTraceLimitWritable() {
  // Do no touch Error.stackTraceLimit as V8 would attempt to install
  // it again during deserialization.
  try {
    if (v8.startupSnapshot.isBuildingSnapshot()) {
      return false
    }
  } catch {}

  const desc = Object.getOwnPropertyDescriptor(Error, 'stackTraceLimit')
  if (desc === undefined) {
    return Object.isExtensible(Error)
  }

  return own.call(desc, 'writable') && desc.writable !== undefined
    ? desc.writable
    : desc.set !== undefined
}

/**
 * This function removes unnecessary frames from Node.js core errors.
 * @template {(...parameters: unknown[]) => unknown} T
 * @param {T} wrappedFunction
 * @returns {T}
 */
function hideStackFrames(wrappedFunction) {
  // We rename the functions that will be hidden to cut off the stacktrace
  // at the outermost one
  const hidden = nodeInternalPrefix + wrappedFunction.name
  Object.defineProperty(wrappedFunction, 'name', {value: hidden})
  return wrappedFunction
}

const captureLargerStackTrace = hideStackFrames(
  /**
   * @param {Error} error
   * @returns {Error}
   */
  // @ts-expect-error: fine
  function (error) {
    const stackTraceLimitIsWritable = isErrorStackTraceLimitWritable()
    if (stackTraceLimitIsWritable) {
      userStackTraceLimit = Error.stackTraceLimit
      Error.stackTraceLimit = Number.POSITIVE_INFINITY
    }

    Error.captureStackTrace(error)

    // Reset the limit
    if (stackTraceLimitIsWritable) Error.stackTraceLimit = userStackTraceLimit

    return error
  }
)

/**
 * @param {string} key
 * @param {Array<unknown>} parameters
 * @param {Error} self
 * @returns {string}
 */
function getMessage(key, parameters, self) {
  const message = messages.get(key)
  assert.ok(message !== undefined, 'expected `message` to be found')

  if (typeof message === 'function') {
    assert.ok(
      message.length <= parameters.length, // Default options do not count.
      `Code: ${key}; The provided arguments length (${parameters.length}) does not ` +
        `match the required ones (${message.length}).`
    )
    return Reflect.apply(message, self, parameters)
  }

  const regex = /%[dfijoOs]/g
  let expectedLength = 0
  while (regex.exec(message) !== null) expectedLength++
  assert.ok(
    expectedLength === parameters.length,
    `Code: ${key}; The provided arguments length (${parameters.length}) does not ` +
      `match the required ones (${expectedLength}).`
  )
  if (parameters.length === 0) return message

  parameters.unshift(message)
  return Reflect.apply(format, null, parameters)
}

/**
 * Determine the specific type of a value for type-mismatch errors.
 * @param {unknown} value
 * @returns {string}
 */
function determineSpecificType(value) {
  if (value === null || value === undefined) {
    return String(value)
  }

  if (typeof value === 'function' && value.name) {
    return `function ${value.name}`
  }

  if (typeof value === 'object') {
    if (value.constructor && value.constructor.name) {
      return `an instance of ${value.constructor.name}`
    }

    return `${inspect(value, {depth: -1})}`
  }

  let inspected = inspect(value, {colors: false})

  if (inspected.length > 28) {
    inspected = `${inspected.slice(0, 25)}...`
  }

  return `type ${typeof value} (${inspected})`
}
