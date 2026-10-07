'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get deserializePayload () {
        return deserializePayload;
    },
    get serializePayload () {
        return serializePayload;
    }
});
function serializePayload(payload) {
    return btoa(encodeURIComponent(JSON.stringify(payload)));
}
function deserializePayload(serialized) {
    return JSON.parse(decodeURIComponent(atob(serialized)));
}
