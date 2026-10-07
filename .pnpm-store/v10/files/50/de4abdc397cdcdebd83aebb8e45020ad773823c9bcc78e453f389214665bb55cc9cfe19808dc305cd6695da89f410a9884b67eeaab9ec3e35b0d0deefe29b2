/**
 * @license
 * Copyright 2023 Google Inc.
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { getQueryHandlerAndSelector } from '../common/GetQueryHandler.js';
import { LazyArg } from '../common/LazyArg.js';
import { isString, withSourcePuppeteerURLIfNone } from '../common/util.js';
import { assert } from '../util/assert.js';
import { AsyncIterableUtil } from '../util/AsyncIterableUtil.js';
import { throwIfDisposed } from '../util/decorators.js';
import { _isElementHandle } from './ElementHandleSymbol.js';
import { JSHandle } from './JSHandle.js';
import { NodeLocator } from './locators/locators.js';
/**
 * A given method will have it's `this` replaced with an isolated version of
 * `this` when decorated with this decorator.
 *
 * All changes of isolated `this` are reflected on the actual `this`.
 *
 * @internal
 */
export function bindIsolatedHandle(target, _) {
    return async function (...args) {
        // If the handle is already isolated, then we don't need to adopt it
        // again.
        if (this.realm === this.frame.isolatedRealm()) {
            return await target.call(this, ...args);
        }
        let adoptedThis;
        if (this['isolatedHandle']) {
            adoptedThis = this['isolatedHandle'];
        }
        else {
            this['isolatedHandle'] = adoptedThis = await this.frame
                .isolatedRealm()
                .adoptHandle(this);
        }
        const result = await target.call(adoptedThis, ...args);
        // If the function returns `adoptedThis`, then we return `this`.
        if (result === adoptedThis) {
            return this;
        }
        // If the function returns a handle, transfer it into the current realm.
        if (result instanceof JSHandle) {
            return await this.realm.transferHandle(result);
        }
        // If the function returns an array of handlers, transfer them into the
        // current realm.
        if (Array.isArray(result)) {
            await Promise.all(result.map(async (item, index, result) => {
                if (item instanceof JSHandle) {
                    result[index] = await this.realm.transferHandle(item);
                }
            }));
        }
        if (result instanceof Map) {
            await Promise.all([...result.entries()].map(async ([key, value]) => {
                if (value instanceof JSHandle) {
                    result.set(key, await this.realm.transferHandle(value));
                }
            }));
        }
        return result;
    };
}
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
let ElementHandle = (() => {
    let _classSuper = JSHandle;
    let _instanceExtraInitializers = [];
    let _getProperty_decorators;
    let _getProperties_decorators;
    let _jsonValue_decorators;
    let _$_decorators;
    let _$$_decorators;
    let _private_$$_decorators;
    let _private_$$_descriptor;
    let _waitForSelector_decorators;
    let _isVisible_decorators;
    let _isHidden_decorators;
    let _toElement_decorators;
    let _clickablePoint_decorators;
    let _hover_decorators;
    let _click_decorators;
    let _drag_decorators;
    let _dragEnter_decorators;
    let _dragOver_decorators;
    let _drop_decorators;
    let _dragAndDrop_decorators;
    let _select_decorators;
    let _tap_decorators;
    let _touchStart_decorators;
    let _touchMove_decorators;
    let _touchEnd_decorators;
    let _focus_decorators;
    let _type_decorators;
    let _press_decorators;
    let _boundingBox_decorators;
    let _boxModel_decorators;
    let _screenshot_decorators;
    let _isIntersectingViewport_decorators;
    let _scrollIntoView_decorators;
    let _asLocator_decorators;
    return class ElementHandle extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _getProperty_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _getProperties_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _jsonValue_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _$_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _$$_decorators = [throwIfDisposed()];
            _private_$$_decorators = [bindIsolatedHandle];
            _waitForSelector_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _isVisible_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _isHidden_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _toElement_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _clickablePoint_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _hover_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _click_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _drag_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _dragEnter_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _dragOver_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _drop_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _dragAndDrop_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _select_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _tap_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _touchStart_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _touchMove_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _touchEnd_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _focus_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _type_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _press_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _boundingBox_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _boxModel_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _screenshot_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _isIntersectingViewport_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _scrollIntoView_decorators = [throwIfDisposed(), bindIsolatedHandle];
            _asLocator_decorators = [throwIfDisposed()];
            __esDecorate(this, null, _getProperty_decorators, { kind: "method", name: "getProperty", static: false, private: false, access: { has: obj => "getProperty" in obj, get: obj => obj.getProperty }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _getProperties_decorators, { kind: "method", name: "getProperties", static: false, private: false, access: { has: obj => "getProperties" in obj, get: obj => obj.getProperties }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _jsonValue_decorators, { kind: "method", name: "jsonValue", static: false, private: false, access: { has: obj => "jsonValue" in obj, get: obj => obj.jsonValue }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _$_decorators, { kind: "method", name: "$", static: false, private: false, access: { has: obj => "$" in obj, get: obj => obj.$ }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _$$_decorators, { kind: "method", name: "$$", static: false, private: false, access: { has: obj => "$$" in obj, get: obj => obj.$$ }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_$$_descriptor = { value: __setFunctionName(async function (selector) {
                    return await this.#$$impl(selector);
                }, "#$$") }, _private_$$_decorators, { kind: "method", name: "#$$", static: false, private: true, access: { has: obj => #$$ in obj, get: obj => obj.#$$ }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _waitForSelector_decorators, { kind: "method", name: "waitForSelector", static: false, private: false, access: { has: obj => "waitForSelector" in obj, get: obj => obj.waitForSelector }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _isVisible_decorators, { kind: "method", name: "isVisible", static: false, private: false, access: { has: obj => "isVisible" in obj, get: obj => obj.isVisible }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _isHidden_decorators, { kind: "method", name: "isHidden", static: false, private: false, access: { has: obj => "isHidden" in obj, get: obj => obj.isHidden }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _toElement_decorators, { kind: "method", name: "toElement", static: false, private: false, access: { has: obj => "toElement" in obj, get: obj => obj.toElement }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _clickablePoint_decorators, { kind: "method", name: "clickablePoint", static: false, private: false, access: { has: obj => "clickablePoint" in obj, get: obj => obj.clickablePoint }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _hover_decorators, { kind: "method", name: "hover", static: false, private: false, access: { has: obj => "hover" in obj, get: obj => obj.hover }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _click_decorators, { kind: "method", name: "click", static: false, private: false, access: { has: obj => "click" in obj, get: obj => obj.click }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _drag_decorators, { kind: "method", name: "drag", static: false, private: false, access: { has: obj => "drag" in obj, get: obj => obj.drag }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _dragEnter_decorators, { kind: "method", name: "dragEnter", static: false, private: false, access: { has: obj => "dragEnter" in obj, get: obj => obj.dragEnter }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _dragOver_decorators, { kind: "method", name: "dragOver", static: false, private: false, access: { has: obj => "dragOver" in obj, get: obj => obj.dragOver }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _drop_decorators, { kind: "method", name: "drop", static: false, private: false, access: { has: obj => "drop" in obj, get: obj => obj.drop }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _dragAndDrop_decorators, { kind: "method", name: "dragAndDrop", static: false, private: false, access: { has: obj => "dragAndDrop" in obj, get: obj => obj.dragAndDrop }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _select_decorators, { kind: "method", name: "select", static: false, private: false, access: { has: obj => "select" in obj, get: obj => obj.select }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _tap_decorators, { kind: "method", name: "tap", static: false, private: false, access: { has: obj => "tap" in obj, get: obj => obj.tap }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _touchStart_decorators, { kind: "method", name: "touchStart", static: false, private: false, access: { has: obj => "touchStart" in obj, get: obj => obj.touchStart }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _touchMove_decorators, { kind: "method", name: "touchMove", static: false, private: false, access: { has: obj => "touchMove" in obj, get: obj => obj.touchMove }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _touchEnd_decorators, { kind: "method", name: "touchEnd", static: false, private: false, access: { has: obj => "touchEnd" in obj, get: obj => obj.touchEnd }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _focus_decorators, { kind: "method", name: "focus", static: false, private: false, access: { has: obj => "focus" in obj, get: obj => obj.focus }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _type_decorators, { kind: "method", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _press_decorators, { kind: "method", name: "press", static: false, private: false, access: { has: obj => "press" in obj, get: obj => obj.press }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _boundingBox_decorators, { kind: "method", name: "boundingBox", static: false, private: false, access: { has: obj => "boundingBox" in obj, get: obj => obj.boundingBox }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _boxModel_decorators, { kind: "method", name: "boxModel", static: false, private: false, access: { has: obj => "boxModel" in obj, get: obj => obj.boxModel }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _screenshot_decorators, { kind: "method", name: "screenshot", static: false, private: false, access: { has: obj => "screenshot" in obj, get: obj => obj.screenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _isIntersectingViewport_decorators, { kind: "method", name: "isIntersectingViewport", static: false, private: false, access: { has: obj => "isIntersectingViewport" in obj, get: obj => obj.isIntersectingViewport }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _scrollIntoView_decorators, { kind: "method", name: "scrollIntoView", static: false, private: false, access: { has: obj => "scrollIntoView" in obj, get: obj => obj.scrollIntoView }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _asLocator_decorators, { kind: "method", name: "asLocator", static: false, private: false, access: { has: obj => "asLocator" in obj, get: obj => obj.asLocator }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        /**
         * @internal
         * Cached isolatedHandle to prevent
         * trying to adopt it multiple times
         */
        isolatedHandle = __runInitializers(this, _instanceExtraInitializers);
        /**
         * @internal
         */
        handle;
        /**
         * @internal
         */
        constructor(handle) {
            super();
            this.handle = handle;
            this[_isElementHandle] = true;
        }
        /**
         * @internal
         */
        get id() {
            return this.handle.id;
        }
        /**
         * @internal
         */
        get disposed() {
            return this.handle.disposed;
        }
        /**
         * @internal
         */
        async getProperty(propertyName) {
            return await this.handle.getProperty(propertyName);
        }
        /**
         * @internal
         */
        async getProperties() {
            return await this.handle.getProperties();
        }
        /**
         * @internal
         */
        async evaluate(pageFunction, ...args) {
            pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
            return await this.handle.evaluate(pageFunction, ...args);
        }
        /**
         * @internal
         */
        async evaluateHandle(pageFunction, ...args) {
            pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
            return await this.handle.evaluateHandle(pageFunction, ...args);
        }
        /**
         * @internal
         */
        async jsonValue() {
            return await this.handle.jsonValue();
        }
        /**
         * @internal
         */
        toString() {
            return this.handle.toString();
        }
        /**
         * @internal
         */
        remoteObject() {
            return this.handle.remoteObject();
        }
        /**
         * @internal
         */
        async dispose() {
            await Promise.all([this.handle.dispose(), this.isolatedHandle?.dispose()]);
        }
        /**
         * @internal
         */
        asElement() {
            return this;
        }
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
        async $(selector) {
            const { updatedSelector, QueryHandler } = getQueryHandlerAndSelector(selector);
            return (await QueryHandler.queryOne(this, updatedSelector));
        }
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
        async $$(selector, options) {
            if (options?.isolate === false) {
                return await this.#$$impl(selector);
            }
            return await this.#$$(selector);
        }
        /**
         * Isolates {@link ElementHandle.$$} if needed.
         *
         * @internal
         */
        get #$$() { return _private_$$_descriptor.value; }
        /**
         * Implementation for {@link ElementHandle.$$}.
         *
         * @internal
         */
        async #$$impl(selector) {
            const { updatedSelector, QueryHandler } = getQueryHandlerAndSelector(selector);
            return await AsyncIterableUtil.collect(QueryHandler.queryAll(this, updatedSelector));
        }
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
        async $eval(selector, pageFunction, ...args) {
            const env_1 = { stack: [], error: void 0, hasError: false };
            try {
                pageFunction = withSourcePuppeteerURLIfNone(this.$eval.name, pageFunction);
                const elementHandle = __addDisposableResource(env_1, await this.$(selector), false);
                if (!elementHandle) {
                    throw new Error(`Error: failed to find element matching selector "${selector}"`);
                }
                return await elementHandle.evaluate(pageFunction, ...args);
            }
            catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            }
            finally {
                __disposeResources(env_1);
            }
        }
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
        async $$eval(selector, pageFunction, ...args) {
            const env_2 = { stack: [], error: void 0, hasError: false };
            try {
                pageFunction = withSourcePuppeteerURLIfNone(this.$$eval.name, pageFunction);
                const results = await this.$$(selector);
                const elements = __addDisposableResource(env_2, await this.evaluateHandle((_, ...elements) => {
                    return elements;
                }, ...results), false);
                const [result] = await Promise.all([
                    elements.evaluate(pageFunction, ...args),
                    ...results.map(results => {
                        return results.dispose();
                    }),
                ]);
                return result;
            }
            catch (e_2) {
                env_2.error = e_2;
                env_2.hasError = true;
            }
            finally {
                __disposeResources(env_2);
            }
        }
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
        async waitForSelector(selector, options = {}) {
            const { updatedSelector, QueryHandler, polling } = getQueryHandlerAndSelector(selector);
            return (await QueryHandler.waitFor(this, updatedSelector, {
                polling,
                ...options,
            }));
        }
        async #checkVisibility(visibility) {
            return await this.evaluate(async (element, PuppeteerUtil, visibility) => {
                return Boolean(PuppeteerUtil.checkVisibility(element, visibility));
            }, LazyArg.create(context => {
                return context.puppeteerUtil;
            }), visibility);
        }
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
        async isVisible() {
            return await this.#checkVisibility(true);
        }
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
        async isHidden() {
            return await this.#checkVisibility(false);
        }
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
        async toElement(tagName) {
            const isMatchingTagName = await this.evaluate((node, tagName) => {
                return node.nodeName === tagName.toUpperCase();
            }, tagName);
            if (!isMatchingTagName) {
                throw new Error(`Element is not a(n) \`${tagName}\` element`);
            }
            return this;
        }
        /**
         * Returns the middle point within an element unless a specific offset is provided.
         */
        async clickablePoint(offset) {
            const box = await this.#clickableBox();
            if (!box) {
                throw new Error('Node is either not clickable or not an Element');
            }
            if (offset !== undefined) {
                return {
                    x: box.x + offset.x,
                    y: box.y + offset.y,
                };
            }
            return {
                x: box.x + box.width / 2,
                y: box.y + box.height / 2,
            };
        }
        /**
         * This method scrolls element into view if needed, and then
         * uses {@link Page.mouse} to hover over the center of the element.
         * If the element is detached from DOM, the method throws an error.
         */
        async hover() {
            await this.scrollIntoViewIfNeeded();
            const { x, y } = await this.clickablePoint();
            await this.frame.page().mouse.move(x, y);
        }
        /**
         * This method scrolls element into view if needed, and then
         * uses {@link Page.mouse} to click in the center of the element.
         * If the element is detached from DOM, the method throws an error.
         */
        async click(options = {}) {
            await this.scrollIntoViewIfNeeded();
            const { x, y } = await this.clickablePoint(options.offset);
            try {
                await this.frame.page().mouse.click(x, y, options);
            }
            finally {
                if (options.debugHighlight) {
                    await this.frame.page().evaluate((x, y) => {
                        const highlight = document.createElement('div');
                        highlight.innerHTML = `<style>
        @scope {
          :scope {
              position: fixed;
              left: ${x}px;
              top: ${y}px;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              animation: colorChange 10s 1 normal;
              animation-fill-mode: forwards;
          }

          @keyframes colorChange {
              from {
                  background-color: red;
              }
              to {
                  background-color: #FADADD00;
              }
          }
        }
      </style>`;
                        highlight.addEventListener('animationend', () => {
                            highlight.remove();
                        }, { once: true });
                        document.body.append(highlight);
                    }, x, y);
                }
            }
        }
        /**
         * Drags an element over the given element or point.
         *
         * @returns DEPRECATED. When drag interception is enabled, the drag payload is
         * returned.
         */
        async drag(target) {
            await this.scrollIntoViewIfNeeded();
            const page = this.frame.page();
            if (page.isDragInterceptionEnabled()) {
                const source = await this.clickablePoint();
                if (target instanceof ElementHandle) {
                    target = await target.clickablePoint();
                }
                return await page.mouse.drag(source, target);
            }
            try {
                if (!page._isDragging) {
                    page._isDragging = true;
                    await this.hover();
                    await page.mouse.down();
                }
                if (target instanceof ElementHandle) {
                    await target.hover();
                }
                else {
                    await page.mouse.move(target.x, target.y);
                }
            }
            catch (error) {
                page._isDragging = false;
                throw error;
            }
        }
        /**
         * @deprecated Do not use. `dragenter` will automatically be performed during dragging.
         */
        async dragEnter(data = { items: [], dragOperationsMask: 1 }) {
            const page = this.frame.page();
            await this.scrollIntoViewIfNeeded();
            const target = await this.clickablePoint();
            await page.mouse.dragEnter(target, data);
        }
        /**
         * @deprecated Do not use. `dragover` will automatically be performed during dragging.
         */
        async dragOver(data = { items: [], dragOperationsMask: 1 }) {
            const page = this.frame.page();
            await this.scrollIntoViewIfNeeded();
            const target = await this.clickablePoint();
            await page.mouse.dragOver(target, data);
        }
        /**
         * @internal
         */
        async drop(dataOrElement = {
            items: [],
            dragOperationsMask: 1,
        }) {
            const page = this.frame.page();
            if ('items' in dataOrElement) {
                await this.scrollIntoViewIfNeeded();
                const destination = await this.clickablePoint();
                await page.mouse.drop(destination, dataOrElement);
            }
            else {
                // Note if the rest errors, we still want dragging off because the errors
                // is most likely something implying the mouse is no longer dragging.
                await dataOrElement.drag(this);
                page._isDragging = false;
                await page.mouse.up();
            }
        }
        /**
         * @deprecated Use `ElementHandle.drop` instead.
         */
        async dragAndDrop(target, options) {
            const page = this.frame.page();
            assert(page.isDragInterceptionEnabled(), 'Drag Interception is not enabled!');
            await this.scrollIntoViewIfNeeded();
            const startPoint = await this.clickablePoint();
            const targetPoint = await target.clickablePoint();
            await page.mouse.dragAndDrop(startPoint, targetPoint, options);
        }
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
        async select(...values) {
            for (const value of values) {
                assert(isString(value), 'Values must be strings. Found value "' +
                    value +
                    '" of type "' +
                    typeof value +
                    '"');
            }
            return await this.evaluate((element, vals) => {
                const values = new Set(vals);
                if (!(element instanceof HTMLSelectElement)) {
                    throw new Error('Element is not a <select> element.');
                }
                const selectedValues = new Set();
                if (!element.multiple) {
                    for (const option of element.options) {
                        option.selected = false;
                    }
                    for (const option of element.options) {
                        if (values.has(option.value)) {
                            option.selected = true;
                            selectedValues.add(option.value);
                            break;
                        }
                    }
                }
                else {
                    for (const option of element.options) {
                        option.selected = values.has(option.value);
                        if (option.selected) {
                            selectedValues.add(option.value);
                        }
                    }
                }
                element.dispatchEvent(new Event('input', { bubbles: true }));
                element.dispatchEvent(new Event('change', { bubbles: true }));
                return [...selectedValues.values()];
            }, values);
        }
        /**
         * This method scrolls element into view if needed, and then uses
         * {@link Touchscreen.tap} to tap in the center of the element.
         * If the element is detached from DOM, the method throws an error.
         */
        async tap() {
            await this.scrollIntoViewIfNeeded();
            const { x, y } = await this.clickablePoint();
            await this.frame.page().touchscreen.tap(x, y);
        }
        /**
         * This method scrolls the element into view if needed, and then
         * starts a touch in the center of the element.
         * @returns A {@link TouchHandle} representing the touch that was started
         */
        async touchStart() {
            await this.scrollIntoViewIfNeeded();
            const { x, y } = await this.clickablePoint();
            return await this.frame.page().touchscreen.touchStart(x, y);
        }
        /**
         * This method scrolls the element into view if needed, and then
         * moves the touch to the center of the element.
         * @param touch - An optional {@link TouchHandle}. If provided, this touch
         * will be moved. If not provided, the first active touch will be moved.
         */
        async touchMove(touch) {
            await this.scrollIntoViewIfNeeded();
            const { x, y } = await this.clickablePoint();
            if (touch) {
                return await touch.move(x, y);
            }
            await this.frame.page().touchscreen.touchMove(x, y);
        }
        async touchEnd() {
            await this.scrollIntoViewIfNeeded();
            await this.frame.page().touchscreen.touchEnd();
        }
        /**
         * Calls {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus | focus} on the element.
         */
        async focus() {
            await this.evaluate(element => {
                if (!(element instanceof HTMLElement)) {
                    throw new Error('Cannot focus non-HTMLElement');
                }
                return element.focus();
            });
        }
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
        async type(text, options) {
            await this.focus();
            await this.frame.page().keyboard.type(text, options);
        }
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
        async press(key, options) {
            await this.focus();
            await this.frame.page().keyboard.press(key, options);
        }
        async #clickableBox() {
            const boxes = await this.evaluate(element => {
                if (!(element instanceof Element)) {
                    return null;
                }
                return [...element.getClientRects()].map(rect => {
                    return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
                });
            });
            if (!boxes?.length) {
                return null;
            }
            await this.#intersectBoundingBoxesWithFrame(boxes);
            let frame = this.frame;
            let parentFrame;
            while ((parentFrame = frame?.parentFrame())) {
                const env_3 = { stack: [], error: void 0, hasError: false };
                try {
                    const handle = __addDisposableResource(env_3, await frame.frameElement(), false);
                    if (!handle) {
                        throw new Error('Unsupported frame type');
                    }
                    const parentBox = await handle.evaluate(element => {
                        // Element is not visible.
                        if (element.getClientRects().length === 0) {
                            return null;
                        }
                        const rect = element.getBoundingClientRect();
                        const style = window.getComputedStyle(element);
                        return {
                            left: rect.left +
                                parseInt(style.paddingLeft, 10) +
                                parseInt(style.borderLeftWidth, 10),
                            top: rect.top +
                                parseInt(style.paddingTop, 10) +
                                parseInt(style.borderTopWidth, 10),
                        };
                    });
                    if (!parentBox) {
                        return null;
                    }
                    for (const box of boxes) {
                        box.x += parentBox.left;
                        box.y += parentBox.top;
                    }
                    await handle.#intersectBoundingBoxesWithFrame(boxes);
                    frame = parentFrame;
                }
                catch (e_3) {
                    env_3.error = e_3;
                    env_3.hasError = true;
                }
                finally {
                    __disposeResources(env_3);
                }
            }
            const box = boxes.find(box => {
                return box.width >= 1 && box.height >= 1;
            });
            if (!box) {
                return null;
            }
            return {
                x: box.x,
                y: box.y,
                height: box.height,
                width: box.width,
            };
        }
        async #intersectBoundingBoxesWithFrame(boxes) {
            const { documentWidth, documentHeight } = await this.frame
                .isolatedRealm()
                .evaluate(() => {
                return {
                    documentWidth: document.documentElement.clientWidth,
                    documentHeight: document.documentElement.clientHeight,
                };
            });
            for (const box of boxes) {
                intersectBoundingBox(box, documentWidth, documentHeight);
            }
        }
        /**
         * This method returns the bounding box of the element (relative to the main frame),
         * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
         * (example: `display: none`).
         */
        async boundingBox() {
            const box = await this.evaluate(element => {
                if (!(element instanceof Element)) {
                    return null;
                }
                // Element is not visible.
                if (element.getClientRects().length === 0) {
                    return null;
                }
                const rect = element.getBoundingClientRect();
                return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
            });
            if (!box) {
                return null;
            }
            const offset = await this.#getTopLeftCornerOfFrame();
            if (!offset) {
                return null;
            }
            return {
                x: box.x + offset.x,
                y: box.y + offset.y,
                height: box.height,
                width: box.width,
            };
        }
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
        async boxModel() {
            const model = await this.evaluate(element => {
                if (!(element instanceof Element)) {
                    return null;
                }
                // Element is not visible.
                if (element.getClientRects().length === 0) {
                    return null;
                }
                const rect = element.getBoundingClientRect();
                const style = window.getComputedStyle(element);
                const offsets = {
                    padding: {
                        left: parseInt(style.paddingLeft, 10),
                        top: parseInt(style.paddingTop, 10),
                        right: parseInt(style.paddingRight, 10),
                        bottom: parseInt(style.paddingBottom, 10),
                    },
                    margin: {
                        left: -parseInt(style.marginLeft, 10),
                        top: -parseInt(style.marginTop, 10),
                        right: -parseInt(style.marginRight, 10),
                        bottom: -parseInt(style.marginBottom, 10),
                    },
                    border: {
                        left: parseInt(style.borderLeft, 10),
                        top: parseInt(style.borderTop, 10),
                        right: parseInt(style.borderRight, 10),
                        bottom: parseInt(style.borderBottom, 10),
                    },
                };
                const border = [
                    { x: rect.left, y: rect.top },
                    { x: rect.left + rect.width, y: rect.top },
                    { x: rect.left + rect.width, y: rect.top + rect.height },
                    { x: rect.left, y: rect.top + rect.height },
                ];
                const padding = transformQuadWithOffsets(border, offsets.border);
                const content = transformQuadWithOffsets(padding, offsets.padding);
                const margin = transformQuadWithOffsets(border, offsets.margin);
                return {
                    content,
                    padding,
                    border,
                    margin,
                    width: rect.width,
                    height: rect.height,
                };
                function transformQuadWithOffsets(quad, offsets) {
                    return [
                        {
                            x: quad[0].x + offsets.left,
                            y: quad[0].y + offsets.top,
                        },
                        {
                            x: quad[1].x - offsets.right,
                            y: quad[1].y + offsets.top,
                        },
                        {
                            x: quad[2].x - offsets.right,
                            y: quad[2].y - offsets.bottom,
                        },
                        {
                            x: quad[3].x + offsets.left,
                            y: quad[3].y - offsets.bottom,
                        },
                    ];
                }
            });
            if (!model) {
                return null;
            }
            const offset = await this.#getTopLeftCornerOfFrame();
            if (!offset) {
                return null;
            }
            for (const attribute of [
                'content',
                'padding',
                'border',
                'margin',
            ]) {
                for (const point of model[attribute]) {
                    point.x += offset.x;
                    point.y += offset.y;
                }
            }
            return model;
        }
        async #getTopLeftCornerOfFrame() {
            const point = { x: 0, y: 0 };
            let frame = this.frame;
            let parentFrame;
            while ((parentFrame = frame?.parentFrame())) {
                const env_4 = { stack: [], error: void 0, hasError: false };
                try {
                    const handle = __addDisposableResource(env_4, await frame.frameElement(), false);
                    if (!handle) {
                        throw new Error('Unsupported frame type');
                    }
                    const parentBox = await handle.evaluate(element => {
                        // Element is not visible.
                        if (element.getClientRects().length === 0) {
                            return null;
                        }
                        const rect = element.getBoundingClientRect();
                        const style = window.getComputedStyle(element);
                        return {
                            left: rect.left +
                                parseInt(style.paddingLeft, 10) +
                                parseInt(style.borderLeftWidth, 10),
                            top: rect.top +
                                parseInt(style.paddingTop, 10) +
                                parseInt(style.borderTopWidth, 10),
                        };
                    });
                    if (!parentBox) {
                        return null;
                    }
                    point.x += parentBox.left;
                    point.y += parentBox.top;
                    frame = parentFrame;
                }
                catch (e_4) {
                    env_4.error = e_4;
                    env_4.hasError = true;
                }
                finally {
                    __disposeResources(env_4);
                }
            }
            return point;
        }
        async screenshot(options = {}) {
            const { scrollIntoView = true, clip } = options;
            const page = this.frame.page();
            // Only scroll the element into view if the user wants it.
            if (scrollIntoView) {
                await this.scrollIntoViewIfNeeded();
            }
            const elementClip = await this.#nonEmptyVisibleBoundingBox();
            const [pageLeft, pageTop] = await this.evaluate(() => {
                if (!window.visualViewport) {
                    throw new Error('window.visualViewport is not supported.');
                }
                return [
                    window.visualViewport.pageLeft,
                    window.visualViewport.pageTop,
                ];
            });
            elementClip.x += pageLeft;
            elementClip.y += pageTop;
            if (clip) {
                elementClip.x += clip.x;
                elementClip.y += clip.y;
                elementClip.height = clip.height;
                elementClip.width = clip.width;
            }
            return await page.screenshot({ ...options, clip: elementClip });
        }
        async #nonEmptyVisibleBoundingBox() {
            const box = await this.boundingBox();
            assert(box, 'Node is either not visible or not an HTMLElement');
            assert(box.width !== 0, 'Node has 0 width.');
            assert(box.height !== 0, 'Node has 0 height.');
            return box;
        }
        /**
         * @internal
         */
        async assertConnectedElement() {
            const error = await this.evaluate(async (element) => {
                if (!element.isConnected) {
                    return 'Node is detached from document';
                }
                if (element.nodeType !== Node.ELEMENT_NODE) {
                    return 'Node is not of type HTMLElement';
                }
                return;
            });
            if (error) {
                throw new Error(error);
            }
        }
        /**
         * @internal
         */
        async scrollIntoViewIfNeeded() {
            if (await this.isIntersectingViewport({
                threshold: 1,
            })) {
                return;
            }
            await this.scrollIntoView();
        }
        /**
         * Resolves to true if the element is visible in the current viewport. If an
         * element is an SVG, we check if the svg owner element is in the viewport
         * instead. See https://crbug.com/963246.
         *
         * @param options - Threshold for the intersection between 0 (no intersection) and 1
         * (full intersection). Defaults to 1.
         */
        async isIntersectingViewport(options = {}) {
            const env_5 = { stack: [], error: void 0, hasError: false };
            try {
                await this.assertConnectedElement();
                // eslint-disable-next-line @puppeteer/use-using -- Returns `this`.
                const handle = await this.#asSVGElementHandle();
                const target = __addDisposableResource(env_5, handle && (await handle.#getOwnerSVGElement()), false);
                return await (target ?? this).evaluate(async (element, threshold) => {
                    const visibleRatio = await new Promise(resolve => {
                        const observer = new IntersectionObserver(entries => {
                            resolve(entries[0].intersectionRatio);
                            observer.disconnect();
                        });
                        observer.observe(element);
                    });
                    return threshold === 1 ? visibleRatio === 1 : visibleRatio > threshold;
                }, options.threshold ?? 0);
            }
            catch (e_5) {
                env_5.error = e_5;
                env_5.hasError = true;
            }
            finally {
                __disposeResources(env_5);
            }
        }
        /**
         * Scrolls the element into view using either the automation protocol client
         * or by calling element.scrollIntoView.
         */
        async scrollIntoView() {
            await this.assertConnectedElement();
            await this.evaluate(async (element) => {
                element.scrollIntoView({
                    block: 'center',
                    inline: 'center',
                    behavior: 'instant',
                });
            });
        }
        /**
         * Creates a locator based on an ElementHandle. This would not allow
         * refreshing the element handle if it is stale but it allows re-using other
         * locator pre-conditions.
         */
        asLocator() {
            return NodeLocator.createFromHandle(this.frame, this);
        }
        /**
         * Returns true if an element is an SVGElement (included svg, path, rect
         * etc.).
         */
        async #asSVGElementHandle() {
            if (await this.evaluate(element => {
                return element instanceof SVGElement;
            })) {
                return this;
            }
            else {
                return null;
            }
        }
        async #getOwnerSVGElement() {
            // SVGSVGElement.ownerSVGElement === null.
            return await this.evaluateHandle(element => {
                if (element instanceof SVGSVGElement) {
                    return element;
                }
                return element.ownerSVGElement;
            });
        }
    };
})();
export { ElementHandle };
function intersectBoundingBox(box, width, height) {
    box.width = Math.max(box.x >= 0
        ? Math.min(width - box.x, box.width)
        : Math.min(width, box.width + box.x), 0);
    box.height = Math.max(box.y >= 0
        ? Math.min(height - box.y, box.height)
        : Math.min(height, box.height + box.y), 0);
    box.x = Math.max(box.x, 0);
    box.y = Math.max(box.y, 0);
}
//# sourceMappingURL=ElementHandle.js.map