/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/// <reference types="node" />

import type {ChildProcess} from 'node:child_process';
import {PassThrough} from 'node:stream';

import {Protocol} from 'devtools-protocol';
import type {ProtocolMapping} from 'devtools-protocol/types/protocol-mapping.js';
import type {ParseSelector} from 'typed-query-selector/parser.js';
import {Session} from 'webdriver-bidi-protocol';

/**
 * The Accessibility class provides methods for inspecting the browser's
 * accessibility tree. The accessibility tree is used by assistive technology
 * such as {@link https://en.wikipedia.org/wiki/Screen_reader | screen readers} or
 * {@link https://en.wikipedia.org/wiki/Switch_access | switches}.
 *
 * @remarks
 *
 * Accessibility is a very platform-specific thing. On different platforms,
 * there are different screen readers that might have wildly different output.
 *
 * Blink - Chrome's rendering engine - has a concept of "accessibility tree",
 * which is then translated into different platform-specific APIs. Accessibility
 * namespace gives users access to the Blink Accessibility Tree.
 *
 * Most of the accessibility tree gets filtered out when converting from Blink
 * AX Tree to Platform-specific AX-Tree or by assistive technologies themselves.
 * By default, Puppeteer tries to approximate this filtering, exposing only
 * the "interesting" nodes of the tree.
 *
 * @public
 */
export declare class Accessibility {
  #private;
  /**
   * Captures the current state of the accessibility tree.
   * The returned object represents the root accessible node of the page.
   *
   * @remarks
   *
   * **NOTE** The Chrome accessibility tree contains nodes that go unused on
   * most platforms and by most screen readers. Puppeteer will discard them as
   * well for an easier to process tree, unless `interestingOnly` is set to
   * `false`.
   *
   * @example
   * An example of dumping the entire accessibility tree:
   *
   * ```ts
   * const snapshot = await page.accessibility.snapshot();
   * console.log(snapshot);
   * ```
   *
   * @example
   * An example of logging the focused node's name:
   *
   * ```ts
   * const snapshot = await page.accessibility.snapshot();
   * const node = findFocusedNode(snapshot);
   * console.log(node && node.name);
   *
   * function findFocusedNode(node) {
   *   if (node.focused) return node;
   *   for (const child of node.children || []) {
   *     const foundNode = findFocusedNode(child);
   *     return foundNode;
   *   }
   *   return null;
   * }
   * ```
   *
   * @returns An AXNode object representing the snapshot.
   */
  snapshot(options?: SnapshotOptions): Promise<SerializedAXNode | null>;
  private serializeTree;
  private collectInterestingNodes;
}

/**
 * @public
 */
export declare interface ActionOptions {
  /**
   * A signal to abort the locator action.
   */
  signal?: AbortSignal;
}

/**
 * @public
 */
export declare type ActionResult = 'continue' | 'abort' | 'respond';

/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @public
 * Emulated bluetooth adapter state.
 */
export declare type AdapterState = 'absent' | 'powered-off' | 'powered-on';

/**
 * @public
 */
export declare interface AddScreenParams {
  left: number;
  top: number;
  width: number;
  height: number;
  workAreaInsets?: WorkAreaInsets;
  devicePixelRatio?: number;
  rotation?: number;
  colorDepth?: number;
  label?: string;
  isInternal?: boolean;
}

/**
 * Supported autofill address field names.
 *
 * @public
 */
export declare const enum AutofillAddressField {
  NameFirst = 'NAME_FIRST',
  NameMiddle = 'NAME_MIDDLE',
  NameLast = 'NAME_LAST',
  NameFull = 'NAME_FULL',
  EmailAddress = 'EMAIL_ADDRESS',
  PhoneHomeNumber = 'PHONE_HOME_NUMBER',
  PhoneHomeCityAndNumber = 'PHONE_HOME_CITY_AND_NUMBER',
  PhoneHomeWholeNumber = 'PHONE_HOME_WHOLE_NUMBER',
  AddressHomeLine1 = 'ADDRESS_HOME_LINE1',
  AddressHomeLine2 = 'ADDRESS_HOME_LINE2',
  AddressHomeStreetAddress = 'ADDRESS_HOME_STREET_ADDRESS',
  AddressHomeCity = 'ADDRESS_HOME_CITY',
  AddressHomeState = 'ADDRESS_HOME_STATE',
  AddressHomeZip = 'ADDRESS_HOME_ZIP',
  AddressHomeCountry = 'ADDRESS_HOME_COUNTRY',
}

/**
 * @public
 */
export declare type AutofillData =
  | {
      /**
       * See {@link https://chromedevtools.github.io/devtools-protocol/tot/Autofill/#type-CreditCard | Autofill.CreditCard}.
       */
      creditCard: {
        number: string;
        name: string;
        expiryMonth: string;
        expiryYear: string;
        cvc: string;
      };
      address?: never;
    }
  | {
      /**
       * See {@link https://chromedevtools.github.io/devtools-protocol/tot/Autofill/#type-Address | Autofill.Address}.
       */
      address: {
        fields: Array<{
          /**
           * The field type.
           * See {@link https://source.chromium.org/chromium/chromium/src/+/main:components/autofill/core/browser/field_types.cc}
           * for the full list of supported fields.
           */
          name: AutofillAddressField | (string & Record<never, never>);
          value: string;
        }>;
      };
      creditCard?: never;
    };

/**
 * @public
 */
export declare type Awaitable<T> = T | PromiseLike<T>;

/**
 * @public
 */
export declare type AwaitableIterable<T> = Iterable<T> | AsyncIterable<T>;

/**
 * @public
 */
export declare type AwaitablePredicate<T> = (value: T) => Awaitable<boolean>;

/**
 * @public
 */
export declare type AwaitedLocator<T> = T extends Locator<infer S> ? S : never;

/**
 * Exposes the bluetooth emulation abilities.
 *
 * @remarks {@link https://webbluetoothcg.github.io/web-bluetooth/#simulated-bluetooth-adapter|Web Bluetooth specification}
 * requires the emulated adapters should be isolated per top-level navigable. However,
 * at the moment Chromium's bluetooth emulation implementation is tight to the browser
 * context, not the page. This means the bluetooth emulation exposed from different pages
 * of the same browser context would interfere their states.
 *
 * @example
 *
 * ```ts
 * await page.bluetooth.emulateAdapter('powered-on');
 * await page.bluetooth.simulatePreconnectedPeripheral({
 *   address: '09:09:09:09:09:09',
 *   name: 'SOME_NAME',
 *   manufacturerData: [
 *     {
 *       key: 17,
 *       data: 'AP8BAX8=',
 *     },
 *   ],
 *   knownServiceUuids: ['12345678-1234-5678-9abc-def123456789'],
 * });
 * await page.bluetooth.disableEmulation();
 * ```
 *
 * @experimental
 * @public
 */
export declare interface BluetoothEmulation {
  /**
   * Emulate Bluetooth adapter. Required for bluetooth simulations
   * See {@link https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-simulateAdapter-command|bluetooth.simulateAdapter}.
   *
   * @param state - The desired bluetooth adapter state.
   * @param leSupported - Mark if the adapter supports low-energy bluetooth.
   *
   * @experimental
   * @public
   */
  emulateAdapter(state: AdapterState, leSupported?: boolean): Promise<void>;
  /**
   * Disable emulated bluetooth adapter.
   * See {@link https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-disableSimulation-command|bluetooth.disableSimulation}.
   *
   * @experimental
   * @public
   */
  disableEmulation(): Promise<void>;
  /**
   * Simulated preconnected Bluetooth Peripheral.
   * See {@link https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-simulateconnectedperipheral-command|bluetooth.simulatePreconnectedPeripheral}.
   *
   * @param preconnectedPeripheral - The peripheral to simulate.
   *
   * @experimental
   * @public
   */
  simulatePreconnectedPeripheral(
    preconnectedPeripheral: PreconnectedPeripheral,
  ): Promise<void>;
}

/**
 * @public
 * Represents the simulated bluetooth peripheral's manufacturer data.
 */
export declare interface BluetoothManufacturerData {
  /**
   * The company identifier, as defined by the {@link https://www.bluetooth.com/specifications/assigned-numbers/company-identifiers/|Bluetooth SIG}.
   */
  key: number;
  /**
   * The manufacturer-specific data as a base64-encoded string.
   */
  data: string;
}

/**
 * @public
 */
export declare interface BoundingBox extends Point {
  /**
   * the width of the element in pixels.
   */
  width: number;
  /**
   * the height of the element in pixels.
   */
  height: number;
}

/**
 * @public
 */
export declare interface BoxModel {
  content: Quad;
  padding: Quad;
  border: Quad;
  margin: Quad;
  width: number;
  height: number;
}

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
export declare abstract class Browser extends EventEmitter<BrowserEvents> {
  /**
   * Gets the associated
   * {@link https://nodejs.org/api/child_process.html#class-childprocess | ChildProcess}.
   *
   * @returns `null` if this instance was connected to via
   * {@link Puppeteer.connect}.
   */
  abstract process(): ChildProcess | null;
  /**
   * Creates a new {@link BrowserContext | browser context}.
   *
   * This won't share cookies/cache with other {@link BrowserContext | browser contexts}.
   *
   * @example
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * // Create a new browser context.
   * const context = await browser.createBrowserContext();
   * // Create a new page in a pristine context.
   * const page = await context.newPage();
   * // Do stuff
   * await page.goto('https://example.com');
   * ```
   */
  abstract createBrowserContext(
    options?: BrowserContextOptions,
  ): Promise<BrowserContext>;
  /**
   * Gets a list of open {@link BrowserContext | browser contexts}.
   *
   * In a newly-created {@link Browser | browser}, this will return a single
   * instance of {@link BrowserContext}.
   */
  abstract browserContexts(): BrowserContext[];
  /**
   * Gets the default {@link BrowserContext | browser context}.
   *
   * @remarks The default {@link BrowserContext | browser context} cannot be
   * closed.
   */
  abstract defaultBrowserContext(): BrowserContext;
  /**
   * Gets the WebSocket URL to connect to this {@link Browser | browser}.
   *
   * This is usually used with {@link Puppeteer.connect}.
   *
   * You can find the debugger URL (`webSocketDebuggerUrl`) from
   * `http://HOST:PORT/json/version`.
   *
   * See {@link https://chromedevtools.github.io/devtools-protocol/#how-do-i-access-the-browser-target | browser endpoint}
   * for more information.
   *
   * @remarks The format is always `ws://HOST:PORT/devtools/browser/<id>`.
   */
  abstract wsEndpoint(): string;
  /**
   * Creates a new {@link Page | page} in the
   * {@link Browser.defaultBrowserContext | default browser context}.
   */
  abstract newPage(options?: CreatePageOptions): Promise<Page>;
  /**
   * Gets the specified window {@link WindowBounds | bounds}.
   */
  abstract getWindowBounds(windowId: WindowId): Promise<WindowBounds>;
  /**
   * Sets the specified window {@link WindowBounds | bounds}.
   */
  abstract setWindowBounds(
    windowId: WindowId,
    windowBounds: WindowBounds,
  ): Promise<void>;
  /**
   * Gets all active {@link Target | targets}.
   *
   * In case of multiple {@link BrowserContext | browser contexts}, this returns
   * all {@link Target | targets} in all
   * {@link BrowserContext | browser contexts}.
   */
  abstract targets(): Target[];
  /**
   * Gets the {@link Target | target} associated with the
   * {@link Browser.defaultBrowserContext | default browser context}).
   */
  abstract target(): Target;
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
  waitForTarget(
    predicate: (x: Target) => boolean | Promise<boolean>,
    options?: WaitForTargetOptions,
  ): Promise<Target>;
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
  pages(includeAll?: boolean): Promise<Page[]>;
  /**
   * Gets a string representing this {@link Browser | browser's} name and
   * version.
   *
   * For headless browser, this is similar to `"HeadlessChrome/61.0.3153.0"`. For
   * non-headless or new-headless, this is similar to `"Chrome/61.0.3153.0"`. For
   * Firefox, it is similar to `"Firefox/116.0a1"`.
   *
   * The format of {@link Browser.version} might change with future releases of
   * browsers.
   */
  abstract version(): Promise<string>;
  /**
   * Gets this {@link Browser | browser's} original user agent.
   *
   * {@link Page | Pages} can override the user agent with
   * {@link Page.(setUserAgent:2) }.
   *
   */
  abstract userAgent(): Promise<string>;
  /**
   * Closes this {@link Browser | browser} and all associated
   * {@link Page | pages}.
   */
  abstract close(): Promise<void>;
  /**
   * Disconnects Puppeteer from this {@link Browser | browser}, but leaves the
   * process running.
   */
  abstract disconnect(): Promise<void>;
  /**
   * Returns all cookies in the default {@link BrowserContext}.
   *
   * @remarks
   *
   * Shortcut for
   * {@link BrowserContext.cookies | browser.defaultBrowserContext().cookies()}.
   */
  cookies(): Promise<Cookie[]>;
  /**
   * Sets cookies in the default {@link BrowserContext}.
   *
   * @remarks
   *
   * Shortcut for
   * {@link BrowserContext.setCookie | browser.defaultBrowserContext().setCookie()}.
   */
  setCookie(...cookies: CookieData[]): Promise<void>;
  /**
   * Removes cookies from the default {@link BrowserContext}.
   *
   * @remarks
   *
   * Shortcut for
   * {@link BrowserContext.deleteCookie | browser.defaultBrowserContext().deleteCookie()}.
   */
  deleteCookie(...cookies: Cookie[]): Promise<void>;
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
  deleteMatchingCookies(...filters: DeleteCookiesRequest[]): Promise<void>;
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
  setPermission(
    origin: string,
    ...permissions: Array<{
      permission: PermissionDescriptor_2;
      state: PermissionState_2;
    }>
  ): Promise<void>;
  /**
   * Installs an extension and returns the ID. In Chrome, this is only
   * available if the browser was created using `pipe: true` and the
   * `--enable-unsafe-extension-debugging` flag is set.
   */
  abstract installExtension(path: string): Promise<string>;
  /**
   * Uninstalls an extension. In Chrome, this is only available if the browser
   * was created using `pipe: true` and the
   * `--enable-unsafe-extension-debugging` flag is set.
   */
  abstract uninstallExtension(id: string): Promise<void>;
  /**
   * Gets a list of {@link ScreenInfo | screen information objects}.
   */
  abstract screens(): Promise<ScreenInfo[]>;
  /**
   * Adds a new screen, returns the added {@link ScreenInfo | screen information object}.
   *
   * @remarks
   *
   * Only supported in headless mode.
   */
  abstract addScreen(params: AddScreenParams): Promise<ScreenInfo>;
  /**
   * Removes a screen.
   *
   * @remarks
   *
   * Only supported in headless mode. Fails if the primary screen id is specified.
   */
  abstract removeScreen(screenId: string): Promise<void>;
  /**
   * Whether Puppeteer is connected to this {@link Browser | browser}.
   */
  abstract get connected(): boolean;
  /**
   * Get debug information from Puppeteer.
   *
   * @remarks
   *
   * Currently, includes pending protocol calls. In the future, we might add more info.
   *
   * @public
   * @experimental
   */
  abstract get debugInfo(): DebugInfo;
  /**
   * Retrieves a map of all extensions installed in the browser, where the keys
   * are extension IDs and the values are the corresponding {@link Extension} instances.
   *
   * @public
   */
  abstract extensions(): Promise<Map<string, Extension>>;
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
   * Gets all active {@link Target | targets} inside this
   * {@link BrowserContext | browser context}.
   */
  abstract targets(): Target[];
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
  waitForTarget(
    predicate: (x: Target) => boolean | Promise<boolean>,
    options?: WaitForTargetOptions,
  ): Promise<Target>;
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
  abstract overridePermissions(
    origin: string,
    permissions: Permission[],
  ): Promise<void>;
  /**
   * Sets the permission for a specific origin.
   *
   * @param origin - The origin to set the permission for.
   * @param permission - The permission descriptor.
   * @param state - The state of the permission.
   *
   * @public
   */
  abstract setPermission(
    origin: string | '*',
    ...permissions: Array<{
      permission: PermissionDescriptor_2;
      state: PermissionState_2;
    }>
  ): Promise<void>;
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
}

/**
 * @public
 */
export declare const enum BrowserContextEvent {
  /**
   * Emitted when the url of a target inside the browser context changes.
   * Contains a {@link Target} instance.
   */
  TargetChanged = 'targetchanged',
  /**
   * Emitted when a target is created within the browser context, for example
   * when a new page is opened by
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/open | window.open}
   * or by {@link BrowserContext.newPage | browserContext.newPage}
   *
   * Contains a {@link Target} instance.
   */
  TargetCreated = 'targetcreated',
  /**
   * Emitted when a target is destroyed within the browser context, for example
   * when a page is closed. Contains a {@link Target} instance.
   */
  TargetDestroyed = 'targetdestroyed',
}

/**
 * @public
 */
export declare interface BrowserContextEvents extends Record<
  EventType,
  unknown
> {
  [BrowserContextEvent.TargetChanged]: Target;
  [BrowserContextEvent.TargetCreated]: Target;
  [BrowserContextEvent.TargetDestroyed]: Target;
}

/**
 * @public
 */
export declare interface BrowserContextOptions {
  /**
   * Proxy server with optional port to use for all requests.
   * Username and password can be set in `Page.authenticate`.
   */
  proxyServer?: string;
  /**
   * Bypass the proxy for the given list of hosts.
   */
  proxyBypassList?: string[];
  /**
   * Behavior definition for when downloading a file.
   *
   * @remarks
   * If not set, the default behavior will be used.
   */
  downloadBehavior?: DownloadBehavior;
}

/**
 * All the events a {@link Browser | browser instance} may emit.
 *
 * @public
 */
export declare const enum BrowserEvent {
  /**
   * Emitted when Puppeteer gets disconnected from the browser instance. This
   * might happen because either:
   *
   * - The browser closes/crashes or
   * - {@link Browser.disconnect} was called.
   */
  Disconnected = 'disconnected',
  /**
   * Emitted when the URL of a target changes. Contains a {@link Target}
   * instance.
   *
   * @remarks Note that this includes target changes in all browser
   * contexts.
   */
  TargetChanged = 'targetchanged',
  /**
   * Emitted when a target is created, for example when a new page is opened by
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/open | window.open}
   * or by {@link Browser.newPage | browser.newPage}
   *
   * Contains a {@link Target} instance.
   *
   * @remarks Note that this includes target creations in all browser
   * contexts.
   */
  TargetCreated = 'targetcreated',
  /**
   * Emitted when a target is destroyed, for example when a page is closed.
   * Contains a {@link Target} instance.
   *
   * @remarks Note that this includes target destructions in all browser
   * contexts.
   */
  TargetDestroyed = 'targetdestroyed',
}

/**
 * @public
 */
export declare interface BrowserEvents extends Record<EventType, unknown> {
  [BrowserEvent.Disconnected]: undefined;
  [BrowserEvent.TargetCreated]: Target;
  [BrowserEvent.TargetDestroyed]: Target;
  [BrowserEvent.TargetChanged]: Target;
}

/**
 * Describes a launcher - a class that is able to create and launch a browser instance.
 *
 * @public
 */
export declare abstract class BrowserLauncher {
  #private;
  get browser(): SupportedBrowser;
  launch(options?: LaunchOptions): Promise<Browser>;
  abstract executablePath(
    channel?: ChromeReleaseChannel,
    validatePath?: boolean,
  ): Promise<string>;
  abstract defaultArgs(object: LaunchOptions): string[];
}

/**
 * @public
 */
export declare type CDPEvents = {
  [Property in keyof ProtocolMapping.Events]: ProtocolMapping.Events[Property][0];
};

/**
 * The `CDPSession` instances are used to talk raw Chrome Devtools Protocol.
 *
 * @remarks
 *
 * Protocol methods can be called with {@link CDPSession.send} method and protocol
 * events can be subscribed to with `CDPSession.on` method.
 *
 * Useful links: {@link https://chromedevtools.github.io/devtools-protocol/ | DevTools Protocol Viewer}
 * and {@link https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md | Getting Started with DevTools Protocol}.
 *
 * @example
 *
 * ```ts
 * const client = await page.createCDPSession();
 * await client.send('Animation.enable');
 * client.on('Animation.animationCreated', () =>
 *   console.log('Animation created!'),
 * );
 * const response = await client.send('Animation.getPlaybackRate');
 * console.log('playback rate is ' + response.playbackRate);
 * await client.send('Animation.setPlaybackRate', {
 *   playbackRate: response.playbackRate / 2,
 * });
 * ```
 *
 * @public
 */
export declare abstract class CDPSession extends EventEmitter<CDPSessionEvents> {
  /**
   * The underlying connection for this session, if any.
   *
   * @public
   */
  abstract connection(): Connection | undefined;
  /**
   * True if the session has been detached, false otherwise.
   *
   * @public
   */
  abstract get detached(): boolean;
  abstract send<T extends keyof ProtocolMapping.Commands>(
    method: T,
    params?: ProtocolMapping.Commands[T]['paramsType'][0],
    options?: CommandOptions,
  ): Promise<ProtocolMapping.Commands[T]['returnType']>;
  /**
   * Detaches the cdpSession from the target. Once detached, the cdpSession object
   * won't emit any events and can't be used to send messages.
   */
  abstract detach(): Promise<void>;
  /**
   * Returns the session's id.
   */
  abstract id(): string;
}

/**
 * Events that the CDPSession class emits.
 *
 * @public
 */
export declare namespace CDPSessionEvent {
  const SessionAttached: 'sessionattached';
  const SessionDetached: 'sessiondetached';
}

/**
 * @public
 */
export declare interface CDPSessionEvents
  extends CDPEvents, Record<EventType, unknown> {
  [CDPSessionEvent.SessionAttached]: CDPSession;
  [CDPSessionEvent.SessionDetached]: CDPSession;
}

/**
 * @public
 */
export declare interface ChromeHeadlessShellSettings {
  /**
   * Tells Puppeteer to not download the browser during installation.
   *
   * Can be overridden by `PUPPETEER_CHROME_HEADLESS_SHELL_SKIP_DOWNLOAD`
   * or `PUPPETEER_SKIP_CHROME_HEADLESS_SHELL_DOWNLOAD`.
   *
   * @defaultValue false
   */
  skipDownload?: boolean;
  /**
   * Specifies the URL prefix that is used to download the browser.
   *
   * Can be overridden by `PUPPETEER_CHROME_HEADLESS_SHELL_DOWNLOAD_BASE_URL`.
   *
   * @remarks
   * This must include the protocol and may even need a path prefix.
   * This must **not** include a trailing slash similar to the default.
   *
   * @defaultValue https://storage.googleapis.com/chrome-for-testing-public
   */
  downloadBaseUrl?: string;
  /**
   * Specifies a certain version of the browser you'd like Puppeteer to use.
   *
   * Can be overridden by `PUPPETEER_CHROME_HEADLESS_SHELL_VERSION`.
   *
   * See {@link PuppeteerNode.launch | puppeteer.launch} on how executable path
   * is inferred.
   *
   * @example 119.0.6045.105
   * @defaultValue The pinned browser version supported by the current Puppeteer
   * version.
   */
  version?: string;
}

/**
 * @public
 */
export declare type ChromeReleaseChannel =
  | 'chrome'
  | 'chrome-beta'
  | 'chrome-canary'
  | 'chrome-dev';

/**
 * @public
 */
export declare interface ChromeSettings {
  /**
   * Tells Puppeteer to not download the browser during installation.
   *
   * Can be overridden by `PUPPETEER_CHROME_SKIP_DOWNLOAD`.
   *
   * @defaultValue false
   */
  skipDownload?: boolean;
  /**
   * Specifies the URL prefix that is used to download the browser.
   *
   * Can be overridden by `PUPPETEER_CHROME_DOWNLOAD_BASE_URL`.
   *
   * @remarks
   * This must include the protocol and may even need a path prefix.
   * This must **not** include a trailing slash similar to the default.
   *
   * @defaultValue https://storage.googleapis.com/chrome-for-testing-public
   */
  downloadBaseUrl?: string;
  /**
   * Specifies a certain version of the browser you'd like Puppeteer to use.
   *
   * Can be overridden by `PUPPETEER_CHROME_VERSION`
   * or `PUPPETEER_SKIP_CHROME_DOWNLOAD`.
   *
   * See {@link PuppeteerNode.launch | puppeteer.launch} on how executable path
   * is inferred.
   *
   * @example 119.0.6045.105
   * @defaultValue The pinned browser version supported by the current Puppeteer
   * version.
   */
  version?: string;
}

/**
 * @public
 */
export declare interface ClickOptions extends MouseClickOptions {
  /**
   * Offset for the clickable point relative to the top-left corner of the border box.
   */
  offset?: Offset;
  /**
   * An experimental debugging feature. If true, inserts an element into the
   * page to highlight the click location for 10 seconds. Might not work on all
   * pages and does not persist across navigations.
   *
   * @experimental
   */
  debugHighlight?: boolean;
}

/**
 * @public
 */
export declare interface CommandOptions {
  timeout: number;
}

/**
 * @public
 */
export declare interface CommonEventEmitter<
  Events extends Record<EventType, unknown>,
> {
  on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): this;
  off<Key extends keyof Events>(
    type: Key,
    handler?: Handler<Events[Key]>,
  ): this;
  emit<Key extends keyof Events>(type: Key, event: Events[Key]): boolean;
  once<Key extends keyof Events>(
    type: Key,
    handler: Handler<Events[Key]>,
  ): this;
  listenerCount(event: keyof Events): number;
  removeAllListeners(event?: keyof Events): this;
}

/**
 * Defines options to configure Puppeteer's behavior during installation and
 * runtime.
 *
 * See individual properties for more information.
 *
 * @public
 */
export declare interface Configuration {
  /**
   * Defines the directory to be used by Puppeteer for caching.
   *
   * Can be overridden by `PUPPETEER_CACHE_DIR`.
   *
   * @defaultValue `path.join(os.homedir(), '.cache', 'puppeteer')`
   */
  cacheDirectory?: string;
  /**
   * Specifies an executable path to be used in
   * {@link PuppeteerNode.launch | puppeteer.launch}.
   *
   * Can be overridden by `PUPPETEER_EXECUTABLE_PATH`.
   *
   * @defaultValue **Auto-computed.**
   */
  executablePath?: string;
  /**
   * Specifies which browser you'd like Puppeteer to use.
   *
   * Can be overridden by `PUPPETEER_BROWSER`.
   *
   * @defaultValue `chrome`
   */
  defaultBrowser?: SupportedBrowser;
  /**
   * Defines the directory to be used by Puppeteer for creating temporary files.
   *
   * Can be overridden by `PUPPETEER_TMP_DIR`.
   *
   * @defaultValue `os.tmpdir()`
   */
  temporaryDirectory?: string;
  /**
   * Tells Puppeteer to not download during installation.
   *
   * Can be overridden by `PUPPETEER_SKIP_DOWNLOAD`.
   */
  skipDownload?: boolean;
  /**
   * Tells Puppeteer to log at the given level.
   *
   * @defaultValue `warn`
   */
  logLevel?: 'silent' | 'error' | 'warn';
  /**
   * Defines experimental options for Puppeteer.
   */
  experiments?: ExperimentsConfiguration;
  chrome?: ChromeSettings;
  ['chrome-headless-shell']?: ChromeHeadlessShellSettings;
  firefox?: FirefoxSettings;
}

/**
 * @public
 */
export declare const /**
   * @public
   */
  /**
   * @public
   */
  connect: (
    options: Puppeteer_2.ConnectOptions,
  ) => Promise<Puppeteer_2.Browser>;

/**
 * @public
 */
export declare class Connection extends EventEmitter<CDPSessionEvents> {
  #private;
  constructor(
    url: string,
    transport: ConnectionTransport,
    delay?: number,
    timeout?: number,
    rawErrors?: boolean,
    idGenerator?: () => number,
  );
  static fromSession(session: CDPSession): Connection | undefined;
  get timeout(): number;
  /**
   * @param sessionId - The session id
   * @returns The current CDP session if it exists
   */
  session(sessionId: string): CDPSession | null;
  url(): string;
  send<T extends keyof ProtocolMapping.Commands>(
    method: T,
    params?: ProtocolMapping.Commands[T]['paramsType'][0],
    options?: CommandOptions,
  ): Promise<ProtocolMapping.Commands[T]['returnType']>;
  dispose(): void;
  /**
   * @param targetInfo - The target info
   * @returns The CDP session that is created
   */
  createSession(targetInfo: Protocol.Target.TargetInfo): Promise<CDPSession>;
}

/**
 * Thrown if underlying protocol connection has been closed.
 *
 * @public
 */
export declare class ConnectionClosedError extends ProtocolError {}

/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @public
 */
export declare interface ConnectionTransport {
  send(message: string): void;
  close(): void;
  onmessage?: (message: string) => void;
  onclose?: () => void;
}

/**
 * Generic browser options that can be passed when launching any browser or when
 * connecting to an existing browser instance.
 * @public
 */
