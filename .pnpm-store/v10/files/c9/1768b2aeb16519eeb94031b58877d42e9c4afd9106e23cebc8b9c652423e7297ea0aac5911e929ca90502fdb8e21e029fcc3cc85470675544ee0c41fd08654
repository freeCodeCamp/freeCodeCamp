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
exports.UnlockedOverlayFS = void 0;
var file_system_1 = require("../core/file_system");
var api_error_1 = require("../core/api_error");
var file_flag_1 = require("../core/file_flag");
var node_fs_stats_1 = require("../core/node_fs_stats");
var preload_file_1 = require("../generic/preload_file");
var locked_fs_1 = require("../generic/locked_fs");
var path = require("path");
/**
 * @hidden
 */
var deletionLogPath = '/.deletedFiles.log';
/**
 * Given a read-only mode, makes it writable.
 * @hidden
 */
function makeModeWritable(mode) {
    return 146 | mode;
}
/**
 * @hidden
 */
function getFlag(f) {
    return file_flag_1.FileFlag.getFileFlag(f);
}
/**
 * Overlays a RO file to make it writable.
 */
var OverlayFile = /** @class */ (function (_super) {
    __extends(OverlayFile, _super);
    function OverlayFile(fs, path, flag, stats, data) {
        return _super.call(this, fs, path, flag, stats, data) || this;
    }
    OverlayFile.prototype.sync = function (cb) {
        var _this = this;
        if (!this.isDirty()) {
            cb(null);
            return;
        }
        this._fs._syncAsync(this, function (err) {
            _this.resetDirty();
            cb(err);
        });
    };
    OverlayFile.prototype.syncSync = function () {
        if (this.isDirty()) {
            this._fs._syncSync(this);
            this.resetDirty();
        }
    };
    OverlayFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    OverlayFile.prototype.closeSync = function () {
        this.syncSync();
    };
    return OverlayFile;
}(preload_file_1.default));
/**
 * *INTERNAL, DO NOT USE DIRECTLY!*
 *
 * Core OverlayFS class that contains no locking whatsoever. We wrap these objects
 * in a LockedFS to prevent races.
 */
