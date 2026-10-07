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
    name: 'toggle-refinement',
    connector: true
});
var $$type = 'ais.toggleRefinement';
var createSendEvent = function createSendEvent(param) {
    var instantSearchInstance = param.instantSearchInstance, helper = param.helper, attribute = param.attribute, on = param.on;
    var sendEventForToggle = function sendEventForToggle() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (args.length === 1) {
            instantSearchInstance.sendEventToInsights(args[0]);
            return;
        }
        var _args = _sliced_to_array._(args, 3), isRefined = _args[1], tmp = _args[2], eventName = tmp === void 0 ? 'Filter Applied' : tmp;
        var _args__split = _sliced_to_array._(args[0].split(':'), 2), eventType = _args__split[0], eventModifier = _args__split[1];
        if (eventType !== 'click' || on === undefined) {
            return;
        }
        // only send an event when the refinement gets applied,
        // not when it gets removed
        if (!isRefined) {
            var _helper_lastResults;
            instantSearchInstance.sendEventToInsights({
                insightsMethod: 'clickedFilters',
                widgetType: $$type,
                eventType: eventType,
                eventModifier: eventModifier,
                payload: {
                    eventName: eventName,
                    index: ((_helper_lastResults = helper.lastResults) === null || _helper_lastResults === void 0 ? void 0 : _helper_lastResults.index) || helper.state.index,
                    filters: on.map(function(value) {
                        return "".concat(attribute, ":").concat(value);
                    })
                },
                attribute: attribute
            });
        }
    };
    return sendEventForToggle;
};
/**
 * **Toggle** connector provides the logic to build a custom widget that will provide
 * an on/off filtering feature based on an attribute value or values.
 *
 * Two modes are implemented in the custom widget:
 *  - with or without the value filtered
 *  - switch between two values.
 */ var connectToggleRefinement = function connectToggleRefinement(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _utils.noop;
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, attribute = _ref.attribute, tmp = _ref.on, userOn = tmp === void 0 ? true : tmp, userOff = _ref.off;
        if (!attribute) {
            throw new Error(withUsage('The `attribute` option is required.'));
        }
        var hasAnOffValue = userOff !== undefined;
        // even though facet values can be numbers and boolean,
        // the helper methods only accept string in the type
        var on = (0, _utils.toArray)(userOn).map(_utils.escapeFacetValue);
        var off = hasAnOffValue ? (0, _utils.toArray)(userOff).map(_utils.escapeFacetValue) : undefined;
        var sendEvent;
        var toggleRefinementFactory = function toggleRefinementFactory(helper) {
            return function() {
                var isRefined = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    isRefined: false
                }).isRefined;
                if (!isRefined) {
                    sendEvent('click:internal', isRefined);
                    if (hasAnOffValue) {
                        off.forEach(function(v) {
                            return helper.removeDisjunctiveFacetRefinement(attribute, v);
                        });
                    }
                    on.forEach(function(v) {
                        return helper.addDisjunctiveFacetRefinement(attribute, v);
                    });
                } else {
                    on.forEach(function(v) {
                        return helper.removeDisjunctiveFacetRefinement(attribute, v);
                    });
                    if (hasAnOffValue) {
                        off.forEach(function(v) {
                            return helper.addDisjunctiveFacetRefinement(attribute, v);
                        });
                    }
                }
                helper.search();
            };
        };
        var connectorState = {
            createURLFactory: function createURLFactory(isRefined, param) {
                var state = param.state, createURL = param.createURL, getWidgetUiState = param.getWidgetUiState, helper = param.helper;
                return function() {
                    state = state.resetPage();
                    var valuesToRemove = isRefined ? on : off;
                    if (valuesToRemove) {
                        valuesToRemove.forEach(function(v) {
                            state = state.removeDisjunctiveFacetRefinement(attribute, v);
                        });
                    }
                    var valuesToAdd = isRefined ? off : on;
                    if (valuesToAdd) {
                        valuesToAdd.forEach(function(v) {
                            state = state.addDisjunctiveFacetRefinement(attribute, v);
                        });
                    }
                    return createURL(function(uiState) {
                        return getWidgetUiState(uiState, {
                            searchParameters: state,
                            helper: helper
                        });
                    });
                };
            }
        };
        return {
            $$type: $$type,
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
            dispose: function dispose(param) {
                var state = param.state;
                unmountFn();
                return state.removeDisjunctiveFacet(attribute);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _object_spread_props._(_object_spread._({}, renderState), {
                    toggleRefinement: _object_spread_props._(_object_spread._({}, renderState.toggleRefinement), _define_property._({}, attribute, this.getWidgetRenderState(renderOptions)))
                });
            },
            getWidgetRenderState: function getWidgetRenderState(param) {
                var state = param.state, helper = param.helper, results = param.results, createURL = param.createURL, instantSearchInstance = param.instantSearchInstance;
                var isRefined = results ? on.every(function(v) {
                    return state.isDisjunctiveFacetRefined(attribute, v);
                }) : on.every(function(v) {
                    return state.isDisjunctiveFacetRefined(attribute, v);
                });
                var onFacetValue = {
                    isRefined: isRefined,
                    count: 0
                };
                var offFacetValue = {
                    isRefined: hasAnOffValue && !isRefined,
                    count: 0
                };
                if (results) {
                    var offValue = (0, _utils.toArray)(off || false);
                    var allFacetValues = results.getFacetValues(attribute, {}) || [];
                    var onData = on.map(function(v) {
                        return (0, _utils.find)(allFacetValues, function(param) {
                            var escapedValue = param.escapedValue;
                            return escapedValue === (0, _utils.escapeFacetValue)(String(v));
                        });
                    }).filter(function(v) {
                        return v !== undefined;
                    });
                    var offData = hasAnOffValue ? offValue.map(function(v) {
                        return (0, _utils.find)(allFacetValues, function(param) {
                            var escapedValue = param.escapedValue;
                            return escapedValue === (0, _utils.escapeFacetValue)(String(v));
                        });
                    }).filter(function(v) {
                        return v !== undefined;
                    }) : [];
                    onFacetValue = {
                        isRefined: onData.length ? onData.every(function(v) {
                            return v.isRefined;
                        }) : false,
                        count: onData.reduce(function(acc, v) {
                            return acc + v.count;
                        }, 0) || null
                    };
                    offFacetValue = {
                        isRefined: offData.length ? offData.every(function(v) {
                            return v.isRefined;
                        }) : false,
                        count: offData.reduce(function(acc, v) {
                            return acc + v.count;
                        }, 0) || allFacetValues.reduce(function(total, param) {
                            var count = param.count;
                            return total + count;
                        }, 0)
                    };
                }
                if (!sendEvent) {
                    sendEvent = createSendEvent({
                        instantSearchInstance: instantSearchInstance,
                        attribute: attribute,
                        on: on,
                        helper: helper
                    });
                }
                var nextRefinement = isRefined ? offFacetValue : onFacetValue;
                return {
                    value: {
                        name: attribute,
                        isRefined: isRefined,
                        count: results ? nextRefinement.count : null,
                        onFacetValue: onFacetValue,
                        offFacetValue: offFacetValue
                    },
                    createURL: connectorState.createURLFactory(isRefined, {
                        state: state,
                        createURL: createURL,
                        helper: helper,
                        getWidgetUiState: this.getWidgetUiState
                    }),
                    sendEvent: sendEvent,
                    canRefine: Boolean(results ? nextRefinement.count : null),
                    refine: toggleRefinementFactory(helper),
                    widgetParams: widgetParams
                };
            },
            getWidgetUiState: function getWidgetUiState(uiState, param) {
                var searchParameters = param.searchParameters;
                var isRefined = on && on.every(function(v) {
                    return searchParameters.isDisjunctiveFacetRefined(attribute, v);
                });
                if (!isRefined) {
                    var _uiState_toggle;
                    // This needs to be done in the case `uiState` comes from `createURL`
                    (_uiState_toggle = uiState.toggle) === null || _uiState_toggle === void 0 ? true : delete _uiState_toggle[attribute];
                    return uiState;
                }
                return _object_spread_props._(_object_spread._({}, uiState), {
                    toggle: _object_spread_props._(_object_spread._({}, uiState.toggle), _define_property._({}, attribute, isRefined))
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
                var uiState = param.uiState;
                if (searchParameters.isHierarchicalFacet(attribute) || searchParameters.isConjunctiveFacet(attribute)) {
                    (0, _utils.warning)(false, 'ToggleRefinement: Attribute "'.concat(attribute, '" is already used by another widget of a different type.\nAs this is not supported, please make sure to remove this other widget or this ToggleRefinement widget will not work at all.'));
                    return searchParameters;
                }
                var withFacetConfiguration = searchParameters.addDisjunctiveFacet(attribute).removeDisjunctiveFacetRefinement(attribute);
                var isRefined = Boolean(uiState.toggle && uiState.toggle[attribute]);
                if (isRefined) {
                    if (on) {
                        on.forEach(function(v) {
                            withFacetConfiguration = withFacetConfiguration.addDisjunctiveFacetRefinement(attribute, v);
                        });
                    }
                    return withFacetConfiguration;
                }
                // It's not refined with an `off` value
                if (hasAnOffValue) {
                    if (off) {
                        off.forEach(function(v) {
                            withFacetConfiguration = withFacetConfiguration.addDisjunctiveFacetRefinement(attribute, v);
                        });
                    }
                    return withFacetConfiguration;
                }
                // It's not refined without an `off` value
                return withFacetConfiguration.setQueryParameters({
                    disjunctiveFacetsRefinements: _object_spread_props._(_object_spread._({}, searchParameters.disjunctiveFacetsRefinements), _define_property._({}, attribute, []))
                });
            }
        };
    };
};
var _default = connectToggleRefinement;
