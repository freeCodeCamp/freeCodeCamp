'use strict';

// typed as any, since it accepts the _real_ js clients, not the interface we otherwise expect
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getAppIdAndApiKey", {
    enumerable: true,
    get: function() {
        return getAppIdAndApiKey;
    }
});
function getAppIdAndApiKey(searchClient) {
    if (searchClient.appId && searchClient.apiKey) {
        // searchClient v5
        return [
            searchClient.appId,
            searchClient.apiKey
        ];
    } else if (searchClient.transporter) {
        // searchClient v4 or v5
        var transporter = searchClient.transporter;
        var headers = transporter.headers || transporter.baseHeaders;
        var queryParameters = transporter.queryParameters || transporter.baseQueryParameters;
        var APP_ID = 'x-algolia-application-id';
        var API_KEY = 'x-algolia-api-key';
        var appId = headers[APP_ID] || queryParameters[APP_ID];
        var apiKey = headers[API_KEY] || queryParameters[API_KEY];
        return [
            appId,
            apiKey
        ];
    } else {
        // searchClient v3
        return [
            searchClient.applicationID,
            searchClient.apiKey
        ];
    }
}
