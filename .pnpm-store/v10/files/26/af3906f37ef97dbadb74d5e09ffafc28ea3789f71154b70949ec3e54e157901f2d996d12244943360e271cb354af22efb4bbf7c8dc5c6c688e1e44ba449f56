var $ki5hV$path = require("path");
var $ki5hV$stream = require("stream");
var $ki5hV$util = require("util");
var $ki5hV$fs = require("fs");
var $ki5hV$parcelcore = require("@parcel/core");
var $ki5hV$parcelutils = require("@parcel/utils");
var $ki5hV$parcelwatcher = require("@parcel/watcher");
var $ki5hV$parcelfssearch = require("@parcel/fs-search");
var $ki5hV$assert = require("assert");
var $ki5hV$constants = require("constants");
var $ki5hV$parcelworkers = require("@parcel/workers");
var $ki5hV$events = require("events");

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
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
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

$parcel$export(module.exports, "ncp", () => $e46c9778a96a2930$export$d3a8044e3fef7335);



var $10145ab9dc478fed$exports = {};

$parcel$export($10145ab9dc478fed$exports, "NodeFS", () => $10145ab9dc478fed$export$c4e0ef2ab73c21e7);
var $7250854f629b7e00$exports = {};

var $14ed6d859fc43bf5$exports = {};

var $14ed6d859fc43bf5$var$origCwd = process.cwd;
var $14ed6d859fc43bf5$var$cwd = null;
var $14ed6d859fc43bf5$var$platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function() {
    if (!$14ed6d859fc43bf5$var$cwd) $14ed6d859fc43bf5$var$cwd = $14ed6d859fc43bf5$var$origCwd.call(process);
    return $14ed6d859fc43bf5$var$cwd;
};
try {
    process.cwd();
} catch (er) {}
var $14ed6d859fc43bf5$var$chdir = process.chdir;
process.chdir = function(d) {
    $14ed6d859fc43bf5$var$cwd = null;
    $14ed6d859fc43bf5$var$chdir.call(process, d);
};
$14ed6d859fc43bf5$exports = $14ed6d859fc43bf5$var$patch;
function $14ed6d859fc43bf5$var$patch(fs) {
    // (re-)implement some things that are known busted or missing.
    // lchmod, broken prior to 0.6.2
    // back-port the fix here.
    if ($ki5hV$constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) patchLchmod(fs);
    // lutimes implementation, or no-op
    if (!fs.lutimes) patchLutimes(fs);
    // https://github.com/isaacs/node-graceful-fs/issues/4
    // Chown should not fail on einval or eperm if non-root.
    // It should not fail on enosys ever, as this just indicates
    // that a fs doesn't support the intended operation.
    fs.chown = chownFix(fs.chown);
    fs.fchown = chownFix(fs.fchown);
    fs.lchown = chownFix(fs.lchown);
    fs.chmod = chmodFix(fs.chmod);
    fs.fchmod = chmodFix(fs.fchmod);
    fs.lchmod = chmodFix(fs.lchmod);
    fs.chownSync = chownFixSync(fs.chownSync);
    fs.fchownSync = chownFixSync(fs.fchownSync);
    fs.lchownSync = chownFixSync(fs.lchownSync);
    fs.chmodSync = chmodFixSync(fs.chmodSync);
    fs.fchmodSync = chmodFixSync(fs.fchmodSync);
    fs.lchmodSync = chmodFixSync(fs.lchmodSync);
    fs.stat = statFix(fs.stat);
    fs.fstat = statFix(fs.fstat);
    fs.lstat = statFix(fs.lstat);
    fs.statSync = statFixSync(fs.statSync);
    fs.fstatSync = statFixSync(fs.fstatSync);
    fs.lstatSync = statFixSync(fs.lstatSync);
    // if lchmod/lchown do not exist, then make them no-ops
    if (!fs.lchmod) {
        fs.lchmod = function(path, mode, cb) {
            if (cb) process.nextTick(cb);
        };
        fs.lchmodSync = function() {};
    }
    if (!fs.lchown) {
        fs.lchown = function(path, uid, gid, cb) {
            if (cb) process.nextTick(cb);
        };
        fs.lchownSync = function() {};
    }
    // on Windows, A/V software can lock the directory, causing this
    // to fail with an EACCES or EPERM if the directory contains newly
    // created files.  Try again on failure, for up to 60 seconds.
    // Set the timeout this long because some Windows Anti-Virus, such as Parity
    // bit9, may lock files for up to a minute, causing npm package install
    // failures. Also, take care to yield the scheduler. Windows scheduling gives
    // CPU to a busy looping process, which can cause the program causing the lock
    // contention to be starved of CPU by node, so the contention doesn't resolve.
    if ($14ed6d859fc43bf5$var$platform === "win32") fs.rename = function(fs$rename) {
        return function(from, to, cb) {
            var start = Date.now();
            var backoff = 0;
            fs$rename(from, to, function CB(er) {
                if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < 60000) {
                    setTimeout(function() {
                        fs.stat(to, function(stater, st) {
                            if (stater && stater.code === "ENOENT") fs$rename(from, to, CB);
                            else cb(er);
                        });
                    }, backoff);
                    if (backoff < 100) backoff += 10;
                    return;
                }
                if (cb) cb(er);
            });
        };
    }(fs.rename);
    // if read() returns EAGAIN, then just try it again.
    fs.read = function(fs$read) {
        function read(fd, buffer, offset, length, position, callback_) {
            var callback;
            if (callback_ && typeof callback_ === "function") {
                var eagCounter = 0;
                callback = function(er, _, __) {
                    if (er && er.code === "EAGAIN" && eagCounter < 10) {
                        eagCounter++;
                        return fs$read.call(fs, fd, buffer, offset, length, position, callback);
                    }
                    callback_.apply(this, arguments);
                };
            }
            return fs$read.call(fs, fd, buffer, offset, length, position, callback);
        }
        // This ensures `util.promisify` works as it does for native `fs.read`.
        read.__proto__ = fs$read;
        return read;
    }(fs.read);
    fs.readSync = function(fs$readSync) {
        return function(fd, buffer, offset, length, position) {
            var eagCounter = 0;
            while(true)try {
                return fs$readSync.call(fs, fd, buffer, offset, length, position);
            } catch (er) {
                if (er.code === "EAGAIN" && eagCounter < 10) {
                    eagCounter++;
                    continue;
                }
                throw er;
            }
        };
    }(fs.readSync);
    function patchLchmod(fs) {
        fs.lchmod = function(path, mode, callback) {
            fs.open(path, $ki5hV$constants.O_WRONLY | $ki5hV$constants.O_SYMLINK, mode, function(err, fd) {
                if (err) {
                    if (callback) callback(err);
                    return;
                }
                // prefer to return the chmod error, if one occurs,
                // but still try to close, and report closing errors if they occur.
                fs.fchmod(fd, mode, function(err) {
                    fs.close(fd, function(err2) {
                        if (callback) callback(err || err2);
                    });
                });
            });
        };
        fs.lchmodSync = function(path, mode) {
            var fd = fs.openSync(path, $ki5hV$constants.O_WRONLY | $ki5hV$constants.O_SYMLINK, mode);
            // prefer to return the chmod error, if one occurs,
            // but still try to close, and report closing errors if they occur.
            var threw = true;
            var ret;
            try {
                ret = fs.fchmodSync(fd, mode);
                threw = false;
            } finally{
                if (threw) try {
                    fs.closeSync(fd);
                } catch (er) {}
                else fs.closeSync(fd);
            }
            return ret;
        };
    }
    function patchLutimes(fs) {
        if ($ki5hV$constants.hasOwnProperty("O_SYMLINK")) {
            fs.lutimes = function(path, at, mt, cb) {
                fs.open(path, $ki5hV$constants.O_SYMLINK, function(er, fd) {
                    if (er) {
                        if (cb) cb(er);
                        return;
                    }
                    fs.futimes(fd, at, mt, function(er) {
                        fs.close(fd, function(er2) {
                            if (cb) cb(er || er2);
                        });
                    });
                });
            };
            fs.lutimesSync = function(path, at, mt) {
                var fd = fs.openSync(path, $ki5hV$constants.O_SYMLINK);
                var ret;
                var threw = true;
                try {
                    ret = fs.futimesSync(fd, at, mt);
                    threw = false;
                } finally{
                    if (threw) try {
                        fs.closeSync(fd);
                    } catch (er) {}
                    else fs.closeSync(fd);
                }
                return ret;
            };
        } else {
            fs.lutimes = function(_a, _b, _c, cb) {
                if (cb) process.nextTick(cb);
            };
            fs.lutimesSync = function() {};
        }
    }
    function chmodFix(orig) {
        if (!orig) return orig;
        return function(target, mode, cb) {
            return orig.call(fs, target, mode, function(er) {
                if (chownErOk(er)) er = null;
                if (cb) cb.apply(this, arguments);
            });
        };
    }
    function chmodFixSync(orig) {
        if (!orig) return orig;
        return function(target, mode) {
            try {
                return orig.call(fs, target, mode);
            } catch (er) {
                if (!chownErOk(er)) throw er;
            }
        };
    }
    function chownFix(orig) {
        if (!orig) return orig;
        return function(target, uid, gid, cb) {
            return orig.call(fs, target, uid, gid, function(er) {
                if (chownErOk(er)) er = null;
                if (cb) cb.apply(this, arguments);
            });
        };
    }
    function chownFixSync(orig) {
        if (!orig) return orig;
        return function(target, uid, gid) {
            try {
                return orig.call(fs, target, uid, gid);
            } catch (er) {
                if (!chownErOk(er)) throw er;
            }
        };
    }
    function statFix(orig) {
        if (!orig) return orig;
        // Older versions of Node erroneously returned signed integers for
        // uid + gid.
        return function(target, options, cb) {
            if (typeof options === "function") {
                cb = options;
                options = null;
            }
            function callback(er, stats) {
                if (stats) {
                    if (stats.uid < 0) stats.uid += 0x100000000;
                    if (stats.gid < 0) stats.gid += 0x100000000;
                }
                if (cb) cb.apply(this, arguments);
            }
            return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
        };
    }
    function statFixSync(orig) {
        if (!orig) return orig;
        // Older versions of Node erroneously returned signed integers for
        // uid + gid.
        return function(target, options) {
            var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);
            if (stats.uid < 0) stats.uid += 0x100000000;
            if (stats.gid < 0) stats.gid += 0x100000000;
            return stats;
        };
    }
    // ENOSYS means that the fs doesn't support the op. Just ignore
    // that, because it doesn't matter.
    //
    // if there's no getuid, or if getuid() is something other
    // than 0, and the error is EINVAL or EPERM, then just ignore
    // it.
    //
    // This specific case is a silent failure in cp, install, tar,
    // and most other unix tools that manage permissions.
    //
    // When running as root, or if other types of errors are
    // encountered, then it's strict.
    function chownErOk(er) {
        if (!er) return true;
        if (er.code === "ENOSYS") return true;
        var nonroot = !process.getuid || process.getuid() !== 0;
        if (nonroot) {
            if (er.code === "EINVAL" || er.code === "EPERM") return true;
        }
        return false;
    }
}


