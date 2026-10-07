/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Browser } from '../api/Browser.js';
import type { ConnectOptions } from './ConnectOptions.js';
import { type CustomQueryHandler } from './CustomQueryHandler.js';
/**
 * Settings that are common to the Puppeteer class, regardless of environment.
 *
 * @internal
 */
export interface CommonPuppeteerSettings {
    isPuppeteerCore: boolean;
}
/**
 * The main Puppeteer class.
 *
 * IMPORTANT: if you are using Puppeteer in a Node environment, you will get an
 * instance of {@link PuppeteerNode} when you import or require `puppeteer`.
 * That class extends `Puppeteer`, so has all the methods documented below as
 * well as all that are defined on {@link PuppeteerNode}.
 *
 * @public
 */
export declare class Puppeteer {
    /**
     * Operations for {@link CustomQueryHandler | custom query handlers}. See
     * {@link CustomQueryHandlerRegistry}.
     *
     * @internal
     */
    static customQueryHandlers: import("./CustomQueryHandler.js").CustomQueryHandlerRegistry;
    /**
     * Registers a {@link CustomQueryHandler | custom query handler}.
     *
     * @remarks
     * After registration, the handler can be used everywhere where a selector is
     * expected by prepending the selection string with `<name>/`. The name is only
     * allowed to consist of lower- and upper case latin letters.
     *
     * @example
     *
     * ```
     * import {Puppeteer}, puppeteer from 'puppeteer';
     *
     * Puppeteer.registerCustomQueryHandler('text', { … });
     * const aHandle = await page.$('text/…');
     * ```
     *
     * @param name - The name that the custom query handler will be registered
     * under.
     * @param queryHandler - The {@link CustomQueryHandler | custom query handler}
     * to register.
     *
     * @public
     */
    static registerCustomQueryHandler(name: string, queryHandler: CustomQueryHandler): void;
    /**
     * Unregisters a custom query handler for a given name.
     */
    static unregisterCustomQueryHandler(name: string): void;
    /**
     * Gets the names of all custom query handlers.
     */
    static customQueryHandlerNames(): string[];
    /**
     * Unregisters all custom query handlers.
     */
    static clearCustomQueryHandlers(): void;
    /**
     * @internal
     */
    _isPuppeteerCore: boolean;
    /**
     * @internal
     */
    protected _changedBrowsers: boolean;
    /**
     * @internal
     */
    constructor(settings: CommonPuppeteerSettings);
    /**
     * This method attaches Puppeteer to an existing browser instance.
     *
     * @remarks
     *
     * @param options - Set of configurable options to set on the browser.
     * @returns Promise which resolves to browser instance.
     */
    connect(options: ConnectOptions): Promise<Browser>;
}
//# sourceMappingURL=Puppeteer.d.ts.map