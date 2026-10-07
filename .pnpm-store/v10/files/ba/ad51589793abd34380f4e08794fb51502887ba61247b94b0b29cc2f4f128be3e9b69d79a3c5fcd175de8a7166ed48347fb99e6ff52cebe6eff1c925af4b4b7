"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _skipFirstGeneratorNext;
    }
});
function _skipFirstGeneratorNext(fn) {
    return function() {
        var it = fn.apply(this, arguments);
        it.next();
        return it;
    };
}
