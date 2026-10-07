'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "usePoweredBy", {
    enumerable: true,
    get: function() {
        return usePoweredBy;
    }
});
var _utils = require("instantsearch.js/cjs/lib/utils");
function usePoweredBy() {
    var hostname = (0, _utils.safelyRunOnBrowser)(function(param) {
        var window = param.window;
        var _window_location;
        return ((_window_location = window.location) === null || _window_location === void 0 ? void 0 : _window_location.hostname) || '';
    }, {
        fallback: function fallback() {
            return '';
        }
    });
    return {
        url: "https://www.algolia.com/?utm_source=react-instantsearch&utm_medium=website&utm_content=".concat(hostname, "&utm_campaign=poweredby")
    };
}
