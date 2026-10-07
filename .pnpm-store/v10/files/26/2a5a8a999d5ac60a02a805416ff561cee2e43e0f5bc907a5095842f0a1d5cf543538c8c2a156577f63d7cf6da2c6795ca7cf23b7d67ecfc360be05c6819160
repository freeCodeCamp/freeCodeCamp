'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "walkIndex", {
    enumerable: true,
    get: function() {
        return walkIndex;
    }
});
var _isIndexWidget = require("./isIndexWidget");
function walkIndex(indexWidget, callback) {
    callback(indexWidget);
    indexWidget.getWidgets().forEach(function(widget) {
        if ((0, _isIndexWidget.isIndexWidget)(widget)) {
            walkIndex(widget, callback);
        }
    });
}
