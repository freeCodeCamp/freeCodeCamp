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
import { firstValueFrom, from, raceWith } from '../../third_party/rxjs/rxjs.js';
import { Page, } from '../api/Page.js';
import { Coverage } from '../cdp/Coverage.js';
import { EmulationManager } from '../cdp/EmulationManager.js';
import { Tracing } from '../cdp/Tracing.js';
import { ProtocolError, UnsupportedOperation } from '../common/Errors.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { FileChooser } from '../common/FileChooser.js';
import { evaluationString, parsePDFOptions, timeout } from '../common/util.js';
import { assert } from '../util/assert.js';
import { bubble } from '../util/decorators.js';
import { Deferred } from '../util/Deferred.js';
import { stringToTypedArray } from '../util/encoding.js';
import { BidiElementHandle } from './ElementHandle.js';
import { BidiFrame } from './Frame.js';
import { BidiKeyboard, BidiMouse, BidiTouchscreen } from './Input.js';
import { rewriteNavigationError } from './util.js';
/**
 * Implements Page using WebDriver BiDi.
 *
 * @internal
 */
let BidiPage = (() => {
    let _classSuper = Page;
    let _trustedEmitter_decorators;
    let _trustedEmitter_initializers = [];
    let _trustedEmitter_extraInitializers = [];
    return class BidiPage extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _trustedEmitter_decorators = [bubble()];
            __esDecorate(this, null, _trustedEmitter_decorators, { kind: "accessor", name: "trustedEmitter", static: false, private: false, access: { has: obj => "trustedEmitter" in obj, get: obj => obj.trustedEmitter, set: (obj, value) => { obj.trustedEmitter = value; } }, metadata: _metadata }, _trustedEmitter_initializers, _trustedEmitter_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(browserContext, browsingContext) {
            const page = new BidiPage(browserContext, browsingContext);
            page.#initialize();
            return page;
        }
        #trustedEmitter_accessor_storage = __runInitializers(this, _trustedEmitter_initializers, new EventEmitter());
        get trustedEmitter() { return this.#trustedEmitter_accessor_storage; }
        set trustedEmitter(value) { this.#trustedEmitter_accessor_storage = value; }
        #browserContext = __runInitializers(this, _trustedEmitter_extraInitializers);
        #frame;
        #viewport = null;
        #workers = new Set();
        keyboard;
        mouse;
        touchscreen;
        tracing;
        get webmcp() {
            throw new UnsupportedOperation();
        }
        coverage;
        #cdpEmulationManager;
        #emulatedNetworkConditions;
        #fileChooserDeferreds = new Set();
        _client() {
            return this.#frame.client;
        }
        constructor(browserContext, browsingContext) {
            super();
            this.#browserContext = browserContext;
            this.#frame = BidiFrame.from(this, browsingContext);
            this.#cdpEmulationManager = new EmulationManager(this.#frame.client);
            this.tracing = new Tracing(this.#frame.client);
            this.coverage = new Coverage(this.#frame.client);
            this.keyboard = new BidiKeyboard(this);
            this.mouse = new BidiMouse(this);
            this.touchscreen = new BidiTouchscreen(this);
        }
        #initialize() {
            this.#frame.browsingContext.on('closed', () => {
                this.trustedEmitter.emit("close" /* PageEvent.Close */, undefined);
                this.trustedEmitter.removeAllListeners();
            });
            this.trustedEmitter.on("workercreated" /* PageEvent.WorkerCreated */, worker => {
                this.#workers.add(worker);
            });
            this.trustedEmitter.on("workerdestroyed" /* PageEvent.WorkerDestroyed */, worker => {
                this.#workers.delete(worker);
            });
        }
        /**
         * @internal
         */
        async setUserAgent(userAgentOrOptions, userAgentMetadata) {
            let userAgent;
            let clientHints;
            let platform;
            if (typeof userAgentOrOptions === 'string') {
                userAgent = userAgentOrOptions;
                clientHints = userAgentMetadata;
            }
            else {
                userAgent = userAgentOrOptions.userAgent ?? null;
                clientHints = userAgentOrOptions.userAgentMetadata;
                // Empty string platform should be interpreted as "no override".
                platform =
                    userAgentOrOptions.platform === ''
                        ? undefined
                        : userAgentOrOptions.platform;
            }
            if (userAgent === '') {
                // In WebDriver BiDi null is used to restore the original user agent.
                userAgent = null;
            }
            await this.#frame.browsingContext.setUserAgent(userAgent);
            if (platform && platform !== '') {
                // Work-around until https://github.com/w3c/webdriver-bidi/issues/1065 is resolved.
                // Set platform via client hints override.
                clientHints = clientHints ?? {};
                clientHints.platform = platform;
            }
            await this.#frame.browsingContext.setClientHintsOverride(clientHints ?? null);
        }
        async setBypassCSP(enabled) {
            // TODO: handle CDP-specific cases such as MPArch.
            await this._client().send('Page.setBypassCSP', { enabled });
        }
        async queryObjects(prototypeHandle) {
            assert(!prototypeHandle.disposed, 'Prototype JSHandle is disposed!');
            assert(prototypeHandle.id, 'Prototype JSHandle must not be referencing primitive value');
            const response = await this.#frame.client.send('Runtime.queryObjects', {
                prototypeObjectId: prototypeHandle.id,
            });
            return this.#frame.mainRealm().createHandle({
                type: 'array',
                handle: response.objects.objectId,
            });
        }
        browser() {
            return this.browserContext().browser();
        }
        browserContext() {
            return this.#browserContext;
        }
        mainFrame() {
            return this.#frame;
        }
        async triggerExtensionAction(_extension) {
            throw new UnsupportedOperation();
        }
        async emulateFocusedPage(enabled) {
            return await this.#cdpEmulationManager.emulateFocus(enabled);
        }
        resize(_params) {
            throw new UnsupportedOperation();
        }
        async windowId() {
            return this.#frame.browsingContext.windowId;
        }
        openDevTools() {
            throw new UnsupportedOperation();
        }
        hasDevTools() {
            throw new UnsupportedOperation();
        }
        async focusedFrame() {
            const env_1 = { stack: [], error: void 0, hasError: false };
            try {
                const handle = __addDisposableResource(env_1, (await this.mainFrame()
                    .isolatedRealm()
                    .evaluateHandle(() => {
                    let win = window;
                    while (win.document.activeElement instanceof win.HTMLIFrameElement ||
                        win.document.activeElement instanceof win.HTMLFrameElement) {
                        if (win.document.activeElement.contentWindow === null) {
                            break;
                        }
                        win = win.document.activeElement.contentWindow;
                    }
                    return win;
                })), false);
                const value = handle.remoteValue();
                assert(value.type === 'window');
                const frame = this.frames().find(frame => {
                    return frame._id === value.value.context;
                });
                assert(frame);
                return frame;
            }
            catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            }
            finally {
                __disposeResources(env_1);
            }
        }
        frames() {
            const frames = [this.#frame];
            for (const frame of frames) {
                frames.push(...frame.childFrames());
            }
            return frames;
        }
        isClosed() {
            return this.#frame.detached;
        }
        async close(options) {
            const env_2 = { stack: [], error: void 0, hasError: false };
            try {
                const _guard = __addDisposableResource(env_2, await this.#browserContext.waitForScreenshotOperations(), false);
                try {
                    await this.#frame.browsingContext.close(options?.runBeforeUnload);
                }
                catch {
                    return;
                }
            }
            catch (e_2) {
                env_2.error = e_2;
                env_2.hasError = true;
            }
            finally {
                __disposeResources(env_2);
            }
        }
        async reload(options = {}) {
            const [response] = await Promise.all([
                this.#frame.waitForNavigation(options),
                this.#frame.browsingContext.reload({
                    ignoreCache: options.ignoreCache ? true : undefined,
                }),
            ]).catch(rewriteNavigationError(this.url(), options.timeout ?? this._timeoutSettings.navigationTimeout()));
            return response;
        }
        setDefaultNavigationTimeout(timeout) {
            this._timeoutSettings.setDefaultNavigationTimeout(timeout);
        }
        setDefaultTimeout(timeout) {
            this._timeoutSettings.setDefaultTimeout(timeout);
        }
        getDefaultTimeout() {
            return this._timeoutSettings.timeout();
        }
        getDefaultNavigationTimeout() {
            return this._timeoutSettings.navigationTimeout();
        }
        isJavaScriptEnabled() {
            return this.#frame.browsingContext.isJavaScriptEnabled();
        }
        async setGeolocation(options) {
            const { longitude, latitude, accuracy = 0 } = options;
            if (longitude < -180 || longitude > 180) {
                throw new Error(`Invalid longitude "${longitude}": precondition -180 <= LONGITUDE <= 180 failed.`);
            }
            if (latitude < -90 || latitude > 90) {
                throw new Error(`Invalid latitude "${latitude}": precondition -90 <= LATITUDE <= 90 failed.`);
            }
            if (accuracy < 0) {
                throw new Error(`Invalid accuracy "${accuracy}": precondition 0 <= ACCURACY failed.`);
            }
            return await this.#frame.browsingContext.setGeolocationOverride({
                coordinates: {
                    latitude: options.latitude,
                    longitude: options.longitude,
                    accuracy: options.accuracy,
                },
            });
        }
        async setJavaScriptEnabled(enabled) {
            return await this.#frame.browsingContext.setJavaScriptEnabled(enabled);
        }
        async emulateMediaType(type) {
            return await this.#cdpEmulationManager.emulateMediaType(type);
        }
        async emulateCPUThrottling(factor) {
            return await this.#cdpEmulationManager.emulateCPUThrottling(factor);
        }
        async emulateMediaFeatures(features) {
            return await this.#cdpEmulationManager.emulateMediaFeatures(features);
        }
        async emulateTimezone(timezoneId) {
            return await this.#frame.browsingContext.setTimezoneOverride(timezoneId);
        }
        async emulateIdleState(overrides) {
            return await this.#cdpEmulationManager.emulateIdleState(overrides);
        }
        async emulateVisionDeficiency(type) {
            return await this.#cdpEmulationManager.emulateVisionDeficiency(type);
        }
        async setViewport(viewport) {
            let needsReload = false;
            if (!this.browser().cdpSupported) {
                const viewportSize = viewport?.width && viewport?.height
                    ? {
                        width: viewport.width,
                        height: viewport.height,
                    }
                    : null;
                const devicePixelRatio = viewport?.deviceScaleFactor
                    ? viewport.deviceScaleFactor
                    : null;
                // If `viewport` is not set, remove screen orientation override.
                const screenOrientation = viewport
                    ? viewport.isLandscape
                        ? {
                            natural: "landscape" /* Bidi.Emulation.ScreenOrientationNatural.Landscape */,
                            type: 'landscape-primary',
                        }
                        : {
                            natural: "portrait" /* Bidi.Emulation.ScreenOrientationNatural.Portrait */,
                            type: 'portrait-primary',
                        }
                    : null;
                const commands = [
                    this.#frame.browsingContext.setViewport({
                        viewport: viewportSize,
                        devicePixelRatio,
                    }),
                    this.#frame.browsingContext.setScreenOrientationOverride(screenOrientation),
                ];
                if ((this.#viewport?.hasTouch ?? false) !== (viewport?.hasTouch ?? false)) {
                    // The requested touch override state is different from the current one, meaning
                    // the reload is needed.
                    needsReload = true;
                    // 1 touch point if touch is enabled, null otherwise.
                    const maxTouchPoints = viewport?.hasTouch ? 1 : null;
                    commands.push(this.#frame.browsingContext
                        .setTouchOverride(maxTouchPoints)
                        .catch(error => {
                        if (error instanceof ProtocolError &&
                            (error.message.includes('unknown command') ||
                                error.message.includes('unsupported operation'))) {
                            // Tolerate not implemented or not supported commands. At least until
                            // the `emulation.setTouchOverride` is supported by all the supported
                            // browsers.
                            return;
                        }
                        throw error;
                    }));
                }
                await Promise.all(commands);
            }
            else {
                needsReload = await this.#cdpEmulationManager.emulateViewport(viewport);
            }
            this.#viewport = viewport;
            if (needsReload) {
                await this.reload();
            }
        }
        viewport() {
            return this.#viewport;
        }
        async pdf(options = {}) {
            const { timeout: ms = this._timeoutSettings.timeout(), path = undefined } = options;
            const { printBackground: background, margin, landscape, width, height, pageRanges: ranges, scale, preferCSSPageSize, } = parsePDFOptions(options, 'cm');
            const pageRanges = ranges ? ranges.split(', ') : [];
            await firstValueFrom(from(this.mainFrame()
                .isolatedRealm()
                .evaluate(() => {
                return document.fonts.ready;
            })).pipe(raceWith(timeout(ms))));
            const data = await firstValueFrom(from(this.#frame.browsingContext.print({
                background,
                margin,
                orientation: landscape ? 'landscape' : 'portrait',
                page: {
                    width,
                    height,
                },
                pageRanges,
                scale,
                shrinkToFit: !preferCSSPageSize,
            })).pipe(raceWith(timeout(ms))));
            const typedArray = stringToTypedArray(data, true);
            await this._maybeWriteTypedArrayToFile(path, typedArray);
            return typedArray;
        }
        async createPDFStream(options) {
            const typedArray = await this.pdf(options);
            return new ReadableStream({
                start(controller) {
                    controller.enqueue(typedArray);
                    controller.close();
                },
            });
        }
        async _screenshot(options) {
            const { clip, type, captureBeyondViewport, quality } = options;
            if (options.omitBackground !== undefined && options.omitBackground) {
                throw new UnsupportedOperation(`BiDi does not support 'omitBackground'.`);
            }
            if (options.optimizeForSpeed !== undefined && options.optimizeForSpeed) {
                throw new UnsupportedOperation(`BiDi does not support 'optimizeForSpeed'.`);
            }
            if (options.fromSurface !== undefined && !options.fromSurface) {
                throw new UnsupportedOperation(`BiDi does not support 'fromSurface'.`);
            }
            if (clip !== undefined && clip.scale !== undefined && clip.scale !== 1) {
                throw new UnsupportedOperation(`BiDi does not support 'scale' in 'clip'.`);
            }
            let box;
            if (clip) {
                if (captureBeyondViewport) {
                    box = clip;
                }
                else {
                    // The clip is always with respect to the document coordinates, so we
                    // need to convert this to viewport coordinates when we aren't capturing
                    // beyond the viewport.
                    const [pageLeft, pageTop] = await this.evaluate(() => {
                        if (!window.visualViewport) {
                            throw new Error('window.visualViewport is not supported.');
                        }
                        return [
                            window.visualViewport.pageLeft,
                            window.visualViewport.pageTop,
                        ];
                    });
                    box = {
                        ...clip,
                        x: clip.x - pageLeft,
                        y: clip.y - pageTop,
                    };
                }
            }
            const data = await this.#frame.browsingContext.captureScreenshot({
                origin: captureBeyondViewport ? 'document' : 'viewport',
                format: {
                    type: `image/${type}`,
                    ...(quality !== undefined ? { quality: quality / 100 } : {}),
                },
                ...(box ? { clip: { type: 'box', ...box } } : {}),
            });
            return data;
        }
        async createCDPSession() {
            return await this.#frame.createCDPSession();
        }
        async bringToFront() {
            await this.#frame.browsingContext.activate();
        }
        async evaluateOnNewDocument(pageFunction, ...args) {
            const expression = evaluationExpression(pageFunction, ...args);
            const script = await this.#frame.browsingContext.addPreloadScript(expression);
            return { identifier: script };
        }
        async removeScriptToEvaluateOnNewDocument(id) {
            await this.#frame.browsingContext.removePreloadScript(id);
        }
        async exposeFunction(name, pptrFunction) {
            return await this.mainFrame().exposeFunction(name, 'default' in pptrFunction ? pptrFunction.default : pptrFunction);
        }
        isDragInterceptionEnabled() {
            return false;
        }
        async setCacheEnabled(enabled) {
            if (!this.#browserContext.browser().cdpSupported) {
                await this.#frame.browsingContext.setCacheBehavior(enabled ? 'default' : 'bypass');
                return;
            }
            // TODO: handle CDP-specific cases such as MPArch.
            await this._client().send('Network.setCacheDisabled', {
                cacheDisabled: !enabled,
            });
        }
        async cookies(...urls) {
            const normalizedUrls = (urls.length ? urls : [this.url()]).map(url => {
                return new URL(url);
            });
            const cookies = await this.#frame.browsingContext.getCookies();
            return cookies
                .map(cookie => {
                return bidiToPuppeteerCookie(cookie);
            })
                .filter(cookie => {
                return normalizedUrls.some(url => {
                    return testUrlMatchCookie(cookie, url);
                });
            });
        }
        isServiceWorkerBypassed() {
            throw new UnsupportedOperation();
        }
        target() {
            const target = this.browserContext().getTargetForPage(this);
            if (!target) {
                throw new Error('Target not found for page');
            }
            return target;
        }
        async waitForFileChooser(options = {}) {
            const { timeout = this._timeoutSettings.timeout() } = options;
            const deferred = Deferred.create({
                message: `Waiting for \`FileChooser\` failed: ${timeout}ms exceeded`,
                timeout,
            });
            this.#fileChooserDeferreds.add(deferred);
            if (options.signal) {
                options.signal.addEventListener('abort', () => {
                    deferred.reject(options.signal?.reason);
                }, { once: true });
            }
            this.#frame.browsingContext.once('filedialogopened', info => {
                if (!info.element) {
                    return;
                }
                const chooser = new FileChooser(BidiElementHandle.from({
                    sharedId: info.element.sharedId,
                    handle: info.element.handle,
                    type: 'node',
                }, this.#frame.mainRealm()), info.multiple);
                for (const deferred of this.#fileChooserDeferreds) {
                    deferred.resolve(chooser);
                    this.#fileChooserDeferreds.delete(deferred);
                }
            });
            try {
                return await deferred.valueOrThrow();
            }
            catch (error) {
                this.#fileChooserDeferreds.delete(deferred);
                throw error;
            }
        }
        workers() {
            return [...this.#workers];
        }
        get isNetworkInterceptionEnabled() {
            return (Boolean(this.#requestInterception) || Boolean(this.#authInterception));
        }
        #requestInterception;
        async setRequestInterception(enable) {
            this.#requestInterception = await this.#toggleInterception(["beforeRequestSent" /* Bidi.Network.InterceptPhase.BeforeRequestSent */], this.#requestInterception, enable);
        }
        /**
         * @internal
         */
        async setExtraHTTPHeaders(headers) {
            await this.#frame.browsingContext.setExtraHTTPHeaders(headers);
        }
        /**
         * @internal
         */
        _credentials = null;
        #authInterception;
        async authenticate(credentials) {
            this.#authInterception = await this.#toggleInterception(["authRequired" /* Bidi.Network.InterceptPhase.AuthRequired */], this.#authInterception, Boolean(credentials));
            this._credentials = credentials;
        }
        async #toggleInterception(phases, interception, expected) {
            if (expected && !interception) {
                return await this.#frame.browsingContext.addIntercept({
                    phases,
                });
            }
            else if (!expected && interception) {
                await this.#frame.browsingContext.userContext.browser.removeIntercept(interception);
                return;
            }
            return interception;
        }
        setDragInterception() {
            throw new UnsupportedOperation();
        }
        setBypassServiceWorker() {
            throw new UnsupportedOperation();
        }
        async setOfflineMode(enabled) {
            if (!this.#browserContext.browser().cdpSupported) {
                return await this.#frame.browsingContext.setOfflineMode(enabled);
            }
            if (!this.#emulatedNetworkConditions) {
                this.#emulatedNetworkConditions = {
                    offline: false,
                    upload: -1,
                    download: -1,
                    latency: 0,
                };
            }
            this.#emulatedNetworkConditions.offline = enabled;
            return await this.#applyNetworkConditions();
        }
        async emulateNetworkConditions(networkConditions) {
            if (!this.#browserContext.browser().cdpSupported) {
                if (!networkConditions?.offline &&
                    ((networkConditions?.upload ?? -1) >= 0 ||
                        (networkConditions?.download ?? -1) >= 0 ||
                        (networkConditions?.latency ?? 0) > 0)) {
                    // WebDriver BiDi supports only offline mode.
                    throw new UnsupportedOperation();
                }
                return await this.#frame.browsingContext.setOfflineMode(networkConditions?.offline ?? false);
            }
            if (!this.#emulatedNetworkConditions) {
                this.#emulatedNetworkConditions = {
                    offline: networkConditions?.offline ?? false,
                    upload: -1,
                    download: -1,
                    latency: 0,
                };
            }
            this.#emulatedNetworkConditions.upload = networkConditions
                ? networkConditions.upload
                : -1;
            this.#emulatedNetworkConditions.download = networkConditions
                ? networkConditions.download
                : -1;
            this.#emulatedNetworkConditions.latency = networkConditions
                ? networkConditions.latency
                : 0;
            this.#emulatedNetworkConditions.offline =
                networkConditions?.offline ?? false;
            return await this.#applyNetworkConditions();
        }
        async #applyNetworkConditions() {
            if (!this.#emulatedNetworkConditions) {
                return;
            }
            await this._client().send('Network.emulateNetworkConditions', {
                offline: this.#emulatedNetworkConditions.offline,
                latency: this.#emulatedNetworkConditions.latency,
                uploadThroughput: this.#emulatedNetworkConditions.upload,
                downloadThroughput: this.#emulatedNetworkConditions.download,
            });
        }
        async setCookie(...cookies) {
            const pageURL = this.url();
            const pageUrlStartsWithHTTP = pageURL.startsWith('http');
            for (const cookie of cookies) {
                let cookieUrl = cookie.url || '';
                if (!cookieUrl && pageUrlStartsWithHTTP) {
                    cookieUrl = pageURL;
                }
                assert(cookieUrl !== 'about:blank', `Blank page can not have cookie "${cookie.name}"`);
                assert(!String.prototype.startsWith.call(cookieUrl || '', 'data:'), `Data URL page can not have cookie "${cookie.name}"`);
                // TODO: Support Chrome cookie partition keys
                assert(cookie.partitionKey === undefined ||
                    typeof cookie.partitionKey === 'string', 'BiDi only allows domain partition keys');
                const normalizedUrl = URL.canParse(cookieUrl)
                    ? new URL(cookieUrl)
                    : undefined;
                const domain = cookie.domain ?? normalizedUrl?.hostname;
                assert(domain !== undefined, `At least one of the url and domain needs to be specified`);
                const bidiCookie = {
                    domain: domain,
                    name: cookie.name,
                    value: {
                        type: 'string',
                        value: cookie.value,
                    },
                    ...(cookie.path !== undefined ? { path: cookie.path } : {}),
                    ...(cookie.httpOnly !== undefined ? { httpOnly: cookie.httpOnly } : {}),
                    ...(cookie.secure !== undefined ? { secure: cookie.secure } : {}),
                    ...(cookie.sameSite !== undefined
                        ? { sameSite: convertCookiesSameSiteCdpToBiDi(cookie.sameSite) }
                        : {}),
                    ...{ expiry: convertCookiesExpiryCdpToBiDi(cookie.expires) },
                    // Chrome-specific properties.
                    ...cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookie, 'sourceScheme', 'priority', 'url'),
                };
                if (cookie.partitionKey !== undefined) {
                    await this.browserContext().userContext.setCookie(bidiCookie, cookie.partitionKey);
                }
                else {
                    await this.#frame.browsingContext.setCookie(bidiCookie);
                }
            }
        }
        async deleteCookie(...cookies) {
            await Promise.all(cookies.map(async (deleteCookieRequest) => {
                const cookieUrl = deleteCookieRequest.url ?? this.url();
                const normalizedUrl = URL.canParse(cookieUrl)
                    ? new URL(cookieUrl)
                    : undefined;
                const domain = deleteCookieRequest.domain ?? normalizedUrl?.hostname;
                assert(domain !== undefined, `At least one of the url and domain needs to be specified`);
                const filter = {
                    domain: domain,
                    name: deleteCookieRequest.name,
                    ...(deleteCookieRequest.path !== undefined
                        ? { path: deleteCookieRequest.path }
                        : {}),
                };
                await this.#frame.browsingContext.deleteCookie(filter);
            }));
        }
        async removeExposedFunction(name) {
            await this.#frame.removeExposedFunction(name);
        }
        metrics() {
            throw new UnsupportedOperation();
        }
        async captureHeapSnapshot(_options) {
            throw new UnsupportedOperation();
        }
        async goBack(options = {}) {
            return await this.#go(-1, options);
        }
        async goForward(options = {}) {
            return await this.#go(1, options);
        }
        async #go(delta, options) {
            const controller = new AbortController();
            try {
                const [response] = await Promise.all([
                    this.waitForNavigation({
                        ...options,
                        signal: controller.signal,
                    }),
                    this.#frame.browsingContext.traverseHistory(delta),
                ]);
                return response;
            }
            catch (error) {
                controller.abort();
                throw error;
            }
        }
        async waitForDevicePrompt(options = {}) {
            return await this.mainFrame().waitForDevicePrompt(options);
        }
        get bluetooth() {
            return this.mainFrame().browsingContext.bluetooth;
        }
        extensionRealms() {
            throw new UnsupportedOperation();
        }
    };
})();
export { BidiPage };
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function evaluationExpression(fun, ...args) {
    return `() => {${evaluationString(fun, ...args)}}`;
}
/**
 * Check domains match.
 */
