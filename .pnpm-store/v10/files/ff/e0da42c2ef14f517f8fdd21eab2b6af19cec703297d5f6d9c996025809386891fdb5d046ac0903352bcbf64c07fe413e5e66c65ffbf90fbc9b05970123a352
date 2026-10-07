import pLimit from 'p-limit';
/**
 * Converts a string to 32bit integer
 */
export function stringToHash(str) {
    let hash = 0;
    if (str.length === 0) {
        return hash;
    }
    let char;
    for (let i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        // tslint:disable-next-line: no-bitwise
        hash = (hash << 5) - hash + char;
        // tslint:disable-next-line: no-bitwise
        hash = hash & hash;
    }
    return hash;
}
export function useStack(...fns) {
    return (input) => {
        function createNext(i) {
            if (i >= fns.length) {
                return () => { };
            }
            return function next() {
                fns[i](input, createNext(i + 1));
            };
        }
        fns[0](input, createNext(1));
    };
}
export function useLimit(concurrency) {
    return pLimit(concurrency);
}
