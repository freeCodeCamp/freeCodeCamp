import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'

import { createDebug } from './debug.js'
import { execGit } from './execGit.js'
import { readFile, unlink, writeFile } from './file.js'
import { getDiffCommand } from './getDiffCommand.js'
import { parseGitZOutput } from './parseGitZOutput.js'
import {
  ApplyEmptyCommitError,
  FailOnChangesError,
  GetBackupStashError,
  GitError,
  HideUnstagedChangesError,
  RestoreMergeStatusError,
  RestoreOriginalStateError,
  RestoreUnstagedChangesError,
} from './symbols.js'

const debugLog = createDebug('lint-staged:GitWorkflow')

const MERGE_HEAD = 'MERGE_HEAD'
const MERGE_MODE = 'MERGE_MODE'
const MERGE_MSG = 'MERGE_MSG'

// In git status machine output, renames are presented as `to`NUL`from`
// When diffing, both need to be taken into account, but in some cases on the `to`.
// eslint-disable-next-line no-control-regex
const RENAME = /\x00/

/**
 * From list of files, split renames and flatten into two files `to`NUL`from`.
 * @param {string[]} files
 * @param {Boolean} [includeRenameFrom=true] Whether or not to include the `from` renamed file, which is no longer on disk
 */
const processRenames = (files, includeRenameFrom = true) =>
  files.reduce((flattened, file) => {
    if (RENAME.test(file)) {
      const [to, from] = file.split(RENAME)
      if (includeRenameFrom) flattened.push(from)
      flattened.push(to)
    } else {
      flattened.push(file)
    }
    return flattened
  }, [])

export const STASH = 'lint-staged automatic backup'

const PATCH_UNSTAGED = 'lint-staged_unstaged.patch'

const GIT_DIFF_ARGS = [
  '--binary', // support binary files
  '--unified=0', // do not add lines around diff for consistent behaviour
  '--no-color', // disable colors for consistent behaviour
  '--no-ext-diff', // disable external diff tools for consistent behaviour
  '--src-prefix=a/', // force prefix for consistent behaviour
  '--dst-prefix=b/', // force prefix for consistent behaviour
  '--patch', // output a patch that can be applied
  '--submodule=short', // always use the default short format for submodules
]
const GIT_APPLY_ARGS = ['-v', '--whitespace=nowarn', '--recount', '--unidiff-zero']

const handleError = (error, ctx, symbol) => {
  ctx.errors.add(GitError)
  if (symbol) ctx.errors.add(symbol)
  throw error
}

const calculateSha256 = (input) => crypto.createHash('sha256').update(input, 'utf-8').digest('hex')

/**
 * The lines are wrapped in double quotes
 * @returns {string[]}
 */
const cleanGitStashOutput = (lines) => lines.map((line) => line.replace(/^"(.*)"$/, '$1'))

export class GitWorkflow {
  /**
   * @param {Object} opts
   * @param {import('./getStagedFiles.js').StagedFile[][]} opts.matchedFileChunks
   */
  constructor({
    allowEmpty,
    diff,
    diffFilter,
    failOnChanges,
    gitConfigDir,
    matchedFileChunks,
    topLevelDir,
  }) {
    this.execGit = (args, options = {}) => execGit(args, { ...options, cwd: topLevelDir })
    this.allowEmpty = allowEmpty
    this.deletedFiles = []
    this.diff = diff
    this.diffFilter = diffFilter
    this.gitConfigDir = gitConfigDir
    this.failOnChanges = !!failOnChanges
    /** @type {import('./getStagedFiles.js').StagedFile[][]} */
    this.matchedFileChunks = matchedFileChunks
    this.topLevelDir = topLevelDir

    /**
     * These three files hold state about an ongoing git merge
     * Resolve paths during constructor
     */
    this.mergeHeadFilename = path.resolve(gitConfigDir, MERGE_HEAD)
    this.mergeModeFilename = path.resolve(gitConfigDir, MERGE_MODE)
    this.mergeMsgFilename = path.resolve(gitConfigDir, MERGE_MSG)
  }

