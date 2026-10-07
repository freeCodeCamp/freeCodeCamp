import { observable as Symbol_observable } from '../symbol/observable';
export const subscribeToObservable = (obj) => (subscriber) => {
    const obs = obj[Symbol_observable]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
};
//# sourceMappingURL=subscribeToObservable.js.map