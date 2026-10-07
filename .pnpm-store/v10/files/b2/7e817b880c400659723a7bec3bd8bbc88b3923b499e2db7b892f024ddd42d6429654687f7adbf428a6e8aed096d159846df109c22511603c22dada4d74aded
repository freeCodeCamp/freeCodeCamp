/** @typedef {import('./index').Logger} Logger */

import { inspect } from 'node:util'

import { createDebug } from './debug.js'
import { configurationError, failedToParseConfig } from './messages.js'
import { ConfigEmptyError, ConfigFormatError } from './symbols.js'
import { validateBraces } from './validateBraces.js'

const debugLog = createDebug('lint-staged:validateConfig')

export const validateConfigLogic = (config, configPath, logger) => {
  debugLog('Validating config from `%s`...', configPath)

  if (!config || (typeof config !== 'object' && typeof config !== 'function')) {
    throw ConfigFormatError
  }

  /**
   * Function configurations receive all staged files as their argument.
   * They are not further validated here to make sure the function gets
   * evaluated only once.
   *
   * @see getSpawnedTasks
   */
  if (typeof config === 'function') {
    return { '*': config }
  }

  if (Object.entries(config).length === 0) {
    throw ConfigEmptyError
  }

  const errors = []

  /**
   * Create a new validated config because the keys (patterns) might change.
   * Since the Object.reduce method already loops through each entry in the config,
   * it can be used for validating the values at the same time.
   */
  const validatedConfig = Object.entries(config).reduce((collection, [pattern, task]) => {
    if (Array.isArray(task)) {
      /** Array with invalid values */
      if (task.some((item) => typeof item !== 'string' && typeof item !== 'function')) {
        errors.push(
          configurationError(pattern, 'Should be an array of strings or functions.', task)
        )
      }
    } else if (typeof task === 'object') {
      /** Invalid function task */
      if (typeof task.title !== 'string' || typeof task.task !== 'function') {
        errors.push(
          configurationError(
            pattern,
            'Function task should contain `title` and `task` fields, where `title` should be a string and `task` should be a function.',
            task
          )
        )
      }
    } else if (typeof task !== 'string' && typeof task !== 'function') {
      /** Singular invalid value */
      errors.push(
        configurationError(
          pattern,
          'Should be a string, a function, an object or an array of strings and functions.',
          task
        )
      )
    }

    /**
     * A typical configuration error is using invalid brace expansion, like `*.{js}`.
     * These are automatically fixed and warned about.
     */
    const fixedPattern = validateBraces(pattern, logger)

    return Object.assign(collection, { [fixedPattern]: task })
  }, {})

  if (errors.length) {
    const message = errors.join('\n\n')

    logger.error(failedToParseConfig(configPath, message))

    throw new Error(message)
  }

  debugLog('Validated config from `%s`:', configPath)
  debugLog(inspect(config, { compact: false }))

  return validatedConfig
}

/**
 * Runs config validation. Throws error if the config is not valid.
 * @param {Object} config
 * @param {string} configPath
 * @param {Logger} logger
 * @returns {Object} config
 */
export const validateConfig = (config, configPath, logger) => {
  try {
    return validateConfigLogic(config, configPath, logger)
  } catch (error) {
    logger.error(failedToParseConfig(configPath, error))
    throw error
  }
}
