"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on = on;
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}
