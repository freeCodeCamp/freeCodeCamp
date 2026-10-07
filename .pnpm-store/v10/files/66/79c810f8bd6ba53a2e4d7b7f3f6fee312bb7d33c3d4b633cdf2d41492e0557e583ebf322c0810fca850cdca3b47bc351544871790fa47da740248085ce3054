import { _ } from '@swc/helpers/esm/_type_of.js';
import '@swc/helpers/esm/_sliced_to_array.js';
import '@swc/helpers/esm/_to_consumable_array.js';
import '@swc/helpers/esm/_define_property.js';
import '@swc/helpers/esm/_extends.js';
import '@swc/helpers/esm/_object_destructuring_empty.js';
import '@swc/helpers/esm/_object_spread.js';
import '@swc/helpers/esm/_object_spread_props.js';
import { serializePayload } from './index32.js';
import './index11.js';
import '@swc/helpers/esm/_instanceof.js';
import '@swc/helpers/esm/_object_without_properties.js';

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

export { insights as default, writeDataAttributes };
