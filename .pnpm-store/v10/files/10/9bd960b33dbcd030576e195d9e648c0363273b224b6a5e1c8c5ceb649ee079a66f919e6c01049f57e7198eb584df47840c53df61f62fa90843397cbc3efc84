/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
import { Observable } from '../Observable';
export var EMPTY = /*@__PURE__*/ new Observable(function (subscriber) { return subscriber.complete(); });
export function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map
