import { multicast } from './multicast';
import { refCount } from './refCount';
import { Subject } from '../Subject';
function shareSubjectFactory() {
    return new Subject();
}
export function share() {
    return (source) => refCount()(multicast(shareSubjectFactory)(source));
}
//# sourceMappingURL=share.js.map