"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mutex_1 = require("./mutex");
/**
 * This class serializes access to an underlying async filesystem.
 * For example, on an OverlayFS instance with an async lower
 * directory operations like rename and rmdir may involve multiple
 * requests involving both the upper and lower filesystems -- they
 * are not executed in a single atomic step.  OverlayFS uses this
 * LockedFS to avoid having to reason about the correctness of
 * multiple requests interleaving.
 */
var LockedFS = /** @class */ (function () {
    function LockedFS(fs) {
        this._fs = fs;
        this._mu = new mutex_1.default();
    }
    LockedFS.prototype.getName = function () {
        return 'LockedFS<' + this._fs.getName() + '>';
    };
    LockedFS.prototype.getFSUnlocked = function () {
        return this._fs;
    };
    LockedFS.prototype.diskSpace = function (p, cb) {
        // FIXME: should this lock?
        this._fs.diskSpace(p, cb);
    };
    LockedFS.prototype.isReadOnly = function () {
        return this._fs.isReadOnly();
    };
    LockedFS.prototype.supportsLinks = function () {
        return this._fs.supportsLinks();
    };
    LockedFS.prototype.supportsProps = function () {
        return this._fs.supportsProps();
    };
    LockedFS.prototype.supportsSynch = function () {
        return this._fs.supportsSynch();
    };
    LockedFS.prototype.rename = function (oldPath, newPath, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.rename(oldPath, newPath, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.renameSync = function (oldPath, newPath) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.renameSync(oldPath, newPath);
    };
    LockedFS.prototype.stat = function (p, isLstat, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.stat(p, isLstat, function (err, stat) {
                _this._mu.unlock();
                cb(err, stat);
            });
        });
    };
    LockedFS.prototype.statSync = function (p, isLstat) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.statSync(p, isLstat);
    };
    LockedFS.prototype.open = function (p, flag, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.open(p, flag, mode, function (err, fd) {
                _this._mu.unlock();
                cb(err, fd);
            });
        });
    };
    LockedFS.prototype.openSync = function (p, flag, mode) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.openSync(p, flag, mode);
    };
    LockedFS.prototype.unlink = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.unlink(p, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.unlinkSync = function (p) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.unlinkSync(p);
    };
    LockedFS.prototype.rmdir = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.rmdir(p, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.rmdirSync = function (p) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.rmdirSync(p);
    };
    LockedFS.prototype.mkdir = function (p, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.mkdir(p, mode, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.mkdirSync = function (p, mode) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.mkdirSync(p, mode);
    };
    LockedFS.prototype.readdir = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.readdir(p, function (err, files) {
                _this._mu.unlock();
                cb(err, files);
            });
        });
    };
    LockedFS.prototype.readdirSync = function (p) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.readdirSync(p);
    };
    LockedFS.prototype.exists = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.exists(p, function (exists) {
                _this._mu.unlock();
                cb(exists);
            });
        });
    };
    LockedFS.prototype.existsSync = function (p) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.existsSync(p);
    };
    LockedFS.prototype.realpath = function (p, cache, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.realpath(p, cache, function (err, resolvedPath) {
                _this._mu.unlock();
                cb(err, resolvedPath);
            });
        });
    };
    LockedFS.prototype.realpathSync = function (p, cache) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.realpathSync(p, cache);
    };
    LockedFS.prototype.truncate = function (p, len, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.truncate(p, len, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.truncateSync = function (p, len) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.truncateSync(p, len);
    };
    LockedFS.prototype.readFile = function (fname, encoding, flag, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.readFile(fname, encoding, flag, function (err, data) {
                _this._mu.unlock();
                cb(err, data);
            });
        });
    };
    LockedFS.prototype.readFileSync = function (fname, encoding, flag) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.readFileSync(fname, encoding, flag);
    };
    LockedFS.prototype.writeFile = function (fname, data, encoding, flag, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.writeFile(fname, data, encoding, flag, mode, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.writeFileSync = function (fname, data, encoding, flag, mode) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.writeFileSync(fname, data, encoding, flag, mode);
    };
    LockedFS.prototype.appendFile = function (fname, data, encoding, flag, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.appendFile(fname, data, encoding, flag, mode, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.appendFileSync = function (fname, data, encoding, flag, mode) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.appendFileSync(fname, data, encoding, flag, mode);
    };
    LockedFS.prototype.chmod = function (p, isLchmod, mode, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.chmod(p, isLchmod, mode, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.chmodSync = function (p, isLchmod, mode) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.chmodSync(p, isLchmod, mode);
    };
    LockedFS.prototype.chown = function (p, isLchown, uid, gid, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.chown(p, isLchown, uid, gid, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.chownSync = function (p, isLchown, uid, gid) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.chownSync(p, isLchown, uid, gid);
    };
    LockedFS.prototype.utimes = function (p, atime, mtime, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.utimes(p, atime, mtime, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.utimesSync = function (p, atime, mtime) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.utimesSync(p, atime, mtime);
    };
    LockedFS.prototype.link = function (srcpath, dstpath, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.link(srcpath, dstpath, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.linkSync = function (srcpath, dstpath) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.linkSync(srcpath, dstpath);
    };
    LockedFS.prototype.symlink = function (srcpath, dstpath, type, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.symlink(srcpath, dstpath, type, function (err) {
                _this._mu.unlock();
                cb(err);
            });
        });
    };
    LockedFS.prototype.symlinkSync = function (srcpath, dstpath, type) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.symlinkSync(srcpath, dstpath, type);
    };
    LockedFS.prototype.readlink = function (p, cb) {
        var _this = this;
        this._mu.lock(function () {
            _this._fs.readlink(p, function (err, linkString) {
                _this._mu.unlock();
                cb(err, linkString);
            });
        });
    };
    LockedFS.prototype.readlinkSync = function (p) {
        if (this._mu.isLocked()) {
            throw new Error('invalid sync call');
        }
        return this._fs.readlinkSync(p);
    };
    return LockedFS;
}());
exports.default = LockedFS;