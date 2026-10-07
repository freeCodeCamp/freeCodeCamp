"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchFromAbsolutePathsAsync = exports.createMatchPathAsync = void 0;
var path = require("path");
var TryPath = require("./try-path");
var MappingEntry = require("./mapping-entry");
var Filesystem = require("./filesystem");
/**
 * See the sync version for docs.
 */
function createMatchPathAsync(absoluteBaseUrl, paths, mainFields, addMatchAll) {
    if (mainFields === void 0) { mainFields = ["main"]; }
    if (addMatchAll === void 0) { addMatchAll = true; }
    var absolutePaths = MappingEntry.getAbsoluteMappingEntries(absoluteBaseUrl, paths, addMatchAll);
    return function (requestedModule, readJson, fileExists, extensions, callback) {
        return matchFromAbsolutePathsAsync(absolutePaths, requestedModule, readJson, fileExists, extensions, callback, mainFields);
    };
}
exports.createMatchPathAsync = createMatchPathAsync;
/**
 * See the sync version for docs.
 */
function matchFromAbsolutePathsAsync(absolutePathMappings, requestedModule, readJson, fileExists, extensions, callback, mainFields) {
    if (readJson === void 0) { readJson = Filesystem.readJsonFromDiskAsync; }
    if (fileExists === void 0) { fileExists = Filesystem.fileExistsAsync; }
    if (extensions === void 0) { extensions = Object.keys(require.extensions); }
    if (mainFields === void 0) { mainFields = ["main"]; }
    var tryPaths = TryPath.getPathsToTry(extensions, absolutePathMappings, requestedModule);
    if (!tryPaths) {
        return callback();
    }
    findFirstExistingPath(tryPaths, readJson, fileExists, callback, 0, mainFields);
}
exports.matchFromAbsolutePathsAsync = matchFromAbsolutePathsAsync;
function findFirstExistingMainFieldMappedFile(packageJson, mainFields, packageJsonPath, fileExistsAsync, doneCallback, index) {
    if (index === void 0) { index = 0; }
    if (index >= mainFields.length) {
        return doneCallback(undefined, undefined);
    }
    var tryNext = function () {
        return findFirstExistingMainFieldMappedFile(packageJson, mainFields, packageJsonPath, fileExistsAsync, doneCallback, index + 1);
    };
    var mainFieldMapping = packageJson[mainFields[index]];
    if (typeof mainFieldMapping !== "string") {
        // Skip mappings that are not pointers to replacement files
        return tryNext();
    }
    var mappedFilePath = path.join(path.dirname(packageJsonPath), mainFieldMapping);
    fileExistsAsync(mappedFilePath, function (err, exists) {
        if (err) {
            return doneCallback(err);
        }
        if (exists) {
            return doneCallback(undefined, mappedFilePath);
        }
        return tryNext();
    });
}
// Recursive loop to probe for physical files
function findFirstExistingPath(tryPaths, readJson, fileExists, doneCallback, index, mainFields) {
    if (index === void 0) { index = 0; }
    if (mainFields === void 0) { mainFields = ["main"]; }
    var tryPath = tryPaths[index];
    if (tryPath.type === "file" ||
        tryPath.type === "extension" ||
        tryPath.type === "index") {
        fileExists(tryPath.path, function (err, exists) {
            if (err) {
                return doneCallback(err);
            }
            if (exists) {
                return doneCallback(undefined, TryPath.getStrippedPath(tryPath));
            }
            if (index === tryPaths.length - 1) {
                return doneCallback();
            }
            // Continue with the next path
            return findFirstExistingPath(tryPaths, readJson, fileExists, doneCallback, index + 1, mainFields);
        });
    }
    else if (tryPath.type === "package") {
        readJson(tryPath.path, function (err, packageJson) {
            if (err) {
                return doneCallback(err);
            }
            if (packageJson) {
                return findFirstExistingMainFieldMappedFile(packageJson, mainFields, tryPath.path, fileExists, function (mainFieldErr, mainFieldMappedFile) {
                    if (mainFieldErr) {
                        return doneCallback(mainFieldErr);
                    }
                    if (mainFieldMappedFile) {
                        return doneCallback(undefined, mainFieldMappedFile);
                    }
                    // No field in package json was a valid option. Continue with the next path.
                    return findFirstExistingPath(tryPaths, readJson, fileExists, doneCallback, index + 1, mainFields);
                });
            }
            // This is async code, we need to return unconditionally, otherwise the code still falls
            // through and keeps recursing. While this might work in general, libraries that use neo-async
            // like Webpack will actually not allow you to call the same callback twice.
            //
            // An example of where this caused issues:
            // https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/11
            //
            // Continue with the next path
            return findFirstExistingPath(tryPaths, readJson, fileExists, doneCallback, index + 1, mainFields);
        });
    }
    else {
        TryPath.exhaustiveTypeException(tryPath.type);
    }
}
//# sourceMappingURL=match-path-async.js.map