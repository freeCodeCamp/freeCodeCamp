import { LRUCache } from 'lru-cache';
import { posix, win32 } from 'node:path';
import { Minipass } from 'minipass';
import type { Dirent, Stats } from 'node:fs';
/**
 * An object that will be used to override the default `fs`
 * methods.  Any methods that are not overridden will use Node's
 * built-in implementations.
 *
 * - lstatSync
 * - readdir (callback `withFileTypes` Dirent variant, used for
 *   readdirCB and most walks)
 * - readdirSync
 * - readlinkSync
 * - realpathSync
 * - promises: Object containing the following async methods:
 *   - lstat
 *   - readdir (Dirent variant only)
 *   - readlink
 *   - realpath
 */
export interface FSOption {
    lstatSync?: (path: string) => Stats;
    readdir?: (path: string, options: {
        withFileTypes: true;
    }, cb: (er: NodeJS.ErrnoException | null, entries?: Dirent[]) => any) => void;
    readdirSync?: (path: string, options: {
        withFileTypes: true;
    }) => Dirent[];
    readlinkSync?: (path: string) => string;
    realpathSync?: (path: string) => string;
    promises?: {
        lstat?: (path: string) => Promise<Stats>;
        readdir?: (path: string, options: {
            withFileTypes: true;
        }) => Promise<Dirent[]>;
        readlink?: (path: string) => Promise<string>;
        realpath?: (path: string) => Promise<string>;
        [k: string]: any;
    };
    [k: string]: any;
}
interface FSValue {
    lstatSync: (path: string) => Stats;
    readdir: (path: string, options: {
        withFileTypes: true;
    }, cb: (er: NodeJS.ErrnoException | null, entries?: Dirent[]) => any) => void;
    readdirSync: (path: string, options: {
        withFileTypes: true;
    }) => Dirent[];
    readlinkSync: (path: string) => string;
    realpathSync: (path: string) => string;
    promises: {
        lstat: (path: string) => Promise<Stats>;
        readdir: (path: string, options: {
            withFileTypes: true;
        }) => Promise<Dirent[]>;
        readlink: (path: string) => Promise<string>;
        realpath: (path: string) => Promise<string>;
        [k: string]: any;
    };
    [k: string]: any;
}
export type Type = 'Unknown' | 'FIFO' | 'CharacterDevice' | 'Directory' | 'BlockDevice' | 'File' | 'SymbolicLink' | 'Socket';
/**
 * Options that may be provided to the Path constructor
 */
export interface PathOpts {
    fullpath?: string;
    relative?: string;
    relativePosix?: string;
    parent?: PathBase;
    /**
     * See {@link FSOption}
     */
    fs?: FSOption;
}
/**
 * An LRUCache for storing resolved path strings or Path objects.
 * @internal
 */
export declare class ResolveCache extends LRUCache<string, string> {
    constructor();
}
/**
 * an LRUCache for storing child entries.
 * @internal
 */
export declare class ChildrenCache extends LRUCache<PathBase, Children> {
    constructor(maxSize?: number);
}
/**
 * Array of Path objects, plus a marker indicating the first provisional entry
 *
 * @internal
 */
export type Children = PathBase[] & {
    provisional: number;
};
declare const setAsCwd: unique symbol;
/**
 * Path objects are sort of like a super-powered
 * {@link https://nodejs.org/docs/latest/api/fs.html#class-fsdirent fs.Dirent}
 *
 * Each one represents a single filesystem entry on disk, which may or may not
 * exist. It includes methods for reading various types of information via
 * lstat, readlink, and readdir, and caches all information to the greatest
 * degree possible.
 *
 * Note that fs operations that would normally throw will instead return an
 * "empty" value. This is in order to prevent excessive overhead from error
 * stack traces.
 */
