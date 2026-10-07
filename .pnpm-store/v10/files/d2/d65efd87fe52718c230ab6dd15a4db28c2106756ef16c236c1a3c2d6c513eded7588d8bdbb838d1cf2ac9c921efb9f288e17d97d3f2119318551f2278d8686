/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {CustomQueryHandler} from '../common/CustomQueryHandler.js';
import type {Awaitable, AwaitableIterable} from '../common/types.js';

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
class CustomQuerySelectorRegistry {
  #selectors = new Map<string, CustomQuerySelector>();

  register(name: string, handler: CustomQueryHandler): void {
    if (!handler.queryOne && handler.queryAll) {
      const querySelectorAll = handler.queryAll;
      handler.queryOne = (node, selector) => {
        for (const result of querySelectorAll(node, selector)) {
          return result;
        }
        return null;
      };
    } else if (handler.queryOne && !handler.queryAll) {
      const querySelector = handler.queryOne;
      handler.queryAll = (node, selector) => {
        const result = querySelector(node, selector);
        return result ? [result] : [];
      };
    } else if (!handler.queryOne || !handler.queryAll) {
      throw new Error('At least one query method must be defined.');
    }

    this.#selectors.set(name, {
      querySelector: handler.queryOne,
      querySelectorAll: handler.queryAll!,
    });
  }

  unregister(name: string): void {
    this.#selectors.delete(name);
  }

  get(name: string): CustomQuerySelector | undefined {
    return this.#selectors.get(name);
  }

  clear() {
    this.#selectors.clear();
  }
}

/**
 * @internal
 */
export const customQuerySelectors = new CustomQuerySelectorRegistry();
