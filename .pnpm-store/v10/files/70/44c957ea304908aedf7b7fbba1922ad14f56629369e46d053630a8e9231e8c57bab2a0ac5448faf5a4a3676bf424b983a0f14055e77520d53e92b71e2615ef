import '@swc/helpers/esm/_sliced_to_array.js';
import '@swc/helpers/esm/_to_consumable_array.js';
import { isIndexWidget } from './index20.js';

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
