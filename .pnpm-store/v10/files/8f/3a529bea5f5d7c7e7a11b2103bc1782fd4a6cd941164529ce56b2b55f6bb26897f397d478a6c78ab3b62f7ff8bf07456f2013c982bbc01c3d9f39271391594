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
import { Frame, FrameEvent, throwIfDetached } from '../api/Frame.js';
import { UnsupportedOperation } from '../common/Errors.js';
import { debugError } from '../common/util.js';
import { Deferred } from '../util/Deferred.js';
import { disposeSymbol } from '../util/disposable.js';
import { isErrorLike } from '../util/ErrorLike.js';
import { Accessibility } from './Accessibility.js';
import { FrameManagerEvent } from './FrameManagerEvents.js';
import { IsolatedWorld } from './IsolatedWorld.js';
import { MAIN_WORLD, PUPPETEER_WORLD } from './IsolatedWorlds.js';
import { LifecycleWatcher, } from './LifecycleWatcher.js';
import { CDP_BINDING_PREFIX } from './utils.js';
/**
 * @internal
 */
let CdpFrame = (() => {
    let _classSuper = Frame;
    let _instanceExtraInitializers = [];
    let _goto_decorators;
    let _waitForNavigation_decorators;
    let _setContent_decorators;
    let _addPreloadScript_decorators;
    let _addExposedFunctionBinding_decorators;
    let _removeExposedFunctionBinding_decorators;
    let _waitForDevicePrompt_decorators;
    return class CdpFrame extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, null, _goto_decorators, { kind: "method", name: "goto", static: false, private: false, access: { has: obj => "goto" in obj, get: obj => obj.goto }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _waitForNavigation_decorators, { kind: "method", name: "waitForNavigation", static: false, private: false, access: { has: obj => "waitForNavigation" in obj, get: obj => obj.waitForNavigation }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setContent_decorators, { kind: "method", name: "setContent", static: false, private: false, access: { has: obj => "setContent" in obj, get: obj => obj.setContent }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: obj => "addPreloadScript" in obj, get: obj => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addExposedFunctionBinding_decorators, { kind: "method", name: "addExposedFunctionBinding", static: false, private: false, access: { has: obj => "addExposedFunctionBinding" in obj, get: obj => obj.addExposedFunctionBinding }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _removeExposedFunctionBinding_decorators, { kind: "method", name: "removeExposedFunctionBinding", static: false, private: false, access: { has: obj => "removeExposedFunctionBinding" in obj, get: obj => obj.removeExposedFunctionBinding }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _waitForDevicePrompt_decorators, { kind: "method", name: "waitForDevicePrompt", static: false, private: false, access: { has: obj => "waitForDevicePrompt" in obj, get: obj => obj.waitForDevicePrompt }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #url = (__runInitializers(this, _instanceExtraInitializers), '');
        #detached = false;
        #client;
        _frameManager;
        _loaderId = '';
        _lifecycleEvents = new Set();
        _id;
        _parentId;
        accessibility;
        worlds;
        extensionWorlds = {};
        constructor(frameManager, frameId, parentFrameId, client) {
            super();
            this._frameManager = frameManager;
            this.#url = '';
            this._id = frameId;
            this._parentId = parentFrameId;
            this.#detached = false;
            this.#client = client;
            this._loaderId = '';
            this.worlds = {
                [MAIN_WORLD]: new IsolatedWorld(this, this._frameManager.timeoutSettings, MAIN_WORLD),
                [PUPPETEER_WORLD]: new IsolatedWorld(this, this._frameManager.timeoutSettings, PUPPETEER_WORLD),
            };
            this.accessibility = new Accessibility(this.worlds[MAIN_WORLD], frameId);
            this.on(FrameEvent.FrameSwappedByActivation, () => {
                // Emulate loading process for swapped frames.
                this._onLoadingStarted();
                this._onLoadingStopped();
            });
            this.registerWorldListeners(this.worlds[MAIN_WORLD]);
        }
        /**
         * @internal
         */
        registerWorldListeners(world) {
            world.emitter.on('consoleapicalled', event => {
                this._frameManager.emit(FrameManagerEvent.ConsoleApiCalled, [
                    world,
                    event,
                ]);
            });
            world.emitter.on('bindingcalled', event => {
                this._frameManager.emit(FrameManagerEvent.BindingCalled, [world, event]);
            });
        }
        /**
         * This is used internally in DevTools.
         *
         * @internal
         */
        _client() {
            return this.#client;
        }
        /**
         * Updates the frame ID with the new ID. This happens when the main frame is
         * replaced by a different frame.
         */
        updateId(id) {
            this._id = id;
        }
        updateClient(client) {
            this.#client = client;
        }
        page() {
            return this._frameManager.page();
        }
        async goto(url, options = {}) {
            if (!this.page()._isUrlAllowed(url)) {
                throw new Error(`Navigation to ${url} is blocked by blocklist/allowlist rules`);
            }
            const { referer = this._frameManager.networkManager.extraHTTPHeaders()['referer'], referrerPolicy = this._frameManager.networkManager.extraHTTPHeaders()['referer-policy'], waitUntil = ['load'], timeout = this._frameManager.timeoutSettings.navigationTimeout(), } = options;
            let ensureNewDocumentNavigation = false;
            const watcher = new LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout);
            let error = await Deferred.race([
                navigate(this.#client, url, referer, referrerPolicy ? referrerPolicyToProtocol(referrerPolicy) : undefined, this._id),
                watcher.terminationPromise(),
            ]);
            if (!error) {
                error = await Deferred.race([
                    watcher.terminationPromise(),
                    ensureNewDocumentNavigation
                        ? watcher.newDocumentNavigationPromise()
                        : watcher.sameDocumentNavigationPromise(),
                ]);
            }
            try {
                if (error) {
                    throw error;
                }
                return await watcher.navigationResponse();
            }
            finally {
                watcher.dispose();
            }
            async function navigate(client, url, referrer, referrerPolicy, frameId) {
                try {
                    const response = await client.send('Page.navigate', {
                        url,
                        referrer,
                        frameId,
                        referrerPolicy,
                    });
                    ensureNewDocumentNavigation = !!response.loaderId;
                    if (response.errorText === 'net::ERR_HTTP_RESPONSE_CODE_FAILURE') {
                        return null;
                    }
                    return response.errorText
                        ? new Error(`${response.errorText} at ${url}`)
                        : null;
                }
                catch (error) {
                    if (isErrorLike(error)) {
                        return error;
                    }
                    throw error;
                }
            }
        }
        async waitForNavigation(options = {}) {
            const { waitUntil = ['load'], timeout = this._frameManager.timeoutSettings.navigationTimeout(), signal, } = options;
            const watcher = new LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout, signal);
            const error = await Deferred.race([
                watcher.terminationPromise(),
                ...(options.ignoreSameDocumentNavigation
                    ? []
                    : [watcher.sameDocumentNavigationPromise()]),
                watcher.newDocumentNavigationPromise(),
            ]);
            try {
                if (error) {
                    throw error;
                }
                const result = await Deferred.race([watcher.terminationPromise(), watcher.navigationResponse()]);
                if (result instanceof Error) {
                    throw error;
                }
                return result || null;
            }
            finally {
                watcher.dispose();
            }
        }
        get client() {
            return this.#client;
        }
        mainRealm() {
            return this.worlds[MAIN_WORLD];
        }
        isolatedRealm() {
            return this.worlds[PUPPETEER_WORLD];
        }
        async setContent(html, options = {}) {
            const { waitUntil = ['load'], timeout = this._frameManager.timeoutSettings.navigationTimeout(), } = options;
            // We rely upon the fact that document.open() will reset frame lifecycle with "init"
            // lifecycle event. @see https://crrev.com/608658
            await this.setFrameContent(html);
            const watcher = new LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout);
            const error = await Deferred.race([
                watcher.terminationPromise(),
                watcher.lifecyclePromise(),
            ]);
            watcher.dispose();
            if (error) {
                throw error;
            }
        }
        url() {
            return this.#url;
        }
        parentFrame() {
            return this._frameManager._frameTree.parentFrame(this._id) || null;
        }
        childFrames() {
            return this._frameManager._frameTree.childFrames(this._id);
        }
        #deviceRequestPromptManager() {
            return this._frameManager._deviceRequestPromptManager(this.#client);
        }
        async addPreloadScript(preloadScript) {
            const parentFrame = this.parentFrame();
            if (parentFrame && this.#client === parentFrame.client) {
                return;
            }
            if (preloadScript.getIdForFrame(this)) {
                return;
            }
            const { identifier } = await this.#client.send('Page.addScriptToEvaluateOnNewDocument', {
                source: preloadScript.source,
            });
            preloadScript.setIdForFrame(this, identifier);
        }
        async addExposedFunctionBinding(binding) {
            // If a frame has not started loading, it might never start. Rely on
            // addScriptToEvaluateOnNewDocument in that case.
            if (this !== this._frameManager.mainFrame() && !this._hasStartedLoading) {
                return;
            }
            await Promise.all([
                this.#client.send('Runtime.addBinding', {
                    name: CDP_BINDING_PREFIX + binding.name,
                }),
                this.evaluate(binding.initSource).catch(debugError),
            ]);
        }
        async removeExposedFunctionBinding(binding) {
            // If a frame has not started loading, it might never start. Rely on
            // addScriptToEvaluateOnNewDocument in that case.
            if (this !== this._frameManager.mainFrame() && !this._hasStartedLoading) {
                return;
            }
            await Promise.all([
                this.#client.send('Runtime.removeBinding', {
                    name: CDP_BINDING_PREFIX + binding.name,
                }),
                this.evaluate(name => {
                    // Removes the dangling Puppeteer binding wrapper.
                    // @ts-expect-error: In a different context.
                    globalThis[name] = undefined;
                }, binding.name).catch(debugError),
            ]);
        }
        async waitForDevicePrompt(options = {}) {
            return await this.#deviceRequestPromptManager().waitForDevicePrompt(options);
        }
        _navigated(framePayload) {
            this._name = framePayload.name;
            this.#url = `${framePayload.url}${framePayload.urlFragment || ''}`;
        }
        _navigatedWithinDocument(url) {
            this.#url = url;
        }
        _onLifecycleEvent(loaderId, name) {
            if (name === 'init') {
                this._loaderId = loaderId;
                this._lifecycleEvents.clear();
            }
            this._lifecycleEvents.add(name);
        }
        _onLoadingStopped() {
            this._lifecycleEvents.add('DOMContentLoaded');
            this._lifecycleEvents.add('load');
        }
        _onLoadingStarted() {
            this._hasStartedLoading = true;
        }
        get detached() {
            return this.#detached;
        }
        [(_goto_decorators = [throwIfDetached], _waitForNavigation_decorators = [throwIfDetached], _setContent_decorators = [throwIfDetached], _addPreloadScript_decorators = [throwIfDetached], _addExposedFunctionBinding_decorators = [throwIfDetached], _removeExposedFunctionBinding_decorators = [throwIfDetached], _waitForDevicePrompt_decorators = [throwIfDetached], disposeSymbol)]() {
            if (this.#detached) {
                return;
            }
            this.#detached = true;
            this.worlds[MAIN_WORLD][disposeSymbol]();
            this.worlds[PUPPETEER_WORLD][disposeSymbol]();
            for (const extensionWorld of Object.values(this.extensionWorlds)) {
                extensionWorld[disposeSymbol]();
            }
            super[disposeSymbol]();
        }
        exposeFunction() {
            throw new UnsupportedOperation();
        }
        async frameElement() {
            const parent = this.parentFrame();
            if (!parent) {
                return null;
            }
            const { backendNodeId } = await parent.client.send('DOM.getFrameOwner', {
                frameId: this._id,
            });
            return (await parent
                .mainRealm()
                .adoptBackendNode(backendNodeId));
        }
        /**
         * @public
         */
        extensionRealms() {
            return Object.values(this.extensionWorlds);
        }
    };
})();
export { CdpFrame };
/**
 * @internal
 */
export function referrerPolicyToProtocol(referrerPolicy) {
    // See
    // https://chromedevtools.github.io/devtools-protocol/tot/Page/#type-ReferrerPolicy
    // We need to conver from Web-facing phase to CDP's camelCase.
    return referrerPolicy.replaceAll(/-./g, match => {
        return match[1].toUpperCase();
    });
}
//# sourceMappingURL=Frame.js.map