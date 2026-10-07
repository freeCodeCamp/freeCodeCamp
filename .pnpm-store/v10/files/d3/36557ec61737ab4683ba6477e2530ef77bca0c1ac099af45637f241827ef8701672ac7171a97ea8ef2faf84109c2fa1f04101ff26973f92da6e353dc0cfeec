import { FSLike } from "fdir";

//#region src/types.d.ts
type FileSystemAdapter = Partial<FSLike>;
interface GlobOptions {
  /**
  * Whether to return absolute paths. Disable to have relative paths.
  * @default false
  */
  absolute?: boolean;
  /**
  * Enables support for brace expansion syntax, like `{a,b}` or `{1..9}`.
  * @default true
  */
  braceExpansion?: boolean;
  /**
  * Whether to match in case-sensitive mode.
  * @default true
  */
  caseSensitiveMatch?: boolean;
  /**
  * The working directory in which to search. Results will be returned relative to this directory, unless
  * {@link absolute} is set.
  *
  * It is important to avoid globbing outside this directory when possible, even with absolute paths enabled,
  * as doing so can harm performance due to having to recalculate relative paths.
  * @default process.cwd()
  */
  cwd?: string | URL;
  /**
  * Logs useful debug information. Meant for development purposes. Logs can change at any time.
  * @default false
  */
  debug?: boolean;
  /**
  * Maximum directory depth to crawl.
  * @default Infinity
  */
  deep?: number;
  /**
  * Whether to return entries that start with a dot, like `.gitignore` or `.prettierrc`.
  * @default false
  */
  dot?: boolean;
  /**
  * Whether to automatically expand directory patterns.
  *
  * Important to disable if migrating from [`fast-glob`](https://github.com/mrmlnc/fast-glob).
  * @default true
  */
  expandDirectories?: boolean;
  /**
  * Enables support for extglobs, like `+(pattern)`.
  * @default true
  */
  extglob?: boolean;
  /**
  * Whether to traverse and include symbolic links. Can slightly affect performance.
  * @default true
  */
  followSymbolicLinks?: boolean;
  /**
  * An object that overrides `node:fs` functions.
  * @default import('node:fs')
  */
  fs?: FileSystemAdapter;
  /**
  * Enables support for matching nested directories with globstars (`**`).
  * If `false`, `**` behaves exactly like `*`.
  * @default true
  */
  globstar?: boolean;
  /**
  * Glob patterns to exclude from the results.
  * @default []
  */
  ignore?: string | readonly string[];
  /**
  * Enable to only return directories.
  * If `true`, disables {@link onlyFiles}.
  * @default false
  */
  onlyDirectories?: boolean;
  /**
  * Enable to only return files.
  * @default true
  */
  onlyFiles?: boolean;
  /**
  * @deprecated Provide patterns as the first argument instead.
  */
  patterns?: string | readonly string[];
  /**
  * An `AbortSignal` to abort crawling the file system.
  * @default undefined
  */
  signal?: AbortSignal;
}
//#endregion
//#region src/utils.d.ts
/**
* Converts a path to a pattern depending on the platform.
* Identical to {@link escapePath} on POSIX systems.
* @see {@link https://superchupu.dev/tinyglobby/documentation#convertPathToPattern}
*/
declare const convertPathToPattern: (path: string) => string;
/**
* Escapes a path's special characters depending on the platform.
* @see {@link https://superchupu.dev/tinyglobby/documentation#escapePath}
*/
declare const escapePath: (path: string) => string;
/**
* Checks if a pattern has dynamic parts.
*
* Has a few minor differences with [`fast-glob`](https://github.com/mrmlnc/fast-glob) for better accuracy:
*
* - Doesn't necessarily return `false` on patterns that include `\`.
* - Returns `true` if the pattern includes parentheses, regardless of them representing one single pattern or not.
* - Returns `true` for unfinished glob extensions i.e. `(h`, `+(h`.
* - Returns `true` for unfinished brace expansions as long as they include `,` or `..`.
*
* @see {@link https://superchupu.dev/tinyglobby/documentation#isDynamicPattern}
*/
declare function isDynamicPattern(pattern: string, options?: {
  caseSensitiveMatch: boolean;
}): boolean;
//#endregion
//#region src/index.d.ts
/**
* Asynchronously match files following a glob pattern.
* @see {@link https://superchupu.dev/tinyglobby/documentation#glob}
*/
declare function glob(patterns: string | readonly string[], options?: Omit<GlobOptions, "patterns">): Promise<string[]>;
/**
* @deprecated Provide patterns as the first argument instead.
*/
declare function glob(options: GlobOptions): Promise<string[]>;
/**
* Synchronously match files following a glob pattern.
* @see {@link https://superchupu.dev/tinyglobby/documentation#globSync}
*/
declare function globSync(patterns: string | readonly string[], options?: Omit<GlobOptions, "patterns">): string[];
/**
* @deprecated Provide patterns as the first argument instead.
*/
declare function globSync(options: GlobOptions): string[];
//#endregion
export { type GlobOptions, convertPathToPattern, escapePath, glob, globSync, isDynamicPattern };