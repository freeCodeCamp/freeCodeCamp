"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _get;
    }
});
var _superPropBaseMjs = /*#__PURE__*/ _interopRequireDefault(require("./_super_prop_base.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        get = Reflect.get;
    } else {
        get = function get(target, property, receiver) {
            var base = (0, _superPropBaseMjs.default)(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return get(target, property, receiver);
}
function _get(target, property, receiver) {
    return get(target, property, receiver);
}
