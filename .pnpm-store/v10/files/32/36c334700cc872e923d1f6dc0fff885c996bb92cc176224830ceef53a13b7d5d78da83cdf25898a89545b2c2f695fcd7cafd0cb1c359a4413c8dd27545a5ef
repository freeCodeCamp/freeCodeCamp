var $1esxr$fs = require("fs");
var $1esxr$child_process = require("child_process");
var $1esxr$path = require("path");
var $1esxr$stream = require("stream");
var $1esxr$events = require("events");
var $1esxr$buffer = require("buffer");
var $1esxr$util = require("util");
var $1esxr$parcelcore = require("@parcel/core");
var $1esxr$parceldiagnostic = require("@parcel/diagnostic");
var $1esxr$module = require("module");
var $1esxr$semver = require("semver");
var $1esxr$parcelutils = require("@parcel/utils");
var $1esxr$assert = require("assert");
var $1esxr$parcellogger = require("@parcel/logger");
var $1esxr$parcelworkers = require("@parcel/workers");
var $1esxr$string_decoder = require("string_decoder");
var $1esxr$parcelfs = require("@parcel/fs");

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire0b48"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire0b48"] = parcelRequire;
}
parcelRequire.register("eMBg7", function(module, exports) {
module.exports = $ac32733cef05e628$var$isexe;
$ac32733cef05e628$var$isexe.sync = $ac32733cef05e628$var$sync;

function $ac32733cef05e628$var$checkPathExt(path, options) {
    var pathext = options.pathExt !== undefined ? options.pathExt : process.env.PATHEXT;
    if (!pathext) return true;
    pathext = pathext.split(";");
    if (pathext.indexOf("") !== -1) return true;
    for(var i = 0; i < pathext.length; i++){
        var p = pathext[i].toLowerCase();
        if (p && path.substr(-p.length).toLowerCase() === p) return true;
    }
    return false;
}
function $ac32733cef05e628$var$checkStat(stat, path, options) {
    if (!stat.isSymbolicLink() && !stat.isFile()) return false;
    return $ac32733cef05e628$var$checkPathExt(path, options);
}
function $ac32733cef05e628$var$isexe(path, options, cb) {
    $1esxr$fs.stat(path, function(er, stat) {
        cb(er, er ? false : $ac32733cef05e628$var$checkStat(stat, path, options));
    });
}
function $ac32733cef05e628$var$sync(path, options) {
    return $ac32733cef05e628$var$checkStat($1esxr$fs.statSync(path), path, options);
}

});

parcelRequire.register("8HRwQ", function(module, exports) {
module.exports = $656bdc962cd40c78$var$isexe;
$656bdc962cd40c78$var$isexe.sync = $656bdc962cd40c78$var$sync;

function $656bdc962cd40c78$var$isexe(path, options, cb) {
    $1esxr$fs.stat(path, function(er, stat) {
        cb(er, er ? false : $656bdc962cd40c78$var$checkStat(stat, options));
    });
}
function $656bdc962cd40c78$var$sync(path, options) {
    return $656bdc962cd40c78$var$checkStat($1esxr$fs.statSync(path), options);
}
function $656bdc962cd40c78$var$checkStat(stat, options) {
    return stat.isFile() && $656bdc962cd40c78$var$checkMode(stat, options);
}
function $656bdc962cd40c78$var$checkMode(stat, options) {
    var mod = stat.mode;
    var uid = stat.uid;
    var gid = stat.gid;
    var myUid = options.uid !== undefined ? options.uid : process.getuid && process.getuid();
    var myGid = options.gid !== undefined ? options.gid : process.getgid && process.getgid();
    var u = parseInt("100", 8);
    var g = parseInt("010", 8);
    var o = parseInt("001", 8);
    var ug = u | g;
    var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
    return ret;
}

});

parcelRequire.register("3AROA", function(module, exports) {
"use strict";
module.exports = (opts)=>{
    opts = opts || {};
    const env = opts.env || process.env;
    const platform = opts.platform || process.platform;
    if (platform !== "win32") return "PATH";
    return Object.keys(env).find((x)=>x.toUpperCase() === "PATH") || "Path";
};

});