export declare interface ConnectOptions {
  /**
   * Whether to ignore HTTPS errors during navigation.
   * @defaultValue `false`
   */
  acceptInsecureCerts?: boolean;
  /**
   * If specified, puppeteer looks for an open WebSocket at the well-known
   * default user data directory for the specified channel and attempts to
   * connect to it using ws://localhost:$ActivePort/devtools/browser. Only works
   * for Chrome and when run in Node.js.
   *
   * This option is experimental when used with puppeteer.connect().
   *
   * @experimental
   */
  channel?: ChromeReleaseChannel;
  /**
   * Experimental setting to disable monitoring network events by default. When
   * set to `false`, parts of Puppeteer that depend on network events would not
   * work such as HTTPRequest and HTTPResponse.
   *
   * @experimental
   * @defaultValue `true`
   */
  networkEnabled?: boolean;
  /**
   * Experimental setting to disable monitoring issue events by default.
   *
   * @experimental
   * @defaultValue `true`
   */
  issuesEnabled?: boolean;
  /**
   * Sets the viewport for each page.
   *
   * @defaultValue '\{width: 800, height: 600\}'
   */
  defaultViewport?: Viewport | null;
  /**
   * Sets the download behavior for the context.
   */
  downloadBehavior?: DownloadBehavior;
  /**
   * Slows down Puppeteer operations by the specified amount of milliseconds to
   * aid debugging.
   */
  slowMo?: number;
  /**
   * Callback to decide if Puppeteer should connect to a given target or not.
   */
  targetFilter?: TargetFilterCallback;
  /**
   * Whether to handle the DevTools windows as pages in Puppeteer. Supported
   * only in Chrome with CDP.
   *
   * @defaultValue 'false'
   */
  handleDevToolsAsPage?: boolean;
  /**
   * @defaultValue Determined at run time:
   *
   * - Launching Chrome - 'cdp'.
   *
   * - Launching Firefox - 'webDriverBiDi'.
   *
   * - Connecting to a browser - 'cdp'.
   *
   * @public
   */
  protocol?: ProtocolType;
  /**
   * Timeout setting for individual protocol (CDP) calls.
   *
   * @defaultValue `180_000`
   */
  protocolTimeout?: number;
  browserWSEndpoint?: string;
  browserURL?: string;
  transport?: ConnectionTransport;
  /**
   * Headers to use for the web socket connection.
   * @remarks
   * Only works in the Node.js environment.
   */
  headers?: Record<string, string>;
  /**
   * WebDriver BiDi capabilities passed to BiDi `session.new`.
   *
   * @remarks
   * Only works for `protocol="webDriverBiDi"` and {@link Puppeteer.connect}.
   */
  capabilities?: SupportedWebDriverCapabilities;
  /**
   * A list of URL patterns to block.
   *
   * This option allows you to restrict the browser from accessing specific
   * URLs or origins. It uses the standard [URLPattern](https://urlpattern.spec.whatwg.org/) API to match URLs.
   *
   * When connecting to an existing browser, Puppeteer will silently detach from any
   * already open targets that violate the patterns.
   *
   * For any network requests made by the browser (including navigations and
   * subresources like images or scripts), the request will fail with an error
   * if the URL matches a blocked pattern.
   *
   * @example Pattern to block a specific domain:
   * `*://example.com/*`
   *
   * @example Pattern to block all subdomains:
   * `*://*.evil.com/*`
   *
   * @remarks
   * Currently only supported for CDP connections.
   *
   * Inner `<iframe>` content loading is currently not blocked.
   *
   * Cannot be used along with {@link ConnectOptions.allowlist}.
   *
   * @experimental
   */
  blocklist?: string[];
  /**
   * A list of URL patterns to allow.
   *
   * **Requires Chrome 149+.**
   *
   * This option allows you to restrict the browser from accessing any URLs
   * except for those that match the patterns in the allowList.
   * It uses the standard [URLPattern](https://urlpattern.spec.whatwg.org/) API to match URLs.
   *
   * When connecting to an existing browser, Puppeteer will silently detach from any
   * already open targets that violate the patterns.
   *
   * For any network requests made by the browser (including navigations and
   * subresources like images or scripts), the request will fail with an error
   * if the URL does not match any pattern in the allowlist.
   *
   * @example Pattern to allow a specific domain:
   * `*://example.com/*`
   *
   * @example Pattern to allow all subdomains:
   * `*://*.example.com/*`
   *
   * @remarks
   * Currently only supported for CDP connections.
   *
   * Inner `<iframe>` content loading is currently not blocked.
   *
   * Cannot be used along with {@link ConnectOptions.blocklist}.
   *
   * @experimental
   */
  allowlist?: string[];
}

/**
 * ConsoleMessage objects are dispatched by page via the 'console' event.
 * @public
 */
export declare class ConsoleMessage {
  #private;
  /**
   * The type of the console message.
   */
  type(): ConsoleMessageType;
  /**
   * The text of the console message.
   */
  text(): string;
  /**
   * An array of arguments passed to the console.
   */
  args(): JSHandle[];
  /**
   * The location of the console message.
   */
  location(): ConsoleMessageLocation;
  /**
   * The array of locations on the stack of the console message.
   */
  stackTrace(): ConsoleMessageLocation[];
}

/**
 * @public
 */
export declare interface ConsoleMessageLocation {
  /**
   * URL of the resource if known or `undefined` otherwise.
   */
  url?: string;
  /**
   * 0-based line number in the resource if known or `undefined` otherwise.
   */
  lineNumber?: number;
  /**
   * 0-based column number in the resource if known or `undefined` otherwise.
   */
  columnNumber?: number;
}

/**
 * The supported types for console messages.
 * @public
 */
export declare type ConsoleMessageType =
  | 'log'
  | 'debug'
  | 'info'
  | 'error'
  | 'warn'
  | 'dir'
  | 'dirxml'
  | 'table'
  | 'trace'
  | 'clear'
  | 'startGroup'
  | 'startGroupCollapsed'
  | 'endGroup'
  | 'assert'
  | 'profile'
  | 'profileEnd'
  | 'count'
  | 'timeEnd'
  | 'verbose';

/**
 * @public
 */
export declare interface ContinueRequestOverrides {
  /**
   * If set, the request URL will change. This is not a redirect.
   */
  url?: string;
  method?: string;
  postData?: string;
  headers?: Record<string, string>;
}

/**
 * Represents a cookie object.
 *
 * @public
 */
export declare interface Cookie extends CookieData {
  /**
   * Cookie path.
   */
  path: string;
  /**
   * Cookie expiration date as the number of seconds since the UNIX epoch. Set to `-1` for
   * session cookies
   */
  expires: number;
  /**
   * Cookie size.
   */
  size: number;
  /**
   * True if cookie is secure.
   */
  secure: boolean;
  /**
   * True in case of session cookie.
   */
  session: boolean;
  /**
   * True if cookie partition key is opaque. Supported only in Chrome.
   */
  partitionKeyOpaque?: boolean;
}

/**
 * Cookie parameter object used to set cookies in the browser-level cookies
 * API.
 *
 * @public
 */
export declare interface CookieData {
  /**
   * Cookie name.
   */
  name: string;
  /**
   * Cookie value.
   */
  value: string;
  /**
   * Cookie domain.
   */
  domain: string;
  /**
   * Cookie path.
   */
  path?: string;
  /**
   * True if cookie is secure.
   */
  secure?: boolean;
  /**
   * True if cookie is http-only.
   */
  httpOnly?: boolean;
  /**
   * Cookie SameSite type.
   */
  sameSite?: CookieSameSite;
  /**
   * Cookie expiration date, session cookie if not set
   */
  expires?: number;
  /**
   * Cookie Priority. Supported only in Chrome.
   */
  priority?: CookiePriority;
  /**
   * Cookie source scheme type. Supported only in Chrome.
   */
  sourceScheme?: CookieSourceScheme;
  /**
   * Cookie partition key. In Chrome, it matches the top-level site the
   * partitioned cookie is available in. In Firefox, it matches the
   * source origin in the
   * {@link https://w3c.github.io/webdriver-bidi/#type-storage-PartitionKey | PartitionKey }.
   */
  partitionKey?: CookiePartitionKey | string;
}

/**
 * Cookie parameter object used to set cookies in the page-level cookies
 * API.
 *
 * @public
 */
export declare interface CookieParam {
  /**
   * Cookie name.
   */
  name: string;
  /**
   * Cookie value.
   */
  value: string;
  /**
   * The request-URI to associate with the setting of the cookie. This value can affect
   * the default domain, path, and source scheme values of the created cookie.
   */
  url?: string;
  /**
   * Cookie domain.
   */
  domain?: string;
  /**
   * Cookie path.
   */
  path?: string;
  /**
   * True if cookie is secure.
   */
  secure?: boolean;
  /**
   * True if cookie is http-only.
   */
  httpOnly?: boolean;
  /**
   * Cookie SameSite type.
   */
  sameSite?: CookieSameSite;
  /**
   * Cookie expiration date, session cookie if not set
   */
  expires?: number;
  /**
   * Cookie Priority. Supported only in Chrome.
   */
  priority?: CookiePriority;
  /**
   * Cookie source scheme type. Supported only in Chrome.
   */
  sourceScheme?: CookieSourceScheme;
  /**
   * Cookie partition key. In Chrome, it matches the top-level site the
   * partitioned cookie is available in. In Firefox, it matches the
   * source origin in the
   * {@link https://w3c.github.io/webdriver-bidi/#type-storage-PartitionKey | PartitionKey }.
   */
  partitionKey?: CookiePartitionKey | string;
}

/**
 * Represents a cookie partition key in Chrome.
 *
 * @public
 */
export declare interface CookiePartitionKey {
  /**
   * The site of the top-level URL the browser was visiting at the start of the request
   * to the endpoint that set the cookie.
   *
   * In Chrome, maps to the CDP's `topLevelSite` partition key.
   */
  sourceOrigin: string;
  /**
   * Indicates if the cookie has any ancestors that are cross-site to
   * the topLevelSite.
   *
   * Supported only in Chrome.
   */
  hasCrossSiteAncestor?: boolean;
}

/**
 * Represents the cookie's 'Priority' status:
 * https://tools.ietf.org/html/draft-west-cookie-priority-00
 *
 * @public
 */
export declare type CookiePriority = 'Low' | 'Medium' | 'High';

/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Represents the cookie's 'SameSite' status:
 * https://tools.ietf.org/html/draft-west-first-party-cookies
 *
 * @public
 */
export declare type CookieSameSite = 'Strict' | 'Lax' | 'None' | 'Default';

/**
 * Represents the source scheme of the origin that originally set the cookie. A value of
 * "Unset" allows protocol clients to emulate legacy cookie scope for the scheme.
 * This is a temporary ability and it will be removed in the future.
 *
 * @public
 */
export declare type CookieSourceScheme = 'Unset' | 'NonSecure' | 'Secure';

/**
 * The Coverage class provides methods to gather information about parts of
 * JavaScript and CSS that were used by the page.
 *
 * @remarks
 * To output coverage in a form consumable by {@link https://github.com/istanbuljs | Istanbul},
 * see {@link https://github.com/istanbuljs/puppeteer-to-istanbul | puppeteer-to-istanbul}.
 *
 * @example
 * An example of using JavaScript and CSS coverage to get percentage of initially
 * executed code:
 *
 * ```ts
 * // Enable both JavaScript and CSS coverage
 * await Promise.all([
 *   page.coverage.startJSCoverage(),
 *   page.coverage.startCSSCoverage(),
 * ]);
 * // Navigate to page
 * await page.goto('https://example.com');
 * // Disable both JavaScript and CSS coverage
 * const [jsCoverage, cssCoverage] = await Promise.all([
 *   page.coverage.stopJSCoverage(),
 *   page.coverage.stopCSSCoverage(),
 * ]);
 * let totalBytes = 0;
 * let usedBytes = 0;
 * const coverage = [...jsCoverage, ...cssCoverage];
 * for (const entry of coverage) {
 *   totalBytes += entry.text.length;
 *   for (const range of entry.ranges) usedBytes += range.end - range.start - 1;
 * }
 * console.log(`Bytes used: ${(usedBytes / totalBytes) * 100}%`);
 * ```
 *
 * @public
 */
export declare class Coverage {
  #private;
  /**
   * @param options - Set of configurable options for coverage defaults to
   * `resetOnNavigation : true, reportAnonymousScripts : false,`
   * `includeRawScriptCoverage : false, useBlockCoverage : true`
   * @returns Promise that resolves when coverage is started.
   *
   * @remarks
   * Anonymous scripts are ones that don't have an associated url. These are
   * scripts that are dynamically created on the page using `eval` or
   * `new Function`. If `reportAnonymousScripts` is set to `true`, anonymous
   * scripts URL will start with `debugger://VM` (unless a magic //# sourceURL
   * comment is present, in which case that will the be URL).
   */
  startJSCoverage(options?: JSCoverageOptions): Promise<void>;
  /**
   * Promise that resolves to the array of coverage reports for
   * all scripts.
   *
   * @remarks
   * JavaScript Coverage doesn't include anonymous scripts by default.
   * However, scripts with sourceURLs are reported.
   */
  stopJSCoverage(): Promise<JSCoverageEntry[]>;
  /**
   * @param options - Set of configurable options for coverage, defaults to
   * `resetOnNavigation : true`
   * @returns Promise that resolves when coverage is started.
   */
  startCSSCoverage(options?: CSSCoverageOptions): Promise<void>;
  /**
   * Promise that resolves to the array of coverage reports
   * for all stylesheets.
   *
   * @remarks
   * CSS Coverage doesn't include dynamically injected style tags
   * without sourceURLs.
   */
  stopCSSCoverage(): Promise<CoverageEntry[]>;
}

/**
 * The CoverageEntry class represents one entry of the coverage report.
 * @public
 */
export declare interface CoverageEntry {
  /**
   * The URL of the style sheet or script.
   */
  url: string;
  /**
   * The content of the style sheet or script.
   */
  text: string;
  /**
   * The covered range as start and end positions.
   */
  ranges: Array<{
    start: number;
    end: number;
  }>;
}

/**
 * @public
 */
export declare type CreatePageOptions = (
  | {
      type?: 'tab';
    }
  | {
      type: 'window';
      windowBounds?: WindowBounds;
    }
) & {
  /**
   * Whether to create the page in the background.
   *
   * @defaultValue `false`
   */
  background?: boolean;
};

/**
 * @public
 */
export declare interface Credentials {
  username: string;
  password: string;
}

/**
 * @public
 */
export declare class CSSCoverage {
  #private;
  constructor(client: CDPSession);
  start(options?: {resetOnNavigation?: boolean}): Promise<void>;
  stop(): Promise<CoverageEntry[]>;
}

/**
 * Set of configurable options for CSS coverage.
 * @public
 */
export declare interface CSSCoverageOptions {
  /**
   * Whether to reset coverage on every navigation.
   */
  resetOnNavigation?: boolean;
}

/**
 * @public
 */