var UnlockedOverlayFS = /** @class */ (function (_super) {
    __extends(UnlockedOverlayFS, _super);
    function UnlockedOverlayFS(writable, readable) {
        var _this = _super.call(this) || this;
        _this._isInitialized = false;
        _this._initializeCallbacks = [];
        _this._deletedFiles = {};
        _this._deleteLog = '';
        // If 'true', we have scheduled a delete log update.
        _this._deleteLogUpdatePending = false;
        // If 'true', a delete log update is needed after the scheduled delete log
        // update finishes.
        _this._deleteLogUpdateNeeded = false;
        // If there was an error updating the delete log...
        _this._deleteLogError = null;
        _this._writable = writable;
        _this._readable = readable;
        if (_this._writable.isReadOnly()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Writable file system must be writable.");
        }
        return _this;
    }
    UnlockedOverlayFS.isAvailable = function () {
        return true;
    };
    UnlockedOverlayFS.prototype.getOverlayedFileSystems = function () {
        return {
            readable: this._readable,
            writable: this._writable
        };
    };
    UnlockedOverlayFS.prototype._syncAsync = function (file, cb) {
        var _this = this;
        this.createParentDirectoriesAsync(file.getPath(), function (err) {
            if (err) {
                return cb(err);
            }
            _this._writable.writeFile(file.getPath(), file.getBuffer(), null, getFlag('w'), file.getStats().mode, cb);
        });
    };
    UnlockedOverlayFS.prototype._syncSync = function (file) {
        this.createParentDirectories(file.getPath());
        this._writable.writeFileSync(file.getPath(), file.getBuffer(), null, getFlag('w'), file.getStats().mode);
    };
    UnlockedOverlayFS.prototype.getName = function () {
        return OverlayFS.Name;
    };
    /**
     * **INTERNAL METHOD**
     *
     * Called once to load up metadata stored on the writable file system.
     */
    UnlockedOverlayFS.prototype._initialize = function (cb) {
        var _this = this;
        var callbackArray = this._initializeCallbacks;
        var end = function (e) {
            _this._isInitialized = !e;
            _this._initializeCallbacks = [];
            callbackArray.forEach((function (cb) { return cb(e); }));
        };
        // if we're already initialized, immediately invoke the callback
        if (this._isInitialized) {
            return cb();
        }
        callbackArray.push(cb);
        // The first call to initialize initializes, the rest wait for it to complete.
        if (callbackArray.length !== 1) {
            return;
        }
        // Read deletion log, process into metadata.
        this._writable.readFile(deletionLogPath, 'utf8', getFlag('r'), function (err, data) {
            if (err) {
                // ENOENT === Newly-instantiated file system, and thus empty log.
                if (err.errno !== api_error_1.ErrorCode.ENOENT) {
                    return end(err);
                }
            }
            else {
                _this._deleteLog = data;
            }
            _this._reparseDeletionLog();
            end();
        });
    };
    UnlockedOverlayFS.prototype.isReadOnly = function () { return false; };
    UnlockedOverlayFS.prototype.supportsSynch = function () { return this._readable.supportsSynch() && this._writable.supportsSynch(); };
    UnlockedOverlayFS.prototype.supportsLinks = function () { return false; };
    UnlockedOverlayFS.prototype.supportsProps = function () { return this._readable.supportsProps() && this._writable.supportsProps(); };
    UnlockedOverlayFS.prototype.getDeletionLog = function () {
        return this._deleteLog;
    };
    UnlockedOverlayFS.prototype.restoreDeletionLog = function (log) {
        this._deleteLog = log;
        this._reparseDeletionLog();
        this.updateLog('');
    };
    UnlockedOverlayFS.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb) || this.checkPathAsync(oldPath, cb) || this.checkPathAsync(newPath, cb)) {
            return;
        }
        if (oldPath === deletionLogPath || newPath === deletionLogPath) {
            return cb(api_error_1.ApiError.EPERM('Cannot rename deletion log.'));
        }
        // nothing to do if paths match
        if (oldPath === newPath) {
            return cb();
        }
        this.stat(oldPath, false, function (oldErr, oldStats) {
            if (oldErr) {
                return cb(oldErr);
            }
            return _this.stat(newPath, false, function (newErr, newStats) {
                var self = _this;
                // precondition: both oldPath and newPath exist and are dirs.
                // decreases: |files|
                // Need to move *every file/folder* currently stored on
                // readable to its new location on writable.
                function copyDirContents(files) {
                    var file = files.shift();
                    if (!file) {
                        return cb();
                    }
                    var oldFile = path.resolve(oldPath, file);
                    var newFile = path.resolve(newPath, file);
                    // Recursion! Should work for any nested files / folders.
                    self.rename(oldFile, newFile, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        copyDirContents(files);
                    });
                }
                var mode = 511;
                // from linux's rename(2) manpage: oldpath can specify a
                // directory.  In this case, newpath must either not exist, or
                // it must specify an empty directory.
                if (oldStats.isDirectory()) {
                    if (newErr) {
                        if (newErr.errno !== api_error_1.ErrorCode.ENOENT) {
                            return cb(newErr);
                        }
                        return _this._writable.exists(oldPath, function (exists) {
                            // simple case - both old and new are on the writable layer
                            if (exists) {
                                return _this._writable.rename(oldPath, newPath, cb);
                            }
                            _this._writable.mkdir(newPath, mode, function (mkdirErr) {
                                if (mkdirErr) {
                                    return cb(mkdirErr);
                                }
                                _this._readable.readdir(oldPath, function (err, files) {
                                    if (err) {
                                        return cb();
                                    }
                                    copyDirContents(files);
                                });
                            });
                        });
                    }
                    mode = newStats.mode;
                    if (!newStats.isDirectory()) {
                        return cb(api_error_1.ApiError.ENOTDIR(newPath));
                    }
                    _this.readdir(newPath, function (readdirErr, files) {
                        if (files && files.length) {
                            return cb(api_error_1.ApiError.ENOTEMPTY(newPath));
                        }
                        _this._readable.readdir(oldPath, function (err, files) {
                            if (err) {
                                return cb();
                            }
                            copyDirContents(files);
                        });
                    });
                }
                if (newStats && newStats.isDirectory()) {
                    return cb(api_error_1.ApiError.EISDIR(newPath));
                }
                _this.readFile(oldPath, null, getFlag('r'), function (err, data) {
                    if (err) {
                        return cb(err);
                    }
                    return _this.writeFile(newPath, data, null, getFlag('w'), oldStats.mode, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        return _this.unlink(oldPath, cb);
                    });
                });
            });
        });
    };
    UnlockedOverlayFS.prototype.renameSync = function (oldPath, newPath) {
        var _this = this;
        this.checkInitialized();
        this.checkPath(oldPath);
        this.checkPath(newPath);
        if (oldPath === deletionLogPath || newPath === deletionLogPath) {
            throw api_error_1.ApiError.EPERM('Cannot rename deletion log.');
        }
        // Write newPath using oldPath's contents, delete oldPath.
        var oldStats = this.statSync(oldPath, false);
        if (oldStats.isDirectory()) {
            // Optimization: Don't bother moving if old === new.
            if (oldPath === newPath) {
                return;
            }
            var mode = 511;
            if (this.existsSync(newPath)) {
                var stats = this.statSync(newPath, false);
                mode = stats.mode;
                if (stats.isDirectory()) {
                    if (this.readdirSync(newPath).length > 0) {
                        throw api_error_1.ApiError.ENOTEMPTY(newPath);
                    }
                }
                else {
                    throw api_error_1.ApiError.ENOTDIR(newPath);
                }
            }
            // Take care of writable first. Move any files there, or create an empty directory
            // if it doesn't exist.
            if (this._writable.existsSync(oldPath)) {
                this._writable.renameSync(oldPath, newPath);
            }
            else if (!this._writable.existsSync(newPath)) {
                this._writable.mkdirSync(newPath, mode);
            }
            // Need to move *every file/folder* currently stored on readable to its new location
            // on writable.
            if (this._readable.existsSync(oldPath)) {
                this._readable.readdirSync(oldPath).forEach(function (name) {
                    // Recursion! Should work for any nested files / folders.
                    _this.renameSync(path.resolve(oldPath, name), path.resolve(newPath, name));
                });
            }
        }
        else {
            if (this.existsSync(newPath) && this.statSync(newPath, false).isDirectory()) {
                throw api_error_1.ApiError.EISDIR(newPath);
            }
            this.writeFileSync(newPath, this.readFileSync(oldPath, null, getFlag('r')), null, getFlag('w'), oldStats.mode);
        }
        if (oldPath !== newPath && this.existsSync(oldPath)) {
            this.unlinkSync(oldPath);
        }
    };
    UnlockedOverlayFS.prototype.stat = function (p, isLstat, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        this._writable.stat(p, isLstat, function (err, stat) {
            if (err && err.errno === api_error_1.ErrorCode.ENOENT) {
                if (_this._deletedFiles[p]) {
                    cb(api_error_1.ApiError.ENOENT(p));
                }
                _this._readable.stat(p, isLstat, function (err, stat) {
                    if (stat) {
                        // Make the oldStat's mode writable. Preserve the topmost
                        // part of the mode, which specifies if it is a file or a
                        // directory.
                        stat = node_fs_stats_1.default.clone(stat);
                        stat.mode = makeModeWritable(stat.mode);
                    }
                    cb(err, stat);
                });
            }
            else {
                cb(err, stat);
            }
        });
    };
    UnlockedOverlayFS.prototype.statSync = function (p, isLstat) {
        this.checkInitialized();
        try {
            return this._writable.statSync(p, isLstat);
        }
        catch (e) {
            if (this._deletedFiles[p]) {
                throw api_error_1.ApiError.ENOENT(p);
            }
            var oldStat = node_fs_stats_1.default.clone(this._readable.statSync(p, isLstat));
            // Make the oldStat's mode writable. Preserve the topmost part of the
            // mode, which specifies if it is a file or a directory.
            oldStat.mode = makeModeWritable(oldStat.mode);
            return oldStat;
        }
    };
    UnlockedOverlayFS.prototype.open = function (p, flag, mode, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb) || this.checkPathAsync(p, cb)) {
            return;
        }
        this.stat(p, false, function (err, stats) {
            if (stats) {
                switch (flag.pathExistsAction()) {
                    case file_flag_1.ActionType.TRUNCATE_FILE:
                        return _this.createParentDirectoriesAsync(p, function (err) {
                            if (err) {
                                return cb(err);
                            }
                            _this._writable.open(p, flag, mode, cb);
                        });
                    case file_flag_1.ActionType.NOP:
                        return _this._writable.exists(p, function (exists) {
                            if (exists) {
                                _this._writable.open(p, flag, mode, cb);
                            }
                            else {
                                // at this point we know the stats object we got is from
                                // the readable FS.
                                stats = node_fs_stats_1.default.clone(stats);
                                stats.mode = mode;
                                _this._readable.readFile(p, null, getFlag('r'), function (readFileErr, data) {
                                    if (readFileErr) {
                                        return cb(readFileErr);
                                    }
                                    if (stats.size === -1) {
                                        stats.size = data.length;
                                    }
                                    var f = new OverlayFile(_this, p, flag, stats, data);
                                    cb(null, f);
                                });
                            }
                        });
                    default:
                        return cb(api_error_1.ApiError.EEXIST(p));
                }
            }
            else {
                switch (flag.pathNotExistsAction()) {
                    case file_flag_1.ActionType.CREATE_FILE:
                        return _this.createParentDirectoriesAsync(p, function (err) {
                            if (err) {
                                return cb(err);
                            }
                            return _this._writable.open(p, flag, mode, cb);
                        });
                    default:
                        return cb(api_error_1.ApiError.ENOENT(p));
                }
            }
        });
    };
    UnlockedOverlayFS.prototype.openSync = function (p, flag, mode) {
        this.checkInitialized();
        this.checkPath(p);
        if (p === deletionLogPath) {
            throw api_error_1.ApiError.EPERM('Cannot open deletion log.');
        }
        if (this.existsSync(p)) {
            switch (flag.pathExistsAction()) {
                case file_flag_1.ActionType.TRUNCATE_FILE:
                    this.createParentDirectories(p);
                    return this._writable.openSync(p, flag, mode);
                case file_flag_1.ActionType.NOP:
                    if (this._writable.existsSync(p)) {
                        return this._writable.openSync(p, flag, mode);
                    }
                    else {
                        // Create an OverlayFile.
                        var buf = this._readable.readFileSync(p, null, getFlag('r'));
                        var stats = node_fs_stats_1.default.clone(this._readable.statSync(p, false));
                        stats.mode = mode;
                        return new OverlayFile(this, p, flag, stats, buf);
                    }
                default:
                    throw api_error_1.ApiError.EEXIST(p);
            }
        }
        else {
            switch (flag.pathNotExistsAction()) {
                case file_flag_1.ActionType.CREATE_FILE:
                    this.createParentDirectories(p);
                    return this._writable.openSync(p, flag, mode);
                default:
                    throw api_error_1.ApiError.ENOENT(p);
            }
        }
    };
    UnlockedOverlayFS.prototype.unlink = function (p, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb) || this.checkPathAsync(p, cb)) {
            return;
        }
        this.exists(p, function (exists) {
            if (!exists) {
                return cb(api_error_1.ApiError.ENOENT(p));
            }
            _this._writable.exists(p, function (writableExists) {
                if (writableExists) {
                    return _this._writable.unlink(p, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        _this.exists(p, function (readableExists) {
                            if (readableExists) {
                                _this.deletePath(p);
                            }
                            cb(null);
                        });
                    });
                }
                else {
                    // if this only exists on the readable FS, add it to the
                    // delete map.
                    _this.deletePath(p);
                    cb(null);
                }
            });
        });
    };
    UnlockedOverlayFS.prototype.unlinkSync = function (p) {
        this.checkInitialized();
        this.checkPath(p);
        if (this.existsSync(p)) {
            if (this._writable.existsSync(p)) {
                this._writable.unlinkSync(p);
            }
            // if it still exists add to the delete log
            if (this.existsSync(p)) {
                this.deletePath(p);
            }
        }
        else {
            throw api_error_1.ApiError.ENOENT(p);
        }
    };
    UnlockedOverlayFS.prototype.rmdir = function (p, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        var rmdirLower = function () {
            _this.readdir(p, function (err, files) {
                if (err) {
                    return cb(err);
                }
                if (files.length) {
                    return cb(api_error_1.ApiError.ENOTEMPTY(p));
                }
                _this.deletePath(p);
                cb(null);
            });
        };
        this.exists(p, function (exists) {
            if (!exists) {
                return cb(api_error_1.ApiError.ENOENT(p));
            }
            _this._writable.exists(p, function (writableExists) {
                if (writableExists) {
                    _this._writable.rmdir(p, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        _this._readable.exists(p, function (readableExists) {
                            if (readableExists) {
                                rmdirLower();
                            }
                            else {
                                cb();
                            }
                        });
                    });
                }
                else {
                    rmdirLower();
                }
            });
        });
    };
    UnlockedOverlayFS.prototype.rmdirSync = function (p) {
        this.checkInitialized();
        if (this.existsSync(p)) {
            if (this._writable.existsSync(p)) {
                this._writable.rmdirSync(p);
            }
            if (this.existsSync(p)) {
                // Check if directory is empty.
                if (this.readdirSync(p).length > 0) {
                    throw api_error_1.ApiError.ENOTEMPTY(p);
                }
                else {
                    this.deletePath(p);
                }
            }
        }
        else {
            throw api_error_1.ApiError.ENOENT(p);
        }
    };
    UnlockedOverlayFS.prototype.mkdir = function (p, mode, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.exists(p, function (exists) {
            if (exists) {
                return cb(api_error_1.ApiError.EEXIST(p));
            }
            // The below will throw should any of the parent directories
            // fail to exist on _writable.
            _this.createParentDirectoriesAsync(p, function (err) {
                if (err) {
                    return cb(err);
                }
                _this._writable.mkdir(p, mode, cb);
            });
        });
    };
    UnlockedOverlayFS.prototype.mkdirSync = function (p, mode) {
        this.checkInitialized();
        if (this.existsSync(p)) {
            throw api_error_1.ApiError.EEXIST(p);
        }
        else {
            // The below will throw should any of the parent directories fail to exist
            // on _writable.
            this.createParentDirectories(p);
            this._writable.mkdirSync(p, mode);
        }
    };
    UnlockedOverlayFS.prototype.readdir = function (p, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.stat(p, false, function (err, dirStats) {
            if (err) {
                return cb(err);
            }
            if (!dirStats.isDirectory()) {
                return cb(api_error_1.ApiError.ENOTDIR(p));
            }
            _this._writable.readdir(p, function (err, wFiles) {
                if (err && err.code !== 'ENOENT') {
                    return cb(err);
                }
                else if (err || !wFiles) {
                    wFiles = [];
                }
                _this._readable.readdir(p, function (err, rFiles) {
                    // if the directory doesn't exist on the lower FS set rFiles
                    // here to simplify the following code.
                    if (err || !rFiles) {
                        rFiles = [];
                    }
                    // Readdir in both, check delete log on read-only file system's files, merge, return.
                    var seenMap = {};
                    var filtered = wFiles.concat(rFiles.filter(function (fPath) {
                        return !_this._deletedFiles["".concat(p, "/").concat(fPath)];
                    })).filter(function (fPath) {
                        // Remove duplicates.
                        var result = !seenMap[fPath];
                        seenMap[fPath] = true;
                        return result;
                    });
                    cb(null, filtered);
                });
            });
        });
    };
    UnlockedOverlayFS.prototype.readdirSync = function (p) {
        var _this = this;
        this.checkInitialized();
        var dirStats = this.statSync(p, false);
        if (!dirStats.isDirectory()) {
            throw api_error_1.ApiError.ENOTDIR(p);
        }
        // Readdir in both, check delete log on RO file system's listing, merge, return.
        var contents = [];
        try {
            contents = contents.concat(this._writable.readdirSync(p));
        }
        catch (e) {
            // NOP.
        }
        try {
            contents = contents.concat(this._readable.readdirSync(p).filter(function (fPath) {
                return !_this._deletedFiles["".concat(p, "/").concat(fPath)];
            }));
        }
        catch (e) {
            // NOP.
        }
        var seenMap = {};
        return contents.filter(function (fileP) {
            var result = !seenMap[fileP];
            seenMap[fileP] = true;
            return result;
        });
    };
    UnlockedOverlayFS.prototype.exists = function (p, cb) {
        var _this = this;
        // Cannot pass an error back to callback, so throw an exception instead
        // if not initialized.
        this.checkInitialized();
        this._writable.exists(p, function (existsWritable) {
            if (existsWritable) {
                return cb(true);
            }
            _this._readable.exists(p, function (existsReadable) {
                cb(existsReadable && _this._deletedFiles[p] !== true);
            });
        });
    };
    UnlockedOverlayFS.prototype.existsSync = function (p) {
        this.checkInitialized();
        return this._writable.existsSync(p) || (this._readable.existsSync(p) && this._deletedFiles[p] !== true);
    };
    UnlockedOverlayFS.prototype.chmod = function (p, isLchmod, mode, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.operateOnWritableAsync(p, function (err) {
            if (err) {
                return cb(err);
            }
            else {
                _this._writable.chmod(p, isLchmod, mode, cb);
            }
        });
    };
    UnlockedOverlayFS.prototype.chmodSync = function (p, isLchmod, mode) {
        var _this = this;
        this.checkInitialized();
        this.operateOnWritable(p, function () {
            _this._writable.chmodSync(p, isLchmod, mode);
        });
    };
    UnlockedOverlayFS.prototype.chown = function (p, isLchmod, uid, gid, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.operateOnWritableAsync(p, function (err) {
            if (err) {
                return cb(err);
            }
            else {
                _this._writable.chown(p, isLchmod, uid, gid, cb);
            }
        });
    };
    UnlockedOverlayFS.prototype.chownSync = function (p, isLchown, uid, gid) {
        var _this = this;
        this.checkInitialized();
        this.operateOnWritable(p, function () {
            _this._writable.chownSync(p, isLchown, uid, gid);
        });
    };
    UnlockedOverlayFS.prototype.utimes = function (p, atime, mtime, cb) {
        var _this = this;
        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.operateOnWritableAsync(p, function (err) {
            if (err) {
                return cb(err);
            }
            else {
                _this._writable.utimes(p, atime, mtime, cb);
            }
        });
    };
    UnlockedOverlayFS.prototype.utimesSync = function (p, atime, mtime) {
        var _this = this;
        this.checkInitialized();
        this.operateOnWritable(p, function () {
            _this._writable.utimesSync(p, atime, mtime);
        });
    };
    UnlockedOverlayFS.prototype.deletePath = function (p) {
        this._deletedFiles[p] = true;
        this.updateLog("d".concat(p, "\n"));
    };
    UnlockedOverlayFS.prototype.updateLog = function (addition) {
        var _this = this;
        this._deleteLog += addition;
        if (this._deleteLogUpdatePending) {
            this._deleteLogUpdateNeeded = true;
        }
        else {
            this._deleteLogUpdatePending = true;
            this._writable.writeFile(deletionLogPath, this._deleteLog, 'utf8', file_flag_1.FileFlag.getFileFlag('w'), 420, function (e) {
                _this._deleteLogUpdatePending = false;
                if (e) {
                    _this._deleteLogError = e;
                }
                else if (_this._deleteLogUpdateNeeded) {
                    _this._deleteLogUpdateNeeded = false;
                    _this.updateLog('');
                }
            });
        }
    };
    UnlockedOverlayFS.prototype._reparseDeletionLog = function () {
        var _this = this;
        this._deletedFiles = {};
        this._deleteLog.split('\n').forEach(function (path) {
            // If the log entry begins w/ 'd', it's a deletion.
            _this._deletedFiles[path.slice(1)] = path.slice(0, 1) === 'd';
        });
    };
    UnlockedOverlayFS.prototype.checkInitialized = function () {
        if (!this._isInitialized) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, "OverlayFS is not initialized. Please initialize OverlayFS using its initialize() method before using it.");
        }
        else if (this._deleteLogError !== null) {
            var e = this._deleteLogError;
            this._deleteLogError = null;
            throw e;
        }
    };
    UnlockedOverlayFS.prototype.checkInitAsync = function (cb) {
        if (!this._isInitialized) {
            cb(new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, "OverlayFS is not initialized. Please initialize OverlayFS using its initialize() method before using it."));
            return false;
        }
        else if (this._deleteLogError !== null) {
            var e = this._deleteLogError;
            this._deleteLogError = null;
            cb(e);
            return false;
        }
        return true;
    };
    UnlockedOverlayFS.prototype.checkPath = function (p) {
        if (p === deletionLogPath) {
            throw api_error_1.ApiError.EPERM(p);
        }
    };
    UnlockedOverlayFS.prototype.checkPathAsync = function (p, cb) {
        if (p === deletionLogPath) {
            cb(api_error_1.ApiError.EPERM(p));
            return true;
        }
        return false;
    };
    UnlockedOverlayFS.prototype.createParentDirectoriesAsync = function (p, cb) {
        var parent = path.dirname(p);
        var toCreate = [];
        var self = this;
        this._writable.stat(parent, false, statDone);
        function statDone(err, stat) {
            if (err) {
                if (parent === "/") {
                    cb(new api_error_1.ApiError(api_error_1.ErrorCode.EBUSY, "Invariant failed: root does not exist!"));
                }
                else {
                    toCreate.push(parent);
                    parent = path.dirname(parent);
                    self._writable.stat(parent, false, statDone);
                }
            }
            else {
                createParents();
            }
        }
        function createParents() {
            if (!toCreate.length) {
                return cb();
            }
            var dir = toCreate.pop();
            self._readable.stat(dir, false, function (err, stats) {
                // stop if we couldn't read the dir
                if (!stats) {
                    return cb();
                }
                self._writable.mkdir(dir, stats.mode, function (err) {
                    if (err) {
                        return cb(err);
                    }
                    createParents();
                });
            });
        }
    };
    /**
     * With the given path, create the needed parent directories on the writable storage
     * should they not exist. Use modes from the read-only storage.
     */
    UnlockedOverlayFS.prototype.createParentDirectories = function (p) {
        var _this = this;
        var parent = path.dirname(p), toCreate = [];
        while (!this._writable.existsSync(parent)) {
            toCreate.push(parent);
            parent = path.dirname(parent);
        }
        toCreate = toCreate.reverse();
        toCreate.forEach(function (p) {
            _this._writable.mkdirSync(p, _this.statSync(p, false).mode);
        });
    };
    /**
     * Helper function:
     * - Ensures p is on writable before proceeding. Throws an error if it doesn't exist.
     * - Calls f to perform operation on writable.
     */
    UnlockedOverlayFS.prototype.operateOnWritable = function (p, f) {
        if (this.existsSync(p)) {
            if (!this._writable.existsSync(p)) {
                // File is on readable storage. Copy to writable storage before
                // changing its mode.
                this.copyToWritable(p);
            }
            f();
        }
        else {
            throw api_error_1.ApiError.ENOENT(p);
        }
    };
    UnlockedOverlayFS.prototype.operateOnWritableAsync = function (p, cb) {
        var _this = this;
        this.exists(p, function (exists) {
            if (!exists) {
                return cb(api_error_1.ApiError.ENOENT(p));
            }
            _this._writable.exists(p, function (existsWritable) {
                if (existsWritable) {
                    cb();
                }
                else {
                    return _this.copyToWritableAsync(p, cb);
                }
            });
        });
    };
    /**
     * Copy from readable to writable storage.
     * PRECONDITION: File does not exist on writable storage.
     */
    UnlockedOverlayFS.prototype.copyToWritable = function (p) {
        var pStats = this.statSync(p, false);
        if (pStats.isDirectory()) {
            this._writable.mkdirSync(p, pStats.mode);
        }
        else {
            this.writeFileSync(p, this._readable.readFileSync(p, null, getFlag('r')), null, getFlag('w'), this.statSync(p, false).mode);
        }
    };
    UnlockedOverlayFS.prototype.copyToWritableAsync = function (p, cb) {
        var _this = this;
        this.stat(p, false, function (err, pStats) {
            if (err) {
                return cb(err);
            }
            if (pStats.isDirectory()) {
                return _this._writable.mkdir(p, pStats.mode, cb);
            }
            // need to copy file.
            _this._readable.readFile(p, null, getFlag('r'), function (err, data) {
                if (err) {
                    return cb(err);
                }
                _this.writeFile(p, data, null, getFlag('w'), pStats.mode, cb);
            });
        });
    };
    return UnlockedOverlayFS;
}(file_system_1.BaseFileSystem));
exports.UnlockedOverlayFS = UnlockedOverlayFS;
/**
 * OverlayFS makes a read-only filesystem writable by storing writes on a second,
 * writable file system. Deletes are persisted via metadata stored on the writable
 * file system.
 */
