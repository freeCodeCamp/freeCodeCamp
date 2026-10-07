'use strict';

const cacheSymbol = Symbol();

function probe(file, fs, callback) {
    const cachedPrecision = fs[cacheSymbol];

    if (cachedPrecision) {
        return fs.stat(file, (err, stat) => {
            /* istanbul ignore if */
            if (err) {
                return callback(err);
            }

            callback(null, stat.mtime, cachedPrecision);
        });
    }

    // Set mtime by ceiling Date.now() to seconds + 5ms so that it's "not on the second"
    const mtime = new Date((Math.ceil(Date.now() / 1000) * 1000) + 5);

    fs.utimes(file, mtime, mtime, (err) => {
        /* istanbul ignore if */
        if (err) {
            return callback(err);
        }

        fs.stat(file, (err, stat) => {
            /* istanbul ignore if */
            if (err) {
                return callback(err);
            }

            const precision = stat.mtime.getTime() % 1000 === 0 ? 's' : 'ms';

            // Cache the precision in a non-enumerable way
            Object.defineProperty(fs, cacheSymbol, { value: precision });

            callback(null, stat.mtime, precision);
        });
    });
}

function getMtime(precision) {
    let now = Date.now();

    if (precision === 's') {
        now = Math.ceil(now / 1000) * 1000;
    }

    return new Date(now);
}

module.exports.probe = probe;
module.exports.getMtime = getMtime;
