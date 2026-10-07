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
exports.File = exports.Link = exports.Node = exports.SEP = void 0;
var process_1 = require("./process");
var buffer_1 = require("./internal/buffer");
var constants_1 = require("./constants");
var events_1 = require("events");
var Stats_1 = require("./Stats");
var S_IFMT = constants_1.constants.S_IFMT, S_IFDIR = constants_1.constants.S_IFDIR, S_IFREG = constants_1.constants.S_IFREG, S_IFLNK = constants_1.constants.S_IFLNK, O_APPEND = constants_1.constants.O_APPEND;
var getuid = function () { var _a, _b; return (_b = (_a = process_1.default.getuid) === null || _a === void 0 ? void 0 : _a.call(process_1.default)) !== null && _b !== void 0 ? _b : 0; };
var getgid = function () { var _a, _b; return (_b = (_a = process_1.default.getgid) === null || _a === void 0 ? void 0 : _a.call(process_1.default)) !== null && _b !== void 0 ? _b : 0; };
exports.SEP = '/';
/**
 * Node in a file system (like i-node, v-node).
 */
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node(ino, perm) {
        if (perm === void 0) { perm = 438; }
        var _this = _super.call(this) || this;
        // User ID and group ID.
        _this._uid = getuid();
        _this._gid = getgid();
        _this._atime = new Date();
        _this._mtime = new Date();
        _this._ctime = new Date();
        _this._perm = 438; // Permissions `chmod`, `fchmod`
        _this.mode = S_IFREG; // S_IFDIR, S_IFREG, etc.. (file by default?)
        // Number of hard links pointing at this Node.
        _this._nlink = 1;
        _this._perm = perm;
        _this.mode |= perm;
        _this.ino = ino;
        return _this;
    }
    Object.defineProperty(Node.prototype, "ctime", {
        get: function () {
            return this._ctime;
        },
        set: function (ctime) {
            this._ctime = ctime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "uid", {
        get: function () {
            return this._uid;
        },
        set: function (uid) {
            this._uid = uid;
            this.ctime = new Date();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "gid", {
        get: function () {
            return this._gid;
        },
        set: function (gid) {
            this._gid = gid;
            this.ctime = new Date();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "atime", {
        get: function () {
            return this._atime;
        },
        set: function (atime) {
            this._atime = atime;
            this.ctime = new Date();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "mtime", {
        get: function () {
            return this._mtime;
        },
        set: function (mtime) {
            this._mtime = mtime;
            this.ctime = new Date();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "perm", {
        get: function () {
            return this._perm;
        },
        set: function (perm) {
            this._perm = perm;
            this.ctime = new Date();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nlink", {
        get: function () {
            return this._nlink;
        },
        set: function (nlink) {
            this._nlink = nlink;
            this.ctime = new Date();
        },
        enumerable: false,
        configurable: true
    });
    Node.prototype.getString = function (encoding) {
        if (encoding === void 0) { encoding = 'utf8'; }
        this.atime = new Date();
        return this.getBuffer().toString(encoding);
    };
    Node.prototype.setString = function (str) {
        // this.setBuffer(bufferFrom(str, 'utf8'));
        this.buf = (0, buffer_1.bufferFrom)(str, 'utf8');
        this.touch();
    };
    Node.prototype.getBuffer = function () {
        this.atime = new Date();
        if (!this.buf)
            this.setBuffer((0, buffer_1.bufferAllocUnsafe)(0));
        return (0, buffer_1.bufferFrom)(this.buf); // Return a copy.
    };
    Node.prototype.setBuffer = function (buf) {
        this.buf = (0, buffer_1.bufferFrom)(buf); // Creates a copy of data.
        this.touch();
    };
    Node.prototype.getSize = function () {
        return this.buf ? this.buf.length : 0;
    };
    Node.prototype.setModeProperty = function (property) {
        this.mode = (this.mode & ~S_IFMT) | property;
    };
    Node.prototype.setIsFile = function () {
        this.setModeProperty(S_IFREG);
    };
    Node.prototype.setIsDirectory = function () {
        this.setModeProperty(S_IFDIR);
    };
    Node.prototype.setIsSymlink = function () {
        this.setModeProperty(S_IFLNK);
    };
    Node.prototype.isFile = function () {
        return (this.mode & S_IFMT) === S_IFREG;
    };
    Node.prototype.isDirectory = function () {
        return (this.mode & S_IFMT) === S_IFDIR;
    };
    Node.prototype.isSymlink = function () {
        // return !!this.symlink;
        return (this.mode & S_IFMT) === S_IFLNK;
    };
    Node.prototype.makeSymlink = function (steps) {
        this.symlink = steps;
        this.setIsSymlink();
    };
    Node.prototype.write = function (buf, off, len, pos) {
        if (off === void 0) { off = 0; }
        if (len === void 0) { len = buf.length; }
        if (pos === void 0) { pos = 0; }
        if (!this.buf)
            this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
        if (pos + len > this.buf.length) {
            var newBuf = (0, buffer_1.bufferAllocUnsafe)(pos + len);
            this.buf.copy(newBuf, 0, 0, this.buf.length);
            this.buf = newBuf;
        }
        buf.copy(this.buf, pos, off, off + len);
        this.touch();
        return len;
    };
    // Returns the number of bytes read.
    Node.prototype.read = function (buf, off, len, pos) {
        if (off === void 0) { off = 0; }
        if (len === void 0) { len = buf.byteLength; }
        if (pos === void 0) { pos = 0; }
        this.atime = new Date();
        if (!this.buf)
            this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
        var actualLen = len;
        if (actualLen > buf.byteLength) {
            actualLen = buf.byteLength;
        }
        if (actualLen + pos > this.buf.length) {
            actualLen = this.buf.length - pos;
        }
        this.buf.copy(buf, off, pos, pos + actualLen);
        return actualLen;
    };
    Node.prototype.truncate = function (len) {
        if (len === void 0) { len = 0; }
        if (!len)
            this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
        else {
            if (!this.buf)
                this.buf = (0, buffer_1.bufferAllocUnsafe)(0);
            if (len <= this.buf.length) {
                this.buf = this.buf.slice(0, len);
            }
            else {
                var buf = (0, buffer_1.bufferAllocUnsafe)(len);
                this.buf.copy(buf);
                buf.fill(0, this.buf.length);
                this.buf = buf;
            }
        }
        this.touch();
    };
    Node.prototype.chmod = function (perm) {
        this.perm = perm;
        this.mode = (this.mode & ~511) | perm;
        this.touch();
    };
    Node.prototype.chown = function (uid, gid) {
        this.uid = uid;
        this.gid = gid;
        this.touch();
    };
    Node.prototype.touch = function () {
        this.mtime = new Date();
        this.emit('change', this);
    };
    Node.prototype.canRead = function (uid, gid) {
        if (uid === void 0) { uid = getuid(); }
        if (gid === void 0) { gid = getgid(); }
        if (this.perm & 4 /* S.IROTH */) {
            return true;
        }
        if (gid === this.gid) {
            if (this.perm & 32 /* S.IRGRP */) {
                return true;
            }
        }
        if (uid === this.uid) {
            if (this.perm & 256 /* S.IRUSR */) {
                return true;
            }
        }
        return false;
    };
    Node.prototype.canWrite = function (uid, gid) {
        if (uid === void 0) { uid = getuid(); }
        if (gid === void 0) { gid = getgid(); }
        if (this.perm & 2 /* S.IWOTH */) {
            return true;
        }
        if (gid === this.gid) {
            if (this.perm & 16 /* S.IWGRP */) {
                return true;
            }
        }
        if (uid === this.uid) {
            if (this.perm & 128 /* S.IWUSR */) {
                return true;
            }
        }
        return false;
    };
    Node.prototype.del = function () {
        this.emit('delete', this);
    };
    Node.prototype.toJSON = function () {
        return {
            ino: this.ino,
            uid: this.uid,
            gid: this.gid,
            atime: this.atime.getTime(),
            mtime: this.mtime.getTime(),
            ctime: this.ctime.getTime(),
            perm: this.perm,
            mode: this.mode,
            nlink: this.nlink,
            symlink: this.symlink,
            data: this.getString(),
        };
    };
    return Node;
}(events_1.EventEmitter));
exports.Node = Node;
/**
 * Represents a hard link that points to an i-node `node`.
 */
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(vol, parent, name) {
        var _this = _super.call(this) || this;
        _this.children = {};
        // Path to this node as Array: ['usr', 'bin', 'node'].
        _this._steps = [];
        // "i-node" number of the node.
        _this.ino = 0;
        // Number of children.
        _this.length = 0;
        _this.vol = vol;
        _this.parent = parent;
        _this.name = name;
        _this.syncSteps();
        return _this;
    }
    Object.defineProperty(Link.prototype, "steps", {
        get: function () {
            return this._steps;
        },
        // Recursively sync children steps, e.g. in case of dir rename
        set: function (val) {
            this._steps = val;
            for (var _i = 0, _a = Object.entries(this.children); _i < _a.length; _i++) {
                var _b = _a[_i], child = _b[0], link = _b[1];
                if (child === '.' || child === '..') {
                    continue;
                }
                link === null || link === void 0 ? void 0 : link.syncSteps();
            }
        },
        enumerable: false,
        configurable: true
    });
    Link.prototype.setNode = function (node) {
        this.node = node;
        this.ino = node.ino;
    };
    Link.prototype.getNode = function () {
        return this.node;
    };
    Link.prototype.createChild = function (name, node) {
        if (node === void 0) { node = this.vol.createNode(); }
        var link = new Link(this.vol, this, name);
        link.setNode(node);
        if (node.isDirectory()) {
            link.children['.'] = link;
            link.getNode().nlink++;
        }
        this.setChild(name, link);
        return link;
    };
    Link.prototype.setChild = function (name, link) {
        if (link === void 0) { link = new Link(this.vol, this, name); }
        this.children[name] = link;
        link.parent = this;
        this.length++;
        var node = link.getNode();
        if (node.isDirectory()) {
            link.children['..'] = this;
            this.getNode().nlink++;
        }
        this.getNode().mtime = new Date();
        this.emit('child:add', link, this);
        return link;
    };
    Link.prototype.deleteChild = function (link) {
        var node = link.getNode();
        if (node.isDirectory()) {
            delete link.children['..'];
            this.getNode().nlink--;
        }
        delete this.children[link.getName()];
        this.length--;
        this.getNode().mtime = new Date();
        this.emit('child:delete', link, this);
    };
    Link.prototype.getChild = function (name) {
        this.getNode().mtime = new Date();
        if (Object.hasOwnProperty.call(this.children, name)) {
            return this.children[name];
        }
    };
    Link.prototype.getPath = function () {
        return this.steps.join(exports.SEP);
    };
    Link.prototype.getName = function () {
        return this.steps[this.steps.length - 1];
    };
    // del() {
    //     const parent = this.parent;
    //     if(parent) {
    //         parent.deleteChild(link);
    //     }
    //     this.parent = null;
    //     this.vol = null;
    // }
    /**
     * Walk the tree path and return the `Link` at that location, if any.
     * @param steps {string[]} Desired location.
     * @param stop {number} Max steps to go into.
     * @param i {number} Current step in the `steps` array.
     *
     * @return {Link|null}
     */
    Link.prototype.walk = function (steps, stop, i) {
        if (stop === void 0) { stop = steps.length; }
        if (i === void 0) { i = 0; }
        if (i >= steps.length)
            return this;
        if (i >= stop)
            return this;
        var step = steps[i];
        var link = this.getChild(step);
        if (!link)
            return null;
        return link.walk(steps, stop, i + 1);
    };
    Link.prototype.toJSON = function () {
        return {
            steps: this.steps,
            ino: this.ino,
            children: Object.keys(this.children),
        };
    };
    Link.prototype.syncSteps = function () {
        this.steps = this.parent ? this.parent.steps.concat([this.name]) : [this.name];
    };
    return Link;
}(events_1.EventEmitter));
exports.Link = Link;
/**
 * Represents an open file (file descriptor) that points to a `Link` (Hard-link) and a `Node`.
 */
var File = /** @class */ (function () {
    /**
     * Open a Link-Node pair. `node` is provided separately as that might be a different node
     * rather the one `link` points to, because it might be a symlink.
     * @param link
     * @param node
     * @param flags
     * @param fd
     */
    function File(link, node, flags, fd) {
        /**
         * A cursor/offset position in a file, where data will be written on write.
         * User can "seek" this position.
         */
        this.position = 0;
        this.link = link;
        this.node = node;
        this.flags = flags;
        this.fd = fd;
    }
    File.prototype.getString = function (encoding) {
        if (encoding === void 0) { encoding = 'utf8'; }
        return this.node.getString();
    };
    File.prototype.setString = function (str) {
        this.node.setString(str);
    };
    File.prototype.getBuffer = function () {
        return this.node.getBuffer();
    };
    File.prototype.setBuffer = function (buf) {
        this.node.setBuffer(buf);
    };
    File.prototype.getSize = function () {
        return this.node.getSize();
    };
    File.prototype.truncate = function (len) {
        this.node.truncate(len);
    };
    File.prototype.seekTo = function (position) {
        this.position = position;
    };
    File.prototype.stats = function () {
        return Stats_1.default.build(this.node);
    };
    File.prototype.write = function (buf, offset, length, position) {
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = buf.length; }
        if (typeof position !== 'number')
            position = this.position;
        if (this.flags & O_APPEND)
            position = this.getSize();
        var bytes = this.node.write(buf, offset, length, position);
        this.position = position + bytes;
        return bytes;
    };
    File.prototype.read = function (buf, offset, length, position) {
        if (offset === void 0) { offset = 0; }
        if (length === void 0) { length = buf.byteLength; }
        if (typeof position !== 'number')
            position = this.position;
        var bytes = this.node.read(buf, offset, length, position);
        this.position = position + bytes;
        return bytes;
    };
    File.prototype.chmod = function (perm) {
        this.node.chmod(perm);
    };
    File.prototype.chown = function (uid, gid) {
        this.node.chown(uid, gid);
    };
    return File;
}());
exports.File = File;
