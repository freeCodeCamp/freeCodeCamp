export interface ConnectionPool<T> {
    /**
     * Retrieve the first connection in the pool
     */
    poll(): T | void;
    /**
     * Release the connection back to the pool making it potentially
     * re-usable by other requests.
     */
    offerLast(connection: T): void;
    /**
     * Removes the connection from the pool, and destroys it.
     */
    destroy(connection: T): void;
    /**
     * Implements the iterable protocol and allows arrays to be consumed
     * by most syntaxes expecting iterables, such as the spread syntax
     * and for...of loops
     */
    [Symbol.iterator](): Iterator<T>;
}
export interface CacheKey {
    destination: string;
}
