'use strict'

module.exports = handleCustomLevelsOpts

/**
 * Parse a CSV string or options object that specifies
 * configuration for custom levels.
 *
 * @param {string|object} cLevels An object mapping level
 * names to values, e.g. `{ info: 30, debug: 65 }`, or a
 * CSV string in the format `level_name:level_value`, e.g.
 * `info:30,debug:65`.
 *
 * @returns {object} An object mapping levels to labels that
 * appear in logs, e.g. `{ '30': 'INFO', '65': 'DEBUG' }`.
 */
function handleCustomLevelsOpts (cLevels) {
  if (!cLevels) return {}

  if (typeof cLevels === 'string') {
    return cLevels
      .split(',')
      .reduce((agg, value, idx) => {
        const [levelName, levelNum = idx] = value.split(':')
        agg[levelNum] = levelName.toUpperCase()
        return agg
      },
      { default: 'USERLVL' })
  } else if (Object.prototype.toString.call(cLevels) === '[object Object]') {
    return Object
      .keys(cLevels)
      .reduce((agg, levelName) => {
        agg[cLevels[levelName]] = levelName.toUpperCase()
        return agg
      }, { default: 'USERLVL' })
  } else {
    return {}
  }
}