  /**
   * Get absolute path to file hidden inside .git
   * @param {string} filename
   */
  getHiddenFilepath(filename) {
    return path.resolve(this.gitConfigDir, `./${filename}`)
  }

  /**
   * Get name of backup stash
   */
  async getBackupStash(ctx) {
    /** Print stash list with short hash and subject */
    const stashes = await this.execGit(['stash', 'list', '--format="%h %s"', '-z'])
      .then(parseGitZOutput)
      .then(cleanGitStashOutput)

    const index = stashes.findIndex((line) => line.startsWith(ctx.backupHash))

    if (index === -1) {
      ctx.errors.add(GetBackupStashError)
      throw new Error('lint-staged automatic backup is missing!')
    }

    return String(index)
  }

  /**
   * Get a list of unstaged deleted files
   */
  async getDeletedFiles() {
    debugLog('Getting deleted files...')
    const lsFiles = await this.execGit(['ls-files', '--deleted'])
    const deletedFiles = lsFiles
      .split('\n')
      .filter(Boolean)
      .map((file) => path.resolve(this.topLevelDir, file))
    debugLog('Found deleted files:', deletedFiles)
    return deletedFiles
  }

  /**
   * Save meta information about ongoing git merge
   */
  async backupMergeStatus() {
    debugLog('Backing up merge state...')
    await Promise.all([
      readFile(this.mergeHeadFilename).then((buffer) => (this.mergeHeadBuffer = buffer)),
      readFile(this.mergeModeFilename).then((buffer) => (this.mergeModeBuffer = buffer)),
      readFile(this.mergeMsgFilename).then((buffer) => (this.mergeMsgBuffer = buffer)),
    ])
    debugLog('Done backing up merge state!')
  }

  /**
   * Restore meta information about ongoing git merge
   */
  async restoreMergeStatus(ctx) {
    debugLog('Restoring merge state...')
    try {
      await Promise.all([
        this.mergeHeadBuffer && writeFile(this.mergeHeadFilename, this.mergeHeadBuffer),
        this.mergeModeBuffer && writeFile(this.mergeModeFilename, this.mergeModeBuffer),
        this.mergeMsgBuffer && writeFile(this.mergeMsgFilename, this.mergeMsgBuffer),
      ])
      debugLog('Done restoring merge state!')
    } catch (error) {
      debugLog('Failed restoring merge state with error:')
      debugLog(error)
      handleError(
        new Error('Merge state could not be restored due to an error!'),
        ctx,
        RestoreMergeStatusError
      )
    }
  }

  /**
   * Get a list of all files with both staged and unstaged modifications.
   * Renames have special treatment, since the single status line includes
   * both the "from" and "to" filenames, where "from" is no longer on disk.
   */
  async getUnstagedFiles({ onlyPartial = false } = {}) {
    debugLog('Getting partially staged files...')
    const status = await this.execGit(['status', '-z'])
    /**
     * See https://git-scm.com/docs/git-status#_short_format
     * Entries returned in machine format are separated by a NUL character.
     * The first letter of each entry represents current index status,
     * and second the working tree. Index and working tree status codes are
     * separated from the file name by a space. If an entry includes a
     * renamed file, the file names are separated by a NUL character
     * (e.g. `to`\0`from`)
     */
    const unstagedFiles = status
      // eslint-disable-next-line no-control-regex
      .split(/\x00(?=[ AMDRCU?!]{2} |$)/)
      .filter((line) => {
        const [index, workingTree] = line
        const updatedInIndex = index !== ' ' && index !== '?'
        const updatedInWorkingTree = workingTree !== ' ' && workingTree !== '?'

        if (onlyPartial) {
          return updatedInIndex && updatedInWorkingTree
        }

        return updatedInWorkingTree
      })
      .map((line) => line.slice(3)) // Remove first three letters (index, workingTree, and a whitespace)
      .filter(Boolean) // Filter empty strings
    debugLog(`Found ${onlyPartial ? 'partially staged' : 'unstaged'} files:`, unstagedFiles)
    return unstagedFiles.length ? unstagedFiles : null
  }

