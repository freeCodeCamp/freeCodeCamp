import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { createFilterSuggestionsComponent } from 'instantsearch-ui-components';
import { h, render } from 'preact';
import Template from '../../components/Template/Template.js';
import connectFilterSuggestions from '../../connectors/filter-suggestions/connectFilterSuggestions.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { prepareTemplateProps } from '../../lib/templating/prepareTemplateProps.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'filter-suggestions'
});
var FilterSuggestions = createFilterSuggestionsComponent({
    createElement: h,
    Fragment: 'fragment'
});
var createRenderer = function createRenderer(param) {
    var renderState = param.renderState, cssClasses = param.cssClasses, containerNode = param.containerNode, templates = param.templates, maxSuggestions = param.maxSuggestions;
    return function(props, isFirstRendering) {
        var suggestions = props.suggestions, isLoading = props.isLoading, refine = props.refine, instantSearchInstance = props.instantSearchInstance;
        var headerTemplate = templates.header === false ? undefined : templates.header;
        if (isFirstRendering) {
            renderState.templateProps = prepareTemplateProps({
                defaultTemplates: {},
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: {
                    header: headerTemplate,
                    item: templates.item,
                    empty: templates.empty
                }
            });
            return;
        }
        var headerComponent;
        if (templates.header === false) {
            headerComponent = false;
        } else if (headerTemplate) {
            headerComponent = function headerComponent(headerProps) {
                return /*#__PURE__*/ h(Template, _(_$1({}, renderState.templateProps), {
                    templateKey: "header",
                    rootTagName: "div",
                    data: headerProps
                }));
            };
        }
        var itemComponent = templates.item ? function(itemProps) {
            return /*#__PURE__*/ h(Template, _(_$1({}, renderState.templateProps), {
                templateKey: "item",
                rootTagName: "fragment",
                data: itemProps
            }));
        } : undefined;
        var emptyComponent = templates.empty ? function(emptyProps) {
            return /*#__PURE__*/ h(Template, _(_$1({}, renderState.templateProps), {
                templateKey: "empty",
                rootTagName: "div",
                data: emptyProps
            }));
        } : undefined;
        var uiProps = {
            suggestions: suggestions,
            isLoading: isLoading,
            refine: refine,
            skeletonCount: maxSuggestions,
            itemComponent: itemComponent,
            headerComponent: headerComponent,
            emptyComponent: emptyComponent
        };
        render(/*#__PURE__*/ h(FilterSuggestions, _$1({
            classNames: cssClasses
        }, uiProps)), containerNode);
    };
};
var filterSuggestions = (function filterSuggestions(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, _ref_cssClasses = _ref.cssClasses, cssClasses = _ref_cssClasses === void 0 ? {} : _ref_cssClasses, agentId = _ref.agentId, attributes = _ref.attributes, maxSuggestions = _ref.maxSuggestions, debounceMs = _ref.debounceMs, hitsToSample = _ref.hitsToSample, transformItems = _ref.transformItems, transport = _ref.transport;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = getContainerNode(container);
    var specializedRenderer = createRenderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates,
        maxSuggestions: maxSuggestions
    });
    var makeWidget = connectFilterSuggestions(specializedRenderer, function() {
        return render(null, containerNode);
    });
    return _(_$1({}, makeWidget({
        agentId: agentId,
        attributes: attributes,
        maxSuggestions: maxSuggestions,
        debounceMs: debounceMs,
        hitsToSample: hitsToSample,
        transformItems: transformItems,
        transport: transport
    })), {
        $$widgetType: 'ais.filterSuggestions'
    });
});

export { filterSuggestions as default };
