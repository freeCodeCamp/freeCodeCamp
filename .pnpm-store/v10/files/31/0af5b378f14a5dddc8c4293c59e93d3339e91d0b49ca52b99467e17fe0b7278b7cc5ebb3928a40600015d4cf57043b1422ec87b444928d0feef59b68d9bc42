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
import { firstValueFrom, from, raceWith } from '../../third_party/rxjs/rxjs.js';
import { CDPSessionEvent } from '../api/CDPSession.js';
import { Page, } from '../api/Page.js';
import { WebWorker, WebWorkerEvent } from '../api/WebWorker.js';
import { ConsoleMessage } from '../common/ConsoleMessage.js';
import { TargetCloseError } from '../common/Errors.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { FileChooser } from '../common/FileChooser.js';
import { NetworkManagerEvent } from '../common/NetworkManagerEvents.js';
import { debugError, evaluationString, getReadableAsTypedArray, getReadableFromProtocolStream, parsePDFOptions, timeout, validateDialogType, } from '../common/util.js';
import { environment } from '../environment.js';
import { assert } from '../util/assert.js';
import { Deferred } from '../util/Deferred.js';
import { AsyncDisposableStack } from '../util/disposable.js';
import { isErrorLike } from '../util/ErrorLike.js';
import { Binding } from './Binding.js';
import { CdpBluetoothEmulation } from './BluetoothEmulation.js';
import { CdpCDPSession } from './CdpSession.js';
import { isTargetClosedError } from './Connection.js';
import { Coverage } from './Coverage.js';
import { CdpDialog } from './Dialog.js';
import { EmulationManager } from './EmulationManager.js';
import { FrameManager } from './FrameManager.js';
import { FrameManagerEvent } from './FrameManagerEvents.js';
import { CdpKeyboard, CdpMouse, CdpTouchscreen } from './Input.js';
import { MAIN_WORLD } from './IsolatedWorlds.js';
import { releaseObject } from './JSHandle.js';
import { Tracing } from './Tracing.js';
import { convertConsoleMessageLevel, createClientError, createConsoleMessage, pageBindingInitString, } from './utils.js';
import { WebMCP } from './WebMCP.js';
import { CdpWebWorker } from './WebWorker.js';
/**
 * @internal
 */
export function convertSameSiteFromPuppeteerToCdp(sameSite) {
    switch (sameSite) {
        case 'Strict':
        case 'Lax':
        case 'None':
            return sameSite;
        default:
            return undefined;
    }
}
/**
 * @internal
 */
