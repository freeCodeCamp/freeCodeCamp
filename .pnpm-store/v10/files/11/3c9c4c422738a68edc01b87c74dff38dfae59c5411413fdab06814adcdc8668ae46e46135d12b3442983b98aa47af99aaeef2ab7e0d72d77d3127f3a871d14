'use strict'

module.exports = prettifyTime

const formatTime = require('./format-time')

/**
 * @typedef {object} PrettifyTimeParams
 * @property {object} log The log object with the timestamp to be prettified.
 * @property {PrettyContext} context The context object built from parsing
 * the options.
 */

/**
 * Prettifies a timestamp if the given `log` has either `time`, `timestamp` or custom specified timestamp
 * property.
 *
 * @param {PrettifyTimeParams} input
 *
 * @returns {undefined|string} If a timestamp property cannot be found then
 * `undefined` is returned. Otherwise, the prettified time is returned as a
 * string.
 */
function prettifyTime ({ log, context }) {
  const {
    timestampKey,
    translateTime: translateFormat
  } = context
  const prettifier = context.customPrettifiers?.time
  let time = null

  if (timestampKey in log) {
    time = log[timestampKey]
  } else if ('timestamp' in log) {
    time = log.timestamp
  }

  if (time === null) return undefined
  const output = translateFormat ? formatTime(time, translateFormat) : time

  return prettifier ? prettifier(output) : `[${output}]`
}
