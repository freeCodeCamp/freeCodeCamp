import { normalizeObjectUnits } from '../units/aliases';
import { configFromArray } from './from-array';

export function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond];

    configFromArray(config);
}
