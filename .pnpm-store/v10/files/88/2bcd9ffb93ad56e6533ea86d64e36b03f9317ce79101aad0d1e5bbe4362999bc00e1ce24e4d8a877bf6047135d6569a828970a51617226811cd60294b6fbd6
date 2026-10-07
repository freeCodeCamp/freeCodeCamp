import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_without_properties.js';
import { createLookingSimilarComponent } from 'instantsearch-ui-components';
import { h, Fragment, render } from 'preact';
import Template from '../../components/Template/Template.js';
import connectLookingSimilar from '../../connectors/looking-similar/connectLookingSimilar.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'looking-similar'
});
var LookingSimilar = createLookingSimilarComponent({
    createElement: h,
    Fragment: Fragment
});
function createRenderer(param) {
    var renderState = param.renderState, cssClasses = param.cssClasses, containerNode = param.containerNode, templates = param.templates;
    return function(param, isFirstRendering) {
        var items = param.items, results = param.results, instantSearchInstance = param.instantSearchInstance, sendEvent = param.sendEvent;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: {},
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        var headerComponent = templates.header ? function(data) {
            return /*#__PURE__*/ h(Template, _(_$1({}, renderState.templateProps), {
                templateKey: "header",
                rootTagName: "fragment",
                data: {
                    cssClasses: data.classNames,
                    items: data.items
                }
            }));
        } : undefined;
        var itemComponent = templates.item ? function(_0) {
            var item = _0.item, _sendEvent = _0.sendEvent, rootProps = _$2(_0, [
                "item",
                "sendEvent"
            ]);
            return /*#__PURE__*/ h(Template, _(_$1({}, renderState.templateProps), {
                templateKey: "item",
                rootTagName: "fragment",
                data: item,
                sendEvent: _sendEvent,
                rootProps: _$1({}, rootProps)
            }));
        } : undefined;
        var emptyComponent = templates.empty ? function() {
            return /*#__PURE__*/ h(Template, _(_$1({}, renderState.templateProps), {
                templateKey: "empty",
                rootTagName: "fragment",
                data: results
            }));
        } : undefined;
        var layoutComponent = templates.layout ? function(data) {
            return /*#__PURE__*/ h(Template, _(_$1({}, renderState.templateProps), {
                templateKey: "layout",
                rootTagName: "fragment",
                data: {
                    sendEvent: sendEvent,
                    items: data.items,
                    templates: {
                        item: templates.item ? function(param) {
                            var item = param.item;
                            return /*#__PURE__*/ h(Template, _(_$1({}, renderState.templateProps), {
                                templateKey: "item",
                                rootTagName: "fragment",
                                data: item,
                                sendEvent: sendEvent
                            }));
                        } : undefined
                    },
                    cssClasses: {
                        list: data.classNames.list,
                        item: data.classNames.item
                    }
                },
                sendEvent: sendEvent
            }));
        } : undefined;
        render(/*#__PURE__*/ h(LookingSimilar, {
            items: items,
            headerComponent: headerComponent,
            itemComponent: itemComponent,
            sendEvent: function sendEvent() {},
            classNames: cssClasses,
            emptyComponent: emptyComponent,
            layout: layoutComponent,
            status: instantSearchInstance.status
        }), containerNode);
    };
}
var lookingSimilar = (function lookingSimilar(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, objectIDs = _ref.objectIDs, limit = _ref.limit, queryParameters = _ref.queryParameters, fallbackParameters = _ref.fallbackParameters, threshold = _ref.threshold, escapeHTML = _ref.escapeHTML, transformItems = _ref.transformItems, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, _ref_cssClasses = _ref.cssClasses, cssClasses = _ref_cssClasses === void 0 ? {} : _ref_cssClasses;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var specializedRenderer = createRenderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = connectLookingSimilar(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        objectIDs: objectIDs,
        limit: limit,
        queryParameters: queryParameters,
        fallbackParameters: fallbackParameters,
        threshold: threshold,
        escapeHTML: escapeHTML,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.lookingSimilar'
    });
});

export { lookingSimilar as default };
