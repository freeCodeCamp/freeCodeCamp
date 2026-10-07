"use strict";

var _is_native_reflect_construct = require("./_is_native_reflect_construct.cjs");
var _set_prototype_of = require("./_set_prototype_of.cjs");
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct._()) exports._ = _construct = Reflect.construct;
    else {
        exports._ = _construct = function construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();

            if (Class) _set_prototype_of._(instance, Class.prototype);

            return instance;
        };
    }

    return _construct.apply(null, arguments);
}
exports._ = _construct;
