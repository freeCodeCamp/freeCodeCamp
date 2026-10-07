"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FS_1 = require("./FS");
// Manually export the individual public functions of fs.
// Required because some code will invoke functions off of the module.
// e.g.:
// let writeFile = fs.writeFile;
// writeFile(...)
/**
 * @hidden
 */
var fs = new FS_1.default();
/**
 * @hidden
 */
var _fsMock = {};
/**
 * @hidden
 */
var fsProto = FS_1.default.prototype;
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
_fsMock['FS'] = FS_1.default;
_fsMock['Stats'] = FS_1.default.Stats;
_fsMock['F_OK'] = 0;
_fsMock['R_OK'] = 4;
_fsMock['W_OK'] = 2;
_fsMock['X_OK'] = 1;
exports.default = _fsMock;