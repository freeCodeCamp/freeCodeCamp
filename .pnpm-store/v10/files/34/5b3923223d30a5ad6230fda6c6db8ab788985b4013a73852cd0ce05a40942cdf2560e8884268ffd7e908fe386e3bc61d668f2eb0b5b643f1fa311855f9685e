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
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _type_of = require("@swc/helpers/_/_type_of");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'dynamic-widgets',
    connector: true
});
var MAX_WILDCARD_FACETS = 20;
var connectDynamicWidgets = function connectDynamicWidgets(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var widgets = widgetParams.widgets, _widgetParams_maxValuesPerFacet = widgetParams.maxValuesPerFacet, maxValuesPerFacet = _widgetParams_maxValuesPerFacet === void 0 ? 20 : _widgetParams_maxValuesPerFacet, _widgetParams_facets = widgetParams.facets, facets = _widgetParams_facets === void 0 ? [
            '*'
        ] : _widgetParams_facets, _widgetParams_transformItems = widgetParams.transformItems, transformItems = _widgetParams_transformItems === void 0 ? function(items) {
            return items;
        } : _widgetParams_transformItems, fallbackWidget = widgetParams.fallbackWidget;
        if (!(widgets && Array.isArray(widgets) && widgets.every(function(widget) {
            return (typeof widget === "undefined" ? "undefined" : _type_of._(widget)) === 'object';
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
                    var attribute = (0, _utils.getWidgetAttribute)(widget, initOptions);
                    localWidgets.set(attribute, {
                        widget: widget,
                        isMounted: false
                    });
                });
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
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
                renderFn(_object_spread_props._(_object_spread._({}, renderState), {
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
                return _object_spread_props._(_object_spread._({}, renderState), {
                    dynamicWidgets: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, state = param.state;
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
                (0, _utils.warning)(maxValuesPerFacet >= (state.maxValuesPerFacet || 0), "The maxValuesPerFacet set by dynamic widgets (".concat(maxValuesPerFacet, ") is smaller than one of the limits set by a widget (").concat(state.maxValuesPerFacet, "). This causes a mismatch in query parameters and thus an extra network request when that widget is mounted."));
                (0, _utils.warning)(attributesToRender.length <= MAX_WILDCARD_FACETS || widgetParams.facets !== undefined, "More than ".concat(MAX_WILDCARD_FACETS, " facets are requested to be displayed without explicitly setting which facets to retrieve. This could have a performance impact. Set \"facets\" to [] to do two smaller network requests, or explicitly to ['*'] to avoid this warning."));
                return {
                    attributesToRender: attributesToRender,
                    widgetParams: widgetParams
                };
            }
        };
    };
};
var _default = connectDynamicWidgets;
