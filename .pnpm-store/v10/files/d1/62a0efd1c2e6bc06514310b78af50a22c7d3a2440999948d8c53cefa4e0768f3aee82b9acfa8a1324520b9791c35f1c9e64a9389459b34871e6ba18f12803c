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
var api_error_1 = require("../core/api_error");
/* eslint-disable */
var file_system_1 = require("../core/file_system");
var node_fs_stats_1 = require("../core/node_fs_stats");
var preload_file_1 = require("../generic/preload_file");
function blobToBuffer(blob, cb) {
    if (typeof Blob === 'undefined' || !(blob instanceof Blob)) {
        throw new Error('first argument must be a Blob');
    }
    if (typeof cb !== 'function') {
        throw new Error('second argument must be a function');
    }
    var reader = new FileReader();
    function onLoadEnd(e) {
        reader.removeEventListener('loadend', onLoadEnd, false);
        if (e.error) {
            cb(e.error);
        }
        else {
            // @ts-ignore
            cb(null, Buffer.from(reader.result));
        }
    }
    reader.addEventListener('loadend', onLoadEnd, false);
    reader.readAsArrayBuffer(blob);
}
function getCode(savedCode, code) {
    if (savedCode === null) {
        return code || '';
    }
    return savedCode || '';
}
var CodeSandboxFile = /** @class */ (function (_super) {
    __extends(CodeSandboxFile, _super);
    function CodeSandboxFile(_fs, _path, _flag, _stat, contents) {
        return _super.call(this, _fs, _path, _flag, _stat, contents) || this;
    }
    CodeSandboxFile.prototype.sync = function (cb) {
        var _this = this;
        if (this.isDirty()) {
            var buffer = this.getBuffer();
            this._fs._sync(this.getPath(), buffer, function (e, stat) {
                if (!e) {
                    _this.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };
    CodeSandboxFile.prototype.close = function (cb) {
        this.sync(cb);
    };
    CodeSandboxFile.prototype.syncSync = function () {
        if (this.isDirty()) {
            this._fs._syncSync(this.getPath(), this.getBuffer());
            this.resetDirty();
        }
    };
    CodeSandboxFile.prototype.closeSync = function () {
        this.syncSync();
    };
    return CodeSandboxFile;
}(preload_file_1.default));
var CodeSandboxEditorFS = /** @class */ (function (_super) {
    __extends(CodeSandboxEditorFS, _super);
    function CodeSandboxEditorFS(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    /**
     * Creates an InMemoryFileSystem instance.
     */
    CodeSandboxEditorFS.Create = function (options, cb) {
        cb(null, new CodeSandboxEditorFS(options.api));
    };
    CodeSandboxEditorFS.isAvailable = function () {
        return true;
    };
    CodeSandboxEditorFS.prototype.getName = function () {
        return 'CodeSandboxEditorFS';
    };
    CodeSandboxEditorFS.prototype.isReadOnly = function () {
        return false;
    };
    CodeSandboxEditorFS.prototype.supportsProps = function () {
        return false;
    };
    CodeSandboxEditorFS.prototype.supportsSynch = function () {
        return true;
    };
    CodeSandboxEditorFS.prototype.empty = function (mainCb) {
        throw new Error('Empty not supported');
    };
    CodeSandboxEditorFS.prototype.renameSync = function (oldPath, newPath) {
        throw new Error('Rename not supported');
    };
    CodeSandboxEditorFS.prototype.statSync = function (p, isLstate) {
        var modules = this.api.getSandboxFs();
        var moduleInfo = modules[p];
        if (!moduleInfo) {
            var modulesStartingWithPath = Object.keys(modules).filter(function (pa) { return pa.startsWith(p.endsWith('/') ? p : p + '/') || pa === p; });
            if (modulesStartingWithPath.length > 0) {
                return new node_fs_stats_1.default(node_fs_stats_1.FileType.DIRECTORY, 0);
            }
            else {
                throw api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOENT, p);
            }
        }
        if (moduleInfo.type === 'directory') {
            return new node_fs_stats_1.default(node_fs_stats_1.FileType.DIRECTORY, 4096, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
        }
        else {
            return new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, getCode(moduleInfo.savedCode, moduleInfo.code).length, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
        }
    };
    CodeSandboxEditorFS.prototype.createFileSync = function (p, flag, mode) {
        throw new Error('Create file not supported');
    };
    CodeSandboxEditorFS.prototype.open = function (p, flag, mode, cb) {
        var _this = this;
        var moduleInfo = this.api.getSandboxFs()[p];
        if (!moduleInfo) {
            cb(api_error_1.ApiError.ENOENT(p));
            return;
        }
        if (moduleInfo.type === 'directory') {
            var stats = new node_fs_stats_1.default(node_fs_stats_1.FileType.DIRECTORY, 4096, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
            cb(null, new CodeSandboxFile(this, p, flag, stats));
        }
        else {
            var isBinary = moduleInfo.isBinary, savedCode = moduleInfo.savedCode, code = moduleInfo.code;
            if (isBinary) {
                var url = getCode(savedCode, code);
                var jwt = this.api.getJwt && this.api.getJwt();
                var sendAuth = jwt && new URL(url).origin === document.location.origin;
                var headers = sendAuth ? {
                    Authorization: "Bearer ".concat(this.api.getJwt && this.api.getJwt())
                } : {};
                fetch(url, { headers: headers }).then(function (x) { return x.blob(); }).then(function (blob) {
                    var stats = new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, blob.size, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
                    blobToBuffer(blob, function (err, r) {
                        if (err) {
                            cb(err);
                            return;
                        }
                        cb(undefined, new CodeSandboxFile(_this, p, flag, stats, r));
                    });
                });
                return;
            }
            var buffer = Buffer.from(getCode(savedCode, code));
            var stats = new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, buffer.length, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
            cb(null, new CodeSandboxFile(this, p, flag, stats, buffer));
        }
    };
    CodeSandboxEditorFS.prototype.openFileSync = function (p, flag, mode) {
        var moduleInfo = this.api.getSandboxFs()[p];
        if (!moduleInfo) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        if (moduleInfo.type === 'directory') {
            var stats = new node_fs_stats_1.default(node_fs_stats_1.FileType.DIRECTORY, 4096, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
            return new CodeSandboxFile(this, p, flag, stats);
        }
        else {
            var savedCode = moduleInfo.savedCode, code = moduleInfo.code;
            var buffer = Buffer.from(getCode(savedCode, code));
            var stats = new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, buffer.length, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
            return new CodeSandboxFile(this, p, flag, stats, buffer);
        }
    };
    CodeSandboxEditorFS.prototype.writeFileSync = function () {
        // Stubbed
    };
    CodeSandboxEditorFS.prototype.rmdirSync = function (p) {
        // Stubbed
    };
    CodeSandboxEditorFS.prototype.mkdirSync = function (p) {
        // Stubbed
    };
    CodeSandboxEditorFS.prototype.unlinkSync = function (p) {
        // Stubbed
    };
    CodeSandboxEditorFS.prototype.readdirSync = function (path) {
        var paths = Object.keys(this.api.getSandboxFs());
        var p = path.endsWith('/') ? path : path + '/';
        var pathsInDir = paths.filter(function (secondP) { return secondP.startsWith(p); });
        if (pathsInDir.length === 0) {
            return [];
        }
        var directChildren = new Set();
        var currentPathLength = p.split('/').length;
        pathsInDir
            .filter(function (np) { return np.split('/').length >= currentPathLength; })
            .forEach(function (np) {
            var parts = np.split('/');
            parts.length = currentPathLength;
            directChildren.add(parts.join('/'));
        });
        var pathArray = Array.from(directChildren).map(function (pa) { return pa.replace(p, ''); });
        return pathArray;
    };
    CodeSandboxEditorFS.prototype._sync = function (p, data, cb) {
        // Stubbed
        cb(null, undefined);
    };
    CodeSandboxEditorFS.prototype._syncSync = function (p, data) {
        // Stubbed
    };
    CodeSandboxEditorFS.Name = 'CodeSandboxEditorFS';
    CodeSandboxEditorFS.Options = {
        api: {
            type: 'object',
            description: 'The CodeSandbox Editor',
            validator: function (opt, cb) {
                if (opt) {
                    cb();
                }
                else {
                    cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, 'Manager is invalid'));
                }
            },
        },
    };
    return CodeSandboxEditorFS;
}(file_system_1.SynchronousFileSystem));
exports.default = CodeSandboxEditorFS;