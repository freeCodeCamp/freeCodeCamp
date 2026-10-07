/**
 * Return array of browsers by selection queries.
 *
 * ```js
 * browserslist('IE >= 10, IE 8') //=> ['ie 11', 'ie 10', 'ie 8']
 * ```
 *
 * @param queries Browser queries.
 * @param opts Options.
 * @returns Array with browser names in Can I Use.
 */
declare function browserslist(
  queries?: string | readonly string[] | null,
  opts?: browserslist.Options
): string[]

declare namespace browserslist {
  interface Query {
    compose: 'or' | 'and'
    type: string
    query: string
    not?: true
  }

  interface Options {
    /**
     * Path to processed file. It will be used to find config files.
     */
    path?: string | false
    /**
     * Processing environment. It will be used to take right queries
     * from config file.
     */
    env?: string
    /**
     * Custom browser usage statistics for "> 1% in my stats" query.
     */
    stats?: Stats | string
    /**
     * Path to config file with queries.
     */
    config?: string
    /**
     * Do not throw on unknown version in direct query.
     */
    ignoreUnknownVersions?: boolean
    /**
     * Throw an error if env is not found.
     */
    throwOnMissing?: boolean
    /**
     * Disable security checks for extend query.
     */
    dangerousExtend?: boolean
    /**
     * Alias mobile browsers to the desktop version when Can I Use
     * doesn’t have data about the specified version.
     */
    mobileToDesktop?: boolean
  }

  type Config = {
    defaults: string[]
    [section: string]: string[] | undefined
  }

  interface Stats {
    [browser: string]: {
      [version: string]: number
    }
  }

  /**
   * Browser names aliases.
   */
  let aliases: {
    [alias: string]: string | undefined
  }

  /**
   * Aliases to work with joined versions like `ios_saf 7.0-7.1`.
   */
  let versionAliases: {
    [browser: string]:
      | {
          [version: string]: string | undefined
        }
      | undefined
  }

  /**
   * Can I Use only provides a few versions for some browsers (e.g. `and_chr`).
   *
   * Fallback to a similar browser for unknown versions.
   */
  let desktopNames: {
    [browser: string]: string | undefined
  }

  let data: {
    [browser: string]:
      | {
          name: string
          versions: string[]
          released: string[]
          releaseDate: {
            [version: string]: number | undefined | null
          }
        }
      | undefined
  }

  let nodeVersions: string[]

  interface Usage {
    [version: string]: number
  }

  let usage: {
    global?: Usage
    custom?: Usage | null
    [country: string]: Usage | undefined | null
  }

  let cache: {
    [feature: string]: {
      [name: string]: {
        [version: string]: string
      }
    }
  }

  /**
   * Default browsers query
   */
  let defaults: readonly string[]

  /**
   * Which statistics should be used. Country code or custom statistics.
   * Pass `"my stats"` to load statistics from `Browserslist` files.
   */
  type StatsOptions = string | 'my stats' | Stats | { dataByBrowser: Stats }

  /**
   * Return browsers market coverage.
   *
   * ```js
   * browserslist.coverage(browserslist('> 1% in US'), 'US') //=> 83.1
   * ```
   *
   * @param browsers Browsers names in Can I Use.
   * @param stats Which statistics should be used.
   * @returns Total market coverage for all selected browsers.
   */
  function coverage(browsers: readonly string[], stats?: StatsOptions): number

  /**
   * Get queries AST to analyze the config content.
   *
   * @param queries Browser queries.
   * @param opts Options.
   * @returns An array of the data of each query in the config.
   */
  function parse(
    queries?: string | readonly string[] | null,
    opts?: browserslist.Options
  ): Query[]

  /**
   * Return queries for specific file inside the project.
   *
   * ```js
   * browserslist.loadConfig({
   *   file: process.cwd()
   * }) ?? browserslist.defaults
   * ```
   */
  function loadConfig(options: LoadConfigOptions): string[] | undefined

  function clearCaches(): void

  function parseConfig(string: string): Config

  function readConfig(file: string): Config

  function findConfig(...pathSegments: string[]): Config | undefined

  function findConfigFile(...pathSegments: string[]): string | undefined

  interface LoadConfigOptions {
    /**
     * Path to config file
     * */
    config?: string

    /**
     * Path to file inside the project to find Browserslist config
     * in closest folder
     */
    path?: string

    /**
     * Environment to choose part of config.
     */
    env?: string
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BROWSERSLIST?: string
      BROWSERSLIST_CONFIG?: string
      BROWSERSLIST_DANGEROUS_EXTEND?: string
      BROWSERSLIST_DISABLE_CACHE?: string
      BROWSERSLIST_ENV?: string
      BROWSERSLIST_IGNORE_OLD_DATA?: string
      BROWSERSLIST_STATS?: string
      BROWSERSLIST_ROOT_PATH?: string
    }
  }
}

export = browserslist
