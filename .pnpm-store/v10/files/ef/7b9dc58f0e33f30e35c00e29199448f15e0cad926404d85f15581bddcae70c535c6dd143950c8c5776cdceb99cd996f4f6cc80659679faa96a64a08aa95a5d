"use strict";

var _overload_yield = require("./_overload_yield.cjs");

function _async_generator_delegate(inner) {
    var iter = {}, waiting = false;

    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });

        return { done: false, value: new _overload_yield._(value, /* kind: delegate */ 1) };
    }

    iter[(typeof Symbol !== "undefined" && Symbol.iterator) || "@@iterator"] = function() {
        return this;
    };

    iter.next = function(value) {
        if (waiting) {
            waiting = false;

            return value;
        }

        return pump("next", value);
    };

    if (typeof inner.throw === "function") {
        iter.throw = function(value) {
            if (waiting) {
                waiting = false;
                throw value;
            }

            return pump("throw", value);
        };
    }
    if (typeof inner.return === "function") {
        iter.return = function(value) {
            if (waiting) {
                waiting = false;
                return value;
            }
            return pump("return", value);
        };
    }

    return iter;
}
exports._ = _async_generator_delegate;
