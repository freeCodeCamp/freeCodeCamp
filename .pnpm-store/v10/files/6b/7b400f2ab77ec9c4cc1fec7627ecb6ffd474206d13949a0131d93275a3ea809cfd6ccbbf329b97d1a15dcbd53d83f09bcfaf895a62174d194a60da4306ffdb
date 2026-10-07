/**
 * @license
 * Copyright 2017 Google Inc.
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
import { CDPSessionEvent } from '../api/CDPSession.js';
import { ARIAQueryHandler } from '../common/AriaQueryHandler.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { LazyArg } from '../common/LazyArg.js';
import { scriptInjector } from '../common/ScriptInjector.js';
import { PuppeteerURL, SOURCE_URL_REGEX, debugError, getSourcePuppeteerURLIfAvailable, getSourceUrlComment, isString, } from '../common/util.js';
import { AsyncIterableUtil } from '../util/AsyncIterableUtil.js';
import { DisposableStack, disposeSymbol } from '../util/disposable.js';
import { stringifyFunction } from '../util/Function.js';
import { Mutex } from '../util/Mutex.js';
import { Binding } from './Binding.js';
import { CdpElementHandle } from './ElementHandle.js';
import { CdpJSHandle } from './JSHandle.js';
import { addPageBinding, CDP_BINDING_PREFIX, createEvaluationError, valueFromPrimitiveRemoteObject, } from './utils.js';
const ariaQuerySelectorBinding = new Binding('__ariaQuerySelector', ARIAQueryHandler.queryOne, '');
const ariaQuerySelectorAllBinding = new Binding('__ariaQuerySelectorAll', (async (element, selector) => {
    const results = ARIAQueryHandler.queryAll(element, selector);
    return await element.realm.evaluateHandle((...elements) => {
        return elements;
    }, ...(await AsyncIterableUtil.collect(results)));
}), '');
/**
 * @internal
 */
