import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import RefinementList from '../../components/RefinementList/RefinementList.js';
import connectRefinementList from '../../connectors/refinement-list/connectRefinementList.js';
import { component } from '../../lib/suit.js';
import defaultTemplate from '../search-box/defaultTemplates.js';
import defaultTemplates from './defaultTemplates.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'refinement-list'
});
var suit = component('RefinementList');
var searchBoxSuit = component('SearchBox');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, templates = param.templates, searchBoxTemplates = param.searchBoxTemplates, renderState = param.renderState, showMore = param.showMore, searchable = param.searchable, searchablePlaceholder = param.searchablePlaceholder, searchableIsAlwaysActive = param.searchableIsAlwaysActive, searchableSelectOnSubmit = param.searchableSelectOnSubmit;
    return function(param, isFirstRendering) {
        var refine = param.refine, items = param.items, createURL = param.createURL, searchForItems = param.searchForItems, isFromSearch = param.isFromSearch, instantSearchInstance = param.instantSearchInstance, toggleShowMore = param.toggleShowMore, isShowingMore = param.isShowingMore, hasExhaustiveItems = param.hasExhaustiveItems, canToggleShowMore = param.canToggleShowMore;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            renderState.searchBoxTemplateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplate,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: searchBoxTemplates
            });
            return;
        }
        render(/*#__PURE__*/ h(RefinementList, {
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
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        noRefinementRoot: cx(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        list: cx(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: cx(suit({
            descendantName: 'item'
        }), userCssClasses.item),
        selectedItem: cx(suit({
            descendantName: 'item',
            modifierName: 'selected'
        }), userCssClasses.selectedItem),
        searchBox: cx(suit({
            descendantName: 'searchBox'
        }), userCssClasses.searchBox),
        label: cx(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        checkbox: cx(suit({
            descendantName: 'checkbox'
        }), userCssClasses.checkbox),
        labelText: cx(suit({
            descendantName: 'labelText'
        }), userCssClasses.labelText),
        count: cx(suit({
            descendantName: 'count'
        }), userCssClasses.count),
        noResults: cx(suit({
            descendantName: 'noResults'
        }), userCssClasses.noResults),
        showMore: cx(suit({
            descendantName: 'showMore'
        }), userCssClasses.showMore),
        disabledShowMore: cx(suit({
            descendantName: 'showMore',
            modifierName: 'disabled'
        }), userCssClasses.disabledShowMore),
        searchable: {
            root: cx(searchBoxSuit(), userCssClasses.searchableRoot),
            form: cx(searchBoxSuit({
                descendantName: 'form'
            }), userCssClasses.searchableForm),
            input: cx(searchBoxSuit({
                descendantName: 'input'
            }), userCssClasses.searchableInput),
            submit: cx(searchBoxSuit({
                descendantName: 'submit'
            }), userCssClasses.searchableSubmit),
            submitIcon: cx(searchBoxSuit({
                descendantName: 'submitIcon'
            }), userCssClasses.searchableSubmitIcon),
            reset: cx(searchBoxSuit({
                descendantName: 'reset'
            }), userCssClasses.searchableReset),
            resetIcon: cx(searchBoxSuit({
                descendantName: 'resetIcon'
            }), userCssClasses.searchableResetIcon),
            loadingIndicator: cx(searchBoxSuit({
                descendantName: 'loadingIndicator'
            }), userCssClasses.searchableLoadingIndicator),
            loadingIcon: cx(searchBoxSuit({
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
    var makeWidget = connectRefinementList(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
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

export { refinementList as default };
