import { normalizeObjectUnits } from '../units/aliases';
import { configFromArray } from './from-array';
import map from '../utils/map';

export function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i),
        dayOrDate = i.day === undefined ? i.date : i.day;
    config._a = map(
        [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
        function (obj) {
            return obj && parseInt(obj, 10);
        }
    );

    configFromArray(config);
}
