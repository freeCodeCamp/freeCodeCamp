/// <reference types="node" />
import type { MessageSender, FSWatchEvent } from '../messages';
declare type FSEncoding = BufferEncoding | 'buffer';
export declare type FileContent = Uint8Array | string;
export interface FilesMap {
    [filePath: string]: FileContent;
}
export interface FileWatchOptions {
    recursive?: boolean;
}
export declare type FileWatchEvent = Omit<FSWatchEvent, 'watcherId'>;
export interface IFileStats {
    type: 'dir' | 'file' | 'link';
    size: number;
    ino: number;
    atimeMs: number;
    mtimeMs: number;
    ctimeMs: number;
    blocks: number;
    mode: number;
}
export interface FileSystemEvents {
    'fs/init': {
        files: FilesMap;
    };
    'fs/readFile': [{
        path: string;
        encoding?: undefined;
    }, {
        data: Uint8Array;
    }] | [{
        path: string;
        encoding?: 'buffer';
    }, {
        data: Uint8Array;
    }] | [{
        path: string;
        encoding?: FSEncoding;
    }, {
        data: string | FileContent;
    }];
    'fs/writeFile': {
        path: string;
        content: FileContent;
        encoding?: BufferEncoding;
        recursive?: boolean;
    };
    'fs/readdir': [
        {
            path: string;
        },
        {
            data: string[];
        }
    ];
    'fs/stat': [
        {
            path: string;
        },
        {
            data: IFileStats;
        }
    ];
    'fs/mkdir': {
        path: string;
        recursive?: boolean;
    };
    'fs/rm': {
        path: string;
        force?: boolean;
        recursive?: boolean;
    };
    'fs/watch': {
        watcherId: string;
        includes: string[];
        excludes: string[];
    };
    'fs/unwatch': {
        watcherId: string;
    };
}
declare type WriteFileOptions = BufferEncoding | {
    encoding?: BufferEncoding;
    recursive?: boolean;
};
export declare class FileSystemApi {
    private readonly channel;
    constructor(channel: MessageSender);
    /**
     * Initialize the File System worker with the files.
     */
    init(files: FilesMap): Promise<void>;
    /**
     * Read a file at the given path.
     */
    readFile(path: string, encoding?: undefined): Promise<Uint8Array>;
    readFile(path: string, encoding: 'buffer'): Promise<Uint8Array>;
    readFile(path: string, encoding: BufferEncoding): Promise<string>;
    /**
     * Write a file at the given path.
     * Replaces the file content if the file already exists.
     */
    writeFile(path: string, content: FileContent): Promise<void>;
    writeFile(path: string, content: FileContent, options: WriteFileOptions): Promise<void>;
    readdir(path: string): Promise<string[]>;
    mkdir(path: string, options?: {
        recursive?: boolean;
    }): Promise<void>;
    stat(path: string): Promise<IFileStats>;
    rm(path: string, options?: {
        force?: boolean;
        recursive?: boolean;
    }): Promise<void>;
    /**
     * Subscribe to changes at the given file or directory.
     */
    watch(includes: string[], excludes: string[], listener?: (evt?: FileWatchEvent) => void): Promise<{
        dispose: () => Promise<void>;
    }>;
}
export {};
