"use strict";

var _array_with_holes = require("./_array_with_holes.cjs");
var _iterable_to_array = require("./_iterable_to_array.cjs");
var _non_iterable_rest = require("./_non_iterable_rest.cjs");
var _unsupported_iterable_to_array = require("./_unsupported_iterable_to_array.cjs");

exports._ = exports._to_array = _to_array;
function _to_array(arr) {
    return _array_with_holes._(arr) || _iterable_to_array._(arr) || _unsupported_iterable_to_array._(arr) || _non_iterable_rest._();
}
