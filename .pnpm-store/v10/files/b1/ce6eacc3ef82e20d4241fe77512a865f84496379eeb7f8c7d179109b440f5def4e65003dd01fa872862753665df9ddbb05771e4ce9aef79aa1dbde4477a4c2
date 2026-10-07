/**
 * A utility class for safely interacting with localStorage.
 */
export declare class LocalStorage {
    static store: Storage | undefined;
    /**
     * Safely get a value from localStorage.
     * If the value is not able to be parsed as JSON, this method will return null.
     *
     * @param key - String value of the key.
     * @returns Null if the key is not found or unable to be parsed, the value otherwise.
     */
    static get<T>(key: string): T | null;
    /**
     * Safely set a value in localStorage.
     * If the storage is full, this method will catch the error and log a warning.
     *
     * @param key - String value of the key.
     * @param value - Any value to store.
     */
    static set(key: string, value: any): void;
    /**
     * Remove a value from localStorage.
     *
     * @param key - String value of the key.
     */
    static remove(key: string): void;
}