var $ec8337b8453e4d66$exports = {};

var $ec8337b8453e4d66$require$Stream = $ki5hV$stream.Stream;
$ec8337b8453e4d66$exports = $ec8337b8453e4d66$var$legacy;
function $ec8337b8453e4d66$var$legacy(fs) {
    return {
        ReadStream: ReadStream,
        WriteStream: WriteStream
    };
    function ReadStream(path, options) {
        if (!(this instanceof ReadStream)) return new ReadStream(path, options);
        $ec8337b8453e4d66$require$Stream.call(this);
        var self = this;
        this.path = path;
        this.fd = null;
        this.readable = true;
        this.paused = false;
        this.flags = "r";
        this.mode = 438; /*=0666*/ 
        this.bufferSize = 65536;
        options = options || {};
        // Mixin options into this
        var keys = Object.keys(options);
        for(var index = 0, length = keys.length; index < length; index++){
            var key = keys[index];
            this[key] = options[key];
        }
        if (this.encoding) this.setEncoding(this.encoding);
        if (this.start !== undefined) {
            if ("number" !== typeof this.start) throw TypeError("start must be a Number");
            if (this.end === undefined) this.end = Infinity;
            else if ("number" !== typeof this.end) throw TypeError("end must be a Number");
            if (this.start > this.end) throw new Error("start must be <= end");
            this.pos = this.start;
        }
        if (this.fd !== null) {
            process.nextTick(function() {
                self._read();
            });
            return;
        }
        fs.open(this.path, this.flags, this.mode, function(err, fd) {
            if (err) {
                self.emit("error", err);
                self.readable = false;
                return;
            }
            self.fd = fd;
            self.emit("open", fd);
            self._read();
        });
    }
    function WriteStream(path, options) {
        if (!(this instanceof WriteStream)) return new WriteStream(path, options);
        $ec8337b8453e4d66$require$Stream.call(this);
        this.path = path;
        this.fd = null;
        this.writable = true;
        this.flags = "w";
        this.encoding = "binary";
        this.mode = 438; /*=0666*/ 
        this.bytesWritten = 0;
        options = options || {};
        // Mixin options into this
        var keys = Object.keys(options);
        for(var index = 0, length = keys.length; index < length; index++){
            var key = keys[index];
            this[key] = options[key];
        }
        if (this.start !== undefined) {
            if ("number" !== typeof this.start) throw TypeError("start must be a Number");
            if (this.start < 0) throw new Error("start must be >= zero");
            this.pos = this.start;
        }
        this.busy = false;
        this._queue = [];
        if (this.fd === null) {
            this._open = fs.open;
            this._queue.push([
                this._open,
                this.path,
                this.flags,
                this.mode,
                undefined
            ]);
            this.flush();
        }
    }
}


var $142b189e92f6750b$exports = {};
"use strict";
$142b189e92f6750b$exports = $142b189e92f6750b$var$clone;
function $142b189e92f6750b$var$clone(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (obj instanceof Object) var copy = {
        __proto__: obj.__proto__
    };
    else var copy = Object.create(null);
    Object.getOwnPropertyNames(obj).forEach(function(key) {
        Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
    });
    return copy;
}



/* istanbul ignore next - node 0.x polyfill */ var $7250854f629b7e00$var$gracefulQueue;
var $7250854f629b7e00$var$previousSymbol;
/* istanbul ignore else - node 0.x polyfill */ if (typeof Symbol === "function" && typeof Symbol.for === "function") {
    $7250854f629b7e00$var$gracefulQueue = Symbol.for("graceful-fs.queue");
    // This is used in testing by future versions
    $7250854f629b7e00$var$previousSymbol = Symbol.for("graceful-fs.previous");
} else {
    $7250854f629b7e00$var$gracefulQueue = "___graceful-fs.queue";
    $7250854f629b7e00$var$previousSymbol = "___graceful-fs.previous";
}
function $7250854f629b7e00$var$noop() {}
function $7250854f629b7e00$var$publishQueue(context, queue) {
    Object.defineProperty(context, $7250854f629b7e00$var$gracefulQueue, {
        get: function() {
            return queue;
        }
    });
}
var $7250854f629b7e00$var$debug = $7250854f629b7e00$var$noop;
if ($ki5hV$util.debuglog) $7250854f629b7e00$var$debug = $ki5hV$util.debuglog("gfs4");
else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) $7250854f629b7e00$var$debug = function() {
    var m = $ki5hV$util.format.apply($ki5hV$util, arguments);
    m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
    console.error(m);
};

