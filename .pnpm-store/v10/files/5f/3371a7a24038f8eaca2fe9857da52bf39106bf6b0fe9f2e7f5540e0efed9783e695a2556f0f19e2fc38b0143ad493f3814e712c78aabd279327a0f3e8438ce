/*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */
import { stat as statcb } from 'fs';
import { stat, readdir } from 'fs/promises';
import { EventEmitter } from 'events';
import * as sysPath from 'path';
import { readdirp } from 'readdirp';
import { NodeFsHandler, EVENTS as EV, isWindows, isIBMi, EMPTY_FN, STR_CLOSE, STR_END, } from './handler.js';
const SLASH = '/';
const SLASH_SLASH = '//';
const ONE_DOT = '.';
const TWO_DOTS = '..';
const STRING_TYPE = 'string';
const BACK_SLASH_RE = /\\/g;
const DOUBLE_SLASH_RE = /\/\//;
const DOT_RE = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
const REPLACER_RE = /^\.[/\\]/;
function arrify(item) {
    return Array.isArray(item) ? item : [item];
}
const isMatcherObject = (matcher) => typeof matcher === 'object' && matcher !== null && !(matcher instanceof RegExp);
function createPattern(matcher) {
    if (typeof matcher === 'function')
        return matcher;
    if (typeof matcher === 'string')
        return (string) => matcher === string;
    if (matcher instanceof RegExp)
        return (string) => matcher.test(string);
    if (typeof matcher === 'object' && matcher !== null) {
        return (string) => {
            if (matcher.path === string)
                return true;
            if (matcher.recursive) {
                const relative = sysPath.relative(matcher.path, string);
                if (!relative) {
                    return false;
                }
                return !relative.startsWith('..') && !sysPath.isAbsolute(relative);
            }
            return false;
        };
    }
    return () => false;
}
function normalizePath(path) {
    if (typeof path !== 'string')
        throw new Error('string expected');
    path = sysPath.normalize(path);
    path = path.replace(/\\/g, '/');
    let prepend = false;
    if (path.startsWith('//'))
        prepend = true;
    const DOUBLE_SLASH_RE = /\/\//;
    while (path.match(DOUBLE_SLASH_RE))
        path = path.replace(DOUBLE_SLASH_RE, '/');
    if (prepend)
        path = '/' + path;
    return path;
}
function matchPatterns(patterns, testString, stats) {
    const path = normalizePath(testString);
    for (let index = 0; index < patterns.length; index++) {
        const pattern = patterns[index];
        if (pattern(path, stats)) {
            return true;
        }
    }
    return false;
}
function anymatch(matchers, testString) {
    if (matchers == null) {
        throw new TypeError('anymatch: specify first argument');
    }
    // Early cache for matchers.
    const matchersArray = arrify(matchers);
    const patterns = matchersArray.map((matcher) => createPattern(matcher));
    if (testString == null) {
        return (testString, stats) => {
            return matchPatterns(patterns, testString, stats);
        };
    }
    return matchPatterns(patterns, testString);
}
const unifyPaths = (paths_) => {
    const paths = arrify(paths_).flat();
    if (!paths.every((p) => typeof p === STRING_TYPE)) {
        throw new TypeError(`Non-string provided as watch path: ${paths}`);
    }
    return paths.map(normalizePathToUnix);
};
// If SLASH_SLASH occurs at the beginning of path, it is not replaced
//     because "//StoragePC/DrivePool/Movies" is a valid network path
const toUnix = (string) => {
    let str = string.replace(BACK_SLASH_RE, SLASH);
    let prepend = false;
    if (str.startsWith(SLASH_SLASH)) {
        prepend = true;
    }
    while (str.match(DOUBLE_SLASH_RE)) {
        str = str.replace(DOUBLE_SLASH_RE, SLASH);
    }
    if (prepend) {
        str = SLASH + str;
    }
    return str;
};
// Our version of upath.normalize
// TODO: this is not equal to path-normalize module - investigate why
const normalizePathToUnix = (path) => toUnix(sysPath.normalize(toUnix(path)));
// TODO: refactor
const normalizeIgnored = (cwd = '') => (path) => {
    if (typeof path === 'string') {
        return normalizePathToUnix(sysPath.isAbsolute(path) ? path : sysPath.join(cwd, path));
    }
    else {
        return path;
    }
};
const getAbsolutePath = (path, cwd) => {
    if (sysPath.isAbsolute(path)) {
        return path;
    }
    return sysPath.join(cwd, path);
};
const EMPTY_SET = Object.freeze(new Set());
/**
 * Directory entry.
 */
class DirEntry {
    constructor(dir, removeWatcher) {
        this.path = dir;
        this._removeWatcher = removeWatcher;
        this.items = new Set();
    }
    add(item) {
        const { items } = this;
        if (!items)
            return;
        if (item !== ONE_DOT && item !== TWO_DOTS)
            items.add(item);
    }
    async remove(item) {
        const { items } = this;
        if (!items)
            return;
        items.delete(item);
        if (items.size > 0)
            return;
        const dir = this.path;
        try {
            await readdir(dir);
        }
        catch (err) {
            if (this._removeWatcher) {
                this._removeWatcher(sysPath.dirname(dir), sysPath.basename(dir));
            }
        }
    }
    has(item) {
        const { items } = this;
        if (!items)
            return;
        return items.has(item);
    }
    getChildren() {
        const { items } = this;
        if (!items)
            return [];
        return [...items.values()];
    }
    dispose() {
        this.items.clear();
        this.path = '';
        this._removeWatcher = EMPTY_FN;
        this.items = EMPTY_SET;
        Object.freeze(this);
    }
}
const STAT_METHOD_F = 'stat';
const STAT_METHOD_L = 'lstat';
export class WatchHelper {
    constructor(path, follow, fsw) {
        this.fsw = fsw;
        const watchPath = path;
        this.path = path = path.replace(REPLACER_RE, '');
        this.watchPath = watchPath;
        this.fullWatchPath = sysPath.resolve(watchPath);
        this.dirParts = [];
        this.dirParts.forEach((parts) => {
            if (parts.length > 1)
                parts.pop();
        });
        this.followSymlinks = follow;
        this.statMethod = follow ? STAT_METHOD_F : STAT_METHOD_L;
    }
    entryPath(entry) {
        return sysPath.join(this.watchPath, sysPath.relative(this.watchPath, entry.fullPath));
    }
    filterPath(entry) {
        const { stats } = entry;
        if (stats && stats.isSymbolicLink())
            return this.filterDir(entry);
        const resolvedPath = this.entryPath(entry);
        // TODO: what if stats is undefined? remove !
        return this.fsw._isntIgnored(resolvedPath, stats) && this.fsw._hasReadPermissions(stats);
    }
    filterDir(entry) {
        return this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
    }
}
/**
 * Watches files & directories for changes. Emitted events:
 * `add`, `addDir`, `change`, `unlink`, `unlinkDir`, `all`, `error`
 *
 *     new FSWatcher()
 *       .add(directories)
 *       .on('add', path => log('File', path, 'was added'))
 */
export class FSWatcher extends EventEmitter {
    // Not indenting methods for history sake; for now.
    constructor(_opts = {}) {
        super();
        this.closed = false;
        this._closers = new Map();
        this._ignoredPaths = new Set();
        this._throttled = new Map();
        this._streams = new Set();
        this._symlinkPaths = new Map();
        this._watched = new Map();
        this._pendingWrites = new Map();
        this._pendingUnlinks = new Map();
        this._readyCount = 0;
        this._readyEmitted = false;
        const awf = _opts.awaitWriteFinish;
        const DEF_AWF = { stabilityThreshold: 2000, pollInterval: 100 };
        const opts = {
            // Defaults
            persistent: true,
            ignoreInitial: false,
            ignorePermissionErrors: false,
            interval: 100,
            binaryInterval: 300,
            followSymlinks: true,
            usePolling: false,
            // useAsync: false,
            atomic: true, // NOTE: overwritten later (depends on usePolling)
            ..._opts,
            // Change format
            ignored: _opts.ignored ? arrify(_opts.ignored) : arrify([]),
            awaitWriteFinish: awf === true ? DEF_AWF : typeof awf === 'object' ? { ...DEF_AWF, ...awf } : false,
        };
        // Always default to polling on IBM i because fs.watch() is not available on IBM i.
        if (isIBMi)
            opts.usePolling = true;
        // Editor atomic write normalization enabled by default with fs.watch
        if (opts.atomic === undefined)
            opts.atomic = !opts.usePolling;
        // opts.atomic = typeof _opts.atomic === 'number' ? _opts.atomic : 100;
        // Global override. Useful for developers, who need to force polling for all
        // instances of chokidar, regardless of usage / dependency depth
        const envPoll = process.env.CHOKIDAR_USEPOLLING;
        if (envPoll !== undefined) {
            const envLower = envPoll.toLowerCase();
            if (envLower === 'false' || envLower === '0')
                opts.usePolling = false;
            else if (envLower === 'true' || envLower === '1')
                opts.usePolling = true;
            else
                opts.usePolling = !!envLower;
        }
        const envInterval = process.env.CHOKIDAR_INTERVAL;
        if (envInterval)
            opts.interval = Number.parseInt(envInterval, 10);
        // This is done to emit ready only once, but each 'add' will increase that?
        let readyCalls = 0;
        this._emitReady = () => {
            readyCalls++;
            if (readyCalls >= this._readyCount) {
                this._emitReady = EMPTY_FN;
                this._readyEmitted = true;
                // use process.nextTick to allow time for listener to be bound
                process.nextTick(() => this.emit(EV.READY));
            }
        };
        this._emitRaw = (...args) => this.emit(EV.RAW, ...args);
        this._boundRemove = this._remove.bind(this);
        this.options = opts;
        this._nodeFsHandler = new NodeFsHandler(this);
        // You’re frozen when your heart’s not open.
        Object.freeze(opts);
    }
    _addIgnoredPath(matcher) {
        if (isMatcherObject(matcher)) {
            // return early if we already have a deeply equal matcher object
            for (const ignored of this._ignoredPaths) {
                if (isMatcherObject(ignored) &&
                    ignored.path === matcher.path &&
                    ignored.recursive === matcher.recursive) {
                    return;
                }
            }
        }
        this._ignoredPaths.add(matcher);
    }
    _removeIgnoredPath(matcher) {
        this._ignoredPaths.delete(matcher);
        // now find any matcher objects with the matcher as path
        if (typeof matcher === 'string') {
            for (const ignored of this._ignoredPaths) {
                // TODO (43081j): make this more efficient.
                // probably just make a `this._ignoredDirectories` or some
                // such thing.
                if (isMatcherObject(ignored) && ignored.path === matcher) {
                    this._ignoredPaths.delete(ignored);
                }
            }
        }
    }
    // Public methods
    /**
     * Adds paths to be watched on an existing FSWatcher instance.
     * @param paths_ file or file list. Other arguments are unused
     */
    add(paths_, _origAdd, _internal) {
        const { cwd } = this.options;
        this.closed = false;
        this._closePromise = undefined;
        let paths = unifyPaths(paths_);
        if (cwd) {
            paths = paths.map((path) => {
                const absPath = getAbsolutePath(path, cwd);
                // Check `path` instead of `absPath` because the cwd portion can't be a glob
                return absPath;
            });
        }
        paths.forEach((path) => {
            this._removeIgnoredPath(path);
        });
        this._userIgnored = undefined;
        if (!this._readyCount)
            this._readyCount = 0;
        this._readyCount += paths.length;
        Promise.all(paths.map(async (path) => {
            const res = await this._nodeFsHandler._addToNodeFs(path, !_internal, undefined, 0, _origAdd);
            if (res)
                this._emitReady();
            return res;
        })).then((results) => {
            if (this.closed)
                return;
            results.forEach((item) => {
                if (item)
                    this.add(sysPath.dirname(item), sysPath.basename(_origAdd || item));
            });
        });
        return this;
    }
    /**
     * Close watchers or start ignoring events from specified paths.
     */
    unwatch(paths_) {
        if (this.closed)
            return this;
        const paths = unifyPaths(paths_);
        const { cwd } = this.options;
        paths.forEach((path) => {
            // convert to absolute path unless relative path already matches
            if (!sysPath.isAbsolute(path) && !this._closers.has(path)) {
                if (cwd)
                    path = sysPath.join(cwd, path);
                path = sysPath.resolve(path);
            }
            this._closePath(path);
            this._addIgnoredPath(path);
            if (this._watched.has(path)) {
                this._addIgnoredPath({
                    path,
                    recursive: true,
                });
            }
            // reset the cached userIgnored anymatch fn
            // to make ignoredPaths changes effective
            this._userIgnored = undefined;
        });
        return this;
    }
    /**
     * Close watchers and remove all listeners from watched paths.
     */
    close() {
        if (this._closePromise) {
            return this._closePromise;
        }
        this.closed = true;
        // Memory management.
        this.removeAllListeners();
        const closers = [];
        this._closers.forEach((closerList) => closerList.forEach((closer) => {
            const promise = closer();
            if (promise instanceof Promise)
                closers.push(promise);
        }));
        this._streams.forEach((stream) => stream.destroy());
        this._userIgnored = undefined;
        this._readyCount = 0;
        this._readyEmitted = false;
        this._watched.forEach((dirent) => dirent.dispose());
        this._closers.clear();
        this._watched.clear();
        this._streams.clear();
        this._symlinkPaths.clear();
        this._throttled.clear();
        this._closePromise = closers.length
            ? Promise.all(closers).then(() => undefined)
            : Promise.resolve();
        return this._closePromise;
    }
    /**
     * Expose list of watched paths
     * @returns for chaining
     */
    getWatched() {
        const watchList = {};
        this._watched.forEach((entry, dir) => {
            const key = this.options.cwd ? sysPath.relative(this.options.cwd, dir) : dir;
            const index = key || ONE_DOT;
            watchList[index] = entry.getChildren().sort();
        });
        return watchList;
    }
    emitWithAll(event, args) {
        this.emit(event, ...args);
        if (event !== EV.ERROR)
            this.emit(EV.ALL, event, ...args);
    }
    // Common helpers
    // --------------
    /**
     * Normalize and emit events.
     * Calling _emit DOES NOT MEAN emit() would be called!
     * @param event Type of event
     * @param path File or directory path
     * @param stats arguments to be passed with event
     * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
     */
    async _emit(event, path, stats) {
        if (this.closed)
            return;
        const opts = this.options;
        if (isWindows)
            path = sysPath.normalize(path);
        if (opts.cwd)
            path = sysPath.relative(opts.cwd, path);
        const args = [path];
        if (stats != null)
            args.push(stats);
        const awf = opts.awaitWriteFinish;
        let pw;
        if (awf && (pw = this._pendingWrites.get(path))) {
            pw.lastChange = new Date();
            return this;
        }
        if (opts.atomic) {
            if (event === EV.UNLINK) {
                this._pendingUnlinks.set(path, [event, ...args]);
                setTimeout(() => {
                    this._pendingUnlinks.forEach((entry, path) => {
                        this.emit(...entry);
                        this.emit(EV.ALL, ...entry);
                        this._pendingUnlinks.delete(path);
                    });
                }, typeof opts.atomic === 'number' ? opts.atomic : 100);
                return this;
            }
            if (event === EV.ADD && this._pendingUnlinks.has(path)) {
                event = EV.CHANGE;
                this._pendingUnlinks.delete(path);
            }
        }
        if (awf && (event === EV.ADD || event === EV.CHANGE) && this._readyEmitted) {
            const awfEmit = (err, stats) => {
                if (err) {
                    event = EV.ERROR;
                    args[0] = err;
                    this.emitWithAll(event, args);
                }
                else if (stats) {
                    // if stats doesn't exist the file must have been deleted
                    if (args.length > 1) {
                        args[1] = stats;
                    }
                    else {
                        args.push(stats);
                    }
                    this.emitWithAll(event, args);
                }
            };
            this._awaitWriteFinish(path, awf.stabilityThreshold, event, awfEmit);
            return this;
        }
        if (event === EV.CHANGE) {
            const isThrottled = !this._throttle(EV.CHANGE, path, 50);
            if (isThrottled)
                return this;
        }
        if (opts.alwaysStat &&
            stats === undefined &&
            (event === EV.ADD || event === EV.ADD_DIR || event === EV.CHANGE)) {
            const fullPath = opts.cwd ? sysPath.join(opts.cwd, path) : path;
            let stats;
            try {
                stats = await stat(fullPath);
            }
            catch (err) {
                // do nothing
            }
            // Suppress event when fs_stat fails, to avoid sending undefined 'stat'
            if (!stats || this.closed)
                return;
            args.push(stats);
        }
        this.emitWithAll(event, args);
        return this;
    }
    /**
     * Common handler for errors
     * @returns The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
     */
    _handleError(error) {
        const code = error && error.code;
        if (error &&
            code !== 'ENOENT' &&
            code !== 'ENOTDIR' &&
            (!this.options.ignorePermissionErrors || (code !== 'EPERM' && code !== 'EACCES'))) {
            this.emit(EV.ERROR, error);
        }
        return error || this.closed;
    }
    /**
     * Helper utility for throttling
     * @param actionType type being throttled
     * @param path being acted upon
     * @param timeout duration of time to suppress duplicate actions
     * @returns tracking object or false if action should be suppressed
     */
    _throttle(actionType, path, timeout) {
        if (!this._throttled.has(actionType)) {
            this._throttled.set(actionType, new Map());
        }
        const action = this._throttled.get(actionType);
        if (!action)
            throw new Error('invalid throttle');
        const actionPath = action.get(path);
        if (actionPath) {
            actionPath.count++;
            return false;
        }
        // eslint-disable-next-line prefer-const
        let timeoutObject;
        const clear = () => {
            const item = action.get(path);
            const count = item ? item.count : 0;
            action.delete(path);
            clearTimeout(timeoutObject);
            if (item)
                clearTimeout(item.timeoutObject);
            return count;
        };
        timeoutObject = setTimeout(clear, timeout);
        const thr = { timeoutObject, clear, count: 0 };
        action.set(path, thr);
        return thr;
    }
    _incrReadyCount() {
        return this._readyCount++;
    }
    /**
     * Awaits write operation to finish.
     * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
     * @param path being acted upon
     * @param threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
     * @param event
     * @param awfEmit Callback to be called when ready for event to be emitted.
     */
    _awaitWriteFinish(path, threshold, event, awfEmit) {
        const awf = this.options.awaitWriteFinish;
        if (typeof awf !== 'object')
            return;
        const pollInterval = awf.pollInterval;
        let timeoutHandler;
        let fullPath = path;
        if (this.options.cwd && !sysPath.isAbsolute(path)) {
            fullPath = sysPath.join(this.options.cwd, path);
        }
        const now = new Date();
        const writes = this._pendingWrites;
        function awaitWriteFinishFn(prevStat) {
            statcb(fullPath, (err, curStat) => {
                if (err || !writes.has(path)) {
                    if (err && err.code !== 'ENOENT')
                        awfEmit(err);
                    return;
                }
                const now = Number(new Date());
                if (prevStat && curStat.size !== prevStat.size) {
                    writes.get(path).lastChange = now;
                }
                const pw = writes.get(path);
                const df = now - pw.lastChange;
                if (df >= threshold) {
                    writes.delete(path);
                    awfEmit(undefined, curStat);
                }
                else {
                    timeoutHandler = setTimeout(awaitWriteFinishFn, pollInterval, curStat);
                }
            });
        }
        if (!writes.has(path)) {
            writes.set(path, {
                lastChange: now,
                cancelWait: () => {
                    writes.delete(path);
                    clearTimeout(timeoutHandler);
                    return event;
                },
            });
            timeoutHandler = setTimeout(awaitWriteFinishFn, pollInterval);
        }
    }
    /**
     * Determines whether user has asked to ignore this path.
     */
    _isIgnored(path, stats) {
        if (this.options.atomic && DOT_RE.test(path))
            return true;
        if (!this._userIgnored) {
            const { cwd } = this.options;
            const ign = this.options.ignored;
            const ignored = (ign || []).map(normalizeIgnored(cwd));
            const ignoredPaths = [...this._ignoredPaths];
            const list = [...ignoredPaths.map(normalizeIgnored(cwd)), ...ignored];
            this._userIgnored = anymatch(list, undefined);
        }
        return this._userIgnored(path, stats);
    }
    _isntIgnored(path, stat) {
        return !this._isIgnored(path, stat);
    }
    /**
     * Provides a set of common helpers and properties relating to symlink handling.
     * @param path file or directory pattern being watched
     */
    _getWatchHelpers(path) {
        return new WatchHelper(path, this.options.followSymlinks, this);
    }
    // Directory helpers
    // -----------------
    /**
     * Provides directory tracking objects
     * @param directory path of the directory
     */
    _getWatchedDir(directory) {
        const dir = sysPath.resolve(directory);
        if (!this._watched.has(dir))
            this._watched.set(dir, new DirEntry(dir, this._boundRemove));
        return this._watched.get(dir);
    }
    // File helpers
    // ------------
    /**
     * Check for read permissions: https://stackoverflow.com/a/11781404/1358405
     */
    _hasReadPermissions(stats) {
        if (this.options.ignorePermissionErrors)
            return true;
        return Boolean(Number(stats.mode) & 0o400);
    }
    /**
     * Handles emitting unlink events for
     * files and directories, and via recursion, for
     * files and directories within directories that are unlinked
     * @param directory within which the following item is located
     * @param item      base path of item/directory
     */
    _remove(directory, item, isDirectory) {
        // if what is being deleted is a directory, get that directory's paths
        // for recursive deleting and cleaning of watched object
        // if it is not a directory, nestedDirectoryChildren will be empty array
        const path = sysPath.join(directory, item);
        const fullPath = sysPath.resolve(path);
        isDirectory =
            isDirectory != null ? isDirectory : this._watched.has(path) || this._watched.has(fullPath);
        // prevent duplicate handling in case of arriving here nearly simultaneously
        // via multiple paths (such as _handleFile and _handleDir)
        if (!this._throttle('remove', path, 100))
            return;
        // if the only watched file is removed, watch for its return
        if (!isDirectory && this._watched.size === 1) {
            this.add(directory, item, true);
        }
        // This will create a new entry in the watched object in either case
        // so we got to do the directory check beforehand
        const wp = this._getWatchedDir(path);
        const nestedDirectoryChildren = wp.getChildren();
        // Recursively remove children directories / files.
        nestedDirectoryChildren.forEach((nested) => this._remove(path, nested));
        // Check if item was on the watched list and remove it
        const parent = this._getWatchedDir(directory);
        const wasTracked = parent.has(item);
        parent.remove(item);
        // Fixes issue #1042 -> Relative paths were detected and added as symlinks
        // (https://github.com/paulmillr/chokidar/blob/e1753ddbc9571bdc33b4a4af172d52cb6e611c10/lib/nodefs-handler.js#L612),
        // but never removed from the map in case the path was deleted.
        // This leads to an incorrect state if the path was recreated:
        // https://github.com/paulmillr/chokidar/blob/e1753ddbc9571bdc33b4a4af172d52cb6e611c10/lib/nodefs-handler.js#L553
        if (this._symlinkPaths.has(fullPath)) {
            this._symlinkPaths.delete(fullPath);
        }
        // If we wait for this file to be fully written, cancel the wait.
        let relPath = path;
        if (this.options.cwd)
            relPath = sysPath.relative(this.options.cwd, path);
        if (this.options.awaitWriteFinish && this._pendingWrites.has(relPath)) {
            const event = this._pendingWrites.get(relPath).cancelWait();
            if (event === EV.ADD)
                return;
        }
        // The Entry will either be a directory that just got removed
        // or a bogus entry to a file, in either case we have to remove it
        this._watched.delete(path);
        this._watched.delete(fullPath);
        const eventName = isDirectory ? EV.UNLINK_DIR : EV.UNLINK;
        if (wasTracked && !this._isIgnored(path))
            this._emit(eventName, path);
        // Avoid conflicts if we later create another file with the same name
        this._closePath(path);
    }
    /**
     * Closes all watchers for a path
     */
    _closePath(path) {
        this._closeFile(path);
        const dir = sysPath.dirname(path);
        this._getWatchedDir(dir).remove(sysPath.basename(path));
    }
    /**
     * Closes only file-specific watchers
     */
    _closeFile(path) {
        const closers = this._closers.get(path);
        if (!closers)
            return;
        closers.forEach((closer) => closer());
        this._closers.delete(path);
    }
    _addPathCloser(path, closer) {
        if (!closer)
            return;
        let list = this._closers.get(path);
        if (!list) {
            list = [];
            this._closers.set(path, list);
        }
        list.push(closer);
    }
    _readdirp(root, opts) {
        if (this.closed)
            return;
        const options = { type: EV.ALL, alwaysStat: true, lstat: true, ...opts, depth: 0 };
        let stream = readdirp(root, options);
        this._streams.add(stream);
        stream.once(STR_CLOSE, () => {
            stream = undefined;
        });
        stream.once(STR_END, () => {
            if (stream) {
                this._streams.delete(stream);
                stream = undefined;
            }
        });
        return stream;
    }
}
/**
 * Instantiates watcher with paths to be tracked.
 * @param paths file / directory paths
 * @param options opts, such as `atomic`, `awaitWriteFinish`, `ignored`, and others
 * @returns an instance of FSWatcher for chaining.
 * @example
 * const watcher = watch('.').on('all', (event, path) => { console.log(event, path); });
 * watch('.', { atomic: true, awaitWriteFinish: true, ignored: (f, stats) => stats?.isFile() && !f.endsWith('.js') })
 */
export function watch(paths, options = {}) {
    const watcher = new FSWatcher(options);
    watcher.add(paths);
    return watcher;
}
export default { watch, FSWatcher };
