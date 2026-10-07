import type { Database } from "lmdb";
import type { Headers } from "got";
export declare enum LockStatus {
    Locked = 0,
    Unlocked = 1
}
interface ICoreUtilsDatabase {
    remoteFileInfo: Database<{
        extension: string;
        headers: Headers;
        path: string;
        directory: string;
        cacheKey?: string;
        buildId: string;
    }, string>;
    mutex: Database<LockStatus, string>;
}
export declare function getDatabaseDir(): string;
export declare function getStorage(fullDbPath: string): ICoreUtilsDatabase;
export declare function closeDatabase(): Promise<void>;
export {};
