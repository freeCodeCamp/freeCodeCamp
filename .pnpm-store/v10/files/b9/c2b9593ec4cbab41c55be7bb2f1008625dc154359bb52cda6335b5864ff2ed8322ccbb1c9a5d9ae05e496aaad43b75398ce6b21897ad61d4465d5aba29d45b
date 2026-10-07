'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FilterSuggestions", {
    enumerable: true,
    get: function() {
        return FilterSuggestions;
    }
});
var _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_wildcard._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var FilterSuggestionsUiComponent = (0, _instantsearchuicomponents.createFilterSuggestionsComponent)({
    createElement: _react.createElement,
    Fragment: _react.Fragment
});
function FilterSuggestions(_0) {
    var agentId = _0.agentId, attributes = _0.attributes, maxSuggestions = _0.maxSuggestions, debounceMs = _0.debounceMs, hitsToSample = _0.hitsToSample, transformItems = _0.transformItems, itemComponent = _0.itemComponent, headerComponent = _0.headerComponent, emptyComponent = _0.emptyComponent, transport = _0.transport, props = _object_without_properties._(_0, [
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
    var _useFilterSuggestions = (0, _reactinstantsearchcore.useFilterSuggestions)({
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
    return /*#__PURE__*/ _react.default.createElement(FilterSuggestionsUiComponent, _object_spread._({}, props, uiProps));
}