  /**
   * Create a diff of unstaged or partially staged files and backup stash if enabled.
   */
  async prepare(ctx, task) {
    try {
      debugLog(task.title)

      if (ctx.shouldBackup) {
        // When backup is enabled, the revert will clear ongoing merge status.
        await this.backupMergeStatus()

        // Get a list of unstaged deleted files, because certain bugs might cause them to reappear:
        // - in git versions =< 2.13.0 the `git stash --keep-index` option resurrects deleted files
        // - git stash can't infer RD or MD states correctly, and will lose the deletion
        this.deletedFiles = await this.getDeletedFiles()
      }

      if (ctx.shouldHideUnstaged) {
        this.unstagedFiles = await this.getUnstagedFiles({ onlyPartial: false })
        ctx.hasFilesToHide = !!this.unstagedFiles
      } else if (ctx.shouldHidePartiallyStaged) {
        this.unstagedFiles = await this.getUnstagedFiles({ onlyPartial: true })
        ctx.hasFilesToHide = !!this.unstagedFiles
      }

      if (this.unstagedFiles) {
        const unstagedPatch = this.getHiddenFilepath(PATCH_UNSTAGED)
        ctx.unstagedPatch = unstagedPatch
        const files = processRenames(this.unstagedFiles)
        await this.execGit(['diff', ...GIT_DIFF_ARGS, '--output', unstagedPatch, '--', ...files])
      }

      if (ctx.shouldBackup) {
        if (ctx.shouldHideUnstaged) {
          /** Save stash of all changes, clearing the working tree but keeping staged files as-is */
          await this.execGit(['stash', 'push', '--keep-index', '--message', STASH])
          /** Print stash list with short hash and subject */
          const stashes = await this.execGit(['stash', 'list', '--format="%h %s"', '-z'])
            .then(parseGitZOutput)
            .then(cleanGitStashOutput)

          /** The stash line starts with the short hash, so we split from space and choose the first part */
          ctx.backupHash = stashes.find((line) => line.includes(STASH))?.split(' ')[0]
        } else {
          /** Save stash of all changes, keeping all files as-is */
          const stashHash = await this.execGit(['stash', 'create'])
          ctx.backupHash = await this.execGit(['rev-parse', '--short', stashHash])
          await this.execGit(['stash', 'store', '--quiet', '--message', STASH, ctx.backupHash])
        }

        task.title = `Backed up original state in git stash (${ctx.backupHash})`
        debugLog(task.title)
      }
    } catch (error) {
      handleError(error, ctx)
    }
  }

  async hidePartiallyStagedChanges(ctx) {
    try {
      const files = processRenames(this.unstagedFiles, false)
      await this.execGit(['checkout', '--force', '--', ...files])
    } catch (error) {
      /**
       * `git checkout --force` doesn't throw errors, so it shouldn't be possible to get here.
       * If this does fail, the handleError method will set ctx.gitError and lint-staged will fail.
       */
      handleError(error, ctx, HideUnstagedChangesError)
    }
  }

  async runTasks(ctx, task, { listrTasks, concurrent }) {
    if (ctx.shouldFailOnChanges) {
      debugLog(
        'Calculating SHA-256 hash of unstaged changes because "--fail-on-changes" was used...'
      )
      const diff = await this.execGit(['diff', '--patch', '--unified=0'])
      ctx.unstagedDiffSha256 = calculateSha256(diff)
      debugLog('SHA-256 hash of unstaged changes is %s', ctx.unstagedDiffSha256)
    }

    return task.newListr(listrTasks, { concurrent })
  }

