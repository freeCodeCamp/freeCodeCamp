import { createDuration } from '../duration/create';
import { createLocal } from '../create/local';
import { isMoment } from '../moment/constructor';

export function to(time, withoutSuffix) {
    if (
        this.isValid() &&
        ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
    ) {
        return createDuration({ from: this, to: time })
            .locale(this.locale())
            .humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

export function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}
