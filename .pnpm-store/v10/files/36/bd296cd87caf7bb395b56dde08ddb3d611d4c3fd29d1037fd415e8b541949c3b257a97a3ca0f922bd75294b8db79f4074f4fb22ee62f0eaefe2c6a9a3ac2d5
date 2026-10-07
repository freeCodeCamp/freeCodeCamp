import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_type_of.js';
import { getWidgetAttribute } from '../../lib/utils/getWidgetAttribute.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'dynamic-widgets',
    connector: true
});
var connectDynamicWidgets = function connectDynamicWidgets(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var widgets = widgetParams.widgets, _widgetParams_maxValuesPerFacet = widgetParams.maxValuesPerFacet, maxValuesPerFacet = _widgetParams_maxValuesPerFacet === void 0 ? 20 : _widgetParams_maxValuesPerFacet, _widgetParams_facets = widgetParams.facets, facets = _widgetParams_facets === void 0 ? [
            '*'
        ] : _widgetParams_facets, _widgetParams_transformItems = widgetParams.transformItems, transformItems = _widgetParams_transformItems === void 0 ? function(items) {
            return items;
        } : _widgetParams_transformItems, fallbackWidget = widgetParams.fallbackWidget;
        if (!(widgets && Array.isArray(widgets) && widgets.every(function(widget) {
            return (typeof widget === "undefined" ? "undefined" : _(widget)) === 'object';
        }))) {
            throw new Error(withUsage('The `widgets` option expects an array of widgets.'));
        }
        if (!Array.isArray(facets)) {
            throw new Error(withUsage("The `facets` option only accepts an array of facets, you passed ".concat(JSON.stringify(facets))));
        }
        var localWidgets = new Map();
        return {
            $$type: 'ais.dynamicWidgets',
            init: function init(initOptions) {
                widgets.forEach(function(widget) {
                    var attribute = getWidgetAttribute(widget, initOptions);
                    localWidgets.set(attribute, {
                        widget: widget,
                        isMounted: false
                    });
                });
                renderFn(_$1(_$2({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var parent = renderOptions.parent;
                var renderState = this.getWidgetRenderState(renderOptions);
                var widgetsToUnmount = [];
                var widgetsToMount = [];
                if (fallbackWidget) {
                    renderState.attributesToRender.forEach(function(attribute) {
                        if (!localWidgets.has(attribute)) {
                            var widget = fallbackWidget({
                                attribute: attribute
                            });
                            localWidgets.set(attribute, {
                                widget: widget,
                                isMounted: false
                            });
                        }
                    });
                }
                localWidgets.forEach(function(param, attribute) {
                    var widget = param.widget, isMounted = param.isMounted;
                    var shouldMount = renderState.attributesToRender.indexOf(attribute) > -1;
                    if (!isMounted && shouldMount) {
                        widgetsToMount.push(widget);
                        localWidgets.set(attribute, {
                            widget: widget,
                            isMounted: true
                        });
                    } else if (isMounted && !shouldMount) {
                        widgetsToUnmount.push(widget);
                        localWidgets.set(attribute, {
                            widget: widget,
                            isMounted: false
                        });
                    }
                });
                parent.addWidgets(widgetsToMount);
                // make sure this only happens after the regular render, otherwise it
                // happens too quick, since render is "deferred" for the next microtask,
                // so this needs to be a whole task later
                setTimeout(function() {
                    return parent.removeWidgets(widgetsToUnmount);
                }, 0);
                renderFn(_$1(_$2({}, renderState), {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
            },
            dispose: function dispose(param) {
                var parent = param.parent;
                var toRemove = [];
                localWidgets.forEach(function(param) {
                    var widget = param.widget, isMounted = param.isMounted;
                    if (isMounted) {
                        toRemove.push(widget);
                    }
                });
                parent.removeWidgets(toRemove);
                unmountFn();
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state) {
                return facets.reduce(function(acc, curr) {
                    return acc.addFacet(curr);
                }, state.setQueryParameters({
                    maxValuesPerFacet: Math.max(maxValuesPerFacet || 0, state.maxValuesPerFacet || 0)
                }));
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _$1(_$2({}, renderState), {
                    dynamicWidgets: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results; param.state;
                var _ref;
                var _results_renderingContent_facetOrdering_facets, _results_renderingContent_facetOrdering, _results_renderingContent;
                if (!results) {
                    return {
                        attributesToRender: [],
                        widgetParams: widgetParams
                    };
                }
                var attributesToRender = transformItems((_ref = (_results_renderingContent = results.renderingContent) === null || _results_renderingContent === void 0 ? void 0 : (_results_renderingContent_facetOrdering = _results_renderingContent.facetOrdering) === null || _results_renderingContent_facetOrdering === void 0 ? void 0 : (_results_renderingContent_facetOrdering_facets = _results_renderingContent_facetOrdering.facets) === null || _results_renderingContent_facetOrdering_facets === void 0 ? void 0 : _results_renderingContent_facetOrdering_facets.order) !== null && _ref !== void 0 ? _ref : [], {
                    results: results
                });
                if (!Array.isArray(attributesToRender)) {
                    throw new Error(withUsage('The `transformItems` option expects a function that returns an Array.'));
                }
                return {
                    attributesToRender: attributesToRender,
                    widgetParams: widgetParams
                };
            }
        };
    };
};

export { connectDynamicWidgets as default };
