import { cloneMethod } from '../check/symbols.js';
import { constant } from './constant.js';
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
    [cloneMethod]() {
        return new ContextImplem();
    }
}
export function context() {
    return constant(new ContextImplem());
}
