'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get ANONYMOUS_TOKEN_COOKIE_KEY () {
        return ANONYMOUS_TOKEN_COOKIE_KEY;
    },
    get /**
 * @deprecated This function will be still supported in 4.x releases, but not further. It is replaced by the `insights` middleware. For more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/
 */ default () {
        return getInsightsAnonymousUserToken;
    },
    get getInsightsAnonymousUserTokenInternal () {
        return getInsightsAnonymousUserTokenInternal;
    }
});
var _type_of = require("@swc/helpers/_/_type_of");
var _utils = require("../lib/utils");
var ANONYMOUS_TOKEN_COOKIE_KEY = '_ALGOLIA';
function getCookie(name) {
    if ((typeof document === "undefined" ? "undefined" : _type_of._(document)) !== 'object' || typeof document.cookie !== 'string') {
        return undefined;
    }
    var prefix = "".concat(name, "=");
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++){
        var cookie = cookies[i];
        while(cookie.charAt(0) === ' '){
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(prefix) === 0) {
            return cookie.substring(prefix.length, cookie.length);
        }
    }
    return undefined;
}
function getInsightsAnonymousUserTokenInternal() {
    return getCookie(ANONYMOUS_TOKEN_COOKIE_KEY);
}
function getInsightsAnonymousUserToken() {
    (0, _utils.warning)(false, "`getInsightsAnonymousUserToken` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
    return getInsightsAnonymousUserTokenInternal();
}
