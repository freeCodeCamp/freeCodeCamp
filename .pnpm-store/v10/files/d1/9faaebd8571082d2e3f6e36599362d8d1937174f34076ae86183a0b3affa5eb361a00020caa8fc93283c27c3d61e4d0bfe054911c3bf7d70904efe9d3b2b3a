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
var InMemory_1 = require("./InMemory");
var api_error_1 = require("../core/api_error");
var node_fs_1 = require("../core/node_fs");
var path = require("path");
var util_1 = require("../core/util");
/**
 * The MountableFileSystem allows you to mount multiple backend types or
 * multiple instantiations of the same backend into a single file system tree.
 * The file systems do not need to know about each other; all interactions are
 * automatically facilitated through this interface.
 *
 * For example, if a file system is mounted at /mnt/blah, and a request came in
 * for /mnt/blah/foo.txt, the file system would see a request for /foo.txt.
 *
 * You can mount file systems when you configure the file system:
 * ```javascript
 * BrowserFS.configure({
 *   fs: "MountableFileSystem",
 *   options: {
 *     '/data': { fs: 'HTTPRequest', options: { index: "http://mysite.com/files/index.json" } },
 *     '/home': { fs: 'LocalStorage' }
 *   }
 * }, function(e) {
 *
 * });
 * ```
 *
 * For advanced users, you can also mount file systems *after* MFS is constructed:
 * ```javascript
 * BrowserFS.FileSystem.HTTPRequest.Create({
 *   index: "http://mysite.com/files/index.json"
 * }, function(e, xhrfs) {
 *   BrowserFS.FileSystem.MountableFileSystem.Create({
 *     '/data': xhrfs
 *   }, function(e, mfs) {
 *     BrowserFS.initialize(mfs);
 *
 *     // Added after-the-fact...
 *     BrowserFS.FileSystem.LocalStorage.Create(function(e, lsfs) {
 *       mfs.mount('/home', lsfs);
 *     });
 *   });
 * });
 * ```
 *
 * Since MountableFileSystem simply proxies requests to mounted file systems, it supports all of the operations that the mounted file systems support.
 *
 * With no mounted file systems, `MountableFileSystem` acts as a simple `InMemory` filesystem.
 */
