import type { WatchEventType, Stats, FSWatcher as NativeFsWatcher } from 'fs';
import type { FSWatcher, WatchHelper, Throttler } from './index.js';
import type { EntryInfo } from 'readdirp';
export type Path = string;
export declare const STR_DATA = "data";
export declare const STR_END = "end";
export declare const STR_CLOSE = "close";
export declare const EMPTY_FN: () => void;
export declare const IDENTITY_FN: (val: unknown) => unknown;
export declare const isWindows: boolean;
export declare const isMacos: boolean;
export declare const isLinux: boolean;
export declare const isFreeBSD: boolean;
export declare const isIBMi: boolean;
export declare const EVENTS: {
    readonly ALL: "all";
    readonly READY: "ready";
    readonly ADD: "add";
    readonly CHANGE: "change";
    readonly ADD_DIR: "addDir";
    readonly UNLINK: "unlink";
    readonly UNLINK_DIR: "unlinkDir";
    readonly RAW: "raw";
    readonly ERROR: "error";
};
export type EventName = (typeof EVENTS)[keyof typeof EVENTS];
export type FsWatchContainer = {
    listeners: (path: string) => void | Set<any>;
    errHandlers: (err: unknown) => void | Set<any>;
    rawEmitters: (ev: WatchEventType, path: string, opts: unknown) => void | Set<any>;
    watcher: NativeFsWatcher;
    watcherUnusable?: boolean;
};
export interface WatchHandlers {
    listener: (path: string) => void;
    errHandler: (err: unknown) => void;
    rawEmitter: (ev: WatchEventType, path: string, opts: unknown) => void;
}
/**
 * @mixin
 */
export declare class NodeFsHandler {
    fsw: FSWatcher;
    _boundHandleError: (error: unknown) => void;
    constructor(fsW: FSWatcher);
    /**
     * Watch file for changes with fs_watchFile or fs_watch.
     * @param path to file or dir
     * @param listener on fs change
     * @returns closer for the watcher instance
     */
    _watchWithNodeFs(path: string, listener: (path: string, newStats?: any) => void | Promise<void>): (() => void) | undefined;
    /**
     * Watch a file and emit add event if warranted.
     * @returns closer for the watcher instance
     */
    _handleFile(file: Path, stats: Stats, initialAdd: boolean): (() => void) | undefined;
    /**
     * Handle symlinks encountered while reading a dir.
     * @param entry returned by readdirp
     * @param directory path of dir being read
     * @param path of this item
     * @param item basename of this item
     * @returns true if no more processing is needed for this entry.
     */
    _handleSymlink(entry: EntryInfo, directory: string, path: Path, item: string): Promise<boolean | undefined>;
    _handleRead(directory: string, initialAdd: boolean, wh: WatchHelper, target: Path, dir: Path, depth: number, throttler: Throttler): Promise<unknown> | undefined;
    /**
     * Read directory to add / remove files from `@watched` list and re-read it on change.
     * @param dir fs path
     * @param stats
     * @param initialAdd
     * @param depth relative to user-supplied path
     * @param target child path targeted for watch
     * @param wh Common watch helpers for this path
     * @param realpath
     * @returns closer for the watcher instance.
     */
    _handleDir(dir: string, stats: Stats, initialAdd: boolean, depth: number, target: string, wh: WatchHelper, realpath: string): Promise<(() => void) | undefined>;
    /**
     * Handle added file, directory, or glob pattern.
     * Delegates call to _handleFile / _handleDir after checks.
     * @param path to file or ir
     * @param initialAdd was the file added at watch instantiation?
     * @param priorWh depth relative to user-supplied path
     * @param depth Child path actually targeted for watch
     * @param target Child path actually targeted for watch
     */
    _addToNodeFs(path: string, initialAdd: boolean, priorWh: WatchHelper | undefined, depth: number, target?: string): Promise<string | false | undefined>;
}
