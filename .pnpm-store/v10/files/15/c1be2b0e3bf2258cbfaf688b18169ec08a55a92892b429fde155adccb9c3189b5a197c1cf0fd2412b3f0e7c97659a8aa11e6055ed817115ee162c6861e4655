import path from 'node:path'

import { execGit } from './execGit.js'
import { getDiffCommand } from './getDiffCommand.js'
import { normalizePath } from './normalizePath.js'
import { parseGitZOutput } from './parseGitZOutput.js'

/**
 * @typedef {'A'|'C'|'D'|'M'|'R'|'T'|'U'|'X'} FileSatus
 * @typedef { { filepath: string; status: FileSatus }} StagedFile
 *
 * @param {Object} args
 * @param {string} [args.cwd]
 * @param {string} [args.diff]
 * @param {string} [args.diffFilter]
 * @retuns {Promise<StagedFile[] | null>}
 */
export const getStagedFiles = async ({ cwd = process.cwd(), diff, diffFilter } = {}) => {
  try {
    /**
     * With the raw output lines look like:
     *
     * :000000 100644 0000000 780ccd3\u0000A\u0000.gitmodules\u0000
     * :000000 160000 0000000 1bb568e\u0000A\u0000submodule\u0000
     *
     * @see https://git-scm.com/docs/git-diff#_raw_output_format
     */
    const output = await execGit([...getDiffCommand(diff, diffFilter), '--raw', '-z'], { cwd })

    if (!output) return []

    /**
     * Split from all colons and remove the first one, after which lines will look like:
     *
     * 000000 100644 0000000 780ccd3 A\u0000.gitmodules\u0000
     * 000000 160000 0000000 47e5cff A\u0000submodule\u0000
     *
     * where '\u0000' is the NUL character from '-z' option. After that we
     * parse the lines by splitting from NUL, and then split the first
     * part from space. This yields us enough info both filter out submodule
     * roots and get the filename.
     */
    return output
      .slice(1)
      .split('\u0000:')
      .map(parseGitZOutput)
      .flatMap(([info, src, dst]) => {
        const [, dstMode, , , statusWithScore] = info.split(' ')

        /**
         * Filter out submodules and symlinks
         * @see https://github.com/git/git/blob/cb96e1697ad6e54d11fc920c95f82977f8e438f8/Documentation/git-fast-import.adoc?plain=1#L634-L646
         */
        if (dstMode === '160000' || dstMode === '120000') {
          return []
        }

        /**
         * @example "M"
         * @example "R86"
         *
         * - A: addition of a file
         * - C: copy of a file into a new one
         * - D: deletion of a file
         * - M: modification of the contents or mode of a file
         * - R: renaming of a file
         * - T: change in the type of the file (regular file, symbolic link or submodule)
         * - U: file is unmerged (you must complete the merge before it can be committed)
         * - X: "unknown" change type (most probably a bug, please report it)
         */
        const status = statusWithScore[0]

        /** "dst" exists when moving files, otherwise it's undefined and only "src" exists */
        const filename = dst ?? src

        return [
          {
            filepath: normalizePath(path.resolve(cwd, filename)),
            status,
          },
        ]
      })
  } catch {
    return null
  }
}
