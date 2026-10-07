import { SkipAfterProperty } from '../property/SkipAfterProperty.js';
import { TimeoutProperty } from '../property/TimeoutProperty.js';
import { UnbiasedProperty } from '../property/UnbiasedProperty.js';
import { IgnoreEqualValuesProperty } from '../property/IgnoreEqualValuesProperty.js';
const safeDateNow = Date.now;
const safeSetTimeout = setTimeout;
const safeClearTimeout = clearTimeout;
export function decorateProperty(rawProperty, qParams) {
    let prop = rawProperty;
    if (rawProperty.isAsync() && qParams.timeout != null) {
        prop = new TimeoutProperty(prop, qParams.timeout, safeSetTimeout, safeClearTimeout);
    }
    if (qParams.unbiased) {
        prop = new UnbiasedProperty(prop);
    }
    if (qParams.skipAllAfterTimeLimit != null) {
        prop = new SkipAfterProperty(prop, safeDateNow, qParams.skipAllAfterTimeLimit, false, safeSetTimeout, safeClearTimeout);
    }
    if (qParams.interruptAfterTimeLimit != null) {
        prop = new SkipAfterProperty(prop, safeDateNow, qParams.interruptAfterTimeLimit, true, safeSetTimeout, safeClearTimeout);
    }
    if (qParams.skipEqualValues) {
        prop = new IgnoreEqualValuesProperty(prop, true);
    }
    if (qParams.ignoreEqualValues) {
        prop = new IgnoreEqualValuesProperty(prop, false);
    }
    return prop;
}
