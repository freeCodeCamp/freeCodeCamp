"use strict";

var _get = require("./_get.cjs");
var _set = require("./_set.cjs");

function _update(target, property, receiver, isStrict) {
    return {
        get _() {
            return _get._(target, property, receiver);
        },
        set _(value) {
            _set._(target, property, value, receiver, isStrict);
        }
    };
}
exports._ = _update;
