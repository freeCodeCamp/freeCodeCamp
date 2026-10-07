"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepmerge = void 0;
function deepmerge(target, src) {
    const array = Array.isArray(src);
    let dst = ((array && []) || {});
    if (array) {
        target = target || [];
        dst = dst.concat(target);
        src.forEach((e, i) => {
            if (typeof dst[i] === 'undefined') {
                dst[i] = e;
            }
            else if (typeof e === 'object') {
                dst[i] = deepmerge(target[i], e);
            }
            else {
                if (target.indexOf(e) === -1) {
                    dst.push(e);
                }
            }
        });
    }
    else {
        if (target && typeof target === 'object') {
            Object.keys(target).forEach((key) => {
                dst[key] = target[key];
            });
        }
        Object.keys(src).forEach((key) => {
            const v = src[key];
            if (typeof v !== 'object' || !v) {
                dst[key] = v;
            }
            else {
                if (!target[key]) {
                    dst[key] = v;
                }
                else {
                    dst[key] = deepmerge(target[key], v);
                }
            }
        });
    }
    return dst;
}
exports.deepmerge = deepmerge;
//# sourceMappingURL=deepmerge.js.map