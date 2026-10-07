import { async } from '../scheduler/async';
import { map } from './map';
export function timestamp(scheduler = async) {
    return map((value) => new Timestamp(value, scheduler.now()));
}
export class Timestamp {
    constructor(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
}
//# sourceMappingURL=timestamp.js.map