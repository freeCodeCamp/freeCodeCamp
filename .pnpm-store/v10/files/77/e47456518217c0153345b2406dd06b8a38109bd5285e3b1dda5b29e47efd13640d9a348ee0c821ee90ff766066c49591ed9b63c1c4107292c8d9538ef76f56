'use strict';

// eslint-disable-next-line no-restricted-globals
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "safelyRunOnBrowser", {
    enumerable: true,
    get: function() {
        return safelyRunOnBrowser;
    }
});
function safelyRunOnBrowser(callback) {
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
