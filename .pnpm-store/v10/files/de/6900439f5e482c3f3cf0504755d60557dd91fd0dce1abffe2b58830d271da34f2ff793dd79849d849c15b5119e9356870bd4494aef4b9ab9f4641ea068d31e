/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
import { _isElementHandle } from '../api/ElementHandleSymbol.js';
import { isErrorLike } from '../util/ErrorLike.js';
import { interpolateFunction, stringifyFunction } from '../util/Function.js';
import { TimeoutError } from './Errors.js';
import { transposeIterableHandle } from './HandleIterator.js';
import { LazyArg } from './LazyArg.js';
/**
 * @internal
 */
export class QueryHandler {
    // Either one of these may be implemented, but at least one must be.
    static querySelectorAll;
    static querySelector;
    static get _querySelector() {
        if (this.querySelector) {
            return this.querySelector;
        }
        if (!this.querySelectorAll) {
            throw new Error('Cannot create default `querySelector`.');
        }
        return (this.querySelector = interpolateFunction(async (node, selector, PuppeteerUtil) => {
            const querySelectorAll = PLACEHOLDER('querySelectorAll');
            const results = querySelectorAll(node, selector, PuppeteerUtil);
            for await (const result of results) {
                return result;
            }
            return null;
        }, {
            querySelectorAll: stringifyFunction(this.querySelectorAll),
        }));
    }
    static get _querySelectorAll() {
        if (this.querySelectorAll) {
            return this.querySelectorAll;
        }
        if (!this.querySelector) {
            throw new Error('Cannot create default `querySelectorAll`.');
        }
        return (this.querySelectorAll = interpolateFunction(async function* (node, selector, PuppeteerUtil) {
            const querySelector = PLACEHOLDER('querySelector');
            const result = await querySelector(node, selector, PuppeteerUtil);
            if (result) {
                yield result;
            }
        }, {
            querySelector: stringifyFunction(this.querySelector),
        }));
    }
    /**
     * Queries for multiple nodes given a selector and {@link ElementHandle}.
     *
     * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll | Document.querySelectorAll()}.
     */
    static async *queryAll(element, selector) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            const handle = __addDisposableResource(env_1, await element.evaluateHandle(this._querySelectorAll, selector, LazyArg.create(context => {
                return context.puppeteerUtil;
            })), false);
            yield* transposeIterableHandle(handle);
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
     * Queries for a single node given a selector and {@link ElementHandle}.
     *
     * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector}.
     */
    static async queryOne(element, selector) {
        const env_2 = { stack: [], error: void 0, hasError: false };
        try {
            const result = __addDisposableResource(env_2, await element.evaluateHandle(this._querySelector, selector, LazyArg.create(context => {
                return context.puppeteerUtil;
            })), false);
            if (!(_isElementHandle in result)) {
                return null;
            }
            return result.move();
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
     * Waits until a single node appears for a given selector and
     * {@link ElementHandle}.
     *
     * This will always query the handle in the Puppeteer world and migrate the
     * result to the main world.
     */
    static async waitFor(elementOrFrame, selector, options) {
        const env_3 = { stack: [], error: void 0, hasError: false };
        try {
            let frame;
            const element = __addDisposableResource(env_3, await (async () => {
                if (!(_isElementHandle in elementOrFrame)) {
                    frame = elementOrFrame;
                    return;
                }
                frame = elementOrFrame.frame;
                return await frame.isolatedRealm().adoptHandle(elementOrFrame);
            })(), false);
            const { visible = false, hidden = false, timeout, signal } = options;
            const polling = visible || hidden ? "raf" /* PollingOptions.RAF */ : options.polling;
            try {
                const env_4 = { stack: [], error: void 0, hasError: false };
                try {
                    signal?.throwIfAborted();
                    const handle = __addDisposableResource(env_4, await frame.isolatedRealm().waitForFunction(async (PuppeteerUtil, query, selector, root, visible) => {
                        const querySelector = PuppeteerUtil.createFunction(query);
                        const node = await querySelector(root ?? document, selector, PuppeteerUtil);
                        return PuppeteerUtil.checkVisibility(node, visible);
                    }, {
                        polling,
                        root: element,
                        timeout,
                        signal,
                    }, LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), stringifyFunction(this._querySelector), selector, element, visible ? true : hidden ? false : undefined), false);
                    if (signal?.aborted) {
                        throw signal.reason;
                    }
                    if (!(_isElementHandle in handle)) {
                        return null;
                    }
                    return await frame.mainRealm().transferHandle(handle);
                }
                catch (e_3) {
                    env_4.error = e_3;
                    env_4.hasError = true;
                }
                finally {
                    __disposeResources(env_4);
                }
            }
            catch (error) {
                if (!isErrorLike(error)) {
                    throw error;
                }
                if (error.name === 'AbortError') {
                    throw error;
                }
                const waitForSelectorError = new (error instanceof TimeoutError ? TimeoutError : Error)(`Waiting for selector \`${selector}\` failed`);
                waitForSelectorError.cause = error;
                throw waitForSelectorError;
            }
        }
        catch (e_4) {
            env_3.error = e_4;
            env_3.hasError = true;
        }
        finally {
            __disposeResources(env_3);
        }
    }
}
//# sourceMappingURL=QueryHandler.js.map