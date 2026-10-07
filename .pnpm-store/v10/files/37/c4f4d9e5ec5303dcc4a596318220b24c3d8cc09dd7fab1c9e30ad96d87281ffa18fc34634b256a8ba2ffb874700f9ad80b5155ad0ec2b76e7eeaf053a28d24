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
exports.NoSyncFile = void 0;
var file_1 = require("../core/file");
var node_fs_stats_1 = require("../core/node_fs_stats");
var api_error_1 = require("../core/api_error");
var node_fs_1 = require("../core/node_fs");
var util_1 = require("../core/util");
/**
 * An implementation of the File interface that operates on a file that is
 * completely in-memory. PreloadFiles are backed by a Buffer.
 *
 * This is also an abstract class, as it lacks an implementation of 'sync' and
 * 'close'. Each filesystem that wishes to use this file representation must
 * extend this class and implement those two methods.
 * @todo 'close' lever that disables functionality once closed.
 */
var PreloadFile = /** @class */ (function (_super) {
    __extends(PreloadFile, _super);
    /**
     * Creates a file with the given path and, optionally, the given contents. Note
     * that, if contents is specified, it will be mutated by the file!
     * @param _fs The file system that created the file.
     * @param _path
     * @param _mode The mode that the file was opened using.
     *   Dictates permissions and where the file pointer starts.
     * @param _stat The stats object for the given file.
     *   PreloadFile will mutate this object. Note that this object must contain
     *   the appropriate mode that the file was opened as.
     * @param contents A buffer containing the entire
     *   contents of the file. PreloadFile will mutate this buffer. If not
     *   specified, we assume it is a new file.
     */
    function PreloadFile(_fs, _path, _flag, _stat, contents) {
        var _this = _super.call(this) || this;
        _this._pos = 0;
        _this._dirty = false;
        _this._fs = _fs;
        _this._path = _path;
        _this._flag = _flag;
        _this._stat = _stat;
        _this._buffer = contents ? contents : (0, util_1.emptyBuffer)();
        // Note: This invariant is *not* maintained once the file starts getting
        // modified.
        // Note: Only actually matters if file is readable, as writeable modes may
        // truncate/append to file.
        if (_this._stat.size !== _this._buffer.length && _this._flag.isReadable()) {
            throw new Error("Invalid buffer: Buffer is ".concat(_this._buffer.length, " long, yet Stats object specifies that file is ").concat(_this._stat.size, " long."));
        }
        return _this;
    }
    /**
     * NONSTANDARD: Get the underlying buffer for this file. !!DO NOT MUTATE!! Will mess up dirty tracking.
     */
    PreloadFile.prototype.getBuffer = function () {
        return this._buffer;
    };
    /**
     * NONSTANDARD: Get underlying stats for this file. !!DO NOT MUTATE!!
     */
    PreloadFile.prototype.getStats = function () {
        return this._stat;
    };
    PreloadFile.prototype.getFlag = function () {
        return this._flag;
    };
    /**
     * Get the path to this file.
     * @return [String] The path to the file.
     */
    PreloadFile.prototype.getPath = function () {
        return this._path;
    };
    /**
     * Get the current file position.
     *
     * We emulate the following bug mentioned in the Node documentation:
     * > On Linux, positional writes don't work when the file is opened in append
     *   mode. The kernel ignores the position argument and always appends the data
     *   to the end of the file.
     * @return [Number] The current file position.
     */
    PreloadFile.prototype.getPos = function () {
        if (this._flag.isAppendable()) {
            return this._stat.size;
        }
        return this._pos;
    };
    /**
     * Advance the current file position by the indicated number of positions.
     * @param [Number] delta
     */
    PreloadFile.prototype.advancePos = function (delta) {
        return this._pos += delta;
    };
    /**
     * Set the file position.
     * @param [Number] newPos
     */
    PreloadFile.prototype.setPos = function (newPos) {
        return this._pos = newPos;
    };
    /**
     * **Core**: Asynchronous sync. Must be implemented by subclasses of this
     * class.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    PreloadFile.prototype.sync = function (cb) {
        try {
            this.syncSync();
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * **Core**: Synchronous sync.
     */
    PreloadFile.prototype.syncSync = function () {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    /**
     * **Core**: Asynchronous close. Must be implemented by subclasses of this
     * class.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    PreloadFile.prototype.close = function (cb) {
        try {
            this.closeSync();
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * **Core**: Synchronous close.
     */
    PreloadFile.prototype.closeSync = function () {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    /**
     * Asynchronous `stat`.
     * @param [Function(BrowserFS.ApiError, BrowserFS.node.fs.Stats)] cb
     */
    PreloadFile.prototype.stat = function (cb) {
        try {
            cb(null, node_fs_stats_1.default.clone(this._stat));
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * Synchronous `stat`.
     */
    PreloadFile.prototype.statSync = function () {
        return node_fs_stats_1.default.clone(this._stat);
    };
    /**
     * Asynchronous truncate.
     * @param [Number] len
     * @param [Function(BrowserFS.ApiError)] cb
     */
    PreloadFile.prototype.truncate = function (len, cb) {
        try {
            this.truncateSync(len);
            if (this._flag.isSynchronous() && !node_fs_1.default.getRootFS().supportsSynch()) {
                this.sync(cb);
            }
            cb();
        }
        catch (e) {
            return cb(e);
        }
    };
    /**
     * Synchronous truncate.
     * @param [Number] len
     */
    PreloadFile.prototype.truncateSync = function (len) {
        this._dirty = true;
        if (!this._flag.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, 'File not opened with a writeable mode.');
        }
        this._stat.mtimeMs = Date.now();
        if (len > this._buffer.length) {
            var buf = Buffer.alloc(len - this._buffer.length, 0);
            // Write will set @_stat.size for us.
            this.writeSync(buf, 0, buf.length, this._buffer.length);
            if (this._flag.isSynchronous() && node_fs_1.default.getRootFS().supportsSynch()) {
                this.syncSync();
            }
            return;
        }
        this._stat.size = len;
        // Truncate buffer to 'len'.
        var newBuff = Buffer.alloc(len);
        this._buffer.copy(newBuff, 0, 0, len);
        this._buffer = newBuff;
        if (this._flag.isSynchronous() && node_fs_1.default.getRootFS().supportsSynch()) {
            this.syncSync();
        }
    };
    /**
     * Write buffer to the file.
     * Note that it is unsafe to use fs.write multiple times on the same file
     * without waiting for the callback.
     * @param [BrowserFS.node.Buffer] buffer Buffer containing the data to write to
     *  the file.
     * @param [Number] offset Offset in the buffer to start reading data from.
     * @param [Number] length The amount of bytes to write to the file.
     * @param [Number] position Offset from the beginning of the file where this
     *   data should be written. If position is null, the data will be written at
     *   the current position.
     * @param [Function(BrowserFS.ApiError, Number, BrowserFS.node.Buffer)]
     *   cb The number specifies the number of bytes written into the file.
     */
    PreloadFile.prototype.write = function (buffer, offset, length, position, cb) {
        try {
            cb(null, this.writeSync(buffer, offset, length, position), buffer);
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * Write buffer to the file.
     * Note that it is unsafe to use fs.writeSync multiple times on the same file
     * without waiting for the callback.
     * @param [BrowserFS.node.Buffer] buffer Buffer containing the data to write to
     *  the file.
     * @param [Number] offset Offset in the buffer to start reading data from.
     * @param [Number] length The amount of bytes to write to the file.
     * @param [Number] position Offset from the beginning of the file where this
     *   data should be written. If position is null, the data will be written at
     *   the current position.
     * @return [Number]
     */
    PreloadFile.prototype.writeSync = function (buffer, offset, length, position) {
        this._dirty = true;
        if (position === undefined || position === null) {
            position = this.getPos();
        }
        if (!this._flag.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, 'File not opened with a writeable mode.');
        }
        var endFp = position + length;
        if (endFp > this._stat.size) {
            this._stat.size = endFp;
            if (endFp > this._buffer.length) {
                // Extend the buffer!
                var newBuff = Buffer.alloc(endFp);
                this._buffer.copy(newBuff);
                this._buffer = newBuff;
            }
        }
        var len = buffer.copy(this._buffer, position, offset, offset + length);
        this._stat.mtimeMs = Date.now();
        if (this._flag.isSynchronous()) {
            this.syncSync();
            return len;
        }
        this.setPos(position + len);
        return len;
    };
    /**
     * Read data from the file.
     * @param [BrowserFS.node.Buffer] buffer The buffer that the data will be
     *   written to.
     * @param [Number] offset The offset within the buffer where writing will
     *   start.
     * @param [Number] length An integer specifying the number of bytes to read.
     * @param [Number] position An integer specifying where to begin reading from
     *   in the file. If position is null, data will be read from the current file
     *   position.
     * @param [Function(BrowserFS.ApiError, Number, BrowserFS.node.Buffer)] cb The
     *   number is the number of bytes read
     */
    PreloadFile.prototype.read = function (buffer, offset, length, position, cb) {
        try {
            cb(null, this.readSync(buffer, offset, length, position), buffer);
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * Read data from the file.
     * @param [BrowserFS.node.Buffer] buffer The buffer that the data will be
     *   written to.
     * @param [Number] offset The offset within the buffer where writing will
     *   start.
     * @param [Number] length An integer specifying the number of bytes to read.
     * @param [Number] position An integer specifying where to begin reading from
     *   in the file. If position is null, data will be read from the current file
     *   position.
     * @return [Number]
     */
    PreloadFile.prototype.readSync = function (buffer, offset, length, position) {
        if (!this._flag.isReadable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, 'File not opened with a readable mode.');
        }
        if (position === undefined || position === null) {
            position = this.getPos();
        }
        var endRead = position + length;
        if (endRead > this._stat.size) {
            length = this._stat.size - position;
        }
        var rv = this._buffer.copy(buffer, offset, position, position + length);
        this._stat.atimeMs = Date.now();
        this._pos = position + length;
        return rv;
    };
    /**
     * Asynchronous `fchmod`.
     * @param [Number|String] mode
     * @param [Function(BrowserFS.ApiError)] cb
     */
    PreloadFile.prototype.chmod = function (mode, cb) {
        try {
            this.chmodSync(mode);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * Asynchronous `fchmod`.
     * @param [Number] mode
     */
    PreloadFile.prototype.chmodSync = function (mode) {
        if (!this._fs.supportsProps()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
        }
        this._dirty = true;
        this._stat.chmod(mode);
        this.syncSync();
    };
    PreloadFile.prototype.isDirty = function () {
        return this._dirty;
    };
    /**
     * Resets the dirty bit. Should only be called after a sync has completed successfully.
     */
    PreloadFile.prototype.resetDirty = function () {
        this._dirty = false;
    };
    return PreloadFile;
}(file_1.BaseFile));
exports.default = PreloadFile;
/**
 * File class for the InMemory and XHR file systems.
 * Doesn't sync to anything, so it works nicely for memory-only files.
 */
var NoSyncFile = /** @class */ (function (_super) {
    __extends(NoSyncFile, _super);
    function NoSyncFile(_fs, _path, _flag, _stat, contents) {
        return _super.call(this, _fs, _path, _flag, _stat, contents) || this;
    }
    /**
     * Asynchronous sync. Doesn't do anything, simply calls the cb.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    NoSyncFile.prototype.sync = function (cb) {
        cb();
    };
    /**
     * Synchronous sync. Doesn't do anything.
     */
    NoSyncFile.prototype.syncSync = function () {
        // NOP.
    };
    /**
     * Asynchronous close. Doesn't do anything, simply calls the cb.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    NoSyncFile.prototype.close = function (cb) {
        cb();
    };
    /**
     * Synchronous close. Doesn't do anything.
     */
    NoSyncFile.prototype.closeSync = function () {
        // NOP.
    };
    return NoSyncFile;
}(PreloadFile));
exports.NoSyncFile = NoSyncFile;