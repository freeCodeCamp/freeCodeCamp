'use strict'

module.exports = parseFactoryOptions

const {
  LEVEL_NAMES
} = require('../constants')
const colors = require('../colors')
const handleCustomLevelsOpts = require('./handle-custom-levels-opts')
const handleCustomLevelsNamesOpts = require('./handle-custom-levels-names-opts')

/**
 * A `PrettyContext` is an object to be used by the various functions that
 * process log data. It is derived from the provided {@link PinoPrettyOptions}.
 * It may be used as a `this` context.
 *
 * @typedef {object} PrettyContext
 * @property {string} EOL The escape sequence chosen as the line terminator.
 * @property {string} IDENT The string to use as the indentation sequence.
 * @property {ColorizerFunc} colorizer A configured colorizer function.
 * @property {Array[Array<number, string>]} customColors A set of custom color
 * names associated with level numbers.
 * @property {object} customLevelNames A hash of level numbers to level names,
 * e.g. `{ 30: "info" }`.
 * @property {object} customLevels A hash of level names to level numbers,
 * e.g. `{ info: 30 }`.
 * @property {CustomPrettifiers} customPrettifiers A hash of custom prettifier
 * functions.
 * @property {object} customProperties Comprised of `customLevels` and
 * `customLevelNames` if such options are provided.
 * @property {string[]} errorLikeObjectKeys The key names in the log data that
 * should be considered as holding error objects.
 * @property {string[]} errorProps A list of error object keys that should be
 * included in the output.
 * @property {boolean} hideObject Indicates the prettifier should omit objects
 * in the output.
 * @property {string[]} ignoreKeys Set of log data keys to omit.
 * @property {string[]} includeKeys Opposite of `ignoreKeys`.
 * @property {boolean} levelFirst Indicates the level should be printed first.
 * @property {string} levelKey Name of the key in the log data that contains
 * the message.
 * @property {string} levelLabel Format token to represent the position of the
 * level name in the output string.
 * @property {MessageFormatString|MessageFormatFunction} messageFormat
 * @property {string} messageKey Name of the key in the log data that contains
 * the message.
 * @property {string|number} minimumLevel The minimum log level to process
 * and output.
 * @property {ColorizerFunc} objectColorizer
 * @property {boolean} singleLine Indicates objects should be printed on a
 * single output line.
 * @property {string} timestampKey The name of the key in the log data that
 * contains the log timestamp.
 * @property {boolean} translateTime Indicates if timestamps should be
 * translated to a human-readable string.
 * @property {boolean} useOnlyCustomProps
 */

/**
 * @param {PinoPrettyOptions} options The user supplied object of options.
 *
 * @returns {PrettyContext}
 */
function parseFactoryOptions (options) {
  const EOL = options.crlf ? '\r\n' : '\n'
  const IDENT = '    '
  const {
    customPrettifiers,
    errorLikeObjectKeys,
    hideObject,
    levelFirst,
    levelKey,
    levelLabel,
    messageFormat,
    messageKey,
    minimumLevel,
    singleLine,
    timestampKey,
    translateTime
  } = options
  const errorProps = options.errorProps.split(',')
  const useOnlyCustomProps = typeof options.useOnlyCustomProps === 'boolean'
    ? options.useOnlyCustomProps
    : (options.useOnlyCustomProps === 'true')
  const customLevels = handleCustomLevelsOpts(options.customLevels)
  const customLevelNames = handleCustomLevelsNamesOpts(options.customLevels)

  let customColors
  if (options.customColors) {
    customColors = options.customColors.split(',').reduce((agg, value) => {
      const [level, color] = value.split(':')

      const condition = useOnlyCustomProps
        ? options.customLevels
        : customLevelNames[level] !== undefined
      const levelNum = condition
        ? customLevelNames[level]
        : LEVEL_NAMES[level]
      const colorIdx = levelNum !== undefined
        ? levelNum
        : level

      agg.push([colorIdx, color])

      return agg
    }, [])
  }

  const customProperties = { customLevels, customLevelNames }
  if (useOnlyCustomProps === true && !options.customLevels) {
    customProperties.customLevels = undefined
    customProperties.customLevelNames = undefined
  }

  const includeKeys = options.include !== undefined
    ? new Set(options.include.split(','))
    : undefined
  const ignoreKeys = (!includeKeys && options.ignore)
    ? new Set(options.ignore.split(','))
    : undefined

  const colorizer = colors(options.colorize, customColors, useOnlyCustomProps)
  const objectColorizer = options.colorizeObjects
    ? colorizer
    : colors(false, [], false)

  return {
    EOL,
    IDENT,
    colorizer,
    customColors,
    customLevelNames,
    customLevels,
    customPrettifiers,
    customProperties,
    errorLikeObjectKeys,
    errorProps,
    hideObject,
    ignoreKeys,
    includeKeys,
    levelFirst,
    levelKey,
    levelLabel,
    messageFormat,
    messageKey,
    minimumLevel,
    objectColorizer,
    singleLine,
    timestampKey,
    translateTime,
    useOnlyCustomProps
  }
}
