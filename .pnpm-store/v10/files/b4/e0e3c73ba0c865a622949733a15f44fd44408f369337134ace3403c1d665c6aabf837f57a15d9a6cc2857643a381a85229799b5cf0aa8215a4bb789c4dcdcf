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
import { EventEmitter } from '../../common/EventEmitter.js';
import { isString } from '../../common/util.js';
import { assert } from '../../util/assert.js';
import { inertIfDisposed, throwIfDisposed } from '../../util/decorators.js';
import { DisposableStack, disposeSymbol } from '../../util/disposable.js';
import { BidiBluetoothEmulation } from '../BluetoothEmulation.js';
import { BidiDeviceRequestPromptManager } from '../DeviceRequestPrompt.js';
import { Navigation } from './Navigation.js';
import { WindowRealm } from './Realm.js';
import { Request } from './Request.js';
import { UserPrompt } from './UserPrompt.js';
/**
 * @internal
 */
let BrowsingContext = (() => {
    var _a;
    let _classSuper = EventEmitter;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _activate_decorators;
    let _captureScreenshot_decorators;
    let _close_decorators;
    let _traverseHistory_decorators;
    let _navigate_decorators;
    let _reload_decorators;
    let _setCacheBehavior_decorators;
    let _print_decorators;
    let _handleUserPrompt_decorators;
    let _setViewport_decorators;
    let _setTouchOverride_decorators;
    let _performActions_decorators;
    let _releaseActions_decorators;
    let _createWindowRealm_decorators;
    let _addPreloadScript_decorators;
    let _addIntercept_decorators;
    let _removePreloadScript_decorators;
    let _setGeolocationOverride_decorators;
    let _setTimezoneOverride_decorators;
    let _setScreenOrientationOverride_decorators;
    let _getCookies_decorators;
    let _setCookie_decorators;
    let _setFiles_decorators;
    let _subscribe_decorators;
    let _addInterception_decorators;
    let _deleteCookie_decorators;
    let _locateNodes_decorators;
    return class BrowsingContext extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _deleteCookie_decorators = [throwIfDisposed(context => {
                    // SAFETY: Disposal implies this exists.
                    return context.#reason;
                })];
            _locateNodes_decorators = [throwIfDisposed(context => {
                    // SAFETY: Disposal implies this exists.
                    return context.#reason;
                })];
            __esDecorate(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _activate_decorators, { kind: "method", name: "activate", static: false, private: false, access: { has: obj => "activate" in obj, get: obj => obj.activate }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _captureScreenshot_decorators, { kind: "method", name: "captureScreenshot", static: false, private: false, access: { has: obj => "captureScreenshot" in obj, get: obj => obj.captureScreenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: obj => "close" in obj, get: obj => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _traverseHistory_decorators, { kind: "method", name: "traverseHistory", static: false, private: false, access: { has: obj => "traverseHistory" in obj, get: obj => obj.traverseHistory }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _navigate_decorators, { kind: "method", name: "navigate", static: false, private: false, access: { has: obj => "navigate" in obj, get: obj => obj.navigate }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _reload_decorators, { kind: "method", name: "reload", static: false, private: false, access: { has: obj => "reload" in obj, get: obj => obj.reload }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setCacheBehavior_decorators, { kind: "method", name: "setCacheBehavior", static: false, private: false, access: { has: obj => "setCacheBehavior" in obj, get: obj => obj.setCacheBehavior }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _print_decorators, { kind: "method", name: "print", static: false, private: false, access: { has: obj => "print" in obj, get: obj => obj.print }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _handleUserPrompt_decorators, { kind: "method", name: "handleUserPrompt", static: false, private: false, access: { has: obj => "handleUserPrompt" in obj, get: obj => obj.handleUserPrompt }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setViewport_decorators, { kind: "method", name: "setViewport", static: false, private: false, access: { has: obj => "setViewport" in obj, get: obj => obj.setViewport }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setTouchOverride_decorators, { kind: "method", name: "setTouchOverride", static: false, private: false, access: { has: obj => "setTouchOverride" in obj, get: obj => obj.setTouchOverride }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _performActions_decorators, { kind: "method", name: "performActions", static: false, private: false, access: { has: obj => "performActions" in obj, get: obj => obj.performActions }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _releaseActions_decorators, { kind: "method", name: "releaseActions", static: false, private: false, access: { has: obj => "releaseActions" in obj, get: obj => obj.releaseActions }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _createWindowRealm_decorators, { kind: "method", name: "createWindowRealm", static: false, private: false, access: { has: obj => "createWindowRealm" in obj, get: obj => obj.createWindowRealm }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: obj => "addPreloadScript" in obj, get: obj => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addIntercept_decorators, { kind: "method", name: "addIntercept", static: false, private: false, access: { has: obj => "addIntercept" in obj, get: obj => obj.addIntercept }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: obj => "removePreloadScript" in obj, get: obj => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setGeolocationOverride_decorators, { kind: "method", name: "setGeolocationOverride", static: false, private: false, access: { has: obj => "setGeolocationOverride" in obj, get: obj => obj.setGeolocationOverride }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setTimezoneOverride_decorators, { kind: "method", name: "setTimezoneOverride", static: false, private: false, access: { has: obj => "setTimezoneOverride" in obj, get: obj => obj.setTimezoneOverride }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setScreenOrientationOverride_decorators, { kind: "method", name: "setScreenOrientationOverride", static: false, private: false, access: { has: obj => "setScreenOrientationOverride" in obj, get: obj => obj.setScreenOrientationOverride }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _getCookies_decorators, { kind: "method", name: "getCookies", static: false, private: false, access: { has: obj => "getCookies" in obj, get: obj => obj.getCookies }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setCookie_decorators, { kind: "method", name: "setCookie", static: false, private: false, access: { has: obj => "setCookie" in obj, get: obj => obj.setCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: obj => "setFiles" in obj, get: obj => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: obj => "subscribe" in obj, get: obj => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addInterception_decorators, { kind: "method", name: "addInterception", static: false, private: false, access: { has: obj => "addInterception" in obj, get: obj => obj.addInterception }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _deleteCookie_decorators, { kind: "method", name: "deleteCookie", static: false, private: false, access: { has: obj => "deleteCookie" in obj, get: obj => obj.deleteCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: obj => "locateNodes" in obj, get: obj => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(userContext, parent, id, url, originalOpener, clientWindow) {
            const browsingContext = new BrowsingContext(userContext, parent, id, url, originalOpener, clientWindow);
            browsingContext.#initialize();
            return browsingContext;
        }
        #navigation = __runInitializers(this, _instanceExtraInitializers);
        #reason;
        #url;
        // Indicated whether client hints have been set to non-default.
        #clientHintsAreSet = false;
        #children = new Map();
        #disposables = new DisposableStack();
        #realms = new Map();
        defaultRealm;
        id;
        parent;
        userContext;
        originalOpener;
        windowId;
        #emulationState = { javaScriptEnabled: true };
        #bluetoothEmulation;
        #deviceRequestPromptManager;
        constructor(userContext, parent, id, url, originalOpener, clientWindow) {
            super();
            this.#url = url;
            this.id = id;
            this.parent = parent;
            this.userContext = userContext;
            this.originalOpener = originalOpener;
            this.windowId = clientWindow;
            this.defaultRealm = this.#createWindowRealm();
            this.#bluetoothEmulation = new BidiBluetoothEmulation(this.id, this.#session);
            this.#deviceRequestPromptManager = new BidiDeviceRequestPromptManager(this.id, this.#session);
        }
        #initialize() {
            const userContextEmitter = this.#disposables.use(new EventEmitter(this.userContext));
            userContextEmitter.once('closed', reason => {
                this.dispose(`Browsing context already closed: ${reason}`);
            });
            const sessionEmitter = this.#disposables.use(new EventEmitter(this.#session));
            sessionEmitter.on('input.fileDialogOpened', info => {
                if (this.id !== info.context) {
                    return;
                }
                this.emit('filedialogopened', info);
            });
            sessionEmitter.on('browsingContext.contextCreated', info => {
                if (info.parent !== this.id) {
                    return;
                }
                const browsingContext = BrowsingContext.from(this.userContext, this, info.context, info.url, info.originalOpener, info.clientWindow);
                this.#children.set(info.context, browsingContext);
                const browsingContextEmitter = this.#disposables.use(new EventEmitter(browsingContext));
                browsingContextEmitter.once('closed', () => {
                    browsingContextEmitter.removeAllListeners();
                    this.#children.delete(browsingContext.id);
                });
                this.emit('browsingcontext', browsingContext);
            });
            sessionEmitter.on('browsingContext.contextDestroyed', info => {
                if (info.context !== this.id) {
                    return;
                }
                this.dispose('Browsing context already closed.');
            });
            sessionEmitter.on('browsingContext.historyUpdated', info => {
                if (info.context !== this.id) {
                    return;
                }
                this.#url = info.url;
                this.emit('historyUpdated', undefined);
            });
            sessionEmitter.on('browsingContext.domContentLoaded', info => {
                if (info.context !== this.id) {
                    return;
                }
                this.#url = info.url;
                this.emit('DOMContentLoaded', undefined);
            });
            sessionEmitter.on('browsingContext.load', info => {
                if (info.context !== this.id) {
                    return;
                }
                this.#url = info.url;
                this.emit('load', undefined);
            });
            sessionEmitter.on('browsingContext.navigationStarted', info => {
                if (info.context !== this.id) {
                    return;
                }
                // Note: we should not update this.#url at this point since the context
                // has not finished navigating to the info.url yet.
                // If the navigation hasn't finished, then this is nested navigation. The
                // current navigation will handle this.
                if (this.#navigation !== undefined && !this.#navigation.disposed) {
                    return;
                }
                // Note the navigation ID is null for this event.
                this.#navigation = Navigation.from(this);
                const navigationEmitter = this.#disposables.use(new EventEmitter(this.#navigation));
                for (const eventName of ['fragment', 'failed', 'aborted']) {
                    navigationEmitter.once(eventName, ({ url }) => {
                        navigationEmitter[disposeSymbol]();
                        this.#url = url;
                    });
                }
                this.emit('navigation', this.#navigation);
            });
            sessionEmitter.on('network.beforeRequestSent', event => {
                if (event.context !== this.id) {
                    return;
                }
                if (event.redirectCount > 0) {
                    // Means the request is a redirect. This is handled in Request.
                    // Or an Auth event was issued
                    return;
                }
                const request = Request.from(this, event);
                this.emit('request', request);
            });
            sessionEmitter.on('log.entryAdded', entry => {
                if (entry.source.context !== this.id) {
                    return;
                }
                this.emit('log', entry);
            });
            sessionEmitter.on('browsingContext.userPromptOpened', info => {
                if (info.context !== this.id) {
                    return;
                }
                const userPrompt = UserPrompt.from(this, info);
                this.emit('userprompt', userPrompt);
            });
        }
        get #session() {
            return this.userContext.browser.session;
        }
        get children() {
            return this.#children.values();
        }
        get closed() {
            return this.#reason !== undefined;
        }
        get disposed() {
            return this.closed;
        }
        get realms() {
            // eslint-disable-next-line @typescript-eslint/no-this-alias -- Required
            const self = this;
            return (function* () {
                yield self.defaultRealm;
                yield* self.#realms.values();
            })();
        }
        get top() {
            let context = this;
            for (let { parent } = context; parent; { parent } = context) {
                context = parent;
            }
            return context;
        }
        get url() {
            return this.#url;
        }
        #createWindowRealm(sandbox) {
            const realm = WindowRealm.from(this, sandbox);
            realm.on('worker', realm => {
                this.emit('worker', realm);
            });
            return realm;
        }
        dispose(reason) {
            this.#reason = reason;
            for (const context of this.#children.values()) {
                context.dispose('Parent browsing context was disposed');
            }
            this[disposeSymbol]();
        }
        async activate() {
            await this.#session.send('browsingContext.activate', {
                context: this.id,
            });
        }
        async captureScreenshot(options = {}) {
            const { result: { data }, } = await this.#session.send('browsingContext.captureScreenshot', {
                context: this.id,
                ...options,
            });
            return data;
        }
        async close(promptUnload) {
            // The WebDriver BiDi specification only allows closing top-level browsing contexts.
            // Closing a top-level context automatically closes all its children, so there is
            // no need to explicitly close nested contexts.
            await this.#session.send('browsingContext.close', {
                context: this.id,
                promptUnload,
            });
        }
        async traverseHistory(delta) {
            await this.#session.send('browsingContext.traverseHistory', {
                context: this.id,
                delta,
            });
        }
        async navigate(url, wait) {
            await this.#session.send('browsingContext.navigate', {
                context: this.id,
                url,
                wait,
            });
        }
        async reload(options = {}) {
            await this.#session.send('browsingContext.reload', {
                context: this.id,
                ...options,
            });
        }
        async setCacheBehavior(cacheBehavior) {
            await this.#session.send('network.setCacheBehavior', {
                contexts: [this.id],
                cacheBehavior,
            });
        }
        async print(options = {}) {
            const { result: { data }, } = await this.#session.send('browsingContext.print', {
                context: this.id,
                ...options,
            });
            return data;
        }
        async handleUserPrompt(options = {}) {
            await this.#session.send('browsingContext.handleUserPrompt', {
                context: this.id,
                ...options,
            });
        }
        async setViewport(options = {}) {
            await this.#session.send('browsingContext.setViewport', {
                context: this.id,
                ...options,
            });
        }
        async setTouchOverride(maxTouchPoints) {
            await this.#session.send('emulation.setTouchOverride', {
                contexts: [this.id],
                maxTouchPoints,
            });
        }
        async performActions(actions) {
            await this.#session.send('input.performActions', {
                context: this.id,
                actions,
            });
        }
        async releaseActions() {
            await this.#session.send('input.releaseActions', {
                context: this.id,
            });
        }
        createWindowRealm(sandbox) {
            return this.#createWindowRealm(sandbox);
        }
        async addPreloadScript(functionDeclaration, options = {}) {
            return await this.userContext.browser.addPreloadScript(functionDeclaration, {
                ...options,
                contexts: [this],
            });
        }
        async addIntercept(options) {
            const { result: { intercept }, } = await this.userContext.browser.session.send('network.addIntercept', {
                ...options,
                contexts: [this.id],
            });
            return intercept;
        }
        async removePreloadScript(script) {
            await this.userContext.browser.removePreloadScript(script);
        }
        async setGeolocationOverride(options) {
            if (!('coordinates' in options)) {
                throw new Error('Missing coordinates');
            }
            await this.userContext.browser.session.send('emulation.setGeolocationOverride', {
                coordinates: options.coordinates,
                contexts: [this.id],
            });
        }
        async setTimezoneOverride(timezoneId) {
            if (timezoneId?.startsWith('GMT')) {
                // CDP requires `GMT` prefix before timezone offset, while BiDi does not. Remove the
                // `GMT` for interop between CDP and BiDi.
                timezoneId = timezoneId?.replace('GMT', '');
            }
            await this.userContext.browser.session.send('emulation.setTimezoneOverride', {
                timezone: timezoneId ?? null,
                contexts: [this.id],
            });
        }
        async setScreenOrientationOverride(screenOrientation) {
            await this.#session.send('emulation.setScreenOrientationOverride', {
                screenOrientation,
                contexts: [this.id],
            });
        }
        async getCookies(options = {}) {
            const { result: { cookies }, } = await this.#session.send('storage.getCookies', {
                ...options,
                partition: {
                    type: 'context',
                    context: this.id,
                },
            });
            return cookies;
        }
        async setCookie(cookie) {
            await this.#session.send('storage.setCookie', {
                cookie,
                partition: {
                    type: 'context',
                    context: this.id,
                },
            });
        }
        async setFiles(element, files) {
            await this.#session.send('input.setFiles', {
                context: this.id,
                element,
                files,
            });
        }
        async subscribe(events) {
            await this.#session.subscribe(events, [this.id]);
        }
        async addInterception(events) {
            await this.#session.subscribe(events, [this.id]);
        }
        [(_dispose_decorators = [inertIfDisposed], _activate_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _captureScreenshot_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _close_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _traverseHistory_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _navigate_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _reload_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setCacheBehavior_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _print_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _handleUserPrompt_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setViewport_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setTouchOverride_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _performActions_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _releaseActions_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _createWindowRealm_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _addPreloadScript_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _addIntercept_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _removePreloadScript_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setGeolocationOverride_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setTimezoneOverride_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setScreenOrientationOverride_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _getCookies_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setCookie_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setFiles_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _subscribe_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _addInterception_decorators = [throwIfDisposed(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], disposeSymbol)]() {
            this.#reason ??=
                'Browsing context already closed, probably because the user context closed.';
            this.emit('closed', this.#reason);
            this.#disposables.dispose();
            super[disposeSymbol]();
        }
        async deleteCookie(...cookieFilters) {
            await Promise.all(cookieFilters.map(async (filter) => {
                await this.#session.send('storage.deleteCookies', {
                    filter: filter,
                    partition: {
                        type: 'context',
                        context: this.id,
                    },
                });
            }));
        }
        async locateNodes(locator, startNodes = []) {
            // TODO: add other locateNodes options if needed.
            const result = await this.#session.send('browsingContext.locateNodes', {
                context: this.id,
                locator,
                startNodes: startNodes.length
                    ? startNodes
                    : undefined,
            });
            return result.result.nodes;
        }
        async setJavaScriptEnabled(enabled) {
            await this.userContext.browser.session.send('emulation.setScriptingEnabled', {
                // Enabled `null` means `default`, `false` means `disabled`.
                enabled: enabled ? null : false,
                contexts: [this.id],
            });
            this.#emulationState.javaScriptEnabled = enabled;
        }
        isJavaScriptEnabled() {
            return this.#emulationState.javaScriptEnabled;
        }
        async setUserAgent(userAgent) {
            await this.#session.send('emulation.setUserAgentOverride', {
                userAgent,
                contexts: [this.id],
            });
        }
        async setClientHintsOverride(clientHints) {
            if (clientHints === null && !this.#clientHintsAreSet) {
                // Ignore the call, as the client hints are not supposed to be changed. Required to
                // avoid breakage with browsers that don't support client hints emulation.
                return;
            }
            this.#clientHintsAreSet = true;
            await this.#session.send('userAgentClientHints.setClientHintsOverride', {
                clientHints,
                contexts: [this.id],
            });
        }
        async setOfflineMode(enabled) {
            await this.#session.send('emulation.setNetworkConditions', {
                networkConditions: enabled
                    ? {
                        type: 'offline',
                    }
                    : null,
                contexts: [this.id],
            });
        }
        get bluetooth() {
            return this.#bluetoothEmulation;
        }
        async waitForDevicePrompt(timeout, signal) {
            return await this.#deviceRequestPromptManager.waitForDevicePrompt(timeout, signal);
        }
        async setExtraHTTPHeaders(headers) {
            await this.#session.send('network.setExtraHeaders', {
                headers: Object.entries(headers).map(([key, value]) => {
                    assert(isString(value), `Expected value of header "${key}" to be String, but "${typeof value}" is found.`);
                    return {
                        name: key.toLowerCase(),
                        value: { type: 'string', value: value },
                    };
                }),
                contexts: [this.id],
            });
        }
    };
})();
export { BrowsingContext };
//# sourceMappingURL=BrowsingContext.js.map