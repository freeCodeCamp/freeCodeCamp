import { Minimatch } from 'minimatch';
import { Minipass } from 'minipass';
import { FSOption, Path, PathScurry } from 'path-scurry';
import { IgnoreLike } from './ignore.js';
import { Pattern } from './pattern.js';
export type MatchSet = Minimatch['set'];
export type GlobParts = Exclude<Minimatch['globParts'], undefined>;
/**
 * A `GlobOptions` object may be provided to any of the exported methods, and
 * must be provided to the `Glob` constructor.
 *
 * All options are optional, boolean, and false by default, unless otherwise
 * noted.
 *
 * All resolved options are added to the Glob object as properties.
 *
 * If you are running many `glob` operations, you can pass a Glob object as the
 * `options` argument to a subsequent operation to share the previously loaded
 * cache.
 */
export interface GlobOptions {
    /**
     * Set to `true` to always receive absolute paths for
     * matched files. Set to `false` to always return relative paths.
     *
     * When this option is not set, absolute paths are returned for patterns
     * that are absolute, and otherwise paths are returned that are relative
     * to the `cwd` setting.
     *
     * This does _not_ make an extra system call to get
     * the realpath, it only does string path resolution.
     *
     * Conflicts with {@link withFileTypes}
     */
    absolute?: boolean;
    /**
     * Set to false to enable {@link windowsPathsNoEscape}
     *
     * @deprecated
     */
    allowWindowsEscape?: boolean;
    /**
     * The current working directory in which to search. Defaults to
     * `process.cwd()`.
     *
     * May be eiher a string path or a `file://` URL object or string.
     */
    cwd?: string | URL;
    /**
     * Include `.dot` files in normal matches and `globstar`
     * matches. Note that an explicit dot in a portion of the pattern
     * will always match dot files.
     */
    dot?: boolean;
    /**
     * Prepend all relative path strings with `./` (or `.\` on Windows).
     *
     * Without this option, returned relative paths are "bare", so instead of
     * returning `'./foo/bar'`, they are returned as `'foo/bar'`.
     *
     * Relative patterns starting with `'../'` are not prepended with `./`, even
     * if this option is set.
     */
    dotRelative?: boolean;
    /**
     * Follow symlinked directories when expanding `**`
     * patterns. This can result in a lot of duplicate references in
     * the presence of cyclic links, and make performance quite bad.
     *
     * By default, a `**` in a pattern will follow 1 symbolic link if
     * it is not the first item in the pattern, or none if it is the
     * first item in the pattern, following the same behavior as Bash.
     */
    follow?: boolean;
    /**
     * string or string[], or an object with `ignored` and `childrenIgnored`
     * methods.
     *
     * If a string or string[] is provided, then this is treated as a glob
     * pattern or array of glob patterns to exclude from matches. To ignore all
     * children within a directory, as well as the entry itself, append `'/**'`
     * to the ignore pattern.
     *
     * **Note** `ignore` patterns are _always_ in `dot:true` mode, regardless of
     * any other settings.
     *
     * If an object is provided that has `ignored(path)` and/or
     * `childrenIgnored(path)` methods, then these methods will be called to
     * determine whether any Path is a match or if its children should be
     * traversed, respectively.
     */
    ignore?: string | string[] | IgnoreLike;
    /**
     * Treat brace expansion like `{a,b}` as a "magic" pattern. Has no
     * effect if {@link nobrace} is set.
     *
     * Only has effect on the {@link hasMagic} function.
     */
    magicalBraces?: boolean;
    /**
     * Add a `/` character to directory matches. Note that this requires
     * additional stat calls in some cases.
     */
    mark?: boolean;
    /**
     * Perform a basename-only match if the pattern does not contain any slash
     * characters. That is, `*.js` would be treated as equivalent to
     * `**\/*.js`, matching all js files in all directories.
     */
    matchBase?: boolean;
    /**
     * Limit the directory traversal to a given depth below the cwd.
     * Note that this does NOT prevent traversal to sibling folders,
     * root patterns, and so on. It only limits the maximum folder depth
     * that the walk will descend, relative to the cwd.
     */
    maxDepth?: number;
    /**
     * Do not expand `{a,b}` and `{1..3}` brace sets.
     */
    nobrace?: boolean;
    /**
     * Perform a case-insensitive match. This defaults to `true` on macOS and
     * Windows systems, and `false` on all others.
     *
     * **Note** `nocase` should only be explicitly set when it is
     * known that the filesystem's case sensitivity differs from the
     * platform default. If set `true` on case-sensitive file
     * systems, or `false` on case-insensitive file systems, then the
     * walk may return more or less results than expected.
     */
    nocase?: boolean;
    /**
     * Do not match directories, only files. (Note: to match
     * _only_ directories, put a `/` at the end of the pattern.)
     */
    nodir?: boolean;
    /**
     * Do not match "extglob" patterns such as `+(a|b)`.
     */
    noext?: boolean;
    /**
     * Do not match `**` against multiple filenames. (Ie, treat it as a normal
     * `*` instead.)
     *
     * Conflicts with {@link matchBase}
     */
    noglobstar?: boolean;
    /**
     * Defaults to value of `process.platform` if available, or `'linux'` if
     * not. Setting `platform:'win32'` on non-Windows systems may cause strange
     * behavior.
     */
    platform?: NodeJS.Platform;
    /**
     * Set to true to call `fs.realpath` on all of the
     * results. In the case of an entry that cannot be resolved, the
     * entry is omitted. This incurs a slight performance penalty, of
     * course, because of the added system calls.
     */
    realpath?: boolean;
    /**
     *
     * A string path resolved against the `cwd` option, which
     * is used as the starting point for absolute patterns that start
     * with `/`, (but not drive letters or UNC paths on Windows).
     *
     * Note that this _doesn't_ necessarily limit the walk to the
     * `root` directory, and doesn't affect the cwd starting point for
     * non-absolute patterns. A pattern containing `..` will still be
     * able to traverse out of the root directory, if it is not an
     * actual root directory on the filesystem, and any non-absolute
     * patterns will be matched in the `cwd`. For example, the
     * pattern `/../*` with `{root:'/some/path'}` will return all
     * files in `/some`, not all files in `/some/path`. The pattern
     * `*` with `{root:'/some/path'}` will return all the entries in
     * the cwd, not the entries in `/some/path`.
     *
     * To start absolute and non-absolute patterns in the same
     * path, you can use `{root:''}`. However, be aware that on
     * Windows systems, a pattern like `x:/*` or `//host/share/*` will
     * _always_ start in the `x:/` or `//host/share` directory,
     * regardless of the `root` setting.
     */
    root?: string;
    /**
     * A [PathScurry](http://npm.im/path-scurry) object used
     * to traverse the file system. If the `nocase` option is set
     * explicitly, then any provided `scurry` object must match this
     * setting.
     */
    scurry?: PathScurry;
    /**
     * Call `lstat()` on all entries, whether required or not to determine
     * if it's a valid match. When used with {@link withFileTypes}, this means
     * that matches will include data such as modified time, permissions, and
     * so on.  Note that this will incur a performance cost due to the added
     * system calls.
     */
    stat?: boolean;
    /**
     * An AbortSignal which will cancel the Glob walk when
     * triggered.
     */
    signal?: AbortSignal;
    /**
     * Use `\\` as a path separator _only_, and
     *  _never_ as an escape character. If set, all `\\` characters are
     *  replaced with `/` in the pattern.
     *
     *  Note that this makes it **impossible** to match against paths
     *  containing literal glob pattern characters, but allows matching
     *  with patterns constructed using `path.join()` and
     *  `path.resolve()` on Windows platforms, mimicking the (buggy!)
     *  behavior of Glob v7 and before on Windows. Please use with
     *  caution, and be mindful of [the caveat below about Windows
     *  paths](#windows). (For legacy reasons, this is also set if
     *  `allowWindowsEscape` is set to the exact value `false`.)
     */
    windowsPathsNoEscape?: boolean;
    /**
     * Return [PathScurry](http://npm.im/path-scurry)
     * `Path` objects instead of strings. These are similar to a
     * NodeJS `Dirent` object, but with additional methods and
     * properties.
     *
     * Conflicts with {@link absolute}
     */
    withFileTypes?: boolean;
    /**
     * An fs implementation to override some or all of the defaults.  See
     * http://npm.im/path-scurry for details about what can be overridden.
     */
    fs?: FSOption;
    /**
     * Just passed along to Minimatch.  Note that this makes all pattern
     * matching operations slower and *extremely* noisy.
     */
    debug?: boolean;
    /**
     * Return `/` delimited paths, even on Windows.
     *
     * On posix systems, this has no effect.  But, on Windows, it means that
     * paths will be `/` delimited, and absolute paths will be their full
     * resolved UNC forms, eg instead of `'C:\\foo\\bar'`, it would return
     * `'//?/C:/foo/bar'`
     */
    posix?: boolean;
    /**
     * Do not match any children of any matches. For example, the pattern
     * `**\/foo` would match `a/foo`, but not `a/foo/b/foo` in this mode.
     *
     * This is especially useful for cases like "find all `node_modules`
     * folders, but not the ones in `node_modules`".
     *
     * In order to support this, the `Ignore` implementation must support an
     * `add(pattern: string)` method. If using the default `Ignore` class, then
     * this is fine, but if this is set to `false`, and a custom `Ignore` is
     * provided that does not have an `add()` method, then it will throw an
     * error.
     *
     * **Caveat** It *only* ignores matches that would be a descendant of a
     * previous match, and only if that descendant is matched *after* the
     * ancestor is encountered. Since the file system walk happens in
     * indeterminate order, it's possible that a match will already be added
     * before its ancestor, if multiple or braced patterns are used.
     *
     * For example:
     *
     * ```ts
     * const results = await glob([
     *   // likely to match first, since it's just a stat
     *   'a/b/c/d/e/f',
     *
     *   // this pattern is more complicated! It must to various readdir()
     *   // calls and test the results against a regular expression, and that
     *   // is certainly going to take a little bit longer.
     *   //
     *   // So, later on, it encounters a match at 'a/b/c/d/e', but it's too
     *   // late to ignore a/b/c/d/e/f, because it's already been emitted.
     *   'a/[bdf]/?/[a-z]/*',
     * ], { includeChildMatches: false })
     * ```
     *
     * It's best to only set this to `false` if you can be reasonably sure that
     * no components of the pattern will potentially match one another's file
     * system descendants, or if the occasional included child entry will not
     * cause problems.
     *
     * @default true
     */
    includeChildMatches?: boolean;
    /**
     * max number of `{...}` patterns to expand. Default `1_000`.
     *
     * Note: this is much less than minimatch's default of `100_000`,
     * because Glob has higher memory requirements due to walking
     * the file system tree.
     */
    braceExpandMax?: number;
}
export type GlobOptionsWithFileTypesTrue = GlobOptions & {
    withFileTypes: true;
    absolute?: undefined;
    mark?: undefined;
    posix?: undefined;
};
export type GlobOptionsWithFileTypesFalse = GlobOptions & {
    withFileTypes?: false;
};
export type GlobOptionsWithFileTypesUnset = GlobOptions & {
    withFileTypes?: undefined;
};
export type Result<Opts> = Opts extends GlobOptionsWithFileTypesTrue ? Path : Opts extends GlobOptionsWithFileTypesFalse ? string : Opts extends GlobOptionsWithFileTypesUnset ? string : string | Path;
export type Results<Opts> = Result<Opts>[];
export type FileTypes<Opts> = Opts extends GlobOptionsWithFileTypesTrue ? true : Opts extends GlobOptionsWithFileTypesFalse ? false : Opts extends GlobOptionsWithFileTypesUnset ? false : boolean;
/**
 * An object that can perform glob pattern traversals.
 */
