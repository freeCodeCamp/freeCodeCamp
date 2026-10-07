import { RootDatabase } from "lmdb";
import { IDataStore, ILmdbDatabases } from "../types";
export declare function getDefaultDbPath(): string;
declare global {
    namespace NodeJS {
        interface Global {
            __GATSBY_OPEN_LMDBS?: Map<string, ILmdbDatabases>;
            __GATSBY_OPEN_ROOT_LMDBS?: Map<string, RootDatabase>;
        }
    }
}
export declare function setupLmdbStore({ dbPath, }?: {
    dbPath?: string;
}): IDataStore;
