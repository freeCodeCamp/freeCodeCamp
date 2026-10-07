"use strict";

var _array_like_to_array = require("./_array_like_to_array.cjs");

exports._ = exports._unsupported_iterable_to_array = _unsupported_iterable_to_array;
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array._(o, minLen);

    var n = Object.prototype.toString.call(o).slice(8, -1);

    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array._(o, minLen);
}
