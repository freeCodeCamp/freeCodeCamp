function memoize(_target, key, descriptor) {
    let fnKey = null;
    let fn = null;
    if (typeof descriptor.value === 'function') {
        fnKey = 'value';
        fn = descriptor.value;
        if (fn.length !== 0) {
            console.warn('Memoize should only be used in functions with zero parameters');
        }
    }
    else if (typeof descriptor.get === 'function') {
        fnKey = 'get';
        fn = descriptor.get;
    }
    if (!fn) {
        throw new Error('not supported');
    }
    const memoizeKey = `$memoize$${key}`;
    descriptor[fnKey] = function (...args) {
        if (!this.hasOwnProperty(memoizeKey)) {
            Object.defineProperty(this, memoizeKey, {
                configurable: false,
                enumerable: false,
                writable: false,
                value: fn.apply(this, args)
            });
        }
        // eslint-disable-next-line local/code-no-any-casts
        return this[memoizeKey];
    };
}

export { memoize };
