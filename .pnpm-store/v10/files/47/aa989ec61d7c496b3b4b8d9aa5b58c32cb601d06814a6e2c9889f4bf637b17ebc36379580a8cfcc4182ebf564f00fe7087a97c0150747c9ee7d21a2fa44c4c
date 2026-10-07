/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Cookie, CookieData, DeleteCookiesRequest } from '../common/Cookie.js';
import { EventEmitter, type EventType } from '../common/EventEmitter.js';
import { asyncDisposeSymbol, disposeSymbol } from '../util/disposable.js';
import { Mutex } from '../util/Mutex.js';
import type { Browser, CreatePageOptions, Permission, PermissionDescriptor, PermissionState, WaitForTargetOptions } from './Browser.js';
import type { Page } from './Page.js';
import type { Target } from './Target.js';
/**
 * @public
 */
export declare const enum BrowserContextEvent {
    /**
     * Emitted when the url of a target inside the browser context changes.
     * Contains a {@link Target} instance.
     */
    TargetChanged = "targetchanged",
    /**
     * Emitted when a target is created within the browser context, for example
     * when a new page is opened by
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/open | window.open}
     * or by {@link BrowserContext.newPage | browserContext.newPage}
     *
     * Contains a {@link Target} instance.
     */
    TargetCreated = "targetcreated",
    /**
     * Emitted when a target is destroyed within the browser context, for example
     * when a page is closed. Contains a {@link Target} instance.
     */
    TargetDestroyed = "targetdestroyed"
}
/**
 * @public
 */
export interface BrowserContextEvents extends Record<EventType, unknown> {
    [BrowserContextEvent.TargetChanged]: Target;
    [BrowserContextEvent.TargetCreated]: Target;
    [BrowserContextEvent.TargetDestroyed]: Target;
}
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
export declare abstract class BrowserContext extends EventEmitter<BrowserContextEvents> {
    #private;
    /**
     * @internal
     */
    constructor();
    /**
     * Gets all active {@link Target | targets} inside this
     * {@link BrowserContext | browser context}.
     */
    abstract targets(): Target[];
    /**
     * @internal
     */
    startScreenshot(): Promise<InstanceType<typeof Mutex.Guard>>;
    /**
     * @internal
     */
    waitForScreenshotOperations(): Promise<InstanceType<typeof Mutex.Guard>> | undefined;
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
    waitForTarget(predicate: (x: Target) => boolean | Promise<boolean>, options?: WaitForTargetOptions): Promise<Target>;
    /**
     * Gets a list of all open {@link Page | pages} inside this
     * {@link BrowserContext | browser context}.
     *
     * @param includeAll - experimental, setting to true includes all kinds of pages.
     *
     * @remarks Non-visible {@link Page | pages}, such as `"background_page"`,
     * will not be listed here. You can find them using {@link Target.page}.
     */
    abstract pages(includeAll?: boolean): Promise<Page[]>;
    /**
     * Grants this {@link BrowserContext | browser context} the given
     * `permissions` within the given `origin`.
     *
     * @example Overriding permissions in the
     * {@link Browser.defaultBrowserContext | default browser context}:
     *
     * ```ts
     * const context = browser.defaultBrowserContext();
     * await context.overridePermissions('https://html5demos.com', [
     *   'geolocation',
     * ]);
     * ```
     *
     * @param origin - The origin to grant permissions to, e.g.
     * "https://example.com".
     * @param permissions - An array of permissions to grant. All permissions that
     * are not listed here will be automatically denied.
     *
     * @deprecated in favor of {@link BrowserContext.setPermission}.
     */
    abstract overridePermissions(origin: string, permissions: Permission[]): Promise<void>;
    /**
     * Sets the permission for a specific origin.
     *
     * @param origin - The origin to set the permission for.
     * @param permission - The permission descriptor.
     * @param state - The state of the permission.
     *
     * @public
     */
    abstract setPermission(origin: string | '*', ...permissions: Array<{
        permission: PermissionDescriptor;
        state: PermissionState;
    }>): Promise<void>;
    /**
     * Clears all permission overrides for this
     * {@link BrowserContext | browser context}.
     *
     * @example Clearing overridden permissions in the
     * {@link Browser.defaultBrowserContext | default browser context}:
     *
     * ```ts
     * const context = browser.defaultBrowserContext();
     * context.overridePermissions('https://example.com', ['clipboard-read']);
     * // do stuff ..
     * context.clearPermissionOverrides();
     * ```
     */
    abstract clearPermissionOverrides(): Promise<void>;
    /**
     * Creates a new {@link Page | page} in this
     * {@link BrowserContext | browser context}.
     */
    abstract newPage(options?: CreatePageOptions): Promise<Page>;
    /**
     * Gets the {@link Browser | browser} associated with this
     * {@link BrowserContext | browser context}.
     */
    abstract browser(): Browser;
    /**
     * Closes this {@link BrowserContext | browser context} and all associated
     * {@link Page | pages}.
     *
     * @remarks The
     * {@link Browser.defaultBrowserContext | default browser context} cannot be
     * closed.
     */
    abstract close(): Promise<void>;
    /**
     * Gets all cookies in the browser context.
     */
    abstract cookies(): Promise<Cookie[]>;
    /**
     * Sets a cookie in the browser context.
     */
    abstract setCookie(...cookies: CookieData[]): Promise<void>;
    /**
     * Removes cookie in this browser context.
     *
     * @param cookies - Complete {@link Cookie | cookie} object to be removed.
     */
    deleteCookie(...cookies: Cookie[]): Promise<void>;
    /**
     * Deletes cookies matching the provided filters in this browser context.
     *
     * @param filters - {@link DeleteCookiesRequest}
     */
    deleteMatchingCookies(...filters: DeleteCookiesRequest[]): Promise<void>;
    /**
     * Whether this {@link BrowserContext | browser context} is closed.
     */
    get closed(): boolean;
    /**
     * Identifier for this {@link BrowserContext | browser context}.
     */
    get id(): string | undefined;
    /** @internal */
    [disposeSymbol](): void;
    /** @internal */
    [asyncDisposeSymbol](): Promise<void>;
}
//# sourceMappingURL=BrowserContext.d.ts.map