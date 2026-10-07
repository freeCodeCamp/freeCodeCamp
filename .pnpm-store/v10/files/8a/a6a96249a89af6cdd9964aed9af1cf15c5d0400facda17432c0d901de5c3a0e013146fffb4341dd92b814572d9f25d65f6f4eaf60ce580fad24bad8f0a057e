import { _ as _get_prototype_of } from "./_get_prototype_of.js";
import { _ as _is_native_reflect_construct } from "./_is_native_reflect_construct.js";
import { _ as _possible_constructor_return } from "./_possible_constructor_return.js";

function _call_super(_this, derived, args) {
    // Super
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(
        _this,
        _is_native_reflect_construct()
            // NOTE: This doesn't work if this.__proto__.constructor has been modified.
            ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor)
            : derived.apply(_this, args)
    );
}

export { _call_super as _ };
