'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "defer", {
    enumerable: true,
    get: function() {
        return defer;
    }
});
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var nextMicroTask = Promise.resolve();
function defer(callback) {
    var progress = null;
    var cancelled = false;
    var fn = function fn() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (progress !== null) {
            return;
        }
        progress = nextMicroTask.then(function() {
            progress = null;
            if (cancelled) {
                cancelled = false;
                return;
            }
            callback.apply(void 0, _to_consumable_array._(args));
        });
    };
    fn.wait = function() {
        if (progress === null) {
            throw new Error('The deferred function should be called before calling `wait()`');
        }
        return progress;
    };
    fn.cancel = function() {
        if (progress === null) {
            return;
        }
        cancelled = true;
    };
    return fn;
}
