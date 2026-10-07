"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _createSuper;
    }
});
var _isNativeReflectConstructMjs = /*#__PURE__*/ _interopRequireDefault(require("./_is_native_reflect_construct.js"));
var _getPrototypeOfMjs = /*#__PURE__*/ _interopRequireDefault(require("./_get_prototype_of.js"));
var _possibleConstructorReturnMjs = /*#__PURE__*/ _interopRequireDefault(require("./_possible_constructor_return.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = (0, _isNativeReflectConstructMjs.default)();
    return function _createSuperInternal() {
        var Super = (0, _getPrototypeOfMjs.default)(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOfMjs.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return (0, _possibleConstructorReturnMjs.default)(this, result);
    };
}
