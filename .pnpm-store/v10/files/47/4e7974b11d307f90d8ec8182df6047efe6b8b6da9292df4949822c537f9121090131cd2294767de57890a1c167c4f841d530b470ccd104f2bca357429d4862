'use strict'

const { LEVELS, LEVEL_NAMES } = require('./constants')

const nocolor = input => input
const plain = {
  default: nocolor,
  60: nocolor,
  50: nocolor,
  40: nocolor,
  30: nocolor,
  20: nocolor,
  10: nocolor,
  message: nocolor,
  greyMessage: nocolor
}

const { createColors } = require('colorette')
const availableColors = createColors({ useColor: true })
const { white, bgRed, red, yellow, green, blue, gray, cyan } = availableColors

const colored = {
  default: white,
  60: bgRed,
  50: red,
  40: yellow,
  30: green,
  20: blue,
  10: gray,
  message: cyan,
  greyMessage: gray
}

function resolveCustomColoredColorizer (customColors) {
  return customColors.reduce(
    function (agg, [level, color]) {
      agg[level] = typeof availableColors[color] === 'function' ? availableColors[color] : white

      return agg
    },
    { default: white, message: cyan, greyMessage: gray }
  )
}

function colorizeLevel (useOnlyCustomProps) {
  return function (level, colorizer, { customLevels, customLevelNames } = {}) {
    const levels = useOnlyCustomProps ? customLevels || LEVELS : Object.assign({}, LEVELS, customLevels)
    const levelNames = useOnlyCustomProps ? customLevelNames || LEVEL_NAMES : Object.assign({}, LEVEL_NAMES, customLevelNames)

    let levelNum = 'default'
    if (Number.isInteger(+level)) {
      levelNum = Object.prototype.hasOwnProperty.call(levels, level) ? level : levelNum
    } else {
      levelNum = Object.prototype.hasOwnProperty.call(levelNames, level.toLowerCase()) ? levelNames[level.toLowerCase()] : levelNum
    }

    const levelStr = levels[levelNum]

    return Object.prototype.hasOwnProperty.call(colorizer, levelNum) ? colorizer[levelNum](levelStr) : colorizer.default(levelStr)
  }
}

function plainColorizer (useOnlyCustomProps) {
  const newPlainColorizer = colorizeLevel(useOnlyCustomProps)
  const customColoredColorizer = function (level, opts) {
    return newPlainColorizer(level, plain, opts)
  }
  customColoredColorizer.message = plain.message
  customColoredColorizer.greyMessage = plain.greyMessage
  return customColoredColorizer
}

function coloredColorizer (useOnlyCustomProps) {
  const newColoredColorizer = colorizeLevel(useOnlyCustomProps)
  const customColoredColorizer = function (level, opts) {
    return newColoredColorizer(level, colored, opts)
  }
  customColoredColorizer.message = colored.message
  customColoredColorizer.greyMessage = colored.greyMessage
  return customColoredColorizer
}

function customColoredColorizerFactory (customColors, useOnlyCustomProps) {
  const onlyCustomColored = resolveCustomColoredColorizer(customColors)
  const customColored = useOnlyCustomProps ? onlyCustomColored : Object.assign({}, colored, onlyCustomColored)
  const colorizeLevelCustom = colorizeLevel(useOnlyCustomProps)

  const customColoredColorizer = function (level, opts) {
    return colorizeLevelCustom(level, customColored, opts)
  }
  customColoredColorizer.message = customColoredColorizer.message || customColored.message
  customColoredColorizer.greyMessage = customColoredColorizer.greyMessage || customColored.greyMessage

  return customColoredColorizer
}

/**
 * Applies colorization, if possible, to a string representing the passed in
 * `level`. For example, the default colorizer will return a "green" colored
 * string for the "info" level.
 *
 * @typedef {function} ColorizerFunc
 * @param {string|number} level In either case, the input will map to a color
 * for the specified level or to the color for `USERLVL` if the level is not
 * recognized.
 * @property {function} message Accepts one string parameter that will be
 * colorized to a predefined color.
 */

/**
 * Factory function get a function to colorized levels. The returned function
 * also includes a `.message(str)` method to colorize strings.
 *
 * @param {boolean} [useColors=false] When `true` a function that applies standard
 * terminal colors is returned.
 * @param {array[]} [customColors] Tuple where first item of each array is the
 * level index and the second item is the color
 * @param {boolean} [useOnlyCustomProps] When `true`, only use the provided
 * custom colors provided and not fallback to default
 *
 * @returns {ColorizerFunc} `function (level) {}` has a `.message(str)` method to
 * apply colorization to a string. The core function accepts either an integer
 * `level` or a `string` level. The integer level will map to a known level
 * string or to `USERLVL` if not known.  The string `level` will map to the same
 * colors as the integer `level` and will also default to `USERLVL` if the given
 * string is not a recognized level name.
 */
module.exports = function getColorizer (useColors = false, customColors, useOnlyCustomProps) {
  if (useColors && customColors !== undefined) {
    return customColoredColorizerFactory(customColors, useOnlyCustomProps)
  } else if (useColors) {
    return coloredColorizer(useOnlyCustomProps)
  }

  return plainColorizer(useOnlyCustomProps)
}
