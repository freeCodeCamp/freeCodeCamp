/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Browser as BrowserBase, } from '../api/Browser.js';
import { CDPSessionEvent } from '../api/CDPSession.js';
import { CdpBrowserContext } from './BrowserContext.js';
import { CdpExtension } from './Extension.js';
import { DevToolsTarget, InitializationStatus, OtherTarget, PageTarget, WorkerTarget, } from './Target.js';
import { TargetManager } from './TargetManager.js';
/**
 * @internal
 */
function isDevToolsPageTarget(url) {
    return url.startsWith('devtools://devtools/bundled/devtools_app.html');
}
/**
 * @internal
 */
export class CdpBrowser extends BrowserBase {
    protocol = 'cdp';
    static async _create(connection, contextIds, acceptInsecureCerts, defaultViewport, downloadBehavior, process, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets = true, networkEnabled = true, issuesEnabled = true, handleDevToolsAsPage = false, blocklist, allowlist) {
        const browser = new CdpBrowser(connection, contextIds, defaultViewport, process, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets, networkEnabled, issuesEnabled, handleDevToolsAsPage, blocklist, allowlist);
        if (allowlist) {
            const version = await browser.#getVersion();
            const majorVersion = parseInt(version.product.match(/\d+/)?.[0] ?? '0', 10);
            if (majorVersion < 149) {
                throw new Error('The allowlist option require Chrome 149 or greater.');
            }
        }
        if (acceptInsecureCerts) {
            await connection.send('Security.setIgnoreCertificateErrors', {
                ignore: true,
            });
        }
        await browser._attach(downloadBehavior);
        return browser;
    }
    #defaultViewport;
    #process;
    #connection;
    #closeCallback;
    #targetFilterCallback;
    #isPageTargetCallback;
    #defaultContext;
    #contexts = new Map();
    #networkEnabled = true;
    #issuesEnabled = true;
    #targetManager;
    #handleDevToolsAsPage = false;
    #extensions = new Map();
    constructor(connection, contextIds, defaultViewport, process, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets = true, networkEnabled = true, issuesEnabled = true, handleDevToolsAsPage = false, blocklist, allowlist) {
        super();
        this.#networkEnabled = networkEnabled;
        this.#issuesEnabled = issuesEnabled;
        this.#defaultViewport = defaultViewport;
        this.#process = process;
        this.#connection = connection;
        this.#closeCallback = closeCallback || (() => { });
        this.#targetFilterCallback =
            targetFilterCallback ||
                (() => {
                    return true;
                });
        this.#handleDevToolsAsPage = handleDevToolsAsPage;
        this.#setIsPageTargetCallback(isPageTargetCallback);
        connection.rejectEmulateNetworkConditionsCalls = Boolean((blocklist && blocklist.length > 0) ||
            (allowlist && allowlist.length > 0));
        this.#targetManager = new TargetManager(connection, this.#createTarget, this.#targetFilterCallback, waitForInitiallyDiscoveredTargets, blocklist, allowlist);
        this.#defaultContext = new CdpBrowserContext(this.#connection, this);
        for (const contextId of contextIds) {
            this.#contexts.set(contextId, new CdpBrowserContext(this.#connection, this, contextId));
        }
    }
    #emitDisconnected = () => {
        this.emit("disconnected" /* BrowserEvent.Disconnected */, undefined);
    };
    async _attach(downloadBehavior) {
        this.#connection.on(CDPSessionEvent.Disconnected, this.#emitDisconnected);
        if (downloadBehavior) {
            await this.#defaultContext.setDownloadBehavior(downloadBehavior);
        }
        this.#targetManager.on("targetAvailable" /* TargetManagerEvent.TargetAvailable */, this.#onAttachedToTarget);
        this.#targetManager.on("targetGone" /* TargetManagerEvent.TargetGone */, this.#onDetachedFromTarget);
        this.#targetManager.on("targetChanged" /* TargetManagerEvent.TargetChanged */, this.#onTargetChanged);
        this.#targetManager.on("targetDiscovered" /* TargetManagerEvent.TargetDiscovered */, this.#onTargetDiscovered);
        await this.#targetManager.initialize();
    }
    _detach() {
        this.#connection.off(CDPSessionEvent.Disconnected, this.#emitDisconnected);
        this.#targetManager.off("targetAvailable" /* TargetManagerEvent.TargetAvailable */, this.#onAttachedToTarget);
        this.#targetManager.off("targetGone" /* TargetManagerEvent.TargetGone */, this.#onDetachedFromTarget);
        this.#targetManager.off("targetChanged" /* TargetManagerEvent.TargetChanged */, this.#onTargetChanged);
        this.#targetManager.off("targetDiscovered" /* TargetManagerEvent.TargetDiscovered */, this.#onTargetDiscovered);
    }
    process() {
        return this.#process ?? null;
    }
    _targetManager() {
        return this.#targetManager;
    }
    #setIsPageTargetCallback(isPageTargetCallback) {
        this.#isPageTargetCallback =
            isPageTargetCallback ||
                ((target) => {
                    return (target.type() === 'page' ||
                        target.type() === 'background_page' ||
                        target.type() === 'webview' ||
                        (this.#handleDevToolsAsPage &&
                            target.type() === 'other' &&
                            isDevToolsPageTarget(target.url())));
                });
    }
    _getIsPageTargetCallback() {
        return this.#isPageTargetCallback;
    }
    async createBrowserContext(options = {}) {
        const { proxyServer, proxyBypassList, downloadBehavior } = options;
        const { browserContextId } = await this.#connection.send('Target.createBrowserContext', {
            proxyServer,
            proxyBypassList: proxyBypassList && proxyBypassList.join(','),
        });
        const context = new CdpBrowserContext(this.#connection, this, browserContextId);
        if (downloadBehavior) {
            await context.setDownloadBehavior(downloadBehavior);
        }
        this.#contexts.set(browserContextId, context);
        return context;
    }
    browserContexts() {
        return [this.#defaultContext, ...Array.from(this.#contexts.values())];
    }
    defaultBrowserContext() {
        return this.#defaultContext;
    }
    async _disposeContext(contextId) {
        if (!contextId) {
            return;
        }
        await this.#connection.send('Target.disposeBrowserContext', {
            browserContextId: contextId,
        });
        this.#contexts.delete(contextId);
    }
    #createTarget = (targetInfo, session) => {
        const { browserContextId } = targetInfo;
        const context = browserContextId && this.#contexts.has(browserContextId)
            ? this.#contexts.get(browserContextId)
            : this.#defaultContext;
        if (!context) {
            throw new Error('Missing browser context');
        }
        const createSession = (isAutoAttachEmulated) => {
            return this.#connection._createSession(targetInfo, isAutoAttachEmulated);
        };
        const otherTarget = new OtherTarget(targetInfo, session, context, this.#targetManager, createSession);
        if (targetInfo.url && isDevToolsPageTarget(targetInfo.url)) {
            return new DevToolsTarget(targetInfo, session, context, this.#targetManager, createSession, this.#defaultViewport ?? null);
        }
        if (this.#isPageTargetCallback(otherTarget)) {
            return new PageTarget(targetInfo, session, context, this.#targetManager, createSession, this.#defaultViewport ?? null);
        }
        if (targetInfo.type === 'service_worker' ||
            targetInfo.type === 'shared_worker') {
            return new WorkerTarget(targetInfo, session, context, this.#targetManager, createSession);
        }
        return otherTarget;
    };
    #onAttachedToTarget = async (target) => {
        if (target._isTargetExposed() &&
            (await target._initializedDeferred.valueOrThrow()) ===
                InitializationStatus.SUCCESS) {
            this.emit("targetcreated" /* BrowserEvent.TargetCreated */, target);
            target.browserContext().emit("targetcreated" /* BrowserContextEvent.TargetCreated */, target);
        }
    };
    #onDetachedFromTarget = async (target) => {
        target._initializedDeferred.resolve(InitializationStatus.ABORTED);
        target._isClosedDeferred.resolve();
        if (target._isTargetExposed() &&
            (await target._initializedDeferred.valueOrThrow()) ===
                InitializationStatus.SUCCESS) {
            this.emit("targetdestroyed" /* BrowserEvent.TargetDestroyed */, target);
            target.browserContext().emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */, target);
        }
    };
    #onTargetChanged = ({ target }) => {
        this.emit("targetchanged" /* BrowserEvent.TargetChanged */, target);
        target.browserContext().emit("targetchanged" /* BrowserContextEvent.TargetChanged */, target);
    };
    #onTargetDiscovered = (targetInfo) => {
        this.emit("targetdiscovered" /* BrowserEvent.TargetDiscovered */, targetInfo);
    };
    wsEndpoint() {
        return this.#connection.url();
    }
    async newPage(options) {
        return await this.#defaultContext.newPage(options);
    }
    async _createPageInContext(contextId, options) {
        const hasTargets = this.targets().filter(t => {
            return t.browserContext().id === contextId;
        }).length > 0;
        const windowBounds = options?.type === 'window' ? options.windowBounds : undefined;
        const { targetId } = await this.#connection.send('Target.createTarget', {
            url: 'about:blank',
            browserContextId: contextId || undefined,
            left: windowBounds?.left,
            top: windowBounds?.top,
            width: windowBounds?.width,
            height: windowBounds?.height,
            windowState: windowBounds?.windowState,
            // Works around crbug.com/454825274.
            newWindow: hasTargets && options?.type === 'window' ? true : undefined,
            background: options?.background,
        });
        const target = (await this.waitForTarget(t => {
            return t._targetId === targetId;
        }));
        if (!target) {
            throw new Error(`Missing target for page (id = ${targetId})`);
        }
        const initialized = (await target._initializedDeferred.valueOrThrow()) ===
            InitializationStatus.SUCCESS;
        if (!initialized) {
            throw new Error(`Failed to create target for page (id = ${targetId})`);
        }
        const page = await target.page();
        if (!page) {
            throw new Error(`Failed to create a page for context (id = ${contextId})`);
        }
        return page;
    }
    async _createDevToolsPage(pageTargetId) {
        const openDevToolsResponse = await this.#connection.send('Target.openDevTools', {
            targetId: pageTargetId,
        });
        return await this._getDevToolsTargetPage(openDevToolsResponse.targetId);
    }
    async _getDevToolsTargetPage(devtoolsTargetId) {
        const target = (await this.waitForTarget(t => {
            return t._targetId === devtoolsTargetId;
        }));
        if (!target) {
            throw new Error(`Missing target for DevTools page (id = ${devtoolsTargetId})`);
        }
        const initialized = (await target._initializedDeferred.valueOrThrow()) ===
            InitializationStatus.SUCCESS;
        if (!initialized) {
            throw new Error(`Failed to create target for DevTools page (id = ${devtoolsTargetId})`);
        }
        const page = await target.page();
        if (!page) {
            throw new Error(`Failed to create a DevTools Page for target (id = ${devtoolsTargetId})`);
        }
        return page;
    }
    async _hasDevToolsTarget(pageTargetId) {
        const response = await this.#connection.send('Target.getDevToolsTarget', {
            targetId: pageTargetId,
        });
        return response.targetId;
    }
    async installExtension(path) {
        const { id } = await this.#connection.send('Extensions.loadUnpacked', { path });
        this.#extensions.delete(id);
        return id;
    }
    async uninstallExtension(id) {
        await this.#connection.send('Extensions.uninstall', { id });
        // Currently sending the Extensions.uninstall command does not trigger
        // the Target.targetDestroyed event for service workers. This causes
        // flakiness in the extension tests.
        // TODO(nroscino): Remove this once the event is correctly emitted.
        const targetDestroyedPromises = [];
        for (const [targetId, targetInfo] of this._targetManager()
            .getDiscoveredTargetInfos()
            .entries()) {
            if (targetInfo.url.includes(id) && targetInfo.type === 'service_worker') {
                this._targetManager().addToIgnoreTarget(targetId);
                targetDestroyedPromises.push(new Promise(resolve => {
                    return setTimeout(() => {
                        this.#connection.emit('Target.targetDestroyed', {
                            targetId: targetId,
                        });
                        resolve(null);
                    }, 0);
                }));
            }
        }
        await Promise.all(targetDestroyedPromises);
        this.#extensions.delete(id);
    }
    async screens() {
        const { screenInfos } = await this.#connection.send('Emulation.getScreenInfos');
        return screenInfos;
    }
    async addScreen(params) {
        const { screenInfo } = await this.#connection.send('Emulation.addScreen', params);
        return screenInfo;
    }
    async removeScreen(screenId) {
        return await this.#connection.send('Emulation.removeScreen', { screenId });
    }
    async getWindowBounds(windowId) {
        const { bounds } = await this.#connection.send('Browser.getWindowBounds', {
            windowId: Number(windowId),
        });
        return bounds;
    }
    async setWindowBounds(windowId, windowBounds) {
        await this.#connection.send('Browser.setWindowBounds', {
            windowId: Number(windowId),
            bounds: windowBounds,
        });
    }
    targets() {
        return Array.from(this.#targetManager.getAvailableTargets().values()).filter(target => {
            return (target._isTargetExposed() &&
                target._initializedDeferred.value() === InitializationStatus.SUCCESS);
        });
    }
    target() {
        const browserTarget = this.targets().find(target => {
            return target.type() === 'browser';
        });
        if (!browserTarget) {
            throw new Error('Browser target is not found');
        }
        return browserTarget;
    }
    async version() {
        const version = await this.#getVersion();
        return version.product;
    }
    async userAgent() {
        const version = await this.#getVersion();
        return version.userAgent;
    }
    async close() {
        await this.#closeCallback.call(null);
        await this.disconnect();
    }
    disconnect() {
        this.#targetManager.dispose();
        this.#connection.dispose();
        this._detach();
        return Promise.resolve();
    }
    /**
     * @internal
     */
    get _connection() {
        return this.#connection;
    }
    get connected() {
        return !this.#connection._closed;
    }
    #getVersion() {
        return this.#connection.send('Browser.getVersion');
    }
    get debugInfo() {
        return {
            pendingProtocolErrors: this.#connection.getPendingProtocolErrors(),
        };
    }
    isNetworkEnabled() {
        return this.#networkEnabled;
    }
    async extensions() {
        const response = await this.#connection.send('Extensions.getExtensions');
        const extensionsMap = new Map();
        for (const currExtension of response.extensions) {
            if (this.#extensions.has(currExtension.id)) {
                extensionsMap.set(currExtension.id, this.#extensions.get(currExtension.id));
            }
            else {
                const newExtension = new CdpExtension(currExtension.id, currExtension.version, currExtension.name, currExtension.path, currExtension.enabled, this);
                extensionsMap.set(currExtension.id, newExtension);
            }
        }
        this.#extensions = extensionsMap;
        return this.#extensions;
    }
    isIssuesEnabled() {
        return this.#issuesEnabled;
    }
}
//# sourceMappingURL=Browser.js.map