export declare abstract class PathBase implements Dirent {
    #private;
    /**
     * the basename of this path
     *
     * **Important**: *always* test the path name against any test string
     * usingthe {@link isNamed} method, and not by directly comparing this
     * string. Otherwise, unicode path strings that the system sees as identical
     * will not be properly treated as the same path, leading to incorrect
     * behavior and possible security issues.
     */
    name: string;
    /**
     * the Path entry corresponding to the path root.
     *
     * @internal
     */
    root: PathBase;
    /**
     * All roots found within the current PathScurry family
     *
     * @internal
     */
    roots: {
        [k: string]: PathBase;
    };
    /**
     * a reference to the parent path, or undefined in the case of root entries
     *
     * @internal
     */
    parent?: PathBase;
    /**
     * boolean indicating whether paths are compared case-insensitively
     * @internal
     */
    nocase: boolean;
    /**
     * boolean indicating that this path is the current working directory
     * of the PathScurry collection that contains it.
     */
    isCWD: boolean;
    /**
     * the string or regexp used to split paths. On posix, it is `'/'`, and on
     * windows it is a RegExp matching either `'/'` or `'\\'`
     */
    abstract splitSep: string | RegExp;
    /**
     * The path separator string to use when joining paths
     */
    abstract sep: string;
    get dev(): number | undefined;
    get mode(): number | undefined;
    get nlink(): number | undefined;
    get uid(): number | undefined;
    get gid(): number | undefined;
    get rdev(): number | undefined;
    get blksize(): number | undefined;
    get ino(): number | undefined;
    get size(): number | undefined;
    get blocks(): number | undefined;
    get atimeMs(): number | undefined;
    get mtimeMs(): number | undefined;
    get ctimeMs(): number | undefined;
    get birthtimeMs(): number | undefined;
    get atime(): Date | undefined;
    get mtime(): Date | undefined;
    get ctime(): Date | undefined;
    get birthtime(): Date | undefined;
    /**
     * This property is for compatibility with the Dirent class as of
     * Node v20, where Dirent['parentPath'] refers to the path of the
     * directory that was passed to readdir. For root entries, it's the path
     * to the entry itself.
     */
    get parentPath(): string;
    /**
     * Deprecated alias for Dirent['parentPath'] Somewhat counterintuitively,
     * this property refers to the *parent* path, not the path object itself.
     *
     * @deprecated
     */
    get path(): string;
    /**
     * Do not create new Path objects directly.  They should always be accessed
     * via the PathScurry class or other methods on the Path class.
     *
     * @internal
     */
    constructor(name: string, type: number | undefined, root: PathBase | undefined, roots: {
        [k: string]: PathBase;
    }, nocase: boolean, children: ChildrenCache, opts: PathOpts);
    /**
     * Returns the depth of the Path object from its root.
     *
     * For example, a path at `/foo/bar` would have a depth of 2.
     */
    depth(): number;
    /**
     * @internal
     */
    abstract getRootString(path: string): string;
    /**
     * @internal
     */
    abstract getRoot(rootPath: string): PathBase;
    /**
     * @internal
     */
    abstract newChild(name: string, type?: number, opts?: PathOpts): PathBase;
    /**
     * @internal
     */
    childrenCache(): ChildrenCache;
    /**
     * Get the Path object referenced by the string path, resolved from this Path
     */
    resolve(path?: string): PathBase;
    /**
     * Returns the cached children Path objects, if still available.  If they
     * have fallen out of the cache, then returns an empty array, and resets the
     * READDIR_CALLED bit, so that future calls to readdir() will require an fs
     * lookup.
     *
     * @internal
     */
    children(): Children;
    /**
     * Resolves a path portion and returns or creates the child Path.
     *
     * Returns `this` if pathPart is `''` or `'.'`, or `parent` if pathPart is
     * `'..'`.
     *
     * This should not be called directly.  If `pathPart` contains any path
     * separators, it will lead to unsafe undefined behavior.
     *
     * Use `Path.resolve()` instead.
     *
     * @internal
     */
    child(pathPart: string, opts?: PathOpts): PathBase;
    /**
     * The relative path from the cwd. If it does not share an ancestor with
     * the cwd, then this ends up being equivalent to the fullpath()
     */
    relative(): string;
    /**
     * The relative path from the cwd, using / as the path separator.
     * If it does not share an ancestor with
     * the cwd, then this ends up being equivalent to the fullpathPosix()
     * On posix systems, this is identical to relative().
     */
    relativePosix(): string;
    /**
     * The fully resolved path string for this Path entry
     */
    fullpath(): string;
    /**
     * On platforms other than windows, this is identical to fullpath.
     *
     * On windows, this is overridden to return the forward-slash form of the
     * full UNC path.
     */
    fullpathPosix(): string;
    /**
     * Is the Path of an unknown type?
     *
     * Note that we might know *something* about it if there has been a previous
     * filesystem operation, for example that it does not exist, or is not a
     * link, or whether it has child entries.
     */
    isUnknown(): boolean;
    isType(type: Type): boolean;
    getType(): Type;
    /**
     * Is the Path a regular file?
     */
    isFile(): boolean;
    /**
     * Is the Path a directory?
     */
    isDirectory(): boolean;
    /**
     * Is the path a character device?
     */
    isCharacterDevice(): boolean;
    /**
     * Is the path a block device?
     */
    isBlockDevice(): boolean;
    /**
     * Is the path a FIFO pipe?
     */
    isFIFO(): boolean;
    /**
     * Is the path a socket?
     */
    isSocket(): boolean;
    /**
     * Is the path a symbolic link?
     */
    isSymbolicLink(): boolean;
    /**
     * Return the entry if it has been subject of a successful lstat, or
     * undefined otherwise.
     *
     * Does not read the filesystem, so an undefined result *could* simply
     * mean that we haven't called lstat on it.
     */
    lstatCached(): PathBase | undefined;
    /**
     * Return the cached link target if the entry has been the subject of a
     * successful readlink, or undefined otherwise.
     *
     * Does not read the filesystem, so an undefined result *could* just mean we
     * don't have any cached data. Only use it if you are very sure that a
     * readlink() has been called at some point.
     */
    readlinkCached(): PathBase | undefined;
    /**
     * Returns the cached realpath target if the entry has been the subject
     * of a successful realpath, or undefined otherwise.
     *
     * Does not read the filesystem, so an undefined result *could* just mean we
     * don't have any cached data. Only use it if you are very sure that a
     * realpath() has been called at some point.
     */
    realpathCached(): PathBase | undefined;
    /**
     * Returns the cached child Path entries array if the entry has been the
     * subject of a successful readdir(), or [] otherwise.
     *
     * Does not read the filesystem, so an empty array *could* just mean we
     * don't have any cached data. Only use it if you are very sure that a
     * readdir() has been called recently enough to still be valid.
     */
    readdirCached(): PathBase[];
    /**
     * Return true if it's worth trying to readlink.  Ie, we don't (yet) have
     * any indication that readlink will definitely fail.
     *
     * Returns false if the path is known to not be a symlink, if a previous
     * readlink failed, or if the entry does not exist.
     */
    canReadlink(): boolean;
    /**
     * Return true if readdir has previously been successfully called on this
     * path, indicating that cachedReaddir() is likely valid.
     */
    calledReaddir(): boolean;
    /**
     * Returns true if the path is known to not exist. That is, a previous lstat
     * or readdir failed to verify its existence when that would have been
     * expected, or a parent entry was marked either enoent or enotdir.
     */
    isENOENT(): boolean;
    /**
     * Return true if the path is a match for the given path name.  This handles
     * case sensitivity and unicode normalization.
     *
     * Note: even on case-sensitive systems, it is **not** safe to test the
     * equality of the `.name` property to determine whether a given pathname
     * matches, due to unicode normalization mismatches.
     *
     * Always use this method instead of testing the `path.name` property
     * directly.
     */
    isNamed(n: string): boolean;
    /**
     * Return the Path object corresponding to the target of a symbolic link.
     *
     * If the Path is not a symbolic link, or if the readlink call fails for any
     * reason, `undefined` is returned.
     *
     * Result is cached, and thus may be outdated if the filesystem is mutated.
     */
    readlink(): Promise<PathBase | undefined>;
    /**
     * Synchronous {@link PathBase.readlink}
     */
    readlinkSync(): PathBase | undefined;
    /**
     * Call lstat() on this Path, and update all known information that can be
     * determined.
     *
     * Note that unlike `fs.lstat()`, the returned value does not contain some
     * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
     * information is required, you will need to call `fs.lstat` yourself.
     *
     * If the Path refers to a nonexistent file, or if the lstat call fails for
     * any reason, `undefined` is returned.  Otherwise the updated Path object is
     * returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     */
    lstat(): Promise<PathBase | undefined>;
    /**
     * synchronous {@link PathBase.lstat}
     */
    lstatSync(): PathBase | undefined;
    /**
     * Standard node-style callback interface to get list of directory entries.
     *
     * If the Path cannot or does not contain any children, then an empty array
     * is returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     *
     * @param cb The callback called with (er, entries).  Note that the `er`
     * param is somewhat extraneous, as all readdir() errors are handled and
     * simply result in an empty set of entries being returned.
     * @param allowZalgo Boolean indicating that immediately known results should
     * *not* be deferred with `queueMicrotask`. Defaults to `false`. Release
     * zalgo at your peril, the dark pony lord is devious and unforgiving.
     */
    readdirCB(cb: (er: NodeJS.ErrnoException | null, entries: PathBase[]) => any, allowZalgo?: boolean): void;
    /**
     * Return an array of known child entries.
     *
     * If the Path cannot or does not contain any children, then an empty array
     * is returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     */
    readdir(): Promise<PathBase[]>;
    /**
     * synchronous {@link PathBase.readdir}
     */
    readdirSync(): PathBase[];
    canReaddir(): boolean;
    shouldWalk(dirs: Set<PathBase | undefined>, walkFilter?: (e: PathBase) => boolean): boolean;
    /**
     * Return the Path object corresponding to path as resolved
     * by realpath(3).
     *
     * If the realpath call fails for any reason, `undefined` is returned.
     *
     * Result is cached, and thus may be outdated if the filesystem is mutated.
     * On success, returns a Path object.
     */
    realpath(): Promise<PathBase | undefined>;
    /**
     * Synchronous {@link realpath}
     */
    realpathSync(): PathBase | undefined;
    /**
     * Internal method to mark this Path object as the scurry cwd,
     * called by {@link PathScurry#chdir}
     *
     * @internal
     */
    [setAsCwd](oldCwd: PathBase): void;
}
/**
 * Path class used on win32 systems
 *
 * Uses `'\\'` as the path separator for returned paths, either `'\\'` or `'/'`
 * as the path separator for parsing paths.
 */