function testUrlMatchCookieHostname(cookie, normalizedUrl) {
    const cookieDomain = cookie.domain.toLowerCase();
    const urlHostname = normalizedUrl.hostname.toLowerCase();
    if (cookieDomain === urlHostname) {
        return true;
    }
    // TODO: does not consider additional restrictions w.r.t to IP
    // addresses which is fine as it is for representation and does not
    // mean that cookies actually apply that way in the browser.
    // https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.3
    return cookieDomain.startsWith('.') && urlHostname.endsWith(cookieDomain);
}
/**
 * Check paths match.
 * Spec: https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.4
 */
function testUrlMatchCookiePath(cookie, normalizedUrl) {
    const uriPath = normalizedUrl.pathname;
    const cookiePath = cookie.path;
    if (uriPath === cookiePath) {
        // The cookie-path and the request-path are identical.
        return true;
    }
    if (uriPath.startsWith(cookiePath)) {
        // The cookie-path is a prefix of the request-path.
        if (cookiePath.endsWith('/')) {
            // The last character of the cookie-path is %x2F ("/").
            return true;
        }
        if (uriPath[cookiePath.length] === '/') {
            // The first character of the request-path that is not included in the cookie-path
            // is a %x2F ("/") character.
            return true;
        }
    }
    return false;
}
/**
 * Checks the cookie matches the URL according to the spec:
 */
function testUrlMatchCookie(cookie, url) {
    const normalizedUrl = new URL(url);
    assert(cookie !== undefined);
    if (!testUrlMatchCookieHostname(cookie, normalizedUrl)) {
        return false;
    }
    return testUrlMatchCookiePath(cookie, normalizedUrl);
}
export function bidiToPuppeteerCookie(bidiCookie, returnCompositePartitionKey = false) {
    const partitionKey = bidiCookie[CDP_SPECIFIC_PREFIX + 'partitionKey'];
    function getPartitionKey() {
        if (typeof partitionKey === 'string') {
            return { partitionKey };
        }
        if (typeof partitionKey === 'object' && partitionKey !== null) {
            if (returnCompositePartitionKey) {
                return {
                    partitionKey: {
                        sourceOrigin: partitionKey.topLevelSite,
                        hasCrossSiteAncestor: partitionKey.hasCrossSiteAncestor ?? false,
                    },
                };
            }
            return {
                // TODO: a breaking change in Puppeteer is required to change
                // partitionKey type and report the composite partition key.
                partitionKey: partitionKey.topLevelSite,
            };
        }
        return {};
    }
    return {
        name: bidiCookie.name,
        // Presents binary value as base64 string.
        value: bidiCookie.value.value,
        domain: bidiCookie.domain,
        path: bidiCookie.path,
        size: bidiCookie.size,
        httpOnly: bidiCookie.httpOnly,
        secure: bidiCookie.secure,
        sameSite: convertCookiesSameSiteBiDiToCdp(bidiCookie.sameSite),
        expires: bidiCookie.expiry ?? -1,
        session: bidiCookie.expiry === undefined || bidiCookie.expiry <= 0,
        // Extending with CDP-specific properties with `goog:` prefix.
        ...cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, 'sourceScheme', 'partitionKeyOpaque', 'priority'),
        ...getPartitionKey(),
    };
}
const CDP_SPECIFIC_PREFIX = 'goog:';
/**
 * Gets CDP-specific properties from the BiDi cookie and returns them as a new object.
 */
function cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, ...propertyNames) {
    const result = {};
    for (const property of propertyNames) {
        if (bidiCookie[CDP_SPECIFIC_PREFIX + property] !== undefined) {
            result[property] = bidiCookie[CDP_SPECIFIC_PREFIX + property];
        }
    }
    return result;
}
/**
 * Gets CDP-specific properties from the cookie, adds CDP-specific prefixes and returns
 * them as a new object which can be used in BiDi.
 */
export function cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookieParam, ...propertyNames) {
    const result = {};
    for (const property of propertyNames) {
        if (cookieParam[property] !== undefined) {
            result[CDP_SPECIFIC_PREFIX + property] = cookieParam[property];
        }
    }
    return result;
}
function convertCookiesSameSiteBiDiToCdp(sameSite) {
    switch (sameSite) {
        case 'strict':
            return 'Strict';
        case 'lax':
            return 'Lax';
        case 'none':
            return 'None';
        default:
            return 'Default';
    }
}
export function convertCookiesSameSiteCdpToBiDi(sameSite) {
    switch (sameSite) {
        case 'Strict':
            return "strict" /* Bidi.Network.SameSite.Strict */;
        case 'Lax':
            return "lax" /* Bidi.Network.SameSite.Lax */;
        case 'None':
            return "none" /* Bidi.Network.SameSite.None */;
        default:
            return "default" /* Bidi.Network.SameSite.Default */;
    }
}
export function convertCookiesExpiryCdpToBiDi(expiry) {
    return [undefined, -1].includes(expiry) ? undefined : expiry;
}
export function convertCookiesPartitionKeyFromPuppeteerToBiDi(partitionKey) {
    if (partitionKey === undefined || typeof partitionKey === 'string') {
        return partitionKey;
    }
    if (partitionKey.hasCrossSiteAncestor) {
        throw new UnsupportedOperation('WebDriver BiDi does not support `hasCrossSiteAncestor` yet.');
    }
    return partitionKey.sourceOrigin;
}
//# sourceMappingURL=Page.js.map