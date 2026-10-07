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
    get createInitArgs () {
        return createInitArgs;
    },
    get createRenderArgs () {
        return createRenderArgs;
    }
});
function createInitArgs(instantSearchInstance, parent, uiState) {
    var helper = parent.getHelper();
    return {
        uiState: uiState,
        helper: helper,
        parent: parent,
        instantSearchInstance: instantSearchInstance,
        state: helper.state,
        renderState: instantSearchInstance.renderState,
        templatesConfig: instantSearchInstance.templatesConfig,
        createURL: parent.createURL,
        scopedResults: [],
        searchMetadata: {
            isSearchStalled: instantSearchInstance.status === 'stalled'
        },
        status: instantSearchInstance.status,
        error: instantSearchInstance.error
    };
}
function createRenderArgs(instantSearchInstance, parent, widget) {
    var results = parent.getResultsForWidget(widget);
    var helper = parent.getHelper();
    return {
        helper: helper,
        parent: parent,
        instantSearchInstance: instantSearchInstance,
        results: results,
        scopedResults: parent.getScopedResults(),
        state: results && '_state' in results ? results._state : helper.state,
        renderState: instantSearchInstance.renderState,
        templatesConfig: instantSearchInstance.templatesConfig,
        createURL: parent.createURL,
        searchMetadata: {
            isSearchStalled: instantSearchInstance.status === 'stalled'
        },
        status: instantSearchInstance.status,
        error: instantSearchInstance.error
    };
}
