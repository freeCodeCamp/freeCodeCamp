"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasCORS = void 0;
// imported from https://github.com/component/has-cors
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' &&
        'withCredentials' in new XMLHttpRequest();
}
catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
}
exports.hasCORS = value;
