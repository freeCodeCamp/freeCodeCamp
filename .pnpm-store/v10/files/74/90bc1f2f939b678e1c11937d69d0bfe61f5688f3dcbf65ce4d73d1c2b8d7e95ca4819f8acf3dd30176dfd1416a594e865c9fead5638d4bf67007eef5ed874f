/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (this && this.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
import { concat, distinctUntilChanged, EMPTY, filter, first, firstValueFrom, from, map, merge, mergeMap, mergeScan, of, raceWith, ReplaySubject, startWith, switchMap, take, takeUntil, timer, } from '../../third_party/rxjs/rxjs.js';
import { TargetCloseError } from '../common/Errors.js';
import { EventEmitter, } from '../common/EventEmitter.js';
import { TimeoutSettings } from '../common/TimeoutSettings.js';
import { debugError, fromEmitterEvent, filterAsync, isString, NETWORK_IDLE_TIME, timeout, withSourcePuppeteerURLIfNone, fromAbortSignal, } from '../common/util.js';
import { environment } from '../environment.js';
import { guarded } from '../util/decorators.js';
import { AsyncDisposableStack, asyncDisposeSymbol, DisposableStack, disposeSymbol, } from '../util/disposable.js';
import { stringToTypedArray } from '../util/encoding.js';
import { FunctionLocator, Locator, NodeLocator, } from './locators/locators.js';
/**
 * @internal
 */
export function setDefaultScreenshotOptions(options) {
    options.optimizeForSpeed ??= false;
    options.type ??= 'png';
    options.fromSurface ??= true;
    options.fullPage ??= false;
    options.omitBackground ??= false;
    options.encoding ??= 'binary';
    options.captureBeyondViewport ??= true;
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
let Page = (() => {
    let _classSuper = EventEmitter;
    let _instanceExtraInitializers = [];
    let _screenshot_decorators;
    return class Page extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, null, _screenshot_decorators, { kind: "method", name: "screenshot", static: false, private: false, access: { has: obj => "screenshot" in obj, get: obj => obj.screenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        /**
         * @internal
         */
        _isDragging = (__runInitializers(this, _instanceExtraInitializers), false);
        /**
         * @internal
         */
        _timeoutSettings = new TimeoutSettings();
        /**
         * Internal API to get an implementation-specific identifier
         * for the tab. In Chrome, it is a tab target id. If unknown,
         * returns an empty string.
         *
         * @internal
         */
        _tabId = '';
        #requestHandlers = new WeakMap();
        #inflight$ = new ReplaySubject(1);
        /**
         * @internal
         */
        constructor() {
            super();
            fromEmitterEvent(this, "request" /* PageEvent.Request */)
                .pipe(mergeMap(originalRequest => {
                return concat(of(1), merge(fromEmitterEvent(this, "requestfailed" /* PageEvent.RequestFailed */), fromEmitterEvent(this, "requestfinished" /* PageEvent.RequestFinished */), fromEmitterEvent(this, "response" /* PageEvent.Response */).pipe(map(response => {
                    return response.request();
                }))).pipe(filter(request => {
                    return request.id === originalRequest.id;
                }), take(1), map(() => {
                    return -1;
                })));
            }), mergeScan((acc, addend) => {
                return of(acc + addend);
            }, 0), takeUntil(fromEmitterEvent(this, "close" /* PageEvent.Close */)), startWith(0))
                .subscribe(this.#inflight$);
        }
        /**
         * Listen to page events.
         *
         * @remarks
         * This method exists to define event typings and handle proper wireup of
         * cooperative request interception. Actual event listening and dispatching is
         * delegated to {@link EventEmitter}.
         *
         * @internal
         */
        on(type, handler) {
            if (type !== "request" /* PageEvent.Request */) {
                return super.on(type, handler);
            }
            let wrapper = this.#requestHandlers.get(handler);
            if (wrapper === undefined) {
                wrapper = (event) => {
                    event.enqueueInterceptAction(() => {
                        return handler(event);
                    });
                };
                this.#requestHandlers.set(handler, wrapper);
            }
            return super.on(type, wrapper);
        }
        /**
         * @internal
         */
        off(type, handler) {
            if (type === "request" /* PageEvent.Request */) {
                handler =
                    this.#requestHandlers.get(handler) || handler;
            }
            return super.off(type, handler);
        }
        /**
         * {@inheritDoc Accessibility}
         */
        get accessibility() {
            return this.mainFrame().accessibility;
        }
        locator(input) {
            if (typeof input === 'string') {
                return NodeLocator.create(this, input);
            }
            else {
                return FunctionLocator.create(this, input);
            }
        }
        /**
         * A shortcut for {@link Locator.race} that does not require static imports.
         *
         * @internal
         */
        locatorRace(locators) {
            return Locator.race(locators);
        }
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
        async $(selector) {
            return await this.mainFrame().$(selector);
        }
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
        async $$(selector, options) {
            return await this.mainFrame().$$(selector, options);
        }
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
        async evaluateHandle(pageFunction, ...args) {
            pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
            return await this.mainFrame().evaluateHandle(pageFunction, ...args);
        }
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
        async $eval(selector, pageFunction, ...args) {
            pageFunction = withSourcePuppeteerURLIfNone(this.$eval.name, pageFunction);
            return await this.mainFrame().$eval(selector, pageFunction, ...args);
        }
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
        async $$eval(selector, pageFunction, ...args) {
            pageFunction = withSourcePuppeteerURLIfNone(this.$$eval.name, pageFunction);
            return await this.mainFrame().$$eval(selector, pageFunction, ...args);
        }
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
        async addScriptTag(options) {
            return await this.mainFrame().addScriptTag(options);
        }
        async addStyleTag(options) {
            return await this.mainFrame().addStyleTag(options);
        }
        /**
         * The page's URL.
         *
         * @remarks
         *
         * Shortcut for {@link Frame.url | page.mainFrame().url()}.
         */
        url() {
            return this.mainFrame().url();
        }
        /**
         * The full HTML contents of the page, including the DOCTYPE.
         */
        async content() {
            return await this.mainFrame().content();
        }
        /**
         * Set the content of the page.
         *
         * @param html - HTML markup to assign to the page.
         * @param options - Parameters that has some properties.
         */
        async setContent(html, options) {
            await this.mainFrame().setContent(html, options);
        }
        /**
         * {@inheritDoc Frame.goto}
         */
        async goto(url, options) {
            return await this.mainFrame().goto(url, options);
        }
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
        async waitForNavigation(options = {}) {
            return await this.mainFrame().waitForNavigation(options);
        }
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
        waitForRequest(urlOrPredicate, options = {}) {
            const { timeout: ms = this._timeoutSettings.timeout(), signal } = options;
            if (typeof urlOrPredicate === 'string') {
                const url = urlOrPredicate;
                urlOrPredicate = (request) => {
                    return request.url() === url;
                };
            }
            const observable$ = fromEmitterEvent(this, "request" /* PageEvent.Request */).pipe(filterAsync(urlOrPredicate), raceWith(timeout(ms), fromAbortSignal(signal), fromEmitterEvent(this, "close" /* PageEvent.Close */).pipe(map(() => {
                throw new TargetCloseError('Page closed!');
            }))));
            return firstValueFrom(observable$);
        }
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
        waitForResponse(urlOrPredicate, options = {}) {
            const { timeout: ms = this._timeoutSettings.timeout(), signal } = options;
            if (typeof urlOrPredicate === 'string') {
                const url = urlOrPredicate;
                urlOrPredicate = (response) => {
                    return response.url() === url;
                };
            }
            const observable$ = fromEmitterEvent(this, "response" /* PageEvent.Response */).pipe(filterAsync(urlOrPredicate), raceWith(timeout(ms), fromAbortSignal(signal), fromEmitterEvent(this, "close" /* PageEvent.Close */).pipe(map(() => {
                throw new TargetCloseError('Page closed!');
            }))));
            return firstValueFrom(observable$);
        }
        /**
         * Waits for the network to be idle.
         *
         * @remarks The function will always wait at least the
         * set {@link WaitForNetworkIdleOptions.idleTime | IdleTime}.
         *
         * @param options - Options to configure waiting behavior.
         * @returns A promise which resolves once the network is idle.
         */
        waitForNetworkIdle(options = {}) {
            return firstValueFrom(this.waitForNetworkIdle$(options));
        }
        /**
         * @internal
         */
        waitForNetworkIdle$(options = {}) {
            const { timeout: ms = this._timeoutSettings.timeout(), idleTime = NETWORK_IDLE_TIME, concurrency = 0, signal, } = options;
            return this.#inflight$.pipe(map(inflight => {
                return inflight > concurrency;
            }), distinctUntilChanged(), switchMap(isInflightOverConcurrency => {
                if (isInflightOverConcurrency) {
                    return EMPTY;
                }
                return timer(idleTime);
            }), map(() => { }), raceWith(timeout(ms), fromAbortSignal(signal), fromEmitterEvent(this, "close" /* PageEvent.Close */).pipe(map(() => {
                throw new TargetCloseError('Page closed!');
            }))));
        }
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
        async waitForFrame(urlOrPredicate, options = {}) {
            const { timeout: ms = this.getDefaultTimeout(), signal } = options;
            const predicate = isString(urlOrPredicate)
                ? (frame) => {
                    return urlOrPredicate === frame.url();
                }
                : urlOrPredicate;
            return await firstValueFrom(merge(fromEmitterEvent(this, "frameattached" /* PageEvent.FrameAttached */), fromEmitterEvent(this, "framenavigated" /* PageEvent.FrameNavigated */), from(this.frames())).pipe(filterAsync(predicate), first(), raceWith(timeout(ms), fromAbortSignal(signal), fromEmitterEvent(this, "close" /* PageEvent.Close */).pipe(map(() => {
                throw new TargetCloseError('Page closed.');
            })))));
        }
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
        async emulate(device) {
            await Promise.all([
                this.setUserAgent({ userAgent: device.userAgent }),
                this.setViewport(device.viewport),
            ]);
        }
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
        async evaluate(pageFunction, ...args) {
            pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
            return await this.mainFrame().evaluate(pageFunction, ...args);
        }
        /**
         * @internal
         */
        async _maybeWriteTypedArrayToFile(path, typedArray) {
            if (!path) {
                return;
            }
            await environment.value.fs.promises.writeFile(path, typedArray);
        }
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
        async screencast(options = {}) {
            const ScreenRecorder = environment.value.ScreenRecorder;
            const [width, height, devicePixelRatio] = await this.#getNativePixelDimensions();
            let crop;
            if (options.crop) {
                const { x, y, width: cropWidth, height: cropHeight, } = roundRectangle(normalizeRectangle(options.crop));
                if (x < 0 || y < 0) {
                    throw new Error(`\`crop.x\` and \`crop.y\` must be greater than or equal to 0.`);
                }
                if (cropWidth <= 0 || cropHeight <= 0) {
                    throw new Error(`\`crop.height\` and \`crop.width\` must be greater than or equal to 0.`);
                }
                const viewportWidth = width / devicePixelRatio;
                const viewportHeight = height / devicePixelRatio;
                if (x + cropWidth > viewportWidth) {
                    throw new Error(`\`crop.width\` cannot be larger than the viewport width (${viewportWidth}).`);
                }
                if (y + cropHeight > viewportHeight) {
                    throw new Error(`\`crop.height\` cannot be larger than the viewport height (${viewportHeight}).`);
                }
                crop = {
                    x: x * devicePixelRatio,
                    y: y * devicePixelRatio,
                    width: cropWidth * devicePixelRatio,
                    height: cropHeight * devicePixelRatio,
                };
            }
            if (options.speed !== undefined && options.speed <= 0) {
                throw new Error(`\`speed\` must be greater than 0.`);
            }
            if (options.scale !== undefined && options.scale <= 0) {
                throw new Error(`\`scale\` must be greater than 0.`);
            }
            const recorder = new ScreenRecorder(this, width, height, {
                ...options,
                crop,
            });
            try {
                await this._startScreencast();
            }
            catch (error) {
                void recorder.stop();
                throw error;
            }
            if (options.path) {
                const { createWriteStream } = environment.value.fs;
                const stream = createWriteStream(options.path, 'binary');
                recorder.pipe(stream);
            }
            return recorder;
        }
        #screencastSessionCount = 0;
        #startScreencastPromise;
        /**
         * @internal
         */
        async _startScreencast() {
            ++this.#screencastSessionCount;
            if (!this.#startScreencastPromise) {
                this.#startScreencastPromise = this.mainFrame()
                    .client.send('Page.startScreencast', { format: 'png' })
                    .then(() => {
                    // Wait for the first frame.
                    return new Promise(resolve => {
                        return this.mainFrame().client.once('Page.screencastFrame', () => {
                            return resolve();
                        });
                    });
                });
            }
            await this.#startScreencastPromise;
        }
        /**
         * @internal
         */
        async _stopScreencast() {
            --this.#screencastSessionCount;
            if (!this.#startScreencastPromise) {
                return;
            }
            this.#startScreencastPromise = undefined;
            if (this.#screencastSessionCount === 0) {
                await this.mainFrame().client.send('Page.stopScreencast');
            }
        }
        /**
         * Gets the native, non-emulated dimensions of the viewport.
         */
        async #getNativePixelDimensions() {
            const env_1 = { stack: [], error: void 0, hasError: false };
            try {
                const viewport = this.viewport();
                const stack = __addDisposableResource(env_1, new DisposableStack(), false);
                if (viewport && viewport.deviceScaleFactor !== 0) {
                    await this.setViewport({ ...viewport, deviceScaleFactor: 0 });
                    stack.defer(() => {
                        void this.setViewport(viewport).catch(debugError);
                    });
                }
                return await this.mainFrame()
                    .isolatedRealm()
                    .evaluate(() => {
                    return [
                        window.visualViewport.width * window.devicePixelRatio,
                        window.visualViewport.height * window.devicePixelRatio,
                        window.devicePixelRatio,
                    ];
                });
            }
            catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            }
            finally {
                __disposeResources(env_1);
            }
        }
        async screenshot(userOptions = {}) {
            const env_2 = { stack: [], error: void 0, hasError: false };
            try {
                const _guard = __addDisposableResource(env_2, await this.browserContext().startScreenshot(), false);
                const options = {
                    ...userOptions,
                    clip: userOptions.clip
                        ? {
                            ...userOptions.clip,
                        }
                        : undefined,
                };
                if (options.type === undefined && options.path !== undefined) {
                    const filePath = options.path;
                    // Note we cannot use Node.js here due to browser compatibility.
                    const extension = filePath
                        .slice(filePath.lastIndexOf('.') + 1)
                        .toLowerCase();
                    switch (extension) {
                        case 'png':
                            options.type = 'png';
                            break;
                        case 'jpeg':
                        case 'jpg':
                            options.type = 'jpeg';
                            break;
                        case 'webp':
                            options.type = 'webp';
                            break;
                    }
                }
                if (options.quality !== undefined) {
                    if (options.quality < 0 || options.quality > 100) {
                        throw new Error(`Expected 'quality' (${options.quality}) to be between 0 and 100, inclusive.`);
                    }
                    if (options.type === undefined ||
                        !['jpeg', 'webp'].includes(options.type)) {
                        throw new Error(`${options.type ?? 'png'} screenshots do not support 'quality'.`);
                    }
                }
                if (options.clip) {
                    if (options.clip.width <= 0) {
                        throw new Error("'width' in 'clip' must be positive.");
                    }
                    if (options.clip.height <= 0) {
                        throw new Error("'height' in 'clip' must be positive.");
                    }
                }
                setDefaultScreenshotOptions(options);
                const stack = __addDisposableResource(env_2, new AsyncDisposableStack(), true);
                if (options.clip) {
                    if (options.fullPage) {
                        throw new Error("'clip' and 'fullPage' are mutually exclusive");
                    }
                    options.clip = roundRectangle(normalizeRectangle(options.clip));
                }
                else {
                    if (options.fullPage) {
                        // If `captureBeyondViewport` is `false`, then we set the viewport to
                        // capture the full page. Note this may be affected by on-page CSS and
                        // JavaScript.
                        if (!options.captureBeyondViewport) {
                            const scrollDimensions = await this.mainFrame()
                                .isolatedRealm()
                                .evaluate(() => {
                                const element = document.documentElement;
                                return {
                                    width: element.scrollWidth,
                                    height: element.scrollHeight,
                                };
                            });
                            const viewport = this.viewport();
                            await this.setViewport({
                                ...viewport,
                                ...scrollDimensions,
                            });
                            stack.defer(async () => {
                                await this.setViewport(viewport).catch(debugError);
                            });
                        }
                    }
                    else {
                        options.captureBeyondViewport = false;
                    }
                }
                const data = await this._screenshot(options);
                if (options.encoding === 'base64') {
                    return data;
                }
                const typedArray = stringToTypedArray(data, true);
                await this._maybeWriteTypedArrayToFile(options.path, typedArray);
                return typedArray;
            }
            catch (e_2) {
                env_2.error = e_2;
                env_2.hasError = true;
            }
            finally {
                const result_1 = __disposeResources(env_2);
                if (result_1)
                    await result_1;
            }
        }
        /**
         * The page's title
         *
         * @remarks
         *
         * Shortcut for {@link Frame.title | page.mainFrame().title()}.
         */
        async title() {
            return await this.mainFrame().title();
        }
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
        click(selector, options) {
            return this.mainFrame().click(selector, options);
        }
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
        focus(selector) {
            return this.mainFrame().focus(selector);
        }
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
        hover(selector) {
            return this.mainFrame().hover(selector);
        }
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
        select(selector, ...values) {
            return this.mainFrame().select(selector, ...values);
        }
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
        tap(selector) {
            return this.mainFrame().tap(selector);
        }
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
        type(selector, text, options) {
            return this.mainFrame().type(selector, text, options);
        }
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
        async waitForSelector(selector, options = {}) {
            return await this.mainFrame().waitForSelector(selector, options);
        }
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
        waitForFunction(pageFunction, options, ...args) {
            return this.mainFrame().waitForFunction(pageFunction, options, ...args);
        }
        /** @internal */
        [(_screenshot_decorators = [guarded(function () {
                return this.browser();
            })], disposeSymbol)]() {
            return void this[asyncDisposeSymbol]().catch(debugError);
        }
        /** @internal */
        async [asyncDisposeSymbol]() {
            await this.close();
            await super[asyncDisposeSymbol]();
        }
    };
})();
export { Page };
/**
 * @internal
 */
export const supportedMetrics = new Set([
    'Timestamp',
    'Documents',
    'Frames',
    'JSEventListeners',
    'Nodes',
    'LayoutCount',
    'RecalcStyleCount',
    'LayoutDuration',
    'RecalcStyleDuration',
    'ScriptDuration',
    'TaskDuration',
    'JSHeapUsedSize',
    'JSHeapTotalSize',
]);
/** @see https://w3c.github.io/webdriver-bidi/#normalize-rect */
function normalizeRectangle(clip) {
    return {
        ...clip,
        ...(clip.width < 0
            ? {
                x: clip.x + clip.width,
                width: -clip.width,
            }
            : {
                x: clip.x,
                width: clip.width,
            }),
        ...(clip.height < 0
            ? {
                y: clip.y + clip.height,
                height: -clip.height,
            }
            : {
                y: clip.y,
                height: clip.height,
            }),
    };
}
function roundRectangle(clip) {
    const x = Math.round(clip.x);
    const y = Math.round(clip.y);
    const width = Math.round(clip.width + clip.x - x);
    const height = Math.round(clip.height + clip.y - y);
    return { ...clip, x, y, width, height };
}
//# sourceMappingURL=Page.js.map