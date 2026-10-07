"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideField = exports.partialCloneSubpath = exports.isPresentInDotFilter = exports.hideComplexValue = exports.preparePathsFilter = exports.filterByDotPaths = void 0;
function filterByDotPaths(obj, pathsFilter, opts) {
    let result;
    const dottedPaths = preparePathsFilter(pathsFilter);
    if (dottedPaths) {
        result = {};
        dottedPaths.forEach((dottedPath) => {
            let k = obj;
            dottedPath.split('.').forEach((part) => {
                k = k === null || k === void 0 ? void 0 : k[part];
            });
            result[dottedPath] = k;
        });
    }
    else {
        result = Object.assign({}, obj);
    }
    if (opts && opts.hideFields) {
        const hiddenFields = [];
        const optsHideFields = opts.hideFields;
        Object.keys(optsHideFields).forEach((key) => {
            const msg = optsHideFields[key];
            hiddenFields.push(...hideField(result, key, msg, pathsFilter));
        });
        if (hiddenFields.length > 0 && opts.hideFieldsNote) {
            result['[debug note]'] = opts.hideFieldsNote.replace('%fieldNames%', hiddenFields.join(' '));
        }
    }
    return result;
}
exports.filterByDotPaths = filterByDotPaths;
function preparePathsFilter(pathsFilter) {
    if (!pathsFilter)
        return null;
    if (Array.isArray(pathsFilter))
        return pathsFilter;
    const tmp = pathsFilter.split(/\s|,/).filter((s) => s !== '');
    if (tmp.length > 0)
        return tmp;
    return null;
}
exports.preparePathsFilter = preparePathsFilter;
function hideComplexValue(val, msg = 'was hidden') {
    if (val === null || val === undefined)
        return val;
    const t = typeof val;
    if (t === 'boolean' || t === 'number') {
        return val;
    }
    if (t === 'string') {
        if (val.length < 500) {
            return val;
        }
        return `String(length:${val.length}) ${msg}`;
    }
    if (t === 'object' && val.constructor) {
        if (val.constructor.name === 'Array') {
            return `Array(length:${val.length}) ${msg}`;
        }
        if (val.constructor.name === 'Object') {
            return `Object {} ${msg}`;
        }
        return `Object(${val.constructor.name}) ${msg}`;
    }
    return t;
}
exports.hideComplexValue = hideComplexValue;
function isPresentInDotFilter(name, pathsFilter) {
    if (!pathsFilter)
        return false;
    if (Array.isArray(pathsFilter)) {
        for (let i = 0; i < pathsFilter.length; i++) {
            if (pathsFilter[i] === name || pathsFilter[i].indexOf(`${name}.`) === 0)
                return true;
        }
    }
    else {
        return pathsFilter === name || pathsFilter.indexOf(`${name}.`) === 0;
    }
    return false;
}
exports.isPresentInDotFilter = isPresentInDotFilter;
function partialCloneSubpath(res, path) {
    if (!res)
        return;
    let key = path.shift();
    const idx = parseInt(key, 10);
    key = idx >= 0 ? idx : key;
    if (!res[key])
        return;
    if (Array.isArray(res[key])) {
        res[key] = res[key].slice(0);
        partialCloneSubpath(res[key], path);
    }
    else if (typeof res[key] === 'object') {
        res[key] = Object.assign({}, res[key]);
        partialCloneSubpath(res[key], path);
    }
}
exports.partialCloneSubpath = partialCloneSubpath;
function hideField(result, key, msg, pathsFilter) {
    const hiddenFields = [];
    const wildcardMatch = key.match(/(.*)\.\*$/);
    if (wildcardMatch) {
        const k = wildcardMatch[1];
        const parts = k.split('.');
        partialCloneSubpath(result, [...parts]);
        let v = result;
        parts.forEach((part) => {
            v = v === null || v === void 0 ? void 0 : v[part];
        });
        const res = v !== null && v !== void 0 ? v : result[k];
        if (res && typeof res === 'object') {
            Object.keys(res).forEach((kk) => {
                if (res[kk] && !isPresentInDotFilter(`${k}.${kk}`, pathsFilter)) {
                    const tmp = hideComplexValue(res[kk], msg
                        ? msg.replace(new RegExp(`${k}.*`.replace(/([.*])/g, '\\$1'), 'g'), `${k}.${kk}`)
                        : msg);
                    if (tmp !== res[kk]) {
                        res[kk] = tmp;
                        hiddenFields.push(`${k}.${kk}`);
                    }
                }
            });
            return hiddenFields;
        }
    }
    if (result[key] && !isPresentInDotFilter(key, pathsFilter)) {
        const tmp = hideComplexValue(result[key], msg);
        if (tmp !== result[key]) {
            result[key] = tmp;
            hiddenFields.push(key);
        }
    }
    return hiddenFields;
}
exports.hideField = hideField;
//# sourceMappingURL=filterByDotPaths.js.map