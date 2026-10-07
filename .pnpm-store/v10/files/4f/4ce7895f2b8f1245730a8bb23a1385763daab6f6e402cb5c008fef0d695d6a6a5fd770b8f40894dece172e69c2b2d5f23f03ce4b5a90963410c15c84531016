/*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */
import { Stats } from 'fs';
import { EventEmitter } from 'events';
import { ReaddirpStream, ReaddirpOptions, EntryInfo } from 'readdirp';
import { NodeFsHandler, EventName, Path, EVENTS as EV, WatchHandlers } from './handler.js';
type AWF = {
    stabilityThreshold: number;
    pollInterval: number;
};
type BasicOpts = {
    persistent: boolean;
    ignoreInitial: boolean;
    followSymlinks: boolean;
    cwd?: string;
    usePolling: boolean;
    interval: number;
    binaryInterval: number;
    alwaysStat?: boolean;
    depth?: number;
    ignorePermissionErrors: boolean;
    atomic: boolean | number;
};
export type Throttler = {
    timeoutObject: NodeJS.Timeout;
    clear: () => void;
    count: number;
};
export type ChokidarOptions = Partial<BasicOpts & {
    ignored: Matcher | Matcher[];
    awaitWriteFinish: boolean | Partial<AWF>;
}>;
export type FSWInstanceOptions = BasicOpts & {
    ignored: Matcher[];
    awaitWriteFinish: false | AWF;
};
export type ThrottleType = 'readdir' | 'watch' | 'add' | 'remove' | 'change';
export type EmitArgs = [path: Path, stats?: Stats];
export type EmitErrorArgs = [error: Error, stats?: Stats];
export type EmitArgsWithName = [event: EventName, ...EmitArgs];
export type MatchFunction = (val: string, stats?: Stats) => boolean;
export interface MatcherObject {
    path: string;
    recursive?: boolean;
}
export type Matcher = string | RegExp | MatchFunction | MatcherObject;
/**
 * Directory entry.
 */
declare class DirEntry {
    path: Path;
    _removeWatcher: (dir: string, base: string) => void;
    items: Set<Path>;
    constructor(dir: Path, removeWatcher: (dir: string, base: string) => void);
    add(item: string): void;
    remove(item: string): Promise<void>;
    has(item: string): boolean | undefined;
    getChildren(): string[];
    dispose(): void;
}
export declare class WatchHelper {
    fsw: FSWatcher;
    path: string;
    watchPath: string;
    fullWatchPath: string;
    dirParts: string[][];
    followSymlinks: boolean;
    statMethod: 'stat' | 'lstat';
    constructor(path: string, follow: boolean, fsw: FSWatcher);
    entryPath(entry: EntryInfo): Path;
    filterPath(entry: EntryInfo): boolean;
    filterDir(entry: EntryInfo): boolean;
}
export interface FSWatcherKnownEventMap {
    [EV.READY]: [];
    [EV.RAW]: Parameters<WatchHandlers['rawEmitter']>;
    [EV.ERROR]: Parameters<WatchHandlers['errHandler']>;
    [EV.ALL]: [event: EventName, ...EmitArgs];
}
export type FSWatcherEventMap = FSWatcherKnownEventMap & {
    [k in Exclude<EventName, keyof FSWatcherKnownEventMap>]: EmitArgs;
};
/**
 * Watches files & directories for changes. Emitted events:
 * `add`, `addDir`, `change`, `unlink`, `unlinkDir`, `all`, `error`
 *
 *     new FSWatcher()
 *       .add(directories)
 *       .on('add', path => log('File', path, 'was added'))
 */
