/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
import { observable as Symbol_observable } from '../symbol/observable';
export var subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[Symbol_observable]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map
