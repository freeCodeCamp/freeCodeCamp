"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeExtension = exports.fileExistsAsync = exports.readJsonFromDiskAsync = exports.readJsonFromDiskSync = exports.fileExistsSync = void 0;
var fs = require("fs");
function fileExistsSync(path) {
    try {
        var stats = fs.statSync(path);
        return stats.isFile();
    }
    catch (err) {
        // If error, assume file did not exist
        return false;
    }
}
exports.fileExistsSync = fileExistsSync;
/**
 * Reads package.json from disk
 * @param file Path to package.json
 */
// tslint:disable-next-line:no-any
function readJsonFromDiskSync(packageJsonPath) {
    if (!fs.existsSync(packageJsonPath)) {
        return undefined;
    }
    return require(packageJsonPath);
}
exports.readJsonFromDiskSync = readJsonFromDiskSync;
function readJsonFromDiskAsync(path, 
// tslint:disable-next-line:no-any
callback) {
    fs.readFile(path, "utf8", function (err, result) {
        // If error, assume file did not exist
        if (err || !result) {
            return callback();
        }
        var json = JSON.parse(result);
        return callback(undefined, json);
    });
}
exports.readJsonFromDiskAsync = readJsonFromDiskAsync;
function fileExistsAsync(path2, callback2) {
    fs.stat(path2, function (err, stats) {
        if (err) {
            // If error assume file does not exist
            return callback2(undefined, false);
        }
        callback2(undefined, stats ? stats.isFile() : false);
    });
}
exports.fileExistsAsync = fileExistsAsync;
function removeExtension(path) {
    return path.substring(0, path.lastIndexOf(".")) || path;
}
exports.removeExtension = removeExtension;
//# sourceMappingURL=filesystem.js.map