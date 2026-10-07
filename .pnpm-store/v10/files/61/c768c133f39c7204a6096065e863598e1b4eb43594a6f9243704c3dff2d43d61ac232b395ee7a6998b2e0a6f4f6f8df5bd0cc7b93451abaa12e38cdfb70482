'use strict'
/* eslint no-prototype-builtins: 0 */
const {
  lsCacheSym,
  levelValSym,
  useOnlyCustomLevelsSym,
  streamSym,
  formattersSym,
  hooksSym,
  levelCompSym
} = require('./symbols')
const { noop, genLog } = require('./tools')
const { DEFAULT_LEVELS, SORTING_ORDER } = require('./constants')

const levelMethods = {
  fatal: (hook) => {
    const logFatal = genLog(DEFAULT_LEVELS.fatal, hook)
    return function (...args) {
      const stream = this[streamSym]
      logFatal.call(this, ...args)
      if (typeof stream.flushSync === 'function') {
        try {
          stream.flushSync()
        } catch (e) {
          // https://github.com/pinojs/pino/pull/740#discussion_r346788313
        }
      }
    }
  },
  error: (hook) => genLog(DEFAULT_LEVELS.error, hook),
  warn: (hook) => genLog(DEFAULT_LEVELS.warn, hook),
  info: (hook) => genLog(DEFAULT_LEVELS.info, hook),
  debug: (hook) => genLog(DEFAULT_LEVELS.debug, hook),
  trace: (hook) => genLog(DEFAULT_LEVELS.trace, hook)
}

const nums = Object.keys(DEFAULT_LEVELS).reduce((o, k) => {
  o[DEFAULT_LEVELS[k]] = k
  return o
}, {})

const initialLsCache = Object.keys(nums).reduce((o, k) => {
  o[k] = '{"level":' + Number(k)
  return o
}, {})

function genLsCache (instance) {
  const formatter = instance[formattersSym].level
  const { labels } = instance.levels
  const cache = {}
  for (const label in labels) {
    const level = formatter(labels[label], Number(label))
    cache[label] = JSON.stringify(level).slice(0, -1)
  }
  instance[lsCacheSym] = cache
  return instance
}

function isStandardLevel (level, useOnlyCustomLevels) {
  if (useOnlyCustomLevels) {
    return false
  }

  switch (level) {
    case 'fatal':
    case 'error':
    case 'warn':
    case 'info':
    case 'debug':
    case 'trace':
      return true
    default:
      return false
  }
}

function setLevel (level) {
  const { labels, values } = this.levels
  if (typeof level === 'number') {
    if (labels[level] === undefined) throw Error('unknown level value' + level)
    level = labels[level]
  }
  if (values[level] === undefined) throw Error('unknown level ' + level)
  const preLevelVal = this[levelValSym]
  const levelVal = this[levelValSym] = values[level]
  const useOnlyCustomLevelsVal = this[useOnlyCustomLevelsSym]
  const levelComparison = this[levelCompSym]
  const hook = this[hooksSym].logMethod

  for (const key in values) {
    if (levelComparison(values[key], levelVal) === false) {
      this[key] = noop
      continue
    }
    this[key] = isStandardLevel(key, useOnlyCustomLevelsVal) ? levelMethods[key](hook) : genLog(values[key], hook)
  }

  this.emit(
    'level-change',
    level,
    levelVal,
    labels[preLevelVal],
    preLevelVal,
    this
  )
}

function getLevel (level) {
  const { levels, levelVal } = this
  // protection against potential loss of Pino scope from serializers (edge case with circular refs - https://github.com/pinojs/pino/issues/833)
  return (levels && levels.labels) ? levels.labels[levelVal] : ''
}

function isLevelEnabled (logLevel) {
  const { values } = this.levels
  const logLevelVal = values[logLevel]
  return logLevelVal !== undefined && this[levelCompSym](logLevelVal, this[levelValSym])
}

/**
 * Determine if the given `current` level is enabled by comparing it
 * against the current threshold (`expected`).
 *
 * @param {SORTING_ORDER} direction comparison direction "ASC" or "DESC"
 * @param {number} current current log level number representation
 * @param {number} expected threshold value to compare with
 * @returns {boolean}
 */
function compareLevel (direction, current, expected) {
  if (direction === SORTING_ORDER.DESC) {
    return current <= expected
  }

  return current >= expected
}

/**
 * Create a level comparison function based on `levelComparison`
 * it could a default function which compares levels either in "ascending" or "descending" order or custom comparison function
 *
 * @param {SORTING_ORDER | Function} levelComparison sort levels order direction or custom comparison function
 * @returns Function
 */
function genLevelComparison (levelComparison) {
  if (typeof levelComparison === 'string') {
    return compareLevel.bind(null, levelComparison)
  }

  return levelComparison
}

function mappings (customLevels = null, useOnlyCustomLevels = false) {
  const customNums = customLevels
    /* eslint-disable */
    ? Object.keys(customLevels).reduce((o, k) => {
        o[customLevels[k]] = k
        return o
      }, {})
    : null
    /* eslint-enable */

  const labels = Object.assign(
    Object.create(Object.prototype, { Infinity: { value: 'silent' } }),
    useOnlyCustomLevels ? null : nums,
    customNums
  )
  const values = Object.assign(
    Object.create(Object.prototype, { silent: { value: Infinity } }),
    useOnlyCustomLevels ? null : DEFAULT_LEVELS,
    customLevels
  )
  return { labels, values }
}

function assertDefaultLevelFound (defaultLevel, customLevels, useOnlyCustomLevels) {
  if (typeof defaultLevel === 'number') {
    const values = [].concat(
      Object.keys(customLevels || {}).map(key => customLevels[key]),
      useOnlyCustomLevels ? [] : Object.keys(nums).map(level => +level),
      Infinity
    )
    if (!values.includes(defaultLevel)) {
      throw Error(`default level:${defaultLevel} must be included in custom levels`)
    }
    return
  }

  const labels = Object.assign(
    Object.create(Object.prototype, { silent: { value: Infinity } }),
    useOnlyCustomLevels ? null : DEFAULT_LEVELS,
    customLevels
  )
  if (!(defaultLevel in labels)) {
    throw Error(`default level:${defaultLevel} must be included in custom levels`)
  }
}

function assertNoLevelCollisions (levels, customLevels) {
  const { labels, values } = levels
  for (const k in customLevels) {
    if (k in values) {
      throw Error('levels cannot be overridden')
    }
    if (customLevels[k] in labels) {
      throw Error('pre-existing level values cannot be used for new levels')
    }
  }
}

/**
 * Validates whether `levelComparison` is correct
 *
 * @throws Error
 * @param {SORTING_ORDER | Function} levelComparison - value to validate
 * @returns
 */
function assertLevelComparison (levelComparison) {
  if (typeof levelComparison === 'function') {
    return
  }

  if (typeof levelComparison === 'string' && Object.values(SORTING_ORDER).includes(levelComparison)) {
    return
  }

  throw new Error('Levels comparison should be one of "ASC", "DESC" or "function" type')
}

module.exports = {
  initialLsCache,
  genLsCache,
  levelMethods,
  getLevel,
  setLevel,
  isLevelEnabled,
  mappings,
  assertNoLevelCollisions,
  assertDefaultLevelFound,
  genLevelComparison,
  assertLevelComparison
}
