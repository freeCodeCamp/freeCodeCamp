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
exports.DropboxFile = void 0;
var preload_file_1 = require("../generic/preload_file");
var file_system_1 = require("../core/file_system");
var node_fs_stats_1 = require("../core/node_fs_stats");
var api_error_1 = require("../core/api_error");
var util_1 = require("../core/util");
var dropbox_bridge_1 = require("dropbox_bridge");
var setImmediate_1 = require("../generic/setImmediate");
var path_1 = require("path");
/**
 * Dropbox paths do not begin with a /, they just begin with a folder at the root node.
 * Here, we strip the `/`.
 * @param p An absolute path
 */
function FixPath(p) {
    if (p === '/') {
        return '';
    }
    else {
        return p;
    }
}
/**
 * HACK: Dropbox errors are FUBAR'd sometimes.
 * @url https://github.com/dropbox/dropbox-sdk-js/issues/146
 * @param e
 */
function ExtractTheFuckingError(e) {
    var obj = e.error;
    if (obj['.tag']) {
        // Everything is OK.
        return obj;
    }
    else if (obj['error']) {
        // Terrible nested object bug.
        var obj2 = obj.error;
        if (obj2['.tag']) {
            return obj2;
        }
        else if (obj2['reason'] && obj2['reason']['.tag']) {
            return obj2.reason;
        }
        else {
            return obj2;
        }
    }
    else if (typeof (obj) === 'string') {
        // Might be a fucking JSON object error.
        try {
            var obj2 = JSON.parse(obj);
            if (obj2['error'] && obj2['error']['reason'] && obj2['error']['reason']['.tag']) {
                return obj2.error.reason;
            }
        }
        catch (e) {
            // Nope. Give up.
        }
    }
    return obj;
}
/**
 * Returns a user-facing error message given an error.
 *
 * HACK: Dropbox error messages sometimes lack a `user_message` field.
 * Sometimes, they are even strings. Ugh.
 * @url https://github.com/dropbox/dropbox-sdk-js/issues/146
 * @url https://github.com/dropbox/dropbox-sdk-js/issues/145
 * @url https://github.com/dropbox/dropbox-sdk-js/issues/144
 * @param err An error.
 */
function GetErrorMessage(err) {
    if (err['user_message']) {
        return err.user_message.text;
    }
    else if (err['error_summary']) {
        return err.error_summary;
    }
    else if (typeof (err.error) === "string") {
        return err.error;
    }
    else if (typeof (err.error) === "object") {
        // DROPBOX BUG: Sometimes, error is a nested error.
        return GetErrorMessage(err.error);
    }
    else {
        throw new Error("Dropbox's servers gave us a garbage error message: ".concat(JSON.stringify(err)));
    }
}
function LookupErrorToError(err, p, msg) {
    switch (err['.tag']) {
        case 'malformed_path':
            return new api_error_1.ApiError(api_error_1.ErrorCode.EBADF, msg, p);
        case 'not_found':
            return api_error_1.ApiError.ENOENT(p);
        case 'not_file':
            return api_error_1.ApiError.EISDIR(p);
        case 'not_folder':
            return api_error_1.ApiError.ENOTDIR(p);
        case 'restricted_content':
            return api_error_1.ApiError.EPERM(p);
        case 'other':
        default:
            return new api_error_1.ApiError(api_error_1.ErrorCode.EIO, msg, p);
    }
}
function WriteErrorToError(err, p, msg) {
    switch (err['.tag']) {
        case 'malformed_path':
        case 'disallowed_name':
            return new api_error_1.ApiError(api_error_1.ErrorCode.EBADF, msg, p);
        case 'conflict':
        case 'no_write_permission':
        case 'team_folder':
            return api_error_1.ApiError.EPERM(p);
        case 'insufficient_space':
            return new api_error_1.ApiError(api_error_1.ErrorCode.ENOSPC, msg);
        case 'other':
        default:
            return new api_error_1.ApiError(api_error_1.ErrorCode.EIO, msg, p);
    }
}
function FilesDeleteWrapped(client, p, cb) {
    var arg = {
        path: FixPath(p)
    };
    client.filesDeleteV2(arg)
        .then(function () {
        cb();
    }).catch(function (e) {
        var err = ExtractTheFuckingError(e);
        switch (err['.tag']) {
            case 'path_lookup':
                cb(LookupErrorToError(err.path_lookup, p, GetErrorMessage(e)));
                break;
            case 'path_write':
                cb(WriteErrorToError(err.path_write, p, GetErrorMessage(e)));
                break;
            case 'too_many_write_operations':
                setTimeout(function () { return FilesDeleteWrapped(client, p, cb); }, 500 + (300 * (Math.random())));
                break;
            case 'other':
            default:
                cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, GetErrorMessage(e), p));
                break;
        }
    });
}
var DropboxFile = /** @class */ (function (_super) {
    __extends(DropboxFile, _super);
    function DropboxFile(_fs, _path, _flag, _stat, contents) {
        return _super.call(this, _fs, _path, _flag, _stat, contents) || this;
    }
    DropboxFile.prototype.sync = function (cb) {
        this._fs._syncFile(this.getPath(), this.getBuffer(), cb);
    };
    DropboxFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    return DropboxFile;
}(preload_file_1.default));
exports.DropboxFile = DropboxFile;
/**
 * A read/write file system backed by Dropbox cloud storage.
 *
 * Uses the Dropbox V2 API, and the 2.x JS SDK.
 */
