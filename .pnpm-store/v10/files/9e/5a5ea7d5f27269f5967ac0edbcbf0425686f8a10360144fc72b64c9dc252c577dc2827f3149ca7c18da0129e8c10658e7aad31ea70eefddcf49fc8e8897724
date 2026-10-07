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
exports.HTML5FSFile = void 0;
var preload_file_1 = require("../generic/preload_file");
var file_system_1 = require("../core/file_system");
var api_error_1 = require("../core/api_error");
var file_flag_1 = require("../core/file_flag");
var node_fs_stats_1 = require("../core/node_fs_stats");
var path = require("path");
var global_1 = require("../core/global");
var async_1 = require("async");
var util_1 = require("../core/util");
/**
 * @hidden
 */
function isDirectoryEntry(entry) {
    return entry.isDirectory;
}
/**
 * @hidden
 */
var _getFS = global_1.default.webkitRequestFileSystem || global_1.default.requestFileSystem || null;
/**
 * @hidden
 */
function _requestQuota(type, size, success, errorCallback) {
    // We cast navigator and window to '<any>' because everything here is
    // nonstandard functionality, despite the fact that Chrome has the only
    // implementation of the HTML5FS and is likely driving the standardization
    // process. Thus, these objects defined off of navigator and window are not
    // present in the DefinitelyTyped TypeScript typings for FileSystem.
    if (typeof navigator['webkitPersistentStorage'] !== 'undefined') {
        switch (type) {
            case global_1.default.PERSISTENT:
                navigator.webkitPersistentStorage.requestQuota(size, success, errorCallback);
                break;
            case global_1.default.TEMPORARY:
                navigator.webkitTemporaryStorage.requestQuota(size, success, errorCallback);
                break;
            default:
                errorCallback(new TypeError("Invalid storage type: ".concat(type)));
                break;
        }
    }
    else {
        global_1.default.webkitStorageInfo.requestQuota(type, size, success, errorCallback);
    }
}
/**
 * @hidden
 */
function _toArray(list) {
    return Array.prototype.slice.call(list || [], 0);
}
/**
 * Converts the given DOMError into an appropriate ApiError.
 * @url https://developer.mozilla.org/en-US/docs/Web/API/DOMError
 * @hidden
 */
// @ts-ignore
function convertError(err, p, expectedDir) {
    switch (err.name) {
        /* The user agent failed to create a file or directory due to the existence of a file or
            directory with the same path.  */
        case "PathExistsError":
            return api_error_1.ApiError.EEXIST(p);
        /* The operation failed because it would cause the application to exceed its storage quota.  */
        case 'QuotaExceededError':
            return api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOSPC, p);
        /*  A required file or directory could not be found at the time an operation was processed.   */
        case 'NotFoundError':
            return api_error_1.ApiError.ENOENT(p);
        /* This is a security error code to be used in situations not covered by any other error codes.
            - A required file was unsafe for access within a Web application
            - Too many calls are being made on filesystem resources */
        case 'SecurityError':
            return api_error_1.ApiError.FileError(api_error_1.ErrorCode.EACCES, p);
        /* The modification requested was illegal. Examples of invalid modifications include moving a
            directory into its own child, moving a file into its parent directory without changing its name,
            or copying a directory to a path occupied by a file.  */
        case 'InvalidModificationError':
            return api_error_1.ApiError.FileError(api_error_1.ErrorCode.EPERM, p);
        /* The user has attempted to look up a file or directory, but the Entry found is of the wrong type
            [e.g. is a DirectoryEntry when the user requested a FileEntry].  */
        case 'TypeMismatchError':
            return api_error_1.ApiError.FileError(expectedDir ? api_error_1.ErrorCode.ENOTDIR : api_error_1.ErrorCode.EISDIR, p);
        /* A path or URL supplied to the API was malformed.  */
        case "EncodingError":
        /* An operation depended on state cached in an interface object, but that state that has changed
            since it was read from disk.  */
        case "InvalidStateError":
        /* The user attempted to write to a file or directory which could not be modified due to the state
            of the underlying filesystem.  */
        case "NoModificationAllowedError":
        default:
            return api_error_1.ApiError.FileError(api_error_1.ErrorCode.EINVAL, p);
    }
}
// A note about getFile and getDirectory options:
// These methods are called at numerous places in this file, and are passed
// some combination of these two options:
//   - create: If true, the entry will be created if it doesn't exist.
//             If false, an error will be thrown if it doesn't exist.
//   - exclusive: If true, only create the entry if it doesn't already exist,
//                and throw an error if it does.
var HTML5FSFile = /** @class */ (function (_super) {
    __extends(HTML5FSFile, _super);
    function HTML5FSFile(fs, entry, path, flag, stat, contents) {
        var _this = _super.call(this, fs, path, flag, stat, contents) || this;
        _this._entry = entry;
        return _this;
    }
    HTML5FSFile.prototype.sync = function (cb) {
        var _this = this;
        if (!this.isDirty()) {
            return cb();
        }
        this._entry.createWriter(function (writer) {
            var buffer = _this.getBuffer();
            var blob = new Blob([(0, util_1.buffer2ArrayBuffer)(buffer)]);
            var length = blob.size;
            writer.onwriteend = function (err) {
                writer.onwriteend = null;
                writer.onerror = null;
                writer.truncate(length);
                _this.resetDirty();
                cb();
            };
            writer.onerror = function (err) {
                cb(convertError(err, _this.getPath(), false));
            };
            writer.write(blob);
        });
    };
    HTML5FSFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    return HTML5FSFile;
}(preload_file_1.default));
exports.HTML5FSFile = HTML5FSFile;
/**
 * A read-write filesystem backed by the HTML5 FileSystem API.
 *
 * As the HTML5 FileSystem is only implemented in Blink, this interface is
 * only available in Chrome.
 */
