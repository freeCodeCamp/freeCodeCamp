import { async } from '../scheduler/async';
import { TimeoutError } from '../util/TimeoutError';
import { timeoutWith } from './timeoutWith';
import { throwError } from '../observable/throwError';
export function timeout(due, scheduler = async) {
    return timeoutWith(due, throwError(new TimeoutError()), scheduler);
}
//# sourceMappingURL=timeout.js.map