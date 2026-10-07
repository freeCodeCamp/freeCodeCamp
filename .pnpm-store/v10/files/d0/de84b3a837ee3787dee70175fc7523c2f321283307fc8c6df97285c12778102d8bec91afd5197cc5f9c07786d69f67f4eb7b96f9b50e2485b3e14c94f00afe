import { Observable } from '../Observable';
import { isArray } from '../util/isArray';
import { isFunction } from '../util/isFunction';
import { map } from '../operators/map';
export function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(map(args => isArray(args) ? resultSelector(...args) : resultSelector(args)));
    }
    return new Observable(subscriber => {
        const handler = (...e) => subscriber.next(e.length === 1 ? e[0] : e);
        let retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!isFunction(removeHandler)) {
            return undefined;
        }
        return () => removeHandler(handler, retValue);
    });
}
//# sourceMappingURL=fromEventPattern.js.map