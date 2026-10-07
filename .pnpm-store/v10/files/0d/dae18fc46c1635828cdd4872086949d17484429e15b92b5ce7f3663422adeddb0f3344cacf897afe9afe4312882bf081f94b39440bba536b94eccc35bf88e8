/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { QueryHandler } from './QueryHandler.js';
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
export declare class CustomQueryHandlerRegistry {
    #private;
    get(name: string): typeof QueryHandler | undefined;
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
    register(name: string, handler: CustomQueryHandler): void;
    /**
     * Unregisters the {@link CustomQueryHandler | custom query handler} for the
     * given name.
     *
     * @throws `Error` if there is no handler under the given name.
     */
    unregister(name: string): void;
    /**
     * Gets the names of all {@link CustomQueryHandler | custom query handlers}.
     */
    names(): string[];
    /**
     * Unregisters all custom query handlers.
     */
    clear(): void;
}
/**
 * @internal
 */
export declare const customQueryHandlers: CustomQueryHandlerRegistry;
//# sourceMappingURL=CustomQueryHandler.d.ts.map