// Once time initialization
if (!$ki5hV$fs[$7250854f629b7e00$var$gracefulQueue]) {
    // This queue can be shared by multiple loaded instances
    var $7250854f629b7e00$var$queue = $parcel$global[$7250854f629b7e00$var$gracefulQueue] || [];
    $7250854f629b7e00$var$publishQueue($ki5hV$fs, $7250854f629b7e00$var$queue);
    // Patch fs.close/closeSync to shared queue version, because we need
    // to retry() whenever a close happens *anywhere* in the program.
    // This is essential when multiple graceful-fs instances are
    // in play at the same time.
    $ki5hV$fs.close = function(fs$close) {
        function close(fd, cb) {
            return fs$close.call($ki5hV$fs, fd, function(err) {
                // This function uses the graceful-fs shared queue
                if (!err) $7250854f629b7e00$var$retry();
                if (typeof cb === "function") cb.apply(this, arguments);
            });
        }
        Object.defineProperty(close, $7250854f629b7e00$var$previousSymbol, {
            value: fs$close
        });
        return close;
    }($ki5hV$fs.close);
    $ki5hV$fs.closeSync = function(fs$closeSync) {
        function closeSync(fd) {
            // This function uses the graceful-fs shared queue
            fs$closeSync.apply($ki5hV$fs, arguments);
            $7250854f629b7e00$var$retry();
        }
        Object.defineProperty(closeSync, $7250854f629b7e00$var$previousSymbol, {
            value: fs$closeSync
        });
        return closeSync;
    }($ki5hV$fs.closeSync);
    if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) process.on("exit", function() {
        $7250854f629b7e00$var$debug($ki5hV$fs[$7250854f629b7e00$var$gracefulQueue]);
        $ki5hV$assert.equal($ki5hV$fs[$7250854f629b7e00$var$gracefulQueue].length, 0);
    });
}
if (!$parcel$global[$7250854f629b7e00$var$gracefulQueue]) $7250854f629b7e00$var$publishQueue($parcel$global, $ki5hV$fs[$7250854f629b7e00$var$gracefulQueue]);
$7250854f629b7e00$exports = $7250854f629b7e00$var$patch($142b189e92f6750b$exports($ki5hV$fs));
if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !$ki5hV$fs.__patched) {
    $7250854f629b7e00$exports = $7250854f629b7e00$var$patch($ki5hV$fs);
    $ki5hV$fs.__patched = true;
}
function $7250854f629b7e00$var$patch(fs) {
    // Everything that references the open() function needs to be in here
    $14ed6d859fc43bf5$exports(fs);
    fs.gracefulify = $7250854f629b7e00$var$patch;
    fs.createReadStream = createReadStream;
    fs.createWriteStream = createWriteStream;
    var fs$readFile = fs.readFile;
    fs.readFile = readFile;
    function readFile(path, options, cb) {
        if (typeof options === "function") cb = options, options = null;
        return go$readFile(path, options, cb);
        function go$readFile(path, options, cb) {
            return fs$readFile(path, options, function(err) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE")) $7250854f629b7e00$var$enqueue([
                    go$readFile,
                    [
                        path,
                        options,
                        cb
                    ]
                ]);
                else {
                    if (typeof cb === "function") cb.apply(this, arguments);
                    $7250854f629b7e00$var$retry();
                }
            });
        }
    }
    var fs$writeFile = fs.writeFile;
    fs.writeFile = writeFile;
    function writeFile(path, data, options, cb) {
        if (typeof options === "function") cb = options, options = null;
        return go$writeFile(path, data, options, cb);
        function go$writeFile(path, data, options, cb) {
            return fs$writeFile(path, data, options, function(err) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE")) $7250854f629b7e00$var$enqueue([
                    go$writeFile,
                    [
                        path,
                        data,
                        options,
                        cb
                    ]
                ]);
                else {
                    if (typeof cb === "function") cb.apply(this, arguments);
                    $7250854f629b7e00$var$retry();
                }
            });
        }
    }
    var fs$appendFile = fs.appendFile;
    if (fs$appendFile) fs.appendFile = appendFile;
    function appendFile(path, data, options, cb) {
        if (typeof options === "function") cb = options, options = null;
        return go$appendFile(path, data, options, cb);
        function go$appendFile(path, data, options, cb) {
            return fs$appendFile(path, data, options, function(err) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE")) $7250854f629b7e00$var$enqueue([
                    go$appendFile,
                    [
                        path,
                        data,
                        options,
                        cb
                    ]
                ]);
                else {
                    if (typeof cb === "function") cb.apply(this, arguments);
                    $7250854f629b7e00$var$retry();
                }
            });
        }
    }
    var fs$readdir = fs.readdir;
    fs.readdir = readdir;
    function readdir(path, options, cb) {
        var args = [
            path
        ];
        if (typeof options !== "function") args.push(options);
        else cb = options;
        args.push(go$readdir$cb);
        return go$readdir(args);
        function go$readdir$cb(err, files) {
            if (files && files.sort) files.sort();
            if (err && (err.code === "EMFILE" || err.code === "ENFILE")) $7250854f629b7e00$var$enqueue([
                go$readdir,
                [
                    args
                ]
            ]);
            else {
                if (typeof cb === "function") cb.apply(this, arguments);
                $7250854f629b7e00$var$retry();
            }
        }
    }
    function go$readdir(args) {
        return fs$readdir.apply(fs, args);
    }
    if (process.version.substr(0, 4) === "v0.8") {
        var legStreams = $ec8337b8453e4d66$exports(fs);
        ReadStream = legStreams.ReadStream;
        WriteStream = legStreams.WriteStream;
    }
    var fs$ReadStream = fs.ReadStream;
    if (fs$ReadStream) {
        ReadStream.prototype = Object.create(fs$ReadStream.prototype);
        ReadStream.prototype.open = ReadStream$open;
    }
    var fs$WriteStream = fs.WriteStream;
    if (fs$WriteStream) {
        WriteStream.prototype = Object.create(fs$WriteStream.prototype);
        WriteStream.prototype.open = WriteStream$open;
    }
    Object.defineProperty(fs, "ReadStream", {
        get: function() {
            return ReadStream;
        },
        set: function(val) {
            ReadStream = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fs, "WriteStream", {
        get: function() {
            return WriteStream;
        },
        set: function(val) {
            WriteStream = val;
        },
        enumerable: true,
        configurable: true
    });
    // legacy names
    var FileReadStream = ReadStream;
    Object.defineProperty(fs, "FileReadStream", {
        get: function() {
            return FileReadStream;
        },
        set: function(val) {
            FileReadStream = val;
        },
        enumerable: true,
        configurable: true
    });
    var FileWriteStream = WriteStream;
    Object.defineProperty(fs, "FileWriteStream", {
        get: function() {
            return FileWriteStream;
        },
        set: function(val) {
            FileWriteStream = val;
        },
        enumerable: true,
        configurable: true
    });
    function ReadStream(path, options) {
        if (this instanceof ReadStream) return fs$ReadStream.apply(this, arguments), this;
        else return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
    }
    function ReadStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
                if (that.autoClose) that.destroy();
                that.emit("error", err);
            } else {
                that.fd = fd;
                that.emit("open", fd);
                that.read();
            }
        });
    }
    function WriteStream(path, options) {
        if (this instanceof WriteStream) return fs$WriteStream.apply(this, arguments), this;
        else return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
    }
    function WriteStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
                that.destroy();
                that.emit("error", err);
            } else {
                that.fd = fd;
                that.emit("open", fd);
            }
        });
    }
    function createReadStream(path, options) {
        return new fs.ReadStream(path, options);
    }
    function createWriteStream(path, options) {
        return new fs.WriteStream(path, options);
    }
    var fs$open = fs.open;
    fs.open = open;
    function open(path, flags, mode, cb) {
        if (typeof mode === "function") cb = mode, mode = null;
        return go$open(path, flags, mode, cb);
        function go$open(path, flags, mode, cb) {
            return fs$open(path, flags, mode, function(err, fd) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE")) $7250854f629b7e00$var$enqueue([
                    go$open,
                    [
                        path,
                        flags,
                        mode,
                        cb
                    ]
                ]);
                else {
                    if (typeof cb === "function") cb.apply(this, arguments);
                    $7250854f629b7e00$var$retry();
                }
            });
        }
    }
    return fs;
}
function $7250854f629b7e00$var$enqueue(elem) {
    $7250854f629b7e00$var$debug("ENQUEUE", elem[0].name, elem[1]);
    $ki5hV$fs[$7250854f629b7e00$var$gracefulQueue].push(elem);
}
function $7250854f629b7e00$var$retry() {
    var elem = $ki5hV$fs[$7250854f629b7e00$var$gracefulQueue].shift();
    if (elem) {
        $7250854f629b7e00$var$debug("RETRY", elem[0].name, elem[1]);
        elem[0].apply(null, elem[1]);
    }
}



var $48fc3d56c5dfadb2$exports = {};


