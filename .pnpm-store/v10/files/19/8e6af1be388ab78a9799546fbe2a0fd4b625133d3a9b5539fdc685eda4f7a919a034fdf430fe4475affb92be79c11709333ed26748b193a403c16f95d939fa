import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_sliced_to_array.js';
import { _ as _$1 } from '@swc/helpers/esm/_type_of.js';
import { isFacetRefined } from './isFacetRefined.js';

function createSendEventForFacet(param) {
    var instantSearchInstance = param.instantSearchInstance, helper = param.helper, attr = param.attribute, widgetType = param.widgetType;
    var sendEventForFacet = function sendEventForFacet() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var _args = _(args, 4), facetValue = _args[1], tmp = _args[2], eventName = tmp === void 0 ? 'Filter Applied' : tmp, tmp1 = _args[3], additionalData = tmp1 === void 0 ? {} : tmp1;
        var _args__split = _(args[0].split(':'), 2), eventType = _args__split[0], eventModifier = _args__split[1];
        var attribute = typeof attr === 'string' ? attr : attr(facetValue);
        if (args.length === 1 && _$1(args[0]) === 'object') {
            instantSearchInstance.sendEventToInsights(args[0]);
        } else if (eventType === 'click' && args.length >= 2 && args.length <= 4) {
            if (!isFacetRefined(helper, attribute, facetValue)) {
                var _helper_lastResults;
                // send event only when the facet is being checked "ON"
                instantSearchInstance.sendEventToInsights({
                    insightsMethod: 'clickedFilters',
                    widgetType: widgetType,
                    eventType: eventType,
                    eventModifier: eventModifier,
                    payload: _$2({
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

export { createSendEventForFacet };
