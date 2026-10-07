"use strict";

var _construct = require("./_construct.cjs");
var _get_prototype_of = require("./_get_prototype_of.cjs");
var _is_native_function = require("./_is_native_function.cjs");
var _set_prototype_of = require("./_set_prototype_of.cjs");

function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    exports._ = _wrap_native_super = function(Class) {
        if (Class === null || !_is_native_function._(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }

        function Wrapper() {
            return _construct._(Class, arguments, _get_prototype_of._(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });

        return _set_prototype_of._(Wrapper, Class);
    };

    return _wrap_native_super(Class);
}
exports._ = _wrap_native_super;
