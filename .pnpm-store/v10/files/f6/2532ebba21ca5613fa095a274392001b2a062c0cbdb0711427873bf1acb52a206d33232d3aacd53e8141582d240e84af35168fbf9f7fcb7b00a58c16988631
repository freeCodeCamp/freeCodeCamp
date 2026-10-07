import path from 'node:path'

import { createDebug } from './debug.js'
import { execGit } from './execGit.js'
import { normalizePath } from './normalizePath.js'

const debugLog = createDebug('lint-staged:resolveGitRepo')

/**
 * Relative path up to the repo top-level directory
 * @example "../"
 */
const CDUP = '--show-cdup'

/**
 * Absolute repo top-level directory
 *
 * @example <caption>Git on macOS</caption>
 * "/Users/iiro/Documents/git/lint-staged"
 *
 * @example <caption>Git for Windows</caption>
 * "C:\Users\iiro\Documents\git\lint-staged"
 *
 * @example <caption>Git installed with MSYS2, this doesn't work when used as CWD with Node.js child_process</caption>
 * "/c/Users/iiro/Documents/git/lint-staged"
 */
const TOPLEVEL = '--show-toplevel'

/**
 * Absolute .git directory, similar to top-level
 *
 * @example "/Users/iiro/Documents/git/lint-staged/.git"
 */
const ABSOLUTE_GIT_DIR = '--absolute-git-dir'

/** Resolve git directory and possible submodule paths */
export const resolveGitRepo = async (cwd = process.cwd()) => {
  try {
    debugLog('Resolving git repo from `%s`', cwd)

    // Unset GIT_DIR before running any git operations in case it's pointing to an incorrect location
    debugLog('Unset GIT_DIR (was `%s`)', process.env.GIT_DIR)
    delete process.env.GIT_DIR
    debugLog('Unset GIT_WORK_TREE (was `%s`)', process.env.GIT_WORK_TREE)
    delete process.env.GIT_WORK_TREE

    /** Git rev-parse returns all three flag values on separate lines  */
    const revParseOutput = await execGit(['rev-parse', CDUP, TOPLEVEL, ABSOLUTE_GIT_DIR], {
      cwd,
    })
    const [relativeTopLevelDir, topLevel, absoluteGitDir] = revParseOutput.split('\n')

    const topLevelDir = normalizePath(path.join(cwd, relativeTopLevelDir))
    debugLog('Resolved git repository top-level directory to be `%s`', topLevelDir)

    const relativeGitConfigDir = path.relative(topLevel, absoluteGitDir)
    const gitConfigDir = normalizePath(path.join(topLevelDir, relativeGitConfigDir))
    debugLog('Resolved git config directory to be `%s`', gitConfigDir)

    return { topLevelDir, gitConfigDir }
  } catch (error) {
    debugLog('Failed to resolve git repo with error:', error)
    return { error, topLevelDir: null, gitConfigDir: null }
  }
}
