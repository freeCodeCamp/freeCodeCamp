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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { combineLatest, defer, delayWhen, filter, first, firstValueFrom, map, of, race, raceWith, switchMap, } from '../../third_party/rxjs/rxjs.js';
import { Frame, throwIfDetached, } from '../api/Frame.js';
import { Accessibility } from '../cdp/Accessibility.js';
import { TargetCloseError, UnsupportedOperation } from '../common/Errors.js';
import { debugError, fromAbortSignal, fromEmitterEvent, timeout, } from '../common/util.js';
import { isErrorLike } from '../util/ErrorLike.js';
import { BidiCdpSession } from './CDPSession.js';
import { BidiDialog } from './Dialog.js';
import { BidiElementHandle } from './ElementHandle.js';
import { ExposableFunction } from './ExposedFunction.js';
import { BidiHTTPRequest, requests } from './HTTPRequest.js';
import { BidiFrameRealm } from './Realm.js';
import { getConsoleMessage, isConsoleLogEntry, isJavaScriptLogEntry, rewriteNavigationError, } from './util.js';
import { BidiWebWorker } from './WebWorker.js';
let BidiFrame = (() => {
    var _a;
    let _classSuper = Frame;
    let _instanceExtraInitializers = [];
    let _goto_decorators;
    let _setContent_decorators;
    let _waitForNavigation_decorators;
    let _private_waitForLoad$_decorators;
    let _private_waitForLoad$_descriptor;
    let _private_waitForNetworkIdle$_decorators;
    let _private_waitForNetworkIdle$_descriptor;
    let _setFiles_decorators;
    let _frameElement_decorators;
    let _locateNodes_decorators;
    return class BidiFrame extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _goto_decorators = [throwIfDetached];
            _setContent_decorators = [throwIfDetached];
            _waitForNavigation_decorators = [throwIfDetached];
            _private_waitForLoad$_decorators = [throwIfDetached];
            _private_waitForNetworkIdle$_decorators = [throwIfDetached];
            _setFiles_decorators = [throwIfDetached];
            _frameElement_decorators = [throwIfDetached];
            _locateNodes_decorators = [throwIfDetached];
            __esDecorate(this, null, _goto_decorators, { kind: "method", name: "goto", static: false, private: false, access: { has: obj => "goto" in obj, get: obj => obj.goto }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setContent_decorators, { kind: "method", name: "setContent", static: false, private: false, access: { has: obj => "setContent" in obj, get: obj => obj.setContent }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _waitForNavigation_decorators, { kind: "method", name: "waitForNavigation", static: false, private: false, access: { has: obj => "waitForNavigation" in obj, get: obj => obj.waitForNavigation }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_waitForLoad$_descriptor = { value: __setFunctionName(function (options = {}) {
                    let { waitUntil = 'load' } = options;
                    const { timeout: ms = this.timeoutSettings.navigationTimeout() } = options;
                    if (!Array.isArray(waitUntil)) {
                        waitUntil = [waitUntil];
                    }
                    const events = new Set();
                    for (const lifecycleEvent of waitUntil) {
                        switch (lifecycleEvent) {
                            case 'load': {
                                events.add('load');
                                break;
                            }
                            case 'domcontentloaded': {
                                events.add('DOMContentLoaded');
                                break;
                            }
                        }
                    }
                    if (events.size === 0) {
                        return of(undefined);
                    }
                    return combineLatest([...events].map(event => {
                        return fromEmitterEvent(this.browsingContext, event);
                    })).pipe(map(() => { }), first(), raceWith(timeout(ms), this.#detached$().pipe(map(() => {
                        throw new Error('Frame detached.');
                    }))));
                }, "#waitForLoad$") }, _private_waitForLoad$_decorators, { kind: "method", name: "#waitForLoad$", static: false, private: true, access: { has: obj => #waitForLoad$ in obj, get: obj => obj.#waitForLoad$ }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, _private_waitForNetworkIdle$_descriptor = { value: __setFunctionName(function (options = {}) {
                    let { waitUntil = 'load' } = options;
                    if (!Array.isArray(waitUntil)) {
                        waitUntil = [waitUntil];
                    }
                    let concurrency = Infinity;
                    for (const event of waitUntil) {
                        switch (event) {
                            case 'networkidle0': {
                                concurrency = Math.min(0, concurrency);
                                break;
                            }
                            case 'networkidle2': {
                                concurrency = Math.min(2, concurrency);
                                break;
                            }
                        }
                    }
                    if (concurrency === Infinity) {
                        return of(undefined);
                    }
                    return this.page().waitForNetworkIdle$({
                        idleTime: 500,
                        timeout: options.timeout ?? this.timeoutSettings.timeout(),
                        concurrency,
                    });
                }, "#waitForNetworkIdle$") }, _private_waitForNetworkIdle$_decorators, { kind: "method", name: "#waitForNetworkIdle$", static: false, private: true, access: { has: obj => #waitForNetworkIdle$ in obj, get: obj => obj.#waitForNetworkIdle$ }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: obj => "setFiles" in obj, get: obj => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _frameElement_decorators, { kind: "method", name: "frameElement", static: false, private: false, access: { has: obj => "frameElement" in obj, get: obj => obj.frameElement }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: obj => "locateNodes" in obj, get: obj => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(parent, browsingContext) {
            const frame = new BidiFrame(parent, browsingContext);
            frame.#initialize();
            return frame;
        }
        #parent = __runInitializers(this, _instanceExtraInitializers);
        browsingContext;
        #frames = new WeakMap();
        realms;
        _id;
        client;
        accessibility;
        constructor(parent, browsingContext) {
            super();
            this.#parent = parent;
            this.browsingContext = browsingContext;
            this._id = browsingContext.id;
            this.client = new BidiCdpSession(this);
            this.realms = {
                default: BidiFrameRealm.from(this.browsingContext.defaultRealm, this),
                internal: BidiFrameRealm.from(this.browsingContext.createWindowRealm(`__puppeteer_internal_${Math.ceil(Math.random() * 10000)}`), this),
            };
            this.accessibility = new Accessibility(this.realms.default, this._id);
        }
        #initialize() {
            for (const browsingContext of this.browsingContext.children) {
                this.#createFrameTarget(browsingContext);
            }
            this.browsingContext.on('browsingcontext', browsingContext => {
                this.#createFrameTarget(browsingContext);
            });
            this.browsingContext.on('closed', () => {
                for (const session of BidiCdpSession.sessions.values()) {
                    if (session.frame === this) {
                        session.onClose();
                    }
                }
                this.page().trustedEmitter.emit("framedetached" /* PageEvent.FrameDetached */, this);
            });
            this.browsingContext.on('request', request => {
                const httpRequest = BidiHTTPRequest.from(request, this, this.page().isNetworkInterceptionEnabled);
                request.once('success', () => {
                    this.page().trustedEmitter.emit("requestfinished" /* PageEvent.RequestFinished */, httpRequest);
                });
                request.once('error', () => {
                    this.page().trustedEmitter.emit("requestfailed" /* PageEvent.RequestFailed */, httpRequest);
                });
                void httpRequest.finalizeInterceptions();
            });
            this.browsingContext.on('navigation', navigation => {
                navigation.once('fragment', () => {
                    this.page().trustedEmitter.emit("framenavigated" /* PageEvent.FrameNavigated */, this);
                });
            });
            this.browsingContext.on('load', () => {
                this.page().trustedEmitter.emit("load" /* PageEvent.Load */, undefined);
            });
            this.browsingContext.on('DOMContentLoaded', () => {
                this._hasStartedLoading = true;
                this.page().trustedEmitter.emit("domcontentloaded" /* PageEvent.DOMContentLoaded */, undefined);
                this.page().trustedEmitter.emit("framenavigated" /* PageEvent.FrameNavigated */, this);
            });
            this.browsingContext.on('userprompt', userPrompt => {
                this.page().trustedEmitter.emit("dialog" /* PageEvent.Dialog */, BidiDialog.from(userPrompt));
            });
            this.browsingContext.on('log', entry => {
                if (this._id !== entry.source.context) {
                    return;
                }
                if (isConsoleLogEntry(entry)) {
                    if (!this.page().listenerCount("console" /* PageEvent.Console */)) {
                        return;
                    }
                    const args = entry.args.map(arg => {
                        return this.mainRealm().createHandle(arg);
                    });
                    this.page().trustedEmitter.emit("console" /* PageEvent.Console */, getConsoleMessage(entry, args, this));
                }
                else if (isJavaScriptLogEntry(entry)) {
                    const error = new Error(entry.text ?? '');
                    const messageHeight = error.message.split('\n').length;
                    const messageLines = error.stack.split('\n').splice(0, messageHeight);
                    const stackLines = [];
                    if (entry.stackTrace) {
                        for (const frame of entry.stackTrace.callFrames) {
                            // Note we need to add `1` because the values are 0-indexed.
                            stackLines.push(`    at ${frame.functionName || '<anonymous>'} (${frame.url}:${frame.lineNumber + 1}:${frame.columnNumber + 1})`);
                            if (stackLines.length >= Error.stackTraceLimit) {
                                break;
                            }
                        }
                    }
                    error.stack = [...messageLines, ...stackLines].join('\n');
                    this.page().trustedEmitter.emit("pageerror" /* PageEvent.PageError */, error);
                }
                else {
                    debugError(`Unhandled LogEntry with type "${entry.type}", text "${entry.text}" and level "${entry.level}"`);
                }
            });
            this.browsingContext.on('worker', realm => {
                const worker = BidiWebWorker.from(this, realm);
                realm.on('destroyed', () => {
                    this.page().trustedEmitter.emit("workerdestroyed" /* PageEvent.WorkerDestroyed */, worker);
                });
                this.page().trustedEmitter.emit("workercreated" /* PageEvent.WorkerCreated */, worker);
            });
        }
        #createFrameTarget(browsingContext) {
            const frame = BidiFrame.from(this, browsingContext);
            this.#frames.set(browsingContext, frame);
            this.page().trustedEmitter.emit("frameattached" /* PageEvent.FrameAttached */, frame);
            browsingContext.on('closed', () => {
                this.#frames.delete(browsingContext);
            });
            return frame;
        }
        get timeoutSettings() {
            return this.page()._timeoutSettings;
        }
        mainRealm() {
            return this.realms.default;
        }
        isolatedRealm() {
            return this.realms.internal;
        }
        realm(id) {
            for (const realm of Object.values(this.realms)) {
                if (realm.realm.id === id) {
                    return realm;
                }
            }
            return;
        }
        page() {
            let parent = this.#parent;
            while (parent instanceof BidiFrame) {
                parent = parent.#parent;
            }
            return parent;
        }
        url() {
            return this.browsingContext.url;
        }
        parentFrame() {
            if (this.#parent instanceof BidiFrame) {
                return this.#parent;
            }
            return null;
        }
        childFrames() {
            return [...this.browsingContext.children].map(child => {
                return this.#frames.get(child);
            });
        }
        #detached$() {
            return defer(() => {
                if (this.detached) {
                    return of(this);
                }
                return fromEmitterEvent(this.page().trustedEmitter, "framedetached" /* PageEvent.FrameDetached */).pipe(filter(detachedFrame => {
                    return detachedFrame === this;
                }));
            });
        }
        async goto(url, options = {}) {
            const [response] = await Promise.all([
                this.waitForNavigation(options),
                // Some implementations currently only report errors when the
                // readiness=interactive.
                //
                // Related: https://bugzilla.mozilla.org/show_bug.cgi?id=1846601
                this.browsingContext
                    .navigate(url, "interactive" /* Bidi.BrowsingContext.ReadinessState.Interactive */)
                    .catch(error => {
                    if (isErrorLike(error) &&
                        error.message.includes('net::ERR_HTTP_RESPONSE_CODE_FAILURE')) {
                        return;
                    }
                    if (error.message.includes('navigation canceled')) {
                        return;
                    }
                    if (error.message.includes('Navigation was aborted by another navigation')) {
                        return;
                    }
                    throw error;
                }),
            ]).catch(rewriteNavigationError(url, options.timeout ?? this.timeoutSettings.navigationTimeout()));
            return response;
        }
        async setContent(html, options = {}) {
            await Promise.all([
                this.setFrameContent(html),
                firstValueFrom(combineLatest([
                    this.#waitForLoad$(options),
                    this.#waitForNetworkIdle$(options),
                ])),
            ]);
        }
        async waitForNavigation(options = {}) {
            const { timeout: ms = this.timeoutSettings.navigationTimeout(), signal } = options;
            const frames = this.childFrames().map(frame => {
                return frame.#detached$();
            });
            return await firstValueFrom(combineLatest([
                race(fromEmitterEvent(this.browsingContext, 'navigation'), fromEmitterEvent(this.browsingContext, 'historyUpdated').pipe(map(() => {
                    return null;
                })))
                    .pipe(first())
                    .pipe(switchMap(navigation => {
                    if (navigation === null) {
                        return of(null);
                    }
                    return this.#waitForLoad$(options).pipe(delayWhen(() => {
                        if (frames.length === 0) {
                            return of(undefined);
                        }
                        return combineLatest(frames);
                    }), raceWith(fromEmitterEvent(navigation, 'fragment'), fromEmitterEvent(navigation, 'failed'), fromEmitterEvent(navigation, 'aborted')), switchMap(() => {
                        if (navigation.request) {
                            function requestFinished$(request) {
                                if (navigation === null) {
                                    return of(null);
                                }
                                // Reduces flakiness if the response events arrive after
                                // the load event.
                                // Usually, the response or error is already there at this point.
                                if (request.response || request.error) {
                                    return of(navigation);
                                }
                                if (request.redirect) {
                                    return requestFinished$(request.redirect);
                                }
                                return fromEmitterEvent(request, 'success')
                                    .pipe(raceWith(fromEmitterEvent(request, 'error')), raceWith(fromEmitterEvent(request, 'redirect')))
                                    .pipe(switchMap(() => {
                                    return requestFinished$(request);
                                }));
                            }
                            return requestFinished$(navigation.request);
                        }
                        return of(navigation);
                    }));
                })),
                this.#waitForNetworkIdle$(options),
            ]).pipe(map(([navigation]) => {
                if (!navigation) {
                    return null;
                }
                const request = navigation.request;
                if (!request) {
                    return null;
                }
                const lastRequest = request.lastRedirect ?? request;
                const httpRequest = requests.get(lastRequest);
                return httpRequest.response();
            }), raceWith(timeout(ms), fromAbortSignal(signal), this.#detached$().pipe(map(() => {
                throw new TargetCloseError('Frame detached.');
            })))));
        }
        waitForDevicePrompt(options = {}) {
            const { timeout = this.timeoutSettings.timeout(), signal } = options;
            return this.browsingContext.waitForDevicePrompt(timeout, signal);
        }
        get detached() {
            return this.browsingContext.closed;
        }
        #exposedFunctions = new Map();
        async exposeFunction(name, apply) {
            if (this.#exposedFunctions.has(name)) {
                throw new Error(`Failed to add page binding with name ${name}: globalThis['${name}'] already exists!`);
            }
            const exposable = await ExposableFunction.from(this, name, apply);
            this.#exposedFunctions.set(name, exposable);
        }
        async removeExposedFunction(name) {
            const exposedFunction = this.#exposedFunctions.get(name);
            if (!exposedFunction) {
                throw new Error(`Failed to remove page binding with name ${name}: window['${name}'] does not exists!`);
            }
            this.#exposedFunctions.delete(name);
            await exposedFunction[Symbol.asyncDispose]();
        }
        async createCDPSession() {
            if (!this.page().browser().cdpSupported) {
                throw new UnsupportedOperation();
            }
            const cdpConnection = this.page().browser().cdpConnection;
            return await cdpConnection._createSession({ targetId: this._id });
        }
        get #waitForLoad$() { return _private_waitForLoad$_descriptor.value; }
        get #waitForNetworkIdle$() { return _private_waitForNetworkIdle$_descriptor.value; }
        async setFiles(element, files) {
            await this.browsingContext.setFiles(
            // SAFETY: ElementHandles are always remote references.
            element.remoteValue(), files);
        }
        async frameElement() {
            const parentFrame = this.parentFrame();
            if (!parentFrame) {
                return null;
            }
            const [node] = await parentFrame.browsingContext.locateNodes({
                type: 'context',
                value: {
                    context: this._id,
                },
            });
            if (!node) {
                return null;
            }
            return BidiElementHandle.from(node, parentFrame.mainRealm());
        }
        async locateNodes(element, locator) {
            return await this.browsingContext.locateNodes(locator, 
            // SAFETY: ElementHandles are always remote references.
            [element.remoteValue()]);
        }
        extensionRealms() {
            throw new UnsupportedOperation();
        }
    };
})();
export { BidiFrame };
//# sourceMappingURL=Frame.js.map