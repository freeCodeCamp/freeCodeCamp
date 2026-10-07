'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addAbsolutePosition", {
    enumerable: true,
    get: function() {
        return addAbsolutePosition;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
function addAbsolutePosition(hits, page, hitsPerPage) {
    return hits.map(function(hit, idx) {
        return _object_spread_props._(_object_spread._({}, hit), {
            __position: hitsPerPage * page + idx + 1
        });
    });
}
