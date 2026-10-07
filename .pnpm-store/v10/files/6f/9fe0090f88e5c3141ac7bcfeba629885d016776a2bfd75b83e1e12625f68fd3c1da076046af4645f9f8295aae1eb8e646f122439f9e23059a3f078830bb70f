import { DatabaseOptions } from "lmdb";
export default class GatsbyCacheLmdb {
    private db;
    private encoding;
    readonly name: string;
    readonly directory: string;
    readonly cache: GatsbyCacheLmdb;
    constructor({ name, encoding, }: {
        name: string;
        encoding?: DatabaseOptions["encoding"];
    });
    init(): GatsbyCacheLmdb;
    private static getStore;
    private getDb;
    get<T = unknown>(key: any): Promise<T | undefined>;
    set<T>(key: string, value: T): Promise<T | undefined>;
    del(key: string): Promise<void>;
}
export declare function resetCache(): Promise<void>;
