"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dirent = void 0;
var constants_1 = require("./constants");
var encoding_1 = require("./encoding");
var S_IFMT = constants_1.constants.S_IFMT, S_IFDIR = constants_1.constants.S_IFDIR, S_IFREG = constants_1.constants.S_IFREG, S_IFBLK = constants_1.constants.S_IFBLK, S_IFCHR = constants_1.constants.S_IFCHR, S_IFLNK = constants_1.constants.S_IFLNK, S_IFIFO = constants_1.constants.S_IFIFO, S_IFSOCK = constants_1.constants.S_IFSOCK;
/**
 * A directory entry, like `fs.Dirent`.
 */
var Dirent = /** @class */ (function () {
    function Dirent() {
        this.name = '';
        this.mode = 0;
    }
    Dirent.build = function (link, encoding) {
        var dirent = new Dirent();
        var mode = link.getNode().mode;
        dirent.name = (0, encoding_1.strToEncoding)(link.getName(), encoding);
        dirent.mode = mode;
        return dirent;
    };
    Dirent.prototype._checkModeProperty = function (property) {
        return (this.mode & S_IFMT) === property;
    };
    Dirent.prototype.isDirectory = function () {
        return this._checkModeProperty(S_IFDIR);
    };
    Dirent.prototype.isFile = function () {
        return this._checkModeProperty(S_IFREG);
    };
    Dirent.prototype.isBlockDevice = function () {
        return this._checkModeProperty(S_IFBLK);
    };
    Dirent.prototype.isCharacterDevice = function () {
        return this._checkModeProperty(S_IFCHR);
    };
    Dirent.prototype.isSymbolicLink = function () {
        return this._checkModeProperty(S_IFLNK);
    };
    Dirent.prototype.isFIFO = function () {
        return this._checkModeProperty(S_IFIFO);
    };
    Dirent.prototype.isSocket = function () {
        return this._checkModeProperty(S_IFSOCK);
    };
    return Dirent;
}());
exports.Dirent = Dirent;
exports.default = Dirent;
