"use strict";

var _get_prototype_of = require("./_get_prototype_of.cjs");
var _is_native_reflect_construct = require("./_is_native_reflect_construct.cjs");
var _possible_constructor_return = require("./_possible_constructor_return.cjs");

function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct._();

    return function _createSuperInternal() {
        var Super = _get_prototype_of._(Derived), result;

        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of._(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }

        return _possible_constructor_return._(this, result);
    };
}
exports._ = _create_super;
