
// v8 builtin format stack trace
// for when there was no previous prepareStackTrace function to call
var FormatStackTrace = require('./formatstack');

// some notes on the behavior below:
// because the 'stack' member is a one shot access variable (the raw stack is
// formatted on accessing it)
// we try to avoid modifying what the user would have wanted
// thus we use the previous value for prepareStackTrace
//
// The reason we store the callsite variable is because prepareStackTrace
// will not be called again once it has been called for a given error object
// but we want to support getting the stack out of the error multiple times (cause why not)
module.exports = function(err) {

    // save original stacktrace
    var save = Error.prepareStackTrace;

    // replace capture with our function
    Error.prepareStackTrace =  function(err, trace) {

        // cache stack frames so we don't have to get them again
        // use a non-enumerable property
        Object.defineProperty(err, '_sb_callsites', {
            value: trace
        });

        return (save || FormatStackTrace)(err, trace);
    };

    // force capture of the stack frames
    err.stack;

    // someone already asked for the stack so we can't do this trick
    // TODO fallback to string parsing?
    if (!err._sb_callsites) {
        return [];
    }

    // return original capture function
    Error.prepareStackTrace = save;

    return err._sb_callsites;
};

