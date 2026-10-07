/// <reference types="node" />
import type * as fs from 'fs';
export interface Entry {
    dirent: Dirent;
    name: string;
    path: string;
    stats?: Stats;
}
export declare type Stats = fs.Stats;
export declare type ErrnoException = NodeJS.ErrnoException;
export interface Dirent {
    isBlockDevice: () => boolean;
    isCharacterDevice: () => boolean;
    isDirectory: () => boolean;
    isFIFO: () => boolean;
    isFile: () => boolean;
    isSocket: () => boolean;
    isSymbolicLink: () => boolean;
    name: string;
}
