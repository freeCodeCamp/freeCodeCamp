import { _ as _$2 } from '@swc/helpers/esm/_class_call_check.js';
import { _ } from '@swc/helpers/esm/_create_class.js';
import { _ as _$3 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_type_of.js';

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}
function isToolOrDynamicToolUIPart(part) {
    if ((typeof part === "undefined" ? "undefined" : _$1(part)) !== 'object' || part === null) return false;
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
        _$2(this, SerialJobExecutor);
        _$3(this, "queue", []);
        _$3(this, "isRunning", false);
    }
    _(SerialJobExecutor, [
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

export { SerialJobExecutor, generateId, lastAssistantMessageIsCompleteWithToolCalls, resolveValue };
