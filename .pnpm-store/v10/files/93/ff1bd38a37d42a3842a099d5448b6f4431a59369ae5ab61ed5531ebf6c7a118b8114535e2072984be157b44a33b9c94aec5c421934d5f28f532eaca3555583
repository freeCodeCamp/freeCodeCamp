/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Get a key to uniquely identify a context value
 *
 * @since 1.0.0
 */
export function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
class BaseContext {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */
    constructor(parentContext) {
        // for minification
        const self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = (key) => self._currentContext.get(key);
        self.setValue = (key, value) => {
            const context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = (key) => {
            const context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
}
/**
 * The root context is used as the default parent context when there is no active context
 *
 * @since 1.0.0
 */
export const ROOT_CONTEXT = new BaseContext();
//# sourceMappingURL=context.js.map