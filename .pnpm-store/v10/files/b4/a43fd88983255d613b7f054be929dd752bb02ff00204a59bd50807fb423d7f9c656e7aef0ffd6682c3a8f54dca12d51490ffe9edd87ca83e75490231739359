/** @type {(diff?: string, diffFilter?: string) => string[]} */
export const getDiffCommand = (diff, diffFilter) => {
  /**
   *  Docs for --diff-filter option:
   * @see https://git-scm.com/docs/git-diff#Documentation/git-diff.txt---diff-filterACDMRTUXB82308203
   */
  const diffFilterArg = diffFilter !== undefined ? diffFilter.trim() : 'ACMR'

  /** Use `--diff branch1...branch2` or `--diff="branch1 branch2", or fall back to default staged files */
  const diffArgs = diff !== undefined ? diff.trim().split(' ') : ['--staged']

  /**
   * Docs for -z option:
   * @see https://git-scm.com/docs/git-diff#Documentation/git-diff.txt--z
   */
  const diffCommand = ['diff', `--diff-filter=${diffFilterArg}`, ...diffArgs]

  return diffCommand
}
