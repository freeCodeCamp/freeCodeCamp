function _using_ctx() {
    var _disposeSuppressedError = typeof SuppressedError === "function"
            // eslint-disable-next-line no-undef
            ? SuppressedError
            : (function(error, suppressed) {
                var err = new Error();
                err.name = "SuppressedError";
                err.suppressed = suppressed;
                err.error = error;
                return err;
            }),
        empty = {},
        stack = [];
    function using(isAwait, value) {
        if (value != null) {
            if (Object(value) !== value) {
                throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
            }
            // core-js-pure uses Symbol.for for polyfilling well-known symbols
            if (isAwait) {
                var dispose = value[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
            }
            if (dispose == null) {
                dispose = value[Symbol.dispose || Symbol.for("Symbol.dispose")];
            }
            if (typeof dispose !== "function") {
                throw new TypeError(`Property [Symbol.dispose] is not a function.`);
            }
            stack.push({ v: value, d: dispose, a: isAwait });
        } else if (isAwait) {
            // provide the nullish `value` as `d` for minification gain
            stack.push({ d: value, a: isAwait });
        }
        return value;
    }
    return {
        // error
        e: empty,
        // using
        u: using.bind(null, false),
        // await using
        a: using.bind(null, true),
        // dispose
        d: function() {
            var error = this.e;

            function next() {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                while ((resource = stack.pop())) {
                    try {
                        var resource, disposalResult = resource.d && resource.d.call(resource.v);
                        if (resource.a) {
                            return Promise.resolve(disposalResult).then(next, err);
                        }
                    } catch (e) {
                        return err(e);
                    }
                }
                if (error !== empty) throw error;
            }

            function err(e) {
                error = error !== empty ? new _disposeSuppressedError(e, error) : e;

                return next();
            }

            return next();
        }
    };
}

export { _using_ctx as _ };
