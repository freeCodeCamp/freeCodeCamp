"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invariant = exports.keyMap = exports.keyValMap = exports.mapEachKey = exports.forEachKey = exports.inspect = exports.only = exports.omit = exports.clearName = exports.upperFirst = exports.getPluralName = exports.camelCase = exports.resolveMaybeThunk = void 0;
const is_1 = require("./is");
const pluralize_1 = require("./pluralize");
function resolveMaybeThunk(thingOrThunk) {
    return typeof thingOrThunk === 'function' ? thingOrThunk() : thingOrThunk;
}
exports.resolveMaybeThunk = resolveMaybeThunk;
function camelCase(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => index === 0 ? letter.toLowerCase() : letter.toUpperCase())
        .replace(/\s+/g, '');
}
exports.camelCase = camelCase;
function getPluralName(name) {
    return (0, pluralize_1.pluralize)(camelCase(name));
}
exports.getPluralName = getPluralName;
function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.upperFirst = upperFirst;
function clearName(str) {
    return str.replace(/[^_a-zA-Z0-9]/g, '');
}
exports.clearName = clearName;
function omit(obj, keys) {
    if (!obj) {
        return {};
    }
    const result = Object.assign({}, obj);
    if (Array.isArray(keys)) {
        keys.forEach((k) => {
            delete result[k];
        });
    }
    else {
        delete result[keys];
    }
    return result;
}
exports.omit = omit;
function only(obj, keys) {
    if (!obj) {
        return {};
    }
    const result = {};
    if (Array.isArray(keys)) {
        keys.forEach((k) => {
            if ({}.hasOwnProperty.call(obj, k)) {
                result[k] = obj[k];
            }
        });
    }
    else if ({}.hasOwnProperty.call(obj, keys)) {
        result[keys] = obj[keys];
    }
    return result;
}
exports.only = only;
function inspectObject(value) {
    let name;
    if (value && value.constructor && value.constructor.name) {
        name = value.constructor.name;
    }
    const props = `{ ${Object.keys(value)
        .filter((n) => n !== 'loc')
        .map((k) => `${k}: ${inspect(value[k])}`)
        .join(', ')} }`;
    return name ? `${name}(${props})` : props;
}
function inspect(value) {
    return value && typeof value === 'object'
        ? typeof value.inspect === 'function'
            ? value.inspect()
            : Array.isArray(value)
                ? `[${value.map(inspect).join(', ')}]`
                : inspectObject(value)
        : typeof value === 'string'
            ? `"${value}"`
            : typeof value === 'function'
                ? `[function ${value.name}]`
                : String(value);
}
exports.inspect = inspect;
function forEachKey(obj, callback) {
    Object.keys(obj).forEach((key) => {
        callback(obj[key], key);
    });
}
exports.forEachKey = forEachKey;
function mapEachKey(obj, callback) {
    if (!(0, is_1.isObject)(obj))
        return obj;
    const result = {};
    Object.keys(obj).forEach((key) => {
        result[key] = callback(obj[key], key);
    });
    return result;
}
exports.mapEachKey = mapEachKey;
function keyValMap(list, keyFn, valFn) {
    const result = Object.create(null);
    for (const item of list) {
        result[keyFn(item)] = valFn(item);
    }
    return result;
}
exports.keyValMap = keyValMap;
function keyMap(list, keyFn) {
    const result = Object.create(null);
    for (const item of list) {
        result[keyFn(item)] = item;
    }
    return result;
}
exports.keyMap = keyMap;
function invariant(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
        throw new Error(message != null ? message : 'Unexpected invariant triggered.');
    }
}
exports.invariant = invariant;
//# sourceMappingURL=misc.js.map