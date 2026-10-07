'use strict'

module.exports = prettifyErrorLog

const {
  LOGGER_KEYS
} = require('../constants')

const isObject = require('./is-object')
const joinLinesWithIndentation = require('./join-lines-with-indentation')
const prettifyObject = require('./prettify-object')

/**
 * @typedef {object} PrettifyErrorLogParams
 * @property {object} log The error log to prettify.
 * @property {PrettyContext} context The context object built from parsing
 * the options.
 */

/**
 * Given a log object that has a `type: 'Error'` key, prettify the object and
 * return the result. In other
 *
 * @param {PrettifyErrorLogParams} input
 *
 * @returns {string} A string that represents the prettified error log.
 */
function prettifyErrorLog ({ log, context }) {
  const {
    EOL: eol,
    IDENT: ident,
    errorProps: errorProperties,
    messageKey
  } = context
  const stack = log.stack
  const joinedLines = joinLinesWithIndentation({ input: stack, ident, eol })
  let result = `${ident}${joinedLines}${eol}`

  if (errorProperties.length > 0) {
    const excludeProperties = LOGGER_KEYS.concat(messageKey, 'type', 'stack')
    let propertiesToPrint
    if (errorProperties[0] === '*') {
      // Print all sibling properties except for the standard exclusions.
      propertiesToPrint = Object.keys(log).filter(k => excludeProperties.includes(k) === false)
    } else {
      // Print only specified properties unless the property is a standard exclusion.
      propertiesToPrint = errorProperties.filter(k => excludeProperties.includes(k) === false)
    }

    for (let i = 0; i < propertiesToPrint.length; i += 1) {
      const key = propertiesToPrint[i]
      if (key in log === false) continue
      if (isObject(log[key])) {
        // The nested object may have "logger" type keys but since they are not
        // at the root level of the object being processed, we want to print them.
        // Thus, we invoke with `excludeLoggerKeys: false`.
        const prettifiedObject = prettifyObject({
          log: log[key],
          excludeLoggerKeys: false,
          context: {
            ...context,
            IDENT: ident + ident
          }
        })
        result = `${result}${ident}${key}: {${eol}${prettifiedObject}${ident}}${eol}`
        continue
      }
      result = `${result}${ident}${key}: ${log[key]}${eol}`
    }
  }

  return result
}
