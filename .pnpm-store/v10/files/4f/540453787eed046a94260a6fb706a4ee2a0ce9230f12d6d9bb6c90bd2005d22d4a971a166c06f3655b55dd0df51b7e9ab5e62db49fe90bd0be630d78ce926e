/// <reference types="node" />
import { BFSOneArgCallback, BFSCallback, FileSystemOptions } from '../core/file_system';
import { AsyncKeyValueROTransaction, AsyncKeyValueRWTransaction, AsyncKeyValueStore, AsyncKeyValueFileSystem } from '../generic/key_value_filesystem';
/**
 * @hidden
 */
export declare class IndexedDBROTransaction implements AsyncKeyValueROTransaction {
    tx: IDBTransaction;
    store: IDBObjectStore;
    constructor(tx: IDBTransaction, store: IDBObjectStore);
    get(key: string, cb: BFSCallback<Buffer>): void;
}
/**
 * @hidden
 */
export declare class IndexedDBRWTransaction extends IndexedDBROTransaction implements AsyncKeyValueRWTransaction, AsyncKeyValueROTransaction {
    constructor(tx: IDBTransaction, store: IDBObjectStore);
    put(key: string, data: Buffer, overwrite: boolean, cb: BFSCallback<boolean>): void;
    del(key: string, cb: BFSOneArgCallback): void;
    commit(cb: BFSOneArgCallback): void;
    abort(cb: BFSOneArgCallback): void;
}
export declare class IndexedDBStore implements AsyncKeyValueStore {
    private db;
    private storeName;
    static Create(storeName: string, cb: BFSCallback<IndexedDBStore>): void;
    constructor(db: IDBDatabase, storeName: string);
    name(): string;
    clear(cb: BFSOneArgCallback): void;
    beginTransaction(type: 'readonly'): AsyncKeyValueROTransaction;
    beginTransaction(type: 'readwrite'): AsyncKeyValueRWTransaction;
}
/**
 * Configuration options for the IndexedDB file system.
 */
export interface IndexedDBFileSystemOptions {
    storeName?: string;
    cacheSize?: number;
}
/**
 * A file system that uses the IndexedDB key value file system.
 */
export default class IndexedDBFileSystem extends AsyncKeyValueFileSystem {
    static readonly Name = "IndexedDB";
    static readonly Options: FileSystemOptions;
    /**
     * Constructs an IndexedDB file system with the given options.
     */
    static Create(opts: IndexedDBFileSystemOptions, cb: BFSCallback<IndexedDBFileSystem>): void;
    static isAvailable(): boolean;
    private constructor();
}
