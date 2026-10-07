/// <reference types="node" />
import { BFSCallback, FileSystemOptions } from '../core/file_system';
import { SyncKeyValueStore, SimpleSyncStore, SyncKeyValueRWTransaction, SyncKeyValueFileSystem } from '../generic/key_value_filesystem';
/**
 * A simple in-memory key-value store backed by a JavaScript object.
 */
export declare class InMemoryStore implements SyncKeyValueStore, SimpleSyncStore {
    private store;
    name(): string;
    clear(): void;
    beginTransaction(type: string): SyncKeyValueRWTransaction;
    get(key: string): Buffer;
    put(key: string, data: Buffer, overwrite: boolean): boolean;
    del(key: string): void;
}
/**
 * A simple in-memory file system backed by an InMemoryStore.
 * Files are not persisted across page loads.
 */
export default class InMemoryFileSystem extends SyncKeyValueFileSystem {
    static readonly Name = "InMemory";
    static readonly Options: FileSystemOptions;
    /**
     * Creates an InMemoryFileSystem instance.
     */
    static Create(options: any, cb: BFSCallback<InMemoryFileSystem>): void;
    private constructor();
}
