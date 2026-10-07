/** PURE_IMPORTS_START _scheduler_async,_audit,_observable_timer PURE_IMPORTS_END */
import { async } from '../scheduler/async';
import { audit } from './audit';
import { timer } from '../observable/timer';
export function auditTime(duration, scheduler) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    return audit(function () { return timer(duration, scheduler); });
}
//# sourceMappingURL=auditTime.js.map
