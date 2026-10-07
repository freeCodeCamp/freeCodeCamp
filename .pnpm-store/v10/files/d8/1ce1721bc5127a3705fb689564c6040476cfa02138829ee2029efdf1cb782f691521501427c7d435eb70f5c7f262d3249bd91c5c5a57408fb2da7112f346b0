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
var path = require("path");
var file_system_1 = require("../core/file_system");
var node_fs_stats_1 = require("../core/node_fs_stats");
var preload_file_1 = require("../generic/preload_file");
var api_error_1 = require("../core/api_error");
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
var CodeSandboxFS = /** @class */ (function (_super) {
    __extends(CodeSandboxFS, _super);
    function CodeSandboxFS(manager) {
        var _this = _super.call(this) || this;
        _this.manager = manager;
        return _this;
    }
    /**
     * Creates an InMemoryFileSystem instance.
     */
    CodeSandboxFS.Create = function (options, cb) {
        cb(null, new CodeSandboxFS(options.manager));
    };
    CodeSandboxFS.isAvailable = function () {
        return true;
    };
    CodeSandboxFS.prototype.getName = function () {
        return "CodeSandboxFS";
    };
    CodeSandboxFS.prototype.isReadOnly = function () {
        return false;
    };
    CodeSandboxFS.prototype.supportsProps = function () {
        return false;
    };
    CodeSandboxFS.prototype.supportsSynch = function () {
        return true;
    };
    CodeSandboxFS.prototype.empty = function (mainCb) {
        var _this = this;
        var tModules = this.manager.getTranspiledModules();
        Object.keys(tModules).forEach(function (pa) {
            _this.manager.removeModule(tModules[pa].module);
        });
        mainCb();
    };
    CodeSandboxFS.prototype.renameSync = function (oldPath, newPath) {
        var _this = this;
        var tModules = this.manager.getTranspiledModules();
        var modulesWithPath = Object.keys(tModules).filter(function (p) { return p.startsWith(oldPath) + "/" || p === oldPath; });
        if (modulesWithPath.length === 0) {
            throw api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOENT, oldPath);
        }
        modulesWithPath
            .map(function (p) { return ({ path: p, moduleInfo: tModules[p] }); })
            .forEach(function (_a) {
            var path = _a.path, moduleInfo = _a.moduleInfo;
            var module = moduleInfo.module;
            _this.manager.moveModule(module, path.replace(oldPath, newPath));
        });
    };
    CodeSandboxFS.prototype.statSync = function (p, isLstate) {
        var tModules = this.manager.getTranspiledModules();
        var moduleInfo = tModules[p];
        if (!moduleInfo) {
            var modulesStartingWithPath = Object.keys(tModules).filter(function (pa) { return pa.startsWith(p.endsWith("/") ? p : p + "/") || pa === p; });
            if (modulesStartingWithPath.length > 0) {
                return new node_fs_stats_1.default(node_fs_stats_1.FileType.DIRECTORY, 0);
            }
            else {
                throw api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOENT, p);
            }
        }
        var stats = new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, Buffer.byteLength(moduleInfo.module.code || '', 'utf8'));
        return stats;
    };
    CodeSandboxFS.prototype.createFileSync = function (p, flag, mode) {
        if (p === "/") {
            throw api_error_1.ApiError.EEXIST(p);
        }
        if (this.manager.getTranspiledModules()[p]) {
            throw api_error_1.ApiError.EEXIST(p);
        }
        var module = {
            path: p,
            code: ""
        };
        this.manager.addModule(module);
        var buffer = Buffer.from(module.code || "");
        var stats = new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, buffer.length);
        return new CodeSandboxFile(this, p, flag, stats, buffer);
    };
    CodeSandboxFS.prototype.openFileSync = function (p, flag, mode) {
        var moduleInfo = this.manager.getTranspiledModules()[p];
        if (!moduleInfo) {
            throw api_error_1.ApiError.ENOENT(p);
        }
        var _a = moduleInfo.module.code, code = _a === void 0 ? "" : _a;
        var buffer = Buffer.from(code || "");
        var stats = new node_fs_stats_1.default(node_fs_stats_1.FileType.FILE, buffer.length);
        return new CodeSandboxFile(this, p, flag, stats, buffer);
    };
    CodeSandboxFS.prototype.rmdirSync = function (p) {
        var _this = this;
        var tModules = this.manager.getTranspiledModules();
        Object.keys(tModules)
            .filter(function (pa) { return pa.startsWith(p + "/") || p === pa; })
            .forEach(function (pa) {
            var module = tModules[pa].module;
            _this.manager.removeModule(module);
        });
    };
    CodeSandboxFS.prototype.mkdirSync = function (p) {
        // CodeSandbox Manager doesn't have the concept of directories, like git.
        // For now we will do nothing, as we pretend that every directory already exists.
    };
    CodeSandboxFS.prototype.readdirSync = function (path) {
        var paths = Object.keys(this.manager.getTranspiledModules());
        var p = path.endsWith("/") ? path : path + "/";
        var pathsInDir = paths.filter(function (secondP) { return secondP.startsWith(p); });
        if (pathsInDir.length === 0) {
            return [];
        }
        var directChildren = new Set();
        var currentPathLength = p.split("/").length;
        pathsInDir
            .filter(function (np) { return np.split("/").length >= currentPathLength; })
            .forEach(function (np) {
            var parts = np.split("/");
            parts.length = currentPathLength;
            directChildren.add(parts.join("/"));
        });
        var pathArray = Array.from(directChildren).map(function (pa) { return pa.replace(p, ""); });
        return pathArray;
    };
    CodeSandboxFS.prototype._sync = function (p, data, cb) {
        var _this = this;
        var parent = path.dirname(p);
        this.stat(parent, false, function (error, stat) {
            if (error) {
                cb(api_error_1.ApiError.FileError(api_error_1.ErrorCode.ENOENT, parent));
            }
            else {
                var module_1 = _this.manager.getTranspiledModules()[p].module;
                _this.manager.updateModule(module_1);
                cb(null);
            }
        });
    };
    CodeSandboxFS.prototype._syncSync = function (p, data) {
        var parent = path.dirname(p);
        this.statSync(parent, false);
        var module = this.manager.getTranspiledModules()[p].module;
        this.manager.updateModule(module);
    };
    CodeSandboxFS.Name = "CodeSandboxFS";
    CodeSandboxFS.Options = {
        manager: {
            type: "object",
            description: "The CodeSandbox Manager",
            validator: function (opt, cb) {
                if (opt) {
                    cb();
                }
                else {
                    cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Manager is invalid"));
                }
            }
        }
    };
    return CodeSandboxFS;
}(file_system_1.SynchronousFileSystem));
exports.default = CodeSandboxFS;