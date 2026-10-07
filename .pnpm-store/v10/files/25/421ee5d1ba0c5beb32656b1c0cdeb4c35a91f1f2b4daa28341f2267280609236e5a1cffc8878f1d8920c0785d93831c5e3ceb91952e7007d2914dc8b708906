"use strict";

function _class_apply_descriptor_destructure(receiver, descriptor) {
    if (descriptor.set) {
        if (!("__destrObj" in descriptor)) {
            descriptor.__destrObj = {
                set value(v) {
                    descriptor.set.call(receiver, v);
                }
            };
        }

        return descriptor.__destrObj;
    } else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }

        return descriptor;
    }
}
exports._ = _class_apply_descriptor_destructure;
