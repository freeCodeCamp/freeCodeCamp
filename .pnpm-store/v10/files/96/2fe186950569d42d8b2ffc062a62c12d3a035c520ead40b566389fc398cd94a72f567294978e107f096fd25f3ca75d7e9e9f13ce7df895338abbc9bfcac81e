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
exports.FSWatcher = exports.StatWatcher = exports.Volume = exports.toUnixTimestamp = exports.bufferToEncoding = exports.dataToBuffer = exports.dataToStr = exports.pathToSteps = exports.filenameToSteps = exports.pathToFilename = exports.flagsToNumber = exports.FLAGS = void 0;
var pathModule = require("path");
var node_1 = require("./node");
var Stats_1 = require("./Stats");
var Dirent_1 = require("./Dirent");
var buffer_1 = require("./internal/buffer");
var setImmediate_1 = require("./setImmediate");
var process_1 = require("./process");
var setTimeoutUnref_1 = require("./setTimeoutUnref");
var stream_1 = require("stream");
var constants_1 = require("./constants");
var events_1 = require("events");
var encoding_1 = require("./encoding");
var errors = require("./internal/errors");
var util = require("util");
var promises_1 = require("./promises");
var resolveCrossPlatform = pathModule.resolve;
var O_RDONLY = constants_1.constants.O_RDONLY, O_WRONLY = constants_1.constants.O_WRONLY, O_RDWR = constants_1.constants.O_RDWR, O_CREAT = constants_1.constants.O_CREAT, O_EXCL = constants_1.constants.O_EXCL, O_TRUNC = constants_1.constants.O_TRUNC, O_APPEND = constants_1.constants.O_APPEND, O_SYNC = constants_1.constants.O_SYNC, O_DIRECTORY = constants_1.constants.O_DIRECTORY, F_OK = constants_1.constants.F_OK, COPYFILE_EXCL = constants_1.constants.COPYFILE_EXCL, COPYFILE_FICLONE_FORCE = constants_1.constants.COPYFILE_FICLONE_FORCE;
var _a = pathModule.posix ? pathModule.posix : pathModule, sep = _a.sep, relative = _a.relative, join = _a.join, dirname = _a.dirname;
var isWin = process_1.default.platform === 'win32';
var kMinPoolSpace = 128;
// const kMaxLength = require('buffer').kMaxLength;
// ---------------------------------------- Error messages
// TODO: Use `internal/errors.js` in the future.
var ERRSTR = {
    PATH_STR: 'path must be a string or Buffer',
    // FD:             'file descriptor must be a unsigned 32-bit integer',
    FD: 'fd must be a file descriptor',
    MODE_INT: 'mode must be an int',
    CB: 'callback must be a function',
    UID: 'uid must be an unsigned int',
    GID: 'gid must be an unsigned int',
    LEN: 'len must be an integer',
    ATIME: 'atime must be an integer',
    MTIME: 'mtime must be an integer',
    PREFIX: 'filename prefix is required',
    BUFFER: 'buffer must be an instance of Buffer or StaticBuffer',
    OFFSET: 'offset must be an integer',
    LENGTH: 'length must be an integer',
    POSITION: 'position must be an integer',
};
var ERRSTR_OPTS = function (tipeof) { return "Expected options to be either an object or a string, but got ".concat(tipeof, " instead"); };
// const ERRSTR_FLAG = flag => `Unknown file open flag: ${flag}`;
var ENOENT = 'ENOENT';
var EBADF = 'EBADF';
var EINVAL = 'EINVAL';
var EPERM = 'EPERM';
var EPROTO = 'EPROTO';
var EEXIST = 'EEXIST';
var ENOTDIR = 'ENOTDIR';
var EMFILE = 'EMFILE';
var EACCES = 'EACCES';
var EISDIR = 'EISDIR';
var ENOTEMPTY = 'ENOTEMPTY';
var ENOSYS = 'ENOSYS';
var ERR_FS_EISDIR = 'ERR_FS_EISDIR';
function formatError(errorCode, func, path, path2) {
    if (func === void 0) { func = ''; }
    if (path === void 0) { path = ''; }
    if (path2 === void 0) { path2 = ''; }
    var pathFormatted = '';
    if (path)
        pathFormatted = " '".concat(path, "'");
    if (path2)
        pathFormatted += " -> '".concat(path2, "'");
    switch (errorCode) {
        case ENOENT:
            return "ENOENT: no such file or directory, ".concat(func).concat(pathFormatted);
        case EBADF:
            return "EBADF: bad file descriptor, ".concat(func).concat(pathFormatted);
        case EINVAL:
            return "EINVAL: invalid argument, ".concat(func).concat(pathFormatted);
        case EPERM:
            return "EPERM: operation not permitted, ".concat(func).concat(pathFormatted);
        case EPROTO:
            return "EPROTO: protocol error, ".concat(func).concat(pathFormatted);
        case EEXIST:
            return "EEXIST: file already exists, ".concat(func).concat(pathFormatted);
        case ENOTDIR:
            return "ENOTDIR: not a directory, ".concat(func).concat(pathFormatted);
        case EISDIR:
            return "EISDIR: illegal operation on a directory, ".concat(func).concat(pathFormatted);
        case EACCES:
            return "EACCES: permission denied, ".concat(func).concat(pathFormatted);
        case ENOTEMPTY:
            return "ENOTEMPTY: directory not empty, ".concat(func).concat(pathFormatted);
        case EMFILE:
            return "EMFILE: too many open files, ".concat(func).concat(pathFormatted);
        case ENOSYS:
            return "ENOSYS: function not implemented, ".concat(func).concat(pathFormatted);
        case ERR_FS_EISDIR:
            return "[ERR_FS_EISDIR]: Path is a directory: ".concat(func, " returned EISDIR (is a directory) ").concat(path);
        default:
            return "".concat(errorCode, ": error occurred, ").concat(func).concat(pathFormatted);
    }
}
function createError(errorCode, func, path, path2, Constructor) {
    if (func === void 0) { func = ''; }
    if (path === void 0) { path = ''; }
    if (path2 === void 0) { path2 = ''; }
    if (Constructor === void 0) { Constructor = Error; }
    var error = new Constructor(formatError(errorCode, func, path, path2));
    error.code = errorCode;
    if (path) {
        error.path = path;
    }
    return error;
}
// ---------------------------------------- Flags
// List of file `flags` as defined by Node.
var FLAGS;
(function (FLAGS) {
    // Open file for reading. An exception occurs if the file does not exist.
    FLAGS[FLAGS["r"] = O_RDONLY] = "r";
    // Open file for reading and writing. An exception occurs if the file does not exist.
    FLAGS[FLAGS["r+"] = O_RDWR] = "r+";
    // Open file for reading in synchronous mode. Instructs the operating system to bypass the local file system cache.
    FLAGS[FLAGS["rs"] = O_RDONLY | O_SYNC] = "rs";
    FLAGS[FLAGS["sr"] = FLAGS.rs] = "sr";
    // Open file for reading and writing, telling the OS to open it synchronously. See notes for 'rs' about using this with caution.
    FLAGS[FLAGS["rs+"] = O_RDWR | O_SYNC] = "rs+";
    FLAGS[FLAGS["sr+"] = FLAGS['rs+']] = "sr+";
    // Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
    FLAGS[FLAGS["w"] = O_WRONLY | O_CREAT | O_TRUNC] = "w";
    // Like 'w' but fails if path exists.
    FLAGS[FLAGS["wx"] = O_WRONLY | O_CREAT | O_TRUNC | O_EXCL] = "wx";
    FLAGS[FLAGS["xw"] = FLAGS.wx] = "xw";
    // Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
    FLAGS[FLAGS["w+"] = O_RDWR | O_CREAT | O_TRUNC] = "w+";
    // Like 'w+' but fails if path exists.
    FLAGS[FLAGS["wx+"] = O_RDWR | O_CREAT | O_TRUNC | O_EXCL] = "wx+";
    FLAGS[FLAGS["xw+"] = FLAGS['wx+']] = "xw+";
    // Open file for appending. The file is created if it does not exist.
    FLAGS[FLAGS["a"] = O_WRONLY | O_APPEND | O_CREAT] = "a";
    // Like 'a' but fails if path exists.
    FLAGS[FLAGS["ax"] = O_WRONLY | O_APPEND | O_CREAT | O_EXCL] = "ax";
    FLAGS[FLAGS["xa"] = FLAGS.ax] = "xa";
    // Open file for reading and appending. The file is created if it does not exist.
    FLAGS[FLAGS["a+"] = O_RDWR | O_APPEND | O_CREAT] = "a+";
    // Like 'a+' but fails if path exists.
    FLAGS[FLAGS["ax+"] = O_RDWR | O_APPEND | O_CREAT | O_EXCL] = "ax+";
    FLAGS[FLAGS["xa+"] = FLAGS['ax+']] = "xa+";
})(FLAGS = exports.FLAGS || (exports.FLAGS = {}));
function flagsToNumber(flags) {
    if (typeof flags === 'number')
        return flags;
    if (typeof flags === 'string') {
        var flagsNum = FLAGS[flags];
        if (typeof flagsNum !== 'undefined')
            return flagsNum;
    }
    // throw new TypeError(formatError(ERRSTR_FLAG(flags)));
    throw new errors.TypeError('ERR_INVALID_OPT_VALUE', 'flags', flags);
}
exports.flagsToNumber = flagsToNumber;
// ---------------------------------------- Options
function getOptions(defaults, options) {
    var opts;
    if (!options)
        return defaults;
    else {
        var tipeof = typeof options;
        switch (tipeof) {
            case 'string':
                opts = Object.assign({}, defaults, { encoding: options });
                break;
            case 'object':
                opts = Object.assign({}, defaults, options);
                break;
            default:
                throw TypeError(ERRSTR_OPTS(tipeof));
        }
    }
    if (opts.encoding !== 'buffer')
        (0, encoding_1.assertEncoding)(opts.encoding);
    return opts;
}
function optsGenerator(defaults) {
    return function (options) { return getOptions(defaults, options); };
}
function validateCallback(callback) {
    if (typeof callback !== 'function')
        throw TypeError(ERRSTR.CB);
    return callback;
}
function optsAndCbGenerator(getOpts) {
    return function (options, callback) {
        return typeof options === 'function' ? [getOpts(), options] : [getOpts(options), validateCallback(callback)];
    };
}
var optsDefaults = {
    encoding: 'utf8',
};
var getDefaultOpts = optsGenerator(optsDefaults);
var getDefaultOptsAndCb = optsAndCbGenerator(getDefaultOpts);
var readFileOptsDefaults = {
    flag: 'r',
};
var getReadFileOptions = optsGenerator(readFileOptsDefaults);
var writeFileDefaults = {
    encoding: 'utf8',
    mode: 438 /* MODE.DEFAULT */,
    flag: FLAGS[FLAGS.w],
};
var getWriteFileOptions = optsGenerator(writeFileDefaults);
var appendFileDefaults = {
    encoding: 'utf8',
    mode: 438 /* MODE.DEFAULT */,
    flag: FLAGS[FLAGS.a],
};
var getAppendFileOpts = optsGenerator(appendFileDefaults);
var getAppendFileOptsAndCb = optsAndCbGenerator(getAppendFileOpts);
var realpathDefaults = optsDefaults;
var getRealpathOptions = optsGenerator(realpathDefaults);
var getRealpathOptsAndCb = optsAndCbGenerator(getRealpathOptions);
var mkdirDefaults = {
    mode: 511 /* MODE.DIR */,
    recursive: false,
};
var getMkdirOptions = function (options) {
    if (typeof options === 'number')
        return Object.assign({}, mkdirDefaults, { mode: options });
    return Object.assign({}, mkdirDefaults, options);
};
var rmdirDefaults = {
    recursive: false,
};
var getRmdirOptions = function (options) {
    return Object.assign({}, rmdirDefaults, options);
};
var getRmOpts = optsGenerator(optsDefaults);
var getRmOptsAndCb = optsAndCbGenerator(getRmOpts);
var readdirDefaults = {
    encoding: 'utf8',
    withFileTypes: false,
};
var getReaddirOptions = optsGenerator(readdirDefaults);
var getReaddirOptsAndCb = optsAndCbGenerator(getReaddirOptions);
var statDefaults = {
    bigint: false,
};
var getStatOptions = function (options) {
    if (options === void 0) { options = {}; }
    return Object.assign({}, statDefaults, options);
};
var getStatOptsAndCb = function (options, callback) {
    return typeof options === 'function' ? [getStatOptions(), options] : [getStatOptions(options), validateCallback(callback)];
};
// ---------------------------------------- Utility functions
function getPathFromURLPosix(url) {
    if (url.hostname !== '') {
        throw new errors.TypeError('ERR_INVALID_FILE_URL_HOST', process_1.default.platform);
    }
    var pathname = url.pathname;
    for (var n = 0; n < pathname.length; n++) {
        if (pathname[n] === '%') {
            var third = pathname.codePointAt(n + 2) | 0x20;
            if (pathname[n + 1] === '2' && third === 102) {
                throw new errors.TypeError('ERR_INVALID_FILE_URL_PATH', 'must not include encoded / characters');
            }
        }
    }
    return decodeURIComponent(pathname);
}
function pathToFilename(path) {
    if (typeof path !== 'string' && !buffer_1.Buffer.isBuffer(path)) {
        try {
            if (!(path instanceof require('url').URL))
                throw new TypeError(ERRSTR.PATH_STR);
        }
        catch (err) {
            throw new TypeError(ERRSTR.PATH_STR);
        }
        path = getPathFromURLPosix(path);
    }
    var pathString = String(path);
    nullCheck(pathString);
    // return slash(pathString);
    return pathString;
}
exports.pathToFilename = pathToFilename;
var resolve = function (filename, base) {
    if (base === void 0) { base = process_1.default.cwd(); }
    return resolveCrossPlatform(base, filename);
};
if (isWin) {
    var _resolve_1 = resolve;
    var unixify_1 = require('fs-monkey/lib/correctPath').unixify;
    resolve = function (filename, base) { return unixify_1(_resolve_1(filename, base)); };
}
function filenameToSteps(filename, base) {
    var fullPath = resolve(filename, base);
    var fullPathSansSlash = fullPath.substring(1);
    if (!fullPathSansSlash)
        return [];
    return fullPathSansSlash.split(sep);
}
exports.filenameToSteps = filenameToSteps;
function pathToSteps(path) {
    return filenameToSteps(pathToFilename(path));
}
exports.pathToSteps = pathToSteps;
function dataToStr(data, encoding) {
    if (encoding === void 0) { encoding = encoding_1.ENCODING_UTF8; }
    if (buffer_1.Buffer.isBuffer(data))
        return data.toString(encoding);
    else if (data instanceof Uint8Array)
        return (0, buffer_1.bufferFrom)(data).toString(encoding);
    else
        return String(data);
}
exports.dataToStr = dataToStr;
function dataToBuffer(data, encoding) {
    if (encoding === void 0) { encoding = encoding_1.ENCODING_UTF8; }
    if (buffer_1.Buffer.isBuffer(data))
        return data;
    else if (data instanceof Uint8Array)
        return (0, buffer_1.bufferFrom)(data);
    else
        return (0, buffer_1.bufferFrom)(String(data), encoding);
}
exports.dataToBuffer = dataToBuffer;
function bufferToEncoding(buffer, encoding) {
    if (!encoding || encoding === 'buffer')
        return buffer;
    else
        return buffer.toString(encoding);
}
exports.bufferToEncoding = bufferToEncoding;
function nullCheck(path, callback) {
    if (('' + path).indexOf('\u0000') !== -1) {
        var er = new Error('Path must be a string without null bytes');
        er.code = ENOENT;
        if (typeof callback !== 'function')
            throw er;
        process_1.default.nextTick(callback, er);
        return false;
    }
    return true;
}
function _modeToNumber(mode, def) {
    if (typeof mode === 'number')
        return mode;
    if (typeof mode === 'string')
        return parseInt(mode, 8);
    if (def)
        return modeToNumber(def);
    return undefined;
}
function modeToNumber(mode, def) {
    var result = _modeToNumber(mode, def);
    if (typeof result !== 'number' || isNaN(result))
        throw new TypeError(ERRSTR.MODE_INT);
    return result;
}
function isFd(path) {
    return path >>> 0 === path;
}
function validateFd(fd) {
    if (!isFd(fd))
        throw TypeError(ERRSTR.FD);
}
// converts Date or number to a fractional UNIX timestamp
function toUnixTimestamp(time) {
    // tslint:disable-next-line triple-equals
    if (typeof time === 'string' && +time == time) {
        return +time;
    }
    if (time instanceof Date) {
        return time.getTime() / 1000;
    }
    if (isFinite(time)) {
        if (time < 0) {
            return Date.now() / 1000;
        }
        return time;
    }
    throw new Error('Cannot parse time: ' + time);
}
exports.toUnixTimestamp = toUnixTimestamp;
function validateUid(uid) {
    if (typeof uid !== 'number')
        throw TypeError(ERRSTR.UID);
}
function validateGid(gid) {
    if (typeof gid !== 'number')
        throw TypeError(ERRSTR.GID);
}
function flattenJSON(nestedJSON) {
    var flatJSON = {};
    function flatten(pathPrefix, node) {
        for (var path in node) {
            var contentOrNode = node[path];
            var joinedPath = join(pathPrefix, path);
            if (typeof contentOrNode === 'string') {
                flatJSON[joinedPath] = contentOrNode;
            }
            else if (typeof contentOrNode === 'object' && contentOrNode !== null && Object.keys(contentOrNode).length > 0) {
                // empty directories need an explicit entry and therefore get handled in `else`, non-empty ones are implicitly considered
                flatten(joinedPath, contentOrNode);
            }
            else {
                // without this branch null, empty-object or non-object entries would not be handled in the same way
                // by both fromJSON() and fromNestedJSON()
                flatJSON[joinedPath] = null;
            }
        }
    }
    flatten('', nestedJSON);
    return flatJSON;
}
/**
 * `Volume` represents a file system.
 */
var Volume = /** @class */ (function () {
    function Volume(props) {
        if (props === void 0) { props = {}; }
        // I-node number counter.
        this.ino = 0;
        // A mapping for i-node numbers to i-nodes (`Node`);
        this.inodes = {};
        // List of released i-node numbers, for reuse.
        this.releasedInos = [];
        // A mapping for file descriptors to `File`s.
        this.fds = {};
        // A list of reusable (opened and closed) file descriptors, that should be
        // used first before creating a new file descriptor.
        this.releasedFds = [];
        // Max number of open files.
        this.maxFiles = 10000;
        // Current number of open files.
        this.openFiles = 0;
        this.promisesApi = (0, promises_1.default)(this);
        this.statWatchers = {};
        this.props = Object.assign({ Node: node_1.Node, Link: node_1.Link, File: node_1.File }, props);
        var root = this.createLink();
        root.setNode(this.createNode(true));
        var self = this; // tslint:disable-line no-this-assignment
        this.StatWatcher = /** @class */ (function (_super) {
            __extends(StatWatcher, _super);
            function StatWatcher() {
                return _super.call(this, self) || this;
            }
            return StatWatcher;
        }(StatWatcher));
        var _ReadStream = FsReadStream;
        this.ReadStream = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spreadArray([self], args, false)) || this;
            }
            return class_1;
        }(_ReadStream));
        var _WriteStream = FsWriteStream;
        this.WriteStream = /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spreadArray([self], args, false)) || this;
            }
            return class_2;
        }(_WriteStream));
        this.FSWatcher = /** @class */ (function (_super) {
            __extends(FSWatcher, _super);
            function FSWatcher() {
                return _super.call(this, self) || this;
            }
            return FSWatcher;
        }(FSWatcher));
        root.setChild('.', root);
        root.getNode().nlink++;
        root.setChild('..', root);
        root.getNode().nlink++;
        this.root = root;
    }
    Volume.fromJSON = function (json, cwd) {
        var vol = new Volume();
        vol.fromJSON(json, cwd);
        return vol;
    };
    Volume.fromNestedJSON = function (json, cwd) {
        var vol = new Volume();
        vol.fromNestedJSON(json, cwd);
        return vol;
    };
    Object.defineProperty(Volume.prototype, "promises", {
        get: function () {
            if (this.promisesApi === null)
                throw new Error('Promise is not supported in this environment.');
            return this.promisesApi;
        },
        enumerable: false,
        configurable: true
    });
    Volume.prototype.createLink = function (parent, name, isDirectory, perm) {
        if (isDirectory === void 0) { isDirectory = false; }
        if (!parent) {
            return new this.props.Link(this, null, '');
        }
        if (!name) {
            throw new Error('createLink: name cannot be empty');
        }
        return parent.createChild(name, this.createNode(isDirectory, perm));
    };
    Volume.prototype.deleteLink = function (link) {
        var parent = link.parent;
        if (parent) {
            parent.deleteChild(link);
            return true;
        }
        return false;
    };
    Volume.prototype.newInoNumber = function () {
        var releasedFd = this.releasedInos.pop();
        if (releasedFd)
            return releasedFd;
        else {
            this.ino = (this.ino + 1) % 0xffffffff;
            return this.ino;
        }
    };
    Volume.prototype.newFdNumber = function () {
        var releasedFd = this.releasedFds.pop();
        return typeof releasedFd === 'number' ? releasedFd : Volume.fd--;
    };
    Volume.prototype.createNode = function (isDirectory, perm) {
        if (isDirectory === void 0) { isDirectory = false; }
        var node = new this.props.Node(this.newInoNumber(), perm);
        if (isDirectory)
            node.setIsDirectory();
        this.inodes[node.ino] = node;
        return node;
    };
    Volume.prototype.getNode = function (ino) {
        return this.inodes[ino];
    };
    Volume.prototype.deleteNode = function (node) {
        node.del();
        delete this.inodes[node.ino];
        this.releasedInos.push(node.ino);
    };
    // Generates 6 character long random string, used by `mkdtemp`.
    Volume.prototype.genRndStr = function () {
        var str = (Math.random() + 1).toString(36).substring(2, 8);
        if (str.length === 6)
            return str;
        else
            return this.genRndStr();
    };
    // Returns a `Link` (hard link) referenced by path "split" into steps.
    Volume.prototype.getLink = function (steps) {
        return this.root.walk(steps);
    };
    // Just link `getLink`, but throws a correct user error, if link to found.
    Volume.prototype.getLinkOrThrow = function (filename, funcName) {
        var steps = filenameToSteps(filename);
        var link = this.getLink(steps);
        if (!link)
            throw createError(ENOENT, funcName, filename);
        return link;
    };
    // Just like `getLink`, but also dereference/resolves symbolic links.
    Volume.prototype.getResolvedLink = function (filenameOrSteps) {
        var steps = typeof filenameOrSteps === 'string' ? filenameToSteps(filenameOrSteps) : filenameOrSteps;
        var link = this.root;
        var i = 0;
        while (i < steps.length) {
            var step = steps[i];
            link = link.getChild(step);
            if (!link)
                return null;
            var node = link.getNode();
            if (node.isSymlink()) {
                steps = node.symlink.concat(steps.slice(i + 1));
                link = this.root;
                i = 0;
                continue;
            }
            i++;
        }
        return link;
    };
    // Just like `getLinkOrThrow`, but also dereference/resolves symbolic links.
    Volume.prototype.getResolvedLinkOrThrow = function (filename, funcName) {
        var link = this.getResolvedLink(filename);
        if (!link)
            throw createError(ENOENT, funcName, filename);
        return link;
    };
    Volume.prototype.resolveSymlinks = function (link) {
        // let node: Node = link.getNode();
        // while(link && node.isSymlink()) {
        //     link = this.getLink(node.symlink);
        //     if(!link) return null;
        //     node = link.getNode();
        // }
        // return link;
        return this.getResolvedLink(link.steps.slice(1));
    };
    // Just like `getLinkOrThrow`, but also verifies that the link is a directory.
    Volume.prototype.getLinkAsDirOrThrow = function (filename, funcName) {
        var link = this.getLinkOrThrow(filename, funcName);
        if (!link.getNode().isDirectory())
            throw createError(ENOTDIR, funcName, filename);
        return link;
    };
    // Get the immediate parent directory of the link.
    Volume.prototype.getLinkParent = function (steps) {
        return this.root.walk(steps, steps.length - 1);
    };
    Volume.prototype.getLinkParentAsDirOrThrow = function (filenameOrSteps, funcName) {
        var steps = filenameOrSteps instanceof Array ? filenameOrSteps : filenameToSteps(filenameOrSteps);
        var link = this.getLinkParent(steps);
        if (!link)
            throw createError(ENOENT, funcName, sep + steps.join(sep));
        if (!link.getNode().isDirectory())
            throw createError(ENOTDIR, funcName, sep + steps.join(sep));
        return link;
    };
    Volume.prototype.getFileByFd = function (fd) {
        return this.fds[String(fd)];
    };
    Volume.prototype.getFileByFdOrThrow = function (fd, funcName) {
        if (!isFd(fd))
            throw TypeError(ERRSTR.FD);
        var file = this.getFileByFd(fd);
        if (!file)
            throw createError(EBADF, funcName);
        return file;
    };
    /**
     * @todo This is not used anymore. Remove.
     */
    /*
    private getNodeByIdOrCreate(id: TFileId, flags: number, perm: number): Node {
      if (typeof id === 'number') {
        const file = this.getFileByFd(id);
        if (!file) throw Error('File nto found');
        return file.node;
      } else {
        const steps = pathToSteps(id as PathLike);
        let link = this.getLink(steps);
        if (link) return link.getNode();
  
        // Try creating a node if not found.
        if (flags & O_CREAT) {
          const dirLink = this.getLinkParent(steps);
          if (dirLink) {
            const name = steps[steps.length - 1];
            link = this.createLink(dirLink, name, false, perm);
            return link.getNode();
          }
        }
  
        throw createError(ENOENT, 'getNodeByIdOrCreate', pathToFilename(id));
      }
    }
    */
    Volume.prototype.wrapAsync = function (method, args, callback) {
        var _this = this;
        validateCallback(callback);
        (0, setImmediate_1.default)(function () {
            var result;
            try {
                result = method.apply(_this, args);
            }
            catch (err) {
                callback(err);
                return;
            }
            callback(null, result);
        });
    };
    Volume.prototype._toJSON = function (link, json, path) {
        var _a;
        if (link === void 0) { link = this.root; }
        if (json === void 0) { json = {}; }
        var isEmpty = true;
        var children = link.children;
        if (link.getNode().isFile()) {
            children = (_a = {}, _a[link.getName()] = link.parent.getChild(link.getName()), _a);
            link = link.parent;
        }
        for (var name_1 in children) {
            if (name_1 === '.' || name_1 === '..') {
                continue;
            }
            isEmpty = false;
            var child = link.getChild(name_1);
            if (!child) {
                throw new Error('_toJSON: unexpected undefined');
            }
            var node = child.getNode();
            if (node.isFile()) {
                var filename = child.getPath();
                if (path)
                    filename = relative(path, filename);
                json[filename] = node.getString();
            }
            else if (node.isDirectory()) {
                this._toJSON(child, json, path);
            }
        }
        var dirPath = link.getPath();
        if (path)
            dirPath = relative(path, dirPath);
        if (dirPath && isEmpty) {
            json[dirPath] = null;
        }
        return json;
    };
    Volume.prototype.toJSON = function (paths, json, isRelative) {
        if (json === void 0) { json = {}; }
        if (isRelative === void 0) { isRelative = false; }
        var links = [];
        if (paths) {
            if (!(paths instanceof Array))
                paths = [paths];
            for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
                var path = paths_1[_i];
                var filename = pathToFilename(path);
                var link = this.getResolvedLink(filename);
                if (!link)
                    continue;
                links.push(link);
            }
        }
        else {
            links.push(this.root);
        }
        if (!links.length)
            return json;
        for (var _a = 0, links_1 = links; _a < links_1.length; _a++) {
            var link = links_1[_a];
            this._toJSON(link, json, isRelative ? link.getPath() : '');
        }
        return json;
    };
    Volume.prototype.fromJSON = function (json, cwd) {
        if (cwd === void 0) { cwd = process_1.default.cwd(); }
        for (var filename in json) {
            var data = json[filename];
            filename = resolve(filename, cwd);
            if (typeof data === 'string') {
                var dir = dirname(filename);
                this.mkdirpBase(dir, 511 /* MODE.DIR */);
                this.writeFileSync(filename, data);
            }
            else {
                this.mkdirpBase(filename, 511 /* MODE.DIR */);
            }
        }
    };
    Volume.prototype.fromNestedJSON = function (json, cwd) {
        this.fromJSON(flattenJSON(json), cwd);
    };
    Volume.prototype.reset = function () {
        this.ino = 0;
        this.inodes = {};
        this.releasedInos = [];
        this.fds = {};
        this.releasedFds = [];
        this.openFiles = 0;
        this.root = this.createLink();
        this.root.setNode(this.createNode(true));
    };
    // Legacy interface
    Volume.prototype.mountSync = function (mountpoint, json) {
        this.fromJSON(json, mountpoint);
    };
    Volume.prototype.openLink = function (link, flagsNum, resolveSymlinks) {
        if (resolveSymlinks === void 0) { resolveSymlinks = true; }
        if (this.openFiles >= this.maxFiles) {
            // Too many open files.
            throw createError(EMFILE, 'open', link.getPath());
        }
        // Resolve symlinks.
        var realLink = link;
        if (resolveSymlinks)
            realLink = this.resolveSymlinks(link);
        if (!realLink)
            throw createError(ENOENT, 'open', link.getPath());
        var node = realLink.getNode();
        // Check whether node is a directory
        if (node.isDirectory()) {
            if ((flagsNum & (O_RDONLY | O_RDWR | O_WRONLY)) !== O_RDONLY)
                throw createError(EISDIR, 'open', link.getPath());
        }
        else {
            if (flagsNum & O_DIRECTORY)
                throw createError(ENOTDIR, 'open', link.getPath());
        }
        // Check node permissions
        if (!(flagsNum & O_WRONLY)) {
            if (!node.canRead()) {
                throw createError(EACCES, 'open', link.getPath());
            }
        }
        if (flagsNum & O_RDWR) {
        }
        var file = new this.props.File(link, node, flagsNum, this.newFdNumber());
        this.fds[file.fd] = file;
        this.openFiles++;
        if (flagsNum & O_TRUNC)
            file.truncate();
        return file;
    };
    Volume.prototype.openFile = function (filename, flagsNum, modeNum, resolveSymlinks) {
        if (resolveSymlinks === void 0) { resolveSymlinks = true; }
        var steps = filenameToSteps(filename);
        var link = resolveSymlinks ? this.getResolvedLink(steps) : this.getLink(steps);
        if (link && flagsNum & O_EXCL)
            throw createError(EEXIST, 'open', filename);
        // Try creating a new file, if it does not exist.
        if (!link && flagsNum & O_CREAT) {
            // const dirLink: Link = this.getLinkParent(steps);
            var dirLink = this.getResolvedLink(steps.slice(0, steps.length - 1));
            // if(!dirLink) throw createError(ENOENT, 'open', filename);
            if (!dirLink)
                throw createError(ENOENT, 'open', sep + steps.join(sep));
            if (flagsNum & O_CREAT && typeof modeNum === 'number') {
                link = this.createLink(dirLink, steps[steps.length - 1], false, modeNum);
            }
        }
        if (link)
            return this.openLink(link, flagsNum, resolveSymlinks);
        throw createError(ENOENT, 'open', filename);
    };
    Volume.prototype.openBase = function (filename, flagsNum, modeNum, resolveSymlinks) {
        if (resolveSymlinks === void 0) { resolveSymlinks = true; }
        var file = this.openFile(filename, flagsNum, modeNum, resolveSymlinks);
        if (!file)
            throw createError(ENOENT, 'open', filename);
        return file.fd;
    };
    Volume.prototype.openSync = function (path, flags, mode) {
        if (mode === void 0) { mode = 438 /* MODE.DEFAULT */; }
        // Validate (1) mode; (2) path; (3) flags - in that order.
        var modeNum = modeToNumber(mode);
        var fileName = pathToFilename(path);
        var flagsNum = flagsToNumber(flags);
        return this.openBase(fileName, flagsNum, modeNum);
    };
    Volume.prototype.open = function (path, flags, a, b) {
        var mode = a;
        var callback = b;
        if (typeof a === 'function') {
            mode = 438 /* MODE.DEFAULT */;
            callback = a;
        }
        mode = mode || 438 /* MODE.DEFAULT */;
        var modeNum = modeToNumber(mode);
        var fileName = pathToFilename(path);
        var flagsNum = flagsToNumber(flags);
        this.wrapAsync(this.openBase, [fileName, flagsNum, modeNum], callback);
    };
    Volume.prototype.closeFile = function (file) {
        if (!this.fds[file.fd])
            return;
        this.openFiles--;
        delete this.fds[file.fd];
        this.releasedFds.push(file.fd);
    };
    Volume.prototype.closeSync = function (fd) {
        validateFd(fd);
        var file = this.getFileByFdOrThrow(fd, 'close');
        this.closeFile(file);
    };
    Volume.prototype.close = function (fd, callback) {
        validateFd(fd);
        this.wrapAsync(this.closeSync, [fd], callback);
    };
    Volume.prototype.openFileOrGetById = function (id, flagsNum, modeNum) {
        if (typeof id === 'number') {
            var file = this.fds[id];
            if (!file)
                throw createError(ENOENT);
            return file;
        }
        else {
            return this.openFile(pathToFilename(id), flagsNum, modeNum);
        }
    };
    Volume.prototype.readBase = function (fd, buffer, offset, length, position) {
        var file = this.getFileByFdOrThrow(fd);
        return file.read(buffer, Number(offset), Number(length), position);
    };
    Volume.prototype.readSync = function (fd, buffer, offset, length, position) {
        validateFd(fd);
        return this.readBase(fd, buffer, offset, length, position);
    };
    Volume.prototype.read = function (fd, buffer, offset, length, position, callback) {
        var _this = this;
        validateCallback(callback);
        // This `if` branch is from Node.js
        if (length === 0) {
            return process_1.default.nextTick(function () {
                if (callback)
                    callback(null, 0, buffer);
            });
        }
        (0, setImmediate_1.default)(function () {
            try {
                var bytes = _this.readBase(fd, buffer, offset, length, position);
                callback(null, bytes, buffer);
            }
            catch (err) {
                callback(err);
            }
        });
    };
    Volume.prototype.readFileBase = function (id, flagsNum, encoding) {
        var result;
        var isUserFd = typeof id === 'number';
        var userOwnsFd = isUserFd && isFd(id);
        var fd;
        if (userOwnsFd)
            fd = id;
        else {
            var filename = pathToFilename(id);
            var steps = filenameToSteps(filename);
            var link = this.getResolvedLink(steps);
            if (link) {
                var node = link.getNode();
                if (node.isDirectory())
                    throw createError(EISDIR, 'open', link.getPath());
            }
            fd = this.openSync(id, flagsNum);
        }
        try {
            result = bufferToEncoding(this.getFileByFdOrThrow(fd).getBuffer(), encoding);
        }
        finally {
            if (!userOwnsFd) {
                this.closeSync(fd);
            }
        }
        return result;
    };
    Volume.prototype.readFileSync = function (file, options) {
        var opts = getReadFileOptions(options);
        var flagsNum = flagsToNumber(opts.flag);
        return this.readFileBase(file, flagsNum, opts.encoding);
    };
    Volume.prototype.readFile = function (id, a, b) {
        var _a = optsAndCbGenerator(getReadFileOptions)(a, b), opts = _a[0], callback = _a[1];
        var flagsNum = flagsToNumber(opts.flag);
        this.wrapAsync(this.readFileBase, [id, flagsNum, opts.encoding], callback);
    };
    Volume.prototype.writeBase = function (fd, buf, offset, length, position) {
        var file = this.getFileByFdOrThrow(fd, 'write');
        return file.write(buf, offset, length, position);
    };
    Volume.prototype.writeSync = function (fd, a, b, c, d) {
        validateFd(fd);
        var encoding;
        var offset;
        var length;
        var position;
        var isBuffer = typeof a !== 'string';
        if (isBuffer) {
            offset = (b || 0) | 0;
            length = c;
            position = d;
        }
        else {
            position = b;
            encoding = c;
        }
        var buf = dataToBuffer(a, encoding);
        if (isBuffer) {
            if (typeof length === 'undefined') {
                length = buf.length;
            }
        }
        else {
            offset = 0;
            length = buf.length;
        }
        return this.writeBase(fd, buf, offset, length, position);
    };
    Volume.prototype.write = function (fd, a, b, c, d, e) {
        var _this = this;
        validateFd(fd);
        var offset;
        var length;
        var position;
        var encoding;
        var callback;
        var tipa = typeof a;
        var tipb = typeof b;
        var tipc = typeof c;
        var tipd = typeof d;
        if (tipa !== 'string') {
            if (tipb === 'function') {
                callback = b;
            }
            else if (tipc === 'function') {
                offset = b | 0;
                callback = c;
            }
            else if (tipd === 'function') {
                offset = b | 0;
                length = c;
                callback = d;
            }
            else {
                offset = b | 0;
                length = c;
                position = d;
                callback = e;
            }
        }
        else {
            if (tipb === 'function') {
                callback = b;
            }
            else if (tipc === 'function') {
                position = b;
                callback = c;
            }
            else if (tipd === 'function') {
                position = b;
                encoding = c;
                callback = d;
            }
        }
        var buf = dataToBuffer(a, encoding);
        if (tipa !== 'string') {
            if (typeof length === 'undefined')
                length = buf.length;
        }
        else {
            offset = 0;
            length = buf.length;
        }
        var cb = validateCallback(callback);
        (0, setImmediate_1.default)(function () {
            try {
                var bytes = _this.writeBase(fd, buf, offset, length, position);
                if (tipa !== 'string') {
                    cb(null, bytes, buf);
                }
                else {
                    cb(null, bytes, a);
                }
            }
            catch (err) {
                cb(err);
            }
        });
    };
    Volume.prototype.writeFileBase = function (id, buf, flagsNum, modeNum) {
        // console.log('writeFileBase', id, buf, flagsNum, modeNum);
        // const node = this.getNodeByIdOrCreate(id, flagsNum, modeNum);
        // node.setBuffer(buf);
        var isUserFd = typeof id === 'number';
        var fd;
        if (isUserFd)
            fd = id;
        else {
            fd = this.openBase(pathToFilename(id), flagsNum, modeNum);
            // fd = this.openSync(id as PathLike, flagsNum, modeNum);
        }
        var offset = 0;
        var length = buf.length;
        var position = flagsNum & O_APPEND ? undefined : 0;
        try {
            while (length > 0) {
                var written = this.writeSync(fd, buf, offset, length, position);
                offset += written;
                length -= written;
                if (position !== undefined)
                    position += written;
            }
        }
        finally {
            if (!isUserFd)
                this.closeSync(fd);
        }
    };
    Volume.prototype.writeFileSync = function (id, data, options) {
        var opts = getWriteFileOptions(options);
        var flagsNum = flagsToNumber(opts.flag);
        var modeNum = modeToNumber(opts.mode);
        var buf = dataToBuffer(data, opts.encoding);
        this.writeFileBase(id, buf, flagsNum, modeNum);
    };
    Volume.prototype.writeFile = function (id, data, a, b) {
        var options = a;
        var callback = b;
        if (typeof a === 'function') {
            options = writeFileDefaults;
            callback = a;
        }
        var cb = validateCallback(callback);
        var opts = getWriteFileOptions(options);
        var flagsNum = flagsToNumber(opts.flag);
        var modeNum = modeToNumber(opts.mode);
        var buf = dataToBuffer(data, opts.encoding);
        this.wrapAsync(this.writeFileBase, [id, buf, flagsNum, modeNum], cb);
    };
    Volume.prototype.linkBase = function (filename1, filename2) {
        var steps1 = filenameToSteps(filename1);
        var link1 = this.getLink(steps1);
        if (!link1)
            throw createError(ENOENT, 'link', filename1, filename2);
        var steps2 = filenameToSteps(filename2);
        // Check new link directory exists.
        var dir2 = this.getLinkParent(steps2);
        if (!dir2)
            throw createError(ENOENT, 'link', filename1, filename2);
        var name = steps2[steps2.length - 1];
        // Check if new file already exists.
        if (dir2.getChild(name))
            throw createError(EEXIST, 'link', filename1, filename2);
        var node = link1.getNode();
        node.nlink++;
        dir2.createChild(name, node);
    };
    Volume.prototype.copyFileBase = function (src, dest, flags) {
        var buf = this.readFileSync(src);
        if (flags & COPYFILE_EXCL) {
            if (this.existsSync(dest)) {
                throw createError(EEXIST, 'copyFile', src, dest);
            }
        }
        if (flags & COPYFILE_FICLONE_FORCE) {
            throw createError(ENOSYS, 'copyFile', src, dest);
        }
        this.writeFileBase(dest, buf, FLAGS.w, 438 /* MODE.DEFAULT */);
    };
    Volume.prototype.copyFileSync = function (src, dest, flags) {
        var srcFilename = pathToFilename(src);
        var destFilename = pathToFilename(dest);
        return this.copyFileBase(srcFilename, destFilename, (flags || 0) | 0);
    };
    Volume.prototype.copyFile = function (src, dest, a, b) {
        var srcFilename = pathToFilename(src);
        var destFilename = pathToFilename(dest);
        var flags;
        var callback;
        if (typeof a === 'function') {
            flags = 0;
            callback = a;
        }
        else {
            flags = a;
            callback = b;
        }
        validateCallback(callback);
        this.wrapAsync(this.copyFileBase, [srcFilename, destFilename, flags], callback);
    };
    Volume.prototype.linkSync = function (existingPath, newPath) {
        var existingPathFilename = pathToFilename(existingPath);
        var newPathFilename = pathToFilename(newPath);
        this.linkBase(existingPathFilename, newPathFilename);
    };
    Volume.prototype.link = function (existingPath, newPath, callback) {
        var existingPathFilename = pathToFilename(existingPath);
        var newPathFilename = pathToFilename(newPath);
        this.wrapAsync(this.linkBase, [existingPathFilename, newPathFilename], callback);
    };
    Volume.prototype.unlinkBase = function (filename) {
        var steps = filenameToSteps(filename);
        var link = this.getLink(steps);
        if (!link)
            throw createError(ENOENT, 'unlink', filename);
        // TODO: Check if it is file, dir, other...
        if (link.length)
            throw Error('Dir not empty...');
        this.deleteLink(link);
        var node = link.getNode();
        node.nlink--;
        // When all hard links to i-node are deleted, remove the i-node, too.
        if (node.nlink <= 0) {
            this.deleteNode(node);
        }
    };
    Volume.prototype.unlinkSync = function (path) {
        var filename = pathToFilename(path);
        this.unlinkBase(filename);
    };
    Volume.prototype.unlink = function (path, callback) {
        var filename = pathToFilename(path);
        this.wrapAsync(this.unlinkBase, [filename], callback);
    };
    Volume.prototype.symlinkBase = function (targetFilename, pathFilename) {
        var pathSteps = filenameToSteps(pathFilename);
        // Check if directory exists, where we about to create a symlink.
        var dirLink = this.getLinkParent(pathSteps);
        if (!dirLink)
            throw createError(ENOENT, 'symlink', targetFilename, pathFilename);
        var name = pathSteps[pathSteps.length - 1];
        // Check if new file already exists.
        if (dirLink.getChild(name))
            throw createError(EEXIST, 'symlink', targetFilename, pathFilename);
        // Create symlink.
        var symlink = dirLink.createChild(name);
        symlink.getNode().makeSymlink(filenameToSteps(targetFilename));
        return symlink;
    };
    // `type` argument works only on Windows.
    Volume.prototype.symlinkSync = function (target, path, type) {
        var targetFilename = pathToFilename(target);
        var pathFilename = pathToFilename(path);
        this.symlinkBase(targetFilename, pathFilename);
    };
    Volume.prototype.symlink = function (target, path, a, b) {
        var callback = validateCallback(typeof a === 'function' ? a : b);
        var targetFilename = pathToFilename(target);
        var pathFilename = pathToFilename(path);
        this.wrapAsync(this.symlinkBase, [targetFilename, pathFilename], callback);
    };
    Volume.prototype.realpathBase = function (filename, encoding) {
        var steps = filenameToSteps(filename);
        var realLink = this.getResolvedLink(steps);
        if (!realLink)
            throw createError(ENOENT, 'realpath', filename);
        return (0, encoding_1.strToEncoding)(realLink.getPath() || '/', encoding);
    };
    Volume.prototype.realpathSync = function (path, options) {
        return this.realpathBase(pathToFilename(path), getRealpathOptions(options).encoding);
    };
    Volume.prototype.realpath = function (path, a, b) {
        var _a = getRealpathOptsAndCb(a, b), opts = _a[0], callback = _a[1];
        var pathFilename = pathToFilename(path);
        this.wrapAsync(this.realpathBase, [pathFilename, opts.encoding], callback);
    };
    Volume.prototype.lstatBase = function (filename, bigint, throwIfNoEntry) {
        if (bigint === void 0) { bigint = false; }
        if (throwIfNoEntry === void 0) { throwIfNoEntry = false; }
        var link = this.getLink(filenameToSteps(filename));
        if (link) {
            return Stats_1.default.build(link.getNode(), bigint);
        }
        else if (!throwIfNoEntry) {
            return undefined;
        }
        else {
            throw createError(ENOENT, 'lstat', filename);
        }
    };
    Volume.prototype.lstatSync = function (path, options) {
        var _a = getStatOptions(options), _b = _a.throwIfNoEntry, throwIfNoEntry = _b === void 0 ? true : _b, _c = _a.bigint, bigint = _c === void 0 ? false : _c;
        return this.lstatBase(pathToFilename(path), bigint, throwIfNoEntry);
    };
    Volume.prototype.lstat = function (path, a, b) {
        var _a = getStatOptsAndCb(a, b), _b = _a[0], _c = _b.throwIfNoEntry, throwIfNoEntry = _c === void 0 ? true : _c, _d = _b.bigint, bigint = _d === void 0 ? false : _d, callback = _a[1];
        this.wrapAsync(this.lstatBase, [pathToFilename(path), bigint, throwIfNoEntry], callback);
    };
    Volume.prototype.statBase = function (filename, bigint, throwIfNoEntry) {
        if (bigint === void 0) { bigint = false; }
        if (throwIfNoEntry === void 0) { throwIfNoEntry = true; }
        var link = this.getResolvedLink(filenameToSteps(filename));
        if (link) {
            return Stats_1.default.build(link.getNode(), bigint);
        }
        else if (!throwIfNoEntry) {
            return undefined;
        }
        else {
            throw createError(ENOENT, 'stat', filename);
        }
    };
    Volume.prototype.statSync = function (path, options) {
        var _a = getStatOptions(options), _b = _a.bigint, bigint = _b === void 0 ? true : _b, _c = _a.throwIfNoEntry, throwIfNoEntry = _c === void 0 ? true : _c;
        return this.statBase(pathToFilename(path), bigint, throwIfNoEntry);
    };
    Volume.prototype.stat = function (path, a, b) {
        var _a = getStatOptsAndCb(a, b), _b = _a[0], _c = _b.bigint, bigint = _c === void 0 ? false : _c, _d = _b.throwIfNoEntry, throwIfNoEntry = _d === void 0 ? true : _d, callback = _a[1];
        this.wrapAsync(this.statBase, [pathToFilename(path), bigint, throwIfNoEntry], callback);
    };
    Volume.prototype.fstatBase = function (fd, bigint) {
        if (bigint === void 0) { bigint = false; }
        var file = this.getFileByFd(fd);
        if (!file)
            throw createError(EBADF, 'fstat');
        return Stats_1.default.build(file.node, bigint);
    };
    Volume.prototype.fstatSync = function (fd, options) {
        return this.fstatBase(fd, getStatOptions(options).bigint);
    };
    Volume.prototype.fstat = function (fd, a, b) {
        var _a = getStatOptsAndCb(a, b), opts = _a[0], callback = _a[1];
        this.wrapAsync(this.fstatBase, [fd, opts.bigint], callback);
    };
    Volume.prototype.renameBase = function (oldPathFilename, newPathFilename) {
        var link = this.getLink(filenameToSteps(oldPathFilename));
        if (!link)
            throw createError(ENOENT, 'rename', oldPathFilename, newPathFilename);
        // TODO: Check if it is directory, if non-empty, we cannot move it, right?
        var newPathSteps = filenameToSteps(newPathFilename);
        // Check directory exists for the new location.
        var newPathDirLink = this.getLinkParent(newPathSteps);
        if (!newPathDirLink)
            throw createError(ENOENT, 'rename', oldPathFilename, newPathFilename);
        // TODO: Also treat cases with directories and symbolic links.
        // TODO: See: http://man7.org/linux/man-pages/man2/rename.2.html
        // Remove hard link from old folder.
        var oldLinkParent = link.parent;
        if (oldLinkParent) {
            oldLinkParent.deleteChild(link);
        }
        // Rename should overwrite the new path, if that exists.
        var name = newPathSteps[newPathSteps.length - 1];
        link.name = name;
        link.steps = __spreadArray(__spreadArray([], newPathDirLink.steps, true), [name], false);
        newPathDirLink.setChild(link.getName(), link);
    };
    Volume.prototype.renameSync = function (oldPath, newPath) {
        var oldPathFilename = pathToFilename(oldPath);
        var newPathFilename = pathToFilename(newPath);
        this.renameBase(oldPathFilename, newPathFilename);
    };
    Volume.prototype.rename = function (oldPath, newPath, callback) {
        var oldPathFilename = pathToFilename(oldPath);
        var newPathFilename = pathToFilename(newPath);
        this.wrapAsync(this.renameBase, [oldPathFilename, newPathFilename], callback);
    };
    Volume.prototype.existsBase = function (filename) {
        return !!this.statBase(filename);
    };
    Volume.prototype.existsSync = function (path) {
        try {
            return this.existsBase(pathToFilename(path));
        }
        catch (err) {
            return false;
        }
    };
    Volume.prototype.exists = function (path, callback) {
        var _this = this;
        var filename = pathToFilename(path);
        if (typeof callback !== 'function')
            throw Error(ERRSTR.CB);
        (0, setImmediate_1.default)(function () {
            try {
                callback(_this.existsBase(filename));
            }
            catch (err) {
                callback(false);
            }
        });
    };
    Volume.prototype.accessBase = function (filename, mode) {
        var link = this.getLinkOrThrow(filename, 'access');
        // TODO: Verify permissions
    };
    Volume.prototype.accessSync = function (path, mode) {
        if (mode === void 0) { mode = F_OK; }
        var filename = pathToFilename(path);
        mode = mode | 0;
        this.accessBase(filename, mode);
    };
    Volume.prototype.access = function (path, a, b) {
        var mode = F_OK;
        var callback;
        if (typeof a !== 'function') {
            mode = a | 0; // cast to number
            callback = validateCallback(b);
        }
        else {
            callback = a;
        }
        var filename = pathToFilename(path);
        this.wrapAsync(this.accessBase, [filename, mode], callback);
    };
    Volume.prototype.appendFileSync = function (id, data, options) {
        if (options === void 0) { options = appendFileDefaults; }
        var opts = getAppendFileOpts(options);
        // force append behavior when using a supplied file descriptor
        if (!opts.flag || isFd(id))
            opts.flag = 'a';
        this.writeFileSync(id, data, opts);
    };
    Volume.prototype.appendFile = function (id, data, a, b) {
        var _a = getAppendFileOptsAndCb(a, b), opts = _a[0], callback = _a[1];
        // force append behavior when using a supplied file descriptor
        if (!opts.flag || isFd(id))
            opts.flag = 'a';
        this.writeFile(id, data, opts, callback);
    };
    Volume.prototype.readdirBase = function (filename, options) {
        var steps = filenameToSteps(filename);
        var link = this.getResolvedLink(steps);
        if (!link)
            throw createError(ENOENT, 'readdir', filename);
        var node = link.getNode();
        if (!node.isDirectory())
            throw createError(ENOTDIR, 'scandir', filename);
        if (options.withFileTypes) {
            var list_1 = [];
            for (var name_2 in link.children) {
                var child = link.getChild(name_2);
                if (!child || name_2 === '.' || name_2 === '..') {
                    continue;
                }
                list_1.push(Dirent_1.default.build(child, options.encoding));
            }
            if (!isWin && options.encoding !== 'buffer')
                list_1.sort(function (a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
            return list_1;
        }
        var list = [];
        for (var name_3 in link.children) {
            if (name_3 === '.' || name_3 === '..') {
                continue;
            }
            list.push((0, encoding_1.strToEncoding)(name_3, options.encoding));
        }
        if (!isWin && options.encoding !== 'buffer')
            list.sort();
        return list;
    };
    Volume.prototype.readdirSync = function (path, options) {
        var opts = getReaddirOptions(options);
        var filename = pathToFilename(path);
        return this.readdirBase(filename, opts);
    };
    Volume.prototype.readdir = function (path, a, b) {
        var _a = getReaddirOptsAndCb(a, b), options = _a[0], callback = _a[1];
        var filename = pathToFilename(path);
        this.wrapAsync(this.readdirBase, [filename, options], callback);
    };
    Volume.prototype.readlinkBase = function (filename, encoding) {
        var link = this.getLinkOrThrow(filename, 'readlink');
        var node = link.getNode();
        if (!node.isSymlink())
            throw createError(EINVAL, 'readlink', filename);
        var str = sep + node.symlink.join(sep);
        return (0, encoding_1.strToEncoding)(str, encoding);
    };
    Volume.prototype.readlinkSync = function (path, options) {
        var opts = getDefaultOpts(options);
        var filename = pathToFilename(path);
        return this.readlinkBase(filename, opts.encoding);
    };
    Volume.prototype.readlink = function (path, a, b) {
        var _a = getDefaultOptsAndCb(a, b), opts = _a[0], callback = _a[1];
        var filename = pathToFilename(path);
        this.wrapAsync(this.readlinkBase, [filename, opts.encoding], callback);
    };
    Volume.prototype.fsyncBase = function (fd) {
        this.getFileByFdOrThrow(fd, 'fsync');
    };
    Volume.prototype.fsyncSync = function (fd) {
        this.fsyncBase(fd);
    };
    Volume.prototype.fsync = function (fd, callback) {
        this.wrapAsync(this.fsyncBase, [fd], callback);
    };
    Volume.prototype.fdatasyncBase = function (fd) {
        this.getFileByFdOrThrow(fd, 'fdatasync');
    };
    Volume.prototype.fdatasyncSync = function (fd) {
        this.fdatasyncBase(fd);
    };
    Volume.prototype.fdatasync = function (fd, callback) {
        this.wrapAsync(this.fdatasyncBase, [fd], callback);
    };
    Volume.prototype.ftruncateBase = function (fd, len) {
        var file = this.getFileByFdOrThrow(fd, 'ftruncate');
        file.truncate(len);
    };
    Volume.prototype.ftruncateSync = function (fd, len) {
        this.ftruncateBase(fd, len);
    };
    Volume.prototype.ftruncate = function (fd, a, b) {
        var len = typeof a === 'number' ? a : 0;
        var callback = validateCallback(typeof a === 'number' ? b : a);
        this.wrapAsync(this.ftruncateBase, [fd, len], callback);
    };
    Volume.prototype.truncateBase = function (path, len) {
        var fd = this.openSync(path, 'r+');
        try {
            this.ftruncateSync(fd, len);
        }
        finally {
            this.closeSync(fd);
        }
    };
    Volume.prototype.truncateSync = function (id, len) {
        if (isFd(id))
            return this.ftruncateSync(id, len);
        this.truncateBase(id, len);
    };
    Volume.prototype.truncate = function (id, a, b) {
        var len = typeof a === 'number' ? a : 0;
        var callback = validateCallback(typeof a === 'number' ? b : a);
        if (isFd(id))
            return this.ftruncate(id, len, callback);
        this.wrapAsync(this.truncateBase, [id, len], callback);
    };
    Volume.prototype.futimesBase = function (fd, atime, mtime) {
        var file = this.getFileByFdOrThrow(fd, 'futimes');
        var node = file.node;
        node.atime = new Date(atime * 1000);
        node.mtime = new Date(mtime * 1000);
    };
    Volume.prototype.futimesSync = function (fd, atime, mtime) {
        this.futimesBase(fd, toUnixTimestamp(atime), toUnixTimestamp(mtime));
    };
    Volume.prototype.futimes = function (fd, atime, mtime, callback) {
        this.wrapAsync(this.futimesBase, [fd, toUnixTimestamp(atime), toUnixTimestamp(mtime)], callback);
    };
    Volume.prototype.utimesBase = function (filename, atime, mtime) {
        var fd = this.openSync(filename, 'r');
        try {
            this.futimesBase(fd, atime, mtime);
        }
        finally {
            this.closeSync(fd);
        }
    };
    Volume.prototype.utimesSync = function (path, atime, mtime) {
        this.utimesBase(pathToFilename(path), toUnixTimestamp(atime), toUnixTimestamp(mtime));
    };
    Volume.prototype.utimes = function (path, atime, mtime, callback) {
        this.wrapAsync(this.utimesBase, [pathToFilename(path), toUnixTimestamp(atime), toUnixTimestamp(mtime)], callback);
    };
    Volume.prototype.mkdirBase = function (filename, modeNum) {
        var steps = filenameToSteps(filename);
        // This will throw if user tries to create root dir `fs.mkdirSync('/')`.
        if (!steps.length) {
            throw createError(EEXIST, 'mkdir', filename);
        }
        var dir = this.getLinkParentAsDirOrThrow(filename, 'mkdir');
        // Check path already exists.
        var name = steps[steps.length - 1];
        if (dir.getChild(name))
            throw createError(EEXIST, 'mkdir', filename);
        dir.createChild(name, this.createNode(true, modeNum));
    };
    /**
     * Creates directory tree recursively.
     * @param filename
     * @param modeNum
     */
    Volume.prototype.mkdirpBase = function (filename, modeNum) {
        var fullPath = resolve(filename);
        var fullPathSansSlash = fullPath.substring(1);
        var steps = !fullPathSansSlash ? [] : fullPathSansSlash.split(sep);
        var link = this.root;
        var created = false;
        for (var i = 0; i < steps.length; i++) {
            var step = steps[i];
            if (!link.getNode().isDirectory())
                throw createError(ENOTDIR, 'mkdir', link.getPath());
            var child = link.getChild(step);
            if (child) {
                if (child.getNode().isDirectory())
                    link = child;
                else
                    throw createError(ENOTDIR, 'mkdir', child.getPath());
            }
            else {
                link = link.createChild(step, this.createNode(true, modeNum));
                created = true;
            }
        }
        return created ? fullPath : undefined;
    };
    Volume.prototype.mkdirSync = function (path, options) {
        var opts = getMkdirOptions(options);
        var modeNum = modeToNumber(opts.mode, 511);
        var filename = pathToFilename(path);
        if (opts.recursive)
            return this.mkdirpBase(filename, modeNum);
        this.mkdirBase(filename, modeNum);
    };
    Volume.prototype.mkdir = function (path, a, b) {
        var opts = getMkdirOptions(a);
        var callback = validateCallback(typeof a === 'function' ? a : b);
        var modeNum = modeToNumber(opts.mode, 511);
        var filename = pathToFilename(path);
        if (opts.recursive)
            this.wrapAsync(this.mkdirpBase, [filename, modeNum], callback);
        else
            this.wrapAsync(this.mkdirBase, [filename, modeNum], callback);
    };
    // legacy interface
    Volume.prototype.mkdirpSync = function (path, mode) {
        return this.mkdirSync(path, { mode: mode, recursive: true });
    };
    Volume.prototype.mkdirp = function (path, a, b) {
        var mode = typeof a === 'function' ? undefined : a;
        var callback = validateCallback(typeof a === 'function' ? a : b);
        this.mkdir(path, { mode: mode, recursive: true }, callback);
    };
    Volume.prototype.mkdtempBase = function (prefix, encoding, retry) {
        if (retry === void 0) { retry = 5; }
        var filename = prefix + this.genRndStr();
        try {
            this.mkdirBase(filename, 511 /* MODE.DIR */);
            return (0, encoding_1.strToEncoding)(filename, encoding);
        }
        catch (err) {
            if (err.code === EEXIST) {
                if (retry > 1)
                    return this.mkdtempBase(prefix, encoding, retry - 1);
                else
                    throw Error('Could not create temp dir.');
            }
            else
                throw err;
        }
    };
    Volume.prototype.mkdtempSync = function (prefix, options) {
        var encoding = getDefaultOpts(options).encoding;
        if (!prefix || typeof prefix !== 'string')
            throw new TypeError('filename prefix is required');
        nullCheck(prefix);
        return this.mkdtempBase(prefix, encoding);
    };
    Volume.prototype.mkdtemp = function (prefix, a, b) {
        var _a = getDefaultOptsAndCb(a, b), encoding = _a[0].encoding, callback = _a[1];
        if (!prefix || typeof prefix !== 'string')
            throw new TypeError('filename prefix is required');
        if (!nullCheck(prefix))
            return;
        this.wrapAsync(this.mkdtempBase, [prefix, encoding], callback);
    };
    Volume.prototype.rmdirBase = function (filename, options) {
        var opts = getRmdirOptions(options);
        var link = this.getLinkAsDirOrThrow(filename, 'rmdir');
        // Check directory is empty.
        if (link.length && !opts.recursive)
            throw createError(ENOTEMPTY, 'rmdir', filename);
        this.deleteLink(link);
    };
    Volume.prototype.rmdirSync = function (path, options) {
        this.rmdirBase(pathToFilename(path), options);
    };
    Volume.prototype.rmdir = function (path, a, b) {
        var opts = getRmdirOptions(a);
        var callback = validateCallback(typeof a === 'function' ? a : b);
        this.wrapAsync(this.rmdirBase, [pathToFilename(path), opts], callback);
    };
    Volume.prototype.rmBase = function (filename, options) {
        if (options === void 0) { options = {}; }
        var link = this.getResolvedLink(filename);
        if (!link) {
            // "stat" is used to match Node's native error message.
            if (!options.force)
                throw createError(ENOENT, 'stat', filename);
            return;
        }
        if (link.getNode().isDirectory()) {
            if (!options.recursive) {
                throw createError(ERR_FS_EISDIR, 'rm', filename);
            }
        }
        this.deleteLink(link);
    };
    Volume.prototype.rmSync = function (path, options) {
        this.rmBase(pathToFilename(path), options);
    };
    Volume.prototype.rm = function (path, a, b) {
        var _a = getRmOptsAndCb(a, b), opts = _a[0], callback = _a[1];
        this.wrapAsync(this.rmBase, [pathToFilename(path), opts], callback);
    };
    Volume.prototype.fchmodBase = function (fd, modeNum) {
        var file = this.getFileByFdOrThrow(fd, 'fchmod');
        file.chmod(modeNum);
    };
    Volume.prototype.fchmodSync = function (fd, mode) {
        this.fchmodBase(fd, modeToNumber(mode));
    };
    Volume.prototype.fchmod = function (fd, mode, callback) {
        this.wrapAsync(this.fchmodBase, [fd, modeToNumber(mode)], callback);
    };
    Volume.prototype.chmodBase = function (filename, modeNum) {
        var fd = this.openSync(filename, 'r');
        try {
            this.fchmodBase(fd, modeNum);
        }
        finally {
            this.closeSync(fd);
        }
    };
    Volume.prototype.chmodSync = function (path, mode) {
        var modeNum = modeToNumber(mode);
        var filename = pathToFilename(path);
        this.chmodBase(filename, modeNum);
    };
    Volume.prototype.chmod = function (path, mode, callback) {
        var modeNum = modeToNumber(mode);
        var filename = pathToFilename(path);
        this.wrapAsync(this.chmodBase, [filename, modeNum], callback);
    };
    Volume.prototype.lchmodBase = function (filename, modeNum) {
        var fd = this.openBase(filename, O_RDWR, 0, false);
        try {
            this.fchmodBase(fd, modeNum);
        }
        finally {
            this.closeSync(fd);
        }
    };
    Volume.prototype.lchmodSync = function (path, mode) {
        var modeNum = modeToNumber(mode);
        var filename = pathToFilename(path);
        this.lchmodBase(filename, modeNum);
    };
    Volume.prototype.lchmod = function (path, mode, callback) {
        var modeNum = modeToNumber(mode);
        var filename = pathToFilename(path);
        this.wrapAsync(this.lchmodBase, [filename, modeNum], callback);
    };
    Volume.prototype.fchownBase = function (fd, uid, gid) {
        this.getFileByFdOrThrow(fd, 'fchown').chown(uid, gid);
    };
    Volume.prototype.fchownSync = function (fd, uid, gid) {
        validateUid(uid);
        validateGid(gid);
        this.fchownBase(fd, uid, gid);
    };
    Volume.prototype.fchown = function (fd, uid, gid, callback) {
        validateUid(uid);
        validateGid(gid);
        this.wrapAsync(this.fchownBase, [fd, uid, gid], callback);
    };
    Volume.prototype.chownBase = function (filename, uid, gid) {
        var link = this.getResolvedLinkOrThrow(filename, 'chown');
        var node = link.getNode();
        node.chown(uid, gid);
        // if(node.isFile() || node.isSymlink()) {
        //
        // } else if(node.isDirectory()) {
        //
        // } else {
        // TODO: What do we do here?
        // }
    };
    Volume.prototype.chownSync = function (path, uid, gid) {
        validateUid(uid);
        validateGid(gid);
        this.chownBase(pathToFilename(path), uid, gid);
    };
    Volume.prototype.chown = function (path, uid, gid, callback) {
        validateUid(uid);
        validateGid(gid);
        this.wrapAsync(this.chownBase, [pathToFilename(path), uid, gid], callback);
    };
    Volume.prototype.lchownBase = function (filename, uid, gid) {
        this.getLinkOrThrow(filename, 'lchown').getNode().chown(uid, gid);
    };
    Volume.prototype.lchownSync = function (path, uid, gid) {
        validateUid(uid);
        validateGid(gid);
        this.lchownBase(pathToFilename(path), uid, gid);
    };
    Volume.prototype.lchown = function (path, uid, gid, callback) {
        validateUid(uid);
        validateGid(gid);
        this.wrapAsync(this.lchownBase, [pathToFilename(path), uid, gid], callback);
    };
    Volume.prototype.watchFile = function (path, a, b) {
        var filename = pathToFilename(path);
        var options = a;
        var listener = b;
        if (typeof options === 'function') {
            listener = a;
            options = null;
        }
        if (typeof listener !== 'function') {
            throw Error('"watchFile()" requires a listener function');
        }
        var interval = 5007;
        var persistent = true;
        if (options && typeof options === 'object') {
            if (typeof options.interval === 'number')
                interval = options.interval;
            if (typeof options.persistent === 'boolean')
                persistent = options.persistent;
        }
        var watcher = this.statWatchers[filename];
        if (!watcher) {
            watcher = new this.StatWatcher();
            watcher.start(filename, persistent, interval);
            this.statWatchers[filename] = watcher;
        }
        watcher.addListener('change', listener);
        return watcher;
    };
    Volume.prototype.unwatchFile = function (path, listener) {
        var filename = pathToFilename(path);
        var watcher = this.statWatchers[filename];
        if (!watcher)
            return;
        if (typeof listener === 'function') {
            watcher.removeListener('change', listener);
        }
        else {
            watcher.removeAllListeners('change');
        }
        if (watcher.listenerCount('change') === 0) {
            watcher.stop();
            delete this.statWatchers[filename];
        }
    };
    Volume.prototype.createReadStream = function (path, options) {
        return new this.ReadStream(path, options);
    };
    Volume.prototype.createWriteStream = function (path, options) {
        return new this.WriteStream(path, options);
    };
    // watch(path: PathLike): FSWatcher;
    // watch(path: PathLike, options?: IWatchOptions | string): FSWatcher;
    Volume.prototype.watch = function (path, options, listener) {
        var filename = pathToFilename(path);
        var givenOptions = options;
        if (typeof options === 'function') {
            listener = options;
            givenOptions = null;
        }
        // tslint:disable-next-line prefer-const
        var _a = getDefaultOpts(givenOptions), persistent = _a.persistent, recursive = _a.recursive, encoding = _a.encoding;
        if (persistent === undefined)
            persistent = true;
        if (recursive === undefined)
            recursive = false;
        var watcher = new this.FSWatcher();
        watcher.start(filename, persistent, recursive, encoding);
        if (listener) {
            watcher.addListener('change', listener);
        }
        return watcher;
    };
    /**
     * Global file descriptor counter. UNIX file descriptors start from 0 and go sequentially
     * up, so here, in order not to conflict with them, we choose some big number and descrease
     * the file descriptor of every new opened file.
     * @type {number}
     * @todo This should not be static, right?
     */
    Volume.fd = 0x7fffffff;
    return Volume;
}());
exports.Volume = Volume;
function emitStop(self) {
    self.emit('stop');
}
var StatWatcher = /** @class */ (function (_super) {
    __extends(StatWatcher, _super);
    function StatWatcher(vol) {
        var _this = _super.call(this) || this;
        _this.onInterval = function () {
            try {
                var stats = _this.vol.statSync(_this.filename);
                if (_this.hasChanged(stats)) {
                    _this.emit('change', stats, _this.prev);
                    _this.prev = stats;
                }
            }
            finally {
                _this.loop();
            }
        };
        _this.vol = vol;
        return _this;
    }
    StatWatcher.prototype.loop = function () {
        this.timeoutRef = this.setTimeout(this.onInterval, this.interval);
    };
    StatWatcher.prototype.hasChanged = function (stats) {
        // if(!this.prev) return false;
        if (stats.mtimeMs > this.prev.mtimeMs)
            return true;
        if (stats.nlink !== this.prev.nlink)
            return true;
        return false;
    };
    StatWatcher.prototype.start = function (path, persistent, interval) {
        if (persistent === void 0) { persistent = true; }
        if (interval === void 0) { interval = 5007; }
        this.filename = pathToFilename(path);
        this.setTimeout = persistent
            ? setTimeout.bind(typeof globalThis !== 'undefined' ? globalThis : global)
            : setTimeoutUnref_1.default;
        this.interval = interval;
        this.prev = this.vol.statSync(this.filename);
        this.loop();
    };
    StatWatcher.prototype.stop = function () {
        clearTimeout(this.timeoutRef);
        process_1.default.nextTick(emitStop, this);
    };
    return StatWatcher;
}(events_1.EventEmitter));
exports.StatWatcher = StatWatcher;
var pool;
function allocNewPool(poolSize) {
    pool = (0, buffer_1.bufferAllocUnsafe)(poolSize);
    pool.used = 0;
}
util.inherits(FsReadStream, stream_1.Readable);
exports.ReadStream = FsReadStream;
function FsReadStream(vol, path, options) {
    if (!(this instanceof FsReadStream))
        return new FsReadStream(vol, path, options);
    this._vol = vol;
    // a little bit bigger buffer and water marks by default
    options = Object.assign({}, getOptions(options, {}));
    if (options.highWaterMark === undefined)
        options.highWaterMark = 64 * 1024;
    stream_1.Readable.call(this, options);
    this.path = pathToFilename(path);
    this.fd = options.fd === undefined ? null : options.fd;
    this.flags = options.flags === undefined ? 'r' : options.flags;
    this.mode = options.mode === undefined ? 438 : options.mode;
    this.start = options.start;
    this.end = options.end;
    this.autoClose = options.autoClose === undefined ? true : options.autoClose;
    this.pos = undefined;
    this.bytesRead = 0;
    if (this.start !== undefined) {
        if (typeof this.start !== 'number') {
            throw new TypeError('"start" option must be a Number');
        }
        if (this.end === undefined) {
            this.end = Infinity;
        }
        else if (typeof this.end !== 'number') {
            throw new TypeError('"end" option must be a Number');
        }
        if (this.start > this.end) {
            throw new Error('"start" option must be <= "end" option');
        }
        this.pos = this.start;
    }
    if (typeof this.fd !== 'number')
        this.open();
    this.on('end', function () {
        if (this.autoClose) {
            if (this.destroy)
                this.destroy();
        }
    });
}
FsReadStream.prototype.open = function () {
    var self = this; // tslint:disable-line no-this-assignment
    this._vol.open(this.path, this.flags, this.mode, function (er, fd) {
        if (er) {
            if (self.autoClose) {
                if (self.destroy)
                    self.destroy();
            }
            self.emit('error', er);
            return;
        }
        self.fd = fd;
        self.emit('open', fd);
        // start the flow of data.
        self.read();
    });
};
FsReadStream.prototype._read = function (n) {
    if (typeof this.fd !== 'number') {
        return this.once('open', function () {
            this._read(n);
        });
    }
    if (this.destroyed)
        return;
    if (!pool || pool.length - pool.used < kMinPoolSpace) {
        // discard the old pool.
        allocNewPool(this._readableState.highWaterMark);
    }
    // Grab another reference to the pool in the case that while we're
    // in the thread pool another read() finishes up the pool, and
    // allocates a new one.
    var thisPool = pool;
    var toRead = Math.min(pool.length - pool.used, n);
    var start = pool.used;
    if (this.pos !== undefined)
        toRead = Math.min(this.end - this.pos + 1, toRead);
    // already read everything we were supposed to read!
    // treat as EOF.
    if (toRead <= 0)
        return this.push(null);
    // the actual read.
    var self = this; // tslint:disable-line no-this-assignment
    this._vol.read(this.fd, pool, pool.used, toRead, this.pos, onread);
    // move the pool positions, and internal position for reading.
    if (this.pos !== undefined)
        this.pos += toRead;
    pool.used += toRead;
    function onread(er, bytesRead) {
        if (er) {
            if (self.autoClose && self.destroy) {
                self.destroy();
            }
            self.emit('error', er);
        }
        else {
            var b = null;
            if (bytesRead > 0) {
                self.bytesRead += bytesRead;
                b = thisPool.slice(start, start + bytesRead);
            }
            self.push(b);
        }
    }
};
FsReadStream.prototype._destroy = function (err, cb) {
    this.close(function (err2) {
        cb(err || err2);
    });
};
FsReadStream.prototype.close = function (cb) {
    var _this = this;
    var _a;
    if (cb)
        this.once('close', cb);
    if (this.closed || typeof this.fd !== 'number') {
        if (typeof this.fd !== 'number') {
            this.once('open', closeOnOpen);
            return;
        }
        return process_1.default.nextTick(function () { return _this.emit('close'); });
    }
    // Since Node 18, there is only a getter for '.closed'.
    // The first branch mimics other setters from Readable.
    // See https://github.com/nodejs/node/blob/v18.0.0/lib/internal/streams/readable.js#L1243
    if (typeof ((_a = this._readableState) === null || _a === void 0 ? void 0 : _a.closed) === 'boolean') {
        this._readableState.closed = true;
    }
    else {
        this.closed = true;
    }
    this._vol.close(this.fd, function (er) {
        if (er)
            _this.emit('error', er);
        else
            _this.emit('close');
    });
    this.fd = null;
};
// needed because as it will be called with arguments
// that does not match this.close() signature
function closeOnOpen(fd) {
    this.close();
}
util.inherits(FsWriteStream, stream_1.Writable);
exports.WriteStream = FsWriteStream;
function FsWriteStream(vol, path, options) {
    if (!(this instanceof FsWriteStream))
        return new FsWriteStream(vol, path, options);
    this._vol = vol;
    options = Object.assign({}, getOptions(options, {}));
    stream_1.Writable.call(this, options);
    this.path = pathToFilename(path);
    this.fd = options.fd === undefined ? null : options.fd;
    this.flags = options.flags === undefined ? 'w' : options.flags;
    this.mode = options.mode === undefined ? 438 : options.mode;
    this.start = options.start;
    this.autoClose = options.autoClose === undefined ? true : !!options.autoClose;
    this.pos = undefined;
    this.bytesWritten = 0;
    if (this.start !== undefined) {
        if (typeof this.start !== 'number') {
            throw new TypeError('"start" option must be a Number');
        }
        if (this.start < 0) {
            throw new Error('"start" must be >= zero');
        }
        this.pos = this.start;
    }
    if (options.encoding)
        this.setDefaultEncoding(options.encoding);
    if (typeof this.fd !== 'number')
        this.open();
    // dispose on finish.
    this.once('finish', function () {
        if (this.autoClose) {
            this.close();
        }
    });
}
FsWriteStream.prototype.open = function () {
    this._vol.open(this.path, this.flags, this.mode, function (er, fd) {
        if (er) {
            if (this.autoClose && this.destroy) {
                this.destroy();
            }
            this.emit('error', er);
            return;
        }
        this.fd = fd;
        this.emit('open', fd);
    }.bind(this));
};
FsWriteStream.prototype._write = function (data, encoding, cb) {
    if (!(data instanceof buffer_1.Buffer || data instanceof Uint8Array))
        return this.emit('error', new Error('Invalid data'));
    if (typeof this.fd !== 'number') {
        return this.once('open', function () {
            this._write(data, encoding, cb);
        });
    }
    var self = this; // tslint:disable-line no-this-assignment
    this._vol.write(this.fd, data, 0, data.length, this.pos, function (er, bytes) {
        if (er) {
            if (self.autoClose && self.destroy) {
                self.destroy();
            }
            return cb(er);
        }
        self.bytesWritten += bytes;
        cb();
    });
    if (this.pos !== undefined)
        this.pos += data.length;
};
FsWriteStream.prototype._writev = function (data, cb) {
    if (typeof this.fd !== 'number') {
        return this.once('open', function () {
            this._writev(data, cb);
        });
    }
    var self = this; // tslint:disable-line no-this-assignment
    var len = data.length;
    var chunks = new Array(len);
    var size = 0;
    for (var i = 0; i < len; i++) {
        var chunk = data[i].chunk;
        chunks[i] = chunk;
        size += chunk.length;
    }
    var buf = buffer_1.Buffer.concat(chunks);
    this._vol.write(this.fd, buf, 0, buf.length, this.pos, function (er, bytes) {
        if (er) {
            if (self.destroy)
                self.destroy();
            return cb(er);
        }
        self.bytesWritten += bytes;
        cb();
    });
    if (this.pos !== undefined)
        this.pos += size;
};
FsWriteStream.prototype.close = function (cb) {
    var _this = this;
    var _a;
    if (cb)
        this.once('close', cb);
    if (this.closed || typeof this.fd !== 'number') {
        if (typeof this.fd !== 'number') {
            this.once('open', closeOnOpen);
            return;
        }
        return process_1.default.nextTick(function () { return _this.emit('close'); });
    }
    // Since Node 18, there is only a getter for '.closed'.
    // The first branch mimics other setters from Writable.
    // See https://github.com/nodejs/node/blob/v18.0.0/lib/internal/streams/writable.js#L766
    if (typeof ((_a = this._writableState) === null || _a === void 0 ? void 0 : _a.closed) === 'boolean') {
        this._writableState.closed = true;
    }
    else {
        this.closed = true;
    }
    this._vol.close(this.fd, function (er) {
        if (er)
            _this.emit('error', er);
        else
            _this.emit('close');
    });
    this.fd = null;
};
FsWriteStream.prototype._destroy = FsReadStream.prototype._destroy;
// There is no shutdown() for files.
FsWriteStream.prototype.destroySoon = FsWriteStream.prototype.end;
// ---------------------------------------- FSWatcher
var FSWatcher = /** @class */ (function (_super) {
    __extends(FSWatcher, _super);
    function FSWatcher(vol) {
        var _this = _super.call(this) || this;
        _this._filename = '';
        _this._filenameEncoded = '';
        // _persistent: boolean = true;
        _this._recursive = false;
        _this._encoding = encoding_1.ENCODING_UTF8;
        // inode -> removers
        _this._listenerRemovers = new Map();
        _this._onParentChild = function (link) {
            if (link.getName() === _this._getName()) {
                _this._emit('rename');
            }
        };
        _this._emit = function (type) {
            _this.emit('change', type, _this._filenameEncoded);
        };
        _this._persist = function () {
            _this._timer = setTimeout(_this._persist, 1e6);
        };
        _this._vol = vol;
        return _this;
        // TODO: Emit "error" messages when watching.
        // this._handle.onchange = function(status, eventType, filename) {
        //     if (status < 0) {
        //         self._handle.close();
        //         const error = !filename ?
        //             errnoException(status, 'Error watching file for changes:') :
        //             errnoException(status, `Error watching file ${filename} for changes:`);
        //         error.filename = filename;
        //         self.emit('error', error);
        //     } else {
        //         self.emit('change', eventType, filename);
        //     }
        // };
    }
    FSWatcher.prototype._getName = function () {
        return this._steps[this._steps.length - 1];
    };
    FSWatcher.prototype.start = function (path, persistent, recursive, encoding) {
        var _this = this;
        if (persistent === void 0) { persistent = true; }
        if (recursive === void 0) { recursive = false; }
        if (encoding === void 0) { encoding = encoding_1.ENCODING_UTF8; }
        this._filename = pathToFilename(path);
        this._steps = filenameToSteps(this._filename);
        this._filenameEncoded = (0, encoding_1.strToEncoding)(this._filename);
        // this._persistent = persistent;
        this._recursive = recursive;
        this._encoding = encoding;
        try {
            this._link = this._vol.getLinkOrThrow(this._filename, 'FSWatcher');
        }
        catch (err) {
            var error = new Error("watch ".concat(this._filename, " ").concat(err.code));
            error.code = err.code;
            error.errno = err.code;
            throw error;
        }
        var watchLinkNodeChanged = function (link) {
            var _a;
            var filepath = link.getPath();
            var node = link.getNode();
            var onNodeChange = function () {
                var filename = relative(_this._filename, filepath);
                if (!filename) {
                    filename = _this._getName();
                }
                return _this.emit('change', 'change', filename);
            };
            node.on('change', onNodeChange);
            var removers = (_a = _this._listenerRemovers.get(node.ino)) !== null && _a !== void 0 ? _a : [];
            removers.push(function () { return node.removeListener('change', onNodeChange); });
            _this._listenerRemovers.set(node.ino, removers);
        };
        var watchLinkChildrenChanged = function (link) {
            var _a;
            var node = link.getNode();
            // when a new link added
            var onLinkChildAdd = function (l) {
                _this.emit('change', 'rename', relative(_this._filename, l.getPath()));
                setTimeout(function () {
                    // 1. watch changes of the new link-node
                    watchLinkNodeChanged(l);
                    // 2. watch changes of the new link-node's children
                    watchLinkChildrenChanged(l);
                });
            };
            // when a new link deleted
            var onLinkChildDelete = function (l) {
                // remove the listeners of the children nodes
                var removeLinkNodeListeners = function (curLink) {
                    var ino = curLink.getNode().ino;
                    var removers = _this._listenerRemovers.get(ino);
                    if (removers) {
                        removers.forEach(function (r) { return r(); });
                        _this._listenerRemovers.delete(ino);
                    }
                    Object.values(curLink.children).forEach(function (childLink) {
                        if (childLink) {
                            removeLinkNodeListeners(childLink);
                        }
                    });
                };
                removeLinkNodeListeners(l);
                _this.emit('change', 'rename', relative(_this._filename, l.getPath()));
            };
            // children nodes changed
            Object.entries(link.children).forEach(function (_a) {
                var name = _a[0], childLink = _a[1];
                if (childLink && name !== '.' && name !== '..') {
                    watchLinkNodeChanged(childLink);
                }
            });
            // link children add/remove
            link.on('child:add', onLinkChildAdd);
            link.on('child:delete', onLinkChildDelete);
            var removers = (_a = _this._listenerRemovers.get(node.ino)) !== null && _a !== void 0 ? _a : [];
            removers.push(function () {
                link.removeListener('child:add', onLinkChildAdd);
                link.removeListener('child:delete', onLinkChildDelete);
            });
            if (recursive) {
                Object.entries(link.children).forEach(function (_a) {
                    var name = _a[0], childLink = _a[1];
                    if (childLink && name !== '.' && name !== '..') {
                        watchLinkChildrenChanged(childLink);
                    }
                });
            }
        };
        watchLinkNodeChanged(this._link);
        watchLinkChildrenChanged(this._link);
        var parent = this._link.parent;
        if (parent) {
            // parent.on('child:add', this._onParentChild);
            parent.setMaxListeners(parent.getMaxListeners() + 1);
            parent.on('child:delete', this._onParentChild);
        }
        if (persistent)
            this._persist();
    };
    FSWatcher.prototype.close = function () {
        clearTimeout(this._timer);
        this._listenerRemovers.forEach(function (removers) {
            removers.forEach(function (r) { return r(); });
        });
        this._listenerRemovers.clear();
        var parent = this._link.parent;
        if (parent) {
            // parent.removeListener('child:add', this._onParentChild);
            parent.removeListener('child:delete', this._onParentChild);
        }
    };
    return FSWatcher;
}(events_1.EventEmitter));
exports.FSWatcher = FSWatcher;
