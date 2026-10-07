'use strict'

const { isColorSupported } = require('colorette')
const pump = require('pump')
const { Transform } = require('readable-stream')
const abstractTransport = require('pino-abstract-transport')
const colors = require('./lib/colors')
const {
  ERROR_LIKE_KEYS,
  LEVEL_KEY,
  LEVEL_LABEL,
  MESSAGE_KEY,
  TIMESTAMP_KEY
} = require('./lib/constants')
const {
  buildSafeSonicBoom,
  parseFactoryOptions
} = require('./lib/utils')
const pretty = require('./lib/pretty')

/**
 * @typedef {object} PinoPrettyOptions
 * @property {boolean} [colorize] Indicates if colors should be used when
 * prettifying. The default will be determined by the terminal capabilities at
 * run time.
 * @property {boolean} [colorizeObjects=true] Apply coloring to rendered objects
 * when coloring is enabled.
 * @property {boolean} [crlf=false] End lines with `\r\n` instead of `\n`.
 * @property {string|null} [customColors=null] A comma separated list of colors
 * to use for specific level labels, e.g. `err:red,info:blue`.
 * @property {string|null} [customLevels=null] A comma separated list of user
 * defined level names and numbers, e.g. `err:99,info:1`.
 * @property {CustomPrettifiers} [customPrettifiers={}] A set of prettifier
 * functions to apply to keys defined in this object.
 * @property {K_ERROR_LIKE_KEYS} [errorLikeObjectKeys] A list of string property
 * names to consider as error objects.
 * @property {string} [errorProps=''] A comma separated list of properties on
 * error objects to include in the output.
 * @property {boolean} [hideObject=false] When `true`, data objects will be
 * omitted from the output (except for error objects).
 * @property {string} [ignore='hostname'] A comma separated list of log keys
 * to omit when outputting the prettified log information.
 * @property {undefined|string} [include=undefined] A comma separated list of
 * log keys to include in the prettified log information. Only the keys in this
 * list will be included in the output.
 * @property {boolean} [levelFirst=false] When true, the log level will be the
 * first field in the prettified output.
 * @property {string} [levelKey='level'] The key name in the log data that
 * contains the level value for the log.
 * @property {string} [levelLabel='levelLabel'] Token name to use in
 * `messageFormat` to represent the name of the logged level.
 * @property {null|MessageFormatString|MessageFormatFunction} [messageFormat=null]
 * When a string, defines how the prettified line should be formatted according
 * to defined tokens. When a function, a synchronous function that returns a
 * formatted string.
 * @property {string} [messageKey='msg'] Defines the key in incoming logs that
 * contains the message of the log, if present.
 * @property {undefined|string|number} [minimumLevel=undefined] The minimum
 * level for logs that should be processed. Any logs below this level will
 * be omitted.
 * @property {object} [outputStream=process.stdout] The stream to write
 * prettified log lines to.
 * @property {boolean} [singleLine=false] When `true` any objects, except error
 * objects, in the log data will be printed as a single line instead as multiple
 * lines.
 * @property {string} [timestampKey='time'] Defines the key in incoming logs
 * that contains the timestamp of the log, if present.
 * @property {boolean|string} [translateTime=true] When true, will translate a
 * JavaScript date integer into a human-readable string. If set to a string,
 * it must be a format string.
 * @property {boolean} [useOnlyCustomProps=true] When true, only custom levels
 * and colors will be used if they have been provided.
 */

/**
 * The default options that will be used when prettifying log lines.
 *
 * @type {PinoPrettyOptions}
 */
const defaultOptions = {
  colorize: isColorSupported,
  colorizeObjects: true,
  crlf: false,
  customColors: null,
  customLevels: null,
  customPrettifiers: {},
  errorLikeObjectKeys: ERROR_LIKE_KEYS,
  errorProps: '',
  hideObject: false,
  ignore: 'hostname',
  include: undefined,
  levelFirst: false,
  levelKey: LEVEL_KEY,
  levelLabel: LEVEL_LABEL,
  messageFormat: null,
  messageKey: MESSAGE_KEY,
  minimumLevel: undefined,
  outputStream: process.stdout,
  singleLine: false,
  timestampKey: TIMESTAMP_KEY,
  translateTime: true,
  useOnlyCustomProps: true
}

/**
 * Processes the supplied options and returns a function that accepts log data
 * and produces a prettified log string.
 *
 * @param {PinoPrettyOptions} options Configuration for the prettifier.
 * @returns {LogPrettifierFunc}
 */
function prettyFactory (options) {
  const context = parseFactoryOptions(Object.assign({}, defaultOptions, options))
  return pretty.bind({ ...context, context })
}

/**
 * @typedef {PinoPrettyOptions} BuildStreamOpts
 * @property {object|number|string} [destination] A destination stream, file
 * descriptor, or target path to a file.
 * @property {boolean} [append]
 * @property {boolean} [mkdir]
 * @property {boolean} [sync=false]
 */

/**
 * Constructs a {@link LogPrettifierFunc} and a stream to which the produced
 * prettified log data will be written.
 *
 * @param {BuildStreamOpts} opts
 * @returns {Transform | (Transform & OnUnknown)}
 */
function build (opts = {}) {
  const pretty = prettyFactory(opts)
  return abstractTransport(function (source) {
    const stream = new Transform({
      objectMode: true,
      autoDestroy: true,
      transform (chunk, enc, cb) {
        const line = pretty(chunk)
        cb(null, line)
      }
    })

    let destination

    if (typeof opts.destination === 'object' && typeof opts.destination.write === 'function') {
      destination = opts.destination
    } else {
      destination = buildSafeSonicBoom({
        dest: opts.destination || 1,
        append: opts.append,
        mkdir: opts.mkdir,
        sync: opts.sync // by default sonic will be async
      })
    }

    source.on('unknown', function (line) {
      destination.write(line + '\n')
    })

    pump(source, stream, destination)
    return stream
  }, { parse: 'lines' })
}

module.exports = build
module.exports.build = build
module.exports.prettyFactory = prettyFactory
module.exports.colorizerFactory = colors
module.exports.default = build
