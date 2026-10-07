import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$3 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { _ as _$1 } from '@swc/helpers/esm/_sliced_to_array.js';
import React, { useState, useRef } from 'react';
import { useRefinementList } from 'react-instantsearch-core';
import { RefinementList as RefinementList$1 } from '../ui/RefinementList.js';
import { SearchBox } from '../ui/SearchBox.js';

function RefinementList(_0) {
    var searchable = _0.searchable, searchablePlaceholder = _0.searchablePlaceholder, _0_searchableSelectOnSubmit = _0.searchableSelectOnSubmit, searchableSelectOnSubmit = _0_searchableSelectOnSubmit === void 0 ? true : _0_searchableSelectOnSubmit, attribute = _0.attribute, operator = _0.operator, limit = _0.limit, showMore = _0.showMore, showMoreLimit = _0.showMoreLimit, sortBy = _0.sortBy, escapeFacetValues = _0.escapeFacetValues, transformItems = _0.transformItems, translations = _0.translations, props = _(_0, [
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
    var _useRefinementList = useRefinementList({
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
    var _useState = _$1(useState(''), 2), inputValue = _useState[0], setInputValue = _useState[1];
    var inputRef = useRef(null);
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
    var mergedTranslations = _$2({
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
        searchBox: searchable && /*#__PURE__*/ React.createElement(SearchBox, {
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
    return /*#__PURE__*/ React.createElement(RefinementList$1, _$3(_$2({}, props, uiProps), {
        showMore: showMore
    }));
}

export { RefinementList };