var DropboxFileSystem = /** @class */ (function (_super) {
    __extends(DropboxFileSystem, _super);
    function DropboxFileSystem(client) {
        var _this = _super.call(this) || this;
        _this._client = client;
        return _this;
    }
    /**
     * Creates a new DropboxFileSystem instance with the given options.
     * Must be given an *authenticated* Dropbox client from 2.x JS SDK.
     */
    DropboxFileSystem.Create = function (opts, cb) {
        cb(null, new DropboxFileSystem(opts.client));
    };
    DropboxFileSystem.isAvailable = function () {
        // Checks if the Dropbox library is loaded.
        return typeof dropbox_bridge_1.Dropbox !== 'undefined';
    };
    DropboxFileSystem.prototype.getName = function () {
        return DropboxFileSystem.Name;
    };
    DropboxFileSystem.prototype.isReadOnly = function () {
        return false;
    };
    // Dropbox doesn't support symlinks, properties, or synchronous calls
    // TODO: does it???
    DropboxFileSystem.prototype.supportsSymlinks = function () {
        return false;
    };
    DropboxFileSystem.prototype.supportsProps = function () {
        return false;
    };
    DropboxFileSystem.prototype.supportsSynch = function () {
        return false;
    };
    /**
     * Deletes *everything* in the file system. Mainly intended for unit testing!
     * @param mainCb Called when operation completes.
     */
    DropboxFileSystem.prototype.empty = function (mainCb) {
        var _this = this;
        this.readdir('/', function (e, paths) {
            if (paths) {
                var next_1 = function (e) {
                    if (paths.length === 0) {
                        mainCb();
                    }
                    else {
                        FilesDeleteWrapped(_this._client, paths.shift(), next_1);
                    }
                };
                next_1();
            }
            else {
                mainCb(e);
            }
        });
    };
    DropboxFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        // Dropbox doesn't let you rename things over existing things, but POSIX does.
        // So, we need to see if newPath exists...
        this.stat(newPath, false, function (e, stats) {
            var rename = function () {
                var relocationArg = {
                    from_path: FixPath(oldPath),
                    to_path: FixPath(newPath)
                };
                _this._client.filesMoveV2(relocationArg)
                    .then(function () { return cb(); })
                    .catch(function (e) {
                    var err = ExtractTheFuckingError(e);
                    switch (err['.tag']) {
                        case 'from_lookup':
                            cb(LookupErrorToError(err.from_lookup, oldPath, GetErrorMessage(e)));
                            break;
                        case 'from_write':
                            cb(WriteErrorToError(err.from_write, oldPath, GetErrorMessage(e)));
                            break;
                        case 'to':
                            cb(WriteErrorToError(err.to, newPath, GetErrorMessage(e)));
                            break;
                        case 'cant_copy_shared_folder':
                        case 'cant_nest_shared_folder':
                            cb(new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, GetErrorMessage(e), oldPath));
                            break;
                        case 'cant_move_folder_into_itself':
                        case 'duplicated_or_nested_paths':
                            cb(new api_error_1.ApiError(api_error_1.ErrorCode.EBADF, GetErrorMessage(e), oldPath));
                            break;
                        case 'too_many_files':
                            cb(new api_error_1.ApiError(api_error_1.ErrorCode.ENOSPC, GetErrorMessage(e), oldPath));
                            break;
                        case 'other':
                        default:
                            cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, GetErrorMessage(e), oldPath));
                            break;
                    }
                });
            };
            if (e) {
                // Doesn't exist. Proceed!
                rename();
            }
            else if (oldPath === newPath) {
                // NOP if the path exists. Error if it doesn't exist.
                if (e) {
                    cb(api_error_1.ApiError.ENOENT(newPath));
                }
                else {
                    cb();
                }
            }
            else if (stats && stats.isDirectory()) {
                // Exists, is a directory. Cannot rename over an existing directory.
                cb(api_error_1.ApiError.EISDIR(newPath));
            }
            else {
                // Exists, is a file, and differs from oldPath. Delete and rename.
                _this.unlink(newPath, function (e) {
                    if (e) {
                        cb(e);
                    }
                    else {
                        rename();
                    }
                });
            }
        });
    };
    DropboxFileSystem.prototype.stat = function (path, isLstat, cb) {
        if (path === '/') {
            // Dropbox doesn't support querying the root directory.
            (0, setImmediate_1.default)(function () {
                cb(null, new node_fs_stats_1.default(node_fs_stats_1.FileType.DIRECTORY, 4096));
            });
            return;
        }
        var arg = {
            path: FixPath(path)
        };
        this._client.filesGetMetadata(arg).then(function (ref) {
            switch (ref['.tag']) {
                case 'file':
                    var fileMetadata = ref;
                    // TODO: Parse time fields.
                    cb(null, new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, fileMetadata.size));
                    break;
                case 'folder':
                    cb(null, new node_fs_stats_1.default(node_fs_stats_1.FileType.DIRECTORY, 4096));
                    break;
                case 'deleted':
                    cb(api_error_1.ApiError.ENOENT(path));
                    break;
                default:
                    // Unknown.
                    break;
            }
        }).catch(function (e) {
            var err = ExtractTheFuckingError(e);
            switch (err['.tag']) {
                case 'path':
                    cb(LookupErrorToError(err.path, path, GetErrorMessage(e)));
                    break;
                default:
                    cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, GetErrorMessage(e), path));
                    break;
            }
        });
    };
    DropboxFileSystem.prototype.openFile = function (path, flags, cb) {
        var _this = this;
        var downloadArg = {
            path: FixPath(path)
        };
        this._client.filesDownload(downloadArg).then(function (res) {
            var b = res.fileBlob;
            var fr = new FileReader();
            fr.onload = function () {
                var ab = fr.result;
                cb(null, new DropboxFile(_this, path, flags, new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, ab.byteLength), (0, util_1.arrayBuffer2Buffer)(ab)));
            };
            fr.readAsArrayBuffer(b);
        }).catch(function (e) {
            var err = ExtractTheFuckingError(e);
            switch (err['.tag']) {
                case 'path':
                    var dpError = err;
                    cb(LookupErrorToError(dpError.path, path, GetErrorMessage(e)));
                    break;
                case 'other':
                default:
                    cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, GetErrorMessage(e), path));
                    break;
            }
        });
    };
    DropboxFileSystem.prototype.createFile = function (p, flags, mode, cb) {
        var _this = this;
        var fileData = Buffer.alloc(0);
        var blob = new Blob([(0, util_1.buffer2ArrayBuffer)(fileData)], { type: "octet/stream" });
        var commitInfo = {
            contents: blob,
            path: FixPath(p)
        };
        this._client.filesUpload(commitInfo).then(function (metadata) {
            cb(null, new DropboxFile(_this, p, flags, new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, 0), fileData));
        }).catch(function (e) {
            var err = ExtractTheFuckingError(e);
            // HACK: Casting to 'any' since tag can be 'too_many_write_operations'.
            switch (err['.tag']) {
                case 'path':
                    var upError = err;
                    cb(WriteErrorToError(upError.path.reason, p, GetErrorMessage(e)));
                    break;
                case 'too_many_write_operations':
                    // Retry in (500, 800) ms.
                    setTimeout(function () { return _this.createFile(p, flags, mode, cb); }, 500 + (300 * (Math.random())));
                    break;
                case 'other':
                default:
                    cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, GetErrorMessage(e), p));
                    break;
            }
        });
    };
    /**
     * Delete a file
     */
    DropboxFileSystem.prototype.unlink = function (path, cb) {
        var _this = this;
        // Must be a file. Check first.
        this.stat(path, false, function (e, stat) {
            if (stat) {
                if (stat.isDirectory()) {
                    cb(api_error_1.ApiError.EISDIR(path));
                }
                else {
                    FilesDeleteWrapped(_this._client, path, cb);
                }
            }
            else {
                cb(e);
            }
        });
    };
    /**
     * Delete a directory
     */
    DropboxFileSystem.prototype.rmdir = function (path, cb) {
        var _this = this;
        this.readdir(path, function (e, paths) {
            if (paths) {
                if (paths.length > 0) {
                    cb(api_error_1.ApiError.ENOTEMPTY(path));
                }
                else {
                    FilesDeleteWrapped(_this._client, path, cb);
                }
            }
            else {
                cb(e);
            }
        });
    };
    /**
     * Create a directory
     */
    DropboxFileSystem.prototype.mkdir = function (p, mode, cb) {
        var _this = this;
        // Dropbox's create_folder is recursive. Check if parent exists.
        var parent = (0, path_1.dirname)(p);
        this.stat(parent, false, function (e, stats) {
            if (e) {
                cb(e);
            }
            else if (stats && !stats.isDirectory()) {
                cb(api_error_1.ApiError.ENOTDIR(parent));
            }
            else {
                var arg = {
                    path: FixPath(p)
                };
                _this._client.filesCreateFolderV2(arg).then(function () { return cb(); }).catch(function (e) {
                    var err = ExtractTheFuckingError(e);
                    if (err['.tag'] === "too_many_write_operations") {
                        // Retry in a bit.
                        setTimeout(function () { return _this.mkdir(p, mode, cb); }, 500 + (300 * (Math.random())));
                    }
                    else {
                        cb(WriteErrorToError(ExtractTheFuckingError(e).path, p, GetErrorMessage(e)));
                    }
                });
            }
        });
    };
    /**
     * Get the names of the files in a directory
     */
    DropboxFileSystem.prototype.readdir = function (path, cb) {
        var _this = this;
        var arg = {
            path: FixPath(path)
        };
        this._client.filesListFolder(arg).then(function (res) {
            ContinueReadingDir(_this._client, path, res, [], cb);
        }).catch(function (e) {
            ProcessListFolderError(e, path, cb);
        });
    };
    /**
     * (Internal) Syncs file to Dropbox.
     */
    DropboxFileSystem.prototype._syncFile = function (p, d, cb) {
        var _this = this;
        var blob = new Blob([(0, util_1.buffer2ArrayBuffer)(d)], { type: "octet/stream" });
        var arg = {
            contents: blob,
            path: FixPath(p),
            mode: {
                '.tag': 'overwrite'
            }
        };
        this._client.filesUpload(arg).then(function () {
            cb();
        }).catch(function (e) {
            var err = ExtractTheFuckingError(e);
            switch (err['.tag']) {
                case 'path':
                    var upError = err;
                    cb(WriteErrorToError(upError.path.reason, p, GetErrorMessage(e)));
                    break;
                case 'too_many_write_operations':
                    setTimeout(function () { return _this._syncFile(p, d, cb); }, 500 + (300 * (Math.random())));
                    break;
                case 'other':
                default:
                    cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, GetErrorMessage(e), p));
                    break;
            }
        });
    };
    DropboxFileSystem.Name = "DropboxV2";
    DropboxFileSystem.Options = {
        client: {
            type: "object",
            description: "An *authenticated* Dropbox client. Must be from the 2.5.x JS SDK."
        }
    };
    return DropboxFileSystem;
}(file_system_1.BaseFileSystem));
exports.default = DropboxFileSystem;
function ProcessListFolderError(e, path, cb) {
    var err = ExtractTheFuckingError(e);
    switch (err['.tag']) {
        case 'path':
            var pathError = err;
            cb(LookupErrorToError(pathError.path, path, GetErrorMessage(e)));
            break;
        case 'other':
        default:
            cb(new api_error_1.ApiError(api_error_1.ErrorCode.EIO, GetErrorMessage(e), path));
            break;
    }
}
function ContinueReadingDir(client, path, res, previousEntries, cb) {
    var newEntries = res.entries.map(function (e) { return e.path_display; }).filter(Boolean);
    var entries = previousEntries.concat(newEntries);
    if (!res.has_more) {
        cb(null, entries);
    }
    else {
        var arg = {
            cursor: res.cursor
        };
        client.filesListFolderContinue(arg).then(function (res) {
            ContinueReadingDir(client, path, res, entries, cb);
        }).catch(function (e) {
            ProcessListFolderError(e, path, cb);
        });
    }
}