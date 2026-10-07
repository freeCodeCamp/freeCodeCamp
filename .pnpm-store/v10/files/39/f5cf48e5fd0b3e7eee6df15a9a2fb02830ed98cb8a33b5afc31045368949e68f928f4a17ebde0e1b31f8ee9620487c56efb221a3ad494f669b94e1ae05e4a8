"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoopContextManager = void 0;
const context_1 = require("./context");
class NoopContextManager {
    active() {
        return context_1.ROOT_CONTEXT;
    }
    with(_context, fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
    }
    bind(_context, target) {
        return target;
    }
    enable() {
        return this;
    }
    disable() {
        return this;
    }
}
exports.NoopContextManager = NoopContextManager;
//# sourceMappingURL=NoopContextManager.js.map