"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deferred = void 0;
class Deferred {
    constructor() {
        this.resolve = () => null;
        this.reject = () => null;
        this.promise = new Promise((resolve, reject) => {
            this.reject = reject;
            this.resolve = resolve;
        });
    }
}
exports.Deferred = Deferred;
