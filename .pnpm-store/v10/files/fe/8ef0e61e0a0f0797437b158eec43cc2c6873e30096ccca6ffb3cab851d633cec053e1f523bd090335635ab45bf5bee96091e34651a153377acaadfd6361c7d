import { _ } from '@swc/helpers/esm/_type_of.js';

var ANONYMOUS_TOKEN_COOKIE_KEY = '_ALGOLIA';
function getCookie(name) {
    if ((typeof document === "undefined" ? "undefined" : _(document)) !== 'object' || typeof document.cookie !== 'string') {
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
/**
 * @deprecated This function will be still supported in 4.x releases, but not further. It is replaced by the `insights` middleware. For more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/
 */ function getInsightsAnonymousUserToken() {
    return getInsightsAnonymousUserTokenInternal();
}

export { ANONYMOUS_TOKEN_COOKIE_KEY, getInsightsAnonymousUserToken as default, getInsightsAnonymousUserTokenInternal };
