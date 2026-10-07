import { _ } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import RelevantSort from '../../components/RelevantSort/RelevantSort.js';
import connectRelevantSort from '../../connectors/relevant-sort/connectRelevantSort.js';
import { component } from '../../lib/suit.js';
import defaultTemplates from './defaultTemplates.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'relevant-sort'
});
var suit = component('RelevantSort');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, templates = param.templates;
    return function(param) {
        var isRelevantSorted = param.isRelevantSorted, isVirtualReplica = param.isVirtualReplica, refine = param.refine;
        render(/*#__PURE__*/ h(RelevantSort, {
            cssClasses: cssClasses,
            templates: templates,
            isRelevantSorted: isRelevantSorted,
            isVirtualReplica: isVirtualReplica,
            refine: refine
        }), containerNode);
    };
};
var relevantSort = function relevantSort(widgetParams) {
    var container = widgetParams.container, tmp = widgetParams.templates, userTemplates = tmp === void 0 ? {} : tmp, tmp1 = widgetParams.cssClasses, userCssClasses = tmp1 === void 0 ? {} : tmp1;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        text: cx(suit({
            descendantName: 'text'
        }), userCssClasses.text),
        button: cx(suit({
            descendantName: 'button'
        }), userCssClasses.button)
    };
    var templates = _({}, defaultTemplates, userTemplates);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = connectRelevantSort(specializedRenderer, function() {
        render(null, containerNode);
    });
    return _$1(_({}, makeWidget({})), {
        $$widgetType: 'ais.relevantSort'
    });
};

export { relevantSort as default };