var HTML5FS = /** @class */ (function (_super) {
    __extends(HTML5FS, _super);
    /**
     * @param size storage quota to request, in megabytes. Allocated value may be less.
     * @param type window.PERSISTENT or window.TEMPORARY. Defaults to PERSISTENT.
     */
    function HTML5FS(size, type) {
        if (size === void 0) { size = 5; }
        if (type === void 0) { type = global_1.default.PERSISTENT; }
        var _this = _super.call(this) || this;
        // Convert MB to bytes.
        _this.size = 1024 * 1024 * size;
        _this.type = type;
        return _this;
    }
    /**
     * Creates an HTML5FS instance with the given options.
     */
    HTML5FS.Create = function (opts, cb) {
        var fs = new HTML5FS(opts.size, opts.type);
        fs._allocate(function (e) { return e ? cb(e) : cb(null, fs); });
    };
    HTML5FS.isAvailable = function () {
        return Boolean(_getFS);
    };
    HTML5FS.prototype.getName = function () {
        return HTML5FS.Name;
    };
    HTML5FS.prototype.isReadOnly = function () {
        return false;
    };
    HTML5FS.prototype.supportsSymlinks = function () {
        return false;
    };
    HTML5FS.prototype.supportsProps = function () {
        return false;
    };
    HTML5FS.prototype.supportsSynch = function () {
        return false;
    };
    /**
     * Deletes everything in the FS. Used for testing.
     * Karma clears the storage after you quit it but not between runs of the test
     * suite, and the tests expect an empty FS every time.
     */
    HTML5FS.prototype.empty = function (mainCb) {
        // Get a list of all entries in the root directory to delete them
        this._readdir('/', function (err, entries) {
            if (err) {
                mainCb(err);
            }
            else {
                // Called when every entry has been operated on
                var finished = function (er) {
                    if (err) {
                        mainCb(err);
                    }
                    else {
                        mainCb();
                    }
                };
                // Removes files and recursively removes directories
                var deleteEntry = function (entry, cb) {
                    var succ = function () {
                        cb();
                    };
                    var error = function (err) {
                        cb(convertError(err, entry.fullPath, !entry.isDirectory));
                    };
                    if (isDirectoryEntry(entry)) {
                        entry.removeRecursively(succ, error);
                    }
                    else {
                        entry.remove(succ, error);
                    }
                };
                // Loop through the entries and remove them, then call the callback
                // when they're all finished.
                // @ts-ignore
                (0, async_1.each)(entries, deleteEntry, finished);
            }
        });
    };
    HTML5FS.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        var semaphore = 2;
        var successCount = 0;
        var root = this.fs.root;
        var currentPath = oldPath;
        var error = function (err) {
            if (--semaphore <= 0) {
                cb(convertError(err, currentPath, false));
            }
        };
        var success = function (file) {
            if (++successCount === 2) {
                return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Something was identified as both a file and a directory. This should never happen."));
            }
            // SPECIAL CASE: If newPath === oldPath, and the path exists, then
            // this operation trivially succeeds.
            if (oldPath === newPath) {
                return cb();
            }
            // Get the new parent directory.
            currentPath = path.dirname(newPath);
            root.getDirectory(currentPath, {}, function (parentDir) {
                currentPath = path.basename(newPath);
                file.moveTo(parentDir, currentPath, function (entry) { cb(); }, function (err) {
                    // SPECIAL CASE: If oldPath is a directory, and newPath is a
                    // file, rename should delete the file and perform the move.
                    if (file.isDirectory) {
                        currentPath = newPath;
                        // Unlink only works on files. Try to delete newPath.
                        _this.unlink(newPath, function (e) {
                            if (e) {
                                // newPath is probably a directory.
                                error(err);
                            }
                            else {
                                // Recur, now that newPath doesn't exist.
                                _this.rename(oldPath, newPath, cb);
                            }
                        });
                    }
                    else {
                        error(err);
                    }
                });
            }, error);
        };
        // We don't know if oldPath is a *file* or a *directory*, and there's no
        // way to stat items. So launch both requests, see which one succeeds.
        root.getFile(oldPath, {}, success, error);
        root.getDirectory(oldPath, {}, success, error);
    };
    HTML5FS.prototype.stat = function (path, isLstat, cb) {
        var _this = this;
        // Throw an error if the entry doesn't exist, because then there's nothing
        // to stat.
        var opts = {
            create: false
        };
        // Called when the path has been successfully loaded as a file.
        var loadAsFile = function (entry) {
            var fileFromEntry = function (file) {
                var stat = new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, file.size);
                cb(null, stat);
            };
            entry.file(fileFromEntry, failedToLoad);
        };
        // Called when the path has been successfully loaded as a directory.
        var loadAsDir = function (dir) {
            // Directory entry size can't be determined from the HTML5 FS API, and is
            // implementation-dependant anyway, so a dummy value is used.
            var size = 4096;
            var stat = new node_fs_stats_1.default(node_fs_stats_1.FileType.DIRECTORY, size);
            cb(null, stat);
        };
        // Called when the path couldn't be opened as a directory or a file.
        var failedToLoad = function (err) {
            cb(convertError(err, path, false /* Unknown / irrelevant */));
        };
        // Called when the path couldn't be opened as a file, but might still be a
        // directory.
        var failedToLoadAsFile = function () {
            _this.fs.root.getDirectory(path, opts, loadAsDir, failedToLoad);
        };
        // No method currently exists to determine whether a path refers to a
        // directory or a file, so this implementation tries both and uses the first
        // one that succeeds.
        this.fs.root.getFile(path, opts, loadAsFile, failedToLoadAsFile);
    };
    HTML5FS.prototype.open = function (p, flags, mode, cb) {
        var _this = this;
        // XXX: err is a DOMError
        var error = function (err) {
            if (err.name === 'InvalidModificationError' && flags.isExclusive()) {
                cb(api_error_1.ApiError.EEXIST(p));
            }
            else {
                cb(convertError(err, p, false));
            }
        };
        this.fs.root.getFile(p, {
            create: flags.pathNotExistsAction() === file_flag_1.ActionType.CREATE_FILE,
            exclusive: flags.isExclusive()
        }, function (entry) {
            // Try to fetch corresponding file.
            entry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (event) {
                    var bfsFile = _this._makeFile(p, entry, flags, file, reader.result);
                    cb(null, bfsFile);
                };
                reader.onerror = function (ev) {
                    error(reader.error);
                };
                reader.readAsArrayBuffer(file);
            }, error);
        }, error);
    };
    HTML5FS.prototype.unlink = function (path, cb) {
        this._remove(path, cb, true);
    };
    HTML5FS.prototype.rmdir = function (path, cb) {
        var _this = this;
        // Check if directory is non-empty, first.
        this.readdir(path, function (e, files) {
            if (e) {
                cb(e);
            }
            else if (files.length > 0) {
                cb(api_error_1.ApiError.ENOTEMPTY(path));
            }
            else {
                _this._remove(path, cb, false);
            }
        });
    };
    HTML5FS.prototype.mkdir = function (path, mode, cb) {
        // Create the directory, but throw an error if it already exists, as per
        // mkdir(1)
        var opts = {
            create: true,
            exclusive: true
        };
        var success = function (dir) {
            cb();
        };
        var error = function (err) {
            cb(convertError(err, path, true));
        };
        this.fs.root.getDirectory(path, opts, success, error);
    };
    /**
     * Map _readdir's list of `FileEntry`s to their names and return that.
     */
    HTML5FS.prototype.readdir = function (path, cb) {
        this._readdir(path, function (e, entries) {
            if (entries) {
                var rv = [];
                for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                    var entry = entries_1[_i];
                    rv.push(entry.name);
                }
                cb(null, rv);
            }
            else {
                return cb(e);
            }
        });
    };
    /**
     * Returns a BrowserFS object representing a File.
     */
    HTML5FS.prototype._makeFile = function (path, entry, flag, stat, data) {
        if (data === void 0) { data = new ArrayBuffer(0); }
        var stats = new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, stat.size);
        var buffer = (0, util_1.arrayBuffer2Buffer)(data);
        return new HTML5FSFile(this, entry, path, flag, stats, buffer);
    };
    /**
     * Returns an array of `FileEntry`s. Used internally by empty and readdir.
     */
    HTML5FS.prototype._readdir = function (path, cb) {
        var error = function (err) {
            cb(convertError(err, path, true));
        };
        // Grab the requested directory.
        this.fs.root.getDirectory(path, { create: false }, function (dirEntry) {
            var reader = dirEntry.createReader();
            var entries = [];
            // Call the reader.readEntries() until no more results are returned.
            var readEntries = function () {
                reader.readEntries((function (results) {
                    if (results.length) {
                        entries = entries.concat(_toArray(results));
                        readEntries();
                    }
                    else {
                        cb(null, entries);
                    }
                }), error);
            };
            readEntries();
        }, error);
    };
    /**
     * Requests a storage quota from the browser to back this FS.
     */
    HTML5FS.prototype._allocate = function (cb) {
        var _this = this;
        var success = function (fs) {
            _this.fs = fs;
            cb();
        };
        var error = function (err) {
            cb(convertError(err, "/", true));
        };
        if (this.type === global_1.default.PERSISTENT) {
            _requestQuota(this.type, this.size, function (granted) {
                _getFS(_this.type, granted, success, error);
            }, error);
        }
        else {
            _getFS(this.type, this.size, success, error);
        }
    };
    /**
     * Delete a file or directory from the file system
     * isFile should reflect which call was made to remove the it (`unlink` or
     * `rmdir`). If this doesn't match what's actually at `path`, an error will be
     * returned
     */
    HTML5FS.prototype._remove = function (path, cb, isFile) {
        var success = function (entry) {
            var succ = function () {
                cb();
            };
            var err = function (err) {
                cb(convertError(err, path, !isFile));
            };
            entry.remove(succ, err);
        };
        var error = function (err) {
            cb(convertError(err, path, !isFile));
        };
        // Deleting the entry, so don't create it
        var opts = {
            create: false
        };
        if (isFile) {
            this.fs.root.getFile(path, opts, success, error);
        }
        else {
            this.fs.root.getDirectory(path, opts, success, error);
        }
    };
    HTML5FS.Name = "HTML5FS";
    HTML5FS.Options = {
        size: {
            type: "number",
            optional: true,
            description: "Storage quota to request, in megabytes. Allocated value may be less. Defaults to 5."
        },
        type: {
            type: "number",
            optional: true,
            description: "window.PERSISTENT or window.TEMPORARY. Defaults to PERSISTENT."
        }
    };
    return HTML5FS;
}(file_system_1.BaseFileSystem));
exports.default = HTML5FS;