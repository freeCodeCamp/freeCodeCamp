import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { createFilterSuggestionsComponent } from 'instantsearch-ui-components';
import React, { createElement, Fragment } from 'react';
import { useFilterSuggestions } from 'react-instantsearch-core';

var FilterSuggestionsUiComponent = createFilterSuggestionsComponent({
    createElement: createElement,
    Fragment: Fragment
});
function FilterSuggestions(_0) {
    var agentId = _0.agentId, attributes = _0.attributes, maxSuggestions = _0.maxSuggestions, debounceMs = _0.debounceMs, hitsToSample = _0.hitsToSample, transformItems = _0.transformItems, itemComponent = _0.itemComponent, headerComponent = _0.headerComponent, emptyComponent = _0.emptyComponent, transport = _0.transport, props = _(_0, [
        "agentId",
        "attributes",
        "maxSuggestions",
        "debounceMs",
        "hitsToSample",
        "transformItems",
        "itemComponent",
        "headerComponent",
        "emptyComponent",
        "transport"
    ]);
    var _useFilterSuggestions = useFilterSuggestions({
        agentId: agentId,
        attributes: attributes,
        maxSuggestions: maxSuggestions,
        debounceMs: debounceMs,
        hitsToSample: hitsToSample,
        transformItems: transformItems,
        transport: transport
    }, {
        $$widgetType: 'ais.filterSuggestions'
    }), suggestions = _useFilterSuggestions.suggestions, isLoading = _useFilterSuggestions.isLoading, refine = _useFilterSuggestions.refine;
    var uiProps = {
        suggestions: suggestions,
        isLoading: isLoading,
        refine: refine,
        skeletonCount: maxSuggestions,
        itemComponent: itemComponent,
        headerComponent: headerComponent,
        emptyComponent: emptyComponent
    };
    return /*#__PURE__*/ React.createElement(FilterSuggestionsUiComponent, _$1({}, props, uiProps));
}

export { FilterSuggestions };
