/// <reference types="node" />
import { EventEmitter } from 'events';
interface WatchFileSystemOptions {
    aggregateTimeout: number;
    poll: boolean;
    followSymlinks: boolean;
    ignored: string | RegExp | Function | (string | RegExp | Function)[];
}
interface Watchpack extends EventEmitter {
    _onChange(item: string, mtime: number, file: string, type?: string): void;
    _onRemove(item: string, file: string, type?: string): void;
}
interface WatcherV4 {
    close(): void;
    pause(): void;
    getFileTimestamps(): Map<string, number>;
    getContextTimestamps(): Map<string, number>;
}
interface WatcherV5 {
    close(): void;
    pause(): void;
    getFileTimeInfoEntries(): Map<string, number>;
    getContextTimeInfoEntries(): Map<string, number>;
}
declare type Watcher = WatcherV4 | WatcherV5;
interface WatchFileSystem {
    watcher: Watchpack;
    wfs?: {
        watcher: Watchpack;
    };
    watch(files: Iterable<string>, dirs: Iterable<string>, missing: Iterable<string>, startTime?: number, options?: Partial<WatchFileSystemOptions>, callback?: Function, callbackUndelayed?: Function): Watcher;
}
export { WatchFileSystem, WatchFileSystemOptions, Watchpack, WatcherV4, WatcherV5, Watcher };
