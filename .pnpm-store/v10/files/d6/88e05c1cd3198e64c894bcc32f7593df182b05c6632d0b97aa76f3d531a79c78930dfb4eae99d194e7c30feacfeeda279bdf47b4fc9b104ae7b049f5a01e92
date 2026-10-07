"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualStats = void 0;
const constants_1 = __importDefault(require("constants"));
class VirtualStats {
    constructor(config) {
        for (const key in config) {
            if (!Object.prototype.hasOwnProperty.call(config, key)) {
                continue;
            }
            this[key] = config[key];
        }
    }
    _checkModeProperty(property) {
        return (this.mode & constants_1.default.S_IFMT) === property;
    }
    isDirectory() {
        return this._checkModeProperty(constants_1.default.S_IFDIR);
    }
    isFile() {
        return this._checkModeProperty(constants_1.default.S_IFREG);
    }
    isBlockDevice() {
        return this._checkModeProperty(constants_1.default.S_IFBLK);
    }
    isCharacterDevice() {
        return this._checkModeProperty(constants_1.default.S_IFCHR);
    }
    isSymbolicLink() {
        return this._checkModeProperty(constants_1.default.S_IFLNK);
    }
    isFIFO() {
        return this._checkModeProperty(constants_1.default.S_IFIFO);
    }
    isSocket() {
        return this._checkModeProperty(constants_1.default.S_IFSOCK);
    }
}
exports.VirtualStats = VirtualStats;
//# sourceMappingURL=virtual-stats.js.map