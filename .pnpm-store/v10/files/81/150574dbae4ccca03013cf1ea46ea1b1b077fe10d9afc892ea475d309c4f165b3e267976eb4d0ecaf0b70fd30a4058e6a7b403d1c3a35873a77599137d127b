import { ReplaySubject } from '../ReplaySubject';
import { multicast } from './multicast';
export function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
        scheduler = selectorOrScheduler;
    }
    const selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
    const subject = new ReplaySubject(bufferSize, windowTime, scheduler);
    return (source) => multicast(() => subject, selector)(source);
}
//# sourceMappingURL=publishReplay.js.map