"use strict";
/**
 * BrowserFS's main module. This is exposed in the browser via the BrowserFS global.
 * Due to limitations in typedoc, we document these functions in ./typedoc.ts.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setImmediate = exports.Errors = exports.FileSystem = exports.EmscriptenFS = exports.getFileSystem = exports.configure = exports.initialize = exports.BFSRequire = exports.registerFileSystem = exports.install = void 0;
var buffer = require("buffer");
var node_fs_1 = require("./node_fs");
var path = require("path");
var emscripten_fs_1 = require("../generic/emscripten_fs");
exports.EmscriptenFS = emscripten_fs_1.default;
var backends_1 = require("./backends");
exports.FileSystem = backends_1.default;
var BFSUtils = require("./util");
var Errors = require("./api_error");
exports.Errors = Errors;
var setImmediate_1 = require("../generic/setImmediate");
exports.setImmediate = setImmediate_1.default;
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
exports.install = install;
/**
 * @hidden
 */
function registerFileSystem(name, fs) {
    backends_1.default[name] = fs;
}
exports.registerFileSystem = registerFileSystem;
function BFSRequire(module) {
    switch (module) {
        case 'fs':
            return node_fs_1.default;
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
            return backends_1.default[module];
    }
}
exports.BFSRequire = BFSRequire;
/**
 * Initializes BrowserFS with the given root file system.
 */
function initialize(rootfs) {
    return node_fs_1.default.initialize(rootfs);
}
exports.initialize = initialize;
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
exports.configure = configure;
/**
 * Retrieve a file system with the given configuration.
 * @param config A FileSystemConfiguration object. See FileSystemConfiguration for details.
 * @param cb Called when the file system is constructed, or when an error occurs.
 */
function getFileSystem(config, cb) {
    var fsName = config['fs'];
    if (!fsName) {
        return cb(new Errors.ApiError(Errors.ErrorCode.EPERM, 'Missing "fs" property on configuration object.'));
    }
    var options = config['options'];
    var waitCount = 0;
    var called = false;
    function finish() {
        if (!called) {
            called = true;
            var fsc = backends_1.default[fsName];
            if (!fsc) {
                cb(new Errors.ApiError(Errors.ErrorCode.EPERM, "File system ".concat(fsName, " is not available in BrowserFS.")));
            }
            else {
                fsc.Create(options, cb);
            }
        }
    }
    if (options !== null && typeof (options) === "object") {
        var finishedIterating_1 = false;
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
                        if (waitCount === 0 && finishedIterating_1) {
                            finish();
                        }
                    }
                });
            }
        });
        finishedIterating_1 = true;
    }
    if (waitCount === 0) {
        finish();
    }
}
exports.getFileSystem = getFileSystem;