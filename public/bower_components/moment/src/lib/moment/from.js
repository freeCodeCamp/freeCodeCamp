import { createDuration } from '../duration/create';
import { createLocal } from '../create/local';

export function from (time, withoutSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }
    return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
}

export function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}
