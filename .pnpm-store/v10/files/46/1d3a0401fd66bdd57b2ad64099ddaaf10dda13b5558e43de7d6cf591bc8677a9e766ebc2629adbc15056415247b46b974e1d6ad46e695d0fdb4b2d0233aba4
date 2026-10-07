"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exhaustiveTypeException = exports.getStrippedPath = exports.getPathsToTry = void 0;
var path = require("path");
var path_1 = require("path");
var filesystem_1 = require("./filesystem");
/**
 * Builds a list of all physical paths to try by:
 * 1. Check for file named exactly as request.
 * 2. Check for files named as request ending in any of the extensions.
 * 3. Check for file specified in package.json's main property.
 * 4. Check for files named as request ending in "index" with any of the extensions.
 */
function getPathsToTry(extensions, absolutePathMappings, requestedModule) {
    if (!absolutePathMappings || !requestedModule || requestedModule[0] === ".") {
        return undefined;
    }
    var pathsToTry = [];
    for (var _i = 0, absolutePathMappings_1 = absolutePathMappings; _i < absolutePathMappings_1.length; _i++) {
        var entry = absolutePathMappings_1[_i];
        var starMatch = entry.pattern === requestedModule
            ? ""
            : matchStar(entry.pattern, requestedModule);
        if (starMatch !== undefined) {
            var _loop_1 = function (physicalPathPattern) {
                var physicalPath = physicalPathPattern.replace("*", starMatch);
                pathsToTry.push({ type: "file", path: physicalPath });
                pathsToTry.push.apply(pathsToTry, extensions.map(function (e) { return ({ type: "extension", path: physicalPath + e }); }));
                pathsToTry.push({
                    type: "package",
                    path: path.join(physicalPath, "/package.json"),
                });
                var indexPath = path.join(physicalPath, "/index");
                pathsToTry.push.apply(pathsToTry, extensions.map(function (e) { return ({ type: "index", path: indexPath + e }); }));
            };
            for (var _a = 0, _b = entry.paths; _a < _b.length; _a++) {
                var physicalPathPattern = _b[_a];
                _loop_1(physicalPathPattern);
            }
        }
    }
    return pathsToTry.length === 0 ? undefined : pathsToTry;
}
exports.getPathsToTry = getPathsToTry;
// Not sure why we don't just return the full found path?
function getStrippedPath(tryPath) {
    return tryPath.type === "index"
        ? (0, path_1.dirname)(tryPath.path)
        : tryPath.type === "file"
            ? tryPath.path
            : tryPath.type === "extension"
                ? (0, filesystem_1.removeExtension)(tryPath.path)
                : tryPath.type === "package"
                    ? tryPath.path
                    : exhaustiveTypeException(tryPath.type);
}
exports.getStrippedPath = getStrippedPath;
function exhaustiveTypeException(check) {
    throw new Error("Unknown type ".concat(check));
}
exports.exhaustiveTypeException = exhaustiveTypeException;
/**
 * Matches pattern with a single star against search.
 * Star must match at least one character to be considered a match.
 * @param patttern for example "foo*"
 * @param search for example "fooawesomebar"
 * @returns the part of search that * matches, or undefined if no match.
 */
function matchStar(pattern, search) {
    if (search.length < pattern.length) {
        return undefined;
    }
    if (pattern === "*") {
        return search;
    }
    var star = pattern.indexOf("*");
    if (star === -1) {
        return undefined;
    }
    var part1 = pattern.substring(0, star);
    var part2 = pattern.substring(star + 1);
    if (search.substr(0, star) !== part1) {
        return undefined;
    }
    if (search.substr(search.length - part2.length) !== part2) {
        return undefined;
    }
    return search.substr(star, search.length - part2.length);
}
//# sourceMappingURL=try-path.js.map