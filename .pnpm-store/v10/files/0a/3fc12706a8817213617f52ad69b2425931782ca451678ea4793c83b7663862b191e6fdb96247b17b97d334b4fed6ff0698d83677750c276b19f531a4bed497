import { Observable } from '../Observable';
import { isArray } from '../util/isArray';
import { map } from '../operators/map';
import { isObject } from '../util/isObject';
import { from } from './from';
export function forkJoin(...sources) {
    if (sources.length === 1) {
        const first = sources[0];
        if (isArray(first)) {
            return forkJoinInternal(first, null);
        }
        if (isObject(first) && Object.getPrototypeOf(first) === Object.prototype) {
            const keys = Object.keys(first);
            return forkJoinInternal(keys.map(key => first[key]), keys);
        }
    }
    if (typeof sources[sources.length - 1] === 'function') {
        const resultSelector = sources.pop();
        sources = (sources.length === 1 && isArray(sources[0])) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe(map((args) => resultSelector(...args)));
    }
    return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
    return new Observable(subscriber => {
        const len = sources.length;
        if (len === 0) {
            subscriber.complete();
            return;
        }
        const values = new Array(len);
        let completed = 0;
        let emitted = 0;
        for (let i = 0; i < len; i++) {
            const source = from(sources[i]);
            let hasValue = false;
            subscriber.add(source.subscribe({
                next: value => {
                    if (!hasValue) {
                        hasValue = true;
                        emitted++;
                    }
                    values[i] = value;
                },
                error: err => subscriber.error(err),
                complete: () => {
                    completed++;
                    if (completed === len || !hasValue) {
                        if (emitted === len) {
                            subscriber.next(keys ?
                                keys.reduce((result, key, i) => (result[key] = values[i], result), {}) :
                                values);
                        }
                        subscriber.complete();
                    }
                }
            }));
        }
    });
}
//# sourceMappingURL=forkJoin.js.map