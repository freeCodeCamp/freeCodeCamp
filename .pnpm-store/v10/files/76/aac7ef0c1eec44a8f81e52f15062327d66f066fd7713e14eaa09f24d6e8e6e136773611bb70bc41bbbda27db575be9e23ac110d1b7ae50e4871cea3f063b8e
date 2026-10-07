'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get createInsightsEventHandler () {
        return createInsightsEventHandler;
    },
    get /**
 * @deprecated use `sendEvent` directly instead
 */ default () {
        return withInsightsListener;
    }
});
var _preact = require("preact");
var _insights = require("../../helpers/insights");
var _utils = require("../utils");
var createInsightsEventHandler = function createInsightsEventHandler(param) {
    var insights = param.insights, sendEvent = param.sendEvent;
    return function(event) {
        // new way, e.g. bindEvent("click", hit, "Hit clicked")
        var insightsThroughSendEvent = findInsightsTarget(event.target, event.currentTarget, function(element) {
            return element.hasAttribute('data-insights-event');
        });
        if (insightsThroughSendEvent) {
            var payload = parseInsightsEvent(insightsThroughSendEvent);
            payload.forEach(function(single) {
                return sendEvent(single);
            });
        }
        // old way, e.g. instantsearch.insights("clickedObjectIDsAfterSearch", { .. })
        var insightsThroughFunction = findInsightsTarget(event.target, event.currentTarget, function(element) {
            return element.hasAttribute('data-insights-method') && element.hasAttribute('data-insights-payload');
        });
        if (insightsThroughFunction) {
            var _readDataAttributes = (0, _insights.readDataAttributes)(insightsThroughFunction), method = _readDataAttributes.method, payload1 = _readDataAttributes.payload;
            insights(method, payload1);
        }
    };
};
function findInsightsTarget(startElement, endElement, validator) {
    var element = startElement;
    while(element && !validator(element)){
        if (element === endElement) {
            return null;
        }
        element = element.parentElement;
    }
    return element;
}
function parseInsightsEvent(element) {
    var serializedPayload = element.getAttribute('data-insights-event');
    if (typeof serializedPayload !== 'string') {
        throw new Error('The insights middleware expects `data-insights-event` to be a base64-encoded JSON string.');
    }
    try {
        return (0, _utils.deserializePayload)(serializedPayload);
    } catch (error) {
        throw new Error('The insights middleware was unable to parse `data-insights-event`.');
    }
}
function withInsightsListener(BaseComponent) {
    (0, _utils.warning)(false, 'The `withInsightsListener` function is deprecated and will be removed in the next major version. Please use `sendEvent` directly instead.');
    return function WithInsightsListener(props) {
        var handleClick = createInsightsEventHandler(props);
        return /*#__PURE__*/ (0, _preact.h)("div", {
            onClick: handleClick
        }, /*#__PURE__*/ (0, _preact.h)(BaseComponent, props));
    };
}
