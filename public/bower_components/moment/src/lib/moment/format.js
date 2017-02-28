import { formatMoment } from '../format/format';
import { hooks } from '../utils/hooks';

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

export function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

export function toISOString () {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
        if ('function' === typeof Date.prototype.toISOString) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        } else {
            return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    } else {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
}

export function format (inputString) {
    var output = formatMoment(this, inputString || hooks.defaultFormat);
    return this.localeData().postformat(output);
}
