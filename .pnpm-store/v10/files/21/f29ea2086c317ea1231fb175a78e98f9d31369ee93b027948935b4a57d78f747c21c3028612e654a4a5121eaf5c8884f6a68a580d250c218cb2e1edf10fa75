import { GIT_ERROR, TASK_ERROR } from './messages.js'
import {
  FailOnChangesError,
  GitError,
  RestoreOriginalStateError,
  RestoreUnstagedChangesError,
  TaskError,
} from './symbols.js'

export const getInitialState = ({
  failOnChanges = false,
  hideUnstaged = false,
  hidePartiallyStaged = !hideUnstaged,
  quiet = false,
  revert = true,
} = {}) => ({
  backupHash: null,
  errors: new Set([]),
  shouldFailOnChanges: failOnChanges,
  hasFilesToHide: null,
  output: [],
  quiet,
  shouldBackup: null,
  shouldHidePartiallyStaged: hidePartiallyStaged,
  shouldHideUnstaged: hideUnstaged,
  shouldRevert: revert,
  unstagedDiffSha256: null,
  unstagedPatch: null,
})

export const shouldHidePartiallyStagedFiles = (ctx) =>
  ctx.shouldHidePartiallyStaged && ctx.hasFilesToHide

export const shouldRestoreUnstagedChanges = (ctx) =>
  (ctx.shouldHideUnstaged || ctx.shouldHidePartiallyStaged) && ctx.hasFilesToHide

export const applyModificationsSkipped = (ctx) => {
  // Always apply back unstaged modifications when skipping revert or backup
  if (!ctx.shouldRevert || !ctx.shouldBackup) return false

  // Should be skipped in case of git errors
  if (ctx.errors.has(GitError)) {
    return GIT_ERROR
  }

  // Should be skipped when tasks fail
  if (ctx.errors.has(TaskError)) {
    return TASK_ERROR
  }
}

export const restoreUnstagedChangesSkipped = (ctx) => {
  // Should be skipped in case of git errors
  if (ctx.errors.has(GitError)) {
    return GIT_ERROR
  }

  // When complete reverting to original state is skipped,
  // we can still restore unstaged changes to make it easier
  // to do manually.
  if (!ctx.shouldRevert) {
    false
  }

  // Should be skipped when tasks fail
  if (ctx.errors.has(TaskError)) {
    return TASK_ERROR
  }
}

export const restoreOriginalStateEnabled = (ctx) =>
  !!ctx.shouldRevert &&
  !!ctx.shouldBackup &&
  (ctx.errors.has(FailOnChangesError) ||
    ctx.errors.has(TaskError) ||
    ctx.errors.has(RestoreUnstagedChangesError))

export const restoreOriginalStateSkipped = (ctx) => {
  // Should be skipped in case of unknown git errors
  if (ctx.errors.has(GitError) && !ctx.errors.has(RestoreUnstagedChangesError)) {
    return GIT_ERROR
  }
}

export const cleanupEnabled = (ctx) => ctx.shouldBackup

export const cleanupSkipped = (ctx) => {
  // "--fail-on-changes" was used, so we shouldn't drop the backup stash
  if (ctx.errors.has(FailOnChangesError) && !ctx.shouldRevert) {
    return true
  }

  // Should be skipped in case of unknown git errors
  if (restoreOriginalStateSkipped(ctx)) {
    return GIT_ERROR
  }

  // Should be skipped when reverting to original state fails
  if (ctx.errors.has(RestoreOriginalStateError)) {
    return GIT_ERROR
  }
}
