import { safelyRunOnBrowser } from 'instantsearch.js/es/lib/utils/index.js';

function usePoweredBy() {
    var hostname = safelyRunOnBrowser(function(param) {
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

export { usePoweredBy };
