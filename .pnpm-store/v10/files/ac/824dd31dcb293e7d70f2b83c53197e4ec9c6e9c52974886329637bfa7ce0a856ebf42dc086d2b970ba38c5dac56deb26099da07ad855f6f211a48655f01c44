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
    get DefaultChatTransport () {
        return DefaultChatTransport;
    },
    get HttpChatTransport () {
        return HttpChatTransport;
    }
});
var _call_super = require("@swc/helpers/_/_call_super");
var _class_call_check = require("@swc/helpers/_/_class_call_check");
var _create_class = require("@swc/helpers/_/_create_class");
var _define_property = require("@swc/helpers/_/_define_property");
var _inherits = require("@swc/helpers/_/_inherits");
var _instanceof = require("@swc/helpers/_/_instanceof");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _streamparser = require("./stream-parser");
var _utils = require("./utils");
var HttpChatTransport = /*#__PURE__*/ function() {
    function HttpChatTransport(param) {
        var _param_api = param.api, api = _param_api === void 0 ? '/api/chat' : _param_api, credentials = param.credentials, headers = param.headers, body = param.body, customFetch = param.fetch, prepareSendMessagesRequest = param.prepareSendMessagesRequest, prepareReconnectToStreamRequest = param.prepareReconnectToStreamRequest;
        _class_call_check._(this, HttpChatTransport);
        _define_property._(this, "api", void 0);
        _define_property._(this, "credentials", void 0);
        _define_property._(this, "headers", void 0);
        _define_property._(this, "body", void 0);
        _define_property._(this, "fetch", void 0);
        _define_property._(this, "prepareSendMessagesRequest", void 0);
        _define_property._(this, "prepareReconnectToStreamRequest", void 0);
        this.api = api;
        this.credentials = credentials;
        this.headers = headers;
        this.body = body;
        this.fetch = customFetch;
        this.prepareSendMessagesRequest = prepareSendMessagesRequest;
        this.prepareReconnectToStreamRequest = prepareReconnectToStreamRequest;
    }
    _create_class._(HttpChatTransport, [
        {
            key: "sendMessages",
            value: function sendMessages(param) {
                var _this = this;
                var abortSignal = param.abortSignal, chatId = param.chatId, messages = param.messages, requestMetadata = param.requestMetadata, trigger = param.trigger, messageId = param.messageId, requestHeaders = param.headers, requestBody = param.body;
                var _this_fetch;
                var fetchFn = (_this_fetch = this.fetch) !== null && _this_fetch !== void 0 ? _this_fetch : fetch;
                // Resolve configurable values
                return Promise.all([
                    (0, _utils.resolveValue)(this.credentials),
                    (0, _utils.resolveValue)(this.headers),
                    (0, _utils.resolveValue)(this.body)
                ]).then(function(param) {
                    var _param = _sliced_to_array._(param, 3), resolvedCredentials = _param[0], resolvedHeaders = _param[1], resolvedBody = _param[2];
                    // Build default request options
                    var api = _this.api;
                    var body = _object_spread._({
                        id: chatId,
                        messages: messages
                    }, resolvedBody, requestBody);
                    var headers = _object_spread._({
                        'Content-Type': 'application/json'
                    }, _instanceof._(resolvedHeaders, Headers) ? Object.fromEntries(resolvedHeaders.entries()) : resolvedHeaders, _instanceof._(requestHeaders, Headers) ? Object.fromEntries(requestHeaders.entries()) : requestHeaders);
                    var credentials = resolvedCredentials;
                    // Apply custom preparation if provided
                    var prepareRequestBody = _object_spread._({}, resolvedBody, requestBody);
                    var preparePromise = _this.prepareSendMessagesRequest ? Promise.resolve(_this.prepareSendMessagesRequest({
                        id: chatId,
                        messages: messages,
                        requestMetadata: requestMetadata,
                        body: prepareRequestBody,
                        credentials: resolvedCredentials,
                        headers: resolvedHeaders,
                        api: _this.api,
                        trigger: trigger,
                        messageId: messageId
                    })) : Promise.resolve(null);
                    return preparePromise.then(function(prepared) {
                        if (prepared) {
                            body = prepared.body;
                            if (prepared.api) api = prepared.api;
                            if (prepared.headers) {
                                headers = _object_spread._({
                                    'Content-Type': 'application/json'
                                }, _instanceof._(prepared.headers, Headers) ? Object.fromEntries(prepared.headers.entries()) : prepared.headers);
                            }
                            if (prepared.credentials) credentials = prepared.credentials;
                        }
                        return fetchFn(api, {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify(body),
                            signal: abortSignal,
                            credentials: credentials
                        }).then(function(response) {
                            if (!response.ok) {
                                throw new Error("HTTP error: ".concat(response.status, " ").concat(response.statusText));
                            }
                            if (!response.body) {
                                throw new Error('Response body is empty');
                            }
                            return _this.processResponseStream(response.body);
                        });
                    });
                });
            }
        },
        {
            key: "reconnectToStream",
            value: function reconnectToStream(param) {
                var _this = this;
                var chatId = param.chatId, requestHeaders = param.headers, requestBody = param.body;
                var _this_fetch;
                var fetchFn = (_this_fetch = this.fetch) !== null && _this_fetch !== void 0 ? _this_fetch : fetch;
                // Resolve configurable values
                return Promise.all([
                    (0, _utils.resolveValue)(this.credentials),
                    (0, _utils.resolveValue)(this.headers),
                    (0, _utils.resolveValue)(this.body)
                ]).then(function(param) {
                    var _param = _sliced_to_array._(param, 3), resolvedCredentials = _param[0], resolvedHeaders = _param[1], resolvedBody = _param[2];
                    // Build default request options
                    var api = _this.api;
                    var headers = _object_spread._({}, _instanceof._(resolvedHeaders, Headers) ? Object.fromEntries(resolvedHeaders.entries()) : resolvedHeaders, _instanceof._(requestHeaders, Headers) ? Object.fromEntries(requestHeaders.entries()) : requestHeaders);
                    var credentials = resolvedCredentials;
                    // Apply custom preparation if provided
                    var prepareRequestBody = _object_spread._({}, resolvedBody, requestBody);
                    var preparePromise = _this.prepareReconnectToStreamRequest ? Promise.resolve(_this.prepareReconnectToStreamRequest({
                        id: chatId,
                        requestMetadata: undefined,
                        body: prepareRequestBody,
                        credentials: resolvedCredentials,
                        headers: resolvedHeaders,
                        api: _this.api
                    })) : Promise.resolve(null);
                    return preparePromise.then(function(prepared) {
                        if (prepared) {
                            if (prepared.api) api = prepared.api;
                            if (prepared.headers) {
                                headers = _instanceof._(prepared.headers, Headers) ? Object.fromEntries(prepared.headers.entries()) : prepared.headers;
                            }
                            if (prepared.credentials) credentials = prepared.credentials;
                        }
                        // GET request for reconnection
                        return fetchFn("".concat(api, "?chatId=").concat(chatId), {
                            method: 'GET',
                            headers: headers,
                            credentials: credentials
                        }).then(function(response) {
                            if (!response.ok) {
                                // 404 means no stream to reconnect to, which is not an error
                                if (response.status === 404) {
                                    return null;
                                }
                                throw new Error("HTTP error: ".concat(response.status, " ").concat(response.statusText));
                            }
                            if (!response.body) {
                                return null;
                            }
                            return _this.processResponseStream(response.body);
                        });
                    });
                });
            }
        }
    ]);
    return HttpChatTransport;
}();
var DefaultChatTransport = /*#__PURE__*/ function(HttpChatTransport) {
    _inherits._(DefaultChatTransport, HttpChatTransport);
    function DefaultChatTransport() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _class_call_check._(this, DefaultChatTransport);
        return _call_super._(this, DefaultChatTransport, [
            options
        ]);
    }
    _create_class._(DefaultChatTransport, [
        {
            key: "processResponseStream",
            value: function processResponseStream(stream) {
                return (0, _streamparser.parseJsonEventStream)(stream);
            }
        }
    ]);
    return DefaultChatTransport;
}(HttpChatTransport);
