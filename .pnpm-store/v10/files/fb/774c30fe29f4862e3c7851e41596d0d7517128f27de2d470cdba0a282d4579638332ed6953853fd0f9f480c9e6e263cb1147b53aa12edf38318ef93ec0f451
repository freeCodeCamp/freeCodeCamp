/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
import { Observable } from '../Observable';
import { from } from './from';
import { empty } from './empty';
export function defer(observableFactory) {
    return new Observable(function (subscriber) {
        var input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? from(input) : empty();
        return source.subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map
