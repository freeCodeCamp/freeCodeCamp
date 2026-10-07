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
var api_error_1 = require("../core/api_error");
var file_flag_1 = require("../core/file_flag");
var util_1 = require("../core/util");
var file_1 = require("../core/file");
var node_fs_stats_1 = require("../core/node_fs_stats");
var preload_file_1 = require("../generic/preload_file");
var global_1 = require("../core/global");
var node_fs_1 = require("../core/node_fs");
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
var CallbackArgumentConverter = /** @class */ (function () {
    function CallbackArgumentConverter() {
        this._callbacks = {};
        this._nextId = 0;
    }
    CallbackArgumentConverter.prototype.toRemoteArg = function (cb) {
        var id = this._nextId++;
        this._callbacks[id] = cb;
        return {
            type: SpecialArgType.CB,
            id: id
        };
    };
    CallbackArgumentConverter.prototype.toLocalArg = function (id) {
        var cb = this._callbacks[id];
        delete this._callbacks[id];
        return cb;
    };
    return CallbackArgumentConverter;
}());
/**
 * @hidden
 */
var FileDescriptorArgumentConverter = /** @class */ (function () {
    function FileDescriptorArgumentConverter() {
        this._fileDescriptors = {};
        this._nextId = 0;
    }
    FileDescriptorArgumentConverter.prototype.toRemoteArg = function (fd, p, flag, cb) {
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
    FileDescriptorArgumentConverter.prototype.applyFdAPIRequest = function (request, cb) {
        var _this = this;
        var fdArg = request.args[0];
        this._applyFdChanges(fdArg, function (err, fd) {
            if (err) {
                cb(err);
            }
            else {
                // Apply method on now-changed file descriptor.
                fd[request.method](function (e) {
                    if (request.method === 'close') {
                        delete _this._fileDescriptors[fdArg.id];
                    }
                    cb(e);
                });
            }
        });
    };
    FileDescriptorArgumentConverter.prototype._applyFdChanges = function (remoteFd, cb) {
        var fd = this._fileDescriptors[remoteFd.id], data = transferrableObjectToBuffer(remoteFd.data), remoteStats = node_fs_stats_1.default.fromBuffer(transferrableObjectToBuffer(remoteFd.stat));
        // Write data if the file is writable.
        var flag = file_flag_1.FileFlag.getFileFlag(remoteFd.flag);
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
    return FileDescriptorArgumentConverter;
}());
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
    return api_error_1.ApiError.fromBuffer(transferrableObjectToBuffer(e.errorData));
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
    var cnstr = global_1.default[e.name];
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
    return node_fs_stats_1.default.fromBuffer(transferrableObjectToBuffer(stats.statsData));
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
    return file_flag_1.FileFlag.getFileFlag(remoteFlag.flagStr);
}
/**
 * @hidden
 */
function bufferToTransferrableObject(buff) {
    return (0, util_1.buffer2ArrayBuffer)(buff);
}
/**
 * @hidden
 */
function transferrableObjectToBuffer(buff) {
    return (0, util_1.arrayBuffer2Buffer)(buff);
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
var WorkerFile = /** @class */ (function (_super) {
    __extends(WorkerFile, _super);
    function WorkerFile(_fs, _path, _flag, _stat, remoteFdId, contents) {
        var _this = _super.call(this, _fs, _path, _flag, _stat, contents) || this;
        _this._remoteFdId = remoteFdId;
        return _this;
    }
    WorkerFile.prototype.getRemoteFdId = function () {
        return this._remoteFdId;
    };
    /**
     * @hidden
     */
    WorkerFile.prototype.toRemoteArg = function () {
        return {
            type: SpecialArgType.FD,
            id: this._remoteFdId,
            data: bufferToTransferrableObject(this.getBuffer()),
            stat: bufferToTransferrableObject(this.getStats().toBuffer()),
            path: this.getPath(),
            flag: this.getFlag().getFlagString()
        };
    };
    WorkerFile.prototype.sync = function (cb) {
        this._syncClose('sync', cb);
    };
    WorkerFile.prototype.close = function (cb) {
        this._syncClose('close', cb);
    };
    WorkerFile.prototype._syncClose = function (type, cb) {
        var _this = this;
        if (this.isDirty()) {
            this._fs.syncClose(type, this, function (e) {
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
    return WorkerFile;
}(preload_file_1.default));
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
var WorkerFS = /** @class */ (function (_super) {
    __extends(WorkerFS, _super);
    /**
     * Constructs a new WorkerFS instance that connects with BrowserFS running on
     * the specified worker.
     */
    function WorkerFS(worker) {
        var _this = _super.call(this) || this;
        _this._callbackConverter = new CallbackArgumentConverter();
        _this._isInitialized = false;
        _this._isReadOnly = false;
        _this._supportLinks = false;
        _this._supportProps = false;
        _this._worker = worker;
        _this._worker.addEventListener('message', function (e) {
            var resp = e.data;
            if (isAPIResponse(resp)) {
                var i = void 0;
                var args = resp.args;
                var fixedArgs = new Array(args.length);
                // Dispatch event to correct id.
                for (i = 0; i < fixedArgs.length; i++) {
                    fixedArgs[i] = _this._argRemote2Local(args[i]);
                }
                _this._callbackConverter.toLocalArg(resp.cbId).apply(null, fixedArgs);
            }
        });
        return _this;
    }
    WorkerFS.Create = function (opts, cb) {
        var fs = new WorkerFS(opts.worker);
        fs._initialize(function () {
            cb(null, fs);
        });
    };
    WorkerFS.isAvailable = function () {
        return typeof (importScripts) !== 'undefined' || typeof (Worker) !== 'undefined';
    };
    /**
     * Attaches a listener to the remote worker for file system requests.
     */
    WorkerFS.attachRemoteListener = function (worker) {
        var fdConverter = new FileDescriptorArgumentConverter();
        function argLocal2Remote(arg, requestArgs, cb) {
            switch (typeof arg) {
                case 'object':
                    if (arg instanceof node_fs_stats_1.default) {
                        cb(null, statsLocal2Remote(arg));
                    }
                    else if (arg instanceof api_error_1.ApiError) {
                        cb(null, apiErrorLocal2Remote(arg));
                    }
                    else if (arg instanceof file_1.BaseFile) {
                        // Pass in p and flags from original request.
                        cb(null, fdConverter.toRemoteArg(arg, requestArgs[0], requestArgs[1], cb));
                    }
                    else if (arg instanceof file_flag_1.FileFlag) {
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
                                var cbId_1 = arg.id;
                                return function () {
                                    var i;
                                    var fixedArgs = new Array(arguments.length);
                                    var message, countdown = arguments.length;
                                    function abortAndSendError(err) {
                                        if (countdown > 0) {
                                            countdown = -1;
                                            message = {
                                                browserfsMessage: true,
                                                cbId: cbId_1,
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
                                                        cbId: cbId_1,
                                                        args: fixedArgs
                                                    };
                                                    worker.postMessage(message);
                                                }
                                            });
                                        })(i, arguments[i]);
                                    }
                                    if (arguments.length === 0) {
                                        message = {
                                            browserfsMessage: true,
                                            cbId: cbId_1,
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
                var args_1 = request.args, fixedArgs = new Array(args_1.length);
                switch (request.method) {
                    case 'close':
                    case 'sync':
                        (function () {
                            // File descriptor-relative methods.
                            var remoteCb = args_1[1];
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
                            var rootFs = node_fs_1.default.getRootFS(), remoteCb = args_1[1], probeResponse = {
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
                        for (var i = 0; i < args_1.length; i++) {
                            fixedArgs[i] = argRemote2Local(args_1[i], fixedArgs);
                        }
                        var rootFS = node_fs_1.default.getRootFS();
                        rootFS[request.method].apply(rootFS, fixedArgs);
                        break;
                }
            }
        });
    };
    WorkerFS.prototype.getName = function () {
        return WorkerFS.Name;
    };
    WorkerFS.prototype.isReadOnly = function () { return this._isReadOnly; };
    WorkerFS.prototype.supportsSynch = function () { return false; };
    WorkerFS.prototype.supportsLinks = function () { return this._supportLinks; };
    WorkerFS.prototype.supportsProps = function () { return this._supportProps; };
    WorkerFS.prototype.rename = function (oldPath, newPath, cb) {
        this._rpc('rename', arguments);
    };
    WorkerFS.prototype.stat = function (p, isLstat, cb) {
        this._rpc('stat', arguments);
    };
    WorkerFS.prototype.open = function (p, flag, mode, cb) {
        this._rpc('open', arguments);
    };
    WorkerFS.prototype.unlink = function (p, cb) {
        this._rpc('unlink', arguments);
    };
    WorkerFS.prototype.rmdir = function (p, cb) {
        this._rpc('rmdir', arguments);
    };
    WorkerFS.prototype.mkdir = function (p, mode, cb) {
        this._rpc('mkdir', arguments);
    };
    WorkerFS.prototype.readdir = function (p, cb) {
        this._rpc('readdir', arguments);
    };
    WorkerFS.prototype.exists = function (p, cb) {
        this._rpc('exists', arguments);
    };
    WorkerFS.prototype.realpath = function (p, cache, cb) {
        this._rpc('realpath', arguments);
    };
    WorkerFS.prototype.truncate = function (p, len, cb) {
        this._rpc('truncate', arguments);
    };
    WorkerFS.prototype.readFile = function (fname, encoding, flag, cb) {
        this._rpc('readFile', arguments);
    };
    WorkerFS.prototype.writeFile = function (fname, data, encoding, flag, mode, cb) {
        this._rpc('writeFile', arguments);
    };
    WorkerFS.prototype.appendFile = function (fname, data, encoding, flag, mode, cb) {
        this._rpc('appendFile', arguments);
    };
    WorkerFS.prototype.chmod = function (p, isLchmod, mode, cb) {
        this._rpc('chmod', arguments);
    };
    WorkerFS.prototype.chown = function (p, isLchown, uid, gid, cb) {
        this._rpc('chown', arguments);
    };
    WorkerFS.prototype.utimes = function (p, atime, mtime, cb) {
        this._rpc('utimes', arguments);
    };
    WorkerFS.prototype.link = function (srcpath, dstpath, cb) {
        this._rpc('link', arguments);
    };
    WorkerFS.prototype.symlink = function (srcpath, dstpath, type, cb) {
        this._rpc('symlink', arguments);
    };
    WorkerFS.prototype.readlink = function (p, cb) {
        this._rpc('readlink', arguments);
    };
    WorkerFS.prototype.syncClose = function (method, fd, cb) {
        this._worker.postMessage({
            browserfsMessage: true,
            method: method,
            args: [fd.toRemoteArg(), this._callbackConverter.toRemoteArg(cb)]
        });
    };
    /**
     * Called once both local and remote sides are set up.
     */
    WorkerFS.prototype._initialize = function (cb) {
        var _this = this;
        if (!this._isInitialized) {
            var message = {
                browserfsMessage: true,
                method: 'probe',
                args: [this._argLocal2Remote((0, util_1.emptyBuffer)()), this._callbackConverter.toRemoteArg(function (probeResponse) {
                        _this._isInitialized = true;
                        _this._isReadOnly = probeResponse.isReadOnly;
                        _this._supportLinks = probeResponse.supportsLinks;
                        _this._supportProps = probeResponse.supportsProps;
                        cb();
                    })]
            };
            this._worker.postMessage(message);
        }
        else {
            cb();
        }
    };
    WorkerFS.prototype._argRemote2Local = function (arg) {
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
                            return new WorkerFile(this, fdArg.path, file_flag_1.FileFlag.getFileFlag(fdArg.flag), node_fs_stats_1.default.fromBuffer(transferrableObjectToBuffer(fdArg.stat)), fdArg.id, transferrableObjectToBuffer(fdArg.data));
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
    WorkerFS.prototype._rpc = function (methodName, args) {
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
    WorkerFS.prototype._argLocal2Remote = function (arg) {
        if (!arg) {
            return arg;
        }
        switch (typeof arg) {
            case "object":
                if (arg instanceof node_fs_stats_1.default) {
                    return statsLocal2Remote(arg);
                }
                else if (arg instanceof api_error_1.ApiError) {
                    return apiErrorLocal2Remote(arg);
                }
                else if (arg instanceof WorkerFile) {
                    return arg.toRemoteArg();
                }
                else if (arg instanceof file_flag_1.FileFlag) {
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
                    cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "option must be a Web Worker instance."));
                }
            }
        }
    };
    return WorkerFS;
}(file_system_1.BaseFileSystem));
exports.default = WorkerFS;