"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stats = void 0;
var constants_1 = require("./constants");
var getBigInt_1 = require("./getBigInt");
var S_IFMT = constants_1.constants.S_IFMT, S_IFDIR = constants_1.constants.S_IFDIR, S_IFREG = constants_1.constants.S_IFREG, S_IFBLK = constants_1.constants.S_IFBLK, S_IFCHR = constants_1.constants.S_IFCHR, S_IFLNK = constants_1.constants.S_IFLNK, S_IFIFO = constants_1.constants.S_IFIFO, S_IFSOCK = constants_1.constants.S_IFSOCK;
/**
 * Statistics about a file/directory, like `fs.Stats`.
 */
var Stats = /** @class */ (function () {
    function Stats() {
    }
    Stats.build = function (node, bigint) {
        if (bigint === void 0) { bigint = false; }
        var stats = new Stats();
        var uid = node.uid, gid = node.gid, atime = node.atime, mtime = node.mtime, ctime = node.ctime;
        var getStatNumber = !bigint ? function (number) { return number; } : getBigInt_1.default;
        // Copy all values on Stats from Node, so that if Node values
        // change, values on Stats would still be the old ones,
        // just like in Node fs.
        stats.uid = getStatNumber(uid);
        stats.gid = getStatNumber(gid);
        stats.rdev = getStatNumber(0);
        stats.blksize = getStatNumber(4096);
        stats.ino = getStatNumber(node.ino);
        stats.size = getStatNumber(node.getSize());
        stats.blocks = getStatNumber(1);
        stats.atime = atime;
        stats.mtime = mtime;
        stats.ctime = ctime;
        stats.birthtime = ctime;
        stats.atimeMs = getStatNumber(atime.getTime());
        stats.mtimeMs = getStatNumber(mtime.getTime());
        var ctimeMs = getStatNumber(ctime.getTime());
        stats.ctimeMs = ctimeMs;
        stats.birthtimeMs = ctimeMs;
        stats.dev = getStatNumber(0);
        stats.mode = getStatNumber(node.mode);
        stats.nlink = getStatNumber(node.nlink);
        return stats;
    };
    Stats.prototype._checkModeProperty = function (property) {
        return (Number(this.mode) & S_IFMT) === property;
    };
    Stats.prototype.isDirectory = function () {
        return this._checkModeProperty(S_IFDIR);
    };
    Stats.prototype.isFile = function () {
        return this._checkModeProperty(S_IFREG);
    };
    Stats.prototype.isBlockDevice = function () {
        return this._checkModeProperty(S_IFBLK);
    };
    Stats.prototype.isCharacterDevice = function () {
        return this._checkModeProperty(S_IFCHR);
    };
    Stats.prototype.isSymbolicLink = function () {
        return this._checkModeProperty(S_IFLNK);
    };
    Stats.prototype.isFIFO = function () {
        return this._checkModeProperty(S_IFIFO);
    };
    Stats.prototype.isSocket = function () {
        return this._checkModeProperty(S_IFSOCK);
    };
    return Stats;
}());
exports.Stats = Stats;
exports.default = Stats;
