"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var api_error_1 = require("./api_error");
var file_flag_1 = require("./file_flag");
var node_fs_stats_1 = require("./node_fs_stats");
var setImmediate_1 = require("../generic/setImmediate");
// Typing info only.
var file_watcher_1 = require("./file_watcher");
/** Used for unit testing. Defaults to a NOP. */
var wrapCbHook = function (cb, numArgs) {
    return cb;
};
/**
 * Wraps a callback function, ensuring it is invoked through setImmediate.
 * @hidden
 */
function wrapCb(cb, numArgs) {
    if (typeof cb !== 'function') {
        throw new Error('Callback must be a function.');
    }
    var hookedCb = wrapCbHook(cb, numArgs);
    // We could use `arguments`, but Function.call/apply is expensive. And we only
    // need to handle 1-3 arguments
    switch (numArgs) {
        case 1:
            return function (arg1) {
                (0, setImmediate_1.default)(function () {
                    return hookedCb(arg1);
                });
            };
        case 2:
            return function (arg1, arg2) {
                (0, setImmediate_1.default)(function () {
                    return hookedCb(arg1, arg2);
                });
            };
        case 3:
            return function (arg1, arg2, arg3) {
                (0, setImmediate_1.default)(function () {
                    return hookedCb(arg1, arg2, arg3);
                });
            };
        default:
            throw new Error('Invalid invocation of wrapCb.');
    }
}
/**
 * @hidden
 */
function assertRoot(fs) {
    if (fs) {
        return fs;
    }
    throw new api_error_1.ApiError(api_error_1.ErrorCode.EIO, "Initialize BrowserFS with a file system using BrowserFS.initialize(filesystem)");
}
/**
 * @hidden
 */
function normalizeMode(mode, def) {
    switch (typeof mode) {
        case 'number':
            // (path, flag, mode, cb?)
            return mode;
        case 'string':
            // (path, flag, modeString, cb?)
            var trueMode = parseInt(mode, 8);
            if (!isNaN(trueMode)) {
                return trueMode;
            }
            // Invalid string.
            return def;
        default:
            return def;
    }
}
/**
 * @hidden
 */
function normalizeTime(time) {
    if (time instanceof Date) {
        return time;
    }
    if (typeof time === 'number') {
        return new Date(time * 1000);
    }
    throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid time.");
}
/**
 * @hidden
 */
function normalizePath(p) {
    // Node doesn't allow null characters in paths.
    if (p.indexOf('\u0000') >= 0) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Path must be a string without null bytes.');
    }
    else if (p === '') {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Path must not be empty.');
    }
    return path.resolve(p);
}
/**
 * @hidden
 */
function normalizeOptions(options, defEnc, defFlag, defMode) {
    // typeof null === 'object' so special-case handing is needed.
    switch (options === null ? 'null' : typeof options) {
        case 'object':
            return {
                encoding: typeof options.encoding !== 'undefined' ? options.encoding : defEnc,
                flag: typeof options.flag !== 'undefined' ? options.flag : defFlag,
                mode: normalizeMode(options.mode, defMode)
            };
        case 'string':
            return {
                encoding: options,
                flag: defFlag,
                mode: defMode
            };
        case 'null':
        case 'undefined':
        case 'function':
            return {
                encoding: defEnc,
                flag: defFlag,
                mode: defMode
            };
        default:
            throw new TypeError("\"options\" must be a string or an object, got ".concat(typeof options, " instead."));
    }
}
/**
 * The default callback is a NOP.
 * @hidden
 * @private
 */
function nopCb() {
    // NOP.
}
/**
 * The node frontend to all filesystems.
 * This layer handles:
 *
 * * Sanity checking inputs.
 * * Normalizing paths.
 * * Resetting stack depth for asynchronous operations which may not go through
 *   the browser by wrapping all input callbacks using `setImmediate`.
 * * Performing the requested operation through the filesystem or the file
 *   descriptor, as appropriate.
 * * Handling optional arguments and setting default arguments.
 * @see http://nodejs.org/api/fs.html
 */
