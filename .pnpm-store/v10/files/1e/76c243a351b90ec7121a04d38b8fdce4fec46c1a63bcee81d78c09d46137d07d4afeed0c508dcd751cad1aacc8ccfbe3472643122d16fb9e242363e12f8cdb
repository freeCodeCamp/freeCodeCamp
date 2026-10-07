"use strict";

var _get_prototype_of = require("./_get_prototype_of.cjs");
var _is_native_reflect_construct = require("./_is_native_reflect_construct.cjs");
var _possible_constructor_return = require("./_possible_constructor_return.cjs");

function _call_super(_this, derived, args) {
    // Super
    derived = _get_prototype_of._(derived);
    return _possible_constructor_return._(
        _this,
        _is_native_reflect_construct._()
            // NOTE: This doesn't work if this.__proto__.constructor has been modified.
            ? Reflect.construct(derived, args || [], _get_prototype_of._(_this).constructor)
            : derived.apply(_this, args)
    );
}

exports._ = _call_super;
