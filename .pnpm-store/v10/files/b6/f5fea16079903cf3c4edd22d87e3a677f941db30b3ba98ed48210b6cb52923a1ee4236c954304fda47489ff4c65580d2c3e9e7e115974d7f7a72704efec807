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
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'analytics'
});
// @major this widget will be removed from the next major version.
var analytics = function analytics(widgetParams) {
    var _ref = widgetParams || {}, pushFunction = _ref.pushFunction, _ref_delay = _ref.delay, delay = _ref_delay === void 0 ? 3000 : _ref_delay, _ref_triggerOnUIInteraction = _ref.triggerOnUIInteraction, triggerOnUIInteraction = _ref_triggerOnUIInteraction === void 0 ? false : _ref_triggerOnUIInteraction, _ref_pushInitialSearch = _ref.pushInitialSearch, pushInitialSearch = _ref_pushInitialSearch === void 0 ? true : _ref_pushInitialSearch, _ref_pushPagination = _ref.pushPagination, pushPagination = _ref_pushPagination === void 0 ? false : _ref_pushPagination;
    if (!pushFunction) {
        throw new Error(withUsage('The `pushFunction` option is required.'));
    }
    (0, _utils.warning)(false, "`analytics` widget has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor the migration, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/#analytics-widget");
    var cachedState = null;
    var serializeRefinements = function serializeRefinements(parameters) {
        var refinements = [];
        // eslint-disable-next-line instantsearch/no-for-in
        for(var parameter in parameters){
            if (parameters.hasOwnProperty(parameter)) {
                var values = parameters[parameter].join('+');
                refinements.push("".concat(encodeURIComponent(parameter), "=").concat(encodeURIComponent(parameter), "_").concat(encodeURIComponent(values)));
            }
        }
        return refinements.join('&');
    };
    var serializeNumericRefinements = function serializeNumericRefinements(numericRefinements) {
        var refinements = [];
        // eslint-disable-next-line instantsearch/no-for-in
        for(var attribute in numericRefinements){
            if (numericRefinements.hasOwnProperty(attribute)) {
                var filter = numericRefinements[attribute];
                if (filter.hasOwnProperty('>=') && filter.hasOwnProperty('<=')) {
                    if (filter['>='] && filter['>='][0] === filter['<='] && filter['<='][0]) {
                        refinements.push("".concat(attribute, "=").concat(attribute, "_").concat(filter['>=']));
                    } else {
                        refinements.push("".concat(attribute, "=").concat(attribute, "_").concat(filter['>='], "to").concat(filter['<=']));
                    }
                } else if (filter.hasOwnProperty('>=')) {
                    refinements.push("".concat(attribute, "=").concat(attribute, "_from").concat(filter['>=']));
                } else if (filter.hasOwnProperty('<=')) {
                    refinements.push("".concat(attribute, "=").concat(attribute, "_to").concat(filter['<=']));
                } else if (filter.hasOwnProperty('=')) {
                    var equals = [];
                    // eslint-disable-next-line instantsearch/no-for-in
                    for(var equal in filter['=']){
                        // eslint-disable-next-line max-depth
                        if (filter['='].hasOwnProperty(equal)) {
                            // @ts-ignore somehow 'equal' is a string, even though it's a number?
                            equals.push(filter['='][equal]);
                        }
                    }
                    refinements.push("".concat(attribute, "=").concat(attribute, "_").concat(equals.join('-')));
                }
            }
        }
        return refinements.join('&');
    };
    var lastSentData = '';
    var sendAnalytics = function sendAnalytics(analyticsState) {
        if (analyticsState === null) {
            return;
        }
        var serializedParams = [];
        var serializedRefinements = serializeRefinements(_object_spread._({}, analyticsState.state.disjunctiveFacetsRefinements, analyticsState.state.facetsRefinements, analyticsState.state.hierarchicalFacetsRefinements));
        var serializedNumericRefinements = serializeNumericRefinements(analyticsState.state.numericRefinements);
        if (serializedRefinements !== '') {
            serializedParams.push(serializedRefinements);
        }
        if (serializedNumericRefinements !== '') {
            serializedParams.push(serializedNumericRefinements);
        }
        var stringifiedParams = serializedParams.join('&');
        var dataToSend = "Query: ".concat(analyticsState.state.query || '', ", ").concat(stringifiedParams);
        if (pushPagination === true) {
            dataToSend += ", Page: ".concat(analyticsState.state.page || 0);
        }
        if (lastSentData !== dataToSend) {
            pushFunction(stringifiedParams, analyticsState.state, analyticsState.results);
            lastSentData = dataToSend;
        }
    };
    var pushTimeout;
    var isInitialSearch = true;
    if (pushInitialSearch === true) {
        isInitialSearch = false;
    }
    var onClick = function onClick() {
        sendAnalytics(cachedState);
    };
    var onUnload = function onUnload() {
        sendAnalytics(cachedState);
    };
    return {
        $$type: 'ais.analytics',
        $$widgetType: 'ais.analytics',
        init: function init() {
            if (triggerOnUIInteraction === true) {
                document.addEventListener('click', onClick);
                window.addEventListener('beforeunload', onUnload);
            }
        },
        render: function render(param) {
            var results = param.results, state = param.state;
            if (!results) {
                return;
            }
            if (isInitialSearch === true) {
                isInitialSearch = false;
                return;
            }
            cachedState = {
                results: results,
                state: state
            };
            if (pushTimeout) {
                clearTimeout(pushTimeout);
            }
            pushTimeout = window.setTimeout(function() {
                return sendAnalytics(cachedState);
            }, delay);
        },
        dispose: function dispose() {
            if (triggerOnUIInteraction === true) {
                document.removeEventListener('click', onClick);
                window.removeEventListener('beforeunload', onUnload);
            }
        },
        getRenderState: function getRenderState(renderState, renderOptions) {
            return _object_spread_props._(_object_spread._({}, renderState), {
                analytics: this.getWidgetRenderState(renderOptions)
            });
        },
        getWidgetRenderState: function getWidgetRenderState() {
            return {
                widgetParams: widgetParams
            };
        }
    };
};
var _default = analytics;