parcelRequire.register("6BVRF", function(module, exports) {
"use strict";

var $4d0315811fb72fde$require$exec = $1esxr$child_process.exec;

var $4d0315811fb72fde$require$execSync = $1esxr$child_process.execSync;


var $4d0315811fb72fde$var$access = $1esxr$fs.access;
var $4d0315811fb72fde$var$accessSync = $1esxr$fs.accessSync;
var $4d0315811fb72fde$var$constants = $1esxr$fs.constants || $1esxr$fs;
var $4d0315811fb72fde$var$isUsingWindows = process.platform == "win32";
var $4d0315811fb72fde$var$fileNotExists = function(commandName, callback) {
    $4d0315811fb72fde$var$access(commandName, $4d0315811fb72fde$var$constants.F_OK, function(err) {
        callback(!err);
    });
};
var $4d0315811fb72fde$var$fileNotExistsSync = function(commandName) {
    try {
        $4d0315811fb72fde$var$accessSync(commandName, $4d0315811fb72fde$var$constants.F_OK);
        return false;
    } catch (e) {
        return true;
    }
};
var $4d0315811fb72fde$var$localExecutable = function(commandName, callback) {
    $4d0315811fb72fde$var$access(commandName, $4d0315811fb72fde$var$constants.F_OK | $4d0315811fb72fde$var$constants.X_OK, function(err) {
        callback(null, !err);
    });
};
var $4d0315811fb72fde$var$localExecutableSync = function(commandName) {
    try {
        $4d0315811fb72fde$var$accessSync(commandName, $4d0315811fb72fde$var$constants.F_OK | $4d0315811fb72fde$var$constants.X_OK);
        return true;
    } catch (e) {
        return false;
    }
};
var $4d0315811fb72fde$var$commandExistsUnix = function(commandName, cleanedCommandName, callback) {
    $4d0315811fb72fde$var$fileNotExists(commandName, function(isFile) {
        if (!isFile) {
            var child = $4d0315811fb72fde$require$exec("command -v " + cleanedCommandName + " 2>/dev/null" + " && { echo >&1 " + cleanedCommandName + "; exit 0; }", function(error, stdout, stderr) {
                callback(null, !!stdout);
            });
            return;
        }
        $4d0315811fb72fde$var$localExecutable(commandName, callback);
    });
};
var $4d0315811fb72fde$var$commandExistsWindows = function(commandName, cleanedCommandName, callback) {
    // Regex from Julio from: https://stackoverflow.com/questions/51494579/regex-windows-path-validator
    if (!/^(?!(?:.*\s|.*\.|\W+)$)(?:[a-zA-Z]:)?(?:(?:[^<>:"\|\?\*\n])+(?:\/\/|\/|\\\\|\\)?)+$/m.test(commandName)) {
        callback(null, false);
        return;
    }
    var child = $4d0315811fb72fde$require$exec("where " + cleanedCommandName, function(error) {
        if (error !== null) callback(null, false);
        else callback(null, true);
    });
};
var $4d0315811fb72fde$var$commandExistsUnixSync = function(commandName, cleanedCommandName) {
    if ($4d0315811fb72fde$var$fileNotExistsSync(commandName)) try {
        var stdout = $4d0315811fb72fde$require$execSync("command -v " + cleanedCommandName + " 2>/dev/null" + " && { echo >&1 " + cleanedCommandName + "; exit 0; }");
        return !!stdout;
    } catch (error) {
        return false;
    }
    return $4d0315811fb72fde$var$localExecutableSync(commandName);
};
var $4d0315811fb72fde$var$commandExistsWindowsSync = function(commandName, cleanedCommandName, callback) {
    // Regex from Julio from: https://stackoverflow.com/questions/51494579/regex-windows-path-validator
    if (!/^(?!(?:.*\s|.*\.|\W+)$)(?:[a-zA-Z]:)?(?:(?:[^<>:"\|\?\*\n])+(?:\/\/|\/|\\\\|\\)?)+$/m.test(commandName)) return false;
    try {
        var stdout = $4d0315811fb72fde$require$execSync("where " + cleanedCommandName, {
            stdio: []
        });
        return !!stdout;
    } catch (error) {
        return false;
    }
};
var $4d0315811fb72fde$var$cleanInput = function(s) {
    if (/[^A-Za-z0-9_\/:=-]/.test(s)) {
        s = "'" + s.replace(/'/g, "'\\''") + "'";
        s = s.replace(/^(?:'')+/g, "") // unduplicate single-quote at the beginning
        .replace(/\\'''/g, "\\'"); // remove non-escaped single-quote if there are enclosed between 2 escaped
    }
    return s;
};
if ($4d0315811fb72fde$var$isUsingWindows) $4d0315811fb72fde$var$cleanInput = function(s) {
    var isPathName = /[\\]/.test(s);
    if (isPathName) {
        var dirname = '"' + $1esxr$path.dirname(s) + '"';
        var basename = '"' + $1esxr$path.basename(s) + '"';
        return dirname + ":" + basename;
    }
    return '"' + s + '"';
};
module.exports = function commandExists(commandName, callback) {
    var cleanedCommandName = $4d0315811fb72fde$var$cleanInput(commandName);
    if (!callback && typeof Promise !== "undefined") return new Promise(function(resolve, reject) {
        commandExists(commandName, function(error, output) {
            if (output) resolve(commandName);
            else reject(error);
        });
    });
    if ($4d0315811fb72fde$var$isUsingWindows) $4d0315811fb72fde$var$commandExistsWindows(commandName, cleanedCommandName, callback);
    else $4d0315811fb72fde$var$commandExistsUnix(commandName, cleanedCommandName, callback);
};
module.exports.sync = function(commandName) {
    var cleanedCommandName = $4d0315811fb72fde$var$cleanInput(commandName);
    if ($4d0315811fb72fde$var$isUsingWindows) return $4d0315811fb72fde$var$commandExistsWindowsSync(commandName, cleanedCommandName);
    else return $4d0315811fb72fde$var$commandExistsUnixSync(commandName, cleanedCommandName);
};

});

parcelRequire.register("iTHhD", function(module, exports) {








if (process.env.READABLE_STREAM === "disable" && $1esxr$stream) {
    module.exports = $1esxr$stream.Readable;
    Object.assign(module.exports, $1esxr$stream);
    module.exports.Stream = $1esxr$stream;
} else {
    exports = module.exports = (parcelRequire("1SWME"));
    exports.Stream = $1esxr$stream || exports;
    exports.Readable = exports;
    exports.Writable = (parcelRequire("2sYzM"));
    exports.Duplex = (parcelRequire("aetSa"));
    exports.Transform = (parcelRequire("8SAA9"));
    exports.PassThrough = (parcelRequire("kzIAo"));
    exports.finished = (parcelRequire("cxEYf"));
    exports.pipeline = (parcelRequire("bBU3T"));
}

});
parcelRequire.register("1SWME", function(module, exports) {
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
"use strict";
module.exports = $15f86ecbbb2f836a$var$Readable;
/*<replacement>*/ var $15f86ecbbb2f836a$var$Duplex;
/*</replacement>*/ $15f86ecbbb2f836a$var$Readable.ReadableState = $15f86ecbbb2f836a$var$ReadableState;

var $15f86ecbbb2f836a$require$EE = $1esxr$events.EventEmitter;
var $15f86ecbbb2f836a$var$EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
};

var $d7Ffe = parcelRequire("d7Ffe");

var $15f86ecbbb2f836a$require$Buffer = $1esxr$buffer.Buffer;
var $15f86ecbbb2f836a$var$OurUint8Array = $parcel$global.Uint8Array || function() {};
function $15f86ecbbb2f836a$var$_uint8ArrayToBuffer(chunk) {
    return $15f86ecbbb2f836a$require$Buffer.from(chunk);
}
function $15f86ecbbb2f836a$var$_isUint8Array(obj) {
    return $15f86ecbbb2f836a$require$Buffer.isBuffer(obj) || obj instanceof $15f86ecbbb2f836a$var$OurUint8Array;
}

var $15f86ecbbb2f836a$var$debug;
if ($1esxr$util && $1esxr$util.debuglog) $15f86ecbbb2f836a$var$debug = $1esxr$util.debuglog("stream");
else $15f86ecbbb2f836a$var$debug = function debug() {};

var $1neAq = parcelRequire("1neAq");

var $3JoGq = parcelRequire("3JoGq");

var $dbObl = parcelRequire("dbObl");
var $15f86ecbbb2f836a$var$getHighWaterMark = $dbObl.getHighWaterMark;

var $kxUKf = parcelRequire("kxUKf");
var $15f86ecbbb2f836a$require$_require$codes = $kxUKf.codes;
var $15f86ecbbb2f836a$var$ERR_INVALID_ARG_TYPE = $15f86ecbbb2f836a$require$_require$codes.ERR_INVALID_ARG_TYPE, $15f86ecbbb2f836a$var$ERR_STREAM_PUSH_AFTER_EOF = $15f86ecbbb2f836a$require$_require$codes.ERR_STREAM_PUSH_AFTER_EOF, $15f86ecbbb2f836a$var$ERR_METHOD_NOT_IMPLEMENTED = $15f86ecbbb2f836a$require$_require$codes.ERR_METHOD_NOT_IMPLEMENTED, $15f86ecbbb2f836a$var$ERR_STREAM_UNSHIFT_AFTER_END_EVENT = $15f86ecbbb2f836a$require$_require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.
var $15f86ecbbb2f836a$var$StringDecoder;
var $15f86ecbbb2f836a$var$createReadableStreamAsyncIterator;
var $15f86ecbbb2f836a$var$from;

(parcelRequire("3zpOe"))($15f86ecbbb2f836a$var$Readable, $d7Ffe);
var $15f86ecbbb2f836a$var$errorOrDestroy = $3JoGq.errorOrDestroy;
var $15f86ecbbb2f836a$var$kProxyEvents = [
    "error",
    "close",
    "destroy",
    "pause",
    "resume"
];
function $15f86ecbbb2f836a$var$prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}


function $15f86ecbbb2f836a$var$ReadableState(options, stream, isDuplex) {
    $15f86ecbbb2f836a$var$Duplex = $15f86ecbbb2f836a$var$Duplex || (parcelRequire("aetSa"));
    options = options || {}; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof $15f86ecbbb2f836a$var$Duplex; // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    this.highWaterMark = $15f86ecbbb2f836a$var$getHighWaterMark(this, options, "readableHighWaterMark", isDuplex); // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new $1neAq();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true; // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true; // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')
    this.autoDestroy = !!options.autoDestroy; // has it been destroyed
    this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8"; // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!$15f86ecbbb2f836a$var$StringDecoder) $15f86ecbbb2f836a$var$StringDecoder = (parcelRequire("Y7BXp")).StringDecoder;
        this.decoder = new $15f86ecbbb2f836a$var$StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}

function $15f86ecbbb2f836a$var$Readable(options) {
    $15f86ecbbb2f836a$var$Duplex = $15f86ecbbb2f836a$var$Duplex || (parcelRequire("aetSa"));
    if (!(this instanceof $15f86ecbbb2f836a$var$Readable)) return new $15f86ecbbb2f836a$var$Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5
    var isDuplex = this instanceof $15f86ecbbb2f836a$var$Duplex;
    this._readableState = new $15f86ecbbb2f836a$var$ReadableState(options, this, isDuplex); // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === "function") this._read = options.read;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
    }
    $d7Ffe.call(this);
}
Object.defineProperty($15f86ecbbb2f836a$var$Readable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined) return false;
        return this._readableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
$15f86ecbbb2f836a$var$Readable.prototype.destroy = $3JoGq.destroy;
$15f86ecbbb2f836a$var$Readable.prototype._undestroy = $3JoGq.undestroy;
$15f86ecbbb2f836a$var$Readable.prototype._destroy = function(err, cb) {
    cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
$15f86ecbbb2f836a$var$Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === "string") {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = $15f86ecbbb2f836a$require$Buffer.from(chunk, encoding);
                encoding = "";
            }
            skipChunkCheck = true;
        }
    } else skipChunkCheck = true;
    return $15f86ecbbb2f836a$var$readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()
$15f86ecbbb2f836a$var$Readable.prototype.unshift = function(chunk) {
    return $15f86ecbbb2f836a$var$readableAddChunk(this, chunk, null, true, false);
};
function $15f86ecbbb2f836a$var$readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    $15f86ecbbb2f836a$var$debug("readableAddChunk", chunk);
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        $15f86ecbbb2f836a$var$onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = $15f86ecbbb2f836a$var$chunkInvalid(state, chunk);
        if (er) $15f86ecbbb2f836a$var$errorOrDestroy(stream, er);
        else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== $15f86ecbbb2f836a$require$Buffer.prototype) chunk = $15f86ecbbb2f836a$var$_uint8ArrayToBuffer(chunk);
            if (addToFront) {
                if (state.endEmitted) $15f86ecbbb2f836a$var$errorOrDestroy(stream, new $15f86ecbbb2f836a$var$ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                else $15f86ecbbb2f836a$var$addChunk(stream, state, chunk, true);
            } else if (state.ended) $15f86ecbbb2f836a$var$errorOrDestroy(stream, new $15f86ecbbb2f836a$var$ERR_STREAM_PUSH_AFTER_EOF());
            else if (state.destroyed) return false;
            else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) $15f86ecbbb2f836a$var$addChunk(stream, state, chunk, false);
                    else $15f86ecbbb2f836a$var$maybeReadMore(stream, state);
                } else $15f86ecbbb2f836a$var$addChunk(stream, state, chunk, false);
            }
        } else if (!addToFront) {
            state.reading = false;
            $15f86ecbbb2f836a$var$maybeReadMore(stream, state);
        }
    } // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function $15f86ecbbb2f836a$var$addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) $15f86ecbbb2f836a$var$emitReadable(stream);
    }
    $15f86ecbbb2f836a$var$maybeReadMore(stream, state);
}
function $15f86ecbbb2f836a$var$chunkInvalid(state, chunk) {
    var er;
    if (!$15f86ecbbb2f836a$var$_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) er = new $15f86ecbbb2f836a$var$ERR_INVALID_ARG_TYPE("chunk", [
        "string",
        "Buffer",
        "Uint8Array"
    ], chunk);
    return er;
}
$15f86ecbbb2f836a$var$Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
}; // backwards compatibility.

$15f86ecbbb2f836a$var$Readable.prototype.setEncoding = function(enc) {
    if (!$15f86ecbbb2f836a$var$StringDecoder) $15f86ecbbb2f836a$var$StringDecoder = (parcelRequire("Y7BXp")).StringDecoder;
    var decoder = new $15f86ecbbb2f836a$var$StringDecoder(enc);
    this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8
    this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:
    var p = this._readableState.buffer.head;
    var content = "";
    while(p !== null){
        content += decoder.write(p.data);
        p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== "") this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
}; // Don't raise the hwm > 1GB
var $15f86ecbbb2f836a$var$MAX_HWM = 0x40000000;
function $15f86ecbbb2f836a$var$computeNewHighWaterMark(n) {
    if (n >= $15f86ecbbb2f836a$var$MAX_HWM) // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = $15f86ecbbb2f836a$var$MAX_HWM;
    else {
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
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.
function $15f86ecbbb2f836a$var$howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    } // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = $15f86ecbbb2f836a$var$computeNewHighWaterMark(n);
    if (n <= state.length) return n; // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
} // you can override either this method, or the async _read(n) below.
$15f86ecbbb2f836a$var$Readable.prototype.read = function(n) {
    $15f86ecbbb2f836a$var$debug("read", n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        $15f86ecbbb2f836a$var$debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended) $15f86ecbbb2f836a$var$endReadable(this);
        else $15f86ecbbb2f836a$var$emitReadable(this);
        return null;
    }
    n = $15f86ecbbb2f836a$var$howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) $15f86ecbbb2f836a$var$endReadable(this);
        return null;
    } // All the actual chunk generation logic needs to be
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
    $15f86ecbbb2f836a$var$debug("need readable", doRead); // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        $15f86ecbbb2f836a$var$debug("length less than watermark", doRead);
    } // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        $15f86ecbbb2f836a$var$debug("reading or ended", doRead);
    } else if (doRead) {
        $15f86ecbbb2f836a$var$debug("do read");
        state.reading = true;
        state.sync = true; // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true; // call internal read method
        this._read(state.highWaterMark);
        state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = $15f86ecbbb2f836a$var$howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = $15f86ecbbb2f836a$var$fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
    } else {
        state.length -= n;
        state.awaitDrain = 0;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) $15f86ecbbb2f836a$var$endReadable(this);
    }
    if (ret !== null) this.emit("data", ret);
    return ret;
};
function $15f86ecbbb2f836a$var$onEofChunk(stream, state) {
    $15f86ecbbb2f836a$var$debug("onEofChunk");
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    $15f86ecbbb2f836a$var$emitReadable(stream);
    else {
        // emit 'readable' now to make sure it gets picked up.
        state.needReadable = false;
        if (!state.emittedReadable) {
            state.emittedReadable = true;
            $15f86ecbbb2f836a$var$emitReadable_(stream);
        }
    }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function $15f86ecbbb2f836a$var$emitReadable(stream) {
    var state = stream._readableState;
    $15f86ecbbb2f836a$var$debug("emitReadable", state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
        $15f86ecbbb2f836a$var$debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process.nextTick($15f86ecbbb2f836a$var$emitReadable_, stream);
    }
}
function $15f86ecbbb2f836a$var$emitReadable_(stream) {
    var state = stream._readableState;
    $15f86ecbbb2f836a$var$debug("emitReadable_", state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
    } // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    $15f86ecbbb2f836a$var$flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function $15f86ecbbb2f836a$var$maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick($15f86ecbbb2f836a$var$maybeReadMore_, stream, state);
    }
}
function $15f86ecbbb2f836a$var$maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        var len = state.length;
        $15f86ecbbb2f836a$var$debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length) break;
    }
    state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
$15f86ecbbb2f836a$var$Readable.prototype._read = function(n) {
    $15f86ecbbb2f836a$var$errorOrDestroy(this, new $15f86ecbbb2f836a$var$ERR_METHOD_NOT_IMPLEMENTED("_read()"));
};
$15f86ecbbb2f836a$var$Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    $15f86ecbbb2f836a$var$debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process.nextTick(endFn);
    else src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
        $15f86ecbbb2f836a$var$debug("onunpipe");
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        $15f86ecbbb2f836a$var$debug("onend");
        dest.end();
    } // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = $15f86ecbbb2f836a$var$pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
        $15f86ecbbb2f836a$var$debug("cleanup"); // cleanup event handlers once the pipe is broken
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true; // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
        $15f86ecbbb2f836a$var$debug("ondata");
        var ret = dest.write(chunk);
        $15f86ecbbb2f836a$var$debug("dest.write", ret);
        if (ret === false) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && $15f86ecbbb2f836a$var$indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                $15f86ecbbb2f836a$var$debug("false write response, pause", state.awaitDrain);
                state.awaitDrain++;
            }
            src.pause();
        }
    } // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        $15f86ecbbb2f836a$var$debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if ($15f86ecbbb2f836a$var$EElistenerCount(dest, "error") === 0) $15f86ecbbb2f836a$var$errorOrDestroy(dest, er);
    } // Make sure our error handler is attached before userland ones.
    $15f86ecbbb2f836a$var$prependListener(dest, "error", onerror); // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
        $15f86ecbbb2f836a$var$debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
        $15f86ecbbb2f836a$var$debug("unpipe");
        src.unpipe(dest);
    } // tell the dest that it's being piped to
    dest.emit("pipe", src); // start the flow if it hasn't been started already.
    if (!state.flowing) {
        $15f86ecbbb2f836a$var$debug("pipe resume");
        src.resume();
    }
    return dest;
};
function $15f86ecbbb2f836a$var$pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        $15f86ecbbb2f836a$var$debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && $15f86ecbbb2f836a$var$EElistenerCount(src, "data")) {
            state.flowing = true;
            $15f86ecbbb2f836a$var$flow(src);
        }
    };
}
$15f86ecbbb2f836a$var$Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    }; // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this; // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes; // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
    } // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit("unpipe", this, {
            hasUnpiped: false
        });
        return this;
    } // try to find the right one.
    var index = $15f86ecbbb2f836a$var$indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something
$15f86ecbbb2f836a$var$Readable.prototype.on = function(ev, fn) {
    var res = $d7Ffe.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === "data") {
        // update readableListening so that resume() may be a no-op
        // a few lines down. This is needed to support once('readable').
        state.readableListening = this.listenerCount("readable") > 0; // Try start flowing on next tick if stream isn't explicitly paused
        if (state.flowing !== false) this.resume();
    } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            $15f86ecbbb2f836a$var$debug("on readable", state.length, state.reading);
            if (state.length) $15f86ecbbb2f836a$var$emitReadable(this);
            else if (!state.reading) process.nextTick($15f86ecbbb2f836a$var$nReadingNextTick, this);
        }
    }
    return res;
};
$15f86ecbbb2f836a$var$Readable.prototype.addListener = $15f86ecbbb2f836a$var$Readable.prototype.on;
$15f86ecbbb2f836a$var$Readable.prototype.removeListener = function(ev, fn) {
    var res = $d7Ffe.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick($15f86ecbbb2f836a$var$updateReadableListening, this);
    return res;
};
$15f86ecbbb2f836a$var$Readable.prototype.removeAllListeners = function(ev) {
    var res = $d7Ffe.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === undefined) // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick($15f86ecbbb2f836a$var$updateReadableListening, this);
    return res;
};
function $15f86ecbbb2f836a$var$updateReadableListening(self) {
    var state = self._readableState;
    state.readableListening = self.listenerCount("readable") > 0;
    if (state.resumeScheduled && !state.paused) // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
    else if (self.listenerCount("data") > 0) self.resume();
}
function $15f86ecbbb2f836a$var$nReadingNextTick(self) {
    $15f86ecbbb2f836a$var$debug("readable nexttick read 0");
    self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
$15f86ecbbb2f836a$var$Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        $15f86ecbbb2f836a$var$debug("resume"); // we flow only if there is no one listening
        // for readable, but we still have to call
        // resume()
        state.flowing = !state.readableListening;
        $15f86ecbbb2f836a$var$resume(this, state);
    }
    state.paused = false;
    return this;
};
function $15f86ecbbb2f836a$var$resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick($15f86ecbbb2f836a$var$resume_, stream, state);
    }
}
function $15f86ecbbb2f836a$var$resume_(stream, state) {
    $15f86ecbbb2f836a$var$debug("resume", state.reading);
    if (!state.reading) stream.read(0);
    state.resumeScheduled = false;
    stream.emit("resume");
    $15f86ecbbb2f836a$var$flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
$15f86ecbbb2f836a$var$Readable.prototype.pause = function() {
    $15f86ecbbb2f836a$var$debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
        $15f86ecbbb2f836a$var$debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
};
function $15f86ecbbb2f836a$var$flow(stream) {
    var state = stream._readableState;
    $15f86ecbbb2f836a$var$debug("flow", state.flowing);
    while(state.flowing && stream.read() !== null);
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
$15f86ecbbb2f836a$var$Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
        $15f86ecbbb2f836a$var$debug("wrapped end");
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on("data", function(chunk) {
        $15f86ecbbb2f836a$var$debug("wrapped data");
        if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    }); // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream)if (this[i] === undefined && typeof stream[i] === "function") this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
        };
    }(i);
     // proxy certain important events.
    for(var n = 0; n < $15f86ecbbb2f836a$var$kProxyEvents.length; n++)stream.on($15f86ecbbb2f836a$var$kProxyEvents[n], this.emit.bind(this, $15f86ecbbb2f836a$var$kProxyEvents[n]));
     // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        $15f86ecbbb2f836a$var$debug("wrapped _read", n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};

if (typeof Symbol === "function") $15f86ecbbb2f836a$var$Readable.prototype[Symbol.asyncIterator] = function() {
    if ($15f86ecbbb2f836a$var$createReadableStreamAsyncIterator === undefined) $15f86ecbbb2f836a$var$createReadableStreamAsyncIterator = (parcelRequire("3O7ud"));
    return $15f86ecbbb2f836a$var$createReadableStreamAsyncIterator(this);
};
Object.defineProperty($15f86ecbbb2f836a$var$Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.highWaterMark;
    }
});
Object.defineProperty($15f86ecbbb2f836a$var$Readable.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState && this._readableState.buffer;
    }
});
Object.defineProperty($15f86ecbbb2f836a$var$Readable.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.flowing;
    },
    set: function set(state) {
        if (this._readableState) this._readableState.flowing = state;
    }
}); // exposed for testing purposes only.
$15f86ecbbb2f836a$var$Readable._fromList = $15f86ecbbb2f836a$var$fromList;
Object.defineProperty($15f86ecbbb2f836a$var$Readable.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.length;
    }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function $15f86ecbbb2f836a$var$fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join("");
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else // read part of list
    ret = state.buffer.consume(n, state.decoder);
    return ret;
}
function $15f86ecbbb2f836a$var$endReadable(stream) {
    var state = stream._readableState;
    $15f86ecbbb2f836a$var$debug("endReadable", state.endEmitted);
    if (!state.endEmitted) {
        state.ended = true;
        process.nextTick($15f86ecbbb2f836a$var$endReadableNT, state, stream);
    }
}
function $15f86ecbbb2f836a$var$endReadableNT(state, stream) {
    $15f86ecbbb2f836a$var$debug("endReadableNT", state.endEmitted, state.length); // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
            // In case of duplex streams we need a way to detect
            // if the writable side is ready for autoDestroy as well
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) stream.destroy();
        }
    }
}

if (typeof Symbol === "function") $15f86ecbbb2f836a$var$Readable.from = function(iterable, opts) {
    if ($15f86ecbbb2f836a$var$from === undefined) $15f86ecbbb2f836a$var$from = (parcelRequire("7LJA4"));
    return $15f86ecbbb2f836a$var$from($15f86ecbbb2f836a$var$Readable, iterable, opts);
};
function $15f86ecbbb2f836a$var$indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}

});
parcelRequire.register("d7Ffe", function(module, exports) {

module.exports = $1esxr$stream;

});

parcelRequire.register("1neAq", function(module, exports) {
"use strict";
function $100341003ce48506$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $100341003ce48506$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $100341003ce48506$var$ownKeys(Object(source), true).forEach(function(key) {
            $100341003ce48506$var$_defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $100341003ce48506$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $100341003ce48506$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $100341003ce48506$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $100341003ce48506$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $100341003ce48506$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $100341003ce48506$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $100341003ce48506$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}

var $100341003ce48506$var$Buffer = $1esxr$buffer.Buffer;

var $100341003ce48506$var$inspect = $1esxr$util.inspect;
var $100341003ce48506$var$custom = $100341003ce48506$var$inspect && $100341003ce48506$var$inspect.custom || "inspect";
function $100341003ce48506$var$copyBuffer(src, target, offset) {
    $100341003ce48506$var$Buffer.prototype.copy.call(src, target, offset);
}
module.exports = /*#__PURE__*/ function() {
    function BufferList() {
        $100341003ce48506$var$_classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    $100341003ce48506$var$_createClass(BufferList, [
        {
            key: "push",
            value: function push(v) {
                var entry = {
                    data: v,
                    next: null
                };
                if (this.length > 0) this.tail.next = entry;
                else this.head = entry;
                this.tail = entry;
                ++this.length;
            }
        },
        {
            key: "unshift",
            value: function unshift(v) {
                var entry = {
                    data: v,
                    next: this.head
                };
                if (this.length === 0) this.tail = entry;
                this.head = entry;
                ++this.length;
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (this.length === 0) return;
                var ret = this.head.data;
                if (this.length === 1) this.head = this.tail = null;
                else this.head = this.head.next;
                --this.length;
                return ret;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.head = this.tail = null;
                this.length = 0;
            }
        },
        {
            key: "join",
            value: function join(s) {
                if (this.length === 0) return "";
                var p = this.head;
                var ret = "" + p.data;
                while(p = p.next)ret += s + p.data;
                return ret;
            }
        },
        {
            key: "concat",
            value: function concat(n) {
                if (this.length === 0) return $100341003ce48506$var$Buffer.alloc(0);
                var ret = $100341003ce48506$var$Buffer.allocUnsafe(n >>> 0);
                var p = this.head;
                var i = 0;
                while(p){
                    $100341003ce48506$var$copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                }
                return ret;
            } // Consumes a specified amount of bytes or characters from the buffered data.
        },
        {
            key: "consume",
            value: function consume(n, hasStrings) {
                var ret;
                if (n < this.head.data.length) {
                    // `slice` is the same for buffers and strings.
                    ret = this.head.data.slice(0, n);
                    this.head.data = this.head.data.slice(n);
                } else if (n === this.head.data.length) // First chunk is a perfect match.
                ret = this.shift();
                else // Result spans more than one buffer.
                ret = hasStrings ? this._getString(n) : this._getBuffer(n);
                return ret;
            }
        },
        {
            key: "first",
            value: function first() {
                return this.head.data;
            } // Consumes a specified amount of characters from the buffered data.
        },
        {
            key: "_getString",
            value: function _getString(n) {
                var p = this.head;
                var c = 1;
                var ret = p.data;
                n -= ret.length;
                while(p = p.next){
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                        if (nb === str.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = str.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            } // Consumes a specified amount of bytes from the buffered data.
        },
        {
            key: "_getBuffer",
            value: function _getBuffer(n) {
                var ret = $100341003ce48506$var$Buffer.allocUnsafe(n);
                var p = this.head;
                var c = 1;
                p.data.copy(ret);
                n -= p.data.length;
                while(p = p.next){
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                        if (nb === buf.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = buf.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            } // Make sure the linked list only shows the minimal necessary information.
        },
        {
            key: $100341003ce48506$var$custom,
            value: function value(_, options) {
                return $100341003ce48506$var$inspect(this, $100341003ce48506$var$_objectSpread({}, options, {
                    // Only inspect one level.
                    depth: 0,
                    // It should not recurse.
                    customInspect: false
                }));
            }
        }
    ]);
    return BufferList;
}();

});

parcelRequire.register("3JoGq", function(module, exports) {
"use strict"; // undocumented cb() API, needed for core, not for public API
function $2b78b8a8e56cc629$var$destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) cb(err);
        else if (err) {
            if (!this._writableState) process.nextTick($2b78b8a8e56cc629$var$emitErrorNT, this, err);
            else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                process.nextTick($2b78b8a8e56cc629$var$emitErrorNT, this, err);
            }
        }
        return this;
    } // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) this._readableState.destroyed = true;
     // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) this._writableState.destroyed = true;
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) process.nextTick($2b78b8a8e56cc629$var$emitErrorAndCloseNT, _this, err);
            else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                process.nextTick($2b78b8a8e56cc629$var$emitErrorAndCloseNT, _this, err);
            } else process.nextTick($2b78b8a8e56cc629$var$emitCloseNT, _this);
        } else if (cb) {
            process.nextTick($2b78b8a8e56cc629$var$emitCloseNT, _this);
            cb(err);
        } else process.nextTick($2b78b8a8e56cc629$var$emitCloseNT, _this);
    });
    return this;
}
function $2b78b8a8e56cc629$var$emitErrorAndCloseNT(self, err) {
    $2b78b8a8e56cc629$var$emitErrorNT(self, err);
    $2b78b8a8e56cc629$var$emitCloseNT(self);
}
function $2b78b8a8e56cc629$var$emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit("close");
}
function $2b78b8a8e56cc629$var$undestroy() {
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
function $2b78b8a8e56cc629$var$emitErrorNT(self, err) {
    self.emit("error", err);
}
function $2b78b8a8e56cc629$var$errorOrDestroy(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit("error", err);
}
module.exports = {
    destroy: $2b78b8a8e56cc629$var$destroy,
    undestroy: $2b78b8a8e56cc629$var$undestroy,
    errorOrDestroy: $2b78b8a8e56cc629$var$errorOrDestroy
};

});

parcelRequire.register("dbObl", function(module, exports) {
"use strict";

var $kxUKf = parcelRequire("kxUKf");
var $99a33a87405d3bfa$var$ERR_INVALID_OPT_VALUE = $kxUKf.codes.ERR_INVALID_OPT_VALUE;
function $99a33a87405d3bfa$var$highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function $99a33a87405d3bfa$var$getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = $99a33a87405d3bfa$var$highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : "highWaterMark";
            throw new $99a33a87405d3bfa$var$ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
    } // Default value
    return state.objectMode ? 16 : 16384;
}
module.exports = {
    getHighWaterMark: $99a33a87405d3bfa$var$getHighWaterMark
};

});
parcelRequire.register("kxUKf", function(module, exports) {

$parcel$export(module.exports, "codes", () => $ef52e814df544bce$export$e45cb6485273080e, (v) => $ef52e814df544bce$export$e45cb6485273080e = v);
var $ef52e814df544bce$export$e45cb6485273080e;
"use strict";
const $ef52e814df544bce$var$codes = {};
function $ef52e814df544bce$var$createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") return message;
        else return message(arg1, arg2, arg3);
    }
    class NodeError extends Base {
        constructor(arg1, arg2, arg3){
            super(getMessage(arg1, arg2, arg3));
        }
    }
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    $ef52e814df544bce$var$codes[code] = NodeError;
}
// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function $ef52e814df544bce$var$oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        const len = expected.length;
        expected = expected.map((i)=>String(i));
        if (len > 2) return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
        else if (len === 2) return `one of ${thing} ${expected[0]} or ${expected[1]}`;
        else return `of ${thing} ${expected[0]}`;
    } else return `of ${thing} ${String(expected)}`;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function $ef52e814df544bce$var$startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function $ef52e814df544bce$var$endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function $ef52e814df544bce$var$includes(str, search, start) {
    if (typeof start !== "number") start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
$ef52e814df544bce$var$createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
$ef52e814df544bce$var$createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    let determiner;
    if (typeof expected === "string" && $ef52e814df544bce$var$startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
    } else determiner = "must be";
    let msg;
    if ($ef52e814df544bce$var$endsWith(name, " argument")) // For cases like 'first argument'
    msg = `The ${name} ${determiner} ${$ef52e814df544bce$var$oneOf(expected, "type")}`;
    else {
        const type = $ef52e814df544bce$var$includes(name, ".") ? "property" : "argument";
        msg = `The "${name}" ${type} ${determiner} ${$ef52e814df544bce$var$oneOf(expected, "type")}`;
    }
    msg += `. Received type ${typeof actual}`;
    return msg;
}, TypeError);
$ef52e814df544bce$var$createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
$ef52e814df544bce$var$createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
    return "The " + name + " method is not implemented";
});
$ef52e814df544bce$var$createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
$ef52e814df544bce$var$createErrorType("ERR_STREAM_DESTROYED", function(name) {
    return "Cannot call " + name + " after a stream was destroyed";
});
$ef52e814df544bce$var$createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
$ef52e814df544bce$var$createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
$ef52e814df544bce$var$createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
$ef52e814df544bce$var$createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
$ef52e814df544bce$var$createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
    return "Unknown encoding: " + arg;
}, TypeError);
$ef52e814df544bce$var$createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
$ef52e814df544bce$export$e45cb6485273080e = $ef52e814df544bce$var$codes;

});


parcelRequire.register("3zpOe", function(module, exports) {


try {
    var $2998a9280835d3fa$var$util = $2998a9280835d3fa$import$2a3cc58163eb3518;
    /* istanbul ignore next */ if (typeof $2998a9280835d3fa$var$util.inherits !== "function") throw "";
    module.exports = $2998a9280835d3fa$var$util.inherits;
} catch (e) {
    /* istanbul ignore next */ module.exports = (parcelRequire("buSyg"));
}

});
parcelRequire.register("buSyg", function(module, exports) {
if (typeof Object.create === "function") // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

});


parcelRequire.register("aetSa", function(module, exports) {
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
"use strict";
/*<replacement>*/ var $773262467983af58$var$objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = $773262467983af58$var$Duplex;

var $1SWME = parcelRequire("1SWME");

var $2sYzM = parcelRequire("2sYzM");

(parcelRequire("3zpOe"))($773262467983af58$var$Duplex, $1SWME);
// Allow the keys array to be GC'ed.
var $773262467983af58$var$keys = $773262467983af58$var$objectKeys($2sYzM.prototype);
for(var $773262467983af58$var$v = 0; $773262467983af58$var$v < $773262467983af58$var$keys.length; $773262467983af58$var$v++){
    var $773262467983af58$var$method = $773262467983af58$var$keys[$773262467983af58$var$v];
    if (!$773262467983af58$var$Duplex.prototype[$773262467983af58$var$method]) $773262467983af58$var$Duplex.prototype[$773262467983af58$var$method] = $2sYzM.prototype[$773262467983af58$var$method];
}
function $773262467983af58$var$Duplex(options) {
    if (!(this instanceof $773262467983af58$var$Duplex)) return new $773262467983af58$var$Duplex(options);
    $1SWME.call(this, options);
    $2sYzM.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once("end", $773262467983af58$var$onend);
        }
    }
}
Object.defineProperty($773262467983af58$var$Duplex.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
Object.defineProperty($773262467983af58$var$Duplex.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
Object.defineProperty($773262467983af58$var$Duplex.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
}); // the no-half-open enforcer
function $773262467983af58$var$onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return; // no more data can be written.
    // But allow more writes to happen in this tick.
    process.nextTick($773262467983af58$var$onEndNT, this);
}
function $773262467983af58$var$onEndNT(self) {
    self.end();
}
Object.defineProperty($773262467983af58$var$Duplex.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined || this._writableState === undefined) return false;
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});

});
parcelRequire.register("2sYzM", function(module, exports) {
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
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
"use strict";
module.exports = $1cbd2f72abde9a52$var$Writable;
/* <replacement> */ function $1cbd2f72abde9a52$var$WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream
function $1cbd2f72abde9a52$var$CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        $1cbd2f72abde9a52$var$onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var $1cbd2f72abde9a52$var$Duplex;
/*</replacement>*/ $1cbd2f72abde9a52$var$Writable.WritableState = $1cbd2f72abde9a52$var$WritableState;

/*<replacement>*/ var $1cbd2f72abde9a52$var$internalUtil = {
    deprecate: (parcelRequire("eMkbu"))
};

var $d7Ffe = parcelRequire("d7Ffe");

var $1cbd2f72abde9a52$require$Buffer = $1esxr$buffer.Buffer;
var $1cbd2f72abde9a52$var$OurUint8Array = $parcel$global.Uint8Array || function() {};
function $1cbd2f72abde9a52$var$_uint8ArrayToBuffer(chunk) {
    return $1cbd2f72abde9a52$require$Buffer.from(chunk);
}
function $1cbd2f72abde9a52$var$_isUint8Array(obj) {
    return $1cbd2f72abde9a52$require$Buffer.isBuffer(obj) || obj instanceof $1cbd2f72abde9a52$var$OurUint8Array;
}

var $3JoGq = parcelRequire("3JoGq");

var $dbObl = parcelRequire("dbObl");
var $1cbd2f72abde9a52$var$getHighWaterMark = $dbObl.getHighWaterMark;

var $kxUKf = parcelRequire("kxUKf");
var $1cbd2f72abde9a52$require$_require$codes = $kxUKf.codes;
var $1cbd2f72abde9a52$var$ERR_INVALID_ARG_TYPE = $1cbd2f72abde9a52$require$_require$codes.ERR_INVALID_ARG_TYPE, $1cbd2f72abde9a52$var$ERR_METHOD_NOT_IMPLEMENTED = $1cbd2f72abde9a52$require$_require$codes.ERR_METHOD_NOT_IMPLEMENTED, $1cbd2f72abde9a52$var$ERR_MULTIPLE_CALLBACK = $1cbd2f72abde9a52$require$_require$codes.ERR_MULTIPLE_CALLBACK, $1cbd2f72abde9a52$var$ERR_STREAM_CANNOT_PIPE = $1cbd2f72abde9a52$require$_require$codes.ERR_STREAM_CANNOT_PIPE, $1cbd2f72abde9a52$var$ERR_STREAM_DESTROYED = $1cbd2f72abde9a52$require$_require$codes.ERR_STREAM_DESTROYED, $1cbd2f72abde9a52$var$ERR_STREAM_NULL_VALUES = $1cbd2f72abde9a52$require$_require$codes.ERR_STREAM_NULL_VALUES, $1cbd2f72abde9a52$var$ERR_STREAM_WRITE_AFTER_END = $1cbd2f72abde9a52$require$_require$codes.ERR_STREAM_WRITE_AFTER_END, $1cbd2f72abde9a52$var$ERR_UNKNOWN_ENCODING = $1cbd2f72abde9a52$require$_require$codes.ERR_UNKNOWN_ENCODING;
var $1cbd2f72abde9a52$var$errorOrDestroy = $3JoGq.errorOrDestroy;

(parcelRequire("3zpOe"))($1cbd2f72abde9a52$var$Writable, $d7Ffe);
function $1cbd2f72abde9a52$var$nop() {}

function $1cbd2f72abde9a52$var$WritableState(options, stream, isDuplex) {
    $1cbd2f72abde9a52$var$Duplex = $1cbd2f72abde9a52$var$Duplex || (parcelRequire("aetSa"));
    options = options || {}; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof $1cbd2f72abde9a52$var$Duplex; // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = $1cbd2f72abde9a52$var$getHighWaterMark(this, options, "writableHighWaterMark", isDuplex); // if _final has been called
    this.finalCalled = false; // drain event flag.
    this.needDrain = false; // at the start of calling end()
    this.ending = false; // when end() has been called, and returned
    this.ended = false; // when 'finish' is emitted
    this.finished = false; // has it been destroyed
    this.destroyed = false; // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8"; // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0; // a flag to see when we're in the middle of a write.
    this.writing = false; // when true all writes will be buffered until .uncork() call
    this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true; // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        $1cbd2f72abde9a52$var$onwrite(stream, er);
    }; // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null; // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false; // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')
    this.autoDestroy = !!options.autoDestroy; // count buffered requests
    this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new $1cbd2f72abde9a52$var$CorkedRequest(this);
}
$1cbd2f72abde9a52$var$WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty($1cbd2f72abde9a52$var$WritableState.prototype, "buffer", {
            get: $1cbd2f72abde9a52$var$internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
    } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var $1cbd2f72abde9a52$var$realHasInstance;
if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    $1cbd2f72abde9a52$var$realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty($1cbd2f72abde9a52$var$Writable, Symbol.hasInstance, {
        value: function value(object) {
            if ($1cbd2f72abde9a52$var$realHasInstance.call(this, object)) return true;
            if (this !== $1cbd2f72abde9a52$var$Writable) return false;
            return object && object._writableState instanceof $1cbd2f72abde9a52$var$WritableState;
        }
    });
} else $1cbd2f72abde9a52$var$realHasInstance = function realHasInstance(object) {
    return object instanceof this;
};

function $1cbd2f72abde9a52$var$Writable(options) {
    $1cbd2f72abde9a52$var$Duplex = $1cbd2f72abde9a52$var$Duplex || (parcelRequire("aetSa")); // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof $1cbd2f72abde9a52$var$Duplex;
    if (!isDuplex && !$1cbd2f72abde9a52$var$realHasInstance.call($1cbd2f72abde9a52$var$Writable, this)) return new $1cbd2f72abde9a52$var$Writable(options);
    this._writableState = new $1cbd2f72abde9a52$var$WritableState(options, this, isDuplex); // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === "function") this._write = options.write;
        if (typeof options.writev === "function") this._writev = options.writev;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
        if (typeof options.final === "function") this._final = options.final;
    }
    $d7Ffe.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.
$1cbd2f72abde9a52$var$Writable.prototype.pipe = function() {
    $1cbd2f72abde9a52$var$errorOrDestroy(this, new $1cbd2f72abde9a52$var$ERR_STREAM_CANNOT_PIPE());
};
function $1cbd2f72abde9a52$var$writeAfterEnd(stream, cb) {
    var er = new $1cbd2f72abde9a52$var$ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb
    $1cbd2f72abde9a52$var$errorOrDestroy(stream, er);
    process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function $1cbd2f72abde9a52$var$validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) er = new $1cbd2f72abde9a52$var$ERR_STREAM_NULL_VALUES();
    else if (typeof chunk !== "string" && !state.objectMode) er = new $1cbd2f72abde9a52$var$ERR_INVALID_ARG_TYPE("chunk", [
        "string",
        "Buffer"
    ], chunk);
    if (er) {
        $1cbd2f72abde9a52$var$errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
    }
    return true;
}
$1cbd2f72abde9a52$var$Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && $1cbd2f72abde9a52$var$_isUint8Array(chunk);
    if (isBuf && !$1cbd2f72abde9a52$require$Buffer.isBuffer(chunk)) chunk = $1cbd2f72abde9a52$var$_uint8ArrayToBuffer(chunk);
    if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = "buffer";
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== "function") cb = $1cbd2f72abde9a52$var$nop;
    if (state.ending) $1cbd2f72abde9a52$var$writeAfterEnd(this, cb);
    else if (isBuf || $1cbd2f72abde9a52$var$validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = $1cbd2f72abde9a52$var$writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
$1cbd2f72abde9a52$var$Writable.prototype.cork = function() {
    this._writableState.corked++;
};
$1cbd2f72abde9a52$var$Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) $1cbd2f72abde9a52$var$clearBuffer(this, state);
    }
};
$1cbd2f72abde9a52$var$Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === "string") encoding = encoding.toLowerCase();
    if (!([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
    ].indexOf((encoding + "").toLowerCase()) > -1)) throw new $1cbd2f72abde9a52$var$ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty($1cbd2f72abde9a52$var$Writable.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function $1cbd2f72abde9a52$var$decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") chunk = $1cbd2f72abde9a52$require$Buffer.from(chunk, encoding);
    return chunk;
}
Object.defineProperty($1cbd2f72abde9a52$var$Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function $1cbd2f72abde9a52$var$writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = $1cbd2f72abde9a52$var$decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.
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
        if (last) last.next = state.lastBufferedRequest;
        else state.bufferedRequest = state.lastBufferedRequest;
        state.bufferedRequestCount += 1;
    } else $1cbd2f72abde9a52$var$doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function $1cbd2f72abde9a52$var$doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new $1cbd2f72abde9a52$var$ERR_STREAM_DESTROYED("write"));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function $1cbd2f72abde9a52$var$onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        process.nextTick(cb, er); // this can emit finish, and it will always happen
        // after error
        process.nextTick($1cbd2f72abde9a52$var$finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        $1cbd2f72abde9a52$var$errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        $1cbd2f72abde9a52$var$errorOrDestroy(stream, er); // this can emit finish, but finish must
        // always follow error
        $1cbd2f72abde9a52$var$finishMaybe(stream, state);
    }
}
function $1cbd2f72abde9a52$var$onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function $1cbd2f72abde9a52$var$onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== "function") throw new $1cbd2f72abde9a52$var$ERR_MULTIPLE_CALLBACK();
    $1cbd2f72abde9a52$var$onwriteStateUpdate(state);
    if (er) $1cbd2f72abde9a52$var$onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = $1cbd2f72abde9a52$var$needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) $1cbd2f72abde9a52$var$clearBuffer(stream, state);
        if (sync) process.nextTick($1cbd2f72abde9a52$var$afterWrite, stream, state, finished, cb);
        else $1cbd2f72abde9a52$var$afterWrite(stream, state, finished, cb);
    }
}
function $1cbd2f72abde9a52$var$afterWrite(stream, state, finished, cb) {
    if (!finished) $1cbd2f72abde9a52$var$onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    $1cbd2f72abde9a52$var$finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function $1cbd2f72abde9a52$var$onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
    }
} // if there's something in the buffer waiting, then process it
function $1cbd2f72abde9a52$var$clearBuffer(stream, state) {
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
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        $1cbd2f72abde9a52$var$doWrite(stream, state, true, state.length, buffer, "", holder.finish); // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else state.corkedRequestsFree = new $1cbd2f72abde9a52$var$CorkedRequest(state);
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            $1cbd2f72abde9a52$var$doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) break;
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
$1cbd2f72abde9a52$var$Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new $1cbd2f72abde9a52$var$ERR_METHOD_NOT_IMPLEMENTED("_write()"));
};
$1cbd2f72abde9a52$var$Writable.prototype._writev = null;
$1cbd2f72abde9a52$var$Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    } // ignore unnecessary end() calls.
    if (!state.ending) $1cbd2f72abde9a52$var$endWritable(this, state, cb);
    return this;
};
Object.defineProperty($1cbd2f72abde9a52$var$Writable.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function $1cbd2f72abde9a52$var$needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function $1cbd2f72abde9a52$var$callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) $1cbd2f72abde9a52$var$errorOrDestroy(stream, err);
        state.prefinished = true;
        stream.emit("prefinish");
        $1cbd2f72abde9a52$var$finishMaybe(stream, state);
    });
}
function $1cbd2f72abde9a52$var$prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick($1cbd2f72abde9a52$var$callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit("prefinish");
        }
    }
}
function $1cbd2f72abde9a52$var$finishMaybe(stream, state) {
    var need = $1cbd2f72abde9a52$var$needFinish(state);
    if (need) {
        $1cbd2f72abde9a52$var$prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit("finish");
            if (state.autoDestroy) {
                // In case of duplex streams we need a way to detect
                // if the readable side is ready for autoDestroy as well
                var rState = stream._readableState;
                if (!rState || rState.autoDestroy && rState.endEmitted) stream.destroy();
            }
        }
    }
    return need;
}
function $1cbd2f72abde9a52$var$endWritable(stream, state, cb) {
    state.ending = true;
    $1cbd2f72abde9a52$var$finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
}
function $1cbd2f72abde9a52$var$onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    } // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty($1cbd2f72abde9a52$var$Writable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._writableState === undefined) return false;
        return this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) return;
         // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
$1cbd2f72abde9a52$var$Writable.prototype.destroy = $3JoGq.destroy;
$1cbd2f72abde9a52$var$Writable.prototype._undestroy = $3JoGq.undestroy;
$1cbd2f72abde9a52$var$Writable.prototype._destroy = function(err, cb) {
    cb(err);
};

});
parcelRequire.register("eMkbu", function(module, exports) {
/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */ 
module.exports = $1esxr$util.deprecate;

});



parcelRequire.register("Y7BXp", function(module, exports) {

$parcel$export(module.exports, "StringDecoder", () => $0b4b8223d505c909$export$63a7aa211a91ed69, (v) => $0b4b8223d505c909$export$63a7aa211a91ed69 = v);
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
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
var $0b4b8223d505c909$export$63a7aa211a91ed69;
"use strict";

var $hxvdY = parcelRequire("hxvdY");
var $0b4b8223d505c909$require$Buffer = $hxvdY.Buffer;
/*</replacement>*/ var $0b4b8223d505c909$var$isEncoding = $0b4b8223d505c909$require$Buffer.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch(encoding && encoding.toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return true;
        default:
            return false;
    }
};
function $0b4b8223d505c909$var$_normalizeEncoding(enc) {
    if (!enc) return "utf8";
    var retried;
    while(true)switch(enc){
        case "utf8":
        case "utf-8":
            return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return "utf16le";
        case "latin1":
        case "binary":
            return "latin1";
        case "base64":
        case "ascii":
        case "hex":
            return enc;
        default:
            if (retried) return; // undefined
            enc = ("" + enc).toLowerCase();
            retried = true;
    }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function $0b4b8223d505c909$var$normalizeEncoding(enc) {
    var nenc = $0b4b8223d505c909$var$_normalizeEncoding(enc);
    if (typeof nenc !== "string" && ($0b4b8223d505c909$require$Buffer.isEncoding === $0b4b8223d505c909$var$isEncoding || !$0b4b8223d505c909$var$isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
}
$0b4b8223d505c909$export$63a7aa211a91ed69 = $0b4b8223d505c909$var$StringDecoder;
function $0b4b8223d505c909$var$StringDecoder(encoding) {
    this.encoding = $0b4b8223d505c909$var$normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case "utf16le":
            this.text = $0b4b8223d505c909$var$utf16Text;
            this.end = $0b4b8223d505c909$var$utf16End;
            nb = 4;
            break;
        case "utf8":
            this.fillLast = $0b4b8223d505c909$var$utf8FillLast;
            nb = 4;
            break;
        case "base64":
            this.text = $0b4b8223d505c909$var$base64Text;
            this.end = $0b4b8223d505c909$var$base64End;
            nb = 3;
            break;
        default:
            this.write = $0b4b8223d505c909$var$simpleWrite;
            this.end = $0b4b8223d505c909$var$simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = $0b4b8223d505c909$require$Buffer.allocUnsafe(nb);
}
$0b4b8223d505c909$var$StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return "";
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
    } else i = 0;
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || "";
};
$0b4b8223d505c909$var$StringDecoder.prototype.end = $0b4b8223d505c909$var$utf8End;
// Returns only complete characters in a Buffer
$0b4b8223d505c909$var$StringDecoder.prototype.text = $0b4b8223d505c909$var$utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
$0b4b8223d505c909$var$StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function $0b4b8223d505c909$var$utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;
    else if (byte >> 5 === 0x06) return 2;
    else if (byte >> 4 === 0x0E) return 3;
    else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function $0b4b8223d505c909$var$utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = $0b4b8223d505c909$var$utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = $0b4b8223d505c909$var$utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = $0b4b8223d505c909$var$utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
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
function $0b4b8223d505c909$var$utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return "�";
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return "�";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return "�";
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function $0b4b8223d505c909$var$utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = $0b4b8223d505c909$var$utf8CheckExtraBytes(this, buf, p);
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
function $0b4b8223d505c909$var$utf8Text(buf, i) {
    var total = $0b4b8223d505c909$var$utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString("utf8", i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function $0b4b8223d505c909$var$utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + "�";
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function $0b4b8223d505c909$var$utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
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
    return buf.toString("utf16le", i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function $0b4b8223d505c909$var$utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
    }
    return r;
}
function $0b4b8223d505c909$var$base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString("base64", i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) this.lastChar[0] = buf[buf.length - 1];
    else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i, buf.length - n);
}
function $0b4b8223d505c909$var$base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function $0b4b8223d505c909$var$simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function $0b4b8223d505c909$var$simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
}

});
parcelRequire.register("hxvdY", function(module, exports) {
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ 
var $cc4dbd409d65c98c$var$Buffer = $1esxr$buffer.Buffer;
// alternative to using Object.keys for old browsers
function $cc4dbd409d65c98c$var$copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if ($cc4dbd409d65c98c$var$Buffer.from && $cc4dbd409d65c98c$var$Buffer.alloc && $cc4dbd409d65c98c$var$Buffer.allocUnsafe && $cc4dbd409d65c98c$var$Buffer.allocUnsafeSlow) module.exports = $1esxr$buffer;
else {
    // Copy properties from require('buffer')
    $cc4dbd409d65c98c$var$copyProps($1esxr$buffer, module.exports);
    module.exports.Buffer = $cc4dbd409d65c98c$var$SafeBuffer;
}
function $cc4dbd409d65c98c$var$SafeBuffer(arg, encodingOrOffset, length) {
    return $cc4dbd409d65c98c$var$Buffer(arg, encodingOrOffset, length);
}
$cc4dbd409d65c98c$var$SafeBuffer.prototype = Object.create($cc4dbd409d65c98c$var$Buffer.prototype);
// Copy static methods from Buffer
$cc4dbd409d65c98c$var$copyProps($cc4dbd409d65c98c$var$Buffer, $cc4dbd409d65c98c$var$SafeBuffer);
$cc4dbd409d65c98c$var$SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") throw new TypeError("Argument must not be a number");
    return $cc4dbd409d65c98c$var$Buffer(arg, encodingOrOffset, length);
};
$cc4dbd409d65c98c$var$SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    var buf = $cc4dbd409d65c98c$var$Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === "string") buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
$cc4dbd409d65c98c$var$SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return $cc4dbd409d65c98c$var$Buffer(size);
};
$cc4dbd409d65c98c$var$SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return $1esxr$buffer.SlowBuffer(size);
};

});


parcelRequire.register("3O7ud", function(module, exports) {
"use strict";
var $2c5bd93dbc85153a$var$_Object$setPrototypeO;
function $2c5bd93dbc85153a$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

var $cxEYf = parcelRequire("cxEYf");
var $2c5bd93dbc85153a$var$kLastResolve = Symbol("lastResolve");
var $2c5bd93dbc85153a$var$kLastReject = Symbol("lastReject");
var $2c5bd93dbc85153a$var$kError = Symbol("error");
var $2c5bd93dbc85153a$var$kEnded = Symbol("ended");
var $2c5bd93dbc85153a$var$kLastPromise = Symbol("lastPromise");
var $2c5bd93dbc85153a$var$kHandlePromise = Symbol("handlePromise");
var $2c5bd93dbc85153a$var$kStream = Symbol("stream");
function $2c5bd93dbc85153a$var$createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function $2c5bd93dbc85153a$var$readAndResolve(iter) {
    var resolve = iter[$2c5bd93dbc85153a$var$kLastResolve];
    if (resolve !== null) {
        var data = iter[$2c5bd93dbc85153a$var$kStream].read(); // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[$2c5bd93dbc85153a$var$kLastPromise] = null;
            iter[$2c5bd93dbc85153a$var$kLastResolve] = null;
            iter[$2c5bd93dbc85153a$var$kLastReject] = null;
            resolve($2c5bd93dbc85153a$var$createIterResult(data, false));
        }
    }
}
function $2c5bd93dbc85153a$var$onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick($2c5bd93dbc85153a$var$readAndResolve, iter);
}
function $2c5bd93dbc85153a$var$wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[$2c5bd93dbc85153a$var$kEnded]) {
                resolve($2c5bd93dbc85153a$var$createIterResult(undefined, true));
                return;
            }
            iter[$2c5bd93dbc85153a$var$kHandlePromise](resolve, reject);
        }, reject);
    };
}
var $2c5bd93dbc85153a$var$AsyncIteratorPrototype = Object.getPrototypeOf(function() {});
var $2c5bd93dbc85153a$var$ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf(($2c5bd93dbc85153a$var$_Object$setPrototypeO = {
    get stream () {
        return this[$2c5bd93dbc85153a$var$kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[$2c5bd93dbc85153a$var$kError];
        if (error !== null) return Promise.reject(error);
        if (this[$2c5bd93dbc85153a$var$kEnded]) return Promise.resolve($2c5bd93dbc85153a$var$createIterResult(undefined, true));
        if (this[$2c5bd93dbc85153a$var$kStream].destroyed) // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function(resolve, reject) {
            process.nextTick(function() {
                if (_this[$2c5bd93dbc85153a$var$kError]) reject(_this[$2c5bd93dbc85153a$var$kError]);
                else resolve($2c5bd93dbc85153a$var$createIterResult(undefined, true));
            });
        });
         // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[$2c5bd93dbc85153a$var$kLastPromise];
        var promise;
        if (lastPromise) promise = new Promise($2c5bd93dbc85153a$var$wrapForNext(lastPromise, this));
        else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[$2c5bd93dbc85153a$var$kStream].read();
            if (data !== null) return Promise.resolve($2c5bd93dbc85153a$var$createIterResult(data, false));
            promise = new Promise(this[$2c5bd93dbc85153a$var$kHandlePromise]);
        }
        this[$2c5bd93dbc85153a$var$kLastPromise] = promise;
        return promise;
    }
}, $2c5bd93dbc85153a$var$_defineProperty($2c5bd93dbc85153a$var$_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), $2c5bd93dbc85153a$var$_defineProperty($2c5bd93dbc85153a$var$_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[$2c5bd93dbc85153a$var$kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve($2c5bd93dbc85153a$var$createIterResult(undefined, true));
        });
    });
}), $2c5bd93dbc85153a$var$_Object$setPrototypeO), $2c5bd93dbc85153a$var$AsyncIteratorPrototype);
var $2c5bd93dbc85153a$var$createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create($2c5bd93dbc85153a$var$ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, $2c5bd93dbc85153a$var$_defineProperty(_Object$create, $2c5bd93dbc85153a$var$kStream, {
        value: stream,
        writable: true
    }), $2c5bd93dbc85153a$var$_defineProperty(_Object$create, $2c5bd93dbc85153a$var$kLastResolve, {
        value: null,
        writable: true
    }), $2c5bd93dbc85153a$var$_defineProperty(_Object$create, $2c5bd93dbc85153a$var$kLastReject, {
        value: null,
        writable: true
    }), $2c5bd93dbc85153a$var$_defineProperty(_Object$create, $2c5bd93dbc85153a$var$kError, {
        value: null,
        writable: true
    }), $2c5bd93dbc85153a$var$_defineProperty(_Object$create, $2c5bd93dbc85153a$var$kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), $2c5bd93dbc85153a$var$_defineProperty(_Object$create, $2c5bd93dbc85153a$var$kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[$2c5bd93dbc85153a$var$kStream].read();
            if (data) {
                iterator[$2c5bd93dbc85153a$var$kLastPromise] = null;
                iterator[$2c5bd93dbc85153a$var$kLastResolve] = null;
                iterator[$2c5bd93dbc85153a$var$kLastReject] = null;
                resolve($2c5bd93dbc85153a$var$createIterResult(data, false));
            } else {
                iterator[$2c5bd93dbc85153a$var$kLastResolve] = resolve;
                iterator[$2c5bd93dbc85153a$var$kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[$2c5bd93dbc85153a$var$kLastPromise] = null;
    $cxEYf(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var reject = iterator[$2c5bd93dbc85153a$var$kLastReject]; // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[$2c5bd93dbc85153a$var$kLastPromise] = null;
                iterator[$2c5bd93dbc85153a$var$kLastResolve] = null;
                iterator[$2c5bd93dbc85153a$var$kLastReject] = null;
                reject(err);
            }
            iterator[$2c5bd93dbc85153a$var$kError] = err;
            return;
        }
        var resolve = iterator[$2c5bd93dbc85153a$var$kLastResolve];
        if (resolve !== null) {
            iterator[$2c5bd93dbc85153a$var$kLastPromise] = null;
            iterator[$2c5bd93dbc85153a$var$kLastResolve] = null;
            iterator[$2c5bd93dbc85153a$var$kLastReject] = null;
            resolve($2c5bd93dbc85153a$var$createIterResult(undefined, true));
        }
        iterator[$2c5bd93dbc85153a$var$kEnded] = true;
    });
    stream.on("readable", $2c5bd93dbc85153a$var$onReadable.bind(null, iterator));
    return iterator;
};
module.exports = $2c5bd93dbc85153a$var$createReadableStreamAsyncIterator;

});
parcelRequire.register("cxEYf", function(module, exports) {
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
"use strict";

var $kxUKf = parcelRequire("kxUKf");
var $9218590a953d9462$var$ERR_STREAM_PREMATURE_CLOSE = $kxUKf.codes.ERR_STREAM_PREMATURE_CLOSE;
function $9218590a953d9462$var$once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        callback.apply(this, args);
    };
}
function $9218590a953d9462$var$noop() {}
function $9218590a953d9462$var$isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
}
function $9218590a953d9462$var$eos(stream, opts, callback) {
    if (typeof opts === "function") return $9218590a953d9462$var$eos(stream, null, opts);
    if (!opts) opts = {};
    callback = $9218590a953d9462$var$once(callback || $9218590a953d9462$var$noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish() {
        if (!stream.writable) onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
    };
    var onerror = function onerror(err) {
        callback.call(stream, err);
    };
    var onclose = function onclose() {
        var err;
        if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new $9218590a953d9462$var$ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new $9218590a953d9462$var$ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
    };
    var onrequest = function onrequest() {
        stream.req.on("finish", onfinish);
    };
    if ($9218590a953d9462$var$isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req) onrequest();
        else stream.on("request", onrequest);
    } else if (writable && !stream._writableState) {
        // legacy streams
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false) stream.on("error", onerror);
    stream.on("close", onclose);
    return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req) stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
    };
}
module.exports = $9218590a953d9462$var$eos;

});


parcelRequire.register("7LJA4", function(module, exports) {
"use strict";
function $5a80479181178bd6$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $5a80479181178bd6$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $5a80479181178bd6$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $5a80479181178bd6$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function $5a80479181178bd6$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $5a80479181178bd6$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $5a80479181178bd6$var$ownKeys(Object(source), true).forEach(function(key) {
            $5a80479181178bd6$var$_defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $5a80479181178bd6$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $5a80479181178bd6$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

var $kxUKf = parcelRequire("kxUKf");
var $5a80479181178bd6$var$ERR_INVALID_ARG_TYPE = $kxUKf.codes.ERR_INVALID_ARG_TYPE;
function $5a80479181178bd6$var$from(Readable, iterable, opts) {
    var iterator;
    if (iterable && typeof iterable.next === "function") iterator = iterable;
    else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();
    else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();
    else throw new $5a80479181178bd6$var$ERR_INVALID_ARG_TYPE("iterable", [
        "Iterable"
    ], iterable);
    var readable = new Readable($5a80479181178bd6$var$_objectSpread({
        objectMode: true
    }, opts)); // Reading boolean to protect against _read
    // being called before last iteration completion.
    var reading = false;
    readable._read = function() {
        if (!reading) {
            reading = true;
            next();
        }
    };
    function next() {
        return _next2.apply(this, arguments);
    }
    function _next2() {
        _next2 = $5a80479181178bd6$var$_asyncToGenerator(function*() {
            try {
                var _ref = yield iterator.next(), value = _ref.value, done = _ref.done;
                if (done) readable.push(null);
                else if (readable.push((yield value))) next();
                else reading = false;
            } catch (err) {
                readable.destroy(err);
            }
        });
        return _next2.apply(this, arguments);
    }
    return readable;
}
module.exports = $5a80479181178bd6$var$from;

});


parcelRequire.register("8SAA9", function(module, exports) {
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
"use strict";
module.exports = $676fbe5664484192$var$Transform;

var $kxUKf = parcelRequire("kxUKf");
var $676fbe5664484192$require$_require$codes = $kxUKf.codes;
var $676fbe5664484192$var$ERR_METHOD_NOT_IMPLEMENTED = $676fbe5664484192$require$_require$codes.ERR_METHOD_NOT_IMPLEMENTED, $676fbe5664484192$var$ERR_MULTIPLE_CALLBACK = $676fbe5664484192$require$_require$codes.ERR_MULTIPLE_CALLBACK, $676fbe5664484192$var$ERR_TRANSFORM_ALREADY_TRANSFORMING = $676fbe5664484192$require$_require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, $676fbe5664484192$var$ERR_TRANSFORM_WITH_LENGTH_0 = $676fbe5664484192$require$_require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var $aetSa = parcelRequire("aetSa");

(parcelRequire("3zpOe"))($676fbe5664484192$var$Transform, $aetSa);
function $676fbe5664484192$var$afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) return this.emit("error", new $676fbe5664484192$var$ERR_MULTIPLE_CALLBACK());
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
}
function $676fbe5664484192$var$Transform(options) {
    if (!(this instanceof $676fbe5664484192$var$Transform)) return new $676fbe5664484192$var$Transform(options);
    $aetSa.call(this, options);
    this._transformState = {
        afterTransform: $676fbe5664484192$var$afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    }; // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
    } // When the writable side finishes, then flush out anything remaining.
    this.on("prefinish", $676fbe5664484192$var$prefinish);
}
function $676fbe5664484192$var$prefinish() {
    var _this = this;
    if (typeof this._flush === "function" && !this._readableState.destroyed) this._flush(function(er, data) {
        $676fbe5664484192$var$done(_this, er, data);
    });
    else $676fbe5664484192$var$done(this, null, null);
}
$676fbe5664484192$var$Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return $aetSa.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
$676fbe5664484192$var$Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new $676fbe5664484192$var$ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
};
$676fbe5664484192$var$Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
$676fbe5664484192$var$Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
};
$676fbe5664484192$var$Transform.prototype._destroy = function(err, cb) {
    $aetSa.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
    });
};
function $676fbe5664484192$var$done(stream, er, data) {
    if (er) return stream.emit("error", er);
    if (data != null) stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new $676fbe5664484192$var$ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new $676fbe5664484192$var$ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
}

});

parcelRequire.register("kzIAo", function(module, exports) {
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
"use strict";
module.exports = $efa9a95abf4fdf62$var$PassThrough;

var $8SAA9 = parcelRequire("8SAA9");

(parcelRequire("3zpOe"))($efa9a95abf4fdf62$var$PassThrough, $8SAA9);
function $efa9a95abf4fdf62$var$PassThrough(options) {
    if (!(this instanceof $efa9a95abf4fdf62$var$PassThrough)) return new $efa9a95abf4fdf62$var$PassThrough(options);
    $8SAA9.call(this, options);
}
$efa9a95abf4fdf62$var$PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};

});

parcelRequire.register("bBU3T", function(module, exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
"use strict";
var $873ea31c31d827c2$var$eos;
function $873ea31c31d827c2$var$once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}

var $kxUKf = parcelRequire("kxUKf");
var $873ea31c31d827c2$require$_require$codes = $kxUKf.codes;
var $873ea31c31d827c2$var$ERR_MISSING_ARGS = $873ea31c31d827c2$require$_require$codes.ERR_MISSING_ARGS, $873ea31c31d827c2$var$ERR_STREAM_DESTROYED = $873ea31c31d827c2$require$_require$codes.ERR_STREAM_DESTROYED;
function $873ea31c31d827c2$var$noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function $873ea31c31d827c2$var$isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
}

function $873ea31c31d827c2$var$destroyer(stream, reading, writing, callback) {
    callback = $873ea31c31d827c2$var$once(callback);
    var closed = false;
    stream.on("close", function() {
        closed = true;
    });
    if ($873ea31c31d827c2$var$eos === undefined) $873ea31c31d827c2$var$eos = (parcelRequire("cxEYf"));
    $873ea31c31d827c2$var$eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true; // request.destroy just do .end - .abort is what we want
        if ($873ea31c31d827c2$var$isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === "function") return stream.destroy();
        callback(err || new $873ea31c31d827c2$var$ERR_STREAM_DESTROYED("pipe"));
    };
}
function $873ea31c31d827c2$var$call(fn) {
    fn();
}
function $873ea31c31d827c2$var$pipe(from, to) {
    return from.pipe(to);
}
function $873ea31c31d827c2$var$popCallback(streams) {
    if (!streams.length) return $873ea31c31d827c2$var$noop;
    if (typeof streams[streams.length - 1] !== "function") return $873ea31c31d827c2$var$noop;
    return streams.pop();
}
function $873ea31c31d827c2$var$pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++)streams[_key] = arguments[_key];
    var callback = $873ea31c31d827c2$var$popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new $873ea31c31d827c2$var$ERR_MISSING_ARGS("streams");
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return $873ea31c31d827c2$var$destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach($873ea31c31d827c2$var$call);
            if (reading) return;
            destroys.forEach($873ea31c31d827c2$var$call);
            callback(error);
        });
    });
    return streams.reduce($873ea31c31d827c2$var$pipe);
}
module.exports = $873ea31c31d827c2$var$pipeline;

});


parcelRequire.register("e6DF1", function(module, exports) {

$parcel$export(module.exports, "NodePackageManager", () => NodePackageManager, (v) => NodePackageManager = v);








var $12qcL = parcelRequire("12qcL");

var $4n1Ez = parcelRequire("4n1Ez");

var $c9UhD = parcelRequire("c9UhD");

var $6u9ZO = parcelRequire("6u9ZO");

var $t7SbL = parcelRequire("t7SbL");
// Therefore, the resolution cache and the map of parent to child modules should also be global.
const cache = new Map();
const children = new Map(); // This implements a package manager for Node by monkey patching the Node require
class NodePackageManager {
    invalidationsCache = new Map();
    constructor(fs, projectRoot, installer){
        this.fs = fs;
        this.projectRoot = projectRoot;
        this.installer = installer;
        this.resolver = new (0, $6u9ZO.NodeResolver)(this.fs, projectRoot);
        this.syncResolver = new (0, $t7SbL.NodeResolverSync)(this.fs, projectRoot);
    }
    static deserialize(opts) {
        return new NodePackageManager(opts.fs, opts.projectRoot, opts.installer);
    }
    serialize() {
        return {
            $$raw: false,
            fs: this.fs,
            projectRoot: this.projectRoot,
            installer: this.installer
        };
    }
    async require(name, from, opts) {
        let { resolved  } = await this.resolve(name, from, opts);
        return this.load(resolved, from);
    }
    requireSync(name, from) {
        let { resolved  } = this.resolveSync(name, from);
        return this.load(resolved, from);
    }
    load(filePath, from) {
        if (!(0, ($parcel$interopDefault($1esxr$path))).isAbsolute(filePath)) // Node builtin module
        // $FlowFixMe
        return require(filePath);
         // $FlowFixMe[prop-missing]
        const cachedModule = (0, ($parcel$interopDefault($1esxr$module)))._cache[filePath];
        if (cachedModule !== undefined) return cachedModule.exports;
         // $FlowFixMe
        let m = new (0, ($parcel$interopDefault($1esxr$module)))(filePath, (0, ($parcel$interopDefault($1esxr$module)))._cache[from] || module.parent); // $FlowFixMe[prop-missing]
        (0, ($parcel$interopDefault($1esxr$module)))._cache[filePath] = m; // Patch require within this module so it goes through our require
        m.require = (id)=>{
            return this.requireSync(id, filePath);
        }; // Patch `fs.readFileSync` temporarily so that it goes through our file system
        let readFileSync = (0, ($parcel$interopDefault($1esxr$fs))).readFileSync; // $FlowFixMe
        (0, ($parcel$interopDefault($1esxr$fs))).readFileSync = (filename, encoding)=>{
            // $FlowFixMe
            (0, ($parcel$interopDefault($1esxr$fs))).readFileSync = readFileSync;
            return this.fs.readFileSync(filename, encoding);
        };
        try {
            m.load(filePath);
        } catch (err) {
            // $FlowFixMe[prop-missing]
            delete (0, ($parcel$interopDefault($1esxr$module)))._cache[filePath];
            throw err;
        }
        return m.exports;
    }
    async resolve(id, from, options) {
        let basedir = (0, ($parcel$interopDefault($1esxr$path))).dirname(from);
        let key = basedir + ":" + id;
        let resolved = cache.get(key);
        if (!resolved) {
            let [name] = (0, $1esxr$parcelutils.getModuleParts)(id);
            try {
                resolved = await this.resolver.resolve(id, from);
            } catch (e) {
                if (e.code !== "MODULE_NOT_FOUND" || (options === null || options === void 0 ? void 0 : options.shouldAutoInstall) !== true) {
                    if (e.code === "MODULE_NOT_FOUND" && (options === null || options === void 0 ? void 0 : options.shouldAutoInstall) !== true) {
                        let err = new (0, ($parcel$interopDefault($1esxr$parceldiagnostic)))({
                            diagnostic: {
                                message: (0, $1esxr$parceldiagnostic.escapeMarkdown)(e.message),
                                hints: [
                                    "Autoinstall is disabled, please install this package manually and restart Parcel."
                                ]
                            }
                        }); // $FlowFixMe - needed for loadParcelPlugin
                        err.code = "MODULE_NOT_FOUND";
                        throw err;
                    } else throw e;
                }
                let conflicts = await (0, $12qcL.getConflictingLocalDependencies)(this.fs, name, from, this.projectRoot);
                if (conflicts == null) {
                    var _options_saveDev;
                    await this.install([
                        {
                            name: name,
                            range: options === null || options === void 0 ? void 0 : options.range
                        }
                    ], from, {
                        saveDev: (_options_saveDev = options === null || options === void 0 ? void 0 : options.saveDev) !== null && _options_saveDev !== void 0 ? _options_saveDev : true
                    });
                    return this.resolve(id, from, {
                        ...options,
                        shouldAutoInstall: false
                    });
                }
                throw new (0, ($parcel$interopDefault($1esxr$parceldiagnostic)))({
                    diagnostic: conflicts.fields.map((field)=>({
                            message: (0, $1esxr$parceldiagnostic.md)`Could not find module "${name}", but it was listed in package.json. Run your package manager first.`,
                            origin: "@parcel/package-manager",
                            codeFrames: [
                                {
                                    filePath: conflicts.filePath,
                                    language: "json",
                                    code: conflicts.json,
                                    codeHighlights: (0, $1esxr$parceldiagnostic.generateJSONCodeHighlights)(conflicts.json, [
                                        {
                                            key: `/${field}/${(0, $1esxr$parceldiagnostic.encodeJSONKeyComponent)(name)}`,
                                            type: "key",
                                            message: "Defined here, but not installed"
                                        }
                                    ])
                                }
                            ]
                        }))
                });
            }
            let range = options === null || options === void 0 ? void 0 : options.range;
            if (range != null) {
                let pkg = resolved.pkg;
                if (pkg == null || !(0, ($parcel$interopDefault($1esxr$semver))).satisfies(pkg.version, range)) {
                    let conflicts = await (0, $12qcL.getConflictingLocalDependencies)(this.fs, name, from, this.projectRoot);
                    if (conflicts == null && (options === null || options === void 0 ? void 0 : options.shouldAutoInstall) === true) {
                        await this.install([
                            {
                                name: name,
                                range: range
                            }
                        ], from);
                        return this.resolve(id, from, {
                            ...options,
                            shouldAutoInstall: false
                        });
                    } else if (conflicts != null) throw new (0, ($parcel$interopDefault($1esxr$parceldiagnostic)))({
                        diagnostic: {
                            message: (0, $1esxr$parceldiagnostic.md)`Could not find module "${name}" satisfying ${range}.`,
                            origin: "@parcel/package-manager",
                            codeFrames: [
                                {
                                    filePath: conflicts.filePath,
                                    language: "json",
                                    code: conflicts.json,
                                    codeHighlights: (0, $1esxr$parceldiagnostic.generateJSONCodeHighlights)(conflicts.json, conflicts.fields.map((field)=>({
                                            key: `/${field}/${(0, $1esxr$parceldiagnostic.encodeJSONKeyComponent)(name)}`,
                                            type: "key",
                                            message: "Found this conflicting local requirement."
                                        })))
                                }
                            ]
                        }
                    });
                    let version = pkg === null || pkg === void 0 ? void 0 : pkg.version;
                    let message = (0, $1esxr$parceldiagnostic.md)`Could not resolve package "${name}" that satisfies ${range}.`;
                    if (version != null) message += (0, $1esxr$parceldiagnostic.md)` Found ${version}.`;
                    throw new (0, ($parcel$interopDefault($1esxr$parceldiagnostic)))({
                        diagnostic: {
                            message: message,
                            hints: [
                                "Looks like the incompatible version was installed transitively. Add this package as a direct dependency with a compatible version range."
                            ]
                        }
                    });
                }
            }
            cache.set(key, resolved);
            this.invalidationsCache.clear(); // Add the specifier as a child to the parent module.
            // Don't do this if the specifier was an absolute path, as this was likely a dynamically resolved path
            // (e.g. babel uses require() to load .babelrc.js configs and we don't want them to be added  as children of babel itself).
            if (!(0, ($parcel$interopDefault($1esxr$path))).isAbsolute(name)) {
                let moduleChildren = children.get(from);
                if (!moduleChildren) {
                    moduleChildren = new Set();
                    children.set(from, moduleChildren);
                }
                moduleChildren.add(name);
            }
        }
        return resolved;
    }
    resolveSync(name, from) {
        let basedir = (0, ($parcel$interopDefault($1esxr$path))).dirname(from);
        let key = basedir + ":" + name;
        let resolved = cache.get(key);
        if (!resolved) {
            resolved = this.syncResolver.resolve(name, from);
            cache.set(key, resolved);
            this.invalidationsCache.clear();
            if (!(0, ($parcel$interopDefault($1esxr$path))).isAbsolute(name)) {
                let moduleChildren = children.get(from);
                if (!moduleChildren) {
                    moduleChildren = new Set();
                    children.set(from, moduleChildren);
                }
                moduleChildren.add(name);
            }
        }
        return resolved;
    }
    async install(modules, from, opts) {
        await (0, $4n1Ez.installPackage)(this.fs, this, modules, from, this.projectRoot, {
            packageInstaller: this.installer,
            ...opts
        });
    }
    getInvalidations(name, from) {
        let key = name + ":" + from;
        let cached = this.invalidationsCache.get(key);
        if (cached != null) return cached;
        let res = {
            invalidateOnFileCreate: [],
            invalidateOnFileChange: new Set()
        };
        let seen = new Set();
        let addKey = (name, from)=>{
            let basedir = (0, ($parcel$interopDefault($1esxr$path))).dirname(from);
            let key = basedir + ":" + name;
            if (seen.has(key)) return;
            seen.add(key);
            let resolved = cache.get(key);
            if (!resolved || !(0, ($parcel$interopDefault($1esxr$path))).isAbsolute(resolved.resolved)) return;
            res.invalidateOnFileCreate.push(...resolved.invalidateOnFileCreate);
            res.invalidateOnFileChange.add(resolved.resolved);
            for (let file of resolved.invalidateOnFileChange)res.invalidateOnFileChange.add(file);
            let moduleChildren = children.get(resolved.resolved);
            if (moduleChildren) for (let specifier of moduleChildren)addKey(specifier, resolved.resolved);
        };
        addKey(name, from);
        this.invalidationsCache.set(key, res);
        return res;
    }
    invalidate(name, from) {
        let seen = new Set();
        let invalidate = (name, from)=>{
            let basedir = (0, ($parcel$interopDefault($1esxr$path))).dirname(from);
            let key = basedir + ":" + name;
            if (seen.has(key)) return;
            seen.add(key);
            let resolved = cache.get(key);
            if (!resolved || !(0, ($parcel$interopDefault($1esxr$path))).isAbsolute(resolved.resolved)) return;
             // $FlowFixMe
            let module1 = (0, ($parcel$interopDefault($1esxr$module)))._cache[resolved.resolved];
            if (module1) // $FlowFixMe
            delete (0, ($parcel$interopDefault($1esxr$module)))._cache[resolved.resolved];
            let moduleChildren = children.get(resolved.resolved);
            if (moduleChildren) for (let specifier of moduleChildren)invalidate(specifier, resolved.resolved);
            children.delete(resolved.resolved);
            cache.delete(key);
            this.resolver.invalidate(resolved.resolved);
            this.syncResolver.invalidate(resolved.resolved);
        };
        invalidate(name, from);
    }
}
(0, $1esxr$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($c9UhD))).version}:NodePackageManager`, NodePackageManager);

});
parcelRequire.register("12qcL", function(module, exports) {

$parcel$export(module.exports, "npmSpecifierFromModuleRequest", () => $0c1a4e17cdbb401d$export$44a673cac0f09696);
$parcel$export(module.exports, "moduleRequestsFromDependencyMap", () => $0c1a4e17cdbb401d$export$8e3ae06b6f2ee6e2);
$parcel$export(module.exports, "getConflictingLocalDependencies", () => $0c1a4e17cdbb401d$export$ab9915b45c70a034);



function $0c1a4e17cdbb401d$export$44a673cac0f09696(moduleRequest) {
    return moduleRequest.range != null ? [
        moduleRequest.name,
        moduleRequest.range
    ].join("@") : moduleRequest.name;
}
function $0c1a4e17cdbb401d$export$8e3ae06b6f2ee6e2(dependencyMap) {
    return Object.entries(dependencyMap).map(([name, range])=>{
        (0, ($parcel$interopDefault($1esxr$assert)))(typeof range === "string");
        return {
            name: name,
            range: range
        };
    });
}
async function $0c1a4e17cdbb401d$export$ab9915b45c70a034(fs, name, local, projectRoot) {
    let pkgPath = await (0, $1esxr$parcelutils.resolveConfig)(fs, local, [
        "package.json"
    ], projectRoot);
    if (pkgPath == null) return;
    let pkgStr = await fs.readFile(pkgPath, "utf8");
    let pkg;
    try {
        pkg = JSON.parse(pkgStr);
    } catch (e) {
        // TODO: codeframe
        throw new (0, ($parcel$interopDefault($1esxr$parceldiagnostic)))({
            diagnostic: {
                message: "Failed to parse package.json",
                origin: "@parcel/package-manager"
            }
        });
    }
    if (typeof pkg !== "object" || pkg == null) // TODO: codeframe
    throw new (0, ($parcel$interopDefault($1esxr$parceldiagnostic)))({
        diagnostic: {
            message: "Expected package.json contents to be an object.",
            origin: "@parcel/package-manager"
        }
    });
    let fields = [];
    for (let field of [
        "dependencies",
        "devDependencies",
        "peerDependencies"
    ])if (typeof pkg[field] === "object" && pkg[field] != null && pkg[field][name] != null) fields.push(field);
    if (fields.length > 0) return {
        filePath: pkgPath,
        json: pkgStr,
        fields: fields
    };
}

});

parcelRequire.register("4n1Ez", function(module, exports) {

$parcel$export(module.exports, "_addToInstallQueue", () => $32ea97b83cf5d752$export$f09e6d5146bb6da1);
$parcel$export(module.exports, "installPackage", () => $32ea97b83cf5d752$export$9c0565d18deefc7f);



var $1m63J = parcelRequire("1m63J");






var $iTlry = parcelRequire("iTlry");

var $2fqsR = parcelRequire("2fqsR");

var $1dbxg = parcelRequire("1dbxg");

var $12qcL = parcelRequire("12qcL");

var $kXqrB = parcelRequire("kXqrB");

var $32ea97b83cf5d752$var$$parcel$__filename = $1esxr$path.resolve(__dirname, "../src", "installPackage.js");

var $32ea97b83cf5d752$var$$parcel$__dirname = $1esxr$path.resolve(__dirname, "../src");
async function $32ea97b83cf5d752$var$install(fs, packageManager, modules, from, projectRoot, options = {}) {
    let { installPeers: installPeers = true , saveDev: saveDev = true , packageInstaller: packageInstaller  } = options;
    let moduleNames = modules.map((m)=>m.name).join(", ");
    (0, ($parcel$interopDefault($1esxr$parcellogger))).progress(`Installing ${moduleNames}...`);
    let fromPkgPath = await (0, $1esxr$parcelutils.resolveConfig)(fs, from, [
        "package.json"
    ], projectRoot);
    let cwd = fromPkgPath ? (0, ($parcel$interopDefault($1esxr$path))).dirname(fromPkgPath) : fs.cwd();
    if (!packageInstaller) packageInstaller = await $32ea97b83cf5d752$var$determinePackageInstaller(fs, from, projectRoot);
    try {
        await packageInstaller.install({
            modules: modules,
            saveDev: saveDev,
            cwd: cwd,
            packagePath: fromPkgPath,
            fs: fs
        });
    } catch (err) {
        throw new Error(`Failed to install ${moduleNames}: ${err.message}`);
    }
    if (installPeers) await Promise.all(modules.map((m)=>$32ea97b83cf5d752$var$installPeerDependencies(fs, packageManager, m, from, projectRoot, options)));
}
async function $32ea97b83cf5d752$var$installPeerDependencies(fs, packageManager, module, from, projectRoot, options) {
    const { resolved: resolved  } = await packageManager.resolve(module.name, from);
    const modulePkg = (0, (/*@__PURE__*/$parcel$interopDefault($1m63J)))(await (0, $1esxr$parcelutils.loadConfig)(fs, resolved, [
        "package.json"
    ], projectRoot)).config;
    const peers = modulePkg.peerDependencies || {};
    let modules = [];
    for (let [name, range] of Object.entries(peers)){
        (0, ($parcel$interopDefault($1esxr$assert)))(typeof range === "string");
        let conflicts = await (0, $12qcL.getConflictingLocalDependencies)(fs, name, from, projectRoot);
        if (conflicts) {
            let { pkg: pkg  } = await packageManager.resolve(name, from);
            (0, ($parcel$interopDefault($1esxr$assert)))(pkg);
            if (!(0, ($parcel$interopDefault($1esxr$semver))).satisfies(pkg.version, range)) throw new (0, ($parcel$interopDefault($1esxr$parceldiagnostic)))({
                diagnostic: {
                    message: (0, $1esxr$parceldiagnostic.md)`Could not install the peer dependency "${name}" for "${module.name}", installed version ${pkg.version} is incompatible with ${range}`,
                    origin: "@parcel/package-manager",
                    codeFrames: [
                        {
                            filePath: conflicts.filePath,
                            language: "json",
                            code: conflicts.json,
                            codeHighlights: (0, $1esxr$parceldiagnostic.generateJSONCodeHighlights)(conflicts.json, conflicts.fields.map((field)=>({
                                    key: `/${field}/${(0, $1esxr$parceldiagnostic.encodeJSONKeyComponent)(name)}`,
                                    type: "key",
                                    message: "Found this conflicting local requirement."
                                })))
                        }
                    ]
                }
            });
            continue;
        }
        modules.push({
            name: name,
            range: range
        });
    }
    if (modules.length) await $32ea97b83cf5d752$var$install(fs, packageManager, modules, from, projectRoot, Object.assign({}, options, {
        installPeers: false
    }));
}
async function $32ea97b83cf5d752$var$determinePackageInstaller(fs, filepath, projectRoot) {
    let configFile = await (0, $1esxr$parcelutils.resolveConfig)(fs, filepath, [
        "package-lock.json",
        "pnpm-lock.yaml",
        "yarn.lock"
    ], projectRoot);
    let configName = configFile && (0, ($parcel$interopDefault($1esxr$path))).basename(configFile); // Always use the package manager that seems to be used in the project,
    // falling back to a different one wouldn't update the existing lockfile.
    if (configName === "package-lock.json") return new (0, $iTlry.Npm)();
    else if (configName === "pnpm-lock.yaml") return new (0, $1dbxg.Pnpm)();
    else if (configName === "yarn.lock") return new (0, $2fqsR.Yarn)();
    if (await (0, $2fqsR.Yarn).exists()) return new (0, $2fqsR.Yarn)();
    else if (await (0, $1dbxg.Pnpm).exists()) return new (0, $1dbxg.Pnpm)();
    else return new (0, $iTlry.Npm)();
}
let $32ea97b83cf5d752$var$queue = new (0, $1esxr$parcelutils.PromiseQueue)({
    maxConcurrent: 1
});
let $32ea97b83cf5d752$var$modulesInstalling = new Set(); // Exported so that it may be invoked from the worker api below.
function $32ea97b83cf5d752$export$f09e6d5146bb6da1(fs, packageManager, modules, filePath, projectRoot, options) {
    modules = modules.map((request)=>({
            name: (0, $kXqrB.default)(request.name),
            range: request.range
        })); // Wrap PromiseQueue and track modules that are currently installing.
    // If a request comes in for a module that is currently installing, don't bother
    // enqueuing it.
    let modulesToInstall = modules.filter((m)=>!$32ea97b83cf5d752$var$modulesInstalling.has($32ea97b83cf5d752$var$getModuleRequestKey(m)));
    if (modulesToInstall.length) {
        for (let m of modulesToInstall)$32ea97b83cf5d752$var$modulesInstalling.add($32ea97b83cf5d752$var$getModuleRequestKey(m));
        $32ea97b83cf5d752$var$queue.add(()=>$32ea97b83cf5d752$var$install(fs, packageManager, modulesToInstall, filePath, projectRoot, options).then(()=>{
                for (let m of modulesToInstall)$32ea97b83cf5d752$var$modulesInstalling.delete($32ea97b83cf5d752$var$getModuleRequestKey(m));
            })).then(()=>{}, ()=>{});
    }
    return $32ea97b83cf5d752$var$queue.run();
}
function $32ea97b83cf5d752$export$9c0565d18deefc7f(fs, packageManager, modules, filePath, projectRoot, options) {
    if ((0, ($parcel$interopDefault($1esxr$parcelworkers))).isWorker()) {
        let workerApi = (0, ($parcel$interopDefault($1esxr$parcelworkers))).getWorkerApi(); // TODO this should really be `__filename` but without the rewriting.
        let bundlePath = !process.env.PARCEL_SELF_BUILD ? (0, ($parcel$interopDefault($1esxr$path))).join($32ea97b83cf5d752$var$$parcel$__dirname, "..", "lib/index.js") : $32ea97b83cf5d752$var$$parcel$__filename;
        return workerApi.callMaster({
            location: bundlePath,
            args: [
                fs,
                packageManager,
                modules,
                filePath,
                projectRoot,
                options
            ],
            method: "_addToInstallQueue"
        });
    }
    return $32ea97b83cf5d752$export$f09e6d5146bb6da1(fs, packageManager, modules, filePath, projectRoot, options);
}
function $32ea97b83cf5d752$var$getModuleRequestKey(moduleRequest) {
    return [
        moduleRequest.name,
        moduleRequest.range
    ].join("@");
}

});
parcelRequire.register("1m63J", function(module, exports) {
"use strict";
function $0fcc8bbb23ae9459$var$nullthrows(x, message) {
    if (x != null) return x;
    var error = new Error(message !== undefined ? message : "Got unexpected " + x);
    error.framesToPop = 1; // Skip nullthrows's own stack frame.
    throw error;
}
module.exports = $0fcc8bbb23ae9459$var$nullthrows;
module.exports.default = $0fcc8bbb23ae9459$var$nullthrows;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

});

parcelRequire.register("iTlry", function(module, exports) {

$parcel$export(module.exports, "Npm", () => $dc0dff49a750024d$export$bc651973ec076cd0);


var $i3FhQ = parcelRequire("i3FhQ");


var $kOvnu = parcelRequire("kOvnu");


var $12qcL = parcelRequire("12qcL");

var $c9UhD = parcelRequire("c9UhD");
const $dc0dff49a750024d$var$NPM_CMD = "npm";
class $dc0dff49a750024d$export$bc651973ec076cd0 {
    async install({ modules: modules , cwd: cwd , fs: fs , packagePath: packagePath , saveDev: saveDev = true  }) {
        // npm doesn't auto-create a package.json when installing,
        // so create an empty one if needed.
        if (packagePath == null) await fs.writeFile((0, ($parcel$interopDefault($1esxr$path))).join(cwd, "package.json"), "{}");
        let args = [
            "install",
            "--json",
            saveDev ? "--save-dev" : "--save"
        ].concat(modules.map((0, $12qcL.npmSpecifierFromModuleRequest))); // When Parcel is run by npm (e.g. via package.json scripts), several environment variables are
        // added. When parcel in turn calls npm again, these can cause npm to behave stragely, so we
        // filter them out when installing packages.
        let env = {};
        for(let key in process.env)if (!key.startsWith("npm_") && key !== "INIT_CWD" && key !== "NODE_ENV") env[key] = process.env[key];
        let installProcess = (0, (/*@__PURE__*/$parcel$interopDefault($i3FhQ)))($dc0dff49a750024d$var$NPM_CMD, args, {
            cwd: cwd,
            env: env
        });
        let stdout = "";
        installProcess.stdout.on("data", (buf)=>{
            stdout += buf.toString();
        });
        let stderr = [];
        installProcess.stderr.on("data", (buf)=>{
            stderr.push(buf.toString().trim());
        });
        try {
            await (0, $kOvnu.default)(installProcess);
            let results = JSON.parse(stdout);
            let addedCount = results.added.length;
            if (addedCount > 0) (0, ($parcel$interopDefault($1esxr$parcellogger))).log({
                origin: "@parcel/package-manager",
                message: `Added ${addedCount} packages via npm`
            });
             // Since we succeeded, stderr might have useful information not included
            // in the json written to stdout. It's also not necessary to log these as
            // errors as they often aren't.
            for (let message of stderr)if (message.length > 0) (0, ($parcel$interopDefault($1esxr$parcellogger))).log({
                origin: "@parcel/package-manager",
                message: message
            });
        } catch (e) {
            throw new Error("npm failed to install modules: " + e.message + " - " + stderr.join("\n"));
        }
    }
}
(0, $1esxr$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($c9UhD))).version}:Npm`, $dc0dff49a750024d$export$bc651973ec076cd0);

});
parcelRequire.register("i3FhQ", function(module, exports) {
"use strict";


var $luTPY = parcelRequire("luTPY");

var $6Fpvi = parcelRequire("6Fpvi");
function $d2588886c11ac9dd$var$spawn(command, args, options) {
    // Parse the arguments
    const parsed = $luTPY(command, args, options);
    // Spawn the child process
    const spawned = $1esxr$child_process.spawn(parsed.command, parsed.args, parsed.options);
    // Hook into child process "exit" event to emit an error if the command
    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    $6Fpvi.hookChildProcess(spawned, parsed);
    return spawned;
}
function $d2588886c11ac9dd$var$spawnSync(command, args, options) {
    // Parse the arguments
    const parsed = $luTPY(command, args, options);
    // Spawn the child process
    const result = $1esxr$child_process.spawnSync(parsed.command, parsed.args, parsed.options);
    // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    result.error = result.error || $6Fpvi.verifyENOENTSync(result.status, parsed);
    return result;
}
module.exports = $d2588886c11ac9dd$var$spawn;
module.exports.spawn = $d2588886c11ac9dd$var$spawn;
module.exports.sync = $d2588886c11ac9dd$var$spawnSync;
module.exports._parse = $luTPY;
module.exports._enoent = $6Fpvi;

});
parcelRequire.register("luTPY", function(module, exports) {
"use strict";


var $cHdcY = parcelRequire("cHdcY");

var $3vfYK = parcelRequire("3vfYK");

var $a60tI = parcelRequire("a60tI");

var $bnw6M = parcelRequire("bnw6M");

const $fa67b673120ccf62$var$isWin = process.platform === "win32";
const $fa67b673120ccf62$var$isExecutableRegExp = /\.(?:com|exe)$/i;
const $fa67b673120ccf62$var$isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
// `options.shell` is supported in Node ^4.8.0, ^5.7.0 and >= 6.0.0
const $fa67b673120ccf62$var$supportsShellOption = $cHdcY(()=>$1esxr$semver.satisfies(process.version, "^4.8.0 || ^5.7.0 || >= 6.0.0", true)) || false;
function $fa67b673120ccf62$var$detectShebang(parsed) {
    parsed.file = $3vfYK(parsed);
    const shebang = parsed.file && $bnw6M(parsed.file);
    if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return $3vfYK(parsed);
    }
    return parsed.file;
}
function $fa67b673120ccf62$var$parseNonShell(parsed) {
    if (!$fa67b673120ccf62$var$isWin) return parsed;
    // Detect & add support for shebangs
    const commandFile = $fa67b673120ccf62$var$detectShebang(parsed);
    // We don't need a shell if the command filename is an executable
    const needsShell = !$fa67b673120ccf62$var$isExecutableRegExp.test(commandFile);
    // If a shell is required, use cmd.exe and take care of escaping everything correctly
    // Note that `forceShell` is an hidden option used only in tests
    if (parsed.options.forceShell || needsShell) {
        // Need to double escape meta chars if the command is a cmd-shim located in `node_modules/.bin/`
        // The cmd-shim simply calls execute the package bin file with NodeJS, proxying any argument
        // Because the escape of metachars with ^ gets interpreted when the cmd.exe is first called,
        // we need to double escape them
        const needsDoubleEscapeMetaChars = $fa67b673120ccf62$var$isCmdShimRegExp.test(commandFile);
        // Normalize posix paths into OS compatible paths (e.g.: foo/bar -> foo\bar)
        // This is necessary otherwise it will always fail with ENOENT in those cases
        parsed.command = $1esxr$path.normalize(parsed.command);
        // Escape command & arguments
        parsed.command = $a60tI.command(parsed.command);
        parsed.args = parsed.args.map((arg)=>$a60tI.argument(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [
            parsed.command
        ].concat(parsed.args).join(" ");
        parsed.args = [
            "/d",
            "/s",
            "/c",
            `"${shellCommand}"`
        ];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped
    }
    return parsed;
}
function $fa67b673120ccf62$var$parseShell(parsed) {
    // If node supports the shell option, there's no need to mimic its behavior
    if ($fa67b673120ccf62$var$supportsShellOption) return parsed;
    // Mimic node shell option
    // See https://github.com/nodejs/node/blob/b9f6a2dc059a1062776133f3d4fd848c4da7d150/lib/child_process.js#L335
    const shellCommand = [
        parsed.command
    ].concat(parsed.args).join(" ");
    if ($fa67b673120ccf62$var$isWin) {
        parsed.command = typeof parsed.options.shell === "string" ? parsed.options.shell : process.env.comspec || "cmd.exe";
        parsed.args = [
            "/d",
            "/s",
            "/c",
            `"${shellCommand}"`
        ];
        parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped
    } else {
        if (typeof parsed.options.shell === "string") parsed.command = parsed.options.shell;
        else if (process.platform === "android") parsed.command = "/system/bin/sh";
        else parsed.command = "/bin/sh";
        parsed.args = [
            "-c",
            shellCommand
        ];
    }
    return parsed;
}
function $fa67b673120ccf62$var$parse(command, args, options) {
    // Normalize arguments, similar to nodejs
    if (args && !Array.isArray(args)) {
        options = args;
        args = null;
    }
    args = args ? args.slice(0) : []; // Clone array to avoid changing the original
    options = Object.assign({}, options); // Clone object to avoid changing the original
    // Build our parsed object
    const parsed = {
        command: command,
        args: args,
        options: options,
        file: undefined,
        original: {
            command: command,
            args: args
        }
    };
    // Delegate further parsing to shell or non-shell
    return options.shell ? $fa67b673120ccf62$var$parseShell(parsed) : $fa67b673120ccf62$var$parseNonShell(parsed);
}
module.exports = $fa67b673120ccf62$var$parse;

});
parcelRequire.register("cHdcY", function(module, exports) {
"use strict";
/**
 * Tries to execute a function and discards any error that occurs.
 * @param {Function} fn - Function that might or might not throw an error.
 * @returns {?*} Return-value of the function when no error occurred.
 */ module.exports = function(fn) {
    try {
        return fn();
    } catch (e) {}
};

});

parcelRequire.register("3vfYK", function(module, exports) {
"use strict";


var $eXFYt = parcelRequire("eXFYt");

const $28d0a96c55d57abf$var$pathKey = (parcelRequire("3AROA"))();
function $28d0a96c55d57abf$var$resolveCommandAttempt(parsed, withoutPathExt) {
    const cwd = process.cwd();
    const hasCustomCwd = parsed.options.cwd != null;
    // If a custom `cwd` was specified, we need to change the process cwd
    // because `which` will do stat calls but does not support a custom cwd
    if (hasCustomCwd) try {
        process.chdir(parsed.options.cwd);
    } catch (err) {
    /* Empty */ }
    let resolved;
    try {
        resolved = $eXFYt.sync(parsed.command, {
            path: (parsed.options.env || process.env)[$28d0a96c55d57abf$var$pathKey],
            pathExt: withoutPathExt ? $1esxr$path.delimiter : undefined
        });
    } catch (e) {
    /* Empty */ } finally{
        process.chdir(cwd);
    }
    // If we successfully resolved, ensure that an absolute path is returned
    // Note that when a custom `cwd` was used, we need to resolve to an absolute path based on it
    if (resolved) resolved = $1esxr$path.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
    return resolved;
}
function $28d0a96c55d57abf$var$resolveCommand(parsed) {
    return $28d0a96c55d57abf$var$resolveCommandAttempt(parsed) || $28d0a96c55d57abf$var$resolveCommandAttempt(parsed, true);
}
module.exports = $28d0a96c55d57abf$var$resolveCommand;

});
parcelRequire.register("eXFYt", function(module, exports) {
module.exports = $ae4722a1102bcfd0$var$which;
$ae4722a1102bcfd0$var$which.sync = $ae4722a1102bcfd0$var$whichSync;
var $ae4722a1102bcfd0$var$isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";

var $ae4722a1102bcfd0$var$COLON = $ae4722a1102bcfd0$var$isWindows ? ";" : ":";

var $hrg6w = parcelRequire("hrg6w");
function $ae4722a1102bcfd0$var$getNotFoundError(cmd) {
    var er = new Error("not found: " + cmd);
    er.code = "ENOENT";
    return er;
}
function $ae4722a1102bcfd0$var$getPathInfo(cmd, opt) {
    var colon = opt.colon || $ae4722a1102bcfd0$var$COLON;
    var pathEnv = opt.path || process.env.PATH || "";
    var pathExt = [
        ""
    ];
    pathEnv = pathEnv.split(colon);
    var pathExtExe = "";
    if ($ae4722a1102bcfd0$var$isWindows) {
        pathEnv.unshift(process.cwd());
        pathExtExe = opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM";
        pathExt = pathExtExe.split(colon);
        // Always test the cmd itself first.  isexe will check to make sure
        // it's found in the pathExt set.
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "") pathExt.unshift("");
    }
    // If it has a slash, then we don't bother searching the pathenv.
    // just check the file itself, and that's it.
    if (cmd.match(/\//) || $ae4722a1102bcfd0$var$isWindows && cmd.match(/\\/)) pathEnv = [
        ""
    ];
    return {
        env: pathEnv,
        ext: pathExt,
        extExe: pathExtExe
    };
}
function $ae4722a1102bcfd0$var$which(cmd, opt, cb) {
    if (typeof opt === "function") {
        cb = opt;
        opt = {};
    }
    var info = $ae4722a1102bcfd0$var$getPathInfo(cmd, opt);
    var pathEnv = info.env;
    var pathExt = info.ext;
    var pathExtExe = info.extExe;
    var found = [];
    (function F(i, l) {
        if (i === l) {
            if (opt.all && found.length) return cb(null, found);
            else return cb($ae4722a1102bcfd0$var$getNotFoundError(cmd));
        }
        var pathPart = pathEnv[i];
        if (pathPart.charAt(0) === '"' && pathPart.slice(-1) === '"') pathPart = pathPart.slice(1, -1);
        var p = $1esxr$path.join(pathPart, cmd);
        if (!pathPart && /^\.[\\\/]/.test(cmd)) p = cmd.slice(0, 2) + p;
        (function E(ii, ll) {
            if (ii === ll) return F(i + 1, l);
            var ext = pathExt[ii];
            $hrg6w(p + ext, {
                pathExt: pathExtExe
            }, function(er, is) {
                if (!er && is) {
                    if (opt.all) found.push(p + ext);
                    else return cb(null, p + ext);
                }
                return E(ii + 1, ll);
            });
        })(0, pathExt.length);
    })(0, pathEnv.length);
}
function $ae4722a1102bcfd0$var$whichSync(cmd, opt) {
    opt = opt || {};
    var info = $ae4722a1102bcfd0$var$getPathInfo(cmd, opt);
    var pathEnv = info.env;
    var pathExt = info.ext;
    var pathExtExe = info.extExe;
    var found = [];
    for(var i = 0, l = pathEnv.length; i < l; i++){
        var pathPart = pathEnv[i];
        if (pathPart.charAt(0) === '"' && pathPart.slice(-1) === '"') pathPart = pathPart.slice(1, -1);
        var p = $1esxr$path.join(pathPart, cmd);
        if (!pathPart && /^\.[\\\/]/.test(cmd)) p = cmd.slice(0, 2) + p;
        for(var j = 0, ll = pathExt.length; j < ll; j++){
            var cur = p + pathExt[j];
            var is;
            try {
                is = $hrg6w.sync(cur, {
                    pathExt: pathExtExe
                });
                if (is) {
                    if (opt.all) found.push(cur);
                    else return cur;
                }
            } catch (ex) {}
        }
    }
    if (opt.all && found.length) return found;
    if (opt.nothrow) return null;
    throw $ae4722a1102bcfd0$var$getNotFoundError(cmd);
}

});
parcelRequire.register("hrg6w", function(module, exports) {

var $cb217341f9b84022$var$core;


if (process.platform === "win32" || $parcel$global.TESTING_WINDOWS) $cb217341f9b84022$var$core = (parcelRequire("eMBg7"));
else $cb217341f9b84022$var$core = (parcelRequire("8HRwQ"));
module.exports = $cb217341f9b84022$var$isexe;
$cb217341f9b84022$var$isexe.sync = $cb217341f9b84022$var$sync;
function $cb217341f9b84022$var$isexe(path, options, cb) {
    if (typeof options === "function") {
        cb = options;
        options = {};
    }
    if (!cb) {
        if (typeof Promise !== "function") throw new TypeError("callback not provided");
        return new Promise(function(resolve, reject) {
            $cb217341f9b84022$var$isexe(path, options || {}, function(er, is) {
                if (er) reject(er);
                else resolve(is);
            });
        });
    }
    $cb217341f9b84022$var$core(path, options || {}, function(er, is) {
        // ignore EACCES because that just means we aren't allowed to run it
        if (er) {
            if (er.code === "EACCES" || options && options.ignoreErrors) {
                er = null;
                is = false;
            }
        }
        cb(er, is);
    });
}
function $cb217341f9b84022$var$sync(path, options) {
    // my kingdom for a filtered catch
    try {
        return $cb217341f9b84022$var$core.sync(path, options || {});
    } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") return false;
        else throw er;
    }
}

});



parcelRequire.register("a60tI", function(module, exports) {

$parcel$export(module.exports, "command", () => $759ad5e42dc599ab$export$ae50443ffc990749, (v) => $759ad5e42dc599ab$export$ae50443ffc990749 = v);
$parcel$export(module.exports, "argument", () => $759ad5e42dc599ab$export$6ea29ee575e3f5ff, (v) => $759ad5e42dc599ab$export$6ea29ee575e3f5ff = v);
var $759ad5e42dc599ab$export$ae50443ffc990749;
var $759ad5e42dc599ab$export$6ea29ee575e3f5ff;
"use strict";
// See http://www.robvanderwoude.com/escapechars.php
const $759ad5e42dc599ab$var$metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
function $759ad5e42dc599ab$var$escapeCommand(arg) {
    // Escape meta chars
    arg = arg.replace($759ad5e42dc599ab$var$metaCharsRegExp, "^$1");
    return arg;
}
function $759ad5e42dc599ab$var$escapeArgument(arg, doubleEscapeMetaChars) {
    // Convert to string
    arg = `${arg}`;
    // Algorithm below is based on https://qntm.org/cmd
    // Sequence of backslashes followed by a double quote:
    // double up all the backslashes and escape the double quote
    arg = arg.replace(/(\\*)"/g, '$1$1\\"');
    // Sequence of backslashes followed by the end of the string
    // (which will become a double quote later):
    // double up all the backslashes
    arg = arg.replace(/(\\*)$/, "$1$1");
    // All other backslashes occur literally
    // Quote the whole thing:
    arg = `"${arg}"`;
    // Escape meta chars
    arg = arg.replace($759ad5e42dc599ab$var$metaCharsRegExp, "^$1");
    // Double escape meta chars if necessary
    if (doubleEscapeMetaChars) arg = arg.replace($759ad5e42dc599ab$var$metaCharsRegExp, "^$1");
    return arg;
}
$759ad5e42dc599ab$export$ae50443ffc990749 = $759ad5e42dc599ab$var$escapeCommand;
$759ad5e42dc599ab$export$6ea29ee575e3f5ff = $759ad5e42dc599ab$var$escapeArgument;

});

parcelRequire.register("bnw6M", function(module, exports) {
"use strict";


var $57tVN = parcelRequire("57tVN");
function $848abfbfa322f1ae$var$readShebang(command) {
    // Read the first 150 bytes from the file
    const size = 150;
    let buffer;
    if (Buffer.alloc) // Node.js v4.5+ / v5.10+
    buffer = Buffer.alloc(size);
    else {
        // Old Node.js API
        buffer = new Buffer(size);
        buffer.fill(0); // zero-fill
    }
    let fd;
    try {
        fd = $1esxr$fs.openSync(command, "r");
        $1esxr$fs.readSync(fd, buffer, 0, size, 0);
        $1esxr$fs.closeSync(fd);
    } catch (e) {}
    // Attempt to extract shebang (null is returned if not a shebang)
    return $57tVN(buffer.toString());
}
module.exports = $848abfbfa322f1ae$var$readShebang;

});
parcelRequire.register("57tVN", function(module, exports) {
"use strict";

var $cwnPo = parcelRequire("cwnPo");
module.exports = function(str) {
    var match = str.match($cwnPo);
    if (!match) return null;
    var arr = match[0].replace(/#! ?/, "").split(" ");
    var bin = arr[0].split("/").pop();
    var arg = arr[1];
    return bin === "env" ? arg : bin + (arg ? " " + arg : "");
};

});
parcelRequire.register("cwnPo", function(module, exports) {
"use strict";
module.exports = /^#!.*/;

});




parcelRequire.register("6Fpvi", function(module, exports) {
"use strict";
const $4daa5aed1969ed87$var$isWin = process.platform === "win32";
function $4daa5aed1969ed87$var$notFoundError(original, syscall) {
    return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
    });
}
function $4daa5aed1969ed87$var$hookChildProcess(cp, parsed) {
    if (!$4daa5aed1969ed87$var$isWin) return;
    const originalEmit = cp.emit;
    cp.emit = function(name, arg1) {
        // If emitting "exit" event and exit code is 1, we need to check if
        // the command exists and emit an "error" instead
        // See https://github.com/IndigoUnited/node-cross-spawn/issues/16
        if (name === "exit") {
            const err = $4daa5aed1969ed87$var$verifyENOENT(arg1, parsed, "spawn");
            if (err) return originalEmit.call(cp, "error", err);
        }
        return originalEmit.apply(cp, arguments); // eslint-disable-line prefer-rest-params
    };
}
function $4daa5aed1969ed87$var$verifyENOENT(status, parsed) {
    if ($4daa5aed1969ed87$var$isWin && status === 1 && !parsed.file) return $4daa5aed1969ed87$var$notFoundError(parsed.original, "spawn");
    return null;
}
function $4daa5aed1969ed87$var$verifyENOENTSync(status, parsed) {
    if ($4daa5aed1969ed87$var$isWin && status === 1 && !parsed.file) return $4daa5aed1969ed87$var$notFoundError(parsed.original, "spawnSync");
    return null;
}
module.exports = {
    hookChildProcess: $4daa5aed1969ed87$var$hookChildProcess,
    verifyENOENT: $4daa5aed1969ed87$var$verifyENOENT,
    verifyENOENTSync: $4daa5aed1969ed87$var$verifyENOENTSync,
    notFoundError: $4daa5aed1969ed87$var$notFoundError
};

});


parcelRequire.register("kOvnu", function(module, exports) {

$parcel$export(module.exports, "default", () => $f270d1229182b865$export$2e2bcd8739ae039);
function $f270d1229182b865$export$2e2bcd8739ae039(childProcess) {
    return new Promise((resolve, reject)=>{
        childProcess.on("error", reject);
        childProcess.on("close", (code)=>{
            if (code !== 0) {
                reject(new Error("Child process failed"));
                return;
            }
            resolve();
        });
    });
}

});

parcelRequire.register("c9UhD", function(module, exports) {
module.exports = JSON.parse('{"name":"@parcel/package-manager","version":"2.8.3","description":"Blazing fast, zero configuration web application bundler","license":"MIT","publishConfig":{"access":"public"},"funding":{"type":"opencollective","url":"https://opencollective.com/parcel"},"repository":{"type":"git","url":"https://github.com/parcel-bundler/parcel.git"},"main":"lib/index.js","source":"src/index.js","types":"index.d.ts","engines":{"node":">= 12.0.0"},"scripts":{"build-ts":"mkdir -p lib && flow-to-ts src/types.js > lib/types.d.ts","check-ts":"tsc --noEmit index.d.ts"},"targets":{"types":false,"main":{"includeNodeModules":{"@parcel/core":false,"@parcel/diagnostic":false,"@parcel/fs":false,"@parcel/logger":false,"@parcel/types":false,"@parcel/utils":false,"@parcel/workers":false,"semver":false}}},"dependencies":{"@parcel/diagnostic":"2.8.3","@parcel/fs":"2.8.3","@parcel/logger":"2.8.3","@parcel/types":"2.8.3","@parcel/utils":"2.8.3","@parcel/workers":"2.8.3","semver":"^5.7.1"},"devDependencies":{"command-exists":"^1.2.6","cross-spawn":"^6.0.4","nullthrows":"^1.1.1","split2":"^3.1.1"},"peerDependencies":{"@parcel/core":"^2.8.3"},"browser":{"./src/Npm.js":false,"./src/Pnpm.js":false,"./src/Yarn.js":false},"gitHead":"349a6caf40ec8abb6a49fcae0765f8f8deb2073d"}');

});


parcelRequire.register("2fqsR", function(module, exports) {

$parcel$export(module.exports, "Yarn", () => $1a3182c43ce27be7$export$8db243e2edc9d1b8);

var $8dBwb = parcelRequire("8dBwb");

var $i3FhQ = parcelRequire("i3FhQ");




var $lNYHi = parcelRequire("lNYHi");

var $jCAID = parcelRequire("jCAID");

var $kOvnu = parcelRequire("kOvnu");


var $12qcL = parcelRequire("12qcL");

var $c9UhD = parcelRequire("c9UhD");
const $1a3182c43ce27be7$var$YARN_CMD = "yarn";
const $1a3182c43ce27be7$var$exec = (0, $1esxr$util.promisify)((0, $1esxr$child_process.exec));
let $1a3182c43ce27be7$var$hasYarn;
let $1a3182c43ce27be7$var$yarnVersion;
class $1a3182c43ce27be7$export$8db243e2edc9d1b8 {
    static async exists() {
        if ($1a3182c43ce27be7$var$hasYarn != null) return $1a3182c43ce27be7$var$hasYarn;
        try {
            $1a3182c43ce27be7$var$hasYarn = Boolean(await (0, (/*@__PURE__*/$parcel$interopDefault($8dBwb)))("yarn"));
        } catch (err) {
            $1a3182c43ce27be7$var$hasYarn = false;
        }
        return $1a3182c43ce27be7$var$hasYarn;
    }
    async install({ modules: modules , cwd: cwd , saveDev: saveDev = true  }) {
        if ($1a3182c43ce27be7$var$yarnVersion == null) {
            let version = await $1a3182c43ce27be7$var$exec("yarn --version");
            $1a3182c43ce27be7$var$yarnVersion = parseInt(version.stdout, 10);
        }
        let args = [
            "add",
            "--json"
        ].concat(modules.map((0, $12qcL.npmSpecifierFromModuleRequest)));
        if (saveDev) {
            args.push("-D");
            if ($1a3182c43ce27be7$var$yarnVersion < 2) args.push("-W");
        } // When Parcel is run by Yarn (e.g. via package.json scripts), several environment variables are
        // added. When parcel in turn calls Yarn again, these can cause Yarn to behave stragely, so we
        // filter them out when installing packages.
        let env = {};
        for(let key in process.env)if (!key.startsWith("npm_") && key !== "YARN_WRAP_OUTPUT" && key !== "INIT_CWD" && key !== "NODE_ENV") env[key] = process.env[key];
        let installProcess = (0, (/*@__PURE__*/$parcel$interopDefault($i3FhQ)))($1a3182c43ce27be7$var$YARN_CMD, args, {
            cwd: cwd,
            env: env
        });
        installProcess.stdout // Invoking yarn with --json provides streaming, newline-delimited JSON output.
        .pipe((0, (/*@__PURE__*/$parcel$interopDefault($lNYHi)))()).pipe(new (0, $jCAID.default)()).on("error", (e)=>{
            (0, ($parcel$interopDefault($1esxr$parcellogger))).error(e, "@parcel/package-manager");
        }).on("data", (message)=>{
            switch(message.type){
                case "step":
                    (0, ($parcel$interopDefault($1esxr$parcellogger))).progress($1a3182c43ce27be7$var$prefix(`[${message.data.current}/${message.data.total}] ${message.data.message}`));
                    return;
                case "success":
                case "info":
                    (0, ($parcel$interopDefault($1esxr$parcellogger))).info({
                        origin: "@parcel/package-manager",
                        message: $1a3182c43ce27be7$var$prefix(message.data)
                    });
                    return;
                default:
            }
        });
        installProcess.stderr.pipe((0, (/*@__PURE__*/$parcel$interopDefault($lNYHi)))()).pipe(new (0, $jCAID.default)()).on("error", (e)=>{
            (0, ($parcel$interopDefault($1esxr$parcellogger))).error(e, "@parcel/package-manager");
        }).on("data", (message)=>{
            switch(message.type){
                case "warning":
                    (0, ($parcel$interopDefault($1esxr$parcellogger))).warn({
                        origin: "@parcel/package-manager",
                        message: $1a3182c43ce27be7$var$prefix(message.data)
                    });
                    return;
                case "error":
                    (0, ($parcel$interopDefault($1esxr$parcellogger))).error({
                        origin: "@parcel/package-manager",
                        message: $1a3182c43ce27be7$var$prefix(message.data)
                    });
                    return;
                default:
            }
        });
        try {
            return await (0, $kOvnu.default)(installProcess);
        } catch (e) {
            throw new Error("Yarn failed to install modules:" + e.message);
        }
    }
}
function $1a3182c43ce27be7$var$prefix(message) {
    return "yarn: " + message;
}
(0, $1esxr$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($c9UhD))).version}:Yarn`, $1a3182c43ce27be7$export$8db243e2edc9d1b8);

});
parcelRequire.register("8dBwb", function(module, exports) {

module.exports = (parcelRequire("6BVRF"));

});

parcelRequire.register("lNYHi", function(module, exports) {
/*
Copyright (c) 2014-2018, Matteo Collina <hello@matteocollina.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/ "use strict";

var $iTHhD = parcelRequire("iTHhD");
var $fdfd41ce538efda1$require$Transform = $iTHhD.Transform;

var $fdfd41ce538efda1$require$StringDecoder = $1esxr$string_decoder.StringDecoder;
const $fdfd41ce538efda1$var$kLast = Symbol("last");
const $fdfd41ce538efda1$var$kDecoder = Symbol("decoder");
function $fdfd41ce538efda1$var$transform(chunk, enc, cb) {
    var list;
    if (this.overflow) {
        var buf = this[$fdfd41ce538efda1$var$kDecoder].write(chunk);
        list = buf.split(this.matcher);
        if (list.length === 1) return cb() // Line ending not found. Discard entire chunk.
        ;
        // Line ending found. Discard trailing fragment of previous line and reset overflow state.
        list.shift();
        this.overflow = false;
    } else {
        this[$fdfd41ce538efda1$var$kLast] += this[$fdfd41ce538efda1$var$kDecoder].write(chunk);
        list = this[$fdfd41ce538efda1$var$kLast].split(this.matcher);
    }
    this[$fdfd41ce538efda1$var$kLast] = list.pop();
    for(var i = 0; i < list.length; i++)try {
        $fdfd41ce538efda1$var$push(this, this.mapper(list[i]));
    } catch (error) {
        return cb(error);
    }
    this.overflow = this[$fdfd41ce538efda1$var$kLast].length > this.maxLength;
    if (this.overflow && !this.skipOverflow) return cb(new Error("maximum buffer reached"));
    cb();
}
function $fdfd41ce538efda1$var$flush(cb) {
    // forward any gibberish left in there
    this[$fdfd41ce538efda1$var$kLast] += this[$fdfd41ce538efda1$var$kDecoder].end();
    if (this[$fdfd41ce538efda1$var$kLast]) try {
        $fdfd41ce538efda1$var$push(this, this.mapper(this[$fdfd41ce538efda1$var$kLast]));
    } catch (error) {
        return cb(error);
    }
    cb();
}
function $fdfd41ce538efda1$var$push(self, val) {
    if (val !== undefined) self.push(val);
}
function $fdfd41ce538efda1$var$noop(incoming) {
    return incoming;
}
function $fdfd41ce538efda1$var$split(matcher, mapper, options) {
    // Set defaults for any arguments not supplied.
    matcher = matcher || /\r?\n/;
    mapper = mapper || $fdfd41ce538efda1$var$noop;
    options = options || {};
    // Test arguments explicitly.
    switch(arguments.length){
        case 1:
            // If mapper is only argument.
            if (typeof matcher === "function") {
                mapper = matcher;
                matcher = /\r?\n/;
            // If options is only argument.
            } else if (typeof matcher === "object" && !(matcher instanceof RegExp)) {
                options = matcher;
                matcher = /\r?\n/;
            }
            break;
        case 2:
            // If mapper and options are arguments.
            if (typeof matcher === "function") {
                options = mapper;
                mapper = matcher;
                matcher = /\r?\n/;
            // If matcher and options are arguments.
            } else if (typeof mapper === "object") {
                options = mapper;
                mapper = $fdfd41ce538efda1$var$noop;
            }
    }
    options = Object.assign({}, options);
    options.transform = $fdfd41ce538efda1$var$transform;
    options.flush = $fdfd41ce538efda1$var$flush;
    options.readableObjectMode = true;
    const stream = new $fdfd41ce538efda1$require$Transform(options);
    stream[$fdfd41ce538efda1$var$kLast] = "";
    stream[$fdfd41ce538efda1$var$kDecoder] = new $fdfd41ce538efda1$require$StringDecoder("utf8");
    stream.matcher = matcher;
    stream.mapper = mapper;
    stream.maxLength = options.maxLength;
    stream.skipOverflow = options.skipOverflow;
    stream.overflow = false;
    return stream;
}
module.exports = $fdfd41ce538efda1$var$split;

});

parcelRequire.register("jCAID", function(module, exports) {

$parcel$export(module.exports, "default", () => $e48e0c8597af6867$export$2e2bcd8739ae039);


class $e48e0c8597af6867$export$2e2bcd8739ae039 extends (0, $1esxr$stream.Transform) {
    constructor(options){
        super({
            ...options,
            objectMode: true
        });
    }
    _transform(chunk, encoding, callback) {
        try {
            let parsed;
            try {
                parsed = JSON.parse(chunk.toString());
            } catch (e) {
                // Be permissive and ignoreJSON parse errors in case there was
                // a non-JSON line in the package manager's stdout.
                (0, ($parcel$interopDefault($1esxr$parcellogger))).verbose({
                    message: "Ignored invalid JSON message: " + chunk.toString(),
                    origin: "@parcel/package-manager"
                });
                return;
            }
            callback(null, parsed);
        } catch (err) {
            callback(err);
        }
    }
}

});


parcelRequire.register("1dbxg", function(module, exports) {

$parcel$export(module.exports, "Pnpm", () => $0e1ff407e4f38838$export$ad678da47ffaf985);

var $8dBwb = parcelRequire("8dBwb");

var $i3FhQ = parcelRequire("i3FhQ");


var $lNYHi = parcelRequire("lNYHi");

var $jCAID = parcelRequire("jCAID");

var $kOvnu = parcelRequire("kOvnu");


var $12qcL = parcelRequire("12qcL");

var $c9UhD = parcelRequire("c9UhD");
const $0e1ff407e4f38838$var$PNPM_CMD = "pnpm";
let $0e1ff407e4f38838$var$hasPnpm;
class $0e1ff407e4f38838$export$ad678da47ffaf985 {
    static async exists() {
        if ($0e1ff407e4f38838$var$hasPnpm != null) return $0e1ff407e4f38838$var$hasPnpm;
        try {
            $0e1ff407e4f38838$var$hasPnpm = Boolean(await (0, (/*@__PURE__*/$parcel$interopDefault($8dBwb)))("pnpm"));
        } catch (err) {
            $0e1ff407e4f38838$var$hasPnpm = false;
        }
        return $0e1ff407e4f38838$var$hasPnpm;
    }
    async install({ modules: modules , cwd: cwd , saveDev: saveDev = true  }) {
        let args = [
            "add",
            "--reporter",
            "ndjson"
        ];
        if (saveDev) args.push("-D", "-W");
        args = args.concat(modules.map((0, $12qcL.npmSpecifierFromModuleRequest)));
        let env = {};
        for(let key in process.env)if (!key.startsWith("npm_") && key !== "INIT_CWD" && key !== "NODE_ENV") env[key] = process.env[key];
        let addedCount = 0, removedCount = 0;
        let installProcess = (0, (/*@__PURE__*/$parcel$interopDefault($i3FhQ)))($0e1ff407e4f38838$var$PNPM_CMD, args, {
            cwd: cwd,
            env: env
        });
        installProcess.stdout.pipe((0, (/*@__PURE__*/$parcel$interopDefault($lNYHi)))()).pipe(new (0, $jCAID.default)()).on("error", (e)=>{
            (0, ($parcel$interopDefault($1esxr$parcellogger))).warn({
                origin: "@parcel/package-manager",
                message: e.chunk,
                stack: e.stack
            });
        }).on("data", (json)=>{
            if (json.level === "error") (0, ($parcel$interopDefault($1esxr$parcellogger))).error({
                origin: "@parcel/package-manager",
                message: json.err.message,
                stack: json.err.stack
            });
            else if (json.level === "info" && typeof json.message === "string") (0, ($parcel$interopDefault($1esxr$parcellogger))).info({
                origin: "@parcel/package-manager",
                message: $0e1ff407e4f38838$var$prefix(json.message)
            });
            else if (json.name === "pnpm:stats") {
                var _json_added;
                addedCount += (_json_added = json.added) !== null && _json_added !== void 0 ? _json_added : 0;
                var _json_removed;
                removedCount += (_json_removed = json.removed) !== null && _json_removed !== void 0 ? _json_removed : 0;
            }
        });
        let stderr = [];
        installProcess.stderr.on("data", (str)=>{
            stderr.push(str.toString());
        }).on("error", (e)=>{
            (0, ($parcel$interopDefault($1esxr$parcellogger))).warn({
                origin: "@parcel/package-manager",
                message: e.message
            });
        });
        try {
            await (0, $kOvnu.default)(installProcess);
            if (addedCount > 0 || removedCount > 0) (0, ($parcel$interopDefault($1esxr$parcellogger))).log({
                origin: "@parcel/package-manager",
                message: `Added ${addedCount} and ${removedCount > 0 ? `removed ${removedCount}` : ""} packages via pnpm`
            });
             // Since we succeeded, stderr might have useful information not included
            // in the json written to stdout. It's also not necessary to log these as
            // errors as they often aren't.
            for (let message of stderr)(0, ($parcel$interopDefault($1esxr$parcellogger))).log({
                origin: "@parcel/package-manager",
                message: message
            });
        } catch (e) {
            throw new Error("pnpm failed to install modules");
        }
    }
}
function $0e1ff407e4f38838$var$prefix(message) {
    return "pnpm: " + message;
}
(0, $1esxr$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($c9UhD))).version}:Pnpm`, $0e1ff407e4f38838$export$ad678da47ffaf985);

});

parcelRequire.register("kXqrB", function(module, exports) {

$parcel$export(module.exports, "default", () => $f41dd49652686ea5$export$2e2bcd8739ae039);
const $f41dd49652686ea5$var$MODULE_REGEX = /^((@[^/\s]+\/){0,1}([^/\s.~]+[^/\s]*)){1}(@[^/\s]+){0,1}/;
function $f41dd49652686ea5$export$2e2bcd8739ae039(moduleName) {
    let matches = $f41dd49652686ea5$var$MODULE_REGEX.exec(moduleName);
    if (matches) return matches[0];
    return "";
}

});


parcelRequire.register("6u9ZO", function(module, exports) {

$parcel$export(module.exports, "NodeResolver", () => $4b8d4c698be87535$export$a03f9729f0a3cf20);


var $8t24O = parcelRequire("8t24O");
class $4b8d4c698be87535$export$a03f9729f0a3cf20 extends (0, $8t24O.NodeResolverBase) {
    async resolve(id, from) {
        let ctx = {
            invalidateOnFileCreate: [],
            invalidateOnFileChange: new Set()
        };
        if (id[0] === ".") id = (0, ($parcel$interopDefault($1esxr$path))).resolve((0, ($parcel$interopDefault($1esxr$path))).dirname(from), id);
        let res = (0, ($parcel$interopDefault($1esxr$path))).isAbsolute(id) ? await this.loadRelative(id, ctx) : await this.loadNodeModules(id, from, ctx);
        if (!res) {
            let e = new Error(`Could not resolve module "${id}" from "${from}"`); // $FlowFixMe[prop-missing]
            e.code = "MODULE_NOT_FOUND";
            throw e;
        }
        if ((0, ($parcel$interopDefault($1esxr$path))).isAbsolute(res.resolved)) res.resolved = await this.fs.realpath(res.resolved);
        return res;
    }
    async loadRelative(id, ctx) {
        // First try as a file, then as a directory.
        return await this.loadAsFile(id, null, ctx) || await this.loadDirectory(id, null, ctx) // eslint-disable-line no-return-await
        ;
    }
    findPackage(sourceFile, ctx) {
        // If in node_modules, take a shortcut to find the package.json in the root of the package.
        let pkgPath = this.getNodeModulesPackagePath(sourceFile);
        if (pkgPath) return this.readPackage(pkgPath, ctx);
        ctx.invalidateOnFileCreate.push({
            fileName: "package.json",
            aboveFilePath: sourceFile
        });
        let dir = (0, ($parcel$interopDefault($1esxr$path))).dirname(sourceFile);
        let pkgFile = this.fs.findAncestorFile([
            "package.json"
        ], dir, this.projectRoot);
        if (pkgFile != null) return this.readPackage(pkgFile, ctx);
        return Promise.resolve(null);
    }
    async readPackage(file, ctx) {
        let cached = this.packageCache.get(file);
        if (cached) {
            ctx.invalidateOnFileChange.add(file);
            return cached;
        }
        let json;
        try {
            json = await this.fs.readFile(file, "utf8");
        } catch (err) {
            ctx.invalidateOnFileCreate.push({
                filePath: file
            });
            throw err;
        } // Add the invalidation *before* we try to parse the JSON in case of errors
        // so that changes are picked up if the file is edited to fix the error.
        ctx.invalidateOnFileChange.add(file);
        let pkg = JSON.parse(json);
        this.packageCache.set(file, pkg);
        return pkg;
    }
    async loadAsFile(file, pkg, ctx) {
        // Try all supported extensions
        let files = this.expandFile(file);
        let found = this.fs.findFirstFile(files); // Add invalidations for higher priority files so we
        // re-resolve if any of them are created.
        for (let file of files){
            if (file === found) break;
            ctx.invalidateOnFileCreate.push({
                filePath: file
            });
        }
        if (found) return {
            resolved: await this.fs.realpath(found),
            // Find a package.json file in the current package.
            pkg: pkg !== null && pkg !== void 0 ? pkg : await this.findPackage(file, ctx),
            invalidateOnFileCreate: ctx.invalidateOnFileCreate,
            invalidateOnFileChange: ctx.invalidateOnFileChange
        };
        return null;
    }
    async loadDirectory(dir, pkg = null, ctx) {
        try {
            pkg = await this.readPackage((0, ($parcel$interopDefault($1esxr$path))).join(dir, "package.json"), ctx); // Get a list of possible package entry points.
            let entries = this.getPackageEntries(dir, pkg);
            for (let file of entries){
                // First try loading package.main as a file, then try as a directory.
                const res = await this.loadAsFile(file, pkg, ctx) || await this.loadDirectory(file, pkg, ctx);
                if (res) return res;
            }
        } catch (err) {} // Fall back to an index file inside the directory.
        return this.loadAsFile((0, ($parcel$interopDefault($1esxr$path))).join(dir, "index"), pkg, ctx);
    }
    async loadNodeModules(id, from, ctx) {
        try {
            let module = this.findNodeModulePath(id, from, ctx);
            if (!module || module.resolved) return module;
             // If a module was specified as a module sub-path (e.g. some-module/some/path),
            // it is likely a file. Try loading it as a file first.
            if (module.subPath) {
                let pkg = await this.readPackage((0, ($parcel$interopDefault($1esxr$path))).join(module.moduleDir, "package.json"), ctx);
                let res = await this.loadAsFile(module.filePath, pkg, ctx);
                if (res) return res;
            } // Otherwise, load as a directory.
            if (module.filePath) return await this.loadDirectory(module.filePath, null, ctx);
        } catch (e) {}
    }
}

});
parcelRequire.register("8t24O", function(module, exports) {

$parcel$export(module.exports, "NodeResolverBase", () => $62a2a484899bdd71$export$13048387f49531f);
// $FlowFixMe




const $62a2a484899bdd71$var$builtins = {
    pnpapi: true
};
for (let builtin of (0, ($parcel$interopDefault($1esxr$module))).builtinModules)$62a2a484899bdd71$var$builtins[builtin] = true;
const $62a2a484899bdd71$var$NODE_MODULES = `${(0, ($parcel$interopDefault($1esxr$path))).sep}node_modules${(0, ($parcel$interopDefault($1esxr$path))).sep}`;
class $62a2a484899bdd71$export$13048387f49531f {
    constructor(fs, projectRoot, extensions){
        this.fs = fs;
        this.projectRoot = projectRoot;
        this.extensions = extensions || // $FlowFixMe[prop-missing]
        Object.keys((0, ($parcel$interopDefault($1esxr$module)))._extensions);
        this.packageCache = new Map();
    }
    resolve(id, from) {
        throw new Error(`Could not resolve "${id}" from "${from}"`);
    }
    expandFile(file) {
        // Expand extensions and aliases
        let res = [];
        for (let ext of this.extensions)res.push(file + ext);
        if ((0, ($parcel$interopDefault($1esxr$path))).extname(file)) res.unshift(file);
        else res.push(file);
        return res;
    }
    getPackageEntries(dir, pkg) {
        let main = pkg.main;
        if ((0, process.env.PARCEL_SELF_BUILD) && typeof pkg.name === "string" && typeof pkg.source === "string" && pkg.name.startsWith("@parcel/") && pkg.name !== "@parcel/watcher") main = pkg.source;
        return [
            main
        ].filter((entry)=>typeof entry === "string").map((main)=>{
            // Default to index file if no main field find
            if (!main || main === "." || main === "./") main = "index";
            (0, ($parcel$interopDefault($1esxr$assert)))(typeof main === "string");
            return (0, ($parcel$interopDefault($1esxr$path))).resolve(dir, main);
        });
    }
    isBuiltin(name) {
        return !!($62a2a484899bdd71$var$builtins[name] || name.startsWith("node:"));
    }
    findNodeModulePath(id, sourceFile, ctx) {
        if (this.isBuiltin(id)) return {
            resolved: id,
            invalidateOnFileChange: new Set(),
            invalidateOnFileCreate: []
        };
        let [moduleName, subPath] = (0, $1esxr$parcelutils.getModuleParts)(id);
        let dir = (0, ($parcel$interopDefault($1esxr$path))).dirname(sourceFile);
        let moduleDir = this.fs.findNodeModule(moduleName, dir);
        ctx.invalidateOnFileCreate.push({
            fileName: `node_modules/${moduleName}`,
            aboveFilePath: sourceFile
        });
        if (!moduleDir && process.versions.pnp != null) try {
            // $FlowFixMe[prop-missing]
            let pnp = (0, ($parcel$interopDefault($1esxr$module))).findPnpApi(dir + "/");
            moduleDir = pnp.resolveToUnqualified(moduleName + (id[moduleName.length] === "/" ? "/" : ""), dir + "/"); // Invalidate whenever the .pnp.js file changes.
            ctx.invalidateOnFileChange.add(pnp.resolveToUnqualified("pnpapi", null));
        } catch (e) {
            if (e.code !== "MODULE_NOT_FOUND") throw e;
        }
        if (moduleDir) return {
            moduleName: moduleName,
            subPath: subPath,
            moduleDir: moduleDir,
            filePath: subPath ? (0, ($parcel$interopDefault($1esxr$path))).join(moduleDir, subPath) : moduleDir
        };
        return null;
    }
    getNodeModulesPackagePath(sourceFile) {
        // If the file is in node_modules, we can find the package.json in the root of the package
        // by slicing from the start of the string until 1-2 path segments after node_modules.
        let index = sourceFile.lastIndexOf($62a2a484899bdd71$var$NODE_MODULES);
        if (index >= 0) {
            index += $62a2a484899bdd71$var$NODE_MODULES.length; // If a scoped path, add an extra path segment.
            if (sourceFile[index] === "@") index = sourceFile.indexOf((0, ($parcel$interopDefault($1esxr$path))).sep, index) + 1;
            index = sourceFile.indexOf((0, ($parcel$interopDefault($1esxr$path))).sep, index);
            return (0, ($parcel$interopDefault($1esxr$path))).join(sourceFile.slice(0, index >= 0 ? index : undefined), "package.json");
        }
    }
    invalidate(filePath) {
        // Invalidate the package.jsons above `filePath`
        let dir = (0, ($parcel$interopDefault($1esxr$path))).dirname(filePath);
        let { root: root  } = (0, ($parcel$interopDefault($1esxr$path))).parse(dir);
        while(dir !== root && (0, ($parcel$interopDefault($1esxr$path))).basename(dir) !== "node_modules"){
            this.packageCache.delete((0, ($parcel$interopDefault($1esxr$path))).join(dir, "package.json"));
            dir = (0, ($parcel$interopDefault($1esxr$path))).dirname(dir);
        }
    }
}

});


parcelRequire.register("t7SbL", function(module, exports) {

$parcel$export(module.exports, "NodeResolverSync", () => $0578d0f6e116167e$export$fb2a0b866a8162dc);


var $8t24O = parcelRequire("8t24O");
class $0578d0f6e116167e$export$fb2a0b866a8162dc extends (0, $8t24O.NodeResolverBase) {
    resolve(id, from) {
        let ctx = {
            invalidateOnFileCreate: [],
            invalidateOnFileChange: new Set()
        };
        if (id[0] === ".") id = (0, ($parcel$interopDefault($1esxr$path))).resolve((0, ($parcel$interopDefault($1esxr$path))).dirname(from), id);
        let res = (0, ($parcel$interopDefault($1esxr$path))).isAbsolute(id) ? this.loadRelative(id, ctx) : this.loadNodeModules(id, from, ctx);
        if (!res) {
            let e = new Error(`Could not resolve module "${id}" from "${from}"`); // $FlowFixMe
            e.code = "MODULE_NOT_FOUND";
            throw e;
        }
        if ((0, ($parcel$interopDefault($1esxr$path))).isAbsolute(res.resolved)) res.resolved = this.fs.realpathSync(res.resolved);
        return res;
    }
    loadRelative(id, ctx) {
        // First try as a file, then as a directory.
        return this.loadAsFile(id, null, ctx) || this.loadDirectory(id, null, ctx);
    }
    findPackage(sourceFile, ctx) {
        // If in node_modules, take a shortcut to find the package.json in the root of the package.
        let pkgPath = this.getNodeModulesPackagePath(sourceFile);
        if (pkgPath) return this.readPackage(pkgPath, ctx);
         // Find the nearest package.json file within the current node_modules folder
        let dir = (0, ($parcel$interopDefault($1esxr$path))).dirname(sourceFile);
        let pkgFile = this.fs.findAncestorFile([
            "package.json"
        ], dir, this.projectRoot);
        if (pkgFile != null) return this.readPackage(pkgFile, ctx);
    }
    readPackage(file, ctx) {
        let cached = this.packageCache.get(file);
        if (cached) {
            ctx.invalidateOnFileChange.add(file);
            return cached;
        }
        let json;
        try {
            json = this.fs.readFileSync(file, "utf8");
        } catch (err) {
            ctx.invalidateOnFileCreate.push({
                filePath: file
            });
            throw err;
        } // Add the invalidation *before* we try to parse the JSON in case of errors
        // so that changes are picked up if the file is edited to fix the error.
        ctx.invalidateOnFileChange.add(file);
        let pkg = JSON.parse(json);
        this.packageCache.set(file, pkg);
        return pkg;
    }
    loadAsFile(file, pkg, ctx) {
        // Try all supported extensions
        let files = this.expandFile(file);
        let found = this.fs.findFirstFile(files); // Add invalidations for higher priority files so we
        // re-resolve if any of them are created.
        for (let file of files){
            if (file === found) break;
            ctx.invalidateOnFileCreate.push({
                filePath: file
            });
        }
        if (found) return {
            resolved: this.fs.realpathSync(found),
            // Find a package.json file in the current package.
            pkg: pkg !== null && pkg !== void 0 ? pkg : this.findPackage(file, ctx),
            invalidateOnFileCreate: ctx.invalidateOnFileCreate,
            invalidateOnFileChange: ctx.invalidateOnFileChange
        };
        return null;
    }
    loadDirectory(dir, pkg = null, ctx) {
        try {
            pkg = this.readPackage((0, ($parcel$interopDefault($1esxr$path))).join(dir, "package.json"), ctx); // Get a list of possible package entry points.
            let entries = this.getPackageEntries(dir, pkg);
            for (let file of entries){
                // First try loading package.main as a file, then try as a directory.
                const res = this.loadAsFile(file, pkg, ctx) || this.loadDirectory(file, pkg, ctx);
                if (res) return res;
            }
        } catch (err) {} // Fall back to an index file inside the directory.
        return this.loadAsFile((0, ($parcel$interopDefault($1esxr$path))).join(dir, "index"), pkg, ctx);
    }
    loadNodeModules(id, from, ctx) {
        try {
            let module = this.findNodeModulePath(id, from, ctx);
            if (!module || module.resolved) return module;
             // If a module was specified as a module sub-path (e.g. some-module/some/path),
            // it is likely a file. Try loading it as a file first.
            if (module.subPath) {
                let pkg = this.readPackage((0, ($parcel$interopDefault($1esxr$path))).join(module.moduleDir, "package.json"), ctx);
                let res = this.loadAsFile(module.filePath, pkg, ctx);
                if (res) return res;
            } // Otherwise, load as a directory.
            if (module.filePath) return this.loadDirectory(module.filePath, null, ctx);
        } catch (e) {}
    }
}

});



$parcel$export(module.exports, "_addToInstallQueue", () => (parcelRequire("4n1Ez"))._addToInstallQueue);

var $iTlry = parcelRequire("iTlry");

var $1dbxg = parcelRequire("1dbxg");

var $2fqsR = parcelRequire("2fqsR");
var $96d0d3396b5f903c$exports = {};

$parcel$export($96d0d3396b5f903c$exports, "MockPackageInstaller", () => $96d0d3396b5f903c$export$75a986c28df5fb9b);




var $c9UhD = parcelRequire("c9UhD");

var $12qcL = parcelRequire("12qcL");
class $96d0d3396b5f903c$export$75a986c28df5fb9b {
    packages = new Map();
    register(packageName, fs, packagePath) {
        this.packages.set(packageName, {
            fs: fs,
            packagePath: packagePath
        });
    }
    async install({ modules: modules , fs: fs , cwd: cwd , packagePath: packagePath , saveDev: saveDev = true  }) {
        if (packagePath == null) {
            packagePath = (0, ($parcel$interopDefault($1esxr$path))).join(cwd, "package.json");
            await fs.writeFile(packagePath, "{}");
        }
        let pkg = JSON.parse(await fs.readFile(packagePath, "utf8"));
        let key = saveDev ? "devDependencies" : "dependencies";
        if (!pkg[key]) pkg[key] = {};
        for (let module of modules)pkg[key][module.name] = "^" + await this.installPackage(module, fs, packagePath);
        await fs.writeFile(packagePath, JSON.stringify(pkg));
    }
    async installPackage(moduleRequest, fs, packagePath) {
        let pkg = this.packages.get(moduleRequest.name);
        if (!pkg) throw new Error("Unknown package " + moduleRequest.name);
        let dest = (0, ($parcel$interopDefault($1esxr$path))).join((0, ($parcel$interopDefault($1esxr$path))).dirname(packagePath), "node_modules", moduleRequest.name);
        await (0, $1esxr$parcelfs.ncp)(pkg.fs, pkg.packagePath, fs, dest);
        let packageJSON = JSON.parse(await fs.readFile((0, ($parcel$interopDefault($1esxr$path))).join(dest, "package.json"), "utf8"));
        if (packageJSON.dependencies != null) for (let dep of (0, $12qcL.moduleRequestsFromDependencyMap)(packageJSON.dependencies))await this.installPackage(dep, fs, packagePath);
        return packageJSON.version;
    }
}
(0, $1esxr$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($c9UhD))).version}:MockPackageInstaller`, $96d0d3396b5f903c$export$75a986c28df5fb9b);



var $e6DF1 = parcelRequire("e6DF1");

var $4n1Ez = parcelRequire("4n1Ez");
$parcel$exportWildcard(module.exports, $iTlry);
$parcel$exportWildcard(module.exports, $1dbxg);
$parcel$exportWildcard(module.exports, $2fqsR);
$parcel$exportWildcard(module.exports, $96d0d3396b5f903c$exports);
$parcel$exportWildcard(module.exports, $e6DF1);


//# sourceMappingURL=index.js.map
