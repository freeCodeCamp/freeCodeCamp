/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * This class mimics the injected {@link CustomQuerySelectorRegistry}.
 */
class CustomQuerySelectorRegistry {
    #selectors = new Map();
    register(name, handler) {
        if (!handler.queryOne && handler.queryAll) {
            const querySelectorAll = handler.queryAll;
            handler.queryOne = (node, selector) => {
                for (const result of querySelectorAll(node, selector)) {
                    return result;
                }
                return null;
            };
        }
        else if (handler.queryOne && !handler.queryAll) {
            const querySelector = handler.queryOne;
            handler.queryAll = (node, selector) => {
                const result = querySelector(node, selector);
                return result ? [result] : [];
            };
        }
        else if (!handler.queryOne || !handler.queryAll) {
            throw new Error('At least one query method must be defined.');
        }
        this.#selectors.set(name, {
            querySelector: handler.queryOne,
            querySelectorAll: handler.queryAll,
        });
    }
    unregister(name) {
        this.#selectors.delete(name);
    }
    get(name) {
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
//# sourceMappingURL=CustomQuerySelector.js.map