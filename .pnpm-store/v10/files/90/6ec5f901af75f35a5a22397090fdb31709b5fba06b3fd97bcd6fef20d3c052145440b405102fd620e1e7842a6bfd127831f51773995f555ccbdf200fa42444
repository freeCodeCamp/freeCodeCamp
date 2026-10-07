/**
 * @license
 * Copyright 2024 Google Inc.
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
import { UnsupportedOperation } from '../../common/Errors.js';
import { EventEmitter } from '../../common/EventEmitter.js';
import { inertIfDisposed, throwIfDisposed } from '../../util/decorators.js';
import { DisposableStack, disposeSymbol } from '../../util/disposable.js';
import { SharedWorkerRealm } from './Realm.js';
import { UserContext } from './UserContext.js';
/**
 * @internal
 */
let Browser = (() => {
    let _classSuper = EventEmitter;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _close_decorators;
    let _addPreloadScript_decorators;
    let _removeIntercept_decorators;
    let _removePreloadScript_decorators;
    let _createUserContext_decorators;
    let _installExtension_decorators;
    let _uninstallExtension_decorators;
    let _setClientWindowState_decorators;
    let _getClientWindowInfo_decorators;
    return class Browser extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: obj => "close" in obj, get: obj => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: obj => "addPreloadScript" in obj, get: obj => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _removeIntercept_decorators, { kind: "method", name: "removeIntercept", static: false, private: false, access: { has: obj => "removeIntercept" in obj, get: obj => obj.removeIntercept }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: obj => "removePreloadScript" in obj, get: obj => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _createUserContext_decorators, { kind: "method", name: "createUserContext", static: false, private: false, access: { has: obj => "createUserContext" in obj, get: obj => obj.createUserContext }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _installExtension_decorators, { kind: "method", name: "installExtension", static: false, private: false, access: { has: obj => "installExtension" in obj, get: obj => obj.installExtension }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _uninstallExtension_decorators, { kind: "method", name: "uninstallExtension", static: false, private: false, access: { has: obj => "uninstallExtension" in obj, get: obj => obj.uninstallExtension }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setClientWindowState_decorators, { kind: "method", name: "setClientWindowState", static: false, private: false, access: { has: obj => "setClientWindowState" in obj, get: obj => obj.setClientWindowState }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _getClientWindowInfo_decorators, { kind: "method", name: "getClientWindowInfo", static: false, private: false, access: { has: obj => "getClientWindowInfo" in obj, get: obj => obj.getClientWindowInfo }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static async from(session) {
            const browser = new Browser(session);
            await browser.#initialize();
            return browser;
        }
        #closed = (__runInitializers(this, _instanceExtraInitializers), false);
        #reason;
        #disposables = new DisposableStack();
        #userContexts = new Map();
        session;
        #sharedWorkers = new Map();
        constructor(session) {
            super();
            this.session = session;
        }
        async #initialize() {
            const sessionEmitter = this.#disposables.use(new EventEmitter(this.session));
            sessionEmitter.once('ended', reason => {
                this.dispose(reason);
            });
            sessionEmitter.on('script.realmCreated', info => {
                if (info.type !== 'shared-worker') {
                    return;
                }
                this.#sharedWorkers.set(info.realm, SharedWorkerRealm.from(this, info.realm, info.origin));
            });
            await this.#syncUserContexts();
            await this.#syncBrowsingContexts();
        }
        async #syncUserContexts() {
            const { result: { userContexts }, } = await this.session.send('browser.getUserContexts', {});
            for (const context of userContexts) {
                this.#createUserContext(context.userContext);
            }
        }
        async #syncBrowsingContexts() {
            // In case contexts are created or destroyed during `getTree`, we use this
            // set to detect them.
            const contextIds = new Set();
            let contexts;
            {
                const env_1 = { stack: [], error: void 0, hasError: false };
                try {
                    const sessionEmitter = __addDisposableResource(env_1, new EventEmitter(this.session), false);
                    sessionEmitter.on('browsingContext.contextCreated', info => {
                        contextIds.add(info.context);
                    });
                    const { result } = await this.session.send('browsingContext.getTree', {});
                    contexts = result.contexts;
                }
                catch (e_1) {
                    env_1.error = e_1;
                    env_1.hasError = true;
                }
                finally {
                    __disposeResources(env_1);
                }
            }
            // Simulating events so contexts are created naturally.
            for (const info of contexts) {
                if (!contextIds.has(info.context)) {
                    this.session.emit('browsingContext.contextCreated', info);
                }
                if (info.children) {
                    contexts.push(...info.children);
                }
            }
        }
        #createUserContext(id) {
            const userContext = UserContext.create(this, id);
            this.#userContexts.set(userContext.id, userContext);
            const userContextEmitter = this.#disposables.use(new EventEmitter(userContext));
            userContextEmitter.once('closed', () => {
                userContextEmitter.removeAllListeners();
                this.#userContexts.delete(userContext.id);
            });
            return userContext;
        }
        get closed() {
            return this.#closed;
        }
        get defaultUserContext() {
            // SAFETY: A UserContext is always created for the default context.
            return this.#userContexts.get(UserContext.DEFAULT);
        }
        get disconnected() {
            return this.#reason !== undefined;
        }
        get disposed() {
            return this.disconnected;
        }
        get userContexts() {
            return this.#userContexts.values();
        }
        dispose(reason, closed = false) {
            this.#closed = closed;
            this.#reason = reason;
            this[disposeSymbol]();
        }
        async close() {
            try {
                await this.session.send('browser.close', {});
            }
            finally {
                this.dispose('Browser already closed.', true);
            }
        }
        async addPreloadScript(functionDeclaration, options = {}) {
            const { result: { script }, } = await this.session.send('script.addPreloadScript', {
                functionDeclaration,
                ...options,
                contexts: options.contexts?.map(context => {
                    return context.id;
                }),
            });
            return script;
        }
        async removeIntercept(intercept) {
            await this.session.send('network.removeIntercept', {
                intercept,
            });
        }
        async removePreloadScript(script) {
            await this.session.send('script.removePreloadScript', {
                script,
            });
        }
        async createUserContext(options) {
            const proxyConfig = options.proxyServer === undefined
                ? undefined
                : {
                    proxyType: 'manual',
                    httpProxy: options.proxyServer,
                    sslProxy: options.proxyServer,
                    noProxy: options.proxyBypassList,
                };
            const { result: { userContext }, } = await this.session.send('browser.createUserContext', {
                proxy: proxyConfig,
            });
            if (options.downloadBehavior?.policy === 'allowAndName') {
                throw new UnsupportedOperation('`allowAndName` is not supported in WebDriver BiDi');
            }
            if (options.downloadBehavior?.policy === 'allow') {
                if (options.downloadBehavior.downloadPath === undefined) {
                    throw new UnsupportedOperation('`downloadPath` is required in `allow` download behavior');
                }
                await this.session.send('browser.setDownloadBehavior', {
                    downloadBehavior: {
                        type: 'allowed',
                        destinationFolder: options.downloadBehavior.downloadPath,
                    },
                    userContexts: [userContext],
                });
            }
            if (options.downloadBehavior?.policy === 'deny') {
                await this.session.send('browser.setDownloadBehavior', {
                    downloadBehavior: { type: 'denied' },
                    userContexts: [userContext],
                });
            }
            return this.#createUserContext(userContext);
        }
        async installExtension(path) {
            const { result: { extension }, } = await this.session.send('webExtension.install', {
                extensionData: { type: 'path', path },
            });
            return extension;
        }
        async uninstallExtension(id) {
            await this.session.send('webExtension.uninstall', { extension: id });
        }
        async setClientWindowState(params) {
            await this.session.send('browser.setClientWindowState', params);
        }
        async getClientWindowInfo(windowId) {
            const { result: { clientWindows }, } = await this.session.send('browser.getClientWindows', {});
            const window = clientWindows.find(window => {
                return window.clientWindow === windowId;
            });
            if (!window) {
                throw new Error('Window not found');
            }
            return window;
        }
        [(_dispose_decorators = [inertIfDisposed], _close_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], _addPreloadScript_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], _removeIntercept_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], _removePreloadScript_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], _createUserContext_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], _installExtension_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], _uninstallExtension_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], _setClientWindowState_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], _getClientWindowInfo_decorators = [throwIfDisposed(browser => {
                // SAFETY: By definition of `disposed`, `#reason` is defined.
                return browser.#reason;
            })], disposeSymbol)]() {
            this.#reason ??=
                'Browser was disconnected, probably because the session ended.';
            if (this.closed) {
                this.emit('closed', this.#reason);
            }
            this.emit('disconnected', this.#reason);
            this.#disposables.dispose();
            super[disposeSymbol]();
        }
    };
})();
export { Browser };
//# sourceMappingURL=Browser.js.map