import { parse } from 'graphql';
export const asArray = (fns) => (Array.isArray(fns) ? fns : fns ? [fns] : []);
const invalidDocRegex = /\.[a-z0-9]+$/i;
export function isDocumentString(str) {
    if (typeof str !== 'string') {
        return false;
    }
    // XXX: is-valid-path or is-glob treat SDL as a valid path
    // (`scalar Date` for example)
    // this why checking the extension is fast enough
    // and prevent from parsing the string in order to find out
    // if the string is a SDL
    if (invalidDocRegex.test(str)) {
        return false;
    }
    try {
        parse(str);
        return true;
    }
    catch (e) { }
    return false;
}
const invalidPathRegex = /[‘“!%^<=>`]/;
export function isValidPath(str) {
    return typeof str === 'string' && !invalidPathRegex.test(str);
}
export function compareStrings(a, b) {
    if (String(a) < String(b)) {
        return -1;
    }
    if (String(a) > String(b)) {
        return 1;
    }
    return 0;
}
export function nodeToString(a) {
    var _a, _b;
    let name;
    if ('alias' in a) {
        name = (_a = a.alias) === null || _a === void 0 ? void 0 : _a.value;
    }
    if (name == null && 'name' in a) {
        name = (_b = a.name) === null || _b === void 0 ? void 0 : _b.value;
    }
    if (name == null) {
        name = a.kind;
    }
    return name;
}
export function compareNodes(a, b, customFn) {
    const aStr = nodeToString(a);
    const bStr = nodeToString(b);
    if (typeof customFn === 'function') {
        return customFn(aStr, bStr);
    }
    return compareStrings(aStr, bStr);
}
export function isSome(input) {
    return input != null;
}
export function assertSome(input, message = 'Value should be something') {
    if (input == null) {
        throw new Error(message);
    }
}
