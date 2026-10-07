/** @typedef {import('./index').Logger} Logger */

import path from 'node:path'

import { Listr } from 'listr2'

import { chunkFiles } from './chunkFiles.js'
import { blackBright } from './colors.js'
import { createDebug } from './debug.js'
import { execGit } from './execGit.js'
import { generateTasks } from './generateTasks.js'
import { getAbortController } from './getAbortController.js'
import { getFunctionTask, isFunctionTask } from './getFunctionTask.js'
import { getRenderer } from './getRenderer.js'
import { getSpawnedTasks } from './getSpawnedTasks.js'
import { getStagedFiles } from './getStagedFiles.js'
import { GitWorkflow } from './gitWorkflow.js'
import { groupFilesByConfig } from './groupFilesByConfig.js'
import {
  DEPRECATED_GIT_ADD,
  FAILED_GET_STAGED_FILES,
  NO_STAGED_FILES,
  NO_TASKS,
  NOT_GIT_REPO,
  SKIPPED_GIT_ERROR,
  SKIPPING_HIDE_PARTIALLY_CHANGED,
  skippingBackup,
} from './messages.js'
import { normalizePath } from './normalizePath.js'
import { resolveGitRepo } from './resolveGitRepo.js'
import { searchConfigs } from './searchConfigs.js'
import {
  applyModificationsSkipped,
  cleanupEnabled,
  cleanupSkipped,
  getInitialState,
  restoreOriginalStateEnabled,
  restoreOriginalStateSkipped,
  restoreUnstagedChangesSkipped,
  shouldHidePartiallyStagedFiles,
  shouldRestoreUnstagedChanges,
} from './state.js'
import { ConfigNotFoundError, GetStagedFilesError, GitError, GitRepoError } from './symbols.js'

const debugLog = createDebug('lint-staged:runAll')

/**
 * @param {ReturnType<typeof getInitialState>} ctx context
 * @param {unknown} cause error cause
 */
const createError = (ctx, cause) =>
  Object.assign(new Error('lint-staged failed', { cause }), { ctx })

/**
 * Executes all tasks and either resolves or rejects the promise
 *
 * @param {object} options
 * @param {boolean} [options.allowEmpty] - Allow empty commits when tasks revert all staged changes
 * @param {boolean} [options.color] - Enable or disable ANSI color codes in output.
 * @param {boolean | number} [options.concurrent] - The number of tasks to run concurrently, or false to run tasks serially
 * @param {Object} [options.configObject] - Explicit config object from the js API
 * @param {string} [options.configPath] - Explicit path to a config file
 * @param {boolean} [options.continueOnError] - Run all tasks to completion even if one fails
 * @param {string} [options.cwd] - Current working directory
 * @param {boolean} [options.debug] - Enable debug mode
 * @param {string} [options.diff] - Override the default "--staged" flag of "git diff" to get list of files
 * @param {string} [options.diffFilter] - Override the default "--diff-filter=ACMR" flag of "git diff" to get list of files
 * @param {boolean} [options.failOnChanges] - Fail with exit code 1 when tasks modify tracked files
 * @param {boolean} [options.hidePartiallyStaged] - Whether to hide unstaged changes from partially staged files before running tasks
 * @param {boolean} [options.hideUnstaged] - Whether to hide all unstaged changes before running tasks
 * @param {number} [options.maxArgLength] - Maximum argument string length
 * @param {boolean} [options.quiet] - Disable lint-staged's own console output
 * @param {boolean} [options.relative] - Pass relative filepaths to tasks
 * @param {boolean} [options.revert] - revert to original state in case of errors
 * @param {boolean} [options.stash] - Enable the backup stash, and revert in case of errors
 * @param {boolean} [options.verbose] - Show task output even when tasks succeed; by default only failed output is shown
 * @param {Logger} logger
 * @returns {Promise}
 */
