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
var _Template = /*#__PURE__*/ _interop_require_default._(require("../../components/Template/Template"));
var _connectFilterSuggestions = /*#__PURE__*/ _interop_require_default._(require("../../connectors/filter-suggestions/connectFilterSuggestions"));
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'filter-suggestions'
});
var FilterSuggestions = (0, _instantsearchuicomponents.createFilterSuggestionsComponent)({
    createElement: _preact.h,
    Fragment: 'fragment'
});
var createRenderer = function createRenderer(param) {
    var renderState = param.renderState, cssClasses = param.cssClasses, containerNode = param.containerNode, templates = param.templates, maxSuggestions = param.maxSuggestions;
    return function(props, isFirstRendering) {
        var suggestions = props.suggestions, isLoading = props.isLoading, refine = props.refine, instantSearchInstance = props.instantSearchInstance;
        var headerTemplate = templates.header === false ? undefined : templates.header;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
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
                return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, renderState.templateProps), {
                    templateKey: "header",
                    rootTagName: "div",
                    data: headerProps
                }));
            };
        }
        var itemComponent = templates.item ? function(itemProps) {
            return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, renderState.templateProps), {
                templateKey: "item",
                rootTagName: "fragment",
                data: itemProps
            }));
        } : undefined;
        var emptyComponent = templates.empty ? function(emptyProps) {
            return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, renderState.templateProps), {
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
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(FilterSuggestions, _object_spread._({
            classNames: cssClasses
        }, uiProps)), containerNode);
    };
};
var _default = function filterSuggestions(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, _ref_cssClasses = _ref.cssClasses, cssClasses = _ref_cssClasses === void 0 ? {} : _ref_cssClasses, agentId = _ref.agentId, attributes = _ref.attributes, maxSuggestions = _ref.maxSuggestions, debounceMs = _ref.debounceMs, hitsToSample = _ref.hitsToSample, transformItems = _ref.transformItems, transport = _ref.transport;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var specializedRenderer = createRenderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates,
        maxSuggestions: maxSuggestions
    });
    var makeWidget = (0, _connectFilterSuggestions.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
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
};
