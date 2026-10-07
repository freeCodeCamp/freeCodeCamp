(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BrowserFS"] = factory();
	else
		root["BrowserFS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/temp/library/rollup/browserfs.rollup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/temp/library/rollup/browserfs.rollup.js":
/*!*******************************************************!*\
  !*** ./build/temp/library/rollup/browserfs.rollup.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, global, process) {

Object.defineProperty(exports, '__esModule', { value: true });

var buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
var path = __webpack_require__(/*! path */ "./node_modules/bfs-path/js/path.js");

/**
 * Standard libc error codes. Add more to this enum and ErrorStrings as they are
 * needed.
 * @url http://www.gnu.org/software/libc/manual/html_node/Error-Codes.html
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["EPERM"] = 1] = "EPERM";
    ErrorCode[ErrorCode["ENOENT"] = 2] = "ENOENT";
    ErrorCode[ErrorCode["EIO"] = 5] = "EIO";
    ErrorCode[ErrorCode["EBADF"] = 9] = "EBADF";
    ErrorCode[ErrorCode["EACCES"] = 13] = "EACCES";
    ErrorCode[ErrorCode["EBUSY"] = 16] = "EBUSY";
    ErrorCode[ErrorCode["EEXIST"] = 17] = "EEXIST";
    ErrorCode[ErrorCode["ENOTDIR"] = 20] = "ENOTDIR";
    ErrorCode[ErrorCode["EISDIR"] = 21] = "EISDIR";
    ErrorCode[ErrorCode["EINVAL"] = 22] = "EINVAL";
    ErrorCode[ErrorCode["EFBIG"] = 27] = "EFBIG";
    ErrorCode[ErrorCode["ENOSPC"] = 28] = "ENOSPC";
    ErrorCode[ErrorCode["EROFS"] = 30] = "EROFS";
    ErrorCode[ErrorCode["ENOTEMPTY"] = 39] = "ENOTEMPTY";
    ErrorCode[ErrorCode["ENOTSUP"] = 95] = "ENOTSUP";
})(ErrorCode || (ErrorCode = {}));
/* tslint:disable:variable-name */
/**
 * Strings associated with each error code.
 * @hidden
 */
var ErrorStrings = {};
ErrorStrings[ErrorCode.EPERM] = 'Operation not permitted.';
ErrorStrings[ErrorCode.ENOENT] = 'No such file or directory.';
ErrorStrings[ErrorCode.EIO] = 'Input/output error.';
ErrorStrings[ErrorCode.EBADF] = 'Bad file descriptor.';
ErrorStrings[ErrorCode.EACCES] = 'Permission denied.';
ErrorStrings[ErrorCode.EBUSY] = 'Resource busy or locked.';
ErrorStrings[ErrorCode.EEXIST] = 'File exists.';
ErrorStrings[ErrorCode.ENOTDIR] = 'File is not a directory.';
ErrorStrings[ErrorCode.EISDIR] = 'File is a directory.';
ErrorStrings[ErrorCode.EINVAL] = 'Invalid argument.';
ErrorStrings[ErrorCode.EFBIG] = 'File is too big.';
ErrorStrings[ErrorCode.ENOSPC] = 'No space left on disk.';
ErrorStrings[ErrorCode.EROFS] = 'Cannot modify a read-only file system.';
ErrorStrings[ErrorCode.ENOTEMPTY] = 'Directory is not empty.';
ErrorStrings[ErrorCode.ENOTSUP] = 'Operation is not supported.';
/* tslint:enable:variable-name */
/**
 * Represents a BrowserFS error. Passed back to applications after a failed
 * call to the BrowserFS API.
 */
var ApiError = /*@__PURE__*/(function (Error) {
    function ApiError(type, message, path) {
        if ( message === void 0 ) message = ErrorStrings[type];

        Error.call(this, message);
        // Unsupported.
        this.syscall = "";
        this.errno = type;
        this.code = ErrorCode[type];
        this.path = path;
        this.stack = new Error().stack;
        this.message = "Error: " + (this.code) + ": " + message + (this.path ? (", '" + (this.path) + "'") : '');
    }

    if ( Error ) ApiError.__proto__ = Error;
    ApiError.prototype = Object.create( Error && Error.prototype );
    ApiError.prototype.constructor = ApiError;
    /**
     * @return A friendly error message.
     */
    ApiError.fromJSON = function fromJSON (json) {
        var err = new ApiError(0);
        err.errno = json.errno;
        err.code = json.code;
        err.path = json.path;
        err.stack = json.stack;
        err.message = json.message;
        return err;
    };
    /**
     * Creates an ApiError object from a buffer.
     */
    ApiError.fromBuffer = function fromBuffer (buffer, i) {
        if ( i === void 0 ) i = 0;

        return ApiError.fromJSON(JSON.parse(buffer.toString('utf8', i + 4, i + 4 + buffer.readUInt32LE(i))));
    };
    ApiError.FileError = function FileError (code, p) {
        return new ApiError(code, ErrorStrings[code], p);
    };
    ApiError.ENOENT = function ENOENT (path) {
        return this.FileError(ErrorCode.ENOENT, path);
    };
    ApiError.EEXIST = function EEXIST (path) {
        return this.FileError(ErrorCode.EEXIST, path);
    };
    ApiError.EISDIR = function EISDIR (path) {
        return this.FileError(ErrorCode.EISDIR, path);
    };
    ApiError.ENOTDIR = function ENOTDIR (path) {
        return this.FileError(ErrorCode.ENOTDIR, path);
    };
    ApiError.EPERM = function EPERM (path) {
        return this.FileError(ErrorCode.EPERM, path);
    };
    ApiError.ENOTEMPTY = function ENOTEMPTY (path) {
        return this.FileError(ErrorCode.ENOTEMPTY, path);
    };

    ApiError.prototype.toString = function toString () {
        return this.message;
    };
    ApiError.prototype.toJSON = function toJSON () {
        return {
            errno: this.errno,
            code: this.code,
            path: this.path,
            stack: this.stack,
            message: this.message
        };
    };
    /**
     * Writes the API error into a buffer.
     */
    ApiError.prototype.writeToBuffer = function writeToBuffer (buffer, i) {
        if ( buffer === void 0 ) buffer = Buffer.alloc(this.bufferSize());
        if ( i === void 0 ) i = 0;

        var bytesWritten = buffer.write(JSON.stringify(this.toJSON()), i + 4);
        buffer.writeUInt32LE(bytesWritten, i);
        return buffer;
    };
    /**
     * The size of the API error in buffer-form in bytes.
     */
    ApiError.prototype.bufferSize = function bufferSize () {
        // 4 bytes for string length.
        return 4 + Buffer.byteLength(JSON.stringify(this.toJSON()));
    };

    return ApiError;
}(Error));

var api_error = /*#__PURE__*/Object.freeze({
    get ErrorCode () { return ErrorCode; },
    ErrorStrings: ErrorStrings,
    ApiError: ApiError
});

var ActionType;
(function (ActionType) {
    // Indicates that the code should not do anything.
    ActionType[ActionType["NOP"] = 0] = "NOP";
    // Indicates that the code should throw an exception.
    ActionType[ActionType["THROW_EXCEPTION"] = 1] = "THROW_EXCEPTION";
    // Indicates that the code should truncate the file, but only if it is a file.
    ActionType[ActionType["TRUNCATE_FILE"] = 2] = "TRUNCATE_FILE";
    // Indicates that the code should create the file.
    ActionType[ActionType["CREATE_FILE"] = 3] = "CREATE_FILE";
})(ActionType || (ActionType = {}));
/**
 * Represents one of the following file flags. A convenience object.
 *
 * * `'r'` - Open file for reading. An exception occurs if the file does not exist.
 * * `'r+'` - Open file for reading and writing. An exception occurs if the file does not exist.
 * * `'rs'` - Open file for reading in synchronous mode. Instructs the filesystem to not cache writes.
 * * `'rs+'` - Open file for reading and writing, and opens the file in synchronous mode.
 * * `'w'` - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
 * * `'wx'` - Like 'w' but opens the file in exclusive mode.
 * * `'w+'` - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
 * * `'wx+'` - Like 'w+' but opens the file in exclusive mode.
 * * `'a'` - Open file for appending. The file is created if it does not exist.
 * * `'ax'` - Like 'a' but opens the file in exclusive mode.
 * * `'a+'` - Open file for reading and appending. The file is created if it does not exist.
 * * `'ax+'` - Like 'a+' but opens the file in exclusive mode.
 *
 * Exclusive mode ensures that the file path is newly created.
 */
var FileFlag = function FileFlag(flagStr) {
    this.flagStr = flagStr;
    if (FileFlag.validFlagStrs.indexOf(flagStr) < 0) {
        throw new ApiError(ErrorCode.EINVAL, "Invalid flag: " + flagStr);
    }
};
/**
 * Get the underlying flag string for this flag.
 */
FileFlag.getFileFlag = function getFileFlag (flagStr) {
    // Check cache first.
    if (FileFlag.flagCache.hasOwnProperty(flagStr)) {
        return FileFlag.flagCache[flagStr];
    }
    return FileFlag.flagCache[flagStr] = new FileFlag(flagStr);
};

FileFlag.prototype.getFlagString = function getFlagString () {
    return this.flagStr;
};
/**
 * Returns true if the file is readable.
 */
FileFlag.prototype.isReadable = function isReadable () {
    return this.flagStr.indexOf('r') !== -1 || this.flagStr.indexOf('+') !== -1;
};
/**
 * Returns true if the file is writeable.
 */
FileFlag.prototype.isWriteable = function isWriteable () {
    return this.flagStr.indexOf('w') !== -1 || this.flagStr.indexOf('a') !== -1 || this.flagStr.indexOf('+') !== -1;
};
/**
 * Returns true if the file mode should truncate.
 */
FileFlag.prototype.isTruncating = function isTruncating () {
    return this.flagStr.indexOf('w') !== -1;
};
/**
 * Returns true if the file is appendable.
 */
FileFlag.prototype.isAppendable = function isAppendable () {
    return this.flagStr.indexOf('a') !== -1;
};
/**
 * Returns true if the file is open in synchronous mode.
 */
FileFlag.prototype.isSynchronous = function isSynchronous () {
    return this.flagStr.indexOf('s') !== -1;
};
/**
 * Returns true if the file is open in exclusive mode.
 */
FileFlag.prototype.isExclusive = function isExclusive () {
    return this.flagStr.indexOf('x') !== -1;
};
/**
 * Returns one of the static fields on this object that indicates the
 * appropriate response to the path existing.
 */
FileFlag.prototype.pathExistsAction = function pathExistsAction () {
    if (this.isExclusive()) {
        return ActionType.THROW_EXCEPTION;
    }
    else if (this.isTruncating()) {
        return ActionType.TRUNCATE_FILE;
    }
    else {
        return ActionType.NOP;
    }
};
/**
 * Returns one of the static fields on this object that indicates the
 * appropriate response to the path not existing.
 */
FileFlag.prototype.pathNotExistsAction = function pathNotExistsAction () {
    if ((this.isWriteable() || this.isAppendable()) && this.flagStr !== 'r+') {
        return ActionType.CREATE_FILE;
    }
    else {
        return ActionType.THROW_EXCEPTION;
    }
};
// Contains cached FileMode instances.
FileFlag.flagCache = {};
// Array of valid mode strings.
FileFlag.validFlagStrs = ['r', 'r+', 'rs', 'rs+', 'w', 'wx', 'w+', 'wx+', 'a', 'ax', 'a+', 'ax+'];

/**
 * Indicates the type of the given file. Applied to 'mode'.
 */
var FileType;
(function (FileType) {
    FileType[FileType["FILE"] = 32768] = "FILE";
    FileType[FileType["DIRECTORY"] = 16384] = "DIRECTORY";
    FileType[FileType["SYMLINK"] = 40960] = "SYMLINK";
})(FileType || (FileType = {}));
/**
 * Emulation of Node's `fs.Stats` object.
 *
 * Attribute descriptions are from `man 2 stat'
 * @see http://nodejs.org/api/fs.html#fs_class_fs_stats
 * @see http://man7.org/linux/man-pages/man2/stat.2.html
 */
var Stats = function Stats(itemType, size, mode, atimeMs, mtimeMs, ctimeMs, birthtimeMs) {
    /**
     * UNSUPPORTED ATTRIBUTES
     * I assume no one is going to need these details, although we could fake
     * appropriate values if need be.
     */
    // ID of device containing file
    this.dev = 0;
    // inode number
    this.ino = 0;
    // device ID (if special file)
    this.rdev = 0;
    // number of hard links
    this.nlink = 1;
    // blocksize for file system I/O
    this.blksize = 4096;
    // @todo Maybe support these? atm, it's a one-user filesystem.
    // user ID of owner
    this.uid = 0;
    // group ID of owner
    this.gid = 0;
    // XXX: Some file systems stash data on stats objects.
    this.fileData = null;
    this.size = size;
    var currentTime = 0;
    if (typeof (atimeMs) !== 'number') {
        currentTime = Date.now();
        atimeMs = currentTime;
    }
    if (typeof (mtimeMs) !== 'number') {
        if (!currentTime) {
            currentTime = Date.now();
        }
        mtimeMs = currentTime;
    }
    if (typeof (ctimeMs) !== 'number') {
        if (!currentTime) {
            currentTime = Date.now();
        }
        ctimeMs = currentTime;
    }
    if (typeof (birthtimeMs) !== 'number') {
        if (!currentTime) {
            currentTime = Date.now();
        }
        birthtimeMs = currentTime;
    }
    this.atimeMs = atimeMs;
    this.ctimeMs = ctimeMs;
    this.mtimeMs = mtimeMs;
    this.birthtimeMs = birthtimeMs;
    if (!mode) {
        switch (itemType) {
            case FileType.FILE:
                this.mode = 0x1a4;
                break;
            case FileType.DIRECTORY:
            default:
                this.mode = 0x1ff;
        }
    }
    else {
        this.mode = mode;
    }
    // number of 512B blocks allocated
    this.blocks = Math.ceil(size / 512);
    // Check if mode also includes top-most bits, which indicate the file's
    // type.
    if (this.mode < 0x1000) {
        this.mode |= itemType;
    }
};

var prototypeAccessors = { atime: { configurable: true },mtime: { configurable: true },ctime: { configurable: true },birthtime: { configurable: true } };
Stats.fromBuffer = function fromBuffer (buffer) {
    var size = buffer.readUInt32LE(0), mode = buffer.readUInt32LE(4), atime = buffer.readDoubleLE(8), mtime = buffer.readDoubleLE(16), ctime = buffer.readDoubleLE(24);
    return new Stats(mode & 0xF000, size, mode & 0xFFF, atime, mtime, ctime);
};
/**
 * Clones the stats object.
 */
Stats.clone = function clone (s) {
    return new Stats(s.mode & 0xF000, s.size, s.mode & 0xFFF, s.atimeMs, s.mtimeMs, s.ctimeMs, s.birthtimeMs);
};
prototypeAccessors.atime.get = function () {
    return new Date(this.atimeMs);
};
prototypeAccessors.mtime.get = function () {
    return new Date(this.mtimeMs);
};
prototypeAccessors.ctime.get = function () {
    return new Date(this.ctimeMs);
};
prototypeAccessors.birthtime.get = function () {
    return new Date(this.birthtimeMs);
};

Stats.prototype.toBuffer = function toBuffer () {
    var buffer = Buffer.alloc(32);
    buffer.writeUInt32LE(this.size, 0);
    buffer.writeUInt32LE(this.mode, 4);
    buffer.writeDoubleLE(this.atime.getTime(), 8);
    buffer.writeDoubleLE(this.mtime.getTime(), 16);
    buffer.writeDoubleLE(this.ctime.getTime(), 24);
    return buffer;
};
/**
 * @return [Boolean] True if this item is a file.
 */
Stats.prototype.isFile = function isFile () {
    return (this.mode & 0xF000) === FileType.FILE;
};
/**
 * @return [Boolean] True if this item is a directory.
 */
Stats.prototype.isDirectory = function isDirectory () {
    return (this.mode & 0xF000) === FileType.DIRECTORY;
};
/**
 * @return [Boolean] True if this item is a symbolic link (only valid through lstat)
 */
Stats.prototype.isSymbolicLink = function isSymbolicLink () {
    return (this.mode & 0xF000) === FileType.SYMLINK;
};
/**
 * Change the mode of the file. We use this helper function to prevent messing
 * up the type of the file, which is encoded in mode.
 */
Stats.prototype.chmod = function chmod (mode) {
    this.mode = (this.mode & 0xF000) | mode;
};
// We don't support the following types of files.
Stats.prototype.isSocket = function isSocket () {
    return false;
};
Stats.prototype.isBlockDevice = function isBlockDevice () {
    return false;
};
Stats.prototype.isCharacterDevice = function isCharacterDevice () {
    return false;
};
Stats.prototype.isFIFO = function isFIFO () {
    return false;
};

Object.defineProperties( Stats.prototype, prototypeAccessors );

/**
 * @hidden
 */
var toExport = typeof (window) !== 'undefined' ? window : typeof (self) !== 'undefined' ? self : global;

/**
 * @hidden
 */
var bfsSetImmediate;
if (typeof (setImmediate) !== "undefined") {
    bfsSetImmediate = setImmediate;
}
else {
    var gScope = toExport;
    var timeouts = [];
    var messageName = "zero-timeout-message";
    var canUsePostMessage = function () {
        if (typeof gScope.importScripts !== 'undefined' || !gScope.postMessage) {
            return false;
        }
        var postMessageIsAsync = true;
        var oldOnMessage = gScope.onmessage;
        gScope.onmessage = function () {
            postMessageIsAsync = false;
        };
        gScope.postMessage('', '*');
        gScope.onmessage = oldOnMessage;
        return postMessageIsAsync;
    };
    if (canUsePostMessage()) {
        bfsSetImmediate = function (fn) {
            var args = [], len = arguments.length - 1;
            while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

            timeouts.push({ fn: fn, args: args });
            gScope.postMessage(messageName, "*");
        };
        var handleMessage = function (event) {
            if (event.source === self && event.data === messageName) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else {
                    event.cancelBubble = true;
                }
                if (timeouts.length > 0) {
                    var ref = timeouts.shift();
                    var fn = ref.fn;
                    var args = ref.args;
                    return fn.apply(void 0, args);
                }
            }
        };
        if (gScope.addEventListener) {
            gScope.addEventListener('message', handleMessage, true);
        }
        else {
            gScope.attachEvent('onmessage', handleMessage);
        }
    }
    else if (gScope.MessageChannel) {
        // WebWorker MessageChannel
        var channel = new gScope.MessageChannel();
        channel.port1.onmessage = function (event) {
            if (timeouts.length > 0) {
                var ref = timeouts.shift();
                var fn = ref.fn;
                var args = ref.args;
                return fn.apply(void 0, args);
            }
        };
        bfsSetImmediate = function (fn) {
            var args = [], len = arguments.length - 1;
            while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

            timeouts.push({ fn: fn, args: args });
            channel.port2.postMessage('');
        };
    }
    else {
        bfsSetImmediate = function (fn) {
            var args = [], len = arguments.length - 1;
            while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

            return setTimeout.apply(void 0, [ fn, 0 ].concat( args ));
        };
    }
}
var setImmediate$1 = bfsSetImmediate;

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var FileWatcher = function FileWatcher() {
    this.watchEntries = [];
};
FileWatcher.prototype.triggerWatch = function triggerWatch (filename, event, newStats) {
        var this$1 = this;

    var validEntries = this.watchEntries.filter(function (entry) {
        if (entry.filename === filename) {
            return true;
        }
        if (entry.recursive && filename.startsWith(entry.filename)) {
            return true;
        }
        return false;
    });
    validEntries.forEach(function (entry) {
        if (entry.callback) {
            entry.callback(event, filename);
        }
        var newStatsArg = newStats || entry.curr;
        var oldStatsArg = entry.curr || newStats;
        if (newStatsArg && oldStatsArg && entry.fileCallback) {
            entry.fileCallback(newStatsArg, oldStatsArg);
            entry.curr = newStatsArg;
        }
        entry.watcher.emit(event);
        if (!entry.persistent) {
            this$1.removeEntry(entry);
        }
    });
};
FileWatcher.prototype.watch = function watch (filename, arg2, listener) {
        var this$1 = this;
        if ( listener === void 0 ) listener = (function () { });

    var watcher = new EventEmitter();
    var watchEntry = {
        filename: filename,
        watcher: watcher,
    };
    watcher.close = function () {
        this$1.removeEntry(watchEntry);
    };
    if (typeof arg2 === 'object') {
        watchEntry.recursive = arg2.recursive;
        watchEntry.persistent = arg2.persistent === undefined ? true : arg2.persistent;
        watchEntry.callback = listener;
    }
    else if (typeof arg2 === 'function') {
        watchEntry.callback = arg2;
    }
    this.watchEntries.push(watchEntry);
    return watchEntry.watcher;
};
FileWatcher.prototype.watchFile = function watchFile (curr, filename, arg2, listener) {
        var this$1 = this;
        if ( listener === void 0 ) listener = (function () { });

    var watcher = new EventEmitter();
    var watchEntry = {
        filename: filename,
        watcher: watcher,
        curr: curr,
    };
    watcher.close = function () {
        this$1.removeEntry(watchEntry);
    };
    if (typeof arg2 === 'object') {
        watchEntry.recursive = arg2.recursive;
        watchEntry.persistent = arg2.persistent === undefined ? true : arg2.persistent;
        watchEntry.fileCallback = listener;
    }
    else if (typeof arg2 === 'function') {
        watchEntry.fileCallback = arg2;
    }
    this.watchEntries.push(watchEntry);
    return watchEntry.watcher;
};
FileWatcher.prototype.unwatchFile = function unwatchFile (filename, listener) {
    this.watchEntries = this.watchEntries.filter(function (entry) { return entry.filename !== filename && entry.fileCallback !== listener; });
};
FileWatcher.prototype.removeEntry = function removeEntry (watchEntry) {
    this.watchEntries = this.watchEntries.filter(function (en) { return en !== watchEntry; });
};

/** Used for unit testing. Defaults to a NOP. */
var wrapCbHook = function (cb, numArgs) {
    return cb;
};
/**
 * Wraps a callback function, ensuring it is invoked through setImmediate.
 * @hidden
 */
function wrapCb(cb, numArgs) {
    if (typeof cb !== 'function') {
        throw new Error('Callback must be a function.');
    }
    var hookedCb = wrapCbHook(cb, numArgs);
    // We could use `arguments`, but Function.call/apply is expensive. And we only
    // need to handle 1-3 arguments
    switch (numArgs) {
        case 1:
            return function (arg1) {
                setImmediate$1(function () {
                    return hookedCb(arg1);
                });
            };
        case 2:
            return function (arg1, arg2) {
                setImmediate$1(function () {
                    return hookedCb(arg1, arg2);
                });
            };
        case 3:
            return function (arg1, arg2, arg3) {
                setImmediate$1(function () {
                    return hookedCb(arg1, arg2, arg3);
                });
            };
        default:
            throw new Error('Invalid invocation of wrapCb.');
    }
}
/**
 * @hidden
 */
function assertRoot(fs) {
    if (fs) {
        return fs;
    }
    throw new ApiError(ErrorCode.EIO, "Initialize BrowserFS with a file system using BrowserFS.initialize(filesystem)");
}
/**
 * @hidden
 */
function normalizeMode(mode, def) {
    switch (typeof mode) {
        case 'number':
            // (path, flag, mode, cb?)
            return mode;
        case 'string':
            // (path, flag, modeString, cb?)
            var trueMode = parseInt(mode, 8);
            if (!isNaN(trueMode)) {
                return trueMode;
            }
            // Invalid string.
            return def;
        default:
            return def;
    }
}
/**
 * @hidden
 */
function normalizeTime(time) {
    if (time instanceof Date) {
        return time;
    }
    if (typeof time === 'number') {
        return new Date(time * 1000);
    }
    throw new ApiError(ErrorCode.EINVAL, "Invalid time.");
}
/**
 * @hidden
 */
function normalizePath(p) {
    // Node doesn't allow null characters in paths.
    if (p.indexOf('\u0000') >= 0) {
        throw new ApiError(ErrorCode.EINVAL, 'Path must be a string without null bytes.');
    }
    else if (p === '') {
        throw new ApiError(ErrorCode.EINVAL, 'Path must not be empty.');
    }
    return path.resolve(p);
}
/**
 * @hidden
 */
function normalizeOptions(options, defEnc, defFlag, defMode) {
    // typeof null === 'object' so special-case handing is needed.
    switch (options === null ? 'null' : typeof options) {
        case 'object':
            return {
                encoding: typeof options.encoding !== 'undefined' ? options.encoding : defEnc,
                flag: typeof options.flag !== 'undefined' ? options.flag : defFlag,
                mode: normalizeMode(options.mode, defMode)
            };
        case 'string':
            return {
                encoding: options,
                flag: defFlag,
                mode: defMode
            };
        case 'null':
        case 'undefined':
        case 'function':
            return {
                encoding: defEnc,
                flag: defFlag,
                mode: defMode
            };
        default:
            throw new TypeError(("\"options\" must be a string or an object, got " + (typeof options) + " instead."));
    }
}
/**
 * The default callback is a NOP.
 * @hidden
 * @private
 */
function nopCb() {
    // NOP.
}
/**
 * The node frontend to all filesystems.
 * This layer handles:
 *
 * * Sanity checking inputs.
 * * Normalizing paths.
 * * Resetting stack depth for asynchronous operations which may not go through
 *   the browser by wrapping all input callbacks using `setImmediate`.
 * * Performing the requested operation through the filesystem or the file
 *   descriptor, as appropriate.
 * * Handling optional arguments and setting default arguments.
 * @see http://nodejs.org/api/fs.html
 */
var FS = function FS() {
    this.root = null;
    this.fdMap = {};
    this.nextFd = 100;
    this.fileWatcher = new FileWatcher();
};
FS.prototype.initialize = function initialize (rootFS) {
    if (!rootFS.constructor.isAvailable()) {
        throw new ApiError(ErrorCode.EINVAL, 'Tried to instantiate BrowserFS with an unavailable file system.');
    }
    return this.root = rootFS;
};
/**
 * converts Date or number to a fractional UNIX timestamp
 * Grabbed from NodeJS sources (lib/fs.js)
 */
FS.prototype._toUnixTimestamp = function _toUnixTimestamp (time) {
    if (typeof time === 'number') {
        return time;
    }
    if (time instanceof Date) {
        return time.getTime() / 1000;
    }
    throw new Error("Cannot parse time: " + time);
};
/**
 * **NONSTANDARD**: Grab the FileSystem instance that backs this API.
 * @return [BrowserFS.FileSystem | null] Returns null if the file system has
 *   not been initialized.
 */
FS.prototype.getRootFS = function getRootFS () {
    if (this.root) {
        return this.root;
    }
    return null;
};
// FILE OR DIRECTORY METHODS
/**
 * Asynchronous rename. No arguments other than a possible exception are given
 * to the completion callback.
 * @param oldPath
 * @param newPath
 * @param callback
 */
FS.prototype.rename = function rename (oldPath, newPath, cb) {
        var this$1 = this;
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        setImmediate$1(function () {
            this$1.fileWatcher.triggerWatch(oldPath, 'rename');
            this$1.stat(newPath, function (err, stat) {
                if (err) {
                    return;
                }
                this$1.fileWatcher.triggerWatch(newPath, 'rename', stat);
            });
        });
        assertRoot(this.root).rename(normalizePath(oldPath), normalizePath(newPath), newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous rename.
 * @param oldPath
 * @param newPath
 */
FS.prototype.renameSync = function renameSync (oldPath, newPath) {
        var this$1 = this;

    setImmediate$1(function () {
        this$1.fileWatcher.triggerWatch(oldPath, 'rename');
        this$1.fileWatcher.triggerWatch(newPath, 'rename');
    });
    assertRoot(this.root).renameSync(normalizePath(oldPath), normalizePath(newPath));
};
/**
 * Test whether or not the given path exists by checking with the file system.
 * Then call the callback argument with either true or false.
 * @example Sample invocation
 *   fs.exists('/etc/passwd', function (exists) {
 * util.debug(exists ? "it's there" : "no passwd!");
 *   });
 * @param path
 * @param callback
 */
FS.prototype.exists = function exists (path, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        return assertRoot(this.root).exists(normalizePath(path), newCb);
    }
    catch (e) {
        // Doesn't return an error. If something bad happens, we assume it just
        // doesn't exist.
        return newCb(false);
    }
};
/**
 * Test whether or not the given path exists by checking with the file system.
 * @param path
 * @return [boolean]
 */
FS.prototype.existsSync = function existsSync (path) {
    try {
        return assertRoot(this.root).existsSync(normalizePath(path));
    }
    catch (e) {
        // Doesn't return an error. If something bad happens, we assume it just
        // doesn't exist.
        return false;
    }
};
/**
 * Asynchronous `stat`.
 * @param path
 * @param callback
 */
FS.prototype.stat = function stat (path, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 2);
    try {
        return assertRoot(this.root).stat(normalizePath(path), false, newCb);
    }
    catch (e) {
        return newCb(e);
    }
};
/**
 * Synchronous `stat`.
 * @param path
 * @return [BrowserFS.node.fs.Stats]
 */
FS.prototype.statSync = function statSync (path) {
    return assertRoot(this.root).statSync(normalizePath(path), false);
};
/**
 * Asynchronous `lstat`.
 * `lstat()` is identical to `stat()`, except that if path is a symbolic link,
 * then the link itself is stat-ed, not the file that it refers to.
 * @param path
 * @param callback
 */
FS.prototype.lstat = function lstat (path, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 2);
    try {
        return assertRoot(this.root).stat(normalizePath(path), true, newCb);
    }
    catch (e) {
        return newCb(e);
    }
};
/**
 * Synchronous `lstat`.
 * `lstat()` is identical to `stat()`, except that if path is a symbolic link,
 * then the link itself is stat-ed, not the file that it refers to.
 * @param path
 * @return [BrowserFS.node.fs.Stats]
 */
FS.prototype.lstatSync = function lstatSync (path) {
    return assertRoot(this.root).statSync(normalizePath(path), true);
};
FS.prototype.truncate = function truncate (path, arg2, cb) {
        var this$1 = this;
        if ( arg2 === void 0 ) arg2 = 0;
        if ( cb === void 0 ) cb = nopCb;

    var len = 0;
    if (typeof arg2 === 'function') {
        cb = arg2;
    }
    else if (typeof arg2 === 'number') {
        len = arg2;
    }
    var newCb = wrapCb(cb, 1);
    try {
        if (len < 0) {
            throw new ApiError(ErrorCode.EINVAL);
        }
        setImmediate$1(function () {
            this$1.stat(path, function (err, stat) {
                this$1.fileWatcher.triggerWatch(path, 'change', stat);
            });
        });
        return assertRoot(this.root).truncate(normalizePath(path), len, newCb);
    }
    catch (e) {
        return newCb(e);
    }
};
/**
 * Synchronous `truncate`.
 * @param path
 * @param len
 */
FS.prototype.truncateSync = function truncateSync (path, len) {
        var this$1 = this;
        if ( len === void 0 ) len = 0;

    if (len < 0) {
        throw new ApiError(ErrorCode.EINVAL);
    }
    setImmediate$1(function () {
        this$1.stat(path, function (err, stat) {
            this$1.fileWatcher.triggerWatch(path, 'change', stat);
        });
    });
    return assertRoot(this.root).truncateSync(normalizePath(path), len);
};
/**
 * Asynchronous `unlink`.
 * @param path
 * @param callback
 */
FS.prototype.unlink = function unlink (path, cb) {
        var this$1 = this;
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        setImmediate$1(function () {
            this$1.fileWatcher.triggerWatch(path, 'rename', new Stats(FileType.FILE, 0, undefined, 0, 0, 0, 0));
        });
        return assertRoot(this.root).unlink(normalizePath(path), newCb);
    }
    catch (e) {
        return newCb(e);
    }
};
/**
 * Synchronous `unlink`.
 * @param path
 */
FS.prototype.unlinkSync = function unlinkSync (path) {
        var this$1 = this;

    setImmediate$1(function () {
        this$1.fileWatcher.triggerWatch(path, 'rename', new Stats(FileType.FILE, 0, undefined, 0, 0, 0, 0));
    });
    return assertRoot(this.root).unlinkSync(normalizePath(path));
};
FS.prototype.open = function open (path, flag, arg2, cb) {
        var this$1 = this;
        if ( cb === void 0 ) cb = nopCb;

    var mode = normalizeMode(arg2, 0x1a4);
    cb = typeof arg2 === 'function' ? arg2 : cb;
    var newCb = wrapCb(cb, 2);
    try {
        assertRoot(this.root).open(normalizePath(path), FileFlag.getFileFlag(flag), mode, function (e, file) {
            if (file) {
                newCb(e, this$1.getFdForFile(file));
            }
            else {
                newCb(e);
            }
        });
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous file open.
 * @see http://www.manpagez.com/man/2/open/
 * @param path
 * @param flags
 * @param mode defaults to `0644`
 * @return [BrowserFS.File]
 */
FS.prototype.openSync = function openSync (path, flag, mode) {
        if ( mode === void 0 ) mode = 0x1a4;

    return this.getFdForFile(assertRoot(this.root).openSync(normalizePath(path), FileFlag.getFileFlag(flag), normalizeMode(mode, 0x1a4)));
};
FS.prototype.readFile = function readFile (filename, arg2, cb) {
        if ( arg2 === void 0 ) arg2 = {};
        if ( cb === void 0 ) cb = nopCb;

    var options = normalizeOptions(arg2, null, 'r', null);
    cb = typeof arg2 === 'function' ? arg2 : cb;
    var newCb = wrapCb(cb, 2);
    try {
        var flag = FileFlag.getFileFlag(options.flag);
        if (!flag.isReadable()) {
            return newCb(new ApiError(ErrorCode.EINVAL, 'Flag passed to readFile must allow for reading.'));
        }
        return assertRoot(this.root).readFile(normalizePath(filename), options.encoding, flag, newCb);
    }
    catch (e) {
        return newCb(e);
    }
};
FS.prototype.readFileSync = function readFileSync (filename, arg2) {
        if ( arg2 === void 0 ) arg2 = {};

    var options = normalizeOptions(arg2, null, 'r', null);
    var flag = FileFlag.getFileFlag(options.flag);
    if (!flag.isReadable()) {
        throw new ApiError(ErrorCode.EINVAL, 'Flag passed to readFile must allow for reading.');
    }
    return assertRoot(this.root).readFileSync(normalizePath(filename), options.encoding, flag);
};
FS.prototype.writeFile = function writeFile (filename, data, arg3, cb) {
        var this$1 = this;
        if ( arg3 === void 0 ) arg3 = {};
        if ( cb === void 0 ) cb = nopCb;

    var options = normalizeOptions(arg3, 'utf8', 'w', 0x1a4);
    cb = typeof arg3 === 'function' ? arg3 : cb;
    var newCb = wrapCb(cb, 1);
    try {
        var flag = FileFlag.getFileFlag(options.flag);
        if (!flag.isWriteable()) {
            return newCb(new ApiError(ErrorCode.EINVAL, 'Flag passed to writeFile must allow for writing.'));
        }
        assertRoot(this.root).writeFile(normalizePath(filename), data, options.encoding, flag, options.mode, function () {
                var args = [], len = arguments.length;
                while ( len-- ) args[ len ] = arguments[ len ];

            setImmediate$1(function () {
                this$1.stat(filename, function (_err, stat) {
                    this$1.fileWatcher.triggerWatch(filename, 'change', stat);
                });
            });
            newCb.apply(void 0, args);
        });
    }
    catch (e) {
        return newCb(e);
    }
};
FS.prototype.writeFileSync = function writeFileSync (filename, data, arg3) {
        var this$1 = this;

    var options = normalizeOptions(arg3, 'utf8', 'w', 0x1a4);
    var flag = FileFlag.getFileFlag(options.flag);
    if (!flag.isWriteable()) {
        throw new ApiError(ErrorCode.EINVAL, 'Flag passed to writeFile must allow for writing.');
    }
    setImmediate$1(function () {
        this$1.stat(filename, function (err, stat) {
            this$1.fileWatcher.triggerWatch(filename, 'change', stat);
        });
    });
    return assertRoot(this.root).writeFileSync(normalizePath(filename), data, options.encoding, flag, options.mode);
};
FS.prototype.appendFile = function appendFile (filename, data, arg3, cb) {
        var this$1 = this;
        if ( cb === void 0 ) cb = nopCb;

    var options = normalizeOptions(arg3, 'utf8', 'a', 0x1a4);
    cb = typeof arg3 === 'function' ? arg3 : cb;
    var newCb = wrapCb(cb, 1);
    try {
        var flag = FileFlag.getFileFlag(options.flag);
        if (!flag.isAppendable()) {
            return newCb(new ApiError(ErrorCode.EINVAL, 'Flag passed to appendFile must allow for appending.'));
        }
        setImmediate$1(function () {
            this$1.stat(filename, function (err, stat) {
                this$1.fileWatcher.triggerWatch(filename, 'rename', stat);
            });
        });
        assertRoot(this.root).appendFile(normalizePath(filename), data, options.encoding, flag, options.mode, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
FS.prototype.appendFileSync = function appendFileSync (filename, data, arg3) {
        var this$1 = this;

    var options = normalizeOptions(arg3, 'utf8', 'a', 0x1a4);
    var flag = FileFlag.getFileFlag(options.flag);
    if (!flag.isAppendable()) {
        throw new ApiError(ErrorCode.EINVAL, 'Flag passed to appendFile must allow for appending.');
    }
    setImmediate$1(function () {
        this$1.stat(filename, function (err, stat) {
            this$1.fileWatcher.triggerWatch(filename, 'change', stat);
        });
    });
    return assertRoot(this.root).appendFileSync(normalizePath(filename), data, options.encoding, flag, options.mode);
};
// FILE DESCRIPTOR METHODS
/**
 * Asynchronous `fstat`.
 * `fstat()` is identical to `stat()`, except that the file to be stat-ed is
 * specified by the file descriptor `fd`.
 * @param fd
 * @param callback
 */
FS.prototype.fstat = function fstat (fd, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 2);
    try {
        var file = this.fd2file(fd);
        file.stat(newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `fstat`.
 * `fstat()` is identical to `stat()`, except that the file to be stat-ed is
 * specified by the file descriptor `fd`.
 * @param fd
 * @return [BrowserFS.node.fs.Stats]
 */
FS.prototype.fstatSync = function fstatSync (fd) {
    return this.fd2file(fd).statSync();
};
/**
 * Asynchronous close.
 * @param fd
 * @param callback
 */
FS.prototype.close = function close (fd, cb) {
        var this$1 = this;
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        this.fd2file(fd).close(function (e) {
            if (!e) {
                this$1.closeFd(fd);
            }
            newCb(e);
        });
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous close.
 * @param fd
 */
FS.prototype.closeSync = function closeSync (fd) {
    this.fd2file(fd).closeSync();
    this.closeFd(fd);
};
FS.prototype.ftruncate = function ftruncate (fd, arg2, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var length = typeof arg2 === 'number' ? arg2 : 0;
    cb = typeof arg2 === 'function' ? arg2 : cb;
    var newCb = wrapCb(cb, 1);
    try {
        var file = this.fd2file(fd);
        if (length < 0) {
            throw new ApiError(ErrorCode.EINVAL);
        }
        file.truncate(length, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous ftruncate.
 * @param fd
 * @param len
 */
FS.prototype.ftruncateSync = function ftruncateSync (fd, len) {
        if ( len === void 0 ) len = 0;

    var file = this.fd2file(fd);
    if (len < 0) {
        throw new ApiError(ErrorCode.EINVAL);
    }
    file.truncateSync(len);
};
/**
 * Asynchronous fsync.
 * @param fd
 * @param callback
 */
FS.prototype.fsync = function fsync (fd, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        this.fd2file(fd).sync(newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous fsync.
 * @param fd
 */
FS.prototype.fsyncSync = function fsyncSync (fd) {
    this.fd2file(fd).syncSync();
};
/**
 * Asynchronous fdatasync.
 * @param fd
 * @param callback
 */
FS.prototype.fdatasync = function fdatasync (fd, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        this.fd2file(fd).datasync(newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous fdatasync.
 * @param fd
 */
FS.prototype.fdatasyncSync = function fdatasyncSync (fd) {
    this.fd2file(fd).datasyncSync();
};
FS.prototype.write = function write (fd, arg2, arg3, arg4, arg5, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var buffer;
    var offset;
    var length;
    var position = null;
    if (typeof arg2 === 'string') {
        // Signature 1: (fd, string, [position?, [encoding?]], cb?)
        var encoding = 'utf8';
        switch (typeof arg3) {
            case 'function':
                // (fd, string, cb)
                cb = arg3;
                break;
            case 'number':
                // (fd, string, position, encoding?, cb?)
                position = arg3;
                encoding = typeof arg4 === 'string' ? arg4 : 'utf8';
                cb = typeof arg5 === 'function' ? arg5 : cb;
                break;
            default:
                // ...try to find the callback and get out of here!
                cb = typeof arg4 === 'function' ? arg4 : typeof arg5 === 'function' ? arg5 : cb;
                return cb(new ApiError(ErrorCode.EINVAL, 'Invalid arguments.'));
        }
        buffer = Buffer.from(arg2, encoding);
        offset = 0;
        length = buffer.length;
    }
    else {
        // Signature 2: (fd, buffer, offset, length, position?, cb?)
        buffer = arg2;
        offset = arg3;
        length = arg4;
        position = typeof arg5 === 'number' ? arg5 : null;
        cb = typeof arg5 === 'function' ? arg5 : cb;
    }
    var newCb = wrapCb(cb, 3);
    try {
        var file = this.fd2file(fd);
        if (position === undefined || position === null) {
            position = file.getPos();
        }
        file.write(buffer, offset, length, position, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
FS.prototype.writeSync = function writeSync (fd, arg2, arg3, arg4, arg5) {
    var buffer;
    var offset = 0;
    var length;
    var position;
    if (typeof arg2 === 'string') {
        // Signature 1: (fd, string, [position?, [encoding?]])
        position = typeof arg3 === 'number' ? arg3 : null;
        var encoding = typeof arg4 === 'string' ? arg4 : 'utf8';
        offset = 0;
        buffer = Buffer.from(arg2, encoding);
        length = buffer.length;
    }
    else {
        // Signature 2: (fd, buffer, offset, length, position?)
        buffer = arg2;
        offset = arg3;
        length = arg4;
        position = typeof arg5 === 'number' ? arg5 : null;
    }
    var file = this.fd2file(fd);
    if (position === undefined || position === null) {
        position = file.getPos();
    }
    return file.writeSync(buffer, offset, length, position);
};
FS.prototype.read = function read (fd, arg2, arg3, arg4, arg5, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var position;
    var offset;
    var length;
    var buffer;
    var newCb;
    if (typeof arg2 === 'number') {
        // legacy interface
        // (fd, length, position, encoding, callback)
        length = arg2;
        position = arg3;
        var encoding = arg4;
        cb = typeof arg5 === 'function' ? arg5 : cb;
        offset = 0;
        buffer = Buffer.alloc(length);
        // XXX: Inefficient.
        // Wrap the cb so we shelter upper layers of the API from these
        // shenanigans.
        newCb = wrapCb(function (err, bytesRead, buf) {
            if (err) {
                return cb(err);
            }
            cb(err, buf.toString(encoding), bytesRead);
        }, 3);
    }
    else {
        buffer = arg2;
        offset = arg3;
        length = arg4;
        position = arg5;
        newCb = wrapCb(cb, 3);
    }
    try {
        var file = this.fd2file(fd);
        if (position === undefined || position === null) {
            position = file.getPos();
        }
        file.read(buffer, offset, length, position, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
FS.prototype.readSync = function readSync (fd, arg2, arg3, arg4, arg5) {
    var shenanigans = false;
    var buffer;
    var offset;
    var length;
    var position;
    var encoding = 'utf8';
    if (typeof arg2 === 'number') {
        length = arg2;
        position = arg3;
        encoding = arg4;
        offset = 0;
        buffer = Buffer.alloc(length);
        shenanigans = true;
    }
    else {
        buffer = arg2;
        offset = arg3;
        length = arg4;
        position = arg5;
    }
    var file = this.fd2file(fd);
    if (position === undefined || position === null) {
        position = file.getPos();
    }
    var rv = file.readSync(buffer, offset, length, position);
    if (!shenanigans) {
        return rv;
    }
    return [buffer.toString(encoding), rv];
};
/**
 * Asynchronous `fchown`.
 * @param fd
 * @param uid
 * @param gid
 * @param callback
 */
FS.prototype.fchown = function fchown (fd, uid, gid, callback) {
        if ( callback === void 0 ) callback = nopCb;

    var newCb = wrapCb(callback, 1);
    try {
        this.fd2file(fd).chown(uid, gid, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `fchown`.
 * @param fd
 * @param uid
 * @param gid
 */
FS.prototype.fchownSync = function fchownSync (fd, uid, gid) {
    this.fd2file(fd).chownSync(uid, gid);
};
/**
 * Asynchronous `fchmod`.
 * @param fd
 * @param mode
 * @param callback
 */
FS.prototype.fchmod = function fchmod (fd, mode, cb) {
    var newCb = wrapCb(cb, 1);
    try {
        var numMode = typeof mode === 'string' ? parseInt(mode, 8) : mode;
        this.fd2file(fd).chmod(numMode, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `fchmod`.
 * @param fd
 * @param mode
 */
FS.prototype.fchmodSync = function fchmodSync (fd, mode) {
    var numMode = typeof mode === 'string' ? parseInt(mode, 8) : mode;
    this.fd2file(fd).chmodSync(numMode);
};
/**
 * Change the file timestamps of a file referenced by the supplied file
 * descriptor.
 * @param fd
 * @param atime
 * @param mtime
 * @param callback
 */
FS.prototype.futimes = function futimes (fd, atime, mtime, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        var file = this.fd2file(fd);
        if (typeof atime === 'number') {
            atime = new Date(atime * 1000);
        }
        if (typeof mtime === 'number') {
            mtime = new Date(mtime * 1000);
        }
        file.utimes(atime, mtime, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Change the file timestamps of a file referenced by the supplied file
 * descriptor.
 * @param fd
 * @param atime
 * @param mtime
 */
FS.prototype.futimesSync = function futimesSync (fd, atime, mtime) {
    this.fd2file(fd).utimesSync(normalizeTime(atime), normalizeTime(mtime));
};
// DIRECTORY-ONLY METHODS
/**
 * Asynchronous `rmdir`.
 * @param path
 * @param callback
 */
FS.prototype.rmdir = function rmdir (path, cb) {
        var this$1 = this;
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        path = normalizePath(path);
        setImmediate$1(function () {
            this$1.fileWatcher.triggerWatch(path, 'rename');
        });
        assertRoot(this.root).rmdir(path, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `rmdir`.
 * @param path
 */
FS.prototype.rmdirSync = function rmdirSync (path) {
        var this$1 = this;

    path = normalizePath(path);
    setImmediate$1(function () {
        this$1.fileWatcher.triggerWatch(path, 'rename');
    });
    return assertRoot(this.root).rmdirSync(path);
};
/**
 * Asynchronous `mkdir`.
 * @param path
 * @param mode defaults to `0777`
 * @param callback
 */
FS.prototype.mkdir = function mkdir (path, mode, cb) {
        var this$1 = this;
        if ( cb === void 0 ) cb = nopCb;

    if (typeof mode === 'function') {
        cb = mode;
        mode = 0x1ff;
    }
    var newCb = wrapCb(cb, 1);
    try {
        path = normalizePath(path);
        setImmediate$1(function () {
            this$1.fileWatcher.triggerWatch(path, 'rename');
        });
        assertRoot(this.root).mkdir(path, mode, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `mkdir`.
 * @param path
 * @param mode defaults to `0777`
 */
FS.prototype.mkdirSync = function mkdirSync (path, mode) {
        var this$1 = this;

    setImmediate$1(function () {
        this$1.fileWatcher.triggerWatch(path, 'rename');
    });
    assertRoot(this.root).mkdirSync(normalizePath(path), normalizeMode(mode, 0x1ff));
};
/**
 * Asynchronous `readdir`. Reads the contents of a directory.
 * The callback gets two arguments `(err, files)` where `files` is an array of
 * the names of the files in the directory excluding `'.'` and `'..'`.
 * @param path
 * @param callback
 */
FS.prototype.readdir = function readdir (path, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 2);
    try {
        path = normalizePath(path);
        assertRoot(this.root).readdir(path, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `readdir`. Reads the contents of a directory.
 * @param path
 * @return [String[]]
 */
FS.prototype.readdirSync = function readdirSync (path) {
    path = normalizePath(path);
    return assertRoot(this.root).readdirSync(path);
};
// SYMLINK METHODS
/**
 * Asynchronous `link`.
 * @param srcpath
 * @param dstpath
 * @param callback
 */
FS.prototype.link = function link (srcpath, dstpath, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        srcpath = normalizePath(srcpath);
        dstpath = normalizePath(dstpath);
        assertRoot(this.root).link(srcpath, dstpath, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `link`.
 * @param srcpath
 * @param dstpath
 */
FS.prototype.linkSync = function linkSync (srcpath, dstpath) {
    srcpath = normalizePath(srcpath);
    dstpath = normalizePath(dstpath);
    return assertRoot(this.root).linkSync(srcpath, dstpath);
};
FS.prototype.symlink = function symlink (srcpath, dstpath, arg3, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var type = typeof arg3 === 'string' ? arg3 : 'file';
    cb = typeof arg3 === 'function' ? arg3 : cb;
    var newCb = wrapCb(cb, 1);
    try {
        if (type !== 'file' && type !== 'dir') {
            return newCb(new ApiError(ErrorCode.EINVAL, "Invalid type: " + type));
        }
        srcpath = normalizePath(srcpath);
        dstpath = normalizePath(dstpath);
        assertRoot(this.root).symlink(srcpath, dstpath, type, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `symlink`.
 * @param srcpath
 * @param dstpath
 * @param type can be either `'dir'` or `'file'` (default is `'file'`)
 */
FS.prototype.symlinkSync = function symlinkSync (srcpath, dstpath, type) {
    if (!type) {
        type = 'file';
    }
    else if (type !== 'file' && type !== 'dir') {
        throw new ApiError(ErrorCode.EINVAL, "Invalid type: " + type);
    }
    srcpath = normalizePath(srcpath);
    dstpath = normalizePath(dstpath);
    return assertRoot(this.root).symlinkSync(srcpath, dstpath, type);
};
/**
 * Asynchronous readlink.
 * @param path
 * @param callback
 */
FS.prototype.readlink = function readlink (path, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 2);
    try {
        path = normalizePath(path);
        assertRoot(this.root).readlink(path, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous readlink.
 * @param path
 * @return [String]
 */
FS.prototype.readlinkSync = function readlinkSync (path) {
    path = normalizePath(path);
    return assertRoot(this.root).readlinkSync(path);
};
// PROPERTY OPERATIONS
/**
 * Asynchronous `chown`.
 * @param path
 * @param uid
 * @param gid
 * @param callback
 */
FS.prototype.chown = function chown (path, uid, gid, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        path = normalizePath(path);
        assertRoot(this.root).chown(path, false, uid, gid, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `chown`.
 * @param path
 * @param uid
 * @param gid
 */
FS.prototype.chownSync = function chownSync (path, uid, gid) {
    path = normalizePath(path);
    assertRoot(this.root).chownSync(path, false, uid, gid);
};
/**
 * Asynchronous `lchown`.
 * @param path
 * @param uid
 * @param gid
 * @param callback
 */
FS.prototype.lchown = function lchown (path, uid, gid, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        path = normalizePath(path);
        assertRoot(this.root).chown(path, true, uid, gid, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `lchown`.
 * @param path
 * @param uid
 * @param gid
 */
FS.prototype.lchownSync = function lchownSync (path, uid, gid) {
    path = normalizePath(path);
    assertRoot(this.root).chownSync(path, true, uid, gid);
};
/**
 * Asynchronous `chmod`.
 * @param path
 * @param mode
 * @param callback
 */
FS.prototype.chmod = function chmod (path, mode, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        var numMode = normalizeMode(mode, -1);
        if (numMode < 0) {
            throw new ApiError(ErrorCode.EINVAL, "Invalid mode.");
        }
        assertRoot(this.root).chmod(normalizePath(path), false, numMode, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `chmod`.
 * @param path
 * @param mode
 */
FS.prototype.chmodSync = function chmodSync (path, mode) {
    var numMode = normalizeMode(mode, -1);
    if (numMode < 0) {
        throw new ApiError(ErrorCode.EINVAL, "Invalid mode.");
    }
    path = normalizePath(path);
    assertRoot(this.root).chmodSync(path, false, numMode);
};
/**
 * Asynchronous `lchmod`.
 * @param path
 * @param mode
 * @param callback
 */
FS.prototype.lchmod = function lchmod (path, mode, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        var numMode = normalizeMode(mode, -1);
        if (numMode < 0) {
            throw new ApiError(ErrorCode.EINVAL, "Invalid mode.");
        }
        assertRoot(this.root).chmod(normalizePath(path), true, numMode, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `lchmod`.
 * @param path
 * @param mode
 */
FS.prototype.lchmodSync = function lchmodSync (path, mode) {
    var numMode = normalizeMode(mode, -1);
    if (numMode < 1) {
        throw new ApiError(ErrorCode.EINVAL, "Invalid mode.");
    }
    assertRoot(this.root).chmodSync(normalizePath(path), true, numMode);
};
/**
 * Change file timestamps of the file referenced by the supplied path.
 * @param path
 * @param atime
 * @param mtime
 * @param callback
 */
FS.prototype.utimes = function utimes (path, atime, mtime, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var newCb = wrapCb(cb, 1);
    try {
        assertRoot(this.root).utimes(normalizePath(path), normalizeTime(atime), normalizeTime(mtime), newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Change file timestamps of the file referenced by the supplied path.
 * @param path
 * @param atime
 * @param mtime
 */
FS.prototype.utimesSync = function utimesSync (path, atime, mtime) {
    assertRoot(this.root).utimesSync(normalizePath(path), normalizeTime(atime), normalizeTime(mtime));
};
FS.prototype.realpath = function realpath (path, arg2, cb) {
        if ( cb === void 0 ) cb = nopCb;

    var cache = typeof (arg2) === 'object' ? arg2 : {};
    cb = typeof (arg2) === 'function' ? arg2 : nopCb;
    var newCb = wrapCb(cb, 2);
    try {
        path = normalizePath(path);
        assertRoot(this.root).realpath(path, cache, newCb);
    }
    catch (e) {
        newCb(e);
    }
};
/**
 * Synchronous `realpath`.
 * @param path
 * @param cache An object literal of mapped paths that can be used to
 *   force a specific path resolution or avoid additional `fs.stat` calls for
 *   known real paths.
 * @return [String]
 */
FS.prototype.realpathSync = function realpathSync (path, cache) {
        if ( cache === void 0 ) cache = {};

    path = normalizePath(path);
    return assertRoot(this.root).realpathSync(path, cache);
};
FS.prototype.watchFile = function watchFile (filename, arg2, listener) {
        var this$1 = this;
        if ( listener === void 0 ) listener = nopCb;

    this.stat(filename, function (err, stat) {
        var usedStat = stat;
        if (err) {
            usedStat = new Stats(FileType.FILE, 0, undefined, 0, 0, 0, 0);
        }
        this$1.fileWatcher.watchFile(usedStat, filename, arg2, listener);
    });
};
FS.prototype.unwatchFile = function unwatchFile (filename, listener) {
        if ( listener === void 0 ) listener = nopCb;

    this.fileWatcher.unwatchFile(filename, listener);
};
FS.prototype.watch = function watch (filename, arg2, listener) {
        if ( listener === void 0 ) listener = nopCb;

    return this.fileWatcher.watch(filename, arg2, listener);
};
FS.prototype.access = function access (path, arg2, cb) {
        if ( cb === void 0 ) cb = nopCb;

    throw new ApiError(ErrorCode.ENOTSUP);
};
FS.prototype.accessSync = function accessSync (path, mode) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
FS.prototype.createReadStream = function createReadStream (path, options) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
FS.prototype.createWriteStream = function createWriteStream (path, options) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
/**
 * For unit testing. Passes all incoming callbacks to cbWrapper for wrapping.
 */
FS.prototype.wrapCallbacks = function wrapCallbacks (cbWrapper) {
    wrapCbHook = cbWrapper;
};
FS.prototype.getFdForFile = function getFdForFile (file) {
    var fd = this.nextFd++;
    this.fdMap[fd] = file;
    return fd;
};
FS.prototype.fd2file = function fd2file (fd) {
    var rv = this.fdMap[fd];
    if (rv) {
        return rv;
    }
    throw new ApiError(ErrorCode.EBADF, 'Invalid file descriptor.');
};
FS.prototype.closeFd = function closeFd (fd) {
    delete this.fdMap[fd];
};
/* tslint:disable:variable-name */
// Exported fs.Stats.
FS.Stats = Stats;
/* tslint:enable:variable-name */
FS.F_OK = 0;
FS.R_OK = 4;
FS.W_OK = 2;
FS.X_OK = 1;

// Manually export the individual public functions of fs.
// Required because some code will invoke functions off of the module.
// e.g.:
// let writeFile = fs.writeFile;
// writeFile(...)
/**
 * @hidden
 */
var fs = new FS();
/**
 * @hidden
 */
var _fsMock = {};
/**
 * @hidden
 */
var fsProto = FS.prototype;
Object.keys(fsProto).forEach(function (key) {
    if (typeof fs[key] === 'function') {
        _fsMock[key] = function () {
            return fs[key].apply(fs, arguments);
        };
    }
    else {
        _fsMock[key] = fs[key];
    }
});
_fsMock['changeFSModule'] = function (newFs) {
    fs = newFs;
};
_fsMock['getFSModule'] = function () {
    return fs;
};
_fsMock['FS'] = FS;
_fsMock['Stats'] = FS.Stats;
_fsMock['F_OK'] = 0;
_fsMock['R_OK'] = 4;
_fsMock['W_OK'] = 2;
_fsMock['X_OK'] = 1;

/*
 * Levenshtein distance, from the `js-levenshtein` NPM module.
 * Copied here to avoid complexity of adding another CommonJS module dependency.
 */
function _min(d0, d1, d2, bx, ay) {
    return d0 < d1 || d2 < d1
        ? d0 > d2
            ? d2 + 1
            : d0 + 1
        : bx === ay
            ? d1
            : d1 + 1;
}
/**
 * Calculates levenshtein distance.
 * @param a
 * @param b
 */
function levenshtein(a, b) {
    if (a === b) {
        return 0;
    }
    if (a.length > b.length) {
        var tmp = a;
        a = b;
        b = tmp;
    }
    var la = a.length;
    var lb = b.length;
    while (la > 0 && (a.charCodeAt(la - 1) === b.charCodeAt(lb - 1))) {
        la--;
        lb--;
    }
    var offset = 0;
    while (offset < la && (a.charCodeAt(offset) === b.charCodeAt(offset))) {
        offset++;
    }
    la -= offset;
    lb -= offset;
    if (la === 0 || lb === 1) {
        return lb;
    }
    var vector = new Array(la << 1);
    for (var y = 0; y < la;) {
        vector[la + y] = a.charCodeAt(offset + y);
        vector[y] = ++y;
    }
    var x;
    var d0;
    var d1;
    var d2;
    var d3;
    for (x = 0; (x + 3) < lb;) {
        var bx0 = b.charCodeAt(offset + (d0 = x));
        var bx1 = b.charCodeAt(offset + (d1 = x + 1));
        var bx2 = b.charCodeAt(offset + (d2 = x + 2));
        var bx3 = b.charCodeAt(offset + (d3 = x + 3));
        var dd$1 = (x += 4);
        for (var y$1 = 0; y$1 < la;) {
            var ay = vector[la + y$1];
            var dy = vector[y$1];
            d0 = _min(dy, d0, d1, bx0, ay);
            d1 = _min(d0, d1, d2, bx1, ay);
            d2 = _min(d1, d2, d3, bx2, ay);
            dd$1 = _min(d2, d3, dd$1, bx3, ay);
            vector[y$1++] = dd$1;
            d3 = d2;
            d2 = d1;
            d1 = d0;
            d0 = dy;
        }
    }
    var dd = 0;
    for (; x < lb;) {
        var bx0$1 = b.charCodeAt(offset + (d0 = x));
        dd = ++x;
        for (var y$2 = 0; y$2 < la; y$2++) {
            var dy$1 = vector[y$2];
            vector[y$2] = dd = dy$1 < d0 || dd < d0
                ? dy$1 > dd ? dd + 1 : dy$1 + 1
                : bx0$1 === vector[la + y$2]
                    ? d0
                    : d0 + 1;
            d0 = dy$1;
        }
    }
    return dd;
}

function deprecationMessage(print, fsName, opts) {
    if (print) {
        // tslint:disable-next-line:no-console
        console.warn(("[" + fsName + "] Direct file system constructor usage is deprecated for this file system, and will be removed in the next major version. Please use the '" + fsName + ".Create(" + (JSON.stringify(opts)) + ", callback)' method instead. See https://github.com/jvilk/BrowserFS/issues/176 for more details."));
        // tslint:enable-next-line:no-console
    }
}
/**
 * Checks for any IE version, including IE11 which removed MSIE from the
 * userAgent string.
 * @hidden
 */
var isIE = typeof navigator !== "undefined" && Boolean(/(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || navigator.userAgent.indexOf('Trident') !== -1);
/**
 * Check if we're in a web worker.
 * @hidden
 */
var isWebWorker = typeof window === "undefined";
/**
 * Throws an exception. Called on code paths that should be impossible.
 * @hidden
 */
function fail() {
    throw new Error("BFS has reached an impossible code path; please file a bug.");
}
/**
 * Synchronous recursive makedir.
 * @hidden
 */
function mkdirpSync(p, mode, fs) {
    if (!fs.existsSync(p)) {
        mkdirpSync(path.dirname(p), mode, fs);
        fs.mkdirSync(p, mode);
    }
}
/**
 * Converts a buffer into an array buffer. Attempts to do so in a
 * zero-copy manner, e.g. the array references the same memory.
 * @hidden
 */
function buffer2ArrayBuffer(buff) {
    var u8 = buffer2Uint8array(buff), u8offset = u8.byteOffset, u8Len = u8.byteLength;
    if (u8offset === 0 && u8Len === u8.buffer.byteLength) {
        return u8.buffer;
    }
    else {
        return u8.buffer.slice(u8offset, u8offset + u8Len);
    }
}
/**
 * Converts a buffer into a Uint8Array. Attempts to do so in a
 * zero-copy manner, e.g. the array references the same memory.
 * @hidden
 */
function buffer2Uint8array(buff) {
    if (buff instanceof Uint8Array) {
        // BFS & Node v4.0 buffers *are* Uint8Arrays.
        return buff;
    }
    else {
        // Uint8Arrays can be constructed from arrayish numbers.
        // At this point, we assume this isn't a BFS array.
        return new Uint8Array(buff);
    }
}
/**
 * Converts the given arrayish object into a Buffer. Attempts to
 * be zero-copy.
 * @hidden
 */
function arrayish2Buffer(arr) {
    if (arr instanceof Buffer) {
        return arr;
    }
    else if (arr instanceof Uint8Array) {
        return uint8Array2Buffer(arr);
    }
    else {
        return Buffer.from(arr);
    }
}
/**
 * Converts the given Uint8Array into a Buffer. Attempts to be zero-copy.
 * @hidden
 */
function uint8Array2Buffer(u8) {
    if (u8 instanceof Buffer) {
        return u8;
    }
    else if (u8.byteOffset === 0 && u8.byteLength === u8.buffer.byteLength) {
        return arrayBuffer2Buffer(u8.buffer);
    }
    else {
        return Buffer.from(u8.buffer, u8.byteOffset, u8.byteLength);
    }
}
/**
 * Converts the given array buffer into a Buffer. Attempts to be
 * zero-copy.
 * @hidden
 */
function arrayBuffer2Buffer(ab) {
    return Buffer.from(ab);
}
/**
 * Copies a slice of the given buffer
 * @hidden
 */
function copyingSlice(buff, start, end) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = buff.length;

    if (start < 0 || end < 0 || end > buff.length || start > end) {
        throw new TypeError(("Invalid slice bounds on buffer of length " + (buff.length) + ": [" + start + ", " + end + "]"));
    }
    if (buff.length === 0) {
        // Avoid s0 corner case in ArrayBuffer case.
        return emptyBuffer();
    }
    else {
        var u8 = buffer2Uint8array(buff), s0 = buff[0], newS0 = (s0 + 1) % 0xFF;
        buff[0] = newS0;
        if (u8[0] === newS0) {
            // Same memory. Revert & copy.
            u8[0] = s0;
            return uint8Array2Buffer(u8.slice(start, end));
        }
        else {
            // Revert.
            buff[0] = s0;
            return uint8Array2Buffer(u8.subarray(start, end));
        }
    }
}
/**
 * @hidden
 */
var emptyBuff = null;
/**
 * Returns an empty buffer.
 * @hidden
 */
function emptyBuffer() {
    if (emptyBuff) {
        return emptyBuff;
    }
    return emptyBuff = Buffer.alloc(0);
}
/**
 * Option validator for a Buffer file system option.
 * @hidden
 */
function bufferValidator(v, cb) {
    if (Buffer.isBuffer(v)) {
        cb();
    }
    else {
        cb(new ApiError(ErrorCode.EINVAL, "option must be a Buffer."));
    }
}
/**
 * Checks that the given options object is valid for the file system options.
 * @hidden
 */
function checkOptions(fsType, opts, cb) {
    var optsInfo = fsType.Options;
    var fsName = fsType.Name;
    var pendingValidators = 0;
    var callbackCalled = false;
    var loopEnded = false;
    function validatorCallback(e) {
        if (!callbackCalled) {
            if (e) {
                callbackCalled = true;
                cb(e);
            }
            pendingValidators--;
            if (pendingValidators === 0 && loopEnded) {
                cb();
            }
        }
    }
    // Check for required options.
    var loop = function ( optName ) {
        if (optsInfo.hasOwnProperty(optName)) {
            var opt = optsInfo[optName];
            var providedValue = opts[optName];
            if (providedValue === undefined || providedValue === null) {
                if (!opt.optional) {
                    // Required option, not provided.
                    // Any incorrect options provided? Which ones are close to the provided one?
                    // (edit distance 5 === close)
                    var incorrectOptions = Object.keys(opts).filter(function (o) { return !(o in optsInfo); }).map(function (a) {
                        return { str: a, distance: levenshtein(optName, a) };
                    }).filter(function (o) { return o.distance < 5; }).sort(function (a, b) { return a.distance - b.distance; });
                    // Validators may be synchronous.
                    if (callbackCalled) {
                        return {};
                    }
                    callbackCalled = true;
                    return { v: cb(new ApiError(ErrorCode.EINVAL, ("[" + fsName + "] Required option '" + optName + "' not provided." + (incorrectOptions.length > 0 ? (" You provided unrecognized option '" + (incorrectOptions[0].str) + "'; perhaps you meant to type '" + optName + "'.") : '') + "\nOption description: " + (opt.description)))) };
                }
                // Else: Optional option, not provided. That is OK.
            }
            else {
                // Option provided! Check type.
                var typeMatches = false;
                if (Array.isArray(opt.type)) {
                    typeMatches = opt.type.indexOf(typeof (providedValue)) !== -1;
                }
                else {
                    typeMatches = typeof (providedValue) === opt.type;
                }
                if (!typeMatches) {
                    // Validators may be synchronous.
                    if (callbackCalled) {
                        return {};
                    }
                    callbackCalled = true;
                    return { v: cb(new ApiError(ErrorCode.EINVAL, ("[" + fsName + "] Value provided for option " + optName + " is not the proper type. Expected " + (Array.isArray(opt.type) ? ("one of {" + (opt.type.join(", ")) + "}") : opt.type) + ", but received " + (typeof (providedValue)) + "\nOption description: " + (opt.description)))) };
                }
                else if (opt.validator) {
                    pendingValidators++;
                    opt.validator(providedValue, validatorCallback);
                }
                // Otherwise: All good!
            }
        }
    };

    for (var optName in optsInfo) {
        var returned = loop( optName );

        if ( returned ) return returned.v;
    }
    loopEnded = true;
    if (pendingValidators === 0 && !callbackCalled) {
        cb();
    }
}

var BFSUtils = /*#__PURE__*/Object.freeze({
    deprecationMessage: deprecationMessage,
    isIE: isIE,
    isWebWorker: isWebWorker,
    fail: fail,
    mkdirpSync: mkdirpSync,
    buffer2ArrayBuffer: buffer2ArrayBuffer,
    buffer2Uint8array: buffer2Uint8array,
    arrayish2Buffer: arrayish2Buffer,
    uint8Array2Buffer: uint8Array2Buffer,
    arrayBuffer2Buffer: arrayBuffer2Buffer,
    copyingSlice: copyingSlice,
    emptyBuffer: emptyBuffer,
    bufferValidator: bufferValidator,
    checkOptions: checkOptions
});

var BFSEmscriptenStreamOps = function BFSEmscriptenStreamOps(fs) {
    this.fs = fs;
    this.nodefs = fs.getNodeFS();
    this.FS = fs.getFS();
    this.PATH = fs.getPATH();
    this.ERRNO_CODES = fs.getERRNO_CODES();
};
BFSEmscriptenStreamOps.prototype.open = function open (stream) {
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
BFSEmscriptenStreamOps.prototype.close = function close (stream) {
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
BFSEmscriptenStreamOps.prototype.read = function read (stream, buffer, offset, length, position) {
    // Avoid copying overhead by reading directly into buffer.
    try {
        return this.nodefs.readSync(stream.nfd, uint8Array2Buffer(buffer), offset, length, position);
    }
    catch (e) {
        throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
    }
};
BFSEmscriptenStreamOps.prototype.write = function write (stream, buffer, offset, length, position) {
    // Avoid copying overhead.
    try {
        return this.nodefs.writeSync(stream.nfd, uint8Array2Buffer(buffer), offset, length, position);
    }
    catch (e) {
        throw new this.FS.ErrnoError(this.ERRNO_CODES[e.code]);
    }
};
BFSEmscriptenStreamOps.prototype.llseek = function llseek (stream, offset, whence) {
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
var BFSEmscriptenNodeOps = function BFSEmscriptenNodeOps(fs) {
    this.fs = fs;
    this.nodefs = fs.getNodeFS();
    this.FS = fs.getFS();
    this.PATH = fs.getPATH();
    this.ERRNO_CODES = fs.getERRNO_CODES();
};
BFSEmscriptenNodeOps.prototype.getattr = function getattr (node) {
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
BFSEmscriptenNodeOps.prototype.setattr = function setattr (node, attr) {
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
BFSEmscriptenNodeOps.prototype.lookup = function lookup (parent, name) {
    var path = this.PATH.join2(this.fs.realPath(parent), name);
    var mode = this.fs.getMode(path);
    return this.fs.createNode(parent, name, mode);
};
BFSEmscriptenNodeOps.prototype.mknod = function mknod (parent, name, mode, dev) {
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
BFSEmscriptenNodeOps.prototype.rename = function rename (oldNode, newDir, newName) {
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
BFSEmscriptenNodeOps.prototype.unlink = function unlink (parent, name) {
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
BFSEmscriptenNodeOps.prototype.rmdir = function rmdir (parent, name) {
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
BFSEmscriptenNodeOps.prototype.readdir = function readdir (node) {
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
BFSEmscriptenNodeOps.prototype.symlink = function symlink (parent, newName, oldPath) {
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
BFSEmscriptenNodeOps.prototype.readlink = function readlink (node) {
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
var BFSEmscriptenFS = function BFSEmscriptenFS(_FS, _PATH, _ERRNO_CODES, nodefs) {
    if ( _FS === void 0 ) _FS = self['FS'];
    if ( _PATH === void 0 ) _PATH = self['PATH'];
    if ( _ERRNO_CODES === void 0 ) _ERRNO_CODES = self['ERRNO_CODES'];
    if ( nodefs === void 0 ) nodefs = _fsMock;

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
};
BFSEmscriptenFS.prototype.mount = function mount (m) {
    return this.createNode(null, '/', this.getMode(m.opts.root), 0);
};
BFSEmscriptenFS.prototype.createNode = function createNode (parent, name, mode, dev) {
    var FS = this.FS;
    if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
        throw new FS.ErrnoError(this.ERRNO_CODES.EINVAL);
    }
    var node = FS.createNode(parent, name, mode);
    node.node_ops = this.node_ops;
    node.stream_ops = this.stream_ops;
    return node;
};
BFSEmscriptenFS.prototype.getMode = function getMode (path) {
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
BFSEmscriptenFS.prototype.realPath = function realPath (node) {
    var parts = [];
    while (node.parent !== node) {
        parts.push(node.name);
        node = node.parent;
    }
    parts.push(node.mount.opts.root);
    parts.reverse();
    return this.PATH.join.apply(null, parts);
};
BFSEmscriptenFS.prototype.flagsToPermissionString = function flagsToPermissionString (flags) {
    var parsedFlags = (typeof flags === "string") ? parseInt(flags, 10) : flags;
    parsedFlags &= 0x1FFF;
    if (parsedFlags in this.flagsToPermissionStringMap) {
        return this.flagsToPermissionStringMap[parsedFlags];
    }
    else {
        return flags;
    }
};
BFSEmscriptenFS.prototype.getNodeFS = function getNodeFS () {
    return this.nodefs;
};
BFSEmscriptenFS.prototype.getFS = function getFS () {
    return this.FS;
};
BFSEmscriptenFS.prototype.getPATH = function getPATH () {
    return this.PATH;
};
BFSEmscriptenFS.prototype.getERRNO_CODES = function getERRNO_CODES () {
    return this.ERRNO_CODES;
};

/**
 * Basic filesystem class. Most filesystems should extend this class, as it
 * provides default implementations for a handful of methods.
 */
var BaseFileSystem = function BaseFileSystem () {};

BaseFileSystem.prototype.supportsLinks = function supportsLinks () {
    return false;
};
BaseFileSystem.prototype.diskSpace = function diskSpace (p, cb) {
    cb(0, 0);
};
/**
 * Opens the file at path p with the given flag. The file must exist.
 * @param p The path to open.
 * @param flag The flag to use when opening the file.
 */
BaseFileSystem.prototype.openFile = function openFile (p, flag, cb) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
/**
 * Create the file at path p with the given mode. Then, open it with the given
 * flag.
 */
BaseFileSystem.prototype.createFile = function createFile (p, flag, mode, cb) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFileSystem.prototype.open = function open (p, flag, mode, cb) {
        var this$1 = this;

    var mustBeFile = function (e, stats) {
        if (e) {
            // File does not exist.
            switch (flag.pathNotExistsAction()) {
                case ActionType.CREATE_FILE:
                    // Ensure parent exists.
                    return this$1.stat(path.dirname(p), false, function (e, parentStats) {
                        if (e) {
                            cb(e);
                        }
                        else if (parentStats && !parentStats.isDirectory()) {
                            cb(ApiError.ENOTDIR(path.dirname(p)));
                        }
                        else {
                            this$1.createFile(p, flag, mode, cb);
                        }
                    });
                case ActionType.THROW_EXCEPTION:
                    return cb(ApiError.ENOENT(p));
                default:
                    return cb(new ApiError(ErrorCode.EINVAL, 'Invalid FileFlag object.'));
            }
        }
        else {
            // File exists.
            if (stats && stats.isDirectory()) {
                return cb(ApiError.EISDIR(p));
            }
            switch (flag.pathExistsAction()) {
                case ActionType.THROW_EXCEPTION:
                    return cb(ApiError.EEXIST(p));
                case ActionType.TRUNCATE_FILE:
                    // NOTE: In a previous implementation, we deleted the file and
                    // re-created it. However, this created a race condition if another
                    // asynchronous request was trying to read the file, as the file
                    // would not exist for a small period of time.
                    return this$1.openFile(p, flag, function (e, fd) {
                        if (e) {
                            cb(e);
                        }
                        else if (fd) {
                            fd.truncate(0, function () {
                                fd.sync(function () {
                                    cb(null, fd);
                                });
                            });
                        }
                        else {
                            fail();
                        }
                    });
                case ActionType.NOP:
                    return this$1.openFile(p, flag, cb);
                default:
                    return cb(new ApiError(ErrorCode.EINVAL, 'Invalid FileFlag object.'));
            }
        }
    };
    this.stat(p, false, mustBeFile);
};
BaseFileSystem.prototype.rename = function rename (oldPath, newPath, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFileSystem.prototype.renameSync = function renameSync (oldPath, newPath) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFileSystem.prototype.stat = function stat (p, isLstat, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFileSystem.prototype.statSync = function statSync (p, isLstat) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
/**
 * Opens the file at path p with the given flag. The file must exist.
 * @param p The path to open.
 * @param flag The flag to use when opening the file.
 * @return A File object corresponding to the opened file.
 */
BaseFileSystem.prototype.openFileSync = function openFileSync (p, flag, mode) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
/**
 * Create the file at path p with the given mode. Then, open it with the given
 * flag.
 */
BaseFileSystem.prototype.createFileSync = function createFileSync (p, flag, mode) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFileSystem.prototype.openSync = function openSync (p, flag, mode) {
    // Check if the path exists, and is a file.
    var stats;
    try {
        stats = this.statSync(p, false);
    }
    catch (e) {
        // File does not exist.
        switch (flag.pathNotExistsAction()) {
            case ActionType.CREATE_FILE:
                // Ensure parent exists.
                var parentStats = this.statSync(path.dirname(p), false);
                if (!parentStats.isDirectory()) {
                    throw ApiError.ENOTDIR(path.dirname(p));
                }
                return this.createFileSync(p, flag, mode);
            case ActionType.THROW_EXCEPTION:
                throw ApiError.ENOENT(p);
            default:
                throw new ApiError(ErrorCode.EINVAL, 'Invalid FileFlag object.');
        }
    }
    // File exists.
    if (stats.isDirectory()) {
        throw ApiError.EISDIR(p);
    }
    switch (flag.pathExistsAction()) {
        case ActionType.THROW_EXCEPTION:
            throw ApiError.EEXIST(p);
        case ActionType.TRUNCATE_FILE:
            // Delete file.
            this.unlinkSync(p);
            // Create file. Use the same mode as the old file.
            // Node itself modifies the ctime when this occurs, so this action
            // will preserve that behavior if the underlying file system
            // supports those properties.
            return this.createFileSync(p, flag, stats.mode);
        case ActionType.NOP:
            return this.openFileSync(p, flag, mode);
        default:
            throw new ApiError(ErrorCode.EINVAL, 'Invalid FileFlag object.');
    }
};
BaseFileSystem.prototype.unlink = function unlink (p, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFileSystem.prototype.unlinkSync = function unlinkSync (p) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFileSystem.prototype.rmdir = function rmdir (p, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFileSystem.prototype.rmdirSync = function rmdirSync (p) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFileSystem.prototype.mkdir = function mkdir (p, mode, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFileSystem.prototype.mkdirSync = function mkdirSync (p, mode) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFileSystem.prototype.readdir = function readdir (p, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFileSystem.prototype.readdirSync = function readdirSync (p) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFileSystem.prototype.exists = function exists (p, cb) {
    this.stat(p, null, function (err) {
        cb(!err);
    });
};
BaseFileSystem.prototype.existsSync = function existsSync (p) {
    try {
        this.statSync(p, true);
        return true;
    }
    catch (e) {
        return false;
    }
};
BaseFileSystem.prototype.realpath = function realpath (p, cache, cb) {
    if (this.supportsLinks()) {
        // The path could contain symlinks. Split up the path,
        // resolve any symlinks, return the resolved string.
        var splitPath = p.split(path.sep);
        // TODO: Simpler to just pass through file, find sep and such.
        for (var i = 0; i < splitPath.length; i++) {
            var addPaths = splitPath.slice(0, i + 1);
            splitPath[i] = path.join.apply(null, addPaths);
        }
    }
    else {
        // No symlinks. We just need to verify that it exists.
        this.exists(p, function (doesExist) {
            if (doesExist) {
                cb(null, p);
            }
            else {
                cb(ApiError.ENOENT(p));
            }
        });
    }
};
BaseFileSystem.prototype.realpathSync = function realpathSync (p, cache) {
    if (this.supportsLinks()) {
        // The path could contain symlinks. Split up the path,
        // resolve any symlinks, return the resolved string.
        var splitPath = p.split(path.sep);
        // TODO: Simpler to just pass through file, find sep and such.
        for (var i = 0; i < splitPath.length; i++) {
            var addPaths = splitPath.slice(0, i + 1);
            splitPath[i] = path.join.apply(path, addPaths);
        }
        return splitPath.join(path.sep);
    }
    else {
        // No symlinks. We just need to verify that it exists.
        if (this.existsSync(p)) {
            return p;
        }
        else {
            throw ApiError.ENOENT(p);
        }
    }
};
BaseFileSystem.prototype.truncate = function truncate (p, len, cb) {
    this.open(p, FileFlag.getFileFlag('r+'), 0x1a4, (function (er, fd) {
        if (er) {
            return cb(er);
        }
        fd.truncate(len, (function (er) {
            fd.close((function (er2) {
                cb(er || er2);
            }));
        }));
    }));
};
BaseFileSystem.prototype.truncateSync = function truncateSync (p, len) {
    var fd = this.openSync(p, FileFlag.getFileFlag('r+'), 0x1a4);
    // Need to safely close FD, regardless of whether or not truncate succeeds.
    try {
        fd.truncateSync(len);
    }
    catch (e) {
        throw e;
    }
    finally {
        fd.closeSync();
    }
};
BaseFileSystem.prototype.readFile = function readFile (fname, encoding, flag, cb) {
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
        fd.stat(function (err, stat) {
            if (err) {
                return cb(err);
            }
            // Allocate buffer.
            var buf = Buffer.alloc(stat.size);
            fd.read(buf, 0, stat.size, 0, function (err) {
                if (err) {
                    return cb(err);
                }
                else if (encoding === null) {
                    return cb(err, buf);
                }
                try {
                    cb(null, buf.toString(encoding));
                }
                catch (e) {
                    cb(e);
                }
            });
        });
    });
};
BaseFileSystem.prototype.readFileSync = function readFileSync (fname, encoding, flag) {
    // Get file.
    var fd = this.openSync(fname, flag, 0x1a4);
    try {
        var stat = fd.statSync();
        // Allocate buffer.
        var buf = Buffer.alloc(stat.size);
        fd.readSync(buf, 0, stat.size, 0);
        fd.closeSync();
        if (encoding === null) {
            return buf;
        }
        return buf.toString(encoding);
    }
    finally {
        fd.closeSync();
    }
};
BaseFileSystem.prototype.writeFile = function writeFile (fname, data, encoding, flag, mode, cb) {
    // Wrap cb in file closing code.
    var oldCb = cb;
    // Get file.
    this.open(fname, flag, 0x1a4, function (err, fd) {
        if (err) {
            return cb(err);
        }
        cb = function (err) {
            fd.close(function (err2) {
                oldCb(err ? err : err2);
            });
        };
        try {
            if (typeof data === 'string') {
                data = Buffer.from(data, encoding);
            }
        }
        catch (e) {
            return cb(e);
        }
        // Write into file.
        fd.write(data, 0, data.length, 0, cb);
    });
};
BaseFileSystem.prototype.writeFileSync = function writeFileSync (fname, data, encoding, flag, mode) {
    // Get file.
    var fd = this.openSync(fname, flag, mode);
    try {
        if (typeof data === 'string') {
            data = Buffer.from(data, encoding);
        }
        // Write into file.
        fd.writeSync(data, 0, data.length, 0);
    }
    finally {
        fd.closeSync();
    }
};
BaseFileSystem.prototype.appendFile = function appendFile (fname, data, encoding, flag, mode, cb) {
    // Wrap cb in file closing code.
    var oldCb = cb;
    this.open(fname, flag, mode, function (err, fd) {
        if (err) {
            return cb(err);
        }
        cb = function (err) {
            fd.close(function (err2) {
                oldCb(err ? err : err2);
            });
        };
        if (typeof data === 'string') {
            data = Buffer.from(data, encoding);
        }
        fd.write(data, 0, data.length, null, cb);
    });
};
BaseFileSystem.prototype.appendFileSync = function appendFileSync (fname, data, encoding, flag, mode) {
    var fd = this.openSync(fname, flag, mode);
    try {
        if (typeof data === 'string') {
            data = Buffer.from(data, encoding);
        }
        fd.writeSync(data, 0, data.length, null);
    }
    finally {
        fd.closeSync();
    }
};
BaseFileSystem.prototype.chmod = function chmod (p, isLchmod, mode, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFileSystem.prototype.chmodSync = function chmodSync (p, isLchmod, mode) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFileSystem.prototype.chown = function chown (p, isLchown, uid, gid, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFileSystem.prototype.chownSync = function chownSync (p, isLchown, uid, gid) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFileSystem.prototype.utimes = function utimes (p, atime, mtime, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFileSystem.prototype.utimesSync = function utimesSync (p, atime, mtime) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFileSystem.prototype.link = function link (srcpath, dstpath, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFileSystem.prototype.linkSync = function linkSync (srcpath, dstpath) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFileSystem.prototype.symlink = function symlink (srcpath, dstpath, type, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFileSystem.prototype.symlinkSync = function symlinkSync (srcpath, dstpath, type) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFileSystem.prototype.readlink = function readlink (p, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFileSystem.prototype.readlinkSync = function readlinkSync (p) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
/**
 * Implements the asynchronous API in terms of the synchronous API.
 * @class SynchronousFileSystem
 */
var SynchronousFileSystem = /*@__PURE__*/(function (BaseFileSystem) {
    function SynchronousFileSystem () {
        BaseFileSystem.apply(this, arguments);
    }

    if ( BaseFileSystem ) SynchronousFileSystem.__proto__ = BaseFileSystem;
    SynchronousFileSystem.prototype = Object.create( BaseFileSystem && BaseFileSystem.prototype );
    SynchronousFileSystem.prototype.constructor = SynchronousFileSystem;

    SynchronousFileSystem.prototype.supportsSynch = function supportsSynch () {
        return true;
    };
    SynchronousFileSystem.prototype.rename = function rename (oldPath, newPath, cb) {
        try {
            this.renameSync(oldPath, newPath);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.stat = function stat (p, isLstat, cb) {
        try {
            cb(null, this.statSync(p, isLstat));
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.open = function open (p, flags, mode, cb) {
        try {
            cb(null, this.openSync(p, flags, mode));
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.unlink = function unlink (p, cb) {
        try {
            this.unlinkSync(p);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.rmdir = function rmdir (p, cb) {
        try {
            this.rmdirSync(p);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.mkdir = function mkdir (p, mode, cb) {
        try {
            this.mkdirSync(p, mode);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.readdir = function readdir (p, cb) {
        try {
            cb(null, this.readdirSync(p));
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.chmod = function chmod (p, isLchmod, mode, cb) {
        try {
            this.chmodSync(p, isLchmod, mode);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.chown = function chown (p, isLchown, uid, gid, cb) {
        try {
            this.chownSync(p, isLchown, uid, gid);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.utimes = function utimes (p, atime, mtime, cb) {
        try {
            this.utimesSync(p, atime, mtime);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.link = function link (srcpath, dstpath, cb) {
        try {
            this.linkSync(srcpath, dstpath);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.symlink = function symlink (srcpath, dstpath, type, cb) {
        try {
            this.symlinkSync(srcpath, dstpath, type);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    SynchronousFileSystem.prototype.readlink = function readlink (p, cb) {
        try {
            cb(null, this.readlinkSync(p));
        }
        catch (e) {
            cb(e);
        }
    };

    return SynchronousFileSystem;
}(BaseFileSystem));

/**
 * Base class that contains shared implementations of functions for the file
 * object.
 */
var BaseFile = function BaseFile () {};

BaseFile.prototype.sync = function sync (cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFile.prototype.syncSync = function syncSync () {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFile.prototype.datasync = function datasync (cb) {
    this.sync(cb);
};
BaseFile.prototype.datasyncSync = function datasyncSync () {
    return this.syncSync();
};
BaseFile.prototype.chown = function chown (uid, gid, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFile.prototype.chownSync = function chownSync (uid, gid) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFile.prototype.chmod = function chmod (mode, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFile.prototype.chmodSync = function chmodSync (mode) {
    throw new ApiError(ErrorCode.ENOTSUP);
};
BaseFile.prototype.utimes = function utimes (atime, mtime, cb) {
    cb(new ApiError(ErrorCode.ENOTSUP));
};
BaseFile.prototype.utimesSync = function utimesSync (atime, mtime) {
    throw new ApiError(ErrorCode.ENOTSUP);
};

/**
 * An implementation of the File interface that operates on a file that is
 * completely in-memory. PreloadFiles are backed by a Buffer.
 *
 * This is also an abstract class, as it lacks an implementation of 'sync' and
 * 'close'. Each filesystem that wishes to use this file representation must
 * extend this class and implement those two methods.
 * @todo 'close' lever that disables functionality once closed.
 */
var PreloadFile = /*@__PURE__*/(function (BaseFile) {
    function PreloadFile(_fs, _path, _flag, _stat, contents) {
        BaseFile.call(this);
        this._pos = 0;
        this._dirty = false;
        this._fs = _fs;
        this._path = _path;
        this._flag = _flag;
        this._stat = _stat;
        this._buffer = contents ? contents : emptyBuffer();
        // Note: This invariant is *not* maintained once the file starts getting
        // modified.
        // Note: Only actually matters if file is readable, as writeable modes may
        // truncate/append to file.
        if (this._stat.size !== this._buffer.length && this._flag.isReadable()) {
            throw new Error(("Invalid buffer: Buffer is " + (this._buffer.length) + " long, yet Stats object specifies that file is " + (this._stat.size) + " long."));
        }
    }

    if ( BaseFile ) PreloadFile.__proto__ = BaseFile;
    PreloadFile.prototype = Object.create( BaseFile && BaseFile.prototype );
    PreloadFile.prototype.constructor = PreloadFile;
    /**
     * NONSTANDARD: Get the underlying buffer for this file. !!DO NOT MUTATE!! Will mess up dirty tracking.
     */
    PreloadFile.prototype.getBuffer = function getBuffer () {
        return this._buffer;
    };
    /**
     * NONSTANDARD: Get underlying stats for this file. !!DO NOT MUTATE!!
     */
    PreloadFile.prototype.getStats = function getStats () {
        return this._stat;
    };
    PreloadFile.prototype.getFlag = function getFlag () {
        return this._flag;
    };
    /**
     * Get the path to this file.
     * @return [String] The path to the file.
     */
    PreloadFile.prototype.getPath = function getPath () {
        return this._path;
    };
    /**
     * Get the current file position.
     *
     * We emulate the following bug mentioned in the Node documentation:
     * > On Linux, positional writes don't work when the file is opened in append
     *   mode. The kernel ignores the position argument and always appends the data
     *   to the end of the file.
     * @return [Number] The current file position.
     */
    PreloadFile.prototype.getPos = function getPos () {
        if (this._flag.isAppendable()) {
            return this._stat.size;
        }
        return this._pos;
    };
    /**
     * Advance the current file position by the indicated number of positions.
     * @param [Number] delta
     */
    PreloadFile.prototype.advancePos = function advancePos (delta) {
        return this._pos += delta;
    };
    /**
     * Set the file position.
     * @param [Number] newPos
     */
    PreloadFile.prototype.setPos = function setPos (newPos) {
        return this._pos = newPos;
    };
    /**
     * **Core**: Asynchronous sync. Must be implemented by subclasses of this
     * class.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    PreloadFile.prototype.sync = function sync (cb) {
        try {
            this.syncSync();
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * **Core**: Synchronous sync.
     */
    PreloadFile.prototype.syncSync = function syncSync () {
        throw new ApiError(ErrorCode.ENOTSUP);
    };
    /**
     * **Core**: Asynchronous close. Must be implemented by subclasses of this
     * class.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    PreloadFile.prototype.close = function close (cb) {
        try {
            this.closeSync();
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * **Core**: Synchronous close.
     */
    PreloadFile.prototype.closeSync = function closeSync () {
        throw new ApiError(ErrorCode.ENOTSUP);
    };
    /**
     * Asynchronous `stat`.
     * @param [Function(BrowserFS.ApiError, BrowserFS.node.fs.Stats)] cb
     */
    PreloadFile.prototype.stat = function stat (cb) {
        try {
            cb(null, Stats.clone(this._stat));
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * Synchronous `stat`.
     */
    PreloadFile.prototype.statSync = function statSync () {
        return Stats.clone(this._stat);
    };
    /**
     * Asynchronous truncate.
     * @param [Number] len
     * @param [Function(BrowserFS.ApiError)] cb
     */
    PreloadFile.prototype.truncate = function truncate (len, cb) {
        try {
            this.truncateSync(len);
            if (this._flag.isSynchronous() && !_fsMock.getRootFS().supportsSynch()) {
                this.sync(cb);
            }
            cb();
        }
        catch (e) {
            return cb(e);
        }
    };
    /**
     * Synchronous truncate.
     * @param [Number] len
     */
    PreloadFile.prototype.truncateSync = function truncateSync (len) {
        this._dirty = true;
        if (!this._flag.isWriteable()) {
            throw new ApiError(ErrorCode.EPERM, 'File not opened with a writeable mode.');
        }
        this._stat.mtimeMs = Date.now();
        if (len > this._buffer.length) {
            var buf = Buffer.alloc(len - this._buffer.length, 0);
            // Write will set @_stat.size for us.
            this.writeSync(buf, 0, buf.length, this._buffer.length);
            if (this._flag.isSynchronous() && _fsMock.getRootFS().supportsSynch()) {
                this.syncSync();
            }
            return;
        }
        this._stat.size = len;
        // Truncate buffer to 'len'.
        var newBuff = Buffer.alloc(len);
        this._buffer.copy(newBuff, 0, 0, len);
        this._buffer = newBuff;
        if (this._flag.isSynchronous() && _fsMock.getRootFS().supportsSynch()) {
            this.syncSync();
        }
    };
    /**
     * Write buffer to the file.
     * Note that it is unsafe to use fs.write multiple times on the same file
     * without waiting for the callback.
     * @param [BrowserFS.node.Buffer] buffer Buffer containing the data to write to
     *  the file.
     * @param [Number] offset Offset in the buffer to start reading data from.
     * @param [Number] length The amount of bytes to write to the file.
     * @param [Number] position Offset from the beginning of the file where this
     *   data should be written. If position is null, the data will be written at
     *   the current position.
     * @param [Function(BrowserFS.ApiError, Number, BrowserFS.node.Buffer)]
     *   cb The number specifies the number of bytes written into the file.
     */
    PreloadFile.prototype.write = function write (buffer, offset, length, position, cb) {
        try {
            cb(null, this.writeSync(buffer, offset, length, position), buffer);
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * Write buffer to the file.
     * Note that it is unsafe to use fs.writeSync multiple times on the same file
     * without waiting for the callback.
     * @param [BrowserFS.node.Buffer] buffer Buffer containing the data to write to
     *  the file.
     * @param [Number] offset Offset in the buffer to start reading data from.
     * @param [Number] length The amount of bytes to write to the file.
     * @param [Number] position Offset from the beginning of the file where this
     *   data should be written. If position is null, the data will be written at
     *   the current position.
     * @return [Number]
     */
    PreloadFile.prototype.writeSync = function writeSync (buffer, offset, length, position) {
        this._dirty = true;
        if (position === undefined || position === null) {
            position = this.getPos();
        }
        if (!this._flag.isWriteable()) {
            throw new ApiError(ErrorCode.EPERM, 'File not opened with a writeable mode.');
        }
        var endFp = position + length;
        if (endFp > this._stat.size) {
            this._stat.size = endFp;
            if (endFp > this._buffer.length) {
                // Extend the buffer!
                var newBuff = Buffer.alloc(endFp);
                this._buffer.copy(newBuff);
                this._buffer = newBuff;
            }
        }
        var len = buffer.copy(this._buffer, position, offset, offset + length);
        this._stat.mtimeMs = Date.now();
        if (this._flag.isSynchronous()) {
            this.syncSync();
            return len;
        }
        this.setPos(position + len);
        return len;
    };
    /**
     * Read data from the file.
     * @param [BrowserFS.node.Buffer] buffer The buffer that the data will be
     *   written to.
     * @param [Number] offset The offset within the buffer where writing will
     *   start.
     * @param [Number] length An integer specifying the number of bytes to read.
     * @param [Number] position An integer specifying where to begin reading from
     *   in the file. If position is null, data will be read from the current file
     *   position.
     * @param [Function(BrowserFS.ApiError, Number, BrowserFS.node.Buffer)] cb The
     *   number is the number of bytes read
     */
    PreloadFile.prototype.read = function read (buffer, offset, length, position, cb) {
        try {
            cb(null, this.readSync(buffer, offset, length, position), buffer);
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * Read data from the file.
     * @param [BrowserFS.node.Buffer] buffer The buffer that the data will be
     *   written to.
     * @param [Number] offset The offset within the buffer where writing will
     *   start.
     * @param [Number] length An integer specifying the number of bytes to read.
     * @param [Number] position An integer specifying where to begin reading from
     *   in the file. If position is null, data will be read from the current file
     *   position.
     * @return [Number]
     */
    PreloadFile.prototype.readSync = function readSync (buffer, offset, length, position) {
        if (!this._flag.isReadable()) {
            throw new ApiError(ErrorCode.EPERM, 'File not opened with a readable mode.');
        }
        if (position === undefined || position === null) {
            position = this.getPos();
        }
        var endRead = position + length;
        if (endRead > this._stat.size) {
            length = this._stat.size - position;
        }
        var rv = this._buffer.copy(buffer, offset, position, position + length);
        this._stat.atimeMs = Date.now();
        this._pos = position + length;
        return rv;
    };
    /**
     * Asynchronous `fchmod`.
     * @param [Number|String] mode
     * @param [Function(BrowserFS.ApiError)] cb
     */
    PreloadFile.prototype.chmod = function chmod (mode, cb) {
        try {
            this.chmodSync(mode);
            cb();
        }
        catch (e) {
            cb(e);
        }
    };
    /**
     * Asynchronous `fchmod`.
     * @param [Number] mode
     */
    PreloadFile.prototype.chmodSync = function chmodSync (mode) {
        if (!this._fs.supportsProps()) {
            throw new ApiError(ErrorCode.ENOTSUP);
        }
        this._dirty = true;
        this._stat.chmod(mode);
        this.syncSync();
    };
    PreloadFile.prototype.isDirty = function isDirty () {
        return this._dirty;
    };
    /**
     * Resets the dirty bit. Should only be called after a sync has completed successfully.
     */
    PreloadFile.prototype.resetDirty = function resetDirty () {
        this._dirty = false;
    };

    return PreloadFile;
}(BaseFile));
/**
 * File class for the InMemory and XHR file systems.
 * Doesn't sync to anything, so it works nicely for memory-only files.
 */
var NoSyncFile = /*@__PURE__*/(function (PreloadFile) {
    function NoSyncFile(_fs, _path, _flag, _stat, contents) {
        PreloadFile.call(this, _fs, _path, _flag, _stat, contents);
    }

    if ( PreloadFile ) NoSyncFile.__proto__ = PreloadFile;
    NoSyncFile.prototype = Object.create( PreloadFile && PreloadFile.prototype );
    NoSyncFile.prototype.constructor = NoSyncFile;
    /**
     * Asynchronous sync. Doesn't do anything, simply calls the cb.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    NoSyncFile.prototype.sync = function sync (cb) {
        cb();
    };
    /**
     * Synchronous sync. Doesn't do anything.
     */
    NoSyncFile.prototype.syncSync = function syncSync () {
        // NOP.
    };
    /**
     * Asynchronous close. Doesn't do anything, simply calls the cb.
     * @param [Function(BrowserFS.ApiError)] cb
     */
    NoSyncFile.prototype.close = function close (cb) {
        cb();
    };
    /**
     * Synchronous close. Doesn't do anything.
     */
    NoSyncFile.prototype.closeSync = function closeSync () {
        // NOP.
    };

    return NoSyncFile;
}(PreloadFile));

/**
 * We define our own file to interpose on syncSync() for mirroring purposes.
 */
var MirrorFile = /*@__PURE__*/(function (PreloadFile) {
    function MirrorFile(fs, path, flag, stat, data) {
        PreloadFile.call(this, fs, path, flag, stat, data);
    }

    if ( PreloadFile ) MirrorFile.__proto__ = PreloadFile;
    MirrorFile.prototype = Object.create( PreloadFile && PreloadFile.prototype );
    MirrorFile.prototype.constructor = MirrorFile;
    MirrorFile.prototype.syncSync = function syncSync () {
        if (this.isDirty()) {
            this._fs._syncSync(this);
            this.resetDirty();
        }
    };
    MirrorFile.prototype.closeSync = function closeSync () {
        this.syncSync();
    };

    return MirrorFile;
}(PreloadFile));
/**
 * AsyncMirrorFS mirrors a synchronous filesystem into an asynchronous filesystem
 * by:
 *
 * * Performing operations over the in-memory copy, while asynchronously pipelining them
 *   to the backing store.
 * * During application loading, the contents of the async file system can be reloaded into
 *   the synchronous store, if desired.
 *
 * The two stores will be kept in sync. The most common use-case is to pair a synchronous
 * in-memory filesystem with an asynchronous backing store.
 *
 * Example: Mirroring an IndexedDB file system to an in memory file system. Now, you can use
 * IndexedDB synchronously.
 *
 * ```javascript
 * BrowserFS.configure({
 *   fs: "AsyncMirror",
 *   options: {
 *     sync: { fs: "InMemory" },
 *     async: { fs: "IndexedDB" }
 *   }
 * }, function(e) {
 *   // BrowserFS is initialized and ready-to-use!
 * });
 * ```
 *
 * Or, alternatively:
 *
 * ```javascript
 * BrowserFS.FileSystem.IndexedDB.Create(function(e, idbfs) {
 *   BrowserFS.FileSystem.InMemory.Create(function(e, inMemory) {
 *     BrowserFS.FileSystem.AsyncMirror({
 *       sync: inMemory, async: idbfs
 *     }, function(e, mirrored) {
 *       BrowserFS.initialize(mirrored);
 *     });
 *   });
 * });
 * ```
 */
var AsyncMirror = /*@__PURE__*/(function (SynchronousFileSystem) {
    function AsyncMirror(sync, async) {
        SynchronousFileSystem.call(this);
        /**
         * Queue of pending asynchronous operations.
         */
        this._queue = [];
        this._queueRunning = false;
        this._isInitialized = false;
        this._initializeCallbacks = [];
        this._sync = sync;
        this._async = async;
    }

    if ( SynchronousFileSystem ) AsyncMirror.__proto__ = SynchronousFileSystem;
    AsyncMirror.prototype = Object.create( SynchronousFileSystem && SynchronousFileSystem.prototype );
    AsyncMirror.prototype.constructor = AsyncMirror;
    AsyncMirror.Create = function Create (opts, cb) {
        try {
            var fs = new AsyncMirror(opts.sync, opts.async);
            fs._initialize(function (e) {
                if (e) {
                    cb(e);
                }
                else {
                    cb(null, fs);
                }
            });
        }
        catch (e) {
            cb(e);
        }
    };
    AsyncMirror.isAvailable = function isAvailable () {
        return true;
    };

    AsyncMirror.prototype.getName = function getName () {
        return AsyncMirror.Name;
    };
    AsyncMirror.prototype._syncSync = function _syncSync (fd) {
        this._sync.writeFileSync(fd.getPath(), fd.getBuffer(), null, FileFlag.getFileFlag('w'), fd.getStats().mode);
        this.enqueueOp({
            apiMethod: 'writeFile',
            arguments: [fd.getPath(), fd.getBuffer(), null, fd.getFlag(), fd.getStats().mode]
        });
    };
    AsyncMirror.prototype.isReadOnly = function isReadOnly () { return false; };
    AsyncMirror.prototype.supportsSynch = function supportsSynch () { return true; };
    AsyncMirror.prototype.supportsLinks = function supportsLinks () { return false; };
    AsyncMirror.prototype.supportsProps = function supportsProps () { return this._sync.supportsProps() && this._async.supportsProps(); };
    AsyncMirror.prototype.renameSync = function renameSync (oldPath, newPath) {
        this._sync.renameSync(oldPath, newPath);
        this.enqueueOp({
            apiMethod: 'rename',
            arguments: [oldPath, newPath]
        });
    };
    AsyncMirror.prototype.statSync = function statSync (p, isLstat) {
        return this._sync.statSync(p, isLstat);
    };
    AsyncMirror.prototype.openSync = function openSync (p, flag, mode) {
        // Sanity check: Is this open/close permitted?
        var fd = this._sync.openSync(p, flag, mode);
        fd.closeSync();
        return new MirrorFile(this, p, flag, this._sync.statSync(p, false), this._sync.readFileSync(p, null, FileFlag.getFileFlag('r')));
    };
    AsyncMirror.prototype.unlinkSync = function unlinkSync (p) {
        this._sync.unlinkSync(p);
        this.enqueueOp({
            apiMethod: 'unlink',
            arguments: [p]
        });
    };
    AsyncMirror.prototype.rmdirSync = function rmdirSync (p) {
        this._sync.rmdirSync(p);
        this.enqueueOp({
            apiMethod: 'rmdir',
            arguments: [p]
        });
    };
    AsyncMirror.prototype.mkdirSync = function mkdirSync (p, mode) {
        this._sync.mkdirSync(p, mode);
        this.enqueueOp({
            apiMethod: 'mkdir',
            arguments: [p, mode]
        });
    };
    AsyncMirror.prototype.readdirSync = function readdirSync (p) {
        return this._sync.readdirSync(p);
    };
    AsyncMirror.prototype.existsSync = function existsSync (p) {
        return this._sync.existsSync(p);
    };
    AsyncMirror.prototype.chmodSync = function chmodSync (p, isLchmod, mode) {
        this._sync.chmodSync(p, isLchmod, mode);
        this.enqueueOp({
            apiMethod: 'chmod',
            arguments: [p, isLchmod, mode]
        });
    };
    AsyncMirror.prototype.chownSync = function chownSync (p, isLchown, uid, gid) {
        this._sync.chownSync(p, isLchown, uid, gid);
        this.enqueueOp({
            apiMethod: 'chown',
            arguments: [p, isLchown, uid, gid]
        });
    };
    AsyncMirror.prototype.utimesSync = function utimesSync (p, atime, mtime) {
        this._sync.utimesSync(p, atime, mtime);
        this.enqueueOp({
            apiMethod: 'utimes',
            arguments: [p, atime, mtime]
        });
    };
    /**
     * Called once to load up files from async storage into sync storage.
     */
    AsyncMirror.prototype._initialize = function _initialize (userCb) {
        var this$1 = this;

        var callbacks = this._initializeCallbacks;
        var end = function (e) {
            this$1._isInitialized = !e;
            this$1._initializeCallbacks = [];
            callbacks.forEach(function (cb) { return cb(e); });
        };
        if (!this._isInitialized) {
            // First call triggers initialization, the rest wait.
            if (callbacks.push(userCb) === 1) {
                var copyDirectory = function (p, mode, cb) {
                    if (p !== '/') {
                        this$1._sync.mkdirSync(p, mode);
                    }
                    this$1._async.readdir(p, function (err, files) {
                        var i = 0;
                        // NOTE: This function must not be in a lexically nested statement,
                        // such as an if or while statement. Safari refuses to run the
                        // script since it is undefined behavior.
                        function copyNextFile(err) {
                            if (err) {
                                cb(err);
                            }
                            else if (i < files.length) {
                                copyItem(path.join(p, files[i]), copyNextFile);
                                i++;
                            }
                            else {
                                cb();
                            }
                        }
                        if (err) {
                            cb(err);
                        }
                        else {
                            copyNextFile();
                        }
                    });
                }, copyFile = function (p, mode, cb) {
                    this$1._async.readFile(p, null, FileFlag.getFileFlag('r'), function (err, data) {
                        if (err) {
                            cb(err);
                        }
                        else {
                            try {
                                this$1._sync.writeFileSync(p, data, null, FileFlag.getFileFlag('w'), mode);
                            }
                            catch (e) {
                                err = e;
                            }
                            finally {
                                cb(err);
                            }
                        }
                    });
                }, copyItem = function (p, cb) {
                    this$1._async.stat(p, false, function (err, stats) {
                        if (err) {
                            cb(err);
                        }
                        else if (stats.isDirectory()) {
                            copyDirectory(p, stats.mode, cb);
                        }
                        else {
                            copyFile(p, stats.mode, cb);
                        }
                    });
                };
                copyDirectory('/', 0, end);
            }
        }
        else {
            userCb();
        }
    };
    AsyncMirror.prototype.enqueueOp = function enqueueOp (op) {
        var this$1 = this;

        this._queue.push(op);
        if (!this._queueRunning) {
            this._queueRunning = true;
            var doNextOp = function (err) {
                if (err) {
                    throw new Error(("WARNING: File system has desynchronized. Received following error: " + err + "\n$"));
                }
                if (this$1._queue.length > 0) {
                    var op = this$1._queue.shift(), args = op.arguments;
                    args.push(doNextOp);
                    this$1._async[op.apiMethod].apply(this$1._async, args);
                }
                else {
                    this$1._queueRunning = false;
                }
            };
            doNextOp();
        }
    };

    return AsyncMirror;
}(SynchronousFileSystem));
AsyncMirror.Name = "AsyncMirror";
AsyncMirror.Options = {
    sync: {
        type: "object",
        description: "The synchronous file system to mirror the asynchronous file system to.",
        validator: function (v, cb) {
            if (v && typeof (v['supportsSynch']) === "function" && v.supportsSynch()) {
                cb();
            }
            else {
                cb(new ApiError(ErrorCode.EINVAL, "'sync' option must be a file system that supports synchronous operations"));
            }
        }
    },
    async: {
        type: "object",
        description: "The asynchronous file system to mirror."
    }
};

/**
 * Contains utility methods for performing a variety of tasks with
 * XmlHttpRequest across browsers.
 */
var xhrIsAvailable = (typeof (XMLHttpRequest) !== "undefined" && XMLHttpRequest !== null);
function asyncDownloadFileModern(p, type, cb) {
    var req = new XMLHttpRequest();
    req.open('GET', p, true);
    var jsonSupported = true;
    switch (type) {
        case 'buffer':
            req.responseType = 'arraybuffer';
            break;
        case 'json':
            // Some browsers don't support the JSON response type.
            // They either reset responseType, or throw an exception.
            // @see https://github.com/Modernizr/Modernizr/blob/master/src/testXhrType.js
            try {
                req.responseType = 'json';
                jsonSupported = req.responseType === 'json';
            }
            catch (e) {
                jsonSupported = false;
            }
            break;
        default:
            return cb(new ApiError(ErrorCode.EINVAL, "Invalid download type: " + type));
    }
    req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                switch (type) {
                    case 'buffer':
                        // XXX: WebKit-based browsers return *null* when XHRing an empty file.
                        return cb(null, req.response ? Buffer.from(req.response) : emptyBuffer());
                    case 'json':
                        if (jsonSupported) {
                            return cb(null, req.response);
                        }
                        else {
                            return cb(null, JSON.parse(req.responseText));
                        }
                }
            }
            else {
                return cb(new ApiError(ErrorCode.EIO, ("XHR error: response returned code " + (req.status))));
            }
        }
    };
    req.send();
}
function syncDownloadFileModern(p, type) {
    var req = new XMLHttpRequest();
    req.open('GET', p, false);
    // On most platforms, we cannot set the responseType of synchronous downloads.
    // @todo Test for this; IE10 allows this, as do older versions of Chrome/FF.
    var data = null;
    var err = null;
    // Classic hack to download binary data as a string.
    req.overrideMimeType('text/plain; charset=x-user-defined');
    req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                switch (type) {
                    case 'buffer':
                        // Convert the text into a buffer.
                        var text = req.responseText;
                        data = Buffer.alloc(text.length);
                        // Throw away the upper bits of each character.
                        for (var i = 0; i < text.length; i++) {
                            // This will automatically throw away the upper bit of each
                            // character for us.
                            data[i] = text.charCodeAt(i);
                        }
                        return;
                    case 'json':
                        data = JSON.parse(req.responseText);
                        return;
                }
            }
            else {
                err = new ApiError(ErrorCode.EIO, ("XHR error: response returned code " + (req.status)));
                return;
            }
        }
    };
    req.send();
    if (err) {
        throw err;
    }
    return data;
}
function syncDownloadFileIE10(p, type) {
    var req = new XMLHttpRequest();
    req.open('GET', p, false);
    switch (type) {
        case 'buffer':
            req.responseType = 'arraybuffer';
            break;
        case 'json':
            // IE10 does not support the JSON type.
            break;
        default:
            throw new ApiError(ErrorCode.EINVAL, "Invalid download type: " + type);
    }
    var data;
    var err;
    req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                switch (type) {
                    case 'buffer':
                        data = Buffer.from(req.response);
                        break;
                    case 'json':
                        data = JSON.parse(req.response);
                        break;
                }
            }
            else {
                err = new ApiError(ErrorCode.EIO, ("XHR error: response returned code " + (req.status)));
            }
        }
    };
    req.send();
    if (err) {
        throw err;
    }
    return data;
}
/**
 * @hidden
 */
function getFileSize(async, p, cb) {
    var req = new XMLHttpRequest();
    req.open('HEAD', p, async);
    req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                try {
                    return cb(null, parseInt(req.getResponseHeader('Content-Length') || '-1', 10));
                }
                catch (e) {
                    // In the event that the header isn't present or there is an error...
                    return cb(new ApiError(ErrorCode.EIO, "XHR HEAD error: Could not read content-length."));
                }
            }
            else {
                return cb(new ApiError(ErrorCode.EIO, ("XHR HEAD error: response returned code " + (req.status))));
            }
        }
    };
    req.send();
}
/**
 * Asynchronously download a file as a buffer or a JSON object.
 * Note that the third function signature with a non-specialized type is
 * invalid, but TypeScript requires it when you specialize string arguments to
 * constants.
 * @hidden
 */
var asyncDownloadFile = asyncDownloadFileModern;
/**
 * Synchronously download a file as a buffer or a JSON object.
 * Note that the third function signature with a non-specialized type is
 * invalid, but TypeScript requires it when you specialize string arguments to
 * constants.
 * @hidden
 */
var syncDownloadFile = (isIE && typeof Blob !== 'undefined') ? syncDownloadFileIE10 : syncDownloadFileModern;
/**
 * Synchronously retrieves the size of the given file in bytes.
 * @hidden
 */
function getFileSizeSync(p) {
    var rv = -1;
    getFileSize(false, p, function (err, size) {
        if (err) {
            throw err;
        }
        rv = size;
    });
    return rv;
}
/**
 * Asynchronously retrieves the size of the given file in bytes.
 * @hidden
 */
function getFileSizeAsync(p, cb) {
    getFileSize(true, p, cb);
}

/**
 * Contains utility methods using 'fetch'.
 */
var fetchIsAvailable = (typeof (fetch) !== "undefined" && fetch !== null);
function fetchFileAsync(p, type, cb) {
    var request;
    try {
        request = fetch(p);
    }
    catch (e) {
        // XXX: fetch will throw a TypeError if the URL has credentials in it
        return cb(new ApiError(ErrorCode.EINVAL, e.message));
    }
    request
        .then(function (res) {
        if (!res.ok) {
            return cb(new ApiError(ErrorCode.EIO, ("fetch error: response returned code " + (res.status))));
        }
        else {
            switch (type) {
                case 'buffer':
                    res.arrayBuffer()
                        .then(function (buf) { return cb(null, Buffer.from(buf)); })
                        .catch(function (err) { return cb(new ApiError(ErrorCode.EIO, err.message)); });
                    break;
                case 'json':
                    res.json()
                        .then(function (json) { return cb(null, json); })
                        .catch(function (err) { return cb(new ApiError(ErrorCode.EIO, err.message)); });
                    break;
                default:
                    cb(new ApiError(ErrorCode.EINVAL, "Invalid download type: " + type));
            }
        }
    })
        .catch(function (err) { return cb(new ApiError(ErrorCode.EIO, err.message)); });
}
/**
 * Asynchronously retrieves the size of the given file in bytes.
 * @hidden
 */
function fetchFileSizeAsync(p, cb) {
    fetch(p, { method: 'HEAD' })
        .then(function (res) {
        if (!res.ok) {
            return cb(new ApiError(ErrorCode.EIO, ("fetch HEAD error: response returned code " + (res.status))));
        }
        else {
            return cb(null, parseInt(res.headers.get('Content-Length') || '-1', 10));
        }
    })
        .catch(function (err) { return cb(new ApiError(ErrorCode.EIO, err.message)); });
}

/**
 * A simple class for storing a filesystem index. Assumes that all paths passed
 * to it are *absolute* paths.
 *
 * Can be used as a partial or a full index, although care must be taken if used
 * for the former purpose, especially when directories are concerned.
 */
var FileIndex = function FileIndex() {
    // _index is a single-level key,value store that maps *directory* paths to
    // DirInodes. File information is only contained in DirInodes themselves.
    this._index = {};
    // Create the root directory.
    this.addPath('/', new DirInode());
};
/**
 * Runs the given function over all files in the index.
 */
FileIndex.fromListing = function fromListing (listing) {
    var idx = new FileIndex();
    // Add a root DirNode.
    var rootInode = new DirInode();
    idx._index['/'] = rootInode;
    var queue = [['', listing, rootInode]];
    while (queue.length > 0) {
        var inode = (void 0);
        var next = queue.pop();
        var pwd = next[0];
        var tree = next[1];
        var parent = next[2];
        for (var node in tree) {
            if (tree.hasOwnProperty(node)) {
                var children = tree[node];
                var name = pwd + "/" + node;
                if (children) {
                    idx._index[name] = inode = new DirInode();
                    queue.push([name, children, inode]);
                }
                else {
                    // This inode doesn't have correct size information, noted with -1.
                    inode = new FileInode(new Stats(FileType.FILE, -1, 0x16D));
                }
                if (parent) {
                    parent._ls[node] = inode;
                }
            }
        }
    }
    return idx;
};
FileIndex.fromUnpkg = function fromUnpkg (listing) {
    var idx = new FileIndex();
    function handleDir(dirPath, entry) {
        var dirInode = new DirInode();
        entry.files.forEach(function (child) {
            var inode;
            if (child.type === 'file') {
                inode = new FileInode(new Stats(FileType.FILE, child.size));
                // @ts-ignore
                dirInode._ls[path.basename(child.path)] = inode;
            }
            else {
                idx._index[child.path] = inode = handleDir(child.path, child);
            }
        });
        return dirInode;
    }
    idx._index['/'] = handleDir('/', listing);
    return idx;
};
FileIndex.fromJSDelivr = function fromJSDelivr (listing) {
    var idx = new FileIndex();
    listing.files.forEach(function (file) {
        var inode = new FileInode(new Stats(FileType.FILE, file.size));
        idx.addPathFast(file.name, inode);
    });
    return idx;
};

FileIndex.prototype.fileIterator = function fileIterator (cb) {
    for (var path in this._index) {
        if (this._index.hasOwnProperty(path)) {
            var dir = this._index[path];
            var files = dir.getListing();
            for (var i = 0, list = files; i < list.length; i += 1) {
                var file = list[i];

                    var item = dir.getItem(file);
                if (isFileInode(item)) {
                    cb(item.getData(), path + '/' + file);
                }
            }
        }
    }
};
/**
 * Adds the given absolute path to the index if it is not already in the index.
 * Creates any needed parent directories.
 * @param path The path to add to the index.
 * @param inode The inode for the
 *   path to add.
 * @return 'True' if it was added or already exists, 'false' if there
 *   was an issue adding it (e.g. item in path is a file, item exists but is
 *   different).
 * @todo If adding fails and implicitly creates directories, we do not clean up
 *   the new empty directories.
 */
FileIndex.prototype.addPath = function addPath (path, inode) {
    if (!inode) {
        throw new Error('Inode must be specified');
    }
    if (path[0] !== '/') {
        throw new Error('Path must be absolute, got: ' + path);
    }
    // Check if it already exists.
    if (this._index.hasOwnProperty(path)) {
        return this._index[path] === inode;
    }
    var splitPath = this._split_path(path);
    var dirpath = splitPath[0];
    var itemname = splitPath[1];
    // Try to add to its parent directory first.
    var parent = this._index[dirpath];
    if (parent === undefined && path !== '/') {
        // Create parent.
        parent = new DirInode();
        if (!this.addPath(dirpath, parent)) {
            return false;
        }
    }
    // Add myself to my parent.
    if (path !== '/') {
        if (!parent.addItem(itemname, inode)) {
            return false;
        }
    }
    // If I'm a directory, add myself to the index.
    if (isDirInode(inode)) {
        this._index[path] = inode;
    }
    return true;
};
/**
 * Adds the given absolute path to the index if it is not already in the index.
 * The path is added without special treatment (no joining of adjacent separators, etc).
 * Creates any needed parent directories.
 * @param path The path to add to the index.
 * @param inode The inode for the
 *   path to add.
 * @return 'True' if it was added or already exists, 'false' if there
 *   was an issue adding it (e.g. item in path is a file, item exists but is
 *   different).
 * @todo If adding fails and implicitly creates directories, we do not clean up
 *   the new empty directories.
 */
FileIndex.prototype.addPathFast = function addPathFast (path, inode) {
    var itemNameMark = path.lastIndexOf('/');
    var parentPath = itemNameMark === 0 ? "/" : path.substring(0, itemNameMark);
    var itemName = path.substring(itemNameMark + 1);
    // Try to add to its parent directory first.
    var parent = this._index[parentPath];
    if (parent === undefined) {
        // Create parent.
        parent = new DirInode();
        this.addPathFast(parentPath, parent);
    }
    if (!parent.addItem(itemName, inode)) {
        return false;
    }
    // If adding a directory, add to the index as well.
    if (inode.isDir()) {
        this._index[path] = inode;
    }
    return true;
};
/**
 * Removes the given path. Can be a file or a directory.
 * @return The removed item,
 *   or null if it did not exist.
 */
FileIndex.prototype.removePath = function removePath (path) {
    var splitPath = this._split_path(path);
    var dirpath = splitPath[0];
    var itemname = splitPath[1];
    // Try to remove it from its parent directory first.
    var parent = this._index[dirpath];
    if (parent === undefined) {
        return null;
    }
    // Remove myself from my parent.
    var inode = parent.remItem(itemname);
    if (inode === null) {
        return null;
    }
    // If I'm a directory, remove myself from the index, and remove my children.
    if (isDirInode(inode)) {
        var children = inode.getListing();
        for (var i = 0, list = children; i < list.length; i += 1) {
            var child = list[i];

                this.removePath(path + '/' + child);
        }
        // Remove the directory from the index, unless it's the root.
        if (path !== '/') {
            delete this._index[path];
        }
    }
    return inode;
};
/**
 * Retrieves the directory listing of the given path.
 * @return An array of files in the given path, or 'null' if it does not exist.
 */
FileIndex.prototype.ls = function ls (path) {
    var item = this._index[path];
    if (item === undefined) {
        return null;
    }
    return item.getListing();
};
/**
 * Returns the inode of the given item.
 * @return Returns null if the item does not exist.
 */
FileIndex.prototype.getInode = function getInode (path) {
    var splitPath = this._split_path(path);
    var dirpath = splitPath[0];
    var itemname = splitPath[1];
    // Retrieve from its parent directory.
    var parent = this._index[dirpath];
    if (parent === undefined) {
        return null;
    }
    // Root case
    if (dirpath === path) {
        return parent;
    }
    return parent.getItem(itemname);
};
/**
 * Split into a (directory path, item name) pair
 */
FileIndex.prototype._split_path = function _split_path (p) {
    var dirpath = path.dirname(p);
    var itemname = p.substr(dirpath.length + (dirpath === "/" ? 0 : 1));
    return [dirpath, itemname];
};
/**
 * Inode for a file. Stores an arbitrary (filesystem-specific) data payload.
 */
var FileInode = function FileInode(data) {
    this.data = data;
};
FileInode.prototype.isFile = function isFile () { return true; };
FileInode.prototype.isDir = function isDir () { return false; };
FileInode.prototype.getData = function getData () { return this.data; };
FileInode.prototype.setData = function setData (data) { this.data = data; };
/**
 * Inode for a directory. Currently only contains the directory listing.
 */
var DirInode = function DirInode(data) {
    if ( data === void 0 ) data = null;

    this.data = data;
    this._ls = {};
};
DirInode.prototype.isFile = function isFile () {
    return false;
};
DirInode.prototype.isDir = function isDir () {
    return true;
};
DirInode.prototype.getData = function getData () { return this.data; };
/**
 * Return a Stats object for this inode.
 * @todo Should probably remove this at some point. This isn't the
 *   responsibility of the FileIndex.
 */
DirInode.prototype.getStats = function getStats () {
    return new Stats(FileType.DIRECTORY, 4096, 0x16D);
};
/**
 * Returns the directory listing for this directory. Paths in the directory are
 * relative to the directory's path.
 * @return The directory listing for this directory.
 */
DirInode.prototype.getListing = function getListing () {
    return Object.keys(this._ls);
};
/**
 * Returns the inode for the indicated item, or null if it does not exist.
 * @param p Name of item in this directory.
 */
DirInode.prototype.getItem = function getItem (p) {
    var item = this._ls[p];
    return item && this._ls.hasOwnProperty(p) ? item : null;
};
/**
 * Add the given item to the directory listing. Note that the given inode is
 * not copied, and will be mutated by the DirInode if it is a DirInode.
 * @param p Item name to add to the directory listing.
 * @param inode The inode for the
 *   item to add to the directory inode.
 * @return True if it was added, false if it already existed.
 */
DirInode.prototype.addItem = function addItem (p, inode) {
    if (p in this._ls) {
        return false;
    }
    this._ls[p] = inode;
    return true;
};
/**
 * Removes the given item from the directory listing.
 * @param p Name of item to remove from the directory listing.
 * @return Returns the item
 *   removed, or null if the item did not exist.
 */
DirInode.prototype.remItem = function remItem (p) {
    var item = this._ls[p];
    if (item === undefined) {
        return null;
    }
    delete this._ls[p];
    return item;
};
/**
 * @hidden
 */
function isFileInode(inode) {
    return !!inode && inode.isFile();
}
/**
 * @hidden
 */
function isDirInode(inode) {
    return !!inode && inode.isDir();
}

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
    throw new ApiError(ErrorCode.ENOTSUP, "Synchronous HTTP download methods are not available in this environment.");
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
var BundledHTTPRequest = /*@__PURE__*/(function (BaseFileSystem) {
    function BundledHTTPRequest(index, bundle, prefixUrl, preferXHR, logReads) {
        if ( bundle === void 0 ) bundle = {};
        if ( prefixUrl === void 0 ) prefixUrl = '';
        if ( preferXHR === void 0 ) preferXHR = false;
        if ( logReads === void 0 ) logReads = false;

        BaseFileSystem.call(this);
        // prefix_url must end in a directory separator.
        if (prefixUrl.length > 0 && prefixUrl.charAt(prefixUrl.length - 1) !== '/') {
            prefixUrl = prefixUrl + '/';
        }
        this.prefixUrl = prefixUrl;
        this._logReads = logReads;
        this._index = FileIndex.fromListing(index);
        this._index.fileIterator(function (file, path) {
            var bundleInfo = bundle[path];
            if (bundleInfo !== undefined) {
                if (typeof bundleInfo === 'number') {
                    file.size = bundleInfo;
                }
                else if (!file.fileData) {
                    var buffer = new Buffer(bundleInfo);
                    file.size = buffer.length;
                    file.fileData = buffer;
                }
            }
        });
        if (fetchIsAvailable && (!preferXHR || !xhrIsAvailable)) {
            this._requestFileAsyncInternal = fetchFileAsync;
            this._requestFileSizeAsyncInternal = fetchFileSizeAsync;
        }
        else {
            this._requestFileAsyncInternal = asyncDownloadFile;
            this._requestFileSizeAsyncInternal = getFileSizeAsync;
        }
        if (xhrIsAvailable) {
            this._requestFileSyncInternal = syncDownloadFile;
            this._requestFileSizeSyncInternal = getFileSizeSync;
        }
        else {
            this._requestFileSyncInternal = syncNotAvailableError;
            this._requestFileSizeSyncInternal = syncNotAvailableError;
        }
    }

    if ( BaseFileSystem ) BundledHTTPRequest.__proto__ = BaseFileSystem;
    BundledHTTPRequest.prototype = Object.create( BaseFileSystem && BaseFileSystem.prototype );
    BundledHTTPRequest.prototype.constructor = BundledHTTPRequest;
    BundledHTTPRequest.Create = function Create (opts, cb) {
        if (opts.index === undefined) {
            opts.index = "index.json";
        }
        if (typeof (opts.index) === "string") {
            asyncDownloadFile(opts.index, "json", function (e, data) {
                if (e) {
                    cb(e);
                }
                else {
                    if (typeof opts.bundle === 'string') {
                        asyncDownloadFile(opts.bundle, "json", function (e, bundleData) {
                            if (e) {
                                console.error("Couldn't preload bundle", e);
                            }
                            cb(null, new BundledHTTPRequest(data, bundleData || {}, opts.baseUrl, opts.preferXHR, opts.logReads));
                        });
                    }
                    else {
                        cb(null, new BundledHTTPRequest(data, (opts.bundle || {}), opts.baseUrl, opts.preferXHR, opts.logReads));
                    }
                }
            });
        }
        else {
            var index = opts.index;
            if (typeof opts.bundle === 'string') {
                asyncDownloadFile(opts.bundle, "json", function (e, bundleData) {
                    if (e) {
                        console.error("Couldn't preload bundle", e);
                    }
                    cb(null, new BundledHTTPRequest(index, bundleData || {}, opts.baseUrl, opts.preferXHR, opts.logReads));
                });
            }
            else {
                cb(null, new BundledHTTPRequest(index, (opts.bundle || {}), opts.baseUrl, opts.preferXHR, opts.logReads));
            }
        }
    };
    BundledHTTPRequest.isAvailable = function isAvailable () {
        return xhrIsAvailable || fetchIsAvailable;
    };

    BundledHTTPRequest.prototype.empty = function empty () {
        this._index.fileIterator(function (file) {
            file.fileData = null;
        });
    };
    BundledHTTPRequest.prototype.getName = function getName () {
        return BundledHTTPRequest.Name;
    };
    BundledHTTPRequest.prototype.diskSpace = function diskSpace (path, cb) {
        // Read-only file system. We could calculate the total space, but that's not
        // important right now.
        cb(0, 0);
    };
    BundledHTTPRequest.prototype.isReadOnly = function isReadOnly () {
        return true;
    };
    BundledHTTPRequest.prototype.supportsLinks = function supportsLinks () {
        return false;
    };
    BundledHTTPRequest.prototype.supportsProps = function supportsProps () {
        return false;
    };
    BundledHTTPRequest.prototype.supportsSynch = function supportsSynch () {
        // Synchronous operations are only available via the XHR interface for now.
        return xhrIsAvailable;
    };
    BundledHTTPRequest.prototype.logRead = function logRead (path, content) {
        var ctx = (self || global);
        ctx.fileReads = ctx.fileReads || {};
        if (!ctx.fileReads[path] || typeof ctx.fileReads[path] === 'number') {
            ctx.fileReads[path] = content;
        }
    };
    /**
     * Special HTTPFS function: Preload the given file into the index.
     * @param [String] path
     * @param [BrowserFS.Buffer] buffer
     */
    BundledHTTPRequest.prototype.preloadFile = function preloadFile (path, buffer) {
        var inode = this._index.getInode(path);
        if (isFileInode(inode)) {
            if (inode === null) {
                throw ApiError.ENOENT(path);
            }
            var stats = inode.getData();
            stats.size = buffer.length;
            stats.fileData = buffer;
        }
        else {
            throw ApiError.EISDIR(path);
        }
    };
    BundledHTTPRequest.prototype.stat = function stat (path, isLstat, cb) {
        var this$1 = this;

        var inode = this._index.getInode(path);
        if (inode === null) {
            return cb(ApiError.ENOENT(path));
        }
        var stats;
        if (isFileInode(inode)) {
            stats = inode.getData();
            // At this point, a non-opened file will still have default stats from the listing.
            if (stats.size < 0) {
                this._requestFileSizeAsync(path, function (e, size) {
                    if (e) {
                        return cb(e);
                    }
                    if (this$1._logReads) {
                        // Log the read
                        this$1.logRead(path, size);
                    }
                    stats.size = size;
                    cb(null, Stats.clone(stats));
                });
            }
            else {
                cb(null, Stats.clone(stats));
            }
        }
        else if (isDirInode(inode)) {
            stats = inode.getStats();
            cb(null, stats);
        }
        else {
            cb(ApiError.FileError(ErrorCode.EINVAL, path));
        }
    };
    BundledHTTPRequest.prototype.statSync = function statSync (path, isLstat) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        var stats;
        if (isFileInode(inode)) {
            stats = inode.getData();
            // At this point, a non-opened file will still have default stats from the listing.
            if (stats.size < 0) {
                var size = this._requestFileSizeSync(path);
                if (this._logReads) {
                    // Log the read
                    this.logRead(path, size);
                }
                stats.size = size;
            }
        }
        else if (isDirInode(inode)) {
            stats = inode.getStats();
        }
        else {
            throw ApiError.FileError(ErrorCode.EINVAL, path);
        }
        return stats;
    };
    BundledHTTPRequest.prototype.open = function open (path, flags, mode, cb) {
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            return cb(new ApiError(ErrorCode.EPERM, path));
        }
        var self = this;
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (inode === null) {
            return cb(ApiError.ENOENT(path));
        }
        if (isFileInode(inode)) {
            var stats = inode.getData();
            switch (flags.pathExistsAction()) {
                case ActionType.THROW_EXCEPTION:
                case ActionType.TRUNCATE_FILE:
                    return cb(ApiError.EEXIST(path));
                case ActionType.NOP:
                    // Use existing file contents.
                    // XXX: Uh, this maintains the previously-used flag.
                    if (stats.fileData) {
                        return cb(null, new NoSyncFile(self, path, flags, Stats.clone(stats), stats.fileData));
                    }
                    // @todo be lazier about actually requesting the file
                    this._requestFileAsync(path, 'buffer', function (err, buffer) {
                        if (err) {
                            return cb(err);
                        }
                        // we don't initially have file sizes
                        stats.size = buffer.length;
                        stats.fileData = buffer;
                        return cb(null, new NoSyncFile(self, path, flags, Stats.clone(stats), buffer));
                    });
                    break;
                default:
                    return cb(new ApiError(ErrorCode.EINVAL, 'Invalid FileMode object.'));
            }
        }
        else {
            return cb(ApiError.EISDIR(path));
        }
    };
    BundledHTTPRequest.prototype.openSync = function openSync (path, flags, mode) {
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            throw new ApiError(ErrorCode.EPERM, path);
        }
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        if (isFileInode(inode)) {
            var stats = inode.getData();
            switch (flags.pathExistsAction()) {
                case ActionType.THROW_EXCEPTION:
                case ActionType.TRUNCATE_FILE:
                    throw ApiError.EEXIST(path);
                case ActionType.NOP:
                    // Use existing file contents.
                    // XXX: Uh, this maintains the previously-used flag.
                    if (stats.fileData) {
                        return new NoSyncFile(this, path, flags, Stats.clone(stats), stats.fileData);
                    }
                    // @todo be lazier about actually requesting the file
                    var buffer = this._requestFileSync(path, 'buffer');
                    // we don't initially have file sizes
                    stats.size = buffer.length;
                    stats.fileData = buffer;
                    return new NoSyncFile(this, path, flags, Stats.clone(stats), buffer);
                default:
                    throw new ApiError(ErrorCode.EINVAL, 'Invalid FileMode object.');
            }
        }
        else {
            throw ApiError.EISDIR(path);
        }
    };
    BundledHTTPRequest.prototype.readdir = function readdir (path, cb) {
        try {
            cb(null, this.readdirSync(path));
        }
        catch (e) {
            cb(e);
        }
    };
    BundledHTTPRequest.prototype.readdirSync = function readdirSync (path) {
        // Check if it exists.
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        else if (isDirInode(inode)) {
            return inode.getListing();
        }
        else {
            throw ApiError.ENOTDIR(path);
        }
    };
    /**
     * We have the entire file as a buffer; optimize readFile.
     */
    BundledHTTPRequest.prototype.readFile = function readFile (fname, encoding, flag, cb) {
        var this$1 = this;

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
            if (this$1._logReads) {
                // Log the read
                this$1.logRead(fname, fdBuff.toString());
            }
            if (encoding === null) {
                cb(err, copyingSlice(fdBuff));
            }
            else {
                tryToString(fdBuff, encoding, cb);
            }
        });
    };
    /**
     * Specially-optimized readfile.
     */
    BundledHTTPRequest.prototype.readFileSync = function readFileSync (fname, encoding, flag) {
        // Get file.
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (this._logReads) {
                // Log the read
                this.logRead(fname, fdBuff.toString());
            }
            if (encoding === null) {
                return copyingSlice(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    BundledHTTPRequest.prototype._getHTTPPath = function _getHTTPPath (filePath) {
        if (filePath.charAt(0) === '/') {
            filePath = filePath.slice(1);
        }
        return this.prefixUrl + filePath;
    };
    BundledHTTPRequest.prototype._requestFileAsync = function _requestFileAsync (p, type, cb) {
        this._requestFileAsyncInternal(this._getHTTPPath(p), type, cb);
    };
    BundledHTTPRequest.prototype._requestFileSync = function _requestFileSync (p, type) {
        return this._requestFileSyncInternal(this._getHTTPPath(p), type);
    };
    /**
     * Only requests the HEAD content, for the file size.
     */
    BundledHTTPRequest.prototype._requestFileSizeAsync = function _requestFileSizeAsync (path, cb) {
        this._requestFileSizeAsyncInternal(this._getHTTPPath(path), cb);
    };
    BundledHTTPRequest.prototype._requestFileSizeSync = function _requestFileSizeSync (path) {
        return this._requestFileSizeSyncInternal(this._getHTTPPath(path));
    };

    return BundledHTTPRequest;
}(BaseFileSystem));
BundledHTTPRequest.Name = "BundledHTTPRequest";
BundledHTTPRequest.Options = {
    index: {
        type: ["string", "object"],
        optional: true,
        description: "URL to a file index as a JSON file or the file index object itself, generated with the make_http_index script. Defaults to `index.json`."
    },
    bundle: {
        type: ["string", "object"],
        optional: true,
        description: "URL to a JSON file with the files preloaded."
    },
    baseUrl: {
        type: "string",
        optional: true,
        description: "Used as the URL prefix for fetched files. Default: Fetch files relative to the index."
    },
    preferXHR: {
        type: "boolean",
        optional: true,
        description: "Whether to prefer XmlHttpRequest or fetch for async operations if both are available. Default: false"
    },
    logReads: {
        type: "boolean",
        optional: true,
        description: "Whether to log all reads of files and put them in an object, this is useful for getting initial bundles that you can put in 'bundle' option. Values are put on `global.readFiles`. Default: false."
    }
};

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
var CodeSandboxFile = /*@__PURE__*/(function (PreloadFile) {
    function CodeSandboxFile(_fs, _path, _flag, _stat, contents) {
        PreloadFile.call(this, _fs, _path, _flag, _stat, contents);
    }

    if ( PreloadFile ) CodeSandboxFile.__proto__ = PreloadFile;
    CodeSandboxFile.prototype = Object.create( PreloadFile && PreloadFile.prototype );
    CodeSandboxFile.prototype.constructor = CodeSandboxFile;
    CodeSandboxFile.prototype.sync = function sync (cb) {
        var this$1 = this;

        if (this.isDirty()) {
            var buffer = this.getBuffer();
            this._fs._sync(this.getPath(), buffer, function (e, stat) {
                if (!e) {
                    this$1.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };
    CodeSandboxFile.prototype.close = function close (cb) {
        this.sync(cb);
    };
    CodeSandboxFile.prototype.syncSync = function syncSync () {
        if (this.isDirty()) {
            this._fs._syncSync(this.getPath(), this.getBuffer());
            this.resetDirty();
        }
    };
    CodeSandboxFile.prototype.closeSync = function closeSync () {
        this.syncSync();
    };

    return CodeSandboxFile;
}(PreloadFile));
var CodeSandboxEditorFS = /*@__PURE__*/(function (SynchronousFileSystem) {
    function CodeSandboxEditorFS(api) {
        SynchronousFileSystem.call(this);
        this.api = api;
    }

    if ( SynchronousFileSystem ) CodeSandboxEditorFS.__proto__ = SynchronousFileSystem;
    CodeSandboxEditorFS.prototype = Object.create( SynchronousFileSystem && SynchronousFileSystem.prototype );
    CodeSandboxEditorFS.prototype.constructor = CodeSandboxEditorFS;
    CodeSandboxEditorFS.Create = function Create (options, cb) {
        cb(null, new CodeSandboxEditorFS(options.api));
    };
    CodeSandboxEditorFS.isAvailable = function isAvailable () {
        return true;
    };

    CodeSandboxEditorFS.prototype.getName = function getName () {
        return 'CodeSandboxEditorFS';
    };
    CodeSandboxEditorFS.prototype.isReadOnly = function isReadOnly () {
        return false;
    };
    CodeSandboxEditorFS.prototype.supportsProps = function supportsProps () {
        return false;
    };
    CodeSandboxEditorFS.prototype.supportsSynch = function supportsSynch () {
        return true;
    };
    CodeSandboxEditorFS.prototype.empty = function empty (mainCb) {
        throw new Error('Empty not supported');
    };
    CodeSandboxEditorFS.prototype.renameSync = function renameSync (oldPath, newPath) {
        throw new Error('Rename not supported');
    };
    CodeSandboxEditorFS.prototype.statSync = function statSync (p, isLstate) {
        var modules = this.api.getSandboxFs();
        var moduleInfo = modules[p];
        if (!moduleInfo) {
            var modulesStartingWithPath = Object.keys(modules).filter(function (pa) { return pa.startsWith(p.endsWith('/') ? p : p + '/') || pa === p; });
            if (modulesStartingWithPath.length > 0) {
                return new Stats(FileType.DIRECTORY, 0);
            }
            else {
                throw ApiError.FileError(ErrorCode.ENOENT, p);
            }
        }
        if (moduleInfo.type === 'directory') {
            return new Stats(FileType.DIRECTORY, 4096, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
        }
        else {
            return new Stats(FileType.FILE, getCode(moduleInfo.savedCode, moduleInfo.code).length, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
        }
    };
    CodeSandboxEditorFS.prototype.createFileSync = function createFileSync (p, flag, mode) {
        throw new Error('Create file not supported');
    };
    CodeSandboxEditorFS.prototype.open = function open (p, flag, mode, cb) {
        var this$1 = this;

        var moduleInfo = this.api.getSandboxFs()[p];
        if (!moduleInfo) {
            cb(ApiError.ENOENT(p));
            return;
        }
        if (moduleInfo.type === 'directory') {
            var stats = new Stats(FileType.DIRECTORY, 4096, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
            cb(null, new CodeSandboxFile(this, p, flag, stats));
        }
        else {
            var isBinary = moduleInfo.isBinary;
            var savedCode = moduleInfo.savedCode;
            var code = moduleInfo.code;
            if (isBinary) {
                var url = getCode(savedCode, code);
                var jwt = this.api.getJwt && this.api.getJwt();
                var sendAuth = jwt && new URL(url).origin === document.location.origin;
                var headers = sendAuth ? {
                    Authorization: ("Bearer " + (this.api.getJwt && this.api.getJwt()))
                } : {};
                fetch(url, { headers: headers }).then(function (x) { return x.blob(); }).then(function (blob) {
                    var stats = new Stats(FileType.FILE, blob.size, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
                    blobToBuffer(blob, function (err, r) {
                        if (err) {
                            cb(err);
                            return;
                        }
                        cb(undefined, new CodeSandboxFile(this$1, p, flag, stats, r));
                    });
                });
                return;
            }
            var buffer = Buffer.from(getCode(savedCode, code));
            var stats$1 = new Stats(FileType.FILE, buffer.length, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
            cb(null, new CodeSandboxFile(this, p, flag, stats$1, buffer));
        }
    };
    CodeSandboxEditorFS.prototype.openFileSync = function openFileSync (p, flag, mode) {
        var moduleInfo = this.api.getSandboxFs()[p];
        if (!moduleInfo) {
            throw ApiError.ENOENT(p);
        }
        if (moduleInfo.type === 'directory') {
            var stats = new Stats(FileType.DIRECTORY, 4096, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
            return new CodeSandboxFile(this, p, flag, stats);
        }
        else {
            var savedCode = moduleInfo.savedCode;
            var code = moduleInfo.code;
            var buffer = Buffer.from(getCode(savedCode, code));
            var stats$1 = new Stats(FileType.FILE, buffer.length, undefined, +new Date(), +new Date(moduleInfo.updatedAt), +new Date(moduleInfo.insertedAt));
            return new CodeSandboxFile(this, p, flag, stats$1, buffer);
        }
    };
    CodeSandboxEditorFS.prototype.writeFileSync = function writeFileSync () {
        // Stubbed
    };
    CodeSandboxEditorFS.prototype.rmdirSync = function rmdirSync (p) {
        // Stubbed
    };
    CodeSandboxEditorFS.prototype.mkdirSync = function mkdirSync (p) {
        // Stubbed
    };
    CodeSandboxEditorFS.prototype.unlinkSync = function unlinkSync (p) {
        // Stubbed
    };
    CodeSandboxEditorFS.prototype.readdirSync = function readdirSync (path) {
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
    CodeSandboxEditorFS.prototype._sync = function _sync (p, data, cb) {
        // Stubbed
        cb(null, undefined);
    };
    CodeSandboxEditorFS.prototype._syncSync = function _syncSync (p, data) {
        // Stubbed
    };

    return CodeSandboxEditorFS;
}(SynchronousFileSystem));
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
                cb(new ApiError(ErrorCode.EINVAL, 'Manager is invalid'));
            }
        },
    },
};

var CodeSandboxFile$1 = /*@__PURE__*/(function (PreloadFile) {
    function CodeSandboxFile(_fs, _path, _flag, _stat, contents) {
        PreloadFile.call(this, _fs, _path, _flag, _stat, contents);
    }

    if ( PreloadFile ) CodeSandboxFile.__proto__ = PreloadFile;
    CodeSandboxFile.prototype = Object.create( PreloadFile && PreloadFile.prototype );
    CodeSandboxFile.prototype.constructor = CodeSandboxFile;
    CodeSandboxFile.prototype.sync = function sync (cb) {
        var this$1 = this;

        if (this.isDirty()) {
            var buffer = this.getBuffer();
            this._fs._sync(this.getPath(), buffer, function (e, stat) {
                if (!e) {
                    this$1.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };
    CodeSandboxFile.prototype.close = function close (cb) {
        this.sync(cb);
    };
    CodeSandboxFile.prototype.syncSync = function syncSync () {
        if (this.isDirty()) {
            this._fs._syncSync(this.getPath(), this.getBuffer());
            this.resetDirty();
        }
    };
    CodeSandboxFile.prototype.closeSync = function closeSync () {
        this.syncSync();
    };

    return CodeSandboxFile;
}(PreloadFile));
var CodeSandboxFS = /*@__PURE__*/(function (SynchronousFileSystem) {
    function CodeSandboxFS(manager) {
        SynchronousFileSystem.call(this);
        this.manager = manager;
    }

    if ( SynchronousFileSystem ) CodeSandboxFS.__proto__ = SynchronousFileSystem;
    CodeSandboxFS.prototype = Object.create( SynchronousFileSystem && SynchronousFileSystem.prototype );
    CodeSandboxFS.prototype.constructor = CodeSandboxFS;
    CodeSandboxFS.Create = function Create (options, cb) {
        cb(null, new CodeSandboxFS(options.manager));
    };
    CodeSandboxFS.isAvailable = function isAvailable () {
        return true;
    };

    CodeSandboxFS.prototype.getName = function getName () {
        return "CodeSandboxFS";
    };
    CodeSandboxFS.prototype.isReadOnly = function isReadOnly () {
        return false;
    };
    CodeSandboxFS.prototype.supportsProps = function supportsProps () {
        return false;
    };
    CodeSandboxFS.prototype.supportsSynch = function supportsSynch () {
        return true;
    };
    CodeSandboxFS.prototype.empty = function empty (mainCb) {
        var this$1 = this;

        var tModules = this.manager.getTranspiledModules();
        Object.keys(tModules).forEach(function (pa) {
            this$1.manager.removeModule(tModules[pa].module);
        });
        mainCb();
    };
    CodeSandboxFS.prototype.renameSync = function renameSync (oldPath, newPath) {
        var this$1 = this;

        var tModules = this.manager.getTranspiledModules();
        var modulesWithPath = Object.keys(tModules).filter(function (p) { return p.startsWith(oldPath) + "/" || false; });
        if (modulesWithPath.length === 0) {
            throw ApiError.FileError(ErrorCode.ENOENT, oldPath);
        }
        modulesWithPath
            .map(function (p) { return ({ path: p, moduleInfo: tModules[p] }); })
            .forEach(function (ref) {
            var path = ref.path;
            var moduleInfo = ref.moduleInfo;

            var module = moduleInfo.module;
            this$1.manager.moveModule(module, path.replace(oldPath, newPath));
        });
    };
    CodeSandboxFS.prototype.statSync = function statSync (p, isLstate) {
        var tModules = this.manager.getTranspiledModules();
        var moduleInfo = tModules[p];
        if (!moduleInfo) {
            var modulesStartingWithPath = Object.keys(tModules).filter(function (pa) { return pa.startsWith(p.endsWith("/") ? p : p + "/") || pa === p; });
            if (modulesStartingWithPath.length > 0) {
                return new Stats(FileType.DIRECTORY, 0);
            }
            else {
                throw ApiError.FileError(ErrorCode.ENOENT, p);
            }
        }
        var stats = new Stats(FileType.FILE, Buffer.byteLength(moduleInfo.module.code || '', 'utf8'));
        return stats;
    };
    CodeSandboxFS.prototype.createFileSync = function createFileSync (p, flag, mode) {
        if (p === "/") {
            throw ApiError.EEXIST(p);
        }
        if (this.manager.getTranspiledModules()[p]) {
            throw ApiError.EEXIST(p);
        }
        var module = {
            path: p,
            code: ""
        };
        this.manager.addModule(module);
        var buffer = Buffer.from(module.code || "");
        var stats = new Stats(FileType.FILE, buffer.length);
        return new CodeSandboxFile$1(this, p, flag, stats, buffer);
    };
    CodeSandboxFS.prototype.openFileSync = function openFileSync (p, flag, mode) {
        var moduleInfo = this.manager.getTranspiledModules()[p];
        if (!moduleInfo) {
            throw ApiError.ENOENT(p);
        }
        var ref = moduleInfo.module;
        var code = ref.code; if ( code === void 0 ) code = "";
        var buffer = Buffer.from(code || "");
        var stats = new Stats(FileType.FILE, buffer.length);
        return new CodeSandboxFile$1(this, p, flag, stats, buffer);
    };
    CodeSandboxFS.prototype.rmdirSync = function rmdirSync (p) {
        var this$1 = this;

        var tModules = this.manager.getTranspiledModules();
        Object.keys(tModules)
            .filter(function (pa) { return pa.startsWith(p + "/") || p === pa; })
            .forEach(function (pa) {
            var ref = tModules[pa];
            var module = ref.module;
            this$1.manager.removeModule(module);
        });
    };
    CodeSandboxFS.prototype.mkdirSync = function mkdirSync (p) {
        // CodeSandbox Manager doesn't have the concept of directories, like git.
        // For now we will do nothing, as we pretend that every directory already exists.
    };
    CodeSandboxFS.prototype.readdirSync = function readdirSync (path) {
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
    CodeSandboxFS.prototype._sync = function _sync (p, data, cb) {
        var this$1 = this;

        var parent = path.dirname(p);
        this.stat(parent, false, function (error, stat) {
            if (error) {
                cb(ApiError.FileError(ErrorCode.ENOENT, parent));
            }
            else {
                var module = this$1.manager.getTranspiledModules()[p].module;
                this$1.manager.updateModule(module);
                cb(null);
            }
        });
    };
    CodeSandboxFS.prototype._syncSync = function _syncSync (p, data) {
        var parent = path.dirname(p);
        this.statSync(parent, false);
        var module = this.manager.getTranspiledModules()[p].module;
        this.manager.updateModule(module);
    };

    return CodeSandboxFS;
}(SynchronousFileSystem));
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
                cb(new ApiError(ErrorCode.EINVAL, "Manager is invalid"));
            }
        }
    }
};

/**
 * Try to convert the given buffer into a string, and pass it to the callback.
 * Optimization that removes the needed try/catch into a helper function, as
 * this is an uncommon case.
 * @hidden
 */
function tryToString$1(buff, encoding, cb) {
    try {
        cb(null, buff.toString(encoding));
    }
    catch (e) {
        cb(e);
    }
}
function syncNotAvailableError$1() {
    throw new ApiError(ErrorCode.ENOTSUP, "Synchronous HTTP download methods are not available in this environment.");
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
var DynamicHTTPRequest = /*@__PURE__*/(function (BaseFileSystem) {
    function DynamicHTTPRequest(prefixUrl, preferXHR) {
        if ( prefixUrl === void 0 ) prefixUrl = '';
        if ( preferXHR === void 0 ) preferXHR = false;

        BaseFileSystem.call(this);
        // prefix_url must end in a directory separator.
        if (prefixUrl.length > 0 && prefixUrl.charAt(prefixUrl.length - 1) !== '/') {
            prefixUrl = prefixUrl + '/';
        }
        this.prefixUrl = prefixUrl;
        if (fetchIsAvailable && (!preferXHR || !xhrIsAvailable)) {
            this._requestFileAsyncInternal = fetchFileAsync;
            // this._requestFileSizeAsyncInternal = fetchFileSizeAsync;
        }
        else {
            this._requestFileAsyncInternal = asyncDownloadFile;
            // this._requestFileSizeAsyncInternal = getFileSizeAsync;
        }
        if (xhrIsAvailable) {
            this._requestFileSyncInternal = syncDownloadFile;
            // this._requestFileSizeSyncInternal = getFileSizeSync;
        }
        else {
            this._requestFileSyncInternal = syncNotAvailableError$1;
            // this._requestFileSizeSyncInternal = syncNotAvailableError;
        }
    }

    if ( BaseFileSystem ) DynamicHTTPRequest.__proto__ = BaseFileSystem;
    DynamicHTTPRequest.prototype = Object.create( BaseFileSystem && BaseFileSystem.prototype );
    DynamicHTTPRequest.prototype.constructor = DynamicHTTPRequest;
    DynamicHTTPRequest.Create = function Create (opts, cb) {
        cb(null, new DynamicHTTPRequest(opts.baseUrl));
    };
    DynamicHTTPRequest.isAvailable = function isAvailable () {
        return xhrIsAvailable || fetchIsAvailable;
    };

    DynamicHTTPRequest.prototype.convertAPIError = function convertAPIError (error) {
        return new ApiError(error.errno, error.message, error.path);
    };
    DynamicHTTPRequest.prototype.empty = function empty () {
        // this._index.fileIterator(function(file: Stats) {
        //   file.fileData = null;
        // });
    };
    DynamicHTTPRequest.prototype.getName = function getName () {
        return DynamicHTTPRequest.Name;
    };
    DynamicHTTPRequest.prototype.diskSpace = function diskSpace (path, cb) {
        // Read-only file system. We could calculate the total space, but that's not
        // important right now.
        cb(0, 0);
    };
    DynamicHTTPRequest.prototype.isReadOnly = function isReadOnly () {
        return true;
    };
    DynamicHTTPRequest.prototype.supportsLinks = function supportsLinks () {
        return false;
    };
    DynamicHTTPRequest.prototype.supportsProps = function supportsProps () {
        return false;
    };
    DynamicHTTPRequest.prototype.supportsSynch = function supportsSynch () {
        // Synchronous operations are only available via the XHR interface for now.
        return xhrIsAvailable;
    };
    DynamicHTTPRequest.prototype.stat = function stat (path, isLstat, cb) {
        var this$1 = this;

        this._requestFileAsync(path + '?stat', 'json', function (err, data) {
            if (err || data.error) {
                cb(err || this$1.convertAPIError(data.error));
            }
            else {
                cb(null, Stats.fromBuffer(Buffer.from(data.stats)));
            }
        });
    };
    DynamicHTTPRequest.prototype.statSync = function statSync (path, isLstat) {
        var data = this._requestFileSync(path + '?stat', 'json');
        if (data.error) {
            throw this.convertAPIError(data.error);
        }
        return Stats.fromBuffer(Buffer.from(data.stats));
    };
    DynamicHTTPRequest.prototype.open = function open (path, flags, mode, cb) {
        var this$1 = this;

        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            return cb(new ApiError(ErrorCode.EPERM, path));
        }
        var self = this;
        this._requestFileAsync(path, 'json', function (err, data) {
            if (err || data.error) {
                return cb(err || this$1.convertAPIError(data.error));
            }
            return cb(null, new NoSyncFile(self, path, flags, Stats.fromBuffer(Buffer.from(data.stats)), Buffer.from(data.result)));
        });
    };
    DynamicHTTPRequest.prototype.openSync = function openSync (path, flags, mode) {
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            throw new ApiError(ErrorCode.EPERM, path);
        }
        var self = this;
        var data = this._requestFileSync(path, 'json');
        if (data.error) {
            throw this.convertAPIError(data.error);
        }
        return new NoSyncFile(self, path, flags, Stats.fromBuffer(Buffer.from(data.stats)), Buffer.from(data.result));
    };
    DynamicHTTPRequest.prototype.readdir = function readdir (path, cb) {
        try {
            cb(null, this.readdirSync(path));
        }
        catch (e) {
            cb(e);
        }
    };
    DynamicHTTPRequest.prototype.readdirSync = function readdirSync (path) {
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
    DynamicHTTPRequest.prototype.readFile = function readFile (fname, encoding, flag, cb) {
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
                cb(err, copyingSlice(fdBuff));
            }
            else {
                tryToString$1(fdBuff, encoding, cb);
            }
        });
    };
    /**
     * Specially-optimized readfile.
     */
    DynamicHTTPRequest.prototype.readFileSync = function readFileSync (fname, encoding, flag) {
        // Get file.
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                return copyingSlice(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    DynamicHTTPRequest.prototype._getHTTPPath = function _getHTTPPath (filePath) {
        if (filePath.charAt(0) === '/') {
            filePath = filePath.slice(1);
        }
        return this.prefixUrl + filePath;
    };
    DynamicHTTPRequest.prototype._requestFileAsync = function _requestFileAsync (p, type, cb) {
        this._requestFileAsyncInternal(this._getHTTPPath(p), type, cb);
    };
    DynamicHTTPRequest.prototype._requestFileSync = function _requestFileSync (p, type) {
        return this._requestFileSyncInternal(this._getHTTPPath(p), type);
    };

    return DynamicHTTPRequest;
}(BaseFileSystem));
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

/**
 * The FolderAdapter file system wraps a file system, and scopes all interactions to a subfolder of that file system.
 *
 * Example: Given a file system `foo` with folder `bar` and file `bar/baz`...
 *
 * ```javascript
 * BrowserFS.configure({
 *   fs: "FolderAdapter",
 *   options: {
 *     folder: "bar",
 *     wrapped: foo
 *   }
 * }, function(e) {
 *   var fs = BrowserFS.BFSRequire('fs');
 *   fs.readdirSync('/'); // ['baz']
 * });
 * ```
 */
var FolderAdapter = /*@__PURE__*/(function (BaseFileSystem) {
    function FolderAdapter(folder, wrapped) {
        BaseFileSystem.call(this);
        this._folder = folder;
        this._wrapped = wrapped;
    }

    if ( BaseFileSystem ) FolderAdapter.__proto__ = BaseFileSystem;
    FolderAdapter.prototype = Object.create( BaseFileSystem && BaseFileSystem.prototype );
    FolderAdapter.prototype.constructor = FolderAdapter;
    FolderAdapter.Create = function Create (opts, cb) {
        var fa = new FolderAdapter(opts.folder, opts.wrapped);
        fa._initialize(function (e) {
            if (e) {
                cb(e);
            }
            else {
                cb(null, fa);
            }
        });
    };
    FolderAdapter.isAvailable = function isAvailable () {
        return true;
    };

    FolderAdapter.prototype.getName = function getName () { return this._wrapped.getName(); };
    FolderAdapter.prototype.isReadOnly = function isReadOnly () { return this._wrapped.isReadOnly(); };
    FolderAdapter.prototype.supportsProps = function supportsProps () { return this._wrapped.supportsProps(); };
    FolderAdapter.prototype.supportsSynch = function supportsSynch () { return this._wrapped.supportsSynch(); };
    FolderAdapter.prototype.supportsLinks = function supportsLinks () { return false; };
    /**
     * Initialize the file system. Ensures that the wrapped file system
     * has the given folder.
     */
    FolderAdapter.prototype._initialize = function _initialize (cb) {
        var this$1 = this;

        this._wrapped.exists(this._folder, function (exists) {
            if (exists) {
                cb();
            }
            else if (this$1._wrapped.isReadOnly()) {
                cb(ApiError.ENOENT(this$1._folder));
            }
            else {
                this$1._wrapped.mkdir(this$1._folder, 0x1ff, cb);
            }
        });
    };

    return FolderAdapter;
}(BaseFileSystem));
FolderAdapter.Name = "FolderAdapter";
FolderAdapter.Options = {
    folder: {
        type: "string",
        description: "The folder to use as the root directory"
    },
    wrapped: {
        type: "object",
        description: "The file system to wrap"
    }
};
/**
 * @hidden
 */
function translateError(folder, e) {
    if (e !== null && typeof e === 'object') {
        var err = e;
        var p = err.path;
        if (p) {
            p = '/' + path.relative(folder, p);
            err.message = err.message.replace(err.path, p);
            err.path = p;
        }
    }
    return e;
}
/**
 * @hidden
 */
function wrapCallback(folder, cb) {
    if (typeof cb === 'function') {
        return function (err) {
            if (arguments.length > 0) {
                arguments[0] = translateError(folder, err);
            }
            cb.apply(null, arguments);
        };
    }
    else {
        return cb;
    }
}
/**
 * @hidden
 */
function wrapFunction(name, wrapFirst, wrapSecond) {
    if (name.slice(name.length - 4) !== 'Sync') {
        // Async function. Translate error in callback.
        return function () {
            if (arguments.length > 0) {
                if (wrapFirst) {
                    arguments[0] = path.join(this._folder, arguments[0]);
                }
                if (wrapSecond) {
                    arguments[1] = path.join(this._folder, arguments[1]);
                }
                arguments[arguments.length - 1] = wrapCallback(this._folder, arguments[arguments.length - 1]);
            }
            return this._wrapped[name].apply(this._wrapped, arguments);
        };
    }
    else {
        // Sync function. Translate error in catch.
        return function () {
            try {
                if (wrapFirst) {
                    arguments[0] = path.join(this._folder, arguments[0]);
                }
                if (wrapSecond) {
                    arguments[1] = path.join(this._folder, arguments[1]);
                }
                return this._wrapped[name].apply(this._wrapped, arguments);
            }
            catch (e) {
                throw translateError(this._folder, e);
            }
        };
    }
}
// First argument is a path.
['diskSpace', 'stat', 'statSync', 'open', 'openSync', 'unlink', 'unlinkSync',
    'rmdir', 'rmdirSync', 'mkdir', 'mkdirSync', 'readdir', 'readdirSync', 'exists',
    'existsSync', 'realpath', 'realpathSync', 'truncate', 'truncateSync', 'readFile',
    'readFileSync', 'writeFile', 'writeFileSync', 'appendFile', 'appendFileSync',
    'chmod', 'chmodSync', 'chown', 'chownSync', 'utimes', 'utimesSync', 'readlink',
    'readlinkSync'].forEach(function (name) {
    FolderAdapter.prototype[name] = wrapFunction(name, true, false);
});
// First and second arguments are paths.
['rename', 'renameSync', 'link', 'linkSync', 'symlink', 'symlinkSync'].forEach(function (name) {
    FolderAdapter.prototype[name] = wrapFunction(name, true, true);
});

/**
 * Try to convert the given buffer into a string, and pass it to the callback.
 * Optimization that removes the needed try/catch into a helper function, as
 * this is an uncommon case.
 * @hidden
 */
function tryToString$2(buff, encoding, cb) {
    try {
        cb(null, buff.toString(encoding));
    }
    catch (e) {
        cb(e);
    }
}
function syncNotAvailableError$2() {
    throw new ApiError(ErrorCode.ENOTSUP, "Synchronous HTTP download methods are not available in this environment.");
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
var HTTPRequest = /*@__PURE__*/(function (BaseFileSystem) {
    function HTTPRequest(index, prefixUrl, preferXHR) {
        if ( prefixUrl === void 0 ) prefixUrl = '';
        if ( preferXHR === void 0 ) preferXHR = false;

        BaseFileSystem.call(this);
        // prefix_url must end in a directory separator.
        if (prefixUrl.length > 0 && prefixUrl.charAt(prefixUrl.length - 1) !== '/') {
            prefixUrl = prefixUrl + '/';
        }
        this.prefixUrl = prefixUrl;
        this._index = FileIndex.fromListing(index);
        if (fetchIsAvailable && (!preferXHR || !xhrIsAvailable)) {
            this._requestFileAsyncInternal = fetchFileAsync;
            this._requestFileSizeAsyncInternal = fetchFileSizeAsync;
        }
        else {
            this._requestFileAsyncInternal = asyncDownloadFile;
            this._requestFileSizeAsyncInternal = getFileSizeAsync;
        }
        if (xhrIsAvailable) {
            this._requestFileSyncInternal = syncDownloadFile;
            this._requestFileSizeSyncInternal = getFileSizeSync;
        }
        else {
            this._requestFileSyncInternal = syncNotAvailableError$2;
            this._requestFileSizeSyncInternal = syncNotAvailableError$2;
        }
    }

    if ( BaseFileSystem ) HTTPRequest.__proto__ = BaseFileSystem;
    HTTPRequest.prototype = Object.create( BaseFileSystem && BaseFileSystem.prototype );
    HTTPRequest.prototype.constructor = HTTPRequest;
    HTTPRequest.Create = function Create (opts, cb) {
        if (opts.index === undefined) {
            opts.index = "index.json";
        }
        if (typeof (opts.index) === "string") {
            asyncDownloadFile(opts.index, "json", function (e, data) {
                if (e) {
                    cb(e);
                }
                else {
                    cb(null, new HTTPRequest(data, opts.baseUrl));
                }
            });
        }
        else {
            cb(null, new HTTPRequest(opts.index, opts.baseUrl));
        }
    };
    HTTPRequest.isAvailable = function isAvailable () {
        return xhrIsAvailable || fetchIsAvailable;
    };

    HTTPRequest.prototype.empty = function empty () {
        this._index.fileIterator(function (file) {
            file.fileData = null;
        });
    };
    HTTPRequest.prototype.getName = function getName () {
        return HTTPRequest.Name;
    };
    HTTPRequest.prototype.diskSpace = function diskSpace (path, cb) {
        // Read-only file system. We could calculate the total space, but that's not
        // important right now.
        cb(0, 0);
    };
    HTTPRequest.prototype.isReadOnly = function isReadOnly () {
        return true;
    };
    HTTPRequest.prototype.supportsLinks = function supportsLinks () {
        return false;
    };
    HTTPRequest.prototype.supportsProps = function supportsProps () {
        return false;
    };
    HTTPRequest.prototype.supportsSynch = function supportsSynch () {
        // Synchronous operations are only available via the XHR interface for now.
        return xhrIsAvailable;
    };
    /**
     * Special HTTPFS function: Preload the given file into the index.
     * @param [String] path
     * @param [BrowserFS.Buffer] buffer
     */
    HTTPRequest.prototype.preloadFile = function preloadFile (path, buffer) {
        var inode = this._index.getInode(path);
        if (isFileInode(inode)) {
            if (inode === null) {
                throw ApiError.ENOENT(path);
            }
            var stats = inode.getData();
            stats.size = buffer.length;
            stats.fileData = buffer;
        }
        else {
            throw ApiError.EISDIR(path);
        }
    };
    HTTPRequest.prototype.stat = function stat (path, isLstat, cb) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            return cb(ApiError.ENOENT(path));
        }
        var stats;
        if (isFileInode(inode)) {
            stats = inode.getData();
            // At this point, a non-opened file will still have default stats from the listing.
            if (stats.size < 0) {
                this._requestFileSizeAsync(path, function (e, size) {
                    if (e) {
                        return cb(e);
                    }
                    stats.size = size;
                    cb(null, Stats.clone(stats));
                });
            }
            else {
                cb(null, Stats.clone(stats));
            }
        }
        else if (isDirInode(inode)) {
            stats = inode.getStats();
            cb(null, stats);
        }
        else {
            cb(ApiError.FileError(ErrorCode.EINVAL, path));
        }
    };
    HTTPRequest.prototype.statSync = function statSync (path, isLstat) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        var stats;
        if (isFileInode(inode)) {
            stats = inode.getData();
            // At this point, a non-opened file will still have default stats from the listing.
            if (stats.size < 0) {
                stats.size = this._requestFileSizeSync(path);
            }
        }
        else if (isDirInode(inode)) {
            stats = inode.getStats();
        }
        else {
            throw ApiError.FileError(ErrorCode.EINVAL, path);
        }
        return stats;
    };
    HTTPRequest.prototype.open = function open (path, flags, mode, cb) {
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            return cb(new ApiError(ErrorCode.EPERM, path));
        }
        var self = this;
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (inode === null) {
            return cb(ApiError.ENOENT(path));
        }
        if (isFileInode(inode)) {
            var stats = inode.getData();
            switch (flags.pathExistsAction()) {
                case ActionType.THROW_EXCEPTION:
                case ActionType.TRUNCATE_FILE:
                    return cb(ApiError.EEXIST(path));
                case ActionType.NOP:
                    // Use existing file contents.
                    // XXX: Uh, this maintains the previously-used flag.
                    if (stats.fileData) {
                        return cb(null, new NoSyncFile(self, path, flags, Stats.clone(stats), stats.fileData));
                    }
                    // @todo be lazier about actually requesting the file
                    this._requestFileAsync(path, 'buffer', function (err, buffer) {
                        if (err) {
                            return cb(err);
                        }
                        // we don't initially have file sizes
                        stats.size = buffer.length;
                        stats.fileData = buffer;
                        return cb(null, new NoSyncFile(self, path, flags, Stats.clone(stats), buffer));
                    });
                    break;
                default:
                    return cb(new ApiError(ErrorCode.EINVAL, 'Invalid FileMode object.'));
            }
        }
        else {
            return cb(ApiError.EISDIR(path));
        }
    };
    HTTPRequest.prototype.openSync = function openSync (path, flags, mode) {
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            throw new ApiError(ErrorCode.EPERM, path);
        }
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        if (isFileInode(inode)) {
            var stats = inode.getData();
            switch (flags.pathExistsAction()) {
                case ActionType.THROW_EXCEPTION:
                case ActionType.TRUNCATE_FILE:
                    throw ApiError.EEXIST(path);
                case ActionType.NOP:
                    // Use existing file contents.
                    // XXX: Uh, this maintains the previously-used flag.
                    if (stats.fileData) {
                        return new NoSyncFile(this, path, flags, Stats.clone(stats), stats.fileData);
                    }
                    // @todo be lazier about actually requesting the file
                    var buffer = this._requestFileSync(path, 'buffer');
                    // we don't initially have file sizes
                    stats.size = buffer.length;
                    stats.fileData = buffer;
                    return new NoSyncFile(this, path, flags, Stats.clone(stats), buffer);
                default:
                    throw new ApiError(ErrorCode.EINVAL, 'Invalid FileMode object.');
            }
        }
        else {
            throw ApiError.EISDIR(path);
        }
    };
    HTTPRequest.prototype.readdir = function readdir (path, cb) {
        try {
            cb(null, this.readdirSync(path));
        }
        catch (e) {
            cb(e);
        }
    };
    HTTPRequest.prototype.readdirSync = function readdirSync (path) {
        // Check if it exists.
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        else if (isDirInode(inode)) {
            return inode.getListing();
        }
        else {
            throw ApiError.ENOTDIR(path);
        }
    };
    /**
     * We have the entire file as a buffer; optimize readFile.
     */
    HTTPRequest.prototype.readFile = function readFile (fname, encoding, flag, cb) {
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
                cb(err, copyingSlice(fdBuff));
            }
            else {
                tryToString$2(fdBuff, encoding, cb);
            }
        });
    };
    /**
     * Specially-optimized readfile.
     */
    HTTPRequest.prototype.readFileSync = function readFileSync (fname, encoding, flag) {
        // Get file.
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                return copyingSlice(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    HTTPRequest.prototype._getHTTPPath = function _getHTTPPath (filePath) {
        if (filePath.charAt(0) === '/') {
            filePath = filePath.slice(1);
        }
        return this.prefixUrl + filePath;
    };
    HTTPRequest.prototype._requestFileAsync = function _requestFileAsync (p, type, cb) {
        this._requestFileAsyncInternal(this._getHTTPPath(p), type, cb);
    };
    HTTPRequest.prototype._requestFileSync = function _requestFileSync (p, type) {
        return this._requestFileSyncInternal(this._getHTTPPath(p), type);
    };
    /**
     * Only requests the HEAD content, for the file size.
     */
    HTTPRequest.prototype._requestFileSizeAsync = function _requestFileSizeAsync (path, cb) {
        this._requestFileSizeAsyncInternal(this._getHTTPPath(path), cb);
    };
    HTTPRequest.prototype._requestFileSizeSync = function _requestFileSizeSync (path) {
        return this._requestFileSizeSyncInternal(this._getHTTPPath(path));
    };

    return HTTPRequest;
}(BaseFileSystem));
HTTPRequest.Name = "HTTPRequest";
HTTPRequest.Options = {
    index: {
        type: ["string", "object"],
        optional: true,
        description: "URL to a file index as a JSON file or the file index object itself, generated with the make_http_index script. Defaults to `index.json`."
    },
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

/**
 * Generic inode definition that can easily be serialized.
 */
var Inode = function Inode(id, size, mode, atime, mtime, ctime) {
    this.id = id;
    this.size = size;
    this.mode = mode;
    this.atime = atime;
    this.mtime = mtime;
    this.ctime = ctime;
};
/**
 * Handy function that converts the Inode to a Node Stats object.
 */
Inode.fromBuffer = function fromBuffer (buffer) {
    if (buffer === undefined) {
        throw new Error("NO");
    }
    return new Inode(buffer.toString('ascii', 30), buffer.readUInt32LE(0), buffer.readUInt16LE(4), buffer.readDoubleLE(6), buffer.readDoubleLE(14), buffer.readDoubleLE(22));
};

Inode.prototype.toStats = function toStats () {
    return new Stats((this.mode & 0xF000) === FileType.DIRECTORY ? FileType.DIRECTORY : FileType.FILE, this.size, this.mode, this.atime, this.mtime, this.ctime);
};
/**
 * Get the size of this Inode, in bytes.
 */
Inode.prototype.getSize = function getSize () {
    // ASSUMPTION: ID is ASCII (1 byte per char).
    return 30 + this.id.length;
};
/**
 * Writes the inode into the start of the buffer.
 */
Inode.prototype.toBuffer = function toBuffer (buff) {
        if ( buff === void 0 ) buff = Buffer.alloc(this.getSize());

    buff.writeUInt32LE(this.size, 0);
    buff.writeUInt16LE(this.mode, 4);
    buff.writeDoubleLE(this.atime, 6);
    buff.writeDoubleLE(this.mtime, 14);
    buff.writeDoubleLE(this.ctime, 22);
    buff.write(this.id, 30, this.id.length, 'ascii');
    return buff;
};
/**
 * Updates the Inode using information from the stats object. Used by file
 * systems at sync time, e.g.:
 * - Program opens file and gets a File object.
 * - Program mutates file. File object is responsible for maintaining
 *   metadata changes locally -- typically in a Stats object.
 * - Program closes file. File object's metadata changes are synced with the
 *   file system.
 * @return True if any changes have occurred.
 */
Inode.prototype.update = function update (stats) {
    var hasChanged = false;
    if (this.size !== stats.size) {
        this.size = stats.size;
        hasChanged = true;
    }
    if (this.mode !== stats.mode) {
        this.mode = stats.mode;
        hasChanged = true;
    }
    var atimeMs = stats.atime.getTime();
    if (this.atime !== atimeMs) {
        this.atime = atimeMs;
        hasChanged = true;
    }
    var mtimeMs = stats.mtime.getTime();
    if (this.mtime !== mtimeMs) {
        this.mtime = mtimeMs;
        hasChanged = true;
    }
    var ctimeMs = stats.ctime.getTime();
    if (this.ctime !== ctimeMs) {
        this.ctime = ctimeMs;
        hasChanged = true;
    }
    return hasChanged;
};
// XXX: Copied from Stats. Should reconcile these two into something more
//  compact.
/**
 * @return [Boolean] True if this item is a file.
 */
Inode.prototype.isFile = function isFile () {
    return (this.mode & 0xF000) === FileType.FILE;
};
/**
 * @return [Boolean] True if this item is a directory.
 */
Inode.prototype.isDirectory = function isDirectory () {
    return (this.mode & 0xF000) === FileType.DIRECTORY;
};

/**
 * @hidden
 */
var ROOT_NODE_ID = "/";
/**
 * @hidden
 */
var emptyDirNode = null;
/**
 * Returns an empty directory node.
 * @hidden
 */
function getEmptyDirNode() {
    if (emptyDirNode) {
        return emptyDirNode;
    }
    return emptyDirNode = Buffer.from("{}");
}
/**
 * Generates a random ID.
 * @hidden
 */
function GenerateRandomID() {
    // From http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
/**
 * Helper function. Checks if 'e' is defined. If so, it triggers the callback
 * with 'e' and returns false. Otherwise, returns true.
 * @hidden
 */
function noError(e, cb) {
    if (e) {
        cb(e);
        return false;
    }
    return true;
}
/**
 * Helper function. Checks if 'e' is defined. If so, it aborts the transaction,
 * triggers the callback with 'e', and returns false. Otherwise, returns true.
 * @hidden
 */
function noErrorTx(e, tx, cb) {
    if (e) {
        tx.abort(function () {
            cb(e);
        });
        return false;
    }
    return true;
}
var LRUNode = function LRUNode(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
};
// Adapted from https://chrisrng.svbtle.com/lru-cache-in-javascript
var LRUCache = function LRUCache(limit) {
    this.limit = limit;
    this.size = 0;
    this.map = {};
    this.head = null;
    this.tail = null;
};
/**
 * Change or add a new value in the cache
 * We overwrite the entry if it already exists
 */
LRUCache.prototype.set = function set (key, value) {
    var node = new LRUNode(key, value);
    if (this.map[key]) {
        this.map[key].value = node.value;
        this.remove(node.key);
    }
    else {
        if (this.size >= this.limit) {
            delete this.map[this.tail.key];
            this.size--;
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
    this.setHead(node);
};
/* Retrieve a single entry from the cache */
LRUCache.prototype.get = function get (key) {
    if (this.map[key]) {
        var value = this.map[key].value;
        var node = new LRUNode(key, value);
        this.remove(key);
        this.setHead(node);
        return value;
    }
    else {
        return null;
    }
};
/* Remove a single entry from the cache */
LRUCache.prototype.remove = function remove (key) {
    var node = this.map[key];
    if (!node) {
        return;
    }
    if (node.prev !== null) {
        node.prev.next = node.next;
    }
    else {
        this.head = node.next;
    }
    if (node.next !== null) {
        node.next.prev = node.prev;
    }
    else {
        this.tail = node.prev;
    }
    delete this.map[key];
    this.size--;
};
/* Resets the entire cache - Argument limit is optional to be reset */
LRUCache.prototype.removeAll = function removeAll () {
    this.size = 0;
    this.map = {};
    this.head = null;
    this.tail = null;
};
LRUCache.prototype.setHead = function setHead (node) {
    node.next = this.head;
    node.prev = null;
    if (this.head !== null) {
        this.head.prev = node;
    }
    this.head = node;
    if (this.tail === null) {
        this.tail = node;
    }
    this.size++;
    this.map[node.key] = node;
};
/**
 * A simple RW transaction for simple synchronous key-value stores.
 */
var SimpleSyncRWTransaction = function SimpleSyncRWTransaction(store) {
    this.store = store;
    /**
     * Stores data in the keys we modify prior to modifying them.
     * Allows us to roll back commits.
     */
    this.originalData = {};
    /**
     * List of keys modified in this transaction, if any.
     */
    this.modifiedKeys = [];
};
SimpleSyncRWTransaction.prototype.get = function get (key) {
    var val = this.store.get(key);
    this.stashOldValue(key, val);
    return val;
};
SimpleSyncRWTransaction.prototype.put = function put (key, data, overwrite) {
    this.markModified(key);
    return this.store.put(key, data, overwrite);
};
SimpleSyncRWTransaction.prototype.del = function del (key) {
    this.markModified(key);
    this.store.del(key);
};
SimpleSyncRWTransaction.prototype.commit = function commit () { };
SimpleSyncRWTransaction.prototype.abort = function abort () {
    // Rollback old values.
    for (var i = 0, list = this.modifiedKeys; i < list.length; i += 1) {
        var key = list[i];

            var value = this.originalData[key];
        if (!value) {
            // Key didn't exist.
            this.store.del(key);
        }
        else {
            // Key existed. Store old value.
            this.store.put(key, value, true);
        }
    }
};
/**
 * Stashes given key value pair into `originalData` if it doesn't already
 * exist. Allows us to stash values the program is requesting anyway to
 * prevent needless `get` requests if the program modifies the data later
 * on during the transaction.
 */
SimpleSyncRWTransaction.prototype.stashOldValue = function stashOldValue (key, value) {
    // Keep only the earliest value in the transaction.
    if (!this.originalData.hasOwnProperty(key)) {
        this.originalData[key] = value;
    }
};
/**
 * Marks the given key as modified, and stashes its value if it has not been
 * stashed already.
 */
SimpleSyncRWTransaction.prototype.markModified = function markModified (key) {
    if (this.modifiedKeys.indexOf(key) === -1) {
        this.modifiedKeys.push(key);
        if (!this.originalData.hasOwnProperty(key)) {
            this.originalData[key] = this.store.get(key);
        }
    }
};
var SyncKeyValueFile = /*@__PURE__*/(function (PreloadFile) {
    function SyncKeyValueFile(_fs, _path, _flag, _stat, contents) {
        PreloadFile.call(this, _fs, _path, _flag, _stat, contents);
    }

    if ( PreloadFile ) SyncKeyValueFile.__proto__ = PreloadFile;
    SyncKeyValueFile.prototype = Object.create( PreloadFile && PreloadFile.prototype );
    SyncKeyValueFile.prototype.constructor = SyncKeyValueFile;
    SyncKeyValueFile.prototype.syncSync = function syncSync () {
        if (this.isDirty()) {
            this._fs._syncSync(this.getPath(), this.getBuffer(), this.getStats());
            this.resetDirty();
        }
    };
    SyncKeyValueFile.prototype.closeSync = function closeSync () {
        this.syncSync();
    };

    return SyncKeyValueFile;
}(PreloadFile));
/**
 * A "Synchronous key-value file system". Stores data to/retrieves data from an
 * underlying key-value store.
 *
 * We use a unique ID for each node in the file system. The root node has a
 * fixed ID.
 * @todo Introduce Node ID caching.
 * @todo Check modes.
 */
var SyncKeyValueFileSystem = /*@__PURE__*/(function (SynchronousFileSystem) {
    function SyncKeyValueFileSystem(options) {
        SynchronousFileSystem.call(this);
        this.store = options.store;
        // INVARIANT: Ensure that the root exists.
        this.makeRootDirectory();
    }

    if ( SynchronousFileSystem ) SyncKeyValueFileSystem.__proto__ = SynchronousFileSystem;
    SyncKeyValueFileSystem.prototype = Object.create( SynchronousFileSystem && SynchronousFileSystem.prototype );
    SyncKeyValueFileSystem.prototype.constructor = SyncKeyValueFileSystem;
    SyncKeyValueFileSystem.isAvailable = function isAvailable () { return true; };

    SyncKeyValueFileSystem.prototype.getName = function getName () { return this.store.name(); };
    SyncKeyValueFileSystem.prototype.isReadOnly = function isReadOnly () { return false; };
    SyncKeyValueFileSystem.prototype.supportsSymlinks = function supportsSymlinks () { return false; };
    SyncKeyValueFileSystem.prototype.supportsProps = function supportsProps () { return false; };
    SyncKeyValueFileSystem.prototype.supportsSynch = function supportsSynch () { return true; };
    /**
     * Delete all contents stored in the file system.
     */
    SyncKeyValueFileSystem.prototype.empty = function empty () {
        this.store.clear();
        // INVARIANT: Root always exists.
        this.makeRootDirectory();
    };
    SyncKeyValueFileSystem.prototype.renameSync = function renameSync (oldPath, newPath) {
        var tx = this.store.beginTransaction('readwrite'), oldParent = path.dirname(oldPath), oldName = path.basename(oldPath), newParent = path.dirname(newPath), newName = path.basename(newPath), 
        // Remove oldPath from parent's directory listing.
        oldDirNode = this.findINode(tx, oldParent), oldDirList = this.getDirListing(tx, oldParent, oldDirNode);
        if (!oldDirList[oldName]) {
            throw ApiError.ENOENT(oldPath);
        }
        var nodeId = oldDirList[oldName];
        delete oldDirList[oldName];
        // Invariant: Can't move a folder inside itself.
        // This funny little hack ensures that the check passes only if oldPath
        // is a subpath of newParent. We append '/' to avoid matching folders that
        // are a substring of the bottom-most folder in the path.
        if ((newParent + '/').indexOf(oldPath + '/') === 0) {
            throw new ApiError(ErrorCode.EBUSY, oldParent);
        }
        // Add newPath to parent's directory listing.
        var newDirNode, newDirList;
        if (newParent === oldParent) {
            // Prevent us from re-grabbing the same directory listing, which still
            // contains oldName.
            newDirNode = oldDirNode;
            newDirList = oldDirList;
        }
        else {
            newDirNode = this.findINode(tx, newParent);
            newDirList = this.getDirListing(tx, newParent, newDirNode);
        }
        if (newDirList[newName]) {
            // If it's a file, delete it.
            var newNameNode = this.getINode(tx, newPath, newDirList[newName]);
            if (newNameNode.isFile()) {
                try {
                    tx.del(newNameNode.id);
                    tx.del(newDirList[newName]);
                }
                catch (e) {
                    tx.abort();
                    throw e;
                }
            }
            else {
                // If it's a directory, throw a permissions error.
                throw ApiError.EPERM(newPath);
            }
        }
        newDirList[newName] = nodeId;
        // Commit the two changed directory listings.
        try {
            tx.put(oldDirNode.id, Buffer.from(JSON.stringify(oldDirList)), true);
            tx.put(newDirNode.id, Buffer.from(JSON.stringify(newDirList)), true);
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
    };
    SyncKeyValueFileSystem.prototype.statSync = function statSync (p, isLstat) {
        // Get the inode to the item, convert it into a Stats object.
        return this.findINode(this.store.beginTransaction('readonly'), p).toStats();
    };
    SyncKeyValueFileSystem.prototype.createFileSync = function createFileSync (p, flag, mode) {
        var tx = this.store.beginTransaction('readwrite'), data = emptyBuffer(), newFile = this.commitNewFile(tx, p, FileType.FILE, mode, data);
        // Open the file.
        return new SyncKeyValueFile(this, p, flag, newFile.toStats(), data);
    };
    SyncKeyValueFileSystem.prototype.openFileSync = function openFileSync (p, flag) {
        var tx = this.store.beginTransaction('readonly'), node = this.findINode(tx, p), data = tx.get(node.id);
        if (data === undefined) {
            throw ApiError.ENOENT(p);
        }
        return new SyncKeyValueFile(this, p, flag, node.toStats(), data);
    };
    SyncKeyValueFileSystem.prototype.unlinkSync = function unlinkSync (p) {
        this.removeEntry(p, false);
    };
    SyncKeyValueFileSystem.prototype.rmdirSync = function rmdirSync (p) {
        // Check first if directory is empty.
        if (this.readdirSync(p).length > 0) {
            throw ApiError.ENOTEMPTY(p);
        }
        else {
            this.removeEntry(p, true);
        }
    };
    SyncKeyValueFileSystem.prototype.mkdirSync = function mkdirSync (p, mode) {
        var tx = this.store.beginTransaction('readwrite'), data = Buffer.from('{}');
        this.commitNewFile(tx, p, FileType.DIRECTORY, mode, data);
    };
    SyncKeyValueFileSystem.prototype.readdirSync = function readdirSync (p) {
        var tx = this.store.beginTransaction('readonly');
        return Object.keys(this.getDirListing(tx, p, this.findINode(tx, p)));
    };
    SyncKeyValueFileSystem.prototype._syncSync = function _syncSync (p, data, stats) {
        // @todo Ensure mtime updates properly, and use that to determine if a data
        //       update is required.
        var tx = this.store.beginTransaction('readwrite'), 
        // We use the _findInode helper because we actually need the INode id.
        fileInodeId = this._findINode(tx, path.dirname(p), path.basename(p)), fileInode = this.getINode(tx, p, fileInodeId), inodeChanged = fileInode.update(stats);
        try {
            // Sync data.
            tx.put(fileInode.id, data, true);
            // Sync metadata.
            if (inodeChanged) {
                tx.put(fileInodeId, fileInode.toBuffer(), true);
            }
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
    };
    /**
     * Checks if the root directory exists. Creates it if it doesn't.
     */
    SyncKeyValueFileSystem.prototype.makeRootDirectory = function makeRootDirectory () {
        var tx = this.store.beginTransaction('readwrite');
        if (tx.get(ROOT_NODE_ID) === undefined) {
            // Create new inode.
            var currTime = (new Date()).getTime(), 
            // Mode 0666
            dirInode = new Inode(GenerateRandomID(), 4096, 511 | FileType.DIRECTORY, currTime, currTime, currTime);
            // If the root doesn't exist, the first random ID shouldn't exist,
            // either.
            tx.put(dirInode.id, getEmptyDirNode(), false);
            tx.put(ROOT_NODE_ID, dirInode.toBuffer(), false);
            tx.commit();
        }
    };
    /**
     * Helper function for findINode.
     * @param parent The parent directory of the file we are attempting to find.
     * @param filename The filename of the inode we are attempting to find, minus
     *   the parent.
     * @return string The ID of the file's inode in the file system.
     */
    SyncKeyValueFileSystem.prototype._findINode = function _findINode (tx, parent, filename) {
        var this$1 = this;

        var readDirectory = function (inode) {
            // Get the root's directory listing.
            var dirList = this$1.getDirListing(tx, parent, inode);
            // Get the file's ID.
            if (dirList[filename]) {
                return dirList[filename];
            }
            else {
                throw ApiError.ENOENT(path.resolve(parent, filename));
            }
        };
        if (parent === '/') {
            if (filename === '') {
                // BASE CASE #1: Return the root's ID.
                return ROOT_NODE_ID;
            }
            else {
                // BASE CASE #2: Find the item in the root ndoe.
                return readDirectory(this.getINode(tx, parent, ROOT_NODE_ID));
            }
        }
        else {
            return readDirectory(this.getINode(tx, parent + path.sep + filename, this._findINode(tx, path.dirname(parent), path.basename(parent))));
        }
    };
    /**
     * Finds the Inode of the given path.
     * @param p The path to look up.
     * @return The Inode of the path p.
     * @todo memoize/cache
     */
    SyncKeyValueFileSystem.prototype.findINode = function findINode (tx, p) {
        return this.getINode(tx, p, this._findINode(tx, path.dirname(p), path.basename(p)));
    };
    /**
     * Given the ID of a node, retrieves the corresponding Inode.
     * @param tx The transaction to use.
     * @param p The corresponding path to the file (used for error messages).
     * @param id The ID to look up.
     */
    SyncKeyValueFileSystem.prototype.getINode = function getINode (tx, p, id) {
        var inode = tx.get(id);
        if (inode === undefined) {
            throw ApiError.ENOENT(p);
        }
        return Inode.fromBuffer(inode);
    };
    /**
     * Given the Inode of a directory, retrieves the corresponding directory
     * listing.
     */
    SyncKeyValueFileSystem.prototype.getDirListing = function getDirListing (tx, p, inode) {
        if (!inode.isDirectory()) {
            throw ApiError.ENOTDIR(p);
        }
        var data = tx.get(inode.id);
        if (data === undefined) {
            throw ApiError.ENOENT(p);
        }
        return JSON.parse(data.toString());
    };
    /**
     * Creates a new node under a random ID. Retries 5 times before giving up in
     * the exceedingly unlikely chance that we try to reuse a random GUID.
     * @return The GUID that the data was stored under.
     */
    SyncKeyValueFileSystem.prototype.addNewNode = function addNewNode (tx, data) {
        var retries = 0;
        var currId;
        while (retries < 5) {
            try {
                currId = GenerateRandomID();
                tx.put(currId, data, false);
                return currId;
            }
            catch (e) {
                // Ignore and reroll.
            }
        }
        throw new ApiError(ErrorCode.EIO, 'Unable to commit data to key-value store.');
    };
    /**
     * Commits a new file (well, a FILE or a DIRECTORY) to the file system with
     * the given mode.
     * Note: This will commit the transaction.
     * @param p The path to the new file.
     * @param type The type of the new file.
     * @param mode The mode to create the new file with.
     * @param data The data to store at the file's data node.
     * @return The Inode for the new file.
     */
    SyncKeyValueFileSystem.prototype.commitNewFile = function commitNewFile (tx, p, type, mode, data) {
        var parentDir = path.dirname(p), fname = path.basename(p), parentNode = this.findINode(tx, parentDir), dirListing = this.getDirListing(tx, parentDir, parentNode), currTime = (new Date()).getTime();
        // Invariant: The root always exists.
        // If we don't check this prior to taking steps below, we will create a
        // file with name '' in root should p == '/'.
        if (p === '/') {
            throw ApiError.EEXIST(p);
        }
        // Check if file already exists.
        if (dirListing[fname]) {
            throw ApiError.EEXIST(p);
        }
        var fileNode;
        try {
            // Commit data.
            var dataId = this.addNewNode(tx, data);
            fileNode = new Inode(dataId, data.length, mode | type, currTime, currTime, currTime);
            // Commit file node.
            var fileNodeId = this.addNewNode(tx, fileNode.toBuffer());
            // Update and commit parent directory listing.
            dirListing[fname] = fileNodeId;
            tx.put(parentNode.id, Buffer.from(JSON.stringify(dirListing)), true);
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        tx.commit();
        return fileNode;
    };
    /**
     * Remove all traces of the given path from the file system.
     * @param p The path to remove from the file system.
     * @param isDir Does the path belong to a directory, or a file?
     * @todo Update mtime.
     */
    SyncKeyValueFileSystem.prototype.removeEntry = function removeEntry (p, isDir) {
        var tx = this.store.beginTransaction('readwrite'), parent = path.dirname(p), parentNode = this.findINode(tx, parent), parentListing = this.getDirListing(tx, parent, parentNode), fileName = path.basename(p);
        if (!parentListing[fileName]) {
            throw ApiError.ENOENT(p);
        }
        // Remove from directory listing of parent.
        var fileNodeId = parentListing[fileName];
        delete parentListing[fileName];
        // Get file inode.
        var fileNode = this.getINode(tx, p, fileNodeId);
        if (!isDir && fileNode.isDirectory()) {
            throw ApiError.EISDIR(p);
        }
        else if (isDir && !fileNode.isDirectory()) {
            throw ApiError.ENOTDIR(p);
        }
        try {
            // Delete data.
            tx.del(fileNode.id);
            // Delete node.
            tx.del(fileNodeId);
            // Update directory listing.
            tx.put(parentNode.id, Buffer.from(JSON.stringify(parentListing)), true);
        }
        catch (e) {
            tx.abort();
            throw e;
        }
        // Success.
        tx.commit();
    };

    return SyncKeyValueFileSystem;
}(SynchronousFileSystem));
var AsyncKeyValueFile = /*@__PURE__*/(function (PreloadFile) {
    function AsyncKeyValueFile(_fs, _path, _flag, _stat, contents) {
        PreloadFile.call(this, _fs, _path, _flag, _stat, contents);
    }

    if ( PreloadFile ) AsyncKeyValueFile.__proto__ = PreloadFile;
    AsyncKeyValueFile.prototype = Object.create( PreloadFile && PreloadFile.prototype );
    AsyncKeyValueFile.prototype.constructor = AsyncKeyValueFile;
    AsyncKeyValueFile.prototype.sync = function sync (cb) {
        var this$1 = this;

        if (this.isDirty()) {
            this._fs._sync(this.getPath(), this.getBuffer(), this.getStats(), function (e) {
                if (!e) {
                    this$1.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };
    AsyncKeyValueFile.prototype.close = function close (cb) {
        this.sync(cb);
    };

    return AsyncKeyValueFile;
}(PreloadFile));
/**
 * An "Asynchronous key-value file system". Stores data to/retrieves data from
 * an underlying asynchronous key-value store.
 */
var AsyncKeyValueFileSystem = /*@__PURE__*/(function (BaseFileSystem) {
    function AsyncKeyValueFileSystem(cacheSize) {
        BaseFileSystem.call(this);
        this._cache = null;
        if (cacheSize > 0) {
            this._cache = new LRUCache(cacheSize);
        }
    }

    if ( BaseFileSystem ) AsyncKeyValueFileSystem.__proto__ = BaseFileSystem;
    AsyncKeyValueFileSystem.prototype = Object.create( BaseFileSystem && BaseFileSystem.prototype );
    AsyncKeyValueFileSystem.prototype.constructor = AsyncKeyValueFileSystem;
    /**
     * Initializes the file system. Typically called by subclasses' async
     * constructors.
     */
    AsyncKeyValueFileSystem.isAvailable = function isAvailable () { return true; };

    AsyncKeyValueFileSystem.prototype.init = function init (store, cb) {
        this.store = store;
        // INVARIANT: Ensure that the root exists.
        this.makeRootDirectory(cb);
    };
    AsyncKeyValueFileSystem.prototype.getName = function getName () { return this.store.name(); };
    AsyncKeyValueFileSystem.prototype.isReadOnly = function isReadOnly () { return false; };
    AsyncKeyValueFileSystem.prototype.supportsSymlinks = function supportsSymlinks () { return false; };
    AsyncKeyValueFileSystem.prototype.supportsProps = function supportsProps () { return false; };
    AsyncKeyValueFileSystem.prototype.supportsSynch = function supportsSynch () { return false; };
    /**
     * Delete all contents stored in the file system.
     */
    AsyncKeyValueFileSystem.prototype.empty = function empty (cb) {
        var this$1 = this;

        if (this._cache) {
            this._cache.removeAll();
        }
        this.store.clear(function (e) {
            if (noError(e, cb)) {
                // INVARIANT: Root always exists.
                this$1.makeRootDirectory(cb);
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.rename = function rename (oldPath, newPath, cb) {
        var this$1 = this;

        // TODO: Make rename compatible with the cache.
        if (this._cache) {
            // Clear and disable cache during renaming process.
            var c = this._cache;
            this._cache = null;
            c.removeAll();
            var oldCb = cb;
            cb = function (e) {
                // Restore empty cache.
                this$1._cache = c;
                oldCb(e);
            };
        }
        var tx = this.store.beginTransaction('readwrite');
        var oldParent = path.dirname(oldPath), oldName = path.basename(oldPath);
        var newParent = path.dirname(newPath), newName = path.basename(newPath);
        var inodes = {};
        var lists = {};
        var errorOccurred = false;
        // Invariant: Can't move a folder inside itself.
        // This funny little hack ensures that the check passes only if oldPath
        // is a subpath of newParent. We append '/' to avoid matching folders that
        // are a substring of the bottom-most folder in the path.
        if ((newParent + '/').indexOf(oldPath + '/') === 0) {
            return cb(new ApiError(ErrorCode.EBUSY, oldParent));
        }
        /**
         * Responsible for Phase 2 of the rename operation: Modifying and
         * committing the directory listings. Called once we have successfully
         * retrieved both the old and new parent's inodes and listings.
         */
        var theOleSwitcharoo = function () {
            // Sanity check: Ensure both paths are present, and no error has occurred.
            if (errorOccurred || !lists.hasOwnProperty(oldParent) || !lists.hasOwnProperty(newParent)) {
                return;
            }
            var oldParentList = lists[oldParent], oldParentINode = inodes[oldParent], newParentList = lists[newParent], newParentINode = inodes[newParent];
            // Delete file from old parent.
            if (!oldParentList[oldName]) {
                cb(ApiError.ENOENT(oldPath));
            }
            else {
                var fileId = oldParentList[oldName];
                delete oldParentList[oldName];
                // Finishes off the renaming process by adding the file to the new
                // parent.
                var completeRename = function () {
                    newParentList[newName] = fileId;
                    // Commit old parent's list.
                    tx.put(oldParentINode.id, Buffer.from(JSON.stringify(oldParentList)), true, function (e) {
                        if (noErrorTx(e, tx, cb)) {
                            if (oldParent === newParent) {
                                // DONE!
                                tx.commit(cb);
                            }
                            else {
                                // Commit new parent's list.
                                tx.put(newParentINode.id, Buffer.from(JSON.stringify(newParentList)), true, function (e) {
                                    if (noErrorTx(e, tx, cb)) {
                                        tx.commit(cb);
                                    }
                                });
                            }
                        }
                    });
                };
                if (newParentList[newName]) {
                    // 'newPath' already exists. Check if it's a file or a directory, and
                    // act accordingly.
                    this$1.getINode(tx, newPath, newParentList[newName], function (e, inode) {
                        if (noErrorTx(e, tx, cb)) {
                            if (inode.isFile()) {
                                // Delete the file and continue.
                                tx.del(inode.id, function (e) {
                                    if (noErrorTx(e, tx, cb)) {
                                        tx.del(newParentList[newName], function (e) {
                                            if (noErrorTx(e, tx, cb)) {
                                                completeRename();
                                            }
                                        });
                                    }
                                });
                            }
                            else {
                                // Can't overwrite a directory using rename.
                                tx.abort(function (e) {
                                    cb(ApiError.EPERM(newPath));
                                });
                            }
                        }
                    });
                }
                else {
                    completeRename();
                }
            }
        };
        /**
         * Grabs a path's inode and directory listing, and shoves it into the
         * inodes and lists hashes.
         */
        var processInodeAndListings = function (p) {
            this$1.findINodeAndDirListing(tx, p, function (e, node, dirList) {
                if (e) {
                    if (!errorOccurred) {
                        errorOccurred = true;
                        tx.abort(function () {
                            cb(e);
                        });
                    }
                    // If error has occurred already, just stop here.
                }
                else {
                    inodes[p] = node;
                    lists[p] = dirList;
                    theOleSwitcharoo();
                }
            });
        };
        processInodeAndListings(oldParent);
        if (oldParent !== newParent) {
            processInodeAndListings(newParent);
        }
    };
    AsyncKeyValueFileSystem.prototype.stat = function stat (p, isLstat, cb) {
        var tx = this.store.beginTransaction('readonly');
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                cb(null, inode.toStats());
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.createFile = function createFile (p, flag, mode, cb) {
        var this$1 = this;

        var tx = this.store.beginTransaction('readwrite'), data = emptyBuffer();
        this.commitNewFile(tx, p, FileType.FILE, mode, data, function (e, newFile) {
            if (noError(e, cb)) {
                cb(null, new AsyncKeyValueFile(this$1, p, flag, newFile.toStats(), data));
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.openFile = function openFile (p, flag, cb) {
        var this$1 = this;

        var tx = this.store.beginTransaction('readonly');
        // Step 1: Grab the file's inode.
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                // Step 2: Grab the file's data.
                tx.get(inode.id, function (e, data) {
                    if (noError(e, cb)) {
                        if (data === undefined) {
                            cb(ApiError.ENOENT(p));
                        }
                        else {
                            cb(null, new AsyncKeyValueFile(this$1, p, flag, inode.toStats(), data));
                        }
                    }
                });
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.unlink = function unlink (p, cb) {
        this.removeEntry(p, false, cb);
    };
    AsyncKeyValueFileSystem.prototype.rmdir = function rmdir (p, cb) {
        var this$1 = this;

        // Check first if directory is empty.
        this.readdir(p, function (err, files) {
            if (err) {
                cb(err);
            }
            else if (files.length > 0) {
                cb(ApiError.ENOTEMPTY(p));
            }
            else {
                this$1.removeEntry(p, true, cb);
            }
        });
    };
    AsyncKeyValueFileSystem.prototype.mkdir = function mkdir (p, mode, cb) {
        var tx = this.store.beginTransaction('readwrite'), data = Buffer.from('{}');
        this.commitNewFile(tx, p, FileType.DIRECTORY, mode, data, cb);
    };
    AsyncKeyValueFileSystem.prototype.readdir = function readdir (p, cb) {
        var this$1 = this;

        var tx = this.store.beginTransaction('readonly');
        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                this$1.getDirListing(tx, p, inode, function (e, dirListing) {
                    if (noError(e, cb)) {
                        cb(null, Object.keys(dirListing));
                    }
                });
            }
        });
    };
    AsyncKeyValueFileSystem.prototype._sync = function _sync (p, data, stats, cb) {
        var this$1 = this;

        // @todo Ensure mtime updates properly, and use that to determine if a data
        //       update is required.
        var tx = this.store.beginTransaction('readwrite');
        // Step 1: Get the file node's ID.
        this._findINode(tx, path.dirname(p), path.basename(p), function (e, fileInodeId) {
            if (noErrorTx(e, tx, cb)) {
                // Step 2: Get the file inode.
                this$1.getINode(tx, p, fileInodeId, function (e, fileInode) {
                    if (noErrorTx(e, tx, cb)) {
                        var inodeChanged = fileInode.update(stats);
                        // Step 3: Sync the data.
                        tx.put(fileInode.id, data, true, function (e) {
                            if (noErrorTx(e, tx, cb)) {
                                // Step 4: Sync the metadata (if it changed)!
                                if (inodeChanged) {
                                    tx.put(fileInodeId, fileInode.toBuffer(), true, function (e) {
                                        if (noErrorTx(e, tx, cb)) {
                                            tx.commit(cb);
                                        }
                                    });
                                }
                                else {
                                    // No need to sync metadata; return.
                                    tx.commit(cb);
                                }
                            }
                        });
                    }
                });
            }
        });
    };
    /**
     * Checks if the root directory exists. Creates it if it doesn't.
     */
    AsyncKeyValueFileSystem.prototype.makeRootDirectory = function makeRootDirectory (cb) {
        var tx = this.store.beginTransaction('readwrite');
        tx.get(ROOT_NODE_ID, function (e, data) {
            if (e || data === undefined) {
                // Create new inode.
                var currTime = (new Date()).getTime(), 
                // Mode 0666
                dirInode = new Inode(GenerateRandomID(), 4096, 511 | FileType.DIRECTORY, currTime, currTime, currTime);
                // If the root doesn't exist, the first random ID shouldn't exist,
                // either.
                tx.put(dirInode.id, getEmptyDirNode(), false, function (e) {
                    if (noErrorTx(e, tx, cb)) {
                        tx.put(ROOT_NODE_ID, dirInode.toBuffer(), false, function (e) {
                            if (e) {
                                tx.abort(function () { cb(e); });
                            }
                            else {
                                tx.commit(cb);
                            }
                        });
                    }
                });
            }
            else {
                // We're good.
                tx.commit(cb);
            }
        });
    };
    /**
     * Helper function for findINode.
     * @param parent The parent directory of the file we are attempting to find.
     * @param filename The filename of the inode we are attempting to find, minus
     *   the parent.
     * @param cb Passed an error or the ID of the file's inode in the file system.
     */
    AsyncKeyValueFileSystem.prototype._findINode = function _findINode (tx, parent, filename, cb) {
        var this$1 = this;

        if (this._cache) {
            var id = this._cache.get(path.join(parent, filename));
            if (id) {
                return cb(null, id);
            }
        }
        var handleDirectoryListings = function (e, inode, dirList) {
            if (e) {
                cb(e);
            }
            else if (dirList[filename]) {
                var id = dirList[filename];
                if (this$1._cache) {
                    this$1._cache.set(path.join(parent, filename), id);
                }
                cb(null, id);
            }
            else {
                cb(ApiError.ENOENT(path.resolve(parent, filename)));
            }
        };
        if (parent === '/') {
            if (filename === '') {
                // BASE CASE #1: Return the root's ID.
                if (this._cache) {
                    this._cache.set(path.join(parent, filename), ROOT_NODE_ID);
                }
                cb(null, ROOT_NODE_ID);
            }
            else {
                // BASE CASE #2: Find the item in the root node.
                this.getINode(tx, parent, ROOT_NODE_ID, function (e, inode) {
                    if (noError(e, cb)) {
                        this$1.getDirListing(tx, parent, inode, function (e, dirList) {
                            // handle_directory_listings will handle e for us.
                            handleDirectoryListings(e, inode, dirList);
                        });
                    }
                });
            }
        }
        else {
            // Get the parent directory's INode, and find the file in its directory
            // listing.
            this.findINodeAndDirListing(tx, parent, handleDirectoryListings);
        }
    };
    /**
     * Finds the Inode of the given path.
     * @param p The path to look up.
     * @param cb Passed an error or the Inode of the path p.
     * @todo memoize/cache
     */
    AsyncKeyValueFileSystem.prototype.findINode = function findINode (tx, p, cb) {
        var this$1 = this;

        this._findINode(tx, path.dirname(p), path.basename(p), function (e, id) {
            if (noError(e, cb)) {
                this$1.getINode(tx, p, id, cb);
            }
        });
    };
    /**
     * Given the ID of a node, retrieves the corresponding Inode.
     * @param tx The transaction to use.
     * @param p The corresponding path to the file (used for error messages).
     * @param id The ID to look up.
     * @param cb Passed an error or the inode under the given id.
     */
    AsyncKeyValueFileSystem.prototype.getINode = function getINode (tx, p, id, cb) {
        tx.get(id, function (e, data) {
            if (noError(e, cb)) {
                if (data === undefined) {
                    cb(ApiError.ENOENT(p));
                }
                else {
                    cb(null, Inode.fromBuffer(data));
                }
            }
        });
    };
    /**
     * Given the Inode of a directory, retrieves the corresponding directory
     * listing.
     */
    AsyncKeyValueFileSystem.prototype.getDirListing = function getDirListing (tx, p, inode, cb) {
        if (!inode.isDirectory()) {
            cb(ApiError.ENOTDIR(p));
        }
        else {
            tx.get(inode.id, function (e, data) {
                if (noError(e, cb)) {
                    try {
                        cb(null, JSON.parse(data.toString()));
                    }
                    catch (e) {
                        // Occurs when data is undefined, or corresponds to something other
                        // than a directory listing. The latter should never occur unless
                        // the file system is corrupted.
                        cb(ApiError.ENOENT(p));
                    }
                }
            });
        }
    };
    /**
     * Given a path to a directory, retrieves the corresponding INode and
     * directory listing.
     */
    AsyncKeyValueFileSystem.prototype.findINodeAndDirListing = function findINodeAndDirListing (tx, p, cb) {
        var this$1 = this;

        this.findINode(tx, p, function (e, inode) {
            if (noError(e, cb)) {
                this$1.getDirListing(tx, p, inode, function (e, listing) {
                    if (noError(e, cb)) {
                        cb(null, inode, listing);
                    }
                });
            }
        });
    };
    /**
     * Adds a new node under a random ID. Retries 5 times before giving up in
     * the exceedingly unlikely chance that we try to reuse a random GUID.
     * @param cb Passed an error or the GUID that the data was stored under.
     */
    AsyncKeyValueFileSystem.prototype.addNewNode = function addNewNode (tx, data, cb) {
        var retries = 0, currId;
        var reroll = function () {
            if (++retries === 5) {
                // Max retries hit. Return with an error.
                cb(new ApiError(ErrorCode.EIO, 'Unable to commit data to key-value store.'));
            }
            else {
                // Try again.
                currId = GenerateRandomID();
                tx.put(currId, data, false, function (e, committed) {
                    if (e || !committed) {
                        reroll();
                    }
                    else {
                        // Successfully stored under 'currId'.
                        cb(null, currId);
                    }
                });
            }
        };
        reroll();
    };
    /**
     * Commits a new file (well, a FILE or a DIRECTORY) to the file system with
     * the given mode.
     * Note: This will commit the transaction.
     * @param p The path to the new file.
     * @param type The type of the new file.
     * @param mode The mode to create the new file with.
     * @param data The data to store at the file's data node.
     * @param cb Passed an error or the Inode for the new file.
     */
    AsyncKeyValueFileSystem.prototype.commitNewFile = function commitNewFile (tx, p, type, mode, data, cb) {
        var this$1 = this;

        var parentDir = path.dirname(p), fname = path.basename(p), currTime = (new Date()).getTime();
        // Invariant: The root always exists.
        // If we don't check this prior to taking steps below, we will create a
        // file with name '' in root should p == '/'.
        if (p === '/') {
            return cb(ApiError.EEXIST(p));
        }
        // Let's build a pyramid of code!
        // Step 1: Get the parent directory's inode and directory listing
        this.findINodeAndDirListing(tx, parentDir, function (e, parentNode, dirListing) {
            if (noErrorTx(e, tx, cb)) {
                if (dirListing[fname]) {
                    // File already exists.
                    tx.abort(function () {
                        cb(ApiError.EEXIST(p));
                    });
                }
                else {
                    // Step 2: Commit data to store.
                    this$1.addNewNode(tx, data, function (e, dataId) {
                        if (noErrorTx(e, tx, cb)) {
                            // Step 3: Commit the file's inode to the store.
                            var fileInode = new Inode(dataId, data.length, mode | type, currTime, currTime, currTime);
                            this$1.addNewNode(tx, fileInode.toBuffer(), function (e, fileInodeId) {
                                if (noErrorTx(e, tx, cb)) {
                                    // Step 4: Update parent directory's listing.
                                    dirListing[fname] = fileInodeId;
                                    tx.put(parentNode.id, Buffer.from(JSON.stringify(dirListing)), true, function (e) {
                                        if (noErrorTx(e, tx, cb)) {
                                            // Step 5: Commit and return the new inode.
                                            tx.commit(function (e) {
                                                if (noErrorTx(e, tx, cb)) {
                                                    cb(null, fileInode);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    };
    /**
     * Remove all traces of the given path from the file system.
     * @param p The path to remove from the file system.
     * @param isDir Does the path belong to a directory, or a file?
     * @todo Update mtime.
     */
    AsyncKeyValueFileSystem.prototype.removeEntry = function removeEntry (p, isDir, cb) {
        var this$1 = this;

        // Eagerly delete from cache (harmless even if removal fails)
        if (this._cache) {
            this._cache.remove(p);
        }
        var tx = this.store.beginTransaction('readwrite'), parent = path.dirname(p), fileName = path.basename(p);
        // Step 1: Get parent directory's node and directory listing.
        this.findINodeAndDirListing(tx, parent, function (e, parentNode, parentListing) {
            if (noErrorTx(e, tx, cb)) {
                if (!parentListing[fileName]) {
                    tx.abort(function () {
                        cb(ApiError.ENOENT(p));
                    });
                }
                else {
                    // Remove from directory listing of parent.
                    var fileNodeId = parentListing[fileName];
                    delete parentListing[fileName];
                    // Step 2: Get file inode.
                    this$1.getINode(tx, p, fileNodeId, function (e, fileNode) {
                        if (noErrorTx(e, tx, cb)) {
                            if (!isDir && fileNode.isDirectory()) {
                                tx.abort(function () {
                                    cb(ApiError.EISDIR(p));
                                });
                            }
                            else if (isDir && !fileNode.isDirectory()) {
                                tx.abort(function () {
                                    cb(ApiError.ENOTDIR(p));
                                });
                            }
                            else {
                                // Step 3: Delete data.
                                tx.del(fileNode.id, function (e) {
                                    if (noErrorTx(e, tx, cb)) {
                                        // Step 4: Delete node.
                                        tx.del(fileNodeId, function (e) {
                                            if (noErrorTx(e, tx, cb)) {
                                                // Step 5: Update directory listing.
                                                tx.put(parentNode.id, Buffer.from(JSON.stringify(parentListing)), true, function (e) {
                                                    if (noErrorTx(e, tx, cb)) {
                                                        tx.commit(cb);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    };

    return AsyncKeyValueFileSystem;
}(BaseFileSystem));

/**
 * Get the indexedDB constructor for the current browser.
 * @hidden
 */
var indexedDB = toExport.indexedDB ||
    toExport.mozIndexedDB ||
    toExport.webkitIndexedDB ||
    toExport.msIndexedDB;
/**
 * Converts a DOMException or a DOMError from an IndexedDB event into a
 * standardized BrowserFS API error.
 * @hidden
 */
function convertError(e, message) {
    if ( message === void 0 ) message = e.toString();

    switch (e.name) {
        case "NotFoundError":
            return new ApiError(ErrorCode.ENOENT, message);
        case "QuotaExceededError":
            return new ApiError(ErrorCode.ENOSPC, message);
        default:
            // The rest do not seem to map cleanly to standard error codes.
            return new ApiError(ErrorCode.EIO, message);
    }
}
/**
 * Produces a new onerror handler for IDB. Our errors are always fatal, so we
 * handle them generically: Call the user-supplied callback with a translated
 * version of the error, and let the error bubble up.
 * @hidden
 */
function onErrorHandler(cb, code, message) {
    if ( code === void 0 ) code = ErrorCode.EIO;
    if ( message === void 0 ) message = null;

    return function (e) {
        // Prevent the error from canceling the transaction.
        e.preventDefault();
        cb(new ApiError(code, message !== null ? message : undefined));
    };
}
/**
 * @hidden
 */
var IndexedDBROTransaction = function IndexedDBROTransaction(tx, store) {
    this.tx = tx;
    this.store = store;
};
IndexedDBROTransaction.prototype.get = function get (key, cb) {
    try {
        var r = this.store.get(key);
        r.onerror = onErrorHandler(cb);
        r.onsuccess = function (event) {
            // IDB returns the value 'undefined' when you try to get keys that
            // don't exist. The caller expects this behavior.
            var result = event.target.result;
            if (result === undefined) {
                cb(null, result);
            }
            else {
                // IDB data is stored as an ArrayBuffer
                cb(null, arrayBuffer2Buffer(result));
            }
        };
    }
    catch (e) {
        cb(convertError(e));
    }
};
/**
 * @hidden
 */
var IndexedDBRWTransaction = /*@__PURE__*/(function (IndexedDBROTransaction) {
    function IndexedDBRWTransaction(tx, store) {
        IndexedDBROTransaction.call(this, tx, store);
    }

    if ( IndexedDBROTransaction ) IndexedDBRWTransaction.__proto__ = IndexedDBROTransaction;
    IndexedDBRWTransaction.prototype = Object.create( IndexedDBROTransaction && IndexedDBROTransaction.prototype );
    IndexedDBRWTransaction.prototype.constructor = IndexedDBRWTransaction;
    IndexedDBRWTransaction.prototype.put = function put (key, data, overwrite, cb) {
        try {
            var arraybuffer = buffer2ArrayBuffer(data);
            var r;
            // Note: 'add' will never overwrite an existing key.
            r = overwrite ? this.store.put(arraybuffer, key) : this.store.add(arraybuffer, key);
            // XXX: NEED TO RETURN FALSE WHEN ADD HAS A KEY CONFLICT. NO ERROR.
            r.onerror = onErrorHandler(cb);
            r.onsuccess = function (event) {
                cb(null, true);
            };
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    IndexedDBRWTransaction.prototype.del = function del (key, cb) {
        try {
            // NOTE: IE8 has a bug with identifiers named 'delete' unless used as a string
            // like this.
            // http://stackoverflow.com/a/26479152
            var r = this.store['delete'](key);
            r.onerror = onErrorHandler(cb);
            r.onsuccess = function (event) {
                cb();
            };
        }
        catch (e) {
            cb(convertError(e));
        }
    };
    IndexedDBRWTransaction.prototype.commit = function commit (cb) {
        // Return to the event loop to commit the transaction.
        setTimeout(cb, 0);
    };
    IndexedDBRWTransaction.prototype.abort = function abort (cb) {
        var _e = null;
        try {
            this.tx.abort();
        }
        catch (e) {
            _e = convertError(e);
        }
        finally {
            cb(_e);
        }
    };

    return IndexedDBRWTransaction;
}(IndexedDBROTransaction));
var IndexedDBStore = function IndexedDBStore(db, storeName) {
    this.db = db;
    this.storeName = storeName;
};
IndexedDBStore.Create = function Create (storeName, cb) {
    var openReq = indexedDB.open(storeName, 1);
    openReq.onupgradeneeded = function (event) {
        var db = event.target.result;
        // Huh. This should never happen; we're at version 1. Why does another
        // database exist?
        if (db.objectStoreNames.contains(storeName)) {
            db.deleteObjectStore(storeName);
        }
        db.createObjectStore(storeName);
    };
    openReq.onsuccess = function (event) {
        cb(null, new IndexedDBStore(event.target.result, storeName));
    };
    openReq.onerror = onErrorHandler(cb, ErrorCode.EACCES);
};

IndexedDBStore.prototype.name = function name () {
    return IndexedDBFileSystem.Name + " - " + this.storeName;
};
IndexedDBStore.prototype.clear = function clear (cb) {
    try {
        var tx = this.db.transaction(this.storeName, 'readwrite'), objectStore = tx.objectStore(this.storeName), r = objectStore.clear();
        r.onsuccess = function (event) {
            // Use setTimeout to commit transaction.
            setTimeout(cb, 0);
        };
        r.onerror = onErrorHandler(cb);
    }
    catch (e) {
        cb(convertError(e));
    }
};
IndexedDBStore.prototype.beginTransaction = function beginTransaction (type) {
        if ( type === void 0 ) type = 'readonly';

    var tx = this.db.transaction(this.storeName, type), objectStore = tx.objectStore(this.storeName);
    if (type === 'readwrite') {
        return new IndexedDBRWTransaction(tx, objectStore);
    }
    else if (type === 'readonly') {
        return new IndexedDBROTransaction(tx, objectStore);
    }
    else {
        throw new ApiError(ErrorCode.EINVAL, 'Invalid transaction type.');
    }
};
/**
 * A file system that uses the IndexedDB key value file system.
 */
var IndexedDBFileSystem = /*@__PURE__*/(function (AsyncKeyValueFileSystem) {
    function IndexedDBFileSystem(cacheSize) {
        AsyncKeyValueFileSystem.call(this, cacheSize);
    }

    if ( AsyncKeyValueFileSystem ) IndexedDBFileSystem.__proto__ = AsyncKeyValueFileSystem;
    IndexedDBFileSystem.prototype = Object.create( AsyncKeyValueFileSystem && AsyncKeyValueFileSystem.prototype );
    IndexedDBFileSystem.prototype.constructor = IndexedDBFileSystem;

    IndexedDBFileSystem.Create = function Create (opts, cb) {
        IndexedDBStore.Create(opts.storeName ? opts.storeName : 'browserfs', function (e, store) {
            if (store) {
                var idbfs = new IndexedDBFileSystem(typeof (opts.cacheSize) === 'number' ? opts.cacheSize : 100);
                idbfs.init(store, function (e) {
                    if (e) {
                        cb(e);
                    }
                    else {
                        cb(null, idbfs);
                    }
                });
            }
            else {
                cb(e);
            }
        });
    };
    IndexedDBFileSystem.isAvailable = function isAvailable () {
        // In Safari's private browsing mode, indexedDB.open returns NULL.
        // In Firefox, it throws an exception.
        // In Chrome, it "just works", and clears the database when you leave the page.
        // Untested: Opera, IE.
        try {
            return typeof indexedDB !== 'undefined' && null !== indexedDB.open("__browserfs_test__");
        }
        catch (e) {
            return false;
        }
    };

    return IndexedDBFileSystem;
}(AsyncKeyValueFileSystem));
IndexedDBFileSystem.Name = "IndexedDB";
IndexedDBFileSystem.Options = {
    storeName: {
        type: "string",
        optional: true,
        description: "The name of this file system. You can have multiple IndexedDB file systems operating at once, but each must have a different name."
    },
    cacheSize: {
        type: "number",
        optional: true,
        description: "The size of the inode cache. Defaults to 100. A size of 0 or below disables caching."
    }
};

/**
 * A simple in-memory key-value store backed by a JavaScript object.
 */
var InMemoryStore = function InMemoryStore() {
    this.store = {};
};
InMemoryStore.prototype.name = function name () { return InMemoryFileSystem.Name; };
InMemoryStore.prototype.clear = function clear () { this.store = {}; };
InMemoryStore.prototype.beginTransaction = function beginTransaction (type) {
    return new SimpleSyncRWTransaction(this);
};
InMemoryStore.prototype.get = function get (key) {
    return this.store[key];
};
InMemoryStore.prototype.put = function put (key, data, overwrite) {
    if (!overwrite && this.store.hasOwnProperty(key)) {
        return false;
    }
    this.store[key] = data;
    return true;
};
InMemoryStore.prototype.del = function del (key) {
    delete this.store[key];
};
/**
 * A simple in-memory file system backed by an InMemoryStore.
 * Files are not persisted across page loads.
 */
var InMemoryFileSystem = /*@__PURE__*/(function (SyncKeyValueFileSystem) {
    function InMemoryFileSystem() {
        SyncKeyValueFileSystem.call(this, { store: new InMemoryStore() });
    }

    if ( SyncKeyValueFileSystem ) InMemoryFileSystem.__proto__ = SyncKeyValueFileSystem;
    InMemoryFileSystem.prototype = Object.create( SyncKeyValueFileSystem && SyncKeyValueFileSystem.prototype );
    InMemoryFileSystem.prototype.constructor = InMemoryFileSystem;

    InMemoryFileSystem.Create = function Create (options, cb) {
        cb(null, new InMemoryFileSystem());
    };

    return InMemoryFileSystem;
}(SyncKeyValueFileSystem));
InMemoryFileSystem.Name = "InMemory";
InMemoryFileSystem.Options = {};

/**
 * Some versions of FF and all versions of IE do not support the full range of
 * 16-bit numbers encoded as characters, as they enforce UTF-16 restrictions.
 * @url http://stackoverflow.com/questions/11170716/are-there-any-characters-that-are-not-allowed-in-localstorage/11173673#11173673
 * @hidden
 */
var supportsBinaryString = false, binaryEncoding;
try {
    toExport.localStorage.setItem("__test__", String.fromCharCode(0xD800));
    supportsBinaryString = toExport.localStorage.getItem("__test__") === String.fromCharCode(0xD800);
}
catch (e) {
    // IE throws an exception.
    supportsBinaryString = false;
}
binaryEncoding = supportsBinaryString ? 'binary_string' : 'binary_string_ie';
if (!Buffer.isEncoding(binaryEncoding)) {
    // Fallback for non BrowserFS implementations of buffer that lack a
    // binary_string format.
    binaryEncoding = "base64";
}
/**
 * A synchronous key-value store backed by localStorage.
 */
var LocalStorageStore = function LocalStorageStore () {};

LocalStorageStore.prototype.name = function name () {
    return LocalStorageFileSystem.Name;
};
LocalStorageStore.prototype.clear = function clear () {
    toExport.localStorage.clear();
};
LocalStorageStore.prototype.beginTransaction = function beginTransaction (type) {
    // No need to differentiate.
    return new SimpleSyncRWTransaction(this);
};
LocalStorageStore.prototype.get = function get (key) {
    try {
        var data = toExport.localStorage.getItem(key);
        if (data !== null) {
            return Buffer.from(data, binaryEncoding);
        }
    }
    catch (e) {
        // Do nothing.
    }
    // Key doesn't exist, or a failure occurred.
    return undefined;
};
LocalStorageStore.prototype.put = function put (key, data, overwrite) {
    try {
        if (!overwrite && toExport.localStorage.getItem(key) !== null) {
            // Don't want to overwrite the key!
            return false;
        }
        toExport.localStorage.setItem(key, data.toString(binaryEncoding));
        return true;
    }
    catch (e) {
        throw new ApiError(ErrorCode.ENOSPC, "LocalStorage is full.");
    }
};
LocalStorageStore.prototype.del = function del (key) {
    try {
        toExport.localStorage.removeItem(key);
    }
    catch (e) {
        throw new ApiError(ErrorCode.EIO, "Unable to delete key " + key + ": " + e);
    }
};
/**
 * A synchronous file system backed by localStorage. Connects our
 * LocalStorageStore to our SyncKeyValueFileSystem.
 */
var LocalStorageFileSystem = /*@__PURE__*/(function (SyncKeyValueFileSystem) {
    function LocalStorageFileSystem() { SyncKeyValueFileSystem.call(this, { store: new LocalStorageStore() }); }

    if ( SyncKeyValueFileSystem ) LocalStorageFileSystem.__proto__ = SyncKeyValueFileSystem;
    LocalStorageFileSystem.prototype = Object.create( SyncKeyValueFileSystem && SyncKeyValueFileSystem.prototype );
    LocalStorageFileSystem.prototype.constructor = LocalStorageFileSystem;

    LocalStorageFileSystem.Create = function Create (options, cb) {
        cb(null, new LocalStorageFileSystem());
    };
    LocalStorageFileSystem.isAvailable = function isAvailable () {
        return typeof toExport.localStorage !== 'undefined';
    };

    return LocalStorageFileSystem;
}(SyncKeyValueFileSystem));
LocalStorageFileSystem.Name = "LocalStorage";
LocalStorageFileSystem.Options = {};

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
var MountableFileSystem = /*@__PURE__*/(function (BaseFileSystem) {
    function MountableFileSystem(rootFs) {
        BaseFileSystem.call(this);
        // Contains the list of mount points in mntMap, sorted by string length in decreasing order.
        // Ensures that we scan the most specific mount points for a match first, which lets us
        // nest mount points.
        this.mountList = [];
        this.mntMap = {};
        this.rootFs = rootFs;
    }

    if ( BaseFileSystem ) MountableFileSystem.__proto__ = BaseFileSystem;
    MountableFileSystem.prototype = Object.create( BaseFileSystem && BaseFileSystem.prototype );
    MountableFileSystem.prototype.constructor = MountableFileSystem;
    /**
     * Mounts the file system at the given mount point.
     */
    MountableFileSystem.Create = function Create (opts, cb) {
        InMemoryFileSystem.Create({}, function (e, imfs) {
            if (imfs) {
                var fs = new MountableFileSystem(imfs);
                try {
                    Object.keys(opts).forEach(function (mountPoint) {
                        fs.mount(mountPoint, opts[mountPoint]);
                    });
                }
                catch (e) {
                    return cb(e);
                }
                cb(null, fs);
            }
            else {
                cb(e);
            }
        });
    };
    MountableFileSystem.isAvailable = function isAvailable () {
        return true;
    };

    MountableFileSystem.prototype.mount = function mount (mountPoint, fs) {
        if (mountPoint[0] !== '/') {
            mountPoint = "/" + mountPoint;
        }
        mountPoint = path.resolve(mountPoint);
        if (this.mntMap[mountPoint]) {
            throw new ApiError(ErrorCode.EINVAL, "Mount point " + mountPoint + " is already taken.");
        }
        mkdirpSync(mountPoint, 0x1ff, this.rootFs);
        this.mntMap[mountPoint] = fs;
        this.mountList.push(mountPoint);
        this.mountList = this.mountList.sort(function (a, b) { return b.length - a.length; });
    };
    MountableFileSystem.prototype.umount = function umount (mountPoint) {
        if (mountPoint[0] !== '/') {
            mountPoint = "/" + mountPoint;
        }
        mountPoint = path.resolve(mountPoint);
        if (!this.mntMap[mountPoint]) {
            throw new ApiError(ErrorCode.EINVAL, "Mount point " + mountPoint + " is already unmounted.");
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
    MountableFileSystem.prototype._getFs = function _getFs (path) {
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
    MountableFileSystem.prototype.getName = function getName () {
        return MountableFileSystem.Name;
    };
    MountableFileSystem.prototype.diskSpace = function diskSpace (path, cb) {
        cb(0, 0);
    };
    MountableFileSystem.prototype.isReadOnly = function isReadOnly () {
        return false;
    };
    MountableFileSystem.prototype.supportsLinks = function supportsLinks () {
        // I'm not ready for cross-FS links yet.
        return false;
    };
    MountableFileSystem.prototype.supportsProps = function supportsProps () {
        return false;
    };
    MountableFileSystem.prototype.supportsSynch = function supportsSynch () {
        return true;
    };
    /**
     * Fixes up error messages so they mention the mounted file location relative
     * to the MFS root, not to the particular FS's root.
     * Mutates the input error, and returns it.
     */
    MountableFileSystem.prototype.standardizeError = function standardizeError (err, path, realPath) {
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
    MountableFileSystem.prototype.rename = function rename (oldPath, newPath, cb) {
        var this$1 = this;

        // Scenario 1: old and new are on same FS.
        var fs1rv = this._getFs(oldPath);
        var fs2rv = this._getFs(newPath);
        if (fs1rv.fs === fs2rv.fs) {
            return fs1rv.fs.rename(fs1rv.path, fs2rv.path, function (e) {
                if (e) {
                    this$1.standardizeError(this$1.standardizeError(e, fs1rv.path, oldPath), fs2rv.path, newPath);
                }
                cb(e);
            });
        }
        // Scenario 2: Different file systems.
        // Read old file, write new file, delete old file.
        return _fsMock.readFile(oldPath, function (err, data) {
            if (err) {
                return cb(err);
            }
            _fsMock.writeFile(newPath, data, function (err) {
                if (err) {
                    return cb(err);
                }
                _fsMock.unlink(oldPath, cb);
            });
        });
    };
    MountableFileSystem.prototype.renameSync = function renameSync (oldPath, newPath) {
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
        var data = _fsMock.readFileSync(oldPath);
        _fsMock.writeFileSync(newPath, data);
        return _fsMock.unlinkSync(oldPath);
    };
    MountableFileSystem.prototype.readdirSync = function readdirSync (p) {
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
            var rv2 = fsInfo.fs.readdirSync(fsInfo.path);
            if (rv === null) {
                return rv2;
            }
            else {
                // Filter out duplicates.
                return rv2.concat(rv.filter(function (val) { return rv2.indexOf(val) === -1; }));
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
    MountableFileSystem.prototype.readdir = function readdir (p, cb) {
        var this$1 = this;

        var fsInfo = this._getFs(p);
        fsInfo.fs.readdir(fsInfo.path, function (err, files) {
            if (fsInfo.fs !== this$1.rootFs) {
                try {
                    var rv = this$1.rootFs.readdirSync(p);
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
                        return cb(this$1.standardizeError(err, fsInfo.path, p));
                    }
                }
            }
            else if (err) {
                // Root FS and target FS are the same, and did not have directory.
                return cb(this$1.standardizeError(err, fsInfo.path, p));
            }
            cb(null, files);
        });
    };
    MountableFileSystem.prototype.realpathSync = function realpathSync (p, cache) {
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
    MountableFileSystem.prototype.realpath = function realpath (p, cache, cb) {
        var this$1 = this;

        var fsInfo = this._getFs(p);
        fsInfo.fs.realpath(fsInfo.path, {}, function (err, rv) {
            if (err) {
                cb(this$1.standardizeError(err, fsInfo.path, p));
            }
            else {
                // resolve is there to remove any trailing slash that may be present
                cb(null, path.resolve(path.join(fsInfo.mountPoint, rv)));
            }
        });
    };
    MountableFileSystem.prototype.rmdirSync = function rmdirSync (p) {
        var fsInfo = this._getFs(p);
        if (this._containsMountPt(p)) {
            throw ApiError.ENOTEMPTY(p);
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
    MountableFileSystem.prototype.rmdir = function rmdir (p, cb) {
        var this$1 = this;

        var fsInfo = this._getFs(p);
        if (this._containsMountPt(p)) {
            cb(ApiError.ENOTEMPTY(p));
        }
        else {
            fsInfo.fs.rmdir(fsInfo.path, function (err) {
                cb(err ? this$1.standardizeError(err, fsInfo.path, p) : null);
            });
        }
    };
    /**
     * Returns true if the given path contains a mount point.
     */
    MountableFileSystem.prototype._containsMountPt = function _containsMountPt (p) {
        var mountPoints = this.mountList, len = mountPoints.length;
        for (var i = 0; i < len; i++) {
            var pt = mountPoints[i];
            if (pt.length >= p.length && pt.slice(0, p.length) === p) {
                return true;
            }
        }
        return false;
    };

    return MountableFileSystem;
}(BaseFileSystem));
MountableFileSystem.Name = "MountableFileSystem";
MountableFileSystem.Options = {};
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
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

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
            var this$1 = this;
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            var path = args[0];
            var rv = this._getFs(path);
            args[0] = rv.path;
            if (typeof args[args.length - 1] === 'function') {
                var cb = args[args.length - 1];
                args[args.length - 1] = function () {
                    var args = [], len = arguments.length;
                    while ( len-- ) args[ len ] = arguments[ len ];

                    if (args.length > 0 && args[0] instanceof ApiError) {
                        this$1.standardizeError(args[0], rv.path, path);
                    }
                    cb.apply(null, args);
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
    for (var i$1 = 0, list = cmds; i$1 < list.length; i$1 += 1) {
        var fnName = list[i$1];

        MountableFileSystem.prototype[fnName] = defineFcn(fnName, false, i + 1);
        MountableFileSystem.prototype[fnName + 'Sync'] = defineFcn(fnName + 'Sync', true, i + 1);
    }
}

/**
 * Non-recursive mutex
 * @hidden
 */
var Mutex = function Mutex() {
    this._locked = false;
    this._waiters = [];
};
Mutex.prototype.lock = function lock (cb) {
    if (this._locked) {
        this._waiters.push(cb);
        return;
    }
    this._locked = true;
    cb();
};
Mutex.prototype.unlock = function unlock () {
    if (!this._locked) {
        throw new Error('unlock of a non-locked mutex');
    }
    var next = this._waiters.shift();
    // don't unlock - we want to queue up next for the
    // _end_ of the current task execution, but we don't
    // want it to be called inline with whatever the
    // current stack is.  This way we still get the nice
    // behavior that an unlock immediately followed by a
    // lock won't cause starvation.
    if (next) {
        setImmediate$1(next);
        return;
    }
    this._locked = false;
};
Mutex.prototype.tryLock = function tryLock () {
    if (this._locked) {
        return false;
    }
    this._locked = true;
    return true;
};
Mutex.prototype.isLocked = function isLocked () {
    return this._locked;
};

/**
 * This class serializes access to an underlying async filesystem.
 * For example, on an OverlayFS instance with an async lower
 * directory operations like rename and rmdir may involve multiple
 * requests involving both the upper and lower filesystems -- they
 * are not executed in a single atomic step.  OverlayFS uses this
 * LockedFS to avoid having to reason about the correctness of
 * multiple requests interleaving.
 */
var LockedFS = function LockedFS(fs) {
    this._fs = fs;
    this._mu = new Mutex();
};
LockedFS.prototype.getName = function getName () {
    return 'LockedFS<' + this._fs.getName() + '>';
};
LockedFS.prototype.getFSUnlocked = function getFSUnlocked () {
    return this._fs;
};
LockedFS.prototype.diskSpace = function diskSpace (p, cb) {
    // FIXME: should this lock?
    this._fs.diskSpace(p, cb);
};
LockedFS.prototype.isReadOnly = function isReadOnly () {
    return this._fs.isReadOnly();
};
LockedFS.prototype.supportsLinks = function supportsLinks () {
    return this._fs.supportsLinks();
};
LockedFS.prototype.supportsProps = function supportsProps () {
    return this._fs.supportsProps();
};
LockedFS.prototype.supportsSynch = function supportsSynch () {
    return this._fs.supportsSynch();
};
LockedFS.prototype.rename = function rename (oldPath, newPath, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.rename(oldPath, newPath, function (err) {
            this$1._mu.unlock();
            cb(err);
        });
    });
};
LockedFS.prototype.renameSync = function renameSync (oldPath, newPath) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.renameSync(oldPath, newPath);
};
LockedFS.prototype.stat = function stat (p, isLstat, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.stat(p, isLstat, function (err, stat) {
            this$1._mu.unlock();
            cb(err, stat);
        });
    });
};
LockedFS.prototype.statSync = function statSync (p, isLstat) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.statSync(p, isLstat);
};
LockedFS.prototype.open = function open (p, flag, mode, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.open(p, flag, mode, function (err, fd) {
            this$1._mu.unlock();
            cb(err, fd);
        });
    });
};
LockedFS.prototype.openSync = function openSync (p, flag, mode) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.openSync(p, flag, mode);
};
LockedFS.prototype.unlink = function unlink (p, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.unlink(p, function (err) {
            this$1._mu.unlock();
            cb(err);
        });
    });
};
LockedFS.prototype.unlinkSync = function unlinkSync (p) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.unlinkSync(p);
};
LockedFS.prototype.rmdir = function rmdir (p, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.rmdir(p, function (err) {
            this$1._mu.unlock();
            cb(err);
        });
    });
};
LockedFS.prototype.rmdirSync = function rmdirSync (p) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.rmdirSync(p);
};
LockedFS.prototype.mkdir = function mkdir (p, mode, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.mkdir(p, mode, function (err) {
            this$1._mu.unlock();
            cb(err);
        });
    });
};
LockedFS.prototype.mkdirSync = function mkdirSync (p, mode) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.mkdirSync(p, mode);
};
LockedFS.prototype.readdir = function readdir (p, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.readdir(p, function (err, files) {
            this$1._mu.unlock();
            cb(err, files);
        });
    });
};
LockedFS.prototype.readdirSync = function readdirSync (p) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.readdirSync(p);
};
LockedFS.prototype.exists = function exists (p, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.exists(p, function (exists) {
            this$1._mu.unlock();
            cb(exists);
        });
    });
};
LockedFS.prototype.existsSync = function existsSync (p) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.existsSync(p);
};
LockedFS.prototype.realpath = function realpath (p, cache, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.realpath(p, cache, function (err, resolvedPath) {
            this$1._mu.unlock();
            cb(err, resolvedPath);
        });
    });
};
LockedFS.prototype.realpathSync = function realpathSync (p, cache) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.realpathSync(p, cache);
};
LockedFS.prototype.truncate = function truncate (p, len, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.truncate(p, len, function (err) {
            this$1._mu.unlock();
            cb(err);
        });
    });
};
LockedFS.prototype.truncateSync = function truncateSync (p, len) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.truncateSync(p, len);
};
LockedFS.prototype.readFile = function readFile (fname, encoding, flag, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.readFile(fname, encoding, flag, function (err, data) {
            this$1._mu.unlock();
            cb(err, data);
        });
    });
};
LockedFS.prototype.readFileSync = function readFileSync (fname, encoding, flag) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.readFileSync(fname, encoding, flag);
};
LockedFS.prototype.writeFile = function writeFile (fname, data, encoding, flag, mode, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.writeFile(fname, data, encoding, flag, mode, function (err) {
            this$1._mu.unlock();
            cb(err);
        });
    });
};
LockedFS.prototype.writeFileSync = function writeFileSync (fname, data, encoding, flag, mode) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.writeFileSync(fname, data, encoding, flag, mode);
};
LockedFS.prototype.appendFile = function appendFile (fname, data, encoding, flag, mode, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.appendFile(fname, data, encoding, flag, mode, function (err) {
            this$1._mu.unlock();
            cb(err);
        });
    });
};
LockedFS.prototype.appendFileSync = function appendFileSync (fname, data, encoding, flag, mode) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.appendFileSync(fname, data, encoding, flag, mode);
};
LockedFS.prototype.chmod = function chmod (p, isLchmod, mode, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.chmod(p, isLchmod, mode, function (err) {
            this$1._mu.unlock();
            cb(err);
        });
    });
};
LockedFS.prototype.chmodSync = function chmodSync (p, isLchmod, mode) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.chmodSync(p, isLchmod, mode);
};
LockedFS.prototype.chown = function chown (p, isLchown, uid, gid, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.chown(p, isLchown, uid, gid, function (err) {
            this$1._mu.unlock();
            cb(err);
        });
    });
};
LockedFS.prototype.chownSync = function chownSync (p, isLchown, uid, gid) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.chownSync(p, isLchown, uid, gid);
};
LockedFS.prototype.utimes = function utimes (p, atime, mtime, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.utimes(p, atime, mtime, function (err) {
            this$1._mu.unlock();
            cb(err);
        });
    });
};
LockedFS.prototype.utimesSync = function utimesSync (p, atime, mtime) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.utimesSync(p, atime, mtime);
};
LockedFS.prototype.link = function link (srcpath, dstpath, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.link(srcpath, dstpath, function (err) {
            this$1._mu.unlock();
            cb(err);
        });
    });
};
LockedFS.prototype.linkSync = function linkSync (srcpath, dstpath) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.linkSync(srcpath, dstpath);
};
LockedFS.prototype.symlink = function symlink (srcpath, dstpath, type, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.symlink(srcpath, dstpath, type, function (err) {
            this$1._mu.unlock();
            cb(err);
        });
    });
};
LockedFS.prototype.symlinkSync = function symlinkSync (srcpath, dstpath, type) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.symlinkSync(srcpath, dstpath, type);
};
LockedFS.prototype.readlink = function readlink (p, cb) {
        var this$1 = this;

    this._mu.lock(function () {
        this$1._fs.readlink(p, function (err, linkString) {
            this$1._mu.unlock();
            cb(err, linkString);
        });
    });
};
LockedFS.prototype.readlinkSync = function readlinkSync (p) {
    if (this._mu.isLocked()) {
        throw new Error('invalid sync call');
    }
    return this._fs.readlinkSync(p);
};

/**
 * @hidden
 */
var deletionLogPath = '/.deletedFiles.log';
/**
 * Given a read-only mode, makes it writable.
 * @hidden
 */
function makeModeWritable(mode) {
    return 146 | mode;
}
/**
 * @hidden
 */
function getFlag(f) {
    return FileFlag.getFileFlag(f);
}
/**
 * Overlays a RO file to make it writable.
 */
var OverlayFile = /*@__PURE__*/(function (PreloadFile) {
    function OverlayFile(fs, path, flag, stats, data) {
        PreloadFile.call(this, fs, path, flag, stats, data);
    }

    if ( PreloadFile ) OverlayFile.__proto__ = PreloadFile;
    OverlayFile.prototype = Object.create( PreloadFile && PreloadFile.prototype );
    OverlayFile.prototype.constructor = OverlayFile;
    OverlayFile.prototype.sync = function sync (cb) {
        var this$1 = this;

        if (!this.isDirty()) {
            cb(null);
            return;
        }
        this._fs._syncAsync(this, function (err) {
            this$1.resetDirty();
            cb(err);
        });
    };
    OverlayFile.prototype.syncSync = function syncSync () {
        if (this.isDirty()) {
            this._fs._syncSync(this);
            this.resetDirty();
        }
    };
    OverlayFile.prototype.close = function close (cb) {
        this.sync(cb);
    };
    OverlayFile.prototype.closeSync = function closeSync () {
        this.syncSync();
    };

    return OverlayFile;
}(PreloadFile));
/**
 * *INTERNAL, DO NOT USE DIRECTLY!*
 *
 * Core OverlayFS class that contains no locking whatsoever. We wrap these objects
 * in a LockedFS to prevent races.
 */
var UnlockedOverlayFS = /*@__PURE__*/(function (BaseFileSystem) {
    function UnlockedOverlayFS(writable, readable) {
        BaseFileSystem.call(this);
        this._isInitialized = false;
        this._initializeCallbacks = [];
        this._deletedFiles = {};
        this._deleteLog = '';
        // If 'true', we have scheduled a delete log update.
        this._deleteLogUpdatePending = false;
        // If 'true', a delete log update is needed after the scheduled delete log
        // update finishes.
        this._deleteLogUpdateNeeded = false;
        // If there was an error updating the delete log...
        this._deleteLogError = null;
        this._writable = writable;
        this._readable = readable;
        if (this._writable.isReadOnly()) {
            throw new ApiError(ErrorCode.EINVAL, "Writable file system must be writable.");
        }
    }

    if ( BaseFileSystem ) UnlockedOverlayFS.__proto__ = BaseFileSystem;
    UnlockedOverlayFS.prototype = Object.create( BaseFileSystem && BaseFileSystem.prototype );
    UnlockedOverlayFS.prototype.constructor = UnlockedOverlayFS;
    UnlockedOverlayFS.isAvailable = function isAvailable () {
        return true;
    };

    UnlockedOverlayFS.prototype.getOverlayedFileSystems = function getOverlayedFileSystems () {
        return {
            readable: this._readable,
            writable: this._writable
        };
    };
    UnlockedOverlayFS.prototype._syncAsync = function _syncAsync (file, cb) {
        var this$1 = this;

        this.createParentDirectoriesAsync(file.getPath(), function (err) {
            if (err) {
                return cb(err);
            }
            this$1._writable.writeFile(file.getPath(), file.getBuffer(), null, getFlag('w'), file.getStats().mode, cb);
        });
    };
    UnlockedOverlayFS.prototype._syncSync = function _syncSync (file) {
        this.createParentDirectories(file.getPath());
        this._writable.writeFileSync(file.getPath(), file.getBuffer(), null, getFlag('w'), file.getStats().mode);
    };
    UnlockedOverlayFS.prototype.getName = function getName () {
        return OverlayFS.Name;
    };
    /**
     * **INTERNAL METHOD**
     *
     * Called once to load up metadata stored on the writable file system.
     */
    UnlockedOverlayFS.prototype._initialize = function _initialize (cb) {
        var this$1 = this;

        var callbackArray = this._initializeCallbacks;
        var end = function (e) {
            this$1._isInitialized = !e;
            this$1._initializeCallbacks = [];
            callbackArray.forEach((function (cb) { return cb(e); }));
        };
        // if we're already initialized, immediately invoke the callback
        if (this._isInitialized) {
            return cb();
        }
        callbackArray.push(cb);
        // The first call to initialize initializes, the rest wait for it to complete.
        if (callbackArray.length !== 1) {
            return;
        }
        // Read deletion log, process into metadata.
        this._writable.readFile(deletionLogPath, 'utf8', getFlag('r'), function (err, data) {
            if (err) {
                // ENOENT === Newly-instantiated file system, and thus empty log.
                if (err.errno !== ErrorCode.ENOENT) {
                    return end(err);
                }
            }
            else {
                this$1._deleteLog = data;
            }
            this$1._reparseDeletionLog();
            end();
        });
    };
    UnlockedOverlayFS.prototype.isReadOnly = function isReadOnly () { return false; };
    UnlockedOverlayFS.prototype.supportsSynch = function supportsSynch () { return this._readable.supportsSynch() && this._writable.supportsSynch(); };
    UnlockedOverlayFS.prototype.supportsLinks = function supportsLinks () { return false; };
    UnlockedOverlayFS.prototype.supportsProps = function supportsProps () { return this._readable.supportsProps() && this._writable.supportsProps(); };
    UnlockedOverlayFS.prototype.getDeletionLog = function getDeletionLog () {
        return this._deleteLog;
    };
    UnlockedOverlayFS.prototype.restoreDeletionLog = function restoreDeletionLog (log) {
        this._deleteLog = log;
        this._reparseDeletionLog();
        this.updateLog('');
    };
    UnlockedOverlayFS.prototype.rename = function rename (oldPath, newPath, cb) {
        var this$1 = this;

        if (!this.checkInitAsync(cb) || this.checkPathAsync(oldPath, cb) || this.checkPathAsync(newPath, cb)) {
            return;
        }
        if (oldPath === deletionLogPath || newPath === deletionLogPath) {
            return cb(ApiError.EPERM('Cannot rename deletion log.'));
        }
        // nothing to do if paths match
        if (oldPath === newPath) {
            return cb();
        }
        this.stat(oldPath, false, function (oldErr, oldStats) {
            if (oldErr) {
                return cb(oldErr);
            }
            return this$1.stat(newPath, false, function (newErr, newStats) {
                var self = this$1;
                // precondition: both oldPath and newPath exist and are dirs.
                // decreases: |files|
                // Need to move *every file/folder* currently stored on
                // readable to its new location on writable.
                function copyDirContents(files) {
                    var file = files.shift();
                    if (!file) {
                        return cb();
                    }
                    var oldFile = path.resolve(oldPath, file);
                    var newFile = path.resolve(newPath, file);
                    // Recursion! Should work for any nested files / folders.
                    self.rename(oldFile, newFile, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        copyDirContents(files);
                    });
                }
                var mode = 511;
                // from linux's rename(2) manpage: oldpath can specify a
                // directory.  In this case, newpath must either not exist, or
                // it must specify an empty directory.
                if (oldStats.isDirectory()) {
                    if (newErr) {
                        if (newErr.errno !== ErrorCode.ENOENT) {
                            return cb(newErr);
                        }
                        return this$1._writable.exists(oldPath, function (exists) {
                            // simple case - both old and new are on the writable layer
                            if (exists) {
                                return this$1._writable.rename(oldPath, newPath, cb);
                            }
                            this$1._writable.mkdir(newPath, mode, function (mkdirErr) {
                                if (mkdirErr) {
                                    return cb(mkdirErr);
                                }
                                this$1._readable.readdir(oldPath, function (err, files) {
                                    if (err) {
                                        return cb();
                                    }
                                    copyDirContents(files);
                                });
                            });
                        });
                    }
                    mode = newStats.mode;
                    if (!newStats.isDirectory()) {
                        return cb(ApiError.ENOTDIR(newPath));
                    }
                    this$1.readdir(newPath, function (readdirErr, files) {
                        if (files && files.length) {
                            return cb(ApiError.ENOTEMPTY(newPath));
                        }
                        this$1._readable.readdir(oldPath, function (err, files) {
                            if (err) {
                                return cb();
                            }
                            copyDirContents(files);
                        });
                    });
                }
                if (newStats && newStats.isDirectory()) {
                    return cb(ApiError.EISDIR(newPath));
                }
                this$1.readFile(oldPath, null, getFlag('r'), function (err, data) {
                    if (err) {
                        return cb(err);
                    }
                    return this$1.writeFile(newPath, data, null, getFlag('w'), oldStats.mode, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        return this$1.unlink(oldPath, cb);
                    });
                });
            });
        });
    };
    UnlockedOverlayFS.prototype.renameSync = function renameSync (oldPath, newPath) {
        var this$1 = this;

        this.checkInitialized();
        this.checkPath(oldPath);
        this.checkPath(newPath);
        if (oldPath === deletionLogPath || newPath === deletionLogPath) {
            throw ApiError.EPERM('Cannot rename deletion log.');
        }
        // Write newPath using oldPath's contents, delete oldPath.
        var oldStats = this.statSync(oldPath, false);
        if (oldStats.isDirectory()) {
            // Optimization: Don't bother moving if old === new.
            if (oldPath === newPath) {
                return;
            }
            var mode = 511;
            if (this.existsSync(newPath)) {
                var stats = this.statSync(newPath, false);
                mode = stats.mode;
                if (stats.isDirectory()) {
                    if (this.readdirSync(newPath).length > 0) {
                        throw ApiError.ENOTEMPTY(newPath);
                    }
                }
                else {
                    throw ApiError.ENOTDIR(newPath);
                }
            }
            // Take care of writable first. Move any files there, or create an empty directory
            // if it doesn't exist.
            if (this._writable.existsSync(oldPath)) {
                this._writable.renameSync(oldPath, newPath);
            }
            else if (!this._writable.existsSync(newPath)) {
                this._writable.mkdirSync(newPath, mode);
            }
            // Need to move *every file/folder* currently stored on readable to its new location
            // on writable.
            if (this._readable.existsSync(oldPath)) {
                this._readable.readdirSync(oldPath).forEach(function (name) {
                    // Recursion! Should work for any nested files / folders.
                    this$1.renameSync(path.resolve(oldPath, name), path.resolve(newPath, name));
                });
            }
        }
        else {
            if (this.existsSync(newPath) && this.statSync(newPath, false).isDirectory()) {
                throw ApiError.EISDIR(newPath);
            }
            this.writeFileSync(newPath, this.readFileSync(oldPath, null, getFlag('r')), null, getFlag('w'), oldStats.mode);
        }
        if (oldPath !== newPath && this.existsSync(oldPath)) {
            this.unlinkSync(oldPath);
        }
    };
    UnlockedOverlayFS.prototype.stat = function stat (p, isLstat, cb) {
        var this$1 = this;

        if (!this.checkInitAsync(cb)) {
            return;
        }
        this._writable.stat(p, isLstat, function (err, stat) {
            if (err && err.errno === ErrorCode.ENOENT) {
                if (this$1._deletedFiles[p]) {
                    cb(ApiError.ENOENT(p));
                }
                this$1._readable.stat(p, isLstat, function (err, stat) {
                    if (stat) {
                        // Make the oldStat's mode writable. Preserve the topmost
                        // part of the mode, which specifies if it is a file or a
                        // directory.
                        stat = Stats.clone(stat);
                        stat.mode = makeModeWritable(stat.mode);
                    }
                    cb(err, stat);
                });
            }
            else {
                cb(err, stat);
            }
        });
    };
    UnlockedOverlayFS.prototype.statSync = function statSync (p, isLstat) {
        this.checkInitialized();
        try {
            return this._writable.statSync(p, isLstat);
        }
        catch (e) {
            if (this._deletedFiles[p]) {
                throw ApiError.ENOENT(p);
            }
            var oldStat = Stats.clone(this._readable.statSync(p, isLstat));
            // Make the oldStat's mode writable. Preserve the topmost part of the
            // mode, which specifies if it is a file or a directory.
            oldStat.mode = makeModeWritable(oldStat.mode);
            return oldStat;
        }
    };
    UnlockedOverlayFS.prototype.open = function open (p, flag, mode, cb) {
        var this$1 = this;

        if (!this.checkInitAsync(cb) || this.checkPathAsync(p, cb)) {
            return;
        }
        this.stat(p, false, function (err, stats) {
            if (stats) {
                switch (flag.pathExistsAction()) {
                    case ActionType.TRUNCATE_FILE:
                        return this$1.createParentDirectoriesAsync(p, function (err) {
                            if (err) {
                                return cb(err);
                            }
                            this$1._writable.open(p, flag, mode, cb);
                        });
                    case ActionType.NOP:
                        return this$1._writable.exists(p, function (exists) {
                            if (exists) {
                                this$1._writable.open(p, flag, mode, cb);
                            }
                            else {
                                // at this point we know the stats object we got is from
                                // the readable FS.
                                stats = Stats.clone(stats);
                                stats.mode = mode;
                                this$1._readable.readFile(p, null, getFlag('r'), function (readFileErr, data) {
                                    if (readFileErr) {
                                        return cb(readFileErr);
                                    }
                                    if (stats.size === -1) {
                                        stats.size = data.length;
                                    }
                                    var f = new OverlayFile(this$1, p, flag, stats, data);
                                    cb(null, f);
                                });
                            }
                        });
                    default:
                        return cb(ApiError.EEXIST(p));
                }
            }
            else {
                switch (flag.pathNotExistsAction()) {
                    case ActionType.CREATE_FILE:
                        return this$1.createParentDirectoriesAsync(p, function (err) {
                            if (err) {
                                return cb(err);
                            }
                            return this$1._writable.open(p, flag, mode, cb);
                        });
                    default:
                        return cb(ApiError.ENOENT(p));
                }
            }
        });
    };
    UnlockedOverlayFS.prototype.openSync = function openSync (p, flag, mode) {
        this.checkInitialized();
        this.checkPath(p);
        if (p === deletionLogPath) {
            throw ApiError.EPERM('Cannot open deletion log.');
        }
        if (this.existsSync(p)) {
            switch (flag.pathExistsAction()) {
                case ActionType.TRUNCATE_FILE:
                    this.createParentDirectories(p);
                    return this._writable.openSync(p, flag, mode);
                case ActionType.NOP:
                    if (this._writable.existsSync(p)) {
                        return this._writable.openSync(p, flag, mode);
                    }
                    else {
                        // Create an OverlayFile.
                        var buf = this._readable.readFileSync(p, null, getFlag('r'));
                        var stats = Stats.clone(this._readable.statSync(p, false));
                        stats.mode = mode;
                        return new OverlayFile(this, p, flag, stats, buf);
                    }
                default:
                    throw ApiError.EEXIST(p);
            }
        }
        else {
            switch (flag.pathNotExistsAction()) {
                case ActionType.CREATE_FILE:
                    this.createParentDirectories(p);
                    return this._writable.openSync(p, flag, mode);
                default:
                    throw ApiError.ENOENT(p);
            }
        }
    };
    UnlockedOverlayFS.prototype.unlink = function unlink (p, cb) {
        var this$1 = this;

        if (!this.checkInitAsync(cb) || this.checkPathAsync(p, cb)) {
            return;
        }
        this.exists(p, function (exists) {
            if (!exists) {
                return cb(ApiError.ENOENT(p));
            }
            this$1._writable.exists(p, function (writableExists) {
                if (writableExists) {
                    return this$1._writable.unlink(p, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        this$1.exists(p, function (readableExists) {
                            if (readableExists) {
                                this$1.deletePath(p);
                            }
                            cb(null);
                        });
                    });
                }
                else {
                    // if this only exists on the readable FS, add it to the
                    // delete map.
                    this$1.deletePath(p);
                    cb(null);
                }
            });
        });
    };
    UnlockedOverlayFS.prototype.unlinkSync = function unlinkSync (p) {
        this.checkInitialized();
        this.checkPath(p);
        if (this.existsSync(p)) {
            if (this._writable.existsSync(p)) {
                this._writable.unlinkSync(p);
            }
            // if it still exists add to the delete log
            if (this.existsSync(p)) {
                this.deletePath(p);
            }
        }
        else {
            throw ApiError.ENOENT(p);
        }
    };
    UnlockedOverlayFS.prototype.rmdir = function rmdir (p, cb) {
        var this$1 = this;

        if (!this.checkInitAsync(cb)) {
            return;
        }
        var rmdirLower = function () {
            this$1.readdir(p, function (err, files) {
                if (err) {
                    return cb(err);
                }
                if (files.length) {
                    return cb(ApiError.ENOTEMPTY(p));
                }
                this$1.deletePath(p);
                cb(null);
            });
        };
        this.exists(p, function (exists) {
            if (!exists) {
                return cb(ApiError.ENOENT(p));
            }
            this$1._writable.exists(p, function (writableExists) {
                if (writableExists) {
                    this$1._writable.rmdir(p, function (err) {
                        if (err) {
                            return cb(err);
                        }
                        this$1._readable.exists(p, function (readableExists) {
                            if (readableExists) {
                                rmdirLower();
                            }
                            else {
                                cb();
                            }
                        });
                    });
                }
                else {
                    rmdirLower();
                }
            });
        });
    };
    UnlockedOverlayFS.prototype.rmdirSync = function rmdirSync (p) {
        this.checkInitialized();
        if (this.existsSync(p)) {
            if (this._writable.existsSync(p)) {
                this._writable.rmdirSync(p);
            }
            if (this.existsSync(p)) {
                // Check if directory is empty.
                if (this.readdirSync(p).length > 0) {
                    throw ApiError.ENOTEMPTY(p);
                }
                else {
                    this.deletePath(p);
                }
            }
        }
        else {
            throw ApiError.ENOENT(p);
        }
    };
    UnlockedOverlayFS.prototype.mkdir = function mkdir (p, mode, cb) {
        var this$1 = this;

        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.exists(p, function (exists) {
            if (exists) {
                return cb(ApiError.EEXIST(p));
            }
            // The below will throw should any of the parent directories
            // fail to exist on _writable.
            this$1.createParentDirectoriesAsync(p, function (err) {
                if (err) {
                    return cb(err);
                }
                this$1._writable.mkdir(p, mode, cb);
            });
        });
    };
    UnlockedOverlayFS.prototype.mkdirSync = function mkdirSync (p, mode) {
        this.checkInitialized();
        if (this.existsSync(p)) {
            throw ApiError.EEXIST(p);
        }
        else {
            // The below will throw should any of the parent directories fail to exist
            // on _writable.
            this.createParentDirectories(p);
            this._writable.mkdirSync(p, mode);
        }
    };
    UnlockedOverlayFS.prototype.readdir = function readdir (p, cb) {
        var this$1 = this;

        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.stat(p, false, function (err, dirStats) {
            if (err) {
                return cb(err);
            }
            if (!dirStats.isDirectory()) {
                return cb(ApiError.ENOTDIR(p));
            }
            this$1._writable.readdir(p, function (err, wFiles) {
                if (err && err.code !== 'ENOENT') {
                    return cb(err);
                }
                else if (err || !wFiles) {
                    wFiles = [];
                }
                this$1._readable.readdir(p, function (err, rFiles) {
                    // if the directory doesn't exist on the lower FS set rFiles
                    // here to simplify the following code.
                    if (err || !rFiles) {
                        rFiles = [];
                    }
                    // Readdir in both, check delete log on read-only file system's files, merge, return.
                    var seenMap = {};
                    var filtered = wFiles.concat(rFiles.filter(function (fPath) { return !this$1._deletedFiles[(p + "/" + fPath)]; })).filter(function (fPath) {
                        // Remove duplicates.
                        var result = !seenMap[fPath];
                        seenMap[fPath] = true;
                        return result;
                    });
                    cb(null, filtered);
                });
            });
        });
    };
    UnlockedOverlayFS.prototype.readdirSync = function readdirSync (p) {
        var this$1 = this;

        this.checkInitialized();
        var dirStats = this.statSync(p, false);
        if (!dirStats.isDirectory()) {
            throw ApiError.ENOTDIR(p);
        }
        // Readdir in both, check delete log on RO file system's listing, merge, return.
        var contents = [];
        try {
            contents = contents.concat(this._writable.readdirSync(p));
        }
        catch (e) {
            // NOP.
        }
        try {
            contents = contents.concat(this._readable.readdirSync(p).filter(function (fPath) { return !this$1._deletedFiles[(p + "/" + fPath)]; }));
        }
        catch (e) {
            // NOP.
        }
        var seenMap = {};
        return contents.filter(function (fileP) {
            var result = !seenMap[fileP];
            seenMap[fileP] = true;
            return result;
        });
    };
    UnlockedOverlayFS.prototype.exists = function exists (p, cb) {
        var this$1 = this;

        // Cannot pass an error back to callback, so throw an exception instead
        // if not initialized.
        this.checkInitialized();
        this._writable.exists(p, function (existsWritable) {
            if (existsWritable) {
                return cb(true);
            }
            this$1._readable.exists(p, function (existsReadable) {
                cb(existsReadable && this$1._deletedFiles[p] !== true);
            });
        });
    };
    UnlockedOverlayFS.prototype.existsSync = function existsSync (p) {
        this.checkInitialized();
        return this._writable.existsSync(p) || (this._readable.existsSync(p) && this._deletedFiles[p] !== true);
    };
    UnlockedOverlayFS.prototype.chmod = function chmod (p, isLchmod, mode, cb) {
        var this$1 = this;

        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.operateOnWritableAsync(p, function (err) {
            if (err) {
                return cb(err);
            }
            else {
                this$1._writable.chmod(p, isLchmod, mode, cb);
            }
        });
    };
    UnlockedOverlayFS.prototype.chmodSync = function chmodSync (p, isLchmod, mode) {
        var this$1 = this;

        this.checkInitialized();
        this.operateOnWritable(p, function () {
            this$1._writable.chmodSync(p, isLchmod, mode);
        });
    };
    UnlockedOverlayFS.prototype.chown = function chown (p, isLchmod, uid, gid, cb) {
        var this$1 = this;

        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.operateOnWritableAsync(p, function (err) {
            if (err) {
                return cb(err);
            }
            else {
                this$1._writable.chown(p, isLchmod, uid, gid, cb);
            }
        });
    };
    UnlockedOverlayFS.prototype.chownSync = function chownSync (p, isLchown, uid, gid) {
        var this$1 = this;

        this.checkInitialized();
        this.operateOnWritable(p, function () {
            this$1._writable.chownSync(p, isLchown, uid, gid);
        });
    };
    UnlockedOverlayFS.prototype.utimes = function utimes (p, atime, mtime, cb) {
        var this$1 = this;

        if (!this.checkInitAsync(cb)) {
            return;
        }
        this.operateOnWritableAsync(p, function (err) {
            if (err) {
                return cb(err);
            }
            else {
                this$1._writable.utimes(p, atime, mtime, cb);
            }
        });
    };
    UnlockedOverlayFS.prototype.utimesSync = function utimesSync (p, atime, mtime) {
        var this$1 = this;

        this.checkInitialized();
        this.operateOnWritable(p, function () {
            this$1._writable.utimesSync(p, atime, mtime);
        });
    };
    UnlockedOverlayFS.prototype.deletePath = function deletePath (p) {
        this._deletedFiles[p] = true;
        this.updateLog(("d" + p + "\n"));
    };
    UnlockedOverlayFS.prototype.updateLog = function updateLog (addition) {
        var this$1 = this;

        this._deleteLog += addition;
        if (this._deleteLogUpdatePending) {
            this._deleteLogUpdateNeeded = true;
        }
        else {
            this._deleteLogUpdatePending = true;
            this._writable.writeFile(deletionLogPath, this._deleteLog, 'utf8', FileFlag.getFileFlag('w'), 420, function (e) {
                this$1._deleteLogUpdatePending = false;
                if (e) {
                    this$1._deleteLogError = e;
                }
                else if (this$1._deleteLogUpdateNeeded) {
                    this$1._deleteLogUpdateNeeded = false;
                    this$1.updateLog('');
                }
            });
        }
    };
    UnlockedOverlayFS.prototype._reparseDeletionLog = function _reparseDeletionLog () {
        var this$1 = this;

        this._deletedFiles = {};
        this._deleteLog.split('\n').forEach(function (path) {
            // If the log entry begins w/ 'd', it's a deletion.
            this$1._deletedFiles[path.slice(1)] = path.slice(0, 1) === 'd';
        });
    };
    UnlockedOverlayFS.prototype.checkInitialized = function checkInitialized () {
        if (!this._isInitialized) {
            throw new ApiError(ErrorCode.EPERM, "OverlayFS is not initialized. Please initialize OverlayFS using its initialize() method before using it.");
        }
        else if (this._deleteLogError !== null) {
            var e = this._deleteLogError;
            this._deleteLogError = null;
            throw e;
        }
    };
    UnlockedOverlayFS.prototype.checkInitAsync = function checkInitAsync (cb) {
        if (!this._isInitialized) {
            cb(new ApiError(ErrorCode.EPERM, "OverlayFS is not initialized. Please initialize OverlayFS using its initialize() method before using it."));
            return false;
        }
        else if (this._deleteLogError !== null) {
            var e = this._deleteLogError;
            this._deleteLogError = null;
            cb(e);
            return false;
        }
        return true;
    };
    UnlockedOverlayFS.prototype.checkPath = function checkPath (p) {
        if (p === deletionLogPath) {
            throw ApiError.EPERM(p);
        }
    };
    UnlockedOverlayFS.prototype.checkPathAsync = function checkPathAsync (p, cb) {
        if (p === deletionLogPath) {
            cb(ApiError.EPERM(p));
            return true;
        }
        return false;
    };
    UnlockedOverlayFS.prototype.createParentDirectoriesAsync = function createParentDirectoriesAsync (p, cb) {
        var parent = path.dirname(p);
        var toCreate = [];
        var self = this;
        this._writable.stat(parent, false, statDone);
        function statDone(err, stat) {
            if (err) {
                if (parent === "/") {
                    cb(new ApiError(ErrorCode.EBUSY, "Invariant failed: root does not exist!"));
                }
                else {
                    toCreate.push(parent);
                    parent = path.dirname(parent);
                    self._writable.stat(parent, false, statDone);
                }
            }
            else {
                createParents();
            }
        }
        function createParents() {
            if (!toCreate.length) {
                return cb();
            }
            var dir = toCreate.pop();
            self._readable.stat(dir, false, function (err, stats) {
                // stop if we couldn't read the dir
                if (!stats) {
                    return cb();
                }
                self._writable.mkdir(dir, stats.mode, function (err) {
                    if (err) {
                        return cb(err);
                    }
                    createParents();
                });
            });
        }
    };
    /**
     * With the given path, create the needed parent directories on the writable storage
     * should they not exist. Use modes from the read-only storage.
     */
    UnlockedOverlayFS.prototype.createParentDirectories = function createParentDirectories (p) {
        var this$1 = this;

        var parent = path.dirname(p), toCreate = [];
        while (!this._writable.existsSync(parent)) {
            toCreate.push(parent);
            parent = path.dirname(parent);
        }
        toCreate = toCreate.reverse();
        toCreate.forEach(function (p) {
            this$1._writable.mkdirSync(p, this$1.statSync(p, false).mode);
        });
    };
    /**
     * Helper function:
     * - Ensures p is on writable before proceeding. Throws an error if it doesn't exist.
     * - Calls f to perform operation on writable.
     */
    UnlockedOverlayFS.prototype.operateOnWritable = function operateOnWritable (p, f) {
        if (this.existsSync(p)) {
            if (!this._writable.existsSync(p)) {
                // File is on readable storage. Copy to writable storage before
                // changing its mode.
                this.copyToWritable(p);
            }
            f();
        }
        else {
            throw ApiError.ENOENT(p);
        }
    };
    UnlockedOverlayFS.prototype.operateOnWritableAsync = function operateOnWritableAsync (p, cb) {
        var this$1 = this;

        this.exists(p, function (exists) {
            if (!exists) {
                return cb(ApiError.ENOENT(p));
            }
            this$1._writable.exists(p, function (existsWritable) {
                if (existsWritable) {
                    cb();
                }
                else {
                    return this$1.copyToWritableAsync(p, cb);
                }
            });
        });
    };
    /**
     * Copy from readable to writable storage.
     * PRECONDITION: File does not exist on writable storage.
     */
    UnlockedOverlayFS.prototype.copyToWritable = function copyToWritable (p) {
        var pStats = this.statSync(p, false);
        if (pStats.isDirectory()) {
            this._writable.mkdirSync(p, pStats.mode);
        }
        else {
            this.writeFileSync(p, this._readable.readFileSync(p, null, getFlag('r')), null, getFlag('w'), this.statSync(p, false).mode);
        }
    };
    UnlockedOverlayFS.prototype.copyToWritableAsync = function copyToWritableAsync (p, cb) {
        var this$1 = this;

        this.stat(p, false, function (err, pStats) {
            if (err) {
                return cb(err);
            }
            if (pStats.isDirectory()) {
                return this$1._writable.mkdir(p, pStats.mode, cb);
            }
            // need to copy file.
            this$1._readable.readFile(p, null, getFlag('r'), function (err, data) {
                if (err) {
                    return cb(err);
                }
                this$1.writeFile(p, data, null, getFlag('w'), pStats.mode, cb);
            });
        });
    };

    return UnlockedOverlayFS;
}(BaseFileSystem));
/**
 * OverlayFS makes a read-only filesystem writable by storing writes on a second,
 * writable file system. Deletes are persisted via metadata stored on the writable
 * file system.
 */
var OverlayFS = /*@__PURE__*/(function (LockedFS) {
    function OverlayFS(writable, readable) {
        LockedFS.call(this, new UnlockedOverlayFS(writable, readable));
    }

    if ( LockedFS ) OverlayFS.__proto__ = LockedFS;
    OverlayFS.prototype = Object.create( LockedFS && LockedFS.prototype );
    OverlayFS.prototype.constructor = OverlayFS;
    OverlayFS.Create = function Create (opts, cb) {
        try {
            var fs = new OverlayFS(opts.writable, opts.readable);
            fs._initialize(function (e) {
                cb(e, fs);
            });
        }
        catch (e) {
            cb(e);
        }
    };
    OverlayFS.isAvailable = function isAvailable () {
        return UnlockedOverlayFS.isAvailable();
    };

    OverlayFS.prototype.getOverlayedFileSystems = function getOverlayedFileSystems () {
        return LockedFS.prototype.getFSUnlocked.call(this).getOverlayedFileSystems();
    };
    OverlayFS.prototype.unwrap = function unwrap () {
        return LockedFS.prototype.getFSUnlocked.call(this);
    };
    OverlayFS.prototype._initialize = function _initialize (cb) {
        LockedFS.prototype.getFSUnlocked.call(this)._initialize(cb);
    };

    return OverlayFS;
}(LockedFS));
OverlayFS.Name = "OverlayFS";
OverlayFS.Options = {
    writable: {
        type: "object",
        description: "The file system to write modified files to."
    },
    readable: {
        type: "object",
        description: "The file system that initially populates this file system."
    }
};

/**
 * Try to convert the given buffer into a string, and pass it to the callback.
 * Optimization that removes the needed try/catch into a helper function, as
 * this is an uncommon case.
 * @hidden
 */
function tryToString$3(buff, encoding, cb) {
    try {
        cb(null, buff.toString(encoding));
    }
    catch (e) {
        cb(e);
    }
}
function syncNotAvailableError$3() {
    throw new ApiError(ErrorCode.ENOTSUP, "Synchronous HTTP download methods are not available in this environment.");
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
var UNPKGRequest = /*@__PURE__*/(function (BaseFileSystem) {
    function UNPKGRequest(meta, dependency, version, preferXHR) {
        if ( preferXHR === void 0 ) preferXHR = false;

        BaseFileSystem.call(this);
        this.dependency = dependency;
        this.version = version;
        this._index = FileIndex.fromUnpkg(meta);
        if (fetchIsAvailable && (!preferXHR || !xhrIsAvailable)) {
            this._requestFileAsyncInternal = fetchFileAsync;
            this._requestFileSizeAsyncInternal = fetchFileSizeAsync;
        }
        else {
            this._requestFileAsyncInternal = asyncDownloadFile;
            this._requestFileSizeAsyncInternal = getFileSizeAsync;
        }
        if (xhrIsAvailable) {
            this._requestFileSyncInternal = syncDownloadFile;
            this._requestFileSizeSyncInternal = getFileSizeSync;
        }
        else {
            this._requestFileSyncInternal = syncNotAvailableError$3;
            this._requestFileSizeSyncInternal = syncNotAvailableError$3;
        }
    }

    if ( BaseFileSystem ) UNPKGRequest.__proto__ = BaseFileSystem;
    UNPKGRequest.prototype = Object.create( BaseFileSystem && BaseFileSystem.prototype );
    UNPKGRequest.prototype.constructor = UNPKGRequest;
    UNPKGRequest.Create = function Create (opts, cb) {
        var URL = "https://unpkg.com/" + (opts.dependency) + "@" + (opts.version);
        asyncDownloadFile((URL + "/?meta"), "json", function (e, data) {
            if (e) {
                cb(e);
            }
            else {
                cb(null, new UNPKGRequest(data, opts.dependency, opts.version));
            }
        });
    };
    UNPKGRequest.isAvailable = function isAvailable () {
        return xhrIsAvailable || fetchIsAvailable;
    };

    UNPKGRequest.prototype.empty = function empty () {
        this._index.fileIterator(function (file) {
            file.fileData = null;
        });
    };
    UNPKGRequest.prototype.getName = function getName () {
        return UNPKGRequest.Name;
    };
    UNPKGRequest.prototype.diskSpace = function diskSpace (path, cb) {
        // Read-only file system. We could calculate the total space, but that's not
        // important right now.
        cb(0, 0);
    };
    UNPKGRequest.prototype.isReadOnly = function isReadOnly () {
        return true;
    };
    UNPKGRequest.prototype.supportsLinks = function supportsLinks () {
        return false;
    };
    UNPKGRequest.prototype.supportsProps = function supportsProps () {
        return false;
    };
    UNPKGRequest.prototype.supportsSynch = function supportsSynch () {
        // Synchronous operations are only available via the XHR interface for now.
        return xhrIsAvailable;
    };
    /**
     * Special HTTPFS function: Preload the given file into the index.
     * @param [String] path
     * @param [BrowserFS.Buffer] buffer
     */
    UNPKGRequest.prototype.preloadFile = function preloadFile (path, buffer) {
        var inode = this._index.getInode(path);
        if (isFileInode(inode)) {
            if (inode === null) {
                throw ApiError.ENOENT(path);
            }
            var stats = inode.getData();
            stats.size = buffer.length;
            stats.fileData = buffer;
        }
        else {
            throw ApiError.EISDIR(path);
        }
    };
    UNPKGRequest.prototype.stat = function stat (path, isLstat, cb) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            return cb(ApiError.ENOENT(path));
        }
        var stats;
        if (isFileInode(inode)) {
            stats = inode.getData();
            // At this point, a non-opened file will still have default stats from the listing.
            if (stats.size < 0) {
                this._requestFileSizeAsync(path, function (e, size) {
                    if (e) {
                        return cb(e);
                    }
                    stats.size = size;
                    cb(null, Stats.clone(stats));
                });
            }
            else {
                cb(null, Stats.clone(stats));
            }
        }
        else if (isDirInode(inode)) {
            stats = inode.getStats();
            cb(null, stats);
        }
        else {
            cb(ApiError.FileError(ErrorCode.EINVAL, path));
        }
    };
    UNPKGRequest.prototype.statSync = function statSync (path, isLstat) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        var stats;
        if (isFileInode(inode)) {
            stats = inode.getData();
            // At this point, a non-opened file will still have default stats from the listing.
            if (stats.size < 0) {
                stats.size = this._requestFileSizeSync(path);
            }
        }
        else if (isDirInode(inode)) {
            stats = inode.getStats();
        }
        else {
            throw ApiError.FileError(ErrorCode.EINVAL, path);
        }
        return stats;
    };
    UNPKGRequest.prototype.open = function open (path, flags, mode, cb) {
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            return cb(new ApiError(ErrorCode.EPERM, path));
        }
        var self = this;
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (inode === null) {
            return cb(ApiError.ENOENT(path));
        }
        if (isFileInode(inode)) {
            var stats = inode.getData();
            switch (flags.pathExistsAction()) {
                case ActionType.THROW_EXCEPTION:
                case ActionType.TRUNCATE_FILE:
                    return cb(ApiError.EEXIST(path));
                case ActionType.NOP:
                    // Use existing file contents.
                    // XXX: Uh, this maintains the previously-used flag.
                    if (stats.fileData) {
                        return cb(null, new NoSyncFile(self, path, flags, Stats.clone(stats), stats.fileData));
                    }
                    // @todo be lazier about actually requesting the file
                    this._requestFileAsync(path, 'buffer', function (err, buffer) {
                        if (err) {
                            return cb(err);
                        }
                        // we don't initially have file sizes
                        stats.size = buffer.length;
                        stats.fileData = buffer;
                        return cb(null, new NoSyncFile(self, path, flags, Stats.clone(stats), buffer));
                    });
                    break;
                default:
                    return cb(new ApiError(ErrorCode.EINVAL, 'Invalid FileMode object.'));
            }
        }
        else {
            return cb(ApiError.EISDIR(path));
        }
    };
    UNPKGRequest.prototype.openSync = function openSync (path, flags, mode) {
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            throw new ApiError(ErrorCode.EPERM, path);
        }
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        if (isFileInode(inode)) {
            var stats = inode.getData();
            switch (flags.pathExistsAction()) {
                case ActionType.THROW_EXCEPTION:
                case ActionType.TRUNCATE_FILE:
                    throw ApiError.EEXIST(path);
                case ActionType.NOP:
                    // Use existing file contents.
                    // XXX: Uh, this maintains the previously-used flag.
                    if (stats.fileData) {
                        return new NoSyncFile(this, path, flags, Stats.clone(stats), stats.fileData);
                    }
                    // @todo be lazier about actually requesting the file
                    var buffer = this._requestFileSync(path, 'buffer');
                    // we don't initially have file sizes
                    stats.size = buffer.length;
                    stats.fileData = buffer;
                    return new NoSyncFile(this, path, flags, Stats.clone(stats), buffer);
                default:
                    throw new ApiError(ErrorCode.EINVAL, 'Invalid FileMode object.');
            }
        }
        else {
            throw ApiError.EISDIR(path);
        }
    };
    UNPKGRequest.prototype.readdir = function readdir (path, cb) {
        try {
            cb(null, this.readdirSync(path));
        }
        catch (e) {
            cb(e);
        }
    };
    UNPKGRequest.prototype.readdirSync = function readdirSync (path) {
        // Check if it exists.
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        else if (isDirInode(inode)) {
            return inode.getListing();
        }
        else {
            throw ApiError.ENOTDIR(path);
        }
    };
    /**
     * We have the entire file as a buffer; optimize readFile.
     */
    UNPKGRequest.prototype.readFile = function readFile (fname, encoding, flag, cb) {
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
                cb(err, copyingSlice(fdBuff));
            }
            else {
                tryToString$3(fdBuff, encoding, cb);
            }
        });
    };
    /**
     * Specially-optimized readfile.
     */
    UNPKGRequest.prototype.readFileSync = function readFileSync (fname, encoding, flag) {
        // Get file.
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                return copyingSlice(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    UNPKGRequest.prototype._getHTTPPath = function _getHTTPPath (filePath) {
        if (filePath.charAt(0) === '/') {
            filePath = filePath.slice(1);
        }
        return ("https://unpkg.com/" + (this.dependency) + "@" + (this.version) + "/" + filePath);
    };
    UNPKGRequest.prototype._requestFileAsync = function _requestFileAsync (p, type, cb) {
        this._requestFileAsyncInternal(this._getHTTPPath(p), type, cb);
    };
    UNPKGRequest.prototype._requestFileSync = function _requestFileSync (p, type) {
        return this._requestFileSyncInternal(this._getHTTPPath(p), type);
    };
    /**
     * Only requests the HEAD content, for the file size.
     */
    UNPKGRequest.prototype._requestFileSizeAsync = function _requestFileSizeAsync (path, cb) {
        this._requestFileSizeAsyncInternal(this._getHTTPPath(path), cb);
    };
    UNPKGRequest.prototype._requestFileSizeSync = function _requestFileSizeSync (path) {
        return this._requestFileSizeSyncInternal(this._getHTTPPath(path));
    };

    return UNPKGRequest;
}(BaseFileSystem));
UNPKGRequest.Name = "UNPKGRequest";
UNPKGRequest.Options = {
    dependency: {
        type: "string",
        description: "Name of dependency"
    },
    version: {
        type: "string",
        description: "Version of dependency, can be semver"
    },
    preferXHR: {
        type: "boolean",
        optional: true,
        description: "Whether to prefer XmlHttpRequest or fetch for async operations if both are available. Default: false"
    }
};

/**
 * Try to convert the given buffer into a string, and pass it to the callback.
 * Optimization that removes the needed try/catch into a helper function, as
 * this is an uncommon case.
 * @hidden
 */
function tryToString$4(buff, encoding, cb) {
    try {
        cb(null, buff.toString(encoding));
    }
    catch (e) {
        cb(e);
    }
}
function syncNotAvailableError$4() {
    throw new ApiError(ErrorCode.ENOTSUP, "Synchronous HTTP download methods are not available in this environment.");
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
var JSDelivrRequest = /*@__PURE__*/(function (BaseFileSystem) {
    function JSDelivrRequest(meta, dependency, version, preferXHR) {
        if ( preferXHR === void 0 ) preferXHR = false;

        BaseFileSystem.call(this);
        this.dependency = dependency;
        this.version = version;
        this._index = FileIndex.fromJSDelivr(meta);
        if (fetchIsAvailable && (!preferXHR || !xhrIsAvailable)) {
            this._requestFileAsyncInternal = fetchFileAsync;
            this._requestFileSizeAsyncInternal = fetchFileSizeAsync;
        }
        else {
            this._requestFileAsyncInternal = asyncDownloadFile;
            this._requestFileSizeAsyncInternal = getFileSizeAsync;
        }
        if (xhrIsAvailable) {
            this._requestFileSyncInternal = syncDownloadFile;
            this._requestFileSizeSyncInternal = getFileSizeSync;
        }
        else {
            this._requestFileSyncInternal = syncNotAvailableError$4;
            this._requestFileSizeSyncInternal = syncNotAvailableError$4;
        }
    }

    if ( BaseFileSystem ) JSDelivrRequest.__proto__ = BaseFileSystem;
    JSDelivrRequest.prototype = Object.create( BaseFileSystem && BaseFileSystem.prototype );
    JSDelivrRequest.prototype.constructor = JSDelivrRequest;
    JSDelivrRequest.Create = function Create (opts, cb) {
        var URL = "https://data.jsdelivr.com/v1/package/npm/" + (opts.dependency) + "@" + (opts.version) + "/flat";
        asyncDownloadFile(URL, "json", function (e, data) {
            if (e) {
                cb(e);
            }
            else {
                cb(null, new JSDelivrRequest(data, opts.dependency, opts.version));
            }
        });
    };
    JSDelivrRequest.isAvailable = function isAvailable () {
        return xhrIsAvailable || fetchIsAvailable;
    };

    JSDelivrRequest.prototype.empty = function empty () {
        this._index.fileIterator(function (file) {
            file.fileData = null;
        });
    };
    JSDelivrRequest.prototype.getName = function getName () {
        return JSDelivrRequest.Name;
    };
    JSDelivrRequest.prototype.diskSpace = function diskSpace (path, cb) {
        // Read-only file system. We could calculate the total space, but that's not
        // important right now.
        cb(0, 0);
    };
    JSDelivrRequest.prototype.isReadOnly = function isReadOnly () {
        return true;
    };
    JSDelivrRequest.prototype.supportsLinks = function supportsLinks () {
        return false;
    };
    JSDelivrRequest.prototype.supportsProps = function supportsProps () {
        return false;
    };
    JSDelivrRequest.prototype.supportsSynch = function supportsSynch () {
        // Synchronous operations are only available via the XHR interface for now.
        return xhrIsAvailable;
    };
    /**
     * Special HTTPFS function: Preload the given file into the index.
     * @param [String] path
     * @param [BrowserFS.Buffer] buffer
     */
    JSDelivrRequest.prototype.preloadFile = function preloadFile (path, buffer) {
        var inode = this._index.getInode(path);
        if (isFileInode(inode)) {
            if (inode === null) {
                throw ApiError.ENOENT(path);
            }
            var stats = inode.getData();
            stats.size = buffer.length;
            stats.fileData = buffer;
        }
        else {
            throw ApiError.EISDIR(path);
        }
    };
    JSDelivrRequest.prototype.stat = function stat (path, isLstat, cb) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            return cb(ApiError.ENOENT(path));
        }
        var stats;
        if (isFileInode(inode)) {
            stats = inode.getData();
            // At this point, a non-opened file will still have default stats from the listing.
            if (stats.size < 0) {
                this._requestFileSizeAsync(path, function (e, size) {
                    if (e) {
                        return cb(e);
                    }
                    stats.size = size;
                    cb(null, Stats.clone(stats));
                });
            }
            else {
                cb(null, Stats.clone(stats));
            }
        }
        else if (isDirInode(inode)) {
            stats = inode.getStats();
            cb(null, stats);
        }
        else {
            cb(ApiError.FileError(ErrorCode.EINVAL, path));
        }
    };
    JSDelivrRequest.prototype.statSync = function statSync (path, isLstat) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        var stats;
        if (isFileInode(inode)) {
            stats = inode.getData();
            // At this point, a non-opened file will still have default stats from the listing.
            if (stats.size < 0) {
                stats.size = this._requestFileSizeSync(path);
            }
        }
        else if (isDirInode(inode)) {
            stats = inode.getStats();
        }
        else {
            throw ApiError.FileError(ErrorCode.EINVAL, path);
        }
        return stats;
    };
    JSDelivrRequest.prototype.open = function open (path, flags, mode, cb) {
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            return cb(new ApiError(ErrorCode.EPERM, path));
        }
        var self = this;
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (inode === null) {
            return cb(ApiError.ENOENT(path));
        }
        if (isFileInode(inode)) {
            var stats = inode.getData();
            switch (flags.pathExistsAction()) {
                case ActionType.THROW_EXCEPTION:
                case ActionType.TRUNCATE_FILE:
                    return cb(ApiError.EEXIST(path));
                case ActionType.NOP:
                    // Use existing file contents.
                    // XXX: Uh, this maintains the previously-used flag.
                    if (stats.fileData) {
                        return cb(null, new NoSyncFile(self, path, flags, Stats.clone(stats), stats.fileData));
                    }
                    // @todo be lazier about actually requesting the file
                    this._requestFileAsync(path, 'buffer', function (err, buffer) {
                        if (err) {
                            return cb(err);
                        }
                        // we don't initially have file sizes
                        stats.size = buffer.length;
                        stats.fileData = buffer;
                        return cb(null, new NoSyncFile(self, path, flags, Stats.clone(stats), buffer));
                    });
                    break;
                default:
                    return cb(new ApiError(ErrorCode.EINVAL, 'Invalid FileMode object.'));
            }
        }
        else {
            return cb(ApiError.EISDIR(path));
        }
    };
    JSDelivrRequest.prototype.openSync = function openSync (path, flags, mode) {
        // INVARIANT: You can't write to files on this file system.
        if (flags.isWriteable()) {
            throw new ApiError(ErrorCode.EPERM, path);
        }
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        if (isFileInode(inode)) {
            var stats = inode.getData();
            switch (flags.pathExistsAction()) {
                case ActionType.THROW_EXCEPTION:
                case ActionType.TRUNCATE_FILE:
                    throw ApiError.EEXIST(path);
                case ActionType.NOP:
                    // Use existing file contents.
                    // XXX: Uh, this maintains the previously-used flag.
                    if (stats.fileData) {
                        return new NoSyncFile(this, path, flags, Stats.clone(stats), stats.fileData);
                    }
                    // @todo be lazier about actually requesting the file
                    var buffer = this._requestFileSync(path, 'buffer');
                    // we don't initially have file sizes
                    stats.size = buffer.length;
                    stats.fileData = buffer;
                    return new NoSyncFile(this, path, flags, Stats.clone(stats), buffer);
                default:
                    throw new ApiError(ErrorCode.EINVAL, 'Invalid FileMode object.');
            }
        }
        else {
            throw ApiError.EISDIR(path);
        }
    };
    JSDelivrRequest.prototype.readdir = function readdir (path, cb) {
        try {
            cb(null, this.readdirSync(path));
        }
        catch (e) {
            cb(e);
        }
    };
    JSDelivrRequest.prototype.readdirSync = function readdirSync (path) {
        // Check if it exists.
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        else if (isDirInode(inode)) {
            return inode.getListing();
        }
        else {
            throw ApiError.ENOTDIR(path);
        }
    };
    /**
     * We have the entire file as a buffer; optimize readFile.
     */
    JSDelivrRequest.prototype.readFile = function readFile (fname, encoding, flag, cb) {
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
                cb(err, copyingSlice(fdBuff));
            }
            else {
                tryToString$4(fdBuff, encoding, cb);
            }
        });
    };
    /**
     * Specially-optimized readfile.
     */
    JSDelivrRequest.prototype.readFileSync = function readFileSync (fname, encoding, flag) {
        // Get file.
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                return copyingSlice(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };
    JSDelivrRequest.prototype._getHTTPPath = function _getHTTPPath (filePath) {
        if (filePath.charAt(0) === '/') {
            filePath = filePath.slice(1);
        }
        return ("https://cdn.jsdelivr.net/npm/" + (this.dependency) + "@" + (this.version) + "/" + filePath);
    };
    JSDelivrRequest.prototype._requestFileAsync = function _requestFileAsync (p, type, cb) {
        this._requestFileAsyncInternal(this._getHTTPPath(p), type, cb);
    };
    JSDelivrRequest.prototype._requestFileSync = function _requestFileSync (p, type) {
        return this._requestFileSyncInternal(this._getHTTPPath(p), type);
    };
    /**
     * Only requests the HEAD content, for the file size.
     */
    JSDelivrRequest.prototype._requestFileSizeAsync = function _requestFileSizeAsync (path, cb) {
        this._requestFileSizeAsyncInternal(this._getHTTPPath(path), cb);
    };
    JSDelivrRequest.prototype._requestFileSizeSync = function _requestFileSizeSync (path) {
        return this._requestFileSizeSyncInternal(this._getHTTPPath(path));
    };

    return JSDelivrRequest;
}(BaseFileSystem));
JSDelivrRequest.Name = "JSDelivrRequest";
JSDelivrRequest.Options = {
    dependency: {
        type: "string",
        description: "Name of dependency"
    },
    version: {
        type: "string",
        description: "Version of dependency, has to be absolute"
    },
    preferXHR: {
        type: "boolean",
        optional: true,
        description: "Whether to prefer XmlHttpRequest or fetch for async operations if both are available. Default: false"
    }
};

/* eslint-disable max-classes-per-file */
var WebsocketFS = /*@__PURE__*/(function (SynchronousFileSystem) {
    function WebsocketFS(options) {
        SynchronousFileSystem.call(this);
        this.socket = options.socket;
    }

    if ( SynchronousFileSystem ) WebsocketFS.__proto__ = SynchronousFileSystem;
    WebsocketFS.prototype = Object.create( SynchronousFileSystem && SynchronousFileSystem.prototype );
    WebsocketFS.prototype.constructor = WebsocketFS;
    WebsocketFS.Create = function Create (options, cb) {
        cb(null, new WebsocketFS(options));
    };
    WebsocketFS.isAvailable = function isAvailable () {
        return true;
    };

    WebsocketFS.prototype.getName = function getName () {
        return "WebsocketFS";
    };
    WebsocketFS.prototype.isReadOnly = function isReadOnly () {
        return false;
    };
    WebsocketFS.prototype.supportsProps = function supportsProps () {
        return false;
    };
    WebsocketFS.prototype.supportsSynch = function supportsSynch () {
        return true;
    };
    WebsocketFS.prototype.readFile = function readFile (fname, encoding, flag, cb) {
        try {
            this.socket.emit({
                method: 'readFile',
                args: {
                    path: fname,
                    encoding: encoding,
                    flag: flag
                }
            }, function (ref) {
                var error = ref.error;
                var data = ref.data;

                if (data) {
                    cb(null, Buffer.from(data));
                }
                else {
                    cb(error);
                }
            });
        }
        catch (e) {
            cb(e);
        }
    };
    WebsocketFS.prototype.stat = function stat (p, isLstat, cb) {
        try {
            this.socket.emit({
                method: 'stat',
                args: {
                    path: p,
                    isLstat: isLstat
                }
            }, function (ref) {
                var error = ref.error;
                var data = ref.data;

                if (data) {
                    cb(null, Object.assign(Object.assign({}, data), { atime: new Date(data.atime), mtime: new Date(data.mtime), ctime: new Date(data.ctime), birthtime: new Date(data.birthtime) }));
                }
                else {
                    cb(error);
                }
            });
        }
        catch (e) {
            cb(e);
        }
    };

    return WebsocketFS;
}(SynchronousFileSystem));
WebsocketFS.Name = "WebsocketFS";
WebsocketFS.Options = {
    socket: {
        type: "object",
        description: "The socket emitter",
        validator: function (opt, cb) {
            if (opt) {
                cb();
            }
            else {
                cb(new ApiError(ErrorCode.EINVAL, "Manager is invalid"));
            }
        }
    }
};
/*
this.statSync(p, isLstat || true)
*/

/**
 * @hidden
 */
var SpecialArgType;
(function (SpecialArgType) {
    // Callback
    SpecialArgType[SpecialArgType["CB"] = 0] = "CB";
    // File descriptor
    SpecialArgType[SpecialArgType["FD"] = 1] = "FD";
    // API error
    SpecialArgType[SpecialArgType["API_ERROR"] = 2] = "API_ERROR";
    // Stats object
    SpecialArgType[SpecialArgType["STATS"] = 3] = "STATS";
    // Initial probe for file system information.
    SpecialArgType[SpecialArgType["PROBE"] = 4] = "PROBE";
    // FileFlag object.
    SpecialArgType[SpecialArgType["FILEFLAG"] = 5] = "FILEFLAG";
    // Buffer object.
    SpecialArgType[SpecialArgType["BUFFER"] = 6] = "BUFFER";
    // Generic Error object.
    SpecialArgType[SpecialArgType["ERROR"] = 7] = "ERROR";
})(SpecialArgType || (SpecialArgType = {}));
/**
 * Converts callback arguments into ICallbackArgument objects, and back
 * again.
 * @hidden
 */
var CallbackArgumentConverter = function CallbackArgumentConverter() {
    this._callbacks = {};
    this._nextId = 0;
};
CallbackArgumentConverter.prototype.toRemoteArg = function toRemoteArg (cb) {
    var id = this._nextId++;
    this._callbacks[id] = cb;
    return {
        type: SpecialArgType.CB,
        id: id
    };
};
CallbackArgumentConverter.prototype.toLocalArg = function toLocalArg (id) {
    var cb = this._callbacks[id];
    delete this._callbacks[id];
    return cb;
};
/**
 * @hidden
 */
var FileDescriptorArgumentConverter = function FileDescriptorArgumentConverter() {
    this._fileDescriptors = {};
    this._nextId = 0;
};
FileDescriptorArgumentConverter.prototype.toRemoteArg = function toRemoteArg (fd, p, flag, cb) {
    var id = this._nextId++;
    var data;
    var stat;
    this._fileDescriptors[id] = fd;
    // Extract needed information asynchronously.
    fd.stat(function (err, stats) {
        if (err) {
            cb(err);
        }
        else {
            stat = bufferToTransferrableObject(stats.toBuffer());
            // If it's a readable flag, we need to grab contents.
            if (flag.isReadable()) {
                fd.read(Buffer.alloc(stats.size), 0, stats.size, 0, function (err, bytesRead, buff) {
                    if (err) {
                        cb(err);
                    }
                    else {
                        data = bufferToTransferrableObject(buff);
                        cb(null, {
                            type: SpecialArgType.FD,
                            id: id,
                            data: data,
                            stat: stat,
                            path: p,
                            flag: flag.getFlagString()
                        });
                    }
                });
            }
            else {
                // File is not readable, which means writing to it will append or
                // truncate/replace existing contents. Return an empty arraybuffer.
                cb(null, {
                    type: SpecialArgType.FD,
                    id: id,
                    data: new ArrayBuffer(0),
                    stat: stat,
                    path: p,
                    flag: flag.getFlagString()
                });
            }
        }
    });
};
FileDescriptorArgumentConverter.prototype.applyFdAPIRequest = function applyFdAPIRequest (request, cb) {
        var this$1 = this;

    var fdArg = request.args[0];
    this._applyFdChanges(fdArg, function (err, fd) {
        if (err) {
            cb(err);
        }
        else {
            // Apply method on now-changed file descriptor.
            fd[request.method](function (e) {
                if (request.method === 'close') {
                    delete this$1._fileDescriptors[fdArg.id];
                }
                cb(e);
            });
        }
    });
};
FileDescriptorArgumentConverter.prototype._applyFdChanges = function _applyFdChanges (remoteFd, cb) {
    var fd = this._fileDescriptors[remoteFd.id], data = transferrableObjectToBuffer(remoteFd.data), remoteStats = Stats.fromBuffer(transferrableObjectToBuffer(remoteFd.stat));
    // Write data if the file is writable.
    var flag = FileFlag.getFileFlag(remoteFd.flag);
    if (flag.isWriteable()) {
        // Appendable: Write to end of file.
        // Writeable: Replace entire contents of file.
        fd.write(data, 0, data.length, flag.isAppendable() ? fd.getPos() : 0, function (e) {
            function applyStatChanges() {
                // Check if mode changed.
                fd.stat(function (e, stats) {
                    if (e) {
                        cb(e);
                    }
                    else {
                        if (stats.mode !== remoteStats.mode) {
                            fd.chmod(remoteStats.mode, function (e) {
                                cb(e, fd);
                            });
                        }
                        else {
                            cb(e, fd);
                        }
                    }
                });
            }
            if (e) {
                cb(e);
            }
            else {
                // If writeable & not appendable, we need to ensure file contents are
                // identical to those from the remote FD. Thus, we truncate to the
                // length of the remote file.
                if (!flag.isAppendable()) {
                    fd.truncate(data.length, function () {
                        applyStatChanges();
                    });
                }
                else {
                    applyStatChanges();
                }
            }
        });
    }
    else {
        cb(null, fd);
    }
};
/**
 * @hidden
 */
function apiErrorLocal2Remote(e) {
    return {
        type: SpecialArgType.API_ERROR,
        errorData: bufferToTransferrableObject(e.writeToBuffer())
    };
}
/**
 * @hidden
 */
function apiErrorRemote2Local(e) {
    return ApiError.fromBuffer(transferrableObjectToBuffer(e.errorData));
}
/**
 * @hidden
 */
function errorLocal2Remote(e) {
    return {
        type: SpecialArgType.ERROR,
        name: e.name,
        message: e.message,
        stack: e.stack
    };
}
/**
 * @hidden
 */
function errorRemote2Local(e) {
    var cnstr = toExport[e.name];
    if (typeof (cnstr) !== 'function') {
        cnstr = Error;
    }
    var err = new cnstr(e.message);
    err.stack = e.stack;
    return err;
}
/**
 * @hidden
 */
function statsLocal2Remote(stats) {
    return {
        type: SpecialArgType.STATS,
        statsData: bufferToTransferrableObject(stats.toBuffer())
    };
}
/**
 * @hidden
 */
function statsRemote2Local(stats) {
    return Stats.fromBuffer(transferrableObjectToBuffer(stats.statsData));
}
/**
 * @hidden
 */
function fileFlagLocal2Remote(flag) {
    return {
        type: SpecialArgType.FILEFLAG,
        flagStr: flag.getFlagString()
    };
}
/**
 * @hidden
 */
function fileFlagRemote2Local(remoteFlag) {
    return FileFlag.getFileFlag(remoteFlag.flagStr);
}
/**
 * @hidden
 */
function bufferToTransferrableObject(buff) {
    return buffer2ArrayBuffer(buff);
}
/**
 * @hidden
 */
function transferrableObjectToBuffer(buff) {
    return arrayBuffer2Buffer(buff);
}
/**
 * @hidden
 */
function bufferLocal2Remote(buff) {
    return {
        type: SpecialArgType.BUFFER,
        data: bufferToTransferrableObject(buff)
    };
}
/**
 * @hidden
 */
function bufferRemote2Local(buffArg) {
    return transferrableObjectToBuffer(buffArg.data);
}
/**
 * @hidden
 */
function isAPIRequest(data) {
    return data && typeof data === 'object' && data.hasOwnProperty('browserfsMessage') && data['browserfsMessage'];
}
/**
 * @hidden
 */
function isAPIResponse(data) {
    return data && typeof data === 'object' && data.hasOwnProperty('browserfsMessage') && data['browserfsMessage'];
}
/**
 * Represents a remote file in a different worker/thread.
 */
var WorkerFile = /*@__PURE__*/(function (PreloadFile) {
    function WorkerFile(_fs, _path, _flag, _stat, remoteFdId, contents) {
        PreloadFile.call(this, _fs, _path, _flag, _stat, contents);
        this._remoteFdId = remoteFdId;
    }

    if ( PreloadFile ) WorkerFile.__proto__ = PreloadFile;
    WorkerFile.prototype = Object.create( PreloadFile && PreloadFile.prototype );
    WorkerFile.prototype.constructor = WorkerFile;
    WorkerFile.prototype.getRemoteFdId = function getRemoteFdId () {
        return this._remoteFdId;
    };
    /**
     * @hidden
     */
    WorkerFile.prototype.toRemoteArg = function toRemoteArg () {
        return {
            type: SpecialArgType.FD,
            id: this._remoteFdId,
            data: bufferToTransferrableObject(this.getBuffer()),
            stat: bufferToTransferrableObject(this.getStats().toBuffer()),
            path: this.getPath(),
            flag: this.getFlag().getFlagString()
        };
    };
    WorkerFile.prototype.sync = function sync (cb) {
        this._syncClose('sync', cb);
    };
    WorkerFile.prototype.close = function close (cb) {
        this._syncClose('close', cb);
    };
    WorkerFile.prototype._syncClose = function _syncClose (type, cb) {
        var this$1 = this;

        if (this.isDirty()) {
            this._fs.syncClose(type, this, function (e) {
                if (!e) {
                    this$1.resetDirty();
                }
                cb(e);
            });
        }
        else {
            cb();
        }
    };

    return WorkerFile;
}(PreloadFile));
/**
 * WorkerFS lets you access a BrowserFS instance that is running in a different
 * JavaScript context (e.g. access BrowserFS in one of your WebWorkers, or
 * access BrowserFS running on the main page from a WebWorker).
 *
 * For example, to have a WebWorker access files in the main browser thread,
 * do the following:
 *
 * MAIN BROWSER THREAD:
 *
 * ```javascript
 *   // Listen for remote file system requests.
 *   BrowserFS.FileSystem.WorkerFS.attachRemoteListener(webWorkerObject);
 * ```
 *
 * WEBWORKER THREAD:
 *
 * ```javascript
 *   // Set the remote file system as the root file system.
 *   BrowserFS.configure({ fs: "WorkerFS", options: { worker: self }}, function(e) {
 *     // Ready!
 *   });
 * ```
 *
 * Note that synchronous operations are not permitted on the WorkerFS, regardless
 * of the configuration option of the remote FS.
 */
var WorkerFS = /*@__PURE__*/(function (BaseFileSystem) {
    function WorkerFS(worker) {
        var this$1 = this;

        BaseFileSystem.call(this);
        this._callbackConverter = new CallbackArgumentConverter();
        this._isInitialized = false;
        this._isReadOnly = false;
        this._supportLinks = false;
        this._supportProps = false;
        this._worker = worker;
        this._worker.addEventListener('message', function (e) {
            var resp = e.data;
            if (isAPIResponse(resp)) {
                var i;
                var args = resp.args;
                var fixedArgs = new Array(args.length);
                // Dispatch event to correct id.
                for (i = 0; i < fixedArgs.length; i++) {
                    fixedArgs[i] = this$1._argRemote2Local(args[i]);
                }
                this$1._callbackConverter.toLocalArg(resp.cbId).apply(null, fixedArgs);
            }
        });
    }

    if ( BaseFileSystem ) WorkerFS.__proto__ = BaseFileSystem;
    WorkerFS.prototype = Object.create( BaseFileSystem && BaseFileSystem.prototype );
    WorkerFS.prototype.constructor = WorkerFS;
    WorkerFS.Create = function Create (opts, cb) {
        var fs = new WorkerFS(opts.worker);
        fs._initialize(function () {
            cb(null, fs);
        });
    };
    WorkerFS.isAvailable = function isAvailable () {
        return typeof (importScripts) !== 'undefined' || typeof (Worker) !== 'undefined';
    };
    /**
     * Attaches a listener to the remote worker for file system requests.
     */
    WorkerFS.attachRemoteListener = function attachRemoteListener (worker) {
        var fdConverter = new FileDescriptorArgumentConverter();
        function argLocal2Remote(arg, requestArgs, cb) {
            switch (typeof arg) {
                case 'object':
                    if (arg instanceof Stats) {
                        cb(null, statsLocal2Remote(arg));
                    }
                    else if (arg instanceof ApiError) {
                        cb(null, apiErrorLocal2Remote(arg));
                    }
                    else if (arg instanceof BaseFile) {
                        // Pass in p and flags from original request.
                        cb(null, fdConverter.toRemoteArg(arg, requestArgs[0], requestArgs[1], cb));
                    }
                    else if (arg instanceof FileFlag) {
                        cb(null, fileFlagLocal2Remote(arg));
                    }
                    else if (arg instanceof Buffer) {
                        cb(null, bufferLocal2Remote(arg));
                    }
                    else if (arg instanceof Error) {
                        cb(null, errorLocal2Remote(arg));
                    }
                    else {
                        cb(null, arg);
                    }
                    break;
                default:
                    cb(null, arg);
                    break;
            }
        }
        function argRemote2Local(arg, fixedRequestArgs) {
            if (!arg) {
                return arg;
            }
            switch (typeof arg) {
                case 'object':
                    if (typeof arg['type'] === 'number') {
                        var specialArg = arg;
                        switch (specialArg.type) {
                            case SpecialArgType.CB:
                                var cbId = arg.id;
                                return function () {
                                    var arguments$1 = arguments;

                                    var i;
                                    var fixedArgs = new Array(arguments.length);
                                    var message, countdown = arguments.length;
                                    function abortAndSendError(err) {
                                        if (countdown > 0) {
                                            countdown = -1;
                                            message = {
                                                browserfsMessage: true,
                                                cbId: cbId,
                                                args: [apiErrorLocal2Remote(err)]
                                            };
                                            worker.postMessage(message);
                                        }
                                    }
                                    for (i = 0; i < arguments.length; i++) {
                                        // Capture i and argument.
                                        (function (i, arg) {
                                            argLocal2Remote(arg, fixedRequestArgs, function (err, fixedArg) {
                                                fixedArgs[i] = fixedArg;
                                                if (err) {
                                                    abortAndSendError(err);
                                                }
                                                else if (--countdown === 0) {
                                                    message = {
                                                        browserfsMessage: true,
                                                        cbId: cbId,
                                                        args: fixedArgs
                                                    };
                                                    worker.postMessage(message);
                                                }
                                            });
                                        })(i, arguments$1[i]);
                                    }
                                    if (arguments.length === 0) {
                                        message = {
                                            browserfsMessage: true,
                                            cbId: cbId,
                                            args: fixedArgs
                                        };
                                        worker.postMessage(message);
                                    }
                                };
                            case SpecialArgType.API_ERROR:
                                return apiErrorRemote2Local(specialArg);
                            case SpecialArgType.STATS:
                                return statsRemote2Local(specialArg);
                            case SpecialArgType.FILEFLAG:
                                return fileFlagRemote2Local(specialArg);
                            case SpecialArgType.BUFFER:
                                return bufferRemote2Local(specialArg);
                            case SpecialArgType.ERROR:
                                return errorRemote2Local(specialArg);
                            default:
                                // No idea what this is.
                                return arg;
                        }
                    }
                    else {
                        return arg;
                    }
                default:
                    return arg;
            }
        }
        worker.addEventListener('message', function (e) {
            var request = e.data;
            if (isAPIRequest(request)) {
                var args = request.args, fixedArgs = new Array(args.length);
                switch (request.method) {
                    case 'close':
                    case 'sync':
                        (function () {
                            // File descriptor-relative methods.
                            var remoteCb = args[1];
                            fdConverter.applyFdAPIRequest(request, function (err) {
                                // Send response.
                                var response = {
                                    browserfsMessage: true,
                                    cbId: remoteCb.id,
                                    args: err ? [apiErrorLocal2Remote(err)] : []
                                };
                                worker.postMessage(response);
                            });
                        })();
                        break;
                    case 'probe':
                        (function () {
                            var rootFs = _fsMock.getRootFS(), remoteCb = args[1], probeResponse = {
                                type: SpecialArgType.PROBE,
                                isReadOnly: rootFs.isReadOnly(),
                                supportsLinks: rootFs.supportsLinks(),
                                supportsProps: rootFs.supportsProps()
                            }, response = {
                                browserfsMessage: true,
                                cbId: remoteCb.id,
                                args: [probeResponse]
                            };
                            worker.postMessage(response);
                        })();
                        break;
                    default:
                        // File system methods.
                        for (var i = 0; i < args.length; i++) {
                            fixedArgs[i] = argRemote2Local(args[i], fixedArgs);
                        }
                        var rootFS = _fsMock.getRootFS();
                        rootFS[request.method].apply(rootFS, fixedArgs);
                        break;
                }
            }
        });
    };

    WorkerFS.prototype.getName = function getName () {
        return WorkerFS.Name;
    };
    WorkerFS.prototype.isReadOnly = function isReadOnly () { return this._isReadOnly; };
    WorkerFS.prototype.supportsSynch = function supportsSynch () { return false; };
    WorkerFS.prototype.supportsLinks = function supportsLinks () { return this._supportLinks; };
    WorkerFS.prototype.supportsProps = function supportsProps () { return this._supportProps; };
    WorkerFS.prototype.rename = function rename (oldPath, newPath, cb) {
        this._rpc('rename', arguments);
    };
    WorkerFS.prototype.stat = function stat (p, isLstat, cb) {
        this._rpc('stat', arguments);
    };
    WorkerFS.prototype.open = function open (p, flag, mode, cb) {
        this._rpc('open', arguments);
    };
    WorkerFS.prototype.unlink = function unlink (p, cb) {
        this._rpc('unlink', arguments);
    };
    WorkerFS.prototype.rmdir = function rmdir (p, cb) {
        this._rpc('rmdir', arguments);
    };
    WorkerFS.prototype.mkdir = function mkdir (p, mode, cb) {
        this._rpc('mkdir', arguments);
    };
    WorkerFS.prototype.readdir = function readdir (p, cb) {
        this._rpc('readdir', arguments);
    };
    WorkerFS.prototype.exists = function exists (p, cb) {
        this._rpc('exists', arguments);
    };
    WorkerFS.prototype.realpath = function realpath (p, cache, cb) {
        this._rpc('realpath', arguments);
    };
    WorkerFS.prototype.truncate = function truncate (p, len, cb) {
        this._rpc('truncate', arguments);
    };
    WorkerFS.prototype.readFile = function readFile (fname, encoding, flag, cb) {
        this._rpc('readFile', arguments);
    };
    WorkerFS.prototype.writeFile = function writeFile (fname, data, encoding, flag, mode, cb) {
        this._rpc('writeFile', arguments);
    };
    WorkerFS.prototype.appendFile = function appendFile (fname, data, encoding, flag, mode, cb) {
        this._rpc('appendFile', arguments);
    };
    WorkerFS.prototype.chmod = function chmod (p, isLchmod, mode, cb) {
        this._rpc('chmod', arguments);
    };
    WorkerFS.prototype.chown = function chown (p, isLchown, uid, gid, cb) {
        this._rpc('chown', arguments);
    };
    WorkerFS.prototype.utimes = function utimes (p, atime, mtime, cb) {
        this._rpc('utimes', arguments);
    };
    WorkerFS.prototype.link = function link (srcpath, dstpath, cb) {
        this._rpc('link', arguments);
    };
    WorkerFS.prototype.symlink = function symlink (srcpath, dstpath, type, cb) {
        this._rpc('symlink', arguments);
    };
    WorkerFS.prototype.readlink = function readlink (p, cb) {
        this._rpc('readlink', arguments);
    };
    WorkerFS.prototype.syncClose = function syncClose (method, fd, cb) {
        this._worker.postMessage({
            browserfsMessage: true,
            method: method,
            args: [fd.toRemoteArg(), this._callbackConverter.toRemoteArg(cb)]
        });
    };
    /**
     * Called once both local and remote sides are set up.
     */
    WorkerFS.prototype._initialize = function _initialize (cb) {
        var this$1 = this;

        if (!this._isInitialized) {
            var message = {
                browserfsMessage: true,
                method: 'probe',
                args: [this._argLocal2Remote(emptyBuffer()), this._callbackConverter.toRemoteArg(function (probeResponse) {
                        this$1._isInitialized = true;
                        this$1._isReadOnly = probeResponse.isReadOnly;
                        this$1._supportLinks = probeResponse.supportsLinks;
                        this$1._supportProps = probeResponse.supportsProps;
                        cb();
                    })]
            };
            this._worker.postMessage(message);
        }
        else {
            cb();
        }
    };
    WorkerFS.prototype._argRemote2Local = function _argRemote2Local (arg) {
        if (!arg) {
            return arg;
        }
        switch (typeof arg) {
            case 'object':
                if (typeof arg['type'] === 'number') {
                    var specialArg = arg;
                    switch (specialArg.type) {
                        case SpecialArgType.API_ERROR:
                            return apiErrorRemote2Local(specialArg);
                        case SpecialArgType.FD:
                            var fdArg = specialArg;
                            return new WorkerFile(this, fdArg.path, FileFlag.getFileFlag(fdArg.flag), Stats.fromBuffer(transferrableObjectToBuffer(fdArg.stat)), fdArg.id, transferrableObjectToBuffer(fdArg.data));
                        case SpecialArgType.STATS:
                            return statsRemote2Local(specialArg);
                        case SpecialArgType.FILEFLAG:
                            return fileFlagRemote2Local(specialArg);
                        case SpecialArgType.BUFFER:
                            return bufferRemote2Local(specialArg);
                        case SpecialArgType.ERROR:
                            return errorRemote2Local(specialArg);
                        default:
                            return arg;
                    }
                }
                else {
                    return arg;
                }
            default:
                return arg;
        }
    };
    WorkerFS.prototype._rpc = function _rpc (methodName, args) {
        var fixedArgs = new Array(args.length);
        for (var i = 0; i < args.length; i++) {
            fixedArgs[i] = this._argLocal2Remote(args[i]);
        }
        var message = {
            browserfsMessage: true,
            method: methodName,
            args: fixedArgs
        };
        this._worker.postMessage(message);
    };
    /**
     * Converts a local argument into a remote argument. Public so WorkerFile objects can call it.
     */
    WorkerFS.prototype._argLocal2Remote = function _argLocal2Remote (arg) {
        if (!arg) {
            return arg;
        }
        switch (typeof arg) {
            case "object":
                if (arg instanceof Stats) {
                    return statsLocal2Remote(arg);
                }
                else if (arg instanceof ApiError) {
                    return apiErrorLocal2Remote(arg);
                }
                else if (arg instanceof WorkerFile) {
                    return arg.toRemoteArg();
                }
                else if (arg instanceof FileFlag) {
                    return fileFlagLocal2Remote(arg);
                }
                else if (arg instanceof Buffer) {
                    return bufferLocal2Remote(arg);
                }
                else if (arg instanceof Error) {
                    return errorLocal2Remote(arg);
                }
                else {
                    return "Unknown argument";
                }
            case "function":
                return this._callbackConverter.toRemoteArg(arg);
            default:
                return arg;
        }
    };

    return WorkerFS;
}(BaseFileSystem));
WorkerFS.Name = "WorkerFS";
WorkerFS.Options = {
    worker: {
        type: "object",
        description: "The target worker that you want to connect to, or the current worker if in a worker context.",
        validator: function (v, cb) {
            // Check for a `postMessage` function.
            if (v['postMessage']) {
                cb();
            }
            else {
                cb(new ApiError(ErrorCode.EINVAL, "option must be a Web Worker instance."));
            }
        }
    }
};

/**
 * (Nonstandard) String utility function for 8-bit ASCII with the extended
 * character set. Unlike the ASCII above, we do not mask the high bits.
 *
 * Placed into a separate file so it can be used with other Buffer implementations.
 * @see http://en.wikipedia.org/wiki/Extended_ASCII
 */
var ExtendedASCII = function ExtendedASCII () {};

ExtendedASCII.str2byte = function str2byte (str, buf) {
    var length = str.length > buf.length ? buf.length : str.length;
    for (var i = 0; i < length; i++) {
        var charCode = str.charCodeAt(i);
        if (charCode > 0x7F) {
            // Check if extended ASCII.
            var charIdx = ExtendedASCII.extendedChars.indexOf(str.charAt(i));
            if (charIdx > -1) {
                charCode = charIdx + 0x80;
            }
            // Otherwise, keep it as-is.
        }
        buf[charCode] = i;
    }
    return length;
};
ExtendedASCII.byte2str = function byte2str (buff) {
    var chars = new Array(buff.length);
    for (var i = 0; i < buff.length; i++) {
        var charCode = buff[i];
        if (charCode > 0x7F) {
            chars[i] = ExtendedASCII.extendedChars[charCode - 128];
        }
        else {
            chars[i] = String.fromCharCode(charCode);
        }
    }
    return chars.join('');
};
ExtendedASCII.byteLength = function byteLength (str) { return str.length; };
ExtendedASCII.extendedChars = ['\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4',
    '\u00E0', '\u00E5', '\u00E7', '\u00EA', '\u00EB', '\u00E8', '\u00EF',
    '\u00EE', '\u00EC', '\u00C4', '\u00C5', '\u00C9', '\u00E6', '\u00C6',
    '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9', '\u00FF', '\u00D6',
    '\u00DC', '\u00F8', '\u00A3', '\u00D8', '\u00D7', '\u0192', '\u00E1',
    '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00D1', '\u00AA', '\u00BA',
    '\u00BF', '\u00AE', '\u00AC', '\u00BD', '\u00BC', '\u00A1', '\u00AB',
    '\u00BB', '_', '_', '_', '\u00A6', '\u00A6', '\u00C1', '\u00C2', '\u00C0',
    '\u00A9', '\u00A6', '\u00A6', '+', '+', '\u00A2', '\u00A5', '+', '+', '-',
    '-', '+', '-', '+', '\u00E3', '\u00C3', '+', '+', '-', '-', '\u00A6', '-',
    '+', '\u00A4', '\u00F0', '\u00D0', '\u00CA', '\u00CB', '\u00C8', 'i',
    '\u00CD', '\u00CE', '\u00CF', '+', '+', '_', '_', '\u00A6', '\u00CC', '_',
    '\u00D3', '\u00DF', '\u00D4', '\u00D2', '\u00F5', '\u00D5', '\u00B5',
    '\u00FE', '\u00DE', '\u00DA', '\u00DB', '\u00D9', '\u00FD', '\u00DD',
    '\u00AF', '\u00B4', '\u00AD', '\u00B1', '_', '\u00BE', '\u00B6', '\u00A7',
    '\u00F7', '\u00B8', '\u00B0', '\u00A8', '\u00B7', '\u00B9', '\u00B3',
    '\u00B2', '_', ' '];

/**
 * @hidden
 */
var inflateRaw = __webpack_require__(/*! pako/lib/inflate */ "./node_modules/pako/lib/inflate.js").inflateRaw;
/**
 * Maps CompressionMethod => function that decompresses.
 * @hidden
 */
var decompressionMethods = {};
/**
 * 4.4.2.2: Indicates the compatibiltiy of a file's external attributes.
 */
var ExternalFileAttributeType;
(function (ExternalFileAttributeType) {
    ExternalFileAttributeType[ExternalFileAttributeType["MSDOS"] = 0] = "MSDOS";
    ExternalFileAttributeType[ExternalFileAttributeType["AMIGA"] = 1] = "AMIGA";
    ExternalFileAttributeType[ExternalFileAttributeType["OPENVMS"] = 2] = "OPENVMS";
    ExternalFileAttributeType[ExternalFileAttributeType["UNIX"] = 3] = "UNIX";
    ExternalFileAttributeType[ExternalFileAttributeType["VM_CMS"] = 4] = "VM_CMS";
    ExternalFileAttributeType[ExternalFileAttributeType["ATARI_ST"] = 5] = "ATARI_ST";
    ExternalFileAttributeType[ExternalFileAttributeType["OS2_HPFS"] = 6] = "OS2_HPFS";
    ExternalFileAttributeType[ExternalFileAttributeType["MAC"] = 7] = "MAC";
    ExternalFileAttributeType[ExternalFileAttributeType["Z_SYSTEM"] = 8] = "Z_SYSTEM";
    ExternalFileAttributeType[ExternalFileAttributeType["CP_M"] = 9] = "CP_M";
    ExternalFileAttributeType[ExternalFileAttributeType["NTFS"] = 10] = "NTFS";
    ExternalFileAttributeType[ExternalFileAttributeType["MVS"] = 11] = "MVS";
    ExternalFileAttributeType[ExternalFileAttributeType["VSE"] = 12] = "VSE";
    ExternalFileAttributeType[ExternalFileAttributeType["ACORN_RISC"] = 13] = "ACORN_RISC";
    ExternalFileAttributeType[ExternalFileAttributeType["VFAT"] = 14] = "VFAT";
    ExternalFileAttributeType[ExternalFileAttributeType["ALT_MVS"] = 15] = "ALT_MVS";
    ExternalFileAttributeType[ExternalFileAttributeType["BEOS"] = 16] = "BEOS";
    ExternalFileAttributeType[ExternalFileAttributeType["TANDEM"] = 17] = "TANDEM";
    ExternalFileAttributeType[ExternalFileAttributeType["OS_400"] = 18] = "OS_400";
    ExternalFileAttributeType[ExternalFileAttributeType["OSX"] = 19] = "OSX";
})(ExternalFileAttributeType || (ExternalFileAttributeType = {}));
/**
 * 4.4.5
 */
var CompressionMethod;
(function (CompressionMethod) {
    CompressionMethod[CompressionMethod["STORED"] = 0] = "STORED";
    CompressionMethod[CompressionMethod["SHRUNK"] = 1] = "SHRUNK";
    CompressionMethod[CompressionMethod["REDUCED_1"] = 2] = "REDUCED_1";
    CompressionMethod[CompressionMethod["REDUCED_2"] = 3] = "REDUCED_2";
    CompressionMethod[CompressionMethod["REDUCED_3"] = 4] = "REDUCED_3";
    CompressionMethod[CompressionMethod["REDUCED_4"] = 5] = "REDUCED_4";
    CompressionMethod[CompressionMethod["IMPLODE"] = 6] = "IMPLODE";
    CompressionMethod[CompressionMethod["DEFLATE"] = 8] = "DEFLATE";
    CompressionMethod[CompressionMethod["DEFLATE64"] = 9] = "DEFLATE64";
    CompressionMethod[CompressionMethod["TERSE_OLD"] = 10] = "TERSE_OLD";
    CompressionMethod[CompressionMethod["BZIP2"] = 12] = "BZIP2";
    CompressionMethod[CompressionMethod["LZMA"] = 14] = "LZMA";
    CompressionMethod[CompressionMethod["TERSE_NEW"] = 18] = "TERSE_NEW";
    CompressionMethod[CompressionMethod["LZ77"] = 19] = "LZ77";
    CompressionMethod[CompressionMethod["WAVPACK"] = 97] = "WAVPACK";
    CompressionMethod[CompressionMethod["PPMD"] = 98] = "PPMD"; // PPMd version I, Rev 1
})(CompressionMethod || (CompressionMethod = {}));
/**
 * Converts the input time and date in MS-DOS format into a JavaScript Date
 * object.
 * @hidden
 */
function msdos2date(time, date) {
    // MS-DOS Date
    // |0 0 0 0  0|0 0 0  0|0 0 0  0 0 0 0
    //   D (1-31)  M (1-23)  Y (from 1980)
    var day = date & 0x1F;
    // JS date is 0-indexed, DOS is 1-indexed.
    var month = ((date >> 5) & 0xF) - 1;
    var year = (date >> 9) + 1980;
    // MS DOS Time
    // |0 0 0 0  0|0 0 0  0 0 0|0  0 0 0 0
    //    Second      Minute       Hour
    var second = time & 0x1F;
    var minute = (time >> 5) & 0x3F;
    var hour = time >> 11;
    return new Date(year, month, day, hour, minute, second);
}
/**
 * Safely returns the string from the buffer, even if it is 0 bytes long.
 * (Normally, calling toString() on a buffer with start === end causes an
 * exception).
 * @hidden
 */
function safeToString(buff, useUTF8, start, length) {
    if (length === 0) {
        return "";
    }
    else if (useUTF8) {
        return buff.toString('utf8', start, start + length);
    }
    else {
        return ExtendedASCII.byte2str(buff.slice(start, start + length));
    }
}
/*
   4.3.6 Overall .ZIP file format:

      [local file header 1]
      [encryption header 1]
      [file data 1]
      [data descriptor 1]
      .
      .
      .
      [local file header n]
      [encryption header n]
      [file data n]
      [data descriptor n]
      [archive decryption header]
      [archive extra data record]
      [central directory header 1]
      .
      .
      .
      [central directory header n]
      [zip64 end of central directory record]
      [zip64 end of central directory locator]
      [end of central directory record]
*/
/**
 * 4.3.7  Local file header:
 *
 *     local file header signature     4 bytes  (0x04034b50)
 *     version needed to extract       2 bytes
 *     general purpose bit flag        2 bytes
 *     compression method              2 bytes
 *    last mod file time              2 bytes
 *    last mod file date              2 bytes
 *    crc-32                          4 bytes
 *    compressed size                 4 bytes
 *    uncompressed size               4 bytes
 *    file name length                2 bytes
 *    extra field length              2 bytes
 *
 *    file name (variable size)
 *    extra field (variable size)
 */
var FileHeader = function FileHeader(data) {
     this.data = data;
     if (data.readUInt32LE(0) !== 0x04034b50) {
         throw new ApiError(ErrorCode.EINVAL, "Invalid Zip file: Local file header has invalid signature: " + this.data.readUInt32LE(0));
     }
 };
 FileHeader.prototype.versionNeeded = function versionNeeded () { return this.data.readUInt16LE(4); };
 FileHeader.prototype.flags = function flags () { return this.data.readUInt16LE(6); };
 FileHeader.prototype.compressionMethod = function compressionMethod () { return this.data.readUInt16LE(8); };
 FileHeader.prototype.lastModFileTime = function lastModFileTime () {
     // Time and date is in MS-DOS format.
     return msdos2date(this.data.readUInt16LE(10), this.data.readUInt16LE(12));
 };
 FileHeader.prototype.rawLastModFileTime = function rawLastModFileTime () {
     return this.data.readUInt32LE(10);
 };
 FileHeader.prototype.crc32 = function crc32 () { return this.data.readUInt32LE(14); };
 /**
  * These two values are COMPLETELY USELESS.
  *
  * Section 4.4.9:
  *If bit 3 of the general purpose bit flag is set,
  *these fields are set to zero in the local header and the
  *correct values are put in the data descriptor and
  *in the central directory.
  *
  * So we'll just use the central directory's values.
  */
 // public compressedSize(): number { return this.data.readUInt32LE(18); }
 // public uncompressedSize(): number { return this.data.readUInt32LE(22); }
 FileHeader.prototype.fileNameLength = function fileNameLength () { return this.data.readUInt16LE(26); };
 FileHeader.prototype.extraFieldLength = function extraFieldLength () { return this.data.readUInt16LE(28); };
 FileHeader.prototype.fileName = function fileName () {
     return safeToString(this.data, this.useUTF8(), 30, this.fileNameLength());
 };
 FileHeader.prototype.extraField = function extraField () {
     var start = 30 + this.fileNameLength();
     return this.data.slice(start, start + this.extraFieldLength());
 };
 FileHeader.prototype.totalSize = function totalSize () { return 30 + this.fileNameLength() + this.extraFieldLength(); };
 FileHeader.prototype.useUTF8 = function useUTF8 () { return (this.flags() & 0x800) === 0x800; };
/**
 * 4.3.8  File data
 *
 *   Immediately following the local header for a file
 *   SHOULD be placed the compressed or stored data for the file.
 *   If the file is encrypted, the encryption header for the file
 *   SHOULD be placed after the local header and before the file
 *   data. The series of [local file header][encryption header]
 *   [file data][data descriptor] repeats for each file in the
 *   .ZIP archive.
 *
 *   Zero-byte files, directories, and other file types that
 *   contain no content MUST not include file data.
 */
var FileData = function FileData(header, record, data) {
     this.header = header;
     this.record = record;
     this.data = data;
 };
 FileData.prototype.decompress = function decompress () {
     // Check the compression
     var compressionMethod = this.header.compressionMethod();
     var fcn = decompressionMethods[compressionMethod];
     if (fcn) {
         return fcn(this.data, this.record.compressedSize(), this.record.uncompressedSize(), this.record.flag());
     }
     else {
         var name = CompressionMethod[compressionMethod];
         if (!name) {
             name = "Unknown: " + compressionMethod;
         }
         throw new ApiError(ErrorCode.EINVAL, ("Invalid compression method on file '" + (this.header.fileName()) + "': " + name));
     }
 };
 FileData.prototype.getHeader = function getHeader () {
     return this.header;
 };
 FileData.prototype.getRecord = function getRecord () {
     return this.record;
 };
 FileData.prototype.getRawData = function getRawData () {
     return this.data;
 };
/**
 * 4.3.12  Central directory structure:
 *
 *  central file header signature   4 bytes  (0x02014b50)
 *  version made by                 2 bytes
 *  version needed to extract       2 bytes
 *  general purpose bit flag        2 bytes
 *  compression method              2 bytes
 *  last mod file time              2 bytes
 *  last mod file date              2 bytes
 *  crc-32                          4 bytes
 *  compressed size                 4 bytes
 *  uncompressed size               4 bytes
 *  file name length                2 bytes
 *  extra field length              2 bytes
 *  file comment length             2 bytes
 *  disk number start               2 bytes
 *  internal file attributes        2 bytes
 *  external file attributes        4 bytes
 *  relative offset of local header 4 bytes
 *
 *  file name (variable size)
 *  extra field (variable size)
 *  file comment (variable size)
 */
var CentralDirectory = function CentralDirectory(zipData, data) {
     this.zipData = zipData;
     this.data = data;
     // Sanity check.
     if (this.data.readUInt32LE(0) !== 0x02014b50) {
         throw new ApiError(ErrorCode.EINVAL, ("Invalid Zip file: Central directory record has invalid signature: " + (this.data.readUInt32LE(0))));
     }
     this._filename = this.produceFilename();
 };
 CentralDirectory.prototype.versionMadeBy = function versionMadeBy () { return this.data.readUInt16LE(4); };
 CentralDirectory.prototype.versionNeeded = function versionNeeded () { return this.data.readUInt16LE(6); };
 CentralDirectory.prototype.flag = function flag () { return this.data.readUInt16LE(8); };
 CentralDirectory.prototype.compressionMethod = function compressionMethod () { return this.data.readUInt16LE(10); };
 CentralDirectory.prototype.lastModFileTime = function lastModFileTime () {
     // Time and date is in MS-DOS format.
     return msdos2date(this.data.readUInt16LE(12), this.data.readUInt16LE(14));
 };
 CentralDirectory.prototype.rawLastModFileTime = function rawLastModFileTime () {
     return this.data.readUInt32LE(12);
 };
 CentralDirectory.prototype.crc32 = function crc32 () { return this.data.readUInt32LE(16); };
 CentralDirectory.prototype.compressedSize = function compressedSize () { return this.data.readUInt32LE(20); };
 CentralDirectory.prototype.uncompressedSize = function uncompressedSize () { return this.data.readUInt32LE(24); };
 CentralDirectory.prototype.fileNameLength = function fileNameLength () { return this.data.readUInt16LE(28); };
 CentralDirectory.prototype.extraFieldLength = function extraFieldLength () { return this.data.readUInt16LE(30); };
 CentralDirectory.prototype.fileCommentLength = function fileCommentLength () { return this.data.readUInt16LE(32); };
 CentralDirectory.prototype.diskNumberStart = function diskNumberStart () { return this.data.readUInt16LE(34); };
 CentralDirectory.prototype.internalAttributes = function internalAttributes () { return this.data.readUInt16LE(36); };
 CentralDirectory.prototype.externalAttributes = function externalAttributes () { return this.data.readUInt32LE(38); };
 CentralDirectory.prototype.headerRelativeOffset = function headerRelativeOffset () { return this.data.readUInt32LE(42); };
 CentralDirectory.prototype.produceFilename = function produceFilename () {
     /*
       4.4.17.1 claims:
       * All slashes are forward ('/') slashes.
       * Filename doesn't begin with a slash.
       * No drive letters or any nonsense like that.
       * If filename is missing, the input came from standard input.
    
       Unfortunately, this isn't true in practice. Some Windows zip utilities use
       a backslash here, but the correct Unix-style path in file headers.
    
       To avoid seeking all over the file to recover the known-good filenames
       from file headers, we simply convert '/' to '\' here.
     */
     var fileName = safeToString(this.data, this.useUTF8(), 46, this.fileNameLength());
     return fileName.replace(/\\/g, "/");
 };
 CentralDirectory.prototype.fileName = function fileName () {
     return this._filename;
 };
 CentralDirectory.prototype.rawFileName = function rawFileName () {
     return this.data.slice(46, 46 + this.fileNameLength());
 };
 CentralDirectory.prototype.extraField = function extraField () {
     var start = 44 + this.fileNameLength();
     return this.data.slice(start, start + this.extraFieldLength());
 };
 CentralDirectory.prototype.fileComment = function fileComment () {
     var start = 46 + this.fileNameLength() + this.extraFieldLength();
     return safeToString(this.data, this.useUTF8(), start, this.fileCommentLength());
 };
 CentralDirectory.prototype.rawFileComment = function rawFileComment () {
     var start = 46 + this.fileNameLength() + this.extraFieldLength();
     return this.data.slice(start, start + this.fileCommentLength());
 };
 CentralDirectory.prototype.totalSize = function totalSize () {
     return 46 + this.fileNameLength() + this.extraFieldLength() + this.fileCommentLength();
 };
 CentralDirectory.prototype.isDirectory = function isDirectory () {
     // NOTE: This assumes that the zip file implementation uses the lower byte
     //    of external attributes for DOS attributes for
     //    backwards-compatibility. This is not mandated, but appears to be
     //    commonplace.
     //    According to the spec, the layout of external attributes is
     //    platform-dependent.
     //    If that fails, we also check if the name of the file ends in '/',
     //    which is what Java's ZipFile implementation does.
     var fileName = this.fileName();
     return (this.externalAttributes() & 0x10 ? true : false) || (fileName.charAt(fileName.length - 1) === '/');
 };
 CentralDirectory.prototype.isFile = function isFile () { return !this.isDirectory(); };
 CentralDirectory.prototype.useUTF8 = function useUTF8 () { return (this.flag() & 0x800) === 0x800; };
 CentralDirectory.prototype.isEncrypted = function isEncrypted () { return (this.flag() & 0x1) === 0x1; };
 CentralDirectory.prototype.getFileData = function getFileData () {
     // Need to grab the header before we can figure out where the actual
     // compressed data starts.
     var start = this.headerRelativeOffset();
     var header = new FileHeader(this.zipData.slice(start));
     return new FileData(header, this, this.zipData.slice(start + header.totalSize()));
 };
 CentralDirectory.prototype.getData = function getData () {
     return this.getFileData().decompress();
 };
 CentralDirectory.prototype.getRawData = function getRawData () {
     return this.getFileData().getRawData();
 };
 CentralDirectory.prototype.getStats = function getStats () {
     return new Stats(FileType.FILE, this.uncompressedSize(), 0x16D, Date.now(), this.lastModFileTime().getTime());
 };
/**
 * 4.3.16: end of central directory record
 *  end of central dir signature    4 bytes  (0x06054b50)
 *  number of this disk             2 bytes
 *  number of the disk with the
 *  start of the central directory  2 bytes
 *  total number of entries in the
 *  central directory on this disk  2 bytes
 *  total number of entries in
 *  the central directory           2 bytes
 *  size of the central directory   4 bytes
 *  offset of start of central
 *  directory with respect to
 *  the starting disk number        4 bytes
 *  .ZIP file comment length        2 bytes
 *  .ZIP file comment       (variable size)
 */
var EndOfCentralDirectory = function EndOfCentralDirectory(data) {
     this.data = data;
     if (this.data.readUInt32LE(0) !== 0x06054b50) {
         throw new ApiError(ErrorCode.EINVAL, ("Invalid Zip file: End of central directory record has invalid signature: " + (this.data.readUInt32LE(0))));
     }
 };
 EndOfCentralDirectory.prototype.diskNumber = function diskNumber () { return this.data.readUInt16LE(4); };
 EndOfCentralDirectory.prototype.cdDiskNumber = function cdDiskNumber () { return this.data.readUInt16LE(6); };
 EndOfCentralDirectory.prototype.cdDiskEntryCount = function cdDiskEntryCount () { return this.data.readUInt16LE(8); };
 EndOfCentralDirectory.prototype.cdTotalEntryCount = function cdTotalEntryCount () { return this.data.readUInt16LE(10); };
 EndOfCentralDirectory.prototype.cdSize = function cdSize () { return this.data.readUInt32LE(12); };
 EndOfCentralDirectory.prototype.cdOffset = function cdOffset () { return this.data.readUInt32LE(16); };
 EndOfCentralDirectory.prototype.cdZipCommentLength = function cdZipCommentLength () { return this.data.readUInt16LE(20); };
 EndOfCentralDirectory.prototype.cdZipComment = function cdZipComment () {
     // Assuming UTF-8. The specification doesn't specify.
     return safeToString(this.data, true, 22, this.cdZipCommentLength());
 };
 EndOfCentralDirectory.prototype.rawCdZipComment = function rawCdZipComment () {
     return this.data.slice(22, 22 + this.cdZipCommentLength());
 };
/**
 * Contains the table of contents of a Zip file.
 */
var ZipTOC = function ZipTOC(index, directoryEntries, eocd, data) {
     this.index = index;
     this.directoryEntries = directoryEntries;
     this.eocd = eocd;
     this.data = data;
 };
/**
 * Zip file-backed filesystem
 * Implemented according to the standard:
 * http://www.pkware.com/documents/casestudies/APPNOTE.TXT
 *
 * While there are a few zip libraries for JavaScript (e.g. JSZip and zip.js),
 * they are not a good match for BrowserFS. In particular, these libraries
 * perform a lot of unneeded data copying, and eagerly decompress every file
 * in the zip file upon loading to check the CRC32. They also eagerly decode
 * strings. Furthermore, these libraries duplicate functionality already present
 * in BrowserFS (e.g. UTF-8 decoding and binary data manipulation).
 *
 * This filesystem takes advantage of BrowserFS's Buffer implementation, which
 * efficiently represents the zip file in memory (in both ArrayBuffer-enabled
 * browsers *and* non-ArrayBuffer browsers), and which can neatly be 'sliced'
 * without copying data. Each struct defined in the standard is represented with
 * a buffer slice pointing to an offset in the zip file, and has getters for
 * each field. As we anticipate that this data will not be read often, we choose
 * not to store each struct field in the JavaScript object; instead, to reduce
 * memory consumption, we retrieve it directly from the binary data each time it
 * is requested.
 *
 * When the filesystem is instantiated, we determine the directory structure
 * of the zip file as quickly as possible. We lazily decompress and check the
 * CRC32 of files. We do not cache decompressed files; if this is a desired
 * feature, it is best implemented as a generic file system wrapper that can
 * cache data from arbitrary file systems.
 *
 * For inflation, we use `pako`'s implementation:
 * https://github.com/nodeca/pako
 *
 * Current limitations:
 * * No encryption.
 * * No ZIP64 support.
 * * Read-only.
 *   Write support would require that we:
 *   - Keep track of changed/new files.
 *   - Compress changed files, and generate appropriate metadata for each.
 *   - Update file offsets for other files in the zip file.
 *   - Stream it out to a location.
 *   This isn't that bad, so we might do this at a later date.
 */
var ZipFS = /*@__PURE__*/(function (SynchronousFileSystem) {
   function ZipFS(input, name) {
        if ( name === void 0 ) name = '';

        SynchronousFileSystem.call(this);
        this.name = name;
        this._index = new FileIndex();
        this._directoryEntries = [];
        this._eocd = null;
        this._index = input.index;
        this._directoryEntries = input.directoryEntries;
        this._eocd = input.eocd;
        this.data = input.data;
    }

   if ( SynchronousFileSystem ) ZipFS.__proto__ = SynchronousFileSystem;
   ZipFS.prototype = Object.create( SynchronousFileSystem && SynchronousFileSystem.prototype );
   ZipFS.prototype.constructor = ZipFS;
    ZipFS.Create = function Create (opts, cb) {
        try {
            ZipFS._computeIndex(opts.zipData, function (e, zipTOC) {
                if (zipTOC) {
                    var fs = new ZipFS(zipTOC, opts.name);
                    cb(null, fs);
                }
                else {
                    cb(e);
                }
            });
        }
        catch (e) {
            cb(e);
        }
    };
    ZipFS.isAvailable = function isAvailable () { return true; };
    ZipFS.RegisterDecompressionMethod = function RegisterDecompressionMethod (m, fcn) {
        decompressionMethods[m] = fcn;
    };
    /**
     * Locates the end of central directory record at the end of the file.
     * Throws an exception if it cannot be found.
     */
    ZipFS._getEOCD = function _getEOCD (data) {
        // Unfortunately, the comment is variable size and up to 64K in size.
        // We assume that the magic signature does not appear in the comment, and
        // in the bytes between the comment and the signature. Other ZIP
        // implementations make this same assumption, since the alternative is to
        // read thread every entry in the file to get to it. :(
        // These are *negative* offsets from the end of the file.
        var startOffset = 22;
        var endOffset = Math.min(startOffset + 0xFFFF, data.length - 1);
        // There's not even a byte alignment guarantee on the comment so we need to
        // search byte by byte. *grumble grumble*
        for (var i = startOffset; i < endOffset; i++) {
            // Magic number: EOCD Signature
            if (data.readUInt32LE(data.length - i) === 0x06054b50) {
                return new EndOfCentralDirectory(data.slice(data.length - i));
            }
        }
        throw new ApiError(ErrorCode.EINVAL, "Invalid ZIP file: Could not locate End of Central Directory signature.");
    };
    ZipFS._addToIndex = function _addToIndex (cd, index) {
        // Paths must be absolute, yet zip file paths are always relative to the
        // zip root. So we append '/' and call it a day.
        var filename = cd.fileName();
        if (filename.charAt(0) === '/') {
            throw new ApiError(ErrorCode.EPERM, "Unexpectedly encountered an absolute path in a zip file. Please file a bug.");
        }
        // XXX: For the file index, strip the trailing '/'.
        if (filename.charAt(filename.length - 1) === '/') {
            filename = filename.substr(0, filename.length - 1);
        }
        if (cd.isDirectory()) {
            index.addPathFast('/' + filename, new DirInode(cd));
        }
        else {
            index.addPathFast('/' + filename, new FileInode(cd));
        }
    };
    ZipFS._computeIndex = function _computeIndex (data, cb) {
        try {
            var index = new FileIndex();
            var eocd = ZipFS._getEOCD(data);
            if (eocd.diskNumber() !== eocd.cdDiskNumber()) {
                return cb(new ApiError(ErrorCode.EINVAL, "ZipFS does not support spanned zip files."));
            }
            var cdPtr = eocd.cdOffset();
            if (cdPtr === 0xFFFFFFFF) {
                return cb(new ApiError(ErrorCode.EINVAL, "ZipFS does not support Zip64."));
            }
            var cdEnd = cdPtr + eocd.cdSize();
            ZipFS._computeIndexResponsive(data, index, cdPtr, cdEnd, cb, [], eocd);
        }
        catch (e) {
            cb(e);
        }
    };
    ZipFS._computeIndexResponsiveTrampoline = function _computeIndexResponsiveTrampoline (data, index, cdPtr, cdEnd, cb, cdEntries, eocd) {
        try {
            ZipFS._computeIndexResponsive(data, index, cdPtr, cdEnd, cb, cdEntries, eocd);
        }
        catch (e) {
            cb(e);
        }
    };
    ZipFS._computeIndexResponsive = function _computeIndexResponsive (data, index, cdPtr, cdEnd, cb, cdEntries, eocd) {
        if (cdPtr < cdEnd) {
            var count = 0;
            while (count++ < 200 && cdPtr < cdEnd) {
                var cd = new CentralDirectory(data, data.slice(cdPtr));
                ZipFS._addToIndex(cd, index);
                cdPtr += cd.totalSize();
                cdEntries.push(cd);
            }
            setImmediate$1(function () {
                ZipFS._computeIndexResponsiveTrampoline(data, index, cdPtr, cdEnd, cb, cdEntries, eocd);
            });
        }
        else {
            cb(null, new ZipTOC(index, cdEntries, eocd, data));
        }
    };

   ZipFS.prototype.getName = function getName () {
        return ZipFS.Name + (this.name !== '' ? (" " + (this.name)) : '');
    };
    /**
     * Get the CentralDirectory object for the given path.
     */
    ZipFS.prototype.getCentralDirectoryEntry = function getCentralDirectoryEntry (path) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        if (isFileInode(inode)) {
            return inode.getData();
        }
        else if (isDirInode(inode)) {
            return inode.getData();
        }
        else {
            // Should never occur.
            throw ApiError.EPERM(("Invalid inode: " + inode));
        }
    };
    ZipFS.prototype.getCentralDirectoryEntryAt = function getCentralDirectoryEntryAt (index) {
        var dirEntry = this._directoryEntries[index];
        if (!dirEntry) {
            throw new RangeError(("Invalid directory index: " + index + "."));
        }
        return dirEntry;
    };
    ZipFS.prototype.getNumberOfCentralDirectoryEntries = function getNumberOfCentralDirectoryEntries () {
        return this._directoryEntries.length;
    };
    ZipFS.prototype.getEndOfCentralDirectory = function getEndOfCentralDirectory () {
        return this._eocd;
    };
    ZipFS.prototype.diskSpace = function diskSpace (path, cb) {
        // Read-only file system.
        cb(this.data.length, 0);
    };
    ZipFS.prototype.isReadOnly = function isReadOnly () {
        return true;
    };
    ZipFS.prototype.supportsLinks = function supportsLinks () {
        return false;
    };
    ZipFS.prototype.supportsProps = function supportsProps () {
        return false;
    };
    ZipFS.prototype.supportsSynch = function supportsSynch () {
        return true;
    };
    ZipFS.prototype.statSync = function statSync (path, isLstat) {
        var inode = this._index.getInode(path);
        if (inode === null) {
            throw ApiError.ENOENT(path);
        }
        var stats;
        if (isFileInode(inode)) {
            stats = inode.getData().getStats();
        }
        else if (isDirInode(inode)) {
            stats = inode.getStats();
        }
        else {
            throw new ApiError(ErrorCode.EINVAL, "Invalid inode.");
        }
        return stats;
    };
    ZipFS.prototype.openSync = function openSync (path, flags, mode) {
        // INVARIANT: Cannot write to RO file systems.
        if (flags.isWriteable()) {
            throw new ApiError(ErrorCode.EPERM, path);
        }
        // Check if the path exists, and is a file.
        var inode = this._index.getInode(path);
        if (!inode) {
            throw ApiError.ENOENT(path);
        }
        else if (isFileInode(inode)) {
            var cdRecord = inode.getData();
            var stats = cdRecord.getStats();
            switch (flags.pathExistsAction()) {
                case ActionType.THROW_EXCEPTION:
                case ActionType.TRUNCATE_FILE:
                    throw ApiError.EEXIST(path);
                case ActionType.NOP:
                    return new NoSyncFile(this, path, flags, stats, cdRecord.getData());
                default:
                    throw new ApiError(ErrorCode.EINVAL, 'Invalid FileMode object.');
            }
        }
        else {
            throw ApiError.EISDIR(path);
        }
    };
    ZipFS.prototype.readdirSync = function readdirSync (path) {
        // Check if it exists.
        var inode = this._index.getInode(path);
        if (!inode) {
            throw ApiError.ENOENT(path);
        }
        else if (isDirInode(inode)) {
            return inode.getListing();
        }
        else {
            throw ApiError.ENOTDIR(path);
        }
    };
    /**
     * Specially-optimized readfile.
     */
    ZipFS.prototype.readFileSync = function readFileSync (fname, encoding, flag) {
        // Get file.
        var fd = this.openSync(fname, flag, 0x1a4);
        try {
            var fdCast = fd;
            var fdBuff = fdCast.getBuffer();
            if (encoding === null) {
                return copyingSlice(fdBuff);
            }
            return fdBuff.toString(encoding);
        }
        finally {
            fd.closeSync();
        }
    };

   return ZipFS;
}(SynchronousFileSystem));
ZipFS.Name = "ZipFS";
ZipFS.Options = {
    zipData: {
        type: "object",
        description: "The zip file as a Buffer object.",
        validator: bufferValidator
    },
    name: {
        type: "string",
        optional: true,
        description: "The name of the zip file (optional)."
    }
};
ZipFS.CompressionMethod = CompressionMethod;
ZipFS.RegisterDecompressionMethod(CompressionMethod.DEFLATE, function (data, compressedSize, uncompressedSize) {
    return arrayish2Buffer(inflateRaw(data.slice(0, compressedSize), { chunkSize: uncompressedSize }));
});
ZipFS.RegisterDecompressionMethod(CompressionMethod.STORED, function (data, compressedSize, uncompressedSize) {
    return copyingSlice(data, 0, uncompressedSize);
});

// Monkey-patch `Create` functions to check options before file system initialization.
[AsyncMirror, InMemoryFileSystem, IndexedDBFileSystem, FolderAdapter, OverlayFS, LocalStorageFileSystem, MountableFileSystem, WorkerFS, BundledHTTPRequest, HTTPRequest, UNPKGRequest, JSDelivrRequest, ZipFS, CodeSandboxFS, CodeSandboxEditorFS, WebsocketFS, DynamicHTTPRequest].forEach(function (fsType) {
    var create = fsType.Create;
    fsType.Create = function (opts, cb) {
        var oneArg = typeof (opts) === 'function';
        var normalizedCb = oneArg ? opts : cb;
        var normalizedOpts = oneArg ? {} : opts;
        function wrappedCb(e) {
            if (e) {
                normalizedCb(e);
            }
            else {
                create.call(fsType, normalizedOpts, normalizedCb);
            }
        }
        checkOptions(fsType, normalizedOpts, wrappedCb);
    };
});
/**
 * @hidden
 */
var Backends = { AsyncMirror: AsyncMirror, FolderAdapter: FolderAdapter, InMemory: InMemoryFileSystem, IndexedDB: IndexedDBFileSystem, OverlayFS: OverlayFS, LocalStorage: LocalStorageFileSystem, MountableFileSystem: MountableFileSystem, WorkerFS: WorkerFS, BundledHTTPRequest: BundledHTTPRequest, HTTPRequest: HTTPRequest, UNPKGRequest: UNPKGRequest, JSDelivrRequest: JSDelivrRequest, XmlHttpRequest: HTTPRequest, ZipFS: ZipFS, CodeSandboxFS: CodeSandboxFS, CodeSandboxEditorFS: CodeSandboxEditorFS, WebsocketFS: WebsocketFS, DynamicHTTPRequest: DynamicHTTPRequest };

/**
 * BrowserFS's main module. This is exposed in the browser via the BrowserFS global.
 * Due to limitations in typedoc, we document these functions in ./typedoc.ts.
 */
if (process['initializeTTYs']) {
    process['initializeTTYs']();
}
/**
 * Installs BFSRequire as global `require`, a Node Buffer polyfill as the global `Buffer` variable,
 * and a Node process polyfill as the global `process` variable.
 */
function install(obj) {
    obj.Buffer = Buffer;
    obj.process = process;
    var oldRequire = obj.require ? obj.require : null;
    // Monkey-patch require for Node-style code.
    obj.require = function (arg) {
        var rv = BFSRequire(arg);
        if (!rv) {
            return oldRequire.apply(null, Array.prototype.slice.call(arguments, 0));
        }
        else {
            return rv;
        }
    };
}
/**
 * @hidden
 */
function registerFileSystem(name, fs) {
    Backends[name] = fs;
}
function BFSRequire(module) {
    switch (module) {
        case 'fs':
            return _fsMock;
        case 'path':
            return path;
        case 'buffer':
            // The 'buffer' module has 'Buffer' as a property.
            return buffer;
        case 'process':
            return process;
        case 'bfs_utils':
            return BFSUtils;
        default:
            return Backends[module];
    }
}
/**
 * Initializes BrowserFS with the given root file system.
 */
function initialize(rootfs) {
    return _fsMock.initialize(rootfs);
}
/**
 * Creates a file system with the given configuration, and initializes BrowserFS with it.
 * See the FileSystemConfiguration type for more info on the configuration object.
 */
function configure(config, cb) {
    getFileSystem(config, function (e, fs) {
        if (fs) {
            initialize(fs);
            cb();
        }
        else {
            cb(e);
        }
    });
}
/**
 * Retrieve a file system with the given configuration.
 * @param config A FileSystemConfiguration object. See FileSystemConfiguration for details.
 * @param cb Called when the file system is constructed, or when an error occurs.
 */
function getFileSystem(config, cb) {
    var fsName = config['fs'];
    if (!fsName) {
        return cb(new ApiError(ErrorCode.EPERM, 'Missing "fs" property on configuration object.'));
    }
    var options = config['options'];
    var waitCount = 0;
    var called = false;
    function finish() {
        if (!called) {
            called = true;
            var fsc = Backends[fsName];
            if (!fsc) {
                cb(new ApiError(ErrorCode.EPERM, ("File system " + fsName + " is not available in BrowserFS.")));
            }
            else {
                fsc.Create(options, cb);
            }
        }
    }
    if (options !== null && typeof (options) === "object") {
        var finishedIterating = false;
        var props = Object.keys(options).filter(function (k) { return k !== 'fs'; });
        // Check recursively if other fields have 'fs' properties.
        props.forEach(function (p) {
            var d = options[p];
            if (d !== null && typeof (d) === "object" && d['fs']) {
                waitCount++;
                getFileSystem(d, function (e, fs) {
                    waitCount--;
                    if (e) {
                        if (called) {
                            return;
                        }
                        called = true;
                        cb(e);
                    }
                    else {
                        options[p] = fs;
                        if (waitCount === 0 && finishedIterating) {
                            finish();
                        }
                    }
                });
            }
        });
        finishedIterating = true;
    }
    if (waitCount === 0) {
        finish();
    }
}

/**
 * BrowserFS's main entry point.
 * It installs all of the needed polyfills, and requires() the main module.
 */
// IE substr does not support negative indices
if ('ab'.substr(-1) !== 'b') {
    String.prototype.substr = function (substr) {
        return function (start, length) {
            // did we get a negative start, calculate how much it is from the
            // beginning of the string
            if (start < 0) {
                start = this.length + start;
            }
            // call the original function
            return substr.call(this, start, length);
        };
    }(String.prototype.substr);
}
// Polyfill for Uint8Array.prototype.slice.
// Safari and some other browsers do not define it.
if (typeof (ArrayBuffer) !== 'undefined' && typeof (Uint8Array) !== 'undefined') {
    if (!Uint8Array.prototype['slice']) {
        Uint8Array.prototype.slice = function (start, end) {
            if ( start === void 0 ) start = 0;
            if ( end === void 0 ) end = this.length;

            var self = this;
            if (start < 0) {
                start = this.length + start;
                if (start < 0) {
                    start = 0;
                }
            }
            if (end < 0) {
                end = this.length + end;
                if (end < 0) {
                    end = 0;
                }
            }
            if (end < start) {
                end = start;
            }
            return new Uint8Array(self.buffer, self.byteOffset + start, end - start);
        };
    }
}

exports.BFSRequire = BFSRequire;
exports.EmscriptenFS = BFSEmscriptenFS;
exports.Errors = api_error;
exports.FileSystem = Backends;
exports.configure = configure;
exports.getFileSystem = getFileSystem;
exports.initialize = initialize;
exports.install = install;
exports.registerFileSystem = registerFileSystem;
exports.setImmediate = setImmediate$1;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! BFSBuffer */ "./build/temp/library/webpack/BFSBuffer.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! process */ "./node_modules/bfs-process/js/index.js")))

/***/ }),

/***/ "./build/temp/library/webpack/BFSBuffer.js":
/*!*************************************************!*\
  !*** ./build/temp/library/webpack/BFSBuffer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js").Buffer;


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/bfs-path/js/path.js":
/*!******************************************!*\
  !*** ./node_modules/bfs-path/js/path.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
function posixSplitPath(filename) {
    var out = splitPathRe.exec(filename);
    out.shift();
    return out;
}
/**
 * Emulates Node's `path` module. This module contains utilities for handling and
 * transforming file paths. **All** of these methods perform only string
 * transformations. The file system is not consulted to check whether paths are
 * valid.
 * @see http://nodejs.org/api/path.html
 * @class
 */
var path = (function () {
    function path() {
    }
    /**
     * Normalize a string path, taking care of '..' and '.' parts.
     *
     * When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.
     * @example Usage example
     *   path.normalize('/foo/bar//baz/asdf/quux/..')
     *   // returns
     *   '/foo/bar/baz/asdf'
     * @param [String] p The path to normalize.
     * @return [String]
     */
    path.normalize = function (p) {
        // Special case: '' -> '.'
        if (p === '') {
            p = '.';
        }
        // It's very important to know if the path is relative or not, since it
        // changes how we process .. and reconstruct the split string.
        var absolute = p.charAt(0) === path.sep;
        // Remove repeated //s
        p = path._removeDuplicateSeps(p);
        // Try to remove as many '../' as possible, and remove '.' completely.
        var components = p.split(path.sep);
        var goodComponents = [];
        for (var idx = 0; idx < components.length; idx++) {
            var c = components[idx];
            if (c === '.') {
                continue;
            }
            else if (c === '..' && (absolute || (!absolute && goodComponents.length > 0 && goodComponents[0] !== '..'))) {
                // In the absolute case: Path is relative to root, so we may pop even if
                // goodComponents is empty (e.g. /../ => /)
                // In the relative case: We're getting rid of a directory that preceded
                // it (e.g. /foo/../bar -> /bar)
                goodComponents.pop();
            }
            else {
                goodComponents.push(c);
            }
        }
        // Add in '.' when it's a relative path with no other nonempty components.
        // Possible results: '.' and './' (input: [''] or [])
        // @todo Can probably simplify this logic.
        if (!absolute && goodComponents.length < 2) {
            switch (goodComponents.length) {
                case 1:
                    if (goodComponents[0] === '') {
                        goodComponents.unshift('.');
                    }
                    break;
                default:
                    goodComponents.push('.');
            }
        }
        p = goodComponents.join(path.sep);
        if (absolute && p.charAt(0) !== path.sep) {
            p = path.sep + p;
        }
        return p;
    };
    /**
     * Join all arguments together and normalize the resulting path.
     *
     * Arguments must be strings.
     * @example Usage
     *   path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
     *   // returns
     *   '/foo/bar/baz/asdf'
     *
     *   path.join('foo', {}, 'bar')
     *   // throws exception
     *   TypeError: Arguments to path.join must be strings
     * @param [String,...] paths Each component of the path
     * @return [String]
     */
    path.join = function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i - 0] = arguments[_i];
        }
        // Required: Prune any non-strings from the path. I also prune empty segments
        // so we can do a simple join of the array.
        var processed = [];
        for (var i = 0; i < paths.length; i++) {
            var segment = paths[i];
            if (typeof segment !== 'string') {
                throw new TypeError("Invalid argument type to path.join: " + (typeof segment));
            }
            else if (segment !== '') {
                processed.push(segment);
            }
        }
        return path.normalize(processed.join(path.sep));
    };
    /**
     * Resolves to to an absolute path.
     *
     * If to isn't already absolute from arguments are prepended in right to left
     * order, until an absolute path is found. If after using all from paths still
     * no absolute path is found, the current working directory is used as well.
     * The resulting path is normalized, and trailing slashes are removed unless
     * the path gets resolved to the root directory. Non-string arguments are
     * ignored.
     *
     * Another way to think of it is as a sequence of cd commands in a shell.
     *
     *     path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')
     *
     * Is similar to:
     *
     *     cd foo/bar
     *     cd /tmp/file/
     *     cd ..
     *     cd a/../subfile
     *     pwd
     *
     * The difference is that the different paths don't need to exist and may also
     * be files.
     * @example Usage example
     *   path.resolve('/foo/bar', './baz')
     *   // returns
     *   '/foo/bar/baz'
     *
     *   path.resolve('/foo/bar', '/tmp/file/')
     *   // returns
     *   '/tmp/file'
     *
     *   path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
     *   // if currently in /home/myself/node, it returns
     *   '/home/myself/node/wwwroot/static_files/gif/image.gif'
     * @param [String,...] paths
     * @return [String]
     */
    path.resolve = function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i - 0] = arguments[_i];
        }
        // Monitor for invalid paths, throw out empty paths, and look for the *last*
        // absolute path that we see.
        var processed = [];
        for (var i = 0; i < paths.length; i++) {
            var p = paths[i];
            if (typeof p !== 'string') {
                throw new TypeError("Invalid argument type to path.join: " + (typeof p));
            }
            else if (p !== '') {
                // Remove anything that has occurred before this absolute path, as it
                // doesn't matter.
                if (p.charAt(0) === path.sep) {
                    processed = [];
                }
                processed.push(p);
            }
        }
        // Special: Remove trailing slash unless it's the root
        var resolved = path.normalize(processed.join(path.sep));
        if (resolved.length > 1 && resolved.charAt(resolved.length - 1) === path.sep) {
            return resolved.substr(0, resolved.length - 1);
        }
        // Special: If it doesn't start with '/', it's relative and we need to append
        // the current directory.
        if (resolved.charAt(0) !== path.sep) {
            // Remove ./, since we're going to append the current directory.
            if (resolved.charAt(0) === '.' && (resolved.length === 1 || resolved.charAt(1) === path.sep)) {
                resolved = resolved.length === 1 ? '' : resolved.substr(2);
            }
            // Append the current directory, which *must* be an absolute path.
            var cwd = process.cwd();
            if (resolved !== '') {
                // cwd will never end in a /... unless it's the root.
                resolved = this.normalize(cwd + (cwd !== '/' ? path.sep : '') + resolved);
            }
            else {
                resolved = cwd;
            }
        }
        return resolved;
    };
    /**
     * Solve the relative path from from to to.
     *
     * At times we have two absolute paths, and we need to derive the relative path
     * from one to the other. This is actually the reverse transform of
     * path.resolve, which means we see that:
     *
     *    path.resolve(from, path.relative(from, to)) == path.resolve(to)
     *
     * @example Usage example
     *   path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')
     *   // returns
     *   '..\\..\\impl\\bbb'
     *
     *   path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')
     *   // returns
     *   '../../impl/bbb'
     * @param [String] from
     * @param [String] to
     * @return [String]
     */
    path.relative = function (from, to) {
        var i;
        // Alright. Let's resolve these two to absolute paths and remove any
        // weirdness.
        from = path.resolve(from);
        to = path.resolve(to);
        var fromSegs = from.split(path.sep);
        var toSegs = to.split(path.sep);
        // Remove the first segment on both, as it's '' (both are absolute paths)
        toSegs.shift();
        fromSegs.shift();
        // There are two segments to this path:
        // * Going *up* the directory hierarchy with '..'
        // * Going *down* the directory hierarchy with foo/baz/bat.
        var upCount = 0;
        var downSegs = [];
        // Figure out how many things in 'from' are shared with 'to'.
        for (i = 0; i < fromSegs.length; i++) {
            var seg = fromSegs[i];
            if (seg === toSegs[i]) {
                continue;
            }
            // The rest of 'from', including the current element, indicates how many
            // directories we need to go up.
            upCount = fromSegs.length - i;
            break;
        }
        // The rest of 'to' indicates where we need to change to. We place this
        // outside of the loop, as toSegs.length may be greater than fromSegs.length.
        downSegs = toSegs.slice(i);
        // Special case: If 'from' is '/'
        if (fromSegs.length === 1 && fromSegs[0] === '') {
            upCount = 0;
        }
        // upCount can't be greater than the number of fromSegs
        // (cd .. from / is still /)
        if (upCount > fromSegs.length) {
            upCount = fromSegs.length;
        }
        // Create the final string!
        var rv = '';
        for (i = 0; i < upCount; i++) {
            rv += '../';
        }
        rv += downSegs.join(path.sep);
        // Special case: Remove trailing '/'. Happens if it's all up and no down.
        if (rv.length > 1 && rv.charAt(rv.length - 1) === path.sep) {
            rv = rv.substr(0, rv.length - 1);
        }
        return rv;
    };
    /**
     * Return the directory name of a path. Similar to the Unix `dirname` command.
     *
     * Note that BrowserFS does not validate if the path is actually a valid
     * directory.
     * @example Usage example
     *   path.dirname('/foo/bar/baz/asdf/quux')
     *   // returns
     *   '/foo/bar/baz/asdf'
     * @param [String] p The path to get the directory name of.
     * @return [String]
     */
    path.dirname = function (p) {
        // We get rid of //, but we don't modify anything else (e.g. any extraneous .
        // and ../ are kept intact)
        p = path._removeDuplicateSeps(p);
        var absolute = p.charAt(0) === path.sep;
        var sections = p.split(path.sep);
        // Do 1 if it's /foo/bar, 2 if it's /foo/bar/
        if (sections.pop() === '' && sections.length > 0) {
            sections.pop();
        }
        // # of sections needs to be > 1 if absolute, since the first section is '' for '/'.
        // If not absolute, the first section is the first part of the path, and is OK
        // to return.
        if (sections.length > 1 || (sections.length === 1 && !absolute)) {
            return sections.join(path.sep);
        }
        else if (absolute) {
            return path.sep;
        }
        else {
            return '.';
        }
    };
    /**
     * Return the last portion of a path. Similar to the Unix basename command.
     * @example Usage example
     *   path.basename('/foo/bar/baz/asdf/quux.html')
     *   // returns
     *   'quux.html'
     *
     *   path.basename('/foo/bar/baz/asdf/quux.html', '.html')
     *   // returns
     *   'quux'
     * @param [String] p
     * @param [String?] ext
     * @return [String]
     */
    path.basename = function (p, ext) {
        if (ext === void 0) { ext = ""; }
        // Special case: Normalize will modify this to '.'
        if (p === '') {
            return p;
        }
        // Normalize the string first to remove any weirdness.
        p = path.normalize(p);
        // Get the last part of the string.
        var sections = p.split(path.sep);
        var lastPart = sections[sections.length - 1];
        // Special case: If it's empty, then we have a string like so: foo/
        // Meaning, 'foo' is guaranteed to be a directory.
        if (lastPart === '' && sections.length > 1) {
            return sections[sections.length - 2];
        }
        // Remove the extension, if need be.
        if (ext.length > 0) {
            var lastPartExt = lastPart.substr(lastPart.length - ext.length);
            if (lastPartExt === ext) {
                return lastPart.substr(0, lastPart.length - ext.length);
            }
        }
        return lastPart;
    };
    /**
     * Return the extension of the path, from the last '.' to end of string in the
     * last portion of the path. If there is no '.' in the last portion of the path
     * or the first character of it is '.', then it returns an empty string.
     * @example Usage example
     *   path.extname('index.html')
     *   // returns
     *   '.html'
     *
     *   path.extname('index.')
     *   // returns
     *   '.'
     *
     *   path.extname('index')
     *   // returns
     *   ''
     * @param [String] p
     * @return [String]
     */
    path.extname = function (p) {
        p = path.normalize(p);
        var sections = p.split(path.sep);
        p = sections.pop();
        // Special case: foo/file.ext/ should return '.ext'
        if (p === '' && sections.length > 0) {
            p = sections.pop();
        }
        if (p === '..') {
            return '';
        }
        var i = p.lastIndexOf('.');
        if (i === -1 || i === 0) {
            return '';
        }
        return p.substr(i);
    };
    /**
     * Checks if the given path is an absolute path.
     *
     * Despite not being documented, this is a tested part of Node's path API.
     * @param [String] p
     * @return [Boolean] True if the path appears to be an absolute path.
     */
    path.isAbsolute = function (p) {
        return p.length > 0 && p.charAt(0) === path.sep;
    };
    /**
     * Unknown. Undocumented.
     */
    path._makeLong = function (p) {
        return p;
    };
    /**
     * Returns an object from a path string.
     */
    path.parse = function (p) {
        var allParts = posixSplitPath(p);
        return {
            root: allParts[0],
            dir: allParts[0] + allParts[1].slice(0, -1),
            base: allParts[2],
            ext: allParts[3],
            name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
        };
    };
    path.format = function (pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') {
            throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof pathObject);
        }
        var root = pathObject.root || '';
        if (typeof root !== 'string') {
            throw new TypeError("'pathObject.root' must be a string or undefined, not " +
                typeof pathObject.root);
        }
        var dir = pathObject.dir ? pathObject.dir + path.sep : '';
        var base = pathObject.base || '';
        return dir + base;
    };
    path._removeDuplicateSeps = function (p) {
        p = p.replace(this._replaceRegex, this.sep);
        return p;
    };
    // The platform-specific file separator. BrowserFS uses `/`.
    path.sep = '/';
    path._replaceRegex = new RegExp("//+", 'g');
    // The platform-specific path delimiter. BrowserFS uses `:`.
    path.delimiter = ':';
    path.posix = path;
    // XXX: Typing hack. We don't actually support win32.
    path.win32 = path;
    return path;
}());
var _ = path;
module.exports = path;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! process */ "./node_modules/bfs-process/js/index.js")))

/***/ }),

/***/ "./node_modules/bfs-process/js/index.js":
/*!**********************************************!*\
  !*** ./node_modules/bfs-process/js/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Process = __webpack_require__(/*! ./process */ "./node_modules/bfs-process/js/process.js");
var process = new Process(), processProxy = {};
function defineKey(key) {
    if (processProxy[key]) {
        // Probably a builtin Object property we don't care about.
        return;
    }
    if (typeof process[key] === 'function') {
        processProxy[key] = function () {
            return process[key].apply(process, arguments);
        };
    }
    else {
        processProxy[key] = process[key];
    }
}
for (var key in process) {
    // Don't check if process.hasOwnProperty; we want to also expose objects
    // up the prototype hierarchy.
    defineKey(key);
}
// Special key: Ensure we update public-facing values of stdin/stdout/stderr.
processProxy.initializeTTYs = function () {
    if (process.stdin === null) {
        process.initializeTTYs();
        processProxy.stdin = process.stdin;
        processProxy.stdout = process.stdout;
        processProxy.stderr = process.stderr;
    }
};
process.nextTick(function () {
    processProxy.initializeTTYs();
});
module.exports = processProxy;


/***/ }),

/***/ "./node_modules/bfs-process/js/process.js":
/*!************************************************!*\
  !*** ./node_modules/bfs-process/js/process.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events = __webpack_require__(/*! events */ "./node_modules/events/events.js");
// Path depends on process. Avoid a circular reference by dynamically including path when we need it.
var path = null;
var Item = (function () {
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    return Item;
}());
/**
 * Contains a queue of Items for process.nextTick.
 * Inspired by node-process: https://github.com/defunctzombie/node-process
 */
var NextTickQueue = (function () {
    function NextTickQueue() {
        this._queue = [];
        this._draining = false;
        // Used/assigned by the drainQueue function.
        this._currentQueue = null;
        this._queueIndex = -1;
    }
    NextTickQueue.prototype.push = function (item) {
        var _this = this;
        if (this._queue.push(item) === 1 && !this._draining) {
            setTimeout(function () { return _this._drainQueue(); }, 0);
        }
    };
    NextTickQueue.prototype._cleanUpNextTick = function () {
        this._draining = false;
        if (this._currentQueue && this._currentQueue.length) {
            this._queue = this._currentQueue.concat(this._queue);
        }
        else {
            this._queueIndex = -1;
        }
        if (this._queue.length) {
            this._drainQueue();
        }
    };
    NextTickQueue.prototype._drainQueue = function () {
        var _this = this;
        if (this._draining) {
            return;
        }
        // If an Item throws an unhandled exception, this function will clean things up.
        var timeout = setTimeout(function () { return _this._cleanUpNextTick(); });
        this._draining = true;
        var len = this._queue.length;
        while (len) {
            this._currentQueue = this._queue;
            this._queue = [];
            while (++this._queueIndex < len) {
                if (this._currentQueue) {
                    this._currentQueue[this._queueIndex].run();
                }
            }
            this._queueIndex = -1;
            len = this._queue.length;
        }
        this._currentQueue = null;
        this._draining = false;
        clearTimeout(timeout);
    };
    return NextTickQueue;
}());
/**
 * Partial implementation of Node's `process` module.
 * We implement the portions that are relevant for the filesystem.
 * @see http://nodejs.org/api/process.html
 * @class
 */
var Process = (function (_super) {
    __extends(Process, _super);
    function Process() {
        _super.apply(this, arguments);
        this.startTime = Date.now();
        this._cwd = '/';
        /**
         * Returns what platform you are running on.
         * @return [String]
         */
        this.platform = 'browser';
        this.argv = [];
        this.execArgv = [];
        this.stdout = null;
        this.stderr = null;
        this.stdin = null;
        this.domain = null;
        this._queue = new NextTickQueue();
        this.execPath = __dirname;
        this.env = {};
        this.exitCode = 0;
        this._gid = 1;
        this._uid = 1;
        this.version = 'v5.0';
        this.versions = {
            http_parser: '0.0',
            node: '5.0',
            v8: '0.0',
            uv: '0.0',
            zlib: '0.0',
            ares: '0.0',
            icu: '0.0',
            modules: '0',
            openssl: '0.0'
        };
        this.config = {
            target_defaults: { cflags: [],
                default_configuration: 'Release',
                defines: [],
                include_dirs: [],
                libraries: [] },
            variables: { clang: 0,
                host_arch: 'x32',
                node_install_npm: false,
                node_install_waf: false,
                node_prefix: '',
                node_shared_cares: false,
                node_shared_http_parser: false,
                node_shared_libuv: false,
                node_shared_zlib: false,
                node_shared_v8: false,
                node_use_dtrace: false,
                node_use_etw: false,
                node_use_openssl: false,
                node_shared_openssl: false,
                strict_aliasing: false,
                target_arch: 'x32',
                v8_use_snapshot: false,
                v8_no_strict_aliasing: 0,
                visibility: '' } };
        this.pid = (Math.random() * 1000) | 0;
        this.title = 'node';
        this.arch = 'x32';
        this._mask = 18;
        // Undefined in main thread. Worker-only.
        this.connected = undefined;
    }
    /**
     * Changes the current working directory.
     *
     * **Note**: BrowserFS does not validate that the directory actually exists.
     *
     * @example Usage example
     *   console.log('Starting directory: ' + process.cwd());
     *   process.chdir('/tmp');
     *   console.log('New directory: ' + process.cwd());
     * @param [String] dir The directory to change to.
     */
    Process.prototype.chdir = function (dir) {
        // XXX: Circular dependency hack.
        if (path === null) {
            path = __webpack_require__(/*! path */ "./node_modules/bfs-path/js/path.js");
        }
        this._cwd = path.resolve(dir);
    };
    /**
     * Returns the current working directory.
     * @example Usage example
     *   console.log('Current directory: ' + process.cwd());
     * @return [String] The current working directory.
     */
    Process.prototype.cwd = function () {
        return this._cwd;
    };
    /**
     * Number of seconds BrowserFS has been running.
     * @return [Number]
     */
    Process.prototype.uptime = function () {
        return ((Date.now() - this.startTime) / 1000) | 0;
    };
    Process.prototype.nextTick = function (fun) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._queue.push(new Item(fun, args));
    };
    Process.prototype.abort = function () {
        this.emit('abort');
    };
    Process.prototype.exit = function (code) {
        this.exitCode = code;
        this.emit('exit', [code]);
    };
    Process.prototype.getgid = function () {
        return this._gid;
    };
    Process.prototype.setgid = function (gid) {
        if (typeof gid === 'number') {
            this._gid = gid;
        }
        else {
            this._gid = 1;
        }
    };
    Process.prototype.getuid = function () {
        return this._uid;
    };
    Process.prototype.setuid = function (uid) {
        if (typeof uid === 'number') {
            this._uid = uid;
        }
        else {
            this._uid = 1;
        }
    };
    Process.prototype.kill = function (pid, signal) {
        this.emit('kill', [pid, signal]);
    };
    Process.prototype.memoryUsage = function () {
        return { rss: 0, heapTotal: 0, heapUsed: 0 };
    };
    Process.prototype.umask = function (mask) {
        if (mask === void 0) { mask = this._mask; }
        var oldMask = this._mask;
        this._mask = mask;
        this.emit('umask', [mask]);
        return oldMask;
    };
    Process.prototype.hrtime = function () {
        var timeinfo;
        if (typeof performance !== 'undefined') {
            timeinfo = performance.now();
        }
        else if (Date['now']) {
            timeinfo = Date.now();
        }
        else {
            timeinfo = (new Date()).getTime();
        }
        var secs = (timeinfo / 1000) | 0;
        timeinfo -= secs * 1000;
        timeinfo = (timeinfo * 1000000) | 0;
        return [secs, timeinfo];
    };
    /**
     * [BFS only] Initialize the TTY devices.
     */
    Process.prototype.initializeTTYs = function () {
        // Guard against multiple invocations.
        if (this.stdout === null) {
            var TTY = __webpack_require__(/*! ./tty */ "./node_modules/bfs-process/js/tty.js");
            this.stdout = new TTY();
            this.stderr = new TTY();
            this.stdin = new TTY();
        }
    };
    /**
     * Worker-only function; irrelevant here.
     */
    Process.prototype.disconnect = function () {
    };
    return Process;
}(events.EventEmitter));
module.exports = Process;

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/bfs-process/js/tty.js":
/*!********************************************!*\
  !*** ./node_modules/bfs-process/js/tty.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var stream = __webpack_require__(/*! stream */ "./node_modules/stream-browserify/index.js");
var TTY = (function (_super) {
    __extends(TTY, _super);
    function TTY() {
        _super.call(this);
        this.isRaw = false;
        this.columns = 80;
        this.rows = 120;
        this.isTTY = true;
        this._bufferedWrites = [];
        this._waitingForWrites = false;
    }
    /**
     * Toggle raw mode.
     */
    TTY.prototype.setRawMode = function (mode) {
        if (this.isRaw !== mode) {
            this.isRaw = mode;
            // [BFS] TTY implementations can use this to change their event emitting
            //       patterns.
            this.emit('modeChange');
        }
    };
    /**
     * [BFS] Update the number of columns available on the terminal.
     */
    TTY.prototype.changeColumns = function (columns) {
        if (columns !== this.columns) {
            this.columns = columns;
            // Resize event.
            this.emit('resize');
        }
    };
    /**
     * [BFS] Update the number of rows available on the terminal.
     */
    TTY.prototype.changeRows = function (rows) {
        if (rows !== this.rows) {
            this.rows = rows;
            // Resize event.
            this.emit('resize');
        }
    };
    /**
     * Returns 'true' if the given object is a TTY.
     */
    TTY.isatty = function (fd) {
        return fd && fd instanceof TTY;
    };
    TTY.prototype._write = function (chunk, encoding, cb) {
        var error;
        try {
            var data;
            if (typeof (chunk) === 'string') {
                data = new Buffer(chunk, encoding);
            }
            else {
                data = chunk;
            }
            this._bufferedWrites.push(data);
            if (this._waitingForWrites) {
                this._read(1024);
            }
        }
        catch (e) {
            error = e;
        }
        finally {
            cb(error);
        }
    };
    TTY.prototype._read = function (size) {
        // Size is advisory -- we can ignore it.
        if (this._bufferedWrites.length === 0) {
            this._waitingForWrites = true;
        }
        else {
            while (this._bufferedWrites.length > 0) {
                this._waitingForWrites = this.push(this._bufferedWrites.shift());
                if (!this._waitingForWrites) {
                    break;
                }
            }
        }
    };
    return TTY;
}(stream.Duplex));
module.exports = TTY;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! BFSBuffer */ "./build/temp/library/webpack/BFSBuffer.js")))

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  get: function () {
    if (!(this instanceof Buffer)) {
      return undefined
    }
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  get: function () {
    if (!(this instanceof Buffer)) {
      return undefined
    }
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('Invalid typed array length')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value) || (value && isArrayBuffer(value.buffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return fromObject(value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if (ArrayBuffer.isView(obj) || 'length' in obj) {
      if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
        return createBuffer(0)
      }
      return fromArrayLike(obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data)
    }
  }

  throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object.')
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (ArrayBuffer.isView(buf)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isArrayBuffer(string)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffers from another context (i.e. an iframe) do not pass the `instanceof` check
// but they should be treated as valid. See: https://github.com/feross/buffer/issues/166
function isArrayBuffer (obj) {
  return obj instanceof ArrayBuffer ||
    (obj != null && obj.constructor != null && obj.constructor.name === 'ArrayBuffer' &&
      typeof obj.byteLength === 'number')
}

function numberIsNaN (obj) {
  return obj !== obj // eslint-disable-line no-self-compare
}


/***/ }),

/***/ "./node_modules/core-util-is/lib/util.js":
/*!***********************************************!*\
  !*** ./node_modules/core-util-is/lib/util.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js").Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/pako/lib/inflate.js":
/*!******************************************!*\
  !*** ./node_modules/pako/lib/inflate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var zlib_inflate = __webpack_require__(/*! ./zlib/inflate */ "./node_modules/pako/lib/zlib/inflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
var c            = __webpack_require__(/*! ./zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");
var GZheader     = __webpack_require__(/*! ./zlib/gzheader */ "./node_modules/pako/lib/zlib/gzheader.js");

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 aligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;


/***/ }),

/***/ "./node_modules/pako/lib/utils/common.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/utils/common.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');

function _has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);


/***/ }),

/***/ "./node_modules/pako/lib/utils/strings.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/utils/strings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// String encode/decode helpers



var utils = __webpack_require__(/*! ./common */ "./node_modules/pako/lib/utils/common.js");


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/adler32.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/adler32.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/pako/lib/zlib/constants.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/crc32.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/crc32.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/gzheader.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/gzheader.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inffast.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/inffast.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inflate.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/inflate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");
var adler32       = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
var crc32         = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
var inflate_fast  = __webpack_require__(/*! ./inffast */ "./node_modules/pako/lib/zlib/inffast.js");
var inflate_table = __webpack_require__(/*! ./inftrees */ "./node_modules/pako/lib/zlib/inftrees.js");

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        state.flags = 0;           /* expect zlib header */
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }
        state.dmax = 1 << len;
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Array(state.head.extra_len);
              }
              utils.arraySet(
                state.head.extra,
                input,
                next,
                // extra field is limited to 65536 bytes
                // - no need for additional size check
                copy,
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if (state.flags & 0x0200) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          utils.arraySet(output, input, next, copy, put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inflate_fast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (_out) {
            strm.adler = state.check =
                /*UPDATE(state.check, put - _out, _out);*/
                (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inftrees.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/inftrees.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/messages.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/messages.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/zstream.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/zstream.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;


/***/ }),

/***/ "./node_modules/process-nextick-args/index.js":
/*!****************************************************!*\
  !*** ./node_modules/process-nextick-args/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (typeof process === 'undefined' ||
    !process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! process */ "./node_modules/bfs-process/js/index.js")))

/***/ }),

/***/ "./node_modules/readable-stream/duplex-browser.js":
/*!********************************************************!*\
  !*** ./node_modules/readable-stream/duplex-browser.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/_stream_duplex.js */ "./node_modules/readable-stream/lib/_stream_duplex.js");


/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
/*!************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_duplex.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var pna = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js");
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = Object.create(__webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js"));
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

var Readable = __webpack_require__(/*! ./_stream_readable */ "./node_modules/readable-stream/lib/_stream_readable.js");
var Writable = __webpack_require__(/*! ./_stream_writable */ "./node_modules/readable-stream/lib/_stream_writable.js");

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
/*!*****************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_passthrough.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__(/*! ./_stream_transform */ "./node_modules/readable-stream/lib/_stream_transform.js");

/*<replacement>*/
var util = Object.create(__webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js"));
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
/*!**************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_readable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var pna = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js");
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(/*! ./internal/streams/stream */ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/readable-stream/node_modules/safe-buffer/index.js").Buffer;
var OurUint8Array = (typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}).Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = Object.create(__webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js"));
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(/*! util */ 0);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(/*! ./internal/streams/BufferList */ "./node_modules/readable-stream/lib/internal/streams/BufferList.js");
var destroyImpl = __webpack_require__(/*! ./internal/streams/destroy */ "./node_modules/readable-stream/lib/internal/streams/destroy.js");
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(/*! string_decoder/ */ "./node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(/*! string_decoder/ */ "./node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, { hasUnpiped: false });
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! process */ "./node_modules/bfs-process/js/index.js")))

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
/*!***************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_transform.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

/*<replacement>*/
var util = Object.create(__webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js"));
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
/*!**************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_writable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



/*<replacement>*/

var pna = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js");
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = Object.create(__webpack_require__(/*! core-util-is */ "./node_modules/core-util-is/lib/util.js"));
util.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(/*! util-deprecate */ "./node_modules/util-deprecate/browser.js")
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(/*! ./internal/streams/stream */ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/readable-stream/node_modules/safe-buffer/index.js").Buffer;
var OurUint8Array = (typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}).Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = __webpack_require__(/*! ./internal/streams/destroy */ "./node_modules/readable-stream/lib/internal/streams/destroy.js");

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/readable-stream/lib/_stream_duplex.js");

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }

  // reuse the free corkReq.
  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! process */ "./node_modules/bfs-process/js/index.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
/*!*************************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/BufferList.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/readable-stream/node_modules/safe-buffer/index.js").Buffer;
var util = __webpack_require__(/*! util */ 1);

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}

/***/ }),

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
/*!**********************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/destroy.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

var pna = __webpack_require__(/*! process-nextick-args */ "./node_modules/process-nextick-args/index.js");
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        pna.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        pna.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        pna.nextTick(emitErrorNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        pna.nextTick(emitErrorNT, _this, err);
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

/***/ }),

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/stream-browser.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;


/***/ }),

/***/ "./node_modules/readable-stream/node_modules/safe-buffer/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/readable-stream/node_modules/safe-buffer/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "./node_modules/readable-stream/passthrough.js":
/*!*****************************************************!*\
  !*** ./node_modules/readable-stream/passthrough.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./readable */ "./node_modules/readable-stream/readable-browser.js").PassThrough


/***/ }),

/***/ "./node_modules/readable-stream/readable-browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/readable-stream/readable-browser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./lib/_stream_readable.js */ "./node_modules/readable-stream/lib/_stream_readable.js");
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(/*! ./lib/_stream_writable.js */ "./node_modules/readable-stream/lib/_stream_writable.js");
exports.Duplex = __webpack_require__(/*! ./lib/_stream_duplex.js */ "./node_modules/readable-stream/lib/_stream_duplex.js");
exports.Transform = __webpack_require__(/*! ./lib/_stream_transform.js */ "./node_modules/readable-stream/lib/_stream_transform.js");
exports.PassThrough = __webpack_require__(/*! ./lib/_stream_passthrough.js */ "./node_modules/readable-stream/lib/_stream_passthrough.js");


/***/ }),

/***/ "./node_modules/readable-stream/transform.js":
/*!***************************************************!*\
  !*** ./node_modules/readable-stream/transform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./readable */ "./node_modules/readable-stream/readable-browser.js").Transform


/***/ }),

/***/ "./node_modules/readable-stream/writable-browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/readable-stream/writable-browser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/_stream_writable.js */ "./node_modules/readable-stream/lib/_stream_writable.js");


/***/ }),

/***/ "./node_modules/safe-buffer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/safe-buffer/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "./node_modules/stream-browserify/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stream-browserify/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

inherits(Stream, EE);
Stream.Readable = __webpack_require__(/*! readable-stream/readable.js */ "./node_modules/readable-stream/readable-browser.js");
Stream.Writable = __webpack_require__(/*! readable-stream/writable.js */ "./node_modules/readable-stream/writable-browser.js");
Stream.Duplex = __webpack_require__(/*! readable-stream/duplex.js */ "./node_modules/readable-stream/duplex-browser.js");
Stream.Transform = __webpack_require__(/*! readable-stream/transform.js */ "./node_modules/readable-stream/transform.js");
Stream.PassThrough = __webpack_require__(/*! readable-stream/passthrough.js */ "./node_modules/readable-stream/passthrough.js");

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


/***/ }),

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
/*!***********************************************************!*\
  !*** ./node_modules/string_decoder/lib/string_decoder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),

/***/ "./node_modules/util-deprecate/browser.js":
/*!************************************************!*\
  !*** ./node_modules/util-deprecate/browser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
});