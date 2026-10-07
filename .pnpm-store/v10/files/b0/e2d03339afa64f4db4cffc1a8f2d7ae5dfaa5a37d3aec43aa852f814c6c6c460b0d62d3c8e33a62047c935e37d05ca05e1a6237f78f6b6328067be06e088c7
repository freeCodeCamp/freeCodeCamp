/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {PuppeteerInjectedUtil} from '../injected/injected.js';
import {assert} from '../util/assert.js';
import {interpolateFunction, stringifyFunction} from '../util/Function.js';

import {
  QueryHandler,
  type QuerySelector,
  type QuerySelectorAll,
} from './QueryHandler.js';
import {scriptInjector} from './ScriptInjector.js';

/**
 * @public
 */
export interface CustomQueryHandler {
  /**
   * Searches for a {@link https://developer.mozilla.org/en-US/docs/Web/API/Node | Node} matching the given `selector` from {@link https://developer.mozilla.org/en-US/docs/Web/API/Node | node}.
   */
  queryOne?: (node: Node, selector: string) => Node | null;
  /**
   * Searches for some {@link https://developer.mozilla.org/en-US/docs/Web/API/Node | Nodes} matching the given `selector` from {@link https://developer.mozilla.org/en-US/docs/Web/API/Node | node}.
   */
  queryAll?: (node: Node, selector: string) => Iterable<Node>;
}

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
  #handlers = new Map<
    string,
    [registerScript: string, Handler: typeof QueryHandler]
  >();

  get(name: string): typeof QueryHandler | undefined {
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
  register(name: string, handler: CustomQueryHandler): void {
    assert(
      !this.#handlers.has(name),
      `Cannot register over existing handler: ${name}`,
    );
    assert(
      /^[a-zA-Z]+$/.test(name),
      `Custom query handler names may only contain [a-zA-Z]`,
    );
    assert(
      handler.queryAll || handler.queryOne,
      `At least one query method must be implemented.`,
    );

    const Handler = class extends QueryHandler {
      static override querySelectorAll: QuerySelectorAll = interpolateFunction(
        (node, selector, PuppeteerUtil) => {
          return PuppeteerUtil.customQuerySelectors
            .get(PLACEHOLDER('name'))!
            .querySelectorAll(node, selector);
        },
        {name: JSON.stringify(name)},
      );
      static override querySelector: QuerySelector = interpolateFunction(
        (node, selector, PuppeteerUtil) => {
          return PuppeteerUtil.customQuerySelectors
            .get(PLACEHOLDER('name'))!
            .querySelector(node, selector);
        },
        {name: JSON.stringify(name)},
      );
    };
    const registerScript = interpolateFunction(
      (PuppeteerUtil: PuppeteerInjectedUtil) => {
        PuppeteerUtil.customQuerySelectors.register(PLACEHOLDER('name'), {
          queryAll: PLACEHOLDER('queryAll'),
          queryOne: PLACEHOLDER('queryOne'),
        });
      },
      {
        name: JSON.stringify(name),
        queryAll: handler.queryAll
          ? stringifyFunction(handler.queryAll)
          : String(undefined),
        queryOne: handler.queryOne
          ? stringifyFunction(handler.queryOne)
          : String(undefined),
      },
    ).toString();

    this.#handlers.set(name, [registerScript, Handler]);
    scriptInjector.append(registerScript);
  }

  /**
   * Unregisters the {@link CustomQueryHandler | custom query handler} for the
   * given name.
   *
   * @throws `Error` if there is no handler under the given name.
   */
  unregister(name: string): void {
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
  names(): string[] {
    return [...this.#handlers.keys()];
  }

  /**
   * Unregisters all custom query handlers.
   */
  clear(): void {
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
