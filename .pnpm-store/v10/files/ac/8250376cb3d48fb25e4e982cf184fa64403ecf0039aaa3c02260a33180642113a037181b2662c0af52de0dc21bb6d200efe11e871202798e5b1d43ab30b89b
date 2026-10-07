import { Observable } from '../Observable';
import { subscribeTo } from '../util/subscribeTo';
import { scheduled } from '../scheduled/scheduled';
export function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable) {
            return input;
        }
        return new Observable(subscribeTo(input));
    }
    else {
        return scheduled(input, scheduler);
    }
}
//# sourceMappingURL=from.js.map