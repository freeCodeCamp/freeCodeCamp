'use strict';

const fs = require('graceful-fs');

function createSyncFs(fs) {
    const methods = ['mkdir', 'realpath', 'stat', 'rmdir', 'utimes'];
    const newFs = { ...fs };

    methods.forEach((method) => {
        newFs[method] = (...args) => {
            const callback = args.pop();
            let ret;

            try {
                ret = fs[`${method}Sync`](...args);
            } catch (err) {
                return callback(err);
            }

            callback(null, ret);
        };
    });

    return newFs;
}

// ----------------------------------------------------------

function toPromise(method) {
    return (...args) => new Promise((resolve, reject) => {
        args.push((err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });

        method(...args);
    });
}

function toSync(method) {
    return (...args) => {
        let err;
        let result;

        args.push((_err, _result) => {
            err = _err;
            result = _result;
        });

        method(...args);

        if (err) {
            throw err;
        }

        return result;
    };
}

function toSyncOptions(options) {
    // Shallow clone options because we are oging to mutate them
    options = { ...options };

    // Transform fs to use the sync methods instead
    options.fs = createSyncFs(options.fs || fs);

    // Retries are not allowed because it requires the flow to be sync
    if (
        (typeof options.retries === 'number' && options.retries > 0) ||
        (options.retries && typeof options.retries.retries === 'number' && options.retries.retries > 0)
    ) {
        throw Object.assign(new Error('Cannot use retries with the sync api'), { code: 'ESYNC' });
    }

    return options;
}

module.exports = {
    toPromise,
    toSync,
    toSyncOptions,
};