export class ExecutionContext extends EventEmitter {
    #client;
    #world;
    #id;
    #name;
    #disposables = new DisposableStack();
    constructor(client, contextPayload, world) {
        super();
        this.#client = client;
        this.#world = world;
        this.#id = contextPayload.id;
        if (contextPayload.name) {
            this.#name = contextPayload.name;
        }
        const clientEmitter = this.#disposables.use(new EventEmitter(this.#client));
        clientEmitter.on('Runtime.bindingCalled', this.#onBindingCalled.bind(this));
        clientEmitter.on('Runtime.executionContextDestroyed', async (event) => {
            if (event.executionContextId === this.#id) {
                this[disposeSymbol]();
            }
        });
        clientEmitter.on('Runtime.executionContextsCleared', async () => {
            this[disposeSymbol]();
        });
        clientEmitter.on('Runtime.consoleAPICalled', this.#onConsoleAPI.bind(this));
        clientEmitter.on(CDPSessionEvent.Disconnected, () => {
            this[disposeSymbol]();
        });
    }
    // Contains mapping from functions that should be bound to Puppeteer functions.
    #bindings = new Map();
    // If multiple waitFor are set up asynchronously, we need to wait for the
    // first one to set up the binding in the page before running the others.
    #mutex = new Mutex();
    async #addBinding(binding) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            if (this.#bindings.has(binding.name)) {
                return;
            }
            const _ = __addDisposableResource(env_1, await this.#mutex.acquire(), false);
            try {
                await this.#client.send('Runtime.addBinding', this.#name
                    ? {
                        name: CDP_BINDING_PREFIX + binding.name,
                        executionContextName: this.#name,
                    }
                    : {
                        name: CDP_BINDING_PREFIX + binding.name,
                        executionContextId: this.#id,
                    });
                await this.evaluate(addPageBinding, 'internal', binding.name, CDP_BINDING_PREFIX);
                this.#bindings.set(binding.name, binding);
            }
            catch (error) {
                // We could have tried to evaluate in a context which was already
                // destroyed. This happens, for example, if the page is navigated while
                // we are trying to add the binding
                if (error instanceof Error) {
                    // Destroyed context.
                    if (error.message.includes('Execution context was destroyed')) {
                        return;
                    }
                    // Missing context.
                    if (error.message.includes('Cannot find context with specified id')) {
                        return;
                    }
                }
                debugError(error);
            }
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            __disposeResources(env_1);
        }
    }
    async #onBindingCalled(event) {
        if (event.executionContextId !== this.#id) {
            return;
        }
        let payload;
        try {
            payload = JSON.parse(event.payload);
        }
        catch {
            // The binding was either called by something in the page or it was
            // called before our wrapper was initialized.
            return;
        }
        const { type, name, seq, args, isTrivial } = payload;
        if (type !== 'internal') {
            this.emit('bindingcalled', event);
            return;
        }
        if (!this.#bindings.has(name)) {
            this.emit('bindingcalled', event);
            return;
        }
        try {
            const binding = this.#bindings.get(name);
            await binding?.run(this, seq, args, isTrivial);
        }
        catch (err) {
            debugError(err);
        }
    }
    get id() {
        return this.#id;
    }
    #onConsoleAPI(event) {
        if (event.executionContextId !== this.#id) {
            return;
        }
        this.emit('consoleapicalled', event);
    }
    #bindingsInstalled = false;
    #puppeteerUtil;
    get puppeteerUtil() {
        let promise = Promise.resolve();
        if (!this.#bindingsInstalled) {
            promise = Promise.all([
                this.#addBindingWithoutThrowing(ariaQuerySelectorBinding),
                this.#addBindingWithoutThrowing(ariaQuerySelectorAllBinding),
            ]);
            this.#bindingsInstalled = true;
        }
        scriptInjector.inject(script => {
            if (this.#puppeteerUtil) {
                void this.#puppeteerUtil.then(handle => {
                    void handle.dispose();
                });
            }
            this.#puppeteerUtil = promise.then(() => {
                return this.evaluateHandle(script);
            });
        }, !this.#puppeteerUtil);
        return this.#puppeteerUtil;
    }
    async #addBindingWithoutThrowing(binding) {
        try {
            await this.#addBinding(binding);
        }
        catch (err) {
            // If the binding cannot be added, the context is broken. We cannot
            // recover so we ignore the error.
            debugError(err);
        }
    }
    /**
     * Evaluates the given function.
     *
     * @example
     *
     * ```ts
     * const executionContext = await page.mainFrame().executionContext();
     * const result = await executionContext.evaluate(() => Promise.resolve(8 * 7))* ;
     * console.log(result); // prints "56"
     * ```
     *
     * @example
     * A string can also be passed in instead of a function:
     *
     * ```ts
     * console.log(await executionContext.evaluate('1 + 2')); // prints "3"
     * ```
     *
     * @example
     * Handles can also be passed as `args`. They resolve to their referenced object:
     *
     * ```ts
     * const oneHandle = await executionContext.evaluateHandle(() => 1);
     * const twoHandle = await executionContext.evaluateHandle(() => 2);
     * const result = await executionContext.evaluate(
     *   (a, b) => a + b,
     *   oneHandle,
     *   twoHandle,
     * );
     * await oneHandle.dispose();
     * await twoHandle.dispose();
     * console.log(result); // prints '3'.
     * ```
     *
     * @param pageFunction - The function to evaluate.
     * @param args - Additional arguments to pass into the function.
     * @returns The result of evaluating the function. If the result is an object,
     * a vanilla object containing the serializable properties of the result is
     * returned.
     */
    async evaluate(pageFunction, ...args) {
        return await this.#evaluate(true, pageFunction, ...args);
    }
    /**
     * Evaluates the given function.
     *
     * Unlike {@link ExecutionContext.evaluate | evaluate}, this method returns a
     * handle to the result of the function.
     *
     * This method may be better suited if the object cannot be serialized (e.g.
     * `Map`) and requires further manipulation.
     *
     * @example
     *
     * ```ts
     * const context = await page.mainFrame().executionContext();
     * const handle: JSHandle<typeof globalThis> = await context.evaluateHandle(
     *   () => Promise.resolve(self),
     * );
     * ```
     *
     * @example
     * A string can also be passed in instead of a function.
     *
     * ```ts
     * const handle: JSHandle<number> = await context.evaluateHandle('1 + 2');
     * ```
     *
     * @example
     * Handles can also be passed as `args`. They resolve to their referenced object:
     *
     * ```ts
     * const bodyHandle: ElementHandle<HTMLBodyElement> =
     *   await context.evaluateHandle(() => {
     *     return document.body;
     *   });
     * const stringHandle: JSHandle<string> = await context.evaluateHandle(
     *   body => body.innerHTML,
     *   body,
     * );
     * console.log(await stringHandle.jsonValue()); // prints body's innerHTML
     * // Always dispose your garbage! :)
     * await bodyHandle.dispose();
     * await stringHandle.dispose();
     * ```
     *
     * @param pageFunction - The function to evaluate.
     * @param args - Additional arguments to pass into the function.
     * @returns A {@link JSHandle | handle} to the result of evaluating the
     * function. If the result is a `Node`, then this will return an
     * {@link ElementHandle | element handle}.
     */
    async evaluateHandle(pageFunction, ...args) {
        return await this.#evaluate(false, pageFunction, ...args);
    }
    async #evaluate(returnByValue, pageFunction, ...args) {
        const sourceUrlComment = getSourceUrlComment(getSourcePuppeteerURLIfAvailable(pageFunction)?.toString() ??
            PuppeteerURL.INTERNAL_URL);
        if (isString(pageFunction)) {
            const contextId = this.#id;
            const expression = pageFunction;
            const expressionWithSourceUrl = SOURCE_URL_REGEX.test(expression)
                ? expression
                : `${expression}\n${sourceUrlComment}\n`;
            const { exceptionDetails, result: remoteObject } = await this.#client
                .send('Runtime.evaluate', {
                expression: expressionWithSourceUrl,
                contextId,
                returnByValue,
                awaitPromise: true,
                userGesture: true,
            })
                .catch(rewriteError);
            if (exceptionDetails) {
                throw createEvaluationError(exceptionDetails);
            }
            if (returnByValue) {
                return valueFromPrimitiveRemoteObject(remoteObject);
            }
            return this.#world.createCdpHandle(remoteObject);
        }
        const functionDeclaration = stringifyFunction(pageFunction);
        const functionDeclarationWithSourceUrl = SOURCE_URL_REGEX.test(functionDeclaration)
            ? functionDeclaration
            : `${functionDeclaration}\n${sourceUrlComment}\n`;
        let callFunctionOnPromise;
        try {
            callFunctionOnPromise = this.#client.send('Runtime.callFunctionOn', {
                functionDeclaration: functionDeclarationWithSourceUrl,
                executionContextId: this.#id,
                // LazyArgs are used only internally and should not affect the order
                // evaluate calls for the public APIs.
                arguments: args.some(arg => {
                    return arg instanceof LazyArg;
                })
                    ? await Promise.all(args.map(arg => {
                        return convertArgumentAsync(this, arg);
                    }))
                    : args.map(arg => {
                        return convertArgument(this, arg);
                    }),
                returnByValue,
                awaitPromise: true,
                userGesture: true,
            });
        }
        catch (error) {
            if (error instanceof TypeError &&
                error.message.startsWith('Converting circular structure to JSON')) {
                error.message += ' Recursive objects are not allowed.';
            }
            throw error;
        }
        const { exceptionDetails, result: remoteObject } = await callFunctionOnPromise.catch(rewriteError);
        if (exceptionDetails) {
            throw createEvaluationError(exceptionDetails);
        }
        if (returnByValue) {
            return valueFromPrimitiveRemoteObject(remoteObject);
        }
        return this.#world.createCdpHandle(remoteObject);
        async function convertArgumentAsync(context, arg) {
            if (arg instanceof LazyArg) {
                arg = await arg.get(context);
            }
            return convertArgument(context, arg);
        }
        function convertArgument(context, arg) {
            if (typeof arg === 'bigint') {
                return { unserializableValue: `${arg.toString()}n` };
            }
            if (Object.is(arg, -0)) {
                return { unserializableValue: '-0' };
            }
            if (Object.is(arg, Infinity)) {
                return { unserializableValue: 'Infinity' };
            }
            if (Object.is(arg, -Infinity)) {
                return { unserializableValue: '-Infinity' };
            }
            if (Object.is(arg, NaN)) {
                return { unserializableValue: 'NaN' };
            }
            const objectHandle = arg && (arg instanceof CdpJSHandle || arg instanceof CdpElementHandle)
                ? arg
                : null;
            if (objectHandle) {
                if (objectHandle.realm !== context.#world) {
                    throw new Error('JSHandles can be evaluated only in the context they were created!');
                }
                if (objectHandle.disposed) {
                    throw new Error('JSHandle is disposed!');
                }
                if (objectHandle.remoteObject().unserializableValue) {
                    return {
                        unserializableValue: objectHandle.remoteObject().unserializableValue,
                    };
                }
                if (!objectHandle.remoteObject().objectId) {
                    return { value: objectHandle.remoteObject().value };
                }
                return { objectId: objectHandle.remoteObject().objectId };
            }
            return { value: arg };
        }
    }
    [disposeSymbol]() {
        this.#disposables.dispose();
        this.emit('disposed', undefined);
        super[disposeSymbol]();
    }
}
const rewriteError = (error) => {
    if (error.message.includes('Object reference chain is too long')) {
        return { result: { type: 'undefined' } };
    }
    if (error.message.includes("Object couldn't be returned by value")) {
        return { result: { type: 'undefined' } };
    }
    if (error.message.endsWith('Cannot find context with specified id') ||
        error.message.endsWith('Inspected target navigated or closed')) {
        throw new Error('Execution context was destroyed, most likely because of a navigation.');
    }
    throw error;
};
//# sourceMappingURL=ExecutionContext.js.map