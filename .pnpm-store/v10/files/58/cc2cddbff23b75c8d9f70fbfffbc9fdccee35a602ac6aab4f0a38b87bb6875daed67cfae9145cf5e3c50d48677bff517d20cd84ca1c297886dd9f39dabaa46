import { Subscriber } from '../Subscriber';
import { Subject } from '../Subject';

/**
 * Determines whether the ErrorObserver is closed or stopped or has a
 * destination that is closed or stopped - in which case errors will
 * need to be reported via a different mechanism.
 * @param observer the observer
 */
export function canReportError(observer: Subscriber<any> | Subject<any>): boolean {
  while (observer) {
    const { closed, destination, isStopped } = observer as any;
    if (closed || isStopped) {
      return false;
    } else if (destination && destination instanceof Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }
  return true;
}
