import { createDebug } from './debug.js'
import { getSpawnedTask } from './getSpawnedTask.js'
import { configurationError } from './messages.js'

const debugLog = createDebug('lint-staged:getSpawnedTasks')

/**
 * Creates and returns an array of listr tasks which map to the given commands.
 *
 * @param {object} options
 * @param {AbortController} options.abortController
 * @param {boolean} [options.color]
 * @param {Array<string|Function>|string|Function} options.commands
 * @param {string} options.continueOnError
 * @param {string} options.cwd
 * @param {import('./getStagedFiles.js').StagedFile[]} options.files
 * @param {string} options.topLevelDir
 * @param {Boolean} verbose
 */
export const getSpawnedTasks = async ({
  abortController,
  color,
  commands,
  continueOnError,
  cwd,
  files,
  topLevelDir,
  verbose,
}) => {
  debugLog('Creating Listr tasks for commands %o', commands)
  const cmdTasks = []

  const commandArray = Array.isArray(commands) ? commands : [commands]

  const filepaths = files.map((f) => f.filepath)

  for (const cmd of commandArray) {
    // command function may return array of commands that already include `stagedFiles`
    const isFn = typeof cmd === 'function'

    /** Pass copy of file list to prevent mutation by function from config file. */
    const resolved = isFn ? await cmd([...filepaths]) : cmd

    const resolvedArray = Array.isArray(resolved) ? resolved : [resolved] // Wrap non-array command as array

    for (const command of resolvedArray) {
      // If the function linter didn't return string | string[]  it won't work
      // Do the validation here instead of `validateConfig` to skip evaluating the function multiple times
      if (isFn && typeof command !== 'string') {
        throw new Error(
          configurationError(
            '[Function]',
            'Function task should return a string or an array of strings',
            resolved
          )
        )
      }

      const task = getSpawnedTask({
        abortController,
        color,
        command,
        continueOnError,
        cwd,
        files: filepaths,
        topLevelDir,
        isFn,
        verbose,
      })

      cmdTasks.push({ title: command, command, task })
    }
  }

  return cmdTasks
}
