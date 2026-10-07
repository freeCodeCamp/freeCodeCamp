/** PURE_IMPORTS_START _Subject,_multicast PURE_IMPORTS_END */
import { Subject } from '../Subject';
import { multicast } from './multicast';
export function publish(selector) {
    return selector ?
        multicast(function () { return new Subject(); }, selector) :
        multicast(new Subject());
}
//# sourceMappingURL=publish.js.map
