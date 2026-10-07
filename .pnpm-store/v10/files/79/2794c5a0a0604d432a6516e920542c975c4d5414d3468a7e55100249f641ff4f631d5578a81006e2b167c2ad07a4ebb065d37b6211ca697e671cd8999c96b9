/// <reference types="node" />
import { BFSCallback, FileSystemOptions } from '../core/file_system';
import { SyncKeyValueStore, SimpleSyncStore, SyncKeyValueFileSystem, SyncKeyValueRWTransaction } from '../generic/key_value_filesystem';
/**
 * A synchronous key-value store backed by localStorage.
 */
export declare class LocalStorageStore implements SyncKeyValueStore, SimpleSyncStore {
    name(): string;
    clear(): void;
    beginTransaction(type: string): SyncKeyValueRWTransaction;
    get(key: string): Buffer | undefined;
    put(key: string, data: Buffer, overwrite: boolean): boolean;
    del(key: string): void;
}
/**
 * A synchronous file system backed by localStorage. Connects our
 * LocalStorageStore to our SyncKeyValueFileSystem.
 */
export default class LocalStorageFileSystem extends SyncKeyValueFileSystem {
    static readonly Name = "LocalStorage";
    static readonly Options: FileSystemOptions;
    /**
     * Creates a LocalStorageFileSystem instance.
     */
    static Create(options: any, cb: BFSCallback<LocalStorageFileSystem>): void;
    static isAvailable(): boolean;
    /**
     * Creates a new LocalStorage file system using the contents of `localStorage`.
     */
    private constructor();
}
