'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RefinementList", {
    enumerable: true,
    get: function() {
        return RefinementList;
    }
});
var _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _react = /*#__PURE__*/ _interop_require_wildcard._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _RefinementList = require("../ui/RefinementList");
var _SearchBox = require("../ui/SearchBox");
function RefinementList(_0) {
    var searchable = _0.searchable, searchablePlaceholder = _0.searchablePlaceholder, _0_searchableSelectOnSubmit = _0.searchableSelectOnSubmit, searchableSelectOnSubmit = _0_searchableSelectOnSubmit === void 0 ? true : _0_searchableSelectOnSubmit, attribute = _0.attribute, operator = _0.operator, limit = _0.limit, showMore = _0.showMore, showMoreLimit = _0.showMoreLimit, sortBy = _0.sortBy, escapeFacetValues = _0.escapeFacetValues, transformItems = _0.transformItems, translations = _0.translations, props = _object_without_properties._(_0, [
        "searchable",
        "searchablePlaceholder",
        "searchableSelectOnSubmit",
        "attribute",
        "operator",
        "limit",
        "showMore",
        "showMoreLimit",
        "sortBy",
        "escapeFacetValues",
        "transformItems",
        "translations"
    ]);
    var _useRefinementList = (0, _reactinstantsearchcore.useRefinementList)({
        attribute: attribute,
        operator: operator,
        limit: limit,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        sortBy: sortBy,
        escapeFacetValues: escapeFacetValues,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.refinementList'
    }), canRefine = _useRefinementList.canRefine, canToggleShowMore = _useRefinementList.canToggleShowMore, isFromSearch = _useRefinementList.isFromSearch, isShowingMore = _useRefinementList.isShowingMore, items = _useRefinementList.items, refine = _useRefinementList.refine, searchForItems = _useRefinementList.searchForItems, toggleShowMore = _useRefinementList.toggleShowMore;
    var _useState = _sliced_to_array._((0, _react.useState)(''), 2), inputValue = _useState[0], setInputValue = _useState[1];
    var inputRef = (0, _react.useRef)(null);
    function setQuery(newQuery) {
        var compositionComplete = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        setInputValue(newQuery);
        if (compositionComplete) {
            searchForItems(newQuery);
        }
    }
    function onRefine(item) {
        refine(item.value);
        setQuery('');
    }
    function onChange(event) {
        var compositionComplete = event.type === 'compositionend' || !event.nativeEvent.isComposing;
        setQuery(event.currentTarget.value, compositionComplete);
    }
    function onReset() {
        setQuery('');
    }
    function onSubmit() {
        if (searchableSelectOnSubmit === false) {
            return;
        }
        if (items.length > 0) {
            refine(items[0].value);
            setQuery('');
        }
    }
    var mergedTranslations = _object_spread._({
        resetButtonTitle: 'Clear the search query',
        submitButtonTitle: 'Submit the search query',
        noResultsText: 'No results.',
        showMoreButtonText: function showMoreButtonText(options) {
            return options.isShowingMore ? 'Show less' : 'Show more';
        }
    }, translations);
    var uiProps = {
        items: items,
        canRefine: canRefine,
        onRefine: onRefine,
        query: inputValue,
        searchBox: searchable && /*#__PURE__*/ _react.default.createElement(_SearchBox.SearchBox, {
            inputRef: inputRef,
            placeholder: searchablePlaceholder,
            isSearchStalled: false,
            value: inputValue,
            onChange: onChange,
            onReset: onReset,
            onSubmit: onSubmit,
            translations: {
                submitButtonTitle: mergedTranslations.submitButtonTitle,
                resetButtonTitle: mergedTranslations.resetButtonTitle
            }
        }),
        noResults: searchable && isFromSearch && items.length === 0 && mergedTranslations.noResultsText,
        canToggleShowMore: canToggleShowMore,
        onToggleShowMore: toggleShowMore,
        isShowingMore: isShowingMore,
        translations: {
            showMoreButtonText: mergedTranslations.showMoreButtonText
        }
    };
    return /*#__PURE__*/ _react.default.createElement(_RefinementList.RefinementList, _object_spread_props._(_object_spread._({}, props, uiProps), {
        showMore: showMore
    }));
}
