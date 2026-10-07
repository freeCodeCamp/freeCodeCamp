"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUndefinedValuesFromObject = exports.getPropertyByPath = exports.emplace = void 0;
/**
 * @internal
 */
function emplace(map, key, fn) {
    const cached = map.get(key);
    if (cached !== undefined) {
        return cached;
    }
    const result = fn();
    map.set(key, result);
    return result;
}
exports.emplace = emplace;
// Resolves property names or property paths defined with period-delimited
// strings or arrays of strings. Property names that are found on the source
// object are used directly (even if they include a period).
// Nested property names that include periods, within a path, are only
// understood in array paths.
/**
 * @internal
 */
function getPropertyByPath(source, path) {
    if (typeof path === 'string' &&
        Object.prototype.hasOwnProperty.call(source, path)) {
        return source[path];
    }
    const parsedPath = typeof path === 'string' ? path.split('.') : path;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return parsedPath.reduce((previous, key) => {
        if (previous === undefined) {
            return previous;
        }
        return previous[key];
    }, source);
}
exports.getPropertyByPath = getPropertyByPath;
/** @internal */
function removeUndefinedValuesFromObject(options) {
    /* istanbul ignore if -- @preserve */
    if (!options) {
        return undefined;
    }
    return Object.fromEntries(Object.entries(options).filter(([, value]) => value !== undefined));
}
exports.removeUndefinedValuesFromObject = removeUndefinedValuesFromObject;
//# sourceMappingURL=util.js.map