/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { firstValueFrom, from, merge, raceWith, } from '../../third_party/rxjs/rxjs.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { debugError, fromEmitterEvent, filterAsync, timeout, } from '../common/util.js';
import { asyncDisposeSymbol, disposeSymbol } from '../util/disposable.js';
import { Mutex } from '../util/Mutex.js';
/**
 * {@link BrowserContext} represents individual user contexts within a
 * {@link Browser | browser}.
 *
 * When a {@link Browser | browser} is launched, it has at least one default
 * {@link BrowserContext | browser context}. Others can be created
 * using {@link Browser.createBrowserContext}. Each context has isolated storage
 * (cookies/localStorage/etc.)
 *
 * {@link BrowserContext} {@link EventEmitter | emits} various events which are
 * documented in the {@link BrowserContextEvent} enum.
 *
 * If a {@link Page | page} opens another {@link Page | page}, e.g. using
 * `window.open`, the popup will belong to the parent {@link Page.browserContext
 * | page's browser context}.
 *
 * @example Creating a new {@link BrowserContext | browser context}:
 *
 * ```ts
 * // Create a new browser context
 * const context = await browser.createBrowserContext();
 * // Create a new page inside context.
 * const page = await context.newPage();
 * // ... do stuff with page ...
 * await page.goto('https://example.com');
 * // Dispose context once it's no longer needed.
 * await context.close();
 * ```
 *
 * @remarks
 *
 * In Chrome all non-default contexts are incognito,
 * and {@link Browser.defaultBrowserContext | default browser context}
 * might be incognito if you provide the `--incognito` argument when launching
 * the browser.
 *
 * @public
 */
export class BrowserContext extends EventEmitter {
    /**
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * If defined, indicates an ongoing screenshot opereation.
     */
    #pageScreenshotMutex;
    #screenshotOperationsCount = 0;
    /**
     * @internal
     */
    startScreenshot() {
        const mutex = this.#pageScreenshotMutex || new Mutex();
        this.#pageScreenshotMutex = mutex;
        this.#screenshotOperationsCount++;
        return mutex.acquire(() => {
            this.#screenshotOperationsCount--;
            if (this.#screenshotOperationsCount === 0) {
                // Remove the mutex to indicate no ongoing screenshot operation.
                this.#pageScreenshotMutex = undefined;
            }
        });
    }
    /**
     * @internal
     */
    waitForScreenshotOperations() {
        return this.#pageScreenshotMutex?.acquire();
    }
    /**
     * Waits until a {@link Target | target} matching the given `predicate`
     * appears and returns it.
     *
     * This will look all open {@link BrowserContext | browser contexts}.
     *
     * @example Finding a target for a page opened via `window.open`:
     *
     * ```ts
     * await page.evaluate(() => window.open('https://www.example.com/'));
     * const newWindowTarget = await browserContext.waitForTarget(
     *   target => target.url() === 'https://www.example.com/',
     * );
     * ```
     */
    async waitForTarget(predicate, options = {}) {
        const { timeout: ms = 30000 } = options;
        return await firstValueFrom(merge(fromEmitterEvent(this, "targetcreated" /* BrowserContextEvent.TargetCreated */), fromEmitterEvent(this, "targetchanged" /* BrowserContextEvent.TargetChanged */), from(this.targets())).pipe(filterAsync(predicate), raceWith(timeout(ms))));
    }
    /**
     * Removes cookie in this browser context.
     *
     * @param cookies - Complete {@link Cookie | cookie} object to be removed.
     */
    async deleteCookie(...cookies) {
        return await this.setCookie(...cookies.map(cookie => {
            return {
                ...cookie,
                expires: 1,
            };
        }));
    }
    /**
     * Deletes cookies matching the provided filters in this browser context.
     *
     * @param filters - {@link DeleteCookiesRequest}
     */
    async deleteMatchingCookies(...filters) {
        const cookies = await this.cookies();
        const cookiesToDelete = cookies.filter(cookie => {
            return filters.some(filter => {
                if (filter.name === cookie.name) {
                    if (filter.domain !== undefined && filter.domain === cookie.domain) {
                        return true;
                    }
                    if (filter.path !== undefined && filter.path === cookie.path) {
                        return true;
                    }
                    if (filter.partitionKey !== undefined &&
                        cookie.partitionKey !== undefined) {
                        if (typeof cookie.partitionKey !== 'object') {
                            throw new Error('Unexpected string partition key');
                        }
                        if (typeof filter.partitionKey === 'string') {
                            if (filter.partitionKey === cookie.partitionKey?.sourceOrigin) {
                                return true;
                            }
                        }
                        else {
                            if (filter.partitionKey.sourceOrigin ===
                                cookie.partitionKey?.sourceOrigin) {
                                return true;
                            }
                        }
                    }
                    if (filter.url !== undefined) {
                        const url = new URL(filter.url);
                        if (url.hostname === cookie.domain &&
                            url.pathname === cookie.path) {
                            return true;
                        }
                    }
                    return true;
                }
                return false;
            });
        });
        await this.deleteCookie(...cookiesToDelete);
    }
    /**
     * Whether this {@link BrowserContext | browser context} is closed.
     */
    get closed() {
        return !this.browser().browserContexts().includes(this);
    }
    /**
     * Identifier for this {@link BrowserContext | browser context}.
     */
    get id() {
        return undefined;
    }
    /** @internal */
    [disposeSymbol]() {
        return void this[asyncDisposeSymbol]().catch(debugError);
    }
    /** @internal */
    async [asyncDisposeSymbol]() {
        await this.close();
        await super[asyncDisposeSymbol]();
    }
}
//# sourceMappingURL=BrowserContext.js.map