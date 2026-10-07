import { isIndexWidget } from './isIndexWidget.js';

function setIndexHelperState(finalUiState, indexWidget) {
    var nextIndexUiState = finalUiState[indexWidget.getIndexId()] || {};
    indexWidget.getHelper().setState(indexWidget.getWidgetSearchParameters(indexWidget.getHelper().state, {
        uiState: nextIndexUiState
    }));
    indexWidget.getWidgets().filter(isIndexWidget).forEach(function(widget) {
        return setIndexHelperState(finalUiState, widget);
    });
}

export { setIndexHelperState };
