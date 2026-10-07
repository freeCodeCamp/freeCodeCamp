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
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'clear-refinements',
    connector: true
});
var connectClearRefinements = function connectClearRefinements(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_includedAttributes = _ref.includedAttributes, includedAttributes = _ref_includedAttributes === void 0 ? [] : _ref_includedAttributes, _ref_excludedAttributes = _ref.excludedAttributes, excludedAttributes = _ref_excludedAttributes === void 0 ? [
            'query'
        ] : _ref_excludedAttributes, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(items) {
            return items;
        } : _ref_transformItems;
        if (widgetParams && widgetParams.includedAttributes && widgetParams.excludedAttributes) {
            throw new Error(withUsage('The options `includedAttributes` and `excludedAttributes` cannot be used together.'));
        }
        var connectorState = {
            refine: _utils.noop,
            createURL: function createURL() {
                return '';
            },
            attributesToClear: []
        };
        var cachedRefine = function cachedRefine() {
            return connectorState.refine();
        };
        var cachedCreateURL = function cachedCreateURL() {
            return connectorState.createURL();
        };
        return {
            $$type: 'ais.clearRefinements',
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose() {
                unmountFn();
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    clearRefinements: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var createURL = param.createURL, scopedResults = param.scopedResults, results = param.results;
                connectorState.attributesToClear = scopedResults.reduce(function(attributesToClear, scopedResult) {
                    return attributesToClear.concat(getAttributesToClear({
                        scopedResult: scopedResult,
                        includedAttributes: includedAttributes,
                        excludedAttributes: excludedAttributes,
                        transformItems: transformItems,
                        results: results
                    }));
                }, []);
                connectorState.refine = function() {
                    connectorState.attributesToClear.forEach(function(param) {
                        var indexHelper = param.helper, items = param.items;
                        indexHelper.setState((0, _utils.clearRefinements)({
                            helper: indexHelper,
                            attributesToClear: items
                        })).search();
                    });
                };
                connectorState.createURL = function() {
                    return createURL(_utils.mergeSearchParameters.apply(void 0, _to_consumable_array._(connectorState.attributesToClear.map(function(param) {
                        var indexHelper = param.helper, items = param.items;
                        return (0, _utils.clearRefinements)({
                            helper: indexHelper,
                            attributesToClear: items
                        });
                    }))));
                };
                var canRefine = connectorState.attributesToClear.some(function(attributeToClear) {
                    return attributeToClear.items.length > 0;
                });
                return {
                    canRefine: canRefine,
                    hasRefinements: canRefine,
                    refine: cachedRefine,
                    createURL: cachedCreateURL,
                    widgetParams: widgetParams
                };
            }
        };
    };
};
function getAttributesToClear(param) {
    var scopedResult = param.scopedResult, includedAttributes = param.includedAttributes, excludedAttributes = param.excludedAttributes, transformItems = param.transformItems, results = param.results;
    var includesQuery = includedAttributes.indexOf('query') !== -1 || excludedAttributes.indexOf('query') === -1;
    return {
        helper: scopedResult.helper,
        items: transformItems((0, _utils.uniq)((0, _utils.getRefinements)(scopedResult.results, scopedResult.helper.state, includesQuery).map(function(refinement) {
            return refinement.attribute;
        }).filter(function(attribute) {
            return(// If the array is empty (default case), we keep all the attributes
            includedAttributes.length === 0 || // Otherwise, only add the specified attributes
            includedAttributes.indexOf(attribute) !== -1);
        }).filter(function(attribute) {
            return(// If the query is included, we ignore the default `excludedAttributes = ['query']`
            attribute === 'query' && includesQuery || // Otherwise, ignore the excluded attributes
            excludedAttributes.indexOf(attribute) === -1);
        })), {
            results: results
        })
    };
}
var _default = connectClearRefinements;