var FS = /** @class */ (function () {
    function FS() {
        this.root = null;
        this.fdMap = {};
        this.nextFd = 100;
        this.fileWatcher = new file_watcher_1.FileWatcher();
    }
    FS.prototype.initialize = function (rootFS) {
        if (!rootFS.constructor.isAvailable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Tried to instantiate BrowserFS with an unavailable file system.');
        }
        return this.root = rootFS;
    };
    /**
     * converts Date or number to a fractional UNIX timestamp
     * Grabbed from NodeJS sources (lib/fs.js)
     */
    FS.prototype._toUnixTimestamp = function (time) {
        if (typeof time === 'number') {
            return time;
        }
        if (time instanceof Date) {
            return time.getTime() / 1000;
        }
        throw new Error("Cannot parse time: " + time);
    };
    /**
     * **NONSTANDARD**: Grab the FileSystem instance that backs this API.
     * @return [BrowserFS.FileSystem | null] Returns null if the file system has
     *   not been initialized.
     */
    FS.prototype.getRootFS = function () {
        if (this.root) {
            return this.root;
        }
        return null;
    };
    // FILE OR DIRECTORY METHODS
    /**
     * Asynchronous rename. No arguments other than a possible exception are given
     * to the completion callback.
     * @param oldPath
     * @param newPath
     * @param callback
     */
    FS.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            (0, setImmediate_1.default)(function () {
                _this.fileWatcher.triggerWatch(oldPath, 'rename');
                _this.stat(newPath, function (err, stat) {
                    if (err) {
                        return;
                    }
                    _this.fileWatcher.triggerWatch(newPath, 'rename', stat);
                });
            });
            assertRoot(this.root).rename(normalizePath(oldPath), normalizePath(newPath), newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous rename.
     * @param oldPath
     * @param newPath
     */
    FS.prototype.renameSync = function (oldPath, newPath) {
        var _this = this;
        (0, setImmediate_1.default)(function () {
            _this.fileWatcher.triggerWatch(oldPath, 'rename');
            _this.fileWatcher.triggerWatch(newPath, 'rename');
        });
        assertRoot(this.root).renameSync(normalizePath(oldPath), normalizePath(newPath));
    };
    /**
     * Test whether or not the given path exists by checking with the file system.
     * Then call the callback argument with either true or false.
     * @example Sample invocation
     *   fs.exists('/etc/passwd', function (exists) {
     *     util.debug(exists ? "it's there" : "no passwd!");
     *   });
     * @param path
     * @param callback
     */
    FS.prototype.exists = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            return assertRoot(this.root).exists(normalizePath(path), newCb);
        }
        catch (e) {
            // Doesn't return an error. If something bad happens, we assume it just
            // doesn't exist.
            return newCb(false);
        }
    };
    /**
     * Test whether or not the given path exists by checking with the file system.
     * @param path
     * @return [boolean]
     */
    FS.prototype.existsSync = function (path) {
        try {
            return assertRoot(this.root).existsSync(normalizePath(path));
        }
        catch (e) {
            // Doesn't return an error. If something bad happens, we assume it just
            // doesn't exist.
            return false;
        }
    };
    /**
     * Asynchronous `stat`.
     * @param path
     * @param callback
     */
    FS.prototype.stat = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            return assertRoot(this.root).stat(normalizePath(path), false, newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    /**
     * Synchronous `stat`.
     * @param path
     * @return [BrowserFS.node.fs.Stats]
     */
    FS.prototype.statSync = function (path) {
        return assertRoot(this.root).statSync(normalizePath(path), false);
    };
    /**
     * Asynchronous `lstat`.
     * `lstat()` is identical to `stat()`, except that if path is a symbolic link,
     * then the link itself is stat-ed, not the file that it refers to.
     * @param path
     * @param callback
     */
    FS.prototype.lstat = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            return assertRoot(this.root).stat(normalizePath(path), true, newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    /**
     * Synchronous `lstat`.
     * `lstat()` is identical to `stat()`, except that if path is a symbolic link,
     * then the link itself is stat-ed, not the file that it refers to.
     * @param path
     * @return [BrowserFS.node.fs.Stats]
     */
    FS.prototype.lstatSync = function (path) {
        return assertRoot(this.root).statSync(normalizePath(path), true);
    };
    FS.prototype.truncate = function (path, arg2, cb) {
        var _this = this;
        if (arg2 === void 0) { arg2 = 0; }
        if (cb === void 0) { cb = nopCb; }
        var len = 0;
        if (typeof arg2 === 'function') {
            cb = arg2;
        }
        else if (typeof arg2 === 'number') {
            len = arg2;
        }
        var newCb = wrapCb(cb, 1);
        try {
            if (len < 0) {
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL);
            }
            (0, setImmediate_1.default)(function () {
                _this.stat(path, function (err, stat) {
                    _this.fileWatcher.triggerWatch(path, 'change', stat);
                });
            });
            return assertRoot(this.root).truncate(normalizePath(path), len, newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    /**
     * Synchronous `truncate`.
     * @param path
     * @param len
     */
    FS.prototype.truncateSync = function (path, len) {
        var _this = this;
        if (len === void 0) { len = 0; }
        if (len < 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL);
        }
        (0, setImmediate_1.default)(function () {
            _this.stat(path, function (err, stat) {
                _this.fileWatcher.triggerWatch(path, 'change', stat);
            });
        });
        return assertRoot(this.root).truncateSync(normalizePath(path), len);
    };
    /**
     * Asynchronous `unlink`.
     * @param path
     * @param callback
     */
    FS.prototype.unlink = function (path, cb) {
        var _this = this;
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            (0, setImmediate_1.default)(function () {
                _this.fileWatcher.triggerWatch(path, 'rename', new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, 0, undefined, 0, 0, 0, 0));
            });
            return assertRoot(this.root).unlink(normalizePath(path), newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    /**
     * Synchronous `unlink`.
     * @param path
     */
    FS.prototype.unlinkSync = function (path) {
        var _this = this;
        (0, setImmediate_1.default)(function () {
            _this.fileWatcher.triggerWatch(path, 'rename', new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, 0, undefined, 0, 0, 0, 0));
        });
        return assertRoot(this.root).unlinkSync(normalizePath(path));
    };
    FS.prototype.open = function (path, flag, arg2, cb) {
        var _this = this;
        if (cb === void 0) { cb = nopCb; }
        var mode = normalizeMode(arg2, 0x1a4);
        cb = typeof arg2 === 'function' ? arg2 : cb;
        var newCb = wrapCb(cb, 2);
        try {
            assertRoot(this.root).open(normalizePath(path), file_flag_1.FileFlag.getFileFlag(flag), mode, function (e, file) {
                if (file) {
                    newCb(e, _this.getFdForFile(file));
                }
                else {
                    newCb(e);
                }
            });
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous file open.
     * @see http://www.manpagez.com/man/2/open/
     * @param path
     * @param flags
     * @param mode defaults to `0644`
     * @return [BrowserFS.File]
     */
    FS.prototype.openSync = function (path, flag, mode) {
        if (mode === void 0) { mode = 0x1a4; }
        return this.getFdForFile(assertRoot(this.root).openSync(normalizePath(path), file_flag_1.FileFlag.getFileFlag(flag), normalizeMode(mode, 0x1a4)));
    };
    FS.prototype.readFile = function (filename, arg2, cb) {
        if (arg2 === void 0) { arg2 = {}; }
        if (cb === void 0) { cb = nopCb; }
        var options = normalizeOptions(arg2, null, 'r', null);
        cb = typeof arg2 === 'function' ? arg2 : cb;
        var newCb = wrapCb(cb, 2);
        try {
            var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
            if (!flag.isReadable()) {
                return newCb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to readFile must allow for reading.'));
            }
            return assertRoot(this.root).readFile(normalizePath(filename), options.encoding, flag, newCb);
        }
        catch (e) {
            return newCb(e);
        }
    };
    FS.prototype.readFileSync = function (filename, arg2) {
        if (arg2 === void 0) { arg2 = {}; }
        var options = normalizeOptions(arg2, null, 'r', null);
        var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
        if (!flag.isReadable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to readFile must allow for reading.');
        }
        return assertRoot(this.root).readFileSync(normalizePath(filename), options.encoding, flag);
    };
    FS.prototype.writeFile = function (filename, data, arg3, cb) {
        var _this = this;
        if (arg3 === void 0) { arg3 = {}; }
        if (cb === void 0) { cb = nopCb; }
        var options = normalizeOptions(arg3, 'utf8', 'w', 0x1a4);
        cb = typeof arg3 === 'function' ? arg3 : cb;
        var newCb = wrapCb(cb, 1);
        try {
            var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
            if (!flag.isWriteable()) {
                return newCb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to writeFile must allow for writing.'));
            }
            assertRoot(this.root).writeFile(normalizePath(filename), data, options.encoding, flag, options.mode, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                (0, setImmediate_1.default)(function () {
                    _this.stat(filename, function (_err, stat) {
                        _this.fileWatcher.triggerWatch(filename, 'change', stat);
                    });
                });
                newCb.apply(void 0, args);
            });
        }
        catch (e) {
            return newCb(e);
        }
    };
    FS.prototype.writeFileSync = function (filename, data, arg3) {
        var _this = this;
        var options = normalizeOptions(arg3, 'utf8', 'w', 0x1a4);
        var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
        if (!flag.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to writeFile must allow for writing.');
        }
        (0, setImmediate_1.default)(function () {
            _this.stat(filename, function (err, stat) {
                _this.fileWatcher.triggerWatch(filename, 'change', stat);
            });
        });
        return assertRoot(this.root).writeFileSync(normalizePath(filename), data, options.encoding, flag, options.mode);
    };
    FS.prototype.appendFile = function (filename, data, arg3, cb) {
        var _this = this;
        if (cb === void 0) { cb = nopCb; }
        var options = normalizeOptions(arg3, 'utf8', 'a', 0x1a4);
        cb = typeof arg3 === 'function' ? arg3 : cb;
        var newCb = wrapCb(cb, 1);
        try {
            var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
            if (!flag.isAppendable()) {
                return newCb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to appendFile must allow for appending.'));
            }
            (0, setImmediate_1.default)(function () {
                _this.stat(filename, function (err, stat) {
                    _this.fileWatcher.triggerWatch(filename, 'rename', stat);
                });
            });
            assertRoot(this.root).appendFile(normalizePath(filename), data, options.encoding, flag, options.mode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.appendFileSync = function (filename, data, arg3) {
        var _this = this;
        var options = normalizeOptions(arg3, 'utf8', 'a', 0x1a4);
        var flag = file_flag_1.FileFlag.getFileFlag(options.flag);
        if (!flag.isAppendable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Flag passed to appendFile must allow for appending.');
        }
        (0, setImmediate_1.default)(function () {
            _this.stat(filename, function (err, stat) {
                _this.fileWatcher.triggerWatch(filename, 'change', stat);
            });
        });
        return assertRoot(this.root).appendFileSync(normalizePath(filename), data, options.encoding, flag, options.mode);
    };
    // FILE DESCRIPTOR METHODS
    /**
     * Asynchronous `fstat`.
     * `fstat()` is identical to `stat()`, except that the file to be stat-ed is
     * specified by the file descriptor `fd`.
     * @param fd
     * @param callback
     */
    FS.prototype.fstat = function (fd, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            var file = this.fd2file(fd);
            file.stat(newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `fstat`.
     * `fstat()` is identical to `stat()`, except that the file to be stat-ed is
     * specified by the file descriptor `fd`.
     * @param fd
     * @return [BrowserFS.node.fs.Stats]
     */
    FS.prototype.fstatSync = function (fd) {
        return this.fd2file(fd).statSync();
    };
    /**
     * Asynchronous close.
     * @param fd
     * @param callback
     */
    FS.prototype.close = function (fd, cb) {
        var _this = this;
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            this.fd2file(fd).close(function (e) {
                if (!e) {
                    _this.closeFd(fd);
                }
                newCb(e);
            });
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous close.
     * @param fd
     */
    FS.prototype.closeSync = function (fd) {
        this.fd2file(fd).closeSync();
        this.closeFd(fd);
    };
    FS.prototype.ftruncate = function (fd, arg2, cb) {
        if (cb === void 0) { cb = nopCb; }
        var length = typeof arg2 === 'number' ? arg2 : 0;
        cb = typeof arg2 === 'function' ? arg2 : cb;
        var newCb = wrapCb(cb, 1);
        try {
            var file = this.fd2file(fd);
            if (length < 0) {
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL);
            }
            file.truncate(length, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous ftruncate.
     * @param fd
     * @param len
     */
    FS.prototype.ftruncateSync = function (fd, len) {
        if (len === void 0) { len = 0; }
        var file = this.fd2file(fd);
        if (len < 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL);
        }
        file.truncateSync(len);
    };
    /**
     * Asynchronous fsync.
     * @param fd
     * @param callback
     */
    FS.prototype.fsync = function (fd, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            this.fd2file(fd).sync(newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous fsync.
     * @param fd
     */
    FS.prototype.fsyncSync = function (fd) {
        this.fd2file(fd).syncSync();
    };
    /**
     * Asynchronous fdatasync.
     * @param fd
     * @param callback
     */
    FS.prototype.fdatasync = function (fd, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            this.fd2file(fd).datasync(newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous fdatasync.
     * @param fd
     */
    FS.prototype.fdatasyncSync = function (fd) {
        this.fd2file(fd).datasyncSync();
    };
    FS.prototype.write = function (fd, arg2, arg3, arg4, arg5, cb) {
        if (cb === void 0) { cb = nopCb; }
        var buffer;
        var offset;
        var length;
        var position = null;
        if (typeof arg2 === 'string') {
            // Signature 1: (fd, string, [position?, [encoding?]], cb?)
            var encoding = 'utf8';
            switch (typeof arg3) {
                case 'function':
                    // (fd, string, cb)
                    cb = arg3;
                    break;
                case 'number':
                    // (fd, string, position, encoding?, cb?)
                    position = arg3;
                    encoding = typeof arg4 === 'string' ? arg4 : 'utf8';
                    cb = typeof arg5 === 'function' ? arg5 : cb;
                    break;
                default:
                    // ...try to find the callback and get out of here!
                    cb = typeof arg4 === 'function' ? arg4 : typeof arg5 === 'function' ? arg5 : cb;
                    return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Invalid arguments.'));
            }
            buffer = Buffer.from(arg2, encoding);
            offset = 0;
            length = buffer.length;
        }
        else {
            // Signature 2: (fd, buffer, offset, length, position?, cb?)
            buffer = arg2;
            offset = arg3;
            length = arg4;
            position = typeof arg5 === 'number' ? arg5 : null;
            cb = typeof arg5 === 'function' ? arg5 : cb;
        }
        var newCb = wrapCb(cb, 3);
        try {
            var file = this.fd2file(fd);
            if (position === undefined || position === null) {
                position = file.getPos();
            }
            file.write(buffer, offset, length, position, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.writeSync = function (fd, arg2, arg3, arg4, arg5) {
        var buffer;
        var offset = 0;
        var length;
        var position;
        if (typeof arg2 === 'string') {
            // Signature 1: (fd, string, [position?, [encoding?]])
            position = typeof arg3 === 'number' ? arg3 : null;
            var encoding = typeof arg4 === 'string' ? arg4 : 'utf8';
            offset = 0;
            buffer = Buffer.from(arg2, encoding);
            length = buffer.length;
        }
        else {
            // Signature 2: (fd, buffer, offset, length, position?)
            buffer = arg2;
            offset = arg3;
            length = arg4;
            position = typeof arg5 === 'number' ? arg5 : null;
        }
        var file = this.fd2file(fd);
        if (position === undefined || position === null) {
            position = file.getPos();
        }
        return file.writeSync(buffer, offset, length, position);
    };
    FS.prototype.read = function (fd, arg2, arg3, arg4, arg5, cb) {
        if (cb === void 0) { cb = nopCb; }
        var position;
        var offset;
        var length;
        var buffer;
        var newCb;
        if (typeof arg2 === 'number') {
            // legacy interface
            // (fd, length, position, encoding, callback)
            length = arg2;
            position = arg3;
            var encoding_1 = arg4;
            cb = typeof arg5 === 'function' ? arg5 : cb;
            offset = 0;
            buffer = Buffer.alloc(length);
            // XXX: Inefficient.
            // Wrap the cb so we shelter upper layers of the API from these
            // shenanigans.
            newCb = wrapCb(function (err, bytesRead, buf) {
                if (err) {
                    return cb(err);
                }
                cb(err, buf.toString(encoding_1), bytesRead);
            }, 3);
        }
        else {
            buffer = arg2;
            offset = arg3;
            length = arg4;
            position = arg5;
            newCb = wrapCb(cb, 3);
        }
        try {
            var file = this.fd2file(fd);
            if (position === undefined || position === null) {
                position = file.getPos();
            }
            file.read(buffer, offset, length, position, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    FS.prototype.readSync = function (fd, arg2, arg3, arg4, arg5) {
        var shenanigans = false;
        var buffer;
        var offset;
        var length;
        var position;
        var encoding = 'utf8';
        if (typeof arg2 === 'number') {
            length = arg2;
            position = arg3;
            encoding = arg4;
            offset = 0;
            buffer = Buffer.alloc(length);
            shenanigans = true;
        }
        else {
            buffer = arg2;
            offset = arg3;
            length = arg4;
            position = arg5;
        }
        var file = this.fd2file(fd);
        if (position === undefined || position === null) {
            position = file.getPos();
        }
        var rv = file.readSync(buffer, offset, length, position);
        if (!shenanigans) {
            return rv;
        }
        return [buffer.toString(encoding), rv];
    };
    /**
     * Asynchronous `fchown`.
     * @param fd
     * @param uid
     * @param gid
     * @param callback
     */
    FS.prototype.fchown = function (fd, uid, gid, callback) {
        if (callback === void 0) { callback = nopCb; }
        var newCb = wrapCb(callback, 1);
        try {
            this.fd2file(fd).chown(uid, gid, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `fchown`.
     * @param fd
     * @param uid
     * @param gid
     */
    FS.prototype.fchownSync = function (fd, uid, gid) {
        this.fd2file(fd).chownSync(uid, gid);
    };
    /**
     * Asynchronous `fchmod`.
     * @param fd
     * @param mode
     * @param callback
     */
    FS.prototype.fchmod = function (fd, mode, cb) {
        var newCb = wrapCb(cb, 1);
        try {
            var numMode = typeof mode === 'string' ? parseInt(mode, 8) : mode;
            this.fd2file(fd).chmod(numMode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `fchmod`.
     * @param fd
     * @param mode
     */
    FS.prototype.fchmodSync = function (fd, mode) {
        var numMode = typeof mode === 'string' ? parseInt(mode, 8) : mode;
        this.fd2file(fd).chmodSync(numMode);
    };
    /**
     * Change the file timestamps of a file referenced by the supplied file
     * descriptor.
     * @param fd
     * @param atime
     * @param mtime
     * @param callback
     */
    FS.prototype.futimes = function (fd, atime, mtime, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            var file = this.fd2file(fd);
            if (typeof atime === 'number') {
                atime = new Date(atime * 1000);
            }
            if (typeof mtime === 'number') {
                mtime = new Date(mtime * 1000);
            }
            file.utimes(atime, mtime, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Change the file timestamps of a file referenced by the supplied file
     * descriptor.
     * @param fd
     * @param atime
     * @param mtime
     */
    FS.prototype.futimesSync = function (fd, atime, mtime) {
        this.fd2file(fd).utimesSync(normalizeTime(atime), normalizeTime(mtime));
    };
    // DIRECTORY-ONLY METHODS
    /**
     * Asynchronous `rmdir`.
     * @param path
     * @param callback
     */
    FS.prototype.rmdir = function (path, cb) {
        var _this = this;
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            path = normalizePath(path);
            (0, setImmediate_1.default)(function () {
                _this.fileWatcher.triggerWatch(path, 'rename');
            });
            assertRoot(this.root).rmdir(path, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `rmdir`.
     * @param path
     */
    FS.prototype.rmdirSync = function (path) {
        var _this = this;
        path = normalizePath(path);
        (0, setImmediate_1.default)(function () {
            _this.fileWatcher.triggerWatch(path, 'rename');
        });
        return assertRoot(this.root).rmdirSync(path);
    };
    /**
     * Asynchronous `mkdir`.
     * @param path
     * @param mode defaults to `0777`
     * @param callback
     */
    FS.prototype.mkdir = function (path, mode, cb) {
        var _this = this;
        if (cb === void 0) { cb = nopCb; }
        if (typeof mode === 'function') {
            cb = mode;
            mode = 0x1ff;
        }
        var newCb = wrapCb(cb, 1);
        try {
            path = normalizePath(path);
            (0, setImmediate_1.default)(function () {
                _this.fileWatcher.triggerWatch(path, 'rename');
            });
            assertRoot(this.root).mkdir(path, mode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `mkdir`.
     * @param path
     * @param mode defaults to `0777`
     */
    FS.prototype.mkdirSync = function (path, mode) {
        var _this = this;
        (0, setImmediate_1.default)(function () {
            _this.fileWatcher.triggerWatch(path, 'rename');
        });
        assertRoot(this.root).mkdirSync(normalizePath(path), normalizeMode(mode, 0x1ff));
    };
    /**
     * Asynchronous `readdir`. Reads the contents of a directory.
     * The callback gets two arguments `(err, files)` where `files` is an array of
     * the names of the files in the directory excluding `'.'` and `'..'`.
     * @param path
     * @param callback
     */
    FS.prototype.readdir = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            path = normalizePath(path);
            assertRoot(this.root).readdir(path, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `readdir`. Reads the contents of a directory.
     * @param path
     * @return [String[]]
     */
    FS.prototype.readdirSync = function (path) {
        path = normalizePath(path);
        return assertRoot(this.root).readdirSync(path);
    };
    // SYMLINK METHODS
    /**
     * Asynchronous `link`.
     * @param srcpath
     * @param dstpath
     * @param callback
     */
    FS.prototype.link = function (srcpath, dstpath, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            srcpath = normalizePath(srcpath);
            dstpath = normalizePath(dstpath);
            assertRoot(this.root).link(srcpath, dstpath, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `link`.
     * @param srcpath
     * @param dstpath
     */
    FS.prototype.linkSync = function (srcpath, dstpath) {
        srcpath = normalizePath(srcpath);
        dstpath = normalizePath(dstpath);
        return assertRoot(this.root).linkSync(srcpath, dstpath);
    };
    FS.prototype.symlink = function (srcpath, dstpath, arg3, cb) {
        if (cb === void 0) { cb = nopCb; }
        var type = typeof arg3 === 'string' ? arg3 : 'file';
        cb = typeof arg3 === 'function' ? arg3 : cb;
        var newCb = wrapCb(cb, 1);
        try {
            if (type !== 'file' && type !== 'dir') {
                return newCb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid type: " + type));
            }
            srcpath = normalizePath(srcpath);
            dstpath = normalizePath(dstpath);
            assertRoot(this.root).symlink(srcpath, dstpath, type, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `symlink`.
     * @param srcpath
     * @param dstpath
     * @param type can be either `'dir'` or `'file'` (default is `'file'`)
     */
    FS.prototype.symlinkSync = function (srcpath, dstpath, type) {
        if (!type) {
            type = 'file';
        }
        else if (type !== 'file' && type !== 'dir') {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid type: " + type);
        }
        srcpath = normalizePath(srcpath);
        dstpath = normalizePath(dstpath);
        return assertRoot(this.root).symlinkSync(srcpath, dstpath, type);
    };
    /**
     * Asynchronous readlink.
     * @param path
     * @param callback
     */
    FS.prototype.readlink = function (path, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 2);
        try {
            path = normalizePath(path);
            assertRoot(this.root).readlink(path, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous readlink.
     * @param path
     * @return [String]
     */
    FS.prototype.readlinkSync = function (path) {
        path = normalizePath(path);
        return assertRoot(this.root).readlinkSync(path);
    };
    // PROPERTY OPERATIONS
    /**
     * Asynchronous `chown`.
     * @param path
     * @param uid
     * @param gid
     * @param callback
     */
    FS.prototype.chown = function (path, uid, gid, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            path = normalizePath(path);
            assertRoot(this.root).chown(path, false, uid, gid, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `chown`.
     * @param path
     * @param uid
     * @param gid
     */
    FS.prototype.chownSync = function (path, uid, gid) {
        path = normalizePath(path);
        assertRoot(this.root).chownSync(path, false, uid, gid);
    };
    /**
     * Asynchronous `lchown`.
     * @param path
     * @param uid
     * @param gid
     * @param callback
     */
    FS.prototype.lchown = function (path, uid, gid, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            path = normalizePath(path);
            assertRoot(this.root).chown(path, true, uid, gid, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `lchown`.
     * @param path
     * @param uid
     * @param gid
     */
    FS.prototype.lchownSync = function (path, uid, gid) {
        path = normalizePath(path);
        assertRoot(this.root).chownSync(path, true, uid, gid);
    };
    /**
     * Asynchronous `chmod`.
     * @param path
     * @param mode
     * @param callback
     */
    FS.prototype.chmod = function (path, mode, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            var numMode = normalizeMode(mode, -1);
            if (numMode < 0) {
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid mode.");
            }
            assertRoot(this.root).chmod(normalizePath(path), false, numMode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `chmod`.
     * @param path
     * @param mode
     */
    FS.prototype.chmodSync = function (path, mode) {
        var numMode = normalizeMode(mode, -1);
        if (numMode < 0) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid mode.");
        }
        path = normalizePath(path);
        assertRoot(this.root).chmodSync(path, false, numMode);
    };
    /**
     * Asynchronous `lchmod`.
     * @param path
     * @param mode
     * @param callback
     */
    FS.prototype.lchmod = function (path, mode, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            var numMode = normalizeMode(mode, -1);
            if (numMode < 0) {
                throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid mode.");
            }
            assertRoot(this.root).chmod(normalizePath(path), true, numMode, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `lchmod`.
     * @param path
     * @param mode
     */
    FS.prototype.lchmodSync = function (path, mode) {
        var numMode = normalizeMode(mode, -1);
        if (numMode < 1) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Invalid mode.");
        }
        assertRoot(this.root).chmodSync(normalizePath(path), true, numMode);
    };
    /**
     * Change file timestamps of the file referenced by the supplied path.
     * @param path
     * @param atime
     * @param mtime
     * @param callback
     */
    FS.prototype.utimes = function (path, atime, mtime, cb) {
        if (cb === void 0) { cb = nopCb; }
        var newCb = wrapCb(cb, 1);
        try {
            assertRoot(this.root).utimes(normalizePath(path), normalizeTime(atime), normalizeTime(mtime), newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Change file timestamps of the file referenced by the supplied path.
     * @param path
     * @param atime
     * @param mtime
     */
    FS.prototype.utimesSync = function (path, atime, mtime) {
        assertRoot(this.root).utimesSync(normalizePath(path), normalizeTime(atime), normalizeTime(mtime));
    };
    FS.prototype.realpath = function (path, arg2, cb) {
        if (cb === void 0) { cb = nopCb; }
        var cache = typeof (arg2) === 'object' ? arg2 : {};
        cb = typeof (arg2) === 'function' ? arg2 : nopCb;
        var newCb = wrapCb(cb, 2);
        try {
            path = normalizePath(path);
            assertRoot(this.root).realpath(path, cache, newCb);
        }
        catch (e) {
            newCb(e);
        }
    };
    /**
     * Synchronous `realpath`.
     * @param path
     * @param cache An object literal of mapped paths that can be used to
     *   force a specific path resolution or avoid additional `fs.stat` calls for
     *   known real paths.
     * @return [String]
     */
    FS.prototype.realpathSync = function (path, cache) {
        if (cache === void 0) { cache = {}; }
        path = normalizePath(path);
        return assertRoot(this.root).realpathSync(path, cache);
    };
    FS.prototype.watchFile = function (filename, arg2, listener) {
        var _this = this;
        if (listener === void 0) { listener = nopCb; }
        this.stat(filename, function (err, stat) {
            var usedStat = stat;
            if (err) {
                usedStat = new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, 0, undefined, 0, 0, 0, 0);
            }
            _this.fileWatcher.watchFile(usedStat, filename, arg2, listener);
        });
    };
    FS.prototype.unwatchFile = function (filename, listener) {
        if (listener === void 0) { listener = nopCb; }
        this.fileWatcher.unwatchFile(filename, listener);
    };
    FS.prototype.watch = function (filename, arg2, listener) {
        if (listener === void 0) { listener = nopCb; }
        return this.fileWatcher.watch(filename, arg2, listener);
    };
    FS.prototype.access = function (path, arg2, cb) {
        if (cb === void 0) { cb = nopCb; }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.accessSync = function (path, mode) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.createReadStream = function (path, options) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    FS.prototype.createWriteStream = function (path, options) {
        throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP);
    };
    /**
     * For unit testing. Passes all incoming callbacks to cbWrapper for wrapping.
     */
    FS.prototype.wrapCallbacks = function (cbWrapper) {
        wrapCbHook = cbWrapper;
    };
    FS.prototype.getFdForFile = function (file) {
        var fd = this.nextFd++;
        this.fdMap[fd] = file;
        return fd;
    };
    FS.prototype.fd2file = function (fd) {
        var rv = this.fdMap[fd];
        if (rv) {
            return rv;
        }
        throw new api_error_1.ApiError(api_error_1.ErrorCode.EBADF, 'Invalid file descriptor.');
    };
    FS.prototype.closeFd = function (fd) {
        delete this.fdMap[fd];
    };
    /* tslint:disable:variable-name */
    // Exported fs.Stats.
    FS.Stats = node_fs_stats_1.default;
    /* tslint:enable:variable-name */
    FS.F_OK = 0;
    FS.R_OK = 4;
    FS.W_OK = 2;
    FS.X_OK = 1;
    return FS;
}());
exports.default = FS;