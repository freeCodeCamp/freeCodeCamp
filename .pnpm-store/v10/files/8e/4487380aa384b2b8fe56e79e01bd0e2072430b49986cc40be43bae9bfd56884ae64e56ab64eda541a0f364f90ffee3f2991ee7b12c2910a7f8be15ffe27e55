"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSort = formatSort;
const error_1 = require("./error");
/** @internal */
function prepareDirection(direction = 1) {
    const value = `${direction}`.toLowerCase();
    if (isMeta(direction))
        return direction;
    switch (value) {
        case 'ascending':
        case 'asc':
        case '1':
            return 1;
        case 'descending':
        case 'desc':
        case '-1':
            return -1;
        default:
            throw new error_1.MongoInvalidArgumentError(`Invalid sort direction: ${JSON.stringify(direction)}`);
    }
}
/** @internal */
function isMeta(t) {
    return typeof t === 'object' && t != null && '$meta' in t && typeof t.$meta === 'string';
}
/** @internal */
function isPair(t) {
    if (Array.isArray(t) && t.length === 2) {
        try {
            prepareDirection(t[1]);
            return true;
        }
        catch {
            return false;
        }
    }
    return false;
}
function isDeep(t) {
    return Array.isArray(t) && Array.isArray(t[0]);
}
function isMap(t) {
    return t instanceof Map && t.size > 0;
}
function isReadonlyArray(value) {
    return Array.isArray(value);
}
/** @internal */
function pairToMap(v) {
    return new Map([[`${v[0]}`, prepareDirection([v[1]])]]);
}
/** @internal */
function deepToMap(t) {
    const sortEntries = t.map(([k, v]) => [`${k}`, prepareDirection(v)]);
    return new Map(sortEntries);
}
/** @internal */
function stringsToMap(t) {
    const sortEntries = t.map(key => [`${key}`, 1]);
    return new Map(sortEntries);
}
/** @internal */
function objectToMap(t) {
    const sortEntries = Object.entries(t).map(([k, v]) => [
        `${k}`,
        prepareDirection(v)
    ]);
    return new Map(sortEntries);
}
/** @internal */
function mapToMap(t) {
    const sortEntries = Array.from(t).map(([k, v]) => [
        `${k}`,
        prepareDirection(v)
    ]);
    return new Map(sortEntries);
}
/** converts a Sort type into a type that is valid for the server (SortForCmd) */
function formatSort(sort, direction) {
    if (sort == null)
        return undefined;
    if (typeof sort === 'string')
        return new Map([[sort, prepareDirection(direction)]]); // 'fieldName'
    if (typeof sort !== 'object') {
        throw new error_1.MongoInvalidArgumentError(`Invalid sort format: ${JSON.stringify(sort)} Sort must be a valid object`);
    }
    if (!isReadonlyArray(sort)) {
        if (isMap(sort))
            return mapToMap(sort); // Map<fieldName, SortDirection>
        if (Object.keys(sort).length)
            return objectToMap(sort); // { [fieldName: string]: SortDirection }
        return undefined;
    }
    if (!sort.length)
        return undefined;
    if (isDeep(sort))
        return deepToMap(sort); // [ [fieldName, sortDir], [fieldName, sortDir] ... ]
    if (isPair(sort))
        return pairToMap(sort); // [ fieldName, sortDir ]
    return stringsToMap(sort); // [ fieldName, fieldName ]
}
//# sourceMappingURL=sort.js.map