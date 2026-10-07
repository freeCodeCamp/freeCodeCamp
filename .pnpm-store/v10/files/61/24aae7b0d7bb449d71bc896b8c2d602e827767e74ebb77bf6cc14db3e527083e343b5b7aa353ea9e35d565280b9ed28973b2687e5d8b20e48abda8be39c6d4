/// <reference types="node" />
import { Dirent, Stats } from 'fs';
/**
 * Interface to abstract file system implementation details.
 */
interface FileSystem {
    exists(path: string): boolean;
    readFile(path: string, encoding?: string): string | undefined;
    readDir(path: string): Dirent[];
    readStats(path: string): Stats | undefined;
    realPath(path: string): string;
    normalizePath(path: string): string;
    writeFile(path: string, data: string): void;
    deleteFile(path: string): void;
    createDir(path: string): void;
    updateTimes(path: string, atime: Date, mtime: Date): void;
    clearCache(): void;
}
export { FileSystem };