  /**
   * Applies back task modifications, and unstaged changes hidden in the stash.
   * In case of a merge-conflict retry with 3-way merge.
   */
  async applyModifications(ctx) {
    if (ctx.shouldFailOnChanges) {
      debugLog(
        'Calculating SHA-256 hash of changes after tasks because "--fail-on-changes" was used...'
      )
      const diff = await this.execGit(['diff', '--patch', '--unified=0'])
      const diffSha256 = calculateSha256(diff)
      debugLog('SHA-256 hash of changes after tasks is %s', diffSha256)
      if (ctx.unstagedDiffSha256 !== diffSha256) {
        ctx.errors.add(FailOnChangesError)
        throw new Error('Tasks modified files and --fail-on-changes was used!')
      }
    }

    debugLog('Adding task modifications to index...')

    // `matchedFileChunks` includes staged files that lint-staged originally detected and matched against a task.
    // Add only these files so any 3rd-party edits to other files won't be included in the commit.
    // These additions per chunk are run "serially" to prevent race conditions.
    // Git add creates a lockfile in the repo causing concurrent operations to fail.
    for (const files of this.matchedFileChunks) {
      const accessCheckedFiles = await Promise.allSettled(
        files.map(async (f) => {
          if (f.status === 'D') {
            await fs.access(f.filepath)
            return f.filepath // File is no longer deleted and can be added
          } else {
            return f.filepath
          }
        })
      )

      const addableFiles = accessCheckedFiles.flatMap((r) =>
        r.status === 'fulfilled' ? [r.value] : []
      )

      await this.execGit(['add', '--', ...addableFiles])
    }

    debugLog('Done adding task modifications to index!')

    const stagedFilesAfterAdd = await this.execGit([
      ...getDiffCommand(this.diff, this.diffFilter),
      '--name-only',
      '-z',
    ])

    if (!stagedFilesAfterAdd && !this.allowEmpty) {
      // Tasks reverted all staged changes and the commit would be empty
      // Throw error to stop commit unless `--allow-empty` was used
      handleError(new Error('Prevented an empty git commit!'), ctx, ApplyEmptyCommitError)
    }
  }

  /**
   * Restore unstaged changes to partially changed files. If it at first fails,
   * this is probably because of conflicts between new task modifications.
   * 3-way merge usually fixes this, and in case it doesn't we should just give up and throw.
   */
  async restoreUnstagedChanges(ctx) {
    debugLog('Restoring unstaged changes...')
    const unstagedPatch = this.getHiddenFilepath(PATCH_UNSTAGED)
    try {
      await this.execGit(['apply', ...GIT_APPLY_ARGS, unstagedPatch])
    } catch (applyError) {
      debugLog('Error while restoring changes:')
      debugLog(applyError)
      debugLog('Retrying with 3-way merge')
      // Retry with a 3-way merge if normal apply fails
      try {
        await this.execGit(['apply', ...GIT_APPLY_ARGS, '--3way', unstagedPatch])
      } catch (threeWayApplyError) {
        debugLog('Error while restoring unstaged changes using 3-way merge:')
        debugLog(threeWayApplyError)
        handleError(
          new Error('Unstaged changes could not be restored due to a merge conflict!'),
          ctx,
          RestoreUnstagedChangesError
        )
      }
    }
  }

  /**
   * Restore original HEAD state in case of errors
   */
  async restoreOriginalState(ctx) {
    try {
      debugLog('Restoring original state...')
      await this.execGit(['reset', '--hard', 'HEAD'])
      await this.execGit(['stash', 'apply', '--quiet', '--index', await this.getBackupStash(ctx)])

      // Restore meta information about ongoing git merge
      await this.restoreMergeStatus(ctx)

      // If stashing resurrected deleted files, clean them out
      await Promise.all(this.deletedFiles.map((file) => unlink(file)))

      // Clean out patch
      await unlink(this.getHiddenFilepath(PATCH_UNSTAGED))

      debugLog('Done restoring original state!')
    } catch (error) {
      handleError(error, ctx, RestoreOriginalStateError)
    }
  }

  /**
   * Drop the created stashes after everything has run
   */
  async cleanup(ctx) {
    try {
      debugLog('Dropping backup stash...')
      await this.execGit(['stash', 'drop', '--quiet', await this.getBackupStash(ctx)])
      debugLog('Done dropping backup stash!')
    } catch (error) {
      handleError(error, ctx)
    }
  }
}
