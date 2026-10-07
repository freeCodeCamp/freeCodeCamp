import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$3 } from '@swc/helpers/esm/_sliced_to_array.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { isFiniteNumber } from '../../lib/utils/isFiniteNumber.js';
import { find } from '../../lib/utils/find.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
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
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_attribute = _ref.attribute, attribute = _ref_attribute === void 0 ? '' : _ref_attribute, minBound = _ref.min, maxBound = _ref.max, _ref_precision = _ref.precision, precision = _ref_precision === void 0 ? 0 : _ref_precision;
        if (!attribute) {
            throw new Error(withUsage('The `attribute` option is required.'));
        }
        if (isFiniteNumber(minBound) && isFiniteNumber(maxBound) && minBound > maxBound) {
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
            var _ref = _$3(resolvedState.getNumericRefinement(attribute, '>=') || [], 1), min = _ref[0];
            var _ref1 = _$3(resolvedState.getNumericRefinement(attribute, '<=') || [], 1), max = _ref1[0];
            var isResetMin = nextMin === undefined || nextMin === '';
            var isResetMax = nextMax === undefined || nextMax === '';
            var _toPrecision = toPrecision({
                min: !isResetMin ? parseFloat(nextMin) : undefined,
                max: !isResetMax ? parseFloat(nextMax) : undefined,
                precision: precision
            }), nextMinAsNumber = _toPrecision.min, nextMaxAsNumber = _toPrecision.max;
            var newNextMin;
            if (!isFiniteNumber(minBound) && currentRangeMin === nextMinAsNumber) {
                newNextMin = undefined;
            } else if (isFiniteNumber(minBound) && isResetMin) {
                newNextMin = minBound;
            } else {
                newNextMin = nextMinAsNumber;
            }
            var newNextMax;
            if (!isFiniteNumber(maxBound) && currentRangeMax === nextMaxAsNumber) {
                newNextMax = undefined;
            } else if (isFiniteNumber(maxBound) && isResetMax) {
                newNextMax = maxBound;
            } else {
                newNextMax = nextMaxAsNumber;
            }
            var isResetNewNextMin = newNextMin === undefined;
            var isGreaterThanCurrentRange = isFiniteNumber(currentRangeMin) && currentRangeMin <= newNextMin;
            var isMinValid = isResetNewNextMin || isFiniteNumber(newNextMin) && (!isFiniteNumber(currentRangeMin) || isGreaterThanCurrentRange);
            var isResetNewNextMax = newNextMax === undefined;
            var isLowerThanRange = isFiniteNumber(newNextMax) && currentRangeMax >= newNextMax;
            var isMaxValid = isResetNewNextMax || isFiniteNumber(newNextMax) && (!isFiniteNumber(currentRangeMax) || isLowerThanRange);
            var hasMinChange = min !== newNextMin;
            var hasMaxChange = max !== newNextMax;
            if ((hasMinChange || hasMaxChange) && isMinValid && isMaxValid) {
                resolvedState = resolvedState.removeNumericRefinement(attribute);
                if (isFiniteNumber(newNextMin)) {
                    resolvedState = resolvedState.addNumericRefinement(attribute, '>=', newNextMin);
                }
                if (isFiniteNumber(newNextMax)) {
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
            if (isFiniteNumber(minBound)) {
                min = minBound;
            } else if (isFiniteNumber(stats.min)) {
                min = stats.min;
            } else {
                min = 0;
            }
            var max;
            if (isFiniteNumber(maxBound)) {
                max = maxBound;
            } else if (isFiniteNumber(stats.max)) {
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
            var _ref = _$3(helper.getNumericRefinement(attribute, '>=') || [], 1), minValue = _ref[0];
            var _ref1 = _$3(helper.getNumericRefinement(attribute, '<=') || [], 1), maxValue = _ref1[0];
            var min = isFiniteNumber(minValue) ? minValue : -Infinity;
            var max = isFiniteNumber(maxValue) ? maxValue : Infinity;
            return [
                min,
                max
            ];
        }
        function _refine(helper, currentRange) {
            return function() {
                var _ref = _$3(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [
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
                renderFn(_(_$1({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                renderFn(_(_$1({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
                    range: _(_$1({}, renderState.range), _$2({}, attribute, this.getWidgetRenderState(renderOptions)))
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var results = param.results, helper = param.helper, instantSearchInstance = param.instantSearchInstance;
                var facetsFromResults = results && results.disjunctiveFacets || [];
                var facet = find(facetsFromResults, function(facetResult) {
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
                    widgetParams: _(_$1({}, widgetParams), {
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
                return _(_$1({}, uiState), {
                    range: _(_$1({}, uiState.range), _$2({}, attribute, "".concat(min, ":").concat(max)))
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var widgetSearchParameters = searchParameters.addDisjunctiveFacet(attribute).setQueryParameters({
                    numericRefinements: _(_$1({}, searchParameters.numericRefinements), _$2({}, attribute, {}))
                });
                if (isFiniteNumber(minBound)) {
                    widgetSearchParameters = widgetSearchParameters.addNumericRefinement(attribute, '>=', minBound);
                }
                if (isFiniteNumber(maxBound)) {
                    widgetSearchParameters = widgetSearchParameters.addNumericRefinement(attribute, '<=', maxBound);
                }
                var value = uiState.range && uiState.range[attribute];
                if (!value || value.indexOf(':') === -1) {
                    return widgetSearchParameters;
                }
                var _value_split_map = _$3(value.split(':').map(parseFloat), 2), lowerBound = _value_split_map[0], upperBound = _value_split_map[1];
                if (isFiniteNumber(lowerBound) && (!isFiniteNumber(minBound) || minBound < lowerBound)) {
                    widgetSearchParameters = widgetSearchParameters.removeNumericRefinement(attribute, '>=');
                    widgetSearchParameters = widgetSearchParameters.addNumericRefinement(attribute, '>=', lowerBound);
                }
                if (isFiniteNumber(upperBound) && (!isFiniteNumber(maxBound) || upperBound < maxBound)) {
                    widgetSearchParameters = widgetSearchParameters.removeNumericRefinement(attribute, '<=');
                    widgetSearchParameters = widgetSearchParameters.addNumericRefinement(attribute, '<=', upperBound);
                }
                return widgetSearchParameters;
            }
        };
    };
};

export { connectRange as default };
