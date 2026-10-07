import type * as fsStat from '@nodelib/fs.stat';
import type { Dirent, ErrnoException } from '../types';
export interface ReaddirAsynchronousMethod {
    (filepath: string, options: {
        withFileTypes: true;
    }, callback: (error: ErrnoException | null, files: Dirent[]) => void): void;
    (filepath: string, callback: (error: ErrnoException | null, files: string[]) => void): void;
}
export interface ReaddirSynchronousMethod {
    (filepath: string, options: {
        withFileTypes: true;
    }): Dirent[];
    (filepath: string): string[];
}
export declare type FileSystemAdapter = fsStat.FileSystemAdapter & {
    readdir: ReaddirAsynchronousMethod;
    readdirSync: ReaddirSynchronousMethod;
};
export declare const FILE_SYSTEM_ADAPTER: FileSystemAdapter;
export declare function createFileSystemAdapter(fsMethods?: Partial<FileSystemAdapter>): FileSystemAdapter;