export declare interface CustomQueryHandler {
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
 * @public
 */
declare interface CustomQuerySelector {
  querySelector(root: Node, selector: string): Awaitable<Node | null>;
  querySelectorAll(root: Node, selector: string): AwaitableIterable<Node>;
}

/**
 * This class mimics the injected {@link CustomQuerySelectorRegistry}.
 */
declare class CustomQuerySelectorRegistry {
  #private;
  register(name: string, handler: CustomQueryHandler): void;
  unregister(name: string): void;
  get(name: string): CustomQuerySelector | undefined;
  clear(): void;
}

declare namespace CustomQuerySelectors {
  export type {CustomQuerySelector};
}

/**
 * @public
 * @experimental
 */
export declare interface DebugInfo {
  pendingProtocolErrors: Error[];
}

/**
 * The default cooperative request interception resolution priority
 *
 * @public
 */
export declare const DEFAULT_INTERCEPT_RESOLUTION_PRIORITY = 0;

/**
 * @public
 */
export declare const /**
   * @public
   */
  /**
   * @public
   */
  defaultArgs: (options?: Puppeteer_2.LaunchOptions) => Promise<string[]>;

/**
 * @public
 */
export declare interface DeleteCookiesRequest {
  /**
   * Name of the cookies to remove.
   */
  name: string;
  /**
   * If specified, deletes all the cookies with the given name where domain and path match
   * provided URL. Otherwise, deletes only cookies related to the current page's domain.
   */
  url?: string;
  /**
   * If specified, deletes only cookies with the exact domain.
   */
  domain?: string;
  /**
   * If specified, deletes only cookies with the exact path.
   */
  path?: string;
  /**
   * If specified, deletes cookies in the given partition key. In
   * Chrome, partitionKey matches the top-level site the partitioned
   * cookie is available in.
   * In Firefox, it matches the source origin in the
   * {@link https://w3c.github.io/webdriver-bidi/#type-storage-PartitionKey | PartitionKey }.
   */
  partitionKey?: CookiePartitionKey | string;
}

/**
 * @public
 */
export declare interface Device {
  userAgent: string;
  viewport: Viewport;
}

/**
 * Device request prompts let you respond to the page requesting for a device
 * through an API like WebBluetooth.
 *
 * @remarks
 * `DeviceRequestPrompt` instances are returned via the
 * {@link Page.waitForDevicePrompt} method.
 *
 * @example
 *
 * ```ts
 * const [devicePrompt] = Promise.all([
 *   page.waitForDevicePrompt(),
 *   page.click('#connect-bluetooth'),
 * ]);
 * await devicePrompt.select(
 *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device')),
 * );
 * ```
 *
 * @public
 */
export declare abstract class DeviceRequestPrompt {
  /**
   * Current list of selectable devices.
   */
  readonly devices: DeviceRequestPromptDevice[];
  /**
   * Resolve to the first device in the prompt matching a filter.
   */
  abstract waitForDevice(
    filter: (device: DeviceRequestPromptDevice) => boolean,
    options?: WaitTimeoutOptions,
  ): Promise<DeviceRequestPromptDevice>;
  /**
   * Select a device in the prompt's list.
   */
  abstract select(device: DeviceRequestPromptDevice): Promise<void>;
  /**
   * Cancel the prompt.
   */
  abstract cancel(): Promise<void>;
}

/**
 * Device in a request prompt.
 *
 * @public
 */
export declare interface DeviceRequestPromptDevice {
  /**
   * Device id during a prompt.
   */
  id: string;
  /**
   * Device name as it appears in a prompt.
   */
  name: string;
}

/**
 * Dialog instances are dispatched by the {@link Page} via the `dialog` event.
 *
 * @remarks
 *
 * @example
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * page.on('dialog', async dialog => {
 *   console.log(dialog.message());
 *   await dialog.dismiss();
 *   await browser.close();
 * });
 * await page.evaluate(() => alert('1'));
 * ```
 *
 * @public
 */
export declare abstract class Dialog {
  #private;
  /**
   * The type of the dialog.
   */
  type(): Protocol.Page.DialogType;
  /**
   * The message displayed in the dialog.
   */
  message(): string;
  /**
   * The default value of the prompt, or an empty string if the dialog
   * is not a `prompt`.
   */
  defaultValue(): string;
  /**
   * A promise that resolves when the dialog has been accepted.
   *
   * @param promptText - optional text that will be entered in the dialog
   * prompt. Has no effect if the dialog's type is not `prompt`.
   *
   */
  accept(promptText?: string): Promise<void>;
  /**
   * A promise which will resolve once the dialog has been dismissed
   */
  dismiss(): Promise<void>;
}

/**
 * @public
 */
export declare interface DownloadBehavior {
  /**
   * Whether to allow all or deny all download requests, or use default behavior if
   * available.
   *
   * @remarks
   * Setting this to `allowAndName` will name all files according to their download guids.
   */
  policy: DownloadPolicy;
  /**
   * The default path to save downloaded files to.
   *
   * @remarks
   * Setting this is required if behavior is set to `allow` or `allowAndName`.
   */
  downloadPath?: string;
}

/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @public
 */
export declare type DownloadPolicy =
  | 'deny'
  | 'allow'
  | 'allowAndName'
  | 'default';

/**
 * @public
 */
export declare type ElementFor<
  TagName extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap,
> = TagName extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[TagName]
  : TagName extends keyof SVGElementTagNameMap
    ? SVGElementTagNameMap[TagName]
    : never;

/**
 * ElementHandle represents an in-page DOM element.
 *
 * @remarks
 * ElementHandles can be created with the {@link Page.$} method.
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.goto('https://example.com');
 * const hrefElement = await page.$('a');
 * await hrefElement.click();
 * // ...
 * ```
 *
 * ElementHandle prevents the DOM element from being garbage-collected unless the
 * handle is {@link JSHandle.dispose | disposed}. ElementHandles are auto-disposed
 * when their associated frame is navigated away or the parent
 * context gets destroyed.
 *
 * ElementHandle instances can be used as arguments in {@link Page.$eval} and
 * {@link Page.evaluate} methods.
 *
 * If you're using TypeScript, ElementHandle takes a generic argument that
 * denotes the type of element the handle is holding within. For example, if you
 * have a handle to a `<select>` element, you can type it as
 * `ElementHandle<HTMLSelectElement>` and you get some nicer type checks.
 *
 * @public
 */
export declare abstract class ElementHandle<
  ElementType extends Node = Element,
> extends JSHandle<ElementType> {
  #private;
  /**
   * Frame corresponding to the current handle.
   */
  abstract get frame(): Frame;
  /**
   * Queries the current element for an element matching the given selector.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @returns A {@link ElementHandle | element handle} to the first element
   * matching the given selector. Otherwise, `null`.
   */
  $<Selector extends string>(
    selector: Selector,
  ): Promise<ElementHandle<NodeFor<Selector>> | null>;
  /**
   * Queries the current element for all elements matching the given selector.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @returns An array of {@link ElementHandle | element handles} that point to
   * elements matching the given selector.
   */
  $$<Selector extends string>(
    selector: Selector,
    options?: QueryOptions,
  ): Promise<Array<ElementHandle<NodeFor<Selector>>>>;
  /**
   * Runs the given function on the first element matching the given selector in
   * the current element.
   *
   * If the given function returns a promise, then this method will wait till
   * the promise resolves.
   *
   * @example
   *
   * ```ts
   * const tweetHandle = await page.$('.tweet');
   * expect(await tweetHandle.$eval('.like', node => node.innerText)).toBe(
   *   '100',
   * );
   * expect(await tweetHandle.$eval('.retweets', node => node.innerText)).toBe(
   *   '10',
   * );
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param pageFunction - The function to be evaluated in this element's page's
   * context. The first element matching the selector will be passed in as the
   * first argument.
   * @param args - Additional arguments to pass to `pageFunction`.
   * @returns A promise to the result of the function.
   */
  $eval<
    Selector extends string,
    Params extends unknown[],
    Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<
      NodeFor<Selector>,
      Params
    >,
  >(
    selector: Selector,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  /**
   * Runs the given function on an array of elements matching the given selector
   * in the current element.
   *
   * If the given function returns a promise, then this method will wait till
   * the promise resolves.
   *
   * @example
   * HTML:
   *
   * ```html
   * <div class="feed">
   *   <div class="tweet">Hello!</div>
   *   <div class="tweet">Hi!</div>
   * </div>
   * ```
   *
   * JavaScript:
   *
   * ```ts
   * const feedHandle = await page.$('.feed');
   *
   * const listOfTweets = await feedHandle.$$eval('.tweet', nodes =>
   *   nodes.map(n => n.innerText),
   * );
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param pageFunction - The function to be evaluated in the element's page's
   * context. An array of elements matching the given selector will be passed to
   * the function as its first argument.
   * @param args - Additional arguments to pass to `pageFunction`.
   * @returns A promise to the result of the function.
   */
  $$eval<
    Selector extends string,
    Params extends unknown[],
    Func extends EvaluateFuncWith<Array<NodeFor<Selector>>, Params> =
      EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,
  >(
    selector: Selector,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  /**
   * Wait for an element matching the given selector to appear in the current
   * element.
   *
   * Unlike {@link Frame.waitForSelector}, this method does not work across
   * navigations or if the element is detached from DOM.
   *
   * @example
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * let currentURL;
   * page
   *   .mainFrame()
   *   .waitForSelector('img')
   *   .then(() => console.log('First URL with image: ' + currentURL));
   *
   * for (currentURL of [
   *   'https://example.com',
   *   'https://google.com',
   *   'https://bbc.com',
   * ]) {
   *   await page.goto(currentURL);
   * }
   * await browser.close();
   * ```
   *
   * @param selector - The selector to query and wait for.
   * @param options - Options for customizing waiting behavior.
   * @returns An element matching the given selector.
   * @throws Throws if an element matching the given selector doesn't appear.
   */
  waitForSelector<Selector extends string>(
    selector: Selector,
    options?: WaitForSelectorOptions,
  ): Promise<ElementHandle<NodeFor<Selector>> | null>;
  /**
   * An element is considered to be visible if all of the following is
   * true:
   *
   * - the element has
   *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle | computed styles}.
   *
   * - the element has a non-empty
   *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect | bounding client rect}.
   *
   * - the element's {@link https://developer.mozilla.org/en-US/docs/Web/CSS/visibility | visibility}
   *   is not `hidden` or `collapse`.
   */
  isVisible(): Promise<boolean>;
  /**
   * An element is considered to be hidden if at least one of the following is true:
   *
   * - the element has no
   *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle | computed styles}.
   *
   * - the element has an empty
   *   {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect | bounding client rect}.
   *
   * - the element's {@link https://developer.mozilla.org/en-US/docs/Web/CSS/visibility | visibility}
   *   is `hidden` or `collapse`.
   */
  isHidden(): Promise<boolean>;
  /**
   * Converts the current handle to the given element type.
   *
   * @example
   *
   * ```ts
   * const element: ElementHandle<Element> = await page.$(
   *   '.class-name-of-anchor',
   * );
   * // DO NOT DISPOSE `element`, this will be always be the same handle.
   * const anchor: ElementHandle<HTMLAnchorElement> =
   *   await element.toElement('a');
   * ```
   *
   * @param tagName - The tag name of the desired element type.
   * @throws An error if the handle does not match. **The handle will not be
   * automatically disposed.**
   */
  toElement<K extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap>(
    tagName: K,
  ): Promise<HandleFor<ElementFor<K>>>;
  /**
   * Resolves the frame associated with the element, if any. Always exists for
   * HTMLIFrameElements.
   */
  abstract contentFrame(this: ElementHandle<HTMLIFrameElement>): Promise<Frame>;
  abstract contentFrame(): Promise<Frame | null>;
  /**
   * Returns the middle point within an element unless a specific offset is provided.
   */
  clickablePoint(offset?: Offset): Promise<Point>;
  /**
   * This method scrolls element into view if needed, and then
   * uses {@link Page.mouse} to hover over the center of the element.
   * If the element is detached from DOM, the method throws an error.
   */
  hover(this: ElementHandle<Element>): Promise<void>;
  /**
   * This method scrolls element into view if needed, and then
   * uses {@link Page.mouse} to click in the center of the element.
   * If the element is detached from DOM, the method throws an error.
   */
  click(
    this: ElementHandle<Element>,
    options?: Readonly<ClickOptions>,
  ): Promise<void>;
  /**
   * Drags an element over the given element or point.
   *
   * @returns DEPRECATED. When drag interception is enabled, the drag payload is
   * returned.
   */
  drag(
    this: ElementHandle<Element>,
    target: Point | ElementHandle<Element>,
  ): Promise<Protocol.Input.DragData | void>;
  /**
   * @deprecated Do not use. `dragenter` will automatically be performed during dragging.
   */
  dragEnter(
    this: ElementHandle<Element>,
    data?: Protocol.Input.DragData,
  ): Promise<void>;
  /**
   * @deprecated Do not use. `dragover` will automatically be performed during dragging.
   */
  dragOver(
    this: ElementHandle<Element>,
    data?: Protocol.Input.DragData,
  ): Promise<void>;
  /**
   * Drops the given element onto the current one.
   */
  drop(
    this: ElementHandle<Element>,
    element: ElementHandle<Element>,
  ): Promise<void>;
  /**
   * @deprecated No longer supported.
   */
  drop(
    this: ElementHandle<Element>,
    data?: Protocol.Input.DragData,
  ): Promise<void>;
  /**
   * @deprecated Use `ElementHandle.drop` instead.
   */
  dragAndDrop(
    this: ElementHandle<Element>,
    target: ElementHandle<Node>,
    options?: {
      delay: number;
    },
  ): Promise<void>;
  /**
   * Triggers a `change` and `input` event once all the provided options have been
   * selected. If there's no `<select>` element matching `selector`, the method
   * throws an error.
   *
   * @example
   *
   * ```ts
   * handle.select('blue'); // single selection
   * handle.select('red', 'green', 'blue'); // multiple selections
   * ```
   *
   * @param values - Values of options to select. If the `<select>` has the
   * `multiple` attribute, all values are considered, otherwise only the first
   * one is taken into account.
   */
  select(...values: string[]): Promise<string[]>;
  /**
   * Sets the value of an
   * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input | input element}
   * to the given file paths.
   *
   * @remarks This will not validate whether the file paths exists. Also, if a
   * path is relative, then it is resolved against the
   * {@link https://nodejs.org/api/process.html#process_process_cwd | current working directory}.
   * For locals script connecting to remote chrome environments, paths must be
   * absolute.
   */
  abstract uploadFile(
    this: ElementHandle<HTMLInputElement>,
    ...paths: string[]
  ): Promise<void>;
  /**
   * This method scrolls element into view if needed, and then uses
   * {@link Touchscreen.tap} to tap in the center of the element.
   * If the element is detached from DOM, the method throws an error.
   */
  tap(this: ElementHandle<Element>): Promise<void>;
  /**
   * This method scrolls the element into view if needed, and then
   * starts a touch in the center of the element.
   * @returns A {@link TouchHandle} representing the touch that was started
   */
  touchStart(this: ElementHandle<Element>): Promise<TouchHandle>;
  /**
   * This method scrolls the element into view if needed, and then
   * moves the touch to the center of the element.
   * @param touch - An optional {@link TouchHandle}. If provided, this touch
   * will be moved. If not provided, the first active touch will be moved.
   */
  touchMove(this: ElementHandle<Element>, touch?: TouchHandle): Promise<void>;
  touchEnd(this: ElementHandle<Element>): Promise<void>;
  /**
   * Calls {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus | focus} on the element.
   */
  focus(): Promise<void>;
  /**
   * Focuses the element, and then sends a `keydown`, `keypress`/`input`, and
   * `keyup` event for each character in the text.
   *
   * To press a special key, like `Control` or `ArrowDown`,
   * use {@link ElementHandle.press}.
   *
   * @example
   *
   * ```ts
   * await elementHandle.type('Hello'); // Types instantly
   * await elementHandle.type('World', {delay: 100}); // Types slower, like a user
   * ```
   *
   * @example
   * An example of typing into a text field and then submitting the form:
   *
   * ```ts
   * const elementHandle = await page.$('input');
   * await elementHandle.type('some text');
   * await elementHandle.press('Enter');
   * ```
   *
   * @param options - Delay in milliseconds. Defaults to 0.
   */
  type(text: string, options?: Readonly<KeyboardTypeOptions>): Promise<void>;
  /**
   * Focuses the element, and then uses {@link Keyboard.down} and {@link Keyboard.up}.
   *
   * @remarks
   * If `key` is a single character and no modifier keys besides `Shift`
   * are being held down, a `keypress`/`input` event will also be generated.
   * The `text` option can be specified to force an input event to be generated.
   *
   * **NOTE** Modifier keys DO affect `elementHandle.press`. Holding down `Shift`
   * will type the text in upper case.
   *
   * @param key - Name of key to press, such as `ArrowLeft`.
   * See {@link KeyInput} for a list of all key names.
   */
  press(key: KeyInput, options?: Readonly<KeyPressOptions>): Promise<void>;
  /**
   * This method returns the bounding box of the element (relative to the main frame),
   * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
   * (example: `display: none`).
   */
  boundingBox(): Promise<BoundingBox | null>;
  /**
   * This method returns boxes of the element,
   * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
   * (example: `display: none`).
   *
   * @remarks
   *
   * Boxes are represented as an array of points;
   * Each Point is an object `{x, y}`. Box points are sorted clock-wise.
   */
  boxModel(): Promise<BoxModel | null>;
  /**
   * This method scrolls element into view if needed, and then uses
   * {@link Page.(screenshot:2) } to take a screenshot of the element.
   * If the element is detached from DOM, the method throws an error.
   */
  screenshot(
    options: Readonly<ScreenshotOptions> & {
      encoding: 'base64';
    },
  ): Promise<string>;
  screenshot(options?: Readonly<ScreenshotOptions>): Promise<Uint8Array>;
  /**
   * Resolves to true if the element is visible in the current viewport. If an
   * element is an SVG, we check if the svg owner element is in the viewport
   * instead. See https://crbug.com/963246.
   *
   * @param options - Threshold for the intersection between 0 (no intersection) and 1
   * (full intersection). Defaults to 1.
   */
  isIntersectingViewport(
    this: ElementHandle<Element>,
    options?: {
      threshold?: number;
    },
  ): Promise<boolean>;
  /**
   * Scrolls the element into view using either the automation protocol client
   * or by calling element.scrollIntoView.
   */
  scrollIntoView(this: ElementHandle<Element>): Promise<void>;
  /**
   * Creates a locator based on an ElementHandle. This would not allow
   * refreshing the element handle if it is stale but it allows re-using other
   * locator pre-conditions.
   */
  asLocator(this: ElementHandle<Element>): Locator<Element>;
  /**
   * If the element is a form input, you can use {@link ElementHandle.autofill}
   * to test if the form is compatible with the browser's autofill
   * implementation. Throws an error if the form cannot be autofilled.
   *
   * @remarks
   *
   * Currently, Puppeteer supports auto-filling credit card information only and
   * in Chrome in the new headless and headful modes only.
   *
   * ```ts
   * // Select an input on the credit card form.
   * const name = await page.waitForSelector('form #name');
   * // Trigger autofill with the desired data.
   * await name.autofill({
   *   creditCard: {
   *     number: '4444444444444444',
   *     name: 'John Smith',
   *     expiryMonth: '01',
   *     expiryYear: '2030',
   *     cvc: '123',
   *   },
   * });
   * ```
   */
  abstract autofill(data: AutofillData): Promise<void>;
  /**
   * When connected using Chrome DevTools Protocol, it returns a
   * DOM.BackendNodeId for the element.
   */
  abstract backendNodeId(): Promise<number>;
}

/**
 * @public
 */
export declare interface ElementScreenshotOptions extends ScreenshotOptions {
  /**
   * @defaultValue `true`
   */
  scrollIntoView?: boolean;
}

/**
 * @public
 */
export declare type ErrorCode =
  | 'aborted'
  | 'accessdenied'
  | 'addressunreachable'
  | 'blockedbyclient'
  | 'blockedbyresponse'
  | 'connectionaborted'
  | 'connectionclosed'
  | 'connectionfailed'
  | 'connectionrefused'
  | 'connectionreset'
  | 'internetdisconnected'
  | 'namenotresolved'
  | 'timedout'
  | 'failed';

/**
 * @public
 */
export declare type EvaluateFunc<T extends unknown[]> = (
  ...params: InnerParams<T>
) => Awaitable<unknown>;

/**
 * @public
 */
export declare type EvaluateFuncWith<V, T extends unknown[]> = (
  ...params: [V, ...InnerParams<T>]
) => Awaitable<unknown>;

/**
 * The EventEmitter class that many Puppeteer classes extend.
 *
 * @remarks
 *
 * This allows you to listen to events that Puppeteer classes fire and act
 * accordingly. Therefore you'll mostly use {@link EventEmitter.on | on} and
 * {@link EventEmitter.off | off} to bind
 * and unbind to event listeners.
 *
 * @public
 */
export declare class EventEmitter<
  Events extends Record<EventType, unknown>,
> implements CommonEventEmitter<EventsWithWildcard<Events>> {
  #private;
  /**
   * Bind an event listener to fire when an event occurs.
   * @param type - the event type you'd like to listen to. Can be a string or symbol.
   * @param handler - the function to be called when the event occurs.
   * @returns `this` to enable you to chain method calls.
   */
  on<Key extends keyof EventsWithWildcard<Events>>(
    type: Key,
    handler: Handler<EventsWithWildcard<Events>[Key]>,
  ): this;
  /**
   * Remove an event listener from firing.
   * @param type - the event type you'd like to stop listening to.
   * @param handler - the function that should be removed.
   * @returns `this` to enable you to chain method calls.
   */
  off<Key extends keyof EventsWithWildcard<Events>>(
    type: Key,
    handler?: Handler<EventsWithWildcard<Events>[Key]>,
  ): this;
  /**
   * Emit an event and call any associated listeners.
   *
   * @param type - the event you'd like to emit
   * @param eventData - any data you'd like to emit with the event
   * @returns `true` if there are any listeners, `false` if there are not.
   */
  emit<Key extends keyof EventsWithWildcard<Events>>(
    type: Key,
    event: EventsWithWildcard<Events>[Key],
  ): boolean;
  /**
   * Like `on` but the listener will only be fired once and then it will be removed.
   * @param type - the event you'd like to listen to
   * @param handler - the handler function to run when the event occurs
   * @returns `this` to enable you to chain method calls.
   */
  once<Key extends keyof EventsWithWildcard<Events>>(
    type: Key,
    handler: Handler<EventsWithWildcard<Events>[Key]>,
  ): this;
  /**
   * Gets the number of listeners for a given event.
   *
   * @param type - the event to get the listener count for
   * @returns the number of listeners bound to the given event
   */
  listenerCount(type: keyof EventsWithWildcard<Events>): number;
  /**
   * Removes all listeners. If given an event argument, it will remove only
   * listeners for that event.
   *
   * @param type - the event to remove listeners for.
   * @returns `this` to enable you to chain method calls.
   */
  removeAllListeners(type?: keyof EventsWithWildcard<Events>): this;
}

/**
 * @public
 */
export declare type EventsWithWildcard<
  Events extends Record<EventType, unknown>,
> = Events & {
  '*': Events[keyof Events];
};

/**
 * @public
 */
export declare type EventType = string | symbol;

/**
 * @public
 */
export declare const /**
   * @public
   */
  /**
   * @public
   */
  executablePath: {
    (channel: Puppeteer_2.ChromeReleaseChannel): Promise<string>;
    (options: Puppeteer_2.LaunchOptions): Promise<string>;
    (): Promise<string>;
  };

/**
 * Defines experiment options for Puppeteer.
 *
 * See individual properties for more information.
 *
 * @public
 */
export declare type ExperimentsConfiguration = Record<string, never>;

/**
 * {@link Extension} represents a browser extension installed in the browser.
 * It provides access to the extension's ID, name, and version, as well as
 * methods for interacting with the extension's background workers and pages.
 *
 * @example
 * To get all extensions installed in the browser:
 *
 * ```ts
 * const extensions = await browser.extensions();
 * for (const [id, extension] of extensions) {
 *   console.log(extension.name, id);
 * }
 * ```
 *
 * @experimental
 * @public
 */
export declare abstract class Extension {
  #private;
  /**
   * Whether the extension is enabled.
   *
   * @public
   */
  get enabled(): boolean;
  /**
   * The path in the file system where the extension is located.
   *
   * @public
   */
  get path(): string;
  /**
   * The version of the extension as specified in its manifest.
   *
   * @public
   */
  get version(): string;
  /**
   * The name of the extension as specified in its manifest.
   *
   * @public
   */
  get name(): string;
  /**
   * The unique identifier of the extension.
   *
   * @public
   */
  get id(): string;
  /**
   * Returns a list of the currently active service workers belonging
   * to the extension.
   *
   * @public
   */
  abstract workers(): Promise<WebWorker[]>;
  /**
   * Returns a list of the currently active and visible pages belonging
   * to the extension.
   *
   * @public
   */
  abstract pages(): Promise<Page[]>;
  /**
   * Triggers the default action of the extension for a specified page.
   * This typically simulates a user clicking the extension's action icon
   * in the browser toolbar, potentially opening a popup or executing an action script.
   *
   * @param page - The page to trigger the action on.
   * @public
   */
  abstract triggerAction(page: Page): Promise<void>;
}

/**
 * Experimental ExtensionTransport allows establishing a connection via
 * chrome.debugger API if Puppeteer runs in an extension. Since Chrome
 * DevTools Protocol is restricted for extensions, the transport
 * implements missing commands and events.
 *
 * @experimental
 * @public
 */
export declare class ExtensionTransport implements ConnectionTransport {
  #private;
  static connectTab(tabId: number): Promise<ExtensionTransport>;
  onmessage?: (message: string) => void;
  onclose?: () => void;
  send(message: string): void;
  close(): void;
}

/**
 * File choosers let you react to the page requesting for a file.
 *
 * @remarks
 * `FileChooser` instances are returned via the {@link Page.waitForFileChooser} method.
 *
 * In browsers, only one file chooser can be opened at a time.
 * All file choosers must be accepted or canceled. Not doing so will prevent
 * subsequent file choosers from appearing.
 *
 * @example
 *
 * ```ts
 * const [fileChooser] = await Promise.all([
 *   page.waitForFileChooser(),
 *   page.click('#upload-file-button'), // some button that triggers file selection
 * ]);
 * await fileChooser.accept(['/tmp/myfile.pdf']);
 * ```
 *
 * @public
 */
export declare class FileChooser {
  #private;
  /**
   * Whether file chooser allow for
   * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-multiple | multiple}
   * file selection.
   */
  isMultiple(): boolean;
  /**
   * Accept the file chooser request with the given file paths.
   *
   * @remarks This will not validate whether the file paths exists. Also, if a
   * path is relative, then it is resolved against the
   * {@link https://nodejs.org/api/process.html#process_process_cwd | current working directory}.
   * For locals script connecting to remote chrome environments, paths must be
   * absolute.
   */
  accept(paths: string[]): Promise<void>;
  /**
   * Closes the file chooser without selecting any files.
   */
  cancel(): Promise<void>;
}

/**
 * @public
 */
export declare interface FirefoxSettings {
  /**
   * Tells Puppeteer to not download the browser during installation.
   *
   * Can be overridden by `PUPPETEER_FIREFOX_SKIP_DOWNLOAD`.
   *
   * @defaultValue true
   */
  skipDownload?: boolean;
  /**
   * Specifies the URL prefix that is used to download the browser.
   *
   * Can be overridden by `PUPPETEER_FIREFOX_DOWNLOAD_BASE_URL`.
   *
   * @remarks
   * This must include the protocol and may even need a path prefix.
   * This must **not** include a trailing slash similar to the default.
   *
   * @defaultValue https://archive.mozilla.org/pub/firefox/releases
   */
  downloadBaseUrl?: string;
  /**
   * Specifies a certain version of the browser you'd like Puppeteer to use.
   *
   * Can be overridden by `PUPPETEER_FIREFOX_VERSION`.
   *
   * See {@link PuppeteerNode.launch | puppeteer.launch} on how executable path
   * is inferred.
   *
   * @example stable_129.0
   * @defaultValue The pinned browser version supported by the current Puppeteer
   * version.
   */
  version?: string;
}

/**
 * @public
 */
export declare type FlattenHandle<T> = T extends HandleOr<infer U> ? U : never;

/**
 * Represents a DOM frame.
 *
 * To understand frames, you can think of frames as `<iframe>` elements. Just
 * like iframes, frames can be nested, and when JavaScript is executed in a
 * frame, the JavaScript does not affect frames inside the ambient frame the
 * JavaScript executes in.
 *
 * @example
 * At any point in time, {@link Page | pages} expose their current frame
 * tree via the {@link Page.mainFrame} and {@link Frame.childFrames} methods.
 *
 * @example
 * An example of dumping frame tree:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.goto('https://www.google.com/chrome/browser/canary.html');
 * dumpFrameTree(page.mainFrame(), '');
 * await browser.close();
 *
 * function dumpFrameTree(frame, indent) {
 *   console.log(indent + frame.url());
 *   for (const child of frame.childFrames()) {
 *     dumpFrameTree(child, indent + '  ');
 *   }
 * }
 * ```
 *
 * @example
 * An example of getting text from an iframe element:
 *
 * ```ts
 * const frames = page.frames();
 * let frame = null;
 * for (const currentFrame of frames) {
 *   const frameElement = await currentFrame.frameElement();
 *   const name = await frameElement.evaluate(el => el.getAttribute('name'));
 *   if (name === 'myframe') {
 *     frame = currentFrame;
 *     break;
 *   }
 * }
 * if (frame) {
 *   const text = await frame.$eval(
 *     '.selector',
 *     element => element.textContent,
 *   );
 *   console.log(text);
 * } else {
 *   console.error('Frame with name "myframe" not found.');
 * }
 * ```
 *
 * @remarks
 * Frame lifecycles are controlled by three events that are all dispatched on
 * the parent {@link Frame.page | page}:
 *
 * - {@link PageEvent.FrameAttached}
 * - {@link PageEvent.FrameNavigated}
 * - {@link PageEvent.FrameDetached}
 *
 * @public
 */
export declare abstract class Frame extends EventEmitter<FrameEvents> {
  #private;
  /**
   * The page associated with the frame.
   */
  abstract page(): Page;
  /**
   * Navigates the frame or page to the given `url`.
   *
   * @remarks
   * Navigation to `about:blank` or navigation to the same URL with a different
   * hash will succeed and return `null`.
   *
   * :::warning
   *
   * Headless shell mode doesn't support navigation to a PDF document. See the
   * {@link https://crbug.com/761295 | upstream issue}.
   *
   * :::
   *
   * In headless shell, this method will not throw an error when any valid HTTP
   * status code is returned by the remote server, including 404 "Not Found" and
   * 500 "Internal Server Error". The status code for such responses can be
   * retrieved by calling {@link HTTPResponse.status}.
   *
   * @param url - URL to navigate the frame to. The URL should include scheme,
   * e.g. `https://`
   * @param options - Options to configure waiting behavior.
   * @returns A promise which resolves to the main resource response. In case of
   * multiple redirects, the navigation will resolve with the response of the
   * last redirect.
   * @throws If:
   *
   * - there's an SSL error (e.g. in case of self-signed certificates).
   *
   * - target URL is invalid.
   *
   * - the timeout is exceeded during navigation.
   *
   * - the remote server does not respond or is unreachable.
   *
   * - the main resource failed to load.
   *
   * - the URL is blocked by blocklist/allowlist rules.
   */
  abstract goto(
    url: string,
    options?: GoToOptions,
  ): Promise<HTTPResponse | null>;
  /**
   * Waits for the frame to navigate. It is useful for when you run code which
   * will indirectly cause the frame to navigate.
   *
   * Usage of the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/History_API | History API}
   * to change the URL is considered a navigation.
   *
   * @example
   *
   * ```ts
   * const [response] = await Promise.all([
   *   // The navigation promise resolves after navigation has finished
   *   frame.waitForNavigation(),
   *   // Clicking the link will indirectly cause a navigation
   *   frame.click('a.my-link'),
   * ]);
   * ```
   *
   * @param options - Options to configure waiting behavior.
   * @returns A promise which resolves to the main resource response.
   */
  abstract waitForNavigation(
    options?: WaitForOptions,
  ): Promise<HTTPResponse | null>;
  /**
   * @returns The frame element associated with this frame (if any).
   */
  frameElement(): Promise<HandleFor<HTMLIFrameElement> | null>;
  /**
   * Behaves identically to {@link Page.evaluateHandle} except it's run within
   * the context of this frame.
   *
   * See {@link Page.evaluateHandle} for details.
   */
  evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
  /**
   * Behaves identically to {@link Page.evaluate} except it's run within
   * the context of this frame.
   *
   * See {@link Page.evaluate} for details.
   */
  evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  /**
   * Creates a locator for the provided selector. See {@link Locator} for
   * details and supported actions.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   */
  locator<Selector extends string>(
    selector: Selector,
  ): Locator<NodeFor<Selector>>;
  /**
   * Creates a locator for the provided function. See {@link Locator} for
   * details and supported actions.
   */
  locator<Ret>(func: () => Awaitable<Ret>): Locator<Ret>;
  /**
   * Queries the frame for an element matching the given selector.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   *
   * @returns A {@link ElementHandle | element handle} to the first element
   * matching the given selector. Otherwise, `null`.
   */
  $<Selector extends string>(
    selector: Selector,
  ): Promise<ElementHandle<NodeFor<Selector>> | null>;
  /**
   * Queries the frame for all elements matching the given selector.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   *
   * @returns An array of {@link ElementHandle | element handles} that point to
   * elements matching the given selector.
   */
  $$<Selector extends string>(
    selector: Selector,
    options?: QueryOptions,
  ): Promise<Array<ElementHandle<NodeFor<Selector>>>>;
  /**
   * Runs the given function on the first element matching the given selector in
   * the frame.
   *
   * If the given function returns a promise, then this method will wait till
   * the promise resolves.
   *
   * @example
   *
   * ```ts
   * const searchValue = await frame.$eval('#search', el => el.value);
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param pageFunction - The function to be evaluated in the frame's context.
   * The first element matching the selector will be passed to the function as
   * its first argument.
   * @param args - Additional arguments to pass to `pageFunction`.
   * @returns A promise to the result of the function.
   */
  $eval<
    Selector extends string,
    Params extends unknown[],
    Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<
      NodeFor<Selector>,
      Params
    >,
  >(
    selector: Selector,
    pageFunction: string | Func,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  /**
   * Runs the given function on an array of elements matching the given selector
   * in the frame.
   *
   * If the given function returns a promise, then this method will wait till
   * the promise resolves.
   *
   * @example
   *
   * ```ts
   * const divsCounts = await frame.$$eval('div', divs => divs.length);
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param pageFunction - The function to be evaluated in the frame's context.
   * An array of elements matching the given selector will be passed to the
   * function as its first argument.
   * @param args - Additional arguments to pass to `pageFunction`.
   * @returns A promise to the result of the function.
   */
  $$eval<
    Selector extends string,
    Params extends unknown[],
    Func extends EvaluateFuncWith<Array<NodeFor<Selector>>, Params> =
      EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,
  >(
    selector: Selector,
    pageFunction: string | Func,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  /**
   * Waits for an element matching the given selector to appear in the frame.
   *
   * This method works across navigations.
   *
   * @example
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * let currentURL;
   * page
   *   .mainFrame()
   *   .waitForSelector('img')
   *   .then(() => console.log('First URL with image: ' + currentURL));
   *
   * for (currentURL of [
   *   'https://example.com',
   *   'https://google.com',
   *   'https://bbc.com',
   * ]) {
   *   await page.goto(currentURL);
   * }
   * await browser.close();
   * ```
   *
   * @param selector - The selector to query and wait for.
   * @param options - Options for customizing waiting behavior.
   * @returns An element matching the given selector.
   * @throws Throws if an element matching the given selector doesn't appear.
   */
  waitForSelector<Selector extends string>(
    selector: Selector,
    options?: WaitForSelectorOptions,
  ): Promise<ElementHandle<NodeFor<Selector>> | null>;
  /**
   * @example
   * The `waitForFunction` can be used to observe viewport size change:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * const watchDog = page
   *   .mainFrame()
   *   .waitForFunction('window.innerWidth < 100');
   * page.setViewport({width: 50, height: 50});
   * await watchDog;
   * await browser.close();
   * ```
   *
   * To pass arguments from Node.js to the predicate of `page.waitForFunction` function:
   *
   * ```ts
   * const selector = '.foo';
   * await frame.waitForFunction(
   *   selector => !!document.querySelector(selector),
   *   {}, // empty options object
   *   selector,
   * );
   * ```
   *
   * @param pageFunction - the function to evaluate in the frame context.
   * @param options - options to configure the polling method, timeout and signal.
   * @param args - arguments to pass to the `pageFunction`.
   * @returns the promise which resolve when the `pageFunction` returns a truthy value.
   */
  waitForFunction<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    options?: FrameWaitForFunctionOptions,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
  /**
   * The full HTML contents of the frame, including the DOCTYPE.
   */
  content(): Promise<string>;
  /**
   * Set the content of the frame.
   *
   * @param html - HTML markup to assign to the page.
   * @param options - Options to configure how long before timing out and at
   * what point to consider the content setting successful.
   */
  abstract setContent(
    html: string,
    options?: SetContentWaitForOptions,
  ): Promise<void>;
  /**
   * The frame's `name` attribute as specified in the tag.
   *
   * @remarks
   * If the name is empty, it returns the `id` attribute instead.
   *
   * @remarks
   * This value is calculated once when the frame is created, and will not
   * update if the attribute is changed later.
   *
   * @deprecated Use
   *
   * ```ts
   * const element = await frame.frameElement();
   * const nameOrId = await element.evaluate(frame => frame.name ?? frame.id);
   * ```
   */
  name(): string;
  /**
   * The frame's URL.
   */
  abstract url(): string;
  /**
   * The parent frame, if any. Detached and main frames return `null`.
   */
  abstract parentFrame(): Frame | null;
  /**
   * An array of child frames.
   */
  abstract childFrames(): Frame[];
  /**
   * @returns `true` if the frame has detached. `false` otherwise.
   */
  abstract get detached(): boolean;
  /**
   * Is`true` if the frame has been detached. Otherwise, `false`.
   *
   * @deprecated Use the `detached` getter.
   */
  isDetached(): boolean;
  /**
   * Adds a `<script>` tag into the page with the desired url or content.
   *
   * @param options - Options for the script.
   * @returns An {@link ElementHandle | element handle} to the injected
   * `<script>` element.
   */
  addScriptTag(
    options: FrameAddScriptTagOptions,
  ): Promise<ElementHandle<HTMLScriptElement>>;
  /**
   * Adds a `HTMLStyleElement` into the frame with the desired URL
   *
   * @returns An {@link ElementHandle | element handle} to the loaded `<style>`
   * element.
   */
  addStyleTag(
    options: Omit<FrameAddStyleTagOptions, 'url'>,
  ): Promise<ElementHandle<HTMLStyleElement>>;
  /**
   * Adds a `HTMLLinkElement` into the frame with the desired URL
   *
   * @returns An {@link ElementHandle | element handle} to the loaded `<link>`
   * element.
   */
  addStyleTag(
    options: FrameAddStyleTagOptions,
  ): Promise<ElementHandle<HTMLLinkElement>>;
  /**
   * Clicks the first element found that matches `selector`.
   *
   * @remarks
   * If `click()` triggers a navigation event and there's a separate
   * `page.waitForNavigation()` promise to be resolved, you may end up with a
   * race condition that yields unexpected results. The correct pattern for
   * click and wait for navigation is the following:
   *
   * ```ts
   * const [response] = await Promise.all([
   *   page.waitForNavigation(waitOptions),
   *   frame.click(selector, clickOptions),
   * ]);
   * ```
   *
   * @param selector - The selector to query for.
   */
  click(selector: string, options?: Readonly<ClickOptions>): Promise<void>;
  /**
   * Focuses the first element that matches the `selector`.
   *
   * @param selector - The selector to query for.
   * @throws Throws if there's no element matching `selector`.
   */
  focus(selector: string): Promise<void>;
  /**
   * Hovers the pointer over the center of the first element that matches the
   * `selector`.
   *
   * @param selector - The selector to query for.
   * @throws Throws if there's no element matching `selector`.
   */
  hover(selector: string): Promise<void>;
  /**
   * Selects a set of value on the first `<select>` element that matches the
   * `selector`.
   *
   * @example
   *
   * ```ts
   * frame.select('select#colors', 'blue'); // single selection
   * frame.select('select#colors', 'red', 'green', 'blue'); // multiple selections
   * ```
   *
   * @param selector - The selector to query for.
   * @param values - The array of values to select. If the `<select>` has the
   * `multiple` attribute, all values are considered, otherwise only the first
   * one is taken into account.
   * @returns the list of values that were successfully selected.
   * @throws Throws if there's no `<select>` matching `selector`.
   */
  select(selector: string, ...values: string[]): Promise<string[]>;
  /**
   * Taps the first element that matches the `selector`.
   *
   * @param selector - The selector to query for.
   * @throws Throws if there's no element matching `selector`.
   */
  tap(selector: string): Promise<void>;
  /**
   * Sends a `keydown`, `keypress`/`input`, and `keyup` event for each character
   * in the text.
   *
   * @remarks
   * To press a special key, like `Control` or `ArrowDown`, use
   * {@link Keyboard.press}.
   *
   * @example
   *
   * ```ts
   * await frame.type('#mytextarea', 'Hello'); // Types instantly
   * await frame.type('#mytextarea', 'World', {delay: 100}); // Types slower, like a user
   * ```
   *
   * @param selector - the selector for the element to type into. If there are
   * multiple the first will be used.
   * @param text - text to type into the element
   * @param options - takes one option, `delay`, which sets the time to wait
   * between key presses in milliseconds. Defaults to `0`.
   */
  type(
    selector: string,
    text: string,
    options?: Readonly<KeyboardTypeOptions>,
  ): Promise<void>;
  /**
   * The frame's title.
   */
  title(): Promise<string>;
  /**
   * Retrieves the list of extension execution realms associated with this frame.
   * Extension execution realms are created by extension content scripts injected
   * into the frame.
   *
   * @public
   */
  abstract extensionRealms(): Realm[];
}

/**
 * @public
 */
export declare interface FrameAddScriptTagOptions {
  /**
   * URL of the script to be added.
   */
  url?: string;
  /**
   * Path to a JavaScript file to be injected into the frame.
   *
   * @remarks
   * If `path` is a relative path, it is resolved relative to the current
   * working directory (`process.cwd()` in Node.js).
   */
  path?: string;
  /**
   * JavaScript to be injected into the frame.
   */
  content?: string;
  /**
   * Sets the `type` of the script. Use `module` in order to load an ES2015 module.
   */
  type?: string;
  /**
   * Sets the `id` of the script.
   */
  id?: string;
}

/**
 * @public
 */
export declare interface FrameAddStyleTagOptions {
  /**
   * the URL of the CSS file to be added.
   */
  url?: string;
  /**
   * The path to a CSS file to be injected into the frame.
   * @remarks
   * If `path` is a relative path, it is resolved relative to the current
   * working directory (`process.cwd()` in Node.js).
   */
  path?: string;
  /**
   * Raw CSS content to be injected into the frame.
   */
  content?: string;
}

/**
 * @public
 */
export declare interface FrameEvents extends Record<EventType, unknown> {}

/**
 * @public
 */
export declare interface FrameWaitForFunctionOptions {
  /**
   * An interval at which the `pageFunction` is executed, defaults to `raf`. If
   * `polling` is a number, then it is treated as an interval in milliseconds at
   * which the function would be executed. If `polling` is a string, then it can
   * be one of the following values:
   *
   * - `raf` - to constantly execute `pageFunction` in `requestAnimationFrame`
   *   callback. This is the tightest polling mode which is suitable to observe
   *   styling changes.
   *
   * - `mutation` - to execute `pageFunction` on every DOM mutation.
   */
  polling?: 'raf' | 'mutation' | number;
  /**
   * Maximum time to wait in milliseconds. Defaults to `30000` (30 seconds).
   * Pass `0` to disable the timeout. Puppeteer's default timeout can be changed
   * using {@link Page.setDefaultTimeout}.
   */
  timeout?: number;
  /**
   * A signal object that allows you to cancel a waitForFunction call.
   */
  signal?: AbortSignal;
}

/**
 * @public
 */
export declare interface GeolocationOptions {
  /**
   * Latitude between `-90` and `90`.
   */
  longitude: number;
  /**
   * Longitude between `-180` and `180`.
   */
  latitude: number;
  /**
   * Optional non-negative accuracy value.
   */
  accuracy?: number;
}

/**
 * @public
 */
export declare interface GoToOptions extends WaitForOptions {
  /**
   * If provided, it will take preference over the referer header value set by
   * {@link Page.setExtraHTTPHeaders | page.setExtraHTTPHeaders()}.
   */
  referer?: string;
  /**
   * If provided, it will take preference over the referer-policy header value
   * set by {@link Page.setExtraHTTPHeaders | page.setExtraHTTPHeaders()}.
   */
  referrerPolicy?: string;
}

/**
 * @public
 */
export declare type HandleFor<T> = T extends Node
  ? ElementHandle<T>
  : JSHandle<T>;

/**
 * @public
 */
export declare type HandleOr<T> = HandleFor<T> | JSHandle<T> | T;

/**
 * @public
 */
export declare type Handler<T = unknown> = (event: T) => void;

/**
 * Options for {@link Page.captureHeapSnapshot}.
 *
 * @public
 */
export declare interface HeapSnapshotOptions {
  /**
   * The file path to save the heap snapshot to.
   */
  path: string;
}

/**
 * Represents an HTTP request sent by a page.
 * @remarks
 *
 * Whenever the page sends a request, such as for a network resource, the
 * following events are emitted by Puppeteer's `page`:
 *
 * - `request`: emitted when the request is issued by the page.
 *
 * - `requestfinished` - emitted when the response body is downloaded and the
 *   request is complete.
 *
 * If request fails at some point, then instead of `requestfinished` event the
 * `requestfailed` event is emitted.
 *
 * All of these events provide an instance of `HTTPRequest` representing the
 * request that occurred:
 *
 * ```
 * page.on('request', request => ...)
 * ```
 *
 * NOTE: HTTP Error responses, such as 404 or 503, are still successful
 * responses from HTTP standpoint, so request will complete with
 * `requestfinished` event.
 *
 * If request gets a 'redirect' response, the request is successfully finished
 * with the `requestfinished` event, and a new request is issued to a
 * redirected url.
 *
 * @public
 */
export declare abstract class HTTPRequest {
  /**
   * Warning! Using this client can break Puppeteer. Use with caution.
   *
   * @experimental
   */
  abstract get client(): CDPSession;
  /**
   * The URL of the request
   */
  abstract url(): string;
  /**
   * The `ContinueRequestOverrides` that will be used
   * if the interception is allowed to continue (ie, `abort()` and
   * `respond()` aren't called).
   */
  continueRequestOverrides(): ContinueRequestOverrides;
  /**
   * The `ResponseForRequest` that gets used if the
   * interception is allowed to respond (ie, `abort()` is not called).
   */
  responseForRequest(): Partial<ResponseForRequest> | null;
  /**
   * The most recent reason for aborting the request
   */
  abortErrorReason(): Protocol.Network.ErrorReason | null;
  /**
   * An InterceptResolutionState object describing the current resolution
   * action and priority.
   *
   * InterceptResolutionState contains:
   * action: InterceptResolutionAction
   * priority?: number
   *
   * InterceptResolutionAction is one of: `abort`, `respond`, `continue`,
   * `disabled`, `none`, or `already-handled`.
   */
  interceptResolutionState(): InterceptResolutionState;
  /**
   * Is `true` if the intercept resolution has already been handled,
   * `false` otherwise.
   */
  isInterceptResolutionHandled(): boolean;
  /**
   * Adds an async request handler to the processing queue.
   * Deferred handlers are not guaranteed to execute in any particular order,
   * but they are guaranteed to resolve before the request interception
   * is finalized.
   */
  enqueueInterceptAction(
    pendingHandler: () => void | PromiseLike<unknown>,
  ): void;
  /**
   * Awaits pending interception handlers and then decides how to fulfill
   * the request interception.
   */
  finalizeInterceptions(): Promise<void>;
  /**
   * Contains the request's resource type as it was perceived by the rendering
   * engine.
   */
  abstract resourceType(): ResourceType;
  /**
   * The method used (`GET`, `POST`, etc.)
   */
  abstract method(): string;
  /**
   * @deprecated Use {@link HTTPRequest.fetchPostData}.
   */
  abstract postData(): string | undefined;
  /**
   * True when the request has POST data. Note that {@link HTTPRequest.postData}
   * might still be undefined when this flag is true when the data is too long
   * or not readily available in the decoded form. In that case, use
   * {@link HTTPRequest.fetchPostData}.
   */
  abstract hasPostData(): boolean;
  /**
   * Fetches the POST data for the request from the browser.
   */
  abstract fetchPostData(): Promise<string | undefined>;
  /**
   * An object with HTTP headers associated with the request. All
   * header names are lower-case.
   */
  abstract headers(): Record<string, string>;
  /**
   * A matching `HTTPResponse` object, or null if the response has not
   * been received yet.
   */
  abstract response(): HTTPResponse | null;
  /**
   * The frame that initiated the request, or null if navigating to
   * error pages.
   */
  abstract frame(): Frame | null;
  /**
   * True if the request is the driver of the current frame's navigation.
   */
  abstract isNavigationRequest(): boolean;
  /**
   * The initiator of the request.
   */
  abstract initiator(): Protocol.Network.Initiator | undefined;
  /**
   * A `redirectChain` is a chain of requests initiated to fetch a resource.
   * @remarks
   *
   * `redirectChain` is shared between all the requests of the same chain.
   *
   * For example, if the website `http://example.com` has a single redirect to
   * `https://example.com`, then the chain will contain one request:
   *
   * ```ts
   * const response = await page.goto('http://example.com');
   * const chain = response.request().redirectChain();
   * console.log(chain.length); // 1
   * console.log(chain[0].url()); // 'http://example.com'
   * ```
   *
   * If the website `https://google.com` has no redirects, then the chain will be empty:
   *
   * ```ts
   * const response = await page.goto('https://google.com');
   * const chain = response.request().redirectChain();
   * console.log(chain.length); // 0
   * ```
   *
   * @returns the chain of requests - if a server responds with at least a
   * single redirect, this chain will contain all requests that were redirected.
   */
  abstract redirectChain(): HTTPRequest[];
  /**
   * Access information about the request's failure.
   *
   * @remarks
   *
   * @example
   *
   * Example of logging all failed requests:
   *
   * ```ts
   * page.on('requestfailed', request => {
   *   console.log(request.url() + ' ' + request.failure().errorText);
   * });
   * ```
   *
   * @returns `null` unless the request failed. If the request fails this can
   * return an object with `errorText` containing a human-readable error
   * message, e.g. `net::ERR_FAILED`. It is not guaranteed that there will be
   * failure text if the request fails.
   */
  abstract failure(): {
    errorText: string;
  } | null;
  /**
   * Continues request with optional request overrides.
   *
   * @example
   *
   * ```ts
   * await page.setRequestInterception(true);
   * page.on('request', request => {
   *   // Override headers
   *   const headers = Object.assign({}, request.headers(), {
   *     foo: 'bar', // set "foo" header
   *     origin: undefined, // remove "origin" header
   *   });
   *   request.continue({headers});
   * });
   * ```
   *
   * @param overrides - optional overrides to apply to the request.
   * @param priority - If provided, intercept is resolved using cooperative
   * handling rules. Otherwise, intercept is resolved immediately.
   *
   * @remarks
   *
   * To use this, request interception should be enabled with
   * {@link Page.setRequestInterception}.
   *
   * Exception is immediately thrown if the request interception is not enabled.
   */
  continue(
    overrides?: ContinueRequestOverrides,
    priority?: number,
  ): Promise<void>;
  /**
   * Fulfills a request with the given response.
   *
   * @example
   * An example of fulfilling all requests with 404 responses:
   *
   * ```ts
   * await page.setRequestInterception(true);
   * page.on('request', request => {
   *   request.respond({
   *     status: 404,
   *     contentType: 'text/plain',
   *     body: 'Not Found!',
   *   });
   * });
   * ```
   *
   * NOTE: Mocking responses for dataURL requests is not supported.
   * Calling `request.respond` for a dataURL request is a noop.
   *
   * @param response - the response to fulfill the request with.
   * @param priority - If provided, intercept is resolved using
   * cooperative handling rules. Otherwise, intercept is resolved
   * immediately.
   *
   * @remarks
   *
   * To use this, request
   * interception should be enabled with {@link Page.setRequestInterception}.
   *
   * Exception is immediately thrown if the request interception is not enabled.
   */
  respond(
    response: Partial<ResponseForRequest>,
    priority?: number,
  ): Promise<void>;
  /**
   * Aborts a request.
   *
   * @param errorCode - optional error code to provide.
   * @param priority - If provided, intercept is resolved using
   * cooperative handling rules. Otherwise, intercept is resolved
   * immediately.
   *
   * @remarks
   *
   * To use this, request interception should be enabled with
   * {@link Page.setRequestInterception}. If it is not enabled, this method will
   * throw an exception immediately.
   */
  abort(errorCode?: ErrorCode, priority?: number): Promise<void>;
}

/**
 * The HTTPResponse class represents responses which are received by the
 * {@link Page} class.
 *
 * @public
 */
export declare abstract class HTTPResponse {
  /**
   * The IP address and port number used to connect to the remote
   * server.
   */
  abstract remoteAddress(): RemoteAddress;
  /**
   * The URL of the response.
   */
  abstract url(): string;
  /**
   * True if the response was successful (status in the range 200-299).
   */
  ok(): boolean;
  /**
   * The status code of the response (e.g., 200 for a success).
   */
  abstract status(): number;
  /**
   * The status text of the response (e.g. usually an "OK" for a
   * success).
   */
  abstract statusText(): string;
  /**
   * An object with HTTP headers associated with the response. All
   * header names are lower-case.
   */
  abstract headers(): Record<string, string>;
  /**
   * {@link SecurityDetails} if the response was received over the
   * secure connection, or `null` otherwise.
   */
  abstract securityDetails(): SecurityDetails | null;
  /**
   * Timing information related to the response.
   */
  abstract timing(): Protocol.Network.ResourceTiming | null;
  /**
   * Promise which resolves to a buffer with response body.
   *
   * @remarks
   *
   * The buffer might be re-encoded by the browser
   * based on HTTP-headers or other heuristics. If the browser
   * failed to detect the correct encoding, the buffer might
   * be encoded incorrectly. See
   * https://github.com/puppeteer/puppeteer/issues/6478.
   */
  abstract content(): Promise<Uint8Array>;
  /**
   * {@inheritDoc HTTPResponse.content}
   */
  buffer(): Promise<Buffer>;
  /**
   * Promise which resolves to a text (utf8) representation of response body.
   *
   * @remarks
   *
   * This method will throw if the content is not utf-8 string
   */
  text(): Promise<string>;
  /**
   * Promise which resolves to a JSON representation of response body.
   *
   * @remarks
   *
   * This method will throw if the response body is not parsable via
   * `JSON.parse`.
   */
  json(): Promise<any>;
  /**
   * A matching {@link HTTPRequest} object.
   */
  abstract request(): HTTPRequest;
  /**
   * True if the response was served from either the browser's disk
   * cache or memory cache.
   */
  abstract fromCache(): boolean;
  /**
   * True if the response was served by a service worker.
   */
  abstract fromServiceWorker(): boolean;
  /**
   * A {@link Frame} that initiated this response, or `null` if
   * navigating to error pages.
   */
  abstract frame(): Frame | null;
}

/**
 * @public
 */
export declare type ImageFormat = 'png' | 'jpeg' | 'webp';

/**
 * @public
 */
export declare type InnerParams<T extends unknown[]> = {
  [K in keyof T]: FlattenHandle<T[K]>;
};

/**
 * @public
 */
export declare enum InterceptResolutionAction {
  Abort = 'abort',
  Respond = 'respond',
  Continue = 'continue',
  Disabled = 'disabled',
  None = 'none',
  AlreadyHandled = 'already-handled',
}

/**
 * @public
 */
export declare interface InterceptResolutionState {
  action: InterceptResolutionAction;
  priority?: number;
}

/**
 * @public
 */
export declare interface InternalNetworkConditions extends NetworkConditions {
  offline: boolean;
}

/**
 * The Issue interface represents a DevTools issue.
 *
 * @public
 */
export declare interface Issue {
  /**
   * The code of the issue.
   */
  code: string;
  /**
   * The details of the issue.
   */
  details: Protocol.Audits.InspectorIssueDetails;
}

/**
 * @public
 */
export declare class JSCoverage {
  #private;
  start(options?: {
    resetOnNavigation?: boolean;
    reportAnonymousScripts?: boolean;
    includeRawScriptCoverage?: boolean;
    useBlockCoverage?: boolean;
  }): Promise<void>;
  stop(): Promise<JSCoverageEntry[]>;
}

/**
 * The CoverageEntry class for JavaScript
 * @public
 */
export declare interface JSCoverageEntry extends CoverageEntry {
  /**
   * Raw V8 script coverage entry.
   */
  rawScriptCoverage?: Protocol.Profiler.ScriptCoverage;
}

/**
 * Set of configurable options for JS coverage.
 * @public
 */
export declare interface JSCoverageOptions {
  /**
   * Whether to reset coverage on every navigation.
   */
  resetOnNavigation?: boolean;
  /**
   * Whether anonymous scripts generated by the page should be reported.
   */
  reportAnonymousScripts?: boolean;
  /**
   * Whether the result includes raw V8 script coverage entries.
   */
  includeRawScriptCoverage?: boolean;
  /**
   * Whether to collect coverage information at the block level.
   * If true, coverage will be collected at the block level (this is the default).
   * If false, coverage will be collected at the function level.
   */
  useBlockCoverage?: boolean;
}

/**
 * Represents a reference to a JavaScript object. Instances can be created using
 * {@link Page.evaluateHandle}.
 *
 * Handles prevent the referenced JavaScript object from being garbage-collected
 * unless the handle is purposely {@link JSHandle.dispose | disposed}. JSHandles
 * are auto-disposed when their associated frame is navigated away or the parent
 * context gets destroyed.
 *
 * Handles can be used as arguments for any evaluation function such as
 * {@link Page.$eval}, {@link Page.evaluate}, and {@link Page.evaluateHandle}.
 * They are resolved to their referenced object.
 *
 * @example
 *
 * ```ts
 * const windowHandle = await page.evaluateHandle(() => window);
 * ```
 *
 * @public
 */
export declare abstract class JSHandle<T = unknown> {
  move: () => this;
  /**
   * Used for nominally typing {@link JSHandle}.
   */
  _?: T;
  /**
   * Evaluates the given function with the current handle as its first argument.
   */
  evaluate<
    Params extends unknown[],
    Func extends EvaluateFuncWith<T, Params> = EvaluateFuncWith<T, Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  /**
   * Evaluates the given function with the current handle as its first argument.
   *
   */
  evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFuncWith<T, Params> = EvaluateFuncWith<T, Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
  /**
   * Fetches a single property from the referenced object.
   */
  getProperty<K extends keyof T>(
    propertyName: HandleOr<K>,
  ): Promise<HandleFor<T[K]>>;
  getProperty(propertyName: string): Promise<JSHandle<unknown>>;
  /**
   * Gets a map of handles representing the properties of the current handle.
   *
   * @example
   *
   * ```ts
   * const listHandle = await page.evaluateHandle(() => document.body.children);
   * const properties = await listHandle.getProperties();
   * const children = [];
   * for (const property of properties.values()) {
   *   const element = property.asElement();
   *   if (element) {
   *     children.push(element);
   *   }
   * }
   * children; // holds elementHandles to all children of document.body
   * ```
   */
  getProperties(): Promise<Map<string, JSHandle>>;
  /**
   * A vanilla object representing the serializable portions of the
   * referenced object.
   * @throws Throws if the object cannot be serialized due to circularity.
   *
   * @remarks
   * If the object has a `toJSON` function, it **will not** be called.
   */
  abstract jsonValue(): Promise<T>;
  /**
   * Either `null` or the handle itself if the handle is an
   * instance of {@link ElementHandle}.
   */
  abstract asElement(): ElementHandle<Node> | null;
  /**
   * Releases the object referenced by the handle for garbage collection.
   */
  abstract dispose(): Promise<void>;
  /**
   * Returns a string representation of the JSHandle.
   *
   * @remarks
   * Useful during debugging.
   */
  abstract toString(): string;
  /**
   * Provides access to the
   * {@link https://chromedevtools.github.io/devtools-protocol/tot/Runtime/#type-RemoteObject | Protocol.Runtime.RemoteObject}
   * backing this handle.
   */
  abstract remoteObject(): Protocol.Runtime.RemoteObject;
}

/**
 * Keyboard provides an api for managing a virtual keyboard.
 * The high level api is {@link Keyboard."type"},
 * which takes raw characters and generates proper keydown, keypress/input,
 * and keyup events on your page.
 *
 * @remarks
 * For finer control, you can use {@link Keyboard.down},
 * {@link Keyboard.up}, and {@link Keyboard.sendCharacter}
 * to manually fire events as if they were generated from a real keyboard.
 *
 * On macOS, keyboard shortcuts like `⌘ A` -\> Select All do not work.
 * See {@link https://github.com/puppeteer/puppeteer/issues/1313 | #1313}.
 *
 * @example
 * An example of holding down `Shift` in order to select and delete some text:
 *
 * ```ts
 * await page.keyboard.type('Hello World!');
 * await page.keyboard.press('ArrowLeft');
 *
 * await page.keyboard.down('Shift');
 * for (let i = 0; i < ' World'.length; i++)
 *   await page.keyboard.press('ArrowLeft');
 * await page.keyboard.up('Shift');
 *
 * await page.keyboard.press('Backspace');
 * // Result text will end up saying 'Hello!'
 * ```
 *
 * @example
 * An example of pressing `A`
 *
 * ```ts
 * await page.keyboard.down('Shift');
 * await page.keyboard.press('KeyA');
 * await page.keyboard.up('Shift');
 * ```
 *
 * @public
 */
export declare abstract class Keyboard {
  /**
   * Dispatches a `keydown` event.
   *
   * @remarks
   * If `key` is a single character and no modifier keys besides `Shift`
   * are being held down, a `keypress`/`input` event will also generated.
   * The `text` option can be specified to force an input event to be generated.
   * If `key` is a modifier key, `Shift`, `Meta`, `Control`, or `Alt`,
   * subsequent key presses will be sent with that modifier active.
   * To release the modifier key, use {@link Keyboard.up}.
   *
   * After the key is pressed once, subsequent calls to
   * {@link Keyboard.down} will have
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat | repeat}
   * set to true. To release the key, use {@link Keyboard.up}.
   *
   * Modifier keys DO influence {@link Keyboard.down}.
   * Holding down `Shift` will type the text in upper case.
   *
   * @param key - Name of key to press, such as `ArrowLeft`.
   * See {@link KeyInput} for a list of all key names.
   *
   * @param options - An object of options. Accepts text which, if specified,
   * generates an input event with this text. Accepts commands which, if specified,
   * is the commands of keyboard shortcuts,
   * see {@link https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h | Chromium Source Code} for valid command names.
   */
  abstract down(
    key: KeyInput,
    options?: Readonly<KeyDownOptions>,
  ): Promise<void>;
  /**
   * Dispatches a `keyup` event.
   *
   * @param key - Name of key to release, such as `ArrowLeft`.
   * See {@link KeyInput | KeyInput}
   * for a list of all key names.
   */
  abstract up(key: KeyInput): Promise<void>;
  /**
   * Dispatches a `keypress` and `input` event.
   * This does not send a `keydown` or `keyup` event.
   *
   * @remarks
   * Modifier keys DO NOT effect {@link Keyboard.sendCharacter | Keyboard.sendCharacter}.
   * Holding down `Shift` will not type the text in upper case.
   *
   * @example
   *
   * ```ts
   * page.keyboard.sendCharacter('嗨');
   * ```
   *
   * @param char - Character to send into the page.
   */
  abstract sendCharacter(char: string): Promise<void>;
  /**
   * Sends a `keydown`, `keypress`/`input`,
   * and `keyup` event for each character in the text.
   *
   * @remarks
   * To press a special key, like `Control` or `ArrowDown`,
   * use {@link Keyboard.press}.
   *
   * Modifier keys DO NOT effect `keyboard.type`.
   * Holding down `Shift` will not type the text in upper case.
   *
   * @example
   *
   * ```ts
   * await page.keyboard.type('Hello'); // Types instantly
   * await page.keyboard.type('World', {delay: 100}); // Types slower, like a user
   * ```
   *
   * @param text - A text to type into a focused element.
   * @param options - An object of options. Accepts delay which,
   * if specified, is the time to wait between `keydown` and `keyup` in milliseconds.
   * Defaults to 0.
   */
  abstract type(
    text: string,
    options?: Readonly<KeyboardTypeOptions>,
  ): Promise<void>;
  /**
   * Shortcut for {@link Keyboard.down}
   * and {@link Keyboard.up}.
   *
   * @remarks
   * If `key` is a single character and no modifier keys besides `Shift`
   * are being held down, a `keypress`/`input` event will also generated.
   * The `text` option can be specified to force an input event to be generated.
   *
   * Modifier keys DO effect {@link Keyboard.press}.
   * Holding down `Shift` will type the text in upper case.
   *
   * @param key - Name of key to press, such as `ArrowLeft`.
   * See {@link KeyInput} for a list of all key names.
   *
   * @param options - An object of options. Accepts text which, if specified,
   * generates an input event with this text. Accepts delay which,
   * if specified, is the time to wait between `keydown` and `keyup` in milliseconds.
   * Defaults to 0. Accepts commands which, if specified,
   * is the commands of keyboard shortcuts,
   * see {@link https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h | Chromium Source Code} for valid command names.
   */
  abstract press(
    key: KeyInput,
    options?: Readonly<KeyPressOptions>,
  ): Promise<void>;
}

/**
 * @public
 */
export declare interface KeyboardTypeOptions {
  delay?: number;
}

/**
 * @public
 */
export declare interface KeyDownOptions {
  /**
   * @deprecated Do not use. This is automatically handled.
   */
  text?: string;
  /**
   * @deprecated Do not use. This is automatically handled.
   */
  commands?: string[];
}

/**
 * All the valid keys that can be passed to functions that take user input, such
 * as {@link Keyboard.press | keyboard.press }
 *
 * @public
 */
export declare type KeyInput =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'Power'
  | 'Eject'
  | 'Abort'
  | 'Help'
  | 'Backspace'
  | 'Tab'
  | 'Numpad5'
  | 'NumpadEnter'
  | 'Enter'
  | '\r'
  | '\n'
  | 'ShiftLeft'
  | 'ShiftRight'
  | 'ControlLeft'
  | 'ControlRight'
  | 'AltLeft'
  | 'AltRight'
  | 'Pause'
  | 'CapsLock'
  | 'Escape'
  | 'Convert'
  | 'NonConvert'
  | 'Space'
  | 'Numpad9'
  | 'PageUp'
  | 'Numpad3'
  | 'PageDown'
  | 'End'
  | 'Numpad1'
  | 'Home'
  | 'Numpad7'
  | 'ArrowLeft'
  | 'Numpad4'
  | 'Numpad8'
  | 'ArrowUp'
  | 'ArrowRight'
  | 'Numpad6'
  | 'Numpad2'
  | 'ArrowDown'
  | 'Select'
  | 'Open'
  | 'PrintScreen'
  | 'Insert'
  | 'Numpad0'
  | 'Delete'
  | 'NumpadDecimal'
  | 'Digit0'
  | 'Digit1'
  | 'Digit2'
  | 'Digit3'
  | 'Digit4'
  | 'Digit5'
  | 'Digit6'
  | 'Digit7'
  | 'Digit8'
  | 'Digit9'
  | 'KeyA'
  | 'KeyB'
  | 'KeyC'
  | 'KeyD'
  | 'KeyE'
  | 'KeyF'
  | 'KeyG'
  | 'KeyH'
  | 'KeyI'
  | 'KeyJ'
  | 'KeyK'
  | 'KeyL'
  | 'KeyM'
  | 'KeyN'
  | 'KeyO'
  | 'KeyP'
  | 'KeyQ'
  | 'KeyR'
  | 'KeyS'
  | 'KeyT'
  | 'KeyU'
  | 'KeyV'
  | 'KeyW'
  | 'KeyX'
  | 'KeyY'
  | 'KeyZ'
  | 'MetaLeft'
  | 'MetaRight'
  | 'ContextMenu'
  | 'NumpadMultiply'
  | 'NumpadAdd'
  | 'NumpadSubtract'
  | 'NumpadDivide'
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | 'F13'
  | 'F14'
  | 'F15'
  | 'F16'
  | 'F17'
  | 'F18'
  | 'F19'
  | 'F20'
  | 'F21'
  | 'F22'
  | 'F23'
  | 'F24'
  | 'NumLock'
  | 'ScrollLock'
  | 'AudioVolumeMute'
  | 'AudioVolumeDown'
  | 'AudioVolumeUp'
  | 'MediaTrackNext'
  | 'MediaTrackPrevious'
  | 'MediaStop'
  | 'MediaPlayPause'
  | 'Semicolon'
  | 'Equal'
  | 'NumpadEqual'
  | 'Comma'
  | 'Minus'
  | 'Period'
  | 'Slash'
  | 'Backquote'
  | 'BracketLeft'
  | 'Backslash'
  | 'BracketRight'
  | 'Quote'
  | 'AltGraph'
  | 'Props'
  | 'Cancel'
  | 'Clear'
  | 'Shift'
  | 'Control'
  | 'Alt'
  | 'Accept'
  | 'ModeChange'
  | ' '
  | 'Print'
  | 'Execute'
  | '\u0000'
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
  | 'Meta'
  | '*'
  | '+'
  | '-'
  | '/'
  | ';'
  | '='
  | ','
  | '.'
  | '`'
  | '['
  | '\\'
  | ']'
  | "'"
  | 'Attn'
  | 'CrSel'
  | 'ExSel'
  | 'EraseEof'
  | 'Play'
  | 'ZoomOut'
  | ')'
  | '!'
  | '@'
  | '#'
  | '$'
  | '%'
  | '^'
  | '&'
  | '('
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  | ':'
  | '<'
  | '_'
  | '>'
  | '?'
  | '~'
  | '{'
  | '|'
  | '}'
  | '"'
  | 'SoftLeft'
  | 'SoftRight'
  | 'Camera'
  | 'Call'
  | 'EndCall'
  | 'VolumeDown'
  | 'VolumeUp';

/**
 * @public
 */
export declare type KeyPressOptions = KeyDownOptions & KeyboardTypeOptions;

/**
 * A list of devices to be used with {@link Page.emulate}.
 *
 * @example
 *
 * ```ts
 * import {KnownDevices} from 'puppeteer';
 * const iPhone = KnownDevices['iPhone 15 Pro'];
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.emulate(iPhone);
 * await page.goto('https://www.google.com');
 * // other actions...
 * await browser.close();
 * ```
 *
 * @public
 */
export declare const KnownDevices: Readonly<
  Record<
    | 'Blackberry PlayBook'
    | 'Blackberry PlayBook landscape'
    | 'BlackBerry Z30'
    | 'BlackBerry Z30 landscape'
    | 'Galaxy Note 3'
    | 'Galaxy Note 3 landscape'
    | 'Galaxy Note II'
    | 'Galaxy Note II landscape'
    | 'Galaxy S III'
    | 'Galaxy S III landscape'
    | 'Galaxy S5'
    | 'Galaxy S5 landscape'
    | 'Galaxy S8'
    | 'Galaxy S8 landscape'
    | 'Galaxy S9+'
    | 'Galaxy S9+ landscape'
    | 'Galaxy Tab S4'
    | 'Galaxy Tab S4 landscape'
    | 'iPad'
    | 'iPad landscape'
    | 'iPad (gen 6)'
    | 'iPad (gen 6) landscape'
    | 'iPad (gen 7)'
    | 'iPad (gen 7) landscape'
    | 'iPad Mini'
    | 'iPad Mini landscape'
    | 'iPad Pro'
    | 'iPad Pro landscape'
    | 'iPad Pro 11'
    | 'iPad Pro 11 landscape'
    | 'iPhone 4'
    | 'iPhone 4 landscape'
    | 'iPhone 5'
    | 'iPhone 5 landscape'
    | 'iPhone 6'
    | 'iPhone 6 landscape'
    | 'iPhone 6 Plus'
    | 'iPhone 6 Plus landscape'
    | 'iPhone 7'
    | 'iPhone 7 landscape'
    | 'iPhone 7 Plus'
    | 'iPhone 7 Plus landscape'
    | 'iPhone 8'
    | 'iPhone 8 landscape'
    | 'iPhone 8 Plus'
    | 'iPhone 8 Plus landscape'
    | 'iPhone SE'
    | 'iPhone SE landscape'
    | 'iPhone X'
    | 'iPhone X landscape'
    | 'iPhone XR'
    | 'iPhone XR landscape'
    | 'iPhone 11'
    | 'iPhone 11 landscape'
    | 'iPhone 11 Pro'
    | 'iPhone 11 Pro landscape'
    | 'iPhone 11 Pro Max'
    | 'iPhone 11 Pro Max landscape'
    | 'iPhone 12'
    | 'iPhone 12 landscape'
    | 'iPhone 12 Pro'
    | 'iPhone 12 Pro landscape'
    | 'iPhone 12 Pro Max'
    | 'iPhone 12 Pro Max landscape'
    | 'iPhone 12 Mini'
    | 'iPhone 12 Mini landscape'
    | 'iPhone 13'
    | 'iPhone 13 landscape'
    | 'iPhone 13 Pro'
    | 'iPhone 13 Pro landscape'
    | 'iPhone 13 Pro Max'
    | 'iPhone 13 Pro Max landscape'
    | 'iPhone 13 Mini'
    | 'iPhone 13 Mini landscape'
    | 'iPhone 14'
    | 'iPhone 14 landscape'
    | 'iPhone 14 Plus'
    | 'iPhone 14 Plus landscape'
    | 'iPhone 14 Pro'
    | 'iPhone 14 Pro landscape'
    | 'iPhone 14 Pro Max'
    | 'iPhone 14 Pro Max landscape'
    | 'iPhone 15'
    | 'iPhone 15 landscape'
    | 'iPhone 15 Plus'
    | 'iPhone 15 Plus landscape'
    | 'iPhone 15 Pro'
    | 'iPhone 15 Pro landscape'
    | 'iPhone 15 Pro Max'
    | 'iPhone 15 Pro Max landscape'
    | 'JioPhone 2'
    | 'JioPhone 2 landscape'
    | 'Kindle Fire HDX'
    | 'Kindle Fire HDX landscape'
    | 'LG Optimus L70'
    | 'LG Optimus L70 landscape'
    | 'Microsoft Lumia 550'
    | 'Microsoft Lumia 950'
    | 'Microsoft Lumia 950 landscape'
    | 'Nexus 10'
    | 'Nexus 10 landscape'
    | 'Nexus 4'
    | 'Nexus 4 landscape'
    | 'Nexus 5'
    | 'Nexus 5 landscape'
    | 'Nexus 5X'
    | 'Nexus 5X landscape'
    | 'Nexus 6'
    | 'Nexus 6 landscape'
    | 'Nexus 6P'
    | 'Nexus 6P landscape'
    | 'Nexus 7'
    | 'Nexus 7 landscape'
    | 'Nokia Lumia 520'
    | 'Nokia Lumia 520 landscape'
    | 'Nokia N9'
    | 'Nokia N9 landscape'
    | 'Pixel 2'
    | 'Pixel 2 landscape'
    | 'Pixel 2 XL'
    | 'Pixel 2 XL landscape'
    | 'Pixel 3'
    | 'Pixel 3 landscape'
    | 'Pixel 4'
    | 'Pixel 4 landscape'
    | 'Pixel 4a (5G)'
    | 'Pixel 4a (5G) landscape'
    | 'Pixel 5'
    | 'Pixel 5 landscape'
    | 'Moto G4'
    | 'Moto G4 landscape',
    Device
  >
>;

/**
 * @public
 */
export declare const /**
   * @public
   */
  /**
   * @public
   */
  launch: (options?: Puppeteer_2.LaunchOptions) => Promise<Puppeteer_2.Browser>;

/**
 * Generic launch options that can be passed when launching any browser.
 * @public
 */
export declare interface LaunchOptions extends ConnectOptions {
  /**
   * If specified for Chrome, looks for a regular Chrome installation at a known
   * system location instead of using the bundled Chrome binary.
   */
  channel?: ChromeReleaseChannel;
  /**
   * Path to a browser executable to use instead of the bundled browser. Note
   * that Puppeteer is only guaranteed to work with the bundled browser, so use
   * this setting at your own risk.
   *
   * @remarks
   * When using this is recommended to set the `browser` property as well
   * as Puppeteer will default to `chrome` by default.
   */
  executablePath?: string;
  /**
   * If `true`, do not use `puppeteer.defaultArgs()` when creating a browser. If
   * an array is provided, these args will be filtered out. Use this with care -
   * you probably want the default arguments Puppeteer uses.
   * @defaultValue `false`
   */
  ignoreDefaultArgs?: boolean | string[];
  /**
   * If `true`, avoids passing default arguments to the browser that would
   * prevent extensions from being enabled. Passing a list of strings will
   * load the provided paths as unpacked extensions.
   */
  enableExtensions?: boolean | string[];
  /**
   * Close the browser process on `Ctrl+C`.
   * @defaultValue `true`
   */
  handleSIGINT?: boolean;
  /**
   * Close the browser process on `SIGTERM`.
   * @defaultValue `true`
   */
  handleSIGTERM?: boolean;
  /**
   * Close the browser process on `SIGHUP`.
   * @defaultValue `true`
   */
  handleSIGHUP?: boolean;
  /**
   * Maximum time in milliseconds to wait for the browser to start.
   * Pass `0` to disable the timeout.
   * @defaultValue `30_000` (30 seconds).
   */
  timeout?: number;
  /**
   * If true, pipes the browser process stdout and stderr to `process.stdout`
   * and `process.stderr`.
   * @defaultValue `false`
   */
  dumpio?: boolean;
  /**
   * Specify environment variables that will be visible to the browser.
   * @defaultValue The contents of `process.env`.
   */
  env?: Record<string, string | undefined>;
  /**
   * Connect to a browser over a pipe instead of a WebSocket. Only supported
   * with Chrome.
   *
   * @defaultValue `false`
   */
  pipe?: boolean;
  /**
   * Which browser to launch.
   * @defaultValue `chrome`
   */
  browser?: SupportedBrowser;
  /**
   * {@link https://searchfox.org/mozilla-release/source/modules/libpref/init/all.js | Additional preferences } that can be passed when launching with Firefox.
   */
  extraPrefsFirefox?: Record<string, unknown>;
  /**
   * Whether to wait for the initial page to be ready.
   * Useful when a user explicitly disables that (e.g. `--no-startup-window` for Chrome).
   * @defaultValue `true`
   */
  waitForInitialPage?: boolean;
  /**
   * Whether to run the browser in headless mode.
   *
   * @remarks
   *
   * - `true` launches the browser in the
   *   {@link https://developer.chrome.com/articles/new-headless/ | new headless}
   *   mode.
   *
   * - `'shell'` launches
   *   {@link https://developer.chrome.com/blog/chrome-headless-shell | shell}
   *   known as the old headless mode.
   *
   * @defaultValue `true`
   */
  headless?: boolean | 'shell';
  /**
   * Path to a user data directory.
   * {@link https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/user_data_dir.md | see the Chromium docs}
   * for more info.
   */
  userDataDir?: string;
  /**
   * Whether to auto-open a DevTools panel for each tab. If this is set to
   * `true`, then `headless` will be forced to `false`.
   * @defaultValue `false`
   */
  devtools?: boolean;
  /**
   * Specify the debugging port number to use
   */
  debuggingPort?: number;
  /**
   * Additional command line arguments to pass to the browser instance.
   */
  args?: string[];
  /**
   * If provided, the browser will be closed when the signal is aborted.
   */
  signal?: AbortSignal;
}

/**
 * Locators describe a strategy of locating objects and performing an action on
 * them. If the action fails because the object is not ready for the action, the
 * whole operation is retried. Various preconditions for a successful action are
 * checked automatically.
 *
 * See {@link https://pptr.dev/guides/page-interactions#locators} for details.
 *
 * @public
 */
export declare abstract class Locator<T> extends EventEmitter<LocatorEvents> {
  #private;
  /**
   * Creates a race between multiple locators trying to locate elements in
   * parallel but ensures that only a single element receives the action.
   *
   * @public
   */
  static race<Locators extends readonly unknown[] | []>(
    locators: Locators,
  ): Locator<AwaitedLocator<Locators[number]>>;
  /**
   * Used for nominally typing {@link Locator}.
   */
  _?: T;
  get timeout(): number;
  /**
   * Creates a new locator instance by cloning the current locator and setting
   * the total timeout for the locator actions.
   *
   * Pass `0` to disable timeout.
   *
   * @defaultValue `Page.getDefaultTimeout()`
   */
  setTimeout(timeout: number): Locator<T>;
  /**
   * Creates a new locator instance by cloning the current locator with the
   * visibility property changed to the specified value.
   */
  setVisibility<NodeType extends Node>(
    this: Locator<NodeType>,
    visibility: VisibilityOption,
  ): Locator<NodeType>;
  /**
   * Creates a new locator instance by cloning the current locator and
   * specifying whether to wait for input elements to become enabled before the
   * action. Applicable to `click` and `fill` actions.
   *
   * @defaultValue `true`
   */
  setWaitForEnabled<NodeType extends Node>(
    this: Locator<NodeType>,
    value: boolean,
  ): Locator<NodeType>;
  /**
   * Creates a new locator instance by cloning the current locator and
   * specifying whether the locator should scroll the element into viewport if
   * it is not in the viewport already.
   *
   * @defaultValue `true`
   */
  setEnsureElementIsInTheViewport<ElementType extends Element>(
    this: Locator<ElementType>,
    value: boolean,
  ): Locator<ElementType>;
  /**
   * Creates a new locator instance by cloning the current locator and
   * specifying whether the locator has to wait for the element's bounding box
   * to be same between two consecutive animation frames.
   *
   * @defaultValue `true`
   */
  setWaitForStableBoundingBox<ElementType extends Element>(
    this: Locator<ElementType>,
    value: boolean,
  ): Locator<ElementType>;
  /**
   * Clones the locator.
   */
  clone(): Locator<T>;
  /**
   * Waits for the locator to get a handle from the page.
   *
   * @public
   */
  waitHandle(options?: Readonly<ActionOptions>): Promise<HandleFor<T>>;
  /**
   * Waits for the locator to get the serialized value from the page.
   *
   * Note this requires the value to be JSON-serializable.
   *
   * @public
   */
  wait(options?: Readonly<ActionOptions>): Promise<T>;
  /**
   * Maps the locator using the provided mapper.
   *
   * @public
   */
  map<To>(mapper: Mapper<T, To>): Locator<To>;
  /**
   * Creates an expectation that is evaluated against located values.
   *
   * If the expectations do not match, then the locator will retry.
   *
   * @public
   */
  filter<S extends T>(predicate: Predicate<T, S>): Locator<S>;
  /**
   * Clicks the located element.
   */
  click<ElementType extends Element>(
    this: Locator<ElementType>,
    options?: Readonly<LocatorClickOptions>,
  ): Promise<void>;
  /**
   * Fills out the input identified by the locator using the provided value. The
   * type of the input is determined at runtime and the appropriate fill-out
   * method is chosen based on the type. `contenteditable`, select, textarea and
   * input elements are supported. For checkboxes, radio buttons and switches
   * specify a boolean value.
   */
  fill<ElementType extends Element>(
    this: Locator<ElementType>,
    value: string | boolean,
    options?: Readonly<LocatorFillOptions>,
  ): Promise<void>;
  /**
   * Hovers over the located element.
   */
  hover<ElementType extends Element>(
    this: Locator<ElementType>,
    options?: Readonly<ActionOptions>,
  ): Promise<void>;
  /**
   * Scrolls the located element.
   */
  scroll<ElementType extends Element>(
    this: Locator<ElementType>,
    options?: Readonly<LocatorScrollOptions>,
  ): Promise<void>;
}

/**
 * @public
 */
export declare type LocatorClickOptions = ClickOptions & ActionOptions;

/**
 * All the events that a locator instance may emit.
 *
 * @public
 */
export declare enum LocatorEvent {
  /**
   * Emitted every time before the locator performs an action on the located element(s).
   */
  Action = 'action',
}

/**
 * @public
 */
export declare interface LocatorEvents extends Record<EventType, unknown> {
  [LocatorEvent.Action]: undefined;
}

/**
 * @public
 */
export declare interface LocatorFillOptions extends ActionOptions {
  /**
   * The number of characters to type before switching to a faster fill-out
   * method.
   *
   * @defaultValue `100`
   */
  typingThreshold?: number;
}

/**
 * @public
 */
export declare interface LocatorScrollOptions extends ActionOptions {
  scrollTop?: number;
  scrollLeft?: number;
}

/**
 * @public
 */
export declare type LowerCasePaperFormat =
  | 'letter'
  | 'legal'
  | 'tabloid'
  | 'ledger'
  | 'a0'
  | 'a1'
  | 'a2'
  | 'a3'
  | 'a4'
  | 'a5'
  | 'a6';

/**
 * @public
 */
export declare type Mapper<From, To> = (value: From) => Awaitable<To>;

/**
 * A media feature to emulate.
 *
 * @public
 */
export declare interface MediaFeature {
  /**
   * A name of the feature, for example, 'prefers-reduced-motion'.
   */
  name: string;
  /**
   * A value for the feature, for example, 'reduce'.
   */
  value: string;
}

/**
 * @public
 */
export declare interface Metrics {
  Timestamp?: number;
  Documents?: number;
  Frames?: number;
  JSEventListeners?: number;
  Nodes?: number;
  LayoutCount?: number;
  RecalcStyleCount?: number;
  LayoutDuration?: number;
  RecalcStyleDuration?: number;
  ScriptDuration?: number;
  TaskDuration?: number;
  JSHeapUsedSize?: number;
  JSHeapTotalSize?: number;
}

/**
 * The Mouse class operates in main-frame CSS pixels
 * relative to the top-left corner of the viewport.
 *
 * @remarks
 * Every `page` object has its own Mouse, accessible with {@link Page.mouse}.
 *
 * @example
 *
 * ```ts
 * // Using ‘page.mouse’ to trace a 100x100 square.
 * await page.mouse.move(0, 0);
 * await page.mouse.down();
 * await page.mouse.move(0, 100);
 * await page.mouse.move(100, 100);
 * await page.mouse.move(100, 0);
 * await page.mouse.move(0, 0);
 * await page.mouse.up();
 * ```
 *
 * **Note**: The mouse events trigger synthetic `MouseEvent`s.
 * This means that it does not fully replicate the functionality of what a normal user
 * would be able to do with their mouse.
 *
 * For example, dragging and selecting text is not possible using `page.mouse`.
 * Instead, you can use the {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection | `DocumentOrShadowRoot.getSelection()`} functionality implemented in the platform.
 *
 * @example
 * For example, if you want to select all content between nodes:
 *
 * ```ts
 * await page.evaluate(
 *   (from, to) => {
 *     const selection = from.getRootNode().getSelection();
 *     const range = document.createRange();
 *     range.setStartBefore(from);
 *     range.setEndAfter(to);
 *     selection.removeAllRanges();
 *     selection.addRange(range);
 *   },
 *   fromJSHandle,
 *   toJSHandle,
 * );
 * ```
 *
 * If you then would want to copy-paste your selection, you can use the clipboard api:
 *
 * ```ts
 * // The clipboard api does not allow you to copy, unless the tab is focused.
 * await page.bringToFront();
 * await page.evaluate(() => {
 *   // Copy the selected content to the clipboard
 *   document.execCommand('copy');
 *   // Obtain the content of the clipboard as a string
 *   return navigator.clipboard.readText();
 * });
 * ```
 *
 * **Note**: If you want access to the clipboard API,
 * you have to give it permission to do so:
 *
 * ```ts
 * await browser
 *   .defaultBrowserContext()
 *   .overridePermissions('<your origin>', [
 *     'clipboard-read',
 *     'clipboard-write',
 *   ]);
 * ```
 *
 * @public
 */
export declare abstract class Mouse {
  /**
   * Resets the mouse to the default state: No buttons pressed; position at
   * (0,0).
   */
  abstract reset(): Promise<void>;
  /**
   * Moves the mouse to the given coordinate.
   *
   * @param x - Horizontal position of the mouse.
   * @param y - Vertical position of the mouse.
   * @param options - Options to configure behavior.
   */
  abstract move(
    x: number,
    y: number,
    options?: Readonly<MouseMoveOptions>,
  ): Promise<void>;
  /**
   * Presses the mouse.
   *
   * @param options - Options to configure behavior.
   */
  abstract down(options?: Readonly<MouseOptions>): Promise<void>;
  /**
   * Releases the mouse.
   *
   * @param options - Options to configure behavior.
   */
  abstract up(options?: Readonly<MouseOptions>): Promise<void>;
  /**
   * Shortcut for `mouse.move`, `mouse.down` and `mouse.up`.
   *
   * @param x - Horizontal position of the mouse.
   * @param y - Vertical position of the mouse.
   * @param options - Options to configure behavior.
   */
  abstract click(
    x: number,
    y: number,
    options?: Readonly<MouseClickOptions>,
  ): Promise<void>;
  /**
   * Dispatches a `mousewheel` event.
   * @param options - Optional: `MouseWheelOptions`.
   *
   * @example
   * An example of zooming into an element:
   *
   * ```ts
   * await page.goto(
   *   'https://mdn.mozillademos.org/en-US/docs/Web/API/Element/wheel_event$samples/Scaling_an_element_via_the_wheel?revision=1587366',
   * );
   *
   * const elem = await page.$('div');
   * const boundingBox = await elem.boundingBox();
   * await page.mouse.move(
   *   boundingBox.x + boundingBox.width / 2,
   *   boundingBox.y + boundingBox.height / 2,
   * );
   *
   * await page.mouse.wheel({deltaY: -100});
   * ```
   */
  abstract wheel(options?: Readonly<MouseWheelOptions>): Promise<void>;
  /**
   * Dispatches a `drag` event.
   * @param start - starting point for drag
   * @param target - point to drag to
   */
  abstract drag(start: Point, target: Point): Promise<Protocol.Input.DragData>;
  /**
   * Dispatches a `dragenter` event.
   * @param target - point for emitting `dragenter` event
   * @param data - drag data containing items and operations mask
   */
  abstract dragEnter(
    target: Point,
    data: Protocol.Input.DragData,
  ): Promise<void>;
  /**
   * Dispatches a `dragover` event.
   * @param target - point for emitting `dragover` event
   * @param data - drag data containing items and operations mask
   */
  abstract dragOver(
    target: Point,
    data: Protocol.Input.DragData,
  ): Promise<void>;
  /**
   * Performs a dragenter, dragover, and drop in sequence.
   * @param target - point to drop on
   * @param data - drag data containing items and operations mask
   */
  abstract drop(target: Point, data: Protocol.Input.DragData): Promise<void>;
  /**
   * Performs a drag, dragenter, dragover, and drop in sequence.
   * @param start - point to drag from
   * @param target - point to drop on
   * @param options - An object of options. Accepts delay which,
   * if specified, is the time to wait between `dragover` and `drop` in milliseconds.
   * Defaults to 0.
   */
  abstract dragAndDrop(
    start: Point,
    target: Point,
    options?: {
      delay?: number;
    },
  ): Promise<void>;
}

/**
 * Enum of valid mouse buttons.
 *
 * @public
 */
export declare const MouseButton: Readonly<{
  Left: 'left';
  Right: 'right';
  Middle: 'middle';
  Back: 'back';
  Forward: 'forward';
}>;

/**
 * @public
 */
export declare type MouseButton =
  (typeof MouseButton)[keyof typeof MouseButton];

/**
 * @public
 */
export declare interface MouseClickOptions extends MouseOptions {
  /**
   * Time (in ms) to delay the mouse release after the mouse press.
   */
  delay?: number;
  /**
   * Number of clicks to perform.
   *
   * @defaultValue `1`
   */
  count?: number;
}

/**
 * @public
 */
export declare interface MouseMoveOptions {
  /**
   * Determines the number of movements to make from the current mouse position
   * to the new one.
   *
   * @defaultValue `1`
   */
  steps?: number;
}

/**
 * @public
 */
export declare interface MouseOptions {
  /**
   * Determines which button will be pressed.
   *
   * @defaultValue `'left'`
   */
  button?: MouseButton;
}

/**
 * @public
 */
export declare interface MouseWheelOptions {
  deltaX?: number;
  deltaY?: number;
}

/**
 * @public
 */
export declare interface Moveable {
  /**
   * Moves the resource when 'using'.
   */
  move(): this;
}

/**
 * @public
 */
export declare interface NetworkConditions {
  /**
   * Emulates the offline mode.
   *
   * @remarks
   *
   * Shortcut for {@link Page.setOfflineMode}.
   */
  offline?: boolean;
  /**
   * Download speed (bytes/s)
   */
  download: number;
  /**
   * Upload speed (bytes/s)
   */
  upload: number;
  /**
   * Latency (ms)
   */
  latency: number;
}

/**
 * @public
 */
export declare interface NewDocumentScriptEvaluation {
  identifier: string;
}

/**
 * @public
 */
export declare type NodeFor<ComplexSelector extends string> =
  ParseSelector<ComplexSelector>;

/**
 * @public
 */
export declare interface Offset {
  /**
   * x-offset for the clickable point relative to the top-left corner of the border box.
   */
  x: number;
  /**
   * y-offset for the clickable point relative to the top-left corner of the border box.
   */
  y: number;
}

/**
 * Page provides methods to interact with a single tab or
 * {@link https://developer.chrome.com/extensions/background_pages | extension background page}
 * in the browser.
 *
 * :::note
 *
 * One Browser instance might have multiple Page instances.
 *
 * :::
 *
 * @example
 * This example creates a page, navigates it to a URL, and then saves a screenshot:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.goto('https://example.com');
 * await page.screenshot({path: 'screenshot.png'});
 * await browser.close();
 * ```
 *
 * The Page class extends from Puppeteer's {@link EventEmitter} class and will
 * emit various events which are documented in the {@link PageEvent} enum.
 *
 * @example
 * This example logs a message for a single page `load` event:
 *
 * ```ts
 * page.once('load', () => console.log('Page loaded!'));
 * ```
 *
 * To unsubscribe from events use the {@link EventEmitter.off} method:
 *
 * ```ts
 * function logRequest(interceptedRequest) {
 *   console.log('A request was made:', interceptedRequest.url());
 * }
 * page.on('request', logRequest);
 * // Sometime later...
 * page.off('request', logRequest);
 * ```
 *
 * @public
 */
export declare abstract class Page extends EventEmitter<PageEvents> {
  #private;
  /**
   * `true` if the service worker are being bypassed, `false` otherwise.
   */
  abstract isServiceWorkerBypassed(): boolean;
  /**
   * `true` if drag events are being intercepted, `false` otherwise.
   *
   * @deprecated We no longer support intercepting drag payloads. Use the new
   * drag APIs found on {@link ElementHandle} to drag (or just use the
   * {@link Page.mouse}).
   */
  abstract isDragInterceptionEnabled(): boolean;
  /**
   * `true` if the page has JavaScript enabled, `false` otherwise.
   */
  abstract isJavaScriptEnabled(): boolean;
  /**
   * This method is typically coupled with an action that triggers file
   * choosing.
   *
   * :::caution
   *
   * This must be called before the file chooser is launched. It will not return
   * a currently active file chooser.
   *
   * :::
   *
   * :::caution
   *
   * Interception of file dialogs triggered via DOM APIs such as
   * window.showOpenFilePicker is currently not supported.
   *
   * :::
   *
   * @remarks
   * In the "headful" browser, this method results in the native file picker
   * dialog `not showing up` for the user.
   *
   * @example
   * The following example clicks a button that issues a file chooser
   * and then responds with `/tmp/myfile.pdf` as if a user has selected this file.
   *
   * ```ts
   * const [fileChooser] = await Promise.all([
   *   page.waitForFileChooser(),
   *   page.click('#upload-file-button'),
   *   // some button that triggers file selection
   * ]);
   * await fileChooser.accept(['/tmp/myfile.pdf']);
   * ```
   */
  abstract waitForFileChooser(
    options?: WaitTimeoutOptions,
  ): Promise<FileChooser>;
  /**
   * Sets the page's geolocation.
   *
   * @remarks
   * Consider using {@link BrowserContext.overridePermissions} to grant
   * permissions for the page to read its geolocation.
   *
   * @example
   *
   * ```ts
   * await page.setGeolocation({latitude: 59.95, longitude: 30.31667});
   * ```
   */
  abstract setGeolocation(options: GeolocationOptions): Promise<void>;
  /**
   * A target this page was created from.
   *
   * @deprecated Use {@link Page.createCDPSession} directly.
   */
  abstract target(): Target;
  /**
   * Get the browser the page belongs to.
   */
  abstract browser(): Browser;
  /**
   * Get the browser context that the page belongs to.
   */
  abstract browserContext(): BrowserContext;
  /**
   * The page's main frame.
   */
  abstract mainFrame(): Frame;
  /**
   * Creates a Chrome Devtools Protocol session attached to the page.
   */
  abstract createCDPSession(): Promise<CDPSession>;
  /**
   * {@inheritDoc Keyboard}
   */
  abstract get keyboard(): Keyboard;
  /**
   * {@inheritDoc Touchscreen}
   */
  abstract get touchscreen(): Touchscreen;
  /**
   * {@inheritDoc Coverage}
   */
  abstract get coverage(): Coverage;
  /**
   * {@inheritDoc Tracing}
   */
  abstract get tracing(): Tracing;
  /**
   * Experimental API for {@link https://github.com/webmachinelearning/webmcp
   * | WebMCP}. Requires Chrome 149+ with the
   * `--enable-features=WebMCPTesting,DevToolsWebMCPSupport` flags enabled.
   *
   * @experimental
   */
  abstract get webmcp(): WebMCP;
  /**
   * {@inheritDoc Accessibility}
   */
  get accessibility(): Accessibility;
  /**
   * An array of all frames attached to the page.
   */
  abstract frames(): Frame[];
  /**
   * All of the dedicated {@link
   * https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API |
   * WebWorkers} associated with the page.
   *
   * @remarks
   * This does not contain ServiceWorkers
   */
  abstract workers(): WebWorker[];
  /**
   * Activating request interception enables {@link HTTPRequest.abort},
   * {@link HTTPRequest.continue} and {@link HTTPRequest.respond} methods. This
   * provides the capability to modify network requests that are made by a page.
   *
   * Once request interception is enabled, every request will stall unless it's
   * continued, responded or aborted; or completed using the browser cache.
   *
   * See the
   * {@link https://pptr.dev/guides/network-interception|Request interception guide}
   * for more details.
   *
   * @example
   * An example of a naïve request interceptor that aborts all image requests:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.setRequestInterception(true);
   * page.on('request', interceptedRequest => {
   *   if (
   *     interceptedRequest.url().endsWith('.png') ||
   *     interceptedRequest.url().endsWith('.jpg')
   *   )
   *     interceptedRequest.abort();
   *   else interceptedRequest.continue();
   * });
   * await page.goto('https://example.com');
   * await browser.close();
   * ```
   *
   * @param value - Whether to enable request interception.
   */
  abstract setRequestInterception(value: boolean): Promise<void>;
  /**
   * Toggles ignoring of service worker for each request.
   *
   * @param bypass - Whether to bypass service worker and load from network.
   */
  abstract setBypassServiceWorker(bypass: boolean): Promise<void>;
  /**
   * @param enabled - Whether to enable drag interception.
   *
   * @deprecated We no longer support intercepting drag payloads. Use the new
   * drag APIs found on {@link ElementHandle} to drag (or just use the
   * {@link Page.mouse}).
   */
  abstract setDragInterception(enabled: boolean): Promise<void>;
  /**
   * Emulates the offline mode.
   *
   * It does not change the download/upload/latency parameters set by
   * {@link Page.emulateNetworkConditions}
   *
   * @param enabled - When `true`, enables offline mode for the page.
   */
  abstract setOfflineMode(enabled: boolean): Promise<void>;
  /**
   * This does not affect WebSockets and WebRTC PeerConnections (see
   * https://crbug.com/563644). To set the page offline, you can use
   * {@link Page.setOfflineMode}.
   *
   * A list of predefined network conditions can be used by importing
   * {@link PredefinedNetworkConditions}.
   *
   * @example
   *
   * ```ts
   * import {PredefinedNetworkConditions} from 'puppeteer';
   * const slow3G = PredefinedNetworkConditions['Slow 3G'];
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.emulateNetworkConditions(slow3G);
   * await page.goto('https://www.google.com');
   * // other actions...
   * await browser.close();
   * ```
   *
   * @param networkConditions - Passing `null` disables network condition
   * emulation.
   */
  abstract emulateNetworkConditions(
    networkConditions: NetworkConditions | null,
  ): Promise<void>;
  /**
   * This setting will change the default maximum navigation time for the
   * following methods and related shortcuts:
   *
   * - {@link Page.goBack | page.goBack(options)}
   *
   * - {@link Page.goForward | page.goForward(options)}
   *
   * - {@link Page.goto | page.goto(url,options)}
   *
   * - {@link Page.reload | page.reload(options)}
   *
   * - {@link Page.setContent | page.setContent(html,options)}
   *
   * - {@link Page.waitForNavigation | page.waitForNavigation(options)}
   *   @param timeout - Maximum navigation time in milliseconds.
   */
  abstract setDefaultNavigationTimeout(timeout: number): void;
  /**
   * @param timeout - Maximum time in milliseconds.
   */
  abstract setDefaultTimeout(timeout: number): void;
  /**
   * Maximum time in milliseconds.
   */
  abstract getDefaultTimeout(): number;
  /**
   * Maximum navigation time in milliseconds.
   */
  abstract getDefaultNavigationTimeout(): number;
  /**
   * Creates a locator for the provided selector. See {@link Locator} for
   * details and supported actions.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   */
  locator<Selector extends string>(
    selector: Selector,
  ): Locator<NodeFor<Selector>>;
  /**
   * Creates a locator for the provided function. See {@link Locator} for
   * details and supported actions.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   */
  locator<Ret>(func: () => Awaitable<Ret>): Locator<Ret>;
  /**
   * Finds the first element that matches the selector. If no element matches
   * the selector, the return value resolves to `null`.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   *
   * @remarks
   *
   * Shortcut for {@link Frame.$ | Page.mainFrame().$(selector) }.
   */
  $<Selector extends string>(
    selector: Selector,
  ): Promise<ElementHandle<NodeFor<Selector>> | null>;
  /**
   * Finds elements on the page that match the selector. If no elements
   * match the selector, the return value resolves to `[]`.
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   *
   * @remarks
   *
   * Shortcut for {@link Frame.$$ | Page.mainFrame().$$(selector) }.
   */
  $$<Selector extends string>(
    selector: Selector,
    options?: QueryOptions,
  ): Promise<Array<ElementHandle<NodeFor<Selector>>>>;
  /**
   * @remarks
   *
   * The only difference between {@link Page.evaluate | page.evaluate} and
   * `page.evaluateHandle` is that `evaluateHandle` will return the value
   * wrapped in an in-page object.
   *
   * If the function passed to `page.evaluateHandle` returns a Promise, the
   * function will wait for the promise to resolve and return its value.
   *
   * You can pass a string instead of a function (although functions are
   * recommended as they are easier to debug and use with TypeScript):
   *
   * @example
   *
   * ```ts
   * const aHandle = await page.evaluateHandle('document');
   * ```
   *
   * @example
   * {@link JSHandle} instances can be passed as arguments to the `pageFunction`:
   *
   * ```ts
   * const aHandle = await page.evaluateHandle(() => document.body);
   * const resultHandle = await page.evaluateHandle(
   *   body => body.innerHTML,
   *   aHandle,
   * );
   * console.log(await resultHandle.jsonValue());
   * await resultHandle.dispose();
   * ```
   *
   * Most of the time this function returns a {@link JSHandle},
   * but if `pageFunction` returns a reference to an element,
   * you instead get an {@link ElementHandle} back:
   *
   * @example
   *
   * ```ts
   * const button = await page.evaluateHandle(() =>
   *   document.querySelector('button'),
   * );
   * // can call `click` because `button` is an `ElementHandle`
   * await button.click();
   * ```
   *
   * The TypeScript definitions assume that `evaluateHandle` returns
   * a `JSHandle`, but if you know it's going to return an
   * `ElementHandle`, pass it as the generic argument:
   *
   * ```ts
   * const button = await page.evaluateHandle<ElementHandle>(...);
   * ```
   *
   * @param pageFunction - a function that is run within the page
   * @param args - arguments to be passed to the pageFunction
   */
  evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
  /**
   * This method iterates the JavaScript heap and finds all objects with the
   * given prototype.
   *
   * @example
   *
   * ```ts
   * // Create a Map object
   * await page.evaluate(() => (window.map = new Map()));
   * // Get a handle to the Map object prototype
   * const mapPrototype = await page.evaluateHandle(() => Map.prototype);
   * // Query all map instances into an array
   * const mapInstances = await page.queryObjects(mapPrototype);
   * // Count amount of map objects in heap
   * const count = await page.evaluate(maps => maps.length, mapInstances);
   * await mapInstances.dispose();
   * await mapPrototype.dispose();
   * ```
   *
   * @param prototypeHandle - a handle to the object prototype.
   * @returns Promise which resolves to a handle to an array of objects with
   * this prototype.
   */
  abstract queryObjects<Prototype>(
    prototypeHandle: JSHandle<Prototype>,
  ): Promise<JSHandle<Prototype[]>>;
  /**
   * This method finds the first element within the page that matches the selector
   * and passes the result as the first argument to the `pageFunction`.
   *
   * @remarks
   *
   * If no element is found matching `selector`, the method will throw an error.
   *
   * If `pageFunction` returns a promise `$eval` will wait for the promise to
   * resolve and then return its value.
   *
   * @example
   *
   * ```ts
   * const searchValue = await page.$eval('#search', el => el.value);
   * const preloadHref = await page.$eval('link[rel=preload]', el => el.href);
   * const html = await page.$eval('.main-container', el => el.outerHTML);
   * ```
   *
   * If you are using TypeScript, you may have to provide an explicit type to the
   * first argument of the `pageFunction`.
   * By default it is typed as `Element`, but you may need to provide a more
   * specific sub-type:
   *
   * @example
   *
   * ```ts
   * // if you don't provide HTMLInputElement here, TS will error
   * // as `value` is not on `Element`
   * const searchValue = await page.$eval(
   *   '#search',
   *   (el: HTMLInputElement) => el.value,
   * );
   * ```
   *
   * The compiler should be able to infer the return type
   * from the `pageFunction` you provide. If it is unable to, you can use the generic
   * type to tell the compiler what return type you expect from `$eval`:
   *
   * @example
   *
   * ```ts
   * // The compiler can infer the return type in this case, but if it can't
   * // or if you want to be more explicit, provide it as the generic type.
   * const searchValue = await page.$eval<string>(
   *   '#search',
   *   (el: HTMLInputElement) => el.value,
   * );
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param pageFunction - the function to be evaluated in the page context.
   * Will be passed the result of the element matching the selector as its
   * first argument.
   * @param args - any additional arguments to pass through to `pageFunction`.
   *
   * @returns The result of calling `pageFunction`. If it returns an element it
   * is wrapped in an {@link ElementHandle}, else the raw value itself is
   * returned.
   */
  $eval<
    Selector extends string,
    Params extends unknown[],
    Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<
      NodeFor<Selector>,
      Params
    >,
  >(
    selector: Selector,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  /**
   * This method returns all elements matching the selector and passes the
   * resulting array as the first argument to the `pageFunction`.
   *
   * @remarks
   * If `pageFunction` returns a promise `$$eval` will wait for the promise to
   * resolve and then return its value.
   *
   * @example
   *
   * ```ts
   * // get the amount of divs on the page
   * const divCount = await page.$$eval('div', divs => divs.length);
   *
   * // get the text content of all the `.options` elements:
   * const options = await page.$$eval('div > span.options', options => {
   *   return options.map(option => option.textContent);
   * });
   * ```
   *
   * If you are using TypeScript, you may have to provide an explicit type to the
   * first argument of the `pageFunction`.
   * By default it is typed as `Element[]`, but you may need to provide a more
   * specific sub-type:
   *
   * @example
   *
   * ```ts
   * await page.$$eval('input', elements => {
   *   return elements.map(e => e.value);
   * });
   * ```
   *
   * The compiler should be able to infer the return type
   * from the `pageFunction` you provide. If it is unable to, you can use the generic
   * type to tell the compiler what return type you expect from `$$eval`:
   *
   * @example
   *
   * ```ts
   * const allInputValues = await page.$$eval('input', elements =>
   *   elements.map(e => e.textContent),
   * );
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param pageFunction - the function to be evaluated in the page context.
   * Will be passed an array of matching elements as its first argument.
   * @param args - any additional arguments to pass through to `pageFunction`.
   *
   * @returns The result of calling `pageFunction`. If it returns an element it
   * is wrapped in an {@link ElementHandle}, else the raw value itself is
   * returned.
   */
  $$eval<
    Selector extends string,
    Params extends unknown[],
    Func extends EvaluateFuncWith<Array<NodeFor<Selector>>, Params> =
      EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,
  >(
    selector: Selector,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  /**
   * If no URLs are specified, this method returns cookies for the
   * current page URL. If URLs are specified, only cookies for those
   * URLs are returned.
   *
   * @deprecated Page-level cookie API is deprecated. Use
   * {@link Browser.cookies} or {@link BrowserContext.cookies} instead.
   */
  abstract cookies(...urls: string[]): Promise<Cookie[]>;
  /**
   * @deprecated Page-level cookie API is deprecated. Use
   * {@link Browser.deleteCookie}, {@link BrowserContext.deleteCookie},
   * {@link Browser.deleteMatchingCookies} or {@link BrowserContext.deleteMatchingCookies}
   * instead.
   */
  abstract deleteCookie(...cookies: DeleteCookiesRequest[]): Promise<void>;
  /**
   * @example
   *
   *```ts
   * await page.setCookie(cookieObject1, cookieObject2);
   *```
   *
   * @deprecated Page-level cookie API is deprecated. Use
   * {@link Browser.setCookie} or {@link BrowserContext.setCookie}
   * instead.
   */
  abstract setCookie(...cookies: CookieParam[]): Promise<void>;
  /**
   * Adds a `<script>` tag into the page with the desired URL or content.
   *
   * @remarks
   * Shortcut for
   * {@link Frame.addScriptTag | page.mainFrame().addScriptTag(options)}.
   *
   * @param options - Options for the script.
   * @returns An {@link ElementHandle | element handle} to the injected
   * `<script>` element.
   */
  addScriptTag(
    options: FrameAddScriptTagOptions,
  ): Promise<ElementHandle<HTMLScriptElement>>;
  /**
   * Adds a `<link rel="stylesheet">` tag into the page with the desired URL or
   * a `<style type="text/css">` tag with the content.
   *
   * Shortcut for
   * {@link Frame.(addStyleTag:2) | page.mainFrame().addStyleTag(options)}.
   *
   * @returns An {@link ElementHandle | element handle} to the injected `<link>`
   * or `<style>` element.
   */
  addStyleTag(
    options: Omit<FrameAddStyleTagOptions, 'url'>,
  ): Promise<ElementHandle<HTMLStyleElement>>;
  addStyleTag(
    options: FrameAddStyleTagOptions,
  ): Promise<ElementHandle<HTMLLinkElement>>;
  /**
   * The method adds a function called `name` on the page's `window` object.
   * When called, the function executes `puppeteerFunction` in node.js and
   * returns a `Promise` which resolves to the return value of
   * `puppeteerFunction`.
   *
   * If the puppeteerFunction returns a `Promise`, it will be awaited.
   *
   * :::note
   *
   * Functions installed via `page.exposeFunction` survive navigations.
   *
   * :::
   *
   * @example
   * An example of adding an `md5` function into the page:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   * import crypto from 'crypto';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * page.on('console', msg => console.log(msg.text()));
   * await page.exposeFunction('md5', text =>
   *   crypto.createHash('md5').update(text).digest('hex'),
   * );
   * await page.evaluate(async () => {
   *   // use window.md5 to compute hashes
   *   const myString = 'PUPPETEER';
   *   const myHash = await window.md5(myString);
   *   console.log(`md5 of ${myString} is ${myHash}`);
   * });
   * await browser.close();
   * ```
   *
   * @example
   * An example of adding a `window.readfile` function into the page:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   * import fs from 'node:fs';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * page.on('console', msg => console.log(msg.text()));
   * await page.exposeFunction('readfile', async filePath => {
   *   return new Promise((resolve, reject) => {
   *     fs.readFile(filePath, 'utf8', (err, text) => {
   *       if (err) reject(err);
   *       else resolve(text);
   *     });
   *   });
   * });
   * await page.evaluate(async () => {
   *   // use window.readfile to read contents of a file
   *   const content = await window.readfile('/etc/hosts');
   *   console.log(content);
   * });
   * await browser.close();
   * ```
   *
   * @param name - Name of the function on the window object
   * @param pptrFunction - Callback function which will be called in Puppeteer's
   * context.
   */
  abstract exposeFunction(
    name: string,
    pptrFunction:
      | Function
      | {
          default: Function;
        },
  ): Promise<void>;
  /**
   * The method removes a previously added function via ${@link Page.exposeFunction}
   * called `name` from the page's `window` object.
   */
  abstract removeExposedFunction(name: string): Promise<void>;
  /**
   * Provide credentials for `HTTP authentication`.
   *
   * :::note
   *
   * Request interception will be turned on behind the scenes to
   * implement authentication. This might affect performance.
   *
   * :::
   *
   * @remarks
   * To disable authentication, pass `null`.
   */
  abstract authenticate(credentials: Credentials | null): Promise<void>;
  /**
   * The extra HTTP headers will be sent with every request the page initiates.
   *
   * :::tip
   *
   * All HTTP header names are lowercased. (HTTP headers are
   * case-insensitive, so this shouldn’t impact your server code.)
   *
   * :::
   *
   * :::note
   *
   * page.setExtraHTTPHeaders does not guarantee the order of headers in
   * the outgoing requests.
   *
   * :::
   *
   * @param headers - An object containing additional HTTP headers to be sent
   * with every request. All header values must be strings.
   */
  abstract setExtraHTTPHeaders(headers: Record<string, string>): Promise<void>;
  /**
   * @param userAgent - Specific user agent to use in this page
   * @param userAgentData - Specific user agent client hint data to use in this
   * page
   * @returns Promise which resolves when the user agent is set.
   * @deprecated Use {@link Page.(setUserAgent:2) } instead.
   */
  abstract setUserAgent(
    userAgent: string,
    userAgentMetadata?: Protocol.Emulation.UserAgentMetadata,
  ): Promise<void>;
  /**
   * @param options - Object containing user agent and optional user agent metadata
   * @returns Promise which resolves when the user agent is set.
   */
  abstract setUserAgent(options: {
    userAgent?: string;
    userAgentMetadata?: Protocol.Emulation.UserAgentMetadata;
    platform?: string;
  }): Promise<void>;
  /**
   * Object containing metrics as key/value pairs.
   *
   * @returns
   *
   * - `Timestamp` : The timestamp when the metrics sample was taken.
   *
   * - `Documents` : Number of documents in the page.
   *
   * - `Frames` : Number of frames in the page.
   *
   * - `JSEventListeners` : Number of events in the page.
   *
   * - `Nodes` : Number of DOM nodes in the page.
   *
   * - `LayoutCount` : Total number of full or partial page layout.
   *
   * - `RecalcStyleCount` : Total number of page style recalculations.
   *
   * - `LayoutDuration` : Combined durations of all page layouts.
   *
   * - `RecalcStyleDuration` : Combined duration of all page style
   *   recalculations.
   *
   * - `ScriptDuration` : Combined duration of JavaScript execution.
   *
   * - `TaskDuration` : Combined duration of all tasks performed by the browser.
   *
   * - `JSHeapUsedSize` : Used JavaScript heap size.
   *
   * - `JSHeapTotalSize` : Total JavaScript heap size.
   *
   * @remarks
   * All timestamps are in monotonic time: monotonically increasing time
   * in seconds since an arbitrary point in the past.
   */
  abstract metrics(): Promise<Metrics>;
  /**
   * Captures a snapshot of the JavaScript heap and writes it to a file.
   */
  abstract captureHeapSnapshot(options: HeapSnapshotOptions): Promise<void>;
  /**
   * The page's URL.
   *
   * @remarks
   *
   * Shortcut for {@link Frame.url | page.mainFrame().url()}.
   */
  url(): string;
  /**
   * The full HTML contents of the page, including the DOCTYPE.
   */
  content(): Promise<string>;
  /**
   * Set the content of the page.
   *
   * @param html - HTML markup to assign to the page.
   * @param options - Parameters that has some properties.
   */
  setContent(html: string, options?: SetContentWaitForOptions): Promise<void>;
  /**
   * {@inheritDoc Frame.goto}
   */
  goto(url: string, options?: GoToOptions): Promise<HTTPResponse | null>;
  /**
   * Reloads the page.
   *
   * @param options - Options to configure waiting behavior.
   * @returns A promise which resolves to the main resource response. In case of
   * multiple redirects, the navigation will resolve with the response of the
   * last redirect.
   */
  abstract reload(options?: ReloadOptions): Promise<HTTPResponse | null>;
  /**
   * Waits for the page to navigate to a new URL or to reload. It is useful when
   * you run code that will indirectly cause the page to navigate.
   *
   * @example
   *
   * ```ts
   * const [response] = await Promise.all([
   *   page.waitForNavigation(), // The promise resolves after navigation has finished
   *   page.click('a.my-link'), // Clicking the link will indirectly cause a navigation
   * ]);
   * ```
   *
   * @remarks
   *
   * Usage of the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/History_API | History API}
   * to change the URL is considered a navigation.
   *
   * @param options - Navigation parameters which might have the following
   * properties:
   * @returns A `Promise` which resolves to the main resource response.
   *
   * - In case of multiple redirects, the navigation will resolve with the
   *   response of the last redirect.
   * - In case of navigation to a different anchor or navigation due to History
   *   API usage, the navigation will resolve with `null`.
   */
  waitForNavigation(options?: WaitForOptions): Promise<HTTPResponse | null>;
  /**
   * @param urlOrPredicate - A URL or predicate to wait for
   * @param options - Optional waiting parameters
   * @returns Promise which resolves to the matched request
   * @example
   *
   * ```ts
   * const firstRequest = await page.waitForRequest(
   *   'https://example.com/resource',
   * );
   * const finalRequest = await page.waitForRequest(
   *   request => request.url() === 'https://example.com',
   * );
   * return finalRequest.response()?.ok();
   * ```
   *
   * @remarks
   * Optional Waiting Parameters have:
   *
   * - `timeout`: Maximum wait time in milliseconds, defaults to `30` seconds, pass
   *   `0` to disable the timeout. The default value can be changed by using the
   *   {@link Page.setDefaultTimeout} method.
   *
   * - `signal`: A signal object that allows you to cancel a waitForRequest call.
   */
  waitForRequest(
    urlOrPredicate: string | AwaitablePredicate<HTTPRequest>,
    options?: WaitTimeoutOptions,
  ): Promise<HTTPRequest>;
  /**
   * @param urlOrPredicate - A URL or predicate to wait for.
   * @param options - Optional waiting parameters
   * @returns Promise which resolves to the matched response.
   * @example
   *
   * ```ts
   * const firstResponse = await page.waitForResponse(
   *   'https://example.com/resource',
   * );
   * const finalResponse = await page.waitForResponse(
   *   response =>
   *     response.url() === 'https://example.com' && response.status() === 200,
   * );
   * const finalResponse = await page.waitForResponse(async response => {
   *   return (await response.text()).includes('<html>');
   * });
   * return finalResponse.ok();
   * ```
   *
   * @remarks
   * Optional Parameter have:
   *
   * - `timeout`: Maximum wait time in milliseconds, defaults to `30` seconds,
   *   pass `0` to disable the timeout. The default value can be changed by using
   *   the {@link Page.setDefaultTimeout} method.
   *
   * - `signal`: A signal object that allows you to cancel a waitForResponse call.
   */
  waitForResponse(
    urlOrPredicate: string | AwaitablePredicate<HTTPResponse>,
    options?: WaitTimeoutOptions,
  ): Promise<HTTPResponse>;
  /**
   * Waits for the network to be idle.
   *
   * @remarks The function will always wait at least the
   * set {@link WaitForNetworkIdleOptions.idleTime | IdleTime}.
   *
   * @param options - Options to configure waiting behavior.
   * @returns A promise which resolves once the network is idle.
   */
  waitForNetworkIdle(options?: WaitForNetworkIdleOptions): Promise<void>;
  /**
   * Waits for a frame matching the given conditions to appear.
   *
   * @example
   *
   * ```ts
   * const frame = await page.waitForFrame(async frame => {
   *   const frameElement = await frame.frameElement();
   *   if (!frameElement) {
   *     return false;
   *   }
   *   const name = await frameElement.evaluate(el => el.getAttribute('name'));
   *   return name === 'test';
   * });
   * ```
   */
  waitForFrame(
    urlOrPredicate: string | ((frame: Frame) => Awaitable<boolean>),
    options?: WaitTimeoutOptions,
  ): Promise<Frame>;
  /**
   * This method navigate to the previous page in history.
   * @param options - Navigation parameters
   * @returns Promise which resolves to the main resource response. In case of
   * multiple redirects, the navigation will resolve with the response of the
   * last redirect.
   * If the navigation is same page, returns null.
   * If no history entry is found throws.
   */
  abstract goBack(options?: WaitForOptions): Promise<HTTPResponse | null>;
  /**
   * This method navigate to the next page in history.
   * @param options - Navigation Parameter
   * @returns Promise which resolves to the main resource response. In case of
   * multiple redirects, the navigation will resolve with the response of the
   * last redirect.
   * If the navigation is same page, returns null.
   * If no history entry is found throws.
   */
  abstract goForward(options?: WaitForOptions): Promise<HTTPResponse | null>;
  /**
   * Brings page to front (activates tab).
   */
  abstract bringToFront(): Promise<void>;
  /**
   * Emulates a given device's metrics and user agent.
   *
   * To aid emulation, Puppeteer provides a list of known devices that can be
   * via {@link KnownDevices}.
   *
   * @remarks
   * This method is a shortcut for calling two methods:
   * {@link Page.(setUserAgent:2) } and {@link Page.setViewport}.
   *
   * This method will resize the page. A lot of websites don't expect phones to
   * change size, so you should emulate before navigating to the page.
   *
   * @example
   *
   * ```ts
   * import {KnownDevices} from 'puppeteer';
   * const iPhone = KnownDevices['iPhone 15 Pro'];
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.emulate(iPhone);
   * await page.goto('https://www.google.com');
   * // other actions...
   * await browser.close();
   * ```
   */
  emulate(device: Device): Promise<void>;
  /**
   * @param enabled - Whether or not to enable JavaScript on the page.
   * @remarks
   * NOTE: changing this value won't affect scripts that have already been run.
   * It will take full effect on the next navigation.
   */
  abstract setJavaScriptEnabled(enabled: boolean): Promise<void>;
  /**
   * Toggles bypassing page's Content-Security-Policy.
   * @param enabled - sets bypassing of page's Content-Security-Policy.
   * @remarks
   * NOTE: CSP bypassing happens at the moment of CSP initialization rather than
   * evaluation. Usually, this means that `page.setBypassCSP` should be called
   * before navigating to the domain.
   */
  abstract setBypassCSP(enabled: boolean): Promise<void>;
  /**
   * @param type - Changes the CSS media type of the page. The only allowed
   * values are `screen`, `print` and `null`. Passing `null` disables CSS media
   * emulation.
   * @example
   *
   * ```ts
   * await page.evaluate(() => matchMedia('screen').matches);
   * // → true
   * await page.evaluate(() => matchMedia('print').matches);
   * // → false
   *
   * await page.emulateMediaType('print');
   * await page.evaluate(() => matchMedia('screen').matches);
   * // → false
   * await page.evaluate(() => matchMedia('print').matches);
   * // → true
   *
   * await page.emulateMediaType(null);
   * await page.evaluate(() => matchMedia('screen').matches);
   * // → true
   * await page.evaluate(() => matchMedia('print').matches);
   * // → false
   * ```
   */
  abstract emulateMediaType(type?: string): Promise<void>;
  /**
   * Enables CPU throttling to emulate slow CPUs.
   * @param factor - slowdown factor (1 is no throttle, 2 is 2x slowdown, etc).
   */
  abstract emulateCPUThrottling(factor: number | null): Promise<void>;
  /**
   * @param features - `<?Array<Object>>` Given an array of media feature
   * objects, emulates CSS media features on the page. Each media feature object
   * must have the following properties:
   * @example
   *
   * ```ts
   * await page.emulateMediaFeatures([
   *   {name: 'prefers-color-scheme', value: 'dark'},
   * ]);
   * await page.evaluate(
   *   () => matchMedia('(prefers-color-scheme: dark)').matches,
   * );
   * // → true
   * await page.evaluate(
   *   () => matchMedia('(prefers-color-scheme: light)').matches,
   * );
   * // → false
   *
   * await page.emulateMediaFeatures([
   *   {name: 'prefers-reduced-motion', value: 'reduce'},
   * ]);
   * await page.evaluate(
   *   () => matchMedia('(prefers-reduced-motion: reduce)').matches,
   * );
   * // → true
   * await page.evaluate(
   *   () => matchMedia('(prefers-reduced-motion: no-preference)').matches,
   * );
   * // → false
   *
   * await page.emulateMediaFeatures([
   *   {name: 'prefers-color-scheme', value: 'dark'},
   *   {name: 'prefers-reduced-motion', value: 'reduce'},
   * ]);
   * await page.evaluate(
   *   () => matchMedia('(prefers-color-scheme: dark)').matches,
   * );
   * // → true
   * await page.evaluate(
   *   () => matchMedia('(prefers-color-scheme: light)').matches,
   * );
   * // → false
   * await page.evaluate(
   *   () => matchMedia('(prefers-reduced-motion: reduce)').matches,
   * );
   * // → true
   * await page.evaluate(
   *   () => matchMedia('(prefers-reduced-motion: no-preference)').matches,
   * );
   * // → false
   *
   * await page.emulateMediaFeatures([{name: 'color-gamut', value: 'p3'}]);
   * await page.evaluate(() => matchMedia('(color-gamut: srgb)').matches);
   * // → true
   * await page.evaluate(() => matchMedia('(color-gamut: p3)').matches);
   * // → true
   * await page.evaluate(() => matchMedia('(color-gamut: rec2020)').matches);
   * // → false
   * ```
   */
  abstract emulateMediaFeatures(features?: MediaFeature[]): Promise<void>;
  /**
   * @param timezoneId - Changes the timezone of the page. See
   * {@link https://source.chromium.org/chromium/chromium/deps/icu.git/+/faee8bc70570192d82d2978a71e2a615788597d1:source/data/misc/metaZones.txt | ICU’s metaZones.txt}
   * for a list of supported timezone IDs. Passing
   * `null` disables timezone emulation.
   */
  abstract emulateTimezone(timezoneId?: string): Promise<void>;
  /**
   * Emulates the idle state.
   * If no arguments set, clears idle state emulation.
   *
   * @example
   *
   * ```ts
   * // set idle emulation
   * await page.emulateIdleState({isUserActive: true, isScreenUnlocked: false});
   *
   * // do some checks here
   * ...
   *
   * // clear idle emulation
   * await page.emulateIdleState();
   * ```
   *
   * @param overrides - Mock idle state. If not set, clears idle overrides
   */
  abstract emulateIdleState(overrides?: {
    isUserActive: boolean;
    isScreenUnlocked: boolean;
  }): Promise<void>;
  /**
   * Simulates the given vision deficiency on the page.
   *
   * @example
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * await page.goto('https://v8.dev/blog/10-years');
   *
   * await page.emulateVisionDeficiency('achromatopsia');
   * await page.screenshot({path: 'achromatopsia.png'});
   *
   * await page.emulateVisionDeficiency('deuteranopia');
   * await page.screenshot({path: 'deuteranopia.png'});
   *
   * await page.emulateVisionDeficiency('blurredVision');
   * await page.screenshot({path: 'blurred-vision.png'});
   *
   * await page.emulateVisionDeficiency('reducedContrast');
   * await page.screenshot({path: 'reduced-contrast.png'});
   *
   * await browser.close();
   * ```
   *
   * @param type - the type of deficiency to simulate, or `'none'` to reset.
   */
  abstract emulateVisionDeficiency(
    type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type'],
  ): Promise<void>;
  /**
   * `page.setViewport` will resize the page. A lot of websites don't expect
   * phones to change size, so you should set the viewport before navigating to
   * the page.
   *
   * In the case of multiple pages in a single browser, each page can have its
   * own viewport size. Setting the viewport to `null` resets the viewport to
   * its default value.
   *
   * @example
   *
   * ```ts
   * const page = await browser.newPage();
   * await page.setViewport({
   *   width: 640,
   *   height: 480,
   *   deviceScaleFactor: 1,
   * });
   * await page.goto('https://example.com');
   * ```
   *
   * @param viewport -
   * @remarks
   * NOTE: in certain cases, setting viewport will reload the page in order to
   * set the isMobile or hasTouch properties.
   */
  abstract setViewport(viewport: Viewport | null): Promise<void>;
  /**
   * Returns the current page viewport settings without checking the actual page
   * viewport.
   *
   * This is either the viewport set with the previous {@link Page.setViewport}
   * call or the default viewport set via
   * {@link ConnectOptions.defaultViewport |
   * ConnectOptions.defaultViewport}.
   */
  abstract viewport(): Viewport | null;
  /**
   * Evaluates a function in the page's context and returns the result.
   *
   * If the function passed to `page.evaluate` returns a Promise, the
   * function will wait for the promise to resolve and return its value.
   *
   * @example
   *
   * ```ts
   * const result = await frame.evaluate(() => {
   *   return Promise.resolve(8 * 7);
   * });
   * console.log(result); // prints "56"
   * ```
   *
   * You can pass a string instead of a function (although functions are
   * recommended as they are easier to debug and use with TypeScript):
   *
   * @example
   *
   * ```ts
   * const aHandle = await page.evaluate('1 + 2');
   * ```
   *
   * To get the best TypeScript experience, you should pass in as the
   * generic the type of `pageFunction`:
   *
   * ```ts
   * const aHandle = await page.evaluate(() => 2);
   * ```
   *
   * @example
   *
   * {@link ElementHandle} instances (including {@link JSHandle}s) can be passed
   * as arguments to the `pageFunction`:
   *
   * ```ts
   * const bodyHandle = await page.$('body');
   * const html = await page.evaluate(body => body.innerHTML, bodyHandle);
   * await bodyHandle.dispose();
   * ```
   *
   * @param pageFunction - a function that is run within the page
   * @param args - arguments to be passed to the pageFunction
   *
   * @returns the return value of `pageFunction`.
   */
  evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  /**
   * Adds a function which would be invoked in one of the following scenarios:
   *
   * - whenever the page is navigated
   *
   * - whenever the child frame is attached or navigated. In this case, the
   *   function is invoked in the context of the newly attached frame.
   *
   * The function is invoked after the document was created but before any of
   * its scripts were run. This is useful to amend the JavaScript environment,
   * e.g. to seed `Math.random`.
   * @param pageFunction - Function to be evaluated in browser context
   * @param args - Arguments to pass to `pageFunction`
   * @example
   * An example of overriding the navigator.languages property before the page loads:
   *
   * ```ts
   * // preload.js
   *
   * // overwrite the `languages` property to use a custom getter
   * Object.defineProperty(navigator, 'languages', {
   *   get: function () {
   *     return ['en-US', 'en', 'bn'];
   *   },
   * });
   *
   * // In your puppeteer script, assuming the preload.js file is
   * // in same folder of our script.
   * const preloadFile = fs.readFileSync('./preload.js', 'utf8');
   * await page.evaluateOnNewDocument(preloadFile);
   * ```
   */
  abstract evaluateOnNewDocument<
    Params extends unknown[],
    Func extends (...args: Params) => unknown = (...args: Params) => unknown,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<NewDocumentScriptEvaluation>;
  /**
   * Removes script that injected into page by Page.evaluateOnNewDocument.
   *
   * @param identifier - script identifier
   */
  abstract removeScriptToEvaluateOnNewDocument(
    identifier: string,
  ): Promise<void>;
  /**
   * Toggles ignoring cache for each request based on the enabled state. By
   * default, caching is enabled.
   * @param enabled - sets the `enabled` state of cache
   * @defaultValue `true`
   */
  abstract setCacheEnabled(enabled?: boolean): Promise<void>;
  /**
   * Captures a screencast of this {@link Page | page}.
   *
   * @example
   * Recording a {@link Page | page}:
   *
   * ```
   * import puppeteer from 'puppeteer';
   *
   * // Launch a browser
   * const browser = await puppeteer.launch();
   *
   * // Create a new page
   * const page = await browser.newPage();
   *
   * // Go to your site.
   * await page.goto("https://www.example.com");
   *
   * // Start recording.
   * const recorder = await page.screencast({path: 'recording.webm'});
   *
   * // Do something.
   *
   * // Stop recording.
   * await recorder.stop();
   *
   * browser.close();
   * ```
   *
   * @param options - Configures screencast behavior.
   *
   * @experimental
   *
   * @remarks
   *
   * By default, all recordings will be {@link https://www.webmproject.org/ | WebM} format using
   * the {@link https://www.webmproject.org/vp9/ | VP9} video codec, with a frame rate of 30 FPS.
   *
   * You must have {@link https://ffmpeg.org/ | ffmpeg} installed on your system.
   */
  screencast(options?: Readonly<ScreencastOptions>): Promise<ScreenRecorder>;
  /**
   * Captures a screenshot of this {@link Page | page}.
   *
   * @param options - Configures screenshot behavior.
   *
   * @remarks
   *
   * While a screenshot is being taken in a {@link BrowserContext}, the
   * following methods will automatically wait for the screenshot to
   * finish to prevent interference with the screenshot process:
   * {@link BrowserContext.newPage}, {@link Browser.newPage},
   * {@link Page.close}.
   *
   * Calling {@link Page.bringToFront} will not wait for existing
   * screenshot operations.
   *
   */
  screenshot(
    options: Readonly<ScreenshotOptions> & {
      encoding: 'base64';
    },
  ): Promise<string>;
  screenshot(options?: Readonly<ScreenshotOptions>): Promise<Uint8Array>;
  /**
   * Emulates focus state of the page.
   *
   * @param enabled - Whether to emulate focus.
   */
  abstract emulateFocusedPage(enabled: boolean): Promise<void>;
  /**
   * Generates a PDF of the page with the `print` CSS media type.
   *
   * @param options - options for generating the PDF.
   *
   * @remarks
   *
   * To generate a PDF with the `screen` media type, call
   * {@link Page.emulateMediaType | `page.emulateMediaType('screen')`} before
   * calling `page.pdf()`.
   *
   * By default, `page.pdf()` generates a pdf with modified colors for printing.
   * Use the
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust | `-webkit-print-color-adjust`}
   * property to force rendering of exact colors.
   */
  abstract createPDFStream(
    options?: PDFOptions,
  ): Promise<ReadableStream<Uint8Array>>;
  /**
   * {@inheritDoc Page.createPDFStream}
   */
  abstract pdf(options?: PDFOptions): Promise<Uint8Array>;
  /**
   * The page's title
   *
   * @remarks
   *
   * Shortcut for {@link Frame.title | page.mainFrame().title()}.
   */
  title(): Promise<string>;
  abstract close(options?: {runBeforeUnload?: boolean}): Promise<void>;
  /**
   * Indicates that the page has been closed.
   * @returns
   */
  abstract isClosed(): boolean;
  /**
   * {@inheritDoc Mouse}
   */
  abstract get mouse(): Mouse;
  /**
   * This method fetches an element with `selector`, scrolls it into view if
   * needed, and then uses {@link Page.mouse} to click in the center of the
   * element. If there's no element matching `selector`, the method throws an
   * error.
   *
   * @remarks
   *
   * Bear in mind that if `click()` triggers a navigation event and
   * there's a separate `page.waitForNavigation()` promise to be resolved, you
   * may end up with a race condition that yields unexpected results. The
   * correct pattern for click and wait for navigation is the following:
   *
   * ```ts
   * const [response] = await Promise.all([
   *   page.waitForNavigation(waitOptions),
   *   page.click(selector, clickOptions),
   * ]);
   * ```
   *
   * Shortcut for {@link Frame.click | page.mainFrame().click(selector[, options]) }.
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}. If there are
   * multiple elements satisfying the `selector`, the first will be clicked
   * @param options - `Object`
   * @returns Promise which resolves when the element matching `selector` is
   * successfully clicked. The Promise will be rejected if there is no element
   * matching `selector`.
   */
  click(selector: string, options?: Readonly<ClickOptions>): Promise<void>;
  /**
   * This method fetches an element with `selector` and focuses it. If
   * there's no element matching `selector`, the method throws an error.
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * If there are multiple elements satisfying the selector, the first
   * will be focused.
   * @returns Promise which resolves when the element matching selector
   * is successfully focused. The promise will be rejected if there is
   * no element matching selector.
   *
   * @remarks
   *
   * Shortcut for
   * {@link Frame.focus | page.mainFrame().focus(selector)}.
   */
  focus(selector: string): Promise<void>;
  /**
   * This method fetches an element with `selector`, scrolls it into view if
   * needed, and then uses {@link Page.mouse}
   * to hover over the center of the element.
   * If there's no element matching `selector`, the method throws an error.
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}. If there are
   * multiple elements satisfying the `selector`, the first will be hovered.
   * @returns Promise which resolves when the element matching `selector` is
   * successfully hovered. Promise gets rejected if there's no element matching
   * `selector`.
   *
   * @remarks
   *
   * Shortcut for {@link Page.hover | page.mainFrame().hover(selector)}.
   */
  hover(selector: string): Promise<void>;
  /**
   * Triggers a `change` and `input` event once all the provided options have been
   * selected. If there's no `<select>` element matching `selector`, the method
   * throws an error.
   *
   * @example
   *
   * ```ts
   * page.select('select#colors', 'blue'); // single selection
   * page.select('select#colors', 'red', 'green', 'blue'); // multiple selections
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param values - Values of options to select. If the `<select>` has the
   * `multiple` attribute, all values are considered, otherwise only the first one
   * is taken into account.
   * @returns
   *
   * @remarks
   *
   * Shortcut for {@link Frame.select | page.mainFrame().select()}
   */
  select(selector: string, ...values: string[]): Promise<string[]>;
  /**
   * This method fetches an element with `selector`, scrolls it into view if
   * needed, and then uses {@link Page.touchscreen}
   * to tap in the center of the element.
   * If there's no element matching `selector`, the method throws an error.
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}. If there are multiple elements satisfying the
   * selector, the first will be tapped.
   *
   * @remarks
   *
   * Shortcut for {@link Frame.tap | page.mainFrame().tap(selector)}.
   */
  tap(selector: string): Promise<void>;
  /**
   * Sends a `keydown`, `keypress/input`, and `keyup` event for each character
   * in the text.
   *
   * To press a special key, like `Control` or `ArrowDown`, use {@link Keyboard.press}.
   * @example
   *
   * ```ts
   * await page.type('#mytextarea', 'Hello');
   * // Types instantly
   * await page.type('#mytextarea', 'World', {delay: 100});
   * // Types slower, like a user
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param text - A text to type into a focused element.
   * @param options - have property `delay` which is the Time to wait between
   * key presses in milliseconds. Defaults to `0`.
   * @returns
   */
  type(
    selector: string,
    text: string,
    options?: Readonly<KeyboardTypeOptions>,
  ): Promise<void>;
  /**
   * Wait for the `selector` to appear in page. If at the moment of calling the
   * method the `selector` already exists, the method will return immediately. If
   * the `selector` doesn't appear after the `timeout` milliseconds of waiting, the
   * function will throw.
   *
   * @example
   * This method works across navigations:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * let currentURL;
   * page
   *   .waitForSelector('img')
   *   .then(() => console.log('First URL with image: ' + currentURL));
   * for (currentURL of [
   *   'https://example.com',
   *   'https://google.com',
   *   'https://bbc.com',
   * ]) {
   *   await page.goto(currentURL);
   * }
   * await browser.close();
   * ```
   *
   * @param selector -
   * {@link https://pptr.dev/guides/page-interactions#selectors | selector}
   * to query the page for.
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS selectors}
   * can be passed as-is and a
   * {@link https://pptr.dev/guides/page-interactions#non-css-selectors | Puppeteer-specific selector syntax}
   * allows querying by
   * {@link https://pptr.dev/guides/page-interactions#text-selectors--p-text | text},
   * {@link https://pptr.dev/guides/page-interactions#aria-selectors--p-aria | a11y role and name},
   * and
   * {@link https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath | xpath}
   * and
   * {@link https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom | combining these queries across shadow roots}.
   * Alternatively, you can specify the selector type using a
   * {@link https://pptr.dev/guides/page-interactions#prefixed-selector-syntax | prefix}.
   * @param options - Optional waiting parameters
   * @returns Promise which resolves when element specified by selector string
   * is added to DOM. Resolves to `null` if waiting for hidden: `true` and
   * selector is not found in DOM.
   *
   * @remarks
   * The optional Parameter in Arguments `options` are:
   *
   * - `visible`: A boolean wait for element to be present in DOM and to be
   *   visible, i.e. to not have `display: none` or `visibility: hidden` CSS
   *   properties. Defaults to `false`.
   *
   * - `hidden`: Wait for element to not be found in the DOM or to be hidden,
   *   i.e. have `display: none` or `visibility: hidden` CSS properties. Defaults to
   *   `false`.
   *
   * - `timeout`: maximum time to wait for in milliseconds. Defaults to `30000`
   *   (30 seconds). Pass `0` to disable timeout. The default value can be changed
   *   by using the {@link Page.setDefaultTimeout} method.
   *
   * - `signal`: A signal object that allows you to cancel a waitForSelector call.
   */
  waitForSelector<Selector extends string>(
    selector: Selector,
    options?: WaitForSelectorOptions,
  ): Promise<ElementHandle<NodeFor<Selector>> | null>;
  /**
   * Waits for the provided function, `pageFunction`, to return a truthy value when
   * evaluated in the page's context.
   *
   * @example
   * {@link Page.waitForFunction} can be used to observe a viewport size change:
   *
   * ```ts
   * import puppeteer from 'puppeteer';
   *
   * const browser = await puppeteer.launch();
   * const page = await browser.newPage();
   * const watchDog = page.waitForFunction('window.innerWidth < 100');
   * await page.setViewport({width: 50, height: 50});
   * await watchDog;
   * await browser.close();
   * ```
   *
   * @example
   * Arguments can be passed from Node.js to `pageFunction`:
   *
   * ```ts
   * const selector = '.foo';
   * await page.waitForFunction(
   *   selector => !!document.querySelector(selector),
   *   {},
   *   selector,
   * );
   * ```
   *
   * @example
   * The provided `pageFunction` can be asynchronous:
   *
   * ```ts
   * const username = 'github-username';
   * await page.waitForFunction(
   *   async username => {
   *     const githubResponse = await fetch(
   *       `https://api.github.com/users/${username}`,
   *     );
   *     const githubUser = await githubResponse.json();
   *     // show the avatar
   *     const img = document.createElement('img');
   *     img.src = githubUser.avatar_url;
   *     // wait 3 seconds
   *     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
   *     img.remove();
   *   },
   *   {},
   *   username,
   * );
   * ```
   *
   * @param pageFunction - Function to be evaluated in browser context until it returns a
   * truthy value.
   * @param options - Options for configuring waiting behavior.
   */
  waitForFunction<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    options?: FrameWaitForFunctionOptions,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
  /**
   * This method is typically coupled with an action that triggers a device
   * request from an api such as WebBluetooth.
   *
   * :::caution
   *
   * This must be called before the device request is made. It will not return a
   * currently active device prompt.
   *
   * :::
   *
   * @example
   *
   * ```ts
   * const [devicePrompt] = Promise.all([
   *   page.waitForDevicePrompt(),
   *   page.click('#connect-bluetooth'),
   * ]);
   * await devicePrompt.select(
   *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device')),
   * );
   * ```
   */
  abstract waitForDevicePrompt(
    options?: WaitTimeoutOptions,
  ): Promise<DeviceRequestPrompt>;
  /**
   * Resizes the browser window of this page so that the content area (excluding
   * browser UI) has the specified width and height.
   *
   * @experimental
   */
  abstract resize(params: {
    contentWidth: number;
    contentHeight: number;
  }): Promise<void>;
  /**
   * Returns the page's window id.
   *
   * @experimental
   */
  abstract windowId(): Promise<WindowId>;
  /**
   * Opens DevTools for the this page if not already open and returns the DevTools page.
   * This method is only available in Chrome.
   */
  abstract openDevTools(): Promise<Page>;
  /**
   * Returns true if DevTools is attached to the current page.
   * Use {@link Page.openDevTools} to get the DevTools page.
   *
   * @experimental
   */
  abstract hasDevTools(): Promise<boolean>;
  /**
   * {@inheritDoc BluetoothEmulation}
   */
  abstract get bluetooth(): BluetoothEmulation;
  /**
   * Triggers the default action of the specified extension for this page.
   * This simulates clicking the extension's icon in the browser's toolbar.
   *
   * @param extension - The {@link Extension} whose action to trigger.
   * @public
   */
  abstract triggerExtensionAction(extension: Extension): Promise<void>;
  /**
   * Retrieves the list of extension execution realms in the main frame of the page.
   * These realms correspond to extension content scripts running on the page.
   *
   * Shortcut for {@link Frame.extensionRealms | mainFrame().extensionRealms()}.
   *
   * @public
   */
  abstract extensionRealms(): Realm[];
}

/**
 * All the events that a page instance may emit.
 *
 * @public
 */
export declare const enum PageEvent {
  /**
   * Emitted when the page closes.
   */
  Close = 'close',
  /**
   * Emitted when JavaScript within the page calls one of console API methods,
   * e.g. `console.log` or `console.dir`. Also emitted if the page throws an
   * error or a warning.
   *
   * @remarks
   * A `console` event provides a {@link ConsoleMessage} representing the
   * console message that was logged.
   *
   * @example
   * An example of handling `console` event:
   *
   * ```ts
   * page.on('console', msg => {
   *   for (let i = 0; i < msg.args().length; ++i)
   *     console.log(`${i}: ${msg.args()[i]}`);
   * });
   * page.evaluate(() => console.log('hello', 5, {foo: 'bar'}));
   * ```
   */
  Console = 'console',
  /**
   * Emitted when a JavaScript dialog appears, such as `alert`, `prompt`,
   * `confirm` or `beforeunload`. Puppeteer can respond to the dialog via
   * {@link Dialog.accept} or {@link Dialog.dismiss}.
   */
  Dialog = 'dialog',
  /**
   * Emitted when the JavaScript
   * {@link https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded | DOMContentLoaded }
   * event is dispatched.
   */
  DOMContentLoaded = 'domcontentloaded',
  /**
   * Emitted when a DevTools issue is reported.
   * @experimental
   */
  Issue = 'issue',
  /**
   * Emitted when the page crashes. Will contain an `Error`.
   */
  Error = 'error',
  /** Emitted when a frame is attached. Will contain a {@link Frame}. */
  FrameAttached = 'frameattached',
  /** Emitted when a frame is detached. Will contain a {@link Frame}. */
  FrameDetached = 'framedetached',
  /**
   * Emitted when a frame is navigated to a new URL. Will contain a
   * {@link Frame}.
   */
  FrameNavigated = 'framenavigated',
  /**
   * Emitted when the JavaScript
   * {@link https://developer.mozilla.org/en-US/docs/Web/Events/load | load}
   * event is dispatched.
   */
  Load = 'load',
  /**
   * Emitted when the JavaScript code makes a call to `console.timeStamp`. For
   * the list of metrics see {@link Page.metrics | page.metrics}.
   *
   * @remarks
   * Contains an object with two properties:
   *
   * - `title`: the title passed to `console.timeStamp`
   * - `metrics`: object containing metrics as key/value pairs. The values will
   *   be `number`s.
   */
  Metrics = 'metrics',
  /**
   * Emitted when an uncaught exception happens within the page. Contains an
   * `Error` or data of type unknown.
   */
  PageError = 'pageerror',
  /**
   * Emitted when the page opens a new tab or window.
   *
   * Contains a {@link Page} corresponding to the popup window.
   *
   * @example
   *
   * ```ts
   * const [popup] = await Promise.all([
   *   new Promise(resolve => page.once('popup', resolve)),
   *   page.click('a[target=_blank]'),
   * ]);
   * ```
   *
   * ```ts
   * const [popup] = await Promise.all([
   *   new Promise(resolve => page.once('popup', resolve)),
   *   page.evaluate(() => window.open('https://example.com')),
   * ]);
   * ```
   */
  Popup = 'popup',
  /**
   * Emitted when a page issues a request and contains a {@link HTTPRequest}.
   *
   * @remarks
   * The object is readonly. See {@link Page.setRequestInterception} for
   * intercepting and mutating requests.
   */
  Request = 'request',
  /**
   * Emitted when a request ended up loading from cache. Contains a
   * {@link HTTPRequest}.
   *
   * @remarks
   * For certain requests, might contain undefined.
   * {@link https://crbug.com/750469}
   */
  RequestServedFromCache = 'requestservedfromcache',
  /**
   * Emitted when a request fails, for example by timing out.
   *
   * Contains a {@link HTTPRequest}.
   *
   * @remarks
   * HTTP Error responses, such as 404 or 503, are still successful responses
   * from HTTP standpoint, so request will complete with `requestfinished` event
   * and not with `requestfailed`.
   */
  RequestFailed = 'requestfailed',
  /**
   * Emitted when a request finishes successfully. Contains a
   * {@link HTTPRequest}.
   */
  RequestFinished = 'requestfinished',
  /**
   * Emitted when a response is received. Contains a {@link HTTPResponse}.
   */
  Response = 'response',
  /**
   * Emitted when a dedicated
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API | WebWorker}
   * is spawned by the page.
   */
  WorkerCreated = 'workercreated',
  /**
   * Emitted when a dedicated
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API | WebWorker}
   * is destroyed by the page.
   */
  WorkerDestroyed = 'workerdestroyed',
}

/**
 * Denotes the objects received by callback functions for page events.
 *
 * See {@link PageEvent} for more detail on the events and when they are
 * emitted.
 *
 * @public
 */
export declare interface PageEvents extends Record<EventType, unknown> {
  [PageEvent.Close]: undefined;
  [PageEvent.Console]: ConsoleMessage;
  [PageEvent.Dialog]: Dialog;
  [PageEvent.DOMContentLoaded]: undefined;
  [PageEvent.Issue]: Issue;
  [PageEvent.Error]: Error;
  [PageEvent.FrameAttached]: Frame;
  [PageEvent.FrameDetached]: Frame;
  [PageEvent.FrameNavigated]: Frame;
  [PageEvent.Load]: undefined;
  [PageEvent.Metrics]: {
    title: string;
    metrics: Metrics;
  };
  [PageEvent.PageError]: Error | unknown;
  [PageEvent.Popup]: Page | null;
  [PageEvent.Request]: HTTPRequest;
  [PageEvent.Response]: HTTPResponse;
  [PageEvent.RequestFailed]: HTTPRequest;
  [PageEvent.RequestFinished]: HTTPRequest;
  [PageEvent.RequestServedFromCache]: HTTPRequest;
  [PageEvent.WorkerCreated]: WebWorker;
  [PageEvent.WorkerDestroyed]: WebWorker;
}

/**
 * All the valid paper format types when printing a PDF.
 *
 * @remarks
 *
 * The sizes of each format are as follows:
 *
 * - `Letter`: 8.5in x 11in / 21.59cm x 27.94cm
 *
 * - `Legal`: 8.5in x 14in / 21.59cm x 35.56cm
 *
 * - `Tabloid`: 11in x 17in / 27.94cm x 43.18cm
 *
 * - `Ledger`: 17in x 11in / 43.18cm x 27.94cm
 *
 * - `A0`: 33.1102in x 46.811in / 84.1cm x 118.9cm
 *
 * - `A1`: 23.3858in x 33.1102in / 59.4cm x 84.1cm
 *
 * - `A2`: 16.5354in x 23.3858in / 42cm x 59.4cm
 *
 * - `A3`: 11.6929in x 16.5354in / 29.7cm x 42cm
 *
 * - `A4`: 8.2677in x 11.6929in / 21cm x 29.7cm
 *
 * - `A5`: 5.8268in x 8.2677in / 14.8cm x 21cm
 *
 * - `A6`: 4.1339in x 5.8268in / 10.5cm x 14.8cm
 *
 * @public
 */
export declare type PaperFormat =
  | Uppercase<LowerCasePaperFormat>
  | Capitalize<LowerCasePaperFormat>
  | LowerCasePaperFormat;

/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @public
 */
export declare interface PDFMargin {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
}

/**
 * Valid options to configure PDF generation via {@link Page.pdf}.
 * @public
 */
export declare interface PDFOptions {
  /**
   * Scales the rendering of the web page. Amount must be between `0.1` and `2`.
   * @defaultValue `1`
   */
  scale?: number;
  /**
   * Whether to show the header and footer.
   * @defaultValue `false`
   */
  displayHeaderFooter?: boolean;
  /**
   * HTML template for the print header. Should be valid HTML with the following
   * classes used to inject values into them:
   *
   * - `date` formatted print date
   *
   * - `title` document title
   *
   * - `url` document location
   *
   * - `pageNumber` current page number
   *
   * - `totalPages` total pages in the document
   */
  headerTemplate?: string;
  /**
   * HTML template for the print footer. Has the same constraints and support
   * for special classes as {@link PDFOptions.headerTemplate}.
   */
  footerTemplate?: string;
  /**
   * Set to `true` to print background graphics.
   * @defaultValue `false`
   */
  printBackground?: boolean;
  /**
   * Whether to print in landscape orientation.
   * @defaultValue `false`
   */
  landscape?: boolean;
  /**
   * Paper ranges to print, e.g. `1-5, 8, 11-13`.
   * @defaultValue The empty string, which means all pages are printed.
   */
  pageRanges?: string;
  /**
   * @remarks
   * If set, this takes priority over the `width` and `height` options.
   * @defaultValue `letter`.
   */
  format?: PaperFormat;
  /**
   * Sets the width of paper. You can pass in a number or a string with a unit.
   */
  width?: string | number;
  /**
   * Sets the height of paper. You can pass in a number or a string with a unit.
   */
  height?: string | number;
  /**
   * Give any CSS `@page` size declared in the page priority over what is
   * declared in the `width` or `height` or `format` option.
   * @defaultValue `false`, which will scale the content to fit the paper size.
   */
  preferCSSPageSize?: boolean;
  /**
   * Set the PDF margins.
   * @defaultValue `undefined` no margins are set.
   */
  margin?: PDFMargin;
  /**
   * The path to save the file to.
   *
   * @remarks
   *
   * If the path is relative, it's resolved relative to the current working directory.
   *
   * @defaultValue `undefined`, which means the PDF will not be written to disk.
   */
  path?: string;
  /**
   * Hides default white background and allows generating pdfs with transparency.
   * @defaultValue `false`
   */
  omitBackground?: boolean;
  /**
   * Generate tagged (accessible) PDF.
   *
   * @defaultValue `true`
   * @experimental
   */
  tagged?: boolean;
  /**
   * Generate document outline.
   *
   * @defaultValue `false`
   * @experimental
   */
  outline?: boolean;
  /**
   * Timeout in milliseconds. Pass `0` to disable timeout.
   *
   * The default value can be changed by using {@link Page.setDefaultTimeout}
   *
   * @defaultValue `30_000`
   */
  timeout?: number;
  /**
   * If true, waits for `document.fonts.ready` to resolve. This might require
   * activating the page using {@link Page.bringToFront} if the page is in the
   * background.
   *
   * @defaultValue `true`
   */
  waitForFonts?: boolean;
}

/**
 * @public
 * @deprecated in favor of {@link PermissionDescriptor}.
 */
export declare type Permission =
  | 'accelerometer'
  | 'ambient-light-sensor'
  | 'background-sync'
  | 'camera'
  | 'clipboard-read'
  | 'clipboard-sanitized-write'
  | 'clipboard-write'
  | 'geolocation'
  | 'gyroscope'
  | 'idle-detection'
  | 'keyboard-lock'
  | 'magnetometer'
  | 'microphone'
  | 'midi-sysex'
  | 'midi'
  | 'notifications'
  | 'payment-handler'
  | 'persistent-storage'
  | 'pointer-lock';

/**
 * @public
 */
declare interface PermissionDescriptor_2 {
  name: string;
  userVisibleOnly?: boolean;
  sysex?: boolean;
  panTiltZoom?: boolean;
  allowWithoutSanitization?: boolean;
}
export type {PermissionDescriptor_2 as PermissionDescriptor};

/**
 * @public
 */
declare type PermissionState_2 = 'granted' | 'denied' | 'prompt';
export type {PermissionState_2 as PermissionState};

/**
 * @public
 */
export declare interface Point {
  x: number;
  y: number;
}

declare namespace PQuerySelector {
  export {};
}

/**
 * @public
 * A bluetooth peripheral to be simulated.
 */
export declare interface PreconnectedPeripheral {
  address: string;
  name: string;
  manufacturerData: BluetoothManufacturerData[];
  knownServiceUuids: string[];
}

/**
 * A list of pre-defined network conditions to be used with
 * {@link Page.emulateNetworkConditions}.
 *
 * @example
 *
 * ```ts
 * import {PredefinedNetworkConditions} from 'puppeteer';
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.emulateNetworkConditions(PredefinedNetworkConditions['Slow 3G']);
 * await page.goto('https://www.google.com');
 * await page.emulateNetworkConditions(PredefinedNetworkConditions['Fast 3G']);
 * await page.goto('https://www.google.com');
 * // alias to Fast 3G.
 * await page.emulateNetworkConditions(PredefinedNetworkConditions['Slow 4G']);
 * await page.goto('https://www.google.com');
 * await page.emulateNetworkConditions(PredefinedNetworkConditions['Fast 4G']);
 * await page.goto('https://www.google.com');
 * // other actions...
 * await browser.close();
 * ```
 *
 * @public
 */
export declare const PredefinedNetworkConditions: Readonly<{
  'Slow 3G': NetworkConditions;
  'Fast 3G': NetworkConditions;
  'Slow 4G': NetworkConditions;
  'Fast 4G': NetworkConditions;
}>;

/**
 * @public
 */
export declare type Predicate<From, To extends From = From> =
  | ((value: From) => value is To)
  | ((value: From) => Awaitable<boolean>);

export {Protocol};

/**
 * ProtocolError is emitted whenever there is an error from the protocol.
 *
 * @public
 */
export declare class ProtocolError extends PuppeteerError {
  #private;
  set code(code: number | undefined);
  /**
   * @readonly
   * @public
   */
  get code(): number | undefined;
  set originalMessage(originalMessage: string);
  /**
   * @readonly
   * @public
   */
  get originalMessage(): string;
}

/**
 * @public
 */
export declare type ProtocolLifeCycleEvent =
  | 'load'
  | 'DOMContentLoaded'
  | 'networkIdle'
  | 'networkAlmostIdle';

/**
 * @public
 */
export declare type ProtocolType = 'cdp' | 'webDriverBiDi';

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
  static registerCustomQueryHandler(
    name: string,
    queryHandler: CustomQueryHandler,
  ): void;
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
   * This method attaches Puppeteer to an existing browser instance.
   *
   * @remarks
   *
   * @param options - Set of configurable options to set on the browser.
   * @returns Promise which resolves to browser instance.
   */
  connect(options: ConnectOptions): Promise<Browser>;
}

/**
 * @public
 */
declare const puppeteer: Puppeteer_2.PuppeteerNode;
export default puppeteer;

declare namespace Puppeteer_2 {
  export type {
    AdapterState,
    BluetoothManufacturerData,
    PreconnectedPeripheral,
    BluetoothEmulation,
    BrowserContextOptions,
    TargetFilterCallback,
    Permission,
    PermissionDescriptor_2 as PermissionDescriptor,
    PermissionState_2 as PermissionState,
    WaitForTargetOptions,
    BrowserEvents,
    DebugInfo,
    WindowState,
    WindowBounds,
    WindowId,
    CreatePageOptions,
    ScreenOrientation_2 as ScreenOrientation,
    ScreenInfo,
    WorkAreaInsets,
    AddScreenParams,
    BrowserContextEvents,
    CDPEvents,
    CDPSessionEvents,
    CommandOptions,
    DeviceRequestPromptDevice,
    Quad,
    BoxModel,
    BoundingBox,
    Offset,
    ClickOptions,
    Point,
    ElementScreenshotOptions,
    AutofillData,
    WaitForOptions,
    GoToOptions,
    SetContentWaitForOptions,
    FrameWaitForFunctionOptions,
    FrameAddScriptTagOptions,
    FrameAddStyleTagOptions,
    FrameEvents,
    ContinueRequestOverrides,
    InterceptResolutionState,
    ResponseForRequest,
    ResourceType,
    ErrorCode,
    ActionResult,
    RemoteAddress,
    KeyDownOptions,
    KeyboardTypeOptions,
    KeyPressOptions,
    MouseOptions,
    MouseClickOptions,
    MouseWheelOptions,
    MouseMoveOptions,
    TouchHandle,
    Issue,
    Metrics,
    Credentials,
    WaitForNetworkIdleOptions,
    WaitTimeoutOptions,
    WaitForSelectorOptions,
    GeolocationOptions,
    MediaFeature,
    ScreenshotClip,
    ImageFormat,
    VideoFormat,
    ScreenshotOptions,
    ScreencastOptions,
    QueryOptions,
    PageEvents,
    NewDocumentScriptEvaluation,
    ReloadOptions,
    HeapSnapshotOptions,
    WebWorkerEvents,
    VisibilityOption,
    ActionOptions,
    LocatorClickOptions,
    LocatorFillOptions,
    LocatorScrollOptions,
    LocatorEvents,
    Predicate,
    Mapper,
    AwaitedLocator,
    SerializedAXNode,
    SnapshotOptions,
    CoverageEntry,
    JSCoverageEntry,
    JSCoverageOptions,
    CSSCoverageOptions,
    PuppeteerLifeCycleEvent,
    ProtocolLifeCycleEvent,
    NetworkConditions,
    InternalNetworkConditions,
    TracingOptions,
    WebMCPAnnotation,
    WebMCPInvocationStatus,
    WebMCPToolsAddedEvent,
    WebMCPToolsRemovedEvent,
    WebMCPToolCallResult,
    ExperimentsConfiguration,
    Configuration,
    ChromeSettings,
    ChromeHeadlessShellSettings,
    FirefoxSettings,
    ConnectionTransport,
    ProtocolType,
    SupportedWebDriverCapability,
    SupportedWebDriverCapabilities,
    ChromeReleaseChannel,
    ConnectOptions,
    ConsoleMessageLocation,
    ConsoleMessageType,
    CookieSameSite,
    CookiePriority,
    CookieSourceScheme,
    CookiePartitionKey,
    Cookie,
    CookieParam,
    CookieData,
    DeleteCookiesRequest,
    CustomQueryHandler,
    Device,
    EventType,
    Handler,
    CommonEventEmitter,
    EventsWithWildcard,
    PDFMargin,
    LowerCasePaperFormat,
    PaperFormat,
    PDFOptions,
    SupportedBrowser,
    AwaitablePredicate,
    Moveable,
    AwaitableIterable,
    Awaitable,
    HandleFor,
    HandleOr,
    FlattenHandle,
    InnerParams,
    ElementFor,
    EvaluateFunc,
    EvaluateFuncWith,
    NodeFor,
    KeyInput,
    Viewport,
    DownloadPolicy,
    DownloadBehavior,
    LaunchOptions,
  };
  export {
    Protocol,
    Session,
    BrowserEvent,
    Browser,
    BrowserContextEvent,
    BrowserContext,
    CDPSessionEvent,
    CDPSession,
    DeviceRequestPrompt,
    Dialog,
    ElementHandle,
    AutofillAddressField,
    Extension,
    Frame,
    DEFAULT_INTERCEPT_RESOLUTION_PRIORITY,
    HTTPRequest,
    InterceptResolutionAction,
    HTTPResponse,
    Keyboard,
    MouseButton,
    Mouse,
    Touchscreen,
    JSHandle,
    PageEvent,
    Page,
    Realm,
    TargetType,
    Target,
    WebWorkerEvent,
    WebWorker,
    LocatorEvent,
    Locator,
    Accessibility,
    Connection,
    Coverage,
    JSCoverage,
    CSSCoverage,
    ExtensionTransport,
    PredefinedNetworkConditions,
    Tracing,
    WebMCPTool,
    WebMCPToolCall,
    WebMCP,
    ConsoleMessage,
    KnownDevices,
    PuppeteerError,
    TimeoutError,
    TouchError,
    ProtocolError,
    UnsupportedOperation,
    ConnectionClosedError,
    EventEmitter,
    FileChooser,
    Puppeteer,
    SecurityDetails,
    BrowserLauncher,
    PuppeteerNode,
    ScreenRecorder,
  };
}

/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The base class for all Puppeteer-specific errors
 *
 * @public
 */
export declare class PuppeteerError extends Error {}

/**
 * @public
 */
export declare type PuppeteerLifeCycleEvent =
  /**
   * Waits for the 'load' event.
   */
  | 'load'
  /**
   * Waits for the 'DOMContentLoaded' event.
   */
  | 'domcontentloaded'
  /**
   * Waits till there are no more than 0 network connections for at least `500`
   * ms.
   */
  | 'networkidle0'
  /**
   * Waits till there are no more than 2 network connections for at least `500`
   * ms.
   */
  | 'networkidle2';

/**
 * Extends the main {@link Puppeteer} class with Node specific behaviour for
 * fetching and downloading browsers.
 *
 * If you're using Puppeteer in a Node environment, this is the class you'll get
 * when you run `require('puppeteer')` (or the equivalent ES `import`).
 *
 * @remarks
 * The most common method to use is {@link PuppeteerNode.launch | launch}, which
 * is used to launch and connect to a new browser instance.
 *
 * See {@link Puppeteer | the main Puppeteer class} for methods common to all
 * environments, such as {@link Puppeteer.connect}.
 *
 * @example
 * The following is a typical example of using Puppeteer to drive automation:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.goto('https://www.google.com');
 * // other actions...
 * await browser.close();
 * ```
 *
 * Once you have created a `page` you have access to a large API to interact
 * with the page, navigate, or find certain elements in that page.
 * The {@link Page | `page` documentation} lists all the available methods.
 *
 * @public
 */
export declare class PuppeteerNode extends Puppeteer {
  #private;
  configuration: () => Promise<Configuration>;
  /**
   * This method attaches Puppeteer to an existing browser instance.
   *
   * @param options - Set of configurable options to set on the browser.
   * @returns Promise which resolves to browser instance.
   */
  connect(options: ConnectOptions): Promise<Browser>;
  /**
   * Launches a browser instance with given arguments and options when
   * specified.
   *
   * When using with `puppeteer-core`,
   * {@link LaunchOptions.executablePath | options.executablePath} or
   * {@link LaunchOptions.channel | options.channel} must be provided.
   *
   * @example
   * You can use {@link LaunchOptions.ignoreDefaultArgs | options.ignoreDefaultArgs}
   * to filter out `--mute-audio` from default arguments:
   *
   * ```ts
   * const browser = await puppeteer.launch({
   *   ignoreDefaultArgs: ['--mute-audio'],
   * });
   * ```
   *
   * @remarks
   * Puppeteer can also be used to control the Chrome browser, but it works best
   * with the version of Chrome for Testing downloaded by default.
   * There is no guarantee it will work with any other version. If Google Chrome
   * (rather than Chrome for Testing) is preferred, a
   * {@link https://www.google.com/chrome/browser/canary.html | Chrome Canary}
   * or
   * {@link https://www.chromium.org/getting-involved/dev-channel | Dev Channel}
   * build is suggested. See
   * {@link https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/ | this article}
   * for a description of the differences between Chromium and Chrome.
   * {@link https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md | This article}
   * describes some differences for Linux users. See
   * {@link https://developer.chrome.com/blog/chrome-for-testing/ | this doc} for the description
   * of Chrome for Testing.
   *
   * @param options - Options to configure launching behavior.
   */
  launch(options?: LaunchOptions): Promise<Browser>;
  /**
   * The default executable path for a given ChromeReleaseChannel.
   */
  executablePath(channel: ChromeReleaseChannel): Promise<string>;
  /**
   * The default executable path given LaunchOptions.
   */
  executablePath(options: LaunchOptions): Promise<string>;
  /**
   * The default executable path.
   */
  executablePath(): Promise<string>;
  /**
   * The name of the browser that was last launched.
   */
  lastLaunchedBrowser(): Promise<SupportedBrowser>;
  /**
   * The name of the browser that will be launched by default. For
   * `puppeteer`, this is influenced by your configuration. Otherwise, it's
   * `chrome`.
   */
  defaultBrowser(): Promise<SupportedBrowser>;
  /**
   * @param options - Set of configurable options to set on the browser.
   *
   * @returns The default arguments that the browser will be launched with.
   */
  defaultArgs(options?: LaunchOptions): Promise<string[]>;
  /**
   * Removes all non-current Firefox and Chrome binaries in the cache directory
   * identified by the provided Puppeteer configuration. The current browser
   * version is determined by resolving PUPPETEER_REVISIONS from Puppeteer
   * unless `configuration.browserRevision` is provided.
   *
   * @remarks
   *
   * Note that the method does not check if any other Puppeteer versions
   * installed on the host that use the same cache directory require the
   * non-current binaries.
   *
   * @public
   */
  trimCache(): Promise<void>;
}

/**
 * @public
 */
export declare type Quad = [Point, Point, Point, Point];

/**
 * @public
 */
export declare interface QueryOptions {
  /**
   * Whether to run the query in isolation. When returning many elements
   * from {@link Page.$$} or similar methods, it might be useful to turn
   * off the isolation to improve performance. By default, the querying
   * code will be executed in a separate sandbox realm.
   *
   * @defaultValue `true`
   */
  isolate: boolean;
}

/**
 * @public
 */
export declare abstract class Realm {
  #private;
  /**
   * Returns the origin that created the Realm.
   * For example, if the realm was created by an extension content script,
   * this will return the origin of the extension
   * (e.g., `chrome-extension://<extension-id>`).
   *
   * @experimental
   * @example
   * `chrome-extension://<chrome-extension-id>`
   */
  abstract get origin(): string | undefined;
  /**
   * Returns the {@link Extension} that created this realm, if applicable.
   * This is typically populated when the realm was created by an extension
   * content script injected into a page.
   *
   * @returns A promise that resolves to the {@link Extension}
   * or `null` if not created by an extension.
   * @experimental
   */
  abstract extension(): Promise<Extension | null>;
  /**
   * Evaluates a function in the realm's context and returns a
   * {@link JSHandle} to the result.
   *
   * If the function passed to `realm.evaluateHandle` returns a Promise,
   * the method will wait for the promise to resolve and return its value.
   *
   * {@link JSHandle} instances can be passed as arguments to the function.
   *
   * @example
   *
   * ```ts
   * const aHandle = await realm.evaluateHandle(() => document.body);
   * const resultHandle = await realm.evaluateHandle(
   *   body => body.innerHTML,
   *   aHandle,
   * );
   * ```
   *
   * @param pageFunction - A function to be evaluated in the realm.
   * @param args - Arguments to be passed to the `pageFunction`.
   * @returns A promise that resolves to a {@link JSHandle} containing
   * the result.
   * @public
   */
  abstract evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
  /**
   * Evaluates a function in the realm's context and returns the
   * resulting value.
   *
   * If the function passed to `realm.evaluate` returns a Promise,
   * the method will wait for the promise to resolve and return its value.
   *
   * {@link JSHandle} instances can be passed as arguments to the function.
   *
   * @example
   *
   * ```ts
   * const result = await realm.evaluate(() => {
   *   return Promise.resolve(8 * 7);
   * });
   * console.log(result); // prints "56"
   * ```
   *
   * @param pageFunction - A function to be evaluated in the realm.
   * @param args - Arguments to be passed to the `pageFunction`.
   * @returns A promise that resolves to the return value of the function.
   * @public
   */
  abstract evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  /**
   * Waits for a function to return a truthy value when evaluated in
   * the realm's context.
   *
   * Arguments can be passed from Node.js to `pageFunction`.
   *
   * @example
   *
   * ```ts
   * const selector = '.foo';
   * await realm.waitForFunction(
   *   selector => !!document.querySelector(selector),
   *   {},
   *   selector,
   * );
   * ```
   *
   * @param pageFunction - A function to evaluate in the realm.
   * @param options - Options for polling and timeouts.
   * @param args - Arguments to pass to the function.
   * @returns A promise that resolves when the function returns a truthy
   * value.
   * @public
   */
  waitForFunction<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    pageFunction: Func | string,
    options?: {
      polling?: 'raf' | 'mutation' | number;
      timeout?: number;
      root?: ElementHandle<Node>;
      signal?: AbortSignal;
    },
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
}

/**
 * @public
 */
export declare interface ReloadOptions extends WaitForOptions {
  /**
   * If set to true, the browser caches are ignored for the page reload.
   *
   * @defaultValue true
   * @public
   */
  ignoreCache?: boolean;
}

/**
 * @public
 */
export declare interface RemoteAddress {
  ip?: string;
  port?: number;
}

/**
 * Resource types for HTTPRequests as perceived by the rendering engine.
 *
 * @public
 */
export declare type ResourceType = Lowercase<Protocol.Network.ResourceType>;

/**
 * Required response data to fulfill a request with.
 *
 * @public
 */
export declare interface ResponseForRequest {
  status: number;
  /**
   * Optional response headers.
   *
   * The record values will be converted to string following:
   * Arrays' values will be mapped to String
   * (Used when you need multiple headers with the same name).
   * Non-arrays will be converted to String.
   */
  headers: Record<string, string | string[] | unknown>;
  contentType: string;
  body: string | Uint8Array;
}

/**
 * @public
 * @experimental
 */
export declare interface ScreencastOptions {
  /**
   * File path to save the screencast to.
   */
  path?: `${string}.${VideoFormat}`;
  /**
   * Specifies whether to overwrite output file,
   * or exit immediately if it already exists.
   *
   * @defaultValue `true`
   */
  overwrite?: boolean;
  /**
   * Specifies the output file format.
   *
   * @defaultValue `'webm'`
   */
  format?: VideoFormat;
  /**
   * Specifies the region of the viewport to crop.
   */
  crop?: BoundingBox;
  /**
   * Scales the output video.
   *
   * For example, `0.5` will shrink the width and height of the output video by
   * half. `2` will double the width and height of the output video.
   *
   * @defaultValue `1`
   */
  scale?: number;
  /**
   * Specifies the speed to record at.
   *
   * For example, `0.5` will slowdown the output video by 50%. `2` will double the
   * speed of the output video.
   *
   * @defaultValue `1`
   */
  speed?: number;
  /**
   * Specifies the frame rate in frames per second.
   *
   * @defaultValue `30` (`20` for GIF)
   */
  fps?: number;
  /**
   * Specifies the number of times to loop playback, from `0` to `Infinity`.
   * A value of `0` or `undefined` will disable looping.
   *
   * @defaultValue `undefined`
   */
  loop?: number;
  /**
   * Specifies the delay between iterations of a loop, in ms.
   * `-1` is a special value to re-use the previous delay.
   *
   * @defaultValue `-1`
   */
  delay?: number;
  /**
   * Specifies the recording
   * {@link https://trac.ffmpeg.org/wiki/Encode/VP9#constantq | quality}
   * Constant Rate Factor between `0`–`63`. Lower values mean better quality.
   *
   * @defaultValue `30`
   */
  quality?: number;
  /**
   * Specifies the maximum number of
   * {@link https://ffmpeg.org/ffmpeg-filters.html#palettegen | palette}
   * colors to quantize, with GIF limited to `256`.
   * Restrict the palette to only necessary colors to reduce output file size.
   *
   * @defaultValue `256`
   */
  colors?: number;
  /**
   * Path to the {@link https://ffmpeg.org/ | ffmpeg}.
   *
   * Required if `ffmpeg` is not in your PATH.
   *
   * @defaultValue `'ffmpeg'`
   */
  ffmpegPath?: string;
}

/**
 * @public
 */
export declare interface ScreenInfo {
  left: number;
  top: number;
  width: number;
  height: number;
  availLeft: number;
  availTop: number;
  availWidth: number;
  availHeight: number;
  devicePixelRatio: number;
  colorDepth: number;
  orientation: ScreenOrientation_2;
  isExtended: boolean;
  isInternal: boolean;
  isPrimary: boolean;
  label: string;
  id: string;
}

/**
 * @public
 */
declare interface ScreenOrientation_2 {
  angle: number;
  type: string;
}
export type {ScreenOrientation_2 as ScreenOrientation};

/**
 * @public
 */
export declare class ScreenRecorder extends PassThrough {
  #private;
  /**
   * Stops the recorder.
   *
   * @public
   */
  stop(): Promise<void>;
}

/**
 * @public
 */
export declare interface ScreenshotClip extends BoundingBox {
  /**
   * @defaultValue `1`
   */
  scale?: number;
}

/**
 * @public
 */
export declare interface ScreenshotOptions {
  /**
   * @defaultValue `false`
   */
  optimizeForSpeed?: boolean;
  /**
   * @defaultValue `'png'`
   */
  type?: ImageFormat;
  /**
   * Quality of the image, between 0-100. Not applicable to `png` images.
   */
  quality?: number;
  /**
   * Capture the screenshot from the surface, rather than the view.
   *
   * @defaultValue `true`
   */
  fromSurface?: boolean;
  /**
   * When `true`, takes a screenshot of the full page.
   *
   * @defaultValue `false`
   */
  fullPage?: boolean;
  /**
   * Hides default white background and allows capturing screenshots with transparency.
   *
   * @defaultValue `false`
   */
  omitBackground?: boolean;
  /**
   * The file path to save the image to. The screenshot type will be inferred
   * from file extension. If path is a relative path, then it is resolved
   * relative to current working directory. If no path is provided, the image
   * won't be saved to the disk.
   */
  path?: string;
  /**
   * Specifies the region of the page/element to clip.
   */
  clip?: ScreenshotClip;
  /**
   * Encoding of the image.
   *
   * @defaultValue `'binary'`
   */
  encoding?: 'base64' | 'binary';
  /**
   * Capture the screenshot beyond the viewport.
   *
   * @defaultValue `false` if there is no `clip`. `true` otherwise.
   */
  captureBeyondViewport?: boolean;
}

/**
 * The SecurityDetails class represents the security details of a
 * response that was received over a secure connection.
 *
 * @public
 */
export declare class SecurityDetails {
  #private;
  /**
   * The name of the issuer of the certificate.
   */
  issuer(): string;
  /**
   * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
   * marking the start of the certificate's validity.
   */
  validFrom(): number;
  /**
   * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
   * marking the end of the certificate's validity.
   */
  validTo(): number;
  /**
   * The security protocol being used, e.g. "TLS 1.2".
   */
  protocol(): string;
  /**
   * The name of the subject to which the certificate was issued.
   */
  subjectName(): string;
  /**
   * The list of {@link https://en.wikipedia.org/wiki/Subject_Alternative_Name | subject alternative names (SANs)} of the certificate.
   */
  subjectAlternativeNames(): string[];
}

/**
 * Represents a Node and the properties of it that are relevant to Accessibility.
 * @public
 */
export declare interface SerializedAXNode {
  /**
   * The {@link https://www.w3.org/TR/wai-aria/#usage_intro | role} of the node.
   */
  role: string;
  /**
   * A human readable name for the node.
   */
  name?: string;
  /**
   * The current value of the node.
   */
  value?: string | number;
  /**
   * An additional human readable description of the node.
   */
  description?: string;
  /**
   * Any keyboard shortcuts associated with this node.
   */
  keyshortcuts?: string;
  /**
   * A human readable alternative to the role.
   */
  roledescription?: string;
  /**
   * A description of the current value.
   */
  valuetext?: string;
  disabled?: boolean;
  expanded?: boolean;
  focused?: boolean;
  modal?: boolean;
  multiline?: boolean;
  /**
   * Whether more than one child can be selected.
   */
  multiselectable?: boolean;
  readonly?: boolean;
  required?: boolean;
  selected?: boolean;
  /**
   * Whether the checkbox is checked, or in a
   * {@link https://www.w3.org/TR/wai-aria-practices/examples/checkbox/checkbox-2/checkbox-2.html | mixed state}.
   */
  checked?: boolean | 'mixed';
  /**
   * Whether the node is checked or in a mixed state.
   */
  pressed?: boolean | 'mixed';
  /**
   * The level of a heading.
   */
  level?: number;
  valuemin?: number;
  valuemax?: number;
  autocomplete?: string;
  haspopup?: string;
  /**
   * Whether and in what way this node's value is invalid.
   */
  invalid?: string;
  orientation?: string;
  /**
   * Whether the node is {@link https://www.w3.org/TR/wai-aria/#aria-busy | busy}.
   */
  busy?: boolean;
  /**
   * The {@link https://www.w3.org/TR/wai-aria/#aria-live | live} status of the
   * node.
   */
  live?: string;
  /**
   * Whether the live region is
   * {@link https://www.w3.org/TR/wai-aria/#aria-atomic | atomic}.
   */
  atomic?: boolean;
  /**
   * The {@link https://www.w3.org/TR/wai-aria/#aria-relevant | relevant}
   * changes for the live region.
   */
  relevant?: string;
  /**
   * The {@link https://www.w3.org/TR/wai-aria/#aria-errormessage | error message}
   * for the node.
   */
  errormessage?: string;
  /**
   * The {@link https://www.w3.org/TR/wai-aria/#aria-details | details} for the
   * node.
   */
  details?: string;
  /**
   * Url for link elements.
   */
  url?: string;
  /**
   * Children of this node, if there are any.
   */
  children?: SerializedAXNode[];
  /**
   * Get an ElementHandle for this AXNode if available.
   *
   * If the underlying DOM element has been disposed, the method might return an
   * error.
   */
  elementHandle(): Promise<ElementHandle | null>;
}

export {Session};

/**
 * @public
 */
export declare interface SetContentWaitForOptions extends WaitForOptions {
  /**
   * When to consider waiting succeeds. Given an array of event strings, waiting
   * is considered to be successful after all events have been fired.
   *
   * @defaultValue `'load'`
   */
  waitUntil?:
    | Exclude<PuppeteerLifeCycleEvent, 'networkidle0' | 'networkidle2'>
    | Array<Exclude<PuppeteerLifeCycleEvent, 'networkidle0' | 'networkidle2'>>;
}

/**
 * @public
 */
export declare interface SnapshotOptions {
  /**
   * Prune uninteresting nodes from the tree.
   * @defaultValue `true`
   */
  interestingOnly?: boolean;
  /**
   * If true, gets accessibility trees for each of the iframes in the frame
   * subtree.
   *
   * @defaultValue `false`
   */
  includeIframes?: boolean;
  /**
   * Root node to get the accessibility tree for
   * @defaultValue The root node of the entire page.
   */
  root?: ElementHandle<Node>;
}

/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Browsers supported by Puppeteer.
 *
 * @public
 */
export declare type SupportedBrowser = 'chrome' | 'firefox';

/**
 * WebDriver BiDi capabilities that are not set by Puppeteer itself.
 *
 * @public
 */
export declare interface SupportedWebDriverCapabilities {
  firstMatch?: SupportedWebDriverCapability[];
  alwaysMatch?: SupportedWebDriverCapability;
}

/**
 * @public
 */
export declare type SupportedWebDriverCapability = Exclude<
  Session.CapabilityRequest,
  'unhandledPromptBehavior' | 'acceptInsecureCerts'
>;

/**
 * Target represents a
 * {@link https://chromedevtools.github.io/devtools-protocol/tot/Target/ | CDP target}.
 * In CDP a target is something that can be debugged such a frame, a page or a
 * worker.
 * @public
 */
export declare abstract class Target {
  /**
   * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
   */
  worker(): Promise<WebWorker | null>;
  /**
   * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
   * returns `null`.
   */
  page(): Promise<Page | null>;
  /**
   * Forcefully creates a page for a target of any type. It is useful if you
   * want to handle a CDP target of type `other` as a page. If you deal with a
   * regular page target, use {@link Target.page}.
   */
  abstract asPage(): Promise<Page>;
  abstract url(): string;
  /**
   * Creates a Chrome Devtools Protocol session attached to the target.
   */
  abstract createCDPSession(): Promise<CDPSession>;
  /**
   * Identifies what kind of target this is.
   *
   * @remarks
   *
   * See {@link https://developer.chrome.com/extensions/background_pages | docs} for more info about background pages.
   */
  abstract type(): TargetType;
  /**
   * Get the browser the target belongs to.
   */
  abstract browser(): Browser;
  /**
   * Get the browser context the target belongs to.
   */
  abstract browserContext(): BrowserContext;
  /**
   * Get the target that opened this target. Top-level targets return `null`.
   */
  abstract opener(): Target | undefined;
}

/**
 * @public
 */
export declare type TargetFilterCallback = (target: Target) => boolean;

/**
 * @public
 */
export declare enum TargetType {
  PAGE = 'page',
  BACKGROUND_PAGE = 'background_page',
  SERVICE_WORKER = 'service_worker',
  SHARED_WORKER = 'shared_worker',
  BROWSER = 'browser',
  WEBVIEW = 'webview',
  OTHER = 'other',
}

/**
 * TimeoutError is emitted whenever certain operations are terminated due to
 * timeout.
 *
 * @remarks
 * Example operations are {@link Page.waitForSelector | page.waitForSelector} or
 * {@link PuppeteerNode.launch | puppeteer.launch}.
 *
 * @public
 */
export declare class TimeoutError extends PuppeteerError {}

/**
 * TouchError is thrown when an attempt is made to move or end a touch that does
 * not exist.
 * @public
 */
export declare class TouchError extends PuppeteerError {}

/**
 * The TouchHandle interface exposes methods to manipulate touches that have been started
 * @public
 */
export declare interface TouchHandle {
  /**
   * Dispatches a `touchMove` event for this touch.
   * @param x - Horizontal position of the move.
   * @param y - Vertical position of the move.
   */
  move(x: number, y: number): Promise<void>;
  /**
   * Dispatches a `touchend` event for this touch.
   */
  end(): Promise<void>;
}

/**
 * The Touchscreen class exposes touchscreen events.
 * @public
 */
export declare abstract class Touchscreen {
  /**
   * Dispatches a `touchstart` and `touchend` event.
   * @param x - Horizontal position of the tap.
   * @param y - Vertical position of the tap.
   */
  tap(x: number, y: number): Promise<void>;
  /**
   * Dispatches a `touchstart` event.
   * @param x - Horizontal position of the tap.
   * @param y - Vertical position of the tap.
   * @returns A handle for the touch that was started.
   */
  abstract touchStart(x: number, y: number): Promise<TouchHandle>;
  /**
   * Dispatches a `touchMove` event on the first touch that is active.
   * @param x - Horizontal position of the move.
   * @param y - Vertical position of the move.
   *
   * @remarks
   *
   * Not every `touchMove` call results in a `touchmove` event being emitted,
   * depending on the browser's optimizations. For example, Chrome
   * {@link https://developer.chrome.com/blog/a-more-compatible-smoother-touch/#chromes-new-model-the-throttled-async-touchmove-model | throttles}
   * touch move events.
   */
  touchMove(x: number, y: number): Promise<void>;
  /**
   * Dispatches a `touchend` event on the first touch that is active.
   */
  touchEnd(): Promise<void>;
}

/**
 * The Tracing class exposes the tracing audit interface.
 * @remarks
 * You can use `tracing.start` and `tracing.stop` to create a trace file
 * which can be opened in Chrome DevTools or {@link https://chromedevtools.github.io/timeline-viewer/ | timeline viewer}.
 *
 * @example
 *
 * ```ts
 * await page.tracing.start({path: 'trace.json'});
 * await page.goto('https://www.google.com');
 * await page.tracing.stop();
 * ```
 *
 * @public
 */
export declare class Tracing {
  #private;
  /**
   * Starts a trace for the current page.
   * @remarks
   * Only one trace can be active at a time per browser.
   *
   * @param options - Optional `TracingOptions`.
   */
  start(options?: TracingOptions): Promise<void>;
  /**
   * Stops a trace started with the `start` method.
   * @returns Promise which resolves to buffer with trace data.
   */
  stop(): Promise<Uint8Array | undefined>;
}

/**
 * @public
 */
export declare interface TracingOptions {
  path?: string;
  screenshots?: boolean;
  categories?: string[];
}

/**
 * Puppeteer will throw this error if a method is not
 * supported by the currently used protocol
 *
 * @public
 */
export declare class UnsupportedOperation extends PuppeteerError {}

/**
 * @public
 */
export declare type VideoFormat = 'webm' | 'gif' | 'mp4';

/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @public
 */
export declare interface Viewport {
  /**
   * The page width in CSS pixels.
   *
   * @remarks
   * Setting this value to `0` will reset this value to the system default.
   */
  width: number;
  /**
   * The page height in CSS pixels.
   *
   * @remarks
   * Setting this value to `0` will reset this value to the system default.
   */
  height: number;
  /**
   * Specify device scale factor.
   * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio | devicePixelRatio} for more info.
   *
   * @remarks
   * Setting this value to `0` will reset this value to the system default.
   *
   * @defaultValue `1`
   */
  deviceScaleFactor?: number;
  /**
   * Whether the `meta viewport` tag is taken into account.
   * @defaultValue `false`
   */
  isMobile?: boolean;
  /**
   * Specifies if the viewport is in landscape mode.
   * @defaultValue `false`
   */
  isLandscape?: boolean;
  /**
   * Specify if the viewport supports touch events.
   * @defaultValue `false`
   */
  hasTouch?: boolean;
}

/**
 * Whether to wait for the element to be
 * {@link ElementHandle.isVisible | visible} or
 * {@link ElementHandle.isHidden | hidden}.
 * `null` to disable visibility checks.
 *
 * @public
 */
export declare type VisibilityOption = 'hidden' | 'visible' | null;

/**
 * @public
 */
export declare interface WaitForNetworkIdleOptions extends WaitTimeoutOptions {
  /**
   * Time (in milliseconds) the network should be idle.
   *
   * @defaultValue `500`
   */
  idleTime?: number;
  /**
   * Maximum number concurrent of network connections to be considered inactive.
   *
   * @defaultValue `0`
   */
  concurrency?: number;
}

/**
 * @public
 */
export declare interface WaitForOptions {
  /**
   * Maximum wait time in milliseconds. Pass 0 to disable the timeout.
   *
   * The default value can be changed by using the
   * {@link Page.setDefaultTimeout} or {@link Page.setDefaultNavigationTimeout}
   * methods.
   *
   * @defaultValue `30000`
   */
  timeout?: number;
  /**
   * When to consider waiting succeeds. Given an array of event strings, waiting
   * is considered to be successful after all events have been fired.
   *
   * @defaultValue `'load'`
   */
  waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[];
  /**
   * A signal object that allows you to cancel the call.
   */
  signal?: AbortSignal;
}

/**
 * @public
 */
export declare interface WaitForSelectorOptions {
  /**
   * Wait for the selected element to be present in DOM and to be visible. See
   * {@link ElementHandle.isVisible} for the definition of element visibility.
   *
   * @defaultValue `false`
   */
  visible?: boolean;
  /**
   * Wait for the selected element to not be found in the DOM or to be hidden.
   * See {@link ElementHandle.isHidden} for the definition of element
   * invisibility.
   *
   * @defaultValue `false`
   */
  hidden?: boolean;
  /**
   * Maximum time to wait in milliseconds. Pass `0` to disable timeout.
   *
   * The default value can be changed by using {@link Page.setDefaultTimeout}
   *
   * @defaultValue `30_000` (30 seconds)
   */
  timeout?: number;
  /**
   * A signal object that allows you to cancel a waitForSelector call.
   */
  signal?: AbortSignal;
}

/**
 * @public
 */
export declare interface WaitForTargetOptions {
  /**
   * Maximum wait time in milliseconds. Pass `0` to disable the timeout.
   *
   * @defaultValue `30_000`
   */
  timeout?: number;
  /**
   * A signal object that allows you to cancel a waitFor call.
   */
  signal?: AbortSignal;
}

/**
 * @public
 */
export declare interface WaitTimeoutOptions {
  /**
   * Maximum wait time in milliseconds. Pass 0 to disable the timeout.
   *
   * The default value can be changed by using the
   * {@link Page.setDefaultTimeout} method.
   *
   * @defaultValue `30_000`
   */
  timeout?: number;
  /**
   * A signal object that allows you to cancel a waitFor call.
   */
  signal?: AbortSignal;
}

/**
 * The experimental WebMCP class provides an API for the WebMCP API.
 *
 * See the
 * {@link https://pptr.dev/guides/webmcp|WebMCP guide}
 * for more details.
 *
 * @example
 *
 * ```ts
 * await page.goto('https://www.example.com');
 * const tools = page.webmcp.tools();
 * for (const tool of tools) {
 *   console.log(`Tool found: ${tool.name} - ${tool.description}`);
 * }
 * ```
 *
 * @experimental
 * @public
 */
export declare class WebMCP extends EventEmitter<{
  /** Emitted when tools are added. */
  toolsadded: WebMCPToolsAddedEvent;
  /** Emitted when tools are removed. */
  toolsremoved: WebMCPToolsRemovedEvent;
  /** Emitted when a tool invocation starts. */
  toolinvoked: WebMCPToolCall;
  /** Emitted when a tool invocation completes or fails. */
  toolresponded: WebMCPToolCallResult;
}> {
  #private;
  /**
   * Gets all WebMCP tools defined by the page.
   */
  tools(): WebMCPTool[];
}

/**
 * Tool annotations
 *
 * @public
 */
export declare interface WebMCPAnnotation {
  /**
   * A hint indicating that the tool does not modify any state.
   */
  readOnly?: boolean;
  /**
   * A hint indicating that the tool output may contain untrusted content, ex: UGC, 3rd
   * party data.
   */
  untrustedContent?: boolean;
  /**
   * If the declarative tool was declared with the autosubmit attribute.
   */
  autosubmit?: boolean;
}

/**
 * Represents the status of a tool invocation.
 *
 * @public
 */
export declare type WebMCPInvocationStatus = 'Completed' | 'Canceled' | 'Error';

/**
 * Represents a registered WebMCP tool available on the page.
 *
 * @public
 */
export declare class WebMCPTool extends EventEmitter<{
  /** Emitted when invocation starts. */
  toolinvoked: WebMCPToolCall;
}> {
  #private;
  /**
   * Tool name.
   */
  name: string;
  /**
   * Tool description.
   */
  description: string;
  /**
   * Schema for the tool's input parameters.
   */
  inputSchema?: object;
  /**
   * Optional annotations for the tool.
   */
  annotations?: WebMCPAnnotation;
  /**
   * Frame the tool was defined for.
   */
  frame: Frame;
  /**
   * Source location that defined the tool (if available).
   */
  location?: ConsoleMessageLocation;
  /**
   * The corresponding ElementHandle when tool was registered via a form.
   */
  get formElement(): Promise<ElementHandle<HTMLFormElement> | undefined>;
  /**
   * Executes tool with input parameters, matching tool's `inputSchema`.
   */
  execute(input?: object): Promise<WebMCPToolCallResult>;
}

/**
 * @public
 */
export declare class WebMCPToolCall {
  /**
   * Tool invocation identifier.
   */
  id: string;
  /**
   * Tool that was called.
   */
  tool: WebMCPTool;
  /**
   * The input parameters used for the call.
   */
  input: object;
}

/**
 * @public
 */
export declare interface WebMCPToolCallResult {
  /**
   * Tool invocation identifier.
   */
  id: string;
  /**
   * The corresponding tool call if available.
   */
  call?: WebMCPToolCall;
  /**
   * Status of the invocation.
   */
  status: WebMCPInvocationStatus;
  /**
   * Output or error delivered as delivered to the agent. Missing if `status` is anything
   * other than Completed.
   */
  output?: any;
  /**
   * Error text.
   */
  errorText?: string;
  /**
   * The exception object, if the javascript tool threw an error.
   */
  exception?: Protocol.Runtime.RemoteObject;
}

/**
 * @public
 */
export declare interface WebMCPToolsAddedEvent {
  /**
   * Array of tools that were added.
   */
  tools: WebMCPTool[];
}

/**
 * @public
 */
export declare interface WebMCPToolsRemovedEvent {
  /**
   * Array of tools that were removed.
   */
  tools: WebMCPTool[];
}

/**
 * This class represents a
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API | WebWorker}.
 *
 * @remarks
 * The events `workercreated` and `workerdestroyed` are emitted on the page
 * object to signal the worker lifecycle.
 *
 * @example
 *
 * ```ts
 * page.on('workercreated', worker =>
 *   console.log('Worker created: ' + worker.url()),
 * );
 * page.on('workerdestroyed', worker =>
 *   console.log('Worker destroyed: ' + worker.url()),
 * );
 *
 * console.log('Current workers:');
 * for (const worker of page.workers()) {
 *   console.log('  ' + worker.url());
 * }
 * ```
 *
 * @public
 */
export declare abstract class WebWorker extends EventEmitter<WebWorkerEvents> {
  #private;
  /**
   * The URL of this web worker.
   */
  url(): string;
  /**
   * The CDP session client the WebWorker belongs to.
   */
  abstract get client(): CDPSession;
  /**
   * Evaluates a given function in the {@link WebWorker | worker}.
   *
   * @remarks If the given function returns a promise,
   * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
   *
   * As a rule of thumb, if the return value of the given function is more
   * complicated than a JSON object (e.g. most classes), then
   * {@link WebWorker.evaluate | evaluate} will _likely_ return some truncated
   * value (or `{}`). This is because we are not returning the actual return
   * value, but a deserialized version as a result of transferring the return
   * value through a protocol to Puppeteer.
   *
   * In general, you should use
   * {@link WebWorker.evaluateHandle | evaluateHandle} if
   * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
   * properly or you need a mutable {@link JSHandle | handle} to the return
   * object.
   *
   * @param func - Function to be evaluated.
   * @param args - Arguments to pass into `func`.
   * @returns The result of `func`.
   */
  evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(func: Func | string, ...args: Params): Promise<Awaited<ReturnType<Func>>>;
  /**
   * Evaluates a given function in the {@link WebWorker | worker}.
   *
   * @remarks If the given function returns a promise,
   * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
   *
   * In general, you should use
   * {@link WebWorker.evaluateHandle | evaluateHandle} if
   * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
   * properly or you need a mutable {@link JSHandle | handle} to the return
   * object.
   *
   * @param func - Function to be evaluated.
   * @param args - Arguments to pass into `func`.
   * @returns A {@link JSHandle | handle} to the return value of `func`.
   */
  evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
  >(
    func: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
  close(): Promise<void>;
}

/**
 * @public
 */
export declare enum WebWorkerEvent {
  /**
   * Emitted when the worker calls a console API.
   */
  Console = 'console',
  /**
   * Emitted when the worker throws an exception.
   */
  Error = 'error',
}

/**
 * @public
 */
export declare interface WebWorkerEvents extends Record<EventType, unknown> {
  [WebWorkerEvent.Console]: ConsoleMessage;
  [WebWorkerEvent.Error]: Error;
}

/**
 * @public
 */
export declare interface WindowBounds {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  windowState?: WindowState;
}

/**
 * @public
 */
export declare type WindowId = string;

/**
 * @public
 */
export declare type WindowState =
  | 'normal'
  | 'minimized'
  | 'maximized'
  | 'fullscreen';

/**
 * @public
 */
export declare interface WorkAreaInsets {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export {};
