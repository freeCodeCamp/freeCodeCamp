import { isScheduler } from '../util/isScheduler';
import { fromArray } from './fromArray';
import { scheduleArray } from '../scheduled/scheduleArray';
export function of(...args) {
    let scheduler = args[args.length - 1];
    if (isScheduler(scheduler)) {
        args.pop();
        return scheduleArray(args, scheduler);
    }
    else {
        return fromArray(args);
    }
}
//# sourceMappingURL=of.js.map