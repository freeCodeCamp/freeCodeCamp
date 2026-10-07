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
    get /**
 * @deprecated This function will be still supported in 4.x releases, but not further. It is replaced by the `insights` middleware. For more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/
 */ default () {
        return insights;
    },
    get readDataAttributes () {
        return readDataAttributes;
    },
    get writeDataAttributes () {
        return writeDataAttributes;
    }
});
var _type_of = require("@swc/helpers/_/_type_of");
var _utils = require("../lib/utils");
function readDataAttributes(domElement) {
    var method = domElement.getAttribute('data-insights-method');
    var serializedPayload = domElement.getAttribute('data-insights-payload');
    if (typeof serializedPayload !== 'string') {
        throw new Error('The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.');
    }
    try {
        var payload = (0, _utils.deserializePayload)(serializedPayload);
        return {
            method: method,
            payload: payload
        };
    } catch (error) {
        throw new Error('The insights helper was unable to parse `data-insights-payload`.');
    }
}
function writeDataAttributes(param) {
    var method = param.method, payload = param.payload;
    if ((typeof payload === "undefined" ? "undefined" : _type_of._(payload)) !== 'object') {
        throw new Error("The insights helper expects the payload to be an object.");
    }
    var serializedPayload;
    try {
        serializedPayload = (0, _utils.serializePayload)(payload);
    } catch (error) {
        throw new Error("Could not JSON serialize the payload object.");
    }
    return 'data-insights-method="'.concat(method, '" data-insights-payload="').concat(serializedPayload, '"');
}
function insights(method, payload) {
    (0, _utils.warning)(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
    return writeDataAttributes({
        method: method,
        payload: payload
    });
}
