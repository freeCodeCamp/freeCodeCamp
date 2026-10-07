'use strict'

module.exports = prettifyMessage

const {
  LEVELS
} = require('../constants')

const getPropertyValue = require('./get-property-value')
const interpretConditionals = require('./interpret-conditionals')

/**
 * @typedef {object} PrettifyMessageParams
 * @property {object} log The log object with the message to colorize.
 * @property {PrettyContext} context The context object built from parsing
 * the options.
 */

/**
 * Prettifies a message string if the given `log` has a message property.
 *
 * @param {PrettifyMessageParams} input
 *
 * @returns {undefined|string} If the message key is not found, or the message
 * key is not a string, then `undefined` will be returned. Otherwise, a string
 * that is the prettified message.
 */
function prettifyMessage ({ log, context }) {
  const {
    colorizer,
    customLevels,
    levelKey,
    levelLabel,
    messageFormat,
    messageKey,
    useOnlyCustomProps
  } = context
  if (messageFormat && typeof messageFormat === 'string') {
    const parsedMessageFormat = interpretConditionals(messageFormat, log)

    const message = String(parsedMessageFormat).replace(
      /{([^{}]+)}/g,
      function (match, p1) {
        // return log level as string instead of int
        let level
        if (p1 === levelLabel && (level = getPropertyValue(log, levelKey)) !== undefined) {
          const condition = useOnlyCustomProps ? customLevels === undefined : customLevels[level] === undefined
          return condition ? LEVELS[level] : customLevels[level]
        }

        // Parse nested key access, e.g. `{keyA.subKeyB}`.
        return getPropertyValue(log, p1) || ''
      })
    return colorizer.message(message)
  }
  if (messageFormat && typeof messageFormat === 'function') {
    const msg = messageFormat(log, messageKey, levelLabel)
    return colorizer.message(msg)
  }
  if (messageKey in log === false) return undefined
  if (typeof log[messageKey] !== 'string' && typeof log[messageKey] !== 'number' && typeof log[messageKey] !== 'boolean') return undefined
  return colorizer.message(log[messageKey])
}
