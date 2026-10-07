import { _ } from '@swc/helpers/esm/_type_of.js';
import { deserializePayload, serializePayload } from '../lib/utils/serializer.js';

/** @deprecated use bindEvent instead */ function readDataAttributes(domElement) {
    var method = domElement.getAttribute('data-insights-method');
    var serializedPayload = domElement.getAttribute('data-insights-payload');
    if (typeof serializedPayload !== 'string') {
        throw new Error('The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.');
    }
    try {
        var payload = deserializePayload(serializedPayload);
        return {
            method: method,
            payload: payload
        };
    } catch (error) {
        throw new Error('The insights helper was unable to parse `data-insights-payload`.');
    }
}
/** @deprecated use bindEvent instead */ function writeDataAttributes(param) {
    var method = param.method, payload = param.payload;
    if ((typeof payload === "undefined" ? "undefined" : _(payload)) !== 'object') {
        throw new Error("The insights helper expects the payload to be an object.");
    }
    var serializedPayload;
    try {
        serializedPayload = serializePayload(payload);
    } catch (error) {
        throw new Error("Could not JSON serialize the payload object.");
    }
    return 'data-insights-method="'.concat(method, '" data-insights-payload="').concat(serializedPayload, '"');
}
/**
 * @deprecated This function will be still supported in 4.x releases, but not further. It is replaced by the `insights` middleware. For more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/
 */ function insights(method, payload) {
    return writeDataAttributes({
        method: method,
        payload: payload
    });
}

export { insights as default, readDataAttributes, writeDataAttributes };
