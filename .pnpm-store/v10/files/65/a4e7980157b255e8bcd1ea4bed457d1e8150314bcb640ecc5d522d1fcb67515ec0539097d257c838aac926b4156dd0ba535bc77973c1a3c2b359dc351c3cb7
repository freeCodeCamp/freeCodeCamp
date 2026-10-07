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
var _extends = require("@swc/helpers/_/_extends");
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_destructuring_empty = require("@swc/helpers/_/_object_destructuring_empty");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../../components/Template/Template"));
var _connectHits = /*#__PURE__*/ _interop_require_default._(require("../../connectors/hits/connectHits"));
var _insights = require("../../lib/insights");
var _listener = require("../../lib/insights/listener");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'hits'
});
var Hits = (0, _instantsearchuicomponents.createHitsComponent)({
    createElement: _preact.h,
    Fragment: _preact.Fragment
});
var renderer = function renderer(param) {
    var renderState = param.renderState, cssClasses = param.cssClasses, containerNode = param.containerNode, templates = param.templates;
    return function(param, isFirstRendering) {
        var items = param.items, results = param.results, instantSearchInstance = param.instantSearchInstance, insights = param.insights, bindEvent = param.bindEvent, sendEvent = param.sendEvent, banner = param.banner;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: _defaultTemplates.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        var handleInsightsClick = (0, _listener.createInsightsEventHandler)({
            insights: insights,
            sendEvent: sendEvent
        });
        var emptyComponent = function emptyComponent(_0) {
            _object_destructuring_empty._(_0); var rootProps = _extends._({}, _0);
            return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, renderState.templateProps), {
                rootProps: rootProps,
                templateKey: "empty",
                data: results,
                rootTagName: "fragment"
            }));
        };
        // @MAJOR: Move default hit component back to the UI library
        // once flavour specificities are erased
        var itemComponent = function itemComponent(_0) {
            var hit = _0.hit, index = _0.index, rootProps = _object_without_properties._(_0, [
                "hit",
                "index"
            ]);
            return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, renderState.templateProps), {
                templateKey: "item",
                rootTagName: "li",
                rootProps: _object_spread_props._(_object_spread._({}, rootProps), {
                    onClick: function onClick(event) {
                        handleInsightsClick(event);
                        rootProps.onClick();
                    },
                    onAuxClick: function onAuxClick(event) {
                        handleInsightsClick(event);
                        rootProps.onAuxClick();
                    }
                }),
                data: _object_spread_props._(_object_spread._({}, hit), {
                    get __hitIndex () {
                        (0, _utils.warning)(false, 'The `__hitIndex` property is deprecated. Use the absolute `__position` instead.');
                        return index;
                    }
                }),
                bindEvent: bindEvent,
                sendEvent: sendEvent
            }));
        };
        var bannerComponent = function bannerComponent(props) {
            return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, renderState.templateProps), {
                templateKey: "banner",
                data: props,
                rootTagName: "fragment"
            }));
        };
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(Hits, {
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
var _default = function hits(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, escapeHTML = _ref.escapeHTML, transformItems = _ref.transformItems, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, _ref_cssClasses = _ref.cssClasses, cssClasses = _ref_cssClasses === void 0 ? {} : _ref_cssClasses;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = (0, _insights.withInsights)(_connectHits.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        escapeHTML: escapeHTML,
        transformItems: transformItems
    })), {
        $$widgetType: 'ais.hits'
    });
};
