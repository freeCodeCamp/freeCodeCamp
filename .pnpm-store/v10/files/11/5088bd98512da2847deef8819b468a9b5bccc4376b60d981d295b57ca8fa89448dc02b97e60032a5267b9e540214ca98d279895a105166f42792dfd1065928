export declare enum ActionType {
    NOP = 0,
    THROW_EXCEPTION = 1,
    TRUNCATE_FILE = 2,
    CREATE_FILE = 3
}
/**
 * Represents one of the following file flags. A convenience object.
 *
 * * `'r'` - Open file for reading. An exception occurs if the file does not exist.
 * * `'r+'` - Open file for reading and writing. An exception occurs if the file does not exist.
 * * `'rs'` - Open file for reading in synchronous mode. Instructs the filesystem to not cache writes.
 * * `'rs+'` - Open file for reading and writing, and opens the file in synchronous mode.
 * * `'w'` - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
 * * `'wx'` - Like 'w' but opens the file in exclusive mode.
 * * `'w+'` - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
 * * `'wx+'` - Like 'w+' but opens the file in exclusive mode.
 * * `'a'` - Open file for appending. The file is created if it does not exist.
 * * `'ax'` - Like 'a' but opens the file in exclusive mode.
 * * `'a+'` - Open file for reading and appending. The file is created if it does not exist.
 * * `'ax+'` - Like 'a+' but opens the file in exclusive mode.
 *
 * Exclusive mode ensures that the file path is newly created.
 */
export declare class FileFlag {
    private static flagCache;
    private static validFlagStrs;
    /**
     * Get an object representing the given file flag.
     * @param modeStr The string representing the flag
     * @return The FileFlag object representing the flag
     * @throw when the flag string is invalid
     */
    static getFileFlag(flagStr: string): FileFlag;
    private flagStr;
    /**
     * This should never be called directly.
     * @param modeStr The string representing the mode
     * @throw when the mode string is invalid
     */
    constructor(flagStr: string);
    /**
     * Get the underlying flag string for this flag.
     */
    getFlagString(): string;
    /**
     * Returns true if the file is readable.
     */
    isReadable(): boolean;
    /**
     * Returns true if the file is writeable.
     */
    isWriteable(): boolean;
    /**
     * Returns true if the file mode should truncate.
     */
    isTruncating(): boolean;
    /**
     * Returns true if the file is appendable.
     */
    isAppendable(): boolean;
    /**
     * Returns true if the file is open in synchronous mode.
     */
    isSynchronous(): boolean;
    /**
     * Returns true if the file is open in exclusive mode.
     */
    isExclusive(): boolean;
    /**
     * Returns one of the static fields on this object that indicates the
     * appropriate response to the path existing.
     */
    pathExistsAction(): ActionType;
    /**
     * Returns one of the static fields on this object that indicates the
     * appropriate response to the path not existing.
     */
    pathNotExistsAction(): ActionType;
}
