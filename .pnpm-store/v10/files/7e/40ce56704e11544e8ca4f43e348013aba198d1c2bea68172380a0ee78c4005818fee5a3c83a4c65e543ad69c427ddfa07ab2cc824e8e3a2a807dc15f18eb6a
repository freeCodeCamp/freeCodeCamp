'use strict'

module.exports = interpretConditionals

const getPropertyValue = require('./get-property-value')

/**
 * Translates all conditional blocks from within the messageFormat. Translates
 * any matching {if key}{key}{end} statements and returns everything between
 * if and else blocks if the key provided was found in log.
 *
 * @param {MessageFormatString|MessageFormatFunction} messageFormat A format
 * string or function that defines how the logged message should be
 * conditionally formatted.
 * @param {object} log The log object to be modified.
 *
 * @returns {string} The parsed messageFormat.
 */
function interpretConditionals (messageFormat, log) {
  messageFormat = messageFormat.replace(/{if (.*?)}(.*?){end}/g, replacer)

  // Remove non-terminated if blocks
  messageFormat = messageFormat.replace(/{if (.*?)}/g, '')
  // Remove floating end blocks
  messageFormat = messageFormat.replace(/{end}/g, '')

  return messageFormat.replace(/\s+/g, ' ').trim()

  function replacer (_, key, value) {
    const propertyValue = getPropertyValue(log, key)
    if (propertyValue && value.includes(key)) {
      return value.replace(new RegExp('{' + key + '}', 'g'), propertyValue)
    } else {
      return ''
    }
  }
}
