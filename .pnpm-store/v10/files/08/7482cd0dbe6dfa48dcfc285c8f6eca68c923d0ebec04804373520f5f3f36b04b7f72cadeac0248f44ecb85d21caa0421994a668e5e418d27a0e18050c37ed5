import { _ as _$1 } from '@swc/helpers/esm/_class_call_check.js';
import { _ } from '@swc/helpers/esm/_create_class.js';
import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import qs from 'qs';
import { safelyRunOnBrowser } from '../utils/safelyRunOnBrowser.js';

var setWindowTitle = function setWindowTitle(title) {
    if (title) {
        // This function is only executed on browsers so we can disable this check.
        // eslint-disable-next-line no-restricted-globals
        window.document.title = title;
    }
};
var BrowserHistory = /*#__PURE__*/ function() {
    function BrowserHistory(param) {
        var _this = this;
        var windowTitle = param.windowTitle, _param_writeDelay = param.writeDelay, writeDelay = _param_writeDelay === void 0 ? 400 : _param_writeDelay, createURL = param.createURL, parseURL = param.parseURL, getLocation = param.getLocation, start = param.start, dispose = param.dispose, push = param.push, cleanUrlOnDispose = param.cleanUrlOnDispose;
        _$1(this, BrowserHistory);
        _$2(this, "$$type", 'ais.browser');
        /**
   * Transforms a UI state into a title for the page.
   */ _$2(this, "windowTitle", void 0);
        /**
   * Time in milliseconds before performing a write in the history.
   * It prevents from adding too many entries in the history and
   * makes the back button more usable.
   *
   * @default 400
   */ _$2(this, "writeDelay", void 0);
        /**
   * Creates a full URL based on the route state.
   * The storage adaptor maps all syncable keys to the query string of the URL.
   */ _$2(this, "_createURL", void 0);
        /**
   * Parses the URL into a route state.
   * It should be symmetrical to `createURL`.
   */ _$2(this, "parseURL", void 0);
        /**
   * Returns the location to store in the history.
   * @default () => window.location
   */ _$2(this, "getLocation", void 0);
        _$2(this, "writeTimer", void 0);
        _$2(this, "_onPopState", void 0);
        /**
   * Indicates if last action was back/forward in the browser.
   */ _$2(this, "inPopState", false);
        /**
   * Indicates whether the history router is disposed or not.
   */ _$2(this, "isDisposed", false);
        /**
   * Indicates the window.history.length before the last call to
   * window.history.pushState (called in `write`).
   * It allows to determine if a `pushState` has been triggered elsewhere,
   * and thus to prevent the `write` method from calling `pushState`.
   */ _$2(this, "latestAcknowledgedHistory", 0);
        _$2(this, "_start", void 0);
        _$2(this, "_dispose", void 0);
        _$2(this, "_push", void 0);
        _$2(this, "_cleanUrlOnDispose", void 0);
        this.windowTitle = windowTitle;
        this.writeTimer = undefined;
        this.writeDelay = writeDelay;
        this._createURL = createURL;
        this.parseURL = parseURL;
        this.getLocation = getLocation;
        this._start = start;
        this._dispose = dispose;
        this._push = push;
        this._cleanUrlOnDispose = typeof cleanUrlOnDispose === 'undefined' ? true : cleanUrlOnDispose;
        safelyRunOnBrowser(function(param) {
            var browserWindow = param.window;
            var title = _this.windowTitle && _this.windowTitle(_this.read());
            setWindowTitle(title);
            _this.latestAcknowledgedHistory = browserWindow.history.length;
        });
    }
    _(BrowserHistory, [
        {
            key: "read",
            value: /**
   * Reads the URL and returns a syncable UI search state.
   */ function read() {
                return this.parseURL({
                    qsModule: qs,
                    location: this.getLocation()
                });
            }
        },
        {
            key: "write",
            value: /**
   * Pushes a search state into the URL.
   */ function write(routeState) {
                var _this = this;
                safelyRunOnBrowser(function(param) {
                    var browserWindow = param.window;
                    var url = _this.createURL(routeState);
                    var title = _this.windowTitle && _this.windowTitle(routeState);
                    if (_this.writeTimer) {
                        clearTimeout(_this.writeTimer);
                    }
                    _this.writeTimer = setTimeout(function() {
                        setWindowTitle(title);
                        if (_this.shouldWrite(url)) {
                            if (_this._push) {
                                _this._push(url);
                            } else {
                                browserWindow.history.pushState(routeState, title || '', url);
                            }
                            _this.latestAcknowledgedHistory = browserWindow.history.length;
                        }
                        _this.inPopState = false;
                        _this.writeTimer = undefined;
                    }, _this.writeDelay);
                });
            }
        },
        {
            key: "onUpdate",
            value: /**
   * Sets a callback on the `onpopstate` event of the history API of the current page.
   * It enables the URL sync to keep track of the changes.
   */ function onUpdate(callback) {
                var _this = this;
                if (this._start) {
                    this._start(function() {
                        callback(_this.read());
                    });
                }
                this._onPopState = function() {
                    if (_this.writeTimer) {
                        clearTimeout(_this.writeTimer);
                        _this.writeTimer = undefined;
                    }
                    _this.inPopState = true;
                    // We always read the state from the URL because the state of the history
                    // can be incorect in some cases (e.g. using React Router).
                    callback(_this.read());
                };
                safelyRunOnBrowser(function(param) {
                    var browserWindow = param.window;
                    browserWindow.addEventListener('popstate', _this._onPopState);
                });
            }
        },
        {
            key: "createURL",
            value: /**
   * Creates a complete URL from a given syncable UI state.
   *
   * It always generates the full URL, not a relative one.
   * This allows to handle cases like using a <base href>.
   * See: https://github.com/algolia/instantsearch/issues/790
   */ function createURL(routeState) {
                var url = this._createURL({
                    qsModule: qs,
                    routeState: routeState,
                    location: this.getLocation()
                });
                return url;
            }
        },
        {
            key: "dispose",
            value: /**
   * Removes the event listener and cleans up the URL.
   */ function dispose() {
                var _this = this;
                if (this._dispose) {
                    this._dispose();
                }
                this.isDisposed = true;
                safelyRunOnBrowser(function(param) {
                    var browserWindow = param.window;
                    if (_this._onPopState) {
                        browserWindow.removeEventListener('popstate', _this._onPopState);
                    }
                });
                if (this.writeTimer) {
                    clearTimeout(this.writeTimer);
                }
                if (this._cleanUrlOnDispose) {
                    this.write({});
                }
            }
        },
        {
            key: "start",
            value: function start() {
                this.isDisposed = false;
            }
        },
        {
            key: "shouldWrite",
            value: function shouldWrite(url) {
                var _this = this;
                return safelyRunOnBrowser(function(param) {
                    var browserWindow = param.window;
                    // When disposed and the cleanUrlOnDispose is set to false, we do not want to write the URL.
                    if (_this.isDisposed && !_this._cleanUrlOnDispose) {
                        return false;
                    }
                    // We do want to `pushState` if:
                    // - the router is not disposed, IS.js needs to update the URL
                    // OR
                    // - the last write was from InstantSearch.js
                    // (unlike a SPA, where it would have last written)
                    var lastPushWasByISAfterDispose = !(_this.isDisposed && _this.latestAcknowledgedHistory !== browserWindow.history.length);
                    return(// When the last state change was through popstate, the IS.js state changes,
                    // but that should not write the URL.
                    !_this.inPopState && // When the previous pushState after dispose was by IS.js, we want to write the URL.
                    lastPushWasByISAfterDispose && // When the URL is the same as the current one, we do not want to write it.
                    url !== browserWindow.location.href);
                });
            }
        }
    ]);
    return BrowserHistory;
}();
function historyRouter() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref_createURL = _ref.createURL, createURL = _ref_createURL === void 0 ? function(param) {
        var qsModule = param.qsModule, routeState = param.routeState, location = param.location;
        var protocol = location.protocol, hostname = location.hostname, _location_port = location.port, port = _location_port === void 0 ? '' : _location_port, pathname = location.pathname, hash = location.hash;
        var queryString = qsModule.stringify(routeState);
        var portWithPrefix = port === '' ? '' : ":".concat(port);
        // IE <= 11 has no proper `location.origin` so we cannot rely on it.
        if (!queryString) {
            return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname).concat(hash);
        }
        return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname, "?").concat(queryString).concat(hash);
    } : _ref_createURL, _ref_parseURL = _ref.parseURL, parseURL = _ref_parseURL === void 0 ? function(param) {
        var qsModule = param.qsModule, location = param.location;
        // `qs` by default converts arrays with more than 20 items to an object.
        // We want to avoid this because the data structure manipulated can therefore vary.
        // Setting the limit to `100` seems a good number because the engine's default is 100
        // (it can go up to 1000 but it is very unlikely to select more than 100 items in the UI).
        //
        // Using an `arrayLimit` of `n` allows `n + 1` items.
        //
        // See:
        //   - https://github.com/ljharb/qs#parsing-arrays
        //   - https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/
        return qsModule.parse(location.search.slice(1), {
            arrayLimit: 99
        });
    } : _ref_parseURL, _ref_writeDelay = _ref.writeDelay, writeDelay = _ref_writeDelay === void 0 ? 400 : _ref_writeDelay, windowTitle = _ref.windowTitle, _ref_getLocation = _ref.getLocation, getLocation = _ref_getLocation === void 0 ? function() {
        return safelyRunOnBrowser(function(param) {
            var browserWindow = param.window;
            return browserWindow.location;
        }, {
            fallback: function fallback() {
                throw new Error('You need to provide `getLocation` to the `history` router in environments where `window` does not exist.');
            }
        });
    } : _ref_getLocation, start = _ref.start, dispose = _ref.dispose, push = _ref.push, cleanUrlOnDispose = _ref.cleanUrlOnDispose;
    return new BrowserHistory({
        createURL: createURL,
        parseURL: parseURL,
        writeDelay: writeDelay,
        windowTitle: windowTitle,
        getLocation: getLocation,
        start: start,
        dispose: dispose,
        push: push,
        cleanUrlOnDispose: cleanUrlOnDispose
    });
}

export { historyRouter as default };