export class CdpPage extends Page {
    static async _create(client, target, defaultViewport) {
        const page = new CdpPage(client, target);
        await page.#initialize();
        if (defaultViewport) {
            try {
                await page.setViewport(defaultViewport);
            }
            catch (err) {
                if (isErrorLike(err) && isTargetClosedError(err)) {
                    debugError(err);
                }
                else {
                    throw err;
                }
            }
        }
        return page;
    }
    #closed = false;
    #targetManager;
    #cdpBluetoothEmulation;
    #primaryTargetClient;
    #primaryTarget;
    #tabTargetClient;
    #tabTarget;
    #keyboard;
    #mouse;
    #touchscreen;
    #frameManager;
    #emulationManager;
    #tracing;
    #webmcp;
    #bindings = new Map();
    #exposedFunctions = new Map();
    #coverage;
    #viewport;
    #workers = new Map();
    #fileChooserDeferreds = new Set();
    #sessionCloseDeferred = Deferred.create();
    #serviceWorkerBypassed = false;
    #userDragInterceptionEnabled = false;
    constructor(client, target) {
        super();
        this.#primaryTargetClient = client;
        this.#tabTargetClient = client.parentSession();
        assert(this.#tabTargetClient, 'Tab target session is not defined.');
        this.#tabTarget = this.#tabTargetClient.target();
        assert(this.#tabTarget, 'Tab target is not defined.');
        this._tabId = this.#tabTarget._getTargetInfo().targetId;
        this.#primaryTarget = target;
        this.#targetManager = target._targetManager();
        this.#keyboard = new CdpKeyboard(client);
        this.#mouse = new CdpMouse(client, this.#keyboard);
        this.#touchscreen = new CdpTouchscreen(client, this.#keyboard);
        this.#frameManager = new FrameManager(client, this, this._timeoutSettings);
        this.#emulationManager = new EmulationManager(client);
        this.#tracing = new Tracing(client);
        this.#webmcp = new WebMCP(client, this.#frameManager);
        this.#coverage = new Coverage(client);
        this.#viewport = null;
        // Use browser context's connection, as current Bluetooth emulation in Chromium is
        // implemented on the browser context level, and not tight to the specific tab.
        this.#cdpBluetoothEmulation = new CdpBluetoothEmulation(this.#primaryTargetClient.connection());
        const frameManagerEmitter = new EventEmitter(this.#frameManager);
        frameManagerEmitter.on(FrameManagerEvent.FrameAttached, frame => {
            this.emit("frameattached" /* PageEvent.FrameAttached */, frame);
        });
        frameManagerEmitter.on(FrameManagerEvent.FrameDetached, frame => {
            this.emit("framedetached" /* PageEvent.FrameDetached */, frame);
        });
        frameManagerEmitter.on(FrameManagerEvent.FrameNavigated, frame => {
            this.emit("framenavigated" /* PageEvent.FrameNavigated */, frame);
        });
        frameManagerEmitter.on(FrameManagerEvent.ConsoleApiCalled, ([world, event]) => {
            this.#onConsoleAPI(world, event);
        });
        frameManagerEmitter.on(FrameManagerEvent.BindingCalled, ([world, event]) => {
            void this.#onBindingCalled(world, event);
        });
        const networkManagerEmitter = new EventEmitter(this.#frameManager.networkManager);
        networkManagerEmitter.on(NetworkManagerEvent.Request, request => {
            this.emit("request" /* PageEvent.Request */, request);
        });
        networkManagerEmitter.on(NetworkManagerEvent.RequestServedFromCache, request => {
            this.emit("requestservedfromcache" /* PageEvent.RequestServedFromCache */, request);
        });
        networkManagerEmitter.on(NetworkManagerEvent.Response, response => {
            this.emit("response" /* PageEvent.Response */, response);
        });
        networkManagerEmitter.on(NetworkManagerEvent.RequestFailed, request => {
            this.emit("requestfailed" /* PageEvent.RequestFailed */, request);
        });
        networkManagerEmitter.on(NetworkManagerEvent.RequestFinished, request => {
            this.emit("requestfinished" /* PageEvent.RequestFinished */, request);
        });
        this.#tabTargetClient.on(CDPSessionEvent.Swapped, this.#onActivation.bind(this));
        this.#tabTargetClient.on(CDPSessionEvent.Ready, this.#onSecondaryTarget.bind(this));
        this.#targetManager.on("targetGone" /* TargetManagerEvent.TargetGone */, this.#onDetachedFromTarget);
        this.#tabTarget._isClosedDeferred
            .valueOrThrow()
            .then(() => {
            this.#targetManager.off("targetGone" /* TargetManagerEvent.TargetGone */, this.#onDetachedFromTarget);
            this.emit("close" /* PageEvent.Close */, undefined);
            this.#closed = true;
        })
            .catch(debugError);
        this.#setupPrimaryTargetListeners();
        this.#attachExistingTargets();
    }
    #attachExistingTargets() {
        const queue = [];
        for (const childTarget of this.#targetManager.getChildTargets(this.#primaryTarget)) {
            queue.push(childTarget);
        }
        let idx = 0;
        while (idx < queue.length) {
            const next = queue[idx];
            idx++;
            const session = next._session();
            if (session) {
                this.#onAttachedToTarget(session);
            }
            for (const childTarget of this.#targetManager.getChildTargets(next)) {
                queue.push(childTarget);
            }
        }
    }
    async #onActivation(newSession) {
        // TODO: Remove assert once we have separate Event type for CdpCDPSession.
        assert(newSession instanceof CdpCDPSession, 'CDPSession is not instance of CdpCDPSession');
        this.#primaryTargetClient = newSession;
        this.#primaryTarget = newSession.target();
        assert(this.#primaryTarget, 'Missing target on swap');
        this.#keyboard.updateClient(newSession);
        this.#mouse.updateClient(newSession);
        this.#touchscreen.updateClient(newSession);
        this.#emulationManager.updateClient(newSession);
        this.#tracing.updateClient(newSession);
        this.#webmcp.updateClient(newSession);
        this.#coverage.updateClient(newSession);
        await this.#frameManager.swapFrameTree(newSession);
        this.#setupPrimaryTargetListeners();
    }
    async #onSecondaryTarget(session) {
        assert(session instanceof CdpCDPSession);
        if (session.target()._subtype() !== 'prerender') {
            return;
        }
        this.#frameManager.registerSpeculativeSession(session).catch(debugError);
        this.#emulationManager
            .registerSpeculativeSession(session)
            .catch(debugError);
    }
    /**
     * Sets up listeners for the primary target. The primary target can change
     * during a navigation to a prerended page.
     */
    #setupPrimaryTargetListeners() {
        const clientEmitter = new EventEmitter(this.#primaryTargetClient);
        clientEmitter.on(CDPSessionEvent.Ready, this.#onAttachedToTarget);
        clientEmitter.on(CDPSessionEvent.Disconnected, () => {
            this.#sessionCloseDeferred.reject(new TargetCloseError('Target closed'));
        });
        clientEmitter.on('Page.domContentEventFired', () => {
            this.emit("domcontentloaded" /* PageEvent.DOMContentLoaded */, undefined);
        });
        clientEmitter.on('Page.loadEventFired', () => {
            this.emit("load" /* PageEvent.Load */, undefined);
        });
        clientEmitter.on('Page.javascriptDialogOpening', this.#onDialog.bind(this));
        clientEmitter.on('Runtime.exceptionThrown', this.#handleException.bind(this));
        clientEmitter.on('Inspector.targetCrashed', this.#onTargetCrashed.bind(this));
        clientEmitter.on('Performance.metrics', this.#emitMetrics.bind(this));
        clientEmitter.on('Log.entryAdded', this.#onLogEntryAdded.bind(this));
        clientEmitter.on('Page.fileChooserOpened', this.#onFileChooser.bind(this));
    }
    #onDetachedFromTarget = (target) => {
        const sessionId = target._session()?.id();
        const worker = this.#workers.get(sessionId);
        if (!worker) {
            return;
        }
        this.#workers.delete(sessionId);
        this.emit("workerdestroyed" /* PageEvent.WorkerDestroyed */, worker);
    };
    #onAttachedToTarget = (session) => {
        assert(session instanceof CdpCDPSession);
        this.#frameManager.onAttachedToTarget(session.target());
        if (session.target()._getTargetInfo().type === 'worker') {
            const worker = new CdpWebWorker(session, session.target().url(), session.target()._targetId, session.target().type(), this.#handleException.bind(this), this.#frameManager.networkManager);
            this.#workers.set(session.id(), worker);
            worker.internalEmitter.on(WebWorkerEvent.Console, message => {
                const noListenersForConsoleOnPage = this.listenerCount("console" /* PageEvent.Console */) === 0;
                const noListenersForConsoleOnWorker = worker.listenerCount(WebWorkerEvent.Console) === 0;
                if (noListenersForConsoleOnPage && noListenersForConsoleOnWorker) {
                    // eslint-disable-next-line max-len -- The comment is long.
                    // eslint-disable-next-line @puppeteer/use-using -- These are not owned by this function.
                    for (const arg of message.args()) {
                        void arg.dispose().catch(debugError);
                    }
                    return;
                }
                if (!noListenersForConsoleOnPage) {
                    this.emit("console" /* PageEvent.Console */, message);
                }
            });
            this.emit("workercreated" /* PageEvent.WorkerCreated */, worker);
        }
        session.on(CDPSessionEvent.Ready, this.#onAttachedToTarget);
    };
    async #initialize() {
        try {
            await Promise.all([
                this.#frameManager.initialize(this.#primaryTargetClient),
                this.#primaryTargetClient.send('Performance.enable'),
                this.#primaryTargetClient.send('Log.enable'),
                this.#webmcp.initialize(),
            ]);
        }
        catch (err) {
            if (isErrorLike(err) && isTargetClosedError(err)) {
                debugError(err);
            }
            else {
                throw err;
            }
        }
    }
    async resize(params) {
        const windowId = await this.windowId();
        await this.#primaryTargetClient.send('Browser.setContentsSize', {
            windowId: Number(windowId),
            width: params.contentWidth,
            height: params.contentHeight,
        });
    }
    async windowId() {
        const { windowId } = await this.#primaryTargetClient.send('Browser.getWindowForTarget');
        return windowId.toString();
    }
    async #onFileChooser(event) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            if (!this.#fileChooserDeferreds.size) {
                return;
            }
            const frame = this.#frameManager.frame(event.frameId);
            assert(frame, 'This should never happen.');
            // This is guaranteed to be an HTMLInputElement handle by the event.
            const handle = __addDisposableResource(env_1, (await frame.worlds[MAIN_WORLD].adoptBackendNode(event.backendNodeId)), false);
            const fileChooser = new FileChooser(handle.move(), event.mode !== 'selectSingle');
            for (const promise of this.#fileChooserDeferreds) {
                promise.resolve(fileChooser);
            }
            this.#fileChooserDeferreds.clear();
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            __disposeResources(env_1);
        }
    }
    _client() {
        return this.#primaryTargetClient;
    }
    _isUrlAllowed(url) {
        return this.#targetManager.isUrlAllowed(url);
    }
    isServiceWorkerBypassed() {
        return this.#serviceWorkerBypassed;
    }
    isDragInterceptionEnabled() {
        return this.#userDragInterceptionEnabled;
    }
    isJavaScriptEnabled() {
        return this.#emulationManager.javascriptEnabled;
    }
    async openDevTools() {
        const pageTargetId = this.target()._targetId;
        const browser = this.browser();
        const devtoolsTargetId = await browser._hasDevToolsTarget(this.target()._targetId);
        if (devtoolsTargetId) {
            return await browser._getDevToolsTargetPage(devtoolsTargetId);
        }
        const devtoolsPage = await browser._createDevToolsPage(pageTargetId);
        return devtoolsPage;
    }
    async hasDevTools() {
        const browser = this.browser();
        const targetId = await browser._hasDevToolsTarget(this.target()._targetId);
        return Boolean(targetId);
    }
    async waitForFileChooser(options = {}) {
        const needsEnable = this.#fileChooserDeferreds.size === 0;
        const { timeout = this._timeoutSettings.timeout() } = options;
        const deferred = Deferred.create({
            message: `Waiting for \`FileChooser\` failed: ${timeout}ms exceeded`,
            timeout,
        });
        if (options.signal) {
            options.signal.addEventListener('abort', () => {
                deferred.reject(options.signal?.reason);
            }, { once: true });
        }
        this.#fileChooserDeferreds.add(deferred);
        let enablePromise;
        if (needsEnable) {
            enablePromise = this.#primaryTargetClient.send('Page.setInterceptFileChooserDialog', {
                enabled: true,
            });
        }
        try {
            const [result] = await Promise.all([
                deferred.valueOrThrow(),
                enablePromise,
            ]);
            return result;
        }
        catch (error) {
            this.#fileChooserDeferreds.delete(deferred);
            throw error;
        }
    }
    async setGeolocation(options) {
        return await this.#emulationManager.setGeolocation(options);
    }
    target() {
        return this.#primaryTarget;
    }
    browser() {
        return this.#primaryTarget.browser();
    }
    browserContext() {
        return this.#primaryTarget.browserContext();
    }
    #onTargetCrashed() {
        this.emit("error" /* PageEvent.Error */, new Error('Page crashed!'));
    }
    #onLogEntryAdded(event) {
        const { level, text, args, source, url, lineNumber, stackTrace } = event.entry;
        if (args) {
            args.map(arg => {
                void releaseObject(this.#primaryTargetClient, arg);
            });
        }
        if (source !== 'worker') {
            this.emit("console" /* PageEvent.Console */, new ConsoleMessage(convertConsoleMessageLevel(level), text, [], [{ url, lineNumber }], undefined, stackTrace, this.#primaryTarget._targetId));
        }
    }
    mainFrame() {
        return this.#frameManager.mainFrame();
    }
    get keyboard() {
        return this.#keyboard;
    }
    get touchscreen() {
        return this.#touchscreen;
    }
    get coverage() {
        return this.#coverage;
    }
    get tracing() {
        return this.#tracing;
    }
    get webmcp() {
        return this.#webmcp;
    }
    frames() {
        return this.#frameManager.frames();
    }
    workers() {
        return Array.from(this.#workers.values());
    }
    async setRequestInterception(value) {
        return await this.#frameManager.networkManager.setRequestInterception(value);
    }
    async setBypassServiceWorker(bypass) {
        this.#serviceWorkerBypassed = bypass;
        return await this.#primaryTargetClient.send('Network.setBypassServiceWorker', { bypass });
    }
    async setDragInterception(enabled) {
        this.#userDragInterceptionEnabled = enabled;
        return await this.#primaryTargetClient.send('Input.setInterceptDrags', {
            enabled,
        });
    }
    async setOfflineMode(enabled) {
        return await this.#frameManager.networkManager.setOfflineMode(enabled);
    }
    async emulateNetworkConditions(networkConditions) {
        return await this.#frameManager.networkManager.emulateNetworkConditions(networkConditions);
    }
    async emulateFocusedPage(enabled) {
        return await this.#emulationManager.emulateFocus(enabled);
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
    async queryObjects(prototypeHandle) {
        assert(!prototypeHandle.disposed, 'Prototype JSHandle is disposed!');
        assert(prototypeHandle.id, 'Prototype JSHandle must not be referencing primitive value');
        const response = await this.mainFrame().client.send('Runtime.queryObjects', {
            prototypeObjectId: prototypeHandle.id,
        });
        return this.mainFrame()
            .mainRealm()
            .createCdpHandle(response.objects);
    }
    async cookies(...urls) {
        const originalCookies = (await this.#primaryTargetClient.send('Network.getCookies', {
            urls: urls.length ? urls : [this.url()],
        })).cookies;
        const unsupportedCookieAttributes = ['sourcePort'];
        const filterUnsupportedAttributes = (cookie) => {
            for (const attr of unsupportedCookieAttributes) {
                delete cookie[attr];
            }
            return cookie;
        };
        return originalCookies.map(filterUnsupportedAttributes).map(cookie => {
            return {
                ...cookie,
                // TODO: a breaking change is needed in Puppeteer types to support other
                // partition keys.
                partitionKey: cookie.partitionKey
                    ? cookie.partitionKey.topLevelSite
                    : undefined,
            };
        });
    }
    async deleteCookie(...cookies) {
        const pageURL = this.url();
        for (const cookie of cookies) {
            const item = {
                ...cookie,
                partitionKey: convertCookiesPartitionKeyFromPuppeteerToCdp(cookie.partitionKey),
            };
            if (!cookie.url && pageURL.startsWith('http')) {
                item.url = pageURL;
            }
            await this.#primaryTargetClient.send('Network.deleteCookies', item);
            if (pageURL.startsWith('http') && !item.partitionKey) {
                const url = new URL(pageURL);
                // Delete also cookies from the page's partition.
                await this.#primaryTargetClient.send('Network.deleteCookies', {
                    ...item,
                    partitionKey: {
                        topLevelSite: url.origin.replace(`:${url.port}`, ''),
                        hasCrossSiteAncestor: false,
                    },
                });
            }
        }
    }
    async setCookie(...cookies) {
        const pageURL = this.url();
        const startsWithHTTP = pageURL.startsWith('http');
        const items = cookies.map(cookie => {
            const item = Object.assign({}, cookie);
            if (!item.url && startsWithHTTP) {
                item.url = pageURL;
            }
            assert(item.url !== 'about:blank', `Blank page can not have cookie "${item.name}"`);
            assert(!String.prototype.startsWith.call(item.url || '', 'data:'), `Data URL page can not have cookie "${item.name}"`);
            return item;
        });
        await this.deleteCookie(...items);
        if (items.length) {
            await this.#primaryTargetClient.send('Network.setCookies', {
                cookies: items.map(cookieParam => {
                    return {
                        ...cookieParam,
                        partitionKey: convertCookiesPartitionKeyFromPuppeteerToCdp(cookieParam.partitionKey),
                        sameSite: convertSameSiteFromPuppeteerToCdp(cookieParam.sameSite),
                    };
                }),
            });
        }
    }
    async exposeFunction(name, 
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    pptrFunction) {
        if (this.#bindings.has(name)) {
            throw new Error(`Failed to add page binding with name ${name}: window['${name}'] already exists!`);
        }
        const source = pageBindingInitString('exposedFun', name);
        let binding;
        switch (typeof pptrFunction) {
            case 'function':
                binding = new Binding(name, pptrFunction, source);
                break;
            default:
                binding = new Binding(name, pptrFunction.default, source);
                break;
        }
        this.#bindings.set(name, binding);
        const [{ identifier }] = await Promise.all([
            this.#frameManager.evaluateOnNewDocument(source),
            this.#frameManager.addExposedFunctionBinding(binding),
        ]);
        this.#exposedFunctions.set(name, identifier);
    }
    async removeExposedFunction(name) {
        const exposedFunctionId = this.#exposedFunctions.get(name);
        if (!exposedFunctionId) {
            throw new Error(`Function with name "${name}" does not exist`);
        }
        // #bindings must be updated together with #exposedFunctions.
        const binding = this.#bindings.get(name);
        this.#exposedFunctions.delete(name);
        this.#bindings.delete(name);
        await Promise.all([
            this.#frameManager.removeScriptToEvaluateOnNewDocument(exposedFunctionId),
            this.#frameManager.removeExposedFunctionBinding(binding),
        ]);
    }
    async authenticate(credentials) {
        return await this.#frameManager.networkManager.authenticate(credentials);
    }
    async setExtraHTTPHeaders(headers) {
        return await this.#frameManager.networkManager.setExtraHTTPHeaders(headers);
    }
    async setUserAgent(userAgentOrOptions, userAgentMetadata) {
        if (typeof userAgentOrOptions === 'string') {
            return await this.#frameManager.networkManager.setUserAgent(userAgentOrOptions, userAgentMetadata);
        }
        else {
            const userAgent = userAgentOrOptions.userAgent ?? (await this.browser().userAgent());
            return await this.#frameManager.networkManager.setUserAgent(userAgent, userAgentOrOptions.userAgentMetadata, userAgentOrOptions.platform);
        }
    }
    async metrics() {
        const response = await this.#primaryTargetClient.send('Performance.getMetrics');
        return this.#buildMetricsObject(response.metrics);
    }
    async captureHeapSnapshot(options) {
        const { createWriteStream } = environment.value.fs;
        const stream = createWriteStream(options.path);
        const streamPromise = new Promise((resolve, reject) => {
            stream.on('error', reject);
            stream.on('finish', resolve);
        });
        const client = this.#primaryTargetClient;
        await client.send('HeapProfiler.enable');
        await client.send('HeapProfiler.collectGarbage');
        const handler = (event) => {
            stream.write(event.chunk);
        };
        client.on('HeapProfiler.addHeapSnapshotChunk', handler);
        try {
            await client.send('HeapProfiler.takeHeapSnapshot', {
                reportProgress: false,
            });
        }
        finally {
            client.off('HeapProfiler.addHeapSnapshotChunk', handler);
            await client.send('HeapProfiler.disable');
        }
        stream.end();
        await streamPromise;
    }
    #emitMetrics(event) {
        this.emit("metrics" /* PageEvent.Metrics */, {
            title: event.title,
            metrics: this.#buildMetricsObject(event.metrics),
        });
    }
    #buildMetricsObject(metrics) {
        const result = {};
        for (const metric of metrics || []) {
            if (supportedMetrics.has(metric.name)) {
                result[metric.name] = metric.value;
            }
        }
        return result;
    }
    #handleException(exception) {
        this.emit("pageerror" /* PageEvent.PageError */, createClientError(exception.exceptionDetails));
    }
    #onConsoleAPI(world, event, values) {
        if (!values) {
            values = event.args.map(arg => {
                return world.createCdpHandle(arg);
            });
        }
        const hasPageConsoleListeners = this.listenerCount("console" /* PageEvent.Console */) > 0;
        const hasWorkerConsoleListeners = world.environment instanceof WebWorker &&
            world.environment.listenerCount(WebWorkerEvent.Console) > 0;
        if (!hasPageConsoleListeners) {
            if (!hasWorkerConsoleListeners) {
                // eslint-disable-next-line max-len -- The comment is long.
                // eslint-disable-next-line @puppeteer/use-using -- These are not owned by this function.
                for (const value of values) {
                    void value.dispose().catch(debugError);
                }
            }
            return;
        }
        let targetId;
        if (world.environment.client instanceof CdpCDPSession) {
            targetId = world.environment.client.target()._targetId;
        }
        this.emit("console" /* PageEvent.Console */, createConsoleMessage(event, values, targetId));
    }
    async #onBindingCalled(world, event) {
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
        if (type !== 'exposedFun') {
            return;
        }
        const context = world.context;
        if (!context) {
            return;
        }
        const binding = this.#bindings.get(name);
        await binding?.run(context, seq, args, isTrivial);
    }
    #onDialog(event) {
        const type = validateDialogType(event.type);
        const dialog = new CdpDialog(this.#primaryTargetClient, type, event.message, event.defaultPrompt);
        this.emit("dialog" /* PageEvent.Dialog */, dialog);
    }
    async reload(options) {
        const [result] = await Promise.all([
            this.waitForNavigation({
                ...options,
                ignoreSameDocumentNavigation: true,
            }),
            this.#primaryTargetClient.send('Page.reload', {
                ignoreCache: options?.ignoreCache ?? false,
            }),
        ]);
        return result;
    }
    async createCDPSession() {
        return await this.target().createCDPSession();
    }
    async goBack(options = {}) {
        return await this.#go(-1, options);
    }
    async goForward(options = {}) {
        return await this.#go(+1, options);
    }
    async #go(delta, options) {
        const history = await this.#primaryTargetClient.send('Page.getNavigationHistory');
        const entry = history.entries[history.currentIndex + delta];
        if (!entry) {
            throw new Error('History entry to navigate to not found.');
        }
        const result = await Promise.all([
            this.waitForNavigation(options),
            this.#primaryTargetClient.send('Page.navigateToHistoryEntry', {
                entryId: entry.id,
            }),
        ]);
        return result[0];
    }
    async bringToFront() {
        await this.#primaryTargetClient.send('Page.bringToFront');
    }
    async setJavaScriptEnabled(enabled) {
        return await this.#emulationManager.setJavaScriptEnabled(enabled);
    }
    async setBypassCSP(enabled) {
        await this.#primaryTargetClient.send('Page.setBypassCSP', { enabled });
    }
    async triggerExtensionAction(extension) {
        return await extension.triggerAction(this);
    }
    async emulateMediaType(type) {
        return await this.#emulationManager.emulateMediaType(type);
    }
    async emulateCPUThrottling(factor) {
        return await this.#emulationManager.emulateCPUThrottling(factor);
    }
    async emulateMediaFeatures(features) {
        return await this.#emulationManager.emulateMediaFeatures(features);
    }
    async emulateTimezone(timezoneId) {
        return await this.#emulationManager.emulateTimezone(timezoneId);
    }
    async emulateIdleState(overrides) {
        return await this.#emulationManager.emulateIdleState(overrides);
    }
    async emulateVisionDeficiency(type) {
        return await this.#emulationManager.emulateVisionDeficiency(type);
    }
    async setViewport(viewport) {
        const needsReload = await this.#emulationManager.emulateViewport(viewport);
        this.#viewport = viewport;
        if (needsReload) {
            await this.reload();
        }
    }
    viewport() {
        return this.#viewport;
    }
    async evaluateOnNewDocument(pageFunction, ...args) {
        const source = evaluationString(pageFunction, ...args);
        return await this.#frameManager.evaluateOnNewDocument(source);
    }
    async removeScriptToEvaluateOnNewDocument(identifier) {
        return await this.#frameManager.removeScriptToEvaluateOnNewDocument(identifier);
    }
    async setCacheEnabled(enabled = true) {
        await this.#frameManager.networkManager.setCacheEnabled(enabled);
    }
    async _screenshot(options) {
        const env_2 = { stack: [], error: void 0, hasError: false };
        try {
            const { fromSurface, omitBackground, optimizeForSpeed, quality, clip: userClip, type, captureBeyondViewport, } = options;
            const stack = __addDisposableResource(env_2, new AsyncDisposableStack(), true);
            if (omitBackground && (type === 'png' || type === 'webp')) {
                await this.#emulationManager.setTransparentBackgroundColor();
                stack.defer(async () => {
                    await this.#emulationManager
                        .resetDefaultBackgroundColor()
                        .catch(debugError);
                });
            }
            let clip = userClip;
            if (clip && !captureBeyondViewport) {
                const viewport = await this.mainFrame()
                    .isolatedRealm()
                    .evaluate(() => {
                    const { height, pageLeft: x, pageTop: y, width, } = window.visualViewport;
                    return { x, y, height, width };
                });
                clip = getIntersectionRect(clip, viewport);
            }
            const { data } = await this.#primaryTargetClient.send('Page.captureScreenshot', {
                format: type,
                optimizeForSpeed,
                fromSurface,
                ...(quality !== undefined ? { quality: Math.round(quality) } : {}),
                ...(clip ? { clip: { ...clip, scale: clip.scale ?? 1 } } : {}),
                captureBeyondViewport,
            });
            return data;
        }
        catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        }
        finally {
            const result_1 = __disposeResources(env_2);
            if (result_1)
                await result_1;
        }
    }
    async createPDFStream(options = {}) {
        const { timeout: ms = this._timeoutSettings.timeout() } = options;
        const { landscape, displayHeaderFooter, headerTemplate, footerTemplate, printBackground, scale, width: paperWidth, height: paperHeight, margin, pageRanges, preferCSSPageSize, omitBackground, tagged: generateTaggedPDF, outline: generateDocumentOutline, waitForFonts, } = parsePDFOptions(options);
        if (omitBackground) {
            await this.#emulationManager.setTransparentBackgroundColor();
        }
        if (waitForFonts) {
            await firstValueFrom(from(this.mainFrame()
                .isolatedRealm()
                .evaluate(() => {
                return document.fonts.ready;
            })).pipe(raceWith(timeout(ms))));
        }
        const printCommandPromise = this.#primaryTargetClient.send('Page.printToPDF', {
            transferMode: 'ReturnAsStream',
            landscape,
            displayHeaderFooter,
            headerTemplate,
            footerTemplate,
            printBackground,
            scale,
            paperWidth,
            paperHeight,
            marginTop: margin.top,
            marginBottom: margin.bottom,
            marginLeft: margin.left,
            marginRight: margin.right,
            pageRanges,
            preferCSSPageSize,
            generateTaggedPDF,
            generateDocumentOutline,
        });
        const result = await firstValueFrom(from(printCommandPromise).pipe(raceWith(timeout(ms))));
        if (omitBackground) {
            await this.#emulationManager.resetDefaultBackgroundColor();
        }
        assert(result.stream, '`stream` is missing from `Page.printToPDF');
        return await getReadableFromProtocolStream(this.#primaryTargetClient, result.stream);
    }
    async pdf(options = {}) {
        const { path = undefined } = options;
        const readable = await this.createPDFStream(options);
        const typedArray = await getReadableAsTypedArray(readable, path);
        assert(typedArray, 'Could not create typed array');
        return typedArray;
    }
    async close(options = { runBeforeUnload: undefined }) {
        const env_3 = { stack: [], error: void 0, hasError: false };
        try {
            const _guard = __addDisposableResource(env_3, await this.browserContext().waitForScreenshotOperations(), false);
            const connection = this.#primaryTargetClient.connection();
            assert(connection, 'Connection closed. Most likely the page has been closed.');
            const runBeforeUnload = !!options.runBeforeUnload;
            if (runBeforeUnload) {
                await this.#primaryTargetClient.send('Page.close');
            }
            else {
                await connection.send('Target.closeTarget', {
                    targetId: this.#primaryTarget._targetId,
                });
                await this.#tabTarget._isClosedDeferred.valueOrThrow();
            }
        }
        catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        }
        finally {
            __disposeResources(env_3);
        }
    }
    isClosed() {
        return this.#closed;
    }
    get mouse() {
        return this.#mouse;
    }
    /**
     * This method is typically coupled with an action that triggers a device
     * request from an api such as WebBluetooth.
     *
     * :::caution
     *
     * This must be called before the device request is made. It will not return a
     * currently active device prompt.
     *
     * :::
     *
     * @example
     *
     * ```ts
     * const [devicePrompt] = Promise.all([
     *   page.waitForDevicePrompt(),
     *   page.click('#connect-bluetooth'),
     * ]);
     * await devicePrompt.select(
     *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device')),
     * );
     * ```
     */
    async waitForDevicePrompt(options = {}) {
        return await this.mainFrame().waitForDevicePrompt(options);
    }
    get bluetooth() {
        return this.#cdpBluetoothEmulation;
    }
    extensionRealms() {
        return this.mainFrame().extensionRealms();
    }
}
const supportedMetrics = new Set([
    'Timestamp',
    'Documents',
    'Frames',
    'JSEventListeners',
    'Nodes',
    'LayoutCount',
    'RecalcStyleCount',
    'LayoutDuration',
    'RecalcStyleDuration',
    'ScriptDuration',
    'TaskDuration',
    'JSHeapUsedSize',
    'JSHeapTotalSize',
]);
/** @see https://w3c.github.io/webdriver-bidi/#rectangle-intersection */
function getIntersectionRect(clip, viewport) {
    // Note these will already be normalized.
    const x = Math.max(clip.x, viewport.x);
    const y = Math.max(clip.y, viewport.y);
    return {
        x,
        y,
        width: Math.max(Math.min(clip.x + clip.width, viewport.x + viewport.width) - x, 0),
        height: Math.max(Math.min(clip.y + clip.height, viewport.y + viewport.height) - y, 0),
    };
}
/**
 * @internal
 */
export function convertCookiesPartitionKeyFromPuppeteerToCdp(partitionKey) {
    if (partitionKey === undefined) {
        return undefined;
    }
    if (typeof partitionKey === 'string') {
        return {
            topLevelSite: partitionKey,
            hasCrossSiteAncestor: false,
        };
    }
    return {
        topLevelSite: partitionKey.sourceOrigin,
        hasCrossSiteAncestor: partitionKey.hasCrossSiteAncestor ?? false,
    };
}
//# sourceMappingURL=Page.js.map