"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("../core/node_fs");
var util_1 = require("../core/util");
var BFSEmscriptenStreamOps = /** @class */ (function () {
    function BFSEmscriptenStreamOps(fs) {
        this.fs = fs;
        this.nodefs = fs.getNodeFS();
        this.FS = fs.getFS();
        this.PATH = fs.getPATH();
        this.ERRNO_CODES = fs.getERRNO_CODES();
    }
    BFSEmscriptenStreamOps.prototype.open = function (stream) {
        var path = this.fs.realPath(stream.node);
        var FS = this.FS;
        try {
            if (FS.isFile(stream.node.mode)) {
                stream.nfd = this.nodefs.openSync(path, this.fs.flagsToPermissionString(stream.flags));
            }
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenStreamOps.prototype.close = function (stream) {
        var FS = this.FS;
        try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
                this.nodefs.closeSync(stream.nfd);
            }
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenStreamOps.prototype.read = function (stream, buffer, offset, length, position) {
        // Avoid copying overhead by reading directly into buffer.
        try {
            return this.nodefs.readSync(stream.nfd, (0, util_1.uint8Array2Buffer)(buffer), offset, length, position);
        }
        catch (e) {
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenStreamOps.prototype.write = function (stream, buffer, offset, length, position) {
        // Avoid copying overhead.
        try {
            return this.nodefs.writeSync(stream.nfd, (0, util_1.uint8Array2Buffer)(buffer), offset, length, position);
        }
        catch (e) {
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenStreamOps.prototype.llseek = function (stream, offset, whence) {
        var position = offset;
        if (whence === 1) { // SEEK_CUR.
            position += stream.position;
        }
        else if (whence === 2) { // SEEK_END.
            if (this.FS.isFile(stream.node.mode)) {
                try {
                    var stat = this.nodefs.fstatSync(stream.nfd);
                    position += stat.size;
                }
                catch (e) {
                    throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
                }
            }
        }
        if (position < 0) {
            throw new this.FS.ErrnoError(this.ERRNO_CODES.EINVAL);
        }
        stream.position = position;
        return position;
    };
    return BFSEmscriptenStreamOps;
}());
var BFSEmscriptenNodeOps = /** @class */ (function () {
    function BFSEmscriptenNodeOps(fs) {
        this.fs = fs;
        this.nodefs = fs.getNodeFS();
        this.FS = fs.getFS();
        this.PATH = fs.getPATH();
        this.ERRNO_CODES = fs.getERRNO_CODES();
    }
    BFSEmscriptenNodeOps.prototype.getattr = function (node) {
        var path = this.fs.realPath(node);
        var stat;
        try {
            stat = this.nodefs.lstatSync(path);
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
        return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
        };
    };
    BFSEmscriptenNodeOps.prototype.setattr = function (node, attr) {
        var path = this.fs.realPath(node);
        try {
            if (attr.mode !== undefined) {
                this.nodefs.chmodSync(path, attr.mode);
                // update the common node structure mode as well
                node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
                var date = new Date(attr.timestamp);
                this.nodefs.utimesSync(path, date, date);
            }
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            // Ignore not supported errors. Emscripten does utimesSync when it
            // writes files, but never really requires the value to be set.
            if (e.code !== "ENOTSUP") {
                throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
            }
        }
        if (attr.size !== undefined) {
            try {
                this.nodefs.truncateSync(path, attr.size);
            }
            catch (e) {
                if (!e.code) {
                    throw e;
                }
                throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
            }
        }
    };
    BFSEmscriptenNodeOps.prototype.lookup = function (parent, name) {
        var path = this.PATH.join2(this.fs.realPath(parent), name);
        var mode = this.fs.getMode(path);
        return this.fs.createNode(parent, name, mode);
    };
    BFSEmscriptenNodeOps.prototype.mknod = function (parent, name, mode, dev) {
        var node = this.fs.createNode(parent, name, mode, dev);
        // create the backing node for this in the fs root as well
        var path = this.fs.realPath(node);
        try {
            if (this.FS.isDir(node.mode)) {
                this.nodefs.mkdirSync(path, node.mode);
            }
            else {
                this.nodefs.writeFileSync(path, '', { mode: node.mode });
            }
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
        return node;
    };
    BFSEmscriptenNodeOps.prototype.rename = function (oldNode, newDir, newName) {
        var oldPath = this.fs.realPath(oldNode);
        var newPath = this.PATH.join2(this.fs.realPath(newDir), newName);
        try {
            this.nodefs.renameSync(oldPath, newPath);
            // This logic is missing from the original NodeFS,
            // causing Emscripten's filesystem to think that the old file still exists.
            oldNode.name = newName;
            oldNode.parent = newDir;
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.unlink = function (parent, name) {
        var path = this.PATH.join2(this.fs.realPath(parent), name);
        try {
            this.nodefs.unlinkSync(path);
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.rmdir = function (parent, name) {
        var path = this.PATH.join2(this.fs.realPath(parent), name);
        try {
            this.nodefs.rmdirSync(path);
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.readdir = function (node) {
        var path = this.fs.realPath(node);
        try {
            // Node does not list . and .. in directory listings,
            // but Emscripten expects it.
            var contents = this.nodefs.readdirSync(path);
            contents.push('.', '..');
            return contents;
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.symlink = function (parent, newName, oldPath) {
        var newPath = this.PATH.join2(this.fs.realPath(parent), newName);
        try {
            this.nodefs.symlinkSync(oldPath, newPath);
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    BFSEmscriptenNodeOps.prototype.readlink = function (node) {
        var path = this.fs.realPath(node);
        try {
            return this.nodefs.readlinkSync(path);
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
    };
    return BFSEmscriptenNodeOps;
}());
var BFSEmscriptenFS = /** @class */ (function () {
    function BFSEmscriptenFS(_FS, _PATH, _ERRNO_CODES, nodefs) {
        if (_FS === void 0) { _FS = self['FS']; }
        if (_PATH === void 0) { _PATH = self['PATH']; }
        if (_ERRNO_CODES === void 0) { _ERRNO_CODES = self['ERRNO_CODES']; }
        if (nodefs === void 0) { nodefs = node_fs_1.default; }
        // This maps the integer permission modes from http://linux.die.net/man/3/open
        // to node.js-specific file open permission strings at http://nodejs.org/api/fs.html#fs_fs_open_path_flags_mode_callback
        this.flagsToPermissionStringMap = {
            0 /*O_RDONLY*/: 'r',
            1 /*O_WRONLY*/: 'r+',
            2 /*O_RDWR*/: 'r+',
            64 /*O_CREAT*/: 'r',
            65 /*O_WRONLY|O_CREAT*/: 'r+',
            66 /*O_RDWR|O_CREAT*/: 'r+',
            129 /*O_WRONLY|O_EXCL*/: 'rx+',
            193 /*O_WRONLY|O_CREAT|O_EXCL*/: 'rx+',
            514 /*O_RDWR|O_TRUNC*/: 'w+',
            577 /*O_WRONLY|O_CREAT|O_TRUNC*/: 'w',
            578 /*O_CREAT|O_RDWR|O_TRUNC*/: 'w+',
            705 /*O_WRONLY|O_CREAT|O_EXCL|O_TRUNC*/: 'wx',
            706 /*O_RDWR|O_CREAT|O_EXCL|O_TRUNC*/: 'wx+',
            1024 /*O_APPEND*/: 'a',
            1025 /*O_WRONLY|O_APPEND*/: 'a',
            1026 /*O_RDWR|O_APPEND*/: 'a+',
            1089 /*O_WRONLY|O_CREAT|O_APPEND*/: 'a',
            1090 /*O_RDWR|O_CREAT|O_APPEND*/: 'a+',
            1153 /*O_WRONLY|O_EXCL|O_APPEND*/: 'ax',
            1154 /*O_RDWR|O_EXCL|O_APPEND*/: 'ax+',
            1217 /*O_WRONLY|O_CREAT|O_EXCL|O_APPEND*/: 'ax',
            1218 /*O_RDWR|O_CREAT|O_EXCL|O_APPEND*/: 'ax+',
            4096 /*O_RDONLY|O_DSYNC*/: 'rs',
            4098 /*O_RDWR|O_DSYNC*/: 'rs+'
        };
        this.nodefs = nodefs;
        this.FS = _FS;
        this.PATH = _PATH;
        this.ERRNO_CODES = _ERRNO_CODES;
        this.node_ops = new BFSEmscriptenNodeOps(this);
        this.stream_ops = new BFSEmscriptenStreamOps(this);
    }
    BFSEmscriptenFS.prototype.mount = function (m) {
        return this.createNode(null, '/', this.getMode(m.opts.root), 0);
    };
    BFSEmscriptenFS.prototype.createNode = function (parent, name, mode, dev) {
        var FS = this.FS;
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
            throw new FS.ErrnoError(this.ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = this.node_ops;
        node.stream_ops = this.stream_ops;
        return node;
    };
    BFSEmscriptenFS.prototype.getMode = function (path) {
        var stat;
        try {
            stat = this.nodefs.lstatSync(path);
        }
        catch (e) {
            if (!e.code) {
                throw e;
            }
            throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
        }
        return stat.mode;
    };
    BFSEmscriptenFS.prototype.realPath = function (node) {
        var parts = [];
        while (node.parent !== node) {
            parts.push(node.name);
            node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return this.PATH.join.apply(null, parts);
    };
    BFSEmscriptenFS.prototype.flagsToPermissionString = function (flags) {
        var parsedFlags = (typeof flags === "string") ? parseInt(flags, 10) : flags;
        parsedFlags &= 0x1FFF;
        if (parsedFlags in this.flagsToPermissionStringMap) {
            return this.flagsToPermissionStringMap[parsedFlags];
        }
        else {
            return flags;
        }
    };
    BFSEmscriptenFS.prototype.getNodeFS = function () {
        return this.nodefs;
    };
    BFSEmscriptenFS.prototype.getFS = function () {
        return this.FS;
    };
    BFSEmscriptenFS.prototype.getPATH = function () {
        return this.PATH;
    };
    BFSEmscriptenFS.prototype.getERRNO_CODES = function () {
        return this.ERRNO_CODES;
    };
    return BFSEmscriptenFS;
}());
exports.default = BFSEmscriptenFS;