/// <reference types="node" />
import * as _fs from 'fs';
import Stats from './node_fs_stats';
export declare class FileWatcher {
    triggerWatch(filename: string, event: 'change' | 'rename', newStats?: Stats): void;
    watch(filename: string, listener?: (event: string, filename: string) => any): _fs.FSWatcher;
    watch(filename: string, options: {
        recursive?: boolean;
        persistent?: boolean;
    }, listener?: (event: string, filename: string) => any): _fs.FSWatcher;
    watchFile(curr: Stats, filename: string, listener: (curr: Stats, prev: Stats) => void): void;
    watchFile(curr: Stats, filename: string, options: {
        persistent?: boolean;
        interval?: number;
    }, listener: (curr: Stats, prev: Stats) => void): void;
    unwatchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): any;
    private watchEntries;
    private removeEntry;
}
