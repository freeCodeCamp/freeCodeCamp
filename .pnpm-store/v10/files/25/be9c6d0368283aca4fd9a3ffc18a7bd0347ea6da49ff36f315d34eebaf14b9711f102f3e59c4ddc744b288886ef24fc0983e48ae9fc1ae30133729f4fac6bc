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
exports.EmscriptenFile = void 0;
var file_system_1 = require("../core/file_system");
var node_fs_stats_1 = require("../core/node_fs_stats");
var file_1 = require("../core/file");
var util_1 = require("../core/util");
var api_error_1 = require("../core/api_error");
/**
 * @hidden
 */
function convertError(e, path) {
    if (path === void 0) { path = ''; }
    var errno = e.errno;
    var parent = e.node;
    var paths = [];
    while (parent) {
        paths.unshift(parent.name);
        if (parent === parent.parent) {
            break;
        }
        parent = parent.parent;
    }
    return new api_error_1.ApiError(errno, api_error_1.ErrorStrings[errno], paths.length > 0 ? '/' + paths.join('/') : path);
}
var EmscriptenFile = /** @class */ (function (_super) {
    __extends(EmscriptenFile, _super);
    function EmscriptenFile(_fs, _FS, _path, _stream) {
        var _this = _super.call(this) || this;
        _this._fs = _fs;
        _this._FS = _FS;
        _this._path = _path;
        _this._stream = _stream;
        return _this;
    }
    EmscriptenFile.prototype.getPos = function () {
        return undefined;
    };
    EmscriptenFile.prototype.close = function (cb) {
        var err = null;
        try {
            this.closeSync();
        }
        catch (e) {
            err = e;
        }
        finally {
            cb(err);
        }
    };
    EmscriptenFile.prototype.closeSync = function () {
        try {
            this._FS.close(this._stream);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.stat = function (cb) {
        try {
            cb(null, this.statSync());
        }
        catch (e) {
            cb(e);
        }
    };
    EmscriptenFile.prototype.statSync = function () {
        try {
            return this._fs.statSync(this._path, false);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.truncate = function (len, cb) {
        var err = null;
        try {
            this.truncateSync(len);
        }
        catch (e) {
            err = e;
        }
        finally {
            cb(err);
        }
    };
    EmscriptenFile.prototype.truncateSync = function (len) {
        try {
            this._FS.ftruncate(this._stream.fd, len);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.write = function (buffer, offset, length, position, cb) {
        try {
            cb(null, this.writeSync(buffer, offset, length, position), buffer);
        }
        catch (e) {
            cb(e);
        }
    };
    EmscriptenFile.prototype.writeSync = function (buffer, offset, length, position) {
        try {
            var u8 = (0, util_1.buffer2Uint8array)(buffer);
            // Emscripten is particular about what position is set to.
            var emPosition = position === null ? undefined : position;
            return this._FS.write(this._stream, u8, offset, length, emPosition);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.read = function (buffer, offset, length, position, cb) {
        try {
            cb(null, this.readSync(buffer, offset, length, position), buffer);
        }
        catch (e) {
            cb(e);
        }
    };
    EmscriptenFile.prototype.readSync = function (buffer, offset, length, position) {
        try {
            var u8 = (0, util_1.buffer2Uint8array)(buffer);
            // Emscripten is particular about what position is set to.
            var emPosition = position === null ? undefined : position;
            return this._FS.read(this._stream, u8, offset, length, emPosition);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.sync = function (cb) {
        // NOP.
        cb();
    };
    EmscriptenFile.prototype.syncSync = function () {
        // NOP.
    };
    EmscriptenFile.prototype.chown = function (uid, gid, cb) {
        var err = null;
        try {
            this.chownSync(uid, gid);
        }
        catch (e) {
            err = e;
        }
        finally {
            cb(err);
        }
    };
    EmscriptenFile.prototype.chownSync = function (uid, gid) {
        try {
            this._FS.fchown(this._stream.fd, uid, gid);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.chmod = function (mode, cb) {
        var err = null;
        try {
            this.chmodSync(mode);
        }
        catch (e) {
            err = e;
        }
        finally {
            cb(err);
        }
    };
    EmscriptenFile.prototype.chmodSync = function (mode) {
        try {
            this._FS.fchmod(this._stream.fd, mode);
        }
        catch (e) {
            throw convertError(e, this._path);
        }
    };
    EmscriptenFile.prototype.utimes = function (atime, mtime, cb) {
        var err = null;
        try {
            this.utimesSync(atime, mtime);
        }
        catch (e) {
            err = e;
        }
        finally {
            cb(err);
        }
    };
    EmscriptenFile.prototype.utimesSync = function (atime, mtime) {
        this._fs.utimesSync(this._path, atime, mtime);
    };
    return EmscriptenFile;
}(file_1.BaseFile));
exports.EmscriptenFile = EmscriptenFile;
/**
 * Mounts an Emscripten file system into the BrowserFS file system.
 */
var EmscriptenFileSystem = /** @class */ (function (_super) {
    __extends(EmscriptenFileSystem, _super);
    function EmscriptenFileSystem(_FS) {
        var _this = _super.call(this) || this;
        _this._FS = _FS;
        return _this;
    }
    /**
     * Create an EmscriptenFileSystem instance with the given options.
     */
    EmscriptenFileSystem.Create = function (opts, cb) {
        cb(null, new EmscriptenFileSystem(opts.FS));
    };
    EmscriptenFileSystem.isAvailable = function () { return true; };
    EmscriptenFileSystem.prototype.getName = function () { return this._FS.DB_NAME(); };
    EmscriptenFileSystem.prototype.isReadOnly = function () { return false; };
    EmscriptenFileSystem.prototype.supportsLinks = function () { return true; };
    EmscriptenFileSystem.prototype.supportsProps = function () { return true; };
    EmscriptenFileSystem.prototype.supportsSynch = function () { return true; };
    EmscriptenFileSystem.prototype.renameSync = function (oldPath, newPath) {
        try {
            this._FS.rename(oldPath, newPath);
        }
        catch (e) {
            if (e.errno === api_error_1.ErrorCode.ENOENT) {
                throw convertError(e, this.existsSync(oldPath) ? newPath : oldPath);
            }
            else {
                throw convertError(e);
            }
        }
    };
    EmscriptenFileSystem.prototype.statSync = function (p, isLstat) {
        try {
            var stats = isLstat ? this._FS.lstat(p) : this._FS.stat(p);
            var itemType = this.modeToFileType(stats.mode);
            return new node_fs_stats_1.default(itemType, stats.size, stats.mode, stats.atime.getTime(), stats.mtime.getTime(), stats.ctime.getTime());
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.openSync = function (p, flag, mode) {
        try {
            var stream = this._FS.open(p, flag.getFlagString(), mode);
            if (this._FS.isDir(stream.node.mode)) {
                this._FS.close(stream);
                throw api_error_1.ApiError.EISDIR(p);
            }
            return new EmscriptenFile(this, this._FS, p, stream);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.unlinkSync = function (p) {
        try {
            this._FS.unlink(p);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.rmdirSync = function (p) {
        try {
            this._FS.rmdir(p);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.mkdirSync = function (p, mode) {
        try {
            this._FS.mkdir(p, mode);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.readdirSync = function (p) {
        try {
            // Emscripten returns items for '.' and '..'. Node does not.
            return this._FS.readdir(p).filter(function (p) { return p !== '.' && p !== '..'; });
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.truncateSync = function (p, len) {
        try {
            this._FS.truncate(p, len);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.readFileSync = function (p, encoding, flag) {
        try {
            var data = this._FS.readFile(p, { flags: flag.getFlagString() });
            var buff = (0, util_1.uint8Array2Buffer)(data);
            if (encoding) {
                return buff.toString(encoding);
            }
            else {
                return buff;
            }
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.writeFileSync = function (p, data, encoding, flag, mode) {
        try {
            if (encoding) {
                data = Buffer.from(data, encoding);
            }
            var u8 = (0, util_1.buffer2Uint8array)(data);
            this._FS.writeFile(p, u8, { flags: flag.getFlagString(), encoding: 'binary' });
            this._FS.chmod(p, mode);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.chmodSync = function (p, isLchmod, mode) {
        try {
            isLchmod ? this._FS.lchmod(p, mode) : this._FS.chmod(p, mode);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.chownSync = function (p, isLchown, uid, gid) {
        try {
            isLchown ? this._FS.lchown(p, uid, gid) : this._FS.chown(p, uid, gid);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.symlinkSync = function (srcpath, dstpath, type) {
        try {
            this._FS.symlink(srcpath, dstpath);
        }
        catch (e) {
            throw convertError(e);
        }
    };
    EmscriptenFileSystem.prototype.readlinkSync = function (p) {
        try {
            return this._FS.readlink(p);
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.utimesSync = function (p, atime, mtime) {
        try {
            this._FS.utime(p, atime.getTime(), mtime.getTime());
        }
        catch (e) {
            throw convertError(e, p);
        }
    };
    EmscriptenFileSystem.prototype.modeToFileType = function (mode) {
        if (this._FS.isDir(mode)) {
            return node_fs_stats_1.FileType.DIRECTORY;
        }
        else if (this._FS.isFile(mode)) {
            return node_fs_stats_1.FileType.FILE;
        }
        else if (this._FS.isLink(mode)) {
            return node_fs_stats_1.FileType.SYMLINK;
        }
        else {
            throw api_error_1.ApiError.EPERM("Invalid mode: ".concat(mode));
        }
    };
    EmscriptenFileSystem.Name = "EmscriptenFileSystem";
    EmscriptenFileSystem.Options = {
        FS: {
            type: "object",
            description: "The Emscripten file system to use (the `FS` variable)"
        }
    };
    return EmscriptenFileSystem;
}(file_system_1.SynchronousFileSystem));
exports.default = EmscriptenFileSystem;