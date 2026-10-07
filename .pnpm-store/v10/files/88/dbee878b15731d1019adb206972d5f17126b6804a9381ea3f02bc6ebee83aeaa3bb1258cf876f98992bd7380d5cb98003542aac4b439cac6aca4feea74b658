interface IMutex {
    acquire(): Promise<void>;
    release(): Promise<void>;
}
/**
 * Creates a mutex, make sure to call `release` when you're done with it.
 *
 * @param {string} key A unique key
 */
export declare function createMutex(key: string, timeout?: number): IMutex;
export declare function releaseAllMutexes(): Promise<void>;
export {};
