"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * `setTimeoutUnref` is just like `setTimeout`,
 * only in Node's environment it will "unref" its macro task.
 */
function setTimeoutUnref(callback, time, args) {
    var ref = setTimeout.apply(typeof globalThis !== 'undefined' ? globalThis : global, arguments);
    if (ref && typeof ref === 'object' && typeof ref.unref === 'function')
        ref.unref();
    return ref;
}
exports.default = setTimeoutUnref;
