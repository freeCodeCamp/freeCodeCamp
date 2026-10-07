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
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _Panel = /*#__PURE__*/ _interop_require_default._(require("../../components/Panel/Panel"));
var _suit = require("../../lib/suit");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'panel'
});
var suit = (0, _suit.component)('Panel');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, bodyContainerNode = param.bodyContainerNode, cssClasses = param.cssClasses, templates = param.templates;
    return function(param) {
        var options = param.options, hidden = param.hidden, collapsible = param.collapsible, collapsed = param.collapsed;
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_Panel.default, {
            cssClasses: cssClasses,
            hidden: hidden,
            collapsible: collapsible,
            isCollapsed: collapsed,
            templates: templates,
            data: options,
            bodyElement: bodyContainerNode
        }), containerNode);
    };
};
/**
 * The panel widget wraps other widgets in a consistent panel design.
 * It also reacts, indicates and sets CSS classes when widgets are no longer relevant for refining.
 */ var panel = function panel(panelWidgetParams) {
    var _ref = panelWidgetParams || {}, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, _ref_hidden = _ref.hidden, hidden = _ref_hidden === void 0 ? function() {
        return false;
    } : _ref_hidden, collapsed = _ref.collapsed, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp;
    (0, _utils.warning)(typeof hidden === 'function', 'The `hidden` option in the "panel" widget expects a function returning a boolean (received type '.concat((0, _utils.getObjectType)(hidden), ")."));
    (0, _utils.warning)(typeof collapsed === 'undefined' || typeof collapsed === 'function', 'The `collapsed` option in the "panel" widget expects a function returning a boolean (received type '.concat((0, _utils.getObjectType)(collapsed), ")."));
    var bodyContainerNode = document.createElement('div');
    var collapsible = Boolean(collapsed);
    var collapsedFn = typeof collapsed === 'function' ? collapsed : function() {
        return false;
    };
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        noRefinementRoot: (0, _instantsearchuicomponents.cx)(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        collapsibleRoot: (0, _instantsearchuicomponents.cx)(suit({
            modifierName: 'collapsible'
        }), userCssClasses.collapsibleRoot),
        collapsedRoot: (0, _instantsearchuicomponents.cx)(suit({
            modifierName: 'collapsed'
        }), userCssClasses.collapsedRoot),
        collapseButton: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'collapseButton'
        }), userCssClasses.collapseButton),
        collapseIcon: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'collapseIcon'
        }), userCssClasses.collapseIcon),
        body: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'body'
        }), userCssClasses.body),
        header: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'header'
        }), userCssClasses.header),
        footer: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'footer'
        }), userCssClasses.footer)
    };
    return function(widgetFactory) {
        return function(widgetParams) {
            if (!(widgetParams && widgetParams.container)) {
                throw new Error(withUsage("The `container` option is required in the widget within the panel."));
            }
            var containerNode = (0, _utils.getContainerNode)(widgetParams.container);
            var defaultTemplates = {
                collapseButtonText: function collapseButtonText(param) {
                    var isCollapsed = param.collapsed;
                    return '<svg\n          class="'.concat(cssClasses.collapseIcon, '"\n          style="width: 1em; height: 1em;"\n          viewBox="0 0 500 500"\n        >\n        <path d="').concat(isCollapsed ? 'M100 250l300-150v300z' : 'M250 400l150-300H100z', '" fill="currentColor" />\n        </svg>');
                }
            };
            var renderPanel = renderer({
                containerNode: containerNode,
                bodyContainerNode: bodyContainerNode,
                cssClasses: cssClasses,
                templates: _object_spread._({}, defaultTemplates, templates)
            });
            var widget = widgetFactory(_object_spread_props._(_object_spread._({}, widgetParams), {
                container: bodyContainerNode
            }));
            // TypeScript somehow loses track of the ...widget type, since it's
            // not directly returned. Eventually the "as AugmentedWidget<typeof widgetFactory>"
            // will not be needed anymore.
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            return _object_spread_props._(_object_spread._({}, widget), {
                init: function init() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var _args = _sliced_to_array._(args, 1), renderOptions = _args[0];
                    var options = _object_spread._({}, widget.getWidgetRenderState ? widget.getWidgetRenderState(renderOptions) : {}, renderOptions);
                    renderPanel({
                        options: options,
                        hidden: true,
                        collapsible: collapsible,
                        collapsed: false
                    });
                    if (typeof widget.init === 'function') {
                        var _widget_init;
                        (_widget_init = widget.init).call.apply(_widget_init, [
                            this
                        ].concat(_to_consumable_array._(args)));
                    }
                },
                render: function render() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var _args = _sliced_to_array._(args, 1), renderOptions = _args[0];
                    var options = _object_spread._({}, widget.getWidgetRenderState ? widget.getWidgetRenderState(renderOptions) : {}, renderOptions);
                    renderPanel({
                        options: options,
                        hidden: Boolean(hidden(options)),
                        collapsible: collapsible,
                        collapsed: Boolean(collapsedFn(options))
                    });
                    if (typeof widget.render === 'function') {
                        var _widget_render;
                        (_widget_render = widget.render).call.apply(_widget_render, [
                            this
                        ].concat(_to_consumable_array._(args)));
                    }
                },
                dispose: function dispose() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    (0, _preact.render)(null, containerNode);
                    if (typeof widget.dispose === 'function') {
                        var _widget_dispose;
                        return (_widget_dispose = widget.dispose).call.apply(_widget_dispose, [
                            this
                        ].concat(_to_consumable_array._(args)));
                    }
                    return undefined;
                }
            });
        };
    };
};
var _default = panel;
