'use strict'

/**
 * A set of property names that indicate the value represents an error object.
 *
 * @typedef {string[]} K_ERROR_LIKE_KEYS
 */

module.exports = {
  DATE_FORMAT: 'yyyy-mm-dd HH:MM:ss.l o',
  DATE_FORMAT_SIMPLE: 'HH:MM:ss.l',

  /**
   * @type {K_ERROR_LIKE_KEYS}
   */
  ERROR_LIKE_KEYS: ['err', 'error'],

  MESSAGE_KEY: 'msg',

  LEVEL_KEY: 'level',

  LEVEL_LABEL: 'levelLabel',

  TIMESTAMP_KEY: 'time',

  LEVELS: {
    default: 'USERLVL',
    60: 'FATAL',
    50: 'ERROR',
    40: 'WARN',
    30: 'INFO',
    20: 'DEBUG',
    10: 'TRACE'
  },

  LEVEL_NAMES: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },

  // Object keys that probably came from a logger like Pino or Bunyan.
  LOGGER_KEYS: [
    'pid',
    'hostname',
    'name',
    'level',
    'time',
    'timestamp',
    'caller'
  ]
}
