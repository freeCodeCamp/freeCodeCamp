"use strict";

exports._ = exports._class_private_method_get = _class_private_method_get;
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");

    return fn;
}
