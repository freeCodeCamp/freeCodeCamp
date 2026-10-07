/** PURE_IMPORTS_START _scheduler_async,_scan,_observable_defer,_map PURE_IMPORTS_END */
import { async } from '../scheduler/async';
import { scan } from './scan';
import { defer } from '../observable/defer';
import { map } from './map';
export function timeInterval(scheduler) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    return function (source) {
        return defer(function () {
            return source.pipe(scan(function (_a, value) {
                var current = _a.current;
                return ({ value: value, current: scheduler.now(), last: current });
            }, { current: scheduler.now(), value: undefined, last: undefined }), map(function (_a) {
                var current = _a.current, last = _a.last, value = _a.value;
                return new TimeInterval(value, current - last);
            }));
        });
    };
}
var TimeInterval = /*@__PURE__*/ (function () {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}());
export { TimeInterval };
//# sourceMappingURL=timeInterval.js.map
