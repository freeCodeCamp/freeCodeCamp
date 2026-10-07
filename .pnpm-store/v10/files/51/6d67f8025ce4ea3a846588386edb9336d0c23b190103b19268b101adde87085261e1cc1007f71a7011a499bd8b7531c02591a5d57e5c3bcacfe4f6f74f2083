import * as path from 'node:path';
import path__default from 'node:path';

/**
 * Constant for path separator.
 *
 * Always equals to `"/"`.
 */
declare const sep = "/";
declare const normalize: typeof path__default.normalize;
declare const join: typeof path__default.join;
declare const resolve: typeof path__default.resolve;
/**
 * Resolves a string path, resolving '.' and '.' segments and allowing paths above the root.
 *
 * @param path - The path to normalise.
 * @param allowAboveRoot - Whether to allow the resulting path to be above the root directory.
 * @returns the normalised path string.
 */
declare function normalizeString(path: string, allowAboveRoot: boolean): string;
declare const isAbsolute: typeof path__default.isAbsolute;
declare const toNamespacedPath: typeof path__default.toNamespacedPath;
declare const extname: typeof path__default.extname;
declare const relative: typeof path__default.relative;
declare const dirname: typeof path__default.dirname;
declare const format: typeof path__default.format;
declare const basename: typeof path__default.basename;
declare const parse: typeof path__default.parse;
/**
 * The `path.matchesGlob()` method determines if `path` matches the `pattern`.
 * @param path The path to glob-match against.
 * @param pattern The glob to check the path against.
 */
declare const matchesGlob: (path: string, pattern: string | string[]) => boolean;

type NodePath = typeof path;
/**
 * The platform-specific file delimiter.
 *
 * Equals to `";"` in windows and `":"` in all other platforms.
 */
declare const delimiter: ";" | ":";
declare const posix: NodePath["posix"];
declare const win32: NodePath["win32"];
declare const _default: NodePath;

export { basename, _default as default, delimiter, dirname, extname, format, isAbsolute, join, matchesGlob, normalize, normalizeString, parse, posix, relative, resolve, sep, toNamespacedPath, win32 };
