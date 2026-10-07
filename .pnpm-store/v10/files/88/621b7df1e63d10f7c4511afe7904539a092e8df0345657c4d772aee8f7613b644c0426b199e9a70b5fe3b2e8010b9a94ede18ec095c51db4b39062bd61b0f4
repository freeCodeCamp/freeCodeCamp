"use strict";

exports._ = exports._define_enumerable_properties = _define_enumerable_properties;
function _define_enumerable_properties(obj, descs) {
    for (var key in descs) {
        var desc = descs[key];
        desc.configurable = desc.enumerable = true;

        if ("value" in desc) desc.writable = true;

        Object.defineProperty(obj, key, desc);
    }

    if (Object.getOwnPropertySymbols) {
        var objectSymbols = Object.getOwnPropertySymbols(descs);
        for (var i = 0; i < objectSymbols.length; i++) {
            var sym = objectSymbols[i];
            var desc = descs[sym];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, sym, desc);
        }
    }

    return obj;
}
