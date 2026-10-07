'use strict'

module.exports = handleCustomLevelsNamesOpts

/**
 * Parse a CSV string or options object that maps level
 * labels to level values.
 *
 * @param {string|object} cLevels An object mapping level
 * names to level values, e.g. `{ info: 30, debug: 65 }`, or a
 * CSV string in the format `level_name:level_value`, e.g.
 * `info:30,debug:65`.
 *
 * @returns {object} An object mapping levels names to level values
 * e.g. `{ info: 30, debug: 65 }`.
 */
function handleCustomLevelsNamesOpts (cLevels) {
  if (!cLevels) return {}

  if (typeof cLevels === 'string') {
    return cLevels
      .split(',')
      .reduce((agg, value, idx) => {
        const [levelName, levelNum = idx] = value.split(':')
        agg[levelName.toLowerCase()] = levelNum
        return agg
      }, {})
  } else if (Object.prototype.toString.call(cLevels) === '[object Object]') {
    return Object
      .keys(cLevels)
      .reduce((agg, levelName) => {
        agg[levelName.toLowerCase()] = cLevels[levelName]
        return agg
      }, {})
  } else {
    return {}
  }
}
