'use strict';

const internals = {
    maxTimer: 2 ** 31 - 1              // ~25 days
};


module.exports = function (timeout, returnValue, options) {

    if (typeof timeout === 'bigint') {
        timeout = Number(timeout);
    }

    if (timeout >= Number.MAX_SAFE_INTEGER) {         // Thousands of years
        timeout = Infinity;
    }

    if (typeof timeout !== 'number' && timeout !== undefined) {
        throw new TypeError('Timeout must be a number or bigint');
    }

    return new Promise((resolve) => {

        const _setTimeout = options ? options.setTimeout : setTimeout;

        const activate = () => {

            const time = Math.min(timeout, internals.maxTimer);
            timeout -= time;
            _setTimeout(() => (timeout > 0 ? activate() : resolve(returnValue)), time);
        };

        if (timeout !== Infinity) {
            activate();
        }
    });
};
