import { exec } from 'tinyexec'

import { createDebug } from './debug.js'

const debugLog = createDebug('lint-staged:execGit')

/** @example "warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it" */
const GIT_CRLF_WARNING = /^warning.*CRLF.*the next time Git touches it/i

/**
 * Explicitly never recurse commands into submodules, overriding local/global configuration.
 * @see https://git-scm.com/docs/git-config#Documentation/git-config.txt-submodulerecurse
 */
const NO_SUBMODULE_RECURSE = ['-c', 'submodule.recurse=false']

// exported for tests
export const GIT_GLOBAL_OPTIONS = [...NO_SUBMODULE_RECURSE]

/** @type {(cmd: string[], options?: { cwd?: string }) => Promise<string>} */
export const execGit = async (cmd, options) => {
  debugLog('Running git command:', cmd)
  const result = exec('git', [...NO_SUBMODULE_RECURSE, ...cmd], {
    nodeOptions: {
      cwd: options?.cwd,
      stdio: ['ignore'],
    },
  })

  let output = ''
  for await (const line of result) {
    if (GIT_CRLF_WARNING.test(line)) {
      debugLog('Stripped Git CRLF warning: %s', line)
      continue
    }

    output += line + '\n'
  }
  output = output.trimEnd()

  if (result.exitCode > 0) {
    throw new Error(output, { cause: result })
  }

  return output
}
