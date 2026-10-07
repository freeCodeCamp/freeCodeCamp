import _isNativeReflectConstruct from "./_is_native_reflect_construct.mjs";
import _getPrototypeOf from "./_get_prototype_of.mjs";
import _possibleConstructorReturn from './_possible_constructor_return.mjs';

export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}