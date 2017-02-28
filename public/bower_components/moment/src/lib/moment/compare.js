import { isMoment } from './constructor';
import { normalizeUnits } from '../units/aliases';
import { createLocal } from '../create/local';

export function isAfter (input, units) {
    var inputMs;
    units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
    if (units === 'millisecond') {
        input = isMoment(input) ? input : createLocal(input);
        return +this > +input;
    } else {
        inputMs = isMoment(input) ? +input : +createLocal(input);
        return inputMs < +this.clone().startOf(units);
    }
}

export function isBefore (input, units) {
    var inputMs;
    units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
    if (units === 'millisecond') {
        input = isMoment(input) ? input : createLocal(input);
        return +this < +input;
    } else {
        inputMs = isMoment(input) ? +input : +createLocal(input);
        return +this.clone().endOf(units) < inputMs;
    }
}

export function isBetween (from, to, units) {
    return this.isAfter(from, units) && this.isBefore(to, units);
}

export function isSame (input, units) {
    var inputMs;
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        input = isMoment(input) ? input : createLocal(input);
        return +this === +input;
    } else {
        inputMs = +createLocal(input);
        return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
    }
}
