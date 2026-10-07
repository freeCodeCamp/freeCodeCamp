"use strict";

exports._ = exports._check_private_redeclaration = _check_private_redeclaration;
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
