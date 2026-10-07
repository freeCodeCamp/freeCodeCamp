'use strict'

module.exports = pretty

const sjs = require('secure-json-parse')

const isObject = require('./utils/is-object')
const prettifyErrorLog = require('./utils/prettify-error-log')
const prettifyLevel = require('./utils/prettify-level')
const prettifyMessage = require('./utils/prettify-message')
const prettifyMetadata = require('./utils/prettify-metadata')
const prettifyObject = require('./utils/prettify-object')
const prettifyTime = require('./utils/prettify-time')
const filterLog = require('./utils/filter-log')

const {
  LEVELS,
  LEVEL_KEY,
  LEVEL_NAMES
} = require('./constants')

const jsonParser = input => {
  try {
    return { value: sjs.parse(input, { protoAction: 'remove' }) }
  } catch (err) {
    return { err }
  }
}

/**
 * Orchestrates processing the received log data according to the provided
 * configuration and returns a prettified log string.
 *
 * @typedef {function} LogPrettifierFunc
 * @param {string|object} inputData A log string or a log-like object.
 * @returns {string} A string that represents the prettified log data.
 */
function pretty (inputData) {
  let log
  if (!isObject(inputData)) {
    const parsed = jsonParser(inputData)
    if (parsed.err || !isObject(parsed.value)) {
      // pass through
      return inputData + this.EOL
    }
    log = parsed.value
  } else {
    log = inputData
  }

  if (this.minimumLevel) {
    // We need to figure out if the custom levels has the desired minimum
    // level & use that one if found. If not, determine if the level exists
    // in the standard levels. In both cases, make sure we have the level
    // number instead of the level name.
    let condition
    if (this.useOnlyCustomProps) {
      condition = this.customLevels
    } else {
      condition = this.customLevelNames[this.minimumLevel] !== undefined
    }
    let minimum
    if (condition) {
      minimum = this.customLevelNames[this.minimumLevel]
    } else {
      minimum = LEVEL_NAMES[this.minimumLevel]
    }
    if (!minimum) {
      minimum = typeof this.minimumLevel === 'string'
        ? LEVEL_NAMES[this.minimumLevel]
        : LEVEL_NAMES[LEVELS[this.minimumLevel].toLowerCase()]
    }

    const level = log[this.levelKey === undefined ? LEVEL_KEY : this.levelKey]
    if (level < minimum) return
  }

  const prettifiedMessage = prettifyMessage({ log, context: this.context })

  if (this.ignoreKeys || this.includeKeys) {
    log = filterLog({ log, context: this.context })
  }

  const prettifiedLevel = prettifyLevel({
    log,
    context: {
      ...this.context,
      // This is odd. The colorizer ends up relying on the value of
      // `customProperties` instead of the original `customLevels` and
      // `customLevelNames`.
      ...this.context.customProperties
    }
  })
  const prettifiedMetadata = prettifyMetadata({ log, context: this.context })
  const prettifiedTime = prettifyTime({ log, context: this.context })

  let line = ''
  if (this.levelFirst && prettifiedLevel) {
    line = `${prettifiedLevel}`
  }

  if (prettifiedTime && line === '') {
    line = `${prettifiedTime}`
  } else if (prettifiedTime) {
    line = `${line} ${prettifiedTime}`
  }

  if (!this.levelFirst && prettifiedLevel) {
    if (line.length > 0) {
      line = `${line} ${prettifiedLevel}`
    } else {
      line = prettifiedLevel
    }
  }

  if (prettifiedMetadata) {
    if (line.length > 0) {
      line = `${line} ${prettifiedMetadata}:`
    } else {
      line = prettifiedMetadata
    }
  }

  if (line.endsWith(':') === false && line !== '') {
    line += ':'
  }

  if (prettifiedMessage !== undefined) {
    if (line.length > 0) {
      line = `${line} ${prettifiedMessage}`
    } else {
      line = prettifiedMessage
    }
  }

  if (line.length > 0 && !this.singleLine) {
    line += this.EOL
  }

  // pino@7+ does not log this anymore
  if (log.type === 'Error' && log.stack) {
    const prettifiedErrorLog = prettifyErrorLog({ log, context: this.context })
    if (this.singleLine) line += this.EOL
    line += prettifiedErrorLog
  } else if (this.hideObject === false) {
    const skipKeys = [
      this.messageKey,
      this.levelKey,
      this.timestampKey
    ].filter(key => {
      return typeof log[key] === 'string' ||
        typeof log[key] === 'number' ||
        typeof log[key] === 'boolean'
    })
    const prettifiedObject = prettifyObject({
      log,
      skipKeys,
      context: this.context
    })

    // In single line mode, include a space only if prettified version isn't empty
    if (this.singleLine && !/^\s$/.test(prettifiedObject)) {
      line += ' '
    }
    line += prettifiedObject
  }

  return line
}