var MountableFileSystem = /** @class */ (function (_super) {
    __extends(MountableFileSystem, _super);
    /**
     * Creates a new, empty MountableFileSystem.
     */
    function MountableFileSystem(rootFs) {
        var _this = _super.call(this) || this;
        // Contains the list of mount points in mntMap, sorted by string length in decreasing order.
        // Ensures that we scan the most specific mount points for a match first, which lets us
        // nest mount points.
        _this.mountList = [];
        _this.mntMap = {};
        _this.rootFs = rootFs;
        return _this;
    }
    /**
     * Creates a MountableFileSystem instance with the given options.
     */
    MountableFileSystem.Create = function (opts, cb) {
        InMemory_1.default.Create({}, function (e, imfs) {
            if (imfs) {
                var fs_1 = new MountableFileSystem(imfs);
                try {
                    Object.keys(opts).forEach(function (mountPoint) {
                        fs_1.mount(mountPoint, opts[mountPoint]);
                    });
                }
                catch (e) {
                    return cb(e);
                }
                cb(null, fs_1);
            }
            else {
                cb(e);
            }
        });
    };
    MountableFileSystem.isAvailable = function () {
        return true;
    };
    /**
     * Mounts the file system at the given mount point.
     */
    MountableFileSystem.prototype.mount = function (mountPoint, fs) {
        if (mountPoint[0] !== '/') {
            mountPoint = "/".concat(mountPoint);
        }
        mountPoint = path.resolve(mountPoint);
        if (this.mntMap[mountPoint]) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Mount point " + mountPoint + " is already taken.");
        }
        (0, util_1.mkdirpSync)(mountPoint, 0x1ff, this.rootFs);
        this.mntMap[mountPoint] = fs;
        this.mountList.push(mountPoint);
        this.mountList = this.mountList.sort(function (a, b) { return b.length - a.length; });
    };
    MountableFileSystem.prototype.umount = function (mountPoint) {
        if (mountPoint[0] !== '/') {
            mountPoint = "/".concat(mountPoint);
        }
        mountPoint = path.resolve(mountPoint);
        if (!this.mntMap[mountPoint]) {
            throw new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Mount point " + mountPoint + " is already unmounted.");
        }
        delete this.mntMap[mountPoint];
        this.mountList.splice(this.mountList.indexOf(mountPoint), 1);
        while (mountPoint !== '/') {
            if (this.rootFs.readdirSync(mountPoint).length === 0) {
                this.rootFs.rmdirSync(mountPoint);
                mountPoint = path.dirname(mountPoint);
            }
            else {
                break;
            }
        }
    };
    /**
     * Returns the file system that the path points to.
     */
    MountableFileSystem.prototype._getFs = function (path) {
        var mountList = this.mountList, len = mountList.length;
        for (var i = 0; i < len; i++) {
            var mountPoint = mountList[i];
            // We know path is normalized, so it is a substring of the mount point.
            if (mountPoint.length <= path.length && path.indexOf(mountPoint) === 0) {
                path = path.substr(mountPoint.length > 1 ? mountPoint.length : 0);
                if (path === '') {
                    path = '/';
                }
                return { fs: this.mntMap[mountPoint], path: path, mountPoint: mountPoint };
            }
        }
        // Query our root file system.
        return { fs: this.rootFs, path: path, mountPoint: '/' };
    };
    // Global information methods
    MountableFileSystem.prototype.getName = function () {
        return MountableFileSystem.Name;
    };
    MountableFileSystem.prototype.diskSpace = function (path, cb) {
        cb(0, 0);
    };
    MountableFileSystem.prototype.isReadOnly = function () {
        return false;
    };
    MountableFileSystem.prototype.supportsLinks = function () {
        // I'm not ready for cross-FS links yet.
        return false;
    };
    MountableFileSystem.prototype.supportsProps = function () {
        return false;
    };
    MountableFileSystem.prototype.supportsSynch = function () {
        return true;
    };
    /**
     * Fixes up error messages so they mention the mounted file location relative
     * to the MFS root, not to the particular FS's root.
     * Mutates the input error, and returns it.
     */
    MountableFileSystem.prototype.standardizeError = function (err, path, realPath) {
        var index = err.message.indexOf(path);
        if (index !== -1) {
            err.message = err.message.substr(0, index) + realPath + err.message.substr(index + path.length);
            err.path = realPath;
        }
        return err;
    };
    // The following methods involve multiple file systems, and thus have custom
    // logic.
    // Note that we go through the Node API to use its robust default argument
    // processing.
    MountableFileSystem.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        // Scenario 1: old and new are on same FS.
        var fs1rv = this._getFs(oldPath);
        var fs2rv = this._getFs(newPath);
        if (fs1rv.fs === fs2rv.fs) {
            return fs1rv.fs.rename(fs1rv.path, fs2rv.path, function (e) {
                if (e) {
                    _this.standardizeError(_this.standardizeError(e, fs1rv.path, oldPath), fs2rv.path, newPath);
                }
                cb(e);
            });
        }
        // Scenario 2: Different file systems.
        // Read old file, write new file, delete old file.
        return node_fs_1.default.readFile(oldPath, function (err, data) {
            if (err) {
                return cb(err);
            }
            node_fs_1.default.writeFile(newPath, data, function (err) {
                if (err) {
                    return cb(err);
                }
                node_fs_1.default.unlink(oldPath, cb);
            });
        });
    };
    MountableFileSystem.prototype.renameSync = function (oldPath, newPath) {
        // Scenario 1: old and new are on same FS.
        var fs1rv = this._getFs(oldPath);
        var fs2rv = this._getFs(newPath);
        if (fs1rv.fs === fs2rv.fs) {
            try {
                return fs1rv.fs.renameSync(fs1rv.path, fs2rv.path);
            }
            catch (e) {
                this.standardizeError(this.standardizeError(e, fs1rv.path, oldPath), fs2rv.path, newPath);
                throw e;
            }
        }
        // Scenario 2: Different file systems.
        var data = node_fs_1.default.readFileSync(oldPath);
        node_fs_1.default.writeFileSync(newPath, data);
        return node_fs_1.default.unlinkSync(oldPath);
    };
    MountableFileSystem.prototype.readdirSync = function (p) {
        var fsInfo = this._getFs(p);
        // If null, rootfs did not have the directory
        // (or the target FS is the root fs).
        var rv = null;
        // Mount points are all defined in the root FS.
        // Ensure that we list those, too.
        if (fsInfo.fs !== this.rootFs) {
            try {
                rv = this.rootFs.readdirSync(p);
            }
            catch (e) {
                // Ignore.
            }
        }
        try {
            var rv2_1 = fsInfo.fs.readdirSync(fsInfo.path);
            if (rv === null) {
                return rv2_1;
            }
            else {
                // Filter out duplicates.
                return rv2_1.concat(rv.filter(function (val) { return rv2_1.indexOf(val) === -1; }));
            }
        }
        catch (e) {
            if (rv === null) {
                throw this.standardizeError(e, fsInfo.path, p);
            }
            else {
                // The root FS had something.
                return rv;
            }
        }
    };
    MountableFileSystem.prototype.readdir = function (p, cb) {
        var _this = this;
        var fsInfo = this._getFs(p);
        fsInfo.fs.readdir(fsInfo.path, function (err, files) {
            if (fsInfo.fs !== _this.rootFs) {
                try {
                    var rv = _this.rootFs.readdirSync(p);
                    if (files) {
                        // Filter out duplicates.
                        files = files.concat(rv.filter(function (val) { return files.indexOf(val) === -1; }));
                    }
                    else {
                        files = rv;
                    }
                }
                catch (e) {
                    // Root FS and target FS did not have directory.
                    if (err) {
                        return cb(_this.standardizeError(err, fsInfo.path, p));
                    }
                }
            }
            else if (err) {
                // Root FS and target FS are the same, and did not have directory.
                return cb(_this.standardizeError(err, fsInfo.path, p));
            }
            cb(null, files);
        });
    };
    MountableFileSystem.prototype.realpathSync = function (p, cache) {
        var fsInfo = this._getFs(p);
        try {
            var mountedPath = fsInfo.fs.realpathSync(fsInfo.path, {});
            // resolve is there to remove any trailing slash that may be present
            return path.resolve(path.join(fsInfo.mountPoint, mountedPath));
        }
        catch (e) {
            throw this.standardizeError(e, fsInfo.path, p);
        }
    };
    MountableFileSystem.prototype.realpath = function (p, cache, cb) {
        var _this = this;
        var fsInfo = this._getFs(p);
        fsInfo.fs.realpath(fsInfo.path, {}, function (err, rv) {
            if (err) {
                cb(_this.standardizeError(err, fsInfo.path, p));
            }
            else {
                // resolve is there to remove any trailing slash that may be present
                cb(null, path.resolve(path.join(fsInfo.mountPoint, rv)));
            }
        });
    };
    MountableFileSystem.prototype.rmdirSync = function (p) {
        var fsInfo = this._getFs(p);
        if (this._containsMountPt(p)) {
            throw api_error_1.ApiError.ENOTEMPTY(p);
        }
        else {
            try {
                fsInfo.fs.rmdirSync(fsInfo.path);
            }
            catch (e) {
                throw this.standardizeError(e, fsInfo.path, p);
            }
        }
    };
    MountableFileSystem.prototype.rmdir = function (p, cb) {
        var _this = this;
        var fsInfo = this._getFs(p);
        if (this._containsMountPt(p)) {
            cb(api_error_1.ApiError.ENOTEMPTY(p));
        }
        else {
            fsInfo.fs.rmdir(fsInfo.path, function (err) {
                cb(err ? _this.standardizeError(err, fsInfo.path, p) : null);
            });
        }
    };
    /**
     * Returns true if the given path contains a mount point.
     */
    MountableFileSystem.prototype._containsMountPt = function (p) {
        var mountPoints = this.mountList, len = mountPoints.length;
        for (var i = 0; i < len; i++) {
            var pt = mountPoints[i];
            if (pt.length >= p.length && pt.slice(0, p.length) === p) {
                return true;
            }
        }
        return false;
    };
    MountableFileSystem.Name = "MountableFileSystem";
    MountableFileSystem.Options = {};
    return MountableFileSystem;
}(file_system_1.BaseFileSystem));
exports.default = MountableFileSystem;
/**
 * Tricky: Define all of the functions that merely forward arguments to the
 * relevant file system, or return/throw an error.
 * Take advantage of the fact that the *first* argument is always the path, and
 * the *last* is the callback function (if async).
 * @todo Can use numArgs to make proxying more efficient.
 * @hidden
 */
