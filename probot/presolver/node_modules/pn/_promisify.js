// freeze Array#slice, just in case of funny business later.
var _slice = Array.prototype.slice;
var getPromise = require('./_promise.js');

// deferred gets its own scope to prevent inadvertent capture in the closure
var deferred = function(options) {
    var Promise = getPromise();
    var resolve, reject, p = new Promise(function(_resolve, _reject) {
        resolve = _resolve; reject = _reject;
    });
    var pattern = (options && options.pattern);
    var noError = (options && options.noError);
    var cb = pattern ? function(err) {
        if (err && !noError) { return reject(err); }
        var result = {}, i, offset = noError ? 0 : 1;
        for (i = 0; i < pattern.length; i++) {
            result[pattern[i]] = arguments[i+offset];
        }
        resolve(result);
    } : noError ? resolve : function(err, val) {
        if (err) { reject(err); } else { resolve(val); }
    };
    return { promise: p, callback: cb };
};
var promisify = module.exports = function(context, func, mandatoryArgs, options) {
    if (options && options.callbackIsFirstArg) {
        // duplicate some code here so we don't have to process this unusual
        // situation at runtime in the common case.
        return function(cb) {
            if (typeof(cb) === 'function') {
                return func.apply(context, arguments);
            }
            var d = deferred(options);
            var a = _slice.call(arguments, 0);
            a.unshift(d.callback);
            func.apply(context, a);
            return d.promise;
        };
    }
    return function() {
        var cb = arguments[arguments.length - 1];
        if (typeof(cb) === 'function') {
            return func.apply(context, arguments);
        }
        // ooh, promises.
        var d = deferred(options);
        var a = _slice.call(arguments, 0);
        while (a.length < mandatoryArgs) { a.push(undefined); }
        a.push(d.callback);
        var retval = func.apply(context, a);
        if (options && options.returnsObject) {
            // it would be nice to have a better convention here
            Object.defineProperty(retval, 'promise', { value: d.promise });
            return retval;
        }
        return d.promise;
    };
};
