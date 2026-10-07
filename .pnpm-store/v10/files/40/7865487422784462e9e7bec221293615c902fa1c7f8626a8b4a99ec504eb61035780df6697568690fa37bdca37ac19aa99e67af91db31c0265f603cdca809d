import { constants } from 'node:fs'
import fs from 'node:fs/promises'
import path from 'node:path'

import { createDebug } from './debug.js'
import { invalidOption } from './messages.js'
import { InvalidOptionsError } from './symbols.js'

const debugLog = createDebug('lint-staged:validateOptions')

/**
 * Validate lint-staged options, either from the Node.js API or the command line flags.
 * @param {*} options
 * @param {boolean|string} [options.cwd] - Current working directory
 * @throws {InvalidOptionsError}
 */
export const validateOptions = async (options = {}, logger) => {
  debugLog('Validating options...')

  /** Ensure the passed cwd option exists; it might also be relative */
  if (typeof options.cwd === 'string') {
    try {
      const resolved = path.resolve(options.cwd)
      await fs.access(resolved, constants.F_OK)
    } catch (error) {
      debugLog('Failed to validate options: %o', options)
      logger.error(invalidOption('cwd', options.cwd, error.message))
      throw InvalidOptionsError
    }
  }

  debugLog('Validated options: %o', options)
}
