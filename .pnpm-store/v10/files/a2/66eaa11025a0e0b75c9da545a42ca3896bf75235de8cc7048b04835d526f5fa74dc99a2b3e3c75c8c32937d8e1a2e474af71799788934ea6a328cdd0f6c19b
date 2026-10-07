/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Deferred } from './promise';
/**
 * Bind the callback and only invoke the callback once regardless how many times `BindOnceFuture.call` is invoked.
 */
export class BindOnceFuture {
    _isCalled = false;
    _deferred = new Deferred();
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
//# sourceMappingURL=callback.js.map