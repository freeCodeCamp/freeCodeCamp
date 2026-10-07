/// <reference types="node" />
/**
 * Standard libc error codes. Add more to this enum and ErrorStrings as they are
 * needed.
 * @url http://www.gnu.org/software/libc/manual/html_node/Error-Codes.html
 */
export declare enum ErrorCode {
    EPERM = 1,
    ENOENT = 2,
    EIO = 5,
    EBADF = 9,
    EACCES = 13,
    EBUSY = 16,
    EEXIST = 17,
    ENOTDIR = 20,
    EISDIR = 21,
    EINVAL = 22,
    EFBIG = 27,
    ENOSPC = 28,
    EROFS = 30,
    ENOTEMPTY = 39,
    ENOTSUP = 95
}
/**
 * Strings associated with each error code.
 * @hidden
 */
export declare const ErrorStrings: {
    [code: string]: string;
    [code: number]: string;
};
/**
 * Represents a BrowserFS error. Passed back to applications after a failed
 * call to the BrowserFS API.
 */
export declare class ApiError extends Error implements NodeJS.ErrnoException {
    static fromJSON(json: any): ApiError;
    /**
     * Creates an ApiError object from a buffer.
     */
    static fromBuffer(buffer: Buffer, i?: number): ApiError;
    static FileError(code: ErrorCode, p: string): ApiError;
    static ENOENT(path: string): ApiError;
    static EEXIST(path: string): ApiError;
    static EISDIR(path: string): ApiError;
    static ENOTDIR(path: string): ApiError;
    static EPERM(path: string): ApiError;
    static ENOTEMPTY(path: string): ApiError;
    errno: ErrorCode;
    code: string;
    path: string | undefined;
    syscall: string;
    stack: string | undefined;
    /**
     * Represents a BrowserFS error. Passed back to applications after a failed
     * call to the BrowserFS API.
     *
     * Error codes mirror those returned by regular Unix file operations, which is
     * what Node returns.
     * @constructor ApiError
     * @param type The type of the error.
     * @param [message] A descriptive error message.
     */
    constructor(type: ErrorCode, message?: string, path?: string);
    /**
     * @return A friendly error message.
     */
    toString(): string;
    toJSON(): any;
    /**
     * Writes the API error into a buffer.
     */
    writeToBuffer(buffer?: Buffer, i?: number): Buffer;
    /**
     * The size of the API error in buffer-form in bytes.
     */
    bufferSize(): number;
}
