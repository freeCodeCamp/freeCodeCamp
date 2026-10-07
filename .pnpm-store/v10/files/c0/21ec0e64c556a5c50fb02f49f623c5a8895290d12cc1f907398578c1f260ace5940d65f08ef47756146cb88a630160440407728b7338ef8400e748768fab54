"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateProperty = decorateProperty;
const SkipAfterProperty_1 = require("../property/SkipAfterProperty");
const TimeoutProperty_1 = require("../property/TimeoutProperty");
const UnbiasedProperty_1 = require("../property/UnbiasedProperty");
const IgnoreEqualValuesProperty_1 = require("../property/IgnoreEqualValuesProperty");
const safeDateNow = Date.now;
const safeSetTimeout = setTimeout;
const safeClearTimeout = clearTimeout;
function decorateProperty(rawProperty, qParams) {
    let prop = rawProperty;
    if (rawProperty.isAsync() && qParams.timeout != null) {
        prop = new TimeoutProperty_1.TimeoutProperty(prop, qParams.timeout, safeSetTimeout, safeClearTimeout);
    }
    if (qParams.unbiased) {
        prop = new UnbiasedProperty_1.UnbiasedProperty(prop);
    }
    if (qParams.skipAllAfterTimeLimit != null) {
        prop = new SkipAfterProperty_1.SkipAfterProperty(prop, safeDateNow, qParams.skipAllAfterTimeLimit, false, safeSetTimeout, safeClearTimeout);
    }
    if (qParams.interruptAfterTimeLimit != null) {
        prop = new SkipAfterProperty_1.SkipAfterProperty(prop, safeDateNow, qParams.interruptAfterTimeLimit, true, safeSetTimeout, safeClearTimeout);
    }
    if (qParams.skipEqualValues) {
        prop = new IgnoreEqualValuesProperty_1.IgnoreEqualValuesProperty(prop, true);
    }
    if (qParams.ignoreEqualValues) {
        prop = new IgnoreEqualValuesProperty_1.IgnoreEqualValuesProperty(prop, false);
    }
    return prop;
}