$48fc3d56c5dfadb2$exports = $48fc3d56c5dfadb2$var$ncp;
$48fc3d56c5dfadb2$var$ncp.ncp = $48fc3d56c5dfadb2$var$ncp;
function $48fc3d56c5dfadb2$var$ncp(source, dest, options, callback) {
    var cback = callback;
    if (!callback) {
        cback = options;
        options = {};
    }
    var basePath = process.cwd(), currentPath = $ki5hV$path.resolve(basePath, source), targetPath = $ki5hV$path.resolve(basePath, dest), filter = options.filter, rename = options.rename, transform = options.transform, clobber = options.clobber !== false, modified = options.modified, dereference = options.dereference, errs = null, started = 0, finished = 0, running = 0, limit = options.limit || $48fc3d56c5dfadb2$var$ncp.limit || 16;
    limit = limit < 1 ? 1 : limit > 512 ? 512 : limit;
    startCopy(currentPath);
    function startCopy(source) {
        started++;
        if (filter) {
            if (filter instanceof RegExp) {
                if (!filter.test(source)) return cb(true);
            } else if (typeof filter === "function") {
                if (!filter(source)) return cb(true);
            }
        }
        return getStats(source);
    }
    function getStats(source) {
        var stat = dereference ? $ki5hV$fs.stat : $ki5hV$fs.lstat;
        if (running >= limit) return setImmediate(function() {
            getStats(source);
        });
        running++;
        stat(source, function(err, stats) {
            var item = {};
            if (err) return onError(err);
            // We need to get the mode from the stats object and preserve it.
            item.name = source;
            item.mode = stats.mode;
            item.mtime = stats.mtime; //modified time
            item.atime = stats.atime; //access time
            if (stats.isDirectory()) return onDir(item);
            else if (stats.isFile()) return onFile(item);
            else if (stats.isSymbolicLink()) // Symlinks don't really need to know about the mode.
            return onLink(source);
        });
    }
    function onFile(file) {
        var target = file.name.replace(currentPath, targetPath);
        if (rename) target = rename(target);
        isWritable(target, function(writable) {
            if (writable) return copyFile(file, target);
            if (clobber) rmFile(target, function() {
                copyFile(file, target);
            });
            if (modified) {
                var stat = dereference ? $ki5hV$fs.stat : $ki5hV$fs.lstat;
                stat(target, function(err, stats) {
                    //if souce modified time greater to target modified time copy file
                    if (file.mtime.getTime() > stats.mtime.getTime()) copyFile(file, target);
                    else return cb();
                });
            } else return cb();
        });
    }
    function copyFile(file, target) {
        var readStream = $ki5hV$fs.createReadStream(file.name), writeStream = $ki5hV$fs.createWriteStream(target, {
            mode: file.mode
        });
        readStream.on("error", onError);
        writeStream.on("error", onError);
        if (transform) transform(readStream, writeStream, file);
        else writeStream.on("open", function() {
            readStream.pipe(writeStream);
        });
        writeStream.once("finish", function() {
            if (modified) {
                //target file modified date sync.
                $ki5hV$fs.utimesSync(target, file.atime, file.mtime);
                cb();
            } else cb();
        });
    }
    function rmFile(file, done) {
        $ki5hV$fs.unlink(file, function(err) {
            if (err) return onError(err);
            return done();
        });
    }
    function onDir(dir) {
        var target = dir.name.replace(currentPath, targetPath);
        isWritable(target, function(writable) {
            if (writable) return mkDir(dir, target);
            copyDir(dir.name);
        });
    }
    function mkDir(dir, target) {
        $ki5hV$fs.mkdir(target, dir.mode, function(err) {
            if (err) return onError(err);
            copyDir(dir.name);
        });
    }
    function copyDir(dir) {
        $ki5hV$fs.readdir(dir, function(err, items) {
            if (err) return onError(err);
            items.forEach(function(item) {
                startCopy($ki5hV$path.join(dir, item));
            });
            return cb();
        });
    }
    function onLink(link) {
        var target = link.replace(currentPath, targetPath);
        $ki5hV$fs.readlink(link, function(err, resolvedPath) {
            if (err) return onError(err);
            checkLink(resolvedPath, target);
        });
    }
    function checkLink(resolvedPath, target) {
        if (dereference) resolvedPath = $ki5hV$path.resolve(basePath, resolvedPath);
        isWritable(target, function(writable) {
            if (writable) return makeLink(resolvedPath, target);
            $ki5hV$fs.readlink(target, function(err, targetDest) {
                if (err) return onError(err);
                if (dereference) targetDest = $ki5hV$path.resolve(basePath, targetDest);
                if (targetDest === resolvedPath) return cb();
                return rmFile(target, function() {
                    makeLink(resolvedPath, target);
                });
            });
        });
    }
    function makeLink(linkPath, target) {
        $ki5hV$fs.symlink(linkPath, target, function(err) {
            if (err) return onError(err);
            return cb();
        });
    }
    function isWritable(path, done) {
        $ki5hV$fs.lstat(path, function(err) {
            if (err) {
                if (err.code === "ENOENT") return done(true);
                return done(false);
            }
            return done(false);
        });
    }
    function onError(err) {
        if (options.stopOnError) return cback(err);
        else if (!errs && options.errs) errs = $ki5hV$fs.createWriteStream(options.errs);
        else if (!errs) errs = [];
        if (typeof errs.write === "undefined") errs.push(err);
        else errs.write(err.stack + "\n\n");
        return cb();
    }
    function cb(skipped) {
        if (!skipped) running--;
        finished++;
        if (started === finished && running === 0) {
            if (cback !== undefined) return errs ? cback(errs) : cback(null);
        }
    }
}






var $46772b835b3d1aed$exports = {};
$46772b835b3d1aed$exports = JSON.parse('{"name":"@parcel/fs","version":"2.8.3","description":"Blazing fast, zero configuration web application bundler","license":"MIT","publishConfig":{"access":"public"},"funding":{"type":"opencollective","url":"https://opencollective.com/parcel"},"repository":{"type":"git","url":"https://github.com/parcel-bundler/parcel.git"},"main":"lib/index.js","source":"src/index.js","types":"index.d.ts","engines":{"node":">= 12.0.0"},"targets":{"types":false,"main":{"includeNodeModules":{"@parcel/core":false,"@parcel/fs-search":false,"@parcel/types":false,"@parcel/utils":false,"@parcel/watcher":false,"@parcel/workers":false}},"browser":{"includeNodeModules":{"@parcel/core":false,"@parcel/fs-search":false,"@parcel/types":false,"@parcel/utils":false,"@parcel/watcher":false,"@parcel/workers":false}}},"scripts":{"build-ts":"mkdir -p lib && flow-to-ts src/types.js > lib/types.d.ts","check-ts":"tsc --noEmit index.d.ts"},"dependencies":{"@parcel/fs-search":"2.8.3","@parcel/types":"2.8.3","@parcel/utils":"2.8.3","@parcel/watcher":"^2.0.7","@parcel/workers":"2.8.3"},"devDependencies":{"graceful-fs":"^4.2.4","ncp":"^2.0.0","nullthrows":"^1.1.1","utility-types":"^3.10.0"},"peerDependencies":{"@parcel/core":"^2.8.3"},"browser":{"@parcel/fs":"./lib/browser.js","./src/NodeFS.js":"./src/NodeFS.browser.js"},"gitHead":"349a6caf40ec8abb6a49fcae0765f8f8deb2073d"}');




function $792f6c711e82470e$export$4c6d088a7d7f9947(fs, moduleName, dir) {
    let { root: root  } = (0, ($parcel$interopDefault($ki5hV$path))).parse(dir);
    while(dir !== root){
        // Skip node_modules directories
        if ((0, ($parcel$interopDefault($ki5hV$path))).basename(dir) === "node_modules") dir = (0, ($parcel$interopDefault($ki5hV$path))).dirname(dir);
        try {
            let moduleDir = (0, ($parcel$interopDefault($ki5hV$path))).join(dir, "node_modules", moduleName);
            let stats = fs.statSync(moduleDir);
            if (stats.isDirectory()) return moduleDir;
        } catch (err) {} // Move up a directory
        dir = (0, ($parcel$interopDefault($ki5hV$path))).dirname(dir);
    }
    return null;
}
function $792f6c711e82470e$export$d51a93c758976388(fs, fileNames, dir, root) {
    let { root: pathRoot  } = (0, ($parcel$interopDefault($ki5hV$path))).parse(dir); // eslint-disable-next-line no-constant-condition
    while(true){
        if ((0, ($parcel$interopDefault($ki5hV$path))).basename(dir) === "node_modules") return null;
        for (const fileName of fileNames){
            let filePath = (0, ($parcel$interopDefault($ki5hV$path))).join(dir, fileName);
            try {
                if (fs.statSync(filePath).isFile()) return filePath;
            } catch (err) {}
        }
        if (dir === root || dir === pathRoot) break;
        dir = (0, ($parcel$interopDefault($ki5hV$path))).dirname(dir);
    }
    return null;
}
function $792f6c711e82470e$export$64df6e3182fd5b2d(fs, filePaths) {
    for (let filePath of filePaths)try {
        if (fs.statSync(filePath).isFile()) return filePath;
    } catch (err) {}
}


