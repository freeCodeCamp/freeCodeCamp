import { _ as _$3 } from '@swc/helpers/esm/_extends.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_destructuring_empty.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$4 } from '@swc/helpers/esm/_object_without_properties.js';
import { createHitsComponent } from 'instantsearch-ui-components';
import { h, Fragment, render } from 'preact';
import Template from '../../components/Template/Template.js';
import connectHits from '../../connectors/hits/connectHits.js';
import { createInsightsEventHandler } from '../../lib/insights/listener.js';
import defaultTemplates from './defaultTemplates.js';
import withInsights from '../../lib/insights/client.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'hits'
});
var Hits = createHitsComponent({
    createElement: h,
    Fragment: Fragment
});
var renderer = function renderer(param) {
    var renderState = param.renderState, cssClasses = param.cssClasses, containerNode = param.containerNode, templates = param.templates;
    return function(param, isFirstRendering) {
        var items = param.items, results = param.results, instantSearchInstance = param.instantSearchInstance, insights = param.insights, bindEvent = param.bindEvent, sendEvent = param.sendEvent, banner = param.banner;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        var handleInsightsClick = createInsightsEventHandler({
            insights: insights,
            sendEvent: sendEvent
        });
        var emptyComponent = function emptyComponent(_0) {
            _$2(_0); var rootProps = _$3({}, _0);
            return /*#__PURE__*/ h(Template, _(_$1({}, renderState.templateProps), {
                rootProps: rootProps,
                templateKey: "empty",
                data: results,
                rootTagName: "fragment"
            }));
        };
        // @MAJOR: Move default hit component back to the UI library
        // once flavour specificities are erased
        var itemComponent = function itemComponent(_0) {
            var hit = _0.hit, index = _0.index, rootProps = _$4(_0, [
                "hit",
                "index"
            ]);
            return /*#__PURE__*/ h(Template, _(_$1({}, renderState.templateProps), {
                templateKey: "item",
                rootTagName: "li",
                rootProps: _(_$1({}, rootProps), {
                    onClick: function onClick(event) {
                        handleInsightsClick(event);
                        rootProps.onClick();
                    },
                    onAuxClick: function onAuxClick(event) {
                        handleInsightsClick(event);
                        rootProps.onAuxClick();
                    }
                }),
                data: _(_$1({}, hit), {
                    get __hitIndex () {
                        return index;
                    }
                }),
                bindEvent: bindEvent,
                sendEvent: sendEvent
            }));
        };
        var bannerComponent = function bannerComponent(props) {
            return /*#__PURE__*/ h(Template, _(_$1({}, renderState.templateProps), {
                templateKey: "banner",
                data: props,
                rootTagName: "fragment"
            }));
        };
        render(/*#__PURE__*/ h(Hits, {
            hits: items,
            itemComponent: itemComponent,
            sendEvent: sendEvent,
            classNames: cssClasses,
            emptyComponent: emptyComponent,
            banner: banner,
            bannerComponent: templates.banner ? bannerComponent : undefined
        }), containerNode);
    };
};
var hits = (function hits(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, escapeHTML = _ref.escapeHTML, transformItems = _ref.transformItems, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, _ref_cssClasses = _ref.cssClasses, cssClasses = _ref_cssClasses === void 0 ? {} : _ref_cssClasses;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = withInsights(connectHits)(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        escapeHTML: escapeHTML,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.hits'
    });
});

export { hits as default };
