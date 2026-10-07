"use strict";

function _is_native_reflect_construct() {
    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
        // If the internal slots aren't set, this throws an error similar to
        //   TypeError: this is not a Boolean object.
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (exports._ = _is_native_reflect_construct = function() {
        return !!result;
    })();
}

exports._ = _is_native_reflect_construct;