// require('fs').promises
const $10145ab9dc478fed$var$realpath = (0, $ki5hV$util.promisify)(process.platform === "win32" ? (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).realpath : (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).realpath.native);
const $10145ab9dc478fed$var$isPnP = process.versions.pnp != null;
class $10145ab9dc478fed$export$c4e0ef2ab73c21e7 {
    readFile = (0, $ki5hV$util.promisify)((0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).readFile);
    copyFile = (0, $ki5hV$util.promisify)((0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).copyFile);
    stat = (0, $ki5hV$util.promisify)((0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).stat);
    readdir = (0, $ki5hV$util.promisify)((0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).readdir);
    unlink = (0, $ki5hV$util.promisify)((0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).unlink);
    utimes = (0, $ki5hV$util.promisify)((0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).utimes);
    ncp = (0, $ki5hV$util.promisify)((0, (/*@__PURE__*/$parcel$interopDefault($48fc3d56c5dfadb2$exports))));
    createReadStream = (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).createReadStream;
    cwd = ()=>process.cwd();
    chdir = (directory)=>process.chdir(directory);
    statSync = (path)=>(0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).statSync(path);
    realpathSync = process.platform === "win32" ? (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).realpathSync : (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).realpathSync.native;
    existsSync = (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).existsSync;
    readdirSync = (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).readdirSync;
    findAncestorFile = $10145ab9dc478fed$var$isPnP ? (...args)=>$792f6c711e82470e$export$d51a93c758976388(this, ...args) : $ki5hV$parcelfssearch.findAncestorFile;
    findNodeModule = $10145ab9dc478fed$var$isPnP ? (...args)=>$792f6c711e82470e$export$4c6d088a7d7f9947(this, ...args) : $ki5hV$parcelfssearch.findNodeModule;
    findFirstFile = $10145ab9dc478fed$var$isPnP ? (...args)=>$792f6c711e82470e$export$64df6e3182fd5b2d(this, ...args) : $ki5hV$parcelfssearch.findFirstFile;
    createWriteStream(filePath, options) {
        // Make createWriteStream atomic
        let tmpFilePath = $10145ab9dc478fed$var$getTempFilePath(filePath);
        let failed = false;
        const move = async ()=>{
            if (!failed) try {
                await (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).promises.rename(tmpFilePath, filePath);
            } catch (e) {
                // This is adapted from fs-write-stream-atomic. Apparently
                // Windows doesn't like renaming when the target already exists.
                if (process.platform === "win32" && e.syscall && e.syscall === "rename" && e.code && e.code === "EPERM") {
                    let [hashTmp, hashTarget] = await Promise.all([
                        (0, $ki5hV$parcelutils.hashFile)(this, tmpFilePath),
                        (0, $ki5hV$parcelutils.hashFile)(this, filePath)
                    ]);
                    await this.unlink(tmpFilePath);
                    if (hashTmp != hashTarget) throw e;
                }
            }
        };
        let writeStream = (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).createWriteStream(tmpFilePath, {
            ...options,
            fs: {
                ...(0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))),
                close: (fd, cb)=>{
                    (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).close(fd, (err)=>{
                        if (err) cb(err);
                        else move().then(()=>cb(), (err)=>cb(err));
                    });
                }
            }
        });
        writeStream.once("error", ()=>{
            failed = true;
            (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).unlinkSync(tmpFilePath);
        });
        return writeStream;
    }
    async writeFile(filePath, contents, options) {
        let tmpFilePath = $10145ab9dc478fed$var$getTempFilePath(filePath);
        await (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).promises.writeFile(tmpFilePath, contents, options);
        await (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).promises.rename(tmpFilePath, filePath);
    }
    readFileSync(filePath, encoding) {
        if (encoding != null) return (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).readFileSync(filePath, encoding);
        return (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).readFileSync(filePath);
    }
    async realpath(originalPath) {
        try {
            return await $10145ab9dc478fed$var$realpath(originalPath, "utf8");
        } catch (e) {}
        return originalPath;
    }
    exists(filePath) {
        return new Promise((resolve)=>{
            (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).exists(filePath, resolve);
        });
    }
    watch(dir, fn, opts) {
        return (0, ($parcel$interopDefault($ki5hV$parcelwatcher))).subscribe(dir, fn, opts);
    }
    getEventsSince(dir, snapshot, opts) {
        return (0, ($parcel$interopDefault($ki5hV$parcelwatcher))).getEventsSince(dir, snapshot, opts);
    }
    async writeSnapshot(dir, snapshot, opts) {
        await (0, ($parcel$interopDefault($ki5hV$parcelwatcher))).writeSnapshot(dir, snapshot, opts);
    }
    static deserialize() {
        return new $10145ab9dc478fed$export$c4e0ef2ab73c21e7();
    }
    serialize() {
        return null;
    }
    async mkdirp(filePath) {
        await (0, ($parcel$interopDefault($ki5hV$fs))).promises.mkdir(filePath, {
            recursive: true
        });
    }
    async rimraf(filePath) {
        if ((0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).promises.rm) {
            await (0, (/*@__PURE__*/$parcel$interopDefault($7250854f629b7e00$exports))).promises.rm(filePath, {
                recursive: true,
                force: true
            });
            return;
        } // fs.promises.rm is not supported in node 12...
        let stat;
        try {
            stat = await this.stat(filePath);
        } catch (err) {
            return;
        }
        if (stat.isDirectory()) // $FlowFixMe
        await (0, ($parcel$interopDefault($ki5hV$fs))).promises.rmdir(filePath, {
            recursive: true
        });
        else await (0, ($parcel$interopDefault($ki5hV$fs))).promises.unlink(filePath);
    }
}
(0, $ki5hV$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($46772b835b3d1aed$exports))).version}:NodeFS`, $10145ab9dc478fed$export$c4e0ef2ab73c21e7);
let $10145ab9dc478fed$var$writeStreamCalls = 0;
let $10145ab9dc478fed$var$threadId;

try {
    ({ threadId: $10145ab9dc478fed$var$threadId  } = $10145ab9dc478fed$import$2888fe9c5f7c1231);
} catch  {} // Generate a temporary file path used for atomic writing of files.
function $10145ab9dc478fed$var$getTempFilePath(filePath) {
    $10145ab9dc478fed$var$writeStreamCalls = $10145ab9dc478fed$var$writeStreamCalls % Number.MAX_SAFE_INTEGER;
    return filePath + "." + process.pid + ($10145ab9dc478fed$var$threadId != null ? "." + $10145ab9dc478fed$var$threadId : "") + "." + ($10145ab9dc478fed$var$writeStreamCalls++).toString(36);
}


var $86a3ba4eb3a17970$exports = {};

$parcel$export($86a3ba4eb3a17970$exports, "MemoryFS", () => $86a3ba4eb3a17970$export$3048eb7ec07c2c4e);






var $2342a1a76ff50050$exports = {};
"use strict";
function $2342a1a76ff50050$var$nullthrows(x, message) {
    if (x != null) return x;
    var error = new Error(message !== undefined ? message : "Got unexpected " + x);
    error.framesToPop = 1; // Skip nullthrows's own stack frame.
    throw error;
}
$2342a1a76ff50050$exports = $2342a1a76ff50050$var$nullthrows;
$2342a1a76ff50050$exports.default = $2342a1a76ff50050$var$nullthrows;
Object.defineProperty($2342a1a76ff50050$exports, "__esModule", {
    value: true
});




const $86a3ba4eb3a17970$var$instances = new Map();
let $86a3ba4eb3a17970$var$id = 0;
class $86a3ba4eb3a17970$export$3048eb7ec07c2c4e {
    _numWorkerInstances = 0;
    _workerRegisterResolves = [];
    _emitter = new (0, ($parcel$interopDefault($ki5hV$events)))();
    constructor(workerFarm){
        this.farm = workerFarm;
        this.dirs = new Map([
            [
                "/",
                new $86a3ba4eb3a17970$var$Directory()
            ]
        ]);
        this.files = new Map();
        this.symlinks = new Map();
        this.watchers = new Map();
        this.events = [];
        this.id = $86a3ba4eb3a17970$var$id++;
        this._cwd = "/";
        this._workerHandles = [];
        this._eventQueue = [];
        $86a3ba4eb3a17970$var$instances.set(this.id, this);
        this._emitter.on("allWorkersRegistered", ()=>{
            for (let resolve of this._workerRegisterResolves)resolve();
            this._workerRegisterResolves = [];
        });
    }
    static deserialize(opts) {
        let existing = $86a3ba4eb3a17970$var$instances.get(opts.id);
        if (existing != null) {
            // Correct the count of worker instances since serialization assumes a new instance is created
            (0, ($parcel$interopDefault($ki5hV$parcelworkers))).getWorkerApi().runHandle(opts.handle, [
                "decrementWorkerInstance",
                []
            ]);
            return existing;
        }
        let fs = new $86a3ba4eb3a17970$var$WorkerFS(opts.id, (0, (/*@__PURE__*/$parcel$interopDefault($2342a1a76ff50050$exports)))(opts.handle));
        fs.dirs = opts.dirs;
        fs.files = opts.files;
        fs.symlinks = opts.symlinks;
        return fs;
    }
    serialize() {
        if (!this.handle) this.handle = this.farm.createReverseHandle((fn, args)=>{
            // $FlowFixMe
            return this[fn](...args);
        });
         // If a worker instance already exists, it will decrement this number
        this._numWorkerInstances++;
        return {
            $$raw: false,
            id: this.id,
            handle: this.handle,
            dirs: this.dirs,
            files: this.files,
            symlinks: this.symlinks
        };
    }
    decrementWorkerInstance() {
        this._numWorkerInstances--;
        if (this._numWorkerInstances === this._workerHandles.length) this._emitter.emit("allWorkersRegistered");
    }
    cwd() {
        return this._cwd;
    }
    chdir(dir) {
        this._cwd = dir;
    }
    _normalizePath(filePath, realpath = true) {
        filePath = (0, ($parcel$interopDefault($ki5hV$path))).resolve(this.cwd(), filePath); // get realpath by following symlinks
        if (realpath) {
            let { root: root , dir: dir , base: base  } = (0, ($parcel$interopDefault($ki5hV$path))).parse(filePath);
            let parts = dir.slice(root.length).split((0, ($parcel$interopDefault($ki5hV$path))).sep).concat(base);
            let res = root;
            for (let part of parts){
                res = (0, ($parcel$interopDefault($ki5hV$path))).join(res, part);
                let symlink = this.symlinks.get(res);
                if (symlink) res = symlink;
            }
            return res;
        }
        return filePath;
    }
    async writeFile(filePath, contents, options) {
        filePath = this._normalizePath(filePath);
        if (this.dirs.has(filePath)) throw new $86a3ba4eb3a17970$var$FSError("EISDIR", filePath, "is a directory");
        let dir = (0, ($parcel$interopDefault($ki5hV$path))).dirname(filePath);
        if (!this.dirs.has(dir)) throw new $86a3ba4eb3a17970$var$FSError("ENOENT", dir, "does not exist");
        let buffer = $86a3ba4eb3a17970$var$makeShared(contents);
        let file = this.files.get(filePath);
        let mode = options && options.mode || 438;
        if (file) {
            file.write(buffer, mode);
            this.files.set(filePath, file);
        } else this.files.set(filePath, new $86a3ba4eb3a17970$var$File(buffer, mode));
        await this._sendWorkerEvent({
            type: "writeFile",
            path: filePath,
            entry: this.files.get(filePath)
        });
        this._triggerEvent({
            type: file ? "update" : "create",
            path: filePath
        });
    }
    async readFile(filePath, encoding) {
        return this.readFileSync(filePath, encoding);
    }
    readFileSync(filePath, encoding) {
        filePath = this._normalizePath(filePath);
        let file = this.files.get(filePath);
        if (file == null) throw new $86a3ba4eb3a17970$var$FSError("ENOENT", filePath, "does not exist");
        let buffer = file.read();
        if (encoding) return buffer.toString(encoding);
        return buffer;
    }
    async copyFile(source, destination) {
        let contents = await this.readFile(source);
        await this.writeFile(destination, contents);
    }
    statSync(filePath) {
        filePath = this._normalizePath(filePath);
        let dir = this.dirs.get(filePath);
        if (dir) return dir.stat();
        let file = this.files.get(filePath);
        if (file == null) throw new $86a3ba4eb3a17970$var$FSError("ENOENT", filePath, "does not exist");
        return file.stat();
    }
    async stat(filePath) {
        return this.statSync(filePath);
    }
    readdirSync(dir, opts) {
        dir = this._normalizePath(dir);
        if (!this.dirs.has(dir)) throw new $86a3ba4eb3a17970$var$FSError("ENOENT", dir, "does not exist");
        dir += (0, ($parcel$interopDefault($ki5hV$path))).sep;
        let res = [];
        for (let [filePath, entry] of this.dirs)if (filePath.startsWith(dir) && filePath.indexOf((0, ($parcel$interopDefault($ki5hV$path))).sep, dir.length) === -1) {
            let name = filePath.slice(dir.length);
            if (opts === null || opts === void 0 ? void 0 : opts.withFileTypes) res.push(new $86a3ba4eb3a17970$var$Dirent(name, entry));
            else res.push(name);
        }
        for (let [filePath, entry] of this.files)if (filePath.startsWith(dir) && filePath.indexOf((0, ($parcel$interopDefault($ki5hV$path))).sep, dir.length) === -1) {
            let name = filePath.slice(dir.length);
            if (opts === null || opts === void 0 ? void 0 : opts.withFileTypes) res.push(new $86a3ba4eb3a17970$var$Dirent(name, entry));
            else res.push(name);
        }
        for (let [from] of this.symlinks)if (from.startsWith(dir) && from.indexOf((0, ($parcel$interopDefault($ki5hV$path))).sep, dir.length) === -1) {
            let name = from.slice(dir.length);
            if (opts === null || opts === void 0 ? void 0 : opts.withFileTypes) res.push(new $86a3ba4eb3a17970$var$Dirent(name, {
                mode: $86a3ba4eb3a17970$var$S_IFLNK
            }));
            else res.push(name);
        }
        return res;
    }
    async readdir(dir, opts) {
        return this.readdirSync(dir, opts);
    }
    async unlink(filePath) {
        filePath = this._normalizePath(filePath);
        if (!this.files.has(filePath) && !this.dirs.has(filePath)) throw new $86a3ba4eb3a17970$var$FSError("ENOENT", filePath, "does not exist");
        this.files.delete(filePath);
        this.dirs.delete(filePath);
        this.watchers.delete(filePath);
        await this._sendWorkerEvent({
            type: "unlink",
            path: filePath
        });
        this._triggerEvent({
            type: "delete",
            path: filePath
        });
        return Promise.resolve();
    }
    async mkdirp(dir) {
        dir = this._normalizePath(dir);
        if (this.dirs.has(dir)) return Promise.resolve();
        if (this.files.has(dir)) throw new $86a3ba4eb3a17970$var$FSError("ENOENT", dir, "is not a directory");
        let root = (0, ($parcel$interopDefault($ki5hV$path))).parse(dir).root;
        while(dir !== root){
            if (this.dirs.has(dir)) break;
            this.dirs.set(dir, new $86a3ba4eb3a17970$var$Directory());
            await this._sendWorkerEvent({
                type: "mkdir",
                path: dir
            });
            this._triggerEvent({
                type: "create",
                path: dir
            });
            dir = (0, ($parcel$interopDefault($ki5hV$path))).dirname(dir);
        }
        return Promise.resolve();
    }
    async rimraf(filePath) {
        filePath = this._normalizePath(filePath);
        if (this.dirs.has(filePath)) {
            let dir = filePath + (0, ($parcel$interopDefault($ki5hV$path))).sep;
            for (let filePath of this.files.keys())if (filePath.startsWith(dir)) {
                this.files.delete(filePath);
                await this._sendWorkerEvent({
                    type: "unlink",
                    path: filePath
                });
                this._triggerEvent({
                    type: "delete",
                    path: filePath
                });
            }
            for (let dirPath of this.dirs.keys())if (dirPath.startsWith(dir)) {
                this.dirs.delete(dirPath);
                this.watchers.delete(dirPath);
                await this._sendWorkerEvent({
                    type: "unlink",
                    path: filePath
                });
                this._triggerEvent({
                    type: "delete",
                    path: dirPath
                });
            }
            for (let filePath of this.symlinks.keys())if (filePath.startsWith(dir)) {
                this.symlinks.delete(filePath);
                await this._sendWorkerEvent({
                    type: "unlink",
                    path: filePath
                });
            }
            this.dirs.delete(filePath);
            await this._sendWorkerEvent({
                type: "unlink",
                path: filePath
            });
            this._triggerEvent({
                type: "delete",
                path: filePath
            });
        } else if (this.files.has(filePath)) {
            this.files.delete(filePath);
            await this._sendWorkerEvent({
                type: "unlink",
                path: filePath
            });
            this._triggerEvent({
                type: "delete",
                path: filePath
            });
        }
        return Promise.resolve();
    }
    async ncp(source, destination) {
        source = this._normalizePath(source);
        if (this.dirs.has(source)) {
            if (!this.dirs.has(destination)) {
                this.dirs.set(destination, new $86a3ba4eb3a17970$var$Directory());
                await this._sendWorkerEvent({
                    type: "mkdir",
                    path: destination
                });
                this._triggerEvent({
                    type: "create",
                    path: destination
                });
            }
            let dir = source + (0, ($parcel$interopDefault($ki5hV$path))).sep;
            for (let dirPath of this.dirs.keys())if (dirPath.startsWith(dir)) {
                let destName = (0, ($parcel$interopDefault($ki5hV$path))).join(destination, dirPath.slice(dir.length));
                if (!this.dirs.has(destName)) {
                    this.dirs.set(destName, new $86a3ba4eb3a17970$var$Directory());
                    await this._sendWorkerEvent({
                        type: "mkdir",
                        path: destination
                    });
                    this._triggerEvent({
                        type: "create",
                        path: destName
                    });
                }
            }
            for (let [filePath, file] of this.files)if (filePath.startsWith(dir)) {
                let destName = (0, ($parcel$interopDefault($ki5hV$path))).join(destination, filePath.slice(dir.length));
                let exists = this.files.has(destName);
                this.files.set(destName, file);
                await this._sendWorkerEvent({
                    type: "writeFile",
                    path: destName,
                    entry: file
                });
                this._triggerEvent({
                    type: exists ? "update" : "create",
                    path: destName
                });
            }
        } else await this.copyFile(source, destination);
    }
    createReadStream(filePath) {
        return new $86a3ba4eb3a17970$var$ReadStream(this, filePath);
    }
    createWriteStream(filePath, options) {
        return new $86a3ba4eb3a17970$var$WriteStream(this, filePath, options);
    }
    realpathSync(filePath) {
        return this._normalizePath(filePath);
    }
    async realpath(filePath) {
        return this.realpathSync(filePath);
    }
    async symlink(target, path) {
        target = this._normalizePath(target);
        path = this._normalizePath(path);
        this.symlinks.set(path, target);
        await this._sendWorkerEvent({
            type: "symlink",
            path: path,
            target: target
        });
    }
    existsSync(filePath) {
        filePath = this._normalizePath(filePath);
        return this.files.has(filePath) || this.dirs.has(filePath);
    }
    async exists(filePath) {
        return this.existsSync(filePath);
    }
    _triggerEvent(event) {
        this.events.push(event);
        if (this.watchers.size === 0) return;
         // Batch events
        this._eventQueue.push(event);
        clearTimeout(this._watcherTimer);
        this._watcherTimer = setTimeout(()=>{
            let events = this._eventQueue;
            this._eventQueue = [];
            for (let [dir, watchers] of this.watchers){
                if (!dir.endsWith((0, ($parcel$interopDefault($ki5hV$path))).sep)) dir += (0, ($parcel$interopDefault($ki5hV$path))).sep;
                if (event.path.startsWith(dir)) for (let watcher of watchers)watcher.trigger(events);
            }
        }, 50);
    }
    _registerWorker(handle) {
        this._workerHandles.push(handle);
        if (this._numWorkerInstances === this._workerHandles.length) this._emitter.emit("allWorkersRegistered");
    }
    async _sendWorkerEvent(event) {
        // Wait for worker instances to register their handles
        while(this._workerHandles.length < this._numWorkerInstances)await new Promise((resolve)=>this._workerRegisterResolves.push(resolve));
        await Promise.all(this._workerHandles.map((workerHandle)=>this.farm.workerApi.runHandle(workerHandle, [
                event
            ])));
    }
    watch(dir, fn, opts) {
        dir = this._normalizePath(dir);
        let watcher = new $86a3ba4eb3a17970$var$Watcher(fn, opts);
        let watchers = this.watchers.get(dir);
        if (!watchers) {
            watchers = new Set();
            this.watchers.set(dir, watchers);
        }
        watchers.add(watcher);
        return Promise.resolve({
            unsubscribe: ()=>{
                watchers = (0, (/*@__PURE__*/$parcel$interopDefault($2342a1a76ff50050$exports)))(watchers);
                watchers.delete(watcher);
                if (watchers.size === 0) this.watchers.delete(dir);
                return Promise.resolve();
            }
        });
    }
    async getEventsSince(dir, snapshot, opts) {
        let contents = await this.readFile(snapshot, "utf8");
        let len = Number(contents);
        let events = this.events.slice(len);
        let ignore = opts.ignore;
        if (ignore) events = events.filter((event)=>!ignore.some((i)=>event.path.startsWith(i + (0, ($parcel$interopDefault($ki5hV$path))).sep)));
        return events;
    }
    async writeSnapshot(dir, snapshot) {
        await this.writeFile(snapshot, "" + this.events.length);
    }
    findAncestorFile(fileNames, fromDir, root) {
        return (0, $792f6c711e82470e$export$d51a93c758976388)(this, fileNames, fromDir, root);
    }
    findNodeModule(moduleName, fromDir) {
        return (0, $792f6c711e82470e$export$4c6d088a7d7f9947)(this, moduleName, fromDir);
    }
    findFirstFile(filePaths) {
        return (0, $792f6c711e82470e$export$64df6e3182fd5b2d)(this, filePaths);
    }
}
class $86a3ba4eb3a17970$var$Watcher {
    constructor(fn, options){
        this.fn = fn;
        this.options = options;
    }
    trigger(events) {
        let ignore = this.options.ignore;
        if (ignore) events = events.filter((event)=>!ignore.some((i)=>event.path.startsWith(i + (0, ($parcel$interopDefault($ki5hV$path))).sep)));
        if (events.length > 0) this.fn(null, events);
    }
}
class $86a3ba4eb3a17970$var$FSError extends Error {
    constructor(code, path, message){
        var _Error_captureStackTrace;
        super(`${code}: ${path} ${message}`);
        this.name = "FSError";
        this.code = code;
        this.path = path;
        (_Error_captureStackTrace = Error.captureStackTrace) === null || _Error_captureStackTrace === void 0 ? void 0 : _Error_captureStackTrace.call(Error, this, this.constructor);
    }
}
class $86a3ba4eb3a17970$var$ReadStream extends (0, $ki5hV$stream.Readable) {
    constructor(fs, filePath){
        super();
        this.fs = fs;
        this.filePath = filePath;
        this.reading = false;
        this.bytesRead = 0;
    }
    _read() {
        if (this.reading) return;
        this.reading = true;
        this.fs.readFile(this.filePath).then((res)=>{
            this.bytesRead += res.byteLength;
            this.push(res);
            this.push(null);
        }, (err)=>{
            this.emit("error", err);
        });
    }
}
class $86a3ba4eb3a17970$var$WriteStream extends (0, $ki5hV$stream.Writable) {
    constructor(fs, filePath, options){
        super({
            emitClose: true,
            autoDestroy: true
        });
        this.fs = fs;
        this.filePath = filePath;
        this.options = options;
        this.buffer = Buffer.alloc(0);
    }
    _write(chunk, encoding, callback) {
        let c = typeof chunk === "string" ? Buffer.from(chunk, encoding) : chunk;
        this.buffer = Buffer.concat([
            this.buffer,
            c
        ]);
        callback();
    }
    _final(callback) {
        this.fs.writeFile(this.filePath, this.buffer, this.options).then(callback).catch(callback);
    }
}
const $86a3ba4eb3a17970$var$S_IFREG = 32768;
const $86a3ba4eb3a17970$var$S_IFDIR = 16384;
const $86a3ba4eb3a17970$var$S_IFLNK = 40960;
class $86a3ba4eb3a17970$var$Entry {
    constructor(mode){
        this.mode = mode;
        let now = Date.now();
        this.atime = now;
        this.mtime = now;
        this.ctime = now;
        this.birthtime = now;
    }
    access() {
        let now = Date.now();
        this.atime = now;
        this.ctime = now;
    }
    modify(mode) {
        let now = Date.now();
        this.mtime = now;
        this.ctime = now;
        this.mode = mode;
    }
    getSize() {
        return 0;
    }
    stat() {
        return new $86a3ba4eb3a17970$var$Stat(this);
    }
}
class $86a3ba4eb3a17970$var$Stat {
    dev = 0;
    ino = 0;
    nlink = 0;
    uid = 0;
    gid = 0;
    rdev = 0;
    blksize = 0;
    blocks = 0;
    constructor(entry){
        this.mode = entry.mode;
        this.size = entry.getSize();
        this.atimeMs = entry.atime;
        this.mtimeMs = entry.mtime;
        this.ctimeMs = entry.ctime;
        this.birthtimeMs = entry.birthtime;
        this.atime = new Date(entry.atime);
        this.mtime = new Date(entry.mtime);
        this.ctime = new Date(entry.ctime);
        this.birthtime = new Date(entry.birthtime);
    }
    isFile() {
        return Boolean(this.mode & $86a3ba4eb3a17970$var$S_IFREG);
    }
    isDirectory() {
        return Boolean(this.mode & $86a3ba4eb3a17970$var$S_IFDIR);
    }
    isBlockDevice() {
        return false;
    }
    isCharacterDevice() {
        return false;
    }
    isSymbolicLink() {
        return false;
    }
    isFIFO() {
        return false;
    }
    isSocket() {
        return false;
    }
}
class $86a3ba4eb3a17970$var$Dirent {
    #mode;
    constructor(name, entry){
        this.name = name;
        this.#mode = entry.mode;
    }
    isFile() {
        return Boolean(this.#mode & $86a3ba4eb3a17970$var$S_IFREG);
    }
    isDirectory() {
        return Boolean(this.#mode & $86a3ba4eb3a17970$var$S_IFDIR);
    }
    isBlockDevice() {
        return false;
    }
    isCharacterDevice() {
        return false;
    }
    isSymbolicLink() {
        return Boolean(this.#mode & $86a3ba4eb3a17970$var$S_IFLNK);
    }
    isFIFO() {
        return false;
    }
    isSocket() {
        return false;
    }
}
class $86a3ba4eb3a17970$var$File extends $86a3ba4eb3a17970$var$Entry {
    constructor(buffer, mode){
        super($86a3ba4eb3a17970$var$S_IFREG | mode);
        this.buffer = buffer;
    }
    read() {
        super.access();
        return Buffer.from(this.buffer);
    }
    write(buffer, mode) {
        super.modify($86a3ba4eb3a17970$var$S_IFREG | mode);
        this.buffer = buffer;
    }
    getSize() {
        return this.buffer.byteLength;
    }
}
class $86a3ba4eb3a17970$var$Directory extends $86a3ba4eb3a17970$var$Entry {
    constructor(){
        super($86a3ba4eb3a17970$var$S_IFDIR);
    }
}
function $86a3ba4eb3a17970$var$makeShared(contents) {
    if (typeof contents !== "string" && contents.buffer instanceof (0, $ki5hV$parcelutils.SharedBuffer)) return contents;
    let length = Buffer.byteLength(contents);
    let shared = new (0, $ki5hV$parcelutils.SharedBuffer)(length);
    let buffer = Buffer.from(shared);
    if (typeof contents === "string") buffer.write(contents);
    else buffer.set(contents);
    return buffer;
}
class $86a3ba4eb3a17970$var$WorkerFS extends $86a3ba4eb3a17970$export$3048eb7ec07c2c4e {
    constructor(id, handle){
        // TODO Make this not a subclass
        // $FlowFixMe
        super();
        this.id = id;
        this.handleFn = (methodName, args)=>(0, ($parcel$interopDefault($ki5hV$parcelworkers))).getWorkerApi().runHandle(handle, [
                methodName,
                args
            ]);
        this.handleFn("_registerWorker", [
            (0, ($parcel$interopDefault($ki5hV$parcelworkers))).getWorkerApi().createReverseHandle((event)=>{
                switch(event.type){
                    case "writeFile":
                        this.files.set(event.path, event.entry);
                        break;
                    case "unlink":
                        this.files.delete(event.path);
                        this.dirs.delete(event.path);
                        this.symlinks.delete(event.path);
                        break;
                    case "mkdir":
                        this.dirs.set(event.path, new $86a3ba4eb3a17970$var$Directory());
                        break;
                    case "symlink":
                        this.symlinks.set(event.path, event.target);
                        break;
                }
            })
        ]);
    }
    static deserialize(opts) {
        return (0, (/*@__PURE__*/$parcel$interopDefault($2342a1a76ff50050$exports)))($86a3ba4eb3a17970$var$instances.get(opts.id));
    }
    serialize() {
        // $FlowFixMe
        return {
            id: this.id
        };
    }
    writeFile(filePath, contents, options) {
        super.writeFile(filePath, contents, options);
        let buffer = $86a3ba4eb3a17970$var$makeShared(contents);
        return this.handleFn("writeFile", [
            filePath,
            buffer,
            options
        ]);
    }
    unlink(filePath) {
        super.unlink(filePath);
        return this.handleFn("unlink", [
            filePath
        ]);
    }
    mkdirp(dir) {
        super.mkdirp(dir);
        return this.handleFn("mkdirp", [
            dir
        ]);
    }
    rimraf(filePath) {
        super.rimraf(filePath);
        return this.handleFn("rimraf", [
            filePath
        ]);
    }
    ncp(source, destination) {
        super.ncp(source, destination);
        return this.handleFn("ncp", [
            source,
            destination
        ]);
    }
    symlink(target, path) {
        super.symlink(target, path);
        return this.handleFn("symlink", [
            target,
            path
        ]);
    }
}
(0, $ki5hV$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($46772b835b3d1aed$exports))).version}:MemoryFS`, $86a3ba4eb3a17970$export$3048eb7ec07c2c4e);
(0, $ki5hV$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($46772b835b3d1aed$exports))).version}:WorkerFS`, $86a3ba4eb3a17970$var$WorkerFS);
(0, $ki5hV$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($46772b835b3d1aed$exports))).version}:Stat`, $86a3ba4eb3a17970$var$Stat);
(0, $ki5hV$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($46772b835b3d1aed$exports))).version}:File`, $86a3ba4eb3a17970$var$File);
(0, $ki5hV$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($46772b835b3d1aed$exports))).version}:Directory`, $86a3ba4eb3a17970$var$Directory);


