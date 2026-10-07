export class Path {
    /**
     * Creates a new path based on the argument type. If the argument is a string,
     * it is assumed to be a file or directory path and is converted to a Path
     * instance. If the argument is a URL, it is assumed to be a file URL and is
     * converted to a Path instance. If the argument is a Path instance, it is
     * copied into a new Path instance. If the argument is an array, it is assumed
     * to be the steps of a path and is used to create a new Path instance.
     * @param {string|URL|Path|Array<string>} pathish The value to convert to a Path instance.
     * @returns {Path} A new Path instance.
     * @throws {TypeError} When pathish is not a string, URL, Path, or Array.
     * @throws {TypeError} When pathish is a string and is empty.
     */
    static from(pathish: string | URL | Path | Array<string>): Path;
    /**
     * Creates a new Path instance from a string.
     * @param {string} fileOrDirPath The file or directory path to convert.
     * @returns {Path} A new Path instance.
     * @deprecated Use Path.from() instead.
     */
    static fromString(fileOrDirPath: string): Path;
    /**
     * Creates a new Path instance from a URL.
     * @param {URL} url The URL to convert.
     * @returns {Path} A new Path instance.
     * @throws {TypeError} When url is not a URL instance.
     * @throws {TypeError} When url.pathname is empty.
     * @throws {TypeError} When url.protocol is not "file:".
     * @deprecated Use Path.from() instead.
     */
    static fromURL(url: URL): Path;
    /**
     * Creates a new instance.
     * @param {Iterable<string>} [steps] The steps to use for the path.
     * @throws {TypeError} When steps is not iterable.
     */
    constructor(steps?: Iterable<string>);
    /**
     * Adds steps to the end of the path.
     * @param  {...string} steps The steps to add to the path.
     * @returns {void}
     */
    push(...steps: string[]): void;
    /**
     * Removes the last step from the path.
     * @returns {string} The last step in the path.
     */
    pop(): string;
    /**
     * Returns an iterator for steps in the path.
     * @returns {IterableIterator<string>} An iterator for the steps in the path.
     */
    steps(): IterableIterator<string>;
    /**
     * Sets the name (the last step) of the path.
     * @type {string}
     */
    set name(value: string);
    /**
     * Retrieves the name (the last step) of the path.
     * @type {string}
     */
    get name(): string;
    /**
     * Retrieves the size of the path.
     * @type {number}
     */
    get size(): number;
    /**
     * Returns the path as a string.
     * @returns {string} The path as a string.
     */
    toString(): string;
    /**
     * Returns an iterator for the steps in the path.
     * @returns {IterableIterator<string>} An iterator for the steps in the path.
     */
    [Symbol.iterator](): IterableIterator<string>;
    #private;
}
export type HfsImpl = import("@humanfs/types").HfsImpl;
export type HfsDirectoryEntry = import("@humanfs/types").HfsDirectoryEntry;
