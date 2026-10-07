import { _ as _get_prototype_of } from "./_get_prototype_of.js";
import { _ as _is_native_reflect_construct } from "./_is_native_reflect_construct.js";
import { _ as _possible_constructor_return } from "./_possible_constructor_return.js";

function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();

    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;

        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }

        return _possible_constructor_return(this, result);
    };
}
export { _create_super as _ };
