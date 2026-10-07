"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _set;
    }
});
var _definePropertyMjs = /*#__PURE__*/ _interopRequireDefault(require("./_define_property.js"));
var _superPropBaseMjs = /*#__PURE__*/ _interopRequireDefault(require("./_super_prop_base.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
        set = Reflect.set;
    } else {
        set = function set(target, property, value, receiver) {
            var base = (0, _superPropBaseMjs.default)(target, property);
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
                if (!desc.writable) {
                    return false;
                }
                desc.value = value;
                Object.defineProperty(receiver, property, desc);
            } else {
                (0, _definePropertyMjs.default)(receiver, property, value);
            }
            return true;
        };
    }
    return set(target, property, value, receiver);
}
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
        throw new Error("failed to set property");
    }
    return value;
}