var $ff96e39fd0cf388b$exports = {};

$parcel$export($ff96e39fd0cf388b$exports, "OverlayFS", () => $ff96e39fd0cf388b$export$5963299e2424ca1c);



function $ff96e39fd0cf388b$var$read(method) {
    return async function(...args) {
        try {
            return await this.writable[method](...args);
        } catch (err) {
            return this.readable[method](...args);
        }
    };
}
function $ff96e39fd0cf388b$var$readSync(method) {
    return function(...args) {
        try {
            return this.writable[method](...args);
        } catch (err) {
            return this.readable[method](...args);
        }
    };
}
function $ff96e39fd0cf388b$var$write(method) {
    return function(...args) {
        return this.writable[method](...args);
    };
}
function $ff96e39fd0cf388b$var$checkExists(method) {
    return function(filePath, ...args) {
        if (this.writable.existsSync(filePath)) return this.writable[method](filePath, ...args);
        return this.readable[method](filePath, ...args);
    };
}
class $ff96e39fd0cf388b$export$5963299e2424ca1c {
    constructor(writable, readable){
        this.writable = writable;
        this.readable = readable;
    }
    static deserialize(opts) {
        return new $ff96e39fd0cf388b$export$5963299e2424ca1c(opts.writable, opts.readable);
    }
    serialize() {
        return {
            $$raw: false,
            writable: this.writable,
            readable: this.readable
        };
    }
    readFile = $ff96e39fd0cf388b$var$read("readFile");
    writeFile = $ff96e39fd0cf388b$var$write("writeFile");
    async copyFile(source, destination) {
        if (await this.writable.exists(source)) await this.writable.writeFile(destination, await this.writable.readFile(source));
        else await this.writable.writeFile(destination, await this.readable.readFile(source));
    }
    stat = $ff96e39fd0cf388b$var$read("stat");
    unlink = $ff96e39fd0cf388b$var$write("unlink");
    mkdirp = $ff96e39fd0cf388b$var$write("mkdirp");
    rimraf = $ff96e39fd0cf388b$var$write("rimraf");
    ncp = $ff96e39fd0cf388b$var$write("ncp");
    createReadStream = $ff96e39fd0cf388b$var$checkExists("createReadStream");
    createWriteStream = $ff96e39fd0cf388b$var$write("createWriteStream");
    cwd = $ff96e39fd0cf388b$var$readSync("cwd");
    chdir = $ff96e39fd0cf388b$var$readSync("chdir");
    realpath = $ff96e39fd0cf388b$var$checkExists("realpath");
    readFileSync = $ff96e39fd0cf388b$var$readSync("readFileSync");
    statSync = $ff96e39fd0cf388b$var$readSync("statSync");
    existsSync = $ff96e39fd0cf388b$var$readSync("existsSync");
    realpathSync = $ff96e39fd0cf388b$var$checkExists("realpathSync");
    async exists(filePath) {
        return await this.writable.exists(filePath) || this.readable.exists(filePath);
    }
    async readdir(path, opts) {
        // Read from both filesystems and merge the results
        let writable = [];
        let readable = [];
        try {
            writable = await this.writable.readdir(path, opts);
        } catch (err) {}
        try {
            readable = await this.readable.readdir(path, opts);
        } catch (err) {}
        return Array.from(new Set([
            ...writable,
            ...readable
        ]));
    }
    readdirSync(path, opts) {
        // Read from both filesystems and merge the results
        let writable = [];
        let readable = [];
        try {
            writable = this.writable.readdirSync(path, opts);
        } catch (err) {}
        try {
            readable = this.readable.readdirSync(path, opts);
        } catch (err) {}
        return Array.from(new Set([
            ...writable,
            ...readable
        ]));
    }
    async watch(dir, fn, opts) {
        let writableSubscription = await this.writable.watch(dir, fn, opts);
        let readableSubscription = await this.readable.watch(dir, fn, opts);
        return {
            unsubscribe: async ()=>{
                await writableSubscription.unsubscribe();
                await readableSubscription.unsubscribe();
            }
        };
    }
    async getEventsSince(dir, snapshot, opts) {
        let writableEvents = await this.writable.getEventsSince(dir, snapshot, opts);
        let readableEvents = await this.readable.getEventsSince(dir, snapshot, opts);
        return [
            ...writableEvents,
            ...readableEvents
        ];
    }
    async writeSnapshot(dir, snapshot, opts) {
        await this.writable.writeSnapshot(dir, snapshot, opts);
    }
    findAncestorFile(fileNames, fromDir, root) {
        return (0, $792f6c711e82470e$export$d51a93c758976388)(this, fileNames, fromDir, root);
    }
    findNodeModule(moduleName, fromDir) {
        return (0, $792f6c711e82470e$export$4c6d088a7d7f9947)(this, moduleName, fromDir);
    }
    findFirstFile(filePaths) {
        return (0, $792f6c711e82470e$export$64df6e3182fd5b2d)(this, filePaths);
    }
}
(0, $ki5hV$parcelcore.registerSerializableClass)(`${(0, (/*@__PURE__*/$parcel$interopDefault($46772b835b3d1aed$exports))).version}:OverlayFS`, $ff96e39fd0cf388b$export$5963299e2424ca1c);


