"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbsoluteMappingEntries = void 0;
var path = require("path");
/**
 * Converts an absolute baseUrl and paths to an array of absolute mapping entries.
 * The array is sorted by longest prefix.
 * Having an array with entries allows us to keep a sorting order rather than
 * sort by keys each time we use the mappings.
 * @param absoluteBaseUrl
 * @param paths
 * @param addMatchAll
 */
function getAbsoluteMappingEntries(absoluteBaseUrl, paths, addMatchAll) {
    // Resolve all paths to absolute form once here, and sort them by
    // longest prefix once here, this saves time on each request later.
    // We need to put them in an array to preserve the sorting order.
    var sortedKeys = sortByLongestPrefix(Object.keys(paths));
    var absolutePaths = [];
    for (var _i = 0, sortedKeys_1 = sortedKeys; _i < sortedKeys_1.length; _i++) {
        var key = sortedKeys_1[_i];
        absolutePaths.push({
            pattern: key,
            paths: paths[key].map(function (pathToResolve) {
                return path.join(absoluteBaseUrl, pathToResolve);
            }),
        });
    }
    // If there is no match-all path specified in the paths section of tsconfig, then try to match
    // all paths relative to baseUrl, this is how typescript works.
    if (!paths["*"] && addMatchAll) {
        absolutePaths.push({
            pattern: "*",
            paths: ["".concat(absoluteBaseUrl.replace(/\/$/, ""), "/*")],
        });
    }
    return absolutePaths;
}
exports.getAbsoluteMappingEntries = getAbsoluteMappingEntries;
/**
 * Sort path patterns.
 * If a module name can be matched with multiple patterns then pattern with the longest prefix will be picked.
 */
function sortByLongestPrefix(arr) {
    return arr
        .concat()
        .sort(function (a, b) { return getPrefixLength(b) - getPrefixLength(a); });
}
function getPrefixLength(pattern) {
    var prefixLength = pattern.indexOf("*");
    return pattern.substr(0, prefixLength).length;
}
//# sourceMappingURL=mapping-entry.js.map