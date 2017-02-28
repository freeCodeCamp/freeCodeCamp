import { normalizeUnits } from '../units/aliases';
import absFloor from '../utils/abs-floor';

export function get (units) {
    units = normalizeUnits(units);
    return this[units + 's']();
}

function makeGetter(name) {
    return function () {
        return this._data[name];
    };
}

export var milliseconds = makeGetter('milliseconds');
export var seconds      = makeGetter('seconds');
export var minutes      = makeGetter('minutes');
export var hours        = makeGetter('hours');
export var days         = makeGetter('days');
export var months       = makeGetter('months');
export var years        = makeGetter('years');

export function weeks () {
    return absFloor(this.days() / 7);
}
