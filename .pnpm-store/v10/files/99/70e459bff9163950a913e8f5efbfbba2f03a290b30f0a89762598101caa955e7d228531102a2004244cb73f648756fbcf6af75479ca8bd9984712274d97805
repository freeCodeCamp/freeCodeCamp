import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import CurrentRefinements from '../../components/CurrentRefinements/CurrentRefinements.js';
import connectCurrentRefinements from '../../connectors/current-refinements/connectCurrentRefinements.js';
import { component } from '../../lib/suit.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'current-refinements'
});
var suit = component('CurrentRefinements');
var renderer = function renderer(param, isFirstRender) {
    var items = param.items, widgetParams = param.widgetParams, canRefine = param.canRefine;
    if (isFirstRender) {
        return;
    }
    var container = widgetParams.container, cssClasses = widgetParams.cssClasses;
    render(/*#__PURE__*/ h(CurrentRefinements, {
        cssClasses: cssClasses,
        items: items,
        canRefine: canRefine
    }), container);
};
var currentRefinements = function currentRefinements(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, includedAttributes = _ref.includedAttributes, excludedAttributes = _ref.excludedAttributes, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, transformItems = _ref.transformItems;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
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
        label: cx(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        category: cx(suit({
            descendantName: 'category'
        }), userCssClasses.category),
        categoryLabel: cx(suit({
            descendantName: 'categoryLabel'
        }), userCssClasses.categoryLabel),
        delete: cx(suit({
            descendantName: 'delete'
        }), userCssClasses.delete)
    };
    var makeWidget = connectCurrentRefinements(renderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        container: containerNode,
        cssClasses: cssClasses,
        includedAttributes: includedAttributes,
        excludedAttributes: excludedAttributes,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.currentRefinements'
    });
};

export { currentRefinements as default };