export declare class Glob<Opts extends GlobOptions> implements GlobOptions {
    absolute?: boolean;
    cwd: string;
    root?: string;
    dot: boolean;
    dotRelative: boolean;
    follow: boolean;
    ignore?: string | string[] | IgnoreLike;
    magicalBraces: boolean;
    mark?: boolean;
    matchBase: boolean;
    maxDepth: number;
    nobrace: boolean;
    nocase: boolean;
    nodir: boolean;
    noext: boolean;
    noglobstar: boolean;
    pattern: string[];
    platform: NodeJS.Platform;
    realpath: boolean;
    scurry: PathScurry;
    stat: boolean;
    signal?: AbortSignal;
    windowsPathsNoEscape: boolean;
    withFileTypes: FileTypes<Opts>;
    includeChildMatches: boolean;
    /**
     * The options provided to the constructor.
     */
    opts: Opts;
    /**
     * An array of parsed immutable {@link Pattern} objects.
     */
    patterns: Pattern[];
    /**
     * All options are stored as properties on the `Glob` object.
     *
     * See {@link GlobOptions} for full options descriptions.
     *
     * Note that a previous `Glob` object can be passed as the
     * `GlobOptions` to another `Glob` instantiation to re-use settings
     * and caches with a new pattern.
     *
     * Traversal functions can be called multiple times to run the walk
     * again.
     */
    constructor(pattern: string | string[], opts: Opts);
    /**
     * Returns a Promise that resolves to the results array.
     */
    walk(): Promise<Results<Opts>>;
    /**
     * synchronous {@link Glob.walk}
     */
    walkSync(): Results<Opts>;
    /**
     * Stream results asynchronously.
     */
    stream(): Minipass<Result<Opts>, Result<Opts>>;
    /**
     * Stream results synchronously.
     */
    streamSync(): Minipass<Result<Opts>, Result<Opts>>;
    /**
     * Default sync iteration function. Returns a Generator that
     * iterates over the results.
     */
    iterateSync(): Generator<Result<Opts>, void, void>;
    [Symbol.iterator](): Generator<Result<Opts>, void, void>;
    /**
     * Default async iteration function. Returns an AsyncGenerator that
     * iterates over the results.
     */
    iterate(): AsyncGenerator<Result<Opts>, void, void>;
    [Symbol.asyncIterator](): AsyncGenerator<Result<Opts>, void, void>;
}
//# sourceMappingURL=glob.d.ts.map