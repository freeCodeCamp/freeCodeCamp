/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { Browser, } from '../api/Browser.js';
import { ProtocolError, UnsupportedOperation } from '../common/Errors.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { debugError } from '../common/util.js';
import { bubble } from '../util/decorators.js';
import { BidiBrowserContext } from './BrowserContext.js';
import { Session } from './core/Session.js';
import { BidiBrowserTarget } from './Target.js';
/**
 * @internal
 */
let BidiBrowser = (() => {
    let _classSuper = Browser;
    let _private_trustedEmitter_decorators;
    let _private_trustedEmitter_initializers = [];
    let _private_trustedEmitter_extraInitializers = [];
    let _private_trustedEmitter_descriptor;
    return class BidiBrowser extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _private_trustedEmitter_decorators = [bubble()];
            __esDecorate(this, _private_trustedEmitter_descriptor = { get: __setFunctionName(function () { return this.#trustedEmitter_accessor_storage; }, "#trustedEmitter", "get"), set: __setFunctionName(function (value) { this.#trustedEmitter_accessor_storage = value; }, "#trustedEmitter", "set") }, _private_trustedEmitter_decorators, { kind: "accessor", name: "#trustedEmitter", static: false, private: true, access: { has: obj => #trustedEmitter in obj, get: obj => obj.#trustedEmitter, set: (obj, value) => { obj.#trustedEmitter = value; } }, metadata: _metadata }, _private_trustedEmitter_initializers, _private_trustedEmitter_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        protocol = 'webDriverBiDi';
        static subscribeModules = [
            'browsingContext',
            'network',
            'log',
            'script',
            'input',
        ];
        static subscribeCdpEvents = [
            // Coverage
            'goog:cdp.Debugger.scriptParsed',
            'goog:cdp.CSS.styleSheetAdded',
            'goog:cdp.Runtime.executionContextsCleared',
            // Tracing
            'goog:cdp.Tracing.tracingComplete',
            // TODO: subscribe to all CDP events in the future.
            'goog:cdp.Network.requestWillBeSent',
            'goog:cdp.Debugger.scriptParsed',
            'goog:cdp.Page.screencastFrame',
        ];
        static async create(opts) {
            const session = await Session.from(opts.connection, {
                firstMatch: opts.capabilities?.firstMatch,
                alwaysMatch: {
                    ...opts.capabilities?.alwaysMatch,
                    // Capabilities that come from Puppeteer's API take precedence.
                    acceptInsecureCerts: opts.acceptInsecureCerts,
                    unhandledPromptBehavior: {
                        default: "ignore" /* Bidi.Session.UserPromptHandlerType.Ignore */,
                    },
                    webSocketUrl: true,
                    // Puppeteer with WebDriver BiDi does not support prerendering
                    // yet because WebDriver BiDi behavior is not specified. See
                    // https://github.com/w3c/webdriver-bidi/issues/321.
                    'goog:prerenderingDisabled': true,
                    // TODO: remove after Puppeteer rolled Chrome to 142 after Oct 28, 2025.
                    'goog:disableNetworkDurableMessages': true,
                },
            });
            // Subscribe to all WebDriver BiDi events. Also subscribe to CDP events if CDP
            // connection is available.
            await session.subscribe((opts.cdpConnection
                ? [...BidiBrowser.subscribeModules, ...BidiBrowser.subscribeCdpEvents]
                : BidiBrowser.subscribeModules).filter(module => {
                if (!opts.networkEnabled) {
                    return (module !== 'network' &&
                        module !== 'goog:cdp.Network.requestWillBeSent');
                }
                return true;
            }));
            await Promise.all(["request" /* Bidi.Network.DataType.Request */, "response" /* Bidi.Network.DataType.Response */].map(
            // Data collectors might be not implemented for specific data type, so create them
            // separately and ignore protocol errors.
            async (dataType) => {
                try {
                    await session.send('network.addDataCollector', {
                        dataTypes: [dataType],
                        // Buffer size of 20 MB is equivalent to the CDP:
                        maxEncodedDataSize: 20_000_000,
                    });
                }
                catch (err) {
                    if (err instanceof ProtocolError) {
                        debugError(err);
                    }
                    else {
                        throw err;
                    }
                }
            }));
            const browser = new BidiBrowser(session.browser, opts);
            browser.#initialize();
            return browser;
        }
        #trustedEmitter_accessor_storage = __runInitializers(this, _private_trustedEmitter_initializers, new EventEmitter());
        get #trustedEmitter() { return _private_trustedEmitter_descriptor.get.call(this); }
        set #trustedEmitter(value) { return _private_trustedEmitter_descriptor.set.call(this, value); }
        #process = __runInitializers(this, _private_trustedEmitter_extraInitializers);
        #closeCallback;
        #browserCore;
        #defaultViewport;
        #browserContexts = new WeakMap();
        #target = new BidiBrowserTarget(this);
        #cdpConnection;
        #networkEnabled;
        #issuesEnabled;
        constructor(browserCore, opts) {
            super();
            this.#process = opts.process;
            this.#closeCallback = opts.closeCallback;
            this.#browserCore = browserCore;
            this.#defaultViewport = opts.defaultViewport;
            this.#cdpConnection = opts.cdpConnection;
            this.#networkEnabled = opts.networkEnabled;
            this.#issuesEnabled = opts.issuesEnabled;
        }
        #initialize() {
            // Initializing existing contexts.
            for (const userContext of this.#browserCore.userContexts) {
                this.#createBrowserContext(userContext);
            }
            this.#browserCore.once('disconnected', () => {
                this.#trustedEmitter.emit("disconnected" /* BrowserEvent.Disconnected */, undefined);
                this.#trustedEmitter.removeAllListeners();
            });
            this.#process?.once('close', () => {
                this.#browserCore.dispose('Browser process exited.', true);
                this.connection.dispose();
            });
        }
        get #browserName() {
            return this.#browserCore.session.capabilities.browserName;
        }
        get #browserVersion() {
            return this.#browserCore.session.capabilities.browserVersion;
        }
        get cdpSupported() {
            return this.#cdpConnection !== undefined;
        }
        get cdpConnection() {
            return this.#cdpConnection;
        }
        async userAgent() {
            return this.#browserCore.session.capabilities.userAgent;
        }
        #createBrowserContext(userContext) {
            const browserContext = BidiBrowserContext.from(this, userContext, {
                defaultViewport: this.#defaultViewport,
            });
            this.#browserContexts.set(userContext, browserContext);
            browserContext.trustedEmitter.on("targetcreated" /* BrowserContextEvent.TargetCreated */, target => {
                this.#trustedEmitter.emit("targetcreated" /* BrowserEvent.TargetCreated */, target);
            });
            browserContext.trustedEmitter.on("targetchanged" /* BrowserContextEvent.TargetChanged */, target => {
                this.#trustedEmitter.emit("targetchanged" /* BrowserEvent.TargetChanged */, target);
            });
            browserContext.trustedEmitter.on("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */, target => {
                this.#trustedEmitter.emit("targetdestroyed" /* BrowserEvent.TargetDestroyed */, target);
            });
            return browserContext;
        }
        get connection() {
            // SAFETY: We only have one implementation.
            return this.#browserCore.session.connection;
        }
        wsEndpoint() {
            return this.connection.url;
        }
        async close() {
            if (this.connection.closed) {
                return;
            }
            try {
                await this.#browserCore.close();
                await this.#closeCallback?.call(null);
            }
            catch (error) {
                // Fail silently.
                debugError(error);
            }
            finally {
                this.connection.dispose();
            }
        }
        get connected() {
            return !this.#browserCore.disconnected;
        }
        process() {
            return this.#process ?? null;
        }
        async createBrowserContext(options = {}) {
            const userContext = await this.#browserCore.createUserContext(options);
            return this.#createBrowserContext(userContext);
        }
        async version() {
            return `${this.#browserName}/${this.#browserVersion}`;
        }
        browserContexts() {
            return [...this.#browserCore.userContexts].map(context => {
                return this.#browserContexts.get(context);
            });
        }
        defaultBrowserContext() {
            return this.#browserContexts.get(this.#browserCore.defaultUserContext);
        }
        newPage(options) {
            return this.defaultBrowserContext().newPage(options);
        }
        installExtension(path) {
            return this.#browserCore.installExtension(path);
        }
        async uninstallExtension(id) {
            await this.#browserCore.uninstallExtension(id);
        }
        screens() {
            throw new UnsupportedOperation();
        }
        addScreen(_params) {
            throw new UnsupportedOperation();
        }
        removeScreen(_screenId) {
            throw new UnsupportedOperation();
        }
        async getWindowBounds(windowId) {
            const clientWindowInfo = await this.#browserCore.getClientWindowInfo(windowId);
            return {
                left: clientWindowInfo.x,
                top: clientWindowInfo.y,
                width: clientWindowInfo.width,
                height: clientWindowInfo.height,
                windowState: clientWindowInfo.state,
            };
        }
        async setWindowBounds(windowId, windowBounds) {
            let params;
            const windowState = windowBounds.windowState ?? 'normal';
            if (windowState === 'normal') {
                params = {
                    clientWindow: windowId,
                    state: 'normal',
                    x: windowBounds.left,
                    y: windowBounds.top,
                    width: windowBounds.width,
                    height: windowBounds.height,
                };
            }
            else {
                params = {
                    clientWindow: windowId,
                    state: windowState,
                };
            }
            await this.#browserCore.setClientWindowState(params);
        }
        targets() {
            return [
                this.#target,
                ...this.browserContexts().flatMap(context => {
                    return context.targets();
                }),
            ];
        }
        target() {
            return this.#target;
        }
        async disconnect() {
            try {
                await this.#browserCore.session.end();
            }
            catch (error) {
                // Fail silently.
                debugError(error);
            }
            finally {
                this.connection.dispose();
            }
        }
        get debugInfo() {
            return {
                pendingProtocolErrors: this.connection.getPendingProtocolErrors(),
            };
        }
        isNetworkEnabled() {
            return this.#networkEnabled;
        }
        extensions() {
            throw new UnsupportedOperation();
        }
        isIssuesEnabled() {
            return this.#issuesEnabled;
        }
    };
})();
export { BidiBrowser };
//# sourceMappingURL=Browser.js.map