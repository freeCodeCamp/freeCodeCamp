import { hooks } from '../utils/hooks';
import hasOwnProp from '../utils/has-own-prop';
import getParsingFlags from '../create/parsing-flags';

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

export function copyConfig(to, from) {
    var i, prop, val;

    if (typeof from._isAMomentObject !== 'undefined') {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (typeof from._i !== 'undefined') {
        to._i = from._i;
    }
    if (typeof from._f !== 'undefined') {
        to._f = from._f;
    }
    if (typeof from._l !== 'undefined') {
        to._l = from._l;
    }
    if (typeof from._strict !== 'undefined') {
        to._strict = from._strict;
    }
    if (typeof from._tzm !== 'undefined') {
        to._tzm = from._tzm;
    }
    if (typeof from._isUTC !== 'undefined') {
        to._isUTC = from._isUTC;
    }
    if (typeof from._offset !== 'undefined') {
        to._offset = from._offset;
    }
    if (typeof from._pf !== 'undefined') {
        to._pf = getParsingFlags(from);
    }
    if (typeof from._locale !== 'undefined') {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i in momentProperties) {
            prop = momentProperties[i];
            val = from[prop];
            if (typeof val !== 'undefined') {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
export function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

export function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}
