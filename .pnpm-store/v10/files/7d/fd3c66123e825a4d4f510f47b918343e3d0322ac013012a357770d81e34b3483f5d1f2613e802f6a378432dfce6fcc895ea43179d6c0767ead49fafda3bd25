"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = require("../core/global");
/**
 * @hidden
 */
var bfsSetImmediate;
if (typeof (setImmediate) !== "undefined") {
    bfsSetImmediate = setImmediate;
}
else {
    var gScope_1 = global_1.default;
    var timeouts_1 = [];
    var messageName_1 = "zero-timeout-message";
    var canUsePostMessage = function () {
        if (typeof gScope_1.importScripts !== 'undefined' || !gScope_1.postMessage) {
            return false;
        }
        var postMessageIsAsync = true;
        var oldOnMessage = gScope_1.onmessage;
        gScope_1.onmessage = function () {
            postMessageIsAsync = false;
        };
        gScope_1.postMessage('', '*');
        gScope_1.onmessage = oldOnMessage;
        return postMessageIsAsync;
    };
    if (canUsePostMessage()) {
        bfsSetImmediate = function (fn) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            timeouts_1.push({ fn: fn, args: args });
            gScope_1.postMessage(messageName_1, "*");
        };
        var handleMessage = function (event) {
            if (event.source === self && event.data === messageName_1) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else {
                    event.cancelBubble = true;
                }
                if (timeouts_1.length > 0) {
                    var _a = timeouts_1.shift(), fn = _a.fn, args = _a.args;
                    return fn.apply(void 0, args);
                }
            }
        };
        if (gScope_1.addEventListener) {
            gScope_1.addEventListener('message', handleMessage, true);
        }
        else {
            gScope_1.attachEvent('onmessage', handleMessage);
        }
    }
    else if (gScope_1.MessageChannel) {
        // WebWorker MessageChannel
        var channel_1 = new gScope_1.MessageChannel();
        channel_1.port1.onmessage = function (event) {
            if (timeouts_1.length > 0) {
                var _a = timeouts_1.shift(), fn = _a.fn, args = _a.args;
                return fn.apply(void 0, args);
            }
        };
        bfsSetImmediate = function (fn) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            timeouts_1.push({ fn: fn, args: args });
            channel_1.port2.postMessage('');
        };
    }
    else {
        bfsSetImmediate = function (fn) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return setTimeout.apply(void 0, __spreadArray([fn, 0], args, false));
        };
    }
}
exports.default = bfsSetImmediate;