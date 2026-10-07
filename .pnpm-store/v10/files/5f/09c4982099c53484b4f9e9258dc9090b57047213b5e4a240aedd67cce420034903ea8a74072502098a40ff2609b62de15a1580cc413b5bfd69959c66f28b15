"use strict";

var _super_prop_base = require("./_super_prop_base.cjs");

function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) exports._ = _get = Reflect.get;
    else {
        exports._ = _get = function get(target, property, receiver) {
            var base = _super_prop_base._(target, property);

            if (!base) return;

            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) return desc.get.call(receiver || target);

            return desc.value;
        };
    }

    return _get(target, property, receiver || target);
}
exports._ = _get;
