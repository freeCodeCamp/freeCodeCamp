"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fs = exports.createFsFromVolume = exports.vol = exports.Volume = void 0;
var Stats_1 = require("./Stats");
var Dirent_1 = require("./Dirent");
var volume_1 = require("./volume");
var _a = require('fs-monkey/lib/util/lists'), fsSyncMethods = _a.fsSyncMethods, fsAsyncMethods = _a.fsAsyncMethods;
var constants_1 = require("./constants");
var F_OK = constants_1.constants.F_OK, R_OK = constants_1.constants.R_OK, W_OK = constants_1.constants.W_OK, X_OK = constants_1.constants.X_OK;
exports.Volume = volume_1.Volume;
// Default volume.
exports.vol = new volume_1.Volume();
function createFsFromVolume(vol) {
    var fs = { F_OK: F_OK, R_OK: R_OK, W_OK: W_OK, X_OK: X_OK, constants: constants_1.constants, Stats: Stats_1.default, Dirent: Dirent_1.default };
    // Bind FS methods.
    for (var _i = 0, fsSyncMethods_1 = fsSyncMethods; _i < fsSyncMethods_1.length; _i++) {
        var method = fsSyncMethods_1[_i];
        if (typeof vol[method] === 'function')
            fs[method] = vol[method].bind(vol);
    }
    for (var _a = 0, fsAsyncMethods_1 = fsAsyncMethods; _a < fsAsyncMethods_1.length; _a++) {
        var method = fsAsyncMethods_1[_a];
        if (typeof vol[method] === 'function')
            fs[method] = vol[method].bind(vol);
    }
    fs.StatWatcher = vol.StatWatcher;
    fs.FSWatcher = vol.FSWatcher;
    fs.WriteStream = vol.WriteStream;
    fs.ReadStream = vol.ReadStream;
    fs.promises = vol.promises;
    fs._toUnixTimestamp = volume_1.toUnixTimestamp;
    return fs;
}
exports.createFsFromVolume = createFsFromVolume;
exports.fs = createFsFromVolume(exports.vol);
module.exports = __assign(__assign({}, module.exports), exports.fs);
module.exports.semantic = true;
