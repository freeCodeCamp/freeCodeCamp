/** PURE_IMPORTS_START _scheduler_async,_util_TimeoutError,_timeoutWith,_observable_throwError PURE_IMPORTS_END */
import { async } from '../scheduler/async';
import { TimeoutError } from '../util/TimeoutError';
import { timeoutWith } from './timeoutWith';
import { throwError } from '../observable/throwError';
export function timeout(due, scheduler) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    return timeoutWith(due, throwError(new TimeoutError()), scheduler);
}
//# sourceMappingURL=timeout.js.map
