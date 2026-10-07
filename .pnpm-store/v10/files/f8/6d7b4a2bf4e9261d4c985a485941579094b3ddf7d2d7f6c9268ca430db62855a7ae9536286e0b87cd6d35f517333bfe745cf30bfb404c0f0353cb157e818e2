import { Observable } from '../Observable';
import { from } from './from';
import { empty } from './empty';
export function defer(observableFactory) {
    return new Observable(subscriber => {
        let input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        const source = input ? from(input) : empty();
        return source.subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map