'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _RefinementList = /*#__PURE__*/ _interop_require_default._(require("../../components/RefinementList/RefinementList"));
var _connectRefinementList = /*#__PURE__*/ _interop_require_default._(require("../../connectors/refinement-list/connectRefinementList"));
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("../search-box/defaultTemplates"));
var _defaultTemplates1 = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'refinement-list'
});
var suit = (0, _suit.component)('RefinementList');
var searchBoxSuit = (0, _suit.component)('SearchBox');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, templates = param.templates, searchBoxTemplates = param.searchBoxTemplates, renderState = param.renderState, showMore = param.showMore, searchable = param.searchable, searchablePlaceholder = param.searchablePlaceholder, searchableIsAlwaysActive = param.searchableIsAlwaysActive, searchableSelectOnSubmit = param.searchableSelectOnSubmit;
    return function(param, isFirstRendering) {
        var refine = param.refine, items = param.items, createURL = param.createURL, searchForItems = param.searchForItems, isFromSearch = param.isFromSearch, instantSearchInstance = param.instantSearchInstance, toggleShowMore = param.toggleShowMore, isShowingMore = param.isShowingMore, hasExhaustiveItems = param.hasExhaustiveItems, canToggleShowMore = param.canToggleShowMore;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: _defaultTemplates1.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            renderState.searchBoxTemplateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: _defaultTemplates.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: searchBoxTemplates
            });
            return;
        }
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_RefinementList.default, {
            createURL: createURL,
            cssClasses: cssClasses,
            facetValues: items,
            templateProps: renderState.templateProps,
            searchBoxTemplateProps: renderState.searchBoxTemplateProps,
            toggleRefinement: refine,
            searchFacetValues: searchable ? searchForItems : undefined,
            searchPlaceholder: searchablePlaceholder,
            searchIsAlwaysActive: searchableIsAlwaysActive,
            isFromSearch: isFromSearch,
            showMore: showMore && !isFromSearch && items.length > 0,
            toggleShowMore: toggleShowMore,
            isShowingMore: isShowingMore,
            hasExhaustiveItems: hasExhaustiveItems,
            canToggleShowMore: canToggleShowMore,
            searchableSelectOnSubmit: searchableSelectOnSubmit
        }), containerNode);
    };
};
/**
 * The refinement list widget is one of the most common widget that you can find
 * in a search UI. With this widget, the user can filter the dataset based on facets.
 *
 * The refinement list displays only the most relevant facets for the current search
 * context. The sort option only affects the facet that are returned by the engine,
 * not which facets are returned.
 *
 * This widget also implements search for facet values, which is a mini search inside the
 * values of the facets. This makes easy to deal with uncommon facet values.
 *
 * @requirements
 *
 * The attribute passed to `attribute` must be declared as an
 * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
 * in your Algolia settings.
 *
 * If you also want to use search for facet values on this attribute, you need to make it searchable using the [dashboard](https://www.algolia.com/explorer/display/) or using the [API](https://www.algolia.com/doc/guides/searching/faceting/#search-for-facet-values).
 */ var refinementList = function refinementList(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attribute = _ref.attribute, operator = _ref.operator, sortBy = _ref.sortBy, limit = _ref.limit, showMore = _ref.showMore, showMoreLimit = _ref.showMoreLimit, _ref_searchable = _ref.searchable, searchable = _ref_searchable === void 0 ? false : _ref_searchable, _ref_searchablePlaceholder = _ref.searchablePlaceholder, searchablePlaceholder = _ref_searchablePlaceholder === void 0 ? 'Search...' : _ref_searchablePlaceholder, _ref_searchableEscapeFacetValues = _ref.searchableEscapeFacetValues, searchableEscapeFacetValues = _ref_searchableEscapeFacetValues === void 0 ? true : _ref_searchableEscapeFacetValues, _ref_searchableIsAlwaysActive = _ref.searchableIsAlwaysActive, searchableIsAlwaysActive = _ref_searchableIsAlwaysActive === void 0 ? true : _ref_searchableIsAlwaysActive, _ref_searchableSelectOnSubmit = _ref.searchableSelectOnSubmit, searchableSelectOnSubmit = _ref_searchableSelectOnSubmit === void 0 ? true : _ref_searchableSelectOnSubmit, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, transformItems = _ref.transformItems;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var escapeFacetValues = searchable ? Boolean(searchableEscapeFacetValues) : false;
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        noRefinementRoot: (0, _instantsearchuicomponents.cx)(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        list: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        selectedItem: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        searchBox: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'searchBox'
        }), userCssClasses.searchBox),
        label: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        checkbox: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'checkbox'
        }), userCssClasses.checkbox),
        labelText: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'labelText'
        }), userCssClasses.labelText),
        count: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'count'
        }), userCssClasses.count),
        noResults: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'noResults'
        }), userCssClasses.noResults),
        showMore: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'showMore'
        }), userCssClasses.showMore),
        disabledShowMore: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'showMore',
            modifierName: 'disabled'
        }), userCssClasses.disabledShowMore),
        searchable: {
            root: (0, _instantsearchuicomponents.cx)(searchBoxSuit(), userCssClasses.searchableRoot),
            form: (0, _instantsearchuicomponents.cx)(searchBoxSuit({
                descendantName: 'form'
            }), userCssClasses.searchableForm),
            input: (0, _instantsearchuicomponents.cx)(searchBoxSuit({
                descendantName: 'input'
            }), userCssClasses.searchableInput),
            submit: (0, _instantsearchuicomponents.cx)(searchBoxSuit({
                descendantName: 'submit'
            }), userCssClasses.searchableSubmit),
            submitIcon: (0, _instantsearchuicomponents.cx)(searchBoxSuit({
                descendantName: 'submitIcon'
            }), userCssClasses.searchableSubmitIcon),
            reset: (0, _instantsearchuicomponents.cx)(searchBoxSuit({
                descendantName: 'reset'
            }), userCssClasses.searchableReset),
            resetIcon: (0, _instantsearchuicomponents.cx)(searchBoxSuit({
                descendantName: 'resetIcon'
            }), userCssClasses.searchableResetIcon),
            loadingIndicator: (0, _instantsearchuicomponents.cx)(searchBoxSuit({
                descendantName: 'loadingIndicator'
            }), userCssClasses.searchableLoadingIndicator),
            loadingIcon: (0, _instantsearchuicomponents.cx)(searchBoxSuit({
                descendantName: 'loadingIcon'
            }), userCssClasses.searchableLoadingIcon)
        }
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        searchBoxTemplates: {
            submit: templates.searchableSubmit,
            reset: templates.searchableReset,
            loadingIndicator: templates.searchableLoadingIndicator
        },
        renderState: {},
        searchable: searchable,
        searchablePlaceholder: searchablePlaceholder,
        searchableIsAlwaysActive: searchableIsAlwaysActive,
        searchableSelectOnSubmit: searchableSelectOnSubmit,
        showMore: showMore
    });
    var makeWidget = (0, _connectRefinementList.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        attribute: attribute,
        operator: operator,
        limit: limit,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        sortBy: sortBy,
        escapeFacetValues: escapeFacetValues,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.refinementList'
    });
};
var _default = refinementList;
