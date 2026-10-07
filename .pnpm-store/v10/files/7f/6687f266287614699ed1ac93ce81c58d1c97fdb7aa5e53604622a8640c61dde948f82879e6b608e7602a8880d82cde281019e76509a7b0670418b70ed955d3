import { _ as _$6 } from '@swc/helpers/esm/_call_super.js';
import { _ as _$5 } from '@swc/helpers/esm/_class_call_check.js';
import { _ } from '@swc/helpers/esm/_create_class.js';
import { _ as _$7 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$4 } from '@swc/helpers/esm/_inherits.js';
import { _ as _$3 } from '@swc/helpers/esm/_instanceof.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_sliced_to_array.js';
import { parseJsonEventStream } from './stream-parser.js';
import { resolveValue } from './utils.js';

/**
 * Abstract base class for HTTP-based chat transports.
 */ var HttpChatTransport = /*#__PURE__*/ function() {
    function HttpChatTransport(param) {
        var _param_api = param.api, api = _param_api === void 0 ? '/api/chat' : _param_api, credentials = param.credentials, headers = param.headers, body = param.body, customFetch = param.fetch, prepareSendMessagesRequest = param.prepareSendMessagesRequest, prepareReconnectToStreamRequest = param.prepareReconnectToStreamRequest;
        _$5(this, HttpChatTransport);
        _$7(this, "api", void 0);
        _$7(this, "credentials", void 0);
        _$7(this, "headers", void 0);
        _$7(this, "body", void 0);
        _$7(this, "fetch", void 0);
        _$7(this, "prepareSendMessagesRequest", void 0);
        _$7(this, "prepareReconnectToStreamRequest", void 0);
        this.api = api;
        this.credentials = credentials;
        this.headers = headers;
        this.body = body;
        this.fetch = customFetch;
        this.prepareSendMessagesRequest = prepareSendMessagesRequest;
        this.prepareReconnectToStreamRequest = prepareReconnectToStreamRequest;
    }
    _(HttpChatTransport, [
        {
            key: "sendMessages",
            value: function sendMessages(param) {
                var _this = this;
                var abortSignal = param.abortSignal, chatId = param.chatId, messages = param.messages, requestMetadata = param.requestMetadata, trigger = param.trigger, messageId = param.messageId, requestHeaders = param.headers, requestBody = param.body;
                var _this_fetch;
                var fetchFn = (_this_fetch = this.fetch) !== null && _this_fetch !== void 0 ? _this_fetch : fetch;
                // Resolve configurable values
                return Promise.all([
                    resolveValue(this.credentials),
                    resolveValue(this.headers),
                    resolveValue(this.body)
                ]).then(function(param) {
                    var _param = _$1(param, 3), resolvedCredentials = _param[0], resolvedHeaders = _param[1], resolvedBody = _param[2];
                    // Build default request options
                    var api = _this.api;
                    var body = _$2({
                        id: chatId,
                        messages: messages
                    }, resolvedBody, requestBody);
                    var headers = _$2({
                        'Content-Type': 'application/json'
                    }, _$3(resolvedHeaders, Headers) ? Object.fromEntries(resolvedHeaders.entries()) : resolvedHeaders, _$3(requestHeaders, Headers) ? Object.fromEntries(requestHeaders.entries()) : requestHeaders);
                    var credentials = resolvedCredentials;
                    // Apply custom preparation if provided
                    var prepareRequestBody = _$2({}, resolvedBody, requestBody);
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
                                headers = _$2({
                                    'Content-Type': 'application/json'
                                }, _$3(prepared.headers, Headers) ? Object.fromEntries(prepared.headers.entries()) : prepared.headers);
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
                    resolveValue(this.credentials),
                    resolveValue(this.headers),
                    resolveValue(this.body)
                ]).then(function(param) {
                    var _param = _$1(param, 3), resolvedCredentials = _param[0], resolvedHeaders = _param[1], resolvedBody = _param[2];
                    // Build default request options
                    var api = _this.api;
                    var headers = _$2({}, _$3(resolvedHeaders, Headers) ? Object.fromEntries(resolvedHeaders.entries()) : resolvedHeaders, _$3(requestHeaders, Headers) ? Object.fromEntries(requestHeaders.entries()) : requestHeaders);
                    var credentials = resolvedCredentials;
                    // Apply custom preparation if provided
                    var prepareRequestBody = _$2({}, resolvedBody, requestBody);
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
                                headers = _$3(prepared.headers, Headers) ? Object.fromEntries(prepared.headers.entries()) : prepared.headers;
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
/**
 * Default chat transport implementation using NDJSON streaming.
 */ var DefaultChatTransport = /*#__PURE__*/ function(HttpChatTransport) {
    _$4(DefaultChatTransport, HttpChatTransport);
    function DefaultChatTransport() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _$5(this, DefaultChatTransport);
        return _$6(this, DefaultChatTransport, [
            options
        ]);
    }
    _(DefaultChatTransport, [
        {
            key: "processResponseStream",
            value: function processResponseStream(stream) {
                return parseJsonEventStream(stream);
            }
        }
    ]);
    return DefaultChatTransport;
}(HttpChatTransport);

export { DefaultChatTransport, HttpChatTransport };
