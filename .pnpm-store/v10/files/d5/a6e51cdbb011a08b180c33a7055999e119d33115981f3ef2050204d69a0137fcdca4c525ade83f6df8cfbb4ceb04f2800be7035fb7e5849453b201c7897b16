// eslint-disable-next-line no-restricted-globals
/**
 * Runs code on browser environments safely.
 */ function safelyRunOnBrowser(callback) {
    var fallback = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        fallback: function fallback() {
            return undefined;
        }
    }).fallback;
    // eslint-disable-next-line no-restricted-globals
    if (typeof window === 'undefined') {
        return fallback();
    }
    // eslint-disable-next-line no-restricted-globals
    return callback({
        window: window
    });
}

export { safelyRunOnBrowser };
