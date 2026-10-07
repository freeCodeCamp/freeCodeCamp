var isObject = function isObject(value) {
    return value instanceof Object && value.constructor === Object;
};

var parseWrapArguments = function parseWrapArguments(args) {
    var length = args.length;
    var work;
    var options = {};
    var cb;

    /**
     * As we can receive an unlimited number of keys
     * we find the index of the first function which is
     * the "work" handler to fetch the keys.
     */
    for (var i = 0; i < length; i += 1) {
        if (typeof args[i] === 'function') {
            if (typeof args[i + 2] === 'function') {
                cb = args.pop();
            } else if (typeof args[i + 1] === 'function') {
                cb = args.pop();
            }
            if (isObject(args[i + 1])) {
                options = args.pop();
            }
            work = args.pop();
            break;
        }
    }

    return {
        keys: args,
        work: work,
        options: options,
        cb: cb
    };
};

module.exports = {
    isObject: isObject,
    parseWrapArguments: parseWrapArguments
};
