type Pathname = string

interface IgnoreRule {
  pattern: string
  mark?: string
  negative: boolean
}

interface TestResult {
  ignored: boolean
  unignored: boolean
  rule?: IgnoreRule
}

interface PatternParams {
  pattern: string
  mark?: string
}

/**
 * Creates new ignore manager.
 */
declare function ignore(options?: ignore.Options): ignore.Ignore
declare namespace ignore {
  interface Ignore {
    /**
     * Adds one or several rules to the current manager.
     * @param  {string[]} patterns
     * @returns IgnoreBase
     */
    add(
      patterns: string | Ignore | readonly (string | Ignore)[] | PatternParams
    ): this

    /**
     * Filters the given array of pathnames, and returns the filtered array.
     * NOTICE that each path here should be a relative path to the root of your repository.
     * @param paths the array of paths to be filtered.
     * @returns The filtered array of paths
     */
    filter(pathnames: readonly Pathname[]): Pathname[]

    /**
     * Creates a filter function which could filter
     * an array of paths with Array.prototype.filter.
     */
    createFilter(): (pathname: Pathname) => boolean

    /**
     * Returns Boolean whether pathname should be ignored.
     * @param  {string} pathname a path to check
     * @returns boolean
     */
    ignores(pathname: Pathname): boolean

    /**
     * Returns whether pathname should be ignored or unignored
     * @param  {string} pathname a path to check
     * @returns TestResult
     */
    test(pathname: Pathname): TestResult

    /**
     * Debugs ignore rules and returns the checking result, which is
     *   equivalent to `git check-ignore -v`.
     * @returns TestResult
     */
    checkIgnore(pathname: Pathname): TestResult
  }

  interface Options {
    ignorecase?: boolean
    // For compatibility
    ignoreCase?: boolean
    allowRelativePaths?: boolean
  }

  function isPathValid(pathname: string): boolean
}

export = ignore
