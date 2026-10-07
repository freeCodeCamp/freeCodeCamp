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
var file_system_1 = require("../core/file_system");
var api_error_1 = require("../core/api_error");
var util_1 = require("../core/util");
var node_fs_stats_1 = require("../core/node_fs_stats");
var preload_file_1 = require("../generic/preload_file");
var xhr_1 = require("../generic/xhr");
var fetch_1 = require("../generic/fetch");
/**
 * Try to convert the given buffer into a string, and pass it to the callback.
 * Optimization that removes the needed try/catch into a helper function, as
 * this is an uncommon case.
 * @hidden
 */
function tryToString(buff, encoding, cb) {
    try {
        cb(null, buff.toString(encoding));
    }
    catch (e) {
        cb(e);
    }
}
function syncNotAvailableError() {
    throw new api_error_1.ApiError(api_error_1.ErrorCode.ENOTSUP, "Synchronous HTTP download methods are not available in this environment.");
}
/**
 * A simple filesystem backed by HTTP downloads. You must create a directory listing using the
 * `make_http_index` tool provided by BrowserFS.
 *
 * If you install BrowserFS globally with `npm i -g browserfs`, you can generate a listing by
 * running `make_http_index` in your terminal in the directory you would like to index:
 *
 * ```
 * make_http_index > index.json
 * ```
 *
 * Listings objects look like the following:
 *
 * ```json
 * {
 *   "home": {
 *     "jvilk": {
 *       "someFile.txt": null,
 *       "someDir": {
 *         // Empty directory
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * *This example has the folder `/home/jvilk` with subfile `someFile.txt` and subfolder `someDir`.*
 */
