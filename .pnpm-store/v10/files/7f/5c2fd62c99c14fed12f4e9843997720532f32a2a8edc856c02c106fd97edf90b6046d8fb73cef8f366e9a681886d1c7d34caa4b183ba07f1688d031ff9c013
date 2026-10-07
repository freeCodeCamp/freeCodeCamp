"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = context;
const symbols_1 = require("../check/symbols");
const constant_1 = require("./constant");
class ContextImplem {
    constructor() {
        this.receivedLogs = [];
    }
    log(data) {
        this.receivedLogs.push(data);
    }
    size() {
        return this.receivedLogs.length;
    }
    toString() {
        return JSON.stringify({ logs: this.receivedLogs });
    }
    [symbols_1.cloneMethod]() {
        return new ContextImplem();
    }
}
function context() {
    return (0, constant_1.constant)(new ContextImplem());
}
