import { subscribeToArray } from './subscribeToArray';
import { subscribeToPromise } from './subscribeToPromise';
import { subscribeToIterable } from './subscribeToIterable';
import { subscribeToObservable } from './subscribeToObservable';
import { isArrayLike } from './isArrayLike';
import { isPromise } from './isPromise';
import { isObject } from './isObject';
import { iterator as Symbol_iterator } from '../symbol/iterator';
import { observable as Symbol_observable } from '../symbol/observable';
export const subscribeTo = (result) => {
    if (!!result && typeof result[Symbol_observable] === 'function') {
        return subscribeToObservable(result);
    }
    else if (isArrayLike(result)) {
        return subscribeToArray(result);
    }
    else if (isPromise(result)) {
        return subscribeToPromise(result);
    }
    else if (!!result && typeof result[Symbol_iterator] === 'function') {
        return subscribeToIterable(result);
    }
    else {
        const value = isObject(result) ? 'an invalid object' : `'${result}'`;
        const msg = `You provided ${value} where a stream was expected.`
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map