"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOptions = exports.bufferValidator = exports.emptyBuffer = exports.copyingSlice = exports.arrayBuffer2Buffer = exports.uint8Array2Buffer = exports.arrayish2Buffer = exports.buffer2Uint8array = exports.buffer2ArrayBuffer = exports.mkdirpSync = exports.fail = exports.isWebWorker = exports.isIE = exports.deprecationMessage = void 0;
var api_error_1 = require("./api_error");
var levenshtein_1 = require("./levenshtein");
var path = require("path");
function deprecationMessage(print, fsName, opts) {
    if (print) {
        // tslint:disable-next-line:no-console
        console.warn("[".concat(fsName, "] Direct file system constructor usage is deprecated for this file system, and will be removed in the next major version. Please use the '").concat(fsName, ".Create(").concat(JSON.stringify(opts), ", callback)' method instead. See https://github.com/jvilk/BrowserFS/issues/176 for more details."));
        // tslint:enable-next-line:no-console
    }
}
exports.deprecationMessage = deprecationMessage;
/**
 * Checks for any IE version, including IE11 which removed MSIE from the
 * userAgent string.
 * @hidden
 */
exports.isIE = typeof navigator !== "undefined" && Boolean(/(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || navigator.userAgent.indexOf('Trident') !== -1);
/**
 * Check if we're in a web worker.
 * @hidden
 */
exports.isWebWorker = typeof window === "undefined";
/**
 * Throws an exception. Called on code paths that should be impossible.
 * @hidden
 */
function fail() {
    throw new Error("BFS has reached an impossible code path; please file a bug.");
}
exports.fail = fail;
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
exports.mkdirpSync = mkdirpSync;
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
exports.buffer2ArrayBuffer = buffer2ArrayBuffer;
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
exports.buffer2Uint8array = buffer2Uint8array;
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
exports.arrayish2Buffer = arrayish2Buffer;
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
exports.uint8Array2Buffer = uint8Array2Buffer;
/**
 * Converts the given array buffer into a Buffer. Attempts to be
 * zero-copy.
 * @hidden
 */
function arrayBuffer2Buffer(ab) {
    return Buffer.from(ab);
}
exports.arrayBuffer2Buffer = arrayBuffer2Buffer;
/**
 * Copies a slice of the given buffer
 * @hidden
 */
function copyingSlice(buff, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = buff.length; }
    if (start < 0 || end < 0 || end > buff.length || start > end) {
        throw new TypeError("Invalid slice bounds on buffer of length ".concat(buff.length, ": [").concat(start, ", ").concat(end, "]"));
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
exports.copyingSlice = copyingSlice;
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
exports.emptyBuffer = emptyBuffer;
/**
 * Option validator for a Buffer file system option.
 * @hidden
 */
function bufferValidator(v, cb) {
    if (Buffer.isBuffer(v)) {
        cb();
    }
    else {
        cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "option must be a Buffer."));
    }
}
exports.bufferValidator = bufferValidator;
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
    var _loop_1 = function (optName) {
        if (optsInfo.hasOwnProperty(optName)) {
            var opt = optsInfo[optName];
            var providedValue = opts[optName];
            if (providedValue === undefined || providedValue === null) {
                if (!opt.optional) {
                    // Required option, not provided.
                    // Any incorrect options provided? Which ones are close to the provided one?
                    // (edit distance 5 === close)
                    var incorrectOptions = Object.keys(opts).filter(function (o) { return !(o in optsInfo); }).map(function (a) {
                        return { str: a, distance: (0, levenshtein_1.default)(optName, a) };
                    }).filter(function (o) { return o.distance < 5; }).sort(function (a, b) { return a.distance - b.distance; });
                    // Validators may be synchronous.
                    if (callbackCalled) {
                        return { value: void 0 };
                    }
                    callbackCalled = true;
                    return { value: cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "[".concat(fsName, "] Required option '").concat(optName, "' not provided.").concat(incorrectOptions.length > 0 ? " You provided unrecognized option '".concat(incorrectOptions[0].str, "'; perhaps you meant to type '").concat(optName, "'.") : '', "\nOption description: ").concat(opt.description))) };
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
                        return { value: void 0 };
                    }
                    callbackCalled = true;
                    return { value: cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "[".concat(fsName, "] Value provided for option ").concat(optName, " is not the proper type. Expected ").concat(Array.isArray(opt.type) ? "one of {".concat(opt.type.join(", "), "}") : opt.type, ", but received ").concat(typeof (providedValue), "\nOption description: ").concat(opt.description))) };
                }
                else if (opt.validator) {
                    pendingValidators++;
                    opt.validator(providedValue, validatorCallback);
                }
                // Otherwise: All good!
            }
        }
    };
    // Check for required options.
    for (var optName in optsInfo) {
        var state_1 = _loop_1(optName);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    loopEnded = true;
    if (pendingValidators === 0 && !callbackCalled) {
        cb();
    }
}
exports.checkOptions = checkOptions;