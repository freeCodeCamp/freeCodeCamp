"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchFromAbsolutePaths = exports.createMatchPath = void 0;
var path = require("path");
var Filesystem = require("./filesystem");
var MappingEntry = require("./mapping-entry");
var TryPath = require("./try-path");
/**
 * Creates a function that can resolve paths according to tsconfig paths property.
 * @param absoluteBaseUrl Absolute version of baseUrl as specified in tsconfig.
 * @param paths The paths as specified in tsconfig.
 * @param mainFields A list of package.json field names to try when resolving module files.
 * @param addMatchAll Add a match-all "*" rule if none is present
 * @returns a function that can resolve paths.
 */
function createMatchPath(absoluteBaseUrl, paths, mainFields, addMatchAll) {
    if (mainFields === void 0) { mainFields = ["main"]; }
    if (addMatchAll === void 0) { addMatchAll = true; }
    var absolutePaths = MappingEntry.getAbsoluteMappingEntries(absoluteBaseUrl, paths, addMatchAll);
    return function (requestedModule, readJson, fileExists, extensions) {
        return matchFromAbsolutePaths(absolutePaths, requestedModule, readJson, fileExists, extensions, mainFields);
    };
}
exports.createMatchPath = createMatchPath;
/**
 * Finds a path from tsconfig that matches a module load request.
 * @param absolutePathMappings The paths to try as specified in tsconfig but resolved to absolute form.
 * @param requestedModule The required module name.
 * @param readJson Function that can read json from a path (useful for testing).
 * @param fileExists Function that checks for existence of a file at a path (useful for testing).
 * @param extensions File extensions to probe for (useful for testing).
 * @param mainFields A list of package.json field names to try when resolving module files.
 * @returns the found path, or undefined if no path was found.
 */
function matchFromAbsolutePaths(absolutePathMappings, requestedModule, readJson, fileExists, extensions, mainFields) {
    if (readJson === void 0) { readJson = Filesystem.readJsonFromDiskSync; }
    if (fileExists === void 0) { fileExists = Filesystem.fileExistsSync; }
    if (extensions === void 0) { extensions = Object.keys(require.extensions); }
    if (mainFields === void 0) { mainFields = ["main"]; }
    var tryPaths = TryPath.getPathsToTry(extensions, absolutePathMappings, requestedModule);
    if (!tryPaths) {
        return undefined;
    }
    return findFirstExistingPath(tryPaths, readJson, fileExists, mainFields);
}
exports.matchFromAbsolutePaths = matchFromAbsolutePaths;
function findFirstExistingMainFieldMappedFile(packageJson, mainFields, packageJsonPath, fileExists) {
    for (var index = 0; index < mainFields.length; index++) {
        var mainFieldName = mainFields[index];
        var candidateMapping = packageJson[mainFieldName];
        if (candidateMapping && typeof candidateMapping === "string") {
            var candidateFilePath = path.join(path.dirname(packageJsonPath), candidateMapping);
            if (fileExists(candidateFilePath)) {
                return candidateFilePath;
            }
        }
    }
    return undefined;
}
function findFirstExistingPath(tryPaths, readJson, fileExists, mainFields) {
    if (readJson === void 0) { readJson = Filesystem.readJsonFromDiskSync; }
    if (mainFields === void 0) { mainFields = ["main"]; }
    for (var _i = 0, tryPaths_1 = tryPaths; _i < tryPaths_1.length; _i++) {
        var tryPath = tryPaths_1[_i];
        if (tryPath.type === "file" ||
            tryPath.type === "extension" ||
            tryPath.type === "index") {
            if (fileExists(tryPath.path)) {
                return TryPath.getStrippedPath(tryPath);
            }
        }
        else if (tryPath.type === "package") {
            var packageJson = readJson(tryPath.path);
            if (packageJson) {
                var mainFieldMappedFile = findFirstExistingMainFieldMappedFile(packageJson, mainFields, tryPath.path, fileExists);
                if (mainFieldMappedFile) {
                    return mainFieldMappedFile;
                }
            }
        }
        else {
            TryPath.exhaustiveTypeException(tryPath.type);
        }
    }
    return undefined;
}
//# sourceMappingURL=match-path-sync.js.map