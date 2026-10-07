"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCAFileSync = void 0;
const graceful_fs_1 = __importDefault(require("graceful-fs"));
function readCAFileSync(filePath) {
    try {
        const contents = graceful_fs_1.default.readFileSync(filePath, 'utf8');
        const delim = '-----END CERTIFICATE-----';
        const output = contents
            .split(delim)
            .filter((ca) => Boolean(ca.trim()))
            .map((ca) => `${ca.trimLeft()}${delim}`);
        return output;
    }
    catch (err) {
        if (err.code === 'ENOENT')
            return undefined;
        throw err;
    }
}
exports.readCAFileSync = readCAFileSync;
//# sourceMappingURL=ca-file.js.map