export declare class PathWin32 extends PathBase {
    /**
     * Separator for generating path strings.
     */
    sep: '\\';
    /**
     * Separator for parsing path strings.
     */
    splitSep: RegExp;
    /**
     * Do not create new Path objects directly.  They should always be accessed
     * via the PathScurry class or other methods on the Path class.
     *
     * @internal
     */
    constructor(name: string, type: number | undefined, root: PathBase | undefined, roots: {
        [k: string]: PathBase;
    }, nocase: boolean, children: ChildrenCache, opts: PathOpts);
    /**
     * @internal
     */
    newChild(name: string, type?: number, opts?: PathOpts): PathWin32;
    /**
     * @internal
     */
    getRootString(path: string): string;
    /**
     * @internal
     */
    getRoot(rootPath: string): PathBase;
    /**
     * @internal
     */
    sameRoot(rootPath: string, compare?: string): boolean;
}
/**
 * Path class used on all posix systems.
 *
 * Uses `'/'` as the path separator.
 */
export declare class PathPosix extends PathBase {
    /**
     * separator for parsing path strings
     */
    splitSep: '/';
    /**
     * separator for generating path strings
     */
    sep: '/';
    /**
     * Do not create new Path objects directly.  They should always be accessed
     * via the PathScurry class or other methods on the Path class.
     *
     * @internal
     */
    constructor(name: string, type: number | undefined, root: PathBase | undefined, roots: {
        [k: string]: PathBase;
    }, nocase: boolean, children: ChildrenCache, opts: PathOpts);
    /**
     * @internal
     */
    getRootString(path: string): string;
    /**
     * @internal
     */
    getRoot(_rootPath: string): PathBase;
    /**
     * @internal
     */
    newChild(name: string, type?: number, opts?: PathOpts): PathPosix;
}
/**
 * Options that may be provided to the PathScurry constructor
 */
export interface PathScurryOpts {
    /**
     * perform case-insensitive path matching. Default based on platform
     * subclass.
     */
    nocase?: boolean;
    /**
     * Number of Path entries to keep in the cache of Path child references.
     *
     * Setting this higher than 65536 will dramatically increase the data
     * consumption and construction time overhead of each PathScurry.
     *
     * Setting this value to 256 or lower will significantly reduce the data
     * consumption and construction time overhead, but may also reduce resolve()
     * and readdir() performance on large filesystems.
     *
     * Default `16384`.
     */
    childrenCacheSize?: number;
    /**
     * An object that overrides the built-in functions from the fs and
     * fs/promises modules.
     *
     * See {@link FSOption}
     */
    fs?: FSOption;
}
/**
 * The base class for all PathScurry classes, providing the interface for path
 * resolution and filesystem operations.
 *
 * Typically, you should *not* instantiate this class directly, but rather one
 * of the platform-specific classes, or the exported {@link PathScurry} which
 * defaults to the current platform.
 */
export declare abstract class PathScurryBase {
    #private;
    /**
     * The root Path entry for the current working directory of this Scurry
     */
    root: PathBase;
    /**
     * The string path for the root of this Scurry's current working directory
     */
    rootPath: string;
    /**
     * A collection of all roots encountered, referenced by rootPath
     */
    roots: {
        [k: string]: PathBase;
    };
    /**
     * The Path entry corresponding to this PathScurry's current working directory.
     */
    cwd: PathBase;
    /**
     * Perform path comparisons case-insensitively.
     *
     * Defaults true on Darwin and Windows systems, false elsewhere.
     */
    nocase: boolean;
    /**
     * The path separator used for parsing paths
     *
     * `'/'` on Posix systems, either `'/'` or `'\\'` on Windows
     */
    abstract sep: string | RegExp;
    /**
     * This class should not be instantiated directly.
     *
     * Use PathScurryWin32, PathScurryDarwin, PathScurryPosix, or PathScurry
     *
     * @internal
     */
    constructor(cwd: (URL | string) | undefined, pathImpl: typeof win32 | typeof posix, sep: string | RegExp, { nocase, childrenCacheSize, fs, }?: PathScurryOpts);
    /**
     * Get the depth of a provided path, string, or the cwd
     */
    depth(path?: Path | string): number;
    /**
     * Parse the root portion of a path string
     *
     * @internal
     */
    abstract parseRootPath(dir: string): string;
    /**
     * create a new Path to use as root during construction.
     *
     * @internal
     */
    abstract newRoot(fs: FSValue): PathBase;
    /**
     * Determine whether a given path string is absolute
     */
    abstract isAbsolute(p: string): boolean;
    /**
     * Return the cache of child entries.  Exposed so subclasses can create
     * child Path objects in a platform-specific way.
     *
     * @internal
     */
    childrenCache(): ChildrenCache;
    /**
     * Resolve one or more path strings to a resolved string
     *
     * Same interface as require('path').resolve.
     *
     * Much faster than path.resolve() when called multiple times for the same
     * path, because the resolved Path objects are cached.  Much slower
     * otherwise.
     */
    resolve(...paths: string[]): string;
    /**
     * Resolve one or more path strings to a resolved string, returning
     * the posix path.  Identical to .resolve() on posix systems, but on
     * windows will return a forward-slash separated UNC path.
     *
     * Same interface as require('path').resolve.
     *
     * Much faster than path.resolve() when called multiple times for the same
     * path, because the resolved Path objects are cached.  Much slower
     * otherwise.
     */
    resolvePosix(...paths: string[]): string;
    /**
     * find the relative path from the cwd to the supplied path string or entry
     */
    relative(entry?: PathBase | string): string;
    /**
     * find the relative path from the cwd to the supplied path string or
     * entry, using / as the path delimiter, even on Windows.
     */
    relativePosix(entry?: PathBase | string): string;
    /**
     * Return the basename for the provided string or Path object
     */
    basename(entry?: PathBase | string): string;
    /**
     * Return the dirname for the provided string or Path object
     */
    dirname(entry?: PathBase | string): string;
    /**
     * Return an array of known child entries.
     *
     * First argument may be either a string, or a Path object.
     *
     * If the Path cannot or does not contain any children, then an empty array
     * is returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     *
     * Unlike `fs.readdir()`, the `withFileTypes` option defaults to `true`. Set
     * `{ withFileTypes: false }` to return strings.
     */
    readdir(): Promise<PathBase[]>;
    readdir(opts: {
        withFileTypes: true;
    }): Promise<PathBase[]>;
    readdir(opts: {
        withFileTypes: false;
    }): Promise<string[]>;
    readdir(opts: {
        withFileTypes: boolean;
    }): Promise<PathBase[] | string[]>;
    readdir(entry: PathBase | string): Promise<PathBase[]>;
    readdir(entry: PathBase | string, opts: {
        withFileTypes: true;
    }): Promise<PathBase[]>;
    readdir(entry: PathBase | string, opts: {
        withFileTypes: false;
    }): Promise<string[]>;
    readdir(entry: PathBase | string, opts: {
        withFileTypes: boolean;
    }): Promise<PathBase[] | string[]>;
    /**
     * synchronous {@link PathScurryBase.readdir}
     */
    readdirSync(): PathBase[];
    readdirSync(opts: {
        withFileTypes: true;
    }): PathBase[];
    readdirSync(opts: {
        withFileTypes: false;
    }): string[];
    readdirSync(opts: {
        withFileTypes: boolean;
    }): PathBase[] | string[];
    readdirSync(entry: PathBase | string): PathBase[];
    readdirSync(entry: PathBase | string, opts: {
        withFileTypes: true;
    }): PathBase[];
    readdirSync(entry: PathBase | string, opts: {
        withFileTypes: false;
    }): string[];
    readdirSync(entry: PathBase | string, opts: {
        withFileTypes: boolean;
    }): PathBase[] | string[];
    /**
     * Call lstat() on the string or Path object, and update all known
     * information that can be determined.
     *
     * Note that unlike `fs.lstat()`, the returned value does not contain some
     * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
     * information is required, you will need to call `fs.lstat` yourself.
     *
     * If the Path refers to a nonexistent file, or if the lstat call fails for
     * any reason, `undefined` is returned.  Otherwise the updated Path object is
     * returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     */
    lstat(entry?: string | PathBase): Promise<PathBase | undefined>;
    /**
     * synchronous {@link PathScurryBase.lstat}
     */
    lstatSync(entry?: string | PathBase): PathBase | undefined;
    /**
     * Return the Path object or string path corresponding to the target of a
     * symbolic link.
     *
     * If the path is not a symbolic link, or if the readlink call fails for any
     * reason, `undefined` is returned.
     *
     * Result is cached, and thus may be outdated if the filesystem is mutated.
     *
     * `{withFileTypes}` option defaults to `false`.
     *
     * On success, returns a Path object if `withFileTypes` option is true,
     * otherwise a string.
     */
    readlink(): Promise<string | undefined>;
    readlink(opt: {
        withFileTypes: false;
    }): Promise<string | undefined>;
    readlink(opt: {
        withFileTypes: true;
    }): Promise<PathBase | undefined>;
    readlink(opt: {
        withFileTypes: boolean;
    }): Promise<PathBase | string | undefined>;
    readlink(entry: string | PathBase, opt?: {
        withFileTypes: false;
    }): Promise<string | undefined>;
    readlink(entry: string | PathBase, opt: {
        withFileTypes: true;
    }): Promise<PathBase | undefined>;
    readlink(entry: string | PathBase, opt: {
        withFileTypes: boolean;
    }): Promise<string | PathBase | undefined>;
    /**
     * synchronous {@link PathScurryBase.readlink}
     */
    readlinkSync(): string | undefined;
    readlinkSync(opt: {
        withFileTypes: false;
    }): string | undefined;
    readlinkSync(opt: {
        withFileTypes: true;
    }): PathBase | undefined;
    readlinkSync(opt: {
        withFileTypes: boolean;
    }): PathBase | string | undefined;
    readlinkSync(entry: string | PathBase, opt?: {
        withFileTypes: false;
    }): string | undefined;
    readlinkSync(entry: string | PathBase, opt: {
        withFileTypes: true;
    }): PathBase | undefined;
    readlinkSync(entry: string | PathBase, opt: {
        withFileTypes: boolean;
    }): string | PathBase | undefined;
    /**
     * Return the Path object or string path corresponding to path as resolved
     * by realpath(3).
     *
     * If the realpath call fails for any reason, `undefined` is returned.
     *
     * Result is cached, and thus may be outdated if the filesystem is mutated.
     *
     * `{withFileTypes}` option defaults to `false`.
     *
     * On success, returns a Path object if `withFileTypes` option is true,
     * otherwise a string.
     */
    realpath(): Promise<string | undefined>;
    realpath(opt: {
        withFileTypes: false;
    }): Promise<string | undefined>;
    realpath(opt: {
        withFileTypes: true;
    }): Promise<PathBase | undefined>;
    realpath(opt: {
        withFileTypes: boolean;
    }): Promise<PathBase | string | undefined>;
    realpath(entry: string | PathBase, opt?: {
        withFileTypes: false;
    }): Promise<string | undefined>;
    realpath(entry: string | PathBase, opt: {
        withFileTypes: true;
    }): Promise<PathBase | undefined>;
    realpath(entry: string | PathBase, opt: {
        withFileTypes: boolean;
    }): Promise<string | PathBase | undefined>;
    realpathSync(): string | undefined;
    realpathSync(opt: {
        withFileTypes: false;
    }): string | undefined;
    realpathSync(opt: {
        withFileTypes: true;
    }): PathBase | undefined;
    realpathSync(opt: {
        withFileTypes: boolean;
    }): PathBase | string | undefined;
    realpathSync(entry: string | PathBase, opt?: {
        withFileTypes: false;
    }): string | undefined;
    realpathSync(entry: string | PathBase, opt: {
        withFileTypes: true;
    }): PathBase | undefined;
    realpathSync(entry: string | PathBase, opt: {
        withFileTypes: boolean;
    }): string | PathBase | undefined;
    /**
     * Asynchronously walk the directory tree, returning an array of
     * all path strings or Path objects found.
     *
     * Note that this will be extremely memory-hungry on large filesystems.
     * In such cases, it may be better to use the stream or async iterator
     * walk implementation.
     */
    walk(): Promise<PathBase[]>;
    walk(opts: WalkOptionsWithFileTypesTrue | WalkOptionsWithFileTypesUnset): Promise<PathBase[]>;
    walk(opts: WalkOptionsWithFileTypesFalse): Promise<string[]>;
    walk(opts: WalkOptions): Promise<string[] | PathBase[]>;
    walk(entry: string | PathBase): Promise<PathBase[]>;
    walk(entry: string | PathBase, opts: WalkOptionsWithFileTypesTrue | WalkOptionsWithFileTypesUnset): Promise<PathBase[]>;
    walk(entry: string | PathBase, opts: WalkOptionsWithFileTypesFalse): Promise<string[]>;
    walk(entry: string | PathBase, opts: WalkOptions): Promise<PathBase[] | string[]>;
    /**
     * Synchronously walk the directory tree, returning an array of
     * all path strings or Path objects found.
     *
     * Note that this will be extremely memory-hungry on large filesystems.
     * In such cases, it may be better to use the stream or async iterator
     * walk implementation.
     */
    walkSync(): PathBase[];
    walkSync(opts: WalkOptionsWithFileTypesTrue | WalkOptionsWithFileTypesUnset): PathBase[];
    walkSync(opts: WalkOptionsWithFileTypesFalse): string[];
    walkSync(opts: WalkOptions): string[] | PathBase[];
    walkSync(entry: string | PathBase): PathBase[];
    walkSync(entry: string | PathBase, opts: WalkOptionsWithFileTypesUnset | WalkOptionsWithFileTypesTrue): PathBase[];
    walkSync(entry: string | PathBase, opts: WalkOptionsWithFileTypesFalse): string[];
    walkSync(entry: string | PathBase, opts: WalkOptions): PathBase[] | string[];
    /**
     * Support for `for await`
     *
     * Alias for {@link PathScurryBase.iterate}
     *
     * Note: As of Node 19, this is very slow, compared to other methods of
     * walking.  Consider using {@link PathScurryBase.stream} if memory overhead
     * and backpressure are concerns, or {@link PathScurryBase.walk} if not.
     */
    [Symbol.asyncIterator](): AsyncGenerator<PathBase, void, void>;
    /**
     * Async generator form of {@link PathScurryBase.walk}
     *
     * Note: As of Node 19, this is very slow, compared to other methods of
     * walking, especially if most/all of the directory tree has been previously
     * walked.  Consider using {@link PathScurryBase.stream} if memory overhead
     * and backpressure are concerns, or {@link PathScurryBase.walk} if not.
     */
    iterate(): AsyncGenerator<PathBase, void, void>;
    iterate(opts: WalkOptionsWithFileTypesTrue | WalkOptionsWithFileTypesUnset): AsyncGenerator<PathBase, void, void>;
    iterate(opts: WalkOptionsWithFileTypesFalse): AsyncGenerator<string, void, void>;
    iterate(opts: WalkOptions): AsyncGenerator<string | PathBase, void, void>;
    iterate(entry: string | PathBase): AsyncGenerator<PathBase, void, void>;
    iterate(entry: string | PathBase, opts: WalkOptionsWithFileTypesTrue | WalkOptionsWithFileTypesUnset): AsyncGenerator<PathBase, void, void>;
    iterate(entry: string | PathBase, opts: WalkOptionsWithFileTypesFalse): AsyncGenerator<string, void, void>;
    iterate(entry: string | PathBase, opts: WalkOptions): AsyncGenerator<PathBase | string, void, void>;
    /**
     * Iterating over a PathScurry performs a synchronous walk.
     *
     * Alias for {@link PathScurryBase.iterateSync}
     */
    [Symbol.iterator](): Generator<PathBase, void, void>;
    iterateSync(): Generator<PathBase, void, void>;
    iterateSync(opts: WalkOptionsWithFileTypesTrue | WalkOptionsWithFileTypesUnset): Generator<PathBase, void, void>;
    iterateSync(opts: WalkOptionsWithFileTypesFalse): Generator<string, void, void>;
    iterateSync(opts: WalkOptions): Generator<string | PathBase, void, void>;
    iterateSync(entry: string | PathBase): Generator<PathBase, void, void>;
    iterateSync(entry: string | PathBase, opts: WalkOptionsWithFileTypesTrue | WalkOptionsWithFileTypesUnset): Generator<PathBase, void, void>;
    iterateSync(entry: string | PathBase, opts: WalkOptionsWithFileTypesFalse): Generator<string, void, void>;
    iterateSync(entry: string | PathBase, opts: WalkOptions): Generator<PathBase | string, void, void>;
    /**
     * Stream form of {@link PathScurryBase.walk}
     *
     * Returns a Minipass stream that emits {@link PathBase} objects by default,
     * or strings if `{ withFileTypes: false }` is set in the options.
     */
    stream(): Minipass<PathBase>;
    stream(opts: WalkOptionsWithFileTypesTrue | WalkOptionsWithFileTypesUnset): Minipass<PathBase>;
    stream(opts: WalkOptionsWithFileTypesFalse): Minipass<string>;
    stream(opts: WalkOptions): Minipass<string | PathBase>;
    stream(entry: string | PathBase): Minipass<PathBase>;
    stream(entry: string | PathBase, opts: WalkOptionsWithFileTypesUnset | WalkOptionsWithFileTypesTrue): Minipass<PathBase>;
    stream(entry: string | PathBase, opts: WalkOptionsWithFileTypesFalse): Minipass<string>;
    stream(entry: string | PathBase, opts: WalkOptions): Minipass<string> | Minipass<PathBase>;
    /**
     * Synchronous form of {@link PathScurryBase.stream}
     *
     * Returns a Minipass stream that emits {@link PathBase} objects by default,
     * or strings if `{ withFileTypes: false }` is set in the options.
     *
     * Will complete the walk in a single tick if the stream is consumed fully.
     * Otherwise, will pause as needed for stream backpressure.
     */
    streamSync(): Minipass<PathBase>;
    streamSync(opts: WalkOptionsWithFileTypesTrue | WalkOptionsWithFileTypesUnset): Minipass<PathBase>;
    streamSync(opts: WalkOptionsWithFileTypesFalse): Minipass<string>;
    streamSync(opts: WalkOptions): Minipass<string | PathBase>;
    streamSync(entry: string | PathBase): Minipass<PathBase>;
    streamSync(entry: string | PathBase, opts: WalkOptionsWithFileTypesUnset | WalkOptionsWithFileTypesTrue): Minipass<PathBase>;
    streamSync(entry: string | PathBase, opts: WalkOptionsWithFileTypesFalse): Minipass<string>;
    streamSync(entry: string | PathBase, opts: WalkOptions): Minipass<string> | Minipass<PathBase>;
    chdir(path?: string | Path): void;
}
/**
 * Options provided to all walk methods.
 */
export interface WalkOptions {
    /**
     * Return results as {@link PathBase} objects rather than strings.
     * When set to false, results are fully resolved paths, as returned by
     * {@link PathBase.fullpath}.
     * @default true
     */
    withFileTypes?: boolean;
    /**
     *  Attempt to read directory entries from symbolic links. Otherwise, only
     *  actual directories are traversed. Regardless of this setting, a given
     *  target path will only ever be walked once, meaning that a symbolic link
     *  to a previously traversed directory will never be followed.
     *
     *  Setting this imposes a slight performance penalty, because `readlink`
     *  must be called on all symbolic links encountered, in order to avoid
     *  infinite cycles.
     * @default false
     */
    follow?: boolean;
    /**
     * Only return entries where the provided function returns true.
     *
     * This will not prevent directories from being traversed, even if they do
     * not pass the filter, though it will prevent directories themselves from
     * being included in the result set.  See {@link walkFilter}
     *
     * Asynchronous functions are not supported here.
     *
     * By default, if no filter is provided, all entries and traversed
     * directories are included.
     */
    filter?: (entry: PathBase) => boolean;
    /**
     * Only traverse directories (and in the case of {@link follow} being set to
     * true, symbolic links to directories) if the provided function returns
     * true.
     *
     * This will not prevent directories from being included in the result set,
     * even if they do not pass the supplied filter function.  See {@link filter}
     * to do that.
     *
     * Asynchronous functions are not supported here.
     */
    walkFilter?: (entry: PathBase) => boolean;
}
export type WalkOptionsWithFileTypesUnset = WalkOptions & {
    withFileTypes?: undefined;
};
export type WalkOptionsWithFileTypesTrue = WalkOptions & {
    withFileTypes: true;
};
export type WalkOptionsWithFileTypesFalse = WalkOptions & {
    withFileTypes: false;
};
/**
 * Windows implementation of {@link PathScurryBase}
 *
 * Defaults to case insensitve, uses `'\\'` to generate path strings.  Uses
 * {@link PathWin32} for Path objects.
 */
export declare class PathScurryWin32 extends PathScurryBase {
    /**
     * separator for generating path strings
     */
    sep: '\\';
    constructor(cwd?: URL | string, opts?: PathScurryOpts);
    /**
     * @internal
     */
    parseRootPath(dir: string): string;
    /**
     * @internal
     */
    newRoot(fs: FSValue): PathWin32;
    /**
     * Return true if the provided path string is an absolute path
     */
    isAbsolute(p: string): boolean;
}
/**
 * {@link PathScurryBase} implementation for all posix systems other than Darwin.
 *
 * Defaults to case-sensitive matching, uses `'/'` to generate path strings.
 *
 * Uses {@link PathPosix} for Path objects.
 */
export declare class PathScurryPosix extends PathScurryBase {
    /**
     * separator for generating path strings
     */
    sep: '/';
    constructor(cwd?: URL | string, opts?: PathScurryOpts);
    /**
     * @internal
     */
    parseRootPath(_dir: string): string;
    /**
     * @internal
     */
    newRoot(fs: FSValue): PathPosix;
    /**
     * Return true if the provided path string is an absolute path
     */
    isAbsolute(p: string): boolean;
}
/**
 * {@link PathScurryBase} implementation for Darwin (macOS) systems.
 *
 * Defaults to case-insensitive matching, uses `'/'` for generating path
 * strings.
 *
 * Uses {@link PathPosix} for Path objects.
 */
export declare class PathScurryDarwin extends PathScurryPosix {
    constructor(cwd?: URL | string, opts?: PathScurryOpts);
}
/**
 * Default {@link PathBase} implementation for the current platform.
 *
 * {@link PathWin32} on Windows systems, {@link PathPosix} on all others.
 */
export declare const Path: typeof PathWin32 | typeof PathPosix;
export type Path = PathBase | InstanceType<typeof Path>;
/**
 * Default {@link PathScurryBase} implementation for the current platform.
 *
 * {@link PathScurryWin32} on Windows systems, {@link PathScurryDarwin} on
 * Darwin (macOS) systems, {@link PathScurryPosix} on all others.
 */
export declare const PathScurry: typeof PathScurryWin32 | typeof PathScurryDarwin | typeof PathScurryPosix;
export type PathScurry = PathScurryBase | InstanceType<typeof PathScurry>;
export {};
//# sourceMappingURL=index.d.ts.map