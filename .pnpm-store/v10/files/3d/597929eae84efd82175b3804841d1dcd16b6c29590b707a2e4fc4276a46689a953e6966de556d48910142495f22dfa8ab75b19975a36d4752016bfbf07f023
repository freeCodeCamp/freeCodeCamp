'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "debounce", {
    enumerable: true,
    get: function() {
        return debounce;
    }
});
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
function debounce(func, wait) {
    var lastTimeout = null;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return new Promise(function(resolve, reject) {
            if (lastTimeout) {
                clearTimeout(lastTimeout);
            }
            lastTimeout = setTimeout(function() {
                lastTimeout = null;
                Promise.resolve(func.apply(void 0, _to_consumable_array._(args))).then(resolve).catch(reject);
            }, wait);
        });
    };
}
