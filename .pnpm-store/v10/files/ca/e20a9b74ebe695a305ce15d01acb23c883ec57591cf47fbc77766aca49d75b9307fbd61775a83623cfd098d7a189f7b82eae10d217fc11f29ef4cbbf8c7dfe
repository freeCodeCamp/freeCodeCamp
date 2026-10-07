/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ROOT_CONTEXT } from './context';
export class NoopContextManager {
    active() {
        return ROOT_CONTEXT;
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
//# sourceMappingURL=NoopContextManager.js.map