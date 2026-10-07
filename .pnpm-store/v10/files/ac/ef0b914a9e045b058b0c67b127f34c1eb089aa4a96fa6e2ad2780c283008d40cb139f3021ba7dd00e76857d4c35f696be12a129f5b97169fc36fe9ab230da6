import { _ } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import QueryRuleCustomData from '../../components/QueryRuleCustomData/QueryRuleCustomData.js';
import connectQueryRules from '../../connectors/query-rules/connectQueryRules.js';
import { component } from '../../lib/suit.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';

var defaultTemplates = {
    default: function _default(param) {
        var items = param.items;
        return JSON.stringify(items, null, 2);
    }
};
var withUsage = createDocumentationMessageGenerator({
    name: 'query-rule-custom-data'
});
var suit = component('QueryRuleCustomData');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, templates = param.templates;
    return function(param) {
        var items = param.items;
        render(/*#__PURE__*/ h(QueryRuleCustomData, {
            cssClasses: cssClasses,
            templates: templates,
            items: items
        }), containerNode);
    };
};
var queryRuleCustomData = function queryRuleCustomData(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, tmp1 = _ref.templates, userTemplates = tmp1 === void 0 ? {} : tmp1, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
        return items;
    } : _ref_transformItems;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var cssClasses = {
        root: cx(suit(), userCssClasses.root)
    };
    var containerNode = getContainerNode(container);
    var templates = _({}, defaultTemplates, userTemplates);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = connectQueryRules(specializedRenderer, function() {
        render(null, containerNode);
    });
    return _$1(_({}, makeWidget({
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.queryRuleCustomData'
    });
};

export { queryRuleCustomData as default, defaultTemplates };
