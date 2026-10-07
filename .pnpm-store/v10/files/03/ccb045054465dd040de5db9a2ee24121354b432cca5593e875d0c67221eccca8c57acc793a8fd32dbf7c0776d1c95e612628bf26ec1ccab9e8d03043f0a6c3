/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
export function createIncrementalIdGenerator() {
    let id = 0;
    return () => {
        if (id === Number.MAX_SAFE_INTEGER) {
            id = 0;
        }
        return ++id;
    };
}
//# sourceMappingURL=incremental-id-generator.js.map