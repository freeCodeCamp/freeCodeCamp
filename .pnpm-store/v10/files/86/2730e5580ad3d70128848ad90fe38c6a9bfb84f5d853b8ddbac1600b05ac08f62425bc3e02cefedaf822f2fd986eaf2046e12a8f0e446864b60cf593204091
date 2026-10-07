import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import Selector from '../../components/Selector/Selector.js';
import connectSortBy from '../../connectors/sort-by/connectSortBy.js';
import { component } from '../../lib/suit.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'sort-by'
});
var suit = component('SortBy');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses;
    return function(param, isFirstRendering) {
        var currentRefinement = param.currentRefinement, options = param.options, refine = param.refine;
        if (isFirstRendering) {
            return;
        }
        render(/*#__PURE__*/ h("div", {
            className: cssClasses.root
        }, /*#__PURE__*/ h(Selector, {
            cssClasses: cssClasses,
            currentValue: currentRefinement,
            options: options,
            setValue: refine,
            ariaLabel: "Sort results by"
        })), containerNode);
    };
};
/**
 * Sort by selector is a widget used for letting the user choose between different
 * indices that contains the same data with a different order / ranking formula.
 */ var sortBy = function sortBy(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, items = _ref.items, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, transformItems = _ref.transformItems;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        select: cx(suit({
            descendantName: 'select'
        }), userCssClasses.select),
        option: cx(suit({
            descendantName: 'option'
        }), userCssClasses.option)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses
    });
    var makeWidget = connectSortBy(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        container: containerNode,
        items: items,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.sortBy'
    });
};

export { sortBy as default };
