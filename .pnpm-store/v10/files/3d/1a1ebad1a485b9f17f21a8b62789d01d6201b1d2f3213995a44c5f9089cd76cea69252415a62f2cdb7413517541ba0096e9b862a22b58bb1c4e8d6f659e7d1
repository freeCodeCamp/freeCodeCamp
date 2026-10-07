"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BindOnceFuture = void 0;
const promise_1 = require("./promise");
/**
 * Bind the callback and only invoke the callback once regardless how many times `BindOnceFuture.call` is invoked.
 */
class BindOnceFuture {
    _isCalled = false;
    _deferred = new promise_1.Deferred();
    _callback;
    _that;
    constructor(callback, that) {
        this._callback = callback;
        this._that = that;
    }
    get isCalled() {
        return this._isCalled;
    }
    get promise() {
        return this._deferred.promise;
    }
    call(...args) {
        if (!this._isCalled) {
            this._isCalled = true;
            try {
                Promise.resolve(this._callback.call(this._that, ...args)).then(val => this._deferred.resolve(val), err => this._deferred.reject(err));
            }
            catch (err) {
                this._deferred.reject(err);
            }
        }
        return this._deferred.promise;
    }
}
exports.BindOnceFuture = BindOnceFuture;
//# sourceMappingURL=callback.js.map