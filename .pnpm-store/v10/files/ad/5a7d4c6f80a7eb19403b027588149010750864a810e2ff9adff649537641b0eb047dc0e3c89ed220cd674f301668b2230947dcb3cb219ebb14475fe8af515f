"use strict";

exports._ = exports._skip_first_generator_next = _skip_first_generator_next;
function _skip_first_generator_next(fn) {
    return function() {
        var it = fn.apply(this, arguments);
        it.next();

        return it;
    };
}
