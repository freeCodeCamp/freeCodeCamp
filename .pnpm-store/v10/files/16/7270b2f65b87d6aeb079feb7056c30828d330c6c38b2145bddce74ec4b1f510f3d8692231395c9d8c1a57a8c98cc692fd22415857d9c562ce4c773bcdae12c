/* @minVersion 7.22.0 */
function dispose_SuppressedError(suppressed, error) {
    if (typeof SuppressedError !== "undefined") {
        // eslint-disable-next-line no-undef
        dispose_SuppressedError = SuppressedError;
    } else {
        dispose_SuppressedError = function SuppressedError(suppressed, error) {
            this.suppressed = suppressed;
            this.error = error;
            this.stack = new Error().stack;
        };
        dispose_SuppressedError.prototype = Object.create(Error.prototype, { constructor: { value: dispose_SuppressedError, writable: true, configurable: true } });
    }
    return new dispose_SuppressedError(suppressed, error);
}

export function _dispose(stack, error, hasError) {
    function next() {
        while (stack.length > 0) {
            try {
                var r = stack.pop();
                var p = r.d.call(r.v);
                if (r.a) return Promise.resolve(p).then(next, err);
            } catch (e) {
                return err(e);
            }
        }
        if (hasError) throw error;
    }

    function err(e) {
        error = hasError ? new dispose_SuppressedError(e, error) : e;
        hasError = true;

        return next();
    }

    return next();
}

export { _dispose as _ };
