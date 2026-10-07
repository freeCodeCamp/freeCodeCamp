import { _ } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$2 } from '@swc/helpers/esm/_sliced_to_array.js';
import { _ as _$3 } from '@swc/helpers/esm/_to_consumable_array.js';
import { cx } from 'instantsearch-ui-components';
import { render, h } from 'preact';
import Panel from '../../components/Panel/Panel.js';
import { component } from '../../lib/suit.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'panel'
});
var suit = component('Panel');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, bodyContainerNode = param.bodyContainerNode, cssClasses = param.cssClasses, templates = param.templates;
    return function(param) {
        var options = param.options, hidden = param.hidden, collapsible = param.collapsible, collapsed = param.collapsed;
        render(/*#__PURE__*/ h(Panel, {
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
    var bodyContainerNode = document.createElement('div');
    var collapsible = Boolean(collapsed);
    var collapsedFn = typeof collapsed === 'function' ? collapsed : function() {
        return false;
    };
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        noRefinementRoot: cx(suit({
            modifierName: 'noRefinement'
        }), userCssClasses.noRefinementRoot),
        collapsibleRoot: cx(suit({
            modifierName: 'collapsible'
        }), userCssClasses.collapsibleRoot),
        collapsedRoot: cx(suit({
            modifierName: 'collapsed'
        }), userCssClasses.collapsedRoot),
        collapseButton: cx(suit({
            descendantName: 'collapseButton'
        }), userCssClasses.collapseButton),
        collapseIcon: cx(suit({
            descendantName: 'collapseIcon'
        }), userCssClasses.collapseIcon),
        body: cx(suit({
            descendantName: 'body'
        }), userCssClasses.body),
        header: cx(suit({
            descendantName: 'header'
        }), userCssClasses.header),
        footer: cx(suit({
            descendantName: 'footer'
        }), userCssClasses.footer)
    };
    return function(widgetFactory) {
        return function(widgetParams) {
            if (!(widgetParams && widgetParams.container)) {
                throw new Error(withUsage("The `container` option is required in the widget within the panel."));
            }
            var containerNode = getContainerNode(widgetParams.container);
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
                templates: _({}, defaultTemplates, templates)
            });
            var widget = widgetFactory(_$1(_({}, widgetParams), {
                container: bodyContainerNode
            }));
            // TypeScript somehow loses track of the ...widget type, since it's
            // not directly returned. Eventually the "as AugmentedWidget<typeof widgetFactory>"
            // will not be needed anymore.
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            return _$1(_({}, widget), {
                init: function init() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var _args = _$2(args, 1), renderOptions = _args[0];
                    var options = _({}, widget.getWidgetRenderState ? widget.getWidgetRenderState(renderOptions) : {}, renderOptions);
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
                        ].concat(_$3(args)));
                    }
                },
                render: function render() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var _args = _$2(args, 1), renderOptions = _args[0];
                    var options = _({}, widget.getWidgetRenderState ? widget.getWidgetRenderState(renderOptions) : {}, renderOptions);
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
                        ].concat(_$3(args)));
                    }
                },
                dispose: function dispose() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    render(null, containerNode);
                    if (typeof widget.dispose === 'function') {
                        var _widget_dispose;
                        return (_widget_dispose = widget.dispose).call.apply(_widget_dispose, [
                            this
                        ].concat(_$3(args)));
                    }
                    return undefined;
                }
            });
        };
    };
};

export { panel as default };
