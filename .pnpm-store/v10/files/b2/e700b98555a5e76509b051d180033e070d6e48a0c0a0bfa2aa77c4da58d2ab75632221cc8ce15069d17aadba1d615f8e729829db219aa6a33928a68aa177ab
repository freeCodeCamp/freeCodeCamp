import type * as ts from 'typescript';
import { FilesMatch } from '../../reporter';
interface ControlledTypeScriptSystem extends ts.System {
    invokeFileCreated(path: string): void;
    invokeFileChanged(path: string): void;
    invokeFileDeleted(path: string): void;
    clearCache(): void;
    getFileSize(path: string): number;
    watchFile(path: string, callback: ts.FileWatcherCallback, pollingInterval?: number, options?: ts.WatchOptions): ts.FileWatcher;
    watchDirectory(path: string, callback: ts.DirectoryWatcherCallback, recursive?: boolean, options?: ts.WatchOptions): ts.FileWatcher;
    getModifiedTime(path: string): Date | undefined;
    setModifiedTime(path: string, time: Date): void;
    deleteFile(path: string): void;
    setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): any;
    clearTimeout(timeoutId: any): void;
    waitForQueued(): Promise<void>;
    setArtifacts(artifacts: FilesMatch): void;
}
declare type FileSystemMode = 'readonly' | 'write-tsbuildinfo' | 'write-dts' | 'write-references';
declare function createControlledTypeScriptSystem(typescript: typeof ts, mode?: FileSystemMode): ControlledTypeScriptSystem;
export { createControlledTypeScriptSystem, ControlledTypeScriptSystem };
