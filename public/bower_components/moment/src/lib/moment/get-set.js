import { normalizeUnits } from '../units/aliases';
import { hooks } from '../utils/hooks';

export function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

export function get (mom, unit) {
    return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
}

export function set (mom, unit, value) {
    return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
}

// MOMENTS

export function getSet (units, value) {
    var unit;
    if (typeof units === 'object') {
        for (unit in units) {
            this.set(unit, units[unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (typeof this[units] === 'function') {
            return this[units](value);
        }
    }
    return this;
}