var DynamicHTTPRequest = /** @class */ (function (_super) {
    __extends(DynamicHTTPRequest, _super);
    // private _requestFileSizeSyncInternal: (p: string) => number;
    function DynamicHTTPRequest(prefixUrl, preferXHR) {
        if (prefixUrl === void 0) { prefixUrl = ''; }
        if (preferXHR === void 0) { preferXHR = false; }
        var _this = _super.call(this) || this;
        // prefix_url must end in a directory separator.
        if (prefixUrl.length > 0 && prefixUrl.charAt(prefixUrl.length - 1) !== '/') {
            prefixUrl = prefixUrl + '/';
        }
        _this.prefixUrl = prefixUrl;
        if (fetch_1.fetchIsAvailable && (!preferXHR || !xhr_1.xhrIsAvailable)) {
            _this._requestFileAsyncInternal = fetch_1.fetchFileAsync;
            // this._requestFileSizeAsyncInternal = fetchFileSizeAsync;
        }
        else {
            _this._requestFileAsyncInternal = xhr_1.asyncDownloadFile;
            // this._requestFileSizeAsyncInternal = getFileSizeAsync;
        }
        if (xhr_1.xhrIsAvailable) {
            _this._requestFileSyncInternal = xhr_1.syncDownloadFile;
            // this._requestFileSizeSyncInternal = getFileSizeSync;
        }
        else {
            _this._requestFileSyncInternal = syncNotAvailableError;
            // this._requestFileSizeSyncInternal = syncNotAvailableError;
        }
        return _this;
    }
    /**
     * Construct an DynamicHTTPRequest file system backend with the given options.
     */
    DynamicHTTPRequest.Create = function (opts, cb) {
        cb(null, new DynamicHTTPRequest(opts.baseUrl));
    };
    DynamicHTTPRequest.isAvailable = function () {
        return xhr_1.xhrIsAvailable || fetch_1.fetchIsAvailable;
    };
    DynamicHTTPRequest.prototype.convertAPIError = function (error) {
        return new api_error_1.ApiError(error.errno, error.message, error.path);
    };
    DynamicHTTPRequest.prototype.empty = function () {
        // this._index.fileIterator(function(file: Stats) {
        //   file.fileData = null;
        // });
    };
    DynamicHTTPRequest.prototype.getName = function () {
        return DynamicHTTPRequest.Name;
    };
    DynamicHTTPRequest.prototype.diskSpace = function (path, cb) {
        // Read-only file system. We could calculate the total space, but that's not
        // important right now.
        cb(0, 0);
    };
    DynamicHTTPRequest.prototype.isReadOnly = function () {
        return true;
    };
    DynamicHTTPRequest.prototype.supportsLinks = function () {
        return false;
    };
    DynamicHTTPRequest.prototype.supportsProps = function () {
        return false;
    };
    DynamicHTTPRequest.prototype.supportsSynch = function () {
        // Synchronous operations are only available via the XHR interface for now.
        return xhr_1.xhrIsAvailable;
    };
    DynamicHTTPRequest.prototype.stat = function (path, isLstat, cb) {
        var _this = this;
        this._requestFileAsync(path + '?stat', 'json', function (err, data) {
            if (err || data.error) {
                cb(err || _this.convertAPIError(data.error));
            }
            else {
                cb(null, node_fs_stats_1.default.fromBuffer(Buffer.from(data.stats)));
            }
        });
    };
    DynamicHTTPRequest.prototype.statSync = function (path, isLstat) {
        var data = this._requestFileSync(path + '?stat', 'json');
        if (data.error) {
            throw this.convertAPIError(data.error);
        }
        return node_fs_stats_1.default.fromBuffer(Buffer.from(data.stats));
    };
    DynamicHTTPRequest.prototype.open = function (path, flags, mode, cb) {
        var _this = this;
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            return cb(new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, path));
        }
        var self = this;
        this._requestFileAsync(path, 'json', function (err, data) {
            if (err || data.error) {
                return cb(err || _this.convertAPIError(data.error));
            }
            return cb(null, new preload_file_1.NoSyncFile(self, path, flags, node_fs_stats_1.default.fromBuffer(Buffer.from(data.stats)), Buffer.from(data.result)));
        });
    };
    DynamicHTTPRequest.prototype.openSync = function (path, flags, mode) {
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EPERM, path);
        }
        var self = this;
        var data = this._requestFileSync(path, 'json');
        if (data.error) {
            throw this.convertAPIError(data.error);
        }
        return new preload_file_1.NoSyncFile(self, path, flags, node_fs_stats_1.default.fromBuffer(Buffer.from(data.stats)), Buffer.from(data.result));
    };
    DynamicHTTPRequest.prototype.readdir = function (path, cb) {
        try {
            cb(null, this.readdirSync(path));
        }
        catch (e) {
            cb(e);
        }
    };
    DynamicHTTPRequest.prototype.readdirSync = function (path) {
        // Check if it exists.
        var data = this._requestFileSync(path + '?meta', 'json');
        if (data.error) {
            throw this.convertAPIError(data.error);
        }
        return data.result;
    };
    /**
     * We have the entire file as a buffer; optimize readFile.
     */
    DynamicHTTPRequest.prototype.readFile = function (fname, encoding, flag, cb) {
        // Wrap cb in file closing code.
        var oldCb = cb;
        // Get file.
        this.open(fname, flag, 0x1a4, function (err, fd) {
            if (err) {
                return cb(err);
            }
            cb = function (err, arg) {
                fd.close(function (err2) {
                    if (!err) {
                        err = err2;
                    }
                    return oldCb(err, arg);
                });
            };
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                cb(err, (0, util_1.copyingSlice)(fdBuff));
            }
            else {
                tryToString(fdBuff, encoding, cb);
            }
        });
    };
    /**
     * Specially-optimized readfile.
     */
    DynamicHTTPRequest.prototype.readFileSync = function (fname, encoding, flag) {
        // Get file.
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                return (0, util_1.copyingSlice)(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    DynamicHTTPRequest.prototype._getHTTPPath = function (filePath) {
        if (filePath.charAt(0) === '/') {
            filePath = filePath.slice(1);
        }
        return this.prefixUrl + filePath;
    };
    DynamicHTTPRequest.prototype._requestFileAsync = function (p, type, cb) {
        this._requestFileAsyncInternal(this._getHTTPPath(p), type, cb);
    };
    DynamicHTTPRequest.prototype._requestFileSync = function (p, type) {
        return this._requestFileSyncInternal(this._getHTTPPath(p), type);
    };
    DynamicHTTPRequest.Name = "DynamicHTTPRequest";
    DynamicHTTPRequest.Options = {
        baseUrl: {
            type: "string",
            optional: true,
            description: "Used as the URL prefix for fetched files. Default: Fetch files relative to the index."
        },
        preferXHR: {
            type: "boolean",
            optional: true,
            description: "Whether to prefer XmlHttpRequest or fetch for async operations if both are available. Default: false"
        }
    };
    return DynamicHTTPRequest;
}(file_system_1.BaseFileSystem));
exports.default = DynamicHTTPRequest;