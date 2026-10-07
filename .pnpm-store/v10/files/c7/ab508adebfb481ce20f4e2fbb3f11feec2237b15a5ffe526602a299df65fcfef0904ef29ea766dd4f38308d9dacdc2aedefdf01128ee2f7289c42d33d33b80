'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get escapeFacetValue () {
        return escapeFacetValue;
    },
    get unescapeFacetValue () {
        return unescapeFacetValue;
    }
});
function unescapeFacetValue(value) {
    if (typeof value === 'string') {
        return value.replace(/^\\-/, '-');
    }
    return value;
}
function escapeFacetValue(value) {
    if (typeof value === 'number' && value < 0 || typeof value === 'string') {
        return String(value).replace(/^-/, '\\-');
    }
    return value;
}
