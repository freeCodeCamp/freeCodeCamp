/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { _connectToBrowser } from './BrowserConnector.js';
import { customQueryHandlers, } from './CustomQueryHandler.js';
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
export class Puppeteer {
    /**
     * Operations for {@link CustomQueryHandler | custom query handlers}. See
     * {@link CustomQueryHandlerRegistry}.
     *
     * @internal
     */
    static customQueryHandlers = customQueryHandlers;
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
    static registerCustomQueryHandler(name, queryHandler) {
        return this.customQueryHandlers.register(name, queryHandler);
    }
    /**
     * Unregisters a custom query handler for a given name.
     */
    static unregisterCustomQueryHandler(name) {
        return this.customQueryHandlers.unregister(name);
    }
    /**
     * Gets the names of all custom query handlers.
     */
    static customQueryHandlerNames() {
        return this.customQueryHandlers.names();
    }
    /**
     * Unregisters all custom query handlers.
     */
    static clearCustomQueryHandlers() {
        return this.customQueryHandlers.clear();
    }
    /**
     * @internal
     */
    _isPuppeteerCore;
    /**
     * @internal
     */
    _changedBrowsers = false;
    /**
     * @internal
     */
    constructor(settings) {
        this._isPuppeteerCore = settings.isPuppeteerCore;
        this.connect = this.connect.bind(this);
    }
    /**
     * This method attaches Puppeteer to an existing browser instance.
     *
     * @remarks
     *
     * @param options - Set of configurable options to set on the browser.
     * @returns Promise which resolves to browser instance.
     */
    connect(options) {
        return _connectToBrowser(options);
    }
}
//# sourceMappingURL=Puppeteer.js.map