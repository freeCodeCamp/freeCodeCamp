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
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../../components/Template/Template"));
var _connectRelatedProducts = /*#__PURE__*/ _interop_require_default._(require("../../connectors/related-products/connectRelatedProducts"));
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'related-products'
});
var RelatedProducts = (0, _instantsearchuicomponents.createRelatedProductsComponent)({
    createElement: _preact.h,
    Fragment: _preact.Fragment
});
function createRenderer(param) {
    var renderState = param.renderState, cssClasses = param.cssClasses, containerNode = param.containerNode, templates = param.templates;
    return function renderer(param, isFirstRendering) {
        var items = param.items, results = param.results, instantSearchInstance = param.instantSearchInstance, sendEvent = param.sendEvent;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: {},
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        var headerComponent = templates.header ? function(data) {
            return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, renderState.templateProps), {
                templateKey: "header",
                rootTagName: "fragment",
                data: {
                    cssClasses: data.classNames,
                    items: data.items
                }
            }));
        } : undefined;
        var itemComponent = templates.item ? function(_0) {
            var item = _0.item, _sendEvent = _0.sendEvent, rootProps = _object_without_properties._(_0, [
                "item",
                "sendEvent"
            ]);
            return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, renderState.templateProps), {
                templateKey: "item",
                rootTagName: "fragment",
                data: item,
                sendEvent: _sendEvent,
                rootProps: _object_spread._({}, rootProps)
            }));
        } : undefined;
        var emptyComponent = templates.empty ? function() {
            return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, renderState.templateProps), {
                templateKey: "empty",
                rootTagName: "fragment",
                data: results
            }));
        } : undefined;
        var layoutComponent = templates.layout ? function(data) {
            return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, renderState.templateProps), {
                templateKey: "layout",
                rootTagName: "fragment",
                data: {
                    sendEvent: sendEvent,
                    items: data.items,
                    templates: {
                        item: templates.item ? function(param) {
                            var item = param.item;
                            return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, renderState.templateProps), {
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
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(RelatedProducts, {
            items: items,
            sendEvent: sendEvent,
            classNames: cssClasses,
            headerComponent: headerComponent,
            itemComponent: itemComponent,
            emptyComponent: emptyComponent,
            layout: layoutComponent,
            status: instantSearchInstance.status
        }), containerNode);
    };
}
var _default = function relatedProducts(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, objectIDs = _ref.objectIDs, limit = _ref.limit, queryParameters = _ref.queryParameters, fallbackParameters = _ref.fallbackParameters, threshold = _ref.threshold, escapeHTML = _ref.escapeHTML, transformItems = _ref.transformItems, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, _ref_cssClasses = _ref.cssClasses, cssClasses = _ref_cssClasses === void 0 ? {} : _ref_cssClasses;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var specializedRenderer = createRenderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = (0, _connectRelatedProducts.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        objectIDs: objectIDs,
        limit: limit,
        queryParameters: queryParameters,
        fallbackParameters: fallbackParameters,
        threshold: threshold,
        escapeHTML: escapeHTML,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.relatedProducts'
    });
};