const $e46c9778a96a2930$var$pipeline = (0, $ki5hV$util.promisify)((0, ($parcel$interopDefault($ki5hV$stream))).pipeline); // Recursively copies a directory from the sourceFS to the destinationFS
async function $e46c9778a96a2930$export$d3a8044e3fef7335(sourceFS, source, destinationFS, destination) {
    await destinationFS.mkdirp(destination);
    let files = await sourceFS.readdir(source);
    for (let file of files){
        let sourcePath = (0, ($parcel$interopDefault($ki5hV$path))).join(source, file);
        let destPath = (0, ($parcel$interopDefault($ki5hV$path))).join(destination, file);
        let stats = await sourceFS.stat(sourcePath);
        if (stats.isFile()) await $e46c9778a96a2930$var$pipeline(sourceFS.createReadStream(sourcePath), destinationFS.createWriteStream(destPath));
        else if (stats.isDirectory()) await $e46c9778a96a2930$export$d3a8044e3fef7335(sourceFS, sourcePath, destinationFS, destPath);
    }
}
$parcel$exportWildcard(module.exports, $10145ab9dc478fed$exports);
$parcel$exportWildcard(module.exports, $86a3ba4eb3a17970$exports);
$parcel$exportWildcard(module.exports, $ff96e39fd0cf388b$exports);


//# sourceMappingURL=index.js.map