export const runAll = async (
  {
    allowEmpty = false,
    color = false,
    concurrent = true,
    configObject,
    configPath,
    continueOnError = false,
    cwd,
    debug = false,
    diff,
    diffFilter,
    failOnChanges = false,
    hideUnstaged = false,
    hidePartiallyStaged = !hideUnstaged,
    maxArgLength,
    quiet = false,
    relative = false,
    // Stashing should be disabled by default when the `diff` option is used
    stash = diff === undefined,
    // Cannot revert to original state without stash
    revert = stash,
    verbose = false,
  },
  logger = console
) => {
  debugLog('Running all linter scripts...')

  // Resolve relative CWD option
  const hasExplicitCwd = !!cwd
  cwd = hasExplicitCwd ? path.resolve(cwd) : process.cwd()
  debugLog('Using working directory `%s`', cwd)

  const ctx = getInitialState({
    failOnChanges,
    hidePartiallyStaged,
    hideUnstaged,
    quiet,
    revert,
  })

  const { topLevelDir, gitConfigDir } = await resolveGitRepo(cwd)
  if (!topLevelDir) {
    if (!quiet) ctx.output.push(NOT_GIT_REPO)
    ctx.errors.add(GitRepoError)
    throw createError(ctx, GitRepoError)
  }

  // Test whether we have any commits or not.
  // Stashing must be disabled with no initial commit.
  const hasInitialCommit = await execGit(['log', '-1'], { cwd: topLevelDir })
    .then(() => true)
    .catch(() => false)

  // Lint-staged will create a backup stash only when there's an initial commit,
  // and when using the default list of staged files by default
  ctx.shouldBackup = hasInitialCommit && stash
  if (!ctx.shouldBackup && !quiet) {
    logger.warn(skippingBackup(hasInitialCommit, diff))
  }

  if (!ctx.shouldHidePartiallyStaged && !ctx.shouldHideUnstaged && !quiet) {
    logger.warn(SKIPPING_HIDE_PARTIALLY_CHANGED)
  }

  // Run staged files retrieval and config search in parallel since they're independent
  const [stagedFiles, foundConfigs] = await Promise.all([
    getStagedFiles({ cwd: topLevelDir, diff, diffFilter }),
    searchConfigs({ configObject, configPath, cwd, topLevelDir }, logger),
  ])

  if (!stagedFiles) {
    if (!quiet) ctx.output.push(FAILED_GET_STAGED_FILES)
    ctx.errors.add(GetStagedFilesError)
    throw createError(ctx, GetStagedFilesError)
  }
  debugLog('Loaded list of staged files in git:\n%O', stagedFiles)

  // If there are no files avoid executing any lint-staged logic
  if (stagedFiles.length === 0) {
    if (!quiet) ctx.output.push(NO_STAGED_FILES)
    return ctx
  }

  const numberOfConfigs = Object.keys(foundConfigs).length

  // Throw if no configurations were found
  if (numberOfConfigs === 0) {
    ctx.errors.add(ConfigNotFoundError)
    throw createError(ctx, ConfigNotFoundError)
  }

  const filesByConfig = await groupFilesByConfig({
    configs: foundConfigs,
    files: stagedFiles,
    singleConfigMode: configObject || configPath !== undefined,
  })

  const hasMultipleConfigs = numberOfConfigs > 1

  // lint-staged 10 will automatically add modifications to index
  // Warn user when their command includes `git add`
  let hasDeprecatedGitAdd = false

  const listrOptions = {
    ctx,
    exitOnError: false,
    registerSignalListeners: false,
    ...getRenderer({ color, debug, quiet }, logger),
  }

  const listrTasks = []

  // Set of all staged files that matched a task glob. Values in a set are unique.
  /** @type {Set<import('./getStagedFiles.js').StagedFile>} */
  const matchedFiles = new Set()

  const abortController = getAbortController()

  for (const [configPath, { config, files }] of Object.entries(filesByConfig)) {
    const configName = configPath ? normalizePath(path.relative(cwd, configPath)) : 'Config object'

    const stagedFileChunks = chunkFiles({ baseDir: topLevelDir, files, maxArgLength, relative })

    // Use actual cwd if it's specified, or there's only a single config file.
    // Otherwise use the directory of the config file for each config group,
    // to make sure tasks are separated from each other.
    const groupCwd = hasMultipleConfigs && !hasExplicitCwd ? path.dirname(configPath) : cwd

    const chunkCount = stagedFileChunks.length
    if (chunkCount > 1) {
      debugLog('Chunked staged files from `%s` into %d part', configPath, chunkCount)
    }

    for (const [index, files] of stagedFileChunks.entries()) {
      const chunkListrTasks = await Promise.all(
        generateTasks({ config, cwd: groupCwd, files, relative }).map((task) =>
          (isFunctionTask(task.commands)
            ? getFunctionTask(task.commands, task.fileList)
            : getSpawnedTasks({
                abortController,
                color,
                commands: task.commands,
                continueOnError,
                cwd: groupCwd,
                files: task.fileList,
                topLevelDir,
                verbose,
              })
          ).then((subTasks) => {
            // Add files from task to match set
            task.fileList.forEach((file) => {
              // Make sure relative files are normalized to the
              // group cwd, because other there might be identical
              // relative filenames in the entire set.
              const normalizedFile = path.isAbsolute(file.filepath)
                ? file
                : {
                    filepath: normalizePath(path.join(groupCwd, file.filepath)),
                    status: file.status,
                  }

              matchedFiles.add(normalizedFile)
            })

            hasDeprecatedGitAdd =
              hasDeprecatedGitAdd || subTasks.some((subTask) => subTask.command === 'git add')

            const fileCount = task.fileList.length

            return {
              title: `${task.pattern}${blackBright(
                ` — ${fileCount} ${fileCount === 1 ? 'file' : 'files'}`
              )}`,
              task: async (ctx, task) =>
                task.newListr(
                  subTasks,
                  // Subtasks should not run in parallel, and should exit on error
                  { concurrent: false, exitOnError: !continueOnError }
                ),
              skip: () => {
                // Skip task when no files matched
                if (fileCount === 0) {
                  return `${task.pattern}${blackBright(' — no files')}`
                }
                return false
              },
            }
          })
        )
      )

      listrTasks.push({
        title:
          `${configName}${blackBright(` — ${files.length} ${files.length > 1 ? 'files' : 'file'}`)}` +
          (chunkCount > 1 ? blackBright(` (chunk ${index + 1}/${chunkCount})...`) : ''),
        task: (ctx, task) =>
          task.newListr(chunkListrTasks, { concurrent, exitOnError: !continueOnError }),
        skip: () => {
          // Skip if the first step (backup) failed
          if (ctx.errors.has(GitError)) return SKIPPED_GIT_ERROR
          // Skip chunk when no every task is skipped (due to no matches)
          if (chunkListrTasks.every((task) => task.skip())) {
            return `${configName}${blackBright(' — no tasks to run')}`
          }
          return false
        },
      })
    }
  }

  if (hasDeprecatedGitAdd && !quiet) {
    logger.warn(DEPRECATED_GIT_ADD)
  }

  // If all of the configured tasks should be skipped
  // avoid executing any lint-staged logic
  if (listrTasks.every((task) => task.skip())) {
    if (!quiet) ctx.output.push(NO_TASKS)
    return ctx
  }

  // Chunk matched files for better Windows compatibility
  /** @type {import('./getStagedFiles.js').StagedFile[][]} */
  const matchedFileChunks = chunkFiles({
    // matched files are relative to `cwd`, not `topLevelDir`, when `relative` is used
    baseDir: cwd,
    files: Array.from(matchedFiles),
    maxArgLength,
    relative: false,
  })

  const git = new GitWorkflow({
    allowEmpty,
    diff,
    diffFilter,
    failOnChanges,
    gitConfigDir,
    matchedFileChunks,
    topLevelDir,
  })

  const runner = new Listr(
    [
      {
        title: ctx.shouldBackup ? 'Backing up original state...' : 'Preparing lint-staged...',
        task: (ctx, task) => git.prepare(ctx, task),
      },
      {
        title: 'Hiding unstaged changes to partially staged files...',
        task: (ctx) => git.hidePartiallyStagedChanges(ctx),
        enabled: shouldHidePartiallyStagedFiles,
      },
      {
        title: `Running tasks for ${diff ? 'changed' : 'staged'} files...`,
        task: (ctx, task) => git.runTasks(ctx, task, { listrTasks, concurrent }),
        skip: () => listrTasks.every((task) => task.skip()),
      },
      {
        title: 'Applying modifications from tasks...',
        task: (ctx) => git.applyModifications(ctx),
        skip: applyModificationsSkipped,
      },
      {
        title: 'Restoring unstaged changes...',
        task: (ctx) => git.restoreUnstagedChanges(ctx),
        enabled: shouldRestoreUnstagedChanges,
        skip: restoreUnstagedChangesSkipped,
      },
      {
        title: 'Reverting to original state because of errors...',
        task: (ctx) => git.restoreOriginalState(ctx),
        enabled: restoreOriginalStateEnabled,
        skip: restoreOriginalStateSkipped,
      },
      {
        title: 'Cleaning up temporary files...',
        task: (ctx) => git.cleanup(ctx),
        enabled: cleanupEnabled,
        skip: cleanupSkipped,
      },
    ],
    listrOptions
  )

  await runner.run()

  if (ctx.errors.size > 0) {
    throw createError(ctx)
  }

  return ctx
}
