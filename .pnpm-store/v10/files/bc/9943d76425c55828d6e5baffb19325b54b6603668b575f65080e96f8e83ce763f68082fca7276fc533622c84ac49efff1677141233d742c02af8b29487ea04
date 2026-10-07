'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setIndexHelperState", {
    enumerable: true,
    get: function() {
        return setIndexHelperState;
    }
});
require("./checkIndexUiState");
var _isIndexWidget = require("./isIndexWidget");
function setIndexHelperState(finalUiState, indexWidget) {
    var nextIndexUiState = finalUiState[indexWidget.getIndexId()] || {};
    indexWidget.getHelper().setState(indexWidget.getWidgetSearchParameters(indexWidget.getHelper().state, {
        uiState: nextIndexUiState
    }));
    indexWidget.getWidgets().filter(_isIndexWidget.isIndexWidget).forEach(function(widget) {
        return setIndexHelperState(finalUiState, widget);
    });
}
