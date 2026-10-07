'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addQueryID", {
    enumerable: true,
    get: function() {
        return addQueryID;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
function addQueryID(hits, queryID) {
    if (!queryID) {
        return hits;
    }
    return hits.map(function(hit) {
        return _object_spread_props._(_object_spread._({}, hit), {
            __queryID: queryID
        });
    });
}
