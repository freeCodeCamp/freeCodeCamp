import { Storage } from "./Storage";
/**
 * @internal
 */
export declare class IndexedDbStorage implements Storage {
    private readonly dbName;
    constructor(dbName?: string);
    getItem(key: string): Promise<string | null>;
    removeItem(key: string): Promise<void>;
    setItem(id: string, value: string): Promise<void>;
    private getDb;
    private withObjectStore;
}
