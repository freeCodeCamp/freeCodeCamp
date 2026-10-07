/** PURE_IMPORTS_START _ReplaySubject,_multicast PURE_IMPORTS_END */
import { ReplaySubject } from '../ReplaySubject';
import { multicast } from './multicast';
export function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
        scheduler = selectorOrScheduler;
    }
    var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
    var subject = new ReplaySubject(bufferSize, windowTime, scheduler);
    return function (source) { return multicast(function () { return subject; }, selector)(source); };
}
//# sourceMappingURL=publishReplay.js.map
