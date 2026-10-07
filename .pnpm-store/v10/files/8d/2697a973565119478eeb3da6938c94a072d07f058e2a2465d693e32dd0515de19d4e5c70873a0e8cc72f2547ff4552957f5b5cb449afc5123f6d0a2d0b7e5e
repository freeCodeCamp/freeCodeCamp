import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$3 } from '@swc/helpers/esm/_sliced_to_array.js';
import { isFiniteNumber } from '../../lib/utils/isFiniteNumber.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { checkRendering } from '../../lib/utils/checkRendering.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'numeric-menu',
    connector: true
});
var $$type = 'ais.numericMenu';
var createSendEvent = function createSendEvent(param) {
    var instantSearchInstance = param.instantSearchInstance;
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
var connectNumericMenu = function connectNumericMenu(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    checkRendering(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref_attribute = _ref.attribute, attribute = _ref_attribute === void 0 ? '' : _ref_attribute, _ref_items = _ref.items, items = _ref_items === void 0 ? [] : _ref_items, _ref_transformItems = _ref.transformItems, transformItems = _ref_transformItems === void 0 ? function(item) {
            return item;
        } : _ref_transformItems;
        if (attribute === '') {
            throw new Error(withUsage('The `attribute` option is required.'));
        }
        if (!items || items.length === 0) {
            throw new Error(withUsage('The `items` option expects an array of objects.'));
        }
        var prepareItems = function prepareItems(state) {
            return items.map(function(param) {
                var start = param.start, end = param.end, label = param.label;
                return {
                    label: label,
                    value: encodeURI(JSON.stringify({
                        start: start,
                        end: end
                    })),
                    isRefined: isRefined(state, attribute, {
                        start: start,
                        end: end,
                        label: label
                    })
                };
            });
        };
        var connectorState = {};
        return {
            $$type: $$type,
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_(_$1({}, this.getWidgetRenderState(initOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_(_$1({}, this.getWidgetRenderState(renderOptions)), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state.removeNumericRefinement(attribute);
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var values = searchParameters.getNumericRefinements(attribute);
                var equal = values['='] && values['='][0];
                if (equal || equal === 0) {
                    return _(_$1({}, uiState), {
                        numericMenu: _(_$1({}, uiState.numericMenu), _$2({}, attribute, "".concat(values['='])))
                    });
                }
                var min = values['>='] && values['>='][0] || '';
                var max = values['<='] && values['<='][0] || '';
                return removeEmptyRefinementsFromUiState(_(_$1({}, uiState), {
                    numericMenu: _(_$1({}, uiState.numericMenu), _$2({}, attribute, "".concat(min, ":").concat(max)))
                }), attribute);
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                var value = uiState.numericMenu && uiState.numericMenu[attribute];
                var withoutRefinements = searchParameters.setQueryParameters({
                    numericRefinements: _(_$1({}, searchParameters.numericRefinements), _$2({}, attribute, {}))
                });
                if (!value) {
                    return withoutRefinements;
                }
                var isExact = value.indexOf(':') === -1;
                if (isExact) {
                    return withoutRefinements.addNumericRefinement(attribute, '=', Number(value));
                }
                var _value_split_map = _$3(value.split(':').map(parseFloat), 2), min = _value_split_map[0], max = _value_split_map[1];
                var withMinRefinement = isFiniteNumber(min) ? withoutRefinements.addNumericRefinement(attribute, '>=', min) : withoutRefinements;
                var withMaxRefinement = isFiniteNumber(max) ? withMinRefinement.addNumericRefinement(attribute, '<=', max) : withMinRefinement;
                return withMaxRefinement;
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _(_$1({}, renderState), {
                    numericMenu: _(_$1({}, renderState.numericMenu), _$2({}, attribute, this.getWidgetRenderState(renderOptions)))
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var _this = this;
                var results = param.results, state = param.state, instantSearchInstance = param.instantSearchInstance, helper = param.helper, createURL = param.createURL;
                if (!connectorState.refine) {
                    connectorState.refine = function(facetValue) {
                        var refinedState = getRefinedState(helper.state, attribute, facetValue);
                        connectorState.sendEvent('click:internal', facetValue);
                        helper.setState(refinedState).search();
                    };
                }
                if (!connectorState.createURL) {
                    connectorState.createURL = function(newState) {
                        return function(facetValue) {
                            return createURL(function(uiState) {
                                return _this.getWidgetUiState(uiState, {
                                    searchParameters: getRefinedState(newState, attribute, facetValue),
                                    helper: helper
                                });
                            });
                        };
                    };
                }
                if (!connectorState.sendEvent) {
                    connectorState.sendEvent = createSendEvent({
                        instantSearchInstance: instantSearchInstance
                    });
                }
                var hasNoResults = results ? results.nbHits === 0 : true;
                var preparedItems = prepareItems(state);
                var allIsSelected = true;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    // @TODO avoid for..of for polyfill reasons
                    // eslint-disable-next-line instantsearch/no-for-of
                    for(var _iterator = preparedItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var item = _step.value;
                        if (item.isRefined && decodeURI(item.value) !== '{}') {
                            allIsSelected = false;
                            break;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return {
                    createURL: connectorState.createURL(state),
                    items: transformItems(preparedItems, {
                        results: results
                    }),
                    hasNoResults: hasNoResults,
                    canRefine: !(hasNoResults && allIsSelected),
                    refine: connectorState.refine,
                    sendEvent: connectorState.sendEvent,
                    widgetParams: widgetParams
                };
            }
        };
    };
};
function isRefined(state, attribute, option) {
    // @TODO: same as another spot, why is this mixing arrays & elements?
    var currentRefinements = state.getNumericRefinements(attribute);
    if (option.start !== undefined && option.end !== undefined) {
        if (option.start === option.end) {
            return hasNumericRefinement(currentRefinements, '=', option.start);
        } else {
            return hasNumericRefinement(currentRefinements, '>=', option.start) && hasNumericRefinement(currentRefinements, '<=', option.end);
        }
    }
    if (option.start !== undefined) {
        return hasNumericRefinement(currentRefinements, '>=', option.start);
    }
    if (option.end !== undefined) {
        return hasNumericRefinement(currentRefinements, '<=', option.end);
    }
    if (option.start === undefined && option.end === undefined) {
        return Object.keys(currentRefinements).every(function(operator) {
            return (currentRefinements[operator] || []).length === 0;
        });
    }
    return false;
}
function getRefinedState(state, attribute, facetValue) {
    var resolvedState = state;
    var refinedOption = JSON.parse(decodeURI(facetValue));
    // @TODO: why is array / element mixed here & hasRefinements; seems wrong?
    var currentRefinements = resolvedState.getNumericRefinements(attribute);
    if (refinedOption.start === undefined && refinedOption.end === undefined) {
        return resolvedState.removeNumericRefinement(attribute);
    }
    if (!isRefined(resolvedState, attribute, refinedOption)) {
        resolvedState = resolvedState.removeNumericRefinement(attribute);
    }
    if (refinedOption.start !== undefined && refinedOption.end !== undefined) {
        if (refinedOption.start > refinedOption.end) {
            throw new Error('option.start should be > to option.end');
        }
        if (refinedOption.start === refinedOption.end) {
            if (hasNumericRefinement(currentRefinements, '=', refinedOption.start)) {
                resolvedState = resolvedState.removeNumericRefinement(attribute, '=', refinedOption.start);
            } else {
                resolvedState = resolvedState.addNumericRefinement(attribute, '=', refinedOption.start);
            }
            return resolvedState;
        }
    }
    if (refinedOption.start !== undefined) {
        if (hasNumericRefinement(currentRefinements, '>=', refinedOption.start)) {
            resolvedState = resolvedState.removeNumericRefinement(attribute, '>=', refinedOption.start);
        }
        resolvedState = resolvedState.addNumericRefinement(attribute, '>=', refinedOption.start);
    }
    if (refinedOption.end !== undefined) {
        if (hasNumericRefinement(currentRefinements, '<=', refinedOption.end)) {
            resolvedState = resolvedState.removeNumericRefinement(attribute, '<=', refinedOption.end);
        }
        resolvedState = resolvedState.addNumericRefinement(attribute, '<=', refinedOption.end);
    }
    if (typeof resolvedState.page === 'number') {
        resolvedState.page = 0;
    }
    return resolvedState;
}
function hasNumericRefinement(currentRefinements, operator, value) {
    var refinements = currentRefinements[operator];
    return refinements !== undefined && refinements.includes(value);
}
function removeEmptyRefinementsFromUiState(indexUiState, attribute) {
    if (!indexUiState.numericMenu) {
        return indexUiState;
    }
    if (indexUiState.numericMenu[attribute] === ':') {
        delete indexUiState.numericMenu[attribute];
    }
    if (Object.keys(indexUiState.numericMenu).length === 0) {
        delete indexUiState.numericMenu;
    }
    return indexUiState;
}

export { connectNumericMenu as default };
