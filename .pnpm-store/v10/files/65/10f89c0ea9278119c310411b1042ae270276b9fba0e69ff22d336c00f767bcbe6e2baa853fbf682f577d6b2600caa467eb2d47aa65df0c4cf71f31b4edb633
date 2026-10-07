"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHandle = void 0;
function promisify(vol, fn, getResult) {
    if (getResult === void 0) { getResult = function (input) { return input; }; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            vol[fn].bind(vol).apply(void 0, __spreadArray(__spreadArray([], args, false), [function (error, result) {
                    if (error)
                        return reject(error);
                    return resolve(getResult(result));
                }], false));
        });
    };
}
var FileHandle = /** @class */ (function () {
    function FileHandle(vol, fd) {
        this.vol = vol;
        this.fd = fd;
    }
    FileHandle.prototype.appendFile = function (data, options) {
        return promisify(this.vol, 'appendFile')(this.fd, data, options);
    };
    FileHandle.prototype.chmod = function (mode) {
        return promisify(this.vol, 'fchmod')(this.fd, mode);
    };
    FileHandle.prototype.chown = function (uid, gid) {
        return promisify(this.vol, 'fchown')(this.fd, uid, gid);
    };
    FileHandle.prototype.close = function () {
        return promisify(this.vol, 'close')(this.fd);
    };
    FileHandle.prototype.datasync = function () {
        return promisify(this.vol, 'fdatasync')(this.fd);
    };
    FileHandle.prototype.read = function (buffer, offset, length, position) {
        return promisify(this.vol, 'read', function (bytesRead) { return ({ bytesRead: bytesRead, buffer: buffer }); })(this.fd, buffer, offset, length, position);
    };
    FileHandle.prototype.readFile = function (options) {
        return promisify(this.vol, 'readFile')(this.fd, options);
    };
    FileHandle.prototype.stat = function (options) {
        return promisify(this.vol, 'fstat')(this.fd, options);
    };
    FileHandle.prototype.sync = function () {
        return promisify(this.vol, 'fsync')(this.fd);
    };
    FileHandle.prototype.truncate = function (len) {
        return promisify(this.vol, 'ftruncate')(this.fd, len);
    };
    FileHandle.prototype.utimes = function (atime, mtime) {
        return promisify(this.vol, 'futimes')(this.fd, atime, mtime);
    };
    FileHandle.prototype.write = function (buffer, offset, length, position) {
        return promisify(this.vol, 'write', function (bytesWritten) { return ({ bytesWritten: bytesWritten, buffer: buffer }); })(this.fd, buffer, offset, length, position);
    };
    FileHandle.prototype.writeFile = function (data, options) {
        return promisify(this.vol, 'writeFile')(this.fd, data, options);
    };
    return FileHandle;
}());
exports.FileHandle = FileHandle;
function createPromisesApi(vol) {
    if (typeof Promise === 'undefined')
        return null;
    return {
        FileHandle: FileHandle,
        access: function (path, mode) {
            return promisify(vol, 'access')(path, mode);
        },
        appendFile: function (path, data, options) {
            return promisify(vol, 'appendFile')(path instanceof FileHandle ? path.fd : path, data, options);
        },
        chmod: function (path, mode) {
            return promisify(vol, 'chmod')(path, mode);
        },
        chown: function (path, uid, gid) {
            return promisify(vol, 'chown')(path, uid, gid);
        },
        copyFile: function (src, dest, flags) {
            return promisify(vol, 'copyFile')(src, dest, flags);
        },
        lchmod: function (path, mode) {
            return promisify(vol, 'lchmod')(path, mode);
        },
        lchown: function (path, uid, gid) {
            return promisify(vol, 'lchown')(path, uid, gid);
        },
        link: function (existingPath, newPath) {
            return promisify(vol, 'link')(existingPath, newPath);
        },
        lstat: function (path, options) {
            return promisify(vol, 'lstat')(path, options);
        },
        mkdir: function (path, options) {
            return promisify(vol, 'mkdir')(path, options);
        },
        mkdtemp: function (prefix, options) {
            return promisify(vol, 'mkdtemp')(prefix, options);
        },
        open: function (path, flags, mode) {
            return promisify(vol, 'open', function (fd) { return new FileHandle(vol, fd); })(path, flags, mode);
        },
        readdir: function (path, options) {
            return promisify(vol, 'readdir')(path, options);
        },
        readFile: function (id, options) {
            return promisify(vol, 'readFile')(id instanceof FileHandle ? id.fd : id, options);
        },
        readlink: function (path, options) {
            return promisify(vol, 'readlink')(path, options);
        },
        realpath: function (path, options) {
            return promisify(vol, 'realpath')(path, options);
        },
        rename: function (oldPath, newPath) {
            return promisify(vol, 'rename')(oldPath, newPath);
        },
        rmdir: function (path) {
            return promisify(vol, 'rmdir')(path);
        },
        rm: function (path, options) {
            return promisify(vol, 'rm')(path, options);
        },
        stat: function (path, options) {
            return promisify(vol, 'stat')(path, options);
        },
        symlink: function (target, path, type) {
            return promisify(vol, 'symlink')(target, path, type);
        },
        truncate: function (path, len) {
            return promisify(vol, 'truncate')(path, len);
        },
        unlink: function (path) {
            return promisify(vol, 'unlink')(path);
        },
        utimes: function (path, atime, mtime) {
            return promisify(vol, 'utimes')(path, atime, mtime);
        },
        writeFile: function (id, data, options) {
            return promisify(vol, 'writeFile')(id instanceof FileHandle ? id.fd : id, data, options);
        },
    };
}
exports.default = createPromisesApi;
