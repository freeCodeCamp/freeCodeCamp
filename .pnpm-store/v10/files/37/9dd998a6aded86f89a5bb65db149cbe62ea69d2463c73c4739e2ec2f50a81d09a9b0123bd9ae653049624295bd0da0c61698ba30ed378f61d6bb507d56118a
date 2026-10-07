"use strict";

var _define_property = require("./_define_property.cjs");
var _super_prop_base = require("./_super_prop_base.cjs");

function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) set = Reflect.set;
    else {
        set = function set(target, property, value, receiver) {
            var base = _super_prop_base._(target, property);
            var desc;
            if (base) {
                desc = Object.getOwnPropertyDescriptor(base, property);
                if (desc.set) {
                    desc.set.call(receiver, value);

                    return true;
                } else if (!desc.writable) {
                    return false;
                }
            }
            desc = Object.getOwnPropertyDescriptor(receiver, property);
            if (desc) {
                if (!desc.writable) return false;
                desc.value = value;
                Object.defineProperty(receiver, property, desc);
            } else {
                _define_property._(receiver, property, value);
            }

            return true;
        };
    }

    return set(target, property, value, receiver);
}

exports._ = exports._set = _set;
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) throw new Error("failed to set property");

    return value;
}