function defineFcn(name, isSync, numArgs) {
    if (isSync) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var path = args[0];
            var rv = this._getFs(path);
            args[0] = rv.path;
            try {
                return rv.fs[name].apply(rv.fs, args);
            }
            catch (e) {
                this.standardizeError(e, rv.path, path);
                throw e;
            }
        };
    }
    else {
        return function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var path = args[0];
            var rv = this._getFs(path);
            args[0] = rv.path;
            if (typeof args[args.length - 1] === 'function') {
                var cb_1 = args[args.length - 1];
                args[args.length - 1] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (args.length > 0 && args[0] instanceof api_error_1.ApiError) {
                        _this.standardizeError(args[0], rv.path, path);
                    }
                    cb_1.apply(null, args);
                };
            }
            return rv.fs[name].apply(rv.fs, args);
        };
    }
}
/**
 * @hidden
 */
var fsCmdMap = [
    // 1 arg functions
    ['exists', 'unlink', 'readlink'],
    // 2 arg functions
    ['stat', 'mkdir', 'truncate'],
    // 3 arg functions
    ['open', 'readFile', 'chmod', 'utimes'],
    // 4 arg functions
    ['chown'],
    // 5 arg functions
    ['writeFile', 'appendFile']
];
for (var i = 0; i < fsCmdMap.length; i++) {
    var cmds = fsCmdMap[i];
    for (var _i = 0, cmds_1 = cmds; _i < cmds_1.length; _i++) {
        var fnName = cmds_1[_i];
        MountableFileSystem.prototype[fnName] = defineFcn(fnName, false, i + 1);
        MountableFileSystem.prototype[fnName + 'Sync'] = defineFcn(fnName + 'Sync', true, i + 1);
    }
}