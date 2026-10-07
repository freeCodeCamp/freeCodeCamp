import { concat } from '../observable/concat';
import { isScheduler } from '../util/isScheduler';
export function startWith(...array) {
    const scheduler = array[array.length - 1];
    if (isScheduler(scheduler)) {
        array.pop();
        return (source) => concat(array, source, scheduler);
    }
    else {
        return (source) => concat(array, source);
    }
}
//# sourceMappingURL=startWith.js.map