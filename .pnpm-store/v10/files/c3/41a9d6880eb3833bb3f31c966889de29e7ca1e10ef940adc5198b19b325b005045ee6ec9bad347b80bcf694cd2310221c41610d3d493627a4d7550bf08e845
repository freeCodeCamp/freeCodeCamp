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
var _define_property = require("@swc/helpers/_/_define_property");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'range-input',
    connector: true
}, {
    name: 'range-slider',
    connector: true
});
var $$type = 'ais.range';
function toPrecision(param) {
    var min = param.min, max = param.max, precision = param.precision;
    var pow = Math.pow(10, precision);
    return {
        min: min ? Math.floor(min * pow) / pow : min,
        max: max ? Math.ceil(max * pow) / pow : max
    };
}
/**
 * **Range** connector provides the logic to create custom widget that will let
 * the user refine results using a numeric range.
 *
 * This connectors provides a `refine()` function that accepts bounds. It will also provide
 * information about the min and max bounds for the current result set.
 */ var connectRange = function connectRange(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_attribute = _ref.attribute, attribute = _ref_attribute === void 0 ? '' : _ref_attribute, minBound = _ref.min, maxBound = _ref.max, _ref_precision = _ref.precision, precision = _ref_precision === void 0 ? 0 : _ref_precision;
        if (!attribute) {
            throw new Error(withUsage('The `attribute` option is required.'));
        }
        if ((0, _utils.isFiniteNumber)(minBound) && (0, _utils.isFiniteNumber)(maxBound) && minBound > maxBound) {
            throw new Error(withUsage("The `max` option can't be lower than `min`."));
        }
        var formatToNumber = function formatToNumber(v) {
            return Number(Number(v).toFixed(precision));
        };
        var rangeFormatter = {
            from: function from(v) {
                return v.toLocaleString();
            },
            to: function to(v) {
                return formatToNumber(v).toLocaleString();
            }
        };
        // eslint-disable-next-line complexity
        var getRefinedState = function getRefinedState(helper, currentRange, nextMin, nextMax) {
            var resolvedState = helper.state;
            var currentRangeMin = currentRange.min, currentRangeMax = currentRange.max;
            var _ref = _sliced_to_array._(resolvedState.getNumericRefinement(attribute, '>=') || [], 1), min = _ref[0];
            var _ref1 = _sliced_to_array._(resolvedState.getNumericRefinement(attribute, '<=') || [], 1), max = _ref1[0];
            var isResetMin = nextMin === undefined || nextMin === '';
            var isResetMax = nextMax === undefined || nextMax === '';
            var _toPrecision = toPrecision({
                min: !isResetMin ? parseFloat(nextMin) : undefined,
                max: !isResetMax ? parseFloat(nextMax) : undefined,
                precision: precision
            }), nextMinAsNumber = _toPrecision.min, nextMaxAsNumber = _toPrecision.max;
            var newNextMin;
            if (!(0, _utils.isFiniteNumber)(minBound) && currentRangeMin === nextMinAsNumber) {
                newNextMin = undefined;
            } else if ((0, _utils.isFiniteNumber)(minBound) && isResetMin) {
                newNextMin = minBound;
            } else {
                newNextMin = nextMinAsNumber;
            }
            var newNextMax;
            if (!(0, _utils.isFiniteNumber)(maxBound) && currentRangeMax === nextMaxAsNumber) {
                newNextMax = undefined;
            } else if ((0, _utils.isFiniteNumber)(maxBound) && isResetMax) {
                newNextMax = maxBound;
            } else {
                newNextMax = nextMaxAsNumber;
            }
            var isResetNewNextMin = newNextMin === undefined;
            var isGreaterThanCurrentRange = (0, _utils.isFiniteNumber)(currentRangeMin) && currentRangeMin <= newNextMin;
            var isMinValid = isResetNewNextMin || (0, _utils.isFiniteNumber)(newNextMin) && (!(0, _utils.isFiniteNumber)(currentRangeMin) || isGreaterThanCurrentRange);
            var isResetNewNextMax = newNextMax === undefined;
            var isLowerThanRange = (0, _utils.isFiniteNumber)(newNextMax) && currentRangeMax >= newNextMax;
            var isMaxValid = isResetNewNextMax || (0, _utils.isFiniteNumber)(newNextMax) && (!(0, _utils.isFiniteNumber)(currentRangeMax) || isLowerThanRange);
            var hasMinChange = min !== newNextMin;
            var hasMaxChange = max !== newNextMax;
            if ((hasMinChange || hasMaxChange) && isMinValid && isMaxValid) {
                resolvedState = resolvedState.removeNumericRefinement(attribute);
                if ((0, _utils.isFiniteNumber)(newNextMin)) {
                    resolvedState = resolvedState.addNumericRefinement(attribute, '>=', newNextMin);
                }
                if ((0, _utils.isFiniteNumber)(newNextMax)) {
                    resolvedState = resolvedState.addNumericRefinement(attribute, '<=', newNextMax);
                }
                return resolvedState.resetPage();
            }
            return null;
        };
        var createSendEvent = function createSendEvent(instantSearchInstance) {
            return function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                if (args.length === 1) {
                    instantSearchInstance.sendEventToInsights(args[0]);
                    return;
                }
            };
        };
        function _getCurrentRange(stats) {
            var min;
            if ((0, _utils.isFiniteNumber)(minBound)) {
                min = minBound;
            } else if ((0, _utils.isFiniteNumber)(stats.min)) {
                min = stats.min;
            } else {
                min = 0;
            }
            var max;
            if ((0, _utils.isFiniteNumber)(maxBound)) {
                max = maxBound;
            } else if ((0, _utils.isFiniteNumber)(stats.max)) {
                max = stats.max;
            } else {
                max = 0;
            }
            return toPrecision({
                min: min,
                max: max,
                precision: precision
            });
        }
        function _getCurrentRefinement(helper) {
            var _ref = _sliced_to_array._(helper.getNumericRefinement(attribute, '>=') || [], 1), minValue = _ref[0];
            var _ref1 = _sliced_to_array._(helper.getNumericRefinement(attribute, '<=') || [], 1), maxValue = _ref1[0];
            var min = (0, _utils.isFiniteNumber)(minValue) ? minValue : -Infinity;
            var max = (0, _utils.isFiniteNumber)(maxValue) ? maxValue : Infinity;
            return [
                min,
                max
            ];
        }
        function _refine(helper, currentRange) {
            return function() {
                var _ref = _sliced_to_array._(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [
                    undefined,
                    undefined
                ], 2), nextMin = _ref[0], nextMax = _ref[1];
                var refinedState = getRefinedState(helper, currentRange, nextMin, nextMax);
                if (refinedState) {
                    helper.setState(refinedState).search();
                }
            };
        }
        return {
            $$type: $$type,
            init: function init(initOptions) {
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                renderFn(_object_spread_props._(_object_spread._({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    range: _object_spread_props._(_object_spread._({}, renderState.range), _define_property._({}, attribute, this.getWidgetRenderState(renderOptions)))
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, helper = param.helper, instantSearchInstance = param.instantSearchInstance;
                var facetsFromResults = results && results.disjunctiveFacets || [];
                var facet = (0, _utils.find)(facetsFromResults, function(facetResult) {
                    return facetResult.name === attribute;
                });
                var stats = facet && facet.stats || {
                    min: undefined,
                    max: undefined
                };
                var currentRange = _getCurrentRange(stats);
                var start = _getCurrentRefinement(helper);
                var refine;
                if (!results) {
                    // On first render pass an empty range
                    // to be able to bypass the validation
                    // related to it
                    refine = _refine(helper, {
                        min: undefined,
                        max: undefined
                    });
                } else {
                    refine = _refine(helper, currentRange);
                }
                return {
                    refine: refine,
                    canRefine: currentRange.min !== currentRange.max,
                    format: rangeFormatter,
                    range: currentRange,
                    sendEvent: createSendEvent(instantSearchInstance),
                    widgetParams: _object_spread_props._(_object_spread._({}, widgetParams), {
                        precision: precision
                    }),
                    start: start
                };
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state.removeDisjunctiveFacet(attribute).removeNumericRefinement(attribute);
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var _searchParameters_getNumericRefinements = searchParameters.getNumericRefinements(attribute), tmp = _searchParameters_getNumericRefinements['>='], min = tmp === void 0 ? [] : tmp, tmp1 = _searchParameters_getNumericRefinements['<='], max = tmp1 === void 0 ? [] : tmp1;
                if (min.length === 0 && max.length === 0) {
                    return uiState;
                }
                return _object_spread_props._(_object_spread._({}, uiState), {
                    range: _object_spread_props._(_object_spread._({}, uiState.range), _define_property._({}, attribute, "".concat(min, ":").concat(max)))
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var widgetSearchParameters = searchParameters.addDisjunctiveFacet(attribute).setQueryParameters({
                    numericRefinements: _object_spread_props._(_object_spread._({}, searchParameters.numericRefinements), _define_property._({}, attribute, {}))
                });
                if ((0, _utils.isFiniteNumber)(minBound)) {
                    widgetSearchParameters = widgetSearchParameters.addNumericRefinement(attribute, '>=', minBound);
                }
                if ((0, _utils.isFiniteNumber)(maxBound)) {
                    widgetSearchParameters = widgetSearchParameters.addNumericRefinement(attribute, '<=', maxBound);
                }
                var value = uiState.range && uiState.range[attribute];
                if (!value || value.indexOf(':') === -1) {
                    return widgetSearchParameters;
                }
                var _value_split_map = _sliced_to_array._(value.split(':').map(parseFloat), 2), lowerBound = _value_split_map[0], upperBound = _value_split_map[1];
                if ((0, _utils.isFiniteNumber)(lowerBound) && (!(0, _utils.isFiniteNumber)(minBound) || minBound < lowerBound)) {
                    widgetSearchParameters = widgetSearchParameters.removeNumericRefinement(attribute, '>=');
                    widgetSearchParameters = widgetSearchParameters.addNumericRefinement(attribute, '>=', lowerBound);
                }
                if ((0, _utils.isFiniteNumber)(upperBound) && (!(0, _utils.isFiniteNumber)(maxBound) || upperBound < maxBound)) {
                    widgetSearchParameters = widgetSearchParameters.removeNumericRefinement(attribute, '<=');
                    widgetSearchParameters = widgetSearchParameters.addNumericRefinement(attribute, '<=', upperBound);
                }
                return widgetSearchParameters;
            }
        };
    };
};
var _default = connectRange;
