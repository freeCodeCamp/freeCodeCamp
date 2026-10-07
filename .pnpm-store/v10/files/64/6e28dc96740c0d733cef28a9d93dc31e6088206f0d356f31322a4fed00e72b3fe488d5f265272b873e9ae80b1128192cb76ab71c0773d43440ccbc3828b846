"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = exports.ErrorStrings = exports.ErrorCode = void 0;
/**
 * Standard libc error codes. Add more to this enum and ErrorStrings as they are
 * needed.
 * @url http://www.gnu.org/software/libc/manual/html_node/Error-Codes.html
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["EPERM"] = 1] = "EPERM";
    ErrorCode[ErrorCode["ENOENT"] = 2] = "ENOENT";
    ErrorCode[ErrorCode["EIO"] = 5] = "EIO";
    ErrorCode[ErrorCode["EBADF"] = 9] = "EBADF";
    ErrorCode[ErrorCode["EACCES"] = 13] = "EACCES";
    ErrorCode[ErrorCode["EBUSY"] = 16] = "EBUSY";
    ErrorCode[ErrorCode["EEXIST"] = 17] = "EEXIST";
    ErrorCode[ErrorCode["ENOTDIR"] = 20] = "ENOTDIR";
    ErrorCode[ErrorCode["EISDIR"] = 21] = "EISDIR";
    ErrorCode[ErrorCode["EINVAL"] = 22] = "EINVAL";
    ErrorCode[ErrorCode["EFBIG"] = 27] = "EFBIG";
    ErrorCode[ErrorCode["ENOSPC"] = 28] = "ENOSPC";
    ErrorCode[ErrorCode["EROFS"] = 30] = "EROFS";
    ErrorCode[ErrorCode["ENOTEMPTY"] = 39] = "ENOTEMPTY";
    ErrorCode[ErrorCode["ENOTSUP"] = 95] = "ENOTSUP";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
/* tslint:disable:variable-name */
/**
 * Strings associated with each error code.
 * @hidden
 */
exports.ErrorStrings = {};
exports.ErrorStrings[ErrorCode.EPERM] = 'Operation not permitted.';
exports.ErrorStrings[ErrorCode.ENOENT] = 'No such file or directory.';
exports.ErrorStrings[ErrorCode.EIO] = 'Input/output error.';
exports.ErrorStrings[ErrorCode.EBADF] = 'Bad file descriptor.';
exports.ErrorStrings[ErrorCode.EACCES] = 'Permission denied.';
exports.ErrorStrings[ErrorCode.EBUSY] = 'Resource busy or locked.';
exports.ErrorStrings[ErrorCode.EEXIST] = 'File exists.';
exports.ErrorStrings[ErrorCode.ENOTDIR] = 'File is not a directory.';
exports.ErrorStrings[ErrorCode.EISDIR] = 'File is a directory.';
exports.ErrorStrings[ErrorCode.EINVAL] = 'Invalid argument.';
exports.ErrorStrings[ErrorCode.EFBIG] = 'File is too big.';
exports.ErrorStrings[ErrorCode.ENOSPC] = 'No space left on disk.';
exports.ErrorStrings[ErrorCode.EROFS] = 'Cannot modify a read-only file system.';
exports.ErrorStrings[ErrorCode.ENOTEMPTY] = 'Directory is not empty.';
exports.ErrorStrings[ErrorCode.ENOTSUP] = 'Operation is not supported.';
/* tslint:enable:variable-name */
/**
 * Represents a BrowserFS error. Passed back to applications after a failed
 * call to the BrowserFS API.
 */
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
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
    function ApiError(type, message, path) {
        if (message === void 0) { message = exports.ErrorStrings[type]; }
        var _this = _super.call(this, message) || this;
        // Unsupported.
        _this.syscall = "";
        _this.errno = type;
        _this.code = ErrorCode[type];
        _this.path = path;
        _this.stack = new Error().stack;
        _this.message = "Error: ".concat(_this.code, ": ").concat(message).concat(_this.path ? ", '".concat(_this.path, "'") : '');
        return _this;
    }
    ApiError.fromJSON = function (json) {
        var err = new ApiError(0);
        err.errno = json.errno;
        err.code = json.code;
        err.path = json.path;
        err.stack = json.stack;
        err.message = json.message;
        return err;
    };
    /**
     * Creates an ApiError object from a buffer.
     */
    ApiError.fromBuffer = function (buffer, i) {
        if (i === void 0) { i = 0; }
        return ApiError.fromJSON(JSON.parse(buffer.toString('utf8', i + 4, i + 4 + buffer.readUInt32LE(i))));
    };
    ApiError.FileError = function (code, p) {
        return new ApiError(code, exports.ErrorStrings[code], p);
    };
    ApiError.ENOENT = function (path) {
        return this.FileError(ErrorCode.ENOENT, path);
    };
    ApiError.EEXIST = function (path) {
        return this.FileError(ErrorCode.EEXIST, path);
    };
    ApiError.EISDIR = function (path) {
        return this.FileError(ErrorCode.EISDIR, path);
    };
    ApiError.ENOTDIR = function (path) {
        return this.FileError(ErrorCode.ENOTDIR, path);
    };
    ApiError.EPERM = function (path) {
        return this.FileError(ErrorCode.EPERM, path);
    };
    ApiError.ENOTEMPTY = function (path) {
        return this.FileError(ErrorCode.ENOTEMPTY, path);
    };
    /**
     * @return A friendly error message.
     */
    ApiError.prototype.toString = function () {
        return this.message;
    };
    ApiError.prototype.toJSON = function () {
        return {
            errno: this.errno,
            code: this.code,
            path: this.path,
            stack: this.stack,
            message: this.message
        };
    };
    /**
     * Writes the API error into a buffer.
     */
    ApiError.prototype.writeToBuffer = function (buffer, i) {
        if (buffer === void 0) { buffer = Buffer.alloc(this.bufferSize()); }
        if (i === void 0) { i = 0; }
        var bytesWritten = buffer.write(JSON.stringify(this.toJSON()), i + 4);
        buffer.writeUInt32LE(bytesWritten, i);
        return buffer;
    };
    /**
     * The size of the API error in buffer-form in bytes.
     */
    ApiError.prototype.bufferSize = function () {
        // 4 bytes for string length.
        return 4 + Buffer.byteLength(JSON.stringify(this.toJSON()));
    };
    return ApiError;
}(Error));
exports.ApiError = ApiError;