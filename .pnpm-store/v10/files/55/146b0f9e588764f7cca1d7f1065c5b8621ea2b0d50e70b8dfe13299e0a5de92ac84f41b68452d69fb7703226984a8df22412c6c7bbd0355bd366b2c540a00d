import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import Selector from '../../components/Selector/Selector.js';
import connectHitsPerPage from '../../connectors/hits-per-page/connectHitsPerPage.js';
import { component } from '../../lib/suit.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { find } from '../../lib/utils/find.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'hits-per-page'
});
var suit = component('HitsPerPage');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses;
    return function(param, isFirstRendering) {
        var items = param.items, refine = param.refine;
        if (isFirstRendering) return;
        var _ref = find(items, function(param) {
            var isRefined = param.isRefined;
            return isRefined;
        }) || {}, currentValue = _ref.value;
        render(/*#__PURE__*/ h("div", {
            className: cssClasses.root
        }, /*#__PURE__*/ h(Selector, {
            cssClasses: cssClasses,
            currentValue: currentValue,
            options: items,
            // @ts-expect-error: the refine function expects a number, but setValue will call it with a string. We don't want to change the type of the refine function because it's part of the connector API.
            setValue: refine
        })), containerNode);
    };
};
var hitsPerPage = function hitsPerPage(widgetParams) {
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
    var makeWidget = connectHitsPerPage(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        items: items,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.hitsPerPage'
    });
};

export { hitsPerPage as default };
