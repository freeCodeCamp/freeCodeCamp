/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
export const isNode = !!(typeof process !== 'undefined' && process.version);
/**
 * Holder for environment dependencies. These dependencies cannot
 * be used during the module instantiation.
 */
export const environment = {
    value: {
        get fs() {
            throw new Error('fs is not available in this environment');
        },
        get ScreenRecorder() {
            throw new Error('ScreenRecorder is not available in this environment');
        },
    },
};
//# sourceMappingURL=environment.js.map