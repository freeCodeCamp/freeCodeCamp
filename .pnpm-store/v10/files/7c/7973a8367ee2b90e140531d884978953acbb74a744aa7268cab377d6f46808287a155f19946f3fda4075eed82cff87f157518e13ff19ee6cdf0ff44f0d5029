import { _ as _$5 } from '@swc/helpers/esm/_call_super.js';
import { _ as _$3 } from '@swc/helpers/esm/_class_call_check.js';
import { _ } from '@swc/helpers/esm/_create_class.js';
import { _ as _$8 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$2 } from '@swc/helpers/esm/_inherits.js';
import { _ as _$7 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$6 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$4 } from '@swc/helpers/esm/_object_without_properties.js';
import { _ as _$1 } from '@swc/helpers/esm/_to_consumable_array.js';
import { AbstractChat } from '../ai-lite/abstract-chat.js';

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
        _$3(this, ChatState);
        _$8(this, "_messages", void 0);
        _$8(this, "_status", 'ready');
        _$8(this, "_error", undefined);
        _$8(this, "_messagesCallbacks", new Set());
        _$8(this, "_statusCallbacks", new Set());
        _$8(this, "_errorCallbacks", new Set());
        _$8(this, "pushMessage", function(message) {
            _this._messages = _this._messages.concat(message);
            _this._callMessagesCallbacks();
        });
        _$8(this, "popMessage", function() {
            _this._messages = _this._messages.slice(0, -1);
            _this._callMessagesCallbacks();
        });
        _$8(this, "replaceMessage", function(index, message) {
            _this._messages = _$1(_this._messages.slice(0, index)).concat([
                // We deep clone the message here to ensure the new React Compiler (currently in RC) detects deeply nested parts/metadata changes:
                _this.snapshot(message)
            ], _$1(_this._messages.slice(index + 1)));
            _this._callMessagesCallbacks();
        });
        _$8(this, "snapshot", function(thing) {
            return JSON.parse(JSON.stringify(thing));
        });
        _$8(this, _computedKey6, function(onChange) {
            var callback = onChange;
            _this._messagesCallbacks.add(callback);
            return function() {
                _this._messagesCallbacks.delete(callback);
            };
        });
        _$8(this, _computedKey7, function(onChange) {
            _this._statusCallbacks.add(onChange);
            return function() {
                _this._statusCallbacks.delete(onChange);
            };
        });
        _$8(this, _computedKey8, function(onChange) {
            _this._errorCallbacks.add(onChange);
            return function() {
                _this._errorCallbacks.delete(onChange);
            };
        });
        _$8(this, "_callMessagesCallbacks", function() {
            _this._messagesCallbacks.forEach(function(callback) {
                return callback();
            });
        });
        _$8(this, "_callStatusCallbacks", function() {
            _this._statusCallbacks.forEach(function(callback) {
                return callback();
            });
        });
        _$8(this, "_callErrorCallbacks", function() {
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
    _(ChatState, [
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
                this._messages = _$1(newMessages);
                this._callMessagesCallbacks();
            }
        }
    ]);
    return ChatState;
}();
_computedKey3 = '~registerMessagesCallback', _computedKey4 = '~registerStatusCallback', _computedKey5 = '~registerErrorCallback';
var _computedKey9 = _computedKey3, _computedKey10 = _computedKey4, _computedKey11 = _computedKey5;
var Chat = /*#__PURE__*/ function(AbstractChat) {
    _$2(Chat, AbstractChat);
    function Chat(_0) {
        _$3(this, Chat);
        var _this;
        var messages = _0.messages, agentId = _0.agentId, init = _$4(_0, [
            "messages",
            "agentId"
        ]);
        var state = new ChatState(agentId, messages);
        _this = _$5(this, Chat, [
            _$6(_$7({}, init), {
                state: state
            })
        ]), _$8(_this, "_state", void 0), _$8(_this, _computedKey9, function(onChange) {
            return _this._state['~registerMessagesCallback'](onChange);
        }), _$8(_this, _computedKey10, function(onChange) {
            return _this._state['~registerStatusCallback'](onChange);
        }), _$8(_this, _computedKey11, function(onChange) {
            return _this._state['~registerErrorCallback'](onChange);
        });
        _this._state = state;
        return _this;
    }
    return Chat;
}(AbstractChat);

export { AbstractChat, CACHE_KEY, Chat, ChatState };
