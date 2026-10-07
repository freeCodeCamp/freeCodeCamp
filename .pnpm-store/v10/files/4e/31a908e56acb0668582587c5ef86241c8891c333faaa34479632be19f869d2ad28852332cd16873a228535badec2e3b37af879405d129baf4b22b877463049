'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createInfiniteHitsSessionStorageCache;
    }
});
var _instanceof = require("@swc/helpers/_/_instanceof");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _utils = require("../utils");
function getStateWithoutPage(state) {
    var _ref = state || {}; _ref.page; var rest = _object_without_properties._(_ref, [
        "page"
    ]);
    return rest;
}
function createInfiniteHitsSessionStorageCache() {
    var key = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).key;
    var KEY = [
        'ais.infiniteHits',
        key
    ].filter(Boolean).join(':');
    return {
        read: function read(param) {
            var state = param.state;
            var sessionStorage = (0, _utils.safelyRunOnBrowser)(function(param) {
                var window = param.window;
                return window.sessionStorage;
            });
            if (!sessionStorage) {
                return null;
            }
            try {
                var cache = JSON.parse(// @ts-expect-error JSON.parse() requires a string, but it actually accepts null, too.
                sessionStorage.getItem(KEY));
                return cache && (0, _utils.isEqual)(cache.state, getStateWithoutPage(state)) ? cache.hits : null;
            } catch (error) {
                if (_instanceof._(error, SyntaxError)) {
                    try {
                        sessionStorage.removeItem(KEY);
                    } catch (err) {
                    // do nothing
                    }
                }
                return null;
            }
        },
        write: function write(param) {
            var state = param.state, hits = param.hits;
            var sessionStorage = (0, _utils.safelyRunOnBrowser)(function(param) {
                var window = param.window;
                return window.sessionStorage;
            });
            if (!sessionStorage) {
                return;
            }
            try {
                sessionStorage.setItem(KEY, JSON.stringify({
                    state: getStateWithoutPage(state),
                    hits: hits
                }));
            } catch (error) {
            // do nothing
            }
        }
    };
}
