/* (c) 2015 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */

/**
 * The hook. Accepts the code of the module and the filename.
 */
declare type Hook = (code: string, filename: string) => string;

/**
 * A matcher function, will be called with path to a file.
 *
 * Should return truthy if the file should be hooked, falsy otherwise.
 */
declare type Matcher = (path: string) => boolean;

/**
 * Reverts the hook when called.
 */
declare type RevertFunction = () => void;
interface Options {
  /**
   * The extensions to hook. Should start with '.' (ex. ['.js']).
   *
   * Takes precedence over `exts`, `extension` and `ext`.
   *
   * @alias exts
   * @alias extension
   * @alias ext
   * @default ['.js']
   */
  extensions?: ReadonlyArray<string> | string;

  /**
   * The extensions to hook. Should start with '.' (ex. ['.js']).
   *
   * Takes precedence over `extension` and `ext`.
   *
   * @alias extension
   * @alias ext
   * @default ['.js']
   */
  exts?: ReadonlyArray<string> | string;

  /**
   * The extensions to hook. Should start with '.' (ex. ['.js']).
   *
   * Takes precedence over `ext`.
   *
   * @alias ext
   * @default ['.js']
   */
  extension?: ReadonlyArray<string> | string;

  /**
   * The extensions to hook. Should start with '.' (ex. ['.js']).
   *
   * @default ['.js']
   */
  ext?: ReadonlyArray<string> | string;

  /**
   * A matcher function, will be called with path to a file.
   *
   * Should return truthy if the file should be hooked, falsy otherwise.
   */
  matcher?: Matcher | null;

  /**
   * Auto-ignore node_modules. Independent of any matcher.
   *
   * @default true
   */
  ignoreNodeModules?: boolean;
}

/**
 * Add a require hook.
 *
 * @param hook The hook. Accepts the code of the module and the filename. Required.
 * @returns The `revert` function. Reverts the hook when called.
 */
export declare function addHook(hook: Hook, opts?: Options): RevertFunction;
export {};
