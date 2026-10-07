"use strict";

exports._ = exports._initializer_define_property = _initializer_define_property;
function _initializer_define_property(target, property, descriptor, context) {
    if (!descriptor) return;

    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
