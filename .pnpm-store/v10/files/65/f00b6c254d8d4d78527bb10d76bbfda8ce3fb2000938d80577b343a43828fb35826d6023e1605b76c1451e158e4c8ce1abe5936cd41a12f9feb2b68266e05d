'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useAppIdAndApiKey", {
    enumerable: true,
    get: function() {
        return useAppIdAndApiKey;
    }
});
var _utils = require("instantsearch.js/cjs/lib/utils");
var _useInstantSearchContext = require("./useInstantSearchContext");
var useAppIdAndApiKey = function useAppIdAndApiKey() {
    var client = (0, _useInstantSearchContext.useInstantSearchContext)().client;
    return (0, _utils.getAppIdAndApiKey)(client);
};
