"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deferred = void 0;
class Deferred {
    _promise;
    _resolve;
    _reject;
    constructor() {
        this._promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    get promise() {
        return this._promise;
    }
    resolve(val) {
        this._resolve(val);
    }
    reject(err) {
        this._reject(err);
    }
}
exports.Deferred = Deferred;
//# sourceMappingURL=promise.js.map