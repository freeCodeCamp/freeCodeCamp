import { createDuration } from '../duration/create';
import { createLocal } from '../create/local';

export function to (time, withoutSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }
    return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
}

export function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}
