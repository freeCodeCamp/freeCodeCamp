import { SUPPORTS_COLOR } from './colors.js'
import { createDebug, enableDebug } from './debug.js'
import { execGit } from './execGit.js'
import {
  GIT_ERROR,
  NO_CONFIGURATION,
  PREVENTED_EMPTY_COMMIT,
  PREVENTED_TASK_MODIFICATIONS,
  restoreStashExample,
  UNSTAGED_CHANGES_BACKUP_STASH_LOCATION,
} from './messages.js'
import { printTaskOutput } from './printTaskOutput.js'
import { runAll } from './runAll.js'
import { cleanupSkipped } from './state.js'
import {
  ApplyEmptyCommitError,
  ConfigNotFoundError,
  FailOnChangesError,
  GetBackupStashError,
  GitError,
  RestoreUnstagedChangesError,
} from './symbols.js'
import { validateOptions } from './validateOptions.js'
import { getVersion } from './version.js'

const debugLog = createDebug('lint-staged')

/**
 * Get the maximum length of a command-line argument string based on current platform
 *
 * https://serverfault.com/questions/69430/what-is-the-maximum-length-of-a-command-line-in-mac-os-x
 * https://support.microsoft.com/en-us/help/830473/command-prompt-cmd-exe-command-line-string-limitation
 * https://unix.stackexchange.com/a/120652
 */
const getMaxArgLength = () => {
  switch (process.platform) {
    case 'darwin':
      return 262144
    case 'win32':
      return 8191
    default:
      return 131072
  }
}

/**
 * @typedef {(...any) => void} LogFunction
 * @typedef {{ error: LogFunction, log: LogFunction, warn: LogFunction }} Logger
 *
 * Root lint-staged function that is called from `bin/lint-staged`.
 *
 * @param {object} options
 * @param {Object} [options.allowEmpty] - Allow empty commits when tasks revert all staged changes
 * @param {boolean} [options.color] - Enable or disable ANSI color codes in output.
 * @param {boolean | number} [options.concurrent] - The number of tasks to run concurrently, or false to run tasks serially
 * @param {object}  [options.config] - Object with configuration for programmatic API
 * @param {string} [options.configPath] - Path to configuration file
 * @param {boolean} [options.continueOnError] - Run all tasks to completion even if one fails
 * @param {Object} [options.cwd] - Current working directory
 * @param {boolean} [options.debug] - Enable debug mode
 * @param {string} [options.diff] - Override the default "--staged" flag of "git diff" to get list of files
 * @param {string} [options.diffFilter] - Override the default "--diff-filter=ACMR" flag of "git diff" to get list of files
 * @param {boolean} [options.failOnChanges] - Fail with exit code 1 when tasks modify tracked files
 * @param {boolean} [options.hidePartiallyStaged] - Whether to hide unstaged changes from partially staged files before running tasks
 * @param {boolean} [options.hideUnstaged] - Whether to hide all unstaged changes before running tasks
 * @param {number} [options.maxArgLength] - Maximum argument string length
 * @param {boolean} [options.quiet] - Disable lint-staged’s own console output
 * @param {boolean} [options.relative] - Pass relative filepaths to tasks
 * @param {boolean} [options.revert] - revert to original state in case of errors
 * @param {boolean} [options.stash] - Enable the backup stash, and revert in case of errors
 * @param {boolean} [options.verbose] - Show task output even when tasks succeed; by default only failed output is shown
 * @param {Logger} [logger]
 *
 * @returns {Promise<boolean>} Promise of whether the task passed or failed
 */
const lintStaged = async (
  {
    allowEmpty = false,
    color = SUPPORTS_COLOR,
    concurrent = true,
    config: configObject,
    configPath,
    continueOnError = false,
    cwd,
    debug = false,
    diff,
    diffFilter,
    failOnChanges = false,
    hideUnstaged = false,
    hidePartiallyStaged = !hideUnstaged,
    maxArgLength = getMaxArgLength() / 2,
    quiet = false,
    relative = false,
    // Stashing should be disabled by default when the `diff` option is used
    stash = diff === undefined,
    // Default to false when using failOnChanges; cannot revert to original state without stash
    revert = !failOnChanges && !!stash,
    verbose = false,
  } = {},
  logger = console
) => {
  // Seemingly enable debug twice (also done in bin), so that it also works when using the Node.js API
  if (debug) {
    enableDebug(logger)

    debugLog(
      'Running `lint-staged@%s` on Node.js %s (%s)',
      await getVersion(),
      process.version,
      process.platform
    )
  }

  const gitVersion = await execGit(['version', '--build-options'], { cwd })
  debugLog('%s', gitVersion)

  const options = {
    allowEmpty,
    color,
    concurrent,
    configObject,
    configPath,
    continueOnError,
    cwd,
    debug,
    diff,
    diffFilter,
    failOnChanges,
    hidePartiallyStaged,
    hideUnstaged,
    maxArgLength,
    quiet,
    relative,
    revert,
    stash,
    verbose,
  }

  await validateOptions(options, logger)

  // Unset GIT_LITERAL_PATHSPECS to not mess with path interpretation
  debugLog('Unset GIT_LITERAL_PATHSPECS (was `%s`)', process.env.GIT_LITERAL_PATHSPECS)
  delete process.env.GIT_LITERAL_PATHSPECS

  try {
    const ctx = await runAll(options, logger)
    debugLog('Tasks were executed successfully!')
    printTaskOutput(ctx, logger)
    return true
  } catch (runAllError) {
    if (runAllError?.ctx?.errors) {
      const { ctx } = runAllError

      if (ctx.errors.has(ConfigNotFoundError)) {
        logger.error(NO_CONFIGURATION)
      } else if (ctx.errors.has(ApplyEmptyCommitError)) {
        logger.warn(PREVENTED_EMPTY_COMMIT)
      } else if (ctx.errors.has(FailOnChangesError)) {
        logger.warn(PREVENTED_TASK_MODIFICATIONS + '\n')
        logger.warn(restoreStashExample(ctx.backupHash))
      } else if (ctx.errors.has(RestoreUnstagedChangesError)) {
        logger.warn(UNSTAGED_CHANGES_BACKUP_STASH_LOCATION)
        logger.warn(ctx.unstagedPatch)
      } else if (
        (ctx.errors.has(GitError) || cleanupSkipped(ctx)) &&
        !ctx.errors.has(GetBackupStashError)
      ) {
        logger.error(GIT_ERROR)
        if (ctx.shouldBackup) {
          // No sense to show this if the backup stash itself is missing.
          logger.error(restoreStashExample(ctx.backupHash) + '\n')
        }
      }

      printTaskOutput(ctx, logger)
      return false
    }

    // Probably a compilation error in the config js file. Pass it up to the outer error handler for logging.
    throw runAllError
  }
}

export default lintStaged
