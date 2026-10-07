"use strict";

var _to_primitive = require("./_to_primitive.cjs");
var _type_of = require("./_type_of.cjs");

exports._ = exports._to_property_key = _to_property_key;
function _to_property_key(arg) {
    var key = _to_primitive._(arg, "string");

    return _type_of._(key) === "symbol" ? key : String(key);
}
