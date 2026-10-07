'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createSendEventForFacet", {
    enumerable: true,
    get: function() {
        return createSendEventForFacet;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _type_of = require("@swc/helpers/_/_type_of");
var _isFacetRefined = require("./isFacetRefined");
function createSendEventForFacet(param) {
    var instantSearchInstance = param.instantSearchInstance, helper = param.helper, attr = param.attribute, widgetType = param.widgetType;
    var sendEventForFacet = function sendEventForFacet() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var _args = _sliced_to_array._(args, 4), facetValue = _args[1], tmp = _args[2], eventName = tmp === void 0 ? 'Filter Applied' : tmp, tmp1 = _args[3], additionalData = tmp1 === void 0 ? {} : tmp1;
        var _args__split = _sliced_to_array._(args[0].split(':'), 2), eventType = _args__split[0], eventModifier = _args__split[1];
        var attribute = typeof attr === 'string' ? attr : attr(facetValue);
        if (args.length === 1 && _type_of._(args[0]) === 'object') {
            instantSearchInstance.sendEventToInsights(args[0]);
        } else if (eventType === 'click' && args.length >= 2 && args.length <= 4) {
            if (!(0, _isFacetRefined.isFacetRefined)(helper, attribute, facetValue)) {
                var _helper_lastResults;
                // send event only when the facet is being checked "ON"
                instantSearchInstance.sendEventToInsights({
                    insightsMethod: 'clickedFilters',
                    widgetType: widgetType,
                    eventType: eventType,
                    eventModifier: eventModifier,
                    payload: _object_spread._({
                        eventName: eventName,
                        index: ((_helper_lastResults = helper.lastResults) === null || _helper_lastResults === void 0 ? void 0 : _helper_lastResults.index) || helper.state.index,
                        filters: [
                            "".concat(attribute, ":").concat(facetValue)
                        ]
                    }, additionalData),
                    attribute: attribute
                });
            }
        } else ;
    };
    return sendEventForFacet;
}
