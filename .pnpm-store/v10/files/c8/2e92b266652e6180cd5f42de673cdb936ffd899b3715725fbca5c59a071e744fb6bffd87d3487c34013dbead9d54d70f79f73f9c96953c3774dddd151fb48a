/** PURE_IMPORTS_START _BehaviorSubject,_multicast PURE_IMPORTS_END */
import { BehaviorSubject } from '../BehaviorSubject';
import { multicast } from './multicast';
export function publishBehavior(value) {
    return function (source) { return multicast(new BehaviorSubject(value))(source); };
}
//# sourceMappingURL=publishBehavior.js.map
