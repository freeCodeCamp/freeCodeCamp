/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { JSHandle } from '../api/JSHandle.js';
import type { PuppeteerInjectedUtil } from '../injected/injected.js';
/**
 * @internal
 */
export interface PuppeteerUtilWrapper {
    puppeteerUtil: Promise<JSHandle<PuppeteerInjectedUtil>>;
}
/**
 * @internal
 */
export declare class LazyArg<T, Context = PuppeteerUtilWrapper> {
    #private;
    static create: <T_1>(get: (context: PuppeteerUtilWrapper) => Promise<T_1> | T_1) => T_1;
    private constructor();
    get(context: Context): Promise<T>;
}
//# sourceMappingURL=LazyArg.d.ts.map