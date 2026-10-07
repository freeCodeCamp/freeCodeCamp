"use strict";

var _type_of = require("./_type_of.cjs");

exports._ = exports._to_primitive = _to_primitive;
function _to_primitive(input, hint) {
    if (_type_of._(input) !== "object" || input === null) return input;

    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_type_of._(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
}
