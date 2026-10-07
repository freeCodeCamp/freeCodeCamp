/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type Protocol from 'devtools-protocol';
import type { ClickOptions, ElementHandle } from '../api/ElementHandle.js';
import type { HTTPResponse } from '../api/HTTPResponse.js';
import type { Page, QueryOptions, WaitForSelectorOptions, WaitTimeoutOptions } from '../api/Page.js';
import type { Accessibility } from '../cdp/Accessibility.js';
import type { PuppeteerLifeCycleEvent } from '../cdp/LifecycleWatcher.js';
import { EventEmitter, type EventType } from '../common/EventEmitter.js';
import type { Awaitable, EvaluateFunc, EvaluateFuncWith, HandleFor, NodeFor } from '../common/types.js';
import type { CDPSession } from './CDPSession.js';
import type { DeviceRequestPrompt } from './DeviceRequestPrompt.js';
import type { KeyboardTypeOptions } from './Input.js';
import { type Locator } from './locators/locators.js';
import type { Realm } from './Realm.js';
/**
 * @public
 */
export interface WaitForOptions {
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
     * @internal
     */
    ignoreSameDocumentNavigation?: boolean;
    /**
     * A signal object that allows you to cancel the call.
     */
    signal?: AbortSignal;
}
/**
 * @public
 */
export interface GoToOptions extends WaitForOptions {
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
export interface SetContentWaitForOptions extends WaitForOptions {
    /**
     * When to consider waiting succeeds. Given an array of event strings, waiting
     * is considered to be successful after all events have been fired.
     *
     * @defaultValue `'load'`
     */
    waitUntil?: Exclude<PuppeteerLifeCycleEvent, 'networkidle0' | 'networkidle2'> | Array<Exclude<PuppeteerLifeCycleEvent, 'networkidle0' | 'networkidle2'>>;
}
/**
 * @public
 */
export interface FrameWaitForFunctionOptions {
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
export interface FrameAddScriptTagOptions {
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
export interface FrameAddStyleTagOptions {
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
export interface FrameEvents extends Record<EventType, unknown> {
    /** @internal */
    [FrameEvent.FrameNavigated]: Protocol.Page.NavigationType;
    /** @internal */
    [FrameEvent.FrameSwapped]: undefined;
    /** @internal */
    [FrameEvent.LifecycleEvent]: undefined;
    /** @internal */
    [FrameEvent.FrameNavigatedWithinDocument]: undefined;
    /** @internal */
    [FrameEvent.FrameDetached]: Frame;
    /** @internal */
    [FrameEvent.FrameSwappedByActivation]: undefined;
}
/**
 * We use symbols to prevent external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */
export declare namespace FrameEvent {
    const FrameNavigated: unique symbol;
    const FrameSwapped: unique symbol;
    const LifecycleEvent: unique symbol;
    const FrameNavigatedWithinDocument: unique symbol;
    const FrameDetached: unique symbol;
    const FrameSwappedByActivation: unique symbol;
}
/**
 * @internal
 */
export declare const throwIfDetached: (target: (this: Frame, ...args: any[]) => any, _: unknown) => (this: Frame, ...args: any[]) => any;
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
     * @internal
     */
    _id: string;
    /**
     * @internal
     */
    _parentId?: string;
    /**
     * @internal
     */
    _name?: string;
    /**
     * @internal
     */
    _hasStartedLoading: boolean;
    /**
     * @internal
     */
    constructor();
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
    abstract goto(url: string, options?: GoToOptions): Promise<HTTPResponse | null>;
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
    abstract waitForNavigation(options?: WaitForOptions): Promise<HTTPResponse | null>;
    /**
     * @internal
     */
    abstract get client(): CDPSession;
    /**
     * @internal
     */
    abstract get accessibility(): Accessibility;
    /**
     * @internal
     */
    abstract mainRealm(): Realm;
    /**
     * @internal
     */
    abstract isolatedRealm(): Realm;
    /**
     * Used to clear the document handle that has been destroyed.
     *
     * @internal
     */
    clearDocumentHandle(): void;
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
    evaluateHandle<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(pageFunction: Func | string, ...args: Params): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
    /**
     * Behaves identically to {@link Page.evaluate} except it's run within
     * the context of this frame.
     *
     * See {@link Page.evaluate} for details.
     */
    evaluate<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(pageFunction: Func | string, ...args: Params): Promise<Awaited<ReturnType<Func>>>;
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
    locator<Selector extends string>(selector: Selector): Locator<NodeFor<Selector>>;
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
    $<Selector extends string>(selector: Selector): Promise<ElementHandle<NodeFor<Selector>> | null>;
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
    $$<Selector extends string>(selector: Selector, options?: QueryOptions): Promise<Array<ElementHandle<NodeFor<Selector>>>>;
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
    $eval<Selector extends string, Params extends unknown[], Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<NodeFor<Selector>, Params>>(selector: Selector, pageFunction: string | Func, ...args: Params): Promise<Awaited<ReturnType<Func>>>;
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
    $$eval<Selector extends string, Params extends unknown[], Func extends EvaluateFuncWith<Array<NodeFor<Selector>>, Params> = EvaluateFuncWith<Array<NodeFor<Selector>>, Params>>(selector: Selector, pageFunction: string | Func, ...args: Params): Promise<Awaited<ReturnType<Func>>>;
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
    waitForSelector<Selector extends string>(selector: Selector, options?: WaitForSelectorOptions): Promise<ElementHandle<NodeFor<Selector>> | null>;
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
    waitForFunction<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(pageFunction: Func | string, options?: FrameWaitForFunctionOptions, ...args: Params): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
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
    abstract setContent(html: string, options?: SetContentWaitForOptions): Promise<void>;
    /**
     * @internal
     */
    setFrameContent(content: string): Promise<void>;
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
     * @internal
     */
    get disposed(): boolean;
    /**
     * Adds a `<script>` tag into the page with the desired url or content.
     *
     * @param options - Options for the script.
     * @returns An {@link ElementHandle | element handle} to the injected
     * `<script>` element.
     */
    addScriptTag(options: FrameAddScriptTagOptions): Promise<ElementHandle<HTMLScriptElement>>;
    /**
     * Adds a `HTMLStyleElement` into the frame with the desired URL
     *
     * @returns An {@link ElementHandle | element handle} to the loaded `<style>`
     * element.
     */
    addStyleTag(options: Omit<FrameAddStyleTagOptions, 'url'>): Promise<ElementHandle<HTMLStyleElement>>;
    /**
     * Adds a `HTMLLinkElement` into the frame with the desired URL
     *
     * @returns An {@link ElementHandle | element handle} to the loaded `<link>`
     * element.
     */
    addStyleTag(options: FrameAddStyleTagOptions): Promise<ElementHandle<HTMLLinkElement>>;
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
    type(selector: string, text: string, options?: Readonly<KeyboardTypeOptions>): Promise<void>;
    /**
     * The frame's title.
     */
    title(): Promise<string>;
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
     *   frame.waitForDevicePrompt(),
     *   frame.click('#connect-bluetooth'),
     * ]);
     * await devicePrompt.select(
     *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device')),
     * );
     * ```
     *
     * @internal
     */
    abstract waitForDevicePrompt(options?: WaitTimeoutOptions): Promise<DeviceRequestPrompt>;
    /**
     * Retrieves the list of extension execution realms associated with this frame.
     * Extension execution realms are created by extension content scripts injected
     * into the frame.
     *
     * @public
     */
    abstract extensionRealms(): Realm[];
}
//# sourceMappingURL=Frame.d.ts.map