var OverlayFS = /** @class */ (function (_super) {
    __extends(OverlayFS, _super);
    /**
     * @param writable The file system to write modified files to.
     * @param readable The file system that initially populates this file system.
     */
    function OverlayFS(writable, readable) {
        return _super.call(this, new UnlockedOverlayFS(writable, readable)) || this;
    }
    /**
     * Constructs and initializes an OverlayFS instance with the given options.
     */
    OverlayFS.Create = function (opts, cb) {
        try {
            var fs_1 = new OverlayFS(opts.writable, opts.readable);
            fs_1._initialize(function (e) {
                cb(e, fs_1);
            });
        }
        catch (e) {
            cb(e);
        }
    };
    OverlayFS.isAvailable = function () {
        return UnlockedOverlayFS.isAvailable();
    };
    OverlayFS.prototype.getOverlayedFileSystems = function () {
        return _super.prototype.getFSUnlocked.call(this).getOverlayedFileSystems();
    };
    OverlayFS.prototype.unwrap = function () {
        return _super.prototype.getFSUnlocked.call(this);
    };
    OverlayFS.prototype._initialize = function (cb) {
        _super.prototype.getFSUnlocked.call(this)._initialize(cb);
    };
    OverlayFS.Name = "OverlayFS";
    OverlayFS.Options = {
        writable: {
            type: "object",
            description: "The file system to write modified files to."
        },
        readable: {
            type: "object",
            description: "The file system that initially populates this file system."
        }
    };
    return OverlayFS;
}(locked_fs_1.default));
exports.default = OverlayFS;