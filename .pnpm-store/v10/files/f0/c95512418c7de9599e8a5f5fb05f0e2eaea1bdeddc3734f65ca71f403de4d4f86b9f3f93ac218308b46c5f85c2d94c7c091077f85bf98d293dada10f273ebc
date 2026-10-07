/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { CustomQueryHandler } from '../common/CustomQueryHandler.js';
import type { Awaitable, AwaitableIterable } from '../common/types.js';
/**
 * @public
 */
export interface CustomQuerySelector {
    querySelector(root: Node, selector: string): Awaitable<Node | null>;
    querySelectorAll(root: Node, selector: string): AwaitableIterable<Node>;
}
/**
 * This class mimics the injected {@link CustomQuerySelectorRegistry}.
 */
declare class CustomQuerySelectorRegistry {
    #private;
    register(name: string, handler: CustomQueryHandler): void;
    unregister(name: string): void;
    get(name: string): CustomQuerySelector | undefined;
    clear(): void;
}
/**
 * @internal
 */
export declare const customQuerySelectors: CustomQuerySelectorRegistry;
export {};
//# sourceMappingURL=CustomQuerySelector.d.ts.map