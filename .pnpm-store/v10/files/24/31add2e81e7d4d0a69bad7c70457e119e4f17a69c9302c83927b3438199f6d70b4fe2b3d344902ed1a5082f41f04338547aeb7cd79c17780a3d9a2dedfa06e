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
    get SerialJobExecutor () {
        return SerialJobExecutor;
    },
    get generateId () {
        return generateId;
    },
    get lastAssistantMessageIsCompleteWithToolCalls () {
        return lastAssistantMessageIsCompleteWithToolCalls;
    },
    get resolveValue () {
        return resolveValue;
    }
});
var _class_call_check = require("@swc/helpers/_/_class_call_check");
var _create_class = require("@swc/helpers/_/_create_class");
var _define_property = require("@swc/helpers/_/_define_property");
var _type_of = require("@swc/helpers/_/_type_of");
function generateId() {
    return Math.random().toString(36).substring(2, 9);
}
function isToolOrDynamicToolUIPart(part) {
    if ((typeof part === "undefined" ? "undefined" : _type_of._(part)) !== 'object' || part === null) return false;
    var p = part;
    return typeof p.type === 'string' && (p.type.startsWith('tool-') || p.type === 'dynamic-tool');
}
function lastAssistantMessageIsCompleteWithToolCalls(param) {
    var messages = param.messages;
    if (messages.length === 0) return false;
    var lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== 'assistant') return false;
    if (!lastMessage.parts || lastMessage.parts.length === 0) return false;
    var toolParts = lastMessage.parts.filter(isToolOrDynamicToolUIPart);
    if (toolParts.length === 0) return false;
    return toolParts.every(function(part) {
        return part.state === 'output-available' || part.state === 'output-error';
    });
}
var SerialJobExecutor = /*#__PURE__*/ function() {
    function SerialJobExecutor() {
        _class_call_check._(this, SerialJobExecutor);
        _define_property._(this, "queue", []);
        _define_property._(this, "isRunning", false);
    }
    _create_class._(SerialJobExecutor, [
        {
            key: "run",
            value: function run(job) {
                var _this = this;
                return new Promise(function(resolve, reject) {
                    _this.queue.push(function() {
                        return job().then(function(result) {
                            resolve(result);
                        }, function(error) {
                            reject(error);
                        });
                    });
                    _this.processQueue();
                });
            }
        },
        {
            key: "processQueue",
            value: function processQueue() {
                var _this = this;
                if (this.isRunning) return;
                this.isRunning = true;
                var processNext = function processNext1() {
                    if (_this.queue.length === 0) {
                        _this.isRunning = false;
                        return;
                    }
                    var job = _this.queue.shift();
                    if (job) {
                        job().then(processNext, processNext);
                    }
                };
                processNext();
            }
        }
    ]);
    return SerialJobExecutor;
}();
function resolveValue(value) {
    if (value === undefined) return Promise.resolve(undefined);
    if (typeof value === 'function') {
        return Promise.resolve(value());
    }
    return Promise.resolve(value);
}
