"use strict";

exports._ = exports._set_prototype_of = _set_prototype_of;
function _set_prototype_of(o, p) {
    exports._ = exports._set_prototype_of = _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;

        return o;
    };

    return _set_prototype_of(o, p);
}
