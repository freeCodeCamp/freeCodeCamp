'use strict';

/**
 * ai-lite module - a minimal reimplementation of the 'ai' package.
 *
 * This module provides the core chat functionality needed for InstantSearch
 * without the full weight of the Vercel AI SDK.
 */ // Classes
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
    get AbstractChat () {
        return _abstractchat.AbstractChat;
    },
    get DefaultChatTransport () {
        return _transport.DefaultChatTransport;
    },
    get HttpChatTransport () {
        return _transport.HttpChatTransport;
    },
    get SerialJobExecutor () {
        return _utils.SerialJobExecutor;
    },
    get generateId () {
        return _utils.generateId;
    },
    get lastAssistantMessageIsCompleteWithToolCalls () {
        return _utils.lastAssistantMessageIsCompleteWithToolCalls;
    },
    get parseJsonEventStream () {
        return _streamparser.parseJsonEventStream;
    },
    get processStream () {
        return _streamparser.processStream;
    }
});
var _abstractchat = require("./abstract-chat");
var _transport = require("./transport");
var _utils = require("./utils");
var _streamparser = require("./stream-parser");
