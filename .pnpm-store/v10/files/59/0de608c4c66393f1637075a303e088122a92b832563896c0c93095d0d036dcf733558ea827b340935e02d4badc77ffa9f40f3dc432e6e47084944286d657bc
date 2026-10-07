/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { assert } from '../util/assert.js';
import { interpolateFunction, stringifyFunction } from '../util/Function.js';
import { QueryHandler, } from './QueryHandler.js';
import { scriptInjector } from './ScriptInjector.js';
/**
 * The registry of {@link CustomQueryHandler | custom query handlers}.
 *
 * @example
 *
 * ```ts
 * Puppeteer.customQueryHandlers.register('lit', { … });
 * const aHandle = await page.$('lit/…');
 * ```
 *
 * @internal
 */
export class CustomQueryHandlerRegistry {
    #handlers = new Map();
    get(name) {
        const handler = this.#handlers.get(name);
        return handler ? handler[1] : undefined;
    }
    /**
     * Registers a {@link CustomQueryHandler | custom query handler}.
     *
     * @remarks
     * After registration, the handler can be used everywhere where a selector is
     * expected by prepending the selection string with `<name>/`. The name is
     * only allowed to consist of lower- and upper case latin letters.
     *
     * @example
     *
     * ```ts
     * Puppeteer.customQueryHandlers.register('lit', { … });
     * const aHandle = await page.$('lit/…');
     * ```
     *
     * @param name - Name to register under.
     * @param queryHandler - {@link CustomQueryHandler | Custom query handler} to
     * register.
     */
    register(name, handler) {
        assert(!this.#handlers.has(name), `Cannot register over existing handler: ${name}`);
        assert(/^[a-zA-Z]+$/.test(name), `Custom query handler names may only contain [a-zA-Z]`);
        assert(handler.queryAll || handler.queryOne, `At least one query method must be implemented.`);
        const Handler = class extends QueryHandler {
            static querySelectorAll = interpolateFunction((node, selector, PuppeteerUtil) => {
                return PuppeteerUtil.customQuerySelectors
                    .get(PLACEHOLDER('name'))
                    .querySelectorAll(node, selector);
            }, { name: JSON.stringify(name) });
            static querySelector = interpolateFunction((node, selector, PuppeteerUtil) => {
                return PuppeteerUtil.customQuerySelectors
                    .get(PLACEHOLDER('name'))
                    .querySelector(node, selector);
            }, { name: JSON.stringify(name) });
        };
        const registerScript = interpolateFunction((PuppeteerUtil) => {
            PuppeteerUtil.customQuerySelectors.register(PLACEHOLDER('name'), {
                queryAll: PLACEHOLDER('queryAll'),
                queryOne: PLACEHOLDER('queryOne'),
            });
        }, {
            name: JSON.stringify(name),
            queryAll: handler.queryAll
                ? stringifyFunction(handler.queryAll)
                : String(undefined),
            queryOne: handler.queryOne
                ? stringifyFunction(handler.queryOne)
                : String(undefined),
        }).toString();
        this.#handlers.set(name, [registerScript, Handler]);
        scriptInjector.append(registerScript);
    }
    /**
     * Unregisters the {@link CustomQueryHandler | custom query handler} for the
     * given name.
     *
     * @throws `Error` if there is no handler under the given name.
     */
    unregister(name) {
        const handler = this.#handlers.get(name);
        if (!handler) {
            throw new Error(`Cannot unregister unknown handler: ${name}`);
        }
        scriptInjector.pop(handler[0]);
        this.#handlers.delete(name);
    }
    /**
     * Gets the names of all {@link CustomQueryHandler | custom query handlers}.
     */
    names() {
        return [...this.#handlers.keys()];
    }
    /**
     * Unregisters all custom query handlers.
     */
    clear() {
        for (const [registerScript] of this.#handlers) {
            scriptInjector.pop(registerScript);
        }
        this.#handlers.clear();
    }
}
/**
 * @internal
 */
export const customQueryHandlers = new CustomQueryHandlerRegistry();
//# sourceMappingURL=CustomQueryHandler.js.map