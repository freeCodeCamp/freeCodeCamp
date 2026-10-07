import { async } from '../scheduler/async';
import { scan } from './scan';
import { defer } from '../observable/defer';
import { map } from './map';
export function timeInterval(scheduler = async) {
    return (source) => defer(() => {
        return source.pipe(scan(({ current }, value) => ({ value, current: scheduler.now(), last: current }), { current: scheduler.now(), value: undefined, last: undefined }), map(({ current, last, value }) => new TimeInterval(value, current - last)));
    });
}
export class TimeInterval {
    constructor(value, interval) {
        this.value = value;
        this.interval = interval;
    }
}
//# sourceMappingURL=timeInterval.js.map