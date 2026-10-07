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
    get AbstractChat () {
        return _ailite.AbstractChat;
    },
    get CACHE_KEY () {
        return CACHE_KEY;
    },
    get Chat () {
        return Chat;
    },
    get ChatState () {
        return ChatState;
    }
});
var _call_super = require("@swc/helpers/_/_call_super");
var _class_call_check = require("@swc/helpers/_/_class_call_check");
var _create_class = require("@swc/helpers/_/_create_class");
var _define_property = require("@swc/helpers/_/_define_property");
var _inherits = require("@swc/helpers/_/_inherits");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _ailite = require("../ai-lite");
var _computedKey, _computedKey1, _computedKey2, _computedKey3, _computedKey4, _computedKey5;
var CACHE_KEY = 'instantsearch-chat-initial-messages';
function getDefaultInitialMessages(id) {
    var initialMessages = sessionStorage.getItem(CACHE_KEY + (id ? "-".concat(id) : ''));
    return initialMessages ? JSON.parse(initialMessages) : [];
}
_computedKey = '~registerMessagesCallback', _computedKey1 = '~registerStatusCallback', _computedKey2 = '~registerErrorCallback';
var _computedKey6 = _computedKey, _computedKey7 = _computedKey1, _computedKey8 = _computedKey2;
var ChatState = /*#__PURE__*/ function() {
    function ChatState() {
        var _this = this;
        var id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : undefined, initialMessages = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getDefaultInitialMessages(id);
        _class_call_check._(this, ChatState);
        _define_property._(this, "_messages", void 0);
        _define_property._(this, "_status", 'ready');
        _define_property._(this, "_error", undefined);
        _define_property._(this, "_messagesCallbacks", new Set());
        _define_property._(this, "_statusCallbacks", new Set());
        _define_property._(this, "_errorCallbacks", new Set());
        _define_property._(this, "pushMessage", function(message) {
            _this._messages = _this._messages.concat(message);
            _this._callMessagesCallbacks();
        });
        _define_property._(this, "popMessage", function() {
            _this._messages = _this._messages.slice(0, -1);
            _this._callMessagesCallbacks();
        });
        _define_property._(this, "replaceMessage", function(index, message) {
            _this._messages = _to_consumable_array._(_this._messages.slice(0, index)).concat([
                // We deep clone the message here to ensure the new React Compiler (currently in RC) detects deeply nested parts/metadata changes:
                _this.snapshot(message)
            ], _to_consumable_array._(_this._messages.slice(index + 1)));
            _this._callMessagesCallbacks();
        });
        _define_property._(this, "snapshot", function(thing) {
            return JSON.parse(JSON.stringify(thing));
        });
        _define_property._(this, _computedKey6, function(onChange) {
            var callback = onChange;
            _this._messagesCallbacks.add(callback);
            return function() {
                _this._messagesCallbacks.delete(callback);
            };
        });
        _define_property._(this, _computedKey7, function(onChange) {
            _this._statusCallbacks.add(onChange);
            return function() {
                _this._statusCallbacks.delete(onChange);
            };
        });
        _define_property._(this, _computedKey8, function(onChange) {
            _this._errorCallbacks.add(onChange);
            return function() {
                _this._errorCallbacks.delete(onChange);
            };
        });
        _define_property._(this, "_callMessagesCallbacks", function() {
            _this._messagesCallbacks.forEach(function(callback) {
                return callback();
            });
        });
        _define_property._(this, "_callStatusCallbacks", function() {
            _this._statusCallbacks.forEach(function(callback) {
                return callback();
            });
        });
        _define_property._(this, "_callErrorCallbacks", function() {
            _this._errorCallbacks.forEach(function(callback) {
                return callback();
            });
        });
        this._messages = initialMessages;
        var saveMessagesInLocalStorage = function saveMessagesInLocalStorage() {
            if (_this.status === 'ready') {
                try {
                    sessionStorage.setItem(CACHE_KEY + (id ? "-".concat(id) : ''), JSON.stringify(_this.messages));
                } catch (e) {
                // Do nothing if sessionStorage is not available or full
                }
            }
        };
        this['~registerMessagesCallback'](saveMessagesInLocalStorage);
        this['~registerStatusCallback'](saveMessagesInLocalStorage);
    }
    _create_class._(ChatState, [
        {
            key: "status",
            get: function get() {
                return this._status;
            },
            set: function set(newStatus) {
                this._status = newStatus;
                this._callStatusCallbacks();
            }
        },
        {
            key: "error",
            get: function get() {
                return this._error;
            },
            set: function set(newError) {
                this._error = newError;
                this._callErrorCallbacks();
            }
        },
        {
            key: "messages",
            get: function get() {
                return this._messages;
            },
            set: function set(newMessages) {
                this._messages = _to_consumable_array._(newMessages);
                this._callMessagesCallbacks();
            }
        }
    ]);
    return ChatState;
}();
_computedKey3 = '~registerMessagesCallback', _computedKey4 = '~registerStatusCallback', _computedKey5 = '~registerErrorCallback';
var _computedKey9 = _computedKey3, _computedKey10 = _computedKey4, _computedKey11 = _computedKey5;
var Chat = /*#__PURE__*/ function(AbstractChat) {
    _inherits._(Chat, AbstractChat);
    function Chat(_0) {
        _class_call_check._(this, Chat);
        var _this;
        var messages = _0.messages, agentId = _0.agentId, init = _object_without_properties._(_0, [
            "messages",
            "agentId"
        ]);
        var state = new ChatState(agentId, messages);
        _this = _call_super._(this, Chat, [
            _object_spread_props._(_object_spread._({}, init), {
                state: state
            })
        ]), _define_property._(_this, "_state", void 0), _define_property._(_this, _computedKey9, function(onChange) {
            return _this._state['~registerMessagesCallback'](onChange);
        }), _define_property._(_this, _computedKey10, function(onChange) {
            return _this._state['~registerStatusCallback'](onChange);
        }), _define_property._(_this, _computedKey11, function(onChange) {
            return _this._state['~registerErrorCallback'](onChange);
        });
        _this._state = state;
        return _this;
    }
    return Chat;
}(_ailite.AbstractChat);
