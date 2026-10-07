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
import { EventEmitter } from '../common/EventEmitter.js';
import { debugError } from '../common/util.js';
import { DisposableStack } from '../util/disposable.js';
import { interpolateFunction, stringifyFunction } from '../util/Function.js';
import { BidiElementHandle } from './ElementHandle.js';
import { BidiJSHandle } from './JSHandle.js';
/**
 * @internal
 */
export class ExposableFunction {
    static async from(frame, name, apply, isolate = false) {
        const func = new ExposableFunction(frame, name, apply, isolate);
        await func.#initialize();
        return func;
    }
    #frame;
    name;
    #apply;
    #isolate;
    #channel;
    #scripts = [];
    #disposables = new DisposableStack();
    constructor(frame, name, apply, isolate = false) {
        this.#frame = frame;
        this.name = name;
        this.#apply = apply;
        this.#isolate = isolate;
        this.#channel = `__puppeteer__${this.#frame._id}_page_exposeFunction_${this.name}`;
    }
    async #initialize() {
        const connection = this.#connection;
        const channel = {
            type: 'channel',
            value: {
                channel: this.#channel,
                ownership: "root" /* Bidi.Script.ResultOwnership.Root */,
            },
        };
        const connectionEmitter = this.#disposables.use(new EventEmitter(connection));
        connectionEmitter.on('script.message', this.#handleMessage);
        const functionDeclaration = stringifyFunction(interpolateFunction((callback) => {
            Object.assign(globalThis, {
                [PLACEHOLDER('name')]: function (...args) {
                    return new Promise((resolve, reject) => {
                        callback([resolve, reject, args]);
                    });
                },
            });
        }, { name: JSON.stringify(this.name) }));
        const frames = [this.#frame];
        for (const frame of frames) {
            frames.push(...frame.childFrames());
        }
        await Promise.all(frames.map(async (frame) => {
            const realm = this.#isolate ? frame.isolatedRealm() : frame.mainRealm();
            try {
                const [script] = await Promise.all([
                    frame.browsingContext.addPreloadScript(functionDeclaration, {
                        arguments: [channel],
                        sandbox: realm.sandbox,
                    }),
                    realm.realm.callFunction(functionDeclaration, false, {
                        arguments: [channel],
                    }),
                ]);
                this.#scripts.push([frame, script]);
            }
            catch (error) {
                // If it errors, the frame probably doesn't support call function. We
                // fail gracefully.
                debugError(error);
            }
        }));
    }
    get #connection() {
        return this.#frame.page().browser().connection;
    }
    #handleMessage = async (params) => {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            if (params.channel !== this.#channel) {
                return;
            }
            const realm = this.#getRealm(params.source);
            if (!realm) {
                // Unrelated message.
                return;
            }
            const dataHandle = __addDisposableResource(env_1, BidiJSHandle.from(params.data, realm), false);
            const stack = __addDisposableResource(env_1, new DisposableStack(), false);
            const args = [];
            let result;
            try {
                const env_2 = { stack: [], error: void 0, hasError: false };
                try {
                    const argsHandle = __addDisposableResource(env_2, await dataHandle.evaluateHandle(([, , args]) => {
                        return args;
                    }), false);
                    for (const [index, handle] of await argsHandle.getProperties()) {
                        stack.use(handle);
                        // Element handles are passed as is.
                        if (handle instanceof BidiElementHandle) {
                            args[+index] = handle;
                            stack.use(handle);
                            continue;
                        }
                        // Everything else is passed as the JS value.
                        args[+index] = handle.jsonValue();
                    }
                    result = await this.#apply(...(await Promise.all(args)));
                }
                catch (e_1) {
                    env_2.error = e_1;
                    env_2.hasError = true;
                }
                finally {
                    __disposeResources(env_2);
                }
            }
            catch (error) {
                try {
                    if (error instanceof Error) {
                        await dataHandle.evaluate(([, reject], name, message, stack) => {
                            const error = new Error(message);
                            error.name = name;
                            if (stack) {
                                error.stack = stack;
                            }
                            reject(error);
                        }, error.name, error.message, error.stack);
                    }
                    else {
                        await dataHandle.evaluate(([, reject], error) => {
                            reject(error);
                        }, error);
                    }
                }
                catch (error) {
                    debugError(error);
                }
                return;
            }
            try {
                await dataHandle.evaluate(([resolve], result) => {
                    resolve(result);
                }, result);
            }
            catch (error) {
                debugError(error);
            }
        }
        catch (e_2) {
            env_1.error = e_2;
            env_1.hasError = true;
        }
        finally {
            __disposeResources(env_1);
        }
    };
    #getRealm(source) {
        const frame = this.#findFrame(source.context);
        if (!frame) {
            // Unrelated message.
            return;
        }
        return frame.realm(source.realm);
    }
    #findFrame(id) {
        const frames = [this.#frame];
        for (const frame of frames) {
            if (frame._id === id) {
                return frame;
            }
            frames.push(...frame.childFrames());
        }
        return;
    }
    [Symbol.dispose]() {
        void this[Symbol.asyncDispose]().catch(debugError);
    }
    async [Symbol.asyncDispose]() {
        this.#disposables.dispose();
        await Promise.all(this.#scripts.map(async ([frame, script]) => {
            const realm = this.#isolate ? frame.isolatedRealm() : frame.mainRealm();
            try {
                await Promise.all([
                    realm.evaluate(name => {
                        delete globalThis[name];
                    }, this.name),
                    ...frame.childFrames().map(childFrame => {
                        return childFrame.evaluate(name => {
                            delete globalThis[name];
                        }, this.name);
                    }),
                    frame.browsingContext.removePreloadScript(script),
                ]);
            }
            catch (error) {
                debugError(error);
            }
        }));
    }
}
//# sourceMappingURL=ExposedFunction.js.map