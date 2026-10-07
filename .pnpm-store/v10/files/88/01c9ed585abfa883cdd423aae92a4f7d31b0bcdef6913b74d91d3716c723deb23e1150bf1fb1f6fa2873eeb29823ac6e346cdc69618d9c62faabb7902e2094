import { firstValueFrom, from, merge, raceWith, } from '../../third_party/rxjs/rxjs.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { debugError, fromEmitterEvent, filterAsync, timeout, fromAbortSignal, } from '../common/util.js';
import { asyncDisposeSymbol, disposeSymbol } from '../util/disposable.js';
/**
 * @internal
 */
export const WEB_PERMISSION_TO_PROTOCOL_PERMISSION = new Map([
    ['accelerometer', 'sensors'],
    ['ambient-light-sensor', 'sensors'],
    ['background-sync', 'backgroundSync'],
    ['camera', 'videoCapture'],
    ['clipboard-read', 'clipboardReadWrite'],
    ['clipboard-sanitized-write', 'clipboardSanitizedWrite'],
    ['clipboard-write', 'clipboardReadWrite'],
    ['geolocation', 'geolocation'],
    ['gyroscope', 'sensors'],
    ['idle-detection', 'idleDetection'],
    ['keyboard-lock', 'keyboardLock'],
    ['magnetometer', 'sensors'],
    ['microphone', 'audioCapture'],
    ['midi', 'midi'],
    ['notifications', 'notifications'],
    ['payment-handler', 'paymentHandler'],
    ['persistent-storage', 'durableStorage'],
    ['pointer-lock', 'pointerLock'],
    // chrome-specific permissions we have.
    ['midi-sysex', 'midiSysex'],
]);
/**
 * {@link Browser} represents a browser instance that is either:
 *
 * - connected to via {@link Puppeteer.connect} or
 * - launched by {@link PuppeteerNode.launch}.
 *
 * {@link Browser} {@link EventEmitter.emit | emits} various events which are
 * documented in the {@link BrowserEvent} enum.
 *
 * @example Using a {@link Browser} to create a {@link Page}:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.goto('https://example.com');
 * await browser.close();
 * ```
 *
 * @example Disconnecting from and reconnecting to a {@link Browser}:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * // Store the endpoint to be able to reconnect to the browser.
 * const browserWSEndpoint = browser.wsEndpoint();
 * // Disconnect puppeteer from the browser.
 * await browser.disconnect();
 *
 * // Use the endpoint to reestablish a connection
 * const browser2 = await puppeteer.connect({browserWSEndpoint});
 * // Close the browser.
 * await browser2.close();
 * ```
 *
 * @public
 */
export class Browser extends EventEmitter {
    /**
     * @internal
     */
    constructor() {
        super();
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
     * const newWindowTarget = await browser.waitForTarget(
     *   target => target.url() === 'https://www.example.com/',
     * );
     * ```
     */
    async waitForTarget(predicate, options = {}) {
        const { timeout: ms = 30000, signal } = options;
        return await firstValueFrom(merge(fromEmitterEvent(this, "targetcreated" /* BrowserEvent.TargetCreated */), fromEmitterEvent(this, "targetchanged" /* BrowserEvent.TargetChanged */), from(this.targets())).pipe(filterAsync(predicate), raceWith(fromAbortSignal(signal), timeout(ms))));
    }
    /**
     * Gets a list of all open {@link Page | pages} inside this {@link Browser}.
     *
     * If there are multiple {@link BrowserContext | browser contexts}, this
     * returns all {@link Page | pages} in all
     * {@link BrowserContext | browser contexts}.
     *
     * @param includeAll - experimental, setting to true includes all kinds of pages.
     *
     * @remarks Non-visible {@link Page | pages}, such as `"background_page"`,
     * will not be listed here. You can find them using {@link Target.page}.
     */
    async pages(includeAll = false) {
        const contextPages = await Promise.all(this.browserContexts().map(context => {
            return context.pages(includeAll);
        }));
        // Flatten array.
        return contextPages.reduce((acc, x) => {
            return acc.concat(x);
        }, []);
    }
    /**
     * Returns all cookies in the default {@link BrowserContext}.
     *
     * @remarks
     *
     * Shortcut for
     * {@link BrowserContext.cookies | browser.defaultBrowserContext().cookies()}.
     */
    async cookies() {
        return await this.defaultBrowserContext().cookies();
    }
    /**
     * Sets cookies in the default {@link BrowserContext}.
     *
     * @remarks
     *
     * Shortcut for
     * {@link BrowserContext.setCookie | browser.defaultBrowserContext().setCookie()}.
     */
    async setCookie(...cookies) {
        return await this.defaultBrowserContext().setCookie(...cookies);
    }
    /**
     * Removes cookies from the default {@link BrowserContext}.
     *
     * @remarks
     *
     * Shortcut for
     * {@link BrowserContext.deleteCookie | browser.defaultBrowserContext().deleteCookie()}.
     */
    async deleteCookie(...cookies) {
        return await this.defaultBrowserContext().deleteCookie(...cookies);
    }
    /**
     * Deletes cookies matching the provided filters from the default
     * {@link BrowserContext}.
     *
     * @remarks
     *
     * Shortcut for
     * {@link BrowserContext.deleteMatchingCookies |
     * browser.defaultBrowserContext().deleteMatchingCookies()}.
     */
    async deleteMatchingCookies(...filters) {
        return await this.defaultBrowserContext().deleteMatchingCookies(...filters);
    }
    /**
     * Sets the permission for a specific origin in the default
     * {@link BrowserContext}.
     *
     * @remarks
     *
     * Shortcut for
     * {@link BrowserContext.setPermission |
     * browser.defaultBrowserContext().setPermission()}.
     *
     * @param origin - The origin to set the permission for.
     * @param permission - The permission descriptor.
     * @param state - The state of the permission.
     *
     * @public
     */
    async setPermission(origin, ...permissions) {
        return await this.defaultBrowserContext().setPermission(origin, ...permissions);
    }
    /** @internal */
    [disposeSymbol]() {
        return void this[asyncDisposeSymbol]().catch(debugError);
    }
    /** @internal */
    async [asyncDisposeSymbol]() {
        if (this.process()) {
            await this.close();
        }
        else {
            await this.disconnect();
        }
        await super[asyncDisposeSymbol]();
    }
}
//# sourceMappingURL=Browser.js.map