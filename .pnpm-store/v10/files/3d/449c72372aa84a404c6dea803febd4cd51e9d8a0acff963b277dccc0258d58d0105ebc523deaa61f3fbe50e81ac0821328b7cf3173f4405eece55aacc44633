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
import { debugError, withSourcePuppeteerURLIfNone } from '../common/util.js';
import { moveable, throwIfDisposed } from '../util/decorators.js';
import { disposeSymbol, asyncDisposeSymbol } from '../util/disposable.js';
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
let JSHandle = (() => {
    let _classDecorators = [moveable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getProperty_decorators;
    let _getProperties_decorators;
    var JSHandle = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(this, null, _getProperty_decorators, { kind: "method", name: "getProperty", static: false, private: false, access: { has: obj => "getProperty" in obj, get: obj => obj.getProperty }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _getProperties_decorators, { kind: "method", name: "getProperties", static: false, private: false, access: { has: obj => "getProperties" in obj, get: obj => obj.getProperties }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            JSHandle = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        /**
         * @internal
         */
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
        /**
         * Evaluates the given function with the current handle as its first argument.
         */
        async evaluate(pageFunction, ...args) {
            pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
            return await this.realm.evaluate(pageFunction, this, ...args);
        }
        /**
         * Evaluates the given function with the current handle as its first argument.
         *
         */
        async evaluateHandle(pageFunction, ...args) {
            pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
            return await this.realm.evaluateHandle(pageFunction, this, ...args);
        }
        /**
         * @internal
         */
        async getProperty(propertyName) {
            return await this.evaluateHandle((object, propertyName) => {
                return object[propertyName];
            }, propertyName);
        }
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
        async getProperties() {
            const propertyNames = await this.evaluate(object => {
                const enumerableProperties = [];
                const descriptors = Object.getOwnPropertyDescriptors(object);
                for (const propertyName in descriptors) {
                    if (descriptors[propertyName]?.enumerable) {
                        enumerableProperties.push(propertyName);
                    }
                }
                return enumerableProperties;
            });
            const map = new Map();
            const results = await Promise.all(propertyNames.map(key => {
                return this.getProperty(key);
            }));
            for (const [key, value] of Object.entries(propertyNames)) {
                const env_1 = { stack: [], error: void 0, hasError: false };
                try {
                    const handle = __addDisposableResource(env_1, results[key], false);
                    if (handle) {
                        map.set(value, handle.move());
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
            return map;
        }
        /** @internal */
        [(_getProperty_decorators = [throwIfDisposed()], _getProperties_decorators = [throwIfDisposed()], disposeSymbol)]() {
            return void this[asyncDisposeSymbol]().catch(debugError);
        }
        /** @internal */
        [asyncDisposeSymbol]() {
            return this.dispose();
        }
    };
    return JSHandle = _classThis;
})();
export { JSHandle };
//# sourceMappingURL=JSHandle.js.map