export declare class FSWatcher extends EventEmitter<FSWatcherEventMap> {
    closed: boolean;
    options: FSWInstanceOptions;
    _closers: Map<string, Array<any>>;
    _ignoredPaths: Set<Matcher>;
    _throttled: Map<ThrottleType, Map<any, any>>;
    _streams: Set<ReaddirpStream>;
    _symlinkPaths: Map<Path, string | boolean>;
    _watched: Map<string, DirEntry>;
    _pendingWrites: Map<string, any>;
    _pendingUnlinks: Map<string, EmitArgsWithName>;
    _readyCount: number;
    _emitReady: () => void;
    _closePromise?: Promise<void>;
    _userIgnored?: MatchFunction;
    _readyEmitted: boolean;
    _emitRaw: WatchHandlers['rawEmitter'];
    _boundRemove: (dir: string, item: string) => void;
    _nodeFsHandler: NodeFsHandler;
    constructor(_opts?: ChokidarOptions);
    _addIgnoredPath(matcher: Matcher): void;
    _removeIgnoredPath(matcher: Matcher): void;
    /**
     * Adds paths to be watched on an existing FSWatcher instance.
     * @param paths_ file or file list. Other arguments are unused
     */
    add(paths_: Path | Path[], _origAdd?: string, _internal?: boolean): FSWatcher;
    /**
     * Close watchers or start ignoring events from specified paths.
     */
    unwatch(paths_: Path | Path[]): FSWatcher;
    /**
     * Close watchers and remove all listeners from watched paths.
     */
    close(): Promise<void>;
    /**
     * Expose list of watched paths
     * @returns for chaining
     */
    getWatched(): Record<string, string[]>;
    emitWithAll(event: EventName, args: EmitArgs): void;
    /**
     * Normalize and emit events.
     * Calling _emit DOES NOT MEAN emit() would be called!
     * @param event Type of event
     * @param path File or directory path
     * @param stats arguments to be passed with event
     * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
     */
    _emit(event: EventName, path: Path, stats?: Stats): Promise<this | undefined>;
    /**
     * Common handler for errors
     * @returns The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
     */
    _handleError(error: Error): Error | boolean;
    /**
     * Helper utility for throttling
     * @param actionType type being throttled
     * @param path being acted upon
     * @param timeout duration of time to suppress duplicate actions
     * @returns tracking object or false if action should be suppressed
     */
    _throttle(actionType: ThrottleType, path: Path, timeout: number): Throttler | false;
    _incrReadyCount(): number;
    /**
     * Awaits write operation to finish.
     * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
     * @param path being acted upon
     * @param threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
     * @param event
     * @param awfEmit Callback to be called when ready for event to be emitted.
     */
    _awaitWriteFinish(path: Path, threshold: number, event: EventName, awfEmit: (err?: Error, stat?: Stats) => void): void;
    /**
     * Determines whether user has asked to ignore this path.
     */
    _isIgnored(path: Path, stats?: Stats): boolean;
    _isntIgnored(path: Path, stat?: Stats): boolean;
    /**
     * Provides a set of common helpers and properties relating to symlink handling.
     * @param path file or directory pattern being watched
     */
    _getWatchHelpers(path: Path): WatchHelper;
    /**
     * Provides directory tracking objects
     * @param directory path of the directory
     */
    _getWatchedDir(directory: string): DirEntry;
    /**
     * Check for read permissions: https://stackoverflow.com/a/11781404/1358405
     */
    _hasReadPermissions(stats: Stats): boolean;
    /**
     * Handles emitting unlink events for
     * files and directories, and via recursion, for
     * files and directories within directories that are unlinked
     * @param directory within which the following item is located
     * @param item      base path of item/directory
     */
    _remove(directory: string, item: string, isDirectory?: boolean): void;
    /**
     * Closes all watchers for a path
     */
    _closePath(path: Path): void;
    /**
     * Closes only file-specific watchers
     */
    _closeFile(path: Path): void;
    _addPathCloser(path: Path, closer: () => void): void;
    _readdirp(root: Path, opts?: Partial<ReaddirpOptions>): ReaddirpStream | undefined;
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
export declare function watch(paths: string | string[], options?: ChokidarOptions): FSWatcher;
declare const _default: {
    watch: typeof watch;
    FSWatcher: typeof FSWatcher;
};
export